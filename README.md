# Ajeet Upadhyay — Engineering & AI Research Portfolio

A modern, premium, highly responsive personal portfolio web application built with the **MERN** stack (MongoDB, Express.js, React, Node.js) for **Ajeet Upadhyay**, a 2nd-year B.Tech Electronics & Communication Engineering student at Ramdeobaba College of Engineering and Management, Nagpur.

---

## 🌟 Key Highlights & Design Aesthetic

- **Visual Direction**: Dark obsidian/slate futuristic aesthetic (`#07090e`), subtle glowing circuit patterns, electric blue (`#3b82f6`) and cyber cyan (`#06b6d4`) accents, and glassmorphic elements.
- **Interactive Hero Visual**: Custom HTML5 Canvas simulation rendering dynamic neural synaptic weights, electromagnetic RF signal wave propagation, and PCB circuit traces reacting to cursor interaction.
- **Interactive Beam Steering Simulation**: Real-time phased array radiation pattern calculator ($AF(\theta) = \sum e^{j (n k d \cos\theta + \beta_n)}$) with dynamic steering angle controls, target presets, and neural phase shift telemetry.
- **Strict Information Accuracy**:
  - **No CGPA** displayed (intentionally excluded per instructions).
  - Exact academic records: **Class 12: 87.1%**, **Class 10: 83.2%**.
  - Research Publication Goal: **MAPCON, IIM Nagpur** (accurately represented as an in-progress research initiative).
  - Verified achievements: **VNIT Hackathon**, **AI Ideathon**, **IEEE / College Research Internship Selection**, **Smart India Hackathon (SIH) 2nd Round Selection**.
  - Verified contact information:
    - **Email**: `ajeetupadhyay639@gmail.com`
    - **GitHub**: `https://github.com/ajeet785781`
    - **LinkedIn**: `https://linkedin.com/in/ajeet-upadhyay-73478b424`
    - **Location**: `Nagpur, Maharashtra`
    - No fabricated phone numbers or fake project links.

---

## 🏗️ Architecture

```
Website/
├── client/                     # React + Vite Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx               # Sticky glassmorphism nav with mobile drawer
│   │   │   ├── Hero.jsx                 # Hero section with verified details & socials
│   │   │   ├── HeroVisual.jsx           # Interactive Neural/RF Canvas
│   │   │   ├── About.jsx                # Split layout with 6 interest domains
│   │   │   ├── Skills.jsx               # Categorized skills (no fake percentage bars)
│   │   │   ├── Education.jsx            # Academic timeline (12th & 10th scores)
│   │   │   ├── Projects.jsx             # Project showcase
│   │   │   ├── ProjectModal.jsx         # Deep-dive technical modal
│   │   │   ├── Research.jsx             # Research showcase (MAPCON IIM Nagpur)
│   │   │   ├── BeamSteeringVisualizer.jsx # Interactive Phased Array simulation
│   │   │   ├── Achievements.jsx         # Hackathons & internship milestones
│   │   │   ├── Certifications.jsx       # Clean empty state ready for future updates
│   │   │   ├── Contact.jsx              # Direct channels + MERN message form
│   │   │   ├── Footer.jsx               # Copyright, links, and back-to-top
│   │   │   └── SocialIcons.jsx          # Custom vector SVG icons
│   │   ├── data/
│   │   │   └── portfolioData.js         # Centralized data model
│   │   ├── App.css                      # Complete styling & responsive media queries
│   │   ├── index.css                    # Design system tokens and base styles
│   │   └── main.jsx
│   ├── index.html                       # SEO meta tags, Google Fonts, and custom favicon
│   └── package.json
│
├── server/                     # Node.js + Express Backend
│   ├── models/
│   │   └── Contact.js                   # Mongoose Schema for inquiries
│   ├── data/
│   │   └── messages.json                # Local JSON fallback storage
│   ├── server.js                        # Express server with MongoDB & graceful fallback
│   └── package.json
│
└── package.json                # Root package with unified dev scripts
```

---

## 🚀 Running the Project Locally

### 1. Start the Frontend (Vite)
```bash
cd client
npm run dev
```
Runs at: **`http://localhost:5173/`**

### 2. Start the Backend (Express + MongoDB)
```bash
cd server
npm start
```
Runs at: **`http://localhost:5000/`**
- Health Check: `GET http://localhost:5000/api/health`
- Profile Data: `GET http://localhost:5000/api/profile`
- Contact Submissions: `POST http://localhost:5000/api/contact`
