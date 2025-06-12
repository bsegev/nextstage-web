"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Image from "next/image";

interface ClientStory {
  id: string;
  name: string;
  industry: string;
  quote: string;
  logo: string; // Path to the logo image
}

const clientStories: ClientStory[] = [
  {
    id: "wowwee",
    name: "WowWee",
    industry: "Consumer Electronics",
    quote: "Transformed our product launch from concept to market in record time",
    logo: "/images/client-logos/wowwee-logo.png"
  },
  {
    id: "similarweb",
    name: "SimilarWeb",
    industry: "Digital Intelligence", 
    quote: "Strategic design that unlocked new revenue streams and market opportunities",
    logo: "/images/client-logos/similarweb-logo.png"
  },
  {
    id: "bankdib",
    name: "Bank DIB",
    industry: "Financial Services",
    quote: "Digital transformation that redefined customer experience in banking",
    logo: "/images/client-logos/bankdib-logo.png"
  },
  {
    id: "sparrowpark",
    name: "Sparrow Park",
    industry: "Technology",
    quote: "It wasn't just design – it was strategy, storytelling, and execution all rolled into one.",
    logo: "/images/client-logos/sparrowpark-logo.png"
  },
  {
    id: "gridaero",
    name: "Grid Aero",
    industry: "Aerospace Technology",
    quote: "What stood out was getting comprehensive work with the speed and personal attention of working directly with the people doing the work.",
    logo: "/images/client-logos/gridaero-logo.png"
  },
  {
    id: "eccan",
    name: "Eccan",
    industry: "Sustainability Tech",
    quote: "Brought our complex technology to market with clarity and impact",
    logo: "/images/client-logos/eccan-logo.png"
  }
];

// Brand-specific gradient backgrounds
const brandColors = {
  wowwee: {
    gradient: "from-gray-300/20 via-gray-200/15 to-gray-400/25", // Metallic grey
    border: "#9ca3af",
    shadow: "rgba(156, 163, 175, 0.3)"
  },
  similarweb: {
    gradient: "from-gray-300/20 via-gray-200/15 to-gray-400/25", // Metallic grey
    border: "#9ca3af",
    shadow: "rgba(156, 163, 175, 0.3)"
  },
  bankdib: {
    gradient: "from-gray-300/20 via-gray-200/15 to-gray-400/25", // Metallic grey
    border: "#9ca3af", 
    shadow: "rgba(156, 163, 175, 0.3)"
  },
  sparrowpark: {
    gradient: "from-gray-300/20 via-gray-200/15 to-gray-400/25", // Metallic grey
    border: "#9ca3af",
    shadow: "rgba(156, 163, 175, 0.3)"
  },
  gridaero: {
    gradient: "from-gray-300/20 via-gray-200/15 to-gray-400/25", // Metallic grey
    border: "#9ca3af",
    shadow: "rgba(156, 163, 175, 0.3)"
  },
  eccan: {
    gradient: "from-gray-300/20 via-gray-200/15 to-gray-400/25", // Metallic grey
    border: "#9ca3af", 
    shadow: "rgba(156, 163, 175, 0.3)"
  }
};

