"use client";

import React from "react";
import { motion } from "framer-motion";

interface ComparisonMoment {
  traditional: {
    phase: string;
    duration: string;
    description: string;
  };
  nextstage: {
    phase: string;
    duration: string;
    description: string;
    highlight?: boolean;
  };
}

const comparisonData: ComparisonMoment[] = [
  {
    traditional: {
      phase: "Discovery & Research",
      duration: "4-6 weeks",
      description: "Comprehensive stakeholder engagement protocols, extensive competitive landscape analysis, multi-tiered market research methodologies, systematic data collection frameworks..."
    },
    nextstage: {
      phase: "Rapid Discovery",
      duration: "3 days",
      description: "We talk to your team, understand your market, and get clear on what matters most."
    }
  },
  {
    traditional: {
      phase: "Strategy Development",
      duration: "6-8 weeks", 
      description: "Multi-phase strategic framework development, iterative stakeholder alignment workshops, comprehensive deliverable documentation cycles..."
    },
    nextstage: {
      phase: "Strategy Sprint",
      duration: "5 days",
      description: "Clear plan with priorities you can act on immediately."
    }
  },
  {
    traditional: {
      phase: "Design & Prototyping",
      duration: "8-12 weeks",
      description: "Systematic wireframe development, iterative design validation protocols, multi-stakeholder feedback integration cycles..."
    },
    nextstage: {
      phase: "Design Execution",
      duration: "1 week",
      description: "Design system ready for your developers to build.",
      highlight: true
    }
  },
  {
    traditional: {
      phase: "Development & Testing",
      duration: "12-16 weeks",
      description: "Phased development lifecycle management, comprehensive quality assurance protocols, systematic deployment risk mitigation..."
    },
    nextstage: {
      phase: "Rapid Development",
      duration: "2 weeks",
      description: "We build it, test it, and launch it."
    }
  }
];

