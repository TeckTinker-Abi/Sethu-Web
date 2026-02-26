import React from 'react';

const PlacementDrive = () => {
  const placementImages = [
    { id: 1, src: "https://res.cloudinary.com/dsa0chszi/image/upload/v1772105590/Placements1_amxunl.jpg", company: "ZOHO Tech Drive 2026" },
    { id: 2, src: "https://res.cloudinary.com/dsa0chszi/image/upload/v1772105591/Placements2_yrn0ia.jpg", company: "DAXFO Hiring 2026" },
    { id: 3, src: "https://res.cloudinary.com/dsa0chszi/image/upload/v1772105592/Placements3_e4ukj6.jpg", company: "KAAR Tech 2026" },
  ];

  return (
    <section className="bg-warm-ivory py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header with Premium Branding */}
        <div className="text-center mb-20">
          <span className="text-luxury-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs block mb-4">
            Career Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-deep-espresso mb-6">
            On-Campus Placement Drive
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto"></div>
        </div>

        {/* Placement Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
          {placementImages.map((item) => (
            <div 
              key={item.id} 
              className="group relative rounded-xl overflow-hidden shadow-[0_15px_40px_rgba(30,20,15,0.08)] bg-white transition-all duration-700 hover:-translate-y-3"
            >
              {/* Image with Luxury Zoom */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.src}
                  alt={item.company}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Subtle Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-espresso/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Company Tag - Pops on Hover */}
                <div className="absolute bottom-4 left-4 transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="bg-luxury-gold text-white text-[9px] font-bold uppercase tracking-widest px-4 py-2 rounded-sm shadow-lg">
                    {item.company}
                  </p>
                </div>
              </div>

              {/* Decorative Accent (Luxury Gold Line) */}
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-luxury-gold transition-all duration-700 group-hover:w-full"></div>
            </div>
          ))}
        </div>

        {/* Placement Statistics Link */}
        <div className="mt-16 text-center">
          <button className="group inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-deep-espresso hover:text-luxury-gold transition-colors">
            View All Placement Details
            <span className="w-10 h-[1px] bg-luxury-gold group-hover:w-16 transition-all duration-500"></span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default PlacementDrive;