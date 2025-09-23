import React from 'react';
import { skillsData } from '../data/skillsData';

const Skills = () => (
  <section id="skills">
    <h2 className="section-title">Teknisk Kompetens</h2>
    <div className="skills-grid">
      {skillsData.map((group, index) => {
        const Icon = group.icon;
        return (
          <div className="skill-card" key={index}>
            <div className="skill-title"><Icon size={20} /> {group.category}</div>
            <div className="skill-badges">
              {group.items.map((item, i) => <span key={i}>{item}</span>)}
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default Skills;
