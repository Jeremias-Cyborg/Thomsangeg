// ================= DEBUG WRAPPER – MUST BE FIRST =================
const express = require('express');
const app = express();

// Wrap all route methods to detect bad paths
['use', 'get', 'post', 'put', 'delete', 'patch', 'options'].forEach(method => {
  const original = app[method];
  app[method] = function(path) {
    if (typeof path === 'string' && path.startsWith('http')) {
      console.error(`🚨 BAD ROUTE PATH DETECTED in app.${method}:`, path);
    }
    return original.apply(this, arguments);
  }
});

// ================= MODULES =================
const bodyParser = require('body-parser');
const cors = require("cors");
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

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
  secure: true,
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
















