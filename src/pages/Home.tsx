import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { homeCarouselProjects, featuredProjects } from '../data/projects';
import type { Project } from '../data/projects';
import ProjectModal from '../components/ProjectModal';
import './Home.css';

function AnimatedSection({
  children,
  className = '',
  animation = 'fade-up',
}: {
  children: React.ReactNode;
  className?: string;
  animation?: string;
}) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`${animation} ${isVisible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.05);

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-eyebrow">London · West End · International</div>
          <h1>
            Where Theatre
            <br />
            Meets the <em>Spotlight</em>
          </h1>
          <p>
            A creative public relations agency representing the finest in West
            End, touring, and international theatre.
          </p>
          <Link to="/projects" className="hero-cta">
            View Our Work
          </Link>
        </div>
      </section>

      {/* About snippet */}
      <AnimatedSection className="about-section">
        <div className="section-label">About the Agency</div>
        <h2 className="section-heading">Crafting Stories That <span className="gradient-text">Fill Seats</span></h2>
        <p>
          With decades of experience in theatre PR, we connect productions with
          audiences through strategic press campaigns, creative storytelling, and
          deep industry relationships. From @sohoplace to national tours, we make
          sure the world is watching.
        </p>
        <div className="divider" />
      </AnimatedSection>

      {/* Featured shows */}
      <section className="featured-section">
        <AnimatedSection className="featured-header">
          <div className="section-label">Now Showing</div>
          <h2 className="section-heading"><span className="gradient-text">On Stage</span> Now</h2>
        </AnimatedSection>

        <div
          ref={gridRef}
          className={`featured-grid stagger-children ${gridVisible ? 'visible' : ''}`}
        >
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="featured-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="featured-card-image">
                <img src={project.image} alt={project.name} loading="lazy" />
                {project.tag && <span className="card-tag">{project.tag}</span>}
              </div>
              <div className="featured-card-body">
                <h3>{project.name}</h3>
                <p>{project.venue}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image showcase - carousel of all home images */}
      <section className="showcase-section">
        <AnimatedSection className="showcase-header">
          <div className="section-label">Our Clients</div>
          <h2 className="section-heading">Productions We <span className="gradient-text">Represent</span></h2>
        </AnimatedSection>

        <div className="showcase-grid">
          {homeCarouselProjects.map((project, i) => (
            <ShowcaseImage
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <AnimatedSection className="showcase-cta-wrap">
          <Link to="/projects" className="showcase-cta">
            View All Projects
          </Link>
        </AnimatedSection>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <AnimatedSection>
          <h2>Let's Tell Your Story</h2>
          <p>Get in touch to discuss your next campaign.</p>
          <Link to="/contact" className="cta-banner-btn">
            Contact Us
          </Link>
        </AnimatedSection>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

function ShowcaseImage({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`showcase-item fade-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
      onClick={onClick}
    >
      <img src={project.image} alt={project.name} loading="lazy" />
      <div className="showcase-overlay">
        <span>{project.name}</span>
      </div>
    </div>
  );
}
