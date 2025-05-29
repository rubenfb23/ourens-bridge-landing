
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
      { threshold: 0.3 }
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
    <section id="connect" className="py-32 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-google-blue-400/20 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-google-blue-400/20 to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-google-blue-400/20 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-google-blue-400/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
              Ready to <span className="text-google-blue-400">Connect?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light">
              Join Ourense's most dynamic tech community. 
              Your next breakthrough starts here.
            </p>
          </div>

          {/* Action Buttons */}
          <div className={`flex flex-col md:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <button className="group relative px-12 py-4 bg-gradient-to-r from-google-blue-500 to-google-blue-600 text-white text-lg font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105">
              <span className="relative z-10">Join Community</span>
              <div className="absolute inset-0 bg-gradient-to-r from-google-blue-600 to-google-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            
            <button className="group px-12 py-4 border-2 border-white/20 text-white text-lg font-semibold rounded-full transition-all duration-300 hover:border-white/40 hover:scale-105">
              Get In Touch
            </button>
          </div>

          {/* Contact Info */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="group cursor-pointer">
              <div className="w-12 h-12 mx-auto mb-4 bg-google-blue-400/20 rounded-full flex items-center justify-center group-hover:bg-google-blue-400/30 transition-colors duration-300">
                <svg width="24" height="24" fill="currentColor" className="text-google-blue-400" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                ourense@gdg.community
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="w-12 h-12 mx-auto mb-4 bg-google-blue-400/20 rounded-full flex items-center justify-center group-hover:bg-google-blue-400/30 transition-colors duration-300">
                <svg width="24" height="24" fill="currentColor" className="text-google-blue-400" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                LinkedIn
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="w-12 h-12 mx-auto mb-4 bg-google-blue-400/20 rounded-full flex items-center justify-center group-hover:bg-google-blue-400/30 transition-colors duration-300">
                <svg width="24" height="24" fill="currentColor" className="text-google-blue-400" viewBox="0 0 24 24">
                  <path d="M6.003 2.874c-2.512 0-4.552 2.04-4.552 4.552s2.04 4.552 4.552 4.552 4.552-2.04 4.552-4.552-2.04-4.552-4.552-4.552zm11.994 0c-2.512 0-4.552 2.04-4.552 4.552s2.04 4.552 4.552 4.552 4.552-2.04 4.552-4.552-2.04-4.552-4.552-4.552zm-5.997 9.104c-2.512 0-4.552 2.04-4.552 4.552s2.04 4.552 4.552 4.552 4.552-2.04 4.552-4.552-2.04-4.552-4.552-4.552z"/>
                </svg>
              </div>
              <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                Meetup
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="container mx-auto px-8">
          <div className="text-center text-gray-500 text-sm">
            © 2024 GDG Ourense • Part of the Google Developer Groups program
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
