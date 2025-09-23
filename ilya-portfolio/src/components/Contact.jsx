import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Kontakt</h2>
        <p>Redo att diskutera LIA-möjligheter och hur jag kan bidra till ert team!</p>
        <div className="contact-buttons">
          <a href="mailto:fredrikssonilya@gmail.com" className="btn-primary">Skicka e-post</a>
          <a href="tel:0727151053" className="btn-secondary">Ring mig</a>
          <a href="https://www.linkedin.com/in/ilya-fredriksson-197313353/" target="_blank" rel="noreferrer" className="btn-secondary">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
