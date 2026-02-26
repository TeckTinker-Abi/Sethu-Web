import React from 'react';

const NewsRelease = () => {
  const news = [
    {
      title: "Entrepreneurship Innovation Award",
      desc: "The Management and the Principal congratulate the students for receiving a total grant of ₹4.4 lakhs for startup innovation conducted by EDII, Chennai.",
      image: "https://res.cloudinary.com/dsa0chszi/image/upload/v1772110040/News_Event_1_sba2zp.jpg",
      date: "12 JAN 2026",
      tag: "Achievement"
    },
    {
      title: "National Level Research Conference",
      desc: "Sethu Institute of Technology successfully organized a National Conference on Emerging Technologies with participation from leading institutions across India.",
      image: "https://res.cloudinary.com/dsa0chszi/image/upload/v1772110048/News_Event_2_dpjgfd.jpg",
      date: "05 DEC 2025",
      tag: "Conference"
    },
    {
      title: "MoU Signed with Leading IT Company",
      desc: "The institution signed a Memorandum of Understanding with a reputed IT company to strengthen industry-academia collaboration and internships.",
      image: "https://res.cloudinary.com/dsa0chszi/image/upload/v1772110056/News_Event_3_zfquf0.webp",
      date: "20 NOV 2025",
      tag: "Collaboration"
    },
  ];

  return (
    <section className="bg-white py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-luxury-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs block mb-4">
            Institutional Press
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-deep-espresso mb-6">
            News Release
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto"></div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {news.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col bg-warm-ivory/20 rounded-xl overflow-hidden transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(30,20,15,0.08)]"
            >
              {/* Image Container with Luxury Zoom */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Minimalist Date Badge */}
                <div className="absolute top-4 left-4 bg-deep-espresso/90 backdrop-blur-sm text-warm-ivory text-[9px] font-bold tracking-[0.2em] px-4 py-2 uppercase rounded-md shadow-lg group-hover:bg-luxury-gold transition-colors duration-500">
                  {item.date}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 border-x border-b border-deep-espresso/5 flex-grow flex flex-col rounded-b-xl">
                <span className="text-luxury-gold text-[9px] font-bold uppercase tracking-[0.25em] mb-4 block">
                  {item.tag}
                </span>
                
                <h3 className="text-xl font-serif text-deep-espresso mb-4 leading-tight group-hover:text-luxury-gold transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-deep-espresso/60 text-sm font-light leading-relaxed mb-8 line-clamp-3">
                  {item.desc}
                </p>

                {/* Animated Read More Link */}
                <div className="mt-auto">
                  <button className="group/btn inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-deep-espresso">
                    <span>Read Full Story</span>
                    <div className="w-6 h-[1px] bg-luxury-gold transition-all duration-300 group-hover/btn:w-12"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default NewsRelease;