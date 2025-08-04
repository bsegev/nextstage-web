'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import { LiquidGlass } from '@/components/ui/liquid-glass';
import { cn } from '@/lib/utils';
import { 
  IconBrain, 
  IconChartLine, 
  IconPalette,
  IconCode,
  IconUsers,
  IconTrendingUp,
  IconArrowRight,
  IconSparkles
} from '@tabler/icons-react';

interface TechApp {
  id: string;
  title: string;
  description: string;
  category: string;
  status: 'live' | 'beta' | 'coming-soon';
  href: string;
  icon: React.ReactNode;
  features: string[];
}

const techApps: TechApp[] = [
  {
    id: 'strategy-brief',
    title: 'Strategy Brief',
    description: 'AI-powered strategic analysis and business planning companion that provides instant insights and recommendations.',
    category: 'Strategic Planning',
    status: 'live',
    href: '/strategy-brief',
    icon: <IconBrain className="w-8 h-8" />,
    features: ['AI Analysis', 'Strategic Insights', 'Business Planning', 'Instant Reports']
  },
  {
    id: 'market-intel',
    title: 'Market Intelligence',
    description: 'Real-time market analysis and competitive intelligence powered by advanced AI algorithms.',
    category: 'Market Research',
    status: 'beta',
    href: '#',
    icon: <IconChartLine className="w-8 h-8" />,
    features: ['Market Analysis', 'Competitor Tracking', 'Trend Detection', 'Data Visualization']
  },
  {
    id: 'brand-optimizer',
    title: 'Brand Optimizer',
    description: 'Intelligent brand analysis and optimization tool for consistent brand presence across all channels.',
    category: 'Brand & Design',
    status: 'coming-soon',
    href: '#',
    icon: <IconPalette className="w-8 h-8" />,
    features: ['Brand Audit', 'Style Guide', 'Asset Management', 'Consistency Checker']
  },
  {
    id: 'growth-accelerator',
    title: 'Growth Accelerator',
    description: 'Automated growth strategies and conversion optimization platform for scaling businesses.',
    category: 'Growth & Marketing',
    status: 'coming-soon',
    href: '#',
    icon: <IconTrendingUp className="w-8 h-8" />,
    features: ['Growth Metrics', 'A/B Testing', 'Funnel Analysis', 'ROI Optimization']
  },
  {
    id: 'team-enabler',
    title: 'Team Enabler',
    description: 'AI-powered team training and skill development platform with personalized learning paths.',
    category: 'Team & Training',
    status: 'coming-soon',
    href: '#',
    icon: <IconUsers className="w-8 h-8" />,
    features: ['Skill Assessment', 'Training Plans', 'Progress Tracking', 'Certification']
  },
  {
    id: 'tech-stack',
    title: 'Tech Stack Advisor',
    description: 'Intelligent technology recommendations and architecture planning for optimal development.',
    category: 'Technology',
    status: 'coming-soon',
    href: '#',
    icon: <IconCode className="w-8 h-8" />,
    features: ['Tech Analysis', 'Architecture Planning', 'Stack Recommendations', 'Integration Guide']
  }
];

