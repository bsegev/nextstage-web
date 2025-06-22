"use client";
import { CaseStudyPhase } from "@/lib/case-studies";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { AnimateOnScroll } from "@/components/ui/css-animations";
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
      
      {/* Subtle accent elements */}
      <div className="absolute top-32 right-1/4 w-80 h-80 bg-accent/2 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-32 left-1/4 w-64 h-64 bg-accent/3 rounded-full blur-3xl opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimateOnScroll animation="fadeInUp" duration={400}>
          <div className="text-center mb-16 lg:mb-24">
            <div className="mb-6 sm:mb-8 text-sm font-medium text-foreground/60 tracking-[0.2em] uppercase">
              <span>Phase 02 — Planning</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 tracking-tight">
              {data.title}
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 font-light max-w-3xl mx-auto leading-relaxed">
              Transforming research insights into a comprehensive strategic blueprint for execution
            </p>
            <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent/30 mx-auto mt-8" />
          </div>
        </AnimateOnScroll>

        {/* Timeline Badge */}
        <AnimateOnScroll animation="fadeInUp" delay={100} duration={400}>
          <div className="flex justify-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-obsidian border border-accent/30 rounded-full">
              <div className="w-10 h-10 bg-gradient-to-br from-accent via-accent/90 to-accent/70 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <span className="text-base font-semibold text-accent tracking-wide">
                {data.timeline}
              </span>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Main Planning Layout - Balanced */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20 lg:mb-24">

          {/* Left Column: Planning Visualization */}
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
                  <div className="absolute inset-0 bg-[url('/images/meeting-room-2.png')] bg-cover bg-center opacity-70" />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian border border-accent/30 backdrop-blur-sm">
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        <span className="text-xs font-semibold text-accent tracking-wide uppercase">
                          Strategic Planning
                        </span>
                      </div>
                      <h4 className="font-display text-xl lg:text-2xl font-semibold text-bone leading-tight">
                        Blueprint Development
                        <br />
                        Execution Strategy
                      </h4>
                      <p className="text-sm text-bone/80 font-light leading-relaxed max-w-sm">
                        Comprehensive roadmap from brand identity to investor presentation, ensuring every element aligns with strategic objectives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right Column: Strategic Framework & Key Deliverables */}
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-obsidian text-accent border border-obsidian mb-3">
                        Strategic Framework
                      </span>
                      <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4 leading-tight">
                        Planning Approach
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-lg lg:text-xl leading-relaxed text-foreground/90 font-light">
                    {data.content}
                  </p>
                </LiquidGlassCard>
              </div>
            </AnimateOnScroll>

            {/* Key Deliverables - Top 3 */}
            {data.deliverables && data.deliverables.length > 0 && (
              <AnimateOnScroll animation="fadeInRight" delay={400} duration={500}>
                <div className="space-y-4">
                  <h4 className="font-display text-xl font-semibold text-foreground mb-4">
                    Key Deliverables
                  </h4>
                  {data.deliverables.slice(0, 3).map((deliverable, index) => (
                    <div key={index} className="relative group">
                      <GlowingEffect 
                        variant="default" 
                        glow 
                        proximity={80}
                        disabled={false}
                        className="absolute inset-0 rounded-xl"
                      />
                      <div className="relative bg-obsidian/90 backdrop-blur-xl border border-accent/15 rounded-xl p-4 lg:p-6 group-hover:scale-[1.02] transition-all duration-300">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-accent via-accent/90 to-accent/70 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                            <span className="text-white font-bold text-xs">
                              {index + 1}
                            </span>
                          </div>
                          <div className="flex-1 h-[1px] bg-gradient-to-r from-accent/40 to-transparent" />
                        </div>
                        <p className="text-bone/90 leading-relaxed text-sm lg:text-base font-light">
                          {deliverable}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            )}
          </div>
        </div>

        {/* Three Pillar Architecture */}
        <div className="mb-20 lg:mb-24">
          <AnimateOnScroll animation="fadeInUp" delay={300} duration={400}>
            <div className="text-center mb-12 lg:mb-16">
              <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                Three-Pillar Architecture
              </h3>
              <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent/30 mx-auto" />
            </div>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Digital Foundation Card */}
            <AnimateOnScroll animation="fadeInUp" delay={400} duration={500}>
              <div className="relative group">
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
                  className="relative p-6 lg:p-8 group-hover:scale-[1.02] transition-transform duration-300"
                  borderRadius="rounded-2xl"
                >
                  <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-obsidian" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  <h4 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3">
                    Digital Foundation
                  </h4>
                  <p className="text-foreground/80 leading-relaxed text-sm lg:text-base font-light">
                    Custom website design with investor-grade presentation materials and template systems for ongoing communications.
                  </p>
                </LiquidGlassCard>
              </div>
            </AnimateOnScroll>

            {/* Brand System Card */}
            <AnimateOnScroll animation="fadeInUp" delay={500} duration={500}>
              <div className="relative group">
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
                  className="relative p-6 lg:p-8 group-hover:scale-[1.02] transition-transform duration-300"
                  borderRadius="rounded-2xl"
                >
                  <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-obsidian" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z" />
                    </svg>
                  </div>
                  
                  <h4 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3">
                    Brand System
                  </h4>
                  <p className="text-foreground/80 leading-relaxed text-sm lg:text-base font-light">
                    Visual identity system scalable from pitch deck to full marketing suite with consistent brand application.
                  </p>
                </LiquidGlassCard>
              </div>
            </AnimateOnScroll>

            {/* Success Metrics Card */}
            <AnimateOnScroll animation="fadeInUp" delay={600} duration={500}>
              <div className="relative group">
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
                  className="relative p-6 lg:p-8 group-hover:scale-[1.02] transition-transform duration-300"
                  borderRadius="rounded-2xl"
                >
                  <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-obsidian" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  
                  <h4 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3">
                    Success Metrics
                  </h4>
                  <p className="text-foreground/80 leading-relaxed text-sm lg:text-base font-light">
                    Investor meeting conversion rate, funding timeline acceleration, and brand recognition in target markets.
                  </p>
                </LiquidGlassCard>
              </div>
            </AnimateOnScroll>
            
          </div>
        </div>

        {/* Transition to Next Phase */}
        <AnimateOnScroll animation="fadeInUp" delay={700} duration={400} className="text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-obsidian border border-accent/30 mb-6">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-accent tracking-wide uppercase">
              Next: Solution Development
            </span>
          </div>
          <p className="text-lg lg:text-xl text-foreground/70 font-light leading-relaxed max-w-3xl mx-auto">
            With strategic planning complete, the solution phase transforms blueprints into tangible execution.
          </p>
        </AnimateOnScroll>

      </div>
    </section>
  );
} 