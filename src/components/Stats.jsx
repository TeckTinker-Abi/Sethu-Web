import React, { useState, useEffect, useRef } from "react";

const CounterItem = ({ target, label, sub }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasStarted(true);
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const targetNum = parseInt(target.replace(/,/g, ""));
    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let currentFrame = 0;

    const timer = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const nextCount = Math.floor(easeOut * targetNum);

      if (currentFrame >= totalFrames) {
        setCount(targetNum);
        clearInterval(timer);
      } else {
        setCount(nextCount);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [hasStarted, target]);

  return (
    <div 
      ref={elementRef}
      /* ENHANCEMENT: Made the card floating with persistent white background and rounded-2xl curves */
      className="group relative flex flex-col items-center text-center p-12 bg-white rounded-2xl shadow-[0_20px_60px_rgba(30,20,15,0.08)] border border-deep-espresso/5 transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(30,20,15,0.12)]"
    >
      {/* Animated Bright Gold Top Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>

      <h3 className="relative z-10 text-5xl xl:text-7xl font-serif text-luxury-gold mb-4 tracking-tighter drop-shadow-sm transition-transform duration-500 group-hover:scale-105">
        {count.toLocaleString()}{target.includes('+') ? '+' : ''}
      </h3>

      <p className="relative z-10 text-xs xl:text-sm font-bold uppercase tracking-[0.3em] text-deep-espresso mb-2">
        {label}
      </p>

      <p className="relative z-10 text-[10px] xl:text-[11px] text-deep-espresso/50 uppercase tracking-widest italic">
        {sub}
      </p>

      {/* Dynamic Expansion Bar */}
      <div className="mt-8 h-[1px] w-8 bg-luxury-gold/30 transition-all duration-700 group-hover:w-24 group-hover:bg-luxury-gold"></div>
    </div>
  );
};

const Stats = () => {
  const data = [
    { number: "4,624", label: "Students Studying", sub: "Currently Enrolled" },
    { number: "25,000", label: "Global Alumni", sub: "Success Stories" },
    { number: "270+", label: "Expert Professors", sub: "Research Driven" },
  ];

  return (
    <section className="relative py-24 px-6 bg-warm-ivory overflow-hidden">
      {/* Decorative Branding Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 xl:gap-16">
          {data.map((item, index) => (
            <CounterItem 
              key={index} 
              target={item.number} 
              label={item.label} 
              sub={item.sub} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;