import React from 'react';
import { projectsData } from '../data/projectsData';

const Projects = () => (
  <section id="projects">
    <h2 className="section-title">Utvalda Projekt</h2>
    <div className="projects-grid">
      {projectsData.map((p, index) => (
        <div className="project-card" key={index}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <div className="project-tech">
            {p.tech.map((t,i)=><span key={i}>{t}</span>)}
          </div>
          <ul className="project-features">
            {p.features.map((f,i)=><li key={i}>{f}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
