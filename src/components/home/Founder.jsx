import React from 'react';

const Founder = () => {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      {/* REDUCED: Changed back to 2 equal columns (lg:grid-cols-2) 
          to give the text more prominence.
      */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

        {/* Left Content: Narrative & Vision */}
        <div className="order-2 lg:order-1">
          <span className="text-luxury-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs block mb-4">
            Leadership & Legacy
          </span>
          
          <h2 className="text-4xl md:text-5xl font-serif text-deep-espresso mb-6 leading-tight">
            Founder & Chairman
          </h2>

          <div className="w-16 h-[2px] bg-luxury-gold mb-10"></div>

          <div className="space-y-6 text-deep-espresso/70 font-light leading-relaxed text-base md:text-lg">
            <p>
              With a profound vision to impart technical knowledge to economically, 
              socially, and industrially backward communities, our Founder & Chairman 
              established <span className="text-deep-espresso font-semibold">Sethu Institute of Technology</span> in 1995.
            </p>

            <p>
              Located in Pulloor village near Kariapatti, the institution was founded 
              on the principle of empowering rural youth through academic excellence 
              and professional empowerment.
            </p>
            
            <p className="italic font-serif text-luxury-gold/80 pt-4 border-t border-luxury-gold/10">
              "Providing quality education is not just a pursuit; it is a commitment 
              to the future of our youth."
            </p>
          </div>

          <div className="mt-12">
            <button className="group relative px-10 py-4 overflow-hidden bg-deep-espresso text-warm-ivory transition-all duration-300 rounded-xl hover:shadow-2xl active:scale-95">
              <span className="relative z-10 text-[10px] font-bold uppercase tracking-widest">
                Our Founder's Story
              </span>
              <div className="absolute inset-0 bg-luxury-gold translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
            </button>
          </div>
        </div>

        {/* Right Image: Reduced Size Portrait */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          {/* REDUCED: Changed max-w-[700px] to max-w-[450px] for a more elegant, smaller size */}
          <div className="relative group w-full max-w-[450px]"> 
            
            {/* Main Portrait with Light Curve */}
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl transition-transform duration-700 group-hover:-translate-x-2 group-hover:-translate-y-2">
              <img
                src="https://res.cloudinary.com/dsa0chszi/image/upload/v1772108551/Founder_eb3ai4.webp" 
                alt="Founder & Chairman"
                className="w-full h-auto aspect-[4/5] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
            </div>

            {/* Decorative Frame - Adjusted offset for the smaller scale */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-[1.5px] border-luxury-gold/30 rounded-2xl transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            
            {/* Floating Accreditation Badge */}
            <div className="absolute -top-4 -left-4 z-20 bg-warm-ivory p-4 shadow-xl rounded-xl border border-luxury-gold/10">
               <p className="text-luxury-gold text-[10px] font-black uppercase tracking-widest leading-none mb-1">
                NAAC A++
              </p>
              <p className="text-deep-espresso/40 text-[8px] font-bold uppercase tracking-tighter">
                Institutional Quality
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Founder;