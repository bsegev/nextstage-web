"use client";

import { motion } from "motion/react";
import { CaseStudyPhase } from "@/lib/case-studies";
import { cn } from "@/lib/utils";

interface CaseStudyPlanningProps {
  data: CaseStudyPhase;
}

export default function CaseStudyPlanning({ data }: CaseStudyPlanningProps) {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
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

        {/* Strategic Framework */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16 lg:mb-20"
        >
          <div className="relative p-8 lg:p-12 rounded-2xl border border-foreground/10 bg-gradient-to-br from-background to-accent/5 dark:from-obsidian dark:to-accent/5">
            <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-6">
              Strategic Framework
            </h3>
            <p className="text-lg lg:text-xl leading-relaxed text-foreground/90 font-light">
              {data.content}
            </p>
            
            {/* Decorative elements */}
            <div className="absolute top-6 left-6 w-3 h-3 bg-accent rounded-full opacity-60" />
            <div className="absolute bottom-6 right-6 w-2 h-2 bg-accent/60 rounded-full" />
          </div>
        </motion.div>

        {/* Deliverables Grid */}
        {data.deliverables && data.deliverables.length > 0 && (
          <div className="space-y-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-display text-2xl lg:text-3xl font-semibold text-foreground text-center mb-12"
            >
              Key Deliverables
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {data.deliverables.map((deliverable, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="group"
                >
                  <div className="relative p-6 lg:p-8 rounded-2xl border border-foreground/10 bg-background/50 dark:bg-obsidian/50 hover:border-accent/30 transition-all duration-500 h-full">
                    
                    {/* Deliverable Icon and Number */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {index + 1}
                        </span>
                      </div>
                      <div className="flex-1 h-[1px] bg-gradient-to-r from-accent/50 to-transparent" />
                    </div>

                    {/* Deliverable Content */}
                    <p className="text-foreground/80 leading-relaxed text-base lg:text-lg font-medium">
                      {deliverable}
                    </p>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Three Pillar Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 lg:mt-24"
        >
          <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground text-center mb-12">
            Three-Pillar Architecture
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Technology Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="group text-center"
            >
              <div className="relative p-8 lg:p-10 rounded-2xl border border-foreground/10 bg-background/50 dark:bg-obsidian/50 hover:border-accent/30 transition-all duration-500 h-full">
                
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>

                <h4 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
                  Technology Architecture
                </h4>
                <p className="text-foreground/70 leading-relaxed text-sm lg:text-base font-light">
                  Rapid deployment website with investor-grade presentation and template systems for ongoing communications.
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              </div>
            </motion.div>

            {/* Brand System */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="group text-center"
            >
              <div className="relative p-8 lg:p-10 rounded-2xl border border-foreground/10 bg-background/50 dark:bg-obsidian/50 hover:border-accent/30 transition-all duration-500 h-full">
                
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z" />
                  </svg>
                </div>

                <h4 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
                  Brand System
                </h4>
                <p className="text-foreground/70 leading-relaxed text-sm lg:text-base font-light">
                  Visual identity system scalable from pitch deck to full marketing suite with consistent brand application.
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              </div>
            </motion.div>

            {/* Success Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="group text-center"
            >
              <div className="relative p-8 lg:p-10 rounded-2xl border border-foreground/10 bg-background/50 dark:bg-obsidian/50 hover:border-accent/30 transition-all duration-500 h-full">
                
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>

                <h4 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
                  Success Metrics
                </h4>
                <p className="text-foreground/70 leading-relaxed text-sm lg:text-base font-light">
                  Investor meeting conversion rate, funding timeline acceleration, and brand recognition in target markets.
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
} 