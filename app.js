// ================= MODULES =================
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// ================= CORS CONFIG =================
const corsOptions = {
  origin: [
    "https://www.thomsangeg.com",
    "https://thomsangeg.com",
    "http://localhost:3000"
  ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

// Apply CORS globally
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// ================= MIDDLEWARE =================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// ================= ROUTES =================

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Send email route
app.post('/send-email', async (req, res) => {
  const { user_name, user_email, user_phone, user_service_requested, user_message } = req.body;

  // Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    },
    tls: { rejectUnauthorized: false }
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      replyTo: user_email,
      subject: user_service_requested || 'New Contact Form Message',
      text: `Name: ${user_name}\nEmail: ${user_email}\nPhone: ${user_phone}\nService: ${user_service_requested}\nMessage: ${user_message}`
    });

    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email.', error });
  }
});

// ================= START SERVER =================
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});







