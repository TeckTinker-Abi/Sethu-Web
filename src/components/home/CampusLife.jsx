import React from 'react';

const CampusLife = () => {
  const images = [
    { 
      src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80", 
      label: "Cultural Festivals" 
    },
    { 
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80", 
      label: "Tech Symposiums" 
    },
    { 
      src: "https://res.cloudinary.com/dsa0chszi/image/upload/v1772111377/lifesethu_cbgyzt.jpg", 
      label: "Sports Excellence" 
    },
    { 
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80", 
      label: "Holistic Development" 
    },
  ];

  return (
    <section className="bg-warm-ivory py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-luxury-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs block mb-4">
            Vibrant Ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-deep-espresso mb-6">
            Life @ Sethu
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto mb-8"></div>
          <p className="text-deep-espresso/60 max-w-2xl mx-auto text-sm md:text-lg font-light leading-relaxed italic">
            "Cultural festivals, technical symposiums, sports excellence, 
            research forums, and holistic student development".
          </p>
        </div>

        {/* EQUAL ALIGNED GRID: Used grid-cols-2 lg:grid-cols-4 for perfect symmetry */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((item, index) => (
            <div 
              key={index} 
              /* FIXED: Removed asymmetrical spans to ensure all cards have equal width/height */
              className="relative group overflow-hidden rounded-xl shadow-lg transition-all duration-700 hover:shadow-2xl aspect-[4/5]"
            >
              {/* Image with Luxury Zoom Effect */}
              <img 
                src={item.src} 
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Luxury Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-espresso/90 via-deep-espresso/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-warm-ivory font-serif text-lg md:text-xl transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                  {item.label}
                </p>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-luxury-gold/50 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="group inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-deep-espresso hover:text-luxury-gold transition-colors">
            Discover Our Campus Story
            <span className="w-10 h-[1px] bg-luxury-gold group-hover:w-16 transition-all duration-500"></span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default CampusLife;