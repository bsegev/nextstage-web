'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { LiquidGlass } from '@/components/ui/liquid-glass';

export default function AboutCTA() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const geometryRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const geometryScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 1]);



  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-obsidian relative overflow-hidden">
      {/* Static Gradient Overlay - Same layer as obsidian background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-accent/12"></div>
      
      {/* Dynamic Background with Parallax */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: backgroundY }}
        >
        {/* Flowing Lines - Transformation Metaphor */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0" />
              <stop offset="30%" stopColor="#FFE0D7" stopOpacity="0.3" />
              <stop offset="70%" stopColor="#FFE0D7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
            </linearGradient>
            
            <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFE0D7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Dynamic Flow Lines */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.path
              key={i}
              d={`M${-200 + i * 60} ${200 + i * 40} Q${400 + i * 80} ${300 + i * 20} ${1400 + i * 60} ${250 + i * 30}`}
              stroke="url(#flowGradient)"
              strokeWidth={2 + (i % 3)}
              fill="none"
              opacity={0.6 - i * 0.04}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.6 - i * 0.04, 0]
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Secondary Layer */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.path
              key={`secondary-${i}`}
              d={`M${-100 + i * 80} ${400 + i * 30} Q${500 + i * 100} ${200 + i * 40} ${1300 + i * 70} ${350 + i * 25}`}
              stroke="url(#flowGradient2)"
              strokeWidth={1 + (i % 2)}
              fill="none"
              opacity={0.4 - i * 0.03}
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: [0, 1, 0]
              }}
              transition={{
                duration: 6 + i * 0.4,
                repeat: Infinity,
                delay: 2 + i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* Mobile Layout - Streamlined and Touch-Optimized */}
        <div className="lg:hidden space-y-8">
          
          {/* Availability Badge - Hidden */}
          <div className="hidden">
            <div className="flex justify-center">
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
          <div className="text-center">
            <h2 className="font-display text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-6">
              <span className="bg-gradient-to-r from-bone via-accent to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                Working on something interesting?
              </span>
            </h2>
            <p className="text-lg sm:text-base lg:text-lg text-bone/75 font-light max-w-2xl mx-auto leading-relaxed">
              I work with a <span className="text-bone/90 font-medium">select group of clients</span> to ensure each transformation gets the focus it deserves.
            </p>
          </div>

          {/* Mobile Convergence Geometry */}
          <div className="relative h-80">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{ rotate: geometryRotate, scale: geometryScale }}
            >
              {/* Convergence Geometry - Mobile Optimized */}
              <svg className="w-full h-full max-w-sm" viewBox="0 0 400 400">
                <defs>
                  <radialGradient id="mobilecentergradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0.8" />
                    <stop offset="70%" stopColor="#FFE0D7" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
                  </radialGradient>
                  
                  <linearGradient id="mobileedgegradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0.1" />
                  </linearGradient>
                </defs>

                {/* Central Core */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="20"
                  fill="url(#mobilecentergradient)"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: [0, 1.5, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5 }}
                />

                {/* Orbiting Elements - Reduced count for mobile */}
                {Array.from({ length: 6 }).map((_, i) => {
                  const angle = (i * 60) * (Math.PI / 180);
                  const radius = 100 + (i % 2) * 25;
                  const x = 200 + Math.cos(angle) * radius;
                  const y = 200 + Math.sin(angle) * radius;
                  
                  return (
                    <motion.g key={i} suppressHydrationWarning>
                      <motion.circle
                        cx={x}
                        cy={y}
                        r={4 + (i % 2)}
                        fill="#FFE0D7"
                        opacity={0.8 - i * 0.08}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.8 - i * 0.08, 1 - i * 0.08, 0.8 - i * 0.08]
                        }}
                        transition={{
                          duration: 3 + i * 0.3,
                          repeat: Infinity,
                          delay: i * 0.4
                        }}
                        suppressHydrationWarning
                      />
                      <motion.line
                        x1="200"
                        y1="200"
                        x2={x}
                        y2={y}
                        stroke="url(#mobileedgegradient)"
                        strokeWidth="1"
                        opacity={0.4}
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.8 + i * 0.15 }}
                        suppressHydrationWarning
                      />
                    </motion.g>
                  );
                })}

                {/* Acceleration Rings - Simplified for mobile */}
                {[70, 110, 150].map((radius, i) => (
                  <motion.circle
                    key={radius}
                    cx="200"
                    cy="200"
                    r={radius}
                    fill="none"
                    stroke="#FFE0D7"
                    strokeWidth="1"
                    opacity={0.25 - i * 0.05}
                    strokeDasharray="4 8"
                    initial={{ scale: 0, rotate: 0 }}
                    whileInView={{ scale: 1, rotate: 360 }}
                    viewport={{ once: true }}
                    transition={{
                      scale: { duration: 1.5, delay: 0.6 + i * 0.2 },
                      rotate: { duration: 20 + i * 8, repeat: Infinity, ease: "linear" }
                    }}
                  />
                ))}
              </svg>
            </motion.div>

            {/* Floating Elements - Mobile sized */}
            <motion.div
              className="absolute top-8 right-8 w-3 h-3 bg-accent/60 rounded-full"
              animate={{
                y: [0, -15, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-16 left-8 w-2 h-2 bg-accent/40 rounded-full"
              animate={{
                y: [0, -10, 0],
                x: [0, 8, 0],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
          </div>

          {/* Convergence Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-lg sm:text-base lg:text-lg text-bone/70 font-light leading-relaxed max-w-lg mx-auto">
              When strategy, design, and technology flow through one embedded team, your vision stays intact and transformation happens at <strong className="text-accent font-semibold">startup velocity</strong>.
            </p>
          </motion.div>

          {/* Enhanced CTA Buttons - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            {/* Primary CTA */}
            <a href="https://cal.com/bensegev/30min" target="_blank" rel="noopener noreferrer" className="group relative w-full sm:w-auto min-h-[56px] touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 rounded-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/40 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-obsidian rounded-full text-base font-medium transition-all duration-300 group-hover:bg-accent/90 group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:-translate-y-1 group-active:scale-95 w-full sm:w-auto">
                <span className="relative">
                  Get started
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full block" />
                </span>
                
                <div className="relative overflow-hidden w-5 h-5">
                  <motion.svg 
                    className="absolute w-5 h-5"
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
                          <Link href="/case-studies" className="group relative w-full sm:w-auto min-h-[56px] touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-bone/50 focus-visible:ring-offset-2">
              <LiquidGlass 
                intensity="subtle" 
                animated
                borderRadius="rounded-full"
                className="group-hover:scale-[1.02] transition-transform duration-300 border-bone/30 group-hover:border-bone/50"
              >
                <div className="inline-flex items-center justify-center gap-3 px-8 py-4 text-bone/80 group-hover:text-bone text-base font-medium transition-all duration-300 group-hover:-translate-y-1 w-full sm:w-auto">
                  <span className="relative">
                    See Case Studies
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full block" />
                  </span>
                  
                  <div className="relative overflow-hidden w-5 h-5">
                    <svg 
                      className="w-5 h-5 transition-all duration-300 group-hover:rotate-45" 
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

          {/* Final Line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-center pt-4"
          >
            <p className="text-sm text-bone/50 font-light italic">
              Join the leaders who refuse to wait for tomorrow
            </p>
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

            {/* Header - Desktop (inside left column) */}
            <div className="text-left">
              <h2 className="font-display text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-bone via-accent to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                  Working on something interesting?
                </span>
              </h2>
              <p className="text-lg sm:text-base lg:text-lg text-bone/75 font-light max-w-2xl">
                I work with a <span className="text-bone/90 font-medium">select group of clients</span> to ensure each transformation gets the focus it deserves.
              </p>
            </div>

            {/* Convergence Statement - Desktop */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl"
            >
              <p className="text-lg sm:text-base lg:text-lg text-bone/70 font-light leading-relaxed">
                When strategy, design, and technology flow through one embedded team, your vision stays intact and transformation happens at startup velocity.
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
                {/* Button background with gradient border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/40 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-accent text-obsidian rounded-full text-base font-medium transition-all duration-300 group-hover:bg-accent/90 group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:-translate-y-1 group-active:scale-95">
                  <span className="relative">
                    Get started
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
                  <div className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-bone/80 group-hover:text-bone text-base font-medium transition-all duration-300 group-hover:-translate-y-1">
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

            {/* Alternative Contact Methods */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="pt-8 border-t border-bone/10"
            >
              <p className="text-xs text-bone/40 font-light mb-4 text-center">
                Prefer other ways to connect?
              </p>
              <div className="flex items-center justify-center gap-6">
                <Link href="/contact" className="group flex items-center gap-2 text-bone/60 hover:text-accent transition-colors duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs font-light">Email & LinkedIn</span>
                </Link>
                <span className="text-bone/20">•</span>
                <a href="https://cal.com/bensegev/30min" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-bone/60 hover:text-accent transition-colors duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs font-light">Quick booking</span>
                </a>
              </div>
            </motion.div>

            {/* Closing Statement - Desktop */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="pt-6"
            >
              <p className="text-sm text-bone/50 font-light italic text-center">
                Join the leaders who refuse to wait for tomorrow
              </p>
            </motion.div>
          </div>

          {/* Visual Side - Right (Desktop Only) */}
          <div className="col-span-5 relative h-96 lg:h-full">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{ rotate: geometryRotate, scale: geometryScale }}
            >
              {/* Convergence Geometry */}
              <svg className="w-full h-full max-w-md" viewBox="0 0 400 400">
                <defs>
                  <radialGradient id="centerGradientDesktop" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0.8" />
                    <stop offset="70%" stopColor="#FFE0D7" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
                  </radialGradient>
                  
                  <linearGradient id="edgeGradientDesktop" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0.1" />
                  </linearGradient>
                </defs>

                {/* Central Core */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="20"
                  fill="url(#centerGradientDesktop)"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: [0, 1.5, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5 }}
                />

                {/* Orbiting Elements */}
                {Array.from({ length: 8 }).map((_, i) => {
                  const angle = (i * 45) * (Math.PI / 180);
                  const radius = 120 + (i % 3) * 20;
                  const x = 200 + Math.cos(angle) * radius;
                  const y = 200 + Math.sin(angle) * radius;
                  
                  return (
                    <motion.g key={i} suppressHydrationWarning>
                      <motion.circle
                        cx={x}
                        cy={y}
                        r={3 + (i % 3)}
                        fill="#FFE0D7"
                        opacity={0.7 - i * 0.05}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.7 - i * 0.05, 0.9 - i * 0.05, 0.7 - i * 0.05]
                        }}
                        transition={{
                          duration: 3 + i * 0.2,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                        suppressHydrationWarning
                      />
                      <motion.line
                        x1="200"
                        y1="200"
                        x2={x}
                        y2={y}
                        stroke="url(#edgeGradientDesktop)"
                        strokeWidth="1"
                        opacity={0.3}
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.8 + i * 0.1 }}
                        suppressHydrationWarning
                      />
                    </motion.g>
                  );
                })}

                {/* Acceleration Rings */}
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
                    strokeDasharray="4 8"
                    initial={{ scale: 0, rotate: 0 }}
                    whileInView={{ scale: 1, rotate: 360 }}
                    viewport={{ once: true }}
                    transition={{
                      scale: { duration: 1.5, delay: 0.6 + i * 0.2 },
                      rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" }
                    }}
                  />
                ))}
              </svg>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-10 right-10 w-4 h-4 bg-accent/60 rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-20 left-10 w-3 h-3 bg-accent/40 rounded-full"
              animate={{
                y: [0, -15, 0],
                x: [0, 10, 0],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}