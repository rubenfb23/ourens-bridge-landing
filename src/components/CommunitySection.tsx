
import React, { useEffect, useState } from 'react';

const CommunitySection = () => {
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

    const element = document.getElementById('community');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const testimonials = [
    {
      name: "María González",
      role: "Full Stack Developer",
      company: "Tech Startup Ourense",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      quote: "GDG Ourense has been instrumental in my career growth. The community is incredibly welcoming and the events are top-notch."
    },
    {
      name: "Carlos Rodríguez",
      role: "Android Developer", 
      company: "Freelancer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "I've learned so much from the workshops and met amazing developers. The networking opportunities are fantastic."
    },
    {
      name: "Ana Martínez",
      role: "UX Designer",
      company: "Digital Agency",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", 
      quote: "The diversity of topics and the quality of speakers make every event worth attending. Highly recommend joining!"
    }
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-br from-google-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Community
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join a vibrant community of developers, designers, and tech enthusiasts 
            passionate about Google technologies and innovation.
          </p>
        </div>

        {/* Community Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-google-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-google-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Events Hosted</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-google-blue-600 mb-2">25+</div>
            <div className="text-gray-600">Expert Speakers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-google-blue-600 mb-2">5+</div>
            <div className="text-gray-600">Years Strong</div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-500 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>

        {/* Join CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Join Our Community?
            </h3>
            <p className="text-gray-600 mb-6">
              Connect with fellow developers, attend exciting events, and grow your skills 
              with Google technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-google-blue-500 text-white px-8 py-3 rounded-full font-medium hover:bg-google-blue-600 transition-colors duration-300">
                Join WhatsApp Group
              </button>
              <button className="border border-google-blue-500 text-google-blue-500 px-8 py-3 rounded-full font-medium hover:bg-google-blue-50 transition-colors duration-300">
                Follow on Meetup
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
