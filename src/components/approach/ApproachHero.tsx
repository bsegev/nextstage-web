"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LiquidGlass } from "@/components/ui/liquid-glass";
import Link from "next/link";

export default function ApproachHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center sm:justify-start px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/approach-hero-bg.png)',
        }}
      />
      
      {/* Enhanced overlay system for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/75 to-transparent dark:from-obsidian/95 dark:via-obsidian/75 dark:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-tl from-accent/20 via-transparent to-transparent opacity-60" />
      
      {/* Dynamic floating orbs with reduced motion preference support */}
      <div className={`absolute top-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full blur-xl sm:blur-2xl lg:blur-3xl opacity-40 dark:opacity-20 transition-all duration-1000 ${mounted ? 'scale-100' : 'scale-0'}`}
           style={{ animationDuration: '4s' }} />
      <div className={`absolute bottom-1/3 left-1/4 w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-tr from-accent/15 to-accent/8 rounded-full blur-xl sm:blur-2xl lg:blur-3xl opacity-30 dark:opacity-15 transition-all duration-1000 delay-500 ${mounted ? 'scale-100' : 'scale-0'}`}
           style={{ animationDuration: '6s', animationDelay: '1s' }} />
      
      {/* Subtle grid pattern with reduced opacity */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(10,10,10,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(10,10,10,0.015)_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:4rem_4rem] lg:bg-[size:6rem_6rem] dark:bg-[linear-gradient(rgba(245,244,241,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(245,244,241,0.015)_1px,transparent_1px)]" />

      {/* Main content */}
      <div className="relative z-10 w-full">
        <div className="max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto sm:mx-0 sm:ml-8 md:ml-16 lg:ml-32 xl:ml-40 2xl:ml-48 px-4 sm:px-0">
          {/* Headline with enhanced typography and animations */}
          <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="font-display tracking-tight leading-[0.9] sm:leading-[0.95] mb-4 sm:mb-6 lg:mb-8 text-center sm:text-left">
              <span className="block text-foreground text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-1 sm:mb-2 lg:mb-3 drop-shadow-sm">
                How we turn{' '}
              </span>
              <span className="block relative">
                <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian dark:from-bone dark:via-accent dark:to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl drop-shadow-sm">
                  complexity into clarity
                </span>
                <span className="absolute -inset-1 bg-gradient-to-r from-accent/15 to-accent/30 rounded-lg sm:rounded-xl blur-md sm:blur-lg opacity-20 animate-pulse block" />
              </span>
            </h1>
          </div>
          
          {/* Subheadline with semantic markup and enhanced readability */}
          <div className={`transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-6 sm:mb-8 lg:mb-10 xl:mb-12 relative">
              <p className="text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-[1.5] sm:leading-[1.5] text-foreground/80 font-light text-center sm:text-left max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto sm:mx-0">
                We combine{' '}
                <span className="relative inline-block">
                  <span className="text-foreground font-medium">deep strategy</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-accent/50 to-accent/25 block" />
                </span>
                {' '}with{' '}
                <span className="relative inline-block">
                  <span className="text-foreground font-medium">fast execution</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-accent/25 to-accent/50 block" />
                </span>
                {' '}to deliver{' '}
                <span className="relative inline-block">
                  <span className="text-foreground font-medium">results that build on each other</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-accent/50 to-accent/25 block" />
                </span>
                .
              </p>
            </div>
          </div>

          {/* Enhanced CTAs with primary and secondary buttons */}
          <div className={`transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4 sm:gap-6">
              {/* Primary CTA - Contact */}
              <a href="https://cal.com/bensegev/30min" target="_blank" rel="noopener noreferrer" className="group relative w-full sm:w-auto min-h-[56px] touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 rounded-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/40 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative inline-flex items-center justify-center gap-3 sm:gap-4 px-8 py-4 sm:px-6 md:px-8 lg:px-10 sm:py-3 md:py-4 lg:py-5 bg-obsidian text-bone rounded-full text-base sm:text-base lg:text-lg font-medium transition-all duration-300 group-hover:bg-obsidian/90 group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:-translate-y-1 group-active:scale-95 w-full sm:w-auto">
                  <span className="relative">
                    Book Appointment
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full block" />
                  </span>
                  
                  <div className="relative overflow-hidden w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
                    <motion.svg 
                      className="absolute w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </div>
                </div>
              </a>

              {/* Secondary CTA - See Work */}
              <Link href="/case-studies" className="group relative w-full sm:w-auto min-h-[56px] touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 rounded-full">
                <LiquidGlass 
                  intensity="subtle" 
                  animated
                  borderRadius="rounded-full"
                  className="group-hover:scale-[1.02] transition-transform duration-300 border-bone/30 group-hover:border-bone/50"
                >
                  <div className="inline-flex items-center justify-center gap-3 sm:gap-4 px-8 py-4 sm:px-6 md:px-8 lg:px-10 sm:py-3 md:py-4 lg:py-5 text-obsidian/80 group-hover:text-obsidian text-base sm:text-base lg:text-lg font-medium transition-all duration-300 group-hover:-translate-y-1 group-active:scale-95 w-full sm:w-auto">
                    <span className="relative">
                      See Case Studies
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full block" />
                    </span>
                    
                    <div className="relative overflow-hidden w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
                      <svg 
                        className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-all duration-300 group-hover:rotate-45" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </LiquidGlass>
              </Link>
            </div>
          </div>
         </div>
       </div>
       
       {/* Enhanced scroll indicator with reduced motion support */}
       <div className={`absolute bottom-4 sm:bottom-6 lg:bottom-8 xl:bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${mounted ? 'opacity-40 translate-y-0' : 'opacity-0 translate-y-4'}`}>
         <div className="w-[1px] h-8 sm:h-12 lg:h-16 xl:h-20 bg-gradient-to-b from-transparent via-foreground/30 to-transparent animate-pulse" style={{ animationDuration: '2s' }} />
       </div>
    </section>
  );
} 