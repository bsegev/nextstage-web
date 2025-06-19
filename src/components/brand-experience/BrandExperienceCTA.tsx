'use client';

import { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import { LiquidGlass } from '@/components/ui/liquid-glass';

export default function BrandDesignCTA() {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Enhanced scroll-based animations
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const galaxyRotation = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 6]);
  const centralPulse = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 1]);
  
  // Assembly-style animations like WorkCTA
  const assemblyProgress = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0, 0.5, 1]);
  
  // Pre-calculate ring rotations to avoid hook errors
  const ringRotation1 = useTransform(galaxyRotation, (r) => r);
  const ringRotation2 = useTransform(galaxyRotation, (r) => -r);
  const ringRotation3 = useTransform(galaxyRotation, (r) => r);
  const ringRotation4 = useTransform(galaxyRotation, (r) => -r);

  return (
    <section ref={sectionRef} className="py-20 sm:py-24 md:py-32 bg-obsidian relative overflow-hidden">
      {/* Static Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-accent/12"></div>
      
      {/* Dynamic Background with Flowing Lines - inspired by WorkCTA */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Flowing Lines - Design Flow Metaphor */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="designFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0" />
              <stop offset="30%" stopColor="#FFE0D7" stopOpacity="0.2" />
              <stop offset="70%" stopColor="#FFE0D7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
            </linearGradient>
            
            <linearGradient id="designFlowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
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
              stroke="url(#designFlowGradient)"
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
              stroke="url(#designFlowGradient2)"
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
                Ready to elevate your brand?
              </span>
            </h2>
            <p className="text-lg sm:text-lg text-bone/75 font-light max-w-2xl mx-auto">
              Transform your vision into extraordinary design that captivates and converts.
            </p>
          </div>

          {/* Impossible Circle Visual - Mobile */}
          <div className="relative h-80 mb-12">
            <motion.div className="absolute inset-0 flex items-center justify-center">
              {/* Enhanced SVG with Assembly Rings */}
              <svg className="w-full h-full max-w-sm" viewBox="0 0 320 320" suppressHydrationWarning>
                <defs>
                  <radialGradient id="galaxyCenterMobile" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0.9" />
                    <stop offset="70%" stopColor="#FFE0D7" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
                  </radialGradient>
                  
                  <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Assembly Progress Rings - like WorkCTA */}
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
                    pathLength: assemblyProgress,
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
                    pathLength: assemblyProgress,
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
                    pathLength: assemblyProgress,
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
                    pathLength: assemblyProgress,
                    rotate: ringRotation4
                  }}
                />



                {/* eslint-disable react-hooks/rules-of-hooks */}
                <motion.g style={{ rotate: galaxyRotation }}>
                  {/* Impossible Circle/Penrose Ring - Mobile */}
                  {Array.from({ length: 30 }).map((_, i) => {
                    // Pre-calculate static values once
                    const staticValues = useMemo(() => {
                      const t = (i / 30) * Math.PI * 2;
                      return {
                        t,
                        majorRadius: 80,
                        tubeRadius: 20,
                        twist: t * 0.5,
                        baseDepthOffset: Math.PI * 0.5
                      };
                    }, [i]);
                    
                    // Create cross-section dots around the tube
                    return Array.from({ length: 6 }).map((_, j) => {
                      // Pre-calculate tube-specific values
                      const tubeValues = useMemo(() => {
                        const tubeAngle = (j / 6) * Math.PI * 2;
                        const twistedAngle = tubeAngle + staticValues.twist;
                        
                        // Enhanced 3D depth calculation
                        const baseDepth = Math.sin(twistedAngle) * Math.cos(staticValues.t + staticValues.baseDepthOffset);
                        const tubeDepth = Math.cos(tubeAngle + staticValues.twist * 0.3) * 0.4;
                        const combinedDepth = baseDepth + tubeDepth;
                        
                        // Enhanced lighting with 3D considerations
                        const surfaceNormal = Math.cos(twistedAngle + staticValues.t * 0.2);
                        const lightDirection = 0.6; // Light coming from front-right
                        const lighting = Math.max(0.3, (combinedDepth + surfaceNormal + lightDirection) * 0.4);
                        
                        // Depth-based visibility and effects
                        const depthOpacity = Math.max(0.15, (combinedDepth + 1.5) * 0.45);
                        const depthScale = 0.4 + (combinedDepth + 1.2) * 0.5;
                        
                        return {
                          tubeAngle,
                          twistedAngle,
                          depth: combinedDepth,
                          lighting,
                          depthOpacity,
                          depthScale,
                          isVisible: combinedDepth > -0.6,
                          isHighlight: lighting > 0.75,
                          isForeground: combinedDepth > 0.3
                        };
                      }, [j]);
                      
                      if (!tubeValues.isVisible) return null;
                      
                      return (
                        <motion.circle
                          key={`impossible-${i}-${j}`}
                          cx="160"
                          cy="160"
                          r={0.8 + tubeValues.lighting * 2.2 * tubeValues.depthScale}
                          style={{
                            x: useTransform(galaxyRotation, (rotation) => {
                              const rotT = staticValues.t + rotation * 0.5;
                              const rotCenterX = staticValues.majorRadius * Math.cos(rotT);
                              const rotTwist = rotT * 0.5;
                              const rotTwistedAngle = tubeValues.tubeAngle + rotTwist;
                              const rotLocalX = staticValues.tubeRadius * Math.cos(rotTwistedAngle);
                              const rotLocalY = staticValues.tubeRadius * Math.sin(rotTwistedAngle);
                              const rotRotatedX = rotLocalX * Math.cos(rotT) - rotLocalY * Math.sin(rotT);
                              return rotCenterX + rotRotatedX;
                            }),
                            y: useTransform(galaxyRotation, (rotation) => {
                              const rotT = staticValues.t + rotation * 0.5;
                              const rotCenterY = staticValues.majorRadius * Math.sin(rotT);
                              const rotTwist = rotT * 0.5;
                              const rotTwistedAngle = tubeValues.tubeAngle + rotTwist;
                              const rotLocalX = staticValues.tubeRadius * Math.cos(rotTwistedAngle);
                              const rotLocalY = staticValues.tubeRadius * Math.sin(rotTwistedAngle);
                              const rotRotatedY = rotLocalX * Math.sin(rotT) + rotLocalY * Math.cos(rotT);
                              return rotCenterY + rotRotatedY;
                            }),
                            opacity: tubeValues.lighting * tubeValues.depthOpacity * 0.9,
                            scale: tubeValues.depthScale
                          }}
                          fill={tubeValues.isHighlight ? "#FFE0D7" : tubeValues.isForeground ? "#FFFFFF" : "#F0F0F0"}
                          filter={tubeValues.isHighlight ? "url(#softGlow)" : "none"}
                          animate={{
                            scale: [tubeValues.depthScale, (tubeValues.depthScale + 0.05) + tubeValues.lighting * 0.1, tubeValues.depthScale],
                          }}
                          transition={{
                            duration: 3 + (i + j) * 0.05,
                            repeat: Infinity,
                            delay: (i + j) * 0.02
                          }}
                          suppressHydrationWarning
                        />
                      );
                    });
                  })}
                  
                  {/* Central reference point with premium glow */}
                  <motion.circle
                    cx="160"
                    cy="160"
                    r="8"
                    fill="url(#galaxyCenterMobile)"
                    filter="url(#softGlow)"
                    style={{ 
                      opacity: 0.8,
                      scale: centralPulse
                    }}
                    suppressHydrationWarning
                  />
                </motion.g>
                {/* eslint-enable react-hooks/rules-of-hooks */}

                {/* Minimalist Geometric Accents - like WorkCTA */}
                {[0, Math.PI/2, Math.PI, 3*Math.PI/2].map((angle, i) => {
                  const x = 160 + 130 * Math.cos(angle);
                  const y = 160 + 130 * Math.sin(angle);
                  
                  return (
                    <motion.g key={`accent-${i}`}>
                      <motion.line
                        x1={x - 2}
                        y1={y}
                        x2={x + 2}
                        y2={y}
                        stroke="#FFE0D7"
                        strokeWidth="0.6"
                        opacity={0.15}
                        animate={{
                          opacity: [0.1, 0.25, 0.1],
                          scale: [0.8, 1.1, 0.8]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5
                        }}
                        suppressHydrationWarning
                      />
                      <motion.line
                        x1={x}
                        y1={y - 2}
                        x2={x}
                        y2={y + 2}
                        stroke="#FFE0D7"
                        strokeWidth="0.6"
                        opacity={0.15}
                        animate={{
                          opacity: [0.1, 0.25, 0.1],
                          scale: [0.8, 1.1, 0.8]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5 + 0.2
                        }}
                        suppressHydrationWarning
                      />
                    </motion.g>
                  );
                })}
              </svg>
          </motion.div>

            {/* Floating Project Elements */}
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
            <Link href="/contact" className="group relative w-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/40 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative inline-flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 bg-accent/90 backdrop-blur-sm border border-accent/20 text-obsidian rounded-full text-base font-medium transition-all duration-300 group-hover:bg-accent group-hover:text-obsidian group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:-translate-y-1 w-full">
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
            </Link>

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
                    Download Brand Guide
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
                  Ready to elevate your brand?
                </span>
              </h2>
              <p className="text-lg sm:text-lg text-bone/75 font-light max-w-2xl">
                Transform your vision into extraordinary design that captivates and converts.
              </p>
            </div>

            {/* Convergence Statement */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl"
            >
              <p className="text-lg sm:text-lg text-bone/70 font-light leading-relaxed">
                From concept to completion, we orchestrate every element of your brand transformation with precision and purpose.
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
              <Link href="/contact" className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/40 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-accent/90 backdrop-blur-sm border border-accent/20 text-obsidian rounded-full text-base sm:text-base lg:text-lg font-medium transition-all duration-300 group-hover:bg-accent group-hover:text-obsidian group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:-translate-y-1">
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
              </Link>

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
                      Download Brand Guide
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
                Where creativity meets precision
              </p>
            </motion.div>
          </div>

                      {/* Visual Side - Right (Desktop Only) */}
            <div className="col-span-5 relative h-96 lg:h-full">
            <motion.div className="absolute inset-0 flex items-center justify-center">
              {/* Enhanced SVG with Assembly Rings - Desktop */}
              <svg className="w-full h-full max-w-md" viewBox="0 0 400 400" suppressHydrationWarning>
                <defs>
                  <radialGradient id="galaxyCenterDesktop" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0.9" />
                    <stop offset="70%" stopColor="#FFE0D7" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
                  </radialGradient>
                  
                  <filter id="softGlowDesktop" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Assembly Progress Rings - like WorkCTA */}
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
                    pathLength: assemblyProgress,
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
                    pathLength: assemblyProgress,
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
                    pathLength: assemblyProgress,
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
                    pathLength: assemblyProgress,
                    rotate: ringRotation4
                  }}
                />



                {/* eslint-disable react-hooks/rules-of-hooks */}
                <motion.g style={{ rotate: galaxyRotation }}>
                  {/* Impossible Circle/Penrose Ring - Desktop */}
                  {Array.from({ length: 30 }).map((_, i) => {
                    // Pre-calculate static values once
                    const staticValues = useMemo(() => {
                      const t = (i / 30) * Math.PI * 2;
                      return {
                        t,
                        majorRadius: 80,
                        tubeRadius: 20,
                        twist: t * 0.5,
                        baseDepthOffset: Math.PI * 0.5
                      };
                    }, [i]);
                    
                    // Create cross-section dots around the tube
                    return Array.from({ length: 6 }).map((_, j) => {
                      // Pre-calculate tube-specific values
                      const tubeValues = useMemo(() => {
                        const tubeAngle = (j / 6) * Math.PI * 2;
                        const twistedAngle = tubeAngle + staticValues.twist;
                        
                        // Enhanced 3D depth calculation
                        const baseDepth = Math.sin(twistedAngle) * Math.cos(staticValues.t + staticValues.baseDepthOffset);
                        const tubeDepth = Math.cos(tubeAngle + staticValues.twist * 0.3) * 0.4;
                        const combinedDepth = baseDepth + tubeDepth;
                        
                        // Enhanced lighting with 3D considerations
                        const surfaceNormal = Math.cos(twistedAngle + staticValues.t * 0.2);
                        const lightDirection = 0.6; // Light coming from front-right
                        const lighting = Math.max(0.3, (combinedDepth + surfaceNormal + lightDirection) * 0.4);
                        
                        // Depth-based visibility and effects
                        const depthOpacity = Math.max(0.15, (combinedDepth + 1.5) * 0.45);
                        const depthScale = 0.4 + (combinedDepth + 1.2) * 0.5;
                        
                        return {
                          tubeAngle,
                          twistedAngle,
                          depth: combinedDepth,
                          lighting,
                          depthOpacity,
                          depthScale,
                          isVisible: combinedDepth > -0.6,
                          isHighlight: lighting > 0.75,
                          isForeground: combinedDepth > 0.3
                        };
                      }, [j]);
                      
                      if (!tubeValues.isVisible) return null;
                      
                      return (
                        <motion.circle
                          key={`impossible-${i}-${j}`}
                          cx="200"
                          cy="200"
                          r={0.8 + tubeValues.lighting * 2.2 * tubeValues.depthScale}
                          style={{
                            x: useTransform(galaxyRotation, (rotation) => {
                              const rotT = staticValues.t + rotation * 0.5;
                              const rotCenterX = staticValues.majorRadius * Math.cos(rotT);
                              const rotTwist = rotT * 0.5;
                              const rotTwistedAngle = tubeValues.tubeAngle + rotTwist;
                              const rotLocalX = staticValues.tubeRadius * Math.cos(rotTwistedAngle);
                              const rotLocalY = staticValues.tubeRadius * Math.sin(rotTwistedAngle);
                              const rotRotatedX = rotLocalX * Math.cos(rotT) - rotLocalY * Math.sin(rotT);
                              return rotCenterX + rotRotatedX;
                            }),
                            y: useTransform(galaxyRotation, (rotation) => {
                              const rotT = staticValues.t + rotation * 0.5;
                              const rotCenterY = staticValues.majorRadius * Math.sin(rotT);
                              const rotTwist = rotT * 0.5;
                              const rotTwistedAngle = tubeValues.tubeAngle + rotTwist;
                              const rotLocalX = staticValues.tubeRadius * Math.cos(rotTwistedAngle);
                              const rotLocalY = staticValues.tubeRadius * Math.sin(rotTwistedAngle);
                              const rotRotatedY = rotLocalX * Math.sin(rotT) + rotLocalY * Math.cos(rotT);
                              return rotCenterY + rotRotatedY;
                            }),
                            opacity: tubeValues.lighting * tubeValues.depthOpacity * 0.9,
                            scale: tubeValues.depthScale
                          }}
                          fill={tubeValues.isHighlight ? "#FFE0D7" : tubeValues.isForeground ? "#FFFFFF" : "#F0F0F0"}
                          filter={tubeValues.isHighlight ? "url(#softGlowDesktop)" : "none"}
                          animate={{
                            scale: [tubeValues.depthScale, (tubeValues.depthScale + 0.05) + tubeValues.lighting * 0.1, tubeValues.depthScale],
                          }}
                          transition={{
                            duration: 3 + (i + j) * 0.05,
                            repeat: Infinity,
                            delay: (i + j) * 0.02
                          }}
                          suppressHydrationWarning
                        />
                      );
                    });
                  })}
                  
                  {/* Central reference point with premium glow */}
                  <motion.circle
                    cx="200"
                    cy="200"
                    r="12"
                    fill="url(#galaxyCenterDesktop)"
                    filter="url(#softGlowDesktop)"
                    style={{ 
                      opacity: 0.8,
                      scale: centralPulse
                    }}
                    suppressHydrationWarning
                  />
                </motion.g>
                {/* eslint-enable react-hooks/rules-of-hooks */}

                {/* Sophisticated geometric accents - like WorkCTA */}
                {[0, Math.PI/3, 2*Math.PI/3, Math.PI, 4*Math.PI/3, 5*Math.PI/3].map((angle, i) => {
                  const x = 200 + 170 * Math.cos(angle);
                  const y = 200 + 170 * Math.sin(angle);
                  
                  return (
                    <motion.g key={`accent-${i}`}>
                      <motion.line
                        x1={x - 3}
                        y1={y}
                        x2={x + 3}
                        y2={y}
                        stroke="#FFE0D7"
                        strokeWidth="0.8"
                        opacity={0.2}
                        animate={{
                          opacity: [0.1, 0.3, 0.1],
                          scale: [0.8, 1.15, 0.8]
                        }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          delay: i * 0.4
                        }}
                        suppressHydrationWarning
                      />
                      <motion.line
                        x1={x}
                        y1={y - 3}
                        x2={x}
                        y2={y + 3}
                        stroke="#FFE0D7"
                        strokeWidth="0.8"
                        opacity={0.2}
                        animate={{
                          opacity: [0.1, 0.3, 0.1],
                          scale: [0.8, 1.15, 0.8]
                        }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          delay: i * 0.4 + 0.3
                        }}
                        suppressHydrationWarning
                      />
                      {/* Small diamond accent */}
                      <motion.polygon
                        points={`${x},${y-1.5} ${x+1.5},${y} ${x},${y+1.5} ${x-1.5},${y}`}
                        fill="none"
                        stroke="#FFE0D7"
                        strokeWidth="0.5"
                        opacity={0.15}
                        animate={{
                          opacity: [0.1, 0.25, 0.1],
                          rotate: [0, 180, 360]
                        }}
                        transition={{
                          duration: 8,
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

            {/* Floating Project Elements */}
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