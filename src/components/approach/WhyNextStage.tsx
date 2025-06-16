'use client';

import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'motion/react';
import React, { useRef, useState } from 'react';
import { Highlight } from '@/components/ui/hero-highlight';
import { LiquidGlass, LiquidGlassPanel } from '@/components/ui/liquid-glass';

const principles = [
  {
    number: "01",
    title: "Strategy without execution is just theory",
    details: "We bridge both worlds."
  },
  {
    number: "02",
    title: "Real impact comes from understanding the entire system, not just parts",
    details: "Everything must work together."
  },
  {
    number: "03",
    title: "The best solutions emerge when design meets engineering",
    details: "Strategy is the bridge between them."
  },
  {
    number: "04",
    title: "Move fast, but build things right",
    details: "Speed shouldn't compromise quality."
  },
  {
    number: "05",
    title: "Plan for pivots",
    details: "The best solutions adapt as opportunities emerge."
  },
  {
    number: "06",
    title: "Excellence should be accessible",
    details: "Great work shouldn't require enterprise budgets."
  }
];

export default function WhyNextStage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: true });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full py-16 sm:py-20 md:py-32 overflow-hidden bg-bone"
    >
      {/* Subtle Background Pattern for Liquid Glass */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,53,0.04)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,224,215,0.06)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(10,10,10,0.015)_0%,transparent_80%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(255,250,248,1)_100%)]" />
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(255,224,215,0.015) 80px, rgba(255,224,215,0.015) 160px),
              repeating-linear-gradient(90deg, transparent, transparent 120px, rgba(255,107,53,0.01) 120px, rgba(255,107,53,0.01) 240px)
            `
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div 
          style={{ opacity }}
          className="w-full"
        >
          {/* Header */}
          <div className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-6 sm:mb-8 text-sm sm:text-sm font-medium text-obsidian/60 tracking-[0.2em] uppercase">
              <span>Principles & Philosophy</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                Lessons Learned & Applied Daily
              </span>
            </h2>
            <p className="text-lg sm:text-base lg:text-lg text-obsidian/80 font-light max-w-2xl mx-auto">
              The core beliefs that guide how we work and what we build.
            </p>
          </div>

          {/* Two Column Layout - 40/60 split on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 xl:gap-20">
            
            {/* Left Column - Values Board */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <LiquidGlass 
                intensity="medium" 
                variant="tinted" 
                animated
                className="p-3 sm:p-4"
              >
              {/* Subtle texture */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,224,215,0.1)_0%,transparent_70%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
              
              {/* Grid of post-it notes - 3x4 layout */}
              <div className="relative grid grid-cols-3 gap-1.5 sm:gap-2 lg:gap-2.5 justify-items-center">
                {[
                  {
                    text: "Build to\nLAST",
                    color: "yellow",
                    rotate: -2,
                    scale: 1
                  },
                  {
                    text: "We have\nVISION",
                    color: "blue",
                    rotate: 1,
                    scale: 1
                  },
                  {
                    text: "PEOPLE\nFIRST",
                    color: "green",
                    rotate: -1,
                    scale: 1
                  },
                  {
                    text: "Start from\nWHY",
                    color: "pink",
                    rotate: 2,
                    scale: 1
                  },
                  {
                    text: "Open\nMINDED",
                    color: "purple",
                    rotate: -3,
                    scale: 1
                  },
                  {
                    text: "We 🫶\ndigital",
                    color: "orange",
                    rotate: 1,
                    scale: 1
                  },
                  {
                    text: {
                      part1: "DO",
                      strike1: "N'T",
                      space: " ",
                      strike2: "QU",
                      part2: "IT"
                    },
                    color: "yellow",
                    rotate: -1,
                    scale: 1
                  },
                  {
                    text: "Design\nMATTERS",
                    color: "blue",
                    rotate: 2,
                    scale: 1
                  },
                  {
                    text: "Move\nFAST",
                    color: "green",
                    rotate: -2,
                    scale: 1
                  },
                  {
                    text: "Remote by\nDESIGN",
                    color: "pink",
                    rotate: 1,
                    scale: 1
                  },
                  {
                    text: "Stay\nAGILE",
                    color: "purple",
                    rotate: -1,
                    scale: 1
                  },
                  {
                    text: "Think\nBIG",
                    color: "orange",
                    rotate: 2,
                    scale: 1
                  }
                ].map((note, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: i * 0.1,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      zIndex: 10,
                      transition: { type: "spring", stiffness: 400, damping: 25 }
                    }}
                    className={`
                      w-full aspect-square p-2 sm:p-3 cursor-pointer rounded-sm shadow-sm
                      ${note.color === 'yellow' && 'bg-amber-100'}
                      ${note.color === 'blue' && 'bg-sky-100'}
                      ${note.color === 'green' && 'bg-emerald-100'}
                      ${note.color === 'pink' && 'bg-pink-100'}
                      ${note.color === 'purple' && 'bg-purple-100'}
                      ${note.color === 'orange' && 'bg-orange-100'}
                    `}
                    style={{
                      rotate: `${note.rotate}deg`,
                    }}
                  >
                    <div className="h-full w-full flex items-center justify-center text-center">
                      {typeof note.text === 'string' ? (
                        <p className={`
                          font-display text-xs sm:text-sm md:text-base font-bold whitespace-pre-line leading-tight
                          ${note.color === 'yellow' && 'text-amber-900'}
                          ${note.color === 'blue' && 'text-sky-900'}
                          ${note.color === 'green' && 'text-emerald-900'}
                          ${note.color === 'pink' && 'text-pink-900'}
                          ${note.color === 'purple' && 'text-purple-900'}
                          ${note.color === 'orange' && 'text-orange-900'}
                        `}>
                          {note.text}
                        </p>
                      ) : (
                        <p className={`
                          font-display text-xs sm:text-sm md:text-base font-bold leading-tight
                          ${note.color === 'yellow' && 'text-amber-900'}
                        `}>
                          <span className="flex flex-col items-center gap-0.5 sm:gap-1">
                            <span className="flex items-center">
                              <span>{note.text.part1}</span>
                              <span className="relative">
                                <span className="text-amber-600/90">{note.text.strike1}</span>
                                <span className="absolute inset-x-0 top-1/2 h-[2px] bg-amber-700/90 -rotate-6"></span>
                              </span>
                            </span>
                            <span className="flex items-center">
                              <span className="relative">
                                <span className="text-amber-600/90">{note.text.strike2}</span>
                                <span className="absolute inset-x-0 top-1/2 h-[2px] bg-amber-700/90 -rotate-6"></span>
                              </span>
                              <span>{note.text.part2}</span>
                            </span>
                          </span>
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

                {/* Decorative pins - positioned at actual corners of the glass shape */}
                <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-gradient-to-br from-obsidian/40 to-obsidian/20 shadow-inner" />
                <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-gradient-to-br from-obsidian/40 to-obsidian/20 shadow-inner" />
                <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-gradient-to-br from-obsidian/40 to-obsidian/20 shadow-inner" />
                <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-gradient-to-br from-obsidian/40 to-obsidian/20 shadow-inner" />
              </LiquidGlass>
            </motion.div>

            {/* Right Column - Principles */}
            <div className="space-y-3">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.number}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <button
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className="w-full text-left"
                  >
                    <div className="relative rounded-2xl transition-all duration-500 overflow-hidden">
                      {activeIndex === index ? (
                        <div className="absolute inset-0 rounded-2xl bg-accent/10 border border-accent/20 backdrop-blur-sm shadow-[0_8px_32px_rgba(31,38,135,0.2)]" 
                             style={{
                               backdropFilter: "blur(2px) saturate(180%)",
                               WebkitBackdropFilter: "blur(2px) saturate(180%)",
                               boxShadow: "inset 0 4px 20px rgba(255, 255, 255, 0.15), 0 8px 32px rgba(31,38,135,0.2)"
                             }} />
                      ) : (
                        <div className={`
                          absolute inset-0 rounded-2xl transition-all duration-500
                          group-hover:bg-gradient-to-r group-hover:from-obsidian/5 group-hover:to-obsidian/3
                        `} />
                      )}
                      
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-accent/60 rounded-r-full"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: activeIndex === index ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <div className="relative px-6 py-5">
                        <div className="flex items-start gap-4">
                          <span className={`
                            text-sm font-mono font-medium transition-colors duration-300 mt-1
                            ${activeIndex === index ? 'text-accent' : 'text-obsidian/40'}
                          `}>
                            {principle.number}
                          </span>
                          
                          <div className="flex-1">
                            <h3 className="font-display text-lg sm:text-xl font-semibold text-obsidian mb-2 leading-tight">
                              {principle.title}
                            </h3>
                            
                            <AnimatePresence>
                              {activeIndex === index && (
                                <motion.p
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                  className="text-obsidian/70 text-sm sm:text-base leading-relaxed overflow-hidden"
                                >
                                  {principle.details}
                                </motion.p>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="relative mt-20 sm:mt-24 md:mt-28 text-center"
          >
            <LiquidGlassPanel intensity="subtle" className="p-8 sm:p-12 md:p-16">
              <motion.div
                className="mb-8 flex items-center justify-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-obsidian/30" />
                <span className="text-obsidian/60 text-sm font-medium tracking-wider">
                  OUR COMMITMENT
                </span>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-obsidian/30" />
              </motion.div>
              
              <blockquote className="font-display text-2xl sm:text-xl md:text-2xl lg:text-3xl text-obsidian/90 font-light max-w-4xl mx-auto leading-relaxed">
                <span className="text-accent text-6xl leading-none opacity-60">&ldquo;</span>
                <span className="relative">
                  We&apos;re here to ensure everything holds together,<br />
                  <Highlight className="font-medium">
                    works at its best and moves you forward.
                  </Highlight>
                </span>
                <span className="text-accent text-6xl leading-none opacity-60">&rdquo;</span>
              </blockquote>
            </LiquidGlassPanel>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
} 