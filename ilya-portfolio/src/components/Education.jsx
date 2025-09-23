import React from 'react';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h2>Utbildning</h2>
        <div className="edu-card">
          <h3>Frontendutvecklare Webbsäkerhet (FWK24S)</h3>
          <p>Jensen YH - Heltid</p>
          <p>2024-08-19 - 2026-06-05</p>
          <h4>Kurser:</h4>
          <ul>
            <li>Agil projektmetodik och testning</li>
            <li>Avancerad webbutveckling med JavaScript</li>
            <li>Frontendutveckling - klient & server</li>
            <li>Webbsäkerhet; analys och implementation</li>
            <li>Webbramverk för JavaScript (ReactJS)</li>
            <li>Examensarbete</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
