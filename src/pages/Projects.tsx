import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import ProjectModal from '../components/ProjectModal';
import './Projects.css';

const categories = ['All', 'West End', 'Tour', 'Venue', 'Regional'] as const;

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div
          ref={headerRef}
          className={`fade-up ${headerVisible ? 'visible' : ''}`}
        >
          <div className="section-label">Portfolio</div>
          <h1 className="section-heading">Recent <span className="gradient-text">Projects</span></h1>
          <p className="projects-subtitle">
            From West End premieres to international tours, explore the
            productions and venues we proudly represent.
          </p>
        </div>

        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="projects-grid-section">
        <div className="projects-masonry">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="no-results">No projects in this category.</p>
        )}
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <div
      ref={ref}
      className={`project-card fade-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${(index % 6) * 0.07}s` }}
      onClick={onClick}
    >
      <div className="project-card-image">
        <img src={project.image} alt={project.name} loading="lazy" />
        <div className="project-card-hover">
          <span className="project-card-plus">+</span>
          <span className="project-card-label">View Details</span>
        </div>
        {project.tag && <span className="project-card-tag">{project.tag}</span>}
      </div>
      <div className="project-card-info">
        <h3>{project.name}</h3>
        <span className="project-card-cat">{project.category}</span>
      </div>
    </div>
  );
}
