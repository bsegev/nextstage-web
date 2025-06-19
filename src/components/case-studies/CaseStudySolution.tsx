"use client";

import { motion } from "motion/react";
import { CaseStudyPhase } from "@/lib/case-studies";

interface CaseStudySolutionProps {
  data: CaseStudyPhase;
}

export default function CaseStudySolution({ data }: CaseStudySolutionProps) {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-accent/5 via-background to-background dark:from-accent/5 dark:via-obsidian dark:to-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/70 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
              {data.title}
            </h2>
          </div>
          
          {/* Timeline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {data.timeline}
          </div>
          
          <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent/30 mx-auto" />
        </motion.div>

        {/* Reverse Engineering Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16 lg:mb-20"
        >
          <div className="relative p-8 lg:p-12 rounded-2xl border border-foreground/10 bg-background/80 dark:bg-obsidian/80 backdrop-blur-sm">
            <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-6">
              The Reverse-Engineering Approach
            </h3>
            <p className="text-lg lg:text-xl leading-relaxed text-foreground/90 font-light mb-6">
              {data.content}
            </p>
            
            {/* Key Innovation Callout */}
            <div className="relative p-6 bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl border border-accent/20">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-foreground/90 font-medium text-base lg:text-lg">
                  High-leverage deliverable becomes brand foundation.
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-6 left-6 w-3 h-3 bg-accent rounded-full opacity-60" />
            <div className="absolute bottom-6 right-6 w-2 h-2 bg-accent/60 rounded-full" />
          </div>
        </motion.div>

        {/* Solution Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16 lg:mb-20"
        >
          <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground text-center mb-12">
            Integration Approach
          </h3>
          
          {/* Flow Visualization */}
          <div className="relative">
            {/* Flow Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center group"
              >
                <div className="relative p-6 rounded-2xl border border-foreground/10 bg-background/50 dark:bg-obsidian/50 hover:border-accent/30 transition-all duration-500">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                    Pitch Deck Requirements
                  </h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Market-critical deliverable drives design decisions
                  </p>
                </div>
              </motion.div>

              {/* Arrow 1 */}
              <div className="hidden lg:flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="w-8 h-8 text-accent/60"
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center group"
              >
                <div className="relative p-6 rounded-2xl border border-foreground/10 bg-background/50 dark:bg-obsidian/50 hover:border-accent/30 transition-all duration-500">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                    Brand Identity Development
                  </h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Visual and verbal identity emerges through execution
                  </p>
                </div>
              </motion.div>

              {/* Arrow 2 */}
              <div className="hidden lg:flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="w-8 h-8 text-accent/60"
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-center group"
              >
                <div className="relative p-6 rounded-2xl border border-foreground/10 bg-background/50 dark:bg-obsidian/50 hover:border-accent/30 transition-all duration-500">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                    Visual Consistency
                  </h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Proven aesthetics scale across all platforms
                  </p>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center group md:col-span-2 lg:col-span-1"
              >
                <div className="relative p-6 rounded-2xl border border-foreground/10 bg-background/50 dark:bg-obsidian/50 hover:border-accent/30 transition-all duration-500">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                    Operational Templates
                  </h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Standards maintain consistency at scale
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>

        {/* Key Insights */}
        {data.insights && data.insights.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground text-center mb-12">
              Solution Insights
            </h3>
            
            <div className="space-y-6">
              {data.insights.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="group"
                >
                  <div className="relative p-6 lg:p-8 rounded-2xl border border-foreground/10 bg-background/50 dark:bg-obsidian/50 hover:border-accent/30 transition-all duration-500">
                    
                    {/* Insight Arrow */}
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                      <p className="text-foreground/80 leading-relaxed text-base lg:text-lg font-light">
                        {insight}
                      </p>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
} 