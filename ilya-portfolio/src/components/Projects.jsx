import React from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projectsData';

const Projects = () => {
  return (
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
  );
};

export default Projects;
