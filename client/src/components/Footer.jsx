import React from 'react';
import {
  Mail,
  ArrowUp,
  Cpu,
  Heart
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-top-row">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Cpu size={20} className="text-cyan" />
              <span className="footer-name">{personalInfo.name}</span>
            </div>
            <p className="footer-tagline">{personalInfo.title}</p>
            <span className="footer-location">Nagpur, Maharashtra</span>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">Navigation</h4>
            <div className="footer-links-grid">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#education">Education</a>
              <a href="#projects">Projects</a>
              <a href="#research">Research</a>
              <a href="#achievements">Achievements</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-social-col">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-social-links">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-item"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-item"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.socials.email}`}
                className="footer-social-item"
                aria-label="Email"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copy">
            © 2026 {personalInfo.name}. All rights reserved.
          </p>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
