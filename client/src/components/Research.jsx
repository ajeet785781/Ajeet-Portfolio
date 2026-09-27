import React, { useState } from 'react';
import {
  Sparkles,
  BookOpen,
  Radio,
  Target,
  Cpu,
  Layers,
  Award,
  Clock,
  Compass,
  FileCheck,
  Maximize2,
  X
} from 'lucide-react';
import { researchData } from '../data/portfolioData';
import BeamSteeringVisualizer from './BeamSteeringVisualizer';

export default function Research() {
  const [showDocModal, setShowDocModal] = useState(false);

  return (
    <section id="research" className="section research-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Academic Investigation</span>
          </div>
          <h2 className="section-title">
            Research & <span className="text-gradient">Innovation</span>
          </h2>
          <p className="section-subtitle">
            Advancing the application of deep neural networks to electromagnetic beamforming and phased array antenna systems.
          </p>
        </div>

        {/* Research Showcase Layout */}
        <div className="research-layout-grid">
          {/* Left Column: Research Abstract & Metadata Card */}
          <div className="research-details-card card-glass card-glow-line">
            {/* Publication Goal Status Banner */}
            <div className="publication-goal-banner">
              <div className="pub-badge-group">
                <Target size={16} className="text-cyan" />
                <span className="pub-label">Publication Goal</span>
              </div>
              <span className="pub-venue">{researchData.publicationGoal}</span>
            </div>

            {/* Research Title */}
            <h3 className="research-topic-title">{researchData.topic}</h3>

            {/* Role & Domain Badges */}
            <div className="research-meta-tags">
              <div className="meta-tag-item">
                <span className="meta-tag-label">Role:</span>
                <span className="badge badge-purple">{researchData.role}</span>
              </div>
              <div className="meta-tag-item">
                <span className="meta-tag-label">Guide:</span>
                <span className="badge badge-cyan">{researchData.guide}</span>
              </div>
              <div className="meta-tag-item">
                <span className="meta-tag-label">Centre:</span>
                <span className="badge badge-blue">{researchData.affiliation}</span>
              </div>
              <div className="meta-tag-item">
                <span className="meta-tag-label">Stage:</span>
                <span className="badge badge-amber">In-Progress Research Activity</span>
              </div>
            </div>

            {/* Official Selection Document Feature Card */}
            {researchData.documentImage && (
              <div className="research-official-doc-card">
                <div className="doc-preview-left">
                  <FileCheck size={20} className="text-cyan" />
                  <div>
                    <h5 className="doc-card-title">Centre for Microsystems Research Selection</h5>
                    <span className="doc-card-sub">Session 2026-27 · Guide: {researchData.guide}</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm-doc"
                  onClick={() => setShowDocModal(true)}
                >
                  <Maximize2 size={13} />
                  <span>View Official Letter</span>
                </button>
              </div>
            )}

            {/* Core Explanation */}
            <div className="research-quote-box">
              <p className="research-quote-text">
                "{researchData.explanation}"
              </p>
            </div>

            {/* In-depth Overview */}
            <div className="research-body-text">
              <h4 className="research-subheading">Investigation Overview</h4>
              <p className="research-paragraph">{researchData.overview}</p>
            </div>

            {/* Research Pillars */}
            <div className="research-pillars-list">
              <h4 className="research-subheading">Key Focus Vectors</h4>
              <div className="pillars-grid">
                {researchData.keyPillars.map((pillar, idx) => (
                  <div key={idx} className="pillar-card">
                    <div className="pillar-num">0{idx + 1}</div>
                    <div className="pillar-info">
                      <h5 className="pillar-title">{pillar.title}</h5>
                      <p className="pillar-desc">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Accuracy Notice */}
            <div className="research-status-footnote">
              <Clock size={15} className="text-muted" />
              <span>
                Note: This work represents an active, ongoing research endeavor targeting presentation and review at {researchData.publicationGoal}.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Beam Steering Visualization */}
          <div className="research-visualizer-column">
            <div className="visualizer-intro-bar">
              <Radio size={18} className="text-cyan" />
              <div>
                <h4 className="vis-intro-heading">Real-Time Array Factor Simulation</h4>
                <p className="vis-intro-sub">
                  Adjust the angle slider below to observe neural-directed beamforming lobes.
                </p>
              </div>
            </div>

            <BeamSteeringVisualizer />
          </div>
        </div>

        {/* Official Document Lightbox Modal */}
        {showDocModal && (
          <div className="modal-backdrop" onClick={() => setShowDocModal(false)}>
            <div className="modal-card card-glass doc-lightbox-card" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div className="modal-badge-row">
                  <span className="badge badge-cyan">Official Research Selection</span>
                  <span className="badge badge-purple">Centre for Microsystems (Session 2026-27)</span>
                </div>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setShowDocModal(false)}
                  aria-label="Close dialog"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="doc-lightbox-body">
                <img
                  src={researchData.documentImage}
                  alt="Official Research Internship Selection Letter - Centre for Microsystems"
                  className="doc-lightbox-img"
                />
              </div>

              <div className="modal-footer">
                <p className="doc-lightbox-caption">
                  Official Notification: <em>Selected Students for Part-Time Research Internship under Centre for Microsystems</em>. Project: <strong>Beam Steering of antenna using ML</strong> | Student: <strong>Ajeet Upadhyay (EC)</strong> | Guide: <strong>Dr. Ankita Harkare</strong>.
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setShowDocModal(false)}
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
