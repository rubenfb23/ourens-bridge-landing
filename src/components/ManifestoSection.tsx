
import React, { useEffect, useState } from 'react';

const ManifestoSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('manifesto');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const manifestoPoints = [
    "We build the impossible",
    "We connect brilliant minds", 
    "We grow together"
  ];

  return (
    <section id="manifesto" className="py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h2 className="text-5xl md:text-6xl font-black text-center mb-16 leading-tight">
              Our <span className="text-google-blue-400">Manifesto</span>
            </h2>
          </div>
          
          <div className="space-y-8">
            {manifestoPoints.map((point, index) => (
              <div 
                key={index}
                className={`transition-all duration-1000 delay-${(index + 1) * 200} ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                }`}
              >
                <div className="flex items-center group cursor-pointer">
                  <div className="w-2 h-2 bg-google-blue-400 rounded-full mr-8 group-hover:scale-150 transition-transform duration-300"></div>
                  <p className="text-2xl md:text-3xl font-light text-gray-100 group-hover:text-white transition-colors duration-300">
                    {point}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
