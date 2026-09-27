import React from 'react';
import {
  MapPin,
  ArrowRight,
  Send,
  Mail,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import HeroVisual from './HeroVisual';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Text & Call to Actions */}
        <div className="hero-content">
          {/* Status & Location Pill */}
          <div className="hero-badges">
            <div className="hero-avatar-pill">
              <img src="/profile.png" alt={personalInfo.name} className="hero-avatar-img" />
              <span className="hero-avatar-name">Ajeet</span>
            </div>
            <div className="location-pill">
              <MapPin size={15} className="location-icon" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="status-pill">
              <span className="live-dot" />
              <span>2nd Year B.Tech ECE</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="hero-heading">
            Hi, I'm <span className="hero-name-gradient">{personalInfo.name}</span>
          </h1>

          {/* Subtitle / Tagline */}
          <h2 className="hero-tagline">{personalInfo.title}</h2>

          {/* Short Description */}
          <p className="hero-description">{personalInfo.heroDescription}</p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-primary hero-btn"
              onClick={() => scrollTo('projects')}
            >
              <span>Explore My Work</span>
              <ArrowRight size={17} />
            </button>

            <button
              type="button"
              className="btn btn-secondary hero-btn"
              onClick={() => scrollTo('contact')}
            >
              <Send size={16} />
              <span>Let's Connect</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            <div className="social-links-row">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalInfo.socials.email}`}
                className="social-btn"
                aria-label="Send Email"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Technical Focus Chips */}
          <div className="hero-focus-chips">
            <span className="focus-chip">AI/ML</span>
            <span className="focus-chip">Deep Learning</span>
            <span className="focus-chip">VLSI</span>
            <span className="focus-chip">Antenna & RF</span>
            <span className="focus-chip">Embedded Hardware</span>
          </div>
        </div>

        {/* Right Column: Abstract Technology Visual */}
        <div className="hero-visual-column">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
