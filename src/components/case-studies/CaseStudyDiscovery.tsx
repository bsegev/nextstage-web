"use client";

import { CaseStudyPhase } from "@/lib/case-studies";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { AnimateOnScroll } from "@/components/ui/css-animations";
import { cn } from "@/lib/utils";

interface CaseStudyDiscoveryProps {
  data: CaseStudyPhase;
}

export default function CaseStudyDiscovery({ data }: CaseStudyDiscoveryProps) {
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
      <div className="absolute top-32 right-1/4 w-80 h-80 bg-accent/2 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-32 left-1/4 w-64 h-64 bg-accent/3 rounded-full blur-3xl opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Classic Header Format - Eyebrow/Header/Subheader */}
        <AnimateOnScroll animation="fadeInUp" duration={400}>
          <div className="text-center mb-16 lg:mb-24">
            {/* Eyebrow */}
            <div className="mb-6 sm:mb-8 text-sm font-medium text-foreground/60 tracking-[0.2em] uppercase">
              <span>Phase 01 — Discovery</span>
            </div>
            
            {/* Main Header */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 tracking-tight">
              {data.title}
            </h2>
            
            {/* Subheader */}
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 font-light max-w-3xl mx-auto leading-relaxed">
              Deep market research and strategic positioning to uncover the foundation for transformation
            </p>
            
            <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent/30 mx-auto mt-8" />
          </div>
        </AnimateOnScroll>

        {/* Timeline Badge - Prominent Placement */}
        <AnimateOnScroll animation="fadeInUp" delay={100} duration={400}>
          <div className="flex justify-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-obsidian border border-accent/30 rounded-full">
              <div className="w-10 h-10 bg-gradient-to-br from-accent via-accent/90 to-accent/70 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-base font-semibold text-accent tracking-wide">
                {data.timeline}
              </span>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Main Discovery Layout - Balanced like Challenge */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Full Width Main Discovery Content */}
          <AnimateOnScroll animation="fadeInUp" delay={200} duration={500} className="lg:col-span-2 mb-12 lg:mb-16">
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
                className="relative p-10 lg:p-16 group-hover:scale-[1.01] transition-transform duration-500"
                borderRadius="rounded-3xl"
              >
                {/* Header with Discovery Icon */}
                <div className="flex items-start gap-6 mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-obsidian rounded-2xl flex items-center justify-center shadow-xl">
                      <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-obsidian text-accent border border-obsidian">
                        Research Findings
                      </span>
                    </div>
                    <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4 leading-tight">
                      What We Uncovered
                    </h3>
                  </div>
                </div>
                
                {/* Main Content */}
                <div className="prose prose-lg lg:prose-xl max-w-none">
                  <p className="text-lg lg:text-xl leading-relaxed text-foreground/90 font-light mb-0">
                    {data.content}
                  </p>
                </div>
                
                {/* Enhanced decorative elements - different pattern */}
                <div className="absolute top-10 right-10 w-4 h-4 bg-accent/30 rounded-full opacity-60" />
                <div className="absolute bottom-10 left-10 w-5 h-5 bg-accent/40 rounded-full animate-pulse opacity-50" />
                <div className="absolute top-1/4 right-8 w-2 h-2 bg-accent/25 rounded-full" />
                <div className="absolute bottom-1/4 left-8 w-3 h-3 bg-accent/35 rounded-full" />
              </LiquidGlassCard>
            </div>
          </AnimateOnScroll>

          {/* Left Column: Research Methodology Visualization */}
          <AnimateOnScroll animation="fadeInLeft" delay={300} duration={500} className="relative h-full min-h-[400px] lg:min-h-[500px]">
            <div className="relative group h-full">
              <GlowingEffect 
                variant="default" 
                glow 
                proximity={120}
                disabled={false}
                className="absolute inset-0 rounded-3xl"
              />
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-obsidian/20 to-obsidian/40 backdrop-blur-sm border border-foreground/10 group-hover:scale-[1.01] transition-transform duration-500 h-full">
                {/* Research Visualization Container */}
                <div className="h-full relative min-h-[400px] lg:min-h-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-obsidian/60 via-obsidian/40 to-obsidian/60" />
                  <div className="absolute inset-0 bg-[url('/images/strategy-hero.png')] bg-cover bg-center opacity-60" />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian border border-accent/30 backdrop-blur-sm">
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        <span className="text-xs font-semibold text-accent tracking-wide uppercase">
                          Market Research
                        </span>
                      </div>
                      <h4 className="font-display text-xl lg:text-2xl font-semibold text-bone leading-tight">
                        Deep Market Analysis
                        <br />
                        Strategic Positioning
                      </h4>
                      <p className="text-sm text-bone/80 font-light leading-relaxed max-w-sm">
                        Comprehensive investor landscape analysis and competitive positioning research to establish market differentiation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right Column: Critical Insights */}
          {data.insights && data.insights.length > 0 && (
            <div className="space-y-6 lg:space-y-8">
              <AnimateOnScroll animation="fadeInRight" delay={400} duration={400}>
                <div className="mb-8">
                  <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                    Critical Insights
                  </h3>
                  <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent/30" />
                </div>
              </AnimateOnScroll>

              <div className="space-y-6 lg:space-y-8">
                {data.insights.map((insight, index) => (
                  <AnimateOnScroll
                    key={index}
                    animation="fadeInRight"
                    delay={500 + index * 100}
                    duration={400}
                    className="w-full"
                  >
                    <div className="relative group w-full">
                      <GlowingEffect 
                        variant="default" 
                        glow 
                        proximity={80}
                        disabled={false}
                        className="absolute inset-0 rounded-2xl"
                      />
                      <div className="relative bg-obsidian/90 backdrop-blur-xl border border-accent/15 rounded-2xl p-6 lg:p-8 group-hover:scale-[1.02] transition-all duration-300 shadow-xl">
                        {/* Insight Number with Icon */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-accent via-accent/90 to-accent/70 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                            <span className="text-white font-bold text-sm">
                              {index + 1}
                            </span>
                          </div>
                          <div className="flex-1 h-[1px] bg-gradient-to-r from-accent/40 to-transparent" />
                        </div>

                        {/* Insight Content */}
                        <p className="text-bone/90 leading-relaxed text-base lg:text-lg font-light">
                          {insight}
                        </p>

                        {/* Subtle hover effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Strategic Foundation - Key Outcome */}
        <AnimateOnScroll animation="fadeInUp" delay={600} duration={500} className="mt-16 lg:mt-20">
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
              className="relative p-10 lg:p-16 group-hover:scale-[1.01] transition-transform duration-500"
              borderRadius="rounded-3xl"
            >
              {/* Header with lightbulb icon */}
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-obsidian rounded-2xl flex items-center justify-center shadow-xl">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-obsidian text-accent border border-obsidian">
                      Strategic Foundation
                    </span>
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4 leading-tight">
                    Market Positioning Strategy
                  </h3>
                </div>
              </div>
              
              {/* Strategy Content */}
              <div className="prose prose-lg lg:prose-xl max-w-none mb-8">
                <p className="text-lg lg:text-xl leading-relaxed text-foreground/90 font-light mb-6">
                  Position as experienced operators with deep market insight, not just another development play.
                </p>
                <p className="text-base lg:text-lg leading-relaxed text-foreground/80 font-light mb-0">
                  This foundation became the cornerstone for all subsequent brand and marketing decisions.
                </p>
              </div>

              {/* Impact Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-foreground/10">
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h5 className="font-semibold text-foreground mb-1">Market Differentiation</h5>
                  <p className="text-sm text-foreground/60">Clear positioning vs competitors</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h5 className="font-semibold text-foreground mb-1">Investor Appeal</h5>
                  <p className="text-sm text-foreground/60">Resonates with funding criteria</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h5 className="font-semibold text-foreground mb-1">Brand Foundation</h5>
                  <p className="text-sm text-foreground/60">Strategic direction for execution</p>
                </div>
              </div>
              
              {/* Consistent decorative elements */}
              <div className="absolute top-10 right-10 w-4 h-4 bg-accent/30 rounded-full opacity-60" />
              <div className="absolute bottom-10 left-10 w-5 h-5 bg-accent/40 rounded-full animate-pulse opacity-50" />
              <div className="absolute top-1/4 right-8 w-2 h-2 bg-accent/25 rounded-full" />
              <div className="absolute bottom-1/4 left-8 w-3 h-3 bg-accent/35 rounded-full" />
            </LiquidGlassCard>
          </div>
        </AnimateOnScroll>

        {/* Transition to Next Phase */}
        <AnimateOnScroll animation="fadeInUp" delay={700} duration={400} className="text-center mt-16 lg:mt-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-obsidian border border-accent/30 mb-6">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-accent tracking-wide uppercase">
              Next: Strategic Planning
            </span>
          </div>
          <p className="text-lg lg:text-xl text-foreground/70 font-light leading-relaxed max-w-3xl mx-auto">
            With market insights established, the planning phase transforms research into actionable strategy.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
} 