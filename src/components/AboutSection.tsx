
import React, { useEffect, useState } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
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
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            About GDG Ourense
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
            Google Developer Groups (GDGs) are volunteer-run communities that create 
            exciting projects and share experiences around Google technologies. 
            GDG Ourense brings together developers, designers, and tech enthusiasts 
            from across Galicia to learn, share, and build amazing things together.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <div className={`text-center transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="w-16 h-16 bg-google-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Learn Together</h3>
              <p className="text-gray-600">
                Regular workshops, talks, and hands-on sessions covering the latest 
                Google technologies and best practices.
              </p>
            </div>

            <div className={`text-center transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="w-16 h-16 bg-google-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2 1l-3 4.5L8.5 11H5v2h2.5l3.5 1.5 2.5-3.75c.1.25.25.5.5.75L12 18h8z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Build Networks</h3>
              <p className="text-gray-600">
                Connect with like-minded developers and create lasting professional 
                relationships within the tech community.
              </p>
            </div>

            <div className={`text-center transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="w-16 h-16 bg-google-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                  <path d="M9 11H7v9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2V5a3 3 0 0 0-3-3 3 3 0 0 0-3 3v6z"/>
                  <circle cx="12" cy="15" r="1"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Create Impact</h3>
              <p className="text-gray-600">
                Work on meaningful projects that make a difference in our local 
                community and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
