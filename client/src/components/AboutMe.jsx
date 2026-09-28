import React from 'react';
import { Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function AboutMe() {
  return (
    <section id="about-me" className="section about-me-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Profile Highlights</span>
          </div>
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
        </div>
        <div className="about-me-grid">
          <div className="card-glass card-glow-line spec-card">
            <h4 className="spec-label">Degree</h4>
            <p className="spec-value">B.Tech ECE</p>
          </div>
          <div className="card-glass card-glow-line spec-card">
            <h4 className="spec-label">Interests</h4>
            <p className="spec-value">AI/ML &amp; VLSI/Electronics</p>
          </div>
          <div className="card-glass card-glow-line spec-card">
            <h4 className="spec-label">Research</h4>
            <p className="spec-value">Beam Steering using Deep Learning</p>
          </div>
          <div className="card-glass card-glow-line spec-card">
            <h4 className="spec-label">Technical Club</h4>
            <p className="spec-value">Electronics Domain</p>
          </div>
        </div>
      </div>
    </section>
  );
}
