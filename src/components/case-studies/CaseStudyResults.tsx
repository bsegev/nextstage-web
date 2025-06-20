"use client";

import { motion } from "motion/react";
import { CaseStudyResults as CaseStudyResultsType } from "@/lib/case-studies";
import { cn } from "@/lib/utils";

interface CaseStudyResultsProps {
  data: CaseStudyResultsType;
}

export default function CaseStudyResults({ data }: CaseStudyResultsProps) {
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
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Results That Matter
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent/30 mx-auto" />
        </motion.div>

        {/* Immediate Results */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-8 text-center"
          >
            Immediate Impact
          </motion.h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {data.immediate.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative p-6 lg:p-8 rounded-2xl border border-foreground/10 bg-background/50 dark:bg-obsidian/50 hover:border-accent/30 transition-all duration-500 h-full">
                  
                  {/* Metric Name */}
                  <h4 className="font-display text-lg lg:text-xl font-semibold text-accent mb-3">
                    {result.metric}
                  </h4>

                  {/* Impact Description */}
                  <p className="text-foreground/80 text-sm lg:text-base leading-relaxed">
                    {result.impact}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Long-term Results */}
        <div className="mb-16 lg:mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-8 text-center"
          >
            Long-term Value
          </motion.h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {data.longTerm.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                className="group"
              >
                <div className="relative p-6 lg:p-8 rounded-2xl border border-foreground/10 bg-background/50 dark:bg-obsidian/50 hover:border-accent/30 transition-all duration-500 h-full">
                  
                  {/* Metric Name */}
                  <h4 className="font-display text-lg lg:text-xl font-semibold text-accent mb-3">
                    {result.metric}
                  </h4>

                  {/* Impact Description */}
                  <p className="text-foreground/80 text-sm lg:text-base leading-relaxed">
                    {result.impact}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        {data.testimonial && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="relative p-8 lg:p-12 rounded-2xl border border-foreground/10 bg-background/50 dark:bg-obsidian/50">
              <blockquote className="text-xl lg:text-2xl leading-relaxed text-foreground/90 font-light italic mb-8">
                &ldquo;We started with just a name and a logo. Within a week, we had a polished investor deck for a live deal, and shortly after, a full website with custom components, clear messaging, and visuals that actually looked and felt like us. What really made the difference was working with someone who understands real estate. It wasn&rsquo;t just design, it was strategy, storytelling, and execution all rolled into one.&rdquo;
              </blockquote>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                <div className="font-medium text-foreground">{data.testimonial.author}</div>
                <div className="hidden sm:block w-1 h-1 bg-foreground/30 rounded-full" />
                <div className="text-foreground/60">{data.testimonial.title}</div>
                <div className="hidden sm:block w-1 h-1 bg-foreground/30 rounded-full" />
                <div className="text-accent font-medium">{data.testimonial.company}</div>
              </div>
              
              {/* Decorative Quote Marks */}
              <div className="absolute top-4 left-4 w-8 h-8 text-accent/20 text-4xl font-serif">&ldquo;</div>
              <div className="absolute bottom-4 right-4 w-8 h-8 text-accent/20 text-4xl font-serif rotate-180">&rdquo;</div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
} 