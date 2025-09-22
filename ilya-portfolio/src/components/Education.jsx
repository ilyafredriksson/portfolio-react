import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Utbildning
        </h2>
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold mb-2 text-white">EC Utbildning – Webbutvecklare inom IT-säkerhet</h3>
          <p className="text-gray-300 mb-2">2024 – 2026</p>
          <p className="text-gray-400">
            YH-utbildning med fokus på säker webbutveckling, moderna ramverk, backend-teknologier och DevOps-principer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
