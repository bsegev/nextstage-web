"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IconBulb, IconCode, IconRocket } from "@tabler/icons-react";

export default function CoreNarrative() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: true });

  return (
    <section ref={sectionRef} className="w-full py-16 sm:py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,53,0.03)_0%,rgba(255,255,255,0)_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(60deg,rgba(255,107,53,0.02)_0%,rgba(10,10,10,0.01)_50%,rgba(255,107,53,0.02)_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-6 sm:mb-8 text-sm sm:text-sm font-medium text-obsidian/60 tracking-[0.2em] uppercase">
              <span>The Reality</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                When execution becomes harder than the vision
              </span>
            </h2>
            <p className="text-lg sm:text-base lg:text-lg text-obsidian/80 font-light max-w-2xl mx-auto">
              Aligning freelancers, navigating misaligned visions, hiring internally – it can feel harder than building your business itself.
            </p>
          </div>

          {/* Problem Statement */}
          <div className="space-y-16 sm:space-y-20 md:space-y-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Elegant Side Accent */}
              <div className="absolute -left-4 sm:-left-6 top-0 h-full w-[3px] bg-gradient-to-b from-accent/40 via-accent/20 to-accent/10 rounded-full"></div>
              
              <div className="space-y-6 sm:space-y-8">
                {[
                  "Design that doesn't match your strategy.",
                  "Plans that never get built.", 
                  "Hiring that takes forever and costs too much."
                ].map((text, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-start gap-4 sm:gap-6"
                  >
                    <div className="flex-shrink-0 mt-2">
                      <motion.div
                        className="w-2 h-2 bg-accent rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      />
                    </div>
                    <p className="text-obsidian text-lg sm:text-base md:text-lg lg:text-xl leading-relaxed">
                      {text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Solution Showcase - Museum Quality Interactive Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Interactive Solution Matrix */}
              <div className="relative bg-gradient-to-br from-obsidian via-obsidian/95 to-obsidian rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 overflow-hidden shadow-2xl border border-accent/20">
                
                {/* Dynamic Background System */}
                <div className="absolute inset-0">
                  {/* Flowing Data Streams */}
                  <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <linearGradient id="solutionFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ff6b35" stopOpacity="0" />
                        <stop offset="50%" stopColor="#ff6b35" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#ff6b35" stopOpacity="0" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge> 
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    {Array.from({ length: 4 }).map((_, i) => (
                      <motion.path
                        key={i}
                        d={`M${-50 + i * 150} ${50 + i * 100} Q${400 + i * 50} ${150 + i * 80} ${850 + i * 30} ${100 + i * 90}`}
                        stroke="url(#solutionFlow)"
                        strokeWidth="2"
                        fill="none"
                        filter="url(#glow)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ 
                          pathLength: [0, 1, 0],
                          opacity: [0, 0.8, 0]
                        }}
                        transition={{
                          duration: 6 + i * 0.8,
                          repeat: Infinity,
                          delay: i * 1.2,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </svg>

                  {/* Geometric Accent Elements */}
                  <motion.div
                    className="absolute top-8 right-8 w-32 h-32 opacity-20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <defs>
                        <linearGradient id="geometryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#ffe0d7" stopOpacity="0.2" />
                        </linearGradient>
                      </defs>
                      <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="url(#geometryGrad)" stroke="#ff6b35" strokeWidth="1" opacity="0.8" />
                      <circle cx="50" cy="50" r="15" fill="#ff6b35" opacity="0.4" />
                    </svg>
                  </motion.div>
                </div>

                <div className="relative z-10">
                  {/* Solution Header */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="mb-12"
                  >
                    <h3 className="font-display text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-tight text-bone mb-6">
                      The{" "}
                      <span className="bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                        NextStage
                      </span>{" "}
                      Approach
                    </h3>
                  </motion.div>

                  {/* Interactive Capability Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {[
                      {
                        icon: IconBulb,
                        title: "Strategy + Design",
                        description: "Unified vision from concept to pixel",
                        delay: 1.2
                      },
                      {
                        icon: IconCode,
                        title: "Design + Engineering", 
                        description: "Seamless handoff, flawless execution",
                        delay: 1.4
                      },
                      {
                        icon: IconRocket,
                        title: "Speed + Quality",
                        description: "Move fast without breaking things",
                        delay: 1.6
                      }
                    ].map((capability, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: capability.delay }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group relative bg-gradient-to-br from-bone/10 to-bone/5 backdrop-blur-md rounded-2xl p-6 border border-accent/20 hover:border-accent/40 transition-all duration-300"
                      >
                        {/* Icon Container - styled like TrustBanner */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0, rotateY: -180 }}
                          animate={isInView ? { 
                            opacity: 1, 
                            scale: 1, 
                            rotateY: 0,
                          } : { opacity: 0, scale: 0, rotateY: -180 }}
                          transition={{ 
                            duration: 0.8, 
                            delay: 0.2 + index * 0.15,
                            ease: [0.22, 1, 0.36, 1] 
                          }}
                          className="relative w-16 h-16 mb-6 group"
                        >
                          {/* Background glow */}
                          <motion.div
                            animate={{ 
                              scale: [1, 1.1, 1],
                              opacity: [0.5, 0.8, 0.5]
                            }}
                            transition={{ 
                              duration: 4, 
                              repeat: Infinity, 
                              ease: "easeInOut",
                              delay: index * 0.5
                            }}
                            className="absolute inset-0 bg-accent/40 rounded-2xl blur-xl"
                          />
                          
                          {/* Main icon container */}
                          <motion.div
                            whileHover={{ 
                              scale: 1.05,
                              rotateY: 5,
                              rotateX: 5,
                              transition: {
                                duration: 0.3,
                                ease: [0.22, 1, 0.36, 1]
                              }
                            }}
                            animate={{
                              y: [0, -2, 0],
                            }}
                            transition={{
                              y: {
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.3
                              }
                            }}
                            className="relative flex items-center justify-center w-full h-full bg-gradient-to-br from-bone/20 via-bone/15 to-bone/10 border border-accent/30 rounded-2xl shadow-xl shadow-accent/10 backdrop-blur-sm"
                          >
                            {/* Number indicator */}
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-obsidian rounded-full flex items-center justify-center shadow-lg">
                              <span className="font-mono text-xs font-bold">
                                {index + 1}
                              </span>
                            </div>
                            
                            {/* Icon */}
                            <motion.div
                              animate={{
                                rotate: capability.icon === IconRocket ? [0, 5, -5, 0] : 0,
                              }}
                              transition={{
                                duration: capability.icon === IconRocket ? 2 : 0,
                                repeat: capability.icon === IconRocket ? Infinity : 0,
                                ease: "easeInOut"
                              }}
                            >
                              <capability.icon 
                                className="w-7 h-7 text-accent"
                                strokeWidth={2}
                              />
                            </motion.div>
                          </motion.div>
                        </motion.div>

                        <h4 className="font-display text-lg font-semibold text-bone mb-2">
                          {capability.title}
                        </h4>
                        <p className="text-bone/70 text-sm leading-relaxed">
                          {capability.description}
                        </p>
                        
                        {/* Hover accent line */}
                        <motion.div
                          className="absolute bottom-0 left-0 h-[2px] bg-accent rounded-full"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Core Philosophy Statement */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                    className="relative"
                  >
                    <blockquote className="font-display text-xl sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-bone/90 font-light">
                      <span className="text-accent text-4xl leading-none opacity-60">&ldquo;</span>
                      <span className="relative">
                        We don&apos;t just bridge the gap between strategy and execution—
                        <motion.span
                          className="relative inline-block ml-2"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.8, delay: 2.2 }}
                        >
                          <span className="bg-gradient-to-r from-accent via-accent/90 to-accent bg-clip-text text-transparent font-medium px-2 py-1 bg-bone/10 rounded-lg border border-accent/30">
                            we eliminate it entirely.
                          </span>
                        </motion.span>
                      </span>
                      <span className="text-accent text-4xl leading-none opacity-60">&rdquo;</span>
                    </blockquote>
                    
                    {/* Signature Line */}
                    <motion.div
                      className="mt-8 flex items-center gap-4"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.8, delay: 2.4 }}
                    >
                      <motion.div
                        className="h-px bg-gradient-to-r from-accent/60 to-transparent flex-1"
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 1.5, delay: 2.6 }}
                      />
                      <span className="text-bone/60 text-sm font-medium tracking-wider">
                        NEXTSTAGE PHILOSOPHY
                      </span>
                      <motion.div
                        className="h-px bg-gradient-to-l from-accent/60 to-transparent flex-1"
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 1.5, delay: 2.6 }}
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 