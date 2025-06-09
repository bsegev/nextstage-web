"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconX } from "@tabler/icons-react";

type VennSection = "strategy" | "design" | "technology";

interface VennContent {
  title: string;
  expanded: string[];
}

const vennContent: Record<VennSection, VennContent> = {
  strategy: {
    title: "Strategy",
    expanded: [
      "Strategic excellence means seeing the full chess",
      "board while others focus on single moves. We identify",
      "market dynamics, competitive blind spots, and",
      "untapped opportunities that create sustainable",
      "advantage. Every strategy we craft is built to",
      "compound—not just solve today's problems,",
      "but position you three moves ahead."
    ]
  },
  design: {
    title: "Design", 
    expanded: [
      "Design is how strategy becomes tangible and",
      "technology becomes human. We don't just make",
      "things look better—we make complex systems",
      "feel intuitive, abstract value propositions feel",
      "concrete, and ambitious visions feel inevitable.",
      "Every pixel serves the bigger picture."
    ]
  },
  technology: {
    title: "Technology",
    expanded: [
      "Technology is how vision becomes reality at scale.",
      "We build systems that don't just work today but",
      "evolve with tomorrow's demands. Whether it's",
      "custom platforms, API architectures, or digital",
      "experiences, we engineer solutions that turn your",
      "competitive advantage into market dominance."
    ]
  }
};

