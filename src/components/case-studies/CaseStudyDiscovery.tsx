"use client";

import { motion } from "motion/react";
import { CaseStudyPhase } from "@/lib/case-studies";

interface CaseStudyDiscoveryProps {
  data: CaseStudyPhase;
}

export default function CaseStudyDiscovery({ data }: CaseStudyDiscoveryProps) {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16 lg:mb-20"
        >
          <div className="relative p-8 lg:p-12 rounded-2xl border border-foreground/10 bg-background/80 dark:bg-obsidian/80 backdrop-blur-sm">
            <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-6">
              What we uncovered:
            </h3>
            <p className="text-lg lg:text-xl leading-relaxed text-foreground/90 font-light">
              {data.content}
            </p>
            
            {/* Decorative elements */}
            <div className="absolute top-6 left-6 w-3 h-3 bg-accent rounded-full opacity-60" />
            <div className="absolute bottom-6 right-6 w-2 h-2 bg-accent/60 rounded-full" />
          </div>
        </motion.div>

        {/* Insights Grid */}
        {data.insights && data.insights.length > 0 && (
          <div className="space-y-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-display text-2xl lg:text-3xl font-semibold text-foreground text-center mb-12"
            >
              Critical Insights
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {data.insights.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="group"
                >
                  <div className="relative p-6 lg:p-8 rounded-2xl border border-foreground/10 bg-background/50 dark:bg-obsidian/50 hover:border-accent/30 transition-all duration-500 h-full">
                    
                    {/* Insight Number */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg flex items-center justify-center">
                        <span className="text-accent font-semibold text-sm">
                          {index + 1}
                        </span>
                      </div>
                      <div className="w-full h-[1px] bg-gradient-to-r from-accent/30 to-transparent" />
                    </div>

                    {/* Insight Content */}
                    <p className="text-foreground/80 leading-relaxed text-base lg:text-lg font-light">
                      {insight}
                    </p>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Strategic Foundation Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-4xl mx-auto mt-16 lg:mt-20"
        >
          <div className="relative p-8 lg:p-12 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10 dark:from-accent/10 dark:to-accent/5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h4 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3">
                  Strategic Foundation
                </h4>
                <p className="text-foreground/80 leading-relaxed text-base lg:text-lg font-light">
                  Position as experienced operators with deep market insight, not just another development play.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
} 