import React from 'react';

const About = () => (
  <section id="about">
    <h2 className="section-title">Om mig</h2>
    <div className="about-container">
      <div className="about-text">
        <p>Jag är en ambitiös och lösningsorienterad frontend/fullstack-utvecklare...</p>
        <p>Jag söker nu en LIA-plats där jag kan omsätta mina kunskaper i praktiken...</p>
      </div>
      <div className="about-card">
        <h3>LIA-plats sökes</h3>
        <strong>Period:</strong>
        <p>2025-11-17 - 2026-05-01</p>
        <strong>Fokusområden:</strong>
        <ul>
          <li>Frontend med ReactJS</li>
          <li>Backend med Node.js</li>
          <li>API-hantering och autentisering</li>
          <li>Webbsäkerhet</li>
        </ul>
      </div>
    </div>
  </section>
);

export default About;
