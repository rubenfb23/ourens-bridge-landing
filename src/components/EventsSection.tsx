
import React, { useEffect, useState } from 'react';

const EventsSection = () => {
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

    const element = document.getElementById('events');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const events = [
    {
      title: "Android Development Workshop",
      date: "March 15, 2024",
      time: "18:00 - 21:00",
      location: "Ourense Tech Hub",
      description: "Learn to build modern Android apps with Kotlin and Jetpack Compose",
      type: "Workshop"
    },
    {
      title: "Google Cloud Study Jam",
      date: "March 22, 2024", 
      time: "10:00 - 16:00",
      location: "Virtual Event",
      description: "Hands-on experience with Google Cloud Platform services",
      type: "Study Jam"
    },
    {
      title: "Flutter & Firebase Masterclass",
      date: "April 5, 2024",
      time: "17:30 - 20:30", 
      location: "University of Vigo - Ourense",
      description: "Build cross-platform apps with Flutter and Firebase backend",
      type: "Masterclass"
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Upcoming Events
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us for exciting workshops, talks, and networking events. 
            All skill levels welcome!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-google-blue-100 text-google-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {event.type}
                  </span>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">{event.date}</div>
                    <div className="text-sm text-gray-500">{event.time}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {event.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {event.description}
                </p>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="mr-2">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  {event.location}
                </div>
                
                <button className="w-full bg-google-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-google-blue-600 transition-colors duration-300">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
