import React from 'react';

const LatestEvents = () => {
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
        <div className="grid md:grid-cols-3 gap-12">
          {events.map((event, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              {/* Image Container with Luxury Zoom and Light Curve */}
              <div className="relative overflow-hidden aspect-[16/10] mb-8 shadow-2xl rounded-xl">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Floating Tag Overlay with Match Curve */}
                <div className="absolute top-4 right-4 bg-warm-ivory/90 backdrop-blur-sm px-4 py-1.5 shadow-sm rounded-lg">
                  <p className="text-[9px] font-bold text-luxury-gold uppercase tracking-widest">
                    {event.tag}
                  </p>
                </div>

                {/* Date Overlay (Flush Bottom) */}
                <div className="absolute bottom-0 left-0 bg-deep-espresso text-warm-ivory text-[9px] font-bold tracking-[0.2em] px-5 py-3 uppercase transition-colors duration-500 group-hover:bg-luxury-gold rounded-tr-lg">
                  {event.date}
                </div>
              </div>

              {/* Content Section */}
              <div className="px-1">
                <h3 className="text-xl font-serif text-deep-espresso mb-4 leading-snug group-hover:text-luxury-gold transition-colors duration-300">
                  {event.title}
                </h3>

                <p className="text-deep-espresso/60 text-sm font-light leading-relaxed mb-6 line-clamp-2">
                  {event.desc}
                </p>

                {/* Minimalist Read More */}
                <button className="group/link inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-deep-espresso">
                  <span>Read Article</span>
                  <div className="w-6 h-[1px] bg-luxury-gold transition-all duration-300 group-hover/link:w-12"></div>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default LatestEvents;