export default function LogoShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileDialogOpen, setMobileDialogOpen] = useState(false);
  const [mobileSelectedIndex, setMobileSelectedIndex] = useState<number | null>(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

  // Desktop auto-rotation
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % clientStories.length);
    }, 6000); // 6 second intervals

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleLogoClick = (index: number) => {
    if (activeIndex === index) {
      setIsPaused(!isPaused);
    } else {
      setActiveIndex(index);
      setIsPaused(false);
    }
  };

  const handleMobileLogoClick = (index: number) => {
    setMobileSelectedIndex(index);
    setMobileDialogOpen(true);
  };

  const closeMobileDialog = () => {
    setMobileDialogOpen(false);
    setMobileSelectedIndex(null);
  };

  // Mobile swipe navigation
  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "left") {
      setMobileActiveIndex((prev) => (prev + 1) % clientStories.length);
    } else {
      setMobileActiveIndex((prev) => (prev - 1 + clientStories.length) % clientStories.length);
    }
  };

  const handlePanEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (Math.abs(info.offset.x) > swipeThreshold) {
      if (info.offset.x > 0) {
        handleSwipe("right");
      } else {
        handleSwipe("left");
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-bone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="mb-6 sm:mb-8 text-xs sm:text-sm font-medium text-obsidian/60 tracking-[0.2em] uppercase">
            <span>Trusted by leaders</span>
          </div>
          
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              Results that speak
            </span>
          </h2>
          <p className="text-base sm:text-lg text-obsidian/80 font-light max-w-2xl mx-auto">
            Every partnership delivers measurable impact. See how we have accelerated growth across industries.
          </p>
        </div>

        {/* DESKTOP LAYOUT - 3-column grid (hidden on mobile) */}
        <div className="hidden md:block">
          {/* Logo Grid */}
          <div className="grid grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto mb-12">
            {clientStories.map((client, index) => {
              const brandStyle = brandColors[client.id as keyof typeof brandColors];
              
              return (
                <motion.div
                  key={client.id}
                  className="relative aspect-square flex items-center justify-center cursor-pointer group"
                  onClick={() => handleLogoClick(index)}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Logo Container */}
                  <motion.div
                    className="w-full h-full rounded-2xl border flex items-center justify-center relative overflow-hidden"
                    animate={{
                      borderColor: activeIndex === index ? brandStyle.border : "rgba(10, 10, 10, 0.1)",
                      backgroundColor: activeIndex === index ? "rgba(255, 255, 255, 0.1)" : "rgba(10, 10, 10, 0.02)",
                      boxShadow: activeIndex === index 
                        ? `0 10px 40px ${brandStyle.shadow}` 
                        : hoveredIndex === index 
                          ? "0 5px 20px rgba(255, 224, 215, 0.2)"
                          : "0 2px 10px rgba(10, 10, 10, 0.05)"
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Brand-Specific Active Background */}
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${brandStyle.gradient} rounded-2xl`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ 
                            duration: 0.6,
                            ease: [0.4, 0, 0.2, 1]
                          }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Subtle Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="w-full h-full bg-gradient-to-br from-obsidian via-transparent to-accent"></div>
                    </div>
                    
                    {/* Logo Image */}
                    <motion.div
                      className="relative w-full h-full flex items-center justify-center p-8 z-10"
                      animate={{
                        scale: activeIndex === index ? 1.1 : 1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        fill
                        className="object-contain"
                        style={{
                          filter: activeIndex === index ? "none" : "grayscale(0.8) opacity(0.7)",
                          transition: "filter 0.5s ease"
                        }}
                      />
                    </motion.div>

                    {/* Hover Glow */}
                    <AnimatePresence>
                      {hoveredIndex === index && activeIndex !== index && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent rounded-2xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Active Indicator */}
                    {activeIndex === index && (
                      <motion.div
                        className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                        style={{ backgroundColor: brandStyle.border }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>

                  {/* Industry Label */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-obsidian/50 font-medium whitespace-nowrap">
                    {client.industry}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Quote Display */}
          <div className="max-w-3xl mx-auto text-center min-h-[120px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {activeIndex >= 0 && clientStories[activeIndex] && (
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  className="space-y-4"
                >
                  <blockquote className="text-xl sm:text-2xl font-light text-obsidian/90 leading-relaxed">
                    &ldquo;{clientStories[activeIndex].quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="h-px w-8 bg-accent"></div>
                    <cite className="text-sm font-medium text-obsidian/60 not-italic">
                      {clientStories[activeIndex].name}
                    </cite>
                    <div className="h-px w-8 bg-accent"></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Play/Pause Indicator */}
          <div className="flex justify-center mt-8">
            <motion.button
              onClick={() => setIsPaused(!isPaused)}
              className="flex items-center space-x-2 text-obsidian/60 hover:text-obsidian/80 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-8 h-8 rounded-full border border-obsidian/20 flex items-center justify-center">
                {isPaused ? (
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <span className="text-xs font-medium uppercase tracking-wide">
                {isPaused ? 'Play' : 'Pause'}
              </span>
            </motion.button>
          </div>
        </div>

        {/* MOBILE LAYOUT - Single column with swipe (visible on mobile only) */}
        <div className="block md:hidden">
          {/* Mobile Instructions */}
          <div className="text-center mb-8">
            <p className="text-sm text-obsidian/60 font-medium">
              Swipe or tap to explore client stories
            </p>
          </div>

          {/* Mobile Single Logo Display */}
          <div className="max-w-sm mx-auto mb-8">
            <motion.div
              className="relative"
              onPanEnd={handlePanEnd}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileActiveIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  {/* Main Logo Card */}
              <motion.div
                    className="aspect-square bg-white/60 backdrop-blur-sm border border-obsidian/10 rounded-2xl p-8 shadow-lg cursor-pointer"
                    onClick={() => handleMobileLogoClick(mobileActiveIndex)}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {/* Logo Container */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={clientStories[mobileActiveIndex].logo}
                        alt={`${clientStories[mobileActiveIndex].name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Touch indicator */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 rounded-2xl pointer-events-none" />
                  </motion.div>

                  {/* Company Info */}
                  <div className="text-center mt-6 space-y-2">
                    <h3 className="font-display text-lg font-semibold text-obsidian">
                      {clientStories[mobileActiveIndex].name}
                    </h3>
                    <p className="text-sm text-obsidian/60 font-medium">
                      {clientStories[mobileActiveIndex].industry}
                    </p>
                    <button
                      onClick={() => handleMobileLogoClick(mobileActiveIndex)}
                      className="inline-flex items-center space-x-2 text-sm text-accent font-medium hover:text-accent/80 transition-colors mt-3"
                    >
                      <span>Read their story</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center justify-center space-x-6">
            {/* Previous Button */}
            <motion.button
              onClick={() => handleSwipe("right")}
              className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm border border-obsidian/10 flex items-center justify-center text-obsidian/60 hover:text-obsidian hover:bg-white/80 transition-all duration-300 shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Progress Dots */}
            <div className="flex space-x-2">
              {clientStories.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setMobileActiveIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === mobileActiveIndex 
                      ? 'bg-accent w-6' 
                      : 'bg-obsidian/20 hover:bg-obsidian/40'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={() => handleSwipe("left")}
              className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm border border-obsidian/10 flex items-center justify-center text-obsidian/60 hover:text-obsidian hover:bg-white/80 transition-all duration-300 shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
                  </div>
                  
          {/* Mobile Grid Fallback */}
          <div className="mt-12 pt-8 border-t border-obsidian/10">
            <div className="text-center mb-6">
              <p className="text-sm text-obsidian/60 font-medium">
                Or view all clients
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto">
              {clientStories.map((client, index) => (
                <motion.div
                  key={client.id}
                  className="aspect-square bg-white/40 backdrop-blur-sm border border-obsidian/10 rounded-xl p-3 cursor-pointer"
                  onClick={() => handleMobileLogoClick(index)}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      className="object-contain"
                      style={{
                        filter: "grayscale(0.6) opacity(0.8)"
                      }}
                    />
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </div>

        {/* Enhanced Mobile Dialog */}
        <AnimatePresence>
          {mobileDialogOpen && mobileSelectedIndex !== null && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-obsidian/60 backdrop-blur-sm z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMobileDialog}
              />
              
              {/* Dialog */}
              <motion.div
                className="fixed inset-x-4 top-1/2 -translate-y-1/2 bg-bone rounded-3xl p-8 z-50 md:hidden border border-obsidian/10 shadow-2xl max-w-sm mx-auto"
                initial={{ opacity: 0, scale: 0.9, y: "-50%" }}
                animate={{ opacity: 1, scale: 1, y: "-50%" }}
                exit={{ opacity: 0, scale: 0.9, y: "-50%" }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Close Button */}
                <button
                  onClick={closeMobileDialog}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-obsidian/10 flex items-center justify-center text-obsidian/60 hover:text-obsidian hover:bg-obsidian/20 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Content */}
                <div className="space-y-6 pr-4">
                  {/* Company Logo & Info */}
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-2xl border border-obsidian/10 flex items-center justify-center bg-white/60 backdrop-blur-sm mb-4 p-3">
                      <Image
                        src={clientStories[mobileSelectedIndex].logo}
                        alt={`${clientStories[mobileSelectedIndex].name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-obsidian mb-1">
                        {clientStories[mobileSelectedIndex].name}
                    </h3>
                    <p className="text-sm text-obsidian/60 font-medium">
                        {clientStories[mobileSelectedIndex].industry}
                    </p>
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 text-3xl text-accent/30 font-serif">&ldquo;</div>
                    <blockquote className="text-base text-obsidian/90 leading-relaxed font-light pl-4">
                      {clientStories[mobileSelectedIndex].quote}
                  </blockquote>
                    <div className="absolute -bottom-2 -right-2 text-3xl text-accent/30 font-serif">&rdquo;</div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between pt-4 border-t border-obsidian/10">
                    <button
                      onClick={() => {
                        const prevIndex = (mobileSelectedIndex - 1 + clientStories.length) % clientStories.length;
                        setMobileSelectedIndex(prevIndex);
                      }}
                      className="flex items-center space-x-2 text-sm text-obsidian/60 hover:text-obsidian transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      <span>Previous</span>
                    </button>

                    <div className="text-xs text-obsidian/40 font-mono">
                      {mobileSelectedIndex + 1} / {clientStories.length}
                    </div>

                    <button
                      onClick={() => {
                        const nextIndex = (mobileSelectedIndex + 1) % clientStories.length;
                        setMobileSelectedIndex(nextIndex);
                      }}
                      className="flex items-center space-x-2 text-sm text-obsidian/60 hover:text-obsidian transition-colors"
                    >
                      <span>Next</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 