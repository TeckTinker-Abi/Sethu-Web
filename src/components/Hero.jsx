import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center">

      {/* Background Video with Opacity Control */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-4" // Reduced opacity for a darker, luxury look
          src="https://res.cloudinary.com/dsa0chszi/video/upload/v1772097504/Final_Sethu_Promo_Abi_mz77ei.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Enhanced Luxury Overlay: Deep Espresso Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-espresso/90 via-deep-espresso/40 to-deep-espresso/90 z-1"></div>

      {/* Premium Content Section */}
      <div className="relative z-10 max-w-5xl px-6">
        
        {/* Animated Badge */}
        <span className="italic text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.5)] font-bold">
          Established 1995
        </span>

        {/* Headline with Luxury Dark/Gold contrast */}
        <h1 className="text-4xl md:text-7xl font-serif leading-tight mb-8 text-white drop-shadow-2xl">
          Gateway to Knowledge <br />
<span className="italic text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.5)] font-bold">
  and Success
</span>
        </h1>

        {/* Subtext with High-End Tracking */}
        <p className="text-sm md:text-xl text-warm-ivory/80 max-w-3xl mx-auto font-light tracking-wide leading-relaxed italic">
          "Shaping future-ready professionals through quality technical education, 
          innovation, and strong industry linkages".
        </p>

        {/* Decorative Luxury Element (Thin Gold Line) */}
        <div className="mt-12 flex justify-center items-center gap-4">
          <div className="h-[1px] w-12 bg-luxury-gold/30"></div>
          <div className="w-2 h-2 rounded-full border border-luxury-gold/50"></div>
          <div className="h-[1px] w-12 bg-luxury-gold/30"></div>
        </div>

      </div>

      {/* Subtle Bottom Glow to blend with next section */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-warm-ivory to-transparent z-10 opacity-20"></div>

    </section>
  );
};

export default Hero;