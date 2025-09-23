import React, { useState, useEffect } from 'react';

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 'hero', label: 'Hem' },
    { id: 'about', label: 'Om mig' },
    { id: 'skills', label: 'Kompetens' },
    { id: 'projects', label: 'Projekt' },
    { id: 'education', label: 'Utbildning' },
    { id: 'contact', label: 'Kontakt' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-logo">Ilya Fredriksson</div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => { scrollToSection(link.id); setIsOpen(false); }}
            className={activeSection === link.id ? 'active' : ''}
          >
            {link.label}
          </button>
        ))}
      </div>
      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
