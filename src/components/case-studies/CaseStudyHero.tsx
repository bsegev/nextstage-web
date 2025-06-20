"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
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

// Loading skeleton component
const LoadingSkeleton = () => (
  <div className="relative w-full min-h-screen bg-background dark:bg-[#0B0B0F] flex items-center justify-center">
    <div className="max-w-6xl mx-auto text-center px-6 space-y-8">
      {/* Skeleton badge */}
      <div className="flex justify-center">
        <div className="h-12 w-64 bg-foreground/10 rounded-full animate-pulse" />
      </div>
      
      {/* Skeleton title */}
      <div className="space-y-4">
        <div className="h-12 w-96 bg-foreground/10 rounded-lg animate-pulse mx-auto" />
        <div className="h-8 w-80 bg-foreground/10 rounded-lg animate-pulse mx-auto" />
      </div>
      
      {/* Skeleton cards */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <div className="h-32 w-64 bg-foreground/10 rounded-2xl animate-pulse" />
        <div className="h-32 w-64 bg-foreground/10 rounded-2xl animate-pulse" />
      </div>
      
      {/* MacBook skeleton */}
      <div className="mt-16">
        <div className="h-64 w-96 bg-foreground/10 rounded-2xl animate-pulse mx-auto" />
      </div>
    </div>
  </div>
);

export default function CaseStudyHero({ data }: CaseStudyHeroProps) {
  const [loadingStage, setLoadingStage] = useState<'skeleton' | 'header' | 'macbook' | 'complete'>('skeleton');
  const backgroundImage = getBackgroundImage(data.client);
  
  // Dynamic styling based on overlay type
  const overlayType = data.overlayType || 'dark';
  const isLightOverlay = overlayType === 'light';
  
  const textColor = isLightOverlay ? 'text-obsidian' : 'text-bone';
  const textColorSecondary = isLightOverlay ? 'text-obsidian/80' : 'text-bone/80';
  const textColorTertiary = isLightOverlay ? 'text-obsidian/70' : 'text-bone/70';
  const textColorQuaternary = isLightOverlay ? 'text-obsidian/60' : 'text-bone/60';
  const dividerColor = isLightOverlay ? 'bg-obsidian/20' : 'bg-bone/20';
  const glassBackground = isLightOverlay ? 'bg-white/10' : 'bg-obsidian/10';
  const glassBorder = isLightOverlay ? 'border-obsidian/20' : 'border-bone/20';
  
  useEffect(() => {
    // Progressive loading stages
    const timer1 = setTimeout(() => setLoadingStage('header'), 100);
    const timer2 = setTimeout(() => setLoadingStage('macbook'), 300);
    const timer3 = setTimeout(() => setLoadingStage('complete'), 500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);
  
  if (loadingStage === 'skeleton') {
    return <LoadingSkeleton />;
  }
  
  return (
    <div className="relative w-full overflow-hidden bg-background dark:bg-[#0B0B0F]">
      {/* Background Image - Load last for performance */}
      <AnimatePresence>
        {loadingStage === 'complete' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          />
        )}
      </AnimatePresence>
      
      {/* Enhanced overlay system - Customizable per case */}
      {(() => {
        const overlayType = data.overlayType || 'dark'; // Default to dark
        
        switch (overlayType) {
          case 'light':
            return (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-white/70 dark:from-white/85 dark:via-white/75 dark:to-white/65" />
                <div className="absolute inset-0 bg-gradient-to-tl from-accent/15 via-transparent to-transparent opacity-70" />
              </>
            );
          case 'minimal':
            return (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/50 to-background/40 dark:from-[#0B0B0F]/60 dark:via-[#0B0B0F]/50 dark:to-[#0B0B0F]/40" />
                <div className="absolute inset-0 bg-gradient-to-tl from-accent/5 via-transparent to-transparent opacity-40" />
              </>
            );
          case 'heavy':
            return (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-background/98 via-background/95 to-background/90 dark:from-[#0B0B0F]/98 dark:via-[#0B0B0F]/95 dark:to-[#0B0B0F]/90" />
                <div className="absolute inset-0 bg-gradient-to-tl from-accent/20 via-accent/10 to-transparent opacity-80" />
              </>
            );
          case 'dark':
          default:
            return (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-[#2B2B2B]/70 via-[#2B2B2B]/70 to-[#2B2B2B]/70" />
                <div className="absolute inset-0 bg-gradient-to-tl from-accent/10 via-transparent to-transparent opacity-60" />
              </>
            );
        }
      })()}
      
      {/* Header Content - Load first */}
      <AnimatePresence>
        {(loadingStage === 'header' || loadingStage === 'macbook' || loadingStage === 'complete') && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-20 max-w-6xl mx-auto text-center px-6 sm:px-8 md:px-10 lg:px-12 pt-20 sm:pt-16 md:pt-12 lg:pt-8"
          >
            <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 max-w-[100vw] mt-[15vh] sm:mt-[10vh] md:mt-[5vh] lg:mt-0">
              
              {/* Client & Stage Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center justify-center px-4 sm:px-6 md:px-8"
              >
                <LiquidGlass 
                  intensity="medium" 
                  animated
                  className={`px-4 py-3 sm:px-4 sm:py-3 md:px-6 md:py-3 backdrop-blur-xl w-full max-w-[300px] sm:max-w-none ${glassBackground} border ${glassBorder}`}
                  borderRadius="rounded-full"
                >
                  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent animate-pulse" />
                      <span className={`text-sm sm:text-sm font-medium ${textColorSecondary} tracking-wide whitespace-nowrap`}>
                        {data.client}
                      </span>
                    </div>
                    <div className={`w-6 h-px sm:w-px sm:h-4 ${dividerColor}`} />
                    <span className={`text-sm sm:text-sm ${textColorTertiary} font-light tracking-widest uppercase whitespace-nowrap`}>
                      {data.stage}
                    </span>
                  </div>
                </LiquidGlass>
              </motion.div>

              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="px-4 sm:px-6 md:px-8"
              >
                <h1 className="font-display text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight w-full max-w-[300px] sm:max-w-none mx-auto break-words hyphens-auto">
                  <span className={`block ${textColor}`}>
                    {data.title}
                  </span>
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="px-4 sm:px-6 md:px-8"
              >
                <p className={`text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl ${textColorSecondary} font-extralight leading-relaxed w-full max-w-[300px] sm:max-w-4xl mx-auto tracking-wide break-words`}>
                  {data.subtitle}
                </p>
              </motion.div>

              {/* Featured Meta Information */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-6 md:px-8 py-4"
              >
                {/* Timeline Card */}
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
                    className={`relative ${glassBackground} backdrop-blur-2xl border ${glassBorder} p-5 sm:p-5 md:p-6 lg:p-8 w-full group-hover:scale-105 transition-transform duration-500`}
                    borderRadius="rounded-2xl"
                  >
                    <div className="text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-obsidian dark:bg-obsidian mb-2">
                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className={`text-xs font-medium ${textColorQuaternary} uppercase tracking-[0.2em] mb-3`}>
                          Timeline
                        </h3>
                        <p className={`text-xl sm:text-xl md:text-2xl font-light ${textColor} tracking-wide break-words`}>
                          {data.timeline}
                        </p>
                      </div>
                    </div>
                  </LiquidGlassCard>
                </div>

                {/* Key Result Card */}
                <div className="relative group w-full max-w-[300px] sm:max-w-xs md:max-w-none sm:w-auto">
                  <GlowingEffect 
                    variant="peach" 
                    glow 
                    proximity={100}
                    disabled={false}
                    className="absolute inset-0 rounded-2xl"
                  />
                  <LiquidGlassCard 
                    intensity="strong"
                    animated
                    className={`relative ${glassBackground} backdrop-blur-2xl border ${glassBorder} p-5 sm:p-5 md:p-6 lg:p-8 w-full group-hover:scale-105 transition-transform duration-500`}
                    borderRadius="rounded-2xl"
                  >
                    <div className="text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-obsidian dark:bg-obsidian mb-2">
                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div>
                        <h3 className={`text-xs font-medium ${textColorQuaternary} uppercase tracking-[0.2em] mb-3`}>
                          Key Result
                        </h3>
                        <PointerHighlight
                          rectangleClassName="rounded-lg border-2 border-accent/60"
                          pointerClassName="text-accent"
                          containerClassName="inline-block"
                        >
                          <p className={`text-xl sm:text-xl md:text-2xl font-light leading-tight tracking-wide px-3 py-1 break-words ${textColor}`}>
                            {data.keyResult}
                          </p>
                        </PointerHighlight>
                      </div>
                    </div>
                  </LiquidGlassCard>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MacBook Component - Load after header */}
      <AnimatePresence>
        {loadingStage === 'macbook' || loadingStage === 'complete' ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <MacbookScroll
              title={
                <span className={textColor}>
                  {data.subtitle}
                </span>
              }
              src={data.image || '/images/showcase/sp_deck.jpg'}
              showGradient={false}
              badge={
                <LiquidGlass 
                  intensity="subtle"
                  className={`${glassBackground} backdrop-blur-xl border ${glassBorder} px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 shadow-2xl`}
                  borderRadius="rounded-xl"
                >
                  <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent animate-pulse" />
                    <span className={`text-xs font-medium ${textColorSecondary} tracking-wide`}>
                      Case Study
                    </span>
                  </div>
                </LiquidGlass>
              }
            />
          </motion.div>
        ) : (
          // MacBook placeholder during loading
          <div className="relative z-10 flex items-center justify-center min-h-[50vh]">
            <div className="h-64 w-96 bg-foreground/10 rounded-2xl animate-pulse" />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
} 