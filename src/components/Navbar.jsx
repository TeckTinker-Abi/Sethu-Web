import React, { useState, useEffect } from 'react';

// Reusable Dropdown Component with "Pop" and "Luxury Gold" Hover Effects
const NavDropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className={`flex items-center gap-1.5 relative text-[11px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 py-4 ${
          isOpen ? 'text-luxury-gold' : 'text-deep-espresso/80'
        }`}
      >
        {title}
        <svg 
          className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180 text-luxury-gold' : ''}`} 
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
        {/* Animated Underline */}
        <span className={`absolute bottom-3 left-0 h-[1.5px] bg-luxury-gold transition-all duration-300 ${isOpen ? 'w-full' : 'w-0'}`} />
      </button>

      {/* Dropdown Menu Container */}
      <div 
        className={`absolute top-[90%] left-0 z-[60] transition-all duration-500 transform ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}
      >
        <div className="w-64 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-t-[3px] border-luxury-gold overflow-hidden mt-2">
          <div className="py-2 bg-warm-ivory/30 max-h-[70vh] overflow-y-auto custom-scrollbar">
            {items.map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="block px-6 py-3 text-[10px] font-semibold uppercase tracking-widest text-deep-espresso/70 
                           transition-all duration-300 border-b border-deep-espresso/5 last:border-0
                           hover:bg-warm-ivory hover:text-luxury-gold hover:pl-9 hover:scale-[1.05] origin-left"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dropdownData = {
    College: ["Profile", "Vision & Mission", "Organogram", "AICTE Approval", "Accreditation", "HR Policy", "Rules & Regulations", "ISR", "Statutory Bodies", "Committees", "Diary of Events"],
    Admission: ["Admission", "Apply Online", "International Admissions", "Student Intake Details", "Contact Us", "E-Brochure"],
    Academics: ["Courses Offered", "Curriculum Development", "Regulation", "ICT Tools", "Distinctive Feature", "Academic Calendar"],
    Department: ["Mechanical Engg", "Computer Science & Engg", "Electronics & Commn. Engg", "Electrical & Electronics Engg", "Information Technology", "Civil Engineering", "Agricultural Engineering", "Biomedical Engineering", "Chemical Engineering", "Bio Technology", "Science & Humanities", "AI & Data Science"],
    Placement: ["Training & Placement Cell", "Placement Day", "Placement Details", "Placement Process", "Recruiters", "Contacts", "Entrepreneurship Development"],
    Facilities: ["Central Library", "Hall of Residence", "Sports", "Transport"],
    Research: ["Approved Research Centres", "Recognized Supervisors", "Research Scholars", "Ph.D Holders", "Sponsored Research", "Google Scholar", "R & D Innovation Cell"]
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 ${
        isScrolled 
          ? "bg-warm-ivory/95 backdrop-blur-md shadow-lg py-2" 
          : "bg-white py-2" 
      }`}
    >
      <div className="w-full px-4 md:px-10 flex justify-between items-center">
        
           {/* Logo Section */}
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="relative">
            <img 
              src="images/logo.webp" 
              alt="Sethu Logo" 
              className="h-16 md:h-20 w-auto transition-all duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-luxury-gold/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
          <div className="hidden xl:block border-l border-deep-espresso/10 pl-4">
            <h1 className="font-serif text-2xl tracking-tighter leading-none text-deep-espresso">SETHU</h1>
            <p className="text-[9px] tracking-[0.3em] uppercase text-luxury-gold font-bold mt-1">Institute of Technology</p>
          </div>
        </div>

        
 


        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex gap-4 items-center">
          <a href="/" className="text-[11px] font-bold uppercase tracking-[0.15em] text-deep-espresso/80 hover:text-luxury-gold transition-colors py-4 px-2">Home</a>
          
          <NavDropdown title="College" items={dropdownData.College} />
          <NavDropdown title="Admission" items={dropdownData.Admission} />
          <NavDropdown title="Academics" items={dropdownData.Academics} />
          <NavDropdown title="Department" items={dropdownData.Department} />
          <NavDropdown title="Placement" items={dropdownData.Placement} />
          <NavDropdown title="Facilities" items={dropdownData.Facilities} />
          <NavDropdown title="Research" items={dropdownData.Research} />

          <a href="#" className="text-[11px] font-bold uppercase tracking-[0.15em] text-deep-espresso/80 hover:text-luxury-gold transition-colors py-4 px-2">About</a>
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-6">
          <button className="relative group p-[2px] overflow-hidden transition-all duration-300 active:scale-95">
            <span className="absolute -top-1 -right-1 z-30 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <div className="absolute inset-0 bg-luxury-gold/40 blur-xl scale-0 group-hover:scale-150 transition-transform duration-700 animate-pulse" />
            <div className="relative z-10 bg-gold-gradient px-8 py-3 shadow-[0_4px_20px_rgba(184,134,11,0.4)] group-hover:shadow-[0_10px_30px_rgba(184,134,11,0.6)] group-hover:-translate-y-0.5 transition-all duration-300">
              <span className="relative z-20 text-white text-[12px] font-black tracking-[0.25em] uppercase">Apply Now</span>
              <div className="absolute top-0 -inset-full h-full w-full z-30 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-700 group-hover:left-full ease-in-out" />
            </div>
          </button>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden flex flex-col gap-1.5 p-2 group" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <div className="w-7 h-[2px] bg-deep-espresso group-hover:bg-luxury-gold transition-colors" />
            <div className="w-7 h-[2px] bg-deep-espresso group-hover:bg-luxury-gold transition-colors" />
            <div className="w-5 h-[2px] bg-deep-espresso group-hover:bg-luxury-gold transition-colors self-end" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-warm-ivory z-[100] transition-all duration-700 lg:hidden flex flex-col ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}>
        <div className="flex justify-between items-center px-8 py-6 border-b border-deep-espresso/5">
           <span className="font-serif text-xl italic text-luxury-gold">Menu</span>
           <button className="text-4xl font-light text-deep-espresso" onClick={() => setIsMobileMenuOpen(false)}>&times;</button>
        </div>
        <div className="flex flex-col items-center justify-start flex-grow space-y-4 overflow-y-auto py-10 px-6">
          {Object.keys(dropdownData).map((category) => (
            <div key={category} className="w-full text-center border-b border-deep-espresso/5 pb-2">
              <h3 className="text-luxury-gold font-bold uppercase tracking-widest text-xs mb-2">{category}</h3>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                {dropdownData[category].slice(0, 3).map(item => (
                  <span key={item} className="text-deep-espresso/60 text-[10px] uppercase tracking-tighter">{item}</span>
                ))}
                <span className="text-luxury-gold text-[10px]">...</span>
              </div>
            </div>
          ))}
          <button className="mt-8 bg-gold-gradient text-white px-10 py-4 font-bold tracking-widest uppercase shadow-xl">Apply Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;