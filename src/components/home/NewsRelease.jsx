import React, { useState, useEffect } from 'react';

const NewsRelease = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null); // Luxury Modal State

  const news = [
    {
      title: "Entrepreneurship Innovation Award",
      desc: "The Management and the Principal congratulate the students for receiving a total grant of ₹4.4 lakhs for startup innovation conducted by EDII, Chennai.",
      image: "https://res.cloudinary.com/dsa0chszi/image/upload/v1772110040/News_Event_1_sba2zp.jpg",
      date: "12 JAN 2026",
      tag: "Achievement"
    },
    {
      title: "National Level Research Conference",
      desc: "Sethu Institute of Technology successfully organized a National Conference on Emerging Technologies with participation from leading institutions across India.",
      image: "https://res.cloudinary.com/dsa0chszi/image/upload/v1772110048/News_Event_2_dpjgfd.jpg",
      date: "05 DEC 2025",
      tag: "Conference"
    },
    {
      title: "MoU Signed with Leading IT Company",
      desc: "The institution signed a Memorandum of Understanding with a reputed IT company to strengthen industry-academia collaboration and internships.",
      image: "https://res.cloudinary.com/dsa0chszi/image/upload/v1772110056/News_Event_3_zfquf0.webp",
      date: "20 NOV 2025",
      tag: "Collaboration"
    },
  ];

  // Auto-Cycle logic: Pauses if a user hovers OR if the modal is open
  useEffect(() => {
    let interval;
    if (!isPaused && !selectedNews) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % news.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [news.length, isPaused, selectedNews]);

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-luxury-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs block mb-4">
            Institutional Press
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-deep-espresso mb-6">
            News Release
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto"></div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {news.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                onMouseEnter={() => {
                  setIsPaused(true);
                  setActiveIndex(index);
                }}
                onMouseLeave={() => setIsPaused(false)}
                onClick={() => setSelectedNews(item)}
                className={`transition-all duration-700 ease-in-out cursor-pointer p-4 rounded-2xl ${
                  isActive 
                  ? "scale-105 shadow-[0_20px_50px_rgba(30,20,15,0.08)] bg-warm-ivory/10 translate-y-[-10px]" 
                  : "opacity-50 grayscale-[40%]"
                }`}
              >
                {/* Image Container with Luxury Zoom */}
                <div className={`relative overflow-hidden aspect-[16/10] rounded-xl transition-all duration-700 ${
                  isActive ? "ring-2 ring-luxury-gold/30 shadow-2xl" : "shadow-lg"
                }`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-transform duration-[2000ms] ${
                      isActive ? "scale-110" : "scale-100"
                    }`}
                  />
                  
                  {/* Minimalist Date Badge */}
                  <div className={`absolute top-4 left-4 backdrop-blur-sm text-warm-ivory text-[9px] font-bold tracking-[0.2em] px-4 py-2 uppercase rounded-md shadow-lg transition-colors duration-500 ${
                    isActive ? "bg-luxury-gold" : "bg-deep-espresso/90"
                  }`}>
                    {item.date}
                  </div>
                </div>

                {/* Content Section */}
                <div className="pt-8 px-2">
                  <span className="text-luxury-gold text-[9px] font-bold uppercase tracking-[0.25em] mb-4 block">
                    {item.tag}
                  </span>
                  
                  <h3 className={`text-xl font-serif mb-4 leading-tight transition-colors duration-700 ${
                    isActive ? "text-luxury-gold" : "text-deep-espresso"
                  }`}>
                    {item.title}
                  </h3>

                  <p className="text-deep-espresso/60 text-sm font-light leading-relaxed mb-6 line-clamp-2">
                    {item.desc}
                  </p>

                  <button className="group/btn inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-deep-espresso">
                    <span>Read Full Story</span>
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
        {selectedNews && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-deep-espresso/90 backdrop-blur-xl animate-in fade-in duration-500"
            onClick={() => setSelectedNews(null)}
          >
            <div 
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-luxury-gold/20 animate-in zoom-in-95 duration-500"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Icon */}
              <button 
                className="absolute top-6 right-6 z-50 text-warm-ivory hover:text-luxury-gold transition-colors drop-shadow-md"
                onClick={() => setSelectedNews(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <img 
                src={selectedNews.image} 
                alt={selectedNews.title} 
                className="w-full h-auto max-h-[60vh] object-cover"
              />
              
              <div className="p-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-luxury-gold text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded">
                    {selectedNews.tag}
                  </span>
                  <span className="text-deep-espresso/40 text-[10px] font-bold tracking-widest uppercase">
                    {selectedNews.date}
                  </span>
                </div>
                <h3 className="text-3xl font-serif text-deep-espresso mb-4 leading-tight">
                  {selectedNews.title}
                </h3>
                <p className="text-deep-espresso/60 text-base font-light leading-relaxed">
                  {selectedNews.desc}
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

export default NewsRelease;