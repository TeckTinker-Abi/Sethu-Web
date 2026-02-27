import React from "react";

const Placements = () => {
  const stats = [
    { number: "92%", label: "Placement Rate", sub: "Annual Average" },
    { number: "120+", label: "Elite Recruiters", sub: "Fortune 500 Partners" },
    { number: "12 LPA", label: "Highest Package", sub: "International Offer" },
    { number: "1000+", label: "Annual Offers", sub: "Class of 2026" },
  ];

  // Doubling the array ensures a seamless infinite loop
  const partners = ["Google", "Microsoft", "TCS", "Infosys", "Amazon", "Zoho", "Accenture", "Cognizant", "Wyn Sync", "Wrench Wrise"];
  const doublePartners = [...partners, ...partners];

  return (
    <section className="bg-warm-ivory py-16 px-6 overflow-hidden relative">
      {/* Luxury Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-luxury-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-luxury-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs block mb-4">
            Professional Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-deep-espresso mb-6">
            Placements & Career Support
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto"></div>
        </div>

        {/* Stats Grid with Light Curves */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12 mb-24">
          {stats.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-[0_15px_40px_rgba(30,20,15,0.05)] border border-deep-espresso/5 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 group"
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-luxury-gold mb-3 transition-transform duration-500 group-hover:scale-110">
                {item.number}
              </h3>
              <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-deep-espresso mb-1">
                {item.label}
              </p>
              <p className="text-[9px] md:text-[10px] uppercase tracking-tighter text-deep-espresso/40">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Running Partners Section */}
        <div className="pt-16 border-t border-deep-espresso/10">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-deep-espresso/60 mb-10 animate-pulse">
            Our Graduates are Trusted by Global Leaders
          </p>
          
          {/* Infinite Scroll Container */}
          <div className="relative flex overflow-x-hidden group">
            <div className="flex animate-scroll whitespace-nowrap gap-12 md:gap-24 py-4">
              {doublePartners.map((partner, idx) => (
                <span 
                  key={idx} 
                  className="text-xl md:text-2xl font-serif font-black tracking-tighter text-deep-espresso opacity-40 grayscale hover:grayscale-0 hover:opacity-100 hover:text-luxury-gold hover:scale-125 transition-all duration-500 cursor-default px-4"
                >
                  {partner}
                </span> 
              ))}
            </div>

            {/* Mirroring div for seamless loop */}
            <div className="flex absolute top-0 animate-scroll2 whitespace-nowrap gap-12 md:gap-24 py-4">
              {doublePartners.map((partner, idx) => (
                <span 
                  key={idx} 
                  className="text-xl md:text-2xl font-serif font-black tracking-tighter text-deep-espresso opacity-40 grayscale hover:grayscale-0 hover:opacity-100 hover:text-luxury-gold hover:scale-125 transition-all duration-500 cursor-default px-4"
                >
                  {partner}
                </span> 
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Required CSS for the running effect - Add this to your index.css or a style tag */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes scroll2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll2 {
          animation: scroll2 30s linear infinite;
        }
        .group:hover .animate-scroll,
        .group:hover .animate-scroll2 {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};

export default Placements;