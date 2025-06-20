"use client";

import { motion } from "motion/react";
import type { CaseStudyImplementation as CaseStudyImplementationType } from "@/lib/case-studies";
import { CaseStudyPhase } from "@/lib/case-studies";
import { cn } from "@/lib/utils";

interface CaseStudyImplementationProps {
  data: CaseStudyImplementationType;
}

export default function CaseStudyImplementation({ data }: CaseStudyImplementationProps) {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-background dark:bg-obsidian">
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1.5px,transparent_1.5px),linear-gradient(to_bottom,#e4e4e7_1.5px,transparent_1.5px)]",
          "dark:[background-image:linear-gradient(to_right,#404040_1.5px,transparent_1.5px),linear-gradient(to_bottom,#404040_1.5px,transparent_1.5px)]",
          "opacity-35"
        )}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
              Implementation
            </h2>
          </div>
          
          <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent/30 mx-auto" />
        </motion.div>

        {/* Speed Without Compromise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16 lg:mb-20"
        >
          <div className="relative p-8 lg:p-12 rounded-2xl border border-foreground/10 bg-gradient-to-br from-background to-accent/5 dark:from-obsidian dark:to-accent/5">
            <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-6">
              Speed Without Compromise
            </h3>
            <p className="text-lg lg:text-xl leading-relaxed text-foreground/90 font-light">
              {data.approach}
            </p>
            
            {/* Decorative elements */}
            <div className="absolute top-6 left-6 w-3 h-3 bg-accent rounded-full opacity-60" />
            <div className="absolute bottom-6 right-6 w-2 h-2 bg-accent/60 rounded-full" />
          </div>
        </motion.div>

        {/* Timeline Phases */}
        <div className="space-y-12 lg:space-y-16">
          {data.phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              className="group"
            >
              {/* Phase Header */}
              <div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {index + 1}
                  </span>
                </div>
                
                <div className="flex-1">
                  <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                    {phase.title}
                  </h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {phase.timeline}
                  </div>
                </div>
                
                {/* Progress Line */}
                <div className="hidden lg:block flex-1 h-[1px] bg-gradient-to-r from-accent/50 to-transparent" />
              </div>

              {/* Phase Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ml-18">
                {phase.details.map((detail, detailIndex) => (
                  <motion.div
                    key={detailIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2 + detailIndex * 0.1 }}
                    className="group/detail"
                  >
                    <div className="relative p-6 rounded-2xl border border-foreground/10 bg-background/50 dark:bg-obsidian/50 hover:border-accent/30 transition-all duration-500 h-full">
                      
                      {/* Detail Icon */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="w-full h-[1px] bg-gradient-to-r from-accent/30 to-transparent" />
                      </div>

                      {/* Detail Content */}
                      <p className="text-foreground/80 leading-relaxed text-sm lg:text-base font-light">
                        {detail}
                      </p>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover/detail:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Phase Separator Line */}
              {index < data.phases.length - 1 && (
                <div className="mt-12 lg:mt-16 flex items-center gap-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-accent/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-accent/30 via-accent/10 to-transparent" />
                </div>
              )}

            </motion.div>
          ))}
        </div>

        {/* Key Insight Callout */}
        {data.keyInsight && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-4xl mx-auto mt-20 lg:mt-24"
          >
            <div className="relative p-8 lg:p-12 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10 dark:from-accent/10 dark:to-accent/5">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
                    Key Insight
                  </h4>
                  <p className="text-foreground/80 leading-relaxed text-base lg:text-lg font-light">
                    {data.keyInsight}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Real-time Collaboration Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="max-w-3xl mx-auto mt-16 lg:mt-20 text-center"
        >
          <div className="relative p-6 lg:p-8 rounded-2xl border border-foreground/10 bg-background/50 dark:bg-obsidian/50">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h2m5 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2h10z" />
              </svg>
              <span className="font-medium text-foreground text-sm uppercase tracking-wider">
                Real-time Collaboration
              </span>
            </div>
            <p className="text-foreground/70 text-sm lg:text-base font-light leading-relaxed">
              Daily check-ins during funding sprint, weekly reviews during platform build, immediate feedback integration throughout.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
} 