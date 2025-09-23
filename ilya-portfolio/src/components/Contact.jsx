import React from 'react';

const Contact = () => (
  <section id="contact" className="contact">
    <h2 className="section-title">Kontakt</h2>
    <p>Redo att diskutera LIA-möjligheter och hur jag kan bidra till ert team!</p>
    <div className="contact-grid">
      <div className="contact-card">
        <strong>Email:</strong>
        <p>fredrikssonilya@gmail.com</p>
      </div>
      <div className="contact-card">
        <strong>Telefon:</strong>
        <p>0727151053</p>
      </div>
      <div className="contact-card">
        <strong>LinkedIn:</strong>
        <p><a href="https://www.linkedin.com/in/ilya-fredriksson-197313353/">Profil</a></p>
      </div>
      <div className="contact-card">
        <strong>GitHub:</strong>
        <p><a href="https://github.com/ilyafredriksson">Projekt</a></p>
      </div>
    </div>
    <div className="contact-call">
      <h3>Låt oss skapa något fantastiskt tillsammans!</h3>
      <p>Kontakta mig gärna för en intervju!</p>
    </div>
  </section>
);

export default Contact;
