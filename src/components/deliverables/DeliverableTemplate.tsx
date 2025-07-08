'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Deliverable } from '@/lib/deliverables';
import { getBundlesForDeliverable, Bundle } from '@/lib/deliverables/bundles';
import { cn } from '@/lib/utils';
import NextStageNavbar from '@/components/NextStageNavbar';
import Footer from '@/components/Footer';

interface DeliverableTemplateProps {
  deliverable: Deliverable;
}

export default function DeliverableTemplate({ deliverable }: DeliverableTemplateProps) {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'process' | 'faq'>('overview');
  const [relatedBundles, setRelatedBundles] = useState<Bundle[]>([]);

  useEffect(() => {
    setMounted(true);
    setRelatedBundles(getBundlesForDeliverable(deliverable.id));
  }, [deliverable.id]);



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
                { key: 'overview', label: "What's Included" },
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
            
            {/* What's Included Tab */}
            {activeTab === 'overview' && (
                              <motion.div
                  key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-20"
              >
                {/* Section Header */}
                <div className="text-center">
                  <div className="mb-6 text-sm font-medium text-obsidian/60 tracking-[0.2em] uppercase">
                    What You'll Receive
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-obsidian mb-6 tracking-tight">
                    Complete Solution Overview
                  </h2>
                  <p className="text-lg sm:text-xl lg:text-2xl text-obsidian/80 font-light max-w-3xl mx-auto leading-relaxed">
                    Every component designed to deliver measurable results for your business
                  </p>
                  <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent/30 mx-auto mt-8" />
                </div>

                {/* Main Content Layout - Balanced Three Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                  
                  {/* What's Included - Takes up 2 columns */}
                  <div className="lg:col-span-2 space-y-8">
                    <div className="flex items-start gap-6 mb-8">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-obsidian rounded-2xl flex items-center justify-center shadow-xl">
                          <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-obsidian text-accent border border-obsidian mb-3">
                          Comprehensive Delivery
                        </span>
                        <h3 className="font-display text-2xl lg:text-3xl font-semibold text-obsidian mb-4 leading-tight">
                          What's Included
                        </h3>
                      </div>
                    </div>

                    {/* Enhanced Grid Layout */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {deliverable.includes.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="group relative"
                        >
                          <div className="bg-white rounded-2xl p-6 border-2 border-obsidian/[0.08] hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-obsidian/[0.04] h-full">
                            {/* Icon and Title */}
                            <div className="flex items-start gap-4 mb-4">
                              <div className="flex-shrink-0 w-12 h-12 bg-obsidian rounded-xl flex items-center justify-center group-hover:bg-obsidian/90 transition-all duration-300 shadow-sm">
                                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-semibold text-obsidian group-hover:text-accent transition-colors duration-300">
                                  {item.title}
                                </h4>
                              </div>
                            </div>

                            {/* Description */}
                            <p className="text-obsidian/70 leading-relaxed group-hover:text-obsidian/80 transition-colors duration-300">
                              {item.description}
                            </p>

                            {/* Hover Effect Border */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Value Proposition Footer */}
                    <div className="mt-8">
                      <div className="bg-gradient-to-r from-bone/30 via-bone/20 to-bone/30 rounded-2xl p-6 border border-obsidian/[0.08]">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-6 h-6 bg-obsidian rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <h4 className="text-lg font-semibold text-obsidian">
                            Complete Solution, No Surprises
                          </h4>
                        </div>
                        <p className="text-obsidian/70 leading-relaxed">
                          Everything listed above is included in your investment. No hidden fees, no surprise charges, 
                          no "that's extra" conversations.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Perfect For & Expected Outcomes */}
                  <div className="space-y-12">
                    
                    {/* Perfect For Section */}
                    <div className="relative">
                      <div className="bg-white rounded-2xl p-8 border-2 border-obsidian/[0.08] hover:border-accent/20 transition-all duration-300 hover:shadow-lg hover:shadow-obsidian/[0.04] h-full">
                                                 <div className="flex items-start gap-4 mb-6">
                           <div className="flex-shrink-0">
                             <div className="w-12 h-12 bg-obsidian rounded-xl flex items-center justify-center shadow-sm">
                               <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                               </svg>
                             </div>
                           </div>
                          <div className="flex-1">
                            <h3 className="font-display text-xl font-semibold text-obsidian mb-2 leading-tight">
                              Perfect For
                            </h3>
                            <p className="text-sm text-obsidian/60">
                              Ideal client profiles
                            </p>
                          </div>
                        </div>
                        
                        <ul className="space-y-3">
                          {deliverable.perfectFor.map((item, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="flex items-start gap-3 text-obsidian/80"
                            >
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm leading-relaxed">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Expected Outcomes Section */}
                    <div className="relative">
                      <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-8 border-2 border-accent/20 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/[0.08] h-full">
                                                 <div className="flex items-start gap-4 mb-6">
                           <div className="flex-shrink-0">
                             <div className="w-12 h-12 bg-obsidian rounded-xl flex items-center justify-center shadow-sm">
                               <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                               </svg>
                             </div>
                           </div>
                          <div className="flex-1">
                            <h3 className="font-display text-xl font-semibold text-obsidian mb-2 leading-tight">
                              Expected Outcomes
                            </h3>
                            <p className="text-sm text-obsidian/60">
                              Measurable results
                            </p>
                          </div>
                        </div>
                        
                        <div className="space-y-6">
                          {deliverable.outcomes.map((outcome, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: index * 0.1 }}
                              className="relative"
                            >
                              <div className="flex items-start gap-3 mb-2">
                                <div className="w-6 h-6 bg-obsidian rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <h4 className="font-semibold text-obsidian text-base leading-tight">
                                  {outcome.metric}
                                </h4>
                              </div>
                              <p className="text-sm text-obsidian/70 leading-relaxed ml-9">
                                {outcome.description}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
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
      
      {/* Related Bundles Section */}
      {relatedBundles.length > 0 && (
        <section className="relative py-20 lg:py-24 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-bone/30 via-white/50 to-bone/40" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center mb-6"
              >
                <div className="flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 animate-pulse" />
                  <span className="text-sm font-medium text-accent tracking-wide">Bundle Packages</span>
                </div>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-3xl lg:text-4xl font-semibold text-obsidian mb-4"
              >
                Better Together
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-obsidian/70 max-w-3xl mx-auto leading-relaxed"
              >
                Comprehensive packages that combine this service with complementary offerings for enhanced outcomes
              </motion.p>
            </div>
            
            {/* Bundles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedBundles.map((bundle, index) => (
                <motion.div
                  key={bundle.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-obsidian/[0.08] hover:border-accent/20 transition-all duration-500 hover:shadow-2xl hover:shadow-obsidian/[0.08] hover:-translate-y-1">
                    
                    {/* Subtle glow effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-accent/10 transition-all duration-500" />
                    
                    <div className="relative z-10">
                      
                      {/* Bundle Header */}
                      <div className="mb-8">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="font-display text-xl font-semibold text-obsidian group-hover:text-accent transition-colors duration-300 leading-tight">
                            {bundle.title}
                          </h3>
                          <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                            <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                        
                        <p className="text-obsidian/70 mb-6 leading-relaxed">
                          {bundle.tagline}
                        </p>
                        
                        {/* Elegant pricing display */}
                        <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl p-4 border border-accent/10">
                          <div className="flex items-baseline justify-between mb-2">
                            <span className="text-sm text-obsidian/60 font-medium">Bundle Investment</span>
                            <span className="text-lg font-semibold text-accent">{bundle.pricing.bundlePrice}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-obsidian/50">{bundle.pricing.timeline}</span>
                            <span className="text-accent/80 font-medium">{bundle.pricing.savings}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* What's Included */}
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-obsidian/80 mb-4 tracking-wide uppercase">
                          What's Included
                        </h4>
                        <div className="space-y-3">
                          {bundle.includes.slice(0, 3).map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3 group/item">
                              <div className="w-5 h-5 bg-obsidian rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0 group-hover/item:bg-accent transition-colors duration-300">
                                <svg className="w-3 h-3 text-accent group-hover/item:text-obsidian transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <span className="text-sm text-obsidian/80 font-medium leading-relaxed block">
                                  {item.title}
                                </span>
                                <span className="text-xs text-obsidian/50 block mt-1">
                                  Individual: {item.individualPrice}
                                </span>
                              </div>
                            </div>
                          ))}
                          {bundle.includes.length > 3 && (
                            <div className="pt-2 border-t border-obsidian/10">
                              <span className="text-sm text-accent font-medium">
                                + {bundle.includes.length - 3} additional services
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* CTA */}
                      <Link
                        href={`/bundles/${bundle.id}`}
                        className="group/cta flex items-center justify-center w-full px-6 py-3 bg-obsidian text-bone font-medium rounded-xl hover:bg-accent hover:text-obsidian transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                      >
                        <span>Explore Bundle</span>
                        <svg className="w-4 h-4 ml-2 group-hover/cta:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-16"
            >
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-obsidian/10">
                <div className="text-center sm:text-left">
                  <p className="text-obsidian font-medium mb-1">
                    Need a custom combination?
                  </p>
                  <p className="text-sm text-obsidian/70">
                    We can create tailored packages for your specific needs
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-accent text-obsidian font-medium rounded-xl hover:bg-accent/90 transition-all duration-300 whitespace-nowrap"
                >
                  Discuss Custom Bundle
                </Link>
              </div>
            </motion.div>
            
          </div>
        </section>
      )}
      
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