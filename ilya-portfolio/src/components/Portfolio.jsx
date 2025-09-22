import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Shield, Users, BookOpen, ExternalLink, ChevronDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = [
    { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript (ES6+)', 'ReactJS', 'UI/UX Design', 'Responsiv Design'], icon: Code },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'JWT'], icon: Shield },
    { category: 'Säkerhet', items: ['XSS Prevention', 'CSRF Protection', 'Säker API-hantering', 'HTTPS', 'Autentisering'], icon: Shield },
    { category: 'Verktyg', items: ['Git', 'GitHub', 'Agile/Scrum', 'Jira', 'VS Code'], icon: Users }
  ];

  const projects = [
    {
      title: 'QR Code Generator & Scanner',
      description: 'Fullstack React-applikation för att generera och skanna QR-koder med historikfunktion och säker datahantering.',
      tech: ['React', 'JavaScript', 'CSS', 'LocalStorage'],
      features: ['QR-kodsgenerering', 'Kameraskanning', 'Historikhantering', 'Responsiv design']
    },
    {
      title: 'Säker Webbapplikation',
      description: 'Demonstrerar säkerhetsimplementationer som XSS-skydd, CSRF-tokens och säker autentisering.',
      tech: ['Node.js', 'Express', 'JWT', 'bcrypt'],
      features: ['JWT-autentisering', 'XSS-skydd', 'CSRF-protection', 'Säker datavalidering']
    },
    {
      title: 'Responsive Dashboard',
      description: 'Modern dashboard med fokus på UX/UI och prestanda, byggd med React och modern CSS.',
      tech: ['React', 'CSS Grid', 'Flexbox', 'Chart.js'],
      features: ['Datavisualisering', 'Mobiloptimerad', 'Dark/Light mode', 'Interaktiva komponenter']
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ilya Fredriksson
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {[
                  { id: 'hero', label: 'Hem' },
                  { id: 'about', label: 'Om mig' },
                  { id: 'skills', label: 'Kompetens' },
                  { id: 'projects', label: 'Projekt' },
                  { id: 'education', label: 'Utbildning' },
                  { id: 'contact', label: 'Kontakt' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-black/50 backdrop-blur-lg">
                {[
                  { id: 'hero', label: 'Hem' },
                  { id: 'about', label: 'Om mig' },
                  { id: 'skills', label: 'Kompetens' },
                  { id: 'projects', label: 'Projekt' },
                  { id: 'education', label: 'Utbildning' },
                  { id: 'contact', label: 'Kontakt' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-md w-full text-left"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Om mig
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Jag är en ambitiös och lösningsorienterad frontend/fullstack-utvecklare med passion för modern 
                webbutveckling och säkerhet. Min styrka ligger i att kombinera ett användarcentrerat tänk för 
                att skapa snabba, responsiva och tillgängliga webbapplikationer.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Jag söker nu en LIA-plats där jag kan omsätta mina kunskaper i praktiken och bidra till 
                innovativa projekt. Jag är van att arbeta i agila team, tar egna initiativ och älskar att 
                lära mig nya teknologier.
              </p>
              <div className="flex items-center gap-4 text-gray-400">
                <MapPin size={20} />
                <span>Järfälla Kommun</span>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">LIA-plats sökes</h3>
              <div className="space-y-4">
                <div>
                  <strong className="text-white">Period:</strong>
                  <p className="text-gray-300">2025-11-17 - 2026-05-01</p>
                </div>
                <div>
                  <strong className="text-white">Mål:</strong>
                  <p className="text-gray-300">
                    Praktisk erfarenhet i utvecklingsteam, bidra till riktiga projekt och 
                    vidareutveckla kunskaper inom säker webbutveckling.
                  </p>
                </div>
                <div>
                  <strong className="text-white">Fokusområden:</strong>
                  <ul className="text-gray-300 list-disc list-inside mt-2">
                    <li>Frontend med ReactJS</li>
                    <li>Backend med Node.js</li>
                    <li>API-hantering och autentisering</li>
                    <li>Webbsäkerhet</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Teknisk Kompetens
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => {
              const IconComponent = skillGroup.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Utvalda Projekt
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-2">
                <h3 className="text-xl font-bold mb-3 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-white">Teknologier:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded text-sm border border-blue-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2 text-white">Funktioner:</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://github.com/ilyafredriksson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink size={16} />
                  Se på GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Utbildning
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Frontendutvecklare webbsäkerhet (FWK24S)
                  </h3>
                  <p className="text-blue-400 font-semibold">Jensen YH - Heltid</p>
                  <p className="text-gray-400">2024-08-19 - 2026-06-05</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-white">Kurser:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Agil projektmetodik och testning
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Avancerad webbutveckling med JavaScript
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Frontendutveckling - klient & server
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      Webbsäkerhet; analys och implementation
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      Webbramverk för JavaScript (ReactJS)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      Examensarbete
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-white">Språk:</h4>
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-300">Svenska/Ryska</span>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                        <div className="bg-green-500 h-2 rounded-full w-full"></div>
                      </div>
                      <span className="text-sm text-gray-400">Flytande (Modersmål)</span>
                    </div>
                    <div>
                      <span className="text-gray-300">Engelska</span>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                        <div className="bg-blue-500 h-2 rounded-full w-5/
6"></div>
                      </div>
                      <span className="text-sm text-gray-400">Avancerad (C1)</span> 
                    </div>
                  </div>
                </div>  
                </div>
            </div>
          </div>
        </div>
      </section>
        {/* Contact Section */}
        