import React from 'react';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-avatar">IF</div>
        <h1>Ilya Fredriksson</h1>
        <h2>Frontend/Fullstack Utvecklare med fokus på Webbsäkerhet</h2>
        <p>
          Ambitiös och lösningsorienterad utvecklare som söker LIA-plats för att omsätta kunskaper i praktiken.
        </p>
        <div className="hero-buttons">
          <a href="https://github.com/ilyafredriksson" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/ilya-fredriksson-197313353/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:fredrikssonilya@gmail.com">Kontakta mig</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
