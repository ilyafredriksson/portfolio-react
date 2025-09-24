import React from "react";
import minBild from "../assets/min-bild.png";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <img 
          src={minBild}
          alt="Ilya Fredriksson" 
          className="hero-image"
        />
        <h1>Ilya Fredriksson</h1>
        <h2>Frontend / Fullstack Utvecklare med fokus på Webbsäkerhet</h2>
        <p>Ambitiös utvecklare som söker LIA-plats för att omsätta kunskaper i praktiken.</p>
        <div className="hero-buttons">
          <a href="https://github.com/ilyafredriksson" className="btn-primary" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:fredrikssonilya@gmail.com" className="btn-primary">Skicka e-post</a>
          <a href="tel:0727151053" className="btn-secondary">Ring mig</a>
          <a href="https://www.linkedin.com/in/ilya-fredriksson-197313353/" target="_blank" rel="noreferrer" className="btn-secondary">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
