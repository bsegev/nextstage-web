'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";



const processPhases = [
  {
    phase: "01",
    title: "Discovery",
    subtitle: "Understand your business and goals",
    description: "We meet your team and understand your business, market, and objectives.",
    details: ["Business analysis", "Goal alignment"],
    timeline: "1-2 weeks",
    deliverable: "Roadmap"
  },
  {
    phase: "02", 
    title: "Planning",
    subtitle: "Create your strategic blueprint",
    description: "We design your strategy and system architecture based on your specific needs.",
    details: ["Strategy design", "System planning"],
    timeline: "1-2 weeks",
    deliverable: "Blueprint"
  },
  {
    phase: "03",
    title: "Design & Build", 
    subtitle: "Create your solution",
    description: "We design and build your solution with the right technology and implementation plan.",
    details: ["Solution design", "Technology build", "Implementation"],
    timeline: "2-4 weeks",
    deliverable: "Solution Map"
  },
  {
    phase: "04",
    title: "Launch & Handoff",
    subtitle: "Launch and handoff your solution", 
    description: "We launch your solution and ensure you have everything needed for success.",
    details: ["Solution launch", "Knowledge transfer"],
    timeline: "2-4 weeks",
    deliverable: "Live Systems"
  }
];

export default function ProcessJourney() {
  const [mounted, setMounted] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Mobile video auto-play logic
  useEffect(() => {
    if (!mounted) return;

    const checkCardPositions = () => {
      // Only run on mobile/tablet screens (below lg breakpoint)
      if (window.innerWidth >= 1024) {
        setActiveVideoIndex(null);
        return;
      }
      
      const viewportHeight = window.innerHeight;
      const centerThirdStart = viewportHeight * 0.33;
      const centerThirdEnd = viewportHeight * 0.67;
      
      let newActiveIndex = null;
      
      cardRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const cardCenter = rect.top + rect.height / 2;
          const cardTop = rect.top;
          const cardBottom = rect.bottom;
          
          // Debug logging
          console.log(`Card ${index}: center=${Math.round(cardCenter)}, centerThird=${Math.round(centerThirdStart)}-${Math.round(centerThirdEnd)}, visible=${cardTop < viewportHeight && cardBottom > 0}`);
          
          // Check if card center is in center third of viewport AND card is visible
          if (cardCenter >= centerThirdStart && cardCenter <= centerThirdEnd && cardTop < viewportHeight && cardBottom > 0) {
            newActiveIndex = index;
            console.log(`✅ Activating video for card ${index}`);
          }
        }
      });
      
      if (newActiveIndex !== activeVideoIndex) {
        console.log(`🎬 Setting active video index to: ${newActiveIndex}`);
        setActiveVideoIndex(newActiveIndex);
      }
    };

    // Check on scroll with throttling
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          checkCardPositions();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    const handleResize = () => checkCardPositions();
    
    // Initial check after a short delay
    const initialTimer = setTimeout(checkCardPositions, 100);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(initialTimer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [mounted, activeVideoIndex]);

  return (
    <section className="bg-white py-20 sm:py-24 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-obsidian/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-obsidian rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative">
        
        {/* Section Header */}
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} id="process-journey">
          <div className="mb-6 sm:mb-8 text-sm font-medium text-obsidian/60 tracking-[0.2em] uppercase">
            <span>How We Work</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6 md:mb-8">
            <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              From Idea to Launch
            </span>
          </h2>
          <p className="text-lg sm:text-lg md:text-xl lg:text-2xl text-obsidian/80 font-light max-w-2xl mx-auto leading-relaxed">
            Our 4-phase process gets you from concept to live solution. Here&apos;s exactly what happens.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className={`transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
            
            {/* Phase 1 - Discovery */}
            <motion.div
              ref={(el) => { cardRefs.current[0] = el; }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group/bento cursor-pointer"
            >
              <div className={cn(
                // Mobile: Natural height, Desktop: aspect-video
                "lg:aspect-video border border-obsidian/8 hover:border-accent/25 shadow-sm hover:shadow-2xl hover:shadow-obsidian/8 transition-all duration-700 ease-out hover:-translate-y-2 hover:scale-[1.02] rounded-2xl p-4 sm:p-6 lg:p-8 overflow-hidden relative min-h-[320px] sm:min-h-[280px] lg:min-h-0",
                // Background image for discovery/telescope theme
                "bg-[url(/images/showcase/process-journey/discover-telescope.png)] bg-cover bg-center",
                // Consistent light overlay
                "before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/80 before:via-white/75 before:to-bone/70 before:rounded-2xl before:z-[1]",
                // Desktop hover effects only
                "lg:group-hover/bento:[&>video]:opacity-100",
                "hover:before:bg-gradient-to-br hover:before:from-black/70 hover:before:to-black/50",
                // Mobile video visibility only
                activeVideoIndex === 0 && "lg:![&>video]:opacity-0 [&>video]:opacity-100"
              )}>
                
                {/* Hover/Auto-play Video */}
                <video
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-0 transition-opacity duration-700 z-[0]"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src="/videos/discovery-video.mp4" type="video/mp4" />
                </video>
                
                {/* Mobile Layout */}
                <div className="flex flex-col h-full lg:hidden relative z-10">
                  {/* Phase Header */}
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <motion.div 
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-obsidian/8 to-obsidian/5 border border-obsidian/15 rounded-xl flex items-center justify-center transition-all duration-500 group-hover/bento:scale-110 group-hover/bento:rotate-2"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="text-base sm:text-lg font-mono font-bold tracking-wide text-obsidian/70">
                        {processPhases[0].phase}
                      </span>
                    </motion.div>
                    
                    <div className="space-y-1">
                      <div className="text-sm font-medium tracking-[0.1em] uppercase text-obsidian/50">
                        {processPhases[0].timeline}
                      </div>
                      <div className="text-sm text-obsidian/60 font-medium">
                        {processPhases[0].deliverable}
                      </div>
                    </div>
                  </div>

                  {/* Content - grows to fill space */}
                  <div className="flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                    <div className="space-y-2 sm:space-y-3">
                      <div className="space-y-1">
                        <h3 className="font-display text-lg sm:text-lg lg:text-xl tracking-[-0.02em] leading-tight text-obsidian group-hover/bento:text-white transition-colors duration-300">
                          {processPhases[0].title}
                        </h3>
                        <p className="text-base font-light leading-relaxed italic text-obsidian/60 group-hover/bento:text-white/90 transition-colors duration-300">
                          {processPhases[0].subtitle}
                        </p>
                      </div>

                      <p className="text-base leading-relaxed text-obsidian/70 group-hover/bento:text-white/80 transition-colors duration-300">
                        {processPhases[0].description}
                      </p>
                    </div>

                    {/* Tags - anchored to bottom on mobile */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                      {processPhases[0].details.map((detail, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 sm:px-2 sm:py-1 rounded-full bg-obsidian/5 border border-obsidian/10 text-sm font-medium text-obsidian/70 hover:bg-obsidian/10 transition-colors duration-300"
                        >
                          <div className="w-1 h-1 bg-obsidian/40 rounded-full" />
                          {detail}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:flex flex-col h-full relative z-10">
                  {/* Phase Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-obsidian/8 to-obsidian/5 border border-obsidian/15 rounded-xl flex items-center justify-center transition-all duration-500 group-hover/bento:scale-110 group-hover/bento:rotate-2"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="text-base sm:text-lg font-mono font-bold tracking-wide text-obsidian/70">
                        {processPhases[0].phase}
                      </span>
                    </motion.div>
                    
                    <div className="space-y-1">
                      <div className="text-sm font-medium tracking-[0.1em] uppercase text-obsidian/50">
                        {processPhases[0].timeline}
                      </div>
                      <div className="text-sm text-obsidian/60 font-medium">
                        {processPhases[0].deliverable}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h3 className="font-display text-lg sm:text-lg lg:text-xl tracking-[-0.02em] leading-tight text-obsidian group-hover/bento:text-white transition-colors duration-300">
                        {processPhases[0].title}
                      </h3>
                      <p className="text-base font-light leading-relaxed italic text-obsidian/60 group-hover/bento:text-white/90 transition-colors duration-300">
                        {processPhases[0].subtitle}
                      </p>
                    </div>

                    <p className="text-base leading-relaxed text-obsidian/70 group-hover/bento:text-white/80 transition-colors duration-300">
                      {processPhases[0].description}
                    </p>

                    {/* Tags - full width on desktop */}
                    <div className="flex flex-wrap gap-1.5 w-full">
                      {processPhases[0].details.map((detail, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-obsidian/5 border border-obsidian/10 text-sm font-medium text-obsidian/70 hover:bg-obsidian/10 transition-colors duration-300"
                        >
                          <div className="w-1 h-1 bg-obsidian/40 rounded-full" />
                          {detail}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Phase 2 - Planning */}
            <motion.div
              ref={(el) => { cardRefs.current[1] = el; }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group/bento cursor-pointer"
            >
                <div className={cn(
                // Mobile: Natural height, Desktop: aspect-video
                "lg:aspect-video border border-obsidian/8 hover:border-accent/25 shadow-sm hover:shadow-2xl hover:shadow-obsidian/8 transition-all duration-700 ease-out hover:-translate-y-2 hover:scale-[1.02] rounded-2xl p-4 sm:p-6 lg:p-8 overflow-hidden relative min-h-[320px] sm:min-h-[280px] lg:min-h-0",
                  // Background image for planning/blueprint theme
                  "bg-[url(/images/showcase/process-journey/planning-blueprint.png)] bg-cover bg-center",
                // Consistent light overlay (same as desktop)
                  "before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/80 before:via-white/75 before:to-bone/70 before:rounded-2xl before:z-[1]",
                // Desktop hover effects only
                  "lg:group-hover/bento:[&>video]:opacity-100",
                "hover:before:bg-gradient-to-br hover:before:from-black/70 hover:before:to-black/50",
                // Mobile video visibility only
                activeVideoIndex === 1 && "lg:![&>video]:opacity-0 [&>video]:opacity-100"
                )}>
                  
                {/* Hover/Auto-play Video */}
                  <video
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-0 transition-opacity duration-700 z-[0]"
                    autoPlay
                    muted
                    loop
                    playsInline
                  preload="metadata"
                  >
                    <source src="/videos/planning-video.mp4" type="video/mp4" />
                  </video>
                  
                {/* Mobile Layout */}
                <div className="flex flex-col h-full lg:hidden relative z-10">
                  {/* Phase Header */}
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <motion.div 
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-obsidian/8 to-obsidian/5 border border-obsidian/15 rounded-xl flex items-center justify-center transition-all duration-500 group-hover/bento:scale-110 group-hover/bento:rotate-2"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="text-base sm:text-lg font-mono font-bold tracking-wide text-obsidian/70">
                        {processPhases[1].phase}
                      </span>
                    </motion.div>
                    
                    <div className="space-y-1">
                      <div className="text-sm font-medium tracking-[0.1em] uppercase text-obsidian/50">
                        {processPhases[1].timeline}
                      </div>
                      <div className="text-sm text-obsidian/60 font-medium">
                        {processPhases[1].deliverable}
                      </div>
                    </div>
                  </div>

                  {/* Content - grows to fill space */}
                  <div className="flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                    <div className="space-y-2 sm:space-y-3">
                      <div className="space-y-1">
                        <h3 className="font-display text-lg sm:text-lg lg:text-xl tracking-[-0.02em] leading-tight text-obsidian group-hover/bento:text-white transition-colors duration-300">
                          {processPhases[1].title}
                        </h3>
                        <p className="text-base font-light leading-relaxed italic text-obsidian/60 group-hover/bento:text-white/90 transition-colors duration-300">
                          {processPhases[1].subtitle}
                        </p>
                      </div>

                      <p className="text-base leading-relaxed text-obsidian/70 group-hover/bento:text-white/80 transition-colors duration-300">
                        {processPhases[1].description}
                      </p>
                    </div>

                    {/* Tags - anchored to bottom on mobile */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                      {processPhases[1].details.map((detail, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 sm:px-2 sm:py-1 rounded-full bg-obsidian/5 border border-obsidian/10 text-sm font-medium text-obsidian/70 hover:bg-obsidian/10 transition-colors duration-300"
                        >
                          <div className="w-1 h-1 bg-obsidian/40 rounded-full" />
                          {detail}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:flex flex-col h-full relative z-10">
                  {/* Phase Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-obsidian/8 to-obsidian/5 border border-obsidian/15 rounded-xl flex items-center justify-center transition-all duration-500 group-hover/bento:scale-110 group-hover/bento:rotate-2"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="text-base sm:text-lg font-mono font-bold tracking-wide text-obsidian/70">
                        {processPhases[1].phase}
                      </span>
                    </motion.div>
                    
                    <div className="space-y-1">
                      <div className="text-sm font-medium tracking-[0.1em] uppercase text-obsidian/50">
                        {processPhases[1].timeline}
                      </div>
                      <div className="text-sm text-obsidian/60 font-medium">
                        {processPhases[1].deliverable}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h3 className="font-display text-lg sm:text-lg lg:text-xl tracking-[-0.02em] leading-tight text-obsidian group-hover/bento:text-white transition-colors duration-300">
                        {processPhases[1].title}
                      </h3>
                      <p className="text-base font-light leading-relaxed italic text-obsidian/60 group-hover/bento:text-white/90 transition-colors duration-300">
                        {processPhases[1].subtitle}
                      </p>
                    </div>

                    <p className="text-base leading-relaxed text-obsidian/70 group-hover/bento:text-white/80 transition-colors duration-300">
                      {processPhases[1].description}
                    </p>

                    {/* Tags - full width on desktop */}
                    <div className="flex flex-wrap gap-1.5 w-full">
                      {processPhases[1].details.map((detail, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-obsidian/5 border border-obsidian/10 text-sm font-medium text-obsidian/70 hover:bg-obsidian/10 transition-colors duration-300"
                        >
                          <div className="w-1 h-1 bg-obsidian/40 rounded-full" />
                          {detail}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                </div>
              </motion.div>

            {/* Phase 3 - Solution Mapping */}
            <motion.div
              ref={(el) => { cardRefs.current[2] = el; }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group/bento cursor-pointer"
            >
                <div className={cn(
                // Mobile: Natural height, Desktop: aspect-video
                "lg:aspect-video border border-obsidian/8 hover:border-accent/25 shadow-sm hover:shadow-2xl hover:shadow-obsidian/8 transition-all duration-700 ease-out hover:-translate-y-2 hover:scale-[1.02] rounded-2xl p-4 sm:p-6 lg:p-8 overflow-hidden relative min-h-[360px] sm:min-h-[300px] lg:min-h-0",
                  // Background image for solution/lightbulb theme
                  "bg-[url(/images/showcase/process-journey/solution-lightbulb.png)] bg-cover bg-center",
                // Consistent light overlay (same as desktop)
                  "before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/80 before:via-white/75 before:to-bone/70 before:rounded-2xl before:z-[1]",
                // Desktop hover effects only
                  "lg:group-hover/bento:[&>video]:opacity-100",
                "hover:before:bg-gradient-to-br hover:before:from-black/70 hover:before:to-black/50",
                // Mobile video visibility only
                activeVideoIndex === 2 && "lg:![&>video]:opacity-0 [&>video]:opacity-100"
                )}>
                  
                {/* Hover/Auto-play Video */}
                  <video
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-0 transition-opacity duration-700 z-[0]"
                    autoPlay
                    muted
                    loop
                    playsInline
                  preload="metadata"
                  >
                    <source src="/videos/solution-video.mp4" type="video/mp4" />
                  </video>
                  
                {/* Mobile Layout */}
                <div className="flex flex-col h-full lg:hidden relative z-10">
                  {/* Phase Header */}
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <motion.div 
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-obsidian/8 to-obsidian/5 border border-obsidian/15 rounded-xl flex items-center justify-center transition-all duration-500 group-hover/bento:scale-110 group-hover/bento:rotate-2"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="text-base sm:text-lg font-mono font-bold tracking-wide text-obsidian/70">
                        {processPhases[2].phase}
                      </span>
                    </motion.div>
                    
                    <div className="space-y-1">
                      <div className="text-sm font-medium tracking-[0.1em] uppercase text-obsidian/50">
                        {processPhases[2].timeline}
                      </div>
                      <div className="text-sm text-obsidian/60 font-medium">
                        {processPhases[2].deliverable}
                      </div>
                    </div>
                  </div>

                  {/* Content - grows to fill space */}
                  <div className="flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                    <div className="space-y-2 sm:space-y-3">
                      <div className="space-y-1">
                        <h3 className="font-display text-lg sm:text-lg lg:text-xl tracking-[-0.02em] leading-tight text-obsidian group-hover/bento:text-white transition-colors duration-300">
                          {processPhases[2].title}
                        </h3>
                        <p className="text-base font-light leading-relaxed italic text-obsidian/60 group-hover/bento:text-white/90 transition-colors duration-300">
                          {processPhases[2].subtitle}
                        </p>
                      </div>

                      <p className="text-base leading-relaxed text-obsidian/70 group-hover/bento:text-white/80 transition-colors duration-300">
                        {processPhases[2].description}
                      </p>
                    </div>

                    {/* Tags - anchored to bottom on mobile */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                      {processPhases[2].details.map((detail, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 sm:px-2 sm:py-1 rounded-full bg-obsidian/5 border border-obsidian/10 text-sm font-medium text-obsidian/70 hover:bg-obsidian/10 transition-colors duration-300"
                        >
                          <div className="w-1 h-1 bg-obsidian/40 rounded-full" />
                          {detail}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:flex flex-col h-full relative z-10">
                  {/* Phase Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-obsidian/8 to-obsidian/5 border border-obsidian/15 rounded-xl flex items-center justify-center transition-all duration-500 group-hover/bento:scale-110 group-hover/bento:rotate-2"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="text-base sm:text-lg font-mono font-bold tracking-wide text-obsidian/70">
                        {processPhases[2].phase}
                      </span>
                    </motion.div>
                    
                    <div className="space-y-1">
                      <div className="text-sm font-medium tracking-[0.1em] uppercase text-obsidian/70/80">
                        {processPhases[2].timeline}
                      </div>
                      <div className="text-sm text-obsidian/60 font-medium">
                        {processPhases[2].deliverable}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h3 className="font-display text-lg sm:text-lg lg:text-xl tracking-[-0.02em] leading-tight text-obsidian group-hover/bento:text-white transition-colors duration-300">
                        {processPhases[2].title}
                      </h3>
                      <p className="text-base font-light leading-relaxed italic text-obsidian/60 group-hover/bento:text-white/90 transition-colors duration-300">
                        {processPhases[2].subtitle}
                      </p>
                    </div>

                    <p className="text-base leading-relaxed text-obsidian/70 group-hover/bento:text-white/80 transition-colors duration-300">
                      {processPhases[2].description}
                    </p>

                    {/* Tags - full width on desktop */}
                    <div className="flex flex-wrap gap-1.5 w-full">
                      {processPhases[2].details.map((detail, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-obsidian/5 border border-obsidian/10 text-sm font-medium text-obsidian/70 hover:bg-obsidian/10 transition-colors duration-300"
                        >
                          <div className="w-1 h-1 bg-obsidian/40 rounded-full" />
                          {detail}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                </div>
              </motion.div>

            {/* Phase 4 - Delivery */}
            <motion.div
              ref={(el) => { cardRefs.current[3] = el; }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group/bento cursor-pointer"
            >
              <div className={cn(
                // Mobile: Natural height, Desktop: aspect-video
                "lg:aspect-video border border-obsidian/8 hover:border-accent/25 shadow-sm hover:shadow-2xl hover:shadow-obsidian/8 transition-all duration-700 ease-out hover:-translate-y-2 hover:scale-[1.02] rounded-2xl p-4 sm:p-6 lg:p-8 overflow-hidden relative min-h-[320px] sm:min-h-[280px] lg:min-h-0",
                // Background image for delivery/key theme
                "bg-[url(/images/showcase/process-journey/delivery-key.png)] bg-cover bg-center",
                // Consistent light overlay (same as desktop)
                "before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/80 before:via-white/75 before:to-bone/70 before:rounded-2xl before:z-[1]",
                // Desktop hover effects only
                "lg:group-hover/bento:[&>video]:opacity-100",
                "hover:before:bg-gradient-to-br hover:before:from-black/70 hover:before:to-black/50",
                // Mobile video visibility only
                activeVideoIndex === 3 && "lg:![&>video]:opacity-0 [&>video]:opacity-100"
              )}>
                
                {/* Hover/Auto-play Video */}
                <video
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-0 transition-opacity duration-700 z-[0]"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src="/videos/delivery-video.mp4" type="video/mp4" />
                </video>
                
                {/* Mobile Layout */}
                <div className="flex flex-col h-full lg:hidden relative z-10">
                  {/* Phase Header */}
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <motion.div 
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-obsidian/8 to-obsidian/5 border border-obsidian/15 rounded-xl flex items-center justify-center transition-all duration-500 group-hover/bento:scale-110 group-hover/bento:rotate-2"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="text-base sm:text-lg font-mono font-bold tracking-wide text-obsidian/70">
                        {processPhases[3].phase}
                      </span>
                    </motion.div>
                    
                    <div className="space-y-1">
                      <div className="text-sm font-medium tracking-[0.1em] uppercase text-obsidian/70/80 group-hover/bento:text-white/90 transition-colors duration-300">
                        {processPhases[3].timeline}
                      </div>
                      <div className="text-sm text-obsidian/60 group-hover/bento:text-white/80 font-medium transition-colors duration-300">
                        {processPhases[3].deliverable}
                      </div>
                    </div>
                  </div>

                  {/* Content - grows to fill space */}
                  <div className="flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                    <div className="space-y-2 sm:space-y-3">
                      <div className="space-y-1">
                        <h3 className="font-display text-lg sm:text-lg lg:text-xl tracking-[-0.02em] leading-tight text-obsidian group-hover/bento:text-white transition-colors duration-300">
                          {processPhases[3].title}
                        </h3>
                        <p className="text-base font-light leading-relaxed italic text-obsidian/60 group-hover/bento:text-white/90 transition-colors duration-300">
                          {processPhases[3].subtitle}
                        </p>
                      </div>

                      <p className="text-base leading-relaxed text-obsidian/70 group-hover/bento:text-white/80 transition-colors duration-300">
                        {processPhases[3].description}
                      </p>
                    </div>

                    {/* Tags - anchored to bottom on mobile */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                      {processPhases[3].details.map((detail, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 sm:px-2 sm:py-1 rounded-full bg-obsidian/5 border border-obsidian/10 text-sm font-medium text-obsidian/70 hover:bg-obsidian/10 transition-colors duration-300"
                        >
                          <div className="w-1 h-1 bg-obsidian/40 rounded-full" />
                          {detail}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:flex flex-col h-full relative z-10">
                  {/* Phase Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-obsidian/8 to-obsidian/5 border border-obsidian/15 rounded-xl flex items-center justify-center transition-all duration-500 group-hover/bento:scale-110 group-hover/bento:rotate-2"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="text-base sm:text-lg font-mono font-bold tracking-wide text-obsidian/70">
                        {processPhases[3].phase}
                      </span>
                    </motion.div>
                    
                    <div className="space-y-1">
                      <div className="text-sm font-medium tracking-[0.1em] uppercase text-obsidian/70/80 group-hover/bento:text-white/90 transition-colors duration-300">
                        {processPhases[3].timeline}
                      </div>
                      <div className="text-sm text-obsidian/60 group-hover/bento:text-white/80 font-medium transition-colors duration-300">
                        {processPhases[3].deliverable}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h3 className="font-display text-lg sm:text-lg lg:text-xl tracking-[-0.02em] leading-tight text-obsidian group-hover/bento:text-white transition-colors duration-300">
                        {processPhases[3].title}
                      </h3>
                      <p className="text-base font-light leading-relaxed italic text-obsidian/60 group-hover/bento:text-white/90 transition-colors duration-300">
                        {processPhases[3].subtitle}
                      </p>
                    </div>

                    <p className="text-base leading-relaxed text-obsidian/70 group-hover/bento:text-white/80 transition-colors duration-300">
                      {processPhases[3].description}
                    </p>

                    {/* Tags - full width on desktop */}
                    <div className="flex flex-wrap gap-1.5 w-full">
                      {processPhases[3].details.map((detail, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-obsidian/5 border border-obsidian/10 text-sm font-medium text-obsidian/70 hover:bg-obsidian/10 transition-colors duration-300"
                        >
                          <div className="w-1 h-1 bg-obsidian/40 rounded-full" />
                          {detail}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 lg:mt-24"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-xl lg:text-2xl text-obsidian/60 font-light leading-relaxed mb-8">
              This is how we&apos;ve delivered every project above. 
              <br className="hidden sm:block" />
              <span className="italic">Your timeline starts with a conversation.</span>
            </p>
            
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}