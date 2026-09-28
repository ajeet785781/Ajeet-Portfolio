import React, { useEffect } from 'react';
import { X, Cpu, Check, Layers, Clock, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card card-glass" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Bar */}
        <div className="modal-header">
          <div className="modal-badge-row">
            <span className="badge badge-cyan">{project.category}</span>
            <span className="badge badge-purple">{project.badge}</span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="modal-body">
          <h3 className="modal-title">{project.title}</h3>
          <p className="modal-lead">{project.shortDescription}</p>

          {/* Real Simulation Plot if available */}
          {project.simulationImage && (
            <div className="modal-section modal-simulation-box">
              <div className="simulation-preview-header">
                <span className="badge badge-cyan">Ansoft HFSS Solved Simulation</span>
                <span className="sim-metric-tag">Resonant Dip: S(1,1) = -27.5 dB</span>
              </div>
              <div className="simulation-image-frame">
                <img
                  src={project.simulationImage}
                  alt="Ansoft HFSS Antenna Simulation Plot"
                  className="modal-simulation-img"
                />
              </div>
              <p className="simulation-caption">
                Actual Ansoft HFSS Return Loss (S11) simulation sweep showing high-efficiency impedance matching and resonant frequency response.
              </p>
            </div>
          )}

          {/* Official Research Appointment Letter if available */}
          {project.documentImage && (
            <div className="modal-section modal-simulation-box">
              <div className="simulation-preview-header">
                <span className="badge badge-cyan">Centre for Microsystems Appointment Letter</span>
                <span className="sim-metric-tag">Guide: {project.guide || 'Dr. Ankita Harkare'}</span>
              </div>
              <div className="simulation-image-frame" style={{ maxHeight: '360px', overflowY: 'auto' }}>
                <img
                  src={project.documentImage}
                  alt="Official Research Selection Letter - Centre for Microsystems"
                  className="modal-simulation-img"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <p className="simulation-caption">
                Official Department Notification (Session 2026-27): Selected for Part-Time Research Internship on <strong>Beam Steering of antenna using ML</strong> under the Centre for Microsystems, Department of Electronics Engineering, guided by Dr. Ankita Harkare.
              </p>
            </div>
          )}

          {/* Trophy & Award Image if available */}
          {project.trophyImage && (
            <div className="modal-section modal-simulation-box">
              <div className="simulation-preview-header">
                <span className="badge badge-purple">Award & Recognition</span>
                <span className="sim-metric-tag">{project.badge || 'Trophy'}</span>
              </div>
              <div className="simulation-image-frame" style={{ maxHeight: '360px', overflowY: 'auto' }}>
                <img
                  src={project.trophyImage}
                  alt="Award & Recognition Trophy"
                  className="modal-simulation-img"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <p className="simulation-caption">
                Competition Recognition Trophy and Memento.
              </p>
            </div>
          )}

          <div className="modal-section">
            <h4 className="modal-subtitle">Project Architecture & Overview</h4>
            <p className="modal-desc">{project.fullDescription}</p>
          </div>

          {/* Technical Specifications */}
          {project.specs && (
            <div className="modal-section">
              <h4 className="modal-subtitle">Technical Details</h4>
              <div className="modal-specs-grid">
                {project.specs.map((item, idx) => (
                  <div key={idx} className="modal-spec-card">
                    <span className="modal-spec-label">{item.label}</span>
                    <span className="modal-spec-val">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stack Chips */}
          <div className="modal-section">
            <h4 className="modal-subtitle">Technology Stack</h4>
            <div className="tech-chips-wrap">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="badge badge-blue">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <div className="modal-status-indicator">
            <Clock size={16} className="text-amber" />
            <span>Status: {project.status}</span>
          </div>

          <div className="modal-actions">
            {/* Adhering strictly: no fake links, clear 'Details Coming Soon' button */}
            <button type="button" className="btn btn-secondary btn-disabled" disabled>
              <span>Details Coming Soon</span>
            </button>
            <button type="button" className="btn btn-outline" onClick={onClose}>
              <span>Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
