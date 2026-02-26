import React, { useState, useEffect } from 'react';

const Hero = () => {
  const slides = [
    "https://res.cloudinary.com/dsa0chszi/image/upload/v1772005637/yacht_private_party_3_ptceup.webp", // Campus Architecture
    "https://res.cloudinary.com/dsa0chszi/image/upload/v1772018523/BURJ-KHALIFE-Hero-image-1-min-1_huaju7.webp", // Modern Labs
    "https://res.cloudinary.com/dsa0chszi/image/upload/v1772019377/serviceshero_yuazy4.avif", // Library/Study Spaces
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide logic for a fast, responsive feel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center">
      
      {/* Background Image Slideshow */}
      {slides.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Campus Slide ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-[5000ms] scale-110 active:scale-100"
            style={{ transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)' }}
          />
          {/* Luxury Overlay: Gradient from Deep Espresso to Transparent */}
          <div className="absolute inset-0 bg-gradient-to-b from-deep-espresso/40 via-transparent to-deep-espresso/60"></div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 max-w-5xl px-6">
        <span className="text-luxury-gold font-bold uppercase tracking-[0.4em] text-xs md:text-sm animate-fade-in block mb-4">
          Established 1995
        </span>
        
        <h1 className="text-4xl md:text-7xl font-serif text-white leading-tight mb-6 drop-shadow-lg">
          Gateway to Knowledge <br />
          <span className="italic text-luxury-gold">and Success</span>
        </h1>

        <p className="text-sm md:text-lg text-white/90 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
          Shaping future-ready professionals through quality technical education, 
          innovation, and strong industry linkages.
        </p>

        {/* Slide Indicators (Luxury Dots) */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 transition-all duration-500 ${
                index === currentSlide ? "w-12 bg-luxury-gold" : "w-4 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;