import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Ilya Fredriksson</div>
        <ul className="nav-links">
          <li><a href="#hero">Hem</a></li>
          <li><a href="#about">Om mig</a></li>
          <li><a href="#skills">Kompetens</a></li>
          <li><a href="#projects">Projekt</a></li>
          <li><a href="#education">Utbildning</a></li>
          <li><a href="#contact">Kontakt</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