export default function InteractiveVennDiagram() {
  const [expandedSection, setExpandedSection] = useState<VennSection | null>(null);
  const [hoveredSection, setHoveredSection] = useState<VennSection | null>(null);

  const handleCircleClick = (section: VennSection) => {
    setExpandedSection(section);
  };

  const handleClose = () => {
    setExpandedSection(null);
  };

  const isExpanded = expandedSection !== null;

  // All circles animate to the exact same end state when expanded
  const unifiedEndState = {
    x: 0, // center
    y: 0, // center  
    scale: 1.4 // reduced from 1.8
  };

  return (
    <div className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] leading-[0.9] mb-6">
            <span className="bg-gradient-to-r from-obsidian via-accent via-accent to-obsidian dark:from-bone dark:via-accent dark:to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              Power in Convergence
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground/75 font-light max-w-2xl mx-auto">
            Where strategy, design, and technology unite to create exponential value.
          </p>
        </div>

        {/* Venn Diagram Container */}
        <div className="relative flex justify-center items-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
          {/* SVG Container */}
          <div className="relative w-full max-w-3xl aspect-square"> {/* reduced from max-w-4xl */}
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full"
            >
              {/* Gradient Definitions */}
              <defs>
                <radialGradient id="unifiedGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffe0d7" stopOpacity="0.03" />
                  <stop offset="100%" stopColor="#ffe0d7" stopOpacity="0.08" />
                </radialGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Strategy Circle - starts top-left */}
              <motion.g
                animate={
                  isExpanded
                    ? unifiedEndState
                    : {
                        x: -60,
                        y: -40,
                        scale: 1,
                      }
                }
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                style={{ transformOrigin: "200px 200px" }}
                className="cursor-pointer"
                onMouseEnter={() => !isExpanded && setHoveredSection("strategy")}
                onMouseLeave={() => !isExpanded && setHoveredSection(null)}
                onClick={() => !isExpanded && handleCircleClick("strategy")}
              >
                {/* Clickable area (invisible) */}
                <circle
                  cx="200"
                  cy="200"
                  r="85"
                  fill="transparent"
                  className="cursor-pointer"
                />
                {/* Background fill */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="80"
                  animate={{
                    fill: isExpanded ? "url(#unifiedGradient)" : 
                          hoveredSection === "strategy" ? "#ffe0d7" : "transparent",
                    fillOpacity: isExpanded ? 1 : 
                                hoveredSection === "strategy" ? 0.1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
                {/* Border */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-obsidian/60 dark:text-bone/60"
                  animate={{
                    stroke: isExpanded ? "#ffe0d7" : 
                           hoveredSection === "strategy" ? "#ffe0d7" : "currentColor",
                    strokeWidth: isExpanded ? 2 :
                                hoveredSection === "strategy" ? 2.5 : 1.5,
                    filter: hoveredSection === "strategy" ? "url(#glow)" : "none"
                  }}
                  transition={{ duration: 0.3 }}
                />
                {!isExpanded && (
                  <motion.text
                    x="200"
                    y="205"
                    textAnchor="middle"
                    className="text-sm font-medium fill-current text-foreground pointer-events-none font-display tracking-wide"
                    animate={{ 
                      opacity: isExpanded ? 0 : 1,
                      fill: hoveredSection === "strategy" ? "#ffe0d7" : "currentColor"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Strategy
                  </motion.text>
                )}

                {/* Content Text - appears inside the unified circle when expanded */}
                <AnimatePresence>
                  {isExpanded && expandedSection === "strategy" && (
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      {/* Title */}
                      <motion.text
                        x="200"
                        y="185"
                        textAnchor="middle"
                        className="fill-current text-foreground font-display text-base font-medium tracking-wide"
                        initial={{ y: 175, opacity: 0 }}
                        animate={{ y: 185, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        {vennContent.strategy.title}
                      </motion.text>
                      
                      {/* Body text lines */}
                      {vennContent.strategy.expanded.map((line, index) => (
                        <motion.text
                          key={index}
                          x="200"
                          y={200 + (index * 11)}
                          textAnchor="middle"
                          className="fill-current text-foreground/80 text-xs font-light leading-relaxed"
                          initial={{ y: 190 + (index * 11), opacity: 0 }}
                          animate={{ y: 200 + (index * 11), opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.7 + (index * 0.08) }}
                        >
                          {line}
                        </motion.text>
                      ))}
                    </motion.g>
                  )}
                </AnimatePresence>
              </motion.g>

              {/* Design Circle - starts top-right */}
              <motion.g
                animate={
                  isExpanded
                    ? unifiedEndState
                    : {
                        x: 60,
                        y: -40,
                        scale: 1,
                      }
                }
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                style={{ transformOrigin: "200px 200px" }}
                className="cursor-pointer"
                onMouseEnter={() => !isExpanded && setHoveredSection("design")}
                onMouseLeave={() => !isExpanded && setHoveredSection(null)}
                onClick={() => !isExpanded && handleCircleClick("design")}
              >
                {/* Clickable area (invisible) */}
                <circle
                  cx="200"
                  cy="200"
                  r="85"
                  fill="transparent"
                  className="cursor-pointer"
                />
                {/* Background fill */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="80"
                  animate={{
                    fill: isExpanded ? "url(#unifiedGradient)" : 
                          hoveredSection === "design" ? "#ffe0d7" : "transparent",
                    fillOpacity: isExpanded ? 1 : 
                                hoveredSection === "design" ? 0.1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
                {/* Border */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-obsidian/60 dark:text-bone/60"
                  animate={{
                    stroke: isExpanded ? "#ffe0d7" : 
                           hoveredSection === "design" ? "#ffe0d7" : "currentColor",
                    strokeWidth: isExpanded ? 2 :
                                hoveredSection === "design" ? 2.5 : 1.5,
                    filter: hoveredSection === "design" ? "url(#glow)" : "none"
                  }}
                  transition={{ duration: 0.3 }}
                />
                {!isExpanded && (
                  <motion.text
                    x="200"
                    y="205"
                    textAnchor="middle"
                    className="text-sm font-medium fill-current text-foreground pointer-events-none font-display tracking-wide"
                    animate={{ 
                      opacity: isExpanded ? 0 : 1,
                      fill: hoveredSection === "design" ? "#ffe0d7" : "currentColor"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Design
                  </motion.text>
                )}

                {/* Content Text - appears inside the unified circle when design is expanded */}
                <AnimatePresence>
                  {isExpanded && expandedSection === "design" && (
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      {/* Title */}
                      <motion.text
                        x="200"
                        y="185"
                        textAnchor="middle"
                        className="fill-current text-foreground font-display text-base font-medium tracking-wide"
                        initial={{ y: 175, opacity: 0 }}
                        animate={{ y: 185, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        {vennContent.design.title}
                      </motion.text>
                      
                      {/* Body text lines */}
                      {vennContent.design.expanded.map((line, index) => (
                        <motion.text
                          key={index}
                          x="200"
                          y={200 + (index * 11)}
                          textAnchor="middle"
                          className="fill-current text-foreground/80 text-xs font-light leading-relaxed"
                          initial={{ y: 190 + (index * 11), opacity: 0 }}
                          animate={{ y: 200 + (index * 11), opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.7 + (index * 0.08) }}
                        >
                          {line}
                        </motion.text>
                      ))}
                    </motion.g>
                  )}
                </AnimatePresence>
              </motion.g>

              {/* Technology Circle - starts bottom-center */}
              <motion.g
                animate={
                  isExpanded
                    ? unifiedEndState
                    : {
                        x: 0,
                        y: 80,
                        scale: 1,
                      }
                }
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                style={{ transformOrigin: "200px 200px" }}
                className="cursor-pointer"
                onMouseEnter={() => !isExpanded && setHoveredSection("technology")}
                onMouseLeave={() => !isExpanded && setHoveredSection(null)}
                onClick={() => !isExpanded && handleCircleClick("technology")}
              >
                {/* Clickable area (invisible) */}
                <circle
                  cx="200"
                  cy="200"
                  r="85"
                  fill="transparent"
                  className="cursor-pointer"
                />
                {/* Background fill */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="80"
                  animate={{
                    fill: isExpanded ? "url(#unifiedGradient)" : 
                          hoveredSection === "technology" ? "#ffe0d7" : "transparent",
                    fillOpacity: isExpanded ? 1 : 
                                hoveredSection === "technology" ? 0.1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
                {/* Border */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-obsidian/60 dark:text-bone/60"
                  animate={{
                    stroke: isExpanded ? "#ffe0d7" : 
                           hoveredSection === "technology" ? "#ffe0d7" : "currentColor",
                    strokeWidth: isExpanded ? 2 :
                                hoveredSection === "technology" ? 2.5 : 1.5,
                    filter: hoveredSection === "technology" ? "url(#glow)" : "none"
                  }}
                  transition={{ duration: 0.3 }}
                />
                {!isExpanded && (
                  <motion.text
                    x="200"
                    y="205"
                    textAnchor="middle"
                    className="text-sm font-medium fill-current text-foreground pointer-events-none font-display tracking-wide"
                    animate={{ 
                      opacity: isExpanded ? 0 : 1,
                      fill: hoveredSection === "technology" ? "#ffe0d7" : "currentColor"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Technology
                  </motion.text>
                )}

                {/* Content Text - appears inside the unified circle when technology is expanded */}
                <AnimatePresence>
                  {isExpanded && expandedSection === "technology" && (
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      {/* Title */}
                      <motion.text
                        x="200"
                        y="185"
                        textAnchor="middle"
                        className="fill-current text-foreground font-display text-base font-medium tracking-wide"
                        initial={{ y: 175, opacity: 0 }}
                        animate={{ y: 185, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        {vennContent.technology.title}
                      </motion.text>
                      
                      {/* Body text lines */}
                      {vennContent.technology.expanded.map((line, index) => (
                        <motion.text
                          key={index}
                          x="200"
                          y={200 + (index * 11)}
                          textAnchor="middle"
                          className="fill-current text-foreground/80 text-xs font-light leading-relaxed"
                          initial={{ y: 190 + (index * 11), opacity: 0 }}
                          animate={{ y: 200 + (index * 11), opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.7 + (index * 0.08) }}
                        >
                          {line}
                        </motion.text>
                      ))}
                    </motion.g>
                  )}
                </AnimatePresence>
              </motion.g>
            </svg>

            {/* Close Button - positioned outside the unified circle */}
            <AnimatePresence>
              {isExpanded && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  onClick={handleClose}
                  className="absolute top-6 right-6 p-2 rounded-full bg-background/90 backdrop-blur-sm border border-accent/20 hover:bg-accent/10 transition-all duration-300 hover:scale-110 group z-10"
                >
                  <IconX className="w-4 h-4 text-foreground/70 group-hover:text-foreground transition-colors duration-300" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Stack Version (hidden on desktop) */}
        <div className="md:hidden mt-12 space-y-6">
          {(Object.entries(vennContent) as [VennSection, VennContent][]).map(([key, content]) => (
            <motion.div
              key={key}
              className="border border-accent/20 rounded-2xl p-8 bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl cursor-pointer group"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleCircleClick(key)}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            >
              <h3 className="font-display text-2xl mb-4 text-foreground group-hover:text-accent transition-colors duration-300">
                {content.title}
              </h3>
              <p className="text-sm text-foreground/70 font-light leading-relaxed">
                Tap to explore how {content.title.toLowerCase()} creates exponential value.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 