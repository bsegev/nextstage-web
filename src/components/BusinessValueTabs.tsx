'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Tabs } from '@/components/ui/tabs';
// import { GlowingEffect } from '@/components/ui/glowing-effect';

export default function BusinessValueTabs() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const tabs = [
    {
      title: "Ideate",
      value: "ideate",
      content: (
        <div className="group relative">
          <div className="absolute -inset-px rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-b from-accent/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative bg-obsidian/80 border border-accent/10 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 transition-all duration-300 ease-out group-hover:border-accent/20 group-hover:bg-obsidian/90">
            
            {/* <GlowingEffect
              variant="peach"
              spread={40}
              glow={false}
              disabled={false}
              proximity={80}
              inactiveZone={0.5}
              movementDuration={2}
              borderWidth={1}
            /> */}
            
            <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-accent/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl lg:rounded-3xl" />
            
            <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {/* Text Content */}
              <div className="flex flex-col justify-center order-2 lg:order-1">
                <div className="mb-4 sm:mb-6 lg:mb-8">
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-bone mb-3 sm:mb-4 lg:mb-6 tracking-[-0.01em]">
                    Ideate
                  </h3>
                  <div className="inline-flex items-center mb-4 sm:mb-6 lg:mb-8">
                    <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-accent/10 rounded-full border border-accent/15 group-hover:bg-accent/15 group-hover:border-accent/25 transition-all duration-300">
                      <span className="text-xs sm:text-sm font-medium text-bone/70 tracking-wide">
                        For what&apos;s possible next
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  <p className="text-sm sm:text-base lg:text-xl leading-[1.6] text-bone/75 font-light tracking-[-0.005em]">
                    Find the right opportunity and build a plan that works. We turn your vision into a clear strategy with measurable goals.
                  </p>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="text-sm sm:text-base lg:text-lg font-medium text-bone/90 mb-2 sm:mb-3">We deliver:</h4>
                    <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm lg:text-base text-bone/60">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span>Market research and opportunity analysis</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span>Clear vision and success metrics</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span>Strategic roadmap and next steps</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span>Risk assessment and mitigation plan</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Image Content */}
              <div className="flex items-center justify-center order-1 lg:order-2 lg:justify-end">
                <div className="relative w-full max-w-[280px] sm:max-w-xs lg:max-w-md aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl sm:rounded-2xl transform rotate-1 sm:rotate-3 group-hover:rotate-3 lg:group-hover:rotate-6 transition-transform duration-500" />
                  <div className="relative bg-gradient-to-br from-accent/10 to-transparent rounded-xl sm:rounded-2xl h-full flex items-center justify-center border border-accent/20 overflow-hidden">
                    <motion.img
                      key="ideate-image"
                      src="/images/ns_ideate.png"
                      alt="Ideate - Opportunity and Vision"
                      className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Create",
      value: "create",
      content: (
        <div className="group relative">
          <div className="absolute -inset-px rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-b from-accent/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative bg-obsidian/80 border border-accent/10 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 transition-all duration-300 ease-out group-hover:border-accent/20 group-hover:bg-obsidian/90">
            
            {/* <GlowingEffect
              variant="peach"
              spread={40}
              glow={false}
              disabled={false}
              proximity={80}
              inactiveZone={0.5}
              movementDuration={2}
              borderWidth={1}
            /> */}
            
            <div className="absolute inset-0 bg-gradient-to-br from-accent/6 via-accent/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl lg:rounded-3xl" />
            
            <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {/* Text Content */}
              <div className="flex flex-col justify-center order-2 lg:order-1">
                <div className="mb-4 sm:mb-6 lg:mb-8">
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-bone mb-3 sm:mb-4 lg:mb-6 tracking-[-0.01em]">
                    Create
                  </h3>
                  <div className="inline-flex items-center mb-4 sm:mb-6 lg:mb-8">
                    <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-accent/10 rounded-full border border-accent/15 group-hover:bg-accent/15 group-hover:border-accent/25 transition-all duration-300">
                      <span className="text-xs sm:text-sm font-medium text-bone/70 tracking-wide">
                        For what doesn&apos;t exist yet
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  <p className="text-sm sm:text-base lg:text-xl leading-[1.6] text-bone/75 font-light tracking-[-0.005em]">
                    Build your business from the ground up. We design the model, product, and brand so you launch ready to compete and win.
                  </p>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="text-sm sm:text-base lg:text-lg font-medium text-bone/90 mb-2 sm:mb-3">We deliver:</h4>
                    <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm lg:text-base text-bone/60">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span>Business model and financial projections</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span>Product design and development plan</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span>Brand identity and messaging strategy</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span>Launch strategy and marketing plan</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Image Content */}
              <div className="flex items-center justify-center order-1 lg:order-2 lg:justify-end">
                <div className="relative w-full max-w-[280px] sm:max-w-xs lg:max-w-md aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl sm:rounded-2xl transform -rotate-1 sm:-rotate-3 group-hover:-rotate-3 lg:group-hover:-rotate-6 transition-transform duration-500" />
                  <div className="relative bg-gradient-to-br from-accent/10 to-transparent rounded-xl sm:rounded-2xl h-full flex items-center justify-center border border-accent/20 overflow-hidden">
                    <motion.img
                      key="create-image"
                      src="/images/ns_create.png"
                      alt="Create - Blueprint and Foundation"
                      className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Activate",
      value: "activate",
      content: (
        <div className="group relative">
          <div className="absolute -inset-px rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-b from-accent/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative bg-obsidian/80 border border-accent/10 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 transition-all duration-300 ease-out group-hover:border-accent/20 group-hover:bg-obsidian/90">
            
            <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-accent/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl lg:rounded-3xl" />
            
            <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {/* Text Content */}
              <div className="flex flex-col justify-center order-2 lg:order-1">
                <div className="mb-4 sm:mb-6 lg:mb-8">
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-bone mb-3 sm:mb-4 lg:mb-6 tracking-[-0.01em]">
                    Activate
                  </h3>
                  <div className="inline-flex items-center mb-4 sm:mb-6 lg:mb-8">
                    <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-accent/10 rounded-full border border-accent/15 group-hover:bg-accent/15 group-hover:border-accent/25 transition-all duration-300">
                      <span className="text-xs sm:text-sm font-medium text-bone/70 tracking-wide">
                        For when plans meet reality
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  <p className="text-sm sm:text-base lg:text-xl leading-[1.6] text-bone/75 font-light tracking-[-0.005em]">
                    Execute your plan and get to market fast. We build, launch, and track performance so you start generating results immediately.
                  </p>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="text-sm sm:text-base lg:text-lg font-medium text-bone/90 mb-2 sm:mb-3">We deliver:</h4>
                    <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm lg:text-base text-bone/60">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span>Product development and launch execution</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span>Customer acquisition and growth campaigns</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span>Sales systems and revenue tracking</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span>Performance monitoring and optimization</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Image Content */}
              <div className="flex items-center justify-center order-1 lg:order-2 lg:justify-end">
                <div className="relative w-full max-w-[280px] sm:max-w-xs lg:max-w-md aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl sm:rounded-2xl transform rotate-1 sm:rotate-3 group-hover:rotate-3 lg:group-hover:rotate-6 transition-transform duration-500" />
                  <div className="relative bg-gradient-to-br from-accent/10 to-transparent rounded-xl sm:rounded-2xl h-full flex items-center justify-center border border-accent/20 overflow-hidden">
                    <motion.img
                      key="activate-image"
                      src="/images/ns_activate.png"
                      alt="Activate - Build and Launch"
                      className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Elevate",
      value: "elevate",
      content: (
        <div className="group relative">
          <div className="absolute -inset-px rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-b from-accent/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative bg-obsidian/80 border border-accent/10 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 transition-all duration-300 ease-out group-hover:border-accent/20 group-hover:bg-obsidian/90">
            
            <div className="absolute inset-0 bg-gradient-to-br from-accent/6 via-accent/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl lg:rounded-3xl" />
            
            <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {/* Text Content */}
              <div className="flex flex-col justify-center order-2 lg:order-1">
                <div className="mb-4 sm:mb-6 lg:mb-8">
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-bone mb-3 sm:mb-4 lg:mb-6 tracking-[-0.01em]">
                    Elevate
                  </h3>
                  <div className="inline-flex items-center mb-4 sm:mb-6 lg:mb-8">
                    <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-accent/10 rounded-full border border-accent/15 group-hover:bg-accent/15 group-hover:border-accent/25 transition-all duration-300">
                      <span className="text-xs sm:text-sm font-medium text-bone/70 tracking-wide">
                        For leveling up what works
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  <p className="text-sm sm:text-base lg:text-xl leading-[1.6] text-bone/75 font-light tracking-[-0.005em]">
                    Optimize what&apos;s working and fix what&apos;s not. We streamline operations, improve customer experience, and boost your bottom line.
                  </p>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="text-sm sm:text-base lg:text-lg font-medium text-bone/90 mb-2 sm:mb-3">We deliver:</h4>
                    <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm lg:text-base text-bone/60">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span>Process optimization and automation</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span>Data systems and business intelligence</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span>Customer experience improvements</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span>Team training and operational efficiency</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Image Content */}
              <div className="flex items-center justify-center order-1 lg:order-2 lg:justify-end">
                <div className="relative w-full max-w-[280px] sm:max-w-xs lg:max-w-md aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl sm:rounded-2xl transform -rotate-1 sm:-rotate-3 group-hover:-rotate-3 lg:group-hover:-rotate-6 transition-transform duration-500" />
                  <div className="relative bg-gradient-to-br from-accent/10 to-transparent rounded-xl sm:rounded-2xl h-full flex items-center justify-center border border-accent/20 overflow-hidden">
                    <motion.img
                      key="elevate-image"
                      src="/images/ns_elevate.png"
                      alt="Elevate - Optimization and Refinement"
                      className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Accelerate",
      value: "accelerate",
      content: (
        <div className="group relative">
          <div className="absolute -inset-px rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-b from-accent/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative bg-obsidian/80 border border-accent/10 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 transition-all duration-300 ease-out group-hover:border-accent/20 group-hover:bg-obsidian/90">
            
            {/* <GlowingEffect
              variant="peach"
              spread={40}
              glow={false}
              disabled={false}
              proximity={80}
              inactiveZone={0.5}
              movementDuration={2}
              borderWidth={1}
            /> */}
            
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl lg:rounded-3xl" />
            
            <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {/* Text Content */}
              <div className="flex flex-col justify-center order-2 lg:order-1">
                <div className="mb-4 sm:mb-6 lg:mb-8">
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-bone mb-3 sm:mb-4 lg:mb-6 tracking-[-0.01em]">
                    Accelerate
                  </h3>
                  <div className="inline-flex items-center mb-4 sm:mb-6 lg:mb-8">
                    <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-accent/10 rounded-full border border-accent/15 group-hover:bg-accent/15 group-hover:border-accent/25 transition-all duration-300">
                      <span className="text-xs sm:text-sm font-medium text-bone/70 tracking-wide">
                        For compounding growth
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  <p className="text-sm sm:text-base lg:text-xl leading-[1.6] text-bone/75 font-light tracking-[-0.005em]">
                    Scale fast without breaking. We build the systems and strategy you need to grow efficiently and sustainably.
                  </p>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="text-sm sm:text-base lg:text-lg font-medium text-bone/90 mb-2 sm:mb-3">We deliver:</h4>
                    <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm lg:text-base text-bone/60">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span>Scalable systems and infrastructure</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span>Growth strategy and performance tracking</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span>Market expansion and partnership plans</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span>Innovation roadmap and future opportunities</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Image Content */}
              <div className="flex items-center justify-center order-1 lg:order-2 lg:justify-end">
                <div className="relative w-full max-w-[280px] sm:max-w-xs lg:max-w-md aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl sm:rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform duration-500" />
                  <div className="relative bg-gradient-to-br from-accent/10 to-transparent rounded-xl sm:rounded-2xl h-full flex items-center justify-center border border-accent/20 overflow-hidden">
                    <motion.img
                      key="accelerate-image"
                      src="/images/ns_accelerate.png"
                      alt="Accelerate - Scale and Velocity"
                      className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 xl:py-40 bg-obsidian overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,224,215,0.02),transparent_70%)]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className={`text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 transition-all duration-1200 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="mb-4 sm:mb-6 lg:mb-8 text-xs sm:text-sm font-medium text-bone/60 tracking-wide uppercase">
            <span>Transformation</span>
          </div>
          
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-3 sm:mb-4 lg:mb-6 text-bone">
            <span className="block mb-1 sm:mb-2 lg:mb-3">For every stage of business,</span>
            <span className="block relative">
              <span className="bg-gradient-to-r from-bone via-accent to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                meant to get you to the next
              </span>
            </span>
          </h2>
          
          <div className="max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto px-2 sm:px-0">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-[1.4] sm:leading-[1.4] text-bone/75 font-light tracking-[-0.01em]">
              Every journey is unique. Every solution is complete.
            </p>
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-300 mb-16 sm:mb-20 md:mb-24 lg:mb-32 xl:mb-40 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <div className="[perspective:1000px] relative flex flex-col max-w-6xl mx-auto w-full items-start justify-start h-auto min-h-0 lg:min-h-[600px]">
            <Tabs 
              tabs={tabs}
              containerClassName="mb-6 sm:mb-8 lg:mb-8 justify-start lg:justify-center"
              tabClassName="min-h-[48px] px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-medium tracking-wide transition-all duration-300 hover:bg-accent/5 whitespace-nowrap"
              activeTabClassName="bg-accent/10 border border-accent/20 shadow-lg"
              contentClassName="mt-2 sm:mt-4 lg:mt-8"
            />
          </div>
        </div>

        <div className={`text-center mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28 transition-all duration-1000 delay-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-sm sm:text-base lg:text-lg text-bone/60 font-light leading-relaxed mb-6 sm:mb-8 max-w-4xl mx-auto">
            Each transformation integrates strategy, design, and technology. One team. One timeline. One vision.
          </p>
          
          <div className="flex justify-center">
            <button className="group relative min-h-[48px]">
              {/* Button background with gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/40 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative inline-flex items-center gap-2 sm:gap-3 lg:gap-4 px-5 sm:px-6 lg:px-8 xl:px-10 py-3 sm:py-4 lg:py-5 bg-obsidian/90 backdrop-blur-sm border border-accent/20 text-bone rounded-full text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 group-hover:bg-bone group-hover:text-obsidian group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:-translate-y-1">
                <span className="relative">
                  Start Your Transformation
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full block" />
                </span>
                
                {/* Animated arrow */}
                <div className="relative overflow-hidden w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
                  <svg 
                    className="absolute w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-all duration-300 group-hover:translate-x-6 group-hover:opacity-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <svg 
                    className="absolute w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 -translate-x-6 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 