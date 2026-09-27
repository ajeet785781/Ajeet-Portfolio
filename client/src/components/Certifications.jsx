import React, { useState } from 'react';
import { Award, Clock, Sparkles, ShieldCheck, Maximize2, X, Medal } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Credentials</span>
          </div>
          <h2 className="section-title">
            Certifications & <span className="text-gradient">Credentials</span>
          </h2>
          <p className="section-subtitle">
            Verified competitive credentials, talent examinations, and engineering coursework.
          </p>
        </div>

        {/* Small & Compact Certificate Card */}
        <div className="cert-compact-container">
          {certificationsData.map((cert) => (
            <div key={cert.id} className="cert-compact-card card-glass card-glow-line">
              <div className="cert-compact-header">
                <div className="cert-compact-badges">
                  <span className="badge badge-emerald">
                    <Medal size={13} />
                    <span>{cert.badge}</span>
                  </span>
                  <span className="badge badge-cyan">{cert.institution}</span>
                </div>
                <span className="cert-year-badge">2024</span>
              </div>

              {/* Compact Certificate Image Frame */}
              <div
                className="cert-compact-frame"
                onClick={() => setSelectedCert(cert)}
                title="Click to view full certificate"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="cert-compact-img"
                />
                <div className="cert-compact-overlay">
                  <div className="cert-compact-zoom">
                    <Maximize2 size={15} />
                    <span>Enlarge</span>
                  </div>
                </div>
              </div>

              {/* Compact Information */}
              <div className="cert-compact-body">
                <h3 className="cert-compact-title">{cert.title}</h3>
                <p className="cert-compact-sub">{cert.subtitle}</p>
                <p className="cert-compact-desc">{cert.description}</p>
                <div className="cert-compact-meta">
                  <span>Recipient: <strong className="text-cyan">{cert.recipient}</strong></span>
                  <span>Date: {cert.date}</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                className="btn btn-secondary cert-compact-btn"
                onClick={() => setSelectedCert(cert)}
              >
                <Award size={14} className="text-cyan" />
                <span>View Full Certificate</span>
              </button>
            </div>
          ))}
        </div>

        {/* Future Certifications Notice - Compact */}
        <div className="cert-future-compact card-glass">
          <div className="cert-notice-icon-box">
            <Clock size={18} className="text-amber" />
          </div>
          <div className="cert-notice-text">
            <h4 className="notice-heading">Additional Technical Credentials In Progress</h4>
            <p className="notice-body">
              Specialized engineering certifications in AI/ML, VLSI design, and RF antenna engineering are currently in progress.
            </p>
          </div>
          <div className="cert-future-tags">
            <span className="badge badge-cyan">AI / ML</span>
            <span className="badge badge-purple">VLSI</span>
            <span className="badge badge-blue">Antenna & RF</span>
          </div>
        </div>

        {/* Fullscreen Certificate Lightbox Modal */}
        {selectedCert && (
          <div className="modal-backdrop" onClick={() => setSelectedCert(null)}>
            <div className="modal-card card-glass doc-lightbox-card" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div className="modal-badge-row">
                  <span className="badge badge-emerald">{selectedCert.badge}</span>
                  <span className="badge badge-cyan">{selectedCert.institution}</span>
                </div>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setSelectedCert(null)}
                  aria-label="Close dialog"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="doc-lightbox-body">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="doc-lightbox-img"
                />
              </div>

              <div className="modal-footer">
                <p className="doc-lightbox-caption">
                  <strong>{selectedCert.title} ({selectedCert.subtitle})</strong> — {selectedCert.description}
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setSelectedCert(null)}
                >
                  Close Certificate
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
