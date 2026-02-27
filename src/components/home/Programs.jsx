import React from 'react';

const Programs = () => {
  const ugPrograms = [
    // Prioritized AI & Emerging Tech Departments
    "Computer Science & Engg(AI&ML)",
    "Artificial Intelli. & Data Science",
    "Computer Science & Engg(Cyber Security)",
    "Computer Science & Engg(IoT)",
    "Computer Science and Design",
    "Computer Science & Business Sys.",
    "Information Technology",
    "Electronics & Commn. Engg",
    "Electrical & Electronics Engg",
    "Mechanical Engg",
    "Civil Enginnering",
    "Agricultural Engineering",
    "Biomedical Engineering",
    "Chemical Engineering",
    "Bio Technology",
    "Science & Humanities"
  ];

  const pgPrograms = [
    "M.E. CAD/CAM",
    "M.E. Communication Systems",
    "M.E. Computer Science & Engg",
    "M.E. Power Electronics & Drives",
    "M.E. Structural Engineering",
    "M.E. Data Science",
    "Master of Business Admin (MBA)"
  ];

  return (
    <section className="bg-warm-ivory py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-luxury-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs block mb-4">
            Curriculum Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-deep-espresso mb-6">
            Academic Programs
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto mb-8"></div>
          <p className="text-deep-espresso/60 max-w-2xl mx-auto text-sm md:text-lg font-light leading-relaxed italic">
            "Empowering future-ready professionals through specialized technical education 
            and innovation-driven learning since 1995".
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24">
          
          {/* Undergraduate Programs (UG) */}
          <div className="group">
            <h3 className="text-xl md:text-2xl font-serif text-luxury-gold mb-10 flex items-center gap-4">
              Undergraduate Programs
              <div className="h-[1px] flex-grow bg-luxury-gold/20"></div>
            </h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {ugPrograms.map((prog, i) => (
                <li
                  key={i}
                  className="bg-white border border-deep-espresso/5 p-4 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-widest text-deep-espresso/80 transition-all duration-500 hover:bg-deep-espresso hover:text-warm-ivory hover:-translate-y-1 hover:shadow-xl cursor-default"
                >
                  {prog}
                </li>
              ))}
            </ul>
          </div>

          {/* Postgraduate Programs (PG) */}
          <div className="group">
            <h3 className="text-xl md:text-2xl font-serif text-luxury-gold mb-10 flex items-center gap-4">
              Postgraduate Programs
              <div className="h-[1px] flex-grow bg-luxury-gold/20"></div>
            </h3>
            <ul className="grid sm:grid-cols-1 gap-4">
              {pgPrograms.map((prog, i) => (
                <li
                  key={i}
                  className="bg-white border border-deep-espresso/5 p-5 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-widest text-deep-espresso/80 transition-all duration-500 hover:bg-luxury-gold hover:text-white hover:-translate-y-1 hover:shadow-xl cursor-default"
                >
                  {prog}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Accreditation Footer */}
        <div className="mt-20 pt-10 border-t border-deep-espresso/10 text-center">
          <p className="text-[10px] font-bold text-luxury-gold uppercase tracking-[0.3em]">
            NAAC A++ Accredited | Autonomous Institution
          </p>
        </div>

      </div>
    </section>
  );
};

export default Programs;    