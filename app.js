// ================= MODULES =================
const express = require('express');
const compression = require('compression');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// ================= COMPRESSION =================
// Gzip all responses. Reduces bootstrap.min.css from 160KB → ~25KB over the wire.
// Threshold: compress anything over 1KB (below that, overhead outweighs savings).
app.use(compression({ threshold: 1024 }));

// ================= SECURITY HEADERS =================
// These are checked by Lighthouse and affect the "Best Practices" score.
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    next();
});

// ================= CORS =================
const allowedOrigins = [
    'https://www.thomsangeg.com',
    'https://thomsangeg.com',
    'http://localhost:3000'
];

app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(204);
    }
    next();
});

// ================= STATIC FILES + CACHE CONTROL =================
// Per-directory cache policies — mount specific paths first so their headers
// take precedence before the catch-all express.static at the bottom.

// Images: 30-day cache. Images are the largest assets and rarely change.
app.use('/img', express.static(path.join(__dirname, 'public', 'img'), {
    maxAge: '30d',
    etag: true,
    lastModified: true,
    immutable: false
}));

// CSS + JS: 7-day cache. Not content-addressed, so avoid "immutable".
// ETag lets the browser revalidate cheaply (304 Not Modified) after expiry.
app.use('/css', express.static(path.join(__dirname, 'public', 'css'), {
    maxAge: '7d',
    etag: true,
    lastModified: true
}));

app.use('/js', express.static(path.join(__dirname, 'public', 'js'), {
    maxAge: '7d',
    etag: true,
    lastModified: true
}));

// Vendor libraries: 30-day cache. These never change between deploys.
app.use('/lib', express.static(path.join(__dirname, 'public', 'lib'), {
    maxAge: '30d',
    etag: true,
    lastModified: true
}));

// HTML pages: no-cache so content updates (SEO changes, JSON-LD, etc.) are
// seen immediately. ETag still allows 304s so there's no wasted bandwidth.
app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: 0,
    etag: true,
    lastModified: true
}));

// ================= BODY PARSING =================
// Express 5 ships json/urlencoded built-in — body-parser is not needed.
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// ================= RATE LIMITING =================
// Simple in-memory sliding-window limiter for the email endpoint.
// Prevents a single IP from hammering the SMTP server and degrading TTFB
// for legitimate users under load.
const emailRequests = new Map();
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 5;            // max 5 form submissions per IP per window

function emailRateLimiter(req, res, next) {
    const ip = req.ip || req.socket.remoteAddress;
    const now = Date.now();
    const record = emailRequests.get(ip);

    if (!record || now - record.windowStart > WINDOW_MS) {
        emailRequests.set(ip, { windowStart: now, count: 1 });
        return next();
    }

    if (record.count >= MAX_REQUESTS) {
        return res.status(429).json({
            success: false,
            message: 'Too many requests. Please wait before submitting again.'
        });
    }

    record.count++;
    next();
}

// Periodically purge stale rate-limit records to avoid memory growth.
setInterval(() => {
    const cutoff = Date.now() - WINDOW_MS;
    for (const [ip, record] of emailRequests.entries()) {
        if (record.windowStart < cutoff) emailRequests.delete(ip);
    }
}, WINDOW_MS);

// ================= NODEMAILER TRANSPORTER =================
// Create ONE transporter at startup with connection pooling.
// Previously this was created inside the route handler — that opened a new
// SMTP TCP connection on every form submission, adding ~200-500ms latency.
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    },
    tls: { rejectUnauthorized: false },
    pool: true,          // reuse SMTP connections across requests
    maxConnections: 5,   // cap concurrent connections
    maxMessages: 100     // recycle connection after 100 sends
});

// ================= ROUTES =================

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Redirect old WordPress /home URL to homepage
// This tells Google permanently that /home has moved to the real homepage,
// clearing the duplicate canonical issue faster.
app.get('/home', (req, res) => {
    res.redirect(301, 'https://www.thomsangeg.com/');
});

app.post('/send-email', emailRateLimiter, async (req, res) => {
    const { user_name, user_email, user_phone, user_service_requested, user_message } = req.body;

    if (!user_name || !user_email) {
        return res.status(400).json({ success: false, message: 'Name and email are required.' });
    }

    // Basic email format check — prevents obviously malformed addresses
    // from reaching the SMTP server and causing a slow rejection.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user_email)) {
        return res.status(400).json({ success: false, message: 'Invalid email address.' });
    }

    try {
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: process.env.SMTP_USER,
            replyTo: user_email,
            subject: user_service_requested || 'New Contact Form Message',
            text: `Name: ${user_name}\nEmail: ${user_email}\nPhone: ${user_phone || 'N/A'}\nService: ${user_service_requested || 'N/A'}\nMessage: ${user_message || ''}`
        });

        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        // Log internally but never expose error details to the client —
        // stack traces can leak SMTP credentials or server internals.
        console.error('Email send error:', error.message);
        res.status(500).json({ success: false, message: 'Failed to send email. Please try again.' });
    }
});

// ================= 404 HANDLER =================
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// ================= START SERVER =================
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
