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
      description: "Multiple stakeholder interviews, extensive market research, competitive analysis, user surveys, data collection..."
    },
    nextstage: {
      phase: "Rapid Discovery",
      duration: "3 days",
      description: "Strategic clarity through focused stakeholder alignment and targeted market insights."
    }
  },
  {
    traditional: {
      phase: "Strategy Development",
      duration: "6-8 weeks", 
      description: "Lengthy workshops, multiple revisions, committee reviews, approval cycles, documentation phases..."
    },
    nextstage: {
      phase: "Strategy Sprint",
      duration: "5 days",
      description: "Executable strategy with clear priorities and immediate action items."
    }
  },
  {
    traditional: {
      phase: "Design & Prototyping",
      duration: "8-12 weeks",
      description: "Wireframing, multiple design iterations, stakeholder feedback loops, revisions, more revisions..."
    },
    nextstage: {
      phase: "Design Execution",
      duration: "1 week",
      description: "Production-ready design system with pixel-perfect implementation.",
      highlight: true
    }
  },
  {
    traditional: {
      phase: "Development & Testing",
      duration: "12-16 weeks",
      description: "Waterfall development, separate testing phases, bug fixes, more testing, deployment delays..."
    },
    nextstage: {
      phase: "Rapid Development",
      duration: "2 weeks",
      description: "Concurrent development with integrated testing and seamless deployment."
    }
  }
];

export default function SpeedProof() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-bone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="mb-6 sm:mb-8 text-xs sm:text-sm font-medium text-obsidian/60 tracking-[0.2em] uppercase">
            <span>The difference</span>
          </div>
          
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              Speed without compromise
            </span>
          </h2>
          <p className="text-base sm:text-lg text-obsidian/80 font-light max-w-2xl mx-auto">
            When strategy, design, and technology move as one, everything accelerates.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Column Headers */}
          <div className="grid grid-cols-2 gap-8 lg:gap-16 mb-12 sm:mb-16">
            <div>
              <h3 className="font-display text-lg sm:text-xl text-obsidian font-semibold mb-2">
                Traditional Approach
              </h3>
              <div className="h-px bg-gray-300"></div>
            </div>
            <div>
              <h3 className="font-display text-lg sm:text-xl text-obsidian font-semibold mb-2">
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
                      <h4 className="font-display text-base sm:text-lg text-obsidian font-semibold">
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
                    
                    <p className="text-sm text-obsidian/90 leading-relaxed font-medium">
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
                      <h4 className="font-display text-base sm:text-lg text-obsidian font-semibold">
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
                      <p className="text-sm text-obsidian/90 leading-relaxed font-medium">
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

          {/* Summary */}
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
                  <h4 className="font-display text-base sm:text-lg text-obsidian font-semibold">
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
                  <h4 className="font-display text-base sm:text-lg text-obsidian font-semibold">
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
      </div>
    </section>
  );
} 