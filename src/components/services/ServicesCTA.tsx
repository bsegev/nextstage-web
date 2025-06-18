'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import { LiquidGlass } from '@/components/ui/liquid-glass';

export default function ServicesCTA() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const geometryScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 1]);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-obsidian relative overflow-hidden">
      {/* Static Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-accent/12"></div>
      
      {/* Dynamic Background with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Flowing Lines */}
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
        </svg>
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
            <Link href="/contact" className="group relative w-full sm:w-auto min-h-[56px] touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 rounded-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/40 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-obsidian rounded-full text-base font-medium transition-all duration-300 group-hover:bg-accent/90 group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:-translate-y-1 group-active:scale-95 w-full sm:w-auto">
                <span className="relative">
                  Start your transformation
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
            </Link>

            {/* Secondary CTA */}
            <Link href="/work" className="group relative w-full sm:w-auto min-h-[56px] touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-bone/50 focus-visible:ring-offset-2">
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
              <Link href="/contact" className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/40 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-accent text-obsidian rounded-full text-base font-medium transition-all duration-300 group-hover:bg-accent/90 group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:-translate-y-1 group-active:scale-95">
                  <span className="relative">
                    Start your transformation
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
              <Link href="/work" className="group relative">
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

          {/* Visual Side - Right */}
          <div className="col-span-5 relative h-96 lg:h-full">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{ scale: geometryScale }}
            >
              {/* Service Ecosystem Animation */}
              <svg className="w-full h-full max-w-lg" viewBox="0 0 500 500">
                <defs>
                  <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFE0D7" stopOpacity="1" />
                    <stop offset="70%" stopColor="#FFE0D7" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
                  </radialGradient>
                  
                  <radialGradient id="serviceNodeGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0.3" />
                  </radialGradient>

                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0" />
                    <stop offset="50%" stopColor="#FFE0D7" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Central Hub - NextStage Core */}
                <motion.circle
                  cx="250"
                  cy="250"
                  r="12"
                  fill="url(#coreGradient)"
                  stroke="#FFE0D7"
                  strokeWidth="2"
                  initial={{ scale: 0, rotate: 0 }}
                  whileInView={{ scale: [0, 1.2, 1], rotate: 360 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5 }}
                />

                {/* Service Nodes - 4 Core Services */}
                {[
                  { name: "Strategy", angle: 0, color: "#FFE0D7", delay: 1 },
                  { name: "Brand", angle: 90, color: "#FFE0D7", delay: 1.2 },
                  { name: "Platform", angle: 180, color: "#FFE0D7", delay: 1.4 },
                  { name: "Growth", angle: 270, color: "#FFE0D7", delay: 1.6 }
                ].map((service, i) => {
                  const angle = (service.angle) * (Math.PI / 180);
                  const radius = 120;
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
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
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
                        whileInView={{ scale: [0, 1.3, 1] }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: service.delay }}
                      />
                      
                      {/* Service Node Pulse */}
                      <motion.circle
                        cx={x}
                        cy={y}
                        r="6"
                        fill="none"
                        stroke={service.color}
                        strokeWidth="1"
                        opacity="0"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0, 0.6, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5
                        }}
                      />
                      
                      {/* Orbiting Data Points */}
                      <motion.circle
                        cx={x}
                        cy={y}
                        r="1.5"
                        fill="#FFE0D7"
                        opacity="0.6"
                        animate={{
                          x: [0, 15 * Math.cos(angle + Math.PI/4), 0],
                          y: [0, 15 * Math.sin(angle + Math.PI/4), 0],
                        }}
                        transition={{
                          duration: 2 + i * 0.3,
                          repeat: Infinity,
                          delay: service.delay + 1
                        }}
                        style={{
                          transformOrigin: `${x}px ${y}px`
                        }}
                      />
                    </motion.g>
                  );
                })}

                {/* Outer Innovation Ring */}
                <motion.circle
                  cx="250"
                  cy="250"
                  r="180"
                  fill="none"
                  stroke="#FFE0D7"
                  strokeWidth="1"
                  opacity="0.3"
                  strokeDasharray="8 12"
                  initial={{ scale: 0, rotate: 0 }}
                  whileInView={{ scale: 1, rotate: 360 }}
                  viewport={{ once: true }}
                  transition={{
                    scale: { duration: 1.5, delay: 2 },
                    rotate: { duration: 30, repeat: Infinity, ease: "linear" }
                  }}
                />

                {/* Innovation Satellites */}
                {Array.from({ length: 6 }).map((_, i) => {
                  const angle = (i * 60) * (Math.PI / 180);
                  const radius = 180;
                  const x = 250 + Math.cos(angle) * radius;
                  const y = 250 + Math.sin(angle) * radius;
                  
                  return (
                    <motion.g key={`satellite-${i}`}>
                      <motion.circle
                        cx={x}
                        cy={y}
                        r="2"
                        fill="#FFE0D7"
                        opacity="0.5"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 2.5 + i * 0.1 }}
                      />
                      
                      {/* Satellite Pulse */}
                      <motion.circle
                        cx={x}
                        cy={y}
                        r="2"
                        fill="none"
                        stroke="#FFE0D7"
                        strokeWidth="1"
                        opacity="0"
                        animate={{
                          scale: [1, 2, 1],
                          opacity: [0, 0.4, 0]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: i * 0.7
                        }}
                      />
                      
                      {/* Connecting Pulse */}
                      <motion.line
                        x1="250"
                        y1="250"
                        x2={x}
                        y2={y}
                        stroke="#FFE0D7"
                        strokeWidth="0.5"
                        opacity="0"
                        animate={{
                          opacity: [0, 0.6, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 3 + i * 0.3
                        }}
                      />
                    </motion.g>
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
                    r: [12, 40, 12],
                    opacity: [0, 0.6, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 3
                  }}
                />
              </svg>
            </motion.div>

            {/* Floating Innovation Particles */}
            <motion.div
              className="absolute top-16 right-16 w-2 h-2 bg-accent/60 rounded-full"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-20 left-16 w-3 h-3 bg-accent/40 rounded-full"
              animate={{
                y: [0, -15, 0],
                x: [0, -8, 0],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
            />
            <motion.div
              className="absolute top-1/3 left-8 w-1.5 h-1.5 bg-accent/50 rounded-full"
              animate={{
                y: [0, -12, 0],
                opacity: [0.5, 0.9, 0.5]
              }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
} 