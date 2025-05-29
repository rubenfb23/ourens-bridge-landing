
import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    setIsLoaded(true);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-google-blue-900/20 via-black to-google-blue-800/30 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(66, 133, 244, 0.3) 0%, rgba(0, 0, 0, 0.8) 50%, black 100%)`
          }}
        ></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-google-blue-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-8">
        <div className={`transition-all duration-2000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {/* Main Tagline */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-8">
            <span className="block text-white">OURENSE'S</span>
            <span className="block bg-gradient-to-r from-google-blue-400 to-google-blue-600 bg-clip-text text-transparent">
              TECH NEXUS
            </span>
          </h1>
          
          {/* Subtitle */}
          <div className={`transition-all duration-2000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <p className="text-xl md:text-2xl text-gray-300 font-light mb-12 max-w-2xl mx-auto">
              Where innovation meets community.
              <br />
              <span className="text-google-blue-400">Innovate. Connect. Grow.</span>
            </p>
          </div>

          {/* CTA */}
          <div className={`transition-all duration-2000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <button className="group relative px-12 py-4 text-xl font-semibold text-black bg-white rounded-full overflow-hidden transition-all duration-500 hover:scale-105">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Join the Movement
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-google-blue-500 to-google-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center animate-bounce">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
