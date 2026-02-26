import React from "react";

function PlacementNews() {
  const newsItems = [
    "REGULATION R2021 UG FIRST YEAR END SEMESTER EXAMINATION TIME TABLE – NOV/DEC 2025",
    "REGULATION 2021 PG/Ph.D FIRST YEAR END SEMESTER EXAMINATION TIME TABLE – NOV/DEC 2025",
    "Transport Arrangements for School Student Motivational Program",
    "Regulation – R2021 End Semester Examination Time Table Dec 2025",
    "Regulation – 2021 End Semester Examination Time Table Dec 2025",
    "M.E/Ph.D End Semester Examination Time Table Dec 2025",
    "SITCLET News Letter 2025 – Issue No:04 | Volume No. 01 | JAN 2025",
    "Regulation R2021 First Year End Semester Examination Time Table April/May 2025",
    "Regulation 2019 UG End Semester Examination April/May 2025",
    "Regulation 2015 UG End Semester Examination April/May 2025"
  ];

  const doubleNews = [...newsItems, ...newsItems];

  return (
    <section className="bg-white py-20 px-6 overflow-hidden">
      {/* Changed items-stretch to items-start so the image dictates its own height */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* Placed Students Section */}
        <div className="group flex flex-col">
          <div className="mb-10">
            <span className="text-luxury-gold font-bold uppercase tracking-[0.4em] text-[10px] block mb-4">
              Student Success
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-deep-espresso">
              Placed Students
            </h2>
            <div className="w-12 h-[2px] bg-luxury-gold mt-4"></div>
          </div>
          
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-deep-espresso/5">
            <img
              src="https://res.cloudinary.com/dsa0chszi/image/upload/v1772111180/Placed_Student1_mtmpk9.webp"
              alt="Placed Students"
              /* FIXED: Changed h-full to h-auto and object-cover to object-contain 
                to show the full content of the image without cropping.
              */
              className="w-full h-auto object-contain grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Running News Section */}
        <div className="flex flex-col">
          <div className="mb-10">
            <span className="text-luxury-gold font-bold uppercase tracking-[0.4em] text-[10px] block mb-4">
              Institutional Updates
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-deep-espresso">
              News & Announcements
            </h2>
            <div className="w-12 h-[2px] bg-luxury-gold mt-4"></div>
          </div>

          {/* flex-grow ensures this box still looks balanced next to the image */}
          <div className="bg-warm-ivory/30 border border-deep-espresso/5 rounded-xl shadow-xl overflow-hidden flex flex-col">
            <div className="bg-deep-espresso text-warm-ivory px-8 py-4 flex justify-between items-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-luxury-gold">Latest Notifications</span>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse"></div>
              </div>
            </div>

            {/* Set a min-height or fixed height here so the box doesn't collapse if the image is small */}
            <div className="relative h-[450px] overflow-hidden px-8">
              <div className="animate-vertical-scroll flex flex-col gap-6 py-6 group">
                {doubleNews.map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-deep-espresso/10 pb-4 flex gap-4 cursor-pointer hover:translate-x-2 transition-all duration-300"
                  >
                    <span className="text-luxury-gold font-serif italic text-sm">#</span>
                    <p className="text-sm font-light text-deep-espresso/80 leading-relaxed hover:text-luxury-gold">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes vertical-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-vertical-scroll {
          animation: vertical-scroll 50s linear infinite;
        }
        .animate-vertical-scroll:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}

export default PlacementNews;