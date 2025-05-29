
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Events', href: '#events' },
    { name: 'Community', href: '#community' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              {/* Roman Bridge Logo */}
              <svg 
                width="40" 
                height="32" 
                viewBox="0 0 40 32" 
                className={`transition-colors duration-300 ${
                  isScrolled ? 'text-google-blue-500' : 'text-white'
                }`}
                fill="currentColor"
              >
                <path d="M2 26h36v2H2z"/>
                <path d="M4 22c0-2.2 1.8-4 4-4s4 1.8 4 4v4H4v-4z"/>
                <path d="M14 20c0-3.3 2.7-6 6-6s6 2.7 6 6v6H14v-6z"/>
                <path d="M28 22c0-2.2 1.8-4 4-4s4 1.8 4 4v4h-8v-4z"/>
                <circle cx="8" cy="12" r="1"/>
                <circle cx="20" cy="8" r="1"/>
                <circle cx="32" cy="12" r="1"/>
              </svg>
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                GDG Ourense
              </h1>
              <p className={`text-xs transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                Google Developer Group
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-300 hover:text-google-blue-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            <button className="bg-google-blue-500 text-white px-6 py-2 rounded-full font-medium hover:bg-google-blue-600 transition-colors duration-300">
              Join Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200/20">
            <div className="pt-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block font-medium transition-colors duration-300 hover:text-google-blue-500 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full bg-google-blue-500 text-white px-6 py-2 rounded-full font-medium hover:bg-google-blue-600 transition-colors duration-300 mt-4">
                Join Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
