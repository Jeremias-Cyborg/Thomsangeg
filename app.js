const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// 🚨 Debug: detect bad route paths before Express registers them
const originalUse = app.use;
app.use = function (path) {
  if (typeof path === "string" && path.startsWith("http")) {
    console.error("🚨 BAD ROUTE PATH DETECTED in app.use:", path);
  }
  return originalUse.apply(this, arguments);
};

const originalGet = app.get;
app.get = function (path) {
  if (typeof path === "string" && path.startsWith("http")) {
    console.error("🚨 BAD ROUTE PATH DETECTED in app.get:", path);
  }
  return originalGet.apply(this, arguments);
};

const originalPost = app.post;
app.post = function (path) {
  if (typeof path === "string" && path.startsWith("http")) {
    console.error("🚨 BAD ROUTE PATH DETECTED in app.post:", path);
  }
  return originalPost.apply(this, arguments);
};

// ================= CORS CONFIG =================
const corsOptions = {
  origin: [
    "https://www.thomsangeg.com", // Production
    "http://localhost:3000"       // Development
  ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// ================= MIDDLEWARE =================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ================= EMAIL CONFIG =================
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true, // true for port 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.log('SMTP connection error:', error);
  } else {
    console.log('SMTP server is ready to take messages');
  }
});

// ================= ROUTES =================
app.post('/send-email', async (req, res) => {
  const { user_name, user_email, user_phone, user_service_requested, user_message } = req.body;
  
  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      replyTo: user_email,
      subject: user_service_requested || 'New Contact Form Message',
      text: `Name: ${user_name}\nEmail: ${user_email}\nPhone: ${user_phone}\nService: ${user_service_requested}\nMessage: ${user_message}`
    });
    
    console.log('Email sent successfully');
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.log('Email send error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email.', error });
  }
});

// ================= START SERVER =================
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});





















