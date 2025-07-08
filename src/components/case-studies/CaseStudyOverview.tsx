"use client";

import { motion } from "framer-motion";
import type { CaseStudyChallenge as CaseStudyChallengeType } from "@/lib/case-studies";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { cn } from "@/lib/utils";

interface CaseStudyChallengeProps {
  data: CaseStudyChallengeType;
}

export default function CaseStudyChallenge({ data }: CaseStudyChallengeProps) {
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
      
      {/* Subtle accent elements */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-accent/3 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/2 rounded-full blur-3xl opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Classic Header Format - Eyebrow/Header/Subheader */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          {/* Eyebrow */}
          <div className="mb-6 sm:mb-8 text-sm font-medium text-foreground/60 tracking-[0.2em] uppercase">
            <span>Phase 01 — Discovery</span>
          </div>
          
          {/* Main Header */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 tracking-tight">
            The Challenge
          </h2>
          
          {/* Subheader */}
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 font-light max-w-3xl mx-auto leading-relaxed">
            Understanding the time-sensitive opportunity and critical constraints that defined the transformation scope
          </p>
          
          <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent/30 mx-auto mt-8" />
        </motion.div>



        {/* Cards Left + Image Right Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Full Width Context Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 mb-12 lg:mb-16"
          >
            <div className="relative group">
              <GlowingEffect 
                variant="default" 
                glow 
                proximity={120}
                disabled={false}
                className="absolute inset-0 rounded-3xl"
              />
              <LiquidGlassCard 
                intensity="strong"
                animated
                className="relative p-10 lg:p-16 group-hover:scale-[1.01] transition-transform duration-700"
                borderRadius="rounded-3xl"
              >
                {/* Enhanced Header with Badge */}
                <div className="flex items-start gap-6 mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-obsidian rounded-2xl flex items-center justify-center shadow-xl">
                      <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-obsidian text-accent border border-obsidian">
                        Situation Analysis
                      </span>
                    </div>
                    <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4 leading-tight">
                      The Transformation Context
                    </h3>
                  </div>
                </div>
                
                {/* Content with Enhanced Typography */}
                <div className="prose prose-lg lg:prose-xl max-w-none">
                  <p className="text-lg lg:text-xl leading-relaxed text-foreground/90 font-light mb-0">
              {data.overview}
            </p>
                </div>
                
                {/* Enhanced decorative elements */}
                <div className="absolute top-10 right-10 w-6 h-6 bg-accent/40 rounded-full animate-pulse opacity-60" />
                <div className="absolute bottom-10 left-10 w-3 h-3 bg-accent/30 rounded-full" />
                <div className="absolute top-1/3 right-8 w-2 h-2 bg-accent/20 rounded-full" />
                <div className="absolute bottom-1/3 left-8 w-1 h-1 bg-accent/25 rounded-full" />
              </LiquidGlassCard>
          </div>
        </motion.div>

          {/* Left Column: Stacked Cards */}
          <div className="space-y-8 lg:space-y-12">
          
            {/* Enhanced Constraint Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            >
              <CardContainer containerClassName="py-0">
                <CardBody className="h-auto w-full">
                  <CardItem
                    translateZ="60"
                    className="w-full"
                  >
                    <div className="relative group">
                      <GlowingEffect 
                        variant="default" 
                        glow 
                        proximity={100}
                        disabled={false}
                        className="absolute inset-0 rounded-3xl"
                      />
                      <div className="relative bg-obsidian/95 backdrop-blur-xl border border-accent/20 rounded-3xl p-8 lg:p-10 group-hover:scale-[1.02] transition-all duration-700 shadow-2xl">
                        <CardItem translateZ="70" className="w-full">
                          {/* Enhanced Header with Large Peach Icon */}
                          <div className="flex items-start gap-6 mb-8">
                            <CardItem translateZ="90">
                              <div className="w-20 h-20 bg-gradient-to-br from-accent via-accent/90 to-accent/70 rounded-3xl flex items-center justify-center shadow-2xl">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                            </CardItem>
                            <CardItem translateZ="80" className="flex-1">
                              <h3 className="font-display text-2xl lg:text-3xl font-semibold text-bone mb-3 leading-tight">
                  The Constraint
                </h3>
                              <p className="text-base text-bone/70 font-medium italic">
                                Timeline limitations defining execution scope
                              </p>
                            </CardItem>
              </div>

                          {/* Enhanced Content */}
                          <CardItem translateZ="50">
                            <div className="relative">
                              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/60 to-accent/30 rounded-full" />
                              <p className="text-lg lg:text-xl leading-relaxed text-bone/90 font-light pl-8">
                {data.constraint}
              </p>
                            </div>
                          </CardItem>
                        </CardItem>

                        {/* Enhanced hover effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl pointer-events-none" />
                      </div>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>

            {/* Enhanced Stakes Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <CardContainer containerClassName="py-0">
                <CardBody className="h-auto w-full">
                  <CardItem
                    translateZ="60"
                    className="w-full"
                  >
                    <div className="relative group">
                      <GlowingEffect 
                        variant="peach" 
                        glow 
                        proximity={100}
                        disabled={false}
                        className="absolute inset-0 rounded-3xl"
                      />
                      <div className="relative bg-obsidian/95 backdrop-blur-xl border border-accent/30 rounded-3xl p-8 lg:p-10 group-hover:scale-[1.02] transition-all duration-700 shadow-2xl">
                        <CardItem translateZ="70" className="w-full">
                          {/* Enhanced Header with Large Peach Icon */}
                          <div className="flex items-start gap-6 mb-8">
                            <CardItem translateZ="90">
                              <div className="w-20 h-20 bg-gradient-to-br from-accent via-accent/90 to-accent/70 rounded-3xl flex items-center justify-center shadow-2xl">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                              </div>
                            </CardItem>
                            <CardItem translateZ="80" className="flex-1">
                              <h3 className="font-display text-2xl lg:text-3xl font-semibold text-bone mb-3 leading-tight">
                                The Stakes
                              </h3>
                              <p className="text-base text-bone/70 font-medium italic">
                                Critical outcomes hanging in the balance
                              </p>
                            </CardItem>
                          </div>

                          {/* Enhanced Content with Urgent Styling */}
                          <CardItem translateZ="50">
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-accent/15 via-accent/8 to-transparent rounded-2xl" />
                              <div className="relative p-6 border-l-4 border-accent">
                                <p className="text-lg lg:text-xl font-semibold leading-relaxed text-accent">
                                  {data.stakes}
                                </p>
                              </div>
                            </div>
                          </CardItem>
                        </CardItem>

                        {/* Enhanced hover effect with peach tint */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl pointer-events-none" />
                      </div>
            </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
          </motion.div>

          </div>

          {/* Right Column: Contextual Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative h-full min-h-[400px] lg:min-h-[500px]"
          >
            <div className="relative group h-full">
              <GlowingEffect 
                variant="default" 
                glow 
                proximity={120}
                disabled={false}
                className="absolute inset-0 rounded-3xl"
              />
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-obsidian/20 to-obsidian/40 backdrop-blur-sm border border-foreground/10 group-hover:scale-[1.01] transition-transform duration-700 h-full">
                {/* Image Container */}
                <div className="h-full relative min-h-[400px] lg:min-h-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-obsidian/60 via-obsidian/40 to-obsidian/60" />
                  <div className="absolute inset-0 bg-[url('/images/boardroom.png')] bg-cover bg-center opacity-80" />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian border border-accent/30 backdrop-blur-sm">
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        <span className="text-xs font-semibold text-accent tracking-wide uppercase">
                          Time-Critical Opportunity
                        </span>
                      </div>
                      <h4 className="font-display text-xl lg:text-2xl font-semibold text-bone leading-tight">
                        One Week to Transform
                        <br />
                        Startup to Investment-Ready
                      </h4>
                      <p className="text-sm text-bone/80 font-light leading-relaxed max-w-sm">
                        From company name and basic logo to multi-million dollar funding presentation in seven days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Enhanced Closing Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20 lg:mt-28"
        >
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-obsidian border border-accent/30 mb-6">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-accent tracking-wide uppercase">
                Next: Discovery Deep-Dive
              </span>
            </div>
            <p className="text-lg lg:text-xl text-foreground/70 font-light leading-relaxed">
              With the challenge context established, the discovery phase begins to uncover the strategic foundations.
              <br className="hidden sm:block" />
              <span className="text-foreground/90 font-medium">Understanding real estate fundamentals and investor expectations.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 