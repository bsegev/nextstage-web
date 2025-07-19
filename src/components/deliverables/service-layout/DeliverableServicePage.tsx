'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IconArrowRight, IconShieldCheck, IconTrendingUp, IconClock, IconUsers, IconAward, IconCheck } from '@tabler/icons-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { PointerHighlight } from '@/components/ui/pointer-highlight';

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

const stageIcons = {
  Foundation: '🏗️',
  Discovery: '🔍', 
  Strategy: '🎯',
  Launch: '🚀',
  Growth: '📈'
};

export default function DeliverableServicePage({ data, stage, metrics }: DeliverableServicePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bone via-white to-gray-50">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.01]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#8B5CF6_1px,transparent_1px),linear-gradient(to_bottom,#8B5CF6_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 text-sm text-obsidian/60">
              <span>Home</span>
              <span>/</span>
              <span>Services</span>
              <span>/</span>
              <span className="text-obsidian font-medium">{data.title}</span>
            </div>
          </motion.nav>

          {/* Main Layout */}
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
              
              {/* Title Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">{stageIcons[stage]}</span>
                  </div>
                  <div>
                    <h1 className="font-display text-4xl md:text-5xl tracking-tight text-obsidian">
                      <PointerHighlight rectangleClassName="bg-gradient-to-r from-accent/30 to-accent/10 rounded-lg">
                        {data.title}
                      </PointerHighlight>
                    </h1>
                  </div>
                </div>

                <p className="text-lg text-obsidian/70 leading-relaxed mb-6">
                  {data.tagline}
                </p>
                
                <p className="text-obsidian/80 leading-relaxed">
                  {data.description}
                </p>
              </motion.div>

              {/* What This Actually Is */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-16"
              >
                <h2 className="font-display text-2xl text-obsidian mb-6">What This Actually Is</h2>
                
                <div className="relative group">
                  <GlowingEffect 
                    variant="default" 
                    glow 
                    proximity={100}
                    className="absolute inset-0 rounded-3xl opacity-40"
                  />
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
                    <p className="text-obsidian/80 leading-relaxed mb-6">
                      {data.whatItIs.realDefinition}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex items-start gap-3">
                        <span className="text-red-500 text-lg mt-1">✕</span>
                        <div>
                          <span className="text-obsidian/60 font-medium">Not just</span>
                          <p className="text-obsidian/70 text-sm">{data.whatItIs.notJust}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <IconCheck className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-obsidian font-medium">But also</span>
                          <p className="text-obsidian/80 text-sm">{data.whatItIs.butAlso}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Key Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="font-display text-2xl text-obsidian mb-6">Key Benefits</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-obsidian/80">{data.outcomes.primary}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-obsidian/80">{data.outcomes.secondary}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-obsidian/80">{data.outcomes.longTerm}</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              
              {/* Metrics Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="sticky top-24"
              >
                <div className="relative group mb-8">
                  <GlowingEffect 
                    variant="peach" 
                    glow 
                    proximity={100}
                    className="absolute inset-0 rounded-3xl opacity-60"
                  />
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
                    <h3 className="font-display text-xl text-obsidian mb-6">Performance Metrics</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <IconTrendingUp className="w-5 h-5 text-green-600" />
                          <span className="text-obsidian/80 text-sm">Average ROI</span>
                        </div>
                        <span className="font-semibold text-obsidian">{metrics.avgROI}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <IconClock className="w-5 h-5 text-blue-600" />
                          <span className="text-obsidian/80 text-sm">Time to Market</span>
                        </div>
                        <span className="font-semibold text-obsidian">{metrics.timeToMarket}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <IconAward className="w-5 h-5 text-yellow-600" />
                          <span className="text-obsidian/80 text-sm">Success Rate</span>
                        </div>
                        <span className="font-semibold text-obsidian">{metrics.successRate}%</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <IconUsers className="w-5 h-5 text-accent" />
                          <span className="text-obsidian/80 text-sm">Client Retention</span>
                        </div>
                        <span className="font-semibold text-obsidian">{metrics.clientRetention}%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="relative group">
                  <GlowingEffect 
                    variant="default" 
                    glow 
                    proximity={100}
                    className="absolute inset-0 rounded-3xl opacity-60"
                  />
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg">
                    <h3 className="font-display text-xl text-obsidian mb-4">Ready to Get Started?</h3>
                    <p className="text-obsidian/70 text-sm mb-6">
                      Ready to build a {data.title.toLowerCase()} that gets remembered?
                    </p>
                    
                    <div className="relative group mb-4">
                      <GlowingEffect 
                        variant="default" 
                        glow 
                        proximity={100}
                        className="absolute inset-0 rounded-2xl opacity-80"
                      />
                      <a
                        href="https://cal.com/bensegev/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-obsidian text-white rounded-2xl font-semibold transition-all duration-300 hover:bg-obsidian/90 hover:shadow-xl hover:-translate-y-1"
                      >
                        <span>Start Discovery Session</span>
                        <IconArrowRight className="w-5 h-5" />
                      </a>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-obsidian/60 text-sm">
                      <IconShieldCheck className="w-4 h-4 text-green-600" />
                      <span>{data.discovery.price} • {data.discovery.duration} • Full credit toward your project</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* What's Included - Full Width with Different Background */}
        <div className="bg-gradient-to-br from-gray-50 via-white to-bone py-20 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl text-obsidian mb-4">What&apos;s Included</h2>
              <p className="text-obsidian/60 max-w-2xl mx-auto">
                A comprehensive approach that delivers results through strategic methodology
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.process.map((step, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                        <span className="text-accent font-bold text-lg">{index + 1}</span>
                      </div>
                      <h3 className="font-semibold text-obsidian text-lg mb-2">{step.phase}</h3>
                    </div>
                    <p className="text-obsidian/70 text-sm leading-relaxed text-center">{step.whatEmerges}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 