"use client";

import { CaseStudyPhase } from "@/lib/case-studies";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { AnimateOnScroll } from "@/components/ui/css-animations";
import { cn } from "@/lib/utils";

interface CaseStudySolutionProps {
  data: CaseStudyPhase;
}

export default function CaseStudySolution({ data }: CaseStudySolutionProps) {
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
              <span>Phase 03 — Solution</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-bone mb-6 tracking-tight">
              {data.title}
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-bone/80 font-light max-w-3xl mx-auto leading-relaxed">
              Transforming strategic blueprints into tangible, high-impact solutions that drive immediate results
            </p>
            <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent/30 mx-auto mt-8" />
          </div>
        </AnimateOnScroll>
          
        {/* Timeline Badge */}
        <AnimateOnScroll animation="fadeInUp" delay={100} duration={400}>
          <div className="flex justify-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-bone/10 border border-bone/20 rounded-full backdrop-blur-sm">
              <div className="w-10 h-10 bg-gradient-to-br from-accent via-accent/90 to-accent/70 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="text-base font-semibold text-accent tracking-wide">
                {data.timeline}
              </span>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Main Solution Strategy */}
        <AnimateOnScroll animation="fadeInUp" delay={200} duration={500} className="mb-20 lg:mb-24">
          <div className="relative group max-w-4xl mx-auto">
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
              <div className="flex items-start gap-6 mb-6">
                <div className="w-12 h-12 bg-bone/10 rounded-xl flex items-center justify-center shadow-lg border border-bone/15">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-bone/10 text-accent border border-bone/15 mb-3">
                    Implementation Strategy
                  </span>
                  <h3 className="font-display text-2xl lg:text-3xl font-semibold text-bone mb-4 leading-tight">
                    {data.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-lg lg:text-xl leading-relaxed text-bone/90 font-light">
                {data.content}
              </p>
            </LiquidGlassCard>
          </div>
        </AnimateOnScroll>

        {/* Solution Implementation Flow - Dynamic Steps */}
        {data.steps && data.steps.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20 lg:mb-24">
            {data.steps.map((step, index) => (
              <AnimateOnScroll key={index} animation="fadeInUp" delay={300 + index * 100} duration={500}>
                <div className="relative group h-full">
                  <GlowingEffect 
                    variant="default" 
                    glow 
                    proximity={100}
                    disabled={false}
                    className="absolute inset-0 rounded-3xl"
                  />
                  <div className="relative bg-bone/5 backdrop-blur-xl border border-bone/15 rounded-3xl p-6 lg:p-8 group-hover:scale-[1.02] transition-all duration-300 shadow-xl h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent via-accent/90 to-accent/70 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      <div className="flex-1 h-[1px] bg-gradient-to-r from-accent/40 to-transparent" />
                    </div>

                    <h4 className="font-display text-xl lg:text-2xl font-semibold text-bone mb-4 leading-tight">
                      {step.title}
                    </h4>
                    <p className="text-bone/80 leading-relaxed text-base lg:text-lg font-light mb-6">
                      {step.description}
                    </p>

                    <div className="h-20 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-accent/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} />
                      </svg>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        )}

        {/* Key Insights - Only if available */}
        {data.insights && data.insights.length > 0 && (
          <div className="mb-20 lg:mb-24">
            <AnimateOnScroll animation="fadeInUp" delay={500} duration={400}>
              <div className="text-center mb-12 lg:mb-16">
                <h3 className="font-display text-2xl lg:text-3xl font-semibold text-bone mb-4">
                  Solution Insights
                </h3>
                <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent/30 mx-auto" />
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {data.insights.slice(0, 2).map((insight, index) => (
                <AnimateOnScroll
                  key={index}
                  animation="fadeInUp"
                  delay={600 + index * 100}
                  duration={400}
                >
                  <div className="relative group">
                    <GlowingEffect 
                      variant="default" 
                      glow 
                      proximity={80}
                      disabled={false}
                      className="absolute inset-0 rounded-2xl"
                    />
                    <LiquidGlassCard
                      intensity="medium"
                      animated
                      className="relative p-6 lg:p-8 group-hover:scale-[1.02] transition-all duration-300 bg-bone/5 border-bone/10"
                      borderRadius="rounded-2xl"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-accent via-accent/90 to-accent/70 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                          <span className="text-white font-bold text-sm">
                            {index + 1}
                          </span>
                        </div>
                        <div className="flex-1 h-[1px] bg-gradient-to-r from-accent/40 to-transparent" />
                      </div>

                      <p className="text-bone/90 leading-relaxed text-base lg:text-lg font-light">
                        {insight}
                      </p>
                    </LiquidGlassCard>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        )}

        {/* Transition to Next Phase */}
        <AnimateOnScroll animation="fadeInUp" delay={600} duration={400} className="text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-bone/10 border border-bone/20 mb-6 backdrop-blur-sm">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-accent tracking-wide uppercase">
              Next: Implementation
            </span>
          </div>
          <p className="text-lg lg:text-xl text-bone/70 font-light leading-relaxed max-w-3xl mx-auto">
            With solution architecture defined, the implementation phase brings strategy to life through rapid execution.
          </p>
        </AnimateOnScroll>

      </div>
    </section>
  );
} 