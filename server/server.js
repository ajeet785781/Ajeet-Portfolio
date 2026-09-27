const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const Contact = require('./models/Contact');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ajeet_portfolio';

// Fallback data directory if MongoDB is offline
const DATA_DIR = path.join(__dirname, 'data');
const FALLBACK_FILE = path.join(DATA_DIR, 'messages.json');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(FALLBACK_FILE)) {
  fs.writeFileSync(FALLBACK_FILE, JSON.stringify([], null, 2), 'utf8');
}

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Track DB status
let isDbConnected = false;

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  serverSelectionTimeoutMS: 2500
})
  .then(() => {
    isDbConnected = true;
    console.log('✅ Connected to MongoDB successfully.');
  })
  .catch((err) => {
    isDbConnected = false;
    console.warn('⚠️ MongoDB connection could not be established. Running in offline file-storage mode for contact inquiries.', err.message);
  });

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'Ajeet Upadhyay Portfolio API',
    database: isDbConnected ? 'MongoDB (connected)' : 'Local JSON Storage (fallback active)'
  });
});

// Profile overview endpoint (accurate data according to specification)
app.get('/api/profile', (req, res) => {
  res.json({
    name: 'Ajeet Upadhyay',
    tagline: 'B.Tech ECE Student | AI/ML & VLSI Enthusiast',
    location: 'Nagpur, Maharashtra',
    college: 'Ramdeobaba College of Engineering and Management, Nagpur',
    program: 'B.Tech – Electronics & Communication Engineering',
    year: '2nd Year',
    academics: {
      class12: '87.1%',
      class10: '83.2%'
    },
    socials: {
      github: 'https://github.com/ajeet785781',
      linkedin: 'https://linkedin.com/in/ajeet-upadhyay-73478b424',
      email: 'ajeetupadhyay639@gmail.com'
    },
    research: {
      topic: 'Beam Steering using Deep Learning Algorithm',
      domain: 'AI/ML + Antenna/RF + Wireless Communication',
      role: 'Student Researcher / Project Contributor',
      publicationGoal: 'MAPCON, IIM Nagpur',
      status: 'In-progress Research Activity'
    }
  });
});

// Submit contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide name, email, and message.'
      });
    }

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.'
      });
    }

    const contactData = {
      name: name.trim(),
      email: email.trim(),
      subject: (subject || 'Portfolio Inquiry').trim(),
      message: message.trim(),
      createdAt: new Date().toISOString()
    };

    if (isDbConnected) {
      const newContact = new Contact(contactData);
      await newContact.save();
    } else {
      // Append to JSON fallback
      const existing = JSON.parse(fs.readFileSync(FALLBACK_FILE, 'utf8') || '[]');
      existing.push({ id: Date.now(), ...contactData });
      fs.writeFileSync(FALLBACK_FILE, JSON.stringify(existing, null, 2), 'utf8');
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! Your message has been received successfully.'
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while processing your message. Please try again or reach out directly via email.'
    });
  }
});

// List contact inquiries
app.get('/api/contact', async (req, res) => {
  try {
    if (isDbConnected) {
      const messages = await Contact.find().sort({ createdAt: -1 }).limit(50);
      return res.json({ success: true, data: messages });
    } else {
      const messages = JSON.parse(fs.readFileSync(FALLBACK_FILE, 'utf8') || '[]');
      return res.json({ success: true, data: messages });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: 'Could not fetch messages' });
  }
});

// Serve client production build
const distPath = path.join(__dirname, '..', 'client', 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Portfolio backend server running on port ${PORT}`);
});
