'use client';

import { useEffect, useState } from 'react';
import { GlowingEffect } from '@/components/ui/glowing-effect';

export default function BusinessValue() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const valueDrivers = [
    {
      title: "Create",
      focus: "For what doesn't exist yet",
      description: "Transform ambitious ideas into market-ready realities. From strategy through launch, we build new ventures and business models that compete from day one.",
      gradient: "from-accent/8 via-accent/4 to-transparent"
    },
    {
      title: "Evolve", 
      focus: "For what needs reimagining",
      description: "Reinvent your business for the digital age. We orchestrate complete transformations that position you for sustainable growth.",
      gradient: "from-accent/6 via-accent/3 to-transparent"
    },
    {
      title: "Accelerate",
      focus: "For what needs to scale", 
      description: "Remove growth barriers with systems built for velocity. We design scalable solutions that multiply your impact without complexity.",
      gradient: "from-accent/10 via-accent/5 to-transparent"
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-32 lg:py-40 xl:py-48 bg-obsidian overflow-hidden">
      {/* Minimal background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,224,215,0.02),transparent_70%)]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Clean section header */}
        <div className={`text-center mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32 transition-all duration-1200 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="mb-6 sm:mb-8 text-xs sm:text-sm font-medium text-bone/60 tracking-wide uppercase">
            <span>Transformation</span>
          </div>
          
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6 text-bone">
            <span className="block mb-2 sm:mb-3">Your transformation</span>
            <span className="block relative">
              <span className="bg-gradient-to-r from-bone via-accent to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                begins here
              </span>
            </span>
          </h2>
          
          <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto px-2 sm:px-0">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.4] sm:leading-[1.4] text-bone/75 font-light tracking-[-0.01em]">
              Every journey is unique. Every solution is complete.
            </p>
          </div>
        </div>

        {/* Clean card grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6 xl:gap-8">
          {valueDrivers.map((driver, index) => {
            return (
              <div 
                key={driver.title}
                className={`group relative transition-all duration-1000 ease-out delay-${(index + 2) * 150} ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              >
                {/* Clean card design */}
                <div className="relative h-full">
                  {/* Subtle border effect */}
                  <div className="absolute -inset-px rounded-2xl sm:rounded-3xl bg-gradient-to-b from-accent/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Main card */}
                  <div className="relative bg-obsidian/70 backdrop-blur-sm border border-accent/10 rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 h-full transition-all duration-300 ease-out group-hover:border-accent/20 group-hover:bg-obsidian/80">
                    
                    {/* Subtle glowing effect */}
                    <GlowingEffect
                      variant="peach"
                      spread={40}
                      glow={false}
                      disabled={false}
                      proximity={80}
                      inactiveZone={0.5}
                      movementDuration={2}
                      borderWidth={1}
                    />
                    
                    {/* Very subtle gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${driver.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl`} />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Typography */}
                      <div className="mb-6 sm:mb-8">
                        <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-bone mb-3 sm:mb-4 tracking-[-0.01em] transition-colors duration-300">
                          {driver.title}
                        </h3>
                        <div className="inline-flex items-center mb-4 sm:mb-6">
                          <div className="px-4 py-2 bg-accent/10 rounded-full border border-accent/15 group-hover:bg-accent/15 group-hover:border-accent/25 transition-all duration-300">
                            <span className="text-sm font-medium text-bone/70 tracking-wide">
                              {driver.focus}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-base sm:text-lg leading-[1.6] text-bone/60 font-light tracking-[-0.005em] group-hover:text-bone/75 transition-colors duration-300">
                        {driver.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean bottom section */}
        <div className={`text-center mt-16 sm:mt-20 md:mt-24 lg:mt-28 transition-all duration-1000 delay-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-base sm:text-lg text-bone/60 font-light leading-relaxed mb-8 max-w-4xl mx-auto">
            Each transformation integrates strategy, design, and technology. One team. One timeline. One vision.
          </p>
          
          <div className="flex justify-center">
            <button className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 to-accent/10 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative inline-flex items-center gap-3 px-8 py-4 border border-accent/20 text-bone rounded-full text-lg font-light transition-all duration-300 group-hover:border-accent/30 font-sans tracking-wide">
                <span>Start Your Transformation</span>
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