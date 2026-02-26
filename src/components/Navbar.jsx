import React, { useState, useEffect } from 'react';
import EnquiryForm from "./EnquiryForm";
import { createPortal } from "react-dom";

// Reusable Dropdown Component with Hover "Pop" and Slide Effect
const NavDropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`flex items-center gap-1.5 relative text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.12em] xl:tracking-[0.15em] transition-colors duration-300 py-4 ${isOpen ? 'text-luxury-gold' : 'text-deep-espresso/80'
          }`}
      >
        {title}
        <svg
          className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180 text-luxury-gold' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
        <span className={`absolute bottom-3 left-0 h-[1.5px] bg-luxury-gold transition-all duration-300 ${isOpen ? 'w-full' : 'w-0'}`} />
      </button>

      {/* Dropdown Menu Container */}
      <div
        className={`absolute top-[90%] left-0 z-[60] transition-all duration-500 transform ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
          }`}
      >
        <div className="w-64 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-t-[3px] border-luxury-gold overflow-hidden mt-2">
          <div className="py-2 bg-warm-ivory/30 max-h-[60vh] overflow-y-auto custom-scrollbar">
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
  const [isFormOpen, setIsFormOpen] = useState(false);

  // 🔒 Lock background scroll when form opens
  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isFormOpen]);

  // 📌 Navbar scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dropdownData = {
    College: ["Profile", "Vision & Mission", "Organogram", "AICTE Approval", "Accreditation", "HR Policy", "Rules & Regulations", "ISR", "Statutory Bodies", "Committees", "Diary of Events"],
    Admission: ["Admission", "Apply Online", "International Admissions", "Student Intake Details", "Contact Us", "E-Brochure"],
    Academics: ["Courses Offered", "Curriculum Development", "Regulation", "ICT Tools", "Distinctive Feature", "Academic Calendar"],
    Department: ["Mechanical Engg", "Computer Science & Engg", "Electronics & Commn. Engg", "Electrical & Electronics Engg", "Information Technology", "Civil Engineering", "Agricultural Engineering", "Biomedical Engineering", "Chemical Engineering", "Bio Technology", "AI & Data Science"],
    Placement: ["Training & Placement Cell", "Placement Day", "Placement Details", "Placement Process", "Recruiters", "Contacts", "Entrepreneurship Development"],
    Facilities: ["Central Library", "Hall of Residence", "Sports", "Transport"],
    Research: ["Approved Research Centres", "Recognized Supervisors", "Research Scholars", "Ph.D Holders", "Sponsored Research", "Google Scholar", "R & D Innovation Cell"]
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-4 sm:px-6 ${
        isScrolled 
          ? "bg-warm-ivory/95 backdrop-blur-md shadow-lg py-1" 
          : "bg-warm-ivory py-2" 
      }`}
    >
      <div className="w-full flex justify-between items-center px-3 sm:px-4 md:px-6">        {/* Logo Section with Accreditation (Responsive sizes) */}
        <div className="flex items-center gap-2 sm:gap-4 group cursor-pointer flex-shrink-0">
          <div className="relative">
            <img
              src="images/logo.webp"
              alt="Sethu Logo"
              className="h-10 sm:h-14 md:h-16 lg:h-18 w-auto transition-all duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-luxury-gold/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="border-l border-deep-espresso/10 pl-2 sm:pl-4 flex flex-col justify-center">
            <h1 className="font-serif text-xs sm:text-sm md:text-lg lg:text-xl leading-tight text-deep-espresso truncate max-w-[150px] sm:max-w-none">              SETHU INSTITUTE OF TECHNOLOGY
            </h1>
            <div className="mt-1 hidden sm:block">
              <p className="text-[7px] md:text-[9px] font-bold text-luxury-gold uppercase tracking-wider">
                An Autonomous Institution | Accredited with 'A++' Grade by NAAC
              </p>
              <p className="hidden md:block text-[6px] md:text-[8px] text-deep-espresso/60 uppercase mt-0.5">
                Permanently Affiliated to Anna University Chennai, Approved by AICTE - New Delhi.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Navigation - Hidden on Surface Pro 7 Vertical and small screens */}
        <div className="hidden lg:flex gap-3 xl:gap-2 items-center px-4">   
                 <a href="/" className="text-[10px] xl:text-[11px] font-bold uppercase tracking-widest text-deep-espresso/80 hover:text-luxury-gold transition-colors py-4 px-1 xl:px-2">Home</a>
          {Object.entries(dropdownData).map(([title, items]) => (
            <NavDropdown key={title} title={title} items={items} />
          ))}
          <a href="#" className="text-[10px] xl:text-[11px] font-bold uppercase tracking-widest text-deep-espresso/80 hover:text-luxury-gold transition-colors py-4 px-1 xl:px-2">About</a>
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3 sm:gap-6 flex-shrink-0">
          <button
            onClick={() => setIsFormOpen(true)}
            className="relative group overflow-hidden active:scale-95 transition-all hidden md:block"          >            <span className="absolute -top-1 -right-1 z-30 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <div className="relative z-10 bg-gold-gradient px-3 py-1.5 md:px-5 md:py-2 shadow-md rounded-md">              <span className="relative z-20 text-white text-[10px] md:text-[11px] font-black tracking-widest uppercase">Apply Now</span>
              <div className="absolute top-0 -inset-full h-full w-full z-30 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-700 group-hover:left-full" />
            </div>
          </button>

          {/* Mobile Menu Toggle - Visible on Tablets/Surface Pro Vertical */}
          <button className="min-[1280px]:hidden flex flex-col gap-1.5 p-2 group" onClick={() => setIsMobileMenuOpen(true)}>
            <div className="w-7 h-[2px] bg-deep-espresso group-hover:bg-luxury-gold transition-colors" />
            <div className="w-7 h-[2px] bg-deep-espresso group-hover:bg-luxury-gold transition-colors" />
            <div className="w-5 h-[2px] bg-deep-espresso group-hover:bg-luxury-gold transition-colors self-end" />
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu Overlay (Scrollable) */}
      <div className={`fixed inset-0 bg-warm-ivory z-[100] transition-all duration-700 min-[1280px]:hidden flex flex-col ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}>
        <div className="flex justify-between items-center px-8 py-6 border-b border-deep-espresso/5 bg-white">
          <span className="font-serif text-xl italic text-luxury-gold">Campus Navigation</span>
          <button className="text-4xl font-light text-deep-espresso" onClick={() => setIsMobileMenuOpen(false)}>&times;</button>
        </div>

        <div className="flex flex-col flex-grow overflow-y-auto py-8 px-6 space-y-4">
          <a href="/" className="font-bold text-sm uppercase tracking-widest text-deep-espresso border-b border-deep-espresso/5 pb-2">Home</a>

          {Object.entries(dropdownData).map(([category, list]) => (
            <details key={category} className="group border-b border-deep-espresso/5 pb-2">
              <summary className="list-none flex justify-between items-center font-bold text-sm uppercase tracking-widest text-deep-espresso cursor-pointer">
                {category}
                <span className="transition-transform group-open:rotate-180">↓</span>
              </summary>
              <div className="mt-3 grid grid-cols-1 gap-2 pl-4 border-l-2 border-luxury-gold/20">
                {list.map(item => (
                  <a key={item} href="#" className="text-[11px] uppercase text-deep-espresso/70 py-1 hover:text-luxury-gold transition-colors">{item}</a>
                ))}
              </div>
            </details>
          ))}

          <a href="#" className="font-bold text-sm uppercase tracking-widest text-deep-espresso border-b border-deep-espresso/5 pb-2">About</a>

          <button
            onClick={() => setIsFormOpen(true)}
            className="mt-4 bg-gold-gradient text-white py-4 font-bold tracking-[0.2em] uppercase shadow-xl active:scale-95 transition-transform"
          >
            Apply Now
          </button>
        </div>
      </div>
     {isFormOpen &&
  createPortal(
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center px-4 py-10 overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-xl shadow-[0_30px_80px_rgba(0,0,0,0.25)] relative animate-[fadeIn_.3s_ease-in-out]">
        <button
          onClick={() => setIsFormOpen(false)}
          className="absolute top-5 right-6 text-3xl font-light text-deep-espresso hover:text-red-500 transition"
        >
          &times;
        </button>
        <EnquiryForm />
      </div>
    </div>,
    document.body
  )}
    </nav>
  );
};

export default Navbar;

