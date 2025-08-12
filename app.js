const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Send index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Corporate email transporter setup
const transporter = nodemailer.createTransport({
  host: 'smtp.panel247.com',
  port: 465, // try 587 if you get connection errors
  secure: true, // true for port 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Verify SMTP connection
transporter.verify(function(error, success) {
  if (error) {
    console.log('SMTP connection error:', error);
  } else {
    console.log('SMTP server is ready to take messages');
  }
});


app.post('/send-email', async (req, res) => {
  const { user_name, user_email,user_phone, user_service_requested, user_message } = req.body;
  
  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER, // must match SMTP user
      to: process.env.SMTP_USER, // or your desired recipient
      replyTo: user_email, // client's email for reply
      subject: user_service_requested || 'New Contact Form Message',
      text: `Name: ${user_name}\nEmail: ${user_email}\nPhone: ${user_phone}\nService: ${user_service_requested}\nMessage: ${user_message}`
    });
    
    console.log('Email sent successfully');
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Failed to send email.', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});





















