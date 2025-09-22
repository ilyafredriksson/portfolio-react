import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-4xl font-bold">
              IF
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ilya Fredriksson
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
            Frontend/Fullstack Utvecklare med fokus på Webbsäkerhet
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Ambitiös och lösningsorienterad utvecklare som söker LIA-plats för att omsätta kunskaper i praktiken
            och bidra till innovativa projekt inom säker webbutveckling.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://github.com/ilyafredriksson"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ilya-fredriksson-197313353/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="mailto:fredrikssonilya@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition-all duration-300"
            >
              <Mail size={20} />
              Kontakta mig
            </a>
          </div>
        </div>
        <div className="animate-bounce">
          <ChevronDown size={32} className="mx-auto text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
