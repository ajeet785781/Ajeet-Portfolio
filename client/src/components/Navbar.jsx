import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Cpu, Radio, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'education', 'projects', 'research', 'achievements', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Research', href: '#research', id: 'research' },
    { label: 'Achievements', href: '#achievements', id: 'achievements' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand / Logo */}
        <a href="#home" className="nav-logo" onClick={(e) => handleLinkClick(e, '#home')}>
          <div className="logo-avatar-box">
            <img src="/profile.png" alt={personalInfo.name} className="nav-avatar-img" />
            <span className="nav-avatar-glow" />
          </div>
          <div className="logo-text-group">
            <span className="logo-name">{personalInfo.name}</span>
            <span className="logo-badge">ECE · AI/ML</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-desktop" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.id} className="nav-item">
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label}
                  {activeSection === link.id && <span className="nav-indicator" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="nav-actions">
          <a
            href="#contact"
            className="btn btn-primary nav-cta-btn"
            onClick={(e) => handleLinkClick(e, '#contact')}
          >
            <span>Let's Connect</span>
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`mobile-drawer ${isOpen ? 'mobile-drawer-open' : ''}`}
        aria-hidden={!isOpen}
      >
        <div className="mobile-drawer-backdrop" onClick={() => setIsOpen(false)} />
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-header">
            <div className="mobile-brand">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <img src="/profile.png" alt={personalInfo.name} className="nav-avatar-img" />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className="logo-name">{personalInfo.name}</span>
                  <span className="badge badge-cyan" style={{ width: 'fit-content' }}>2nd Year ECE</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="mobile-drawer-links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                <span>{link.label}</span>
                {activeSection === link.id && <span className="mobile-active-dot" />}
              </a>
            ))}
          </div>

          <div className="mobile-drawer-footer">
            <a
              href="#contact"
              className="btn btn-primary w-full"
              onClick={(e) => handleLinkClick(e, '#contact')}
            >
              <span>Let's Connect</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
