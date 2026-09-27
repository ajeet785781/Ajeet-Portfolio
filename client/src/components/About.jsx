import React from 'react';
import {
  Brain,
  Cpu,
  Layers,
  Radio,
  CircuitBoard,
  Globe,
  GraduationCap,
  Sparkles,
  Compass,
  ArrowRight,
  MapPin
} from 'lucide-react';
import { personalInfo, areasOfInterest } from '../data/portfolioData';

// Map icon strings to Lucide components
const iconMap = {
  Brain: Brain,
  Cpu: Cpu,
  Layers: Layers,
  Radio: Radio,
  CircuitBoard: CircuitBoard,
  Globe: Globe
};

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Profile Overview</span>
          </div>
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle">
            Bridging theoretical electronics with computational intelligence and hardware design.
          </p>
        </div>

        {/* Split Layout */}
        <div className="about-grid">
          {/* Left Column: Portrait & Narrative Card */}
          <div className="about-narrative-card card-glass card-glow-line">
            {/* Engineering Portrait Card */}
            <div className="about-photo-wrapper">
              <div className="about-photo-frame">
                <img
                  src="/profile.png"
                  alt={personalInfo.name}
                  className="about-portrait-img"
                />
                <div className="photo-scanline" />
                <div className="photo-corner-accent top-left" />
                <div className="photo-corner-accent top-right" />
                <div className="photo-corner-accent bottom-left" />
                <div className="photo-corner-accent bottom-right" />
              </div>

              <div className="photo-meta-row">
                <div className="photo-badge-item">
                  <span className="live-dot" />
                  <span>2nd Year ECE</span>
                </div>
                <div className="photo-badge-item">
                  <MapPin size={13} className="text-cyan" />
                  <span>Nagpur, Maharashtra</span>
                </div>
              </div>
            </div>

            <div className="narrative-badge">
              <GraduationCap size={16} className="text-cyan" />
              <span>Undergraduate Engineering</span>
            </div>

            <p className="about-paragraph primary-intro">
              {personalInfo.introduction}
            </p>

            <div className="about-career-box">
              <div className="career-icon-box">
                <Compass size={22} className="text-purple" />
              </div>
              <div>
                <h4 className="career-heading">Career Direction</h4>
                <p className="career-text">{personalInfo.careerDirection}</p>
              </div>
            </div>

            {/* Quick Engineering Spec Highlights */}
            <div className="specs-grid">
              <div className="spec-card">
                <span className="spec-label">Institution</span>
                <span className="spec-value">Ramdeobaba College of Engineering and Management</span>
                <span className="spec-sub">Nagpur, Maharashtra</span>
              </div>
              <div className="spec-card">
                <span className="spec-label">Academic Standing</span>
                <span className="spec-value">2nd Year B.Tech</span>
                <span className="spec-sub">Electronics & Communication</span>
              </div>
              <div className="spec-card">
                <span className="spec-label">Core Philosophy</span>
                <span className="spec-value">Hardware + AI Co-Design</span>
                <span className="spec-sub">Practical Projects & Research</span>
              </div>
              <div className="spec-card">
                <span className="spec-label">Target Publications</span>
                <span className="spec-value">MAPCON, IIM Nagpur</span>
                <span className="spec-sub">Deep Learning in RF Antennas</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Animated Engineering Card (Areas of Interest) */}
          <div className="about-interests-container">
            <div className="interests-header-bar">
              <div className="interests-title-group">
                <Layers size={18} className="text-cyan" />
                <h3 className="interests-title">Core Areas of Interest</h3>
              </div>
              <span className="badge badge-purple">6 Focus Domains</span>
            </div>

            <div className="interests-grid">
              {areasOfInterest.map((item, idx) => {
                const IconComponent = iconMap[item.icon] || Cpu;
                return (
                  <div key={idx} className="interest-item card-glass card-glow-line">
                    <div className="interest-icon-box">
                      <IconComponent size={22} />
                    </div>
                    <div className="interest-body">
                      <div className="interest-top-row">
                        <h4 className="interest-name">{item.title}</h4>
                        <span className="interest-num">0{idx + 1}</span>
                      </div>
                      <span className="interest-tagline">{item.tagline}</span>
                      <p className="interest-desc">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
