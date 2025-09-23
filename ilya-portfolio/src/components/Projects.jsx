import React from 'react';
import { projects } from '../data/projectsData';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>Utvalda projekt</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <h4>Teknologier:</h4>
              <ul className="tags">
                {project.tech.map((tech, i) => <li key={i}>{tech}</li>)}
              </ul>
              <h4>Funktioner:</h4>
              <ul className="features">
                {project.features.map((feature, i) => <li key={i}>{feature}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
