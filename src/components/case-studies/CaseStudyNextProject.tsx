"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { getAllCaseStudies } from "@/lib/case-studies";
import { cn } from "@/lib/utils";

interface CaseStudyNextProjectProps {
  currentSlug: string;
}

export default function CaseStudyNextProject({ currentSlug }: CaseStudyNextProjectProps) {
  const allCaseStudies = getAllCaseStudies();
  const currentIndex = allCaseStudies.findIndex(study => study.slug === currentSlug);
  const nextProject = allCaseStudies[(currentIndex + 1) % allCaseStudies.length];

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
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Next Project
          </h2>
          
          <Link 
            href={`/case-studies/${nextProject.slug}`}
            className="group block"
          >
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="relative p-8 lg:p-12 rounded-2xl border border-foreground/10 bg-gradient-to-br from-background via-background/95 to-accent/5 dark:from-obsidian/50 dark:via-obsidian/40 dark:to-accent/5 hover:border-accent/30 transition-all duration-500"
            >
              <div className="aspect-video rounded-xl overflow-hidden mb-6">
                <img
                  src={nextProject.hero.image}
                  alt={nextProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                {nextProject.title}
              </h3>
              
              <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                {nextProject.description}
              </p>
              
              <div className="flex items-center justify-center gap-2 text-accent group-hover:gap-4 transition-all duration-300">
                <span className="font-medium">View Case Study</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            </motion.div>
          </Link>

          <div className="pt-8">
            <Link 
              href="/case-studies"
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-accent transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to All Case Studies</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 