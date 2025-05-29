
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <svg 
                width="32" 
                height="26" 
                viewBox="0 0 40 32" 
                className="text-google-blue-400"
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
              <div>
                <h3 className="text-lg font-bold">GDG Ourense</h3>
                <p className="text-xs text-gray-400">Google Developer Group</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Building the future of technology in Galicia through collaboration, 
              learning, and innovation. Join our community of passionate developers!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-google-blue-400">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#events" className="text-gray-300 hover:text-white transition-colors">Events</a></li>
              <li><a href="#community" className="text-gray-300 hover:text-white transition-colors">Community</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4 text-google-blue-400">Connect With Us</h4>
            <div className="space-y-3">
              <a 
                href="#" 
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <div className="w-5 h-5">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <span className="text-sm">LinkedIn</span>
              </a>
              
              <a 
                href="#" 
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <div className="w-5 h-5">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </div>
                <span className="text-sm">Twitter</span>
              </a>
              
              <a 
                href="#" 
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <div className="w-5 h-5">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.003 2.874c-2.512 0-4.552 2.04-4.552 4.552s2.04 4.552 4.552 4.552 4.552-2.04 4.552-4.552-2.04-4.552-4.552-4.552zm11.994 0c-2.512 0-4.552 2.04-4.552 4.552s2.04 4.552 4.552 4.552 4.552-2.04 4.552-4.552-2.04-4.552-4.552-4.552zm-5.997 9.104c-2.512 0-4.552 2.04-4.552 4.552s2.04 4.552 4.552 4.552 4.552-2.04 4.552-4.552-2.04-4.552-4.552-4.552z"/>
                  </svg>
                </div>
                <span className="text-sm">Meetup</span>
              </a>
            </div>

            <div className="mt-6">
              <p className="text-xs text-gray-400 mb-2">Subscribe to our newsletter:</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-l-lg text-sm focus:outline-none focus:border-google-blue-400"
                />
                <button className="bg-google-blue-500 px-4 py-2 rounded-r-lg hover:bg-google-blue-600 transition-colors">
                  <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2024 GDG Ourense. Part of the Google Developer Groups program.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