// Tech-specific Focus Cards Component
const TechCard = React.memo(
  ({
    app,
    index,
    hovered,
    setHovered,
    getStatusBadge,
  }: {
    app: TechApp;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    getStatusBadge: (status: TechApp['status']) => React.JSX.Element;
  }) => (
    <motion.div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative h-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <LiquidGlass
        intensity="subtle"
        animated
        borderRadius="rounded-2xl"
        className="h-full border-bone/30 dark:border-foreground/20 group-hover:border-bone/50 dark:group-hover:border-foreground/30 transition-all duration-500"
      >
        <div className="p-8 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 dark:from-accent/30 dark:to-accent/20 rounded-2xl flex items-center justify-center text-foreground shadow-lg shadow-accent/10 group-hover:scale-110 transition-transform duration-300">
              {app.icon}
            </div>
            {getStatusBadge(app.status)}
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="mb-3">
                             <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                 {app.title}
               </h3>
              <p className="text-sm text-foreground/60 font-medium mb-3">
                {app.category}
              </p>
            </div>

            <p className="text-foreground/70 leading-relaxed mb-6">
              {app.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {app.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-foreground/60">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-auto">
            {app.status === 'live' ? (
              <Link 
                href={app.href}
                className="group/cta relative w-full"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/40 to-accent/20 rounded-xl blur opacity-0 group-hover/cta:opacity-100 transition duration-500" />
                <div className="relative inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-obsidian text-bone rounded-xl font-medium hover:bg-obsidian/90 hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5">
                  <span>Try Now</span>
                  <IconArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ) : app.status === 'beta' ? (
              <button 
                disabled
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-foreground/10 dark:bg-foreground/20 text-foreground/60 rounded-xl font-medium cursor-not-allowed opacity-75"
              >
                <span>Request Beta Access</span>
              </button>
            ) : (
              <button 
                disabled
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-foreground/5 dark:bg-foreground/10 text-foreground/40 rounded-xl font-medium cursor-not-allowed"
              >
                <span>Coming Soon</span>
              </button>
            )}
          </div>
        </div>
      </LiquidGlass>

      {/* Hover effect for featured app */}
      {app.status === 'live' && (
        <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/15 to-accent/8 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
      )}
    </motion.div>
  )
);

TechCard.displayName = "TechCard";

function TechFocusCards({ 
  apps, 
  getStatusBadge 
}: { 
  apps: TechApp[]; 
  getStatusBadge: (status: TechApp['status']) => React.JSX.Element;
}) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
      {apps.map((app, index) => (
        <TechCard
          key={app.id}
          app={app}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          getStatusBadge={getStatusBadge}
        />
      ))}
    </div>
  );
}

export default function TechShowcase() {

  const getStatusBadge = (status: TechApp['status']) => {
    switch (status) {
      case 'live':
        return (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-obsidian text-bone rounded-full text-xs font-medium">
            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            Live
          </div>
        );
      case 'beta':
        return (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-obsidian/80 text-bone rounded-full text-xs font-medium">
            <div className="w-1.5 h-1.5 bg-bone/60 rounded-full animate-pulse" />
            Beta
          </div>
        );
      case 'coming-soon':
        return (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-obsidian/60 text-bone/80 rounded-full text-xs font-medium">
            <IconSparkles className="w-3 h-3" />
            Coming Soon
          </div>
        );
    }
  };

  return (
    <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background - matching your style */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-accent/5 dark:from-obsidian dark:to-accent/10" />
      
      {/* Your exact decorative elements */}
      <motion.div 
        className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-accent/10 to-accent/5 rounded-full blur-3xl opacity-60"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-accent/8 to-accent/4 rounded-full blur-3xl opacity-40"
        animate={{ scale: [1.1, 0.9, 1.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header - your exact style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display font-light tracking-tight text-foreground mb-6">
            AI-Powered{' '}
            <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian dark:from-bone dark:via-accent dark:to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              Applications
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive suite of AI-powered tools designed to accelerate every aspect of your business growth, from strategic planning to execution.
          </p>
        </motion.div>

        {/* Apps Grid with Focus Cards Effect */}
        <TechFocusCards apps={techApps} getStatusBadge={getStatusBadge} />

        {/* Bottom CTA - your exact style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-display font-semibold text-foreground mb-4">
              Ready to accelerate your business?
            </h3>
            <p className="text-foreground/70 mb-8">
              Start with our Strategy Brief or book a demo to see how our AI-powered tools can transform your business.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary CTA - your obsidian style */}
              <Link 
                href="/strategy-brief"
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/40 to-accent/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative inline-flex items-center gap-3 px-8 py-4 bg-obsidian text-bone rounded-xl font-medium hover:bg-obsidian/90 hover:shadow-xl hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-1">
                  <span>Start with Strategy Brief</span>
                  <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
              
              {/* Secondary CTA - your LiquidGlass style */}
              <a 
                href="https://cal.com/bensegev/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <LiquidGlass 
                  intensity="subtle" 
                  animated
                  borderRadius="rounded-xl"
                  className="group-hover:scale-[1.02] transition-transform duration-300 border-bone/30 group-hover:border-bone/50"
                >
                  <div className="inline-flex items-center gap-3 px-8 py-4 text-obsidian/80 group-hover:text-obsidian rounded-xl font-medium transition-all duration-300 group-hover:-translate-y-1">
                    <span>Book Demo</span>
                    <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </LiquidGlass>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 