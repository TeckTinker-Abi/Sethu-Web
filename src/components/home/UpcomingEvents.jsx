import React, { useState, useEffect } from 'react';

const UpcomingEvents = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null); // Luxury Modal State

  const events = [
    {
      date: "05",
      month: "MAR",
      title: "National Level Technical Symposium",
      desc: "Empowering innovation through national-level technical competitions, workshops, and expert guest lectures organized by the Department of Artificial Intelligence and Machine Learning.",
      image: "https://res.cloudinary.com/dsa0chszi/image/upload/v1772101066/Upcoming_Events_1_pkgehf.jpg",
      category: "Innovation"
    },
    {
      date: "12",
      month: "MAR",
      title: "Tamil Fest",
      desc: "Experience the vibrant heritage and cultural richness of Tamil Nadu through traditional performances and arts.",
      image: "https://res.cloudinary.com/dsa0chszi/image/upload/v1772109410/Upcoming_Events_2_mu5pqp.webp",
      category: "Culture"
    },
    {
      date: "20",
      month: "MAR",
      title: "Admission Opens On",
      desc: "Your journey toward engineering excellence begins here. Join the Sethu legacy for the upcoming academic year.",
      image: "https://res.cloudinary.com/dsa0chszi/image/upload/v1772109412/Upcoming_Events_3_ctpftp.jpg",
      category: "Academic"
    },
  ];

  useEffect(() => {
    let interval;
    if (!isPaused && !selectedEvent) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % events.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [events.length, isPaused, selectedEvent]);

  return (
    <section className="bg-warm-ivory py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-luxury-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs block mb-4">
            Campus Calendar
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-deep-espresso mb-6">
            Upcoming Events
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto"></div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {events.map((event, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                onMouseEnter={() => {
                  setIsPaused(true);
                  setActiveIndex(index);
                }}
                onMouseLeave={() => setIsPaused(false)}
                onClick={() => setSelectedEvent(event)}
                className={`transition-all duration-700 ease-in-out cursor-pointer p-4 rounded-2xl ${
                  isActive 
                  ? "scale-105 shadow-[0_20px_50px_rgba(196,160,82,0.15)] bg-white translate-y-[-10px]" 
                  : "opacity-60 grayscale-[30%]"
                }`}
              >
                {/* Image Section */}
                <div className={`relative overflow-hidden aspect-[4/3] rounded-xl transition-all duration-700 ${
                  isActive ? "ring-2 ring-luxury-gold/30 shadow-2xl" : "shadow-lg"
                }`}>
                  <img
                    src={event.image}
                    alt={event.title}
                    className={`w-full h-full object-cover transition-transform duration-[2000ms] ${
                      isActive ? "scale-110" : "scale-100"
                    }`}
                  />
                  
                  {/* Date Badge */}
                  <div className={`absolute top-0 left-0 text-warm-ivory px-5 py-4 text-center transition-colors duration-500 rounded-br-lg ${
                    isActive ? "bg-luxury-gold" : "bg-deep-espresso"
                  }`}>
                    <p className="text-2xl font-serif leading-none mb-1">{event.date}</p>
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase">{event.month}</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="pt-8 px-2">
                  <span className="text-luxury-gold text-[9px] font-bold uppercase tracking-[0.25em] mb-4 block">
                    {event.category}
                  </span>
                  
                  <h3 className={`text-xl font-serif mb-4 leading-tight transition-colors duration-700 ${
                    isActive ? "text-luxury-gold" : "text-deep-espresso"
                  }`}>
                    {event.title}
                  </h3>

                  <p className="text-deep-espresso/60 text-sm font-light leading-relaxed mb-6 line-clamp-2">
                    {event.desc}
                  </p>

                  <button className="group/btn inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-deep-espresso">
                    <span>View Event Details</span>
                    <div className={`h-[1px] bg-luxury-gold transition-all duration-700 ${
                      isActive ? "w-12" : "w-6"
                    }`}></div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Luxury Modal Overlay */}
        {selectedEvent && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-deep-espresso/90 backdrop-blur-xl animate-in fade-in duration-500"
            onClick={() => setSelectedEvent(null)}
          >
            <div 
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-luxury-gold/20 animate-in zoom-in-95 duration-500"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Icon */}
              <button 
                className="absolute top-6 right-6 z-50 text-warm-ivory hover:text-luxury-gold transition-colors drop-shadow-md"
                onClick={() => setSelectedEvent(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <img 
                src={selectedEvent.image} 
                alt={selectedEvent.title} 
                className="w-full h-auto max-h-[60vh] object-cover"
              />
              
              <div className="p-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-luxury-gold text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded">
                    {selectedEvent.date} {selectedEvent.month}
                  </span>
                  <span className="text-luxury-gold text-[10px] font-bold tracking-widest uppercase">
                    {selectedEvent.category}
                  </span>
                </div>
                <h3 className="text-3xl font-serif text-deep-espresso mb-4 leading-tight">
                  {selectedEvent.title}
                </h3>
                <p className="text-deep-espresso/60 text-base font-light leading-relaxed">
                  {selectedEvent.desc}
                </p>
                <div className="w-20 h-[1px] bg-luxury-gold mt-8"></div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default UpcomingEvents;