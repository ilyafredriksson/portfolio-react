import React from 'react';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h2>Utbildning</h2>
        <div className="edu-card">
          <h3>Frontendutvecklare webbsäkerhet (FWK24S) - Heltid</h3>
          <p><strong>Period:</strong> 2024-08-19 - 2026-06-05</p>
          <p><strong>Institution:</strong> Jensen YH</p>
          <h4>Kurser inkluderar:</h4>
          <ul>
            <li>Agil projektmetodik och testning</li>
            <li>Avancerad webbutveckling med JavaScript</li>
            <li>Examensarbete</li>
            <li>Frontendutveckling - klient & server</li>
            <li>Webbsäkerhet; analys och implementation</li>
            <li>Webbramverk för JavaScript (ReactJS)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
