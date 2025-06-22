'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import { LiquidGlass } from '@/components/ui/liquid-glass';

export default function ServicesCTA() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const geometryScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 1]);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-obsidian relative overflow-hidden">
      {/* Static Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-accent/12"></div>
      
      {/* Optimized Background with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
        onViewportEnter={() => setIsVisible(true)}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Reduced Flowing Lines - from 12 to 6 for better performance */}
        {isVisible && (
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0" />
                <stop offset="30%" stopColor="#FFE0D7" stopOpacity="0.3" />
                <stop offset="70%" stopColor="#FFE0D7" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            {/* Optimized Flow Lines - reduced from 12 to 6 */}
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.path
                key={i}
                d={`M${-200 + i * 120} ${200 + i * 60} Q${400 + i * 100} ${300 + i * 30} ${1400 + i * 80} ${250 + i * 40}`}
                stroke="url(#flowGradient)"
                strokeWidth={2 + (i % 2)}
                fill="none"
                opacity={0.5 - i * 0.06}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.5 - i * 0.06, 0]
                }}
                transition={{
                  duration: 6 + i * 0.5, // Slower animations for better performance
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut"
                }}
              />
            ))}
          </svg>
        )}
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {/* Header */}
          <div className="text-center">
            <h2 className="font-display text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-6">
              <span className="bg-gradient-to-r from-bone via-accent to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                Ready to accelerate your growth?
              </span>
            </h2>
            <p className="text-lg sm:text-base lg:text-lg text-bone/75 font-light max-w-2xl mx-auto leading-relaxed">
              Our integrated services work as <span className="text-bone/90 font-medium">one unified system</span> to transform your business from strategy to execution.
            </p>
          </div>

          {/* CTA Buttons - Mobile */}
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
              <div className="relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-accent text-obsidian rounded-full text-base font-medium transition-all duration-300 group-hover:bg-accent/90 group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:-translate-y-1 group-active:scale-95 w-full sm:w-auto">
                <span className="relative">
                  Book appointment
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full block" />
                </span>
                
                <div className="relative overflow-hidden w-5 h-5">
                  <motion.svg 
                    className="absolute w-5 h-5"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
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
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-16 items-center min-h-[60vh]">
          
          {/* Content Side - Left */}
          <div className="col-span-7 space-y-12 text-left">
            
            {/* Header - Desktop */}
            <div className="text-left">
              <h2 className="font-display text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-bone via-accent to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                  Ready to accelerate your growth?
                </span>
              </h2>
              <p className="text-lg sm:text-base lg:text-lg text-bone/75 font-light max-w-2xl">
                Our integrated services work as <span className="text-bone/90 font-medium">one unified system</span> to transform your business from strategy to execution.
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
              <a href="https://cal.com/bensegev/30min" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/40 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-accent text-obsidian rounded-full text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 group-hover:bg-accent/90 group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:-translate-y-1 group-active:scale-95">
                  <span className="relative">
                    Book appointment
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full block" />
                  </span>
                  
                  <div className="relative overflow-hidden w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
                    <motion.svg 
                      className="absolute w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
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
          </div>

          {/* Optimized Visual Side - Right */}
          <div className="col-span-5 relative h-96 lg:h-full">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{ scale: geometryScale }}
              onViewportEnter={() => setIsVisible(true)}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Simplified Service Ecosystem Animation */}
              {isVisible && (
                <svg className="w-full h-full max-w-lg" viewBox="0 0 500 500">
                  <defs>
                    <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0.2" />
                    </radialGradient>
                    <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>

                  {/* Central Hub */}
                  <motion.circle
                    cx="250"
                    cy="250"
                    r="12"
                    fill="url(#coreGradient)"
                    stroke="#FFE0D7"
                    strokeWidth="2"
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />

                  {/* Service Nodes - Reduced complexity */}
                  {[
                    { name: 'Strategy', angle: 0, color: '#FFE0D7', delay: 0.5 },
                    { name: 'Design', angle: 90, color: '#FFE0D7', delay: 1.0 },
                    { name: 'Technology', angle: 180, color: '#FFE0D7', delay: 1.5 },
                    { name: 'Growth', angle: 270, color: '#FFE0D7', delay: 2.0 }
                  ].map((service, i) => {
                    const angle = (service.angle * Math.PI) / 180;
                    const radius = 80;
                    const x = 250 + Math.cos(angle) * radius;
                    const y = 250 + Math.sin(angle) * radius;
                    
                    return (
                      <motion.g key={service.name}>
                        {/* Connection Lines */}
                        <motion.line
                          x1="250"
                          y1="250"
                          x2={x}
                          y2={y}
                          stroke="url(#connectionGradient)"
                          strokeWidth="1"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.6 }}
                          transition={{ duration: 1, delay: service.delay }}
                        />
                        
                        {/* Service Node */}
                        <motion.circle
                          cx={x}
                          cy={y}
                          r="6"
                          fill={service.color}
                          stroke="#FFE0D7"
                          strokeWidth="1"
                          opacity="0.8"
                          initial={{ scale: 0 }}
                          animate={{ scale: [0, 1.2, 1] }}
                          transition={{ duration: 0.8, delay: service.delay }}
                        />
                        
                        {/* Simplified Node Pulse */}
                        <motion.circle
                          cx={x}
                          cy={y}
                          r="6"
                          fill="none"
                          stroke={service.color}
                          strokeWidth="1"
                          opacity="0"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0, 0.4, 0]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 1
                          }}
                        />
                      </motion.g>
                    );
                  })}

                  {/* Simplified Outer Ring */}
                  <motion.circle
                    cx="250"
                    cy="250"
                    r="120"
                    fill="none"
                    stroke="#FFE0D7"
                    strokeWidth="1"
                    opacity="0.2"
                    strokeDasharray="4 8"
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ 
                      scale: 1, 
                      rotate: 360 
                    }}
                    transition={{
                      scale: { duration: 1.5, delay: 2.5 },
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                    }}
                  />

                  {/* Reduced Innovation Satellites - from 6 to 3 */}
                  {Array.from({ length: 3 }).map((_, i) => {
                    const angle = (i * 120) * (Math.PI / 180);
                    const radius = 120;
                    const x = 250 + Math.cos(angle) * radius;
                    const y = 250 + Math.sin(angle) * radius;
                    
                    return (
                      <motion.circle
                        key={`satellite-${i}`}
                        cx={x}
                        cy={y}
                        r="2"
                        fill="#FFE0D7"
                        opacity="0.4"
                        initial={{ scale: 0 }}
                        animate={{ 
                          scale: [0, 1, 0],
                          opacity: [0, 0.4, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: 3 + i * 0.5
                        }}
                      />
                    );
                  })}

                  {/* Central Pulse Effect */}
                  <motion.circle
                    cx="250"
                    cy="250"
                    r="12"
                    fill="none"
                    stroke="#FFE0D7"
                    strokeWidth="1"
                    opacity="0"
                    animate={{
                      r: [12, 30, 12],
                      opacity: [0, 0.4, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: 4
                    }}
                  />
                </svg>
              )}
            </motion.div>

            {/* Simplified Floating Particles */}
            {isVisible && (
              <>
                <motion.div
                  className="absolute top-16 right-16 w-2 h-2 bg-accent/40 rounded-full"
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-20 left-16 w-2 h-2 bg-accent/30 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 