import React, { useState } from 'react';
import {
  Trophy,
  Award,
  Sparkles,
  CheckCircle,
  Lightbulb,
  Building,
  Flag,
  FileCheck,
  Maximize2,
  X
} from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

const getAchievementIcon = (type) => {
  if (type.includes('National')) return Flag;
  if (type.includes('Ideathon')) return Lightbulb;
  if (type.includes('Research')) return Building;
  return Trophy;
};

export default function Achievements() {
  const [selectedDoc, setSelectedDoc] = useState(null);

  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Honors & Initiatives</span>
          </div>
          <h2 className="section-title">
            Achievements & <span className="text-gradient">Activities</span>
          </h2>
          <p className="section-subtitle">
            Competitive hackathons, innovation ideathons, and research selection milestones.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="achievements-grid">
          {achievementsData.map((item) => {
            const IconComponent = getAchievementIcon(item.type);
            return (
              <div
                key={item.id}
                className="achievement-card card-glass card-glow-line"
              >
                <div className="achievement-card-top">
                  <div className="achievement-icon-box">
                    <IconComponent size={22} className="achievement-icon" />
                  </div>
                  <span className="badge badge-purple">{item.tag}</span>
                </div>

                <div className="achievement-body">
                  <span className="achievement-type">{item.type}</span>
                  <h3 className="achievement-title">{item.title}</h3>

                  <div className="achievement-status-badge">
                    <CheckCircle size={14} className="text-cyan" />
                    <span>{item.statusText}</span>
                  </div>

                  <p className="achievement-description">{item.description}</p>

                  {/* Thumbnail Preview if available */}
                  {item.documentImage && (
                    <div
                      className="achievement-thumb-box"
                      onClick={() => setSelectedDoc(item)}
                    >
                      <img
                        src={item.documentImage}
                        alt={item.title}
                        className="achievement-thumb-img"
                      />
                      <span className="achievement-thumb-tag">
                        {item.type === 'Hackathon' || item.type === 'Ideathon' ? 'View Certificate' : 'View Selection Letter'}
                      </span>
                    </div>
                  )}

                  {/* Document preview button */}
                  {item.documentImage && (
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm-doc"
                      style={{ marginTop: '0.85rem', width: 'fit-content' }}
                      onClick={() => setSelectedDoc(item)}
                    >
                      <Award size={14} className="text-cyan" />
                      <span>{item.type === 'Hackathon' || item.type === 'Ideathon' ? 'View Certificate' : 'View Selection Letter'}</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Document / Certificate Lightbox Modal */}
        {selectedDoc && (
          <div className="modal-backdrop" onClick={() => setSelectedDoc(null)}>
            <div className="modal-card card-glass doc-lightbox-card" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div className="modal-badge-row">
                  <span className="badge badge-cyan">{selectedDoc.title}</span>
                  <span className="badge badge-purple">{selectedDoc.statusText}</span>
                </div>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setSelectedDoc(null)}
                  aria-label="Close dialog"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="doc-lightbox-body">
                <img
                  src={selectedDoc.documentImage}
                  alt={selectedDoc.title}
                  className="doc-lightbox-img"
                />
              </div>

              <div className="modal-footer">
                <p className="doc-lightbox-caption">
                  {selectedDoc.certificateTitle || selectedDoc.description}
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setSelectedDoc(null)}
                >
                  Close Document
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
