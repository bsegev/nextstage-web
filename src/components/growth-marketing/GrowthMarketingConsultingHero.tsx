'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { LiquidGlass } from '@/components/ui/liquid-glass';

export default function GrowthMarketingConsultingHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center sm:justify-start px-3 sm:px-6 lg:px-8 pt-20 sm:pt-0 overflow-hidden">
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/growth-marketing-hero-bg-2.png)',
        }}
      />
      
      {/* Enhanced overlay system for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/75 to-transparent dark:from-obsidian/95 dark:via-obsidian/75 dark:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-tl from-accent/20 via-transparent to-transparent opacity-60" />
      
      {/* Dynamic floating orbs */}
      <div className="absolute top-1/4 right-1/3 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full blur-2xl sm:blur-3xl opacity-40 dark:opacity-20 animate-pulse" 
           style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tr from-accent/15 to-accent/8 rounded-full blur-2xl sm:blur-3xl opacity-30 dark:opacity-15 animate-pulse" 
           style={{ animationDuration: '6s', animationDelay: '1s' }} />
      
      {/* Creative Flow Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="designFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0" />
            <stop offset="30%" stopColor="#FFE0D7" stopOpacity="0.3" />
            <stop offset="70%" stopColor="#FFE0D7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Creative Design Flow Lines */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.path
            key={i}
            d={`M${-100 + i * 120} ${200 + i * 80} Q${500 + i * 150} ${250 + i * 60} ${1400 + i * 100} ${220 + i * 70}`}
            stroke="url(#designFlowGradient)"
            strokeWidth={1 + (i % 2)}
            fill="none"
            opacity={0.4 - i * 0.05}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.4 - i * 0.05, 0]
            }}
            transition={{
              duration: 8 + i * 0.8,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(10,10,10,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(10,10,10,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] sm:bg-[size:6rem_6rem] dark:bg-[linear-gradient(rgba(245,244,241,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(245,244,241,0.015)_1px,transparent_1px)]" />

      {/* Main content */}
      <div className="relative z-10 w-full">
        <div className="max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto sm:mx-0 sm:ml-8 md:ml-16 lg:ml-32 xl:ml-40 2xl:ml-48 px-4 sm:px-0">
          <div className="space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full border border-accent/20"
            >
              <span className="text-sm font-medium text-obsidian/70 tracking-wide uppercase">
                Growth & Marketing
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 sm:space-y-6 lg:space-y-8"
            >
              <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display tracking-tight leading-[0.9] sm:leading-[0.95]">
                Marketing that connects
                <br />
                <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                  customers to your vision
              </span>
            </h1>
              
              <p className="text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-[1.5] text-foreground/80 font-light max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl">
                Every business has a story worth telling and customers who need what you offer. We help you find those customers, communicate your value clearly, and build relationships that drive sustainable growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <a href="https://cal.com/bensegev/30min" target="_blank" rel="noopener noreferrer" className="group relative w-full sm:w-auto min-h-[56px] touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 rounded-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/40 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative inline-flex items-center justify-center gap-3 sm:gap-4 px-8 py-4 sm:px-6 md:px-8 lg:px-10 sm:py-3 md:py-4 lg:py-5 bg-obsidian text-bone rounded-full text-base sm:text-base lg:text-lg font-medium w-full sm:w-auto group-hover:bg-obsidian/90 group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:-translate-y-1 group-active:scale-95 transition-all duration-300">
                  <span className="relative">
                    Book Appointment
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                  </span>
                    <motion.svg 
                    className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                </div>
                </a>

              <div className="group relative w-full sm:w-auto min-h-[56px] touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-bone/50 focus-visible:ring-offset-2">
                <LiquidGlass 
                  intensity="subtle" 
                  animated
                  borderRadius="rounded-full"
                  className="group-hover:scale-[1.02] transition-transform duration-300 border-bone/30 group-hover:border-bone/50"
                >
                  <div className="inline-flex items-center justify-center gap-3 sm:gap-4 px-8 py-4 sm:px-6 md:px-8 lg:px-10 sm:py-3 md:py-4 lg:py-5 text-obsidian/80 group-hover:text-obsidian text-base sm:text-base lg:text-lg font-medium transition-all duration-300 group-hover:-translate-y-1 group-active:scale-95 w-full sm:w-auto">
                    <span className="relative">
                      View Work
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full block" />
                    </span>
                    
                    <div className="relative overflow-hidden w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
                      <svg 
                        className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-all duration-300 group-hover:rotate-45" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </LiquidGlass>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-6 sm:pt-8"
            >
              <p className="text-sm text-foreground/50 font-light italic">
                Trusted by founders who understand that great marketing builds bridges, not just campaigns
            </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 