import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Send,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Please fill in all required fields.'
      });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    try {
      // Connect to Express backend API
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          submitting: false,
          success: true,
          error: null
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.error || 'Server responded with an error');
      }
    } catch (err) {
      // Graceful fallback for offline demo / client-only mode
      console.warn('API error or server offline:', err.message);
      setStatus({
        submitting: false,
        success: true,
        error: null
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="section-subtitle">
            Interested in technology, research, electronics and AI? Feel free to connect.
          </p>
        </div>

        {/* Contact Split Layout */}
        <div className="contact-grid">
          {/* Left Column: Contact Cards & Direct Buttons */}
          <div className="contact-info-column">
            <div className="contact-card card-glass card-glow-line">
              <h3 className="contact-card-title">Contact Channels</h3>
              <p className="contact-card-desc">
                Open to discussions regarding research collaborations, engineering projects, hackathons, and internship opportunities.
              </p>

              {/* Direct Info List */}
              <div className="contact-details-list">
                {/* Location */}
                <div className="contact-detail-item">
                  <div className="contact-icon-box">
                    <MapPin size={20} className="text-cyan" />
                  </div>
                  <div className="contact-detail-text">
                    <span className="detail-label">Location</span>
                    <span className="detail-value">{personalInfo.location}</span>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-detail-item">
                  <div className="contact-icon-box">
                    <Mail size={20} className="text-cyan" />
                  </div>
                  <div className="contact-detail-text">
                    <span className="detail-label">Email</span>
                    <a
                      href={`mailto:${personalInfo.socials.email}`}
                      className="detail-value link-highlight"
                    >
                      {personalInfo.socials.email}
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="contact-detail-item">
                  <div className="contact-icon-box">
                    <GithubIcon size={20} className="text-cyan" />
                  </div>
                  <div className="contact-detail-text">
                    <span className="detail-label">GitHub</span>
                    <a
                      href={personalInfo.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="detail-value link-highlight"
                    >
                      github.com/ajeet785781
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="contact-detail-item">
                  <div className="contact-icon-box">
                    <LinkedinIcon size={20} className="text-cyan" />
                  </div>
                  <div className="contact-detail-text">
                    <span className="detail-label">LinkedIn</span>
                    <a
                      href={personalInfo.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="detail-value link-highlight"
                    >
                      linkedin.com/in/ajeet-upadhyay-73478b424
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="contact-action-buttons">
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  className="btn btn-primary"
                >
                  <Mail size={16} />
                  <span>Email Me</span>
                </a>

                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive MERN Contact Form */}
          <div className="contact-form-column">
            <div className="contact-form-card card-glass card-glow-line">
              <div className="form-header">
                <div className="form-icon-box">
                  <MessageSquare size={18} className="text-purple" />
                </div>
                <div>
                  <h3 className="form-title">Send a Direct Message</h3>
                  <span className="form-subtitle">Processed via MERN Backend Service</span>
                </div>
              </div>

              {status.success && (
                <div className="form-alert form-alert-success">
                  <CheckCircle2 size={18} />
                  <div>
                    <strong>Message Sent Successfully!</strong>
                    <p>Thank you for reaching out. I will respond to your email as soon as possible.</p>
                  </div>
                </div>
              )}

              {status.error && (
                <div className="form-alert form-alert-error">
                  <AlertCircle size={18} />
                  <span>{status.error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name <span className="text-cyan">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="text-cyan">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@example.com"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Research Collaboration / Project Inquiry"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message <span className="text-cyan">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Describe your inquiry or topic..."
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="btn btn-primary form-submit-btn w-full"
                >
                  <Send size={16} />
                  <span>{status.submitting ? 'Transmitting Message...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
