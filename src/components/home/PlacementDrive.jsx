import React, { useState, useEffect } from 'react';

const PlacementDrive = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Track image for luxury modal

  const placementImages = [
    { id: 1, src: "https://res.cloudinary.com/dsa0chszi/image/upload/v1772105590/Placements1_amxunl.jpg", company: "ZOHO Tech Drive 2026" },
    { id: 2, src: "https://res.cloudinary.com/dsa0chszi/image/upload/v1772105591/Placements2_yrn0ia.jpg", company: "DAXFO Hiring 2026" },
    { id: 3, src: "https://res.cloudinary.com/dsa0chszi/image/upload/v1772105592/Placements3_e4ukj6.jpg", company: "KAAR Tech 2026" },
  ];

  useEffect(() => {
    let interval;
    if (!isPaused && !selectedImage) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % placementImages.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [placementImages.length, isPaused, selectedImage]);

  return (
    <section className="bg-warm-ivory py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
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
        <div className="grid md:grid-cols-3 gap-10 lg:gap-12 items-center">
          {placementImages.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div 
                key={item.id} 
                onMouseEnter={() => {
                  setIsPaused(true);
                  setActiveIndex(index);
                }}
                onMouseLeave={() => setIsPaused(false)}
                onClick={() => setSelectedImage(item)} // Trigger luxury modal
                className={`group relative rounded-xl overflow-hidden shadow-[0_15px_40px_rgba(30,20,15,0.08)] bg-white transition-all duration-700 cursor-pointer ${
                  isActive 
                  ? "scale-105 shadow-[0_30px_70px_rgba(196,160,82,0.2)] -translate-y-4 ring-1 ring-luxury-gold/20" 
                  : "scale-100 opacity-60 grayscale-[20%]"
                }`}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={item.src}
                    alt={item.company}
                    className={`w-full h-full object-cover transition-transform duration-[2000ms] ${
                      isActive ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-deep-espresso/80 via-transparent to-transparent transition-opacity duration-700 ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}></div>
                  
                  <div className={`absolute bottom-6 left-6 transition-all duration-700 ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                  }`}>
                    <p className="bg-luxury-gold text-white text-[10px] font-bold uppercase tracking-[0.2em] px-5 py-2.5 rounded-sm shadow-xl">
                      {item.company}
                    </p>
                  </div>
                </div>
                <div className={`absolute bottom-0 left-0 h-[4px] bg-luxury-gold transition-all duration-700 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* Luxury Modal Overlay */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-deep-espresso/90 backdrop-blur-xl animate-in fade-in duration-500"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-luxury-gold/30 animate-in zoom-in-95 duration-500"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                className="absolute top-6 right-6 z-50 text-warm-ivory hover:text-luxury-gold transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <img 
                src={selectedImage.src} 
                alt={selectedImage.company} 
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              <div className="bg-white p-8 border-t border-luxury-gold/10 flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-serif text-deep-espresso">{selectedImage.company}</h3>
                  <p className="text-luxury-gold text-xs font-bold uppercase tracking-widest mt-1">Placement Excellence 2026</p>
                </div>
                <div className="w-16 h-[2px] bg-luxury-gold"></div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Link */}
        <div className="mt-20 text-center">
          <button className="group inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-deep-espresso hover:text-luxury-gold transition-colors">
            View All Placement Details
            <span className="w-10 h-[1px] bg-luxury-gold group-hover:w-20 transition-all duration-500"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlacementDrive;