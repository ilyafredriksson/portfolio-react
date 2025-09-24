import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Kontakt</h2>
        <p>Är du intresserad av att erbjuda en LIA-plats eller vill du bara prata webbutveckling? Tveka inte att höra av dig!</p>
        <div className="contact-buttons">
          <a href="mailto:fredrikssonilya@gmail.com" className="btn-primary">fredrikssonilya@gmail.com</a>
          <a href="tel:0727151053" className="btn-secondary">072-715 10 53</a>
          <a href="https://www.linkedin.com/in/ilya-fredriksson-197313353/" target="_blank" rel="noreferrer" className="btn-primary">LinkedIn</a>
          <a href="https://github.com/ilyafredriksson" target="_blank" rel="noreferrer" className="btn-secondary">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
