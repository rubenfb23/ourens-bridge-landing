
import React, { useEffect, useState } from 'react';

const ConnectSection = () => {
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

    const element = document.getElementById('connect');
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
    <section id="connect" className="py-32 bg-gradient-to-br from-google-blue-900 via-black to-google-green-600 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-google-yellow-400/10 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-google-red-400/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-2/3 w-16 h-16 bg-google-green-400/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h2 className="text-6xl md:text-7xl font-black text-white mb-8 leading-none">
              Ready to <span className="text-google-yellow-400">Connect</span>?
            </h2>
            
            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join Ourense's most innovative tech community. 
              Be part of something bigger.
            </p>

            <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <button className="group relative px-12 py-4 bg-white text-black rounded-full font-semibold text-lg overflow-hidden transition-all duration-500 hover:scale-105">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Join Our Community
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-google-blue-500 to-google-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>

              <button className="group relative px-12 py-4 border-2 border-white/30 text-white rounded-full font-semibold text-lg overflow-hidden transition-all duration-500 hover:scale-105">
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                  Next Event
                </span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </div>

            {/* Social Links */}
            <div className={`flex justify-center space-x-8 mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <a href="#" className="text-white/60 hover:text-google-blue-400 transition-colors duration-300 text-sm uppercase tracking-widest">
                Twitter
              </a>
              <a href="#" className="text-white/60 hover:text-google-red-400 transition-colors duration-300 text-sm uppercase tracking-widest">
                YouTube
              </a>
              <a href="#" className="text-white/60 hover:text-google-green-400 transition-colors duration-300 text-sm uppercase tracking-widest">
                GitHub
              </a>
              <a href="#" className="text-white/60 hover:text-google-yellow-400 transition-colors duration-300 text-sm uppercase tracking-widest">
                Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
