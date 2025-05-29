
import React, { useEffect, useState } from 'react';

const CommunityPulseSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "GDG Ourense transformed my career. The community here is electric.",
      author: "María González",
      role: "Senior Developer"
    },
    {
      text: "Innovation happens here. Every event pushes boundaries.",
      author: "Carlos Rodríguez", 
      role: "Tech Lead"
    },
    {
      text: "Found my tribe. The connections I've made are invaluable.",
      author: "Ana Martínez",
      role: "UX Designer"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('pulse');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="pulse" className="py-32 bg-gray-900 relative">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Statistic */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="text-8xl md:text-9xl font-black text-google-blue-400 mb-4 leading-none">
              500+
            </div>
            <p className="text-2xl text-gray-300 font-light">
              Innovators <span className="text-white">Connected</span>
            </p>
          </div>

          {/* Rotating Testimonial */}
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="relative h-40 overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    index === currentTestimonial
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  <blockquote className="text-xl md:text-2xl text-gray-100 font-light mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="text-google-blue-400 font-medium">
                    {testimonial.author}
                    <span className="text-gray-400 ml-2">— {testimonial.role}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-google-blue-400' : 'bg-gray-600'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityPulseSection;
