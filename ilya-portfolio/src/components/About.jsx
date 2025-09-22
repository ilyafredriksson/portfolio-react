import React from 'react';
import { MapPin } from 'lucide-react';

const About = () => {
  return (
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
  );
};

export default About;
