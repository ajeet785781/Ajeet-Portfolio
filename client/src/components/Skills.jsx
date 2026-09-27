import React, { useState } from 'react';
import {
  Terminal,
  Zap,
  Brain,
  Code,
  GitBranch,
  Database,
  Cpu,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const categoryIconMap = {
  Terminal: Terminal,
  Zap: Zap,
  Brain: Brain,
  Code: Code,
  GitBranch: GitBranch,
  Database: Database,
  Cpu: Cpu
};

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterTabs = ['All', 'Hardware & ECE', 'AI & Data', 'Software & Dev'];

  const filteredCategories = skillCategories.filter((cat) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Hardware & ECE') {
      return cat.category === 'Core ECE' || cat.category === 'Simulation / Hardware';
    }
    if (activeFilter === 'AI & Data') {
      return cat.category === 'AI / ML' || cat.category === 'Database';
    }
    if (activeFilter === 'Software & Dev') {
      return cat.category === 'Programming' || cat.category === 'Web' || cat.category === 'Development';
    }
    return true;
  });

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Competencies</span>
          </h2>
          <p className="section-subtitle">
            An engineering skillset blending software proficiency, artificial intelligence, and hardware simulation.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="skills-filter-row">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`filter-btn ${activeFilter === tab ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="skills-grid">
          {filteredCategories.map((group, idx) => {
            const IconComponent = categoryIconMap[group.icon] || Cpu;
            return (
              <div key={idx} className="skill-category-card card-glass card-glow-line">
                <div className="skill-card-top">
                  <div className="skill-category-icon-box">
                    <IconComponent size={20} className="category-icon" />
                  </div>
                  <div>
                    <h3 className="skill-category-title">{group.category}</h3>
                    <span className="skill-count">{group.skills.length} competencies</span>
                  </div>
                </div>

                {/* Skill Chips / Pills */}
                <div className="skill-pills-wrap">
                  {group.skills.map((skillName, sIdx) => (
                    <div key={sIdx} className="skill-chip">
                      <span className="skill-chip-dot" />
                      <span className="skill-chip-text">{skillName}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Competency Quality Note */}
        <div className="skills-footnote">
          <CheckCircle2 size={16} className="text-cyan" />
          <span>Skills categorized by academic coursework, simulation tooling, and practical development.</span>
        </div>
      </div>
    </section>
  );
}
