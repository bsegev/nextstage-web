"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconX } from "@tabler/icons-react";

type Section = "strategy" | "design" | "technology";

interface ContentData {
  title: string;
  description: string;
}

const content: Record<Section, ContentData> = {
  strategy: {
    title: "Strategy",
    description: "We see three moves ahead while others react to the last one. Market dynamics, competitive gaps, growth opportunities - we map the path that turns your constraints into advantages."
  },
  design: {
    title: "Design",
    description: "Brand systems, websites, pitch decks - design makes strategy tangible and technology human. We don't just make things look better, we make complex feel intuitive and ambitious feel inevitable."
  },
  technology: {
    title: "Technology",
    description: "AI automation, custom platforms, internal systems - technology turns vision into scalable reality. We build systems that don't just work today but evolve with tomorrow's demands."
  }
};

export default function PowerInConvergence() {
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);
  const [hoveredSection, setHoveredSection] = useState<Section | null>(null);

  const isExpanded = selectedSection !== null;

  // Define the exact positions for the Venn diagram
  const positions = {
    strategy: { x: -50, y: -35 },
    design: { x: 50, y: -35 },
    technology: { x: 0, y: 45 }
  };

  // When expanded, all circles move to center
  const centerPosition = { x: 0, y: 0 };

  return (
    <section 
      className="py-16 sm:py-20 md:py-24 bg-obsidian relative overflow-hidden"
      style={{
        backgroundImage: 'url(/images/venn-bg-2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Subtle background overlay */}
      <div className="absolute inset-0 bg-obsidian/60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-4 lg:mb-6">
          <div className="mb-6 sm:mb-8 text-sm sm:text-sm font-medium text-bone/60 tracking-wide uppercase">
            <span>How We Work</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-bone via-accent to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              Everything. Together. Fast.
            </span>
          </h2>
          <p className="text-lg sm:text-base lg:text-lg text-bone/75 font-light max-w-2xl mx-auto">
            Most firms hand off between teams. We work as one. Strategy shapes design shapes technology - all moving toward the same goal at the same speed.
          </p>
        </div>

        {/* MOBILE LAYOUT - Responsive Venn Diagram */}
        <div className="block md:hidden">
          {/* Mobile Venn Diagram */}
          <div className="relative max-w-md mx-auto aspect-square mb-8">
            {/* SVG Container */}
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full"
            >
              {/* Gradient Definitions */}
              <defs>
                <radialGradient id="mobileCircleGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffe0d7" stopOpacity="0.06" />
                  <stop offset="100%" stopColor="#ffe0d7" stopOpacity="0.12" />
                </radialGradient>
                
                {/* Mobile Touch Highlight */}
                <radialGradient id="mobileTouchHighlight" cx="50%" cy="50%" r="70%">
                  <stop offset="0%" stopColor="#ffe0d7" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ffe0d7" stopOpacity="0" />
                </radialGradient>
              </defs>

                             {/* Main Circles - Larger touch targets */}
               <motion.circle
                 cx={200}
                 cy={200}
                 r={90}
                 fill={isExpanded ? "url(#mobileCircleGradient)" : "transparent"}
                 stroke="#ffe0d7"
                 strokeWidth={2}
                 className="cursor-pointer"
                 style={{ 
                   opacity: 0.8
                 }}
                 animate={{
                   x: isExpanded ? centerPosition.x : positions.strategy.x,
                   y: isExpanded ? centerPosition.y : positions.strategy.y,
                   scale: isExpanded ? 2.2 : 1,
                 }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                onTouchStart={() => !isExpanded && setHoveredSection("strategy")}
                onTouchEnd={() => !isExpanded && setHoveredSection(null)}
                onClick={() => !isExpanded && setSelectedSection("strategy")}
              />

                             {/* Design Circle */}
               <motion.circle
                 cx={200}
                 cy={200}
                 r={90}
                 fill={isExpanded ? "url(#mobileCircleGradient)" : "transparent"}
                 stroke="#ffe0d7"
                 strokeWidth={2}
                 className="cursor-pointer"
                 style={{ 
                   opacity: 0.8
                 }}
                 animate={{
                   x: isExpanded ? centerPosition.x : positions.design.x,
                   y: isExpanded ? centerPosition.y : positions.design.y,
                   scale: isExpanded ? 2.2 : 1,
                 }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                onTouchStart={() => !isExpanded && setHoveredSection("design")}
                onTouchEnd={() => !isExpanded && setHoveredSection(null)}
                onClick={() => !isExpanded && setSelectedSection("design")}
              />

                             {/* Technology Circle */}
               <motion.circle
                 cx={200}
                 cy={200}
                 r={90}
                 fill={isExpanded ? "url(#mobileCircleGradient)" : "transparent"}
                 stroke="#ffe0d7"
                 strokeWidth={2}
                 className="cursor-pointer"
                 style={{ 
                   opacity: 0.8
                 }}
                 animate={{
                   x: isExpanded ? centerPosition.x : positions.technology.x,
                   y: isExpanded ? centerPosition.y : positions.technology.y,
                   scale: isExpanded ? 2.2 : 1,
                 }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                onTouchStart={() => !isExpanded && setHoveredSection("technology")}
                onTouchEnd={() => !isExpanded && setHoveredSection(null)}
                onClick={() => !isExpanded && setSelectedSection("technology")}
              />

              {/* Circle Labels - Mobile positioned */}
              <AnimatePresence>
                {!isExpanded && (
                  <>
                                         <motion.text
                       x={90}
                       y={145}
                       textAnchor="start"
                       className="text-sm font-display font-medium fill-current text-bone pointer-events-none"
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       exit={{ opacity: 0 }}
                       transition={{ duration: 0.3 }}
                     >
                       Strategy
                     </motion.text>
                     
                     <motion.text
                       x={310}
                       y={145}
                       textAnchor="end"
                       className="text-sm font-display font-medium fill-current text-bone pointer-events-none"
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       exit={{ opacity: 0 }}
                       transition={{ duration: 0.3 }}
                     >
                       Design
                     </motion.text>
                     
                     <motion.text
                       x={200}
                       y={290}
                       textAnchor="middle"
                       className="text-sm font-display font-medium fill-current text-bone pointer-events-none"
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       exit={{ opacity: 0 }}
                       transition={{ duration: 0.3 }}
                     >
                       Technology
                     </motion.text>
                  </>
                )}
              </AnimatePresence>
            </svg>

            {/* Mobile Content Overlay */}
            <AnimatePresence>
              {isExpanded && selectedSection && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute inset-0 flex items-center justify-center p-4"
                >
                                     <div className="text-center max-w-sm relative">
                    {/* Close Button */}
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                      onClick={() => setSelectedSection(null)}
                      className="absolute -top-4 -right-2 flex items-center space-x-1 text-bone/70 hover:text-bone transition-colors duration-300 min-h-[44px] min-w-[44px] justify-center"
                    >
                      <IconX className="w-5 h-5" />
                    </motion.button>

                                         <motion.h3
                       initial={{ y: 20, opacity: 0 }}
                       animate={{ y: 0, opacity: 1 }}
                       transition={{ duration: 0.6, delay: 0.5 }}
                       className="font-display text-2xl sm:text-2xl font-medium text-bone mb-4"
                     >
                       {content[selectedSection].title}
                     </motion.h3>
                     
                     <motion.p
                       initial={{ y: 20, opacity: 0 }}
                       animate={{ y: 0, opacity: 1 }}
                       transition={{ duration: 0.6, delay: 0.6 }}
                       className="text-base sm:text-base text-bone/80 leading-relaxed font-light"
                     >
                       {content[selectedSection].description}
                     </motion.p>
                  </div>

                  {/* Navigation Arrows */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 text-bone/60"
                  >
                    <button
                      onClick={() => {
                        const sections: Section[] = ["strategy", "design", "technology"];
                        const currentIndex = sections.indexOf(selectedSection);
                        const prevIndex = currentIndex === 0 ? sections.length - 1 : currentIndex - 1;
                        setSelectedSection(sections[prevIndex]);
                      }}
                      className="hover:text-bone transition-colors duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <span className="text-sm font-mono">
                      {selectedSection === "strategy" ? "1" : selectedSection === "design" ? "2" : "3"}/3
                    </span>
                    
                    <button
                      onClick={() => {
                        const sections: Section[] = ["strategy", "design", "technology"];
                        const currentIndex = sections.indexOf(selectedSection);
                        const nextIndex = currentIndex === sections.length - 1 ? 0 : currentIndex + 1;
                        setSelectedSection(sections[nextIndex]);
                      }}
                      className="hover:text-bone transition-colors duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Tap Instructions */}
          {!isExpanded && (
            <div className="text-center">
              <p className="text-sm text-bone/60 font-light">
                Tap any circle to explore
              </p>
            </div>
          )}
        </div>

        {/* DESKTOP LAYOUT - SVG Venn Diagram (hidden on mobile) */}
        <div className="hidden md:block">
        {/* Main Interaction Area */}
        <div className="relative max-w-2xl mx-auto aspect-square">
          
          {/* SVG Container */}
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full"
            style={{ transform: "scale(1.1)" }}
          >
            {/* Gradient Definitions */}
            <defs>
              <radialGradient id="circleGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffe0d7" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#ffe0d7" stopOpacity="0.08" />
              </radialGradient>
              
              {/* Rotating Border Gradients */}
              <radialGradient id="rotatingGradient1" cx="50%" cy="0%" r="50%">
                <stop offset="0%" stopColor="#ffe0d7" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#ffe0d7" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ffe0d7" stopOpacity="0" />
              </radialGradient>
              
              <radialGradient id="rotatingGradient2" cx="0%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffe0d7" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#ffe0d7" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ffe0d7" stopOpacity="0" />
              </radialGradient>
              
              <radialGradient id="rotatingGradient3" cx="50%" cy="100%" r="50%">
                <stop offset="0%" stopColor="#ffe0d7" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#ffe0d7" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ffe0d7" stopOpacity="0" />
              </radialGradient>
              
              <radialGradient id="rotatingGradient4" cx="100%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffe0d7" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#ffe0d7" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ffe0d7" stopOpacity="0" />
              </radialGradient>

              {/* Hover Highlight */}
              <radialGradient id="hoverHighlight" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#ffe0d7" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ffe0d7" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Rotating Border Effect Circles */}
            <g>
              {/* Strategy Rotating Border */}
              <motion.g
                animate={{
                  x: isExpanded ? centerPosition.x : positions.strategy.x,
                  y: isExpanded ? centerPosition.y : positions.strategy.y,
                  scale: isExpanded ? 1.92 : 1,
                }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                style={{ transformOrigin: "200px 200px" }}
              >
                <motion.circle
                  cx={200}
                  cy={200}
                  r={86}
                  fill="none"
                  stroke="url(#rotatingGradient1)"
                  strokeWidth="3"
                  opacity={0.8}
                  animate={{ 
                    rotate: 360,
                    opacity: hoveredSection === "strategy" ? 1 : 0.4
                  }}
                  transition={{ 
                    rotate: { duration: 4, ease: "linear", repeat: Infinity },
                    opacity: { duration: 0.3 }
                  }}
                />
                {hoveredSection === "strategy" && (
                  <motion.circle
                    cx={200}
                    cy={200}
                    r={86}
                    fill="url(#hoverHighlight)"
                    stroke="none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.g>

              {/* Design Rotating Border */}
              <motion.g
                animate={{
                  x: isExpanded ? centerPosition.x : positions.design.x,
                  y: isExpanded ? centerPosition.y : positions.design.y,
                  scale: isExpanded ? 1.92 : 1,
                }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                style={{ transformOrigin: "200px 200px" }}
              >
                <motion.circle
                  cx={200}
                  cy={200}
                  r={86}
                  fill="none"
                  stroke="url(#rotatingGradient2)"
                  strokeWidth="3"
                  opacity={0.8}
                  animate={{ 
                    rotate: -360,
                    opacity: hoveredSection === "design" ? 1 : 0.4
                  }}
                  transition={{ 
                    rotate: { duration: 5, ease: "linear", repeat: Infinity },
                    opacity: { duration: 0.3 }
                  }}
                />
                {hoveredSection === "design" && (
                  <motion.circle
                    cx={200}
                    cy={200}
                    r={86}
                    fill="url(#hoverHighlight)"
                    stroke="none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.g>

              {/* Technology Rotating Border */}
              <motion.g
                animate={{
                  x: isExpanded ? centerPosition.x : positions.technology.x,
                  y: isExpanded ? centerPosition.y : positions.technology.y,
                  scale: isExpanded ? 1.92 : 1,
                }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                style={{ transformOrigin: "200px 200px" }}
              >
                <motion.circle
                  cx={200}
                  cy={200}
                  r={86}
                  fill="none"
                  stroke="url(#rotatingGradient3)"
                  strokeWidth="3"
                  opacity={0.8}
                  animate={{ 
                    rotate: 360,
                    opacity: hoveredSection === "technology" ? 1 : 0.4
                  }}
                  transition={{ 
                    rotate: { duration: 3, ease: "linear", repeat: Infinity },
                    opacity: { duration: 0.3 }
                  }}
                />
                {hoveredSection === "technology" && (
                  <motion.circle
                    cx={200}
                    cy={200}
                    r={86}
                    fill="url(#hoverHighlight)"
                    stroke="none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.g>
            </g>

            {/* Main Circles */}
            <motion.circle
              cx={200}
              cy={200}
              r={84}
              fill={isExpanded ? "url(#circleGradient)" : "transparent"}
              stroke="#ffe0d7"
              strokeWidth={1.5}
              className="cursor-pointer"
              style={{ 
                opacity: 0.7
              }}
              animate={{
                x: isExpanded ? centerPosition.x : positions.strategy.x,
                y: isExpanded ? centerPosition.y : positions.strategy.y,
                scale: isExpanded ? 1.92 : 1,
              }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              onHoverStart={() => !isExpanded && setHoveredSection("strategy")}
              onHoverEnd={() => !isExpanded && setHoveredSection(null)}
              onClick={() => !isExpanded && setSelectedSection("strategy")}
            />

            {/* Design Circle */}
            <motion.circle
              cx={200}
              cy={200}
              r={84}
              fill={isExpanded ? "url(#circleGradient)" : "transparent"}
              stroke="#ffe0d7"
              strokeWidth={1.5}
              className="cursor-pointer"
              style={{ 
                opacity: 0.7
              }}
              animate={{
                x: isExpanded ? centerPosition.x : positions.design.x,
                y: isExpanded ? centerPosition.y : positions.design.y,
                scale: isExpanded ? 1.92 : 1,
              }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              onHoverStart={() => !isExpanded && setHoveredSection("design")}
              onHoverEnd={() => !isExpanded && setHoveredSection(null)}
              onClick={() => !isExpanded && setSelectedSection("design")}
            />

            {/* Technology Circle */}
            <motion.circle
              cx={200}
              cy={200}
              r={84}
              fill={isExpanded ? "url(#circleGradient)" : "transparent"}
              stroke="#ffe0d7"
              strokeWidth={1.5}
              className="cursor-pointer"
              style={{ 
                opacity: 0.7
              }}
              animate={{
                x: isExpanded ? centerPosition.x : positions.technology.x,
                y: isExpanded ? centerPosition.y : positions.technology.y,
                scale: isExpanded ? 1.92 : 1,
              }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              onHoverStart={() => !isExpanded && setHoveredSection("technology")}
              onHoverEnd={() => !isExpanded && setHoveredSection(null)}
              onClick={() => !isExpanded && setSelectedSection("technology")}
            />

            {/* Circle Labels */}
            <AnimatePresence>
              {!isExpanded && (
                <>
                  <motion.text
                    x={96}
                    y={151}
                    textAnchor="start"
                    className="text-sm font-display font-medium fill-current text-bone pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Strategy
                  </motion.text>
                  
                  <motion.text
                    x={304}
                    y={151}
                    textAnchor="end"
                    className="text-sm font-display font-medium fill-current text-bone pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Design
                  </motion.text>
                  
                  <motion.text
                    x={200}
                    y={274}
                    textAnchor="middle"
                    className="text-sm font-display font-medium fill-current text-bone pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Technology
                  </motion.text>
                </>
              )}
            </AnimatePresence>
          </svg>

          {/* Content Overlay */}
          <AnimatePresence>
            {isExpanded && selectedSection && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute inset-0 flex items-center justify-center p-4 sm:p-8"
              >
                <div className="text-center max-w-xs sm:max-w-md relative">
                  {/* Close Button - Inside Circle */}
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    onClick={() => setSelectedSection(null)}
                    className="absolute -top-6 -right-2 sm:-top-16 sm:right-6 flex items-center space-x-2 text-bone/70 hover:text-bone transition-colors duration-300 text-base sm:text-lg"
                  >
                    <IconX className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="hidden sm:inline">close</span>
                  </motion.button>

                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="font-display text-2xl sm:text-2xl font-medium text-bone mb-4"
                  >
                    {content[selectedSection].title}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-base sm:text-base text-bone/80 leading-relaxed font-light px-2 sm:px-0"
                  >
                    {content[selectedSection].description}
                  </motion.p>
                </div>

                {/* Navigation Arrows - Fixed Position, Outside Text Container */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute bottom-12 sm:bottom-24 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 text-bone/60"
                >
                  <button
                    onClick={() => {
                      const sections: Section[] = ["strategy", "design", "technology"];
                      const currentIndex = sections.indexOf(selectedSection);
                      const prevIndex = currentIndex === 0 ? sections.length - 1 : currentIndex - 1;
                      setSelectedSection(sections[prevIndex]);
                    }}
                    className="hover:text-bone transition-colors duration-300"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <span className="text-sm font-mono">
                    {selectedSection === "strategy" ? "1" : selectedSection === "design" ? "2" : "3"}/3
                  </span>
                  
                  <button
                    onClick={() => {
                      const sections: Section[] = ["strategy", "design", "technology"];
                      const currentIndex = sections.indexOf(selectedSection);
                      const nextIndex = currentIndex === sections.length - 1 ? 0 : currentIndex + 1;
                      setSelectedSection(sections[nextIndex]);
                    }}
                    className="hover:text-bone transition-colors duration-300"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        </div>
      </div>
    </section>
  );
} 