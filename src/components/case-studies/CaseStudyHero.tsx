"use client";

import { motion } from "motion/react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { LiquidGlass, LiquidGlassCard, ObsidianGlassCard } from "@/components/ui/liquid-glass";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { CaseStudyHero as CaseStudyHeroType } from "@/lib/case-studies";

interface CaseStudyHeroProps {
  data: CaseStudyHeroType;
}

// Map case study clients to their background images
const getBackgroundImage = (client: string): string => {
  const clientMap: Record<string, string> = {
    'SparrowPark Development': '/images/showcase/sp-bg.jpg',
    'AI Odyssey': '/images/showcase/ai-podcast-bg.jpg',
    'Bank DIB': '/images/showcase/bank-bg.png'
  };
  
  return clientMap[client] || '/images/showcase/sp-bg.jpg';
};

export default function CaseStudyHero({ data }: CaseStudyHeroProps) {
  const backgroundImage = getBackgroundImage(data.client);
  
  return (
    <section className="relative w-full overflow-hidden bg-background dark:bg-[#0B0B0F]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      
      {/* Enhanced overlay system */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/70 dark:from-[#0B0B0F]/95 dark:via-[#0B0B0F]/85 dark:to-[#0B0B0F]/70" />
      <div className="absolute inset-0 bg-gradient-to-tl from-accent/10 via-transparent to-transparent opacity-60" />
      
      {/* Content with relative positioning */}
      <div className="relative z-10">
        <MacbookScroll
          title={
            <div className="max-w-6xl mx-auto text-center px-6 sm:px-8 md:px-10 lg:px-12 pt-20 sm:pt-16 md:pt-12 lg:pt-8">
              {/* Mobile-optimized content container with significant top margin */}
              <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 max-w-[100vw] mt-[15vh] sm:mt-[10vh] md:mt-[5vh] lg:mt-0">
                
                {/* Client & Stage Badge - Mobile Optimized */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center justify-center px-4 sm:px-6 md:px-8"
                >
                  <LiquidGlass 
                    intensity="medium" 
                    animated
                    className="px-4 py-3 sm:px-4 sm:py-3 md:px-6 md:py-3 backdrop-blur-xl w-full max-w-[300px] sm:max-w-none"
                    borderRadius="rounded-full"
                  >
                    {/* Mobile Layout - Vertical Stack */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 md:gap-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-sm sm:text-sm font-medium text-foreground/90 dark:text-white/90 tracking-wide whitespace-nowrap">
                          {data.client}
                        </span>
                      </div>
                      {/* Separator - Horizontal on mobile, vertical on desktop */}
                      <div className="w-6 h-px sm:w-px sm:h-4 bg-foreground/20 dark:bg-white/20" />
                      <span className="text-sm sm:text-sm text-foreground/70 dark:text-white/70 font-light tracking-widest uppercase whitespace-nowrap">
                        {data.stage}
                      </span>
                    </div>
                  </LiquidGlass>
                </motion.div>

                {/* Main Title - Mobile Optimized */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="px-4 sm:px-6 md:px-8"
                >
                  <h1 className="font-display text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight w-full max-w-[300px] sm:max-w-none mx-auto break-words hyphens-auto">
                    <span className="block text-foreground dark:text-white">
                      {data.title}
                    </span>
                  </h1>
                </motion.div>

                {/* Subtitle - Mobile Optimized */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="px-4 sm:px-6 md:px-8"
                >
                  <p className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl text-foreground/80 dark:text-white/80 font-extralight leading-relaxed w-full max-w-[300px] sm:max-w-4xl mx-auto tracking-wide break-words">
                    {data.subtitle}
                  </p>
                </motion.div>

                {/* Featured Meta Information - Mobile Optimized with glow space */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-6 md:px-8 py-4"
                >
                  {/* Timeline Card - Mobile Optimized */}
                  <div className="relative group w-full max-w-[300px] sm:max-w-xs md:max-w-none sm:w-auto">
                    <GlowingEffect 
                      variant="default" 
                      glow 
                      proximity={100}
                      disabled={false}
                      className="absolute inset-0 rounded-2xl"
                    />
                    <LiquidGlassCard 
                      intensity="strong"
                      animated
                      className="relative bg-background/5 dark:bg-white/5 backdrop-blur-2xl border border-white/10 dark:border-white/20 p-5 sm:p-5 md:p-6 lg:p-8 w-full group-hover:scale-105 transition-transform duration-500"
                      borderRadius="rounded-2xl"
                    >
                      <div className="text-center space-y-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-obsidian dark:bg-obsidian mb-2">
                          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xs font-medium text-foreground/60 dark:text-white/60 uppercase tracking-[0.2em] mb-3">
                            Timeline
                          </h3>
                          <p className="text-xl sm:text-xl md:text-2xl font-light text-foreground dark:text-white tracking-wide break-words">
                            {data.timeline}
                          </p>
                        </div>
                      </div>
                    </LiquidGlassCard>
                  </div>

                  {/* Key Result Card - Mobile Optimized */}
                  <div className="relative group w-full max-w-[300px] sm:max-w-xs md:max-w-none sm:w-auto">
                    <GlowingEffect 
                      variant="peach" 
                      glow 
                      proximity={100}
                      disabled={false}
                      className="absolute inset-0 rounded-2xl"
                    />
                    <ObsidianGlassCard 
                      className="relative p-5 sm:p-5 md:p-6 lg:p-8 w-full group-hover:scale-105 transition-transform duration-500"
                    >
                      <div className="text-center space-y-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-obsidian dark:bg-obsidian mb-2">
                          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xs font-medium text-bone/80 uppercase tracking-[0.2em] mb-3">
                            Key Result
                          </h3>
                          <PointerHighlight
                            rectangleClassName="rounded-lg border-2 border-accent/60"
                            pointerClassName="text-accent"
                            containerClassName="inline-block"
                          >
                            <p className="text-xl sm:text-xl md:text-2xl font-light leading-tight tracking-wide px-3 py-1 break-words" style={{ color: '#ffe0d7' }}>
                              {data.keyResult}
                            </p>
                          </PointerHighlight>
                        </div>
                      </div>
                    </ObsidianGlassCard>
                  </div>
                </motion.div>
              </div>
            </div>
          }
          src={data.image || '/images/showcase/sp_deck.jpg'}
          showGradient={false}
          badge={
            <LiquidGlass 
              intensity="subtle"
              className="bg-background/80 dark:bg-black/80 backdrop-blur-xl border border-white/10 dark:border-white/20 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 shadow-2xl"
              borderRadius="rounded-xl"
            >
              <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-medium text-foreground/80 dark:text-white/80 tracking-wide">
                  Case Study
                </span>
              </div>
            </LiquidGlass>
          }
        />
      </div>
    </section>
  );
}