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
        
        {/* Header */}
        <AnimateOnScroll animation="fadeInUp" duration={400}>
          <div className="text-center mb-16 lg:mb-24">
            <div className="mb-6 sm:mb-8 text-sm font-medium text-foreground/60 tracking-[0.2em] uppercase">
              <span>Phase 01 — Discovery</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 tracking-tight">
              {data.title}
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 font-light max-w-3xl mx-auto leading-relaxed">
              Deep market research and strategic positioning to uncover the foundation for transformation
            </p>
            <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent/30 mx-auto mt-8" />
          </div>
        </AnimateOnScroll>

        {/* Timeline Badge */}
        <AnimateOnScroll animation="fadeInUp" delay={100} duration={400}>
          <div className="flex justify-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-obsidian border border-accent/30 rounded-full">
              <div className="w-10 h-10 bg-gradient-to-br from-accent via-accent/90 to-accent/70 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-base font-semibold text-accent tracking-wide">
                {data.timeline}
              </span>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Main Discovery Layout - Balanced */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20 lg:mb-24">
          
          {/* Left Column: Research Methodology Visualization */}
          <AnimateOnScroll animation="fadeInLeft" delay={200} duration={500} className="relative h-full min-h-[400px] lg:min-h-[500px]">
            <div className="relative group h-full">
              <GlowingEffect 
                variant="default" 
                glow 
                proximity={120}
                disabled={false}
                className="absolute inset-0 rounded-3xl"
              />
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-obsidian/20 to-obsidian/40 backdrop-blur-sm border border-foreground/10 group-hover:scale-[1.01] transition-transform duration-500 h-full">
                <div className="h-full relative min-h-[400px] lg:min-h-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-obsidian/60 via-obsidian/40 to-obsidian/60" />
                  <div className={`absolute inset-0 bg-[url('${data.backgroundImage || '/images/strategy-hero.png'}')] bg-cover bg-center opacity-60`} />
                  
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

          {/* Right Column: Discovery Content */}
          <div className="space-y-8">
            <AnimateOnScroll animation="fadeInRight" delay={300} duration={500}>
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
                  className="relative p-8 lg:p-10 group-hover:scale-[1.01] transition-transform duration-500"
                  borderRadius="rounded-3xl"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-12 h-12 bg-obsidian rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-obsidian text-accent border border-obsidian mb-3">
                        Research Findings
                      </span>
                      <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4 leading-tight">
                        What We Uncovered
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-lg lg:text-xl leading-relaxed text-foreground/90 font-light">
                    {data.content}
                  </p>
                </LiquidGlassCard>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Critical Insights - Only First 2 */}
        {data.insights && data.insights.length > 0 && (
          <div className="mb-20 lg:mb-24">
            <AnimateOnScroll animation="fadeInUp" delay={300} duration={400}>
              <div className="text-center mb-12 lg:mb-16">
                <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                  Critical Insights
                </h3>
                <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent/30 mx-auto" />
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {data.insights.slice(0, 2).map((insight, index) => (
                <AnimateOnScroll
                  key={index}
                  animation="fadeInUp"
                  delay={400 + index * 100}
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
                      className="relative p-6 lg:p-8 group-hover:scale-[1.02] transition-all duration-300"
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

                      <p className="text-foreground/90 leading-relaxed text-base lg:text-lg font-light">
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