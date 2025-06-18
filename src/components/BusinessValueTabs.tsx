'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Tabs } from '@/components/ui/tabs';
import { LiquidGlass } from '@/components/ui/liquid-glass';
// import { GlowingEffect } from '@/components/ui/glowing-effect';

function MobileAccordion({ title, items }: { title: string; items: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="block sm:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-accent/5 rounded-xl border border-accent/10 hover:bg-accent/10 transition-all duration-300"
      >
        <h4 className="text-base font-medium text-bone/90">{title}</h4>
        <div
          style={{ 
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease'
          }}
          className="text-bone/60"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      {isOpen && (
        <div className="pt-4 space-y-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 bg-accent/5 rounded-lg border border-accent/5"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-2 flex-shrink-0" />
              <span className="text-sm text-bone/60 leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function BusinessValueTabs() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const deliverables = {
    ideate: [
      "Market research report",
      "Clear business plan", 
      "Success roadmap",
      "And more..."
    ],
    create: [
      "Working prototype",
      "Brand and messaging",
      "Launch plan", 
      "And more..."
    ],
    activate: [
      "Live product launch",
      "Customer acquisition system",
      "Sales tracking dashboard",
      "And more..."
    ],
    elevate: [
      "Automated workflows",
      "Performance analytics",
      "Customer experience upgrades",
      "And more..."
    ],
    accelerate: [
      "Scaling infrastructure",
      "Growth tracking system", 
      "Expansion strategy",
      "And more..."
    ]
  };

  const tabs = [
    {
      title: "Stuck",
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
                  <h3 className="font-display text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-bone mb-3 sm:mb-4 lg:mb-6 tracking-[-0.01em]">
                    Stuck
                  </h3>
                  <div className="inline-flex items-center mb-4 sm:mb-6 lg:mb-8">
                    <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-accent/10 rounded-full border border-accent/15 group-hover:bg-accent/15 group-hover:border-accent/25 transition-all duration-300">
                      <span className="text-sm sm:text-sm font-medium text-bone/70 tracking-wide">
                        For when your idea needs direction
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  <p className="text-xl sm:text-base lg:text-xl leading-[1.6] text-bone/75 font-light tracking-[-0.005em]">
                    Great vision, unclear path. We help you find the right opportunity and build a plan that works.
                  </p>
                  
                  {/* Desktop List - Hidden on Mobile */}
                  <div className="hidden sm:block space-y-3 sm:space-y-4">
                    <h4 className="text-base sm:text-base lg:text-lg font-medium text-bone/90 mb-2 sm:mb-3">We deliver:</h4>
                    <ul className="space-y-2 sm:space-y-3 text-sm sm:text-sm lg:text-base text-bone/60">
                      {deliverables.ideate.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 sm:gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mobile Accordion - Visible on Mobile Only */}
                  <MobileAccordion 
                    title="We deliver:"
                    items={deliverables.ideate}
                  />
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
      title: "Building",
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
                  <h3 className="font-display text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-bone mb-3 sm:mb-4 lg:mb-6 tracking-[-0.01em]">
                    Building
                  </h3>
                  <div className="inline-flex items-center mb-4 sm:mb-6 lg:mb-8">
                    <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-accent/10 rounded-full border border-accent/15 group-hover:bg-accent/15 group-hover:border-accent/25 transition-all duration-300">
                      <span className="text-sm sm:text-sm font-medium text-bone/70 tracking-wide">
                        For when your concept needs reality
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  <p className="text-xl sm:text-base lg:text-xl leading-[1.6] text-bone/75 font-light tracking-[-0.005em]">
                    Ready to build but need it done right. We design, develop, and launch so you compete from day one.
                  </p>
                  
                  {/* Desktop List - Hidden on Mobile */}
                  <div className="hidden sm:block space-y-3 sm:space-y-4">
                    <h4 className="text-base sm:text-base lg:text-lg font-medium text-bone/90 mb-2 sm:mb-3">We deliver:</h4>
                    <ul className="space-y-2 sm:space-y-3 text-sm sm:text-sm lg:text-base text-bone/60">
                      {deliverables.create.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 sm:gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mobile Accordion - Visible on Mobile Only */}
                  <MobileAccordion 
                    title="We deliver:"
                    items={deliverables.create}
                  />
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
      title: "Launching",
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
                  <h3 className="font-display text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-bone mb-3 sm:mb-4 lg:mb-6 tracking-[-0.01em]">
                    Launching
                  </h3>
                  <div className="inline-flex items-center mb-4 sm:mb-6 lg:mb-8">
                    <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-accent/10 rounded-full border border-accent/15 group-hover:bg-accent/15 group-hover:border-accent/25 transition-all duration-300">
                      <span className="text-sm sm:text-sm font-medium text-bone/70 tracking-wide">
                        For when you&apos;re ready for market
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  <p className="text-xl sm:text-base lg:text-xl leading-[1.6] text-bone/75 font-light tracking-[-0.005em]">
                    Launch fast and track everything. Get customers, get data, build momentum from day one.
                  </p>
                  
                  {/* Desktop List - Hidden on Mobile */}
                  <div className="hidden sm:block space-y-3 sm:space-y-4">
                    <h4 className="text-base sm:text-base lg:text-lg font-medium text-bone/90 mb-2 sm:mb-3">We deliver:</h4>
                    <ul className="space-y-2 sm:space-y-3 text-sm sm:text-sm lg:text-base text-bone/60">
                      {deliverables.activate.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 sm:gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mobile Accordion - Visible on Mobile Only */}
                  <MobileAccordion 
                    title="We deliver:"
                    items={deliverables.activate}
                  />
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
      title: "Growing",
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
                  <h3 className="font-display text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-bone mb-3 sm:mb-4 lg:mb-6 tracking-[-0.01em]">
                    Growing
                  </h3>
                  <div className="inline-flex items-center mb-4 sm:mb-6 lg:mb-8">
                    <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-accent/10 rounded-full border border-accent/15 group-hover:bg-accent/15 group-hover:border-accent/25 transition-all duration-300">
                      <span className="text-sm sm:text-sm font-medium text-bone/70 tracking-wide">
                        For when you need to scale what works
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  <p className="text-xl sm:text-base lg:text-xl leading-[1.6] text-bone/75 font-light tracking-[-0.005em]">
                    Double down on what&apos;s working, optimize what could be better. Streamline operations while accelerating growth.
                  </p>
                  
                  {/* Desktop List - Hidden on Mobile */}
                  <div className="hidden sm:block space-y-3 sm:space-y-4">
                    <h4 className="text-base sm:text-base lg:text-lg font-medium text-bone/90 mb-2 sm:mb-3">We deliver:</h4>
                    <ul className="space-y-2 sm:space-y-3 text-sm sm:text-sm lg:text-base text-bone/60">
                      {deliverables.elevate.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 sm:gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mobile Accordion - Visible on Mobile Only */}
                  <MobileAccordion 
                    title="We deliver:"
                    items={deliverables.elevate}
                  />
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
      title: "Leading",
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
                  <h3 className="font-display text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-bone mb-3 sm:mb-4 lg:mb-6 tracking-[-0.01em]">
                    Leading
                  </h3>
                  <div className="inline-flex items-center mb-4 sm:mb-6 lg:mb-8">
                    <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-accent/10 rounded-full border border-accent/15 group-hover:bg-accent/15 group-hover:border-accent/25 transition-all duration-300">
                      <span className="text-sm sm:text-sm font-medium text-bone/70 tracking-wide">
                        For when you need to sustain advantage
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  <p className="text-xl sm:text-base lg:text-xl leading-[1.6] text-bone/75 font-light tracking-[-0.005em]">
                    Maintain your edge as you scale. Build systems that grow with you and extend your market position.
                  </p>
                  
                  {/* Desktop List - Hidden on Mobile */}
                  <div className="hidden sm:block space-y-3 sm:space-y-4">
                    <h4 className="text-base sm:text-base lg:text-lg font-medium text-bone/90 mb-2 sm:mb-3">We deliver:</h4>
                    <ul className="space-y-2 sm:space-y-3 text-sm sm:text-sm lg:text-base text-bone/60">
                      {deliverables.accelerate.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 sm:gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mobile Accordion - Visible on Mobile Only */}
                  <MobileAccordion 
                    title="We deliver:"
                    items={deliverables.accelerate}
                  />
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
          <div className="mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-sm font-medium text-bone/60 tracking-wide uppercase">
            <span>Where You Are</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-3 sm:mb-4 lg:mb-6 text-bone">
            <span className="bg-gradient-to-r from-bone via-accent to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              We Meet You There
            </span>
          </h2>
          
          <div className="max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto px-2 sm:px-0">
            <p className="text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-[1.4] sm:leading-[1.4] text-bone/75 font-light tracking-[-0.01em]">
              Every business is at a different stage. Every solution is built for yours.
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
          <p className="text-base sm:text-base lg:text-lg text-bone/60 font-light leading-relaxed mb-6 sm:mb-8 max-w-4xl mx-auto">
            Strategy, design, and technology. Built for your stage. Delivered together.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            {/* Primary CTA - Book Appointment */}
            <a href="https://cal.com/bensegev/30min" target="_blank" rel="noopener noreferrer" className="group relative min-h-[56px] touch-manipulation w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 rounded-full">
              {/* Button background with gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/40 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative inline-flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 px-5 sm:px-6 lg:px-8 xl:px-10 py-3 sm:py-4 lg:py-5 bg-accent text-obsidian rounded-full text-base sm:text-base lg:text-lg font-medium transition-all duration-300 group-hover:bg-accent/90 group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:-translate-y-1 group-active:scale-95 w-full sm:w-auto">
                <span className="relative">
                  Book appointment
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
            </a>

            {/* Secondary CTA - See Our Approach */}
            <Link href="/approach" className="group relative min-h-[56px] touch-manipulation w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2">
              <LiquidGlass 
                intensity="subtle" 
                animated
                borderRadius="rounded-full"
                className="group-hover:scale-[1.02] transition-transform duration-300 border-accent/30 group-hover:border-accent/50"
              >
                <div className="inline-flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 px-5 sm:px-6 lg:px-8 xl:px-10 py-3 sm:py-4 lg:py-5 text-bone/80 group-hover:text-bone text-base sm:text-base lg:text-lg font-medium transition-all duration-300 group-hover:-translate-y-1 w-full sm:w-auto">
                  <span className="relative">
                    See our approach
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
              </LiquidGlass>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 