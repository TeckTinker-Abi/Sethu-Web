import React, { useState, useEffect } from 'react';

const LatestEvents = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null); // State for Luxury Modal

  const events = [
    {
      title: "Graduation Day 2026",
      desc: "Celebrating academic excellence and the achievements of our graduating students in a grand convocation ceremony.",
      image: "https://res.cloudinary.com/dsa0chszi/image/upload/v1772109224/latest2_qkq2dg.png",
      date: "12 MAR 2026",
      tag: "Convocation"
    },
    {
      title: "Placement Achievement 2026",
      desc: "Recognizing our students' success in securing positions with top-tier global recruiters during the recent drive.",
      image: "https://res.cloudinary.com/dsa0chszi/image/upload/v1772109221/latest_events_3_su7etw.jpg",
      date: "15 FEB 2026",
      tag: "Career"
    },
    {
      title: "Research Innovation Meet",
      desc: "A showcase of breakthrough student projects in sustainable agriculture and smart health monitoring systems.",
      image: "https://res.cloudinary.com/dsa0chszi/image/upload/v1772109225/Latestevents1_zxyzbh.jpg",
      date: "02 FEB 2026",
      tag: "Symposium"
    },
  ];

  useEffect(() => {
    let interval;
    // Auto-cycle only if not hovering AND modal is closed
    if (!isPaused && !selectedEvent) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % events.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [events.length, isPaused, selectedEvent]);

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <span className="text-luxury-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs block mb-4">
              News & Updates
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-deep-espresso">
              Latest Events
            </h2>
          </div>
          <div className="h-[1px] flex-grow bg-deep-espresso/10 mb-4 hidden md:block mx-10"></div>
          <button className="text-[10px] font-bold uppercase tracking-widest text-deep-espresso hover:text-luxury-gold transition-colors pb-4 border-b border-luxury-gold/30 whitespace-nowrap">
            Explore All News
          </button>
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
                onClick={() => setSelectedEvent(event)} // Open Luxury Modal
                className={`transition-all duration-700 ease-in-out cursor-pointer p-4 rounded-2xl ${
                  isActive 
                  ? "scale-105 shadow-[0_20px_50px_rgba(196,160,82,0.15)] bg-warm-ivory/20 translate-y-[-10px]" 
                  : "scale-100 opacity-60 grayscale-[30%]"
                }`}
              >
                {/* Image Container */}
                <div className={`relative overflow-hidden aspect-[16/10] mb-8 shadow-2xl rounded-xl transition-all duration-700 ${
                  isActive ? "ring-2 ring-luxury-gold/30" : ""
                }`}>
                  <img
                    src={event.image}
                    alt={event.title}
                    className={`w-full h-full object-cover transition-transform duration-[2000ms] ${
                      isActive ? "scale-110" : "scale-100"
                    }`}
                  />
                  
                  <div className="absolute top-4 right-4 bg-warm-ivory/90 backdrop-blur-sm px-4 py-1.5 shadow-sm rounded-lg">
                    <p className="text-[9px] font-bold text-luxury-gold uppercase tracking-widest">
                      {event.tag}
                    </p>
                  </div>

                  <div className={`absolute bottom-0 left-0 text-warm-ivory text-[9px] font-bold tracking-[0.2em] px-5 py-3 uppercase transition-colors duration-700 rounded-tr-lg ${
                    isActive ? "bg-luxury-gold" : "bg-deep-espresso"
                  }`}>
                    {event.date}
                  </div>
                </div>

                {/* Content Section */}
                <div className="px-1">
                  <h3 className={`text-xl font-serif mb-4 leading-snug transition-colors duration-700 ${
                    isActive ? "text-luxury-gold" : "text-deep-espresso"
                  }`}>
                    {event.title}
                  </h3>

                  <p className="text-deep-espresso/60 text-sm font-light leading-relaxed mb-6 line-clamp-2">
                    {event.desc}
                  </p>

                  <button className="group/link inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-deep-espresso">
                    <span>Read Article</span>
                    <div className={`h-[1px] bg-luxury-gold transition-all duration-700 ${
                      isActive ? "w-12" : "w-6"
                    }`}></div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Luxury Modal Component */}
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
                className="absolute top-6 right-6 z-50 text-deep-espresso hover:text-luxury-gold transition-colors"
                onClick={() => setSelectedEvent(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <img 
                src={selectedEvent.image} 
                alt={selectedEvent.title} 
                className="w-full h-auto max-h-[70vh] object-cover"
              />
              
              <div className="p-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-luxury-gold/10 text-luxury-gold text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded">
                    {selectedEvent.tag}
                  </span>
                  <span className="text-deep-espresso/40 text-[10px] font-bold tracking-widest uppercase">
                    {selectedEvent.date}
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

export default LatestEvents;