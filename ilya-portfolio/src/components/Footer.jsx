import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 text-center text-gray-400 bg-black/30 border-t border-white/10">
      <p>&copy; {new Date().getFullYear()} Ilya Fredriksson. Alla rättigheter förbehållna.</p>
    </footer>
  );
};

export default Footer;
