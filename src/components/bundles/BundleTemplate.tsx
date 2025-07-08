"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Bundle } from "@/lib/deliverables/bundles";
import { LiquidGlass, LiquidGlassCard } from "@/components/ui/liquid-glass";
import Footer from "@/components/Footer";

interface BundleTemplateProps {
  bundle: Bundle;
}

// Loading skeleton component
const LoadingSkeleton = () => (
  <div className="relative w-full min-h-screen bg-background dark:bg-[#0B0B0F] flex items-center justify-center">
    <div className="max-w-6xl mx-auto text-center px-6 space-y-8">
      <div className="space-y-4">
        <div className="h-12 w-96 bg-foreground/10 rounded-lg animate-pulse mx-auto" />
        <div className="h-8 w-80 bg-foreground/10 rounded-lg animate-pulse mx-auto" />
      </div>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <div className="h-32 w-64 bg-foreground/10 rounded-2xl animate-pulse" />
        <div className="h-32 w-64 bg-foreground/10 rounded-2xl animate-pulse" />
      </div>
    </div>
  </div>
);

export default function BundleTemplate({ bundle }: BundleTemplateProps) {
  const [loadingStage, setLoadingStage] = useState<'skeleton' | 'header' | 'content' | 'complete'>('skeleton');
  const [activeSection, setActiveSection] = useState<'overview' | 'includes' | 'process' | 'faq'>('overview');
  
  useEffect(() => {
    const timer1 = setTimeout(() => setLoadingStage('header'), 100);
    const timer2 = setTimeout(() => setLoadingStage('content'), 300);
    const timer3 = setTimeout(() => setLoadingStage('complete'), 500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);
  
  if (loadingStage === 'skeleton') {
    return <LoadingSkeleton />;
  }
  
  return (
    <div className="relative w-full overflow-hidden bg-background dark:bg-[#0B0B0F]">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95 dark:from-[#0B0B0F]/95 dark:via-[#0B0B0F]/90 dark:to-[#0B0B0F]/95" />
        
        <AnimatePresence>
          {(loadingStage === 'header' || loadingStage === 'content' || loadingStage === 'complete') && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-20 max-w-6xl mx-auto text-center px-6 sm:px-8 md:px-10 lg:px-12 py-20"
            >
              
              {/* Bundle Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center justify-center mb-8"
              >
                <LiquidGlass
                  intensity="medium"
                  animated
                  className="px-6 py-3 backdrop-blur-xl bg-accent/10 border border-accent/20"
                  borderRadius="rounded-full"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-sm font-medium text-accent tracking-wide">
                      Bundle Package
                    </span>
                  </div>
                </LiquidGlass>
              </motion.div>
              
              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight text-obsidian dark:text-bone">
                  {bundle.title}
                </h1>
              </motion.div>
              
              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-8"
              >
                <p className="text-xl sm:text-2xl text-obsidian/80 dark:text-bone/80 font-light tracking-wide max-w-4xl mx-auto">
                  {bundle.tagline}
                </p>
              </motion.div>
              
              {/* Pricing Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
              >
                <LiquidGlassCard
                  intensity="strong"
                  animated
                  className="p-6 backdrop-blur-xl bg-white/10 border border-obsidian/10 dark:bg-obsidian/10 dark:border-bone/10 min-w-[280px]"
                  borderRadius="rounded-2xl"
                >
                  <div className="text-center">
                    <div className="text-sm text-obsidian/60 dark:text-bone/60 mb-2">Bundle Price</div>
                    <div className="text-2xl font-bold text-accent mb-2">{bundle.pricing.bundlePrice}</div>
                    <div className="text-sm text-obsidian/80 dark:text-bone/80">{bundle.pricing.savings}</div>
                  </div>
                </LiquidGlassCard>
                
                <LiquidGlassCard
                  intensity="medium"
                  animated
                  className="p-6 backdrop-blur-xl bg-obsidian/5 border border-obsidian/10 dark:bg-bone/5 dark:border-bone/10 min-w-[280px]"
                  borderRadius="rounded-2xl"
                >
                  <div className="text-center">
                    <div className="text-sm text-obsidian/60 dark:text-bone/60 mb-2">Timeline</div>
                    <div className="text-2xl font-bold text-obsidian dark:text-bone mb-2">{bundle.pricing.timeline}</div>
                    <div className="text-sm text-obsidian/80 dark:text-bone/80">Start to finish</div>
                  </div>
                </LiquidGlassCard>
              </motion.div>
              
              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent text-obsidian font-semibold rounded-xl hover:bg-accent/90 transition-all duration-300 hover:scale-105"
                >
                  Get Started
                </Link>
                <Link
                  href="/approach"
                  className="inline-flex items-center justify-center px-8 py-4 border border-obsidian/20 dark:border-bone/20 text-obsidian dark:text-bone font-semibold rounded-xl hover:bg-obsidian/5 dark:hover:bg-bone/5 transition-all duration-300"
                >
                  Learn More
                </Link>
              </motion.div>
              
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      
      {/* Navigation Tabs */}
      <section className="relative z-10 bg-bone/50 dark:bg-obsidian/50 backdrop-blur-xl border-y border-obsidian/10 dark:border-bone/10 sticky top-0">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
          <div className="flex justify-center">
            <div className="flex space-x-8 py-6">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'includes', label: 'What\'s Included' },
                { id: 'process', label: 'Process' },
                { id: 'faq', label: 'FAQ' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id as any)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeSection === tab.id
                      ? 'bg-accent text-obsidian shadow-lg'
                      : 'text-obsidian/70 dark:text-bone/70 hover:text-obsidian dark:hover:text-bone hover:bg-white/10 dark:hover:bg-obsidian/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Sections */}
      <section className="relative z-10 py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
          
          <AnimatePresence mode="wait">
            
            {/* Overview Tab */}
            {activeSection === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-12"
              >
                
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                  
                  {/* Description */}
                  <div>
                    <h2 className="font-display text-3xl font-semibold text-obsidian dark:text-bone mb-6">
                      About This Bundle
                    </h2>
                    <p className="text-lg text-obsidian/80 dark:text-bone/80 leading-relaxed">
                      {bundle.description}
                    </p>
                  </div>
                  
                  {/* Benefits */}
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-obsidian dark:text-bone mb-6">
                      Key Benefits
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {bundle.benefits.map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-start gap-3 p-4 bg-white/50 dark:bg-obsidian/20 rounded-xl border border-obsidian/10 dark:border-bone/10"
                        >
                          <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                            <svg className="w-3 h-3 text-obsidian" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-obsidian/80 dark:text-bone/80 leading-relaxed">
                            {benefit}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* DIY Reality */}
                  <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-8 border border-accent/20">
                    <h3 className="font-display text-xl font-semibold text-obsidian dark:text-bone mb-4">
                      DIY Reality Check
                    </h3>
                    <p className="text-obsidian/80 dark:text-bone/80 leading-relaxed">
                      {bundle.pricing.diyReality}
                    </p>
                  </div>
                  
                </div>
                
                {/* Sidebar */}
                <div className="space-y-8">
                  
                  {/* Perfect For */}
                  <LiquidGlassCard
                    intensity="medium"
                    animated
                    className="p-6 backdrop-blur-xl bg-white/10 border border-obsidian/10 dark:bg-obsidian/10 dark:border-bone/10"
                    borderRadius="rounded-2xl"
                  >
                    <h4 className="font-display text-lg font-semibold text-obsidian dark:text-bone mb-4">
                      Perfect For
                    </h4>
                    <ul className="space-y-3">
                      {bundle.perfectFor.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-obsidian/80 dark:text-bone/80">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </LiquidGlassCard>
                  
                  {/* Pricing Details */}
                  <LiquidGlassCard
                    intensity="strong"
                    animated
                    className="p-6 backdrop-blur-xl bg-accent/5 border border-accent/20"
                    borderRadius="rounded-2xl"
                  >
                    <h4 className="font-display text-lg font-semibold text-obsidian dark:text-bone mb-4">
                      Investment Details
                    </h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-obsidian/70 dark:text-bone/70">Individual Total</span>
                        <span className="font-medium text-obsidian dark:text-bone">{bundle.pricing.individual}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-obsidian/70 dark:text-bone/70">Bundle Price</span>
                        <span className="font-bold text-accent">{bundle.pricing.bundlePrice}</span>
                      </div>
                      <div className="pt-4 border-t border-obsidian/10 dark:border-bone/10">
                        <div className="text-center">
                          <div className="text-sm text-green-600 dark:text-green-400 font-medium mb-2">
                            {bundle.pricing.savings}
                          </div>
                          <div className="text-xs text-obsidian/60 dark:text-bone/60">
                            Timeline: {bundle.pricing.timeline}
                          </div>
                        </div>
                      </div>
                    </div>
                  </LiquidGlassCard>
                  
                </div>
              </motion.div>
            )}
            
            {/* What's Included Tab */}
            {activeSection === 'includes' && (
              <motion.div
                key="includes"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-12">
                  <h2 className="font-display text-3xl font-semibold text-obsidian dark:text-bone mb-4">
                    What's Included
                  </h2>
                  <p className="text-xl text-obsidian/70 dark:text-bone/70 max-w-3xl mx-auto">
                    Everything you need in one comprehensive package
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {bundle.includes.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <LiquidGlassCard
                        intensity="medium"
                        animated
                        className="p-6 backdrop-blur-xl bg-white/10 border border-obsidian/10 dark:bg-obsidian/10 dark:border-bone/10 h-full hover:border-accent/20 transition-all duration-300"
                        borderRadius="rounded-2xl"
                      >
                        <div className="text-center">
                          <h3 className="font-display text-lg font-semibold text-obsidian dark:text-bone mb-3">
                            {item.title}
                          </h3>
                          <div className="text-sm text-accent font-medium mb-4">
                            Individual: {item.individualPrice}
                          </div>
                          <Link
                            href={`/deliverables/${item.deliverableId}`}
                            className="inline-flex items-center text-sm text-obsidian/70 dark:text-bone/70 hover:text-accent transition-colors duration-300"
                          >
                            Learn More
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </LiquidGlassCard>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            
            {/* Process Tab */}
            {activeSection === 'process' && (
              <motion.div
                key="process"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-12">
                  <h2 className="font-display text-3xl font-semibold text-obsidian dark:text-bone mb-4">
                    Our Process
                  </h2>
                  <p className="text-xl text-obsidian/70 dark:text-bone/70 max-w-3xl mx-auto">
                    A systematic approach designed for exceptional results
                  </p>
                </div>
                
                <div className="max-w-4xl mx-auto">
                  {bundle.process.map((phase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative flex gap-8 pb-12 last:pb-0"
                    >
                      {/* Timeline Line */}
                      {index < bundle.process.length - 1 && (
                        <div className="absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-accent to-accent/20" />
                      )}
                      
                      {/* Phase Number */}
                      <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-obsidian font-bold text-lg">
                        {index + 1}
                      </div>
                      
                      {/* Phase Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <h3 className="font-display text-xl font-semibold text-obsidian dark:text-bone">
                            {phase.week}
                          </h3>
                          <span className="px-3 py-1 bg-accent/10 rounded-full text-sm text-accent font-medium">
                            {phase.focus}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {phase.deliverables.map((deliverable, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-white/50 dark:bg-obsidian/20 rounded-lg text-sm text-obsidian/80 dark:text-bone/80 border border-obsidian/10 dark:border-bone/10"
                            >
                              {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            
            {/* FAQ Tab */}
            {activeSection === 'faq' && (
              <motion.div
                key="faq"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-12">
                  <h2 className="font-display text-3xl font-semibold text-obsidian dark:text-bone mb-4">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-xl text-obsidian/70 dark:text-bone/70 max-w-3xl mx-auto">
                    Everything you need to know about this bundle
                  </p>
                </div>
                
                <div className="max-w-4xl mx-auto space-y-6">
                  {bundle.faq.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <LiquidGlassCard
                        intensity="medium"
                        animated
                        className="p-6 backdrop-blur-xl bg-white/10 border border-obsidian/10 dark:bg-obsidian/10 dark:border-bone/10"
                        borderRadius="rounded-xl"
                      >
                        <h3 className="font-display text-lg font-semibold text-obsidian dark:text-bone mb-3">
                          {item.question}
                        </h3>
                        <p className="text-obsidian/80 dark:text-bone/80 leading-relaxed">
                          {item.answer}
                        </p>
                      </LiquidGlassCard>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            
          </AnimatePresence>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-br from-obsidian via-obsidian/95 to-obsidian/90 text-bone py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-bone/80 mb-8 leading-relaxed">
            Let's discuss your project and create something exceptional together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-obsidian font-semibold rounded-xl hover:bg-accent/90 transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </Link>
            <Link
              href="/approach"
              className="inline-flex items-center justify-center px-8 py-4 border border-bone/20 text-bone font-semibold rounded-xl hover:bg-bone/5 transition-all duration-300"
            >
              Learn About Our Approach
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
} 