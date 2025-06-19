"use client";

import { motion } from "motion/react";
import type { CaseStudyChallenge as CaseStudyChallengeType } from "@/lib/case-studies";

interface CaseStudyChallengeProps {
  data: CaseStudyChallengeType;
}

export default function CaseStudyChallenge({ data }: CaseStudyChallengeProps) {
  return (
    <section className="py-20 lg:py-32 bg-background dark:bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            The Challenge
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent/30 mx-auto" />
        </motion.div>

        {/* Main Challenge Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16 lg:mb-20"
        >
          <div className="relative p-8 lg:p-12 rounded-2xl border border-foreground/10 bg-gradient-to-br from-background to-accent/5 dark:from-obsidian dark:to-accent/5">
            <p className="text-lg lg:text-xl leading-relaxed text-foreground/90 font-light">
              {data.overview}
            </p>
            
            {/* Decorative element */}
            <div className="absolute top-6 left-6 w-3 h-3 bg-accent rounded-full opacity-60" />
            <div className="absolute bottom-6 right-6 w-2 h-2 bg-accent/60 rounded-full" />
          </div>
        </motion.div>

        {/* Constraint and Stakes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* The Constraint */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group"
          >
            <div className="relative p-8 lg:p-10 rounded-2xl border border-foreground/10 bg-background/50 dark:bg-obsidian/50 hover:border-accent/30 transition-all duration-500 h-full">
              
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/70 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground">
                  The Constraint
                </h3>
              </div>

              {/* Content */}
              <p className="text-foreground/80 leading-relaxed text-base lg:text-lg font-light">
                {data.constraint}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            </div>
          </motion.div>

          {/* The Stakes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="group"
          >
            <div className="relative p-8 lg:p-10 rounded-2xl border border-foreground/10 bg-background/50 dark:bg-obsidian/50 hover:border-accent/30 transition-all duration-500 h-full">
              
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/70 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground">
                  The Stakes
                </h3>
              </div>

              {/* Content */}
              <p className="text-accent font-medium leading-relaxed text-base lg:text-lg">
                {data.stakes}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
} 