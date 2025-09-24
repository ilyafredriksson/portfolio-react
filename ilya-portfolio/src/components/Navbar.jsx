import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Ilya Fredriksson</div>
        <div className="nav-links">
          <a href="#about">Om mig</a>
          <a href="#skills">Kompetens</a>
          <a href="#projects">Projekt</a>
          <a href="#education">Utbildning</a>
          <a href="#contact">Kontakt</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
