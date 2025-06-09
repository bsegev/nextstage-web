'use client';

import { useEffect, useState } from 'react';
import { GlowingEffect } from '@/components/ui/glowing-effect';

export default function GlowingCards() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const transformationPaths = [
    {
      title: "CREATE",
      focus: "For what doesn't exist yet",
      description: "Transform ambitious ideas into market-ready realities. From strategy through launch, we build new ventures, digital products, and business models that compete from day one.",
      examples: ["New venture launch", "Digital product creation", "Market entry strategy", "Innovation sprints"],
      gradient: "from-accent/20 via-accent/10 to-transparent"
    },
    {
      title: "EVOLVE", 
      focus: "For what needs reimagining",
      description: "Reinvent your business for the digital age. We orchestrate complete transformations—strategy, brand, and technology—that position you for sustainable growth.",
      examples: ["Digital transformation", "Brand evolution", "Business model pivot", "Platform modernization"],
      gradient: "from-accent/15 via-accent/8 to-transparent"
    },
    {
      title: "ACCELERATE",
      focus: "For what needs to scale", 
      description: "Remove growth barriers with systems built for velocity. We design and deploy scalable solutions that multiply your impact without multiplying complexity.",
      examples: ["Growth architecture", "Performance optimization", "Scale enablement", "Expansion strategy"],
      gradient: "from-accent/25 via-accent/12 to-transparent"
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-32 lg:py-40 xl:py-48 bg-background overflow-hidden">
      {/* Dynamic background grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,10,10,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(10,10,10,0.008)_1px,transparent_1px)] bg-[size:8rem_8rem] sm:bg-[size:12rem_12rem] dark:bg-[linear-gradient(rgba(245,244,241,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(245,244,241,0.008)_1px,transparent_1px)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,224,215,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,224,215,0.03),transparent_50%)]" />
      </div>
      
      {/* Floating elements with sophisticated positioning */}
      <div className="absolute top-1/4 right-1/5 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-br from-accent/8 to-accent/4 rounded-full blur-2xl sm:blur-3xl opacity-60 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/3 left-1/6 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-tr from-accent/12 to-accent/6 rounded-full blur-xl sm:blur-2xl opacity-50 animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Premium section header */}
        <div className={`text-center mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32 transition-all duration-1200 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="mb-6 sm:mb-8 text-xs sm:text-sm font-medium text-foreground/60 tracking-wide uppercase">
            <span>Transformation</span>
          </div>
          
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[-0.02em] leading-[0.9] mb-6 sm:mb-8 md:mb-10 text-foreground">
            <span className="block mb-2 sm:mb-3">Your transformation</span>
            <span className="block mb-2 sm:mb-3">
              <span className="text-foreground/90">path</span>
            </span>
            <span className="block relative">
              <span className="bg-gradient-to-r from-obsidian via-accent via-accent to-obsidian dark:from-bone dark:via-accent dark:to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                awaits
              </span>
            </span>
          </h2>
          
          <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto px-2 sm:px-0">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.4] sm:leading-[1.4] text-foreground/75 font-light tracking-[-0.01em]">
              Every journey is unique. Every solution is complete.
            </p>
          </div>
        </div>

        {/* Revolutionary card grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6 xl:gap-8">
          {transformationPaths.map((path, index) => {
            
            return (
              <div 
                key={path.title}
                className={`group relative transition-all duration-1000 ease-out delay-${(index + 2) * 150} ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              >
                {/* Advanced card background with multiple layers */}
                <div className="relative h-full">
                  {/* Main card */}
                  <div className="relative bg-background/80 backdrop-blur-sm border border-foreground/8 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 h-full transition-all duration-500 ease-out group-hover:border-accent/20 group-hover:bg-background/90">
                    
                    {/* Glowing effect */}
                    <GlowingEffect
                      variant="peach"
                      spread={60}
                      glow={true}
                      disabled={false}
                      proximity={120}
                      inactiveZone={0.3}
                      movementDuration={1.5}
                      borderWidth={2}
                    />
                    
                    {/* Sophisticated gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${path.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl`} />
                    
                    {/* Glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Typography with premium spacing */}
                      <div className="mb-6 sm:mb-8">
                        <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 tracking-[-0.01em] transition-colors duration-300">
                          {path.title}
                        </h3>
                        <div className="inline-flex items-center">
                          <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-accent/15 rounded-full border border-accent/20 group-hover:bg-accent/25 group-hover:border-accent/30 transition-all duration-300">
                            <span className="text-xs sm:text-sm font-medium text-foreground/80 tracking-wide">
                              {path.focus}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Enhanced description */}
                      <p className="text-sm sm:text-base md:text-lg leading-[1.6] text-foreground/65 font-light tracking-[-0.005em] group-hover:text-foreground/80 transition-colors duration-300 mb-8">
                        {path.description}
                      </p>
                      
                      {/* Examples - Sophisticated presentation */}
                      <div className="space-y-2">
                        <div className="text-xs text-foreground/40 font-medium tracking-[0.05em] uppercase mb-3">
                          Applications
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {path.examples.map((example, i) => (
                            <span 
                              key={i} 
                              className="text-xs text-foreground/50 bg-foreground/5 px-2 py-1 rounded-md font-light transition-colors duration-300 group-hover:text-foreground/60 group-hover:bg-foreground/8"
                            >
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating card effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-1 group-hover:translate-y-0" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Sophisticated bottom section */}
        <div className={`text-center mt-16 sm:mt-20 md:mt-24 lg:mt-28 transition-all duration-1000 delay-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-base sm:text-lg text-foreground/60 font-light leading-relaxed mb-8 max-w-4xl mx-auto">
            Each transformation integrates strategy, design, and technology. One team. One timeline. One vision.
          </p>
          
          <div className="flex justify-center">
            <button className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/30 to-accent/10 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-700" />
              <div className="relative inline-flex items-center gap-3 px-8 py-4 border border-accent/20 text-foreground rounded-full text-lg font-light transition-all duration-300 group-hover:border-accent/40 font-sans tracking-wide">
                Start Your Transformation
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 