import React, { useEffect, useRef, useState } from 'react';
import { developerProfile, experiences } from '../data/mockData';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: "👥",
      title: "Trabalho em Equipe",
      description: "Colaboração efetiva em equipes multidisciplinares, utilizando metodologias ágeis e comunicação clara."
    },
    {
      icon: "💡",
      title: "Criatividade",
      description: "Abordagem inovadora para resolver problemas complexos, sempre buscando soluções elegantes e eficientes."
    },
    {
      icon: "🔧",
      title: "Resolução de Problemas",
      description: "Capacidade analítica apurada para identificar, analisar e resolver desafios técnicos de forma estruturada."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sobre Mim
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conheça minha jornada, experiências e o que me motiva a criar soluções digitais excepcionais.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Minha História
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {developerProfile.bio}
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  📍 Informações Pessoais
                </h4>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-600">Email:</span>
                    <p className="text-gray-800">{developerProfile.email}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Telefone:</span>
                    <p className="text-gray-800">{developerProfile.phone}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Localização:</span>
                    <p className="text-gray-800">{developerProfile.location}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Disponibilidade:</span>
                    <p className="text-green-600 font-medium">Disponível</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Principais Qualidades
              </h3>
              
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className={`bg-white border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                      isVisible ? 'animate-fadeInUp' : ''
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl flex-shrink-0">
                        {highlight.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {highlight.title}
                        </h4>
                        <p className="text-gray-600">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Experiência Profissional
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 transform md:-translate-x-1/2"></div>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform -translate-x-1/2 md:translate-x-0 z-10 border-4 border-white shadow-lg"></div>
                    
                    {/* Content */}
                    <div className={`flex-1 ml-12 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}>
                      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <h4 className="text-lg font-semibold text-gray-900">
                            {exp.position}
                          </h4>
                          <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                            {exp.period}
                          </span>
                        </div>
                        <h5 className="text-blue-600 font-medium mb-3">
                          {exp.company}
                        </h5>
                        <p className="text-gray-600">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;