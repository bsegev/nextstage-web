'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

import { LiquidGlass } from '@/components/ui/liquid-glass';

export default function WorkCTA() {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  // Assembly animations - elements come together as you scroll
  const centralScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1.2]);
  const orbitRadius = useTransform(scrollYProgress, [0, 0.6, 1], [120, 80, 40]);
  const connectionOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [0, 0.3, 0.8]);
  const assemblyProgress = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0, 0.5, 1]);

  // Move useTransform hooks outside of render callbacks
  const rotateTransform = useTransform(assemblyProgress, [0, 1], [0, 360]);
  
  // Create individual transforms for each element - mobile (6 elements)
  const mobileX0 = useTransform(orbitRadius, (r) => Math.cos(0) * r);
  const mobileY0 = useTransform(orbitRadius, (r) => Math.sin(0) * r);
  const mobileX1 = useTransform(orbitRadius, (r) => Math.cos(Math.PI / 3) * r);
  const mobileY1 = useTransform(orbitRadius, (r) => Math.sin(Math.PI / 3) * r);
  const mobileX2 = useTransform(orbitRadius, (r) => Math.cos(2 * Math.PI / 3) * r);
  const mobileY2 = useTransform(orbitRadius, (r) => Math.sin(2 * Math.PI / 3) * r);
  const mobileX3 = useTransform(orbitRadius, (r) => Math.cos(Math.PI) * r);
  const mobileY3 = useTransform(orbitRadius, (r) => Math.sin(Math.PI) * r);
  const mobileX4 = useTransform(orbitRadius, (r) => Math.cos(4 * Math.PI / 3) * r);
  const mobileY4 = useTransform(orbitRadius, (r) => Math.sin(4 * Math.PI / 3) * r);
  const mobileX5 = useTransform(orbitRadius, (r) => Math.cos(5 * Math.PI / 3) * r);
  const mobileY5 = useTransform(orbitRadius, (r) => Math.sin(5 * Math.PI / 3) * r);
  
  // Create individual transforms for desktop (8 elements)  
  const desktopX0 = useTransform(orbitRadius, (r) => Math.cos(0) * r);
  const desktopY0 = useTransform(orbitRadius, (r) => Math.sin(0) * r);
  const desktopX1 = useTransform(orbitRadius, (r) => Math.cos(Math.PI / 4) * r);
  const desktopY1 = useTransform(orbitRadius, (r) => Math.sin(Math.PI / 4) * r);
  const desktopX2 = useTransform(orbitRadius, (r) => Math.cos(Math.PI / 2) * r);
  const desktopY2 = useTransform(orbitRadius, (r) => Math.sin(Math.PI / 2) * r);
  const desktopX3 = useTransform(orbitRadius, (r) => Math.cos(3 * Math.PI / 4) * r);
  const desktopY3 = useTransform(orbitRadius, (r) => Math.sin(3 * Math.PI / 4) * r);
  const desktopX4 = useTransform(orbitRadius, (r) => Math.cos(Math.PI) * r);
  const desktopY4 = useTransform(orbitRadius, (r) => Math.sin(Math.PI) * r);
  const desktopX5 = useTransform(orbitRadius, (r) => Math.cos(5 * Math.PI / 4) * r);
  const desktopY5 = useTransform(orbitRadius, (r) => Math.sin(5 * Math.PI / 4) * r);
  const desktopX6 = useTransform(orbitRadius, (r) => Math.cos(3 * Math.PI / 2) * r);
  const desktopY6 = useTransform(orbitRadius, (r) => Math.sin(3 * Math.PI / 2) * r);
  const desktopX7 = useTransform(orbitRadius, (r) => Math.cos(7 * Math.PI / 4) * r);
  const desktopY7 = useTransform(orbitRadius, (r) => Math.sin(7 * Math.PI / 4) * r);
  
  // Compile into arrays for easy access
  const orbitTransforms = [
    { x: mobileX0, y: mobileY0 },
    { x: mobileX1, y: mobileY1 },
    { x: mobileX2, y: mobileY2 },
    { x: mobileX3, y: mobileY3 },
    { x: mobileX4, y: mobileY4 },
    { x: mobileX5, y: mobileY5 }
  ];
  
  const desktopOrbitTransforms = [
    { x: desktopX0, y: desktopY0 },
    { x: desktopX1, y: desktopY1 },
    { x: desktopX2, y: desktopY2 },
    { x: desktopX3, y: desktopY3 },
    { x: desktopX4, y: desktopY4 },
    { x: desktopX5, y: desktopY5 },
    { x: desktopX6, y: desktopY6 },
    { x: desktopX7, y: desktopY7 }
  ];

  return (
    <section ref={sectionRef} className="py-20 sm:py-24 md:py-32 bg-obsidian relative overflow-hidden">
      {/* Static Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-accent/12"></div>
      
      {/* Dynamic Background with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Flowing Lines - Project Flow Metaphor */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="projectFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0" />
              <stop offset="30%" stopColor="#FFE0D7" stopOpacity="0.3" />
              <stop offset="70%" stopColor="#FFE0D7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
            </linearGradient>
            
            <linearGradient id="projectFlowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFE0D7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Dynamic Flow Lines */}
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.path
              key={i}
              d={`M${-150 + i * 70} ${180 + i * 50} Q${450 + i * 90} ${280 + i * 30} ${1350 + i * 80} ${220 + i * 40}`}
              stroke="url(#projectFlowGradient)"
              strokeWidth={2 + (i % 3)}
              fill="none"
              opacity={0.7 - i * 0.05}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.7 - i * 0.05, 0]
              }}
              transition={{
                duration: 5 + i * 0.4,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Secondary Layer - More dispersed */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.path
              key={`secondary-${i}`}
              d={`M${-80 + i * 100} ${380 + i * 40} Q${520 + i * 120} ${180 + i * 50} ${1280 + i * 90} ${320 + i * 35}`}
              stroke="url(#projectFlowGradient2)"
              strokeWidth={1 + (i % 2)}
              fill="none"
              opacity={0.5 - i * 0.04}
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: [0, 1, 0]
              }}
              transition={{
                duration: 7 + i * 0.5,
                repeat: Infinity,
                delay: 3 + i * 0.4,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* Mobile Layout */}
        <div className="lg:hidden text-center">
          
          {/* Availability Badge */}
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent/15 to-accent/8 rounded-full border border-accent/30 backdrop-blur-md"
            >
              <motion.div className="relative">
                <div className="w-3 h-3 bg-accent rounded-full" />
                <motion.div 
                  className="absolute inset-0 w-3 h-3 bg-accent rounded-full"
                  animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <span className="text-bone text-sm font-medium tracking-wide">Currently accepting new clients</span>
            </motion.div>
          </div>

          {/* Header */}
          <div className="mb-12">
            <h2 className="font-display text-4xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6 text-bone">
              Ready to{' '}
              <span className="bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent">
                start your project
              </span>
              ?
            </h2>
            <p className="text-lg text-bone/75 font-light max-w-2xl mx-auto">
              Complete digital solutions delivered in 20 weeks. Let&apos;s talk about what you need.
            </p>
          </div>

                     {/* Assembly Visual - Mobile */}
           <div className="relative h-80 mb-12">
             <motion.div className="absolute inset-0 flex items-center justify-center">
               {/* Assembly Geometry */}
               <svg className="w-full h-full max-w-sm" viewBox="0 0 320 320" suppressHydrationWarning>
                <defs>
                  <radialGradient id="assemblyCenterMobile" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0.9" />
                    <stop offset="70%" stopColor="#FFE0D7" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
                  </radialGradient>
                  
                  <linearGradient id="assemblyEdgeMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                                 {/* Central Hub */}
                 <motion.circle
                   cx="160"
                   cy="160"
                   r="16"
                   fill="url(#assemblyCenterMobile)"
                   style={{ scale: centralScale }}
                   suppressHydrationWarning
                 />

                                 {/* Assembling Elements */}
                 {Array.from({ length: 6 }).map((_, i) => {
                   return (
                     <motion.g key={i} suppressHydrationWarning>
                       <motion.circle
                         cx="160"
                         cy="160"
                         r={2 + (i % 2)}
                         fill="#FFE0D7"
                         opacity={0.8 - i * 0.08}
                         style={{
                           x: orbitTransforms[i].x,
                           y: orbitTransforms[i].y
                         }}
                         animate={{
                           scale: [1, 1.3, 1],
                           opacity: [0.8 - i * 0.08, 1, 0.8 - i * 0.08]
                         }}
                         transition={{
                           duration: 2.5 + i * 0.3,
                           repeat: Infinity,
                           delay: i * 0.2
                         }}
                         suppressHydrationWarning
                       />
                       <motion.line
                         x1="160"
                         y1="160"
                         x2="160"
                         y2="160"
                         stroke="url(#assemblyEdgeMobile)"
                         strokeWidth="1"
                         style={{
                           opacity: connectionOpacity
                         }}
                         suppressHydrationWarning
                       />
                     </motion.g>
                   );
                 })}

                {/* Assembly Progress Rings */}
                {[40, 70, 100].map((radius, i) => (
                  <motion.circle
                    key={radius}
                    cx="160"
                    cy="160"
                    r={radius}
                    fill="none"
                    stroke="#FFE0D7"
                    strokeWidth="1"
                    opacity={0.3 - i * 0.05}
                    strokeDasharray="3 6"
                    style={{
                      pathLength: assemblyProgress,
                      rotate: rotateTransform
                    }}
                  />
                ))}
              </svg>
            </motion.div>

            {/* Floating Project Elements */}
            <motion.div
              className="absolute top-8 right-8 w-3 h-3 bg-accent/70 rounded-full"
              animate={{
                y: [0, -15, 0],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 3.5, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-16 left-8 w-2 h-2 bg-accent/50 rounded-full"
              animate={{
                y: [0, -10, 0],
                x: [0, 8, 0],
                opacity: [0.5, 0.9, 0.5]
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
                          <a href="https://cal.com/bensegev/30min" target="_blank" rel="noopener noreferrer" className="group relative w-full sm:w-auto min-h-[56px] touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 rounded-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/40 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-obsidian rounded-full text-base font-medium transition-all duration-300 group-hover:bg-accent/90 group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:-translate-y-1 group-active:scale-95 w-full sm:w-auto">
                <span className="relative">
                  Book Strategy Call
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
                          <button 
              onClick={() => {
                const processSection = document.getElementById('process-journey');
                if (processSection) {
                  processSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group relative w-full min-h-[56px] touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-bone/50 focus-visible:ring-offset-2"
            >
              <LiquidGlass 
                intensity="subtle" 
                animated
                borderRadius="rounded-full"
                className="group-hover:scale-[1.02] transition-transform duration-300 border-bone/30 group-hover:border-bone/50"
              >
                <div className="inline-flex items-center justify-center gap-3 px-8 py-4 text-bone/80 group-hover:text-bone text-base font-medium transition-all duration-300 group-hover:-translate-y-1 w-full sm:w-auto">
                  <span className="relative">
                    See Our Process
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
            </button>
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-16 items-center min-h-[60vh]">
          
          {/* Content Side - Left */}
          <div className="col-span-7 space-y-12 text-left">
            
            {/* Availability Badge - Desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-accent/15 to-accent/8 rounded-full border border-accent/30 backdrop-blur-md"
            >
                <motion.div className="relative">
                  <div className="w-4 h-4 bg-accent rounded-full" />
                  <motion.div 
                    className="absolute inset-0 w-4 h-4 bg-accent rounded-full"
                    animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              <span className="text-bone font-medium tracking-wide">Currently accepting new clients</span>
            </motion.div>

            {/* Header */}
            <div className="text-left">
              <h2 className="font-display text-4xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6 text-bone">
                Ready to transform your vision into{' '}
                <span className="bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent">
                  impact
                </span>
                ?
              </h2>
              <p className="text-lg text-bone/75 font-light max-w-2xl">
                Every great transformation starts with a conversation. Let&apos;s bring your vision to reality in weeks, not months.
              </p>
            </div>



            {/* CTA Buttons - Desktop */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-row items-start justify-start space-x-6"
            >
              {/* Primary CTA */}
              <a href="https://cal.com/bensegev/30min" target="_blank" rel="noopener noreferrer" className="group relative min-h-[56px] touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 rounded-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/40 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-accent text-obsidian rounded-full text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 group-hover:bg-accent/90 group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:-translate-y-1 group-active:scale-95">
                  <span className="relative">
                    Book Strategy Call
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
              <button 
                onClick={() => {
                  const processSection = document.getElementById('process-journey');
                  if (processSection) {
                    processSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group relative min-h-[56px] touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-bone/50 focus-visible:ring-offset-2"
              >
                <LiquidGlass 
                  intensity="subtle" 
                  animated
                  borderRadius="rounded-full"
                  className="group-hover:scale-[1.02] transition-transform duration-300 border-bone/30 group-hover:border-bone/50"
                >
                  <div className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-bone/80 group-hover:text-bone text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 group-hover:-translate-y-1">
                    <span className="relative">
                      See Our Process
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
              </button>
            </motion.div>

            {/* Closing Statement */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="pt-8"
            >
              <p className="text-sm text-bone/50 font-light italic">
                Where vision meets execution
              </p>
            </motion.div>
          </div>

          {/* Visual Side - Right (Desktop Only) */}
          <div className="col-span-5 relative h-96 lg:h-full">
                         <motion.div className="absolute inset-0 flex items-center justify-center">
               {/* Assembly Geometry - Desktop */}
               <svg className="w-full h-full max-w-md" viewBox="0 0 400 400" suppressHydrationWarning>
                <defs>
                  <radialGradient id="assemblyCenterDesktop" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0.9" />
                    <stop offset="70%" stopColor="#FFE0D7" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
                  </radialGradient>
                  
                  <linearGradient id="assemblyEdgeDesktop" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Central Hub */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="20"
                  fill="url(#assemblyCenterDesktop)"
                  style={{ scale: centralScale }}
                />

                                 {/* Assembling Elements */}
                 {Array.from({ length: 8 }).map((_, i) => {
                   return (
                     <motion.g key={i} suppressHydrationWarning>
                       <motion.circle
                         cx="200"
                         cy="200"
                         r={3 + (i % 3)}
                         fill="#FFE0D7"
                         opacity={0.8 - i * 0.06}
                         style={{
                           x: desktopOrbitTransforms[i].x,
                           y: desktopOrbitTransforms[i].y
                         }}
                         animate={{
                           scale: [1, 1.4, 1],
                           opacity: [0.8 - i * 0.06, 1, 0.8 - i * 0.06]
                         }}
                         transition={{
                           duration: 3 + i * 0.3,
                           repeat: Infinity,
                           delay: i * 0.2
                         }}
                         suppressHydrationWarning
                       />
                       <motion.line
                         x1="200"
                         y1="200"
                         x2="200"
                         y2="200"
                         stroke="url(#assemblyEdgeDesktop)"
                         strokeWidth="1"
                         style={{
                           opacity: connectionOpacity
                         }}
                         suppressHydrationWarning
                       />
                     </motion.g>
                   );
                 })}

                {/* Assembly Progress Rings */}
                {[60, 100, 140, 180].map((radius, i) => (
                  <motion.circle
                    key={radius}
                    cx="200"
                    cy="200"
                    r={radius}
                    fill="none"
                    stroke="#FFE0D7"
                    strokeWidth="1"
                    opacity={0.3 - i * 0.04}
                    strokeDasharray="4 8"
                    style={{
                      pathLength: assemblyProgress,
                      rotate: rotateTransform
                    }}
                  />
                ))}
              </svg>
            </motion.div>

            {/* Floating Project Elements */}
            <motion.div
              className="absolute top-10 right-10 w-4 h-4 bg-accent/70 rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-20 left-10 w-3 h-3 bg-accent/50 rounded-full"
              animate={{
                y: [0, -15, 0],
                x: [0, 10, 0],
                opacity: [0.5, 0.9, 0.5]
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}