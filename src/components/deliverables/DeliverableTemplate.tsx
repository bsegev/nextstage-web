'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Deliverable } from '@/lib/deliverables';
import { cn } from '@/lib/utils';
import NextStageNavbar from '@/components/NextStageNavbar';
import Footer from '@/components/Footer';

interface DeliverableTemplateProps {
  deliverable: Deliverable;
}

export default function DeliverableTemplate({ deliverable }: DeliverableTemplateProps) {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'process' | 'faq'>('overview');

  useEffect(() => {
    setMounted(true);
  }, []);



  return (
    <div className="min-h-screen bg-bone">
      
      {/* Navigation */}
      <NextStageNavbar />
      
      {/* Hero Section - Above the Fold */}
      <section className="relative bg-gradient-to-br from-obsidian via-obsidian/95 to-obsidian/90 text-bone overflow-hidden">
        
        {/* Sophisticated Background Elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-bone rounded-full blur-3xl"></div>
        </div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(245,244,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(245,244,241,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left: Content */}
            <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              
              {/* Category Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <span className="text-sm font-medium text-accent tracking-wide">
                  {deliverable.category}
                </span>
              </div>
              
              {/* Title */}
              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-[-0.02em] leading-[0.9] mb-6">
                {deliverable.title}
              </h1>
              
              {/* Tagline */}
              <p className="text-xl lg:text-2xl text-bone/80 font-light mb-8 leading-relaxed">
                {deliverable.tagline}
              </p>
              
              {/* Investment Info */}
              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <div>
                    <p className="text-sm text-bone/60 uppercase tracking-wide">Investment</p>
                    <p className="text-lg font-medium">{deliverable.investment.typical}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <div>
                    <p className="text-sm text-bone/60 uppercase tracking-wide">Timeline</p>
                    <p className="text-lg font-medium">{deliverable.investment.timeline}</p>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent text-obsidian font-medium rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105"
                >
                  Start Your Project
                </Link>
                <button
                  onClick={() => setActiveTab('overview')}
                  className="inline-flex items-center justify-center px-8 py-4 border border-bone/20 text-bone font-medium rounded-lg hover:bg-bone/5 transition-all duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
            
            {/* Right: Hero Image */}
            <div className={`transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-bone/10">
                <Image
                  src={deliverable.heroImage}
                  alt={deliverable.title}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Elegant overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content with Tabs */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-white rounded-xl p-1 shadow-sm border border-obsidian/5">
              {[
                { key: 'overview', label: 'What&apos;s Included' },
                { key: 'process', label: 'Our Process' },
                { key: 'faq', label: 'FAQ' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as 'overview' | 'process' | 'faq')}
                  className={cn(
                    'px-6 py-3 rounded-lg font-medium transition-all duration-300',
                    activeTab === tab.key
                      ? 'bg-obsidian text-bone shadow-sm'
                      : 'text-obsidian/70 hover:text-obsidian hover:bg-obsidian/5'
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="min-h-[600px]">
            
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-12"
              >
                
                {/* What's Included */}
                <div className="lg:col-span-2">
                  <h2 className="font-display text-3xl font-semibold text-obsidian mb-8">
                    What&apos;s Included
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {deliverable.includes.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-xl p-6 border border-obsidian/5 hover:border-accent/20 transition-all duration-300"
                      >
                        <h3 className="font-display text-lg font-semibold text-obsidian mb-3">
                          {item.title}
                        </h3>
                        <p className="text-obsidian/70 leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Sidebar */}
                <div className="space-y-8">
                  
                  {/* Perfect For */}
                  <div className="bg-white rounded-xl p-6 border border-obsidian/5">
                    <h3 className="font-display text-xl font-semibold text-obsidian mb-4">
                      Perfect For
                    </h3>
                    <ul className="space-y-3">
                      {deliverable.perfectFor.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-obsidian/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Expected Outcomes */}
                  <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl p-6 border border-accent/20">
                    <h3 className="font-display text-xl font-semibold text-obsidian mb-4">
                      Expected Outcomes
                    </h3>
                    <div className="space-y-4">
                      {deliverable.outcomes.map((outcome, index) => (
                        <div key={index}>
                          <p className="font-semibold text-obsidian mb-1">
                            {outcome.metric}
                          </p>
                          <p className="text-sm text-obsidian/70">
                            {outcome.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Process Tab */}
            {activeTab === 'process' && (
              <motion.div
                key="process"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-12">
                  <h2 className="font-display text-3xl font-semibold text-obsidian mb-4">
                    Our Process
                  </h2>
                  <p className="text-xl text-obsidian/70 max-w-3xl mx-auto">
                    A systematic approach designed for clarity, efficiency, and exceptional results.
                  </p>
                </div>
                
                <div className="max-w-4xl mx-auto">
                  {deliverable.process.map((phase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative flex gap-8 pb-12 last:pb-0"
                    >
                      {/* Timeline Line */}
                      {index < deliverable.process.length - 1 && (
                        <div className="absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-accent to-accent/20"></div>
                      )}
                      
                      {/* Phase Number */}
                      <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-obsidian font-semibold">
                        {index + 1}
                      </div>
                      
                      {/* Phase Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <h3 className="font-display text-xl font-semibold text-obsidian">
                            {phase.phase}
                          </h3>
                          <span className="px-3 py-1 bg-obsidian/5 rounded-full text-sm text-obsidian/70">
                            {phase.duration}
                          </span>
                        </div>
                        <p className="text-obsidian/80 mb-4 leading-relaxed">
                          {phase.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {phase.deliverables.map((deliverable, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-white rounded-lg text-sm text-obsidian/70 border border-obsidian/10"
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
            {activeTab === 'faq' && (
              <motion.div
                key="faq"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-12">
                  <h2 className="font-display text-3xl font-semibold text-obsidian mb-4">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-xl text-obsidian/70 max-w-3xl mx-auto">
                    Everything you need to know about this deliverable.
                  </p>
                </div>
                
                <div className="max-w-4xl mx-auto space-y-6">
                  {deliverable.faq.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl p-6 border border-obsidian/5"
                    >
                      <h3 className="font-display text-lg font-semibold text-obsidian mb-3">
                        {item.question}
                      </h3>
                      <p className="text-obsidian/80 leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-br from-obsidian via-obsidian/95 to-obsidian/90 text-bone py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-bone/80 mb-8 leading-relaxed">
            Let&apos;s discuss your project and create something exceptional together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-obsidian font-medium rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </Link>
            <Link
              href="/approach"
              className="inline-flex items-center justify-center px-8 py-4 border border-bone/20 text-bone font-medium rounded-lg hover:bg-bone/5 transition-all duration-300"
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