'use client';

import { useEffect, useState } from 'react';
import { IconRocket, IconTrendingUp, IconRefresh } from '@tabler/icons-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';

export default function BusinessValue() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const valueDrivers = [
    {
      title: "Brand",
      focus: "clarity",
      description: "When brand strategy is clear and compelling, it becomes the North Star that guides every decision. Organizations with aligned brand foundations see 23% faster revenue growth and stronger market positioning.",
      icon: IconRocket,
      gradient: "from-accent/20 via-accent/10 to-transparent"
    },
    {
      title: "Strategy", 
      focus: "execution",
      description: "Strategy without execution is just planning. We build strategies that translate directly into action, creating clear pathways from vision to measurable business outcomes.",
      icon: IconTrendingUp,
      gradient: "from-accent/15 via-accent/8 to-transparent"
    },
    {
      title: "Systems",
      focus: "scalability", 
      description: "The right systems turn good ideas into repeatable success. We design operational frameworks that scale with growth and adapt to market changes without breaking.",
      icon: IconRefresh,
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
            <span>Drive Business Value</span>
          </div>
          
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[-0.02em] leading-[0.9] mb-6 sm:mb-8 md:mb-10 text-foreground">
            <span className="block mb-2 sm:mb-3">Alignment creates</span>
            <span className="block mb-2 sm:mb-3">
              <span className="text-foreground/90">exponential value</span>
            </span>
            <span className="block relative">
              <span className="bg-gradient-to-r from-obsidian via-accent via-accent to-obsidian dark:from-bone dark:via-accent dark:to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                when done right
              </span>
            </span>
          </h2>
          
          <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto px-2 sm:px-0">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.4] sm:leading-[1.4] text-foreground/75 font-light tracking-[-0.01em]">
              Most organizations struggle with misaligned brand, strategy, and systems. We eliminate that friction, 
              creating cohesive foundations that accelerate growth and amplify impact.
            </p>
          </div>
        </div>

        {/* Revolutionary card grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6 xl:gap-8">
          {valueDrivers.map((driver, index) => {
            const IconComponent = driver.icon;
            
            return (
              <div 
                key={driver.title}
                className={`group relative transition-all duration-1000 ease-out delay-${(index + 2) * 150} ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              >
                {/* Advanced card background with multiple layers */}
                <div className="relative h-full">
                  {/* Main card */}
                  <div className="relative bg-background/80 backdrop-blur-sm border border-foreground/8 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 h-full transition-all duration-500 ease-out group-hover:border-accent/20 group-hover:bg-background/90">
                    
                    {/* Glowing effect */}
                    <GlowingEffect
                      spread={60}
                      glow={true}
                      disabled={false}
                      proximity={120}
                      inactiveZone={0.3}
                      movementDuration={1.5}
                      borderWidth={2}
                    />
                    
                    {/* Sophisticated gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${driver.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl`} />
                    
                    {/* Glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Premium icon treatment */}
                      <div className="relative mb-6 sm:mb-8 group-hover:scale-105 transition-transform duration-500 ease-out">
                        {/* Animated background circle */}
                        <div className="absolute inset-0 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-obsidian to-obsidian/90 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out scale-90 group-hover:scale-100 rotate-0 group-hover:rotate-3" />
                        
                        {/* Icon container */}
                        <div className="relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 flex items-center justify-center">
                          <IconComponent 
                            size={36} 
                            className="sm:w-12 sm:h-12 md:w-[52px] md:h-[52px] text-foreground/70 group-hover:text-accent transition-all duration-500 ease-out relative z-10 group-hover:scale-110"
                            stroke={1.2} 
                          />
                        </div>
                      </div>
                      
                      {/* Typography with premium spacing */}
                      <div className="mb-6 sm:mb-8">
                        <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 tracking-[-0.01em] transition-colors duration-300">
                          {driver.title}
                        </h3>
                        <div className="inline-flex items-center">
                          <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-accent/15 rounded-full border border-accent/20 group-hover:bg-accent/25 group-hover:border-accent/30 transition-all duration-300">
                            <span className="text-xs sm:text-sm font-medium text-foreground/80 tracking-wide">
                              {driver.focus}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Enhanced description */}
                      <p className="text-sm sm:text-base md:text-lg leading-[1.6] text-foreground/65 font-light tracking-[-0.005em] group-hover:text-foreground/80 transition-colors duration-300">
                        {driver.description}
                      </p>
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
          <div className="text-foreground/50 text-xs sm:text-sm font-medium tracking-wide">
            <span>Ready to align for growth?</span>
          </div>
        </div>
      </div>
    </section>
  );
} 