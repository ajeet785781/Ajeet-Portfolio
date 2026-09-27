import React from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education <span className="text-gradient">Timeline</span>
          </h2>
          <p className="section-subtitle">
            Formal engineering education and academic performance trajectory.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="education-timeline">
          {educationData.map((item, idx) => (
            <div key={idx} className="timeline-item">
              {/* Timeline marker with glowing circle */}
              <div className="timeline-marker">
                <div className="marker-dot">
                  {idx === 0 ? <GraduationCap size={16} /> : <Award size={16} />}
                </div>
                {idx < educationData.length - 1 && <div className="marker-line" />}
              </div>

              {/* Timeline Card */}
              <div className="timeline-card card-glass card-glow-line">
                <div className="timeline-card-header">
                  <div className="degree-info">
                    <span className="education-level-badge">{item.level}</span>
                    <h3 className="timeline-degree">{item.degree}</h3>
                    <h4 className="timeline-institution">{item.institution}</h4>
                  </div>
                  <div className="timeline-period-badge">
                    <Calendar size={14} />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Score badge if available (12th / 10th) */}
                {item.score && (
                  <div className="academic-score-banner">
                    <span className="score-label">Board Examination Result</span>
                    <span className="score-value">{item.score}</span>
                  </div>
                )}

                {/* Details list */}
                {item.highlights && (
                  <ul className="timeline-highlights">
                    {item.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="highlight-item">
                        <CheckCircle2 size={15} className="highlight-icon" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
