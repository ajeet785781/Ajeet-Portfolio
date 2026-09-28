import React from 'react';
import {
  Brain,
  Cpu,
  Layers,
  Radio,
  CircuitBoard,
  Globe,
  Sparkles
} from 'lucide-react';
import { technicalInterests } from '../data/portfolioData';

const iconMap = {
  Brain: Brain,
  Cpu: Cpu,
  Layers: Layers,
  Radio: Radio,
  CircuitBoard: CircuitBoard,
  Globe: Globe,
};

export default function TechnicalInterests() {
  return (
    <section id="technical-interests" className="section technical-interests-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Technical Interests</span>
          </div>
          <h2 className="section-title">
            My <span className="text-gradient">Focus Areas</span>
          </h2>
          <p className="section-subtitle">
            Exploring core domains that blend hardware and intelligent software.
          </p>
        </div>
        <div className="interests-grid">
          {technicalInterests.map((item, idx) => {
            const Icon = iconMap[item.icon] || Cpu;
            return (
              <div key={idx} className="interest-item card-glass card-glow-line">
                <div className="interest-icon-box">
                  <Icon size={24} />
                </div>
                <div className="interest-body">
                  <h4 className="interest-name">{item.title}</h4>
                  {item.description && (
                    <p className="interest-desc">{item.description}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
