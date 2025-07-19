'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { LiquidGlass } from '@/components/ui/liquid-glass';

export default function StrategyCTA() {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  // DNA Helix animation controls
  const helixRotation = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const centralPulse = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.3, 1]);
  const connectionOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [0, 0.6, 1]);
  const spiralProgress = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0, 0.8, 1]);
  
  // DNA strand rotation for the 3D helix effect  
  const strandRotation = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 4]);

  return (
    <section ref={sectionRef} className="py-20 sm:py-24 md:py-32 bg-obsidian relative overflow-hidden">
      {/* Static Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/8"></div>
      
      {/* Dynamic Background with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Strategic Flow Lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="strategyFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0" />
              <stop offset="30%" stopColor="#FFE0D7" stopOpacity="0.2" />
              <stop offset="70%" stopColor="#FFE0D7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
            </linearGradient>
            
            <linearGradient id="strategyFlowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFE0D7" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Flowing Strategy Lines */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.path
              key={i}
              d={`M${-150 + i * 80} ${150 + i * 60} Q${450 + i * 100} ${250 + i * 40} ${1350 + i * 90} ${200 + i * 50}`}
              stroke="url(#strategyFlowGradient)"
              strokeWidth={1.5 + (i % 2)}
              fill="none"
              opacity={0.5 - i * 0.04}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.5 - i * 0.04, 0]
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Secondary Strategic Flow */}
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.path
              key={`secondary-${i}`}
              d={`M${-80 + i * 120} ${350 + i * 45} Q${520 + i * 140} ${150 + i * 60} ${1280 + i * 100} ${300 + i * 40}`}
              stroke="url(#strategyFlowGradient2)"
              strokeWidth={1 + (i % 2)}
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
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-bone via-accent to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                Ready to build your strategy?
              </span>
            </h2>
            <p className="text-lg sm:text-lg text-bone/75 font-light max-w-2xl mx-auto">
              Clear direction isn&apos;t built overnight—but your next steps can begin today.
            </p>
          </motion.div>

          {/* DNA Helix Visual - Mobile */}
          <div className="relative h-80 mb-12">
            <motion.div className="absolute inset-0 flex items-center justify-center">
              {/* DNA Helix Geometry */}
              <svg className="w-full h-full max-w-sm" viewBox="0 0 320 320" suppressHydrationWarning>
                <defs>
                  <radialGradient id="helixCenterMobile" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0.8" />
                    <stop offset="70%" stopColor="#FFE0D7" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
                  </radialGradient>
                  
                  <linearGradient id="helixStrandMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                {/* Central Strategy Core */}
                <motion.circle
                  cx="160"
                  cy="160"
                  r="12"
                  fill="url(#helixCenterMobile)"
                  style={{ scale: centralPulse }}
                  suppressHydrationWarning
                />

                {/* DNA Double Helix with rotating strands */}
                {/* eslint-disable react-hooks/rules-of-hooks */}
                <motion.g>
                  {/* First Helix - Cream colored */}
                  {Array.from({ length: 20 }).map((_, i) => {
                    const baseAngle = (i / 20) * Math.PI * 4;
                    const y = 60 + (i * 10);
                    
                    return (
                      <motion.circle
                        key={`mobile-helix1-${i}`}
                        cx={useTransform(strandRotation, (rotation) => {
                          const angle = baseAngle + rotation;
                          return 160 + 40 * Math.cos(angle);
                        })}
                        cy={y}
                        r={2 + (i % 2)}
                        style={{
                          opacity: useTransform(strandRotation, (rotation) => {
                            const angle = baseAngle + rotation;
                            const z = Math.sin(angle);
                            return z > 0 ? 0.3 : 0.8;
                          })
                        }}
                        fill="#FFE0D7"
                        animate={{
                          scale: [1, 1.3, 1],
                        }}
                        transition={{
                          duration: 2 + i * 0.1,
                          repeat: Infinity,
                          delay: i * 0.1
                        }}
                        suppressHydrationWarning
                      />
                    );
                  })}
                  
                  {/* Second Helix - White colored, offset by π */}
                  {Array.from({ length: 20 }).map((_, i) => {
                    const baseAngle = (i / 20) * Math.PI * 4 + Math.PI;
                    const y = 60 + (i * 10);
                    
                    return (
                      <motion.circle
                        key={`mobile-helix2-${i}`}
                        cx={useTransform(strandRotation, (rotation) => {
                          const angle = baseAngle + rotation;
                          return 160 + 40 * Math.cos(angle);
                        })}
                        cy={y}
                        r={2 + (i % 2)}
                        style={{
                          opacity: useTransform(strandRotation, (rotation) => {
                            const angle = baseAngle + rotation;
                            const z = Math.sin(angle);
                            return z > 0 ? 0.3 : 0.8;
                          })
                        }}
                        fill="#FFFFFF"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2.2 + i * 0.1,
                          repeat: Infinity,
                          delay: i * 0.1 + 0.3
                        }}
                        suppressHydrationWarning
                      />
                    );
                  })}
                </motion.g>
                {/* eslint-enable react-hooks/rules-of-hooks */}

                {/* Base Pair Connections */}
                {Array.from({ length: 10 }).map((_, i) => {
                  const angle1 = (i * 2 / 20) * Math.PI * 4;
                  const angle2 = angle1 + Math.PI;
                  const x1 = 160 + 40 * Math.cos(angle1);
                  const x2 = 160 + 40 * Math.cos(angle2);
                  const y = 80 + (i * 20);
                  
                  return (
                    <motion.line
                      key={`connection-${i}`}
                      x1={x1}
                      y1={y}
                      x2={x2}
                      y2={y}
                      stroke="url(#helixStrandMobile)"
                      strokeWidth="1"
                      style={{ opacity: connectionOpacity }}
                      suppressHydrationWarning
                    />
                  );
                })}
              </svg>
            </motion.div>

            {/* Floating Strategy Elements */}
            <motion.div
              className="absolute top-8 right-8 w-3 h-3 bg-accent/60 rounded-full"
              animate={{
                y: [0, -12, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ duration: 3.5, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-16 left-8 w-2 h-2 bg-accent/40 rounded-full"
              animate={{
                y: [0, -8, 0],
                x: [0, 6, 0],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
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
                    Download Strategy Guide
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
            <motion.div 
              className="text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-bone via-accent to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                  Ready to architect your future?
                </span>
              </h2>
              <p className="text-lg sm:text-lg text-bone/75 font-light max-w-2xl">
                Strategic clarity isn&apos;t built overnight—but transformation can begin today.
              </p>
            </motion.div>

            {/* Strategy Statement */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl"
            >
              <p className="text-lg sm:text-lg text-bone/70 font-light leading-relaxed">
                From vision to execution, we build the strategic foundation that turns ambitious goals into inevitable outcomes.
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
                <div className="relative inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-accent text-obsidian rounded-full text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 group-hover:bg-accent/90 group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:-translate-y-1">
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
                  <div className="inline-flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-bone/80 group-hover:text-bone text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 group-hover:-translate-y-1">
                    <span className="relative">
                      Download Strategy Guide
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
                Where strategic thinking meets unstoppable execution
              </p>
            </motion.div>
          </div>

          {/* Visual Side - Right (Desktop Only) */}
          <div className="col-span-5 relative h-96 lg:h-full">
            <motion.div className="absolute inset-0 flex items-center justify-center">
              {/* DNA Helix Geometry - Desktop */}
              <svg className="w-full h-full max-w-md" viewBox="0 0 400 400" suppressHydrationWarning>
                <defs>
                  <radialGradient id="helixCenterDesktop" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0.8" />
                    <stop offset="70%" stopColor="#FFE0D7" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
                  </radialGradient>
                  
                  <linearGradient id="helixStrandDesktop" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                {/* Central Strategy Core */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="16"
                  fill="url(#helixCenterDesktop)"
                  style={{ scale: centralPulse }}
                />

                {/* DNA Double Helix with rotating strands */}
                {/* eslint-disable react-hooks/rules-of-hooks */}
                <motion.g>
                  {/* First Helix - Cream colored */}
                  {Array.from({ length: 24 }).map((_, i) => {
                    const baseAngle = (i / 24) * Math.PI * 4;
                    const y = 60 + (i * 12);
                    
                    return (
                      <motion.circle
                        key={`desktop-helix1-${i}`}
                        cx={useTransform(strandRotation, (rotation) => {
                          const angle = baseAngle + rotation;
                          return 200 + 60 * Math.cos(angle);
                        })}
                        cy={y}
                        r={3 + (i % 2)}
                        fill="#FFE0D7"
                        style={{
                          opacity: useTransform(strandRotation, (rotation) => {
                            const angle = baseAngle + rotation;
                            const z = Math.sin(angle);
                            return z > 0 ? 0.3 : 0.8;
                          })
                        }}
                        animate={{
                          scale: [1, 1.4, 1],
                        }}
                        transition={{
                          duration: 2.5 + i * 0.1,
                          repeat: Infinity,
                          delay: i * 0.08
                        }}
                        suppressHydrationWarning
                      />
                    );
                  })}
                  
                  {/* Second Helix - White colored, offset by π */}
                  {Array.from({ length: 24 }).map((_, i) => {
                    const baseAngle = (i / 24) * Math.PI * 4 + Math.PI;
                    const y = 60 + (i * 12);
                    
                    return (
                      <motion.circle
                        key={`desktop-helix2-${i}`}
                        cx={useTransform(strandRotation, (rotation) => {
                          const angle = baseAngle + rotation;
                          return 200 + 60 * Math.cos(angle);
                        })}
                        cy={y}
                        r={3 + (i % 2)}
                        fill="#FFFFFF"
                        style={{
                          opacity: useTransform(strandRotation, (rotation) => {
                            const angle = baseAngle + rotation;
                            const z = Math.sin(angle);
                            return z > 0 ? 0.3 : 0.8;
                          })
                        }}
                        animate={{
                          scale: [1, 1.3, 1],
                        }}
                        transition={{
                          duration: 2.7 + i * 0.1,
                          repeat: Infinity,
                          delay: i * 0.08 + 0.3
                        }}
                        suppressHydrationWarning
                      />
                    );
                  })}
                  
                  {/* Base Pair Connections */}
                  {Array.from({ length: 12 }).map((_, i) => {
                    const angle1 = (i * 2 / 24) * Math.PI * 4;
                    const angle2 = angle1 + Math.PI;
                    const x1 = 200 + 60 * Math.cos(angle1);
                    const x2 = 200 + 60 * Math.cos(angle2);
                    const y = 80 + (i * 24);
                    
                    return (
                      <motion.line
                        key={`connection-${i}`}
                        x1={x1}
                        y1={y}
                        x2={x2}
                        y2={y}
                        stroke="url(#helixStrandDesktop)"
                        strokeWidth="1"
                        style={{ opacity: connectionOpacity }}
                        suppressHydrationWarning
                      />
                    );
                  })}
                </motion.g>
                {/* eslint-enable react-hooks/rules-of-hooks */}

                {/* Strategy Connection Rings */}
                {[60, 100, 140, 180].map((radius, i) => (
                  <motion.circle
                    key={radius}
                    cx="200"
                    cy="200"
                    r={radius}
                    fill="none"
                    stroke="#FFE0D7"
                    strokeWidth="1"
                    opacity={0.2 - i * 0.03}
                    strokeDasharray="3 6"
                    style={{
                      pathLength: spiralProgress,
                      rotate: helixRotation
                    }}
                  />
                ))}
              </svg>
            </motion.div>

            {/* Floating Strategy Elements */}
            <motion.div
              className="absolute top-10 right-10 w-4 h-4 bg-accent/60 rounded-full"
              animate={{
                y: [0, -15, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-20 left-10 w-3 h-3 bg-accent/40 rounded-full"
              animate={{
                y: [0, -12, 0],
                x: [0, 8, 0],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
} 