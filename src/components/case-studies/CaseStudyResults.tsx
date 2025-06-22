"use client";

import { CaseStudyResults as CaseStudyResultsType } from "@/lib/case-studies";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { AnimateOnScroll } from "@/components/ui/css-animations";
import { cn } from "@/lib/utils";

interface CaseStudyResultsProps {
  data: CaseStudyResultsType;
}

export default function CaseStudyResults({ data }: CaseStudyResultsProps) {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-obsidian">
      {/* Light Grid Background for contrast */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1.5px,transparent_1.5px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1.5px,transparent_1.5px)]",
          "opacity-40"
        )}
      />
      
      {/* Subtle accent elements */}
      <div className="absolute top-32 left-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-32 right-1/4 w-64 h-64 bg-accent/4 rounded-full blur-3xl opacity-40" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimateOnScroll animation="fadeInUp" duration={400}>
          <div className="text-center mb-16 lg:mb-24">
            <div className="mb-6 sm:mb-8 text-sm font-medium text-bone/60 tracking-[0.2em] uppercase">
              <span>Phase 05 — Results</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-bone mb-6 tracking-tight">
            Results That Matter
          </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-bone/80 font-light max-w-3xl mx-auto leading-relaxed">
              Measurable impact and tangible outcomes that validate strategic execution
            </p>
            <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent/30 mx-auto mt-8" />
          </div>
        </AnimateOnScroll>

        {/* Immediate Results */}
        <div className="mb-20 lg:mb-24">
          <AnimateOnScroll animation="fadeInUp" delay={100} duration={400}>
            <div className="text-center mb-12 lg:mb-16">
              <h3 className="font-display text-2xl lg:text-3xl font-semibold text-bone mb-4">
            Immediate Impact
              </h3>
              <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent/30 mx-auto" />
            </div>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {data.immediate.map((result, index) => (
              <AnimateOnScroll
                key={index}
                animation="fadeInUp"
                delay={200 + index * 100}
                duration={500}
              >
                <div className="relative group h-full">
                  <GlowingEffect 
                    variant="default" 
                    glow 
                    proximity={100}
                    disabled={false}
                    className="absolute inset-0 rounded-2xl"
                  />
                  <LiquidGlassCard
                    intensity="medium"
                    animated
                    className="relative p-6 lg:p-8 group-hover:scale-[1.02] transition-all duration-300 bg-bone/5 border-bone/10 h-full"
                    borderRadius="rounded-2xl"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-accent via-accent/90 to-accent/70 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="flex-1 h-[1px] bg-gradient-to-r from-accent/40 to-transparent mt-5" />
                    </div>
                  
                  {/* Metric Name */}
                  <h4 className="font-display text-lg lg:text-xl font-semibold text-accent mb-3">
                    {result.metric}
                  </h4>

                  {/* Impact Description */}
                    <p className="text-bone/80 text-sm lg:text-base leading-relaxed font-light">
                    {result.impact}
                  </p>
                  </LiquidGlassCard>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Long-term Results */}
        <div className="mb-20 lg:mb-24">
          <AnimateOnScroll animation="fadeInUp" delay={300} duration={400}>
            <div className="text-center mb-12 lg:mb-16">
              <h3 className="font-display text-2xl lg:text-3xl font-semibold text-bone mb-4">
            Long-term Value
              </h3>
              <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent/30 mx-auto" />
            </div>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {data.longTerm.map((result, index) => (
              <AnimateOnScroll
                key={index}
                animation="fadeInUp"
                delay={400 + index * 100}
                duration={500}
              >
                <div className="relative group h-full">
                  <GlowingEffect 
                    variant="default" 
                    glow 
                    proximity={100}
                    disabled={false}
                    className="absolute inset-0 rounded-2xl"
                  />
                  <LiquidGlassCard
                    intensity="medium"
                    animated
                    className="relative p-6 lg:p-8 group-hover:scale-[1.02] transition-all duration-300 bg-bone/5 border-bone/10 h-full"
                    borderRadius="rounded-2xl"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-accent via-accent/90 to-accent/70 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="flex-1 h-[1px] bg-gradient-to-r from-accent/40 to-transparent mt-5" />
                    </div>
                  
                  {/* Metric Name */}
                  <h4 className="font-display text-lg lg:text-xl font-semibold text-accent mb-3">
                    {result.metric}
                  </h4>

                  {/* Impact Description */}
                    <p className="text-bone/80 text-sm lg:text-base leading-relaxed font-light">
                    {result.impact}
                  </p>
                  </LiquidGlassCard>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        {data.testimonial && (
          <AnimateOnScroll animation="fadeInUp" delay={500} duration={500} className="mb-16 lg:mb-20">
            <div className="max-w-4xl mx-auto">
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
                  className="relative p-8 lg:p-12 group-hover:scale-[1.01] transition-transform duration-500 bg-bone/5 border-bone/10"
                  borderRadius="rounded-3xl"
                >
                  <div className="text-center">
                    {/* Quote Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-accent via-accent/90 to-accent/70 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-8">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                    </div>

                    <blockquote className="text-xl lg:text-2xl leading-relaxed text-bone/90 font-light italic mb-8">
                      &ldquo;{data.testimonial.quote}&rdquo;
              </blockquote>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                      <div className="font-medium text-bone">{data.testimonial.author}</div>
                      <div className="hidden sm:block w-1 h-1 bg-bone/30 rounded-full" />
                      <div className="text-bone/60">{data.testimonial.title}</div>
                      <div className="hidden sm:block w-1 h-1 bg-bone/30 rounded-full" />
                <div className="text-accent font-medium">{data.testimonial.company}</div>
                    </div>
                  </div>
                </LiquidGlassCard>
              </div>
            </div>
          </AnimateOnScroll>
        )}

        {/* Closing Section */}
        <AnimateOnScroll animation="fadeInUp" delay={600} duration={400} className="text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-bone/10 border border-bone/20 mb-6 backdrop-blur-sm">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-accent tracking-wide uppercase">
              Transformation Complete
            </span>
          </div>
          <p className="text-lg lg:text-xl text-bone/70 font-light leading-relaxed max-w-3xl mx-auto">
            From challenge to solution to measurable impact—strategic execution that delivers results.
          </p>
        </AnimateOnScroll>

      </div>
    </section>
  );
} 