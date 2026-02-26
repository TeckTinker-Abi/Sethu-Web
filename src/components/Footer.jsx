import React from 'react';

const Footer = () => {
  return (
    /* FIXED: Changed bg-gray-900 to bg-[#0B1221] (Dark Navy from your image) */
    <footer className="bg-[#0B1221] text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Institutional Identity */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              {/* FIXED: Removed brightness-0 invert to make the logo visible in its natural colors */}
              <img 
                src="https://res.cloudinary.com/dsa0chszi/image/upload/v1772111692/Logo_grhjvg.png" 
                alt="Sethu Logo" 
                className="h-16 w-auto" 
              />
              <div>
                <h3 className="text-luxury-gold font-serif text-lg leading-tight uppercase tracking-tighter">
                  Sethu Institute <br /> of Technology
                </h3>
                <p className="text-[8px] font-bold tracking-[0.2em] text-warm-ivory/50 uppercase">
                  Autonomous Institution
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed font-light italic border-l border-luxury-gold/30 pl-4">
              "Building excellence through quality education and industry-driven innovation since 1995".
            </p>
          </div>

          {/* Column 2: Address & Location */}
          <div>
            <h4 className="text-luxury-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
              Our Campus
            </h4>
            <p className="text-sm leading-relaxed font-light">
              Madurai–Tuticorin National Highway, <br />
              Pulloor, Kariapatti, <br />
              Virudhunagar District, <br />
              Tamil Nadu - 626115.
            </p>
            <div className="mt-4 flex items-center gap-2 text-luxury-gold text-xs">
              <span className="w-4 h-[1px] bg-luxury-gold/40"></span>
              <a href="#" className="hover:text-warm-ivory transition-colors">View on Map</a>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-luxury-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Admissions</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Academic Programs</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Placement Records</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Campus Life</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">NAAC A++ Quality</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Engagement */}
          <div>
            <h4 className="text-luxury-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
              Connect With Us
            </h4>
            <div className="space-y-4 text-sm font-light">
              <p className="flex items-center gap-3">
                <span className="text-luxury-gold font-bold">T:</span> 04566-229706
              </p>
              <p className="flex items-center gap-3">
                <span className="text-luxury-gold font-bold">M:</span> +91-9943367007
              </p>
              <p className="flex items-center gap-3">
                <span className="text-luxury-gold font-bold">E:</span> sit@sethu.ac.in
              </p>
            </div>
            
            <div className="mt-8 flex gap-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <div className="w-8 h-8 rounded-full border border-warm-ivory/20 flex items-center justify-center hover:bg-luxury-gold transition-colors cursor-pointer text-xs">f</div>
              <div className="w-8 h-8 rounded-full border border-warm-ivory/20 flex items-center justify-center hover:bg-luxury-gold transition-colors cursor-pointer text-xs">in</div>
              <div className="w-8 h-8 rounded-full border border-warm-ivory/20 flex items-center justify-center hover:bg-luxury-gold transition-colors cursor-pointer text-xs">ig</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-warm-ivory/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-warm-ivory/30">
          <p>© 2026 Sethu Institute of Technology. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-luxury-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-luxury-gold transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;