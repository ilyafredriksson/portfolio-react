import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { id: 'hero', label: 'Hem' },
    { id: 'about', label: 'Om mig' },
    { id: 'skills', label: 'Kompetens' },
    { id: 'projects', label: 'Projekt' },
    { id: 'education', label: 'Utbildning' },
    { id: 'contact', label: 'Kontakt' }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">Ilya Fredriksson</div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        {menuItems.map(item => (
          <button key={item.id} onClick={() => scrollToSection(item.id)}>
            {item.label}
          </button>
        ))}
      </div>
      <div
        className="nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
