import React from 'react';

const Management = () => {
  const members = [
    {
      name: "Mr. S.M. Seeni Mohideen",
      position: "Chief Executive Officer",
      qualification: "B.Com., MBA.",
      image: "https://res.cloudinary.com/dsa0chszi/image/upload/v1772098914/Chief_Executive_Officer_zovmuw.jpg",
    },
    {
      name: "Dr.S.M.Seeni Mohamed Aliar Maraikkayar",
      position: "Joint Chief Executive Officer",
      qualification: "BE.,M.B.A.(UK).,M.E., Ph.D",
      image: "https://res.cloudinary.com/dsa0chszi/image/upload/v1772098914/Joint_Chief_Executive_Officer_kwse2r.jpg",
    },
    {
      name: "Ms.S.M.Nilofer Fathima",
      position: "Director Administration",
      qualification: "M.B.A, Ph.D",
      image: "https://res.cloudinary.com/dsa0chszi/image/upload/v1772098914/Director_Adminstration_iadujl.jpg",
    },
    {
      name: "Dr.S.M.Nazia Fathima",
      position: "Director - Research & Development",
      qualification: "B.Tech., M.E., Ph.D..",
      image: "https://res.cloudinary.com/dsa0chszi/image/upload/v1772098914/Director_R_D_phpmbs.jpg",
    }
  ];

  return (
    <section className="bg-warm-ivory py-4 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header - Luxury Branding */}
        <div className="text-center mb-20">
          <span className="text-luxury-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs block mb-4">
            Visionary Leadership
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-deep-espresso mb-6">
            Our Management
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto"></div>
        </div>

        {/* Grid with Refined Spacing */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {members.map((member, index) => (
            <div
              key={index}
              className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(30,20,15,0.04)] transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Image Section with Smooth Zoom */}
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                
                {/* Subtle Luxury Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-espresso/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content Section */}
              <div className="p-8 text-center flex-grow flex flex-col items-center">
                <h3 className="text-lg font-serif text-deep-espresso leading-tight mb-2 group-hover:text-luxury-gold transition-colors duration-300">
                  {member.name}
                </h3>

                <p className="text-luxury-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
                  {member.position}
                </p>

                <div className="w-8 h-[1px] bg-deep-espresso/10 mb-4 group-hover:w-16 group-hover:bg-luxury-gold transition-all duration-500"></div>

                <p className="text-deep-espresso/50 text-[11px] font-light leading-relaxed">
                  {member.qualification}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Management;