export default function SpeedProof() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-bone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="mb-6 sm:mb-8 text-sm sm:text-sm font-medium text-obsidian/60 tracking-[0.2em] uppercase">
            <span>The difference</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              Speed without compromise
            </span>
          </h2>
          <p className="text-lg sm:text-base lg:text-lg text-obsidian/80 font-light max-w-2xl mx-auto">
            When strategy, design, and technology move as one, everything accelerates.
          </p>
        </div>

        {/* DESKTOP LAYOUT - Side by side comparison (hidden on mobile) */}
        <div className="hidden md:block max-w-6xl mx-auto">
          {/* Column Headers */}
          <div className="grid grid-cols-2 gap-8 lg:gap-16 mb-12 sm:mb-16">
            <div>
              <h3 className="font-display text-lg xl:text-xl text-obsidian font-semibold mb-2">
                Traditional Approach
              </h3>
              <div className="h-px bg-gray-300"></div>
            </div>
            <div>
              <h3 className="font-display text-lg xl:text-xl text-obsidian font-semibold mb-2">
                NextStage Velocity
              </h3>
              <div className="h-px bg-accent"></div>
            </div>
          </div>

          {/* Comparison Moments */}
          <div className="space-y-16 sm:space-y-20 md:space-y-24">
            {comparisonData.map((moment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="grid grid-cols-2 gap-8 lg:gap-16 items-start"
              >
                {/* Traditional Side - Grey Styling */}
                <motion.div 
                  className="relative"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-3">
                      <h4 className="font-display text-lg sm:text-lg text-obsidian font-semibold">
                        {moment.traditional.phase}
                      </h4>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <span className="font-mono text-sm font-bold text-obsidian bg-gray-200 px-4 py-1.5 rounded-full border-2 border-gray-300 shadow-sm">
                        {moment.traditional.duration}
                      </span>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "3rem" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.6 }}
                        className="h-1 bg-gray-400 rounded-full shadow-sm"
                      ></motion.div>
                    </div>
                    
                    <p className="text-base text-obsidian/90 leading-relaxed font-medium">
                      {moment.traditional.description}
                    </p>
                  </motion.div>
                </motion.div>

                {/* NextStage Side - Clean & Efficient */}
                <motion.div 
                  className="relative"
                >
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-3">
                      <h4 className="font-display text-lg sm:text-lg text-obsidian font-semibold">
                        {moment.nextstage.phase}
                      </h4>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <span className="font-mono text-sm font-bold text-obsidian bg-accent/30 px-4 py-1.5 rounded-full border-2 border-accent/50 shadow-sm">
                        {moment.nextstage.duration}
                      </span>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "3rem" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.6 }}
                        className="h-1 bg-accent rounded-full shadow-sm"
                      ></motion.div>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <p className="text-base text-obsidian/80 leading-relaxed">
                        {moment.nextstage.description}
                      </p>
                      {moment.nextstage.highlight && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                          className="flex-shrink-0 w-5 h-5 rounded-full bg-accent flex items-center justify-center"
                        >
                          <svg className="w-3 h-3 text-obsidian" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Desktop Summary */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 sm:mt-24"
          >
            {/* Line Separator */}
            <div className="mb-8">
              <div className="h-px bg-obsidian/20"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-8 lg:gap-16">
              {/* Traditional Summary - Grey Styling */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <h4 className="font-display text-lg xl:text-xl text-obsidian font-semibold">
                    Total Timeline
                  </h4>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-display text-2xl sm:text-3xl text-obsidian font-bold tracking-tight bg-gray-200 px-4 py-2 rounded-full border-2 border-gray-300 shadow-sm">
                    30-42 weeks
                  </span>
                </div>
                <div className="text-xs text-obsidian/60 font-medium tracking-wide uppercase">
                  Traditional timeline
                </div>
              </div>
              
              {/* NextStage Summary - Accent Styling */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <h4 className="font-display text-lg xl:text-xl text-obsidian font-semibold">
                    Total Delivery
                  </h4>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-display text-2xl sm:text-3xl text-obsidian font-bold tracking-tight bg-accent/30 px-4 py-2 rounded-full border-2 border-accent/50 shadow-lg">
                    4 weeks
                  </span>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="bg-emerald-500/90 text-white font-mono text-sm font-bold px-4 py-2 rounded-full shadow-md"
                  >
                    87% faster
                  </motion.div>
                </div>
                <div className="text-xs text-obsidian font-semibold tracking-wide uppercase">
                  NextStage delivery
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* MOBILE LAYOUT - Stacked comparison cards (visible on mobile only) */}
        <div className="block md:hidden max-w-2xl mx-auto">
          <div className="space-y-8">
            {comparisonData.map((moment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-6"
              >
                {/* Comparison Card */}
                <div className="bg-white/50 backdrop-blur-sm border border-obsidian/10 rounded-2xl p-6 shadow-sm">
                  {/* Phase Title */}
                  <div className="text-center mb-6">
                    <h3 className="font-display text-xl font-semibold text-obsidian mb-2">
                      Phase {index + 1}
                    </h3>
                    <div className="h-px bg-obsidian/10 w-16 mx-auto"></div>
                  </div>

                  {/* Traditional Approach */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="mb-8"
                  >
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-display text-lg font-semibold text-obsidian">
                          {moment.traditional.phase}
                        </h4>
                        <span className="text-sm text-obsidian/50 font-medium tracking-wide uppercase">
                          Traditional
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="font-mono text-sm font-bold text-obsidian bg-gray-200 px-4 py-2 rounded-full border-2 border-gray-300 shadow-sm min-w-[100px] text-center">
                          {moment.traditional.duration}
                        </span>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "4rem" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
                          className="h-1.5 bg-gray-400 rounded-full shadow-sm flex-1 max-w-[4rem]"
                        ></motion.div>
                      </div>
                      
                      <p className="text-base text-obsidian/80 leading-relaxed">
                        {moment.traditional.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* VS Divider */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-obsidian/20"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-bone px-4 py-1.5 text-xs font-bold text-obsidian/60 tracking-wider uppercase rounded-full border border-obsidian/10">
                        vs
                      </span>
                    </div>
                  </div>

                  {/* NextStage Approach */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  >
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-display text-lg font-semibold text-obsidian">
                          {moment.nextstage.phase}
                        </h4>
                        <span className="text-sm text-accent font-semibold tracking-wide uppercase">
                          NextStage
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="font-mono text-sm font-bold text-obsidian bg-accent/30 px-4 py-2 rounded-full border-2 border-accent/50 shadow-sm min-w-[100px] text-center">
                          {moment.nextstage.duration}
                        </span>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "4rem" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.1 + 0.6 }}
                          className="h-1.5 bg-accent rounded-full shadow-sm flex-1 max-w-[4rem]"
                        ></motion.div>
                        {moment.nextstage.highlight && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                            className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center"
                          >
                            <svg className="w-3.5 h-3.5 text-obsidian" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </motion.div>
                        )}
                      </div>
                      
                      <p className="text-base text-obsidian/80 leading-relaxed">
                        {moment.nextstage.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Summary */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <div className="bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-2xl p-6">
              <div className="text-center mb-6">
                <h3 className="font-display text-xl font-semibold text-obsidian mb-2">
                  Total Time Comparison
                </h3>
                <div className="h-px bg-accent/30 w-20 mx-auto"></div>
              </div>

              <div className="space-y-6">
                {/* Traditional Total */}
                <div className="text-center">
                  <div className="text-xs text-obsidian/60 font-medium tracking-wide uppercase mb-2">
                    Traditional Timeline
                  </div>
                  <span className="font-display text-xl font-bold text-obsidian bg-gray-200 px-6 py-3 rounded-full border-2 border-gray-300 shadow-sm inline-block">
                    30-42 weeks
                  </span>
                </div>

                {/* VS Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-obsidian/20"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-bone px-4 py-1.5 text-xs font-bold text-obsidian/60 tracking-wider uppercase rounded-full border border-obsidian/10">
                      vs
                    </span>
                  </div>
                </div>

                {/* NextStage Total */}
                <div className="text-center">
                  <div className="text-xs text-accent font-semibold tracking-wide uppercase mb-2">
                    NextStage Delivery
                  </div>
                  <div className="space-y-3">
                    <span className="font-display text-xl font-bold text-obsidian bg-accent/30 px-6 py-3 rounded-full border-2 border-accent/50 shadow-lg inline-block">
                      4 weeks
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className="bg-emerald-500/90 text-white font-mono text-sm font-bold px-6 py-2 rounded-full shadow-md inline-block"
                    >
                      87% faster
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 