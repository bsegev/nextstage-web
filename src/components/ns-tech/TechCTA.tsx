'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { LiquidGlass } from '@/components/ui/liquid-glass';
import { 
  IconBrain, 
  IconCalendar, 
  IconArrowRight,
  IconSparkles,
  IconTarget,
  IconTrendingUp
} from '@tabler/icons-react';

export default function TechCTA() {
  return (
    <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background - your exact style */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/5 to-background dark:from-obsidian dark:via-accent/10 dark:to-obsidian" />
      
      {/* Your exact animated background elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-accent/15 to-accent/8 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-bl from-accent/10 to-accent/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 0.8, 1.2],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-accent/12 to-accent/6 rounded-full blur-2xl"
        animate={{ 
          x: [-50, 50, -50],
          y: [-30, 30, -30],
          scale: [0.8, 1.1, 0.8]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Main heading - your exact style */}
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display font-light tracking-tight text-foreground mb-6">
            Start Your{' '}
            <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian dark:from-bone dark:via-accent dark:to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              AI Journey
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed mb-12">
            Choose how you&apos;d like to begin your transformation with NextStage&apos;s AI-powered technology suite.
          </p>
        </motion.div>

        {/* CTA Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Strategy Brief Card */}
          <motion.div
            initial={{ opacity: 0, y: 20, x: -20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative"
          >
            <LiquidGlass
              intensity="medium"
              animated
              borderRadius="rounded-3xl"
              className="h-full border-bone/30 dark:border-foreground/20 group-hover:border-bone/50 dark:group-hover:border-foreground/30 transition-all duration-500"
            >
              <div className="p-8 lg:p-10 h-full flex flex-col">
                {/* Icon and badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 dark:from-accent/30 dark:to-accent/20 rounded-2xl flex items-center justify-center text-foreground shadow-lg shadow-accent/10 group-hover:scale-110 transition-transform duration-300">
                    <IconBrain className="w-8 h-8" />
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-obsidian text-bone rounded-full text-xs font-medium">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                    Free to Try
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 mb-8">
                  <h3 className="text-2xl lg:text-3xl font-display font-semibold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    Try Strategy Brief
                  </h3>
                  <p className="text-foreground/70 leading-relaxed mb-6">
                    Get instant AI-powered strategic analysis and business insights. Perfect for entrepreneurs and business leaders looking to validate ideas and plan their next moves.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      'Instant AI Analysis',
                      'Strategic Recommendations',
                      'Market Insights',
                      'Competitive Analysis'
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-foreground/60">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button - your exact style */}
                <Link 
                  href="/strategy-brief"
                  className="group/btn relative w-full"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/40 to-accent/20 rounded-2xl blur opacity-0 group-hover/btn:opacity-100 transition duration-500" />
                  <div className="relative inline-flex items-center justify-center gap-3 w-full px-8 py-4 bg-obsidian text-bone rounded-2xl font-medium hover:bg-obsidian/90 hover:shadow-xl hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-1">
                    <span>Start Strategy Brief</span>
                    <IconArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </div>
            </LiquidGlass>

            {/* Your subtle glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/15 to-accent/8 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
          </motion.div>

          {/* Book Demo Card */}
          <motion.div
            initial={{ opacity: 0, y: 20, x: 20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative"
          >
            <LiquidGlass
              intensity="medium"
              animated
              borderRadius="rounded-3xl"
              className="h-full border-bone/30 dark:border-foreground/20 group-hover:border-bone/50 dark:group-hover:border-foreground/30 transition-all duration-500"
            >
              <div className="p-8 lg:p-10 h-full flex flex-col">
                {/* Icon and badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 dark:from-accent/30 dark:to-accent/20 rounded-2xl flex items-center justify-center text-foreground shadow-lg shadow-accent/10 group-hover:scale-110 transition-transform duration-300">
                    <IconCalendar className="w-8 h-8" />
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-obsidian/80 text-bone rounded-full text-xs font-medium">
                    <IconTarget className="w-3 h-3" />
                    Personalized
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 mb-8">
                  <h3 className="text-2xl lg:text-3xl font-display font-semibold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    Book a Demo
                  </h3>
                  <p className="text-foreground/70 leading-relaxed mb-6">
                    Get a personalized walkthrough of our entire AI technology suite. Perfect for teams and businesses ready to implement comprehensive solutions.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      'Full Platform Demo',
                      'Custom Strategy Session',
                      'Implementation Roadmap',
                      'ROI Assessment'
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-foreground/60">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button - your LiquidGlass style */}
                <a 
                  href="https://cal.com/bensegev/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative w-full"
                >
                  <LiquidGlass 
                    intensity="subtle" 
                    animated
                    borderRadius="rounded-2xl"
                    className="group-hover/btn:scale-[1.02] transition-transform duration-300 border-bone/30 group-hover/btn:border-bone/50"
                  >
                    <div className="inline-flex items-center justify-center gap-3 w-full px-8 py-4 text-obsidian/80 group-hover/btn:text-obsidian rounded-2xl font-medium transition-all duration-300 group-hover/btn:-translate-y-1">
                      <span>Schedule Demo</span>
                      <IconCalendar className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" />
                    </div>
                  </LiquidGlass>
                </a>
              </div>
            </LiquidGlass>

            {/* Your subtle glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/15 to-accent/8 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
          </motion.div>
        </div>

        {/* Bottom section - your exact style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-display font-medium text-foreground mb-4">
              Have questions about our technology?
            </h3>
            <p className="text-foreground/60 mb-6">
              Our team is here to help you understand how AI can transform your business operations.
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-foreground/50">
              <div className="flex items-center gap-2">
                <IconTrendingUp className="w-4 h-4" />
                <span>Proven ROI</span>
              </div>
              <div className="w-px h-4 bg-foreground/20" />
              <div className="flex items-center gap-2">
                <IconSparkles className="w-4 h-4" />
                <span>AI-Powered</span>
              </div>
              <div className="w-px h-4 bg-foreground/20" />
              <div className="flex items-center gap-2">
                <IconTarget className="w-4 h-4" />
                <span>Business-Focused</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 