'use client';

import { useEffect, useState } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { cn } from "@/lib/utils";

import { 
  IconTarget,
  IconPalette, 
  IconScale, 
  IconCode, 
  IconRocket, 
  IconDashboard,
  IconTrendingUp,
  IconFiles,
  IconMail,
  IconChartBar,
  IconBolt,
  IconUsers,
  IconChevronLeft,
  IconChevronRight
} from "@tabler/icons-react";

export default function BrandDesignDeliverablesShowcase() {
  const [mounted, setMounted] = useState(false);
  const [, setHoveredIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [dragProgress, setDragProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // const itemsPerView = 1.15; // Slightly tighter for premium feel
  const totalItems = 12;
  const maxIndex = Math.max(0, totalItems - 1);
  const cardWidth = 320; // Fixed card width for consistent sizing
  const containerWidth = typeof window !== 'undefined' ? window.innerWidth : 375; // Fallback for SSR
  const centerOffset = (containerWidth - cardWidth) / 2; // Center the active card

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying || isDragging) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0; // Loop back to start
        }
        return prev + 1;
      });
    }, 4000); // 4 second intervals

    return () => clearInterval(interval);
  }, [isAutoPlaying, isDragging, maxIndex]);

  // Pause auto-play on user interaction
  const handleUserInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000); // Resume after 8 seconds
  };

  const handleDragStart = () => {
    setIsDragging(true);
    handleUserInteraction();
  };

  const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const progress = Math.abs(info.offset.x) / cardWidth;
    setDragProgress(Math.min(progress, 1));
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    setDragProgress(0);
    
    const threshold = cardWidth * 0.25; // 25% of card width
    const velocity = Math.abs(info.velocity.x);
    const velocityThreshold = 500;
    
    // Smart snapping based on drag distance and velocity
    if (velocity > velocityThreshold) {
      // Fast swipe - prioritize velocity direction
      if (info.velocity.x > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (info.velocity.x < 0 && currentIndex < maxIndex) {
        setCurrentIndex(currentIndex + 1);
      }
    } else {
      // Slow drag - prioritize distance
      if (info.offset.x > threshold && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (info.offset.x < -threshold && currentIndex < maxIndex) {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  const handlePrevious = () => {
    handleUserInteraction();
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    handleUserInteraction();
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleDotClick = (index: number) => {
    handleUserInteraction();
    setCurrentIndex(index);
  };

  const deliverables = [
    {
      title: "Startup Brand Identity System",
      description: "Complete logo suite, color palette, and typography for early-stage companies.",
      category: "Identity",
      icon: IconPalette,
      href: "/deliverables/brand-identity-positioning"
    },
    {
      title: "Investor Pitch Deck Design",
      description: "Visually compelling pitch deck with data visualization and brand storytelling.",
      category: "Fundraising",
      icon: IconTrendingUp
    },
    {
      title: "Website Design & Development",
      description: "Conversion-focused website with mobile optimization and CMS integration.",
      category: "Digital",
      icon: IconCode,
      href: "/deliverables/website-that-converts"
    },
    {
      title: "Brand Messaging & Voice Framework",
      description: "Brand voice, key messages, and copywriting guidelines for all channels.",
      category: "Messaging",
      icon: IconTarget,
      href: "/deliverables/content-strategy-systems"
    },
    {
      title: "Marketing Collateral System",
      description: "Template library for consistent brand application across all marketing materials.",
      category: "Marketing",
      icon: IconFiles
    },
    {
      title: "Social Media Brand Kit",
      description: "Templates, content guidelines, and visual assets for social media growth.",
      category: "Social",
      icon: IconChartBar
    },
    {
      title: "Product UI/UX Design",
      description: "User interface design for digital products with user experience optimization.",
      category: "Product",
      icon: IconRocket
    },
    {
      title: "Brand Guidelines Deck",
      description: "Comprehensive brand presentation with usage rules and application examples.",
      category: "Standards",
      icon: IconScale
    },
    {
      title: "Email Design System",
      description: "Branded email templates for newsletters, campaigns, and automated sequences.",
      category: "Email",
      icon: IconMail
    },
    {
      title: "Digital Asset Library",
      description: "Organized brand assets with usage rights and file management system.",
      category: "Assets",
      icon: IconDashboard
    },
    {
      title: "Landing Page Design Templates",
      description: "High-converting landing page designs for campaigns and product launches.",
      category: "Conversion",
      icon: IconBolt
    },
    {
      title: "Brand Story & Narrative Framework",
      description: "Compelling brand narrative with storytelling templates for all communications.",
      category: "Storytelling",
      icon: IconUsers
    }
  ];

  return (
    <section className="bg-white py-20 sm:py-24 md:py-32 lg:py-40 relative overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-obsidian rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(30,41,59,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative">
        
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-6 sm:mb-8 text-sm font-medium text-obsidian/60 tracking-[0.2em] uppercase">
            <span>Deliverables</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-6 sm:mb-8 md:mb-10">
            <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              Tangible assets you can implement immediately
            </span>
          </h2>
          
          <p className="text-lg sm:text-lg md:text-xl lg:text-2xl text-obsidian/80 font-light max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12">
            No abstract concepts—just practical design tools that drive real business impact.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className={`hidden md:block transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            
            {deliverables.map((deliverable, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.05, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="group relative h-full"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                
                {/* Card Container */}
                <div className="relative bg-white/95 backdrop-blur-xl border border-transparent bg-gradient-to-br from-white via-white/98 to-bone/90 rounded-2xl sm:rounded-3xl p-6 lg:p-8 hover:shadow-2xl hover:shadow-obsidian/[0.06] transition-all duration-1000 ease-out overflow-hidden h-full flex flex-col group-hover:border-accent/20">
                  
                  {/* Premium border gradient */}
                  <div className={cn(
                    "absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000",
                    "bg-gradient-to-br from-obsidian/20 via-obsidian/10 to-transparent p-[1px]"
                  )}>
                    <div className="absolute inset-[1px] bg-white/95 rounded-2xl sm:rounded-3xl" />
                  </div>
                  
                  {/* Subtle accent overlay */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-[0.005] group-hover:opacity-[0.015] transition-opacity duration-1000 rounded-2xl sm:rounded-3xl bg-gradient-to-bl from-accent/15 to-accent/5" />
                  
                  {/* Category badge */}
                  <div className="relative z-10 mb-4 sm:mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-accent/10 to-accent/5 rounded-full border border-accent/20 group-hover:from-accent/15 group-hover:to-accent/8 group-hover:border-accent/30 transition-all duration-500">
                      <deliverable.icon className="w-4 h-4 text-obsidian/70" />
                      <span className="text-sm font-medium text-obsidian/70 tracking-wide uppercase">
                        {deliverable.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <div className="relative z-10 mb-4">
                    <h3 className="font-display text-lg font-semibold text-obsidian leading-tight tracking-[-0.015em] group-hover:text-obsidian/95 transition-colors duration-500">
                      {deliverable.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <div className="relative z-10 flex-grow">
                    <p className="text-base text-obsidian/60 leading-[1.6] font-light tracking-wide group-hover:text-obsidian/70 transition-colors duration-500">
                      {deliverable.description}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent/30 via-accent to-accent/30 rounded-b-2xl sm:rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-[0.008] group-hover:opacity-[0.02] transition-opacity duration-1000 rounded-2xl sm:rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,41,59,0.1)_0%,transparent_50%)]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className={`md:hidden transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Auto-play indicator - top right */}
          <div className="flex justify-end mb-4">
            {isAutoPlaying && !isDragging && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2 px-3 py-1.5 bg-white/60 backdrop-blur-sm rounded-full border border-obsidian/10"
              >
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-accent"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-sm text-obsidian/60 font-medium">Auto-advancing</span>
              </motion.div>
            )}
          </div>

          {/* Premium Carousel Container */}
          <div className="relative overflow-hidden rounded-3xl">
            {/* Subtle gradient edges for premium feel */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
                          <motion.div
                className="flex"
                animate={{
                  x: `${centerOffset - (currentIndex * cardWidth)}px`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 40,
                  mass: 0.8,
                }}
                drag="x"
                dragConstraints={{ 
                  left: centerOffset - (maxIndex * cardWidth), 
                  right: centerOffset 
                }}
                dragElastic={0.1}
                onDragStart={handleDragStart}
                onDrag={handleDrag}
                onDragEnd={handleDragEnd}
                style={{ 
                  cursor: isDragging ? 'grabbing' : 'grab',
                  touchAction: 'pan-y pinch-zoom'
                }}
              >
              {deliverables.map((deliverable, index) => {
                const isActive = index === currentIndex;
                const isNext = index === currentIndex + 1;
                const isPrev = index === currentIndex - 1;
                
                return (
                  <motion.div
                    key={index}
                    className="relative flex-shrink-0 px-2"
                    style={{ width: `${cardWidth}px` }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.03, ease: [0.21, 0.47, 0.32, 0.98] }}
                  >
                    
                    {/* Premium Card Container */}
                    <motion.div 
                      className={cn(
                        "relative bg-gradient-to-br from-white via-white/98 to-bone/90 backdrop-blur-xl border rounded-3xl p-6 overflow-hidden h-full flex flex-col transition-all duration-700 group",
                        deliverable.href ? "cursor-pointer" : "",
                        isActive 
                          ? "border-accent/30 shadow-2xl shadow-accent/[0.15] scale-[1.02]" 
                          : "border-obsidian/[0.08] shadow-lg hover:shadow-xl hover:border-accent/20"
                      )}
                      animate={{
                        scale: isActive ? 1.02 : (isNext || isPrev) ? 0.98 : 0.95,
                        opacity: isActive ? 1 : (isNext || isPrev) ? 0.8 : 0.6,
                      }}
                      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                      onClick={() => deliverable.href && window.open(deliverable.href, '_self')}
                    >
                      
                      {/* Active card glow effect */}
                      {isActive && (
                        <motion.div
                          className="absolute -inset-1 bg-gradient-to-br from-accent/20 via-accent/10 to-accent/20 rounded-3xl blur-md"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.6 }}
                        />
                      )}
                      
                      {/* Drag progress indicator */}
                      {isDragging && dragProgress > 0 && (
                        <motion.div
                          className="absolute top-0 left-0 h-1 bg-gradient-to-r from-accent via-accent/80 to-accent rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${dragProgress * 100}%` }}
                          transition={{ duration: 0.1 }}
                        />
                      )}
                      
                      {/* Premium border gradient */}
                      <div className={cn(
                        "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700",
                        "bg-gradient-to-br from-obsidian/15 via-obsidian/8 to-transparent p-[1px]"
                      )}>
                        <div className="absolute inset-[1px] bg-gradient-to-br from-white via-white/98 to-bone/90 rounded-3xl" />
                      </div>
                      
                      {/* Subtle accent overlay */}
                      <div className="absolute top-0 right-0 w-20 h-20 opacity-[0.003] group-hover:opacity-[0.012] transition-opacity duration-700 rounded-3xl bg-gradient-to-bl from-accent/20 to-accent/8" />
                      
                      {/* Category badge */}
                      <div className="relative z-10 mb-5">
                        <motion.div 
                          className="inline-flex items-center gap-2.5 px-4 py-2 bg-gradient-to-r from-accent/12 to-accent/6 rounded-2xl border border-accent/25 group-hover:from-accent/18 group-hover:to-accent/10 group-hover:border-accent/35 transition-all duration-500 shadow-sm"
                          whileHover={{ scale: 1.05 }}
                        >
                          <deliverable.icon className="w-4 h-4 text-obsidian/80" />
                          <span className="text-sm font-semibold text-obsidian/80 tracking-wider uppercase">
                            {deliverable.category}
                          </span>
                        </motion.div>
                      </div>
                      
                      {/* Title */}
                      <div className="relative z-10 mb-4">
                        <h3 className="font-display text-lg font-semibold text-obsidian leading-tight tracking-[-0.015em] group-hover:text-obsidian/95 transition-colors duration-500">
                          {deliverable.title}
                        </h3>
                      </div>
                      
                      {/* Description */}
                      <div className="relative z-10 flex-grow">
                        <p className="text-base text-obsidian/65 leading-[1.7] font-light tracking-wide group-hover:text-obsidian/80 transition-colors duration-500">
                          {deliverable.description}
                        </p>
                      </div>

                      {/* Premium bottom accent */}
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 opacity-[0.006] group-hover:opacity-[0.015] transition-opacity duration-700 rounded-3xl overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,41,59,0.08)_0%,transparent_60%)]" />
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
          
          {/* Navigation Controls Below Carousel */}
          <div className="mt-8 space-y-6">
            
            {/* Premium Pagination Dots */}
            <div className="flex justify-center">
              <div className="flex gap-1.5">
                {Array.from({ length: totalItems }).map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={cn(
                      "relative transition-all duration-500 rounded-full",
                      index === currentIndex 
                        ? "w-6 h-2 bg-gradient-to-r from-accent via-accent/90 to-accent shadow-md" 
                        : "w-2 h-2 bg-obsidian/20 hover:bg-obsidian/40"
                    )}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {index === currentIndex && (
                      <motion.div
                        className="absolute inset-0 bg-accent/30 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center gap-4">
              <motion.button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="relative p-3 rounded-2xl bg-gradient-to-br from-white via-white/95 to-bone/90 backdrop-blur-xl border border-obsidian/[0.08] disabled:opacity-30 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-500 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <IconChevronLeft className="w-5 h-5 text-obsidian/80 group-hover:text-obsidian transition-colors duration-300 relative z-10" />
              </motion.button>
              
              <motion.button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className="relative p-3 rounded-2xl bg-gradient-to-br from-white via-white/95 to-bone/90 backdrop-blur-xl border border-obsidian/[0.08] disabled:opacity-30 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-500 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <IconChevronRight className="w-5 h-5 text-obsidian/80 group-hover:text-obsidian transition-colors duration-300 relative z-10" />
              </motion.button>
            </div>

            {/* Premium progress bar */}
            <div className="relative">
              <div className="w-full h-1 bg-obsidian/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent via-accent/90 to-accent rounded-full"
                  animate={{
                    width: `${((currentIndex + 1) / totalItems) * 100}%`,
                  }}
                  transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                />
              </div>
              <div className="flex justify-between mt-2 text-sm text-obsidian/40 font-medium">
                <span>{currentIndex + 1} of {totalItems}</span>
                <span className="font-light">{isAutoPlaying ? 'Auto-advancing' : 'Paused'}</span>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
} 