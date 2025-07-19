'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IconTarget, IconArrowRight, IconShieldCheck } from '@tabler/icons-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { PointerHighlight } from '@/components/ui/pointer-highlight';

interface DeliverableHeroData {
  title: string;
  tagline: string;
  description: string;
  discovery: {
    price: string;
    duration: string;
  };
}

interface DeliverableHeroProps {
  data: DeliverableHeroData;
  stage: 'Foundation' | 'Discovery' | 'Strategy' | 'Launch' | 'Growth';
  stageDescription: string;
}

// Stage color mapping
const stageColors = {
  Foundation: 'from-red-500/20 to-red-600/10',
  Discovery: 'from-blue-500/20 to-blue-600/10', 
  Strategy: 'from-green-500/20 to-green-600/10',
  Launch: 'from-purple-500/20 to-purple-600/10',
  Growth: 'from-yellow-500/20 to-yellow-600/10'
};

const stageIcons = {
  Foundation: '🏗️',
  Discovery: '🔍', 
  Strategy: '🎯',
  Launch: '🚀',
  Growth: '📈'
};

export default function DeliverableHero({ data, stage, stageDescription }: DeliverableHeroProps) {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-bone via-white to-gray-50 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-obsidian blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#8B5CF6_1px,transparent_1px),linear-gradient(to_bottom,#8B5CF6_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Strategic Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-xl rounded-full border border-gray-200/50 shadow-lg">
              <IconTarget className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-obsidian/80 uppercase tracking-wider">
                Strategic Deliverable
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-obsidian mb-4 leading-[1.1] text-center">
              <PointerHighlight rectangleClassName="bg-gradient-to-r from-accent/30 to-accent/10 rounded-lg">
                {data.title}
              </PointerHighlight>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-obsidian/70 font-medium mb-8 max-w-3xl mx-auto leading-relaxed text-center"
          >
            {data.tagline}
          </motion.p>

          {/* Stage Context */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 text-center"
          >
            <div className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${stageColors[stage]} backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg`}>
              <span className="text-2xl">{stageIcons[stage]}</span>
              <div className="text-left">
                <div className="text-sm font-semibold text-obsidian/90 uppercase tracking-wider">
                  {stage} Stage
                </div>
                <div className="text-sm text-obsidian/70">
                  {stageDescription}
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center text-center"
          >
            
            {/* Primary CTA */}
            <div className="relative group">
              <GlowingEffect 
                variant="default" 
                glow 
                proximity={100}
                className="absolute inset-0 rounded-2xl"
              />
              <a
                href="https://cal.com/bensegev/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group inline-flex items-center gap-3 px-8 py-4 bg-obsidian text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-obsidian/90 hover:shadow-xl hover:-translate-y-1"
              >
                <span>Start Discovery Session</span>
                <IconArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Secondary Info */}
            <div className="flex items-center gap-3 text-obsidian/70">
              <IconShieldCheck className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium">
                {data.discovery.price} • {data.discovery.duration} • Full credit toward your project
              </span>
            </div>
          </motion.div>

          {/* Subtle Value Statement */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 text-obsidian/50 text-sm max-w-2xl mx-auto leading-relaxed text-center"
          >
            {data.description}
          </motion.p>
        </div>
      </div>
    </section>
  );
} 