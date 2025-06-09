"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const transformationStats = [
  "89% of companies have adopted or plan to adopt a digital-first strategy in 2025",
  "74% of organizations are prioritizing digital transformation in 2025", 
  "41% of companies have improved customer experience with generative AI",
  "68% of organizations say experience-led design is critical for talent retention",
  "59% of firms saw at least 11% profit growth from digital transformation",
  "64% of businesses say new digital models are needed to stay competitive",
  "70% of organizations say simplifying workflows is their top transformation goal",
  "51% of executives link digital transformation to revenue growth",
  "67% of business leaders expect AI to reshape their organizations within two years",
  "41% of organizations report digital transformation enhanced sales and marketing",
  "56% of digital transformation efforts are driven by growth opportunities",
  "44% of transformation initiatives are spurred by competitive pressure",
  "71% of consumer goods leaders use AI in at least one part of their business",
  "97% of businesses accelerated digital transformation due to COVID-19",
  "77% of companies have already started their digital transformation journey",
  "60% of employers say digital access will impact their operations by 2030"
].filter(stat => /^\d+%/.test(stat)); // Only stats starting with percentages

export default function CTASection() {
  const sectionRef = useRef(null);
  const [currentStatIndex, setCurrentStatIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [displayNumber, setDisplayNumber] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const geometryRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const geometryScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 1]);

  // Extract percentage and text for better animation
  const extractStatParts = (stat: string) => {
    const match = stat.match(/^(\d+)%(.*)$/);
    if (match) {
      return {
        number: parseInt(match[1]),
        numberDisplay: `${match[1]}%`,
        text: match[2].trim()
      };
    }
    return { number: 0, numberDisplay: "0%", text: stat };
  };

  // Smart line breaking - Desktop: 2 lines, Mobile: 3 lines
  const formatStatText = (text: string, isMobile = false) => {
    const words = text.split(' ');
    
    if (isMobile) {
      // Mobile: 3 evenly balanced lines - force better distribution
      if (words.length <= 6) {
        // Short text: distribute as evenly as possible
        const firstLine = words.slice(0, 2).join(' ');
        const secondLine = words.slice(2, 4).join(' ');
        const thirdLine = words.slice(4).join(' ');
        return [firstLine, secondLine, thirdLine];
      } else {
        // Longer text: aim for roughly equal length lines
        const totalChars = text.length;
        const targetCharsPerLine = Math.ceil(totalChars / 3);
        
        const lines = [];
        let currentLine = '';
        let currentLength = 0;
        
        for (let i = 0; i < words.length; i++) {
          const word = words[i];
          const wordWithSpace = (currentLine ? ' ' : '') + word;
          
          // If adding this word would exceed target and we have room for more lines
          if (currentLength + wordWithSpace.length > targetCharsPerLine && lines.length < 2 && currentLine) {
            lines.push(currentLine);
            currentLine = word;
            currentLength = word.length;
          } else {
            currentLine += wordWithSpace;
            currentLength += wordWithSpace.length;
          }
        }
        
        // Add the final line
        if (currentLine) {
          lines.push(currentLine);
        }
        
        // Ensure we have exactly 3 lines
        while (lines.length < 3) {
          lines.push('');
        }
        
        return lines.slice(0, 3);
      }
    } else {
      // Desktop: 2 lines
      const midPoint = Math.ceil(words.length / 2);
      const firstHalf = words.slice(0, midPoint).join(' ');
      const secondHalf = words.slice(midPoint).join(' ');
      return [firstHalf, secondHalf];
    }
  };

  const currentStat = extractStatParts(transformationStats[currentStatIndex]);
  const mobileFormattedLines = formatStatText(currentStat.text, true);
  const desktopFormattedLines = formatStatText(currentStat.text, false);

  // Calculate container width based on longest line + number width
  const mobileMaxLineLength = Math.max(...mobileFormattedLines.map(line => line.length));
  const desktopMaxLineLength = Math.max(desktopFormattedLines[0].length, desktopFormattedLines[1].length);
  
  // Mobile needs wider container to prevent natural wrapping
  const mobileWidth = Math.min(Math.max(mobileMaxLineLength * 10 + 120, 350), 500);
  const desktopWidth = Math.min(Math.max(desktopMaxLineLength * 12 + 120, 600), 1100);

  // Counter animation
  useEffect(() => {
    const targetNumber = currentStat.number;
    const startNumber = displayNumber;
    const duration = 800; // ms
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Eased transition
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(startNumber + (targetNumber - startNumber) * easeProgress);
      
      setDisplayNumber(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStatIndex]);

  // Initialize display number
  useEffect(() => {
    if (displayNumber === 0) {
      setDisplayNumber(currentStat.number);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Rotate stats every 7 seconds
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentStatIndex((prev) => (prev + 1) % transformationStats.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section ref={sectionRef} className="py-20 sm:py-24 md:py-32 bg-obsidian relative overflow-hidden">
      {/* Static Gradient Overlay - Same layer as obsidian background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-accent/12"></div>
      
      {/* Dynamic Background with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Flowing Lines - Acceleration Metaphor */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0" />
              <stop offset="30%" stopColor="#FFE0D7" stopOpacity="0.3" />
              <stop offset="70%" stopColor="#FFE0D7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
            </linearGradient>
            
            <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFE0D7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Dynamic Flow Lines */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.path
              key={i}
              d={`M${-200 + i * 60} ${200 + i * 40} Q${400 + i * 80} ${300 + i * 20} ${1400 + i * 60} ${250 + i * 30}`}
              stroke="url(#flowGradient)"
              strokeWidth={2 + (i % 3)}
              fill="none"
              opacity={0.6 - i * 0.04}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.6 - i * 0.04, 0]
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Secondary Layer */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.path
              key={`secondary-${i}`}
              d={`M${-100 + i * 80} ${400 + i * 30} Q${500 + i * 100} ${200 + i * 40} ${1300 + i * 70} ${350 + i * 25}`}
              stroke="url(#flowGradient2)"
              strokeWidth={1 + (i % 2)}
              fill="none"
              opacity={0.4 - i * 0.03}
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: [0, 1, 0]
              }}
              transition={{
                duration: 6 + i * 0.4,
                repeat: Infinity,
                delay: 2 + i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* Header - Mobile Only (shows above everything) */}
        <div className="lg:hidden text-center mb-12 order-1">
          <div className="mb-6 sm:mb-8 text-xs sm:text-sm font-medium text-bone/60 tracking-wide uppercase">
            <span>Ready to Begin</span>
          </div>
          
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-bone via-accent to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              Ready to reinvent your business?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-bone/75 font-light max-w-2xl mx-auto">
            The pace of change is not slowing down—it is accelerating. The question is not whether to reinvent, but how fast you can move.
          </p>
        </div>

        {/* Stats - Mobile positioned after header */}
        <div className="lg:hidden mb-12 order-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div 
              className="flex items-center space-x-3 bg-bone/8 border border-accent/30 rounded-full px-4 py-6 backdrop-blur-md cursor-pointer group transition-all duration-300 hover:border-accent/50"
              animate={{
                width: `${mobileWidth}px`
              }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.div 
                className="w-2 h-2 bg-accent rounded-full flex-shrink-0"
                animate={{ 
                  scale: isPaused ? [1, 1.2, 1] : [1, 1.5, 1],
                  opacity: isPaused ? 0.8 : [0.8, 1, 0.8]
                }}
                transition={{ duration: isPaused ? 1 : 2, repeat: Infinity }}
              />
              
              {/* Large Number Display - Scaled for 3-line height */}
              {displayNumber > 0 && (
                <motion.div 
                  className="text-4xl font-mono font-black text-accent flex-shrink-0 leading-none"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {displayNumber}%
                </motion.div>
              )}
              
              <div className="flex-1 min-w-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStatIndex}
                    initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.4, 0, 0.2, 1],
                      filter: { duration: 0.6 }
                    }}
                    className="space-y-1"
                  >
                    {/* Three Lines for Mobile */}
                    {mobileFormattedLines.map((line, index) => (
                      <motion.div
                        key={index}
                        className="text-xs font-mono text-bone/90 tracking-wide leading-tight whitespace-nowrap"
                        initial={{ x: 10 + index * 5, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                      >
                        {line}
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Stat Counter */}
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-bone/40 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: isPaused ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {currentStatIndex + 1} / {transformationStats.length}
            </motion.div>
          </motion.div>
        </div>

        {/* Visual Side - Mobile positioned after stats */}
        <div className="lg:hidden relative h-96 mb-12 order-3">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ rotate: geometryRotate, scale: geometryScale }}
          >
            {/* Convergence Geometry */}
            <svg className="w-full h-full max-w-md" viewBox="0 0 400 400">
              <defs>
                <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0.8" />
                  <stop offset="70%" stopColor="#FFE0D7" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
                </radialGradient>
                
                <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* Central Core */}
              <motion.circle
                cx="200"
                cy="200"
                r="20"
                fill="url(#centerGradient)"
                initial={{ scale: 0 }}
                whileInView={{ scale: [0, 1.5, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.5 }}
              />

              {/* Orbiting Elements */}
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * 45) * (Math.PI / 180);
                const radius = 120 + (i % 3) * 20;
                const x = 200 + Math.cos(angle) * radius;
                const y = 200 + Math.sin(angle) * radius;
                
                return (
                  <motion.g key={i}>
                    <motion.circle
                      cx={x}
                      cy={y}
                      r={3 + (i % 3)}
                      fill="#FFE0D7"
                      opacity={0.7 - i * 0.05}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7 - i * 0.05, 0.9 - i * 0.05, 0.7 - i * 0.05]
                      }}
                      transition={{
                        duration: 3 + i * 0.2,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                    />
                    <motion.line
                      x1="200"
                      y1="200"
                      x2={x}
                      y2={y}
                      stroke="url(#edgeGradient)"
                      strokeWidth="1"
                      opacity={0.3}
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.8 + i * 0.1 }}
                    />
                  </motion.g>
                );
              })}

              {/* Acceleration Rings */}
              {[60, 100, 140, 180].map((radius, i) => (
                <motion.circle
                  key={radius}
                  cx="200"
                  cy="200"
                  r={radius}
                  fill="none"
                  stroke="#FFE0D7"
                  strokeWidth="1"
                  opacity={0.2 - i * 0.03}
                  strokeDasharray="4 8"
                  initial={{ scale: 0, rotate: 0 }}
                  whileInView={{ scale: 1, rotate: 360 }}
                  viewport={{ once: true }}
                  transition={{
                    scale: { duration: 1.5, delay: 0.6 + i * 0.2 },
                    rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" }
                  }}
                />
              ))}
            </svg>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-10 right-10 w-4 h-4 bg-accent/60 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-3 h-3 bg-accent/40 rounded-full"
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />
        </div>

        {/* Body Text - Mobile positioned after visual */}
        <div className="lg:hidden text-center mb-12 order-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-base sm:text-lg text-bone/70 font-light leading-relaxed">
              When strategy, design, and technology converge at NextStage velocity, 
              transformation happens in weeks, not quarters.
            </p>
          </motion.div>
        </div>

        {/* CTA Buttons - Mobile */}
        <div className="lg:hidden order-5 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center space-y-4"
          >
            {/* Primary CTA */}
            <button className="group relative w-full">
              {/* Button background with gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/40 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative inline-flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 bg-accent/90 backdrop-blur-sm border border-accent/20 text-obsidian rounded-full text-sm sm:text-base font-medium transition-all duration-300 group-hover:bg-accent group-hover:text-obsidian group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:-translate-y-1 w-full">
                <span className="relative">
                  Start your reinvention
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full block" />
                </span>
                
                {/* Animated arrow */}
                <div className="relative overflow-hidden w-4 h-4 sm:w-5 sm:h-5">
                  <svg 
                    className="absolute w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 group-hover:translate-x-6 group-hover:opacity-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <svg 
                    className="absolute w-4 h-4 sm:w-5 sm:h-5 -translate-x-6 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </button>

            {/* Secondary CTA */}
            <button className="group relative w-full">
              {/* Button background with gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-bone/20 to-bone/10 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative inline-flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 bg-obsidian/90 backdrop-blur-sm border border-bone/20 text-bone rounded-full text-sm sm:text-base font-medium transition-all duration-300 group-hover:bg-bone group-hover:text-obsidian group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-bone/10 group-hover:-translate-y-1 w-full">
                <span className="relative">
                  See our process
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full block" />
                </span>
                
                {/* Animated arrow */}
                <div className="relative overflow-hidden w-4 h-4 sm:w-5 sm:h-5">
                  <svg 
                    className="absolute w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 group-hover:rotate-45 group-hover:scale-110" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </button>
          </motion.div>
        </div>

        {/* Final Line - Mobile */}
        <div className="lg:hidden text-center order-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p className="text-sm text-bone/50 font-light italic">
              Join the leaders who refuse to wait for tomorrow
            </p>
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-16 items-center min-h-[60vh]">
          
          {/* Content Side - Left */}
          <div className="col-span-7 space-y-12 text-left">
            
            {/* Header - Desktop (inside left column) */}
            <div className="text-left">
              <div className="mb-6 sm:mb-8 text-xs sm:text-sm font-medium text-bone/60 tracking-wide uppercase">
                <span>Ready to Begin</span>
              </div>
              
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-bone via-accent to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                  Ready to reinvent your business?
                </span>
              </h2>
              <p className="text-base sm:text-lg text-bone/75 font-light max-w-2xl">
                The pace of change is not slowing down—it is accelerating. The question is not whether to reinvent, but how fast you can move.
              </p>
            </div>
            
            {/* Rotating Stat Highlight - Desktop */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-start"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <motion.div 
                className="flex items-center space-x-6 bg-bone/8 border border-accent/30 rounded-full px-6 py-6 backdrop-blur-md cursor-pointer group transition-all duration-300 hover:border-accent/50"
                animate={{
                  width: `${desktopWidth}px`
                }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              >
                <motion.div 
                  className="w-3 h-3 bg-accent rounded-full flex-shrink-0"
                  animate={{ 
                    scale: isPaused ? [1, 1.2, 1] : [1, 1.5, 1],
                    opacity: isPaused ? 0.8 : [0.8, 1, 0.8]
                  }}
                  transition={{ duration: isPaused ? 1 : 2, repeat: Infinity }}
                />
                
                {/* Large Number Display */}
                {displayNumber > 0 && (
                  <motion.div 
                    className="text-5xl font-mono font-black text-accent flex-shrink-0 leading-none"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {displayNumber}%
                  </motion.div>
                )}
                
                <div className="flex-1 min-w-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStatIndex}
                      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                      transition={{ 
                        duration: 0.8, 
                        ease: [0.4, 0, 0.2, 1],
                        filter: { duration: 0.6 }
                      }}
                      className="space-y-2"
                    >
                      {/* Two Lines for Desktop */}
                      {desktopFormattedLines.map((line, index) => (
                        <motion.div
                          key={index}
                          className="text-sm font-mono text-bone/90 tracking-wide leading-tight"
                          initial={{ x: 10 + index * 5, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
                        >
                          {line}
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Progress Indicator */}
                <div className="flex-shrink-0 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-1">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 h-1 bg-accent/40 rounded-full"
                        animate={{
                          opacity: [0.4, 1, 0.4],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Stat Counter */}
              <motion.div
                className="absolute -bottom-6 left-6 text-xs text-bone/40 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: isPaused ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {currentStatIndex + 1} / {transformationStats.length}
              </motion.div>
            </motion.div>

            {/* Convergence Statement - Desktop */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl"
            >
              <p className="text-base sm:text-lg text-bone/70 font-light leading-relaxed">
                When strategy, design, and technology converge at NextStage velocity, 
                transformation happens in weeks, not quarters.
              </p>
            </motion.div>

            {/* CTA Buttons - Desktop */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-row items-start justify-start space-x-6"
            >
              {/* Primary CTA */}
              <button className="group relative">
                {/* Button background with gradient border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/40 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-accent/90 backdrop-blur-sm border border-accent/20 text-obsidian rounded-full text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 group-hover:bg-accent group-hover:text-obsidian group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:-translate-y-1">
                  <span className="relative">
                    Start your reinvention
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

              {/* Secondary CTA */}
              <button className="group relative">
                {/* Button background with gradient border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-bone/20 to-bone/10 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-obsidian/90 backdrop-blur-sm border border-bone/20 text-bone rounded-full text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 group-hover:bg-bone group-hover:text-obsidian group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-bone/10 group-hover:-translate-y-1">
                  <span className="relative">
                    See our process
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full block" />
                  </span>
                  
                  {/* Animated arrow */}
                  <div className="relative overflow-hidden w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
                    <svg 
                      className="absolute w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-all duration-300 group-hover:rotate-45 group-hover:scale-110" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </button>
            </motion.div>

            {/* Closing Statement - Desktop */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="pt-8"
            >
              <p className="text-sm text-bone/50 font-light italic">
                Join the leaders who refuse to wait for tomorrow
              </p>
            </motion.div>
          </div>

          {/* Visual Side - Right (Desktop Only) */}
          <div className="col-span-5 relative h-96 lg:h-full">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{ rotate: geometryRotate, scale: geometryScale }}
            >
              {/* Convergence Geometry */}
              <svg className="w-full h-full max-w-md" viewBox="0 0 400 400">
                <defs>
                  <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0.8" />
                    <stop offset="70%" stopColor="#FFE0D7" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
                  </radialGradient>
                  
                  <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0.1" />
                  </linearGradient>
                </defs>

                {/* Central Core */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="20"
                  fill="url(#centerGradient)"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: [0, 1.5, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5 }}
                />

                {/* Orbiting Elements */}
                {Array.from({ length: 8 }).map((_, i) => {
                  const angle = (i * 45) * (Math.PI / 180);
                  const radius = 120 + (i % 3) * 20;
                  const x = 200 + Math.cos(angle) * radius;
                  const y = 200 + Math.sin(angle) * radius;
                  
                  return (
                    <motion.g key={i}>
                      <motion.circle
                        cx={x}
                        cy={y}
                        r={3 + (i % 3)}
                        fill="#FFE0D7"
                        opacity={0.7 - i * 0.05}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.7 - i * 0.05, 0.9 - i * 0.05, 0.7 - i * 0.05]
                        }}
                        transition={{
                          duration: 3 + i * 0.2,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                      <motion.line
                        x1="200"
                        y1="200"
                        x2={x}
                        y2={y}
                        stroke="url(#edgeGradient)"
                        strokeWidth="1"
                        opacity={0.3}
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.8 + i * 0.1 }}
                      />
                    </motion.g>
                  );
                })}

                {/* Acceleration Rings */}
                {[60, 100, 140, 180].map((radius, i) => (
                  <motion.circle
                    key={radius}
                    cx="200"
                    cy="200"
                    r={radius}
                    fill="none"
                    stroke="#FFE0D7"
                    strokeWidth="1"
                    opacity={0.2 - i * 0.03}
                    strokeDasharray="4 8"
                    initial={{ scale: 0, rotate: 0 }}
                    whileInView={{ scale: 1, rotate: 360 }}
                    viewport={{ once: true }}
                    transition={{
                      scale: { duration: 1.5, delay: 0.6 + i * 0.2 },
                      rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" }
                    }}
                  />
                ))}
              </svg>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-10 right-10 w-4 h-4 bg-accent/60 rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-20 left-10 w-3 h-3 bg-accent/40 rounded-full"
              animate={{
                y: [0, -15, 0],
                x: [0, 10, 0],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
} 