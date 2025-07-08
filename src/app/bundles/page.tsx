"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getAllBundles } from "@/lib/deliverables";
import { LiquidGlass, LiquidGlassCard } from "@/components/ui/liquid-glass";
import Footer from "@/components/Footer";

export default function BundlesPage() {
  const bundles = getAllBundles();
  
  return (
    <div className="relative w-full overflow-hidden bg-background dark:bg-[#0B0B0F]">
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95 dark:from-[#0B0B0F]/95 dark:via-[#0B0B0F]/90 dark:to-[#0B0B0F]/95" />
        
        <div className="relative z-20 max-w-6xl mx-auto text-center px-6 sm:px-8 md:px-10 lg:px-12 py-20">
          
          {/* Badge */}
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
                  Bundle Packages
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
              Save with Bundles
            </h1>
          </motion.div>
          
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <p className="text-xl sm:text-2xl text-obsidian/80 dark:text-bone/80 font-light tracking-wide max-w-4xl mx-auto">
              Comprehensive packages that combine complementary services for better outcomes and streamlined delivery
            </p>
          </motion.div>
          
        </div>
      </section>
      
      {/* Bundles Grid */}
      <section className="relative z-10 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bundles.map((bundle, index) => (
              <motion.div
                key={bundle.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <LiquidGlassCard
                  intensity="medium"
                  animated
                  className="p-8 backdrop-blur-xl bg-white/10 border border-obsidian/10 dark:bg-obsidian/10 dark:border-bone/10 h-full hover:border-accent/20 transition-all duration-300 group"
                  borderRadius="rounded-2xl"
                >
                  
                  {/* Bundle Header */}
                  <div className="mb-6">
                    <h3 className="font-display text-2xl font-semibold text-obsidian dark:text-bone mb-3 group-hover:text-accent transition-colors duration-300">
                      {bundle.title}
                    </h3>
                    <p className="text-obsidian/70 dark:text-bone/70 mb-4 leading-relaxed">
                      {bundle.tagline}
                    </p>
                  </div>
                  
                  {/* Pricing */}
                  <div className="mb-6 p-4 bg-accent/5 rounded-xl border border-accent/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-obsidian/70 dark:text-bone/70">Bundle Price</span>
                      <span className="text-lg font-bold text-accent">{bundle.pricing.bundlePrice}</span>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium mb-1">
                        {bundle.pricing.savings}
                      </div>
                      <div className="text-xs text-obsidian/60 dark:text-bone/60">
                        {bundle.pricing.timeline}
                      </div>
                    </div>
                  </div>
                  
                  {/* What's Included Preview */}
                  <div className="mb-6">
                    <p className="text-sm font-medium text-obsidian/80 dark:text-bone/80 mb-3">Includes:</p>
                    <ul className="space-y-2">
                      {bundle.includes.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-obsidian/70 dark:text-bone/70">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{item.title}</span>
                        </li>
                      ))}
                      {bundle.includes.length > 3 && (
                        <li className="text-sm text-accent font-medium">
                          + {bundle.includes.length - 3} more...
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  {/* CTA */}
                  <div className="mt-auto">
                    <Link
                      href={`/bundles/${bundle.id}`}
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-accent text-obsidian font-semibold rounded-xl hover:bg-accent/90 transition-all duration-300 group-hover:scale-105"
                    >
                      View Bundle Details
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                  
                </LiquidGlassCard>
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>
      
      {/* Why Bundles Section */}
      <section className="relative z-10 py-20 lg:py-24 bg-bone/50 dark:bg-obsidian/50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
          
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-obsidian dark:text-bone mb-4">
              Why Choose Bundles?
            </h2>
            <p className="text-xl text-obsidian/70 dark:text-bone/70 max-w-3xl mx-auto">
              Strategic combinations that deliver better results than individual services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Better Outcomes",
                description: "Services work together synergistically for amplified results",
                icon: "📈"
              },
              {
                title: "Streamlined Process",
                description: "Coordinated delivery eliminates handoff delays and miscommunication",
                icon: "🎯"
              },
              {
                title: "Value Pricing",
                description: "Bundle pricing reflects the efficiency of integrated service delivery",
                icon: "💰"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <LiquidGlassCard
                  intensity="medium"
                  animated
                  className="p-6 backdrop-blur-xl bg-white/10 border border-obsidian/10 dark:bg-obsidian/10 dark:border-bone/10 text-center h-full"
                  borderRadius="rounded-2xl"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="font-display text-xl font-semibold text-obsidian dark:text-bone mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-obsidian/70 dark:text-bone/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </LiquidGlassCard>
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-br from-obsidian via-obsidian/95 to-obsidian/90 text-bone py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-bone/80 mb-8 leading-relaxed">
            Let's discuss which bundle best fits your needs and timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-obsidian font-semibold rounded-xl hover:bg-accent/90 transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border border-bone/20 text-bone font-semibold rounded-xl hover:bg-bone/5 transition-all duration-300"
            >
              Browse Individual Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
} 