"use client";

import type { CaseStudyImplementation as CaseStudyImplementationType } from "@/lib/case-studies";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { AnimateOnScroll } from "@/components/ui/css-animations";
import { Timeline } from "@/components/ui/timeline";
import { cn } from "@/lib/utils";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface CaseStudyImplementationProps {
  data: CaseStudyImplementationType;
}

export default function CaseStudyImplementation({ data }: CaseStudyImplementationProps) {
  // Transform the implementation data into timeline entries
  const timelineData: TimelineEntry[] = data.phases.map((phase, index) => ({
    title: phase.title,
    content: (
      <div className="space-y-6">
        {/* Timeline Duration Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-obsidian/90 text-accent rounded-full text-xs font-medium border border-accent/20 shadow-sm mb-4">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{phase.timeline}</span>
        </div>

        {/* Simplified Details */}
        <div className="space-y-4">
          {phase.details.slice(0, 2).map((detail, detailIndex) => (
            <div key={detailIndex} className="group/detail relative">
              <div className="relative">
                <GlowingEffect 
                  variant="default" 
                  glow 
                  proximity={80}
                  disabled={false}
                  className="absolute inset-0 rounded-xl"
                />
                <LiquidGlassCard
                  intensity="medium"
                  animated
                  className="relative p-4 group-hover/detail:scale-[1.01] transition-all duration-300 border border-obsidian/10"
                  borderRadius="rounded-xl"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-obsidian/90 leading-relaxed text-base font-medium">
                      {detail}
                    </p>
                  </div>
                </LiquidGlassCard>
              </div>
            </div>
          ))}
        </div>

        {/* Key Insight - Only for last phase */}
        {index === data.phases.length - 1 && data.keyInsight && (
          <div className="mt-6">
            <div className="relative">
              <GlowingEffect 
                variant="default" 
                glow 
                proximity={100}
                disabled={false}
                className="absolute inset-0 rounded-xl"
              />
              <div className="relative p-4 rounded-xl border border-accent/30 bg-gradient-to-br from-accent/10 to-accent/5 shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-obsidian mb-2">
                      Key Insight
                    </h4>
                    <p className="text-obsidian/90 leading-relaxed text-base font-medium">
                      {data.keyInsight}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    ),
  }));

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1.5px,transparent_1.5px),linear-gradient(to_bottom,#e4e4e7_1.5px,transparent_1.5px)]",
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
            <div className="mb-6 sm:mb-8 text-sm font-medium text-obsidian/70 tracking-[0.2em] uppercase">
              <span>Phase 04 — Implementation</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-obsidian mb-6 tracking-tight">
              Execution Timeline
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-obsidian/80 font-light max-w-3xl mx-auto leading-relaxed">
              {data.approach}
            </p>
            <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent/30 mx-auto mt-8" />
          </div>
        </AnimateOnScroll>

        {/* Timeline */}
        <div className="mt-8 lg:mt-12">
          <Timeline data={timelineData} />
        </div>

        {/* Transition to Next Phase */}
        <AnimateOnScroll animation="fadeInUp" delay={300} duration={400} className="text-center mt-16 lg:mt-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-obsidian border border-accent/30 mb-6">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-accent tracking-wide uppercase">
              Next: Results & Impact
            </span>
          </div>
          <p className="text-lg lg:text-xl text-obsidian/80 font-light leading-relaxed max-w-3xl mx-auto">
            With implementation complete, the results phase reveals the tangible impact and measurable outcomes.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
} 