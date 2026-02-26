import React from 'react';

const UpcomingEvents = () => {
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
      desc: "Get In Touch.",
      image: "https://res.cloudinary.com/dsa0chszi/image/upload/v1772109410/Upcoming_Events_2_mu5pqp.webp",
      category: "Research"
    },
    {
      date: "20",
      month: "MAR",
      title: "Admission Opens On",
      desc: "Get ready to Explore the Sethu Institute of Technology.",
      image: "https://res.cloudinary.com/dsa0chszi/image/upload/v1772109412/Upcoming_Events_3_ctpftp.jpg",
      category: "Workshop"
    },
  ];

  return (
    <section className="bg-warm-ivory py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Title - Luxury Branding */}
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
        <div className="grid md:grid-cols-3 gap-12">
          {events.map((event, index) => (
            <div
              key={index}
              // ENHANCEMENT: Added rounded-xl (12px) for light curves and shadow for depth
              className="group flex flex-col bg-white rounded-xl overflow-hidden transition-all duration-700 hover:-translate-y-3 shadow-[0_10px_40px_rgba(30,20,15,0.05)]"
            >
              {/* Image Section - overflow-hidden ensures image curves with parent */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Modern Date Badge - Kept rectangular for academic authority contrast */}
                <div className="absolute top-0 left-0 bg-deep-espresso text-warm-ivory px-5 py-4 text-center transition-all duration-500 group-hover:bg-luxury-gold">
                  <p className="text-2xl font-serif leading-none mb-1">{event.date}</p>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase">{event.month}</p>
                </div>

                {/* Subtle Image Overlay */}
                <div className="absolute inset-0 bg-deep-espresso/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content Section */}
              <div className="p-8 border-x border-b border-deep-espresso/5 flex-grow flex flex-col rounded-b-xl">
                <span className="text-luxury-gold text-[9px] font-bold uppercase tracking-[0.25em] mb-4 block">
                  {event.category}
                </span>
                
                <h3 className="text-xl font-serif text-deep-espresso mb-4 leading-tight group-hover:text-luxury-gold transition-colors duration-300">
                  {event.title}
                </h3>

                <p className="text-deep-espresso/60 text-sm font-light leading-relaxed mb-8">
                  {event.desc}
                </p>

                {/* Animated Button */}
                <div className="mt-auto">
                  <button className="relative overflow-hidden group/btn flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-deep-espresso">
                    <span className="relative z-10">View Event Details</span>
                    <span className="w-4 h-[1px] bg-luxury-gold transition-all duration-300 group-hover/btn:w-10"></span>
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-deep-espresso/10"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default UpcomingEvents;