
import React from 'react';
import { skills } from '../data/skillsData';

const Skills = () => {
  return (
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
  );
};

export default Skills;
