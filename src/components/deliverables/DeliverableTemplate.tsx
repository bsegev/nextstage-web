'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { NextStageNavbar, Footer } from '@/components/layout';
import { 
  IconTarget, 
  IconArrowRight,
  IconCheck,
  IconStar,
  IconShieldCheck,
  IconBolt
} from '@tabler/icons-react';

// New universal data structure for all deliverables
interface DeliverableData {
  // Hero (Above the fold)
  title: string;
  tagline: string;
  description: string;
  
  // The NextStage Way
  ourApproach: {
    headline: string;
    description: string;
    keyPrinciple: string;
  };
  
  // What This Actually Is
  whatItIs: {
    realDefinition: string;
    notJust: string;
    butAlso: string;
  };
  
  // The Process
  process: {
    phase: string;
    whatWeDo: string;
    whatEmerges: string;
  }[];
  
  // Business Value
  outcomes: {
    primary: string;
    secondary: string;
    longTerm: string;
  };
  
  // Discovery
  discovery: {
    price: string;
    duration: string;
    whatWeExplore: string[];
    whatYouGet: string[];
  };
}

interface DeliverableTemplateProps {
  deliverable: DeliverableData;
}

export default function DeliverableTemplate({ deliverable }: DeliverableTemplateProps) {
  return (
    <div className="min-h-screen bg-bone">
      <NextStageNavbar />
      
      {/* Hero Section - Compact & Clean */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Service Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-obsidian/5 rounded-full border border-obsidian/10">
              <IconTarget className="w-3 h-3 text-obsidian/60" />
              <span className="text-xs font-medium text-obsidian/70 uppercase tracking-wider">
                NextStage Deliverable
                </span>
              </div>
            </motion.div>
              
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-obsidian mb-6"
          >
            {deliverable.title}
          </motion.h1>
          
          {/* Tagline */}
          <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-accent font-medium mb-8"
          >
            {deliverable.tagline}
          </motion.p>

          {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a 
                href="https://cal.com/bensegev/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-obsidian text-bone rounded-2xl font-semibold transition-all duration-300 hover:bg-obsidian/90 hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Start Discovery • {deliverable.discovery.price}</span>
              <IconArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            </motion.div>
        </div>
      </section>
      
      {/* Why This Matters Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl tracking-tight text-obsidian mb-6">
              Why this matters for your business
            </h2>
            <p className="text-lg md:text-xl text-obsidian/70 leading-relaxed max-w-3xl mx-auto">
              {deliverable.description}
            </p>
              </motion.div>

          {/* Value Proposition Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Business Value */}
              <motion.div
              initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              className="text-center"
              >
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <IconStar className="w-8 h-8 text-green-600" />
                </div>
              <h3 className="font-semibold text-obsidian mb-3">Immediate Impact</h3>
              <p className="text-obsidian/70 text-sm leading-relaxed">{deliverable.outcomes.primary}</p>
              </motion.div>
              
            {/* Process Value */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <IconShieldCheck className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-obsidian mb-3">Strategic Foundation</h3>
              <p className="text-obsidian/70 text-sm leading-relaxed">{deliverable.outcomes.secondary}</p>
            </motion.div>

            {/* Long-term Value */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <IconBolt className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-obsidian mb-3">Long-term Growth</h3>
              <p className="text-obsidian/70 text-sm leading-relaxed">{deliverable.outcomes.longTerm}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-gradient-to-br from-bone via-gray-50/30 to-accent/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl tracking-tight text-obsidian mb-6">
              {deliverable.ourApproach.headline}
            </h2>
            <p className="text-lg text-obsidian/70 leading-relaxed max-w-3xl mx-auto mb-8">
              {deliverable.ourApproach.description}
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent/10 rounded-full border border-accent/20">
              <IconTarget className="w-5 h-5 text-accent" />
              <span className="font-medium text-accent">{deliverable.ourApproach.keyPrinciple}</span>
            </div>
          </motion.div>

          {/* What This Actually Is */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-2xl text-obsidian mb-6">What this actually is</h3>
              <p className="text-obsidian/80 leading-relaxed mb-8">
                {deliverable.whatItIs.realDefinition}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-sm mt-1">✕</span>
                  <span className="text-obsidian/60">{deliverable.whatItIs.notJust}</span>
                </div>
                <div className="flex items-start gap-3">
                  <IconCheck className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-obsidian/80 font-medium">{deliverable.whatItIs.butAlso}</span>
                </div>
              </div>
            </motion.div>
            
            {/* Process Overview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50"
            >
              <h3 className="font-display text-xl text-obsidian mb-6">How we deliver</h3>
              <div className="space-y-6">
                {deliverable.process.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-obsidian/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-semibold text-obsidian">{index + 1}</span>
                    </span>
                    <div>
                      <h4 className="font-medium text-obsidian mb-1">{step.phase}</h4>
                      <p className="text-obsidian/60 text-sm">{step.whatEmerges}</p>
                    </div>
                          </div>
                        ))}
                </div>
              </motion.div>
          </div>
        </div>
      </section>

      {/* Discovery Session */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl tracking-tight text-obsidian mb-6">
              Start with strategic discovery
            </h2>
            <p className="text-lg text-obsidian/70 leading-relaxed max-w-2xl mx-auto">
              Every project begins with understanding your specific situation, goals, and challenges.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
          
            {/* What We Explore */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-semibold text-obsidian mb-4">What we explore together</h3>
              <ul className="space-y-3">
                {deliverable.discovery.whatWeExplore.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-obsidian/70">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* What You Get */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-semibold text-obsidian mb-4">What you receive</h3>
              <ul className="space-y-3 mb-6">
                {deliverable.discovery.whatYouGet.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <IconCheck className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-obsidian/70">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-green-50 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <IconShieldCheck className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-green-800">Discovery Investment</span>
          </div>
                <p className="text-green-700 text-sm">
                  {deliverable.discovery.price} for {deliverable.discovery.duration} • Full credit toward your project
                </p>
                  </div>
                </motion.div>
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mt-16"
          >
              <a
                href="https://cal.com/bensegev/30min"
                target="_blank"
                rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-obsidian text-bone rounded-2xl text-lg font-semibold transition-all duration-300 hover:bg-obsidian/90 hover:shadow-xl hover:-translate-y-1"
            >
              <span>Book Discovery Session</span>
              <IconArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="text-obsidian/60 text-sm mt-4">
              Calendar link opens in new window • Choose your preferred time
            </p>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
} 