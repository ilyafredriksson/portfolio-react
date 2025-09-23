import React from 'react';
import { skills } from '../data/skillsData';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2>Teknisk kompetens</h2>
        <div className="skills-grid">
          {skills.map((group, index) => (
            <div className="skill-card" key={index}>
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
