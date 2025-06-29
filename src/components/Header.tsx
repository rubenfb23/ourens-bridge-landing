
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo with uploaded image */}
          <div className="group cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-8">
                <img 
                  src="/lovable-uploads/d019d0d9-556a-4544-9e6c-607baa6298e4.png" 
                  alt="GDG Ourense Logo" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="text-2xl font-bold tracking-tight">
                GDG <span className="text-google-blue-400">Ourense</span>
              </div>
            </div>
          </div>

          {/* Minimal Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="#manifesto" className="text-lg font-light hover:text-google-blue-400 transition-colors duration-300 relative group">
              Ethos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-google-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#connect" className="text-lg font-light hover:text-google-blue-400 transition-colors duration-300 relative group">
              Connect
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-google-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
