
import React, { useEffect, useState } from 'react';

const SpotlightSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('spotlight');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="spotlight" className="py-32 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-google-blue-400 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 border border-google-blue-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="mb-6">
              <span className="text-google-blue-400 text-sm uppercase tracking-widest font-medium">Next Event</span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              DevFest Ourense
              <span className="block text-2xl text-gray-400 font-light mt-2">2024</span>
            </h3>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our flagship annual event bringing together 500+ developers, designers, 
              and tech enthusiasts for a day of innovation and learning.
            </p>
            
            <div className="flex items-center space-x-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-google-blue-400">15</div>
                <div className="text-sm text-gray-400">March</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-google-blue-400">500+</div>
                <div className="text-sm text-gray-400">Attendees</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-google-blue-400">12</div>
                <div className="text-sm text-gray-400">Speakers</div>
              </div>
            </div>
            
            <button className="group relative px-8 py-3 border-2 border-google-blue-400 text-google-blue-400 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105">
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Reserve Your Spot
              </span>
              <div className="absolute inset-0 bg-google-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>

          {/* Visual Element */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-google-blue-600 to-google-blue-800 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-white text-xl font-semibold mb-2">DevFest 2024</div>
                  <div className="text-white/80">Innovation • Community • Growth</div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-8 right-8 w-16 h-16 border-2 border-white/30 rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 left-8 w-8 h-8 bg-white/20 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;
