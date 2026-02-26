import React, { useState, useRef, useEffect } from 'react';

const CollegeVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Default muted for autoplay compliance
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  // Auto-play/pause logic using Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.6, // Trigger when 60% of the section is visible
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch((error) => {
              console.log("Autoplay prevented: ", error);
            });
            setIsPlaying(true);
          } else {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const togglePlay = (e) => {
    // Prevent togglePlay when clicking the audio button
    if (e.target.closest('.audio-toggle')) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleAudio = (e) => {
    e.stopPropagation();
    const newMutedState = !isMuted;
    videoRef.current.muted = newMutedState;
    setIsMuted(newMutedState);
  };

  return (
    <section ref={sectionRef} className="bg-white py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">

        {/* Section Header */}
        <div className="mb-16">
          <span className="text-luxury-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs block mb-4">
            Cinematic Tour
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-deep-espresso mb-6">
            Experience Our Campus
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto"></div>
        </div>

        {/* Video Container with Light Curves */}
        <div 
          className="group relative rounded-xl overflow-hidden shadow-[0_30px_60px_rgba(30,20,15,0.15)] bg-deep-espresso cursor-pointer transition-transform duration-700 hover:scale-[1.01]"
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src="https://res.cloudinary.com/dsa0chszi/video/upload/v1772103193/SIT_AV_BGM_uonhtr.mp4"
            className={`w-full transition-opacity duration-700 ${isPlaying ? 'opacity-100' : 'opacity-60'}`}
            onEnded={() => setIsPlaying(false)}
            playsInline
            muted={isMuted}
            loop
          />

          {/* Luxury Audio Toggle */}
          <button 
            onClick={toggleAudio}
            className="audio-toggle absolute bottom-6 right-6 z-30 p-3 rounded-full bg-warm-ivory/10 backdrop-blur-md border border-luxury-gold/30 text-luxury-gold hover:bg-luxury-gold hover:text-deep-espresso transition-all duration-300"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            )}
          </button>

          {/* Luxury Play Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-warm-ivory/10 backdrop-blur-md border border-luxury-gold/30 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-deep-espresso border-b-[10px] border-b-transparent ml-1"></div>
              </div>
            </div>
          )}

          {/* Subtle Bottom Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-deep-espresso/40 via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* Branding Footer */}
        <p className="mt-12 text-deep-espresso/40 text-[10px] font-bold uppercase tracking-[0.3em]">
          Sethu Institute of Technology | Established 1995
        </p>

      </div>
    </section>
  );
};

export default CollegeVideo;