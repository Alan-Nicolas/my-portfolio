import React, { useEffect, useRef, useState } from 'react';
import { skills } from '../data/mockData';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars with delay
          setTimeout(() => {
            const allSkills = [...skills.frontend, ...skills.backend, ...skills.database, ...skills.devops];
            const skillsObj = {};
            allSkills.forEach(skill => {
              skillsObj[skill.name] = skill.level;
            });
            setAnimatedSkills(skillsObj);
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const SkillCard = ({ title, skillList, delay = 0 }) => (
    <div
      className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
        {title}
      </h3>
      
      <div className="space-y-6">
        {skillList.map((skill, index) => (
          <div key={skill.name} className="group">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{skill.icon}</span>
                <span className="font-medium text-gray-800">{skill.name}</span>
              </div>
              <span className="text-sm font-semibold text-blue-600">
                {animatedSkills[skill.name] || 0}%
              </span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${animatedSkills[skill.name] || 0}%`,
                  transitionDelay: `${500 + index * 100}ms`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Habilidades Técnicas
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tecnologias e ferramentas que domino para criar soluções robustas e escaláveis.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard 
              title="Frontend" 
              skillList={skills.frontend} 
              delay={0}
            />
            <SkillCard 
              title="Backend" 
              skillList={skills.backend} 
              delay={200}
            />
            <SkillCard 
              title="Banco de Dados" 
              skillList={skills.database} 
              delay={400}
            />
            <SkillCard 
              title="DevOps" 
              skillList={skills.devops} 
              delay={600}
            />
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                🚀 Sempre Aprendendo
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                A tecnologia evolui constantemente, e eu evoluo junto. Atualmente focado em:
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                {['MicroFrontend', 'Agente de IA','Inteligencia Artificial', 'DevOps'].map((tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 font-medium rounded-full hover:from-blue-200 hover:to-purple-200 transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;