import React from 'react';

const WhyChoose = () => {
  const features = [
    {
      title: "Accredited & Recognized",
      desc: "NAAC A++ Grade | NBA Accredited (Tier-I) | Autonomous status by UGC & Anna University.",
      icon: "🏆"
    },
    {
      title: "Prime Campus Location",
      desc: "132-acre eco-friendly campus strategically located on the Madurai–Tuticorin NH near Madurai Airport.",
      icon: "🌿"
    },
    {
      title: "Academic Excellence",
      desc: "Choice Based Credit System with a focus on Smart Laboratories, Research, and Sustainable Innovation.",
      icon: "🎓"
    },
  ];

  return (
    <section className="bg-warm-ivory py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header - Luxury Branding */}
        <div className="text-center mb-20">
          <span className="text-luxury-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs block mb-4">
            Institutional Merit
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-deep-espresso mb-6">
            Why Choose Sethu
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto mb-8"></div>
          <p className="text-deep-espresso/60 max-w-2xl mx-auto text-sm md:text-lg font-light leading-relaxed italic">
            "Building excellence through quality education, strong values, 
            and industry-driven innovation since 1995".
          </p>
        </div>

        {/* Features Grid with Light Curved Cards */}
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-10 transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(30,20,15,0.06)] border border-deep-espresso/5"
            >
              {/* Luxury Gold Top Accent */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-luxury-gold transition-all duration-500 group-hover:h-[6px]"></div>

              {/* Floating Icon/Badge */}
              <div className="mb-8 text-3xl opacity-80 group-hover:scale-110 transition-transform duration-500 origin-left">
                {item.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-serif text-deep-espresso mb-5 group-hover:text-luxury-gold transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-deep-espresso/60 text-sm leading-relaxed font-light">
                {item.desc}
              </p>

              {/* Decorative Corner Element */}
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-luxury-gold/10 rounded-br-xl transition-all duration-500 group-hover:border-luxury-gold/40 group-hover:w-12 group-hover:h-12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;