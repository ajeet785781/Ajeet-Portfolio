import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Research from './components/Research';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="portfolio-app">
      {/* Background Engineering Grid and Circuit Accents */}
      <div className="bg-grid-pattern" aria-hidden="true" />

      {/* 1. Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 2. Hero */}
        <Hero />

        {/* 3. About */}
        <About />

        {/* 4. Skills */}
        <Skills />

        {/* 5. Education */}
        <Education />

        {/* 6. Projects */}
        <Projects />

        {/* 7. Research */}
        <Research />

        {/* 8. Achievements & Activities */}
        <Achievements />

        {/* 9. Certifications */}
        <Certifications />

        {/* 10. Contact */}
        <Contact />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
