'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IconShieldCheck, IconCheck } from '@tabler/icons-react';
import { PointerHighlight } from '@/components/ui/pointer-highlight';
import DeliverablePerformanceMetrics, { PerformanceMetricsData } from './DeliverablePerformanceMetrics';
import DeliverableMethodology, { MethodologyItem } from './DeliverableMethodology';
import DeliverableProcessSteps from './DeliverableProcessSteps';
import DeliverableCTA from './DeliverableCTA';

interface DeliverableServicePageData {
  title: string;
  tagline: string;
  description: string;
  
  whatItIs: {
    realDefinition: string;
    notJust: string;
    butAlso: string;
  };
  
  process: {
    phase: string;
    whatWeDo: string;
    whatEmerges: string;
  }[];
  
  outcomes: {
    primary: string;
    secondary: string;
    longTerm: string;
  };
  
  discovery: {
    price: string;
    duration: string;
    whatWeExplore: string[];
    whatYouGet: string[];
  };
  
  performanceMetrics?: PerformanceMetricsData;
  methodology?: {
    title: string;
    subtitle?: string;
    items: MethodologyItem[];
  };
}

interface DeliverableServicePageProps {
  data: DeliverableServicePageData;
  stage: 'Foundation' | 'Discovery' | 'Strategy' | 'Launch' | 'Growth';
  metrics: {
    successRate: number;
    avgROI: string;
    timeToMarket: string;
    clientRetention: number;
  };
}

const stageConfig = {
  Foundation: { icon: '🏗️', color: 'from-red-500/10 to-red-600/5', description: 'Essential business foundation' },
  Discovery: { icon: '🔍', color: 'from-blue-500/10 to-blue-600/5', description: 'Strategic intelligence gathering' }, 
  Strategy: { icon: '🎯', color: 'from-green-500/10 to-green-600/5', description: 'Direction and planning' },
  Launch: { icon: '🚀', color: 'from-purple-500/10 to-purple-600/5', description: 'Market entry execution' },
  Growth: { icon: '📈', color: 'from-yellow-500/10 to-yellow-600/5', description: 'Scaling and optimization' }
};

export default function DeliverableServicePagePentagram({ data, stage, metrics }: DeliverableServicePageProps) {
  const stageInfo = stageConfig[stage];

  return (
    <div className="min-h-screen bg-bone">
      
      {/* Sophisticated Hero Section */}
      <section className="relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1)_0%,transparent_50%)]" />
        </div>
        
        <div className="relative pt-32 pb-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            
            {/* Breadcrumb - Refined */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-obsidian/40">
                <span>Home</span>
                <span className="text-obsidian/20">•</span>
                <span>Services</span>
                <span className="text-obsidian/20">•</span>
                <span className="text-obsidian/70 font-medium">{data.title}</span>
              </div>
            </motion.nav>

            <div className="grid lg:grid-cols-12 gap-16 items-start">
              
              {/* Main Hero Content */}
              <div className="lg:col-span-7">
                
                {/* Stage Indicator */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <div className={`inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r ${stageInfo.color} rounded-full`}>
                    <span className="text-lg">{stageInfo.icon}</span>
                    <span className="text-xs font-medium uppercase tracking-[0.15em] text-obsidian/80">
                      {stage} Stage
                    </span>
                  </div>
                </motion.div>

                {/* Title - Museum Quality Typography */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="mb-6"
                >
                  <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl tracking-[-0.02em] text-obsidian leading-[0.9] mb-8">
                    <PointerHighlight rectangleClassName="bg-gradient-to-r from-accent/30 to-accent/10 rounded-xl">
                      {data.title}
                    </PointerHighlight>
                  </h1>
                </motion.div>

                {/* Tagline - Strategic Emphasis */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-12"
                >
                  <p className="text-xl lg:text-2xl text-obsidian/70 leading-[1.4] max-w-3xl font-light">
                    {data.tagline}
                  </p>
                </motion.div>

                {/* Strategic Context */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mb-16"
                >
                  <p className="text-lg text-obsidian/60 leading-relaxed max-w-2xl">
                    {data.description}
                  </p>
                </motion.div>

                {/* Primary CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <a 
                    href="https://cal.com/bensegev/30min" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group relative min-h-[56px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 rounded-full inline-block"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/40 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
                    <div className="relative inline-flex items-center gap-3 px-8 py-4 bg-accent text-obsidian rounded-full text-base font-medium transition-all duration-300 group-hover:bg-accent/90 group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:-translate-y-1 group-active:scale-95">
                      <span className="relative">
                        Start Discovery Session
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full block" />
                      </span>
                      
                      <div className="relative overflow-hidden w-5 h-5">
                        <motion.svg 
                          className="absolute w-5 h-5"
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </motion.svg>
                      </div>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-2 mt-4 text-obsidian/50 text-sm">
                    <IconShieldCheck className="w-4 h-4 text-green-600" />
                    <span>{data.discovery.price} • {data.discovery.duration} • Full credit toward your project</span>
                  </div>
                </motion.div>
              </div>

              {/* Enhanced Performance Metrics Sidebar */}
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="sticky top-28"
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl" />
                    <div className="relative p-8 rounded-3xl border border-gray-100">
                      <DeliverablePerformanceMetrics data={data.performanceMetrics} />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Definition Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-display text-3xl lg:text-4xl tracking-[-0.01em] text-obsidian mb-8">
                  What this actually is
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-obsidian/70 leading-relaxed mb-12 text-lg">
                    {data.whatItIs.realDefinition}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative">
                    <div className="absolute -left-4 top-0 w-1 h-full bg-red-200 rounded-full" />
                    <div className="pl-8">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-red-500 text-sm">✕</span>
                        <span className="text-xs uppercase tracking-[0.1em] text-obsidian/50 font-medium">Not just</span>
                      </div>
                      <p className="text-obsidian/70">{data.whatItIs.notJust}</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-4 top-0 w-1 h-full bg-green-200 rounded-full" />
                    <div className="pl-8">
                      <div className="flex items-center gap-2 mb-3">
                        <IconCheck className="w-4 h-4 text-green-600" />
                        <span className="text-xs uppercase tracking-[0.1em] text-obsidian/50 font-medium">But also</span>
                      </div>
                      <p className="text-obsidian/80 font-medium">{data.whatItIs.butAlso}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100"
              >
                <h3 className="text-sm font-medium uppercase tracking-[0.1em] text-obsidian/80 mb-6">
                  Key Benefits
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <IconCheck className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-obsidian/70 leading-relaxed">{data.outcomes.primary}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <IconCheck className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-obsidian/70 leading-relaxed">{data.outcomes.secondary}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <IconCheck className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-obsidian/70 leading-relaxed">{data.outcomes.longTerm}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <DeliverableProcessSteps steps={data.process} />

      {/* Methodology Section */}
      {data.methodology && (
        <DeliverableMethodology 
          title={data.methodology.title}
          subtitle={data.methodology.subtitle}
          items={data.methodology.items}
        />
      )}

      {/* Enhanced CTA Section */}
      <DeliverableCTA data={data} />
    </div>
  );
} 