'use client';

import { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import { LiquidGlass } from '@/components/ui/liquid-glass';

export default function GrowthMarketingCTA() {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Enhanced scroll-based animations
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const funnelRotation = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 4]);
  const centralPulse = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 1]);
  
  // Funnel expansion and particle flow
  const funnelExpansion = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0, 0.8, 1]);
  const particleFlow = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 0.5, 1, 0.5, 0]);
  
  // Pre-calculate ring rotations to avoid hook errors
  const ringRotation1 = useTransform(funnelRotation, (r) => r);
  const ringRotation2 = useTransform(funnelRotation, (r) => -r);
  const ringRotation3 = useTransform(funnelRotation, (r) => r);
  const ringRotation4 = useTransform(funnelRotation, (r) => -r);

  return (
    <section ref={sectionRef} className="py-20 sm:py-24 md:py-32 bg-obsidian relative overflow-hidden">
      {/* Static Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-accent/12"></div>
      
      {/* Dynamic Background with Flowing Lines - inspired by WorkCTA */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Flowing Lines - Growth Flow Metaphor */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="growthFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0" />
              <stop offset="30%" stopColor="#FFE0D7" stopOpacity="0.2" />
              <stop offset="70%" stopColor="#FFE0D7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
            </linearGradient>
            
            <linearGradient id="growthFlowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFE0D7" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Dynamic Flow Lines */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.path
              key={i}
              d={`M${-120 + i * 80} ${200 + i * 45} Q${400 + i * 100} ${300 + i * 25} ${1320 + i * 70} ${240 + i * 35}`}
              stroke="url(#growthFlowGradient)"
              strokeWidth={1.5 + (i % 2) * 0.5}
              fill="none"
              opacity={0.6 - i * 0.04}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.6 - i * 0.04, 0]
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Secondary Layer - More dispersed */}
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.path
              key={`secondary-${i}`}
              d={`M${-60 + i * 120} ${400 + i * 30} Q${480 + i * 140} ${200 + i * 40} ${1260 + i * 100} ${340 + i * 25}`}
              stroke="url(#growthFlowGradient2)"
              strokeWidth={1 + (i % 2) * 0.3}
              fill="none"
              opacity={0.4 - i * 0.03}
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: [0, 1, 0]
              }}
              transition={{
                duration: 8 + i * 0.6,
                repeat: Infinity,
                delay: 4 + i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* Mobile Layout */}
        <div className="lg:hidden text-center">
          
          {/* Availability Badge - Hidden */}
          <div className="hidden">
            <div className="flex justify-center mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent/15 to-accent/8 rounded-full border border-emerald-400/30 backdrop-blur-md"
              >
                <motion.div className="relative">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                  <motion.div 
                    className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping"
                    style={{ opacity: 0.4 }}
                  />
                  <motion.div 
                    className="absolute -inset-1 w-5 h-5 bg-emerald-400/20 rounded-full animate-pulse"
                  />
                </motion.div>
                <span className="text-bone text-sm font-medium tracking-wide">Currently accepting new clients</span>
              </motion.div>
            </div>
          </div>

          {/* Header */}
          <div className="mb-12">
            <h2 className="font-display text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-bone via-accent to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                Ready to accelerate with confidence?
              </span>
            </h2>
            <p className="text-lg sm:text-lg text-bone/75 font-light max-w-2xl mx-auto">
              Transform your vision into systematic growth that scales exponentially.
            </p>
          </div>

          {/* Fibonacci Funnel Spiral Visual - Mobile */}
          <div className="relative h-80 mb-12">
            <motion.div className="absolute inset-0 flex items-center justify-center">
              {/* Enhanced SVG with Fibonacci Funnel */}
              <svg className="w-full h-full max-w-sm" viewBox="0 0 320 320" suppressHydrationWarning>
                <defs>
                  <radialGradient id="funnelCenterMobile" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0.9" />
                    <stop offset="70%" stopColor="#FFE0D7" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
                  </radialGradient>
                  
                  <linearGradient id="funnelGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0.3" />
                  </linearGradient>
                  
                  <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Funnel Progress Rings */}
                <motion.circle
                  cx="160"
                  cy="160"
                  r="50"
                  fill="none"
                  stroke="#FFE0D7"
                  strokeWidth="0.8"
                  opacity={0.25}
                  strokeDasharray="2 4"
                  style={{
                    pathLength: funnelExpansion,
                    rotate: ringRotation1
                  }}
                />
                <motion.circle
                  cx="160"
                  cy="160"
                  r="80"
                  fill="none"
                  stroke="#FFE0D7"
                  strokeWidth="0.8"
                  opacity={0.22}
                  strokeDasharray="2 4"
                  style={{
                    pathLength: funnelExpansion,
                    rotate: ringRotation2
                  }}
                />
                <motion.circle
                  cx="160"
                  cy="160"
                  r="110"
                  fill="none"
                  stroke="#FFE0D7"
                  strokeWidth="0.8"
                  opacity={0.19}
                  strokeDasharray="2 4"
                  style={{
                    pathLength: funnelExpansion,
                    rotate: ringRotation3
                  }}
                />
                <motion.circle
                  cx="160"
                  cy="160"
                  r="140"
                  fill="none"
                  stroke="#FFE0D7"
                  strokeWidth="0.8"
                  opacity={0.16}
                  strokeDasharray="2 4"
                  style={{
                    pathLength: funnelExpansion,
                    rotate: ringRotation4
                  }}
                />

                {/* eslint-disable react-hooks/rules-of-hooks */}
                <motion.g style={{ rotate: funnelRotation }}>
                  {/* Fibonacci Funnel Spiral - Mobile */}
                  {Array.from({ length: 40 }).map((_, i) => {
                    // Pre-calculate static values for Fibonacci spiral
                    const staticValues = useMemo(() => {
                      const t = i / 40;
                      const fibonacciAngle = t * Math.PI * 8; // Multiple rotations
                      const goldenRatio = 1.618;
                      
                      // Funnel shape: wide at top, narrow at bottom
                      const funnelRadius = 80 * (1 - t * 0.8); // Starts at 80, ends at 16
                      const funnelHeight = t * 200 - 100; // -100 to +100
                      
                      return {
                        t,
                        fibonacciAngle,
                        funnelRadius,
                        funnelHeight,
                        goldenRatio,
                        spiralRadius: funnelRadius * Math.pow(goldenRatio, -t * 2)
                      };
                    }, [i]);
                    
                    // Create dual spiral points
                    return [0, Math.PI].map((offset, spiralIndex) => {
                      const angle = staticValues.fibonacciAngle + offset;
                      
                      return (
                        <motion.circle
                          key={`funnel-spiral-${i}-${spiralIndex}`}
                          cx="160"
                          cy="160"
                          r={1.5 + staticValues.t * 2}
                          style={{
                            x: useTransform(funnelRotation, (rotation) => {
                              const rotAngle = angle + rotation * 0.5;
                              return staticValues.funnelRadius * Math.cos(rotAngle);
                            }),
                            y: useTransform(funnelRotation, () => {
                              return staticValues.funnelHeight;
                            }),
                            opacity: useTransform(particleFlow, (flow) => {
                              // Particles appear progressively down the funnel
                              const particleProgress = (flow * 40 - i) / 5;
                              const baseOpacity = 0.3 + staticValues.t * 0.7; // Denser at bottom
                              return Math.max(0, Math.min(1, particleProgress)) * baseOpacity;
                            })
                          }}
                          fill={staticValues.t > 0.7 ? "#FFE0D7" : "#FFFFFF"}
                          filter={staticValues.t > 0.8 ? "url(#softGlow)" : "none"}
                          animate={{
                            scale: [1, 1.2 + staticValues.t * 0.3, 1],
                          }}
                          transition={{
                            duration: 2 + i * 0.05,
                            repeat: Infinity,
                            delay: i * 0.02 + spiralIndex * 0.1
                          }}
                          suppressHydrationWarning
                        />
                      );
                    });
                  })}
                  
                  {/* Funnel Connection Lines */}
                  {Array.from({ length: 20 }).map((_, i) => {
                    const t = i / 20;
                    const angle = t * Math.PI * 4;
                    const radius = 80 * (1 - t * 0.8);
                    const height = t * 200 - 100;
                    
                    const x1 = 160 + radius * Math.cos(angle);
                    const y1 = 160 + height;
                    const x2 = 160 + radius * Math.cos(angle + Math.PI);
                    const y2 = 160 + height;
                    
                    return (
                      <motion.line
                        key={`funnel-connection-${i}`}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="url(#funnelGradient)"
                        strokeWidth="0.5"
                        opacity={0.2 + t * 0.3}
                        style={{
                          pathLength: funnelExpansion
                        }}
                        suppressHydrationWarning
                      />
                    );
                  })}
                  
                  {/* Central conversion point with premium glow */}
                  <motion.circle
                    cx="160"
                    cy="160"
                    r="8"
                    fill="url(#funnelCenterMobile)"
                    filter="url(#softGlow)"
                    style={{ 
                      opacity: 0.8,
                      scale: centralPulse
                    }}
                    suppressHydrationWarning
                  />
                </motion.g>
                {/* eslint-enable react-hooks/rules-of-hooks */}

                {/* Funnel Stage Indicators */}
                {['Awareness', 'Interest', 'Decision', 'Action'].map((stage, i) => {
                  const y = 80 + i * 40;
                  const opacity = 0.4 - i * 0.05;
                  
                  return (
                    <motion.g key={`stage-${i}`}>
                      <motion.line
                        x1={40}
                        y1={y}
                        x2={60}
                        y2={y}
                        stroke="#FFE0D7"
                        strokeWidth="0.6"
                        opacity={opacity}
                        animate={{
                          opacity: [opacity * 0.5, opacity, opacity * 0.5],
                          scale: [0.8, 1.1, 0.8]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5
                        }}
                        suppressHydrationWarning
                      />
                    </motion.g>
                  );
                })}
              </svg>
          </motion.div>

            {/* Floating Growth Elements */}
            <motion.div
              className="absolute top-8 right-8 w-2 h-2 bg-accent/50 rounded-full"
              animate={{
                y: [0, -12, 0],
                opacity: [0.5, 0.7, 0.5]
              }}
              transition={{ duration: 3.5, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-16 left-8 w-1.5 h-1.5 bg-accent/40 rounded-full"
              animate={{
                y: [0, -8, 0],
                x: [0, 6, 0],
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
            />
            <motion.div
              className="absolute top-1/3 left-4 w-1 h-1 bg-accent/45 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.45, 0.65, 0.45]
              }}
              transition={{ duration: 2.8, repeat: Infinity, delay: 0.8 }}
            />
            <motion.div
              className="absolute bottom-1/3 right-6 w-2 h-2 bg-accent/35 rounded-full"
              animate={{
                rotate: [0, 360],
                scale: [0.9, 1.1, 0.9],
                opacity: [0.35, 0.55, 0.35]
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
            />
            </div>

          {/* CTA Buttons - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center space-y-4"
          >
            {/* Primary CTA */}
            <a href="https://cal.com/bensegev/30min" target="_blank" rel="noopener noreferrer" className="group relative w-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/40 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative inline-flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 bg-accent text-obsidian rounded-full text-base font-medium transition-all duration-300 group-hover:bg-accent/90 group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:-translate-y-1 w-full">
                <span className="relative">
                  Book Appointment
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full block" />
                </span>
                
                <div className="relative overflow-hidden w-4 h-4 sm:w-5 sm:h-5">
                  <motion.svg 
                    className="absolute w-4 h-4 sm:w-5 sm:h-5"
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

            {/* Secondary CTA */}
                          <Link href="/case-studies" className="group relative w-full">
              <LiquidGlass 
                intensity="subtle" 
                animated
                borderRadius="rounded-full"
                className="group-hover:scale-[1.02] transition-transform duration-300 border-bone/30 group-hover:border-bone/50"
              >
                <div className="inline-flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 text-bone/80 group-hover:text-bone text-base font-medium transition-all duration-300 group-hover:-translate-y-1 w-full">
                  <span className="relative">
                    See Case Studies
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full block" />
                  </span>
                  
                  <div className="relative overflow-hidden w-4 h-4 sm:w-5 sm:h-5">
                    <svg 
                      className="w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 group-hover:rotate-45" 
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
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-16 items-center min-h-[60vh]">
          
          {/* Content Side - Left */}
          <div className="col-span-7 space-y-12 text-left">
            
            {/* Availability Badge - Desktop - Hidden */}
            <div className="hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-accent/15 to-accent/8 rounded-full border border-emerald-400/30 backdrop-blur-md"
              >
                  <motion.div className="relative">
                    <div className="w-4 h-4 bg-emerald-500 rounded-full" />
                    <motion.div 
                      className="absolute inset-0 w-4 h-4 bg-emerald-400 rounded-full animate-ping"
                      style={{ opacity: 0.4 }}
                    />
                    <motion.div 
                      className="absolute -inset-1 w-6 h-6 bg-emerald-400/20 rounded-full animate-pulse"
                    />
                  </motion.div>
                <span className="text-bone font-medium tracking-wide">Currently accepting new clients</span>
              </motion.div>
            </div>

            {/* Header */}
            <div className="text-left">
              <h2 className="font-display text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-bone via-accent to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                  Ready to accelerate with confidence?
                </span>
              </h2>
              <p className="text-lg sm:text-lg text-bone/75 font-light max-w-2xl">
                Transform your vision into systematic growth that scales exponentially.
              </p>
            </div>

            {/* Growth Statement */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl"
            >
              <p className="text-lg sm:text-lg text-bone/70 font-light leading-relaxed">
                From vision to execution, we build the growth systems that turn ambitious goals into predictable outcomes.
              </p>
            </motion.div>

            {/* CTA Buttons - Desktop */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-row items-start justify-start space-x-6"
            >
              {/* Primary CTA */}
              <a href="https://cal.com/bensegev/30min" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/40 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-accent text-obsidian rounded-full text-base sm:text-base lg:text-lg font-medium transition-all duration-300 group-hover:bg-accent/90 group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:-translate-y-1">
                  <span className="relative">
                    Book Appointment
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full block" />
                  </span>
                  
                  <div className="relative overflow-hidden w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
                    <motion.svg 
                      className="absolute w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
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

              {/* Secondary CTA */}
              <Link href="/case-studies" className="group relative">
                <LiquidGlass 
                  intensity="subtle" 
                  animated
                  borderRadius="rounded-full"
                  className="group-hover:scale-[1.02] transition-transform duration-300 border-bone/30 group-hover:border-bone/50"
                >
                  <div className="inline-flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-bone/80 group-hover:text-bone text-base sm:text-base lg:text-lg font-medium transition-all duration-300 group-hover:-translate-y-1">
                    <span className="relative">
                      See Case Studies
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full block" />
                    </span>
                    
                    <div className="relative overflow-hidden w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
                      <svg 
                        className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-all duration-300 group-hover:rotate-45" 
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
            </motion.div>

            {/* Closing Statement */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="pt-8"
            >
              <p className="text-base text-bone/50 font-light italic">
                Where strategic vision meets systematic execution
              </p>
            </motion.div>
          </div>

                      {/* Visual Side - Right (Desktop Only) */}
            <div className="col-span-5 relative h-96 lg:h-full">
            <motion.div className="absolute inset-0 flex items-center justify-center">
              {/* Enhanced SVG with Fibonacci Funnel - Desktop */}
              <svg className="w-full h-full max-w-md" viewBox="0 0 400 400" suppressHydrationWarning>
                <defs>
                  <radialGradient id="funnelCenterDesktop" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0.9" />
                    <stop offset="70%" stopColor="#FFE0D7" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
                  </radialGradient>
                  
                  <linearGradient id="funnelGradientDesktop" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0.3" />
                  </linearGradient>
                  
                  <filter id="softGlowDesktop" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Funnel Progress Rings */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="70"
                  fill="none"
                  stroke="#FFE0D7"
                  strokeWidth="1"
                  opacity={0.3}
                  strokeDasharray="3 6"
                  style={{
                    pathLength: funnelExpansion,
                    rotate: ringRotation1
                  }}
                />
                <motion.circle
                  cx="200"
                  cy="200"
                  r="110"
                  fill="none"
                  stroke="#FFE0D7"
                  strokeWidth="1"
                  opacity={0.26}
                  strokeDasharray="3 6"
                  style={{
                    pathLength: funnelExpansion,
                    rotate: ringRotation2
                  }}
                />
                <motion.circle
                  cx="200"
                  cy="200"
                  r="150"
                  fill="none"
                  stroke="#FFE0D7"
                  strokeWidth="1"
                  opacity={0.22}
                  strokeDasharray="3 6"
                  style={{
                    pathLength: funnelExpansion,
                    rotate: ringRotation3
                  }}
                />
                <motion.circle
                  cx="200"
                  cy="200"
                  r="190"
                  fill="none"
                  stroke="#FFE0D7"
                  strokeWidth="1"
                  opacity={0.18}
                  strokeDasharray="3 6"
                  style={{
                    pathLength: funnelExpansion,
                    rotate: ringRotation4
                  }}
                />

                {/* eslint-disable react-hooks/rules-of-hooks */}
                <motion.g style={{ rotate: funnelRotation }}>
                  {/* Fibonacci Funnel Spiral - Desktop */}
                  {Array.from({ length: 50 }).map((_, i) => {
                    // Pre-calculate static values for Fibonacci spiral
                    const staticValues = useMemo(() => {
                      const t = i / 50;
                      const fibonacciAngle = t * Math.PI * 10; // More rotations for desktop
                      const goldenRatio = 1.618;
                      
                      // Funnel shape: wide at top, narrow at bottom
                      const funnelRadius = 120 * (1 - t * 0.85); // Starts at 120, ends at 18
                      const funnelHeight = t * 280 - 140; // -140 to +140
                      
                      return {
                        t,
                        fibonacciAngle,
                        funnelRadius,
                        funnelHeight,
                        goldenRatio,
                        spiralRadius: funnelRadius * Math.pow(goldenRatio, -t * 2.5)
                      };
                    }, [i]);
                    
                    // Create dual spiral points
                    return [0, Math.PI].map((offset, spiralIndex) => {
                      const angle = staticValues.fibonacciAngle + offset;
                      
                      return (
                        <motion.circle
                          key={`funnel-spiral-desktop-${i}-${spiralIndex}`}
                          cx="200"
                          cy="200"
                          r={2 + staticValues.t * 2.5}
                          style={{
                            x: useTransform(funnelRotation, (rotation) => {
                              const rotAngle = angle + rotation * 0.4;
                              return staticValues.funnelRadius * Math.cos(rotAngle);
                            }),
                            y: useTransform(funnelRotation, () => {
                              return staticValues.funnelHeight;
                            }),
                            opacity: useTransform(particleFlow, (flow) => {
                              // Particles appear progressively down the funnel
                              const particleProgress = (flow * 50 - i) / 6;
                              const baseOpacity = 0.2 + staticValues.t * 0.8; // Denser at bottom
                              return Math.max(0, Math.min(1, particleProgress)) * baseOpacity;
                            })
                          }}
                          fill={staticValues.t > 0.6 ? "#FFE0D7" : "#FFFFFF"}
                          filter={staticValues.t > 0.75 ? "url(#softGlowDesktop)" : "none"}
                          animate={{
                            scale: [1, 1.3 + staticValues.t * 0.4, 1],
                          }}
                          transition={{
                            duration: 2.5 + i * 0.04,
                            repeat: Infinity,
                            delay: i * 0.015 + spiralIndex * 0.08
                          }}
                          suppressHydrationWarning
                        />
                      );
                    });
                  })}
                  
                  {/* Funnel Connection Lines - Desktop */}
                  {Array.from({ length: 25 }).map((_, i) => {
                    const t = i / 25;
                    const angle = t * Math.PI * 5;
                    const radius = 120 * (1 - t * 0.85);
                    const height = t * 280 - 140;
                    
                    const x1 = 200 + radius * Math.cos(angle);
                    const y1 = 200 + height;
                    const x2 = 200 + radius * Math.cos(angle + Math.PI);
                    const y2 = 200 + height;
                    
                    return (
                      <motion.line
                        key={`funnel-connection-desktop-${i}`}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="url(#funnelGradientDesktop)"
                        strokeWidth="0.6"
                        opacity={0.15 + t * 0.35}
                        style={{
                          pathLength: funnelExpansion
                        }}
                        suppressHydrationWarning
                      />
                    );
                  })}
                  
                  {/* Central conversion point with premium glow */}
                  <motion.circle
                    cx="200"
                    cy="200"
                    r="12"
                    fill="url(#funnelCenterDesktop)"
                    filter="url(#softGlowDesktop)"
                    style={{ 
                      opacity: 0.8,
                      scale: centralPulse
                    }}
                    suppressHydrationWarning
                  />
                </motion.g>
                {/* eslint-enable react-hooks/rules-of-hooks */}

                {/* Funnel Stage Indicators - Desktop */}
                {['Awareness', 'Interest', 'Decision', 'Action'].map((stage, i) => {
                  const y = 100 + i * 50;
                  const opacity = 0.5 - i * 0.06;
                  
                  return (
                    <motion.g key={`stage-desktop-${i}`}>
                      <motion.line
                        x1={50}
                        y1={y}
                        x2={80}
                        y2={y}
                        stroke="#FFE0D7"
                        strokeWidth="0.8"
                        opacity={opacity}
                        animate={{
                          opacity: [opacity * 0.4, opacity, opacity * 0.4],
                          scale: [0.8, 1.2, 0.8]
                        }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          delay: i * 0.6
                        }}
                        suppressHydrationWarning
                      />
                    </motion.g>
                  );
                })}
              </svg>
            </motion.div>

            {/* Floating Growth Elements */}
            <motion.div
              className="absolute top-8 right-8 w-2 h-2 bg-accent/50 rounded-full"
              animate={{
                y: [0, -12, 0],
                opacity: [0.5, 0.7, 0.5]
              }}
              transition={{ duration: 3.5, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-16 left-8 w-1.5 h-1.5 bg-accent/40 rounded-full"
              animate={{
                y: [0, -8, 0],
                x: [0, 6, 0],
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
            />
            <motion.div
              className="absolute top-1/3 left-4 w-1 h-1 bg-accent/45 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.45, 0.65, 0.45]
              }}
              transition={{ duration: 2.8, repeat: Infinity, delay: 0.8 }}
            />
            <motion.div
              className="absolute bottom-1/3 right-6 w-2 h-2 bg-accent/35 rounded-full"
              animate={{
                rotate: [0, 360],
                scale: [0.9, 1.1, 0.9],
                opacity: [0.35, 0.55, 0.35]
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
            />
            </div>
        </div>
      </div>
    </section>
  );
} 