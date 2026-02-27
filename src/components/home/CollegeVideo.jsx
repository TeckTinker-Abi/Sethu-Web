import React, { useRef, useEffect, useState } from "react";

const CollegeVideo = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-play/pause logic using Intersection Observer for a seamless experience
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.4, // Triggers when 40% of the section is visible
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const video = videoRef.current;
        if (!video) return;

        if (entry.isIntersecting) {
          video.play().then(() => {
            setIsPlaying(true);
          }).catch(() => {
            // Browsers usually require a mute state to allow autoplay
            video.muted = true;
            video.play();
            setIsPlaying(true);
          });
        } else {
          video.pause();
          setIsPlaying(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  return (
    <section ref={sectionRef} className="bg-warm-ivory py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Institutional Branding */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-luxury-gold font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-xs block mb-3 md:mb-4">
            Cinematic Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-deep-espresso mb-4 md:mb-6 leading-tight">
            Explore the Horizon
          </h2>
          <div className="w-12 md:w-16 h-[2px] bg-luxury-gold mx-auto"></div>
        </div>

        {/* Responsive Video Frame with Light Curves */}
        <div className="relative group rounded-xl md:rounded-2xl overflow-hidden shadow-2xl md:shadow-[0_40px_100px_rgba(30,20,15,0.2)] bg-deep-espresso aspect-video">
          
          <video
            ref={videoRef}
            src="https://res.cloudinary.com/dsa0chszi/video/upload/v1772103193/SIT_AV_BGM_uonhtr.mp4"
            className={`w-full h-full object-cover transition-all duration-1000 ${isPlaying ? 'scale-100 opacity-100' : 'scale-105 opacity-60'}`}
            playsInline
            loop
            muted={isMuted}
            preload="auto"
          />

          {/* Interactive UI Layers */}
          <div className="absolute inset-0 z-10 flex flex-col justify-between p-4 md:p-8">
            
            {/* Top Row: Institutional Quality Badge */}
            <div className="hidden sm:block">
               <div className="inline-block bg-warm-ivory/90 backdrop-blur-sm p-3 md:p-4 rounded-lg md:rounded-xl border border-luxury-gold/20 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <p className="text-luxury-gold text-[8px] md:text-[10px] font-black uppercase tracking-widest leading-none mb-1">Autonomous</p>
                <p className="text-deep-espresso/50 text-[7px] md:text-[8px] font-bold uppercase tracking-tighter">Campus Tour Experience</p>
              </div>
            </div>

            {/* Bottom Row: Controls */}
            <div className="flex justify-end">
              {/* ENHANCEMENT: Transparent White Glassmorphism Button */}
              <button 
                onClick={toggleMute}
                className="flex items-center gap-2 md:gap-3 px-4 py-2 md:px-6 md:py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white transition-all duration-500 hover:bg-white/40 shadow-lg"
              >
                <div className="flex flex-col items-start text-left">
                  <span className="text-[6px] md:text-[8px] font-bold uppercase tracking-widest leading-none mb-1 opacity-80">Audio</span>
                  <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest">{isMuted ? 'Unmute' : 'Mute'}</span>
                </div>
                <div className="text-xs md:text-sm">
                  {isMuted ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  )}
                </div>
              </button>
            </div>
          </div>

          {/* Central Play Indicator (Visual Pulsing Ring) */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-luxury-gold/40 flex items-center justify-center animate-pulse">
                 <div className="w-0 h-0 border-t-[8px] md:border-t-[12px] border-t-transparent border-l-[12px] md:border-l-[20px] border-l-luxury-gold border-b-[8px] md:border-b-[12px] border-b-transparent ml-1"></div>
              </div>
            </div>
          )}
        </div>

        {/* Branding Footer */}
        <div className="mt-8 md:mt-12 text-center flex flex-col items-center gap-3 md:gap-4">
          <p className="text-deep-espresso/40 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] px-4">
            Sethu Institute of Technology | Established 1995
          </p>
          <div className="w-10 md:w-12 h-[1px] bg-luxury-gold/30"></div>
        </div>
      </div>
    </section>
  );
};

export default CollegeVideo;