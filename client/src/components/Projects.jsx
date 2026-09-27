import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Layers,
  Sparkles,
  ArrowRight,
  Info,
  Radio,
  Cpu,
  CircuitBoard,
  Activity
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const getCategoryColor = (category) => {
    if (category.includes('Antenna') || category.includes('RF')) return 'badge-cyan';
    if (category.includes('AI')) return 'badge-purple';
    if (category.includes('Embedded')) return 'badge-emerald';
    return 'badge-blue';
  };

  const getCategoryIcon = (category) => {
    if (category.includes('Antenna') || category.includes('RF')) return Radio;
    if (category.includes('Embedded')) return CircuitBoard;
    if (category.includes('AI')) return Cpu;
    return Activity;
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Explorations spanning deep learning algorithms, radio frequency antenna design, and hardware prototyping.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project) => {
            const IconComponent = getCategoryIcon(project.category);
            return (
              <div
                key={project.id}
                className="project-card card-glass card-glow-line"
              >
                {/* Top Bar with Category & Icon */}
                <div className="project-card-header">
                  <div className="project-category-group">
                    <span className={`badge ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                  <div className="project-icon-box">
                    <IconComponent size={20} className="project-header-icon" />
                  </div>
                </div>

                {/* Main Body */}
                <div className="project-card-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.shortDescription}</p>

                  {/* Simulation preview thumbnail if available */}
                  {project.simulationImage && (
                    <div className="project-sim-thumbnail" onClick={() => setSelectedProject(project)}>
                      <img src={project.simulationImage} alt="HFSS Simulation" className="sim-thumb-img" />
                      <span className="sim-thumb-badge">HFSS S11 Solved Plot</span>
                    </div>
                  )}

                  {/* Document preview thumbnail if available */}
                  {project.documentImage && (
                    <div className="project-sim-thumbnail" onClick={() => setSelectedProject(project)}>
                      <img src={project.documentImage} alt="Official Selection Letter" className="sim-thumb-img" />
                      <span className="sim-thumb-badge">Verified Selection Letter</span>
                    </div>
                  )}

                  {/* Technology Badges */}
                  <div className="project-tech-stack">
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="project-card-footer">
                  <button
                    type="button"
                    className="btn btn-secondary project-view-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>View Details</span>
                    <ArrowRight size={15} />
                  </button>

                  <span className="project-coming-soon-label">
                    Details Coming Soon
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
