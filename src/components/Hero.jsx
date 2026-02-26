import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dsa0chszi/video/upload/v1772097504/Final_Sethu_Promo_Abi_mz77ei.mp4"   // Put your video inside public/videos/
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Luxury Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 text-white">

        <span className="text-gold font-semibold uppercase tracking-[0.4em] text-xs md:text-sm block mb-4">
          Established 1995
        </span>

        <h1 className="text-4xl md:text-7xl font-heading leading-tight mb-6">
          Gateway to Knowledge <br />
          <span className="italic text-gold">and Success</span>
        </h1>

        <p className="text-sm md:text-lg text-white/90 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
          Shaping future-ready professionals through quality technical education,
          innovation, and strong industry linkages.
        </p>

        {/* Call To Action Buttons */}
        <div className="mt-10 flex justify-center gap-6">
          <button className="bg-gold text-primary px-8 py-3 rounded-md font-semibold hover:scale-105 transition">
            Apply Now
          </button>

          <button className="border border-white px-8 py-3 rounded-md hover:bg-white hover:text-primary transition">
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;