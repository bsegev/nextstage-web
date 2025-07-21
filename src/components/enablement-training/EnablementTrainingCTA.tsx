'use client';

import { useRef, useMemo, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, animate } from 'framer-motion';
import Link from 'next/link';
import { LiquidGlass } from '@/components/ui/liquid-glass';

export default function EnablementTrainingCTA() {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Enhanced scroll-based animations - matching other CTAs
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const galaxyRotation = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 6]);
  const baseCentralPulse = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 1]);
  
  // Tree formation completes at 50%
  const treeFormation = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  
  // Supercharged state - triggered when tree completes, independent of scroll
  const [isSupercharged, setIsSupercharged] = useState(false);
  
  // Enhanced central pulse for supercharged mode
  const centralPulse = useMotionValue(1);
  
  // Continuous supercharged effects (not tied to scroll)
  const treeScale = useMotionValue(1);
  const energyPulse = useMotionValue(1);
  const magicalGlow = useMotionValue(0);
  
  // Monitor scroll to trigger/deactivate supercharged mode
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest >= 0.5 && !isSupercharged) {
        setIsSupercharged(true);
      } else if (latest < 0.45 && isSupercharged) {
        setIsSupercharged(false);
      }
    });
    return unsubscribe;
  }, [scrollYProgress, isSupercharged]);
  
  // Animate supercharged effects continuously
  useEffect(() => {
    if (isSupercharged) {
      // Set larger scale when supercharged
      treeScale.set(1.15);
      
      // Continuous energy pulsing
      const pulseAnimation = animate(energyPulse, [1, 1.2, 1], {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      });
      
      // Magical glow cycling
      const glowAnimation = animate(magicalGlow, [0.3, 0.8, 0.3], {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      });
      
      // Enhanced central pulse
      const centralAnimation = animate(centralPulse, [1, 1.5, 1], {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      });
      
      return () => {
        pulseAnimation.stop();
        glowAnimation.stop();
        centralAnimation.stop();
      };
    } else {
      // Reset scale when not supercharged
      treeScale.set(1);
      centralPulse.set(baseCentralPulse.get());
    }
  }, [isSupercharged, treeScale, energyPulse, magicalGlow, centralPulse, baseCentralPulse]);
  
  // Assembly-style rings for consistency
  const assemblyProgress = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0, 0.5, 1]);
  
  // Pre-calculate ring rotations to avoid hook errors
  const ringRotation1 = useTransform(galaxyRotation, (r) => r);
  const ringRotation2 = useTransform(galaxyRotation, (r) => -r);
  const ringRotation3 = useTransform(galaxyRotation, (r) => r);
  const ringRotation4 = useTransform(galaxyRotation, (r) => -r);

  return (
    <section ref={sectionRef} className="py-20 sm:py-24 md:py-32 bg-obsidian relative overflow-hidden">
      {/* Static Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-accent/12"></div>
      
      {/* Dynamic Background with Flowing Lines - inspired by other CTAs */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Flowing Lines - Knowledge Flow Metaphor */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="knowledgeFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0" />
              <stop offset="30%" stopColor="#FFE0D7" stopOpacity="0.2" />
              <stop offset="70%" stopColor="#FFE0D7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
            </linearGradient>
            
            <linearGradient id="knowledgeFlowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFE0D7" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Dynamic Flow Lines */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.path
              key={i}
              d={`M${-120 + i * 80} ${200 + i * 45} Q${400 + i * 100} ${300 + i * 25} ${1320 + i * 70} ${240 + i * 35}`}
              stroke="url(#knowledgeFlowGradient)"
              strokeWidth={1.5 + (i % 2) * 0.5}
              fill="none"
              opacity={0.6 - i * 0.04}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.6 - i * 0.04, 0]
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Secondary Layer - More dispersed */}
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.path
              key={`secondary-${i}`}
              d={`M${-60 + i * 120} ${400 + i * 30} Q${480 + i * 140} ${200 + i * 40} ${1260 + i * 100} ${340 + i * 25}`}
              stroke="url(#knowledgeFlowGradient2)"
              strokeWidth={1 + (i % 2) * 0.3}
              fill="none"
              opacity={0.4 - i * 0.03}
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: [0, 1, 0]
              }}
              transition={{
                duration: 8 + i * 0.6,
                repeat: Infinity,
                delay: 4 + i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* Mobile Layout */}
        <div className="lg:hidden text-center">

          {/* Header */}
          <div className="mb-12">
            <h2 className="font-display text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-bone via-accent to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                Ready to grow your team?
              </span>
            </h2>
            <p className="text-lg sm:text-lg text-bone/75 font-light max-w-2xl mx-auto">
              Transform your team into strategic powerhouses with training that builds lasting capabilities.
            </p>
          </div>

          {/* Tree of Knowledge Visual - Mobile */}
          <div className="relative h-80 mb-12">
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              style={{
                scale: treeScale,
                transformOrigin: "50% 50%"
              }}
            >
              {/* Enhanced SVG with Assembly Rings */}
              <svg className="w-full h-full max-w-sm" viewBox="0 0 320 320" suppressHydrationWarning>
                <defs>
                  <radialGradient id="galaxyCenterMobile" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0.9" />
                    <stop offset="70%" stopColor="#FFE0D7" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
                  </radialGradient>
                  
                  <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Assembly Progress Rings - like other CTAs */}
                <motion.circle
                  cx="160"
                  cy="160"
                  r="50"
                  fill="none"
                  stroke="#FFE0D7"
                  strokeWidth="0.8"
                  opacity={0.25}
                  strokeDasharray="2 4"
                  style={{
                    pathLength: assemblyProgress,
                    rotate: ringRotation1
                  }}
                />
                <motion.circle
                  cx="160"
                  cy="160"
                  r="80"
                  fill="none"
                  stroke="#FFE0D7"
                  strokeWidth="0.8"
                  opacity={0.22}
                  strokeDasharray="2 4"
                  style={{
                    pathLength: assemblyProgress,
                    rotate: ringRotation2
                  }}
                />
                <motion.circle
                  cx="160"
                  cy="160"
                  r="110"
                  fill="none"
                  stroke="#FFE0D7"
                  strokeWidth="0.8"
                  opacity={0.19}
                  strokeDasharray="2 4"
                  style={{
                    pathLength: assemblyProgress,
                    rotate: ringRotation3
                  }}
                />
                <motion.circle
                  cx="160"
                  cy="160"
                  r="140"
                  fill="none"
                  stroke="#FFE0D7"
                  strokeWidth="0.8"
                  opacity={0.16}
                  strokeDasharray="2 4"
                  style={{
                    pathLength: assemblyProgress,
                    rotate: ringRotation4
                  }}
                />

                {/* eslint-disable react-hooks/rules-of-hooks */}
                <motion.g>
                  {/* 3D Tree of Knowledge - Mobile (organic branching system) */}
                  {Array.from({ length: 60 }).map((_, i) => {
                    const nodeData = useMemo(() => {
                      // Organic Tree Growth System with 3D coordinates
                      let baseX, baseY, baseZ, size, energyLevel, nodeType, branchDNA;
                      
                      if (i === 0) {
                        // Root system
                        baseX = 0; baseY = 45; baseZ = 0; 
                        size = 3.5; energyLevel = 1; nodeType = 'root';
                        branchDNA = { growthVector: [0, -1, 0], curveTendency: 0 };
                      } else if (i <= 6) {
                        // Main trunk with natural taper and slight bend
                        const trunkSection = i;
                        const trunkBend = Math.sin(trunkSection * 0.3) * 2; // Slight natural bend
                        baseX = trunkBend; 
                        baseY = 30 - (trunkSection * 12); 
                        baseZ = Math.cos(trunkSection * 0.2) * 1; // 3D depth variation
                        size = 3 - trunkSection * 0.2; energyLevel = 0.9; nodeType = 'trunk';
                        branchDNA = { growthVector: [trunkBend * 0.1, -1, 0], curveTendency: 0.1 };
                      } else if (i <= 14) {
                        // Primary branches - each with unique growth DNA
                        const branchIndex = i - 7;
                        const isLeft = branchIndex % 2 === 0;
                        const side = isLeft ? -1 : 1;
                        
                        // Unique branch characteristics (asymmetrical)
                        const branchHeight = -15 - branchIndex * 8;
                        const uniqueAngle = isLeft ? 
                          (0.6 + branchIndex * 0.2 + Math.sin(branchIndex) * 0.3) : // Left branches more varied
                          (0.8 + branchIndex * 0.15 + Math.cos(branchIndex) * 0.2); // Right branches different pattern
                        
                        const branchReach = 18 + branchIndex * 3;
                        const upwardLift = Math.sin(uniqueAngle) * 5; // Natural upward growth
                        const naturalTwist = Math.sin(branchIndex * 0.7) * 3; // 3D twist
                        
                        baseX = side * branchReach * Math.cos(uniqueAngle) + naturalTwist;
                        baseY = branchHeight + branchReach * Math.sin(uniqueAngle) + upwardLift;
                        baseZ = Math.sin(branchIndex * 0.5) * 4; // 3D depth
                        size = 2.2; energyLevel = 0.75; nodeType = 'primary';
                        branchDNA = { 
                          growthVector: [Math.cos(uniqueAngle) * side, Math.sin(uniqueAngle), Math.sin(branchIndex * 0.5) * 0.2],
                          curveTendency: 0.3 + Math.random() * 0.4,
                          side: side
                        };
                      } else if (i <= 28) {
                        // Secondary branches - inherit and mutate parent DNA
                        const secIndex = i - 15;
                        const parentBranch = Math.floor(secIndex / 2) + 7; // Reference to parent primary branch
                        const subBranch = secIndex % 2;
                        
                        // Inherit parent characteristics but with mutation
                        const parentSide = (parentBranch - 7) % 2 === 0 ? -1 : 1;
                        const parentHeight = -15 - (parentBranch - 7) * 8;
                        const parentReach = 18 + (parentBranch - 7) * 3;
                        
                        // Mutate from parent position
                        const mutationAngle = (subBranch === 0 ? 0.4 : -0.3) + Math.sin(secIndex) * 0.2;
                        const extensionReach = 12 + secIndex * 2;
                        const heightOffset = subBranch * 6 + Math.cos(secIndex) * 3;
                        
                        baseX = parentSide * (parentReach + extensionReach * Math.cos(mutationAngle));
                        baseY = parentHeight - heightOffset + extensionReach * Math.sin(mutationAngle);
                        baseZ = Math.sin(secIndex * 0.8) * 5 + Math.cos(parentBranch) * 2; // Complex 3D positioning
                        size = 1.8; energyLevel = 0.6; nodeType = 'secondary';
                        branchDNA = {
                          growthVector: [Math.cos(mutationAngle) * parentSide, Math.sin(mutationAngle), Math.sin(secIndex * 0.8) * 0.3],
                          curveTendency: 0.4 + Math.random() * 0.3,
                          mutation: mutationAngle
                        };
                      } else if (i <= 45) {
                        // Tertiary branches - more chaotic, wind-influenced
                        const tertIndex = i - 29;
                        const windFactor = Math.sin(tertIndex * 0.6) * Math.cos(tertIndex * 0.4);
                        const lightSeekingAngle = Math.atan2(tertIndex % 3 - 1, 2) + windFactor * 0.2;
                        
                        const baseRadius = 25 + tertIndex * 2.5;
                        const chaosOffset = Math.sin(tertIndex * 1.2) * 8;
                        const verticalSpread = -40 - tertIndex * 3;
                        
                        baseX = baseRadius * Math.cos(lightSeekingAngle) + chaosOffset;
                        baseY = verticalSpread + Math.sin(lightSeekingAngle) * 8 + windFactor * 4;
                        baseZ = Math.sin(tertIndex * 0.9) * 6 + Math.cos(tertIndex * 1.1) * 3;
                        size = 1.4; energyLevel = 0.5; nodeType = 'tertiary';
                        branchDNA = {
                          growthVector: [Math.cos(lightSeekingAngle), Math.sin(lightSeekingAngle), windFactor * 0.3],
                          windInfluence: windFactor,
                          lightSeeking: lightSeekingAngle
                        };
                      } else {
                        // Leaf canopy - organic distribution with 3D clustering
                        const leafIndex = i - 46;
                        const clusterAngle = (leafIndex / 14) * Math.PI * 1.6; // Not full circle for asymmetry
                        const clusterRadius = 35 + (leafIndex % 4) * 8;
                        const clusterHeight = -65 + Math.sin(clusterAngle) * 12;
                        
                        // Organic leaf clustering with 3D variation
                        const leafClusterX = Math.cos(clusterAngle) * clusterRadius;
                        const leafClusterY = clusterHeight;
                        const leafClusterZ = Math.sin(clusterAngle * 1.3) * 8;
                        
                        // Add natural leaf scatter
                        const leafScatter = Math.sin(leafIndex * 2.1) * 6;
                        const leafDroop = Math.abs(Math.sin(clusterAngle)) * 4;
                        
                        baseX = leafClusterX + leafScatter;
                        baseY = leafClusterY - leafDroop;
                        baseZ = leafClusterZ + Math.cos(leafIndex * 1.7) * 4;
                        size = 1.1 + Math.random() * 0.4; energyLevel = 0.4; nodeType = 'leaf';
                        branchDNA = {
                          clusterAngle: clusterAngle,
                          scatter: leafScatter,
                          droop: leafDroop
                        };
                      }
                      
                      return {
                        baseX, baseY, baseZ, size, energyLevel, nodeType, branchDNA,
                        phase: i * 0.08,
                        appearanceDelay: i * 0.015,
                        rotationPhase: i * 0.1
                      };
                    }, [i]);
                    
                    return (
                      <motion.circle
                        key={`organic-tree-${i}`}
                        cx="160"
                        cy="180"
                        r={nodeData.size}
                        style={{
                          x: useTransform(treeFormation, (progress) => {
                            const tierProgress = Math.max(0, Math.min(1, (progress - nodeData.appearanceDelay) / 0.3));
                            return nodeData.baseX * tierProgress;
                          }),
                          y: useTransform(treeFormation, (progress) => {
                            const tierProgress = Math.max(0, Math.min(1, (progress - nodeData.appearanceDelay) / 0.3));
                            return nodeData.baseY * tierProgress;
                          }),
                          opacity: useTransform(treeFormation, (progress) => {
                            const tierProgress = Math.max(0, Math.min(1, (progress - nodeData.appearanceDelay) / 0.3));
                            // 3D depth-based opacity + magical glow burst
                            const depthOpacity = Math.max(0.3, (nodeData.baseZ + 8) / 16);
                            const baseOpacity = nodeData.energyLevel * tierProgress * depthOpacity;
                            const magicalBoost = 1 + magicalGlow.get() * 0.6;
                            return baseOpacity * magicalBoost;
                          }),
                          scale: useTransform(treeFormation, (progress) => {
                            // 3D depth-based scaling + Super Saiyan energy pulse
                            const depthScale = 0.6 + (nodeData.baseZ + 8) / 20;
                            const energyScale = energyPulse.get();
                            return progress * depthScale * energyScale;
                          }),
                          filter: useTransform(magicalGlow, (glow) => {
                            if (glow === 0) return nodeData.energyLevel > 0.8 ? "url(#softGlow)" : "none";
                            return `url(#softGlow) drop-shadow(0 0 ${glow * 6}px rgba(255, 224, 215, ${glow * 0.9}))`;
                          })
                        }}
                        fill={nodeData.energyLevel > 0.7 ? "#FFE0D7" : 
                              nodeData.baseZ > 2 ? "#FFE0D7" : "#FFFFFF"} // Foreground nodes highlighted
                        filter={nodeData.energyLevel > 0.8 ? "url(#softGlow)" : "none"}
                        animate={{
                          scale: [1, 1.1 + nodeData.energyLevel * 0.3, 1],
                        }}
                        transition={{
                          duration: 2.5 + i * 0.02,
                          repeat: Infinity,
                          delay: i * 0.01
                        }}
                        suppressHydrationWarning
                      />
                    );
                  })}
                  
                  {/* Organic Branch Connections - 3D curved paths */}
                  {Array.from({ length: 35 }).map((_, i) => {
                    const connectionData = useMemo(() => {
                      // Define organic tree connections (not symmetrical)
                      const connections = [
                        // Trunk segments
                        {x1: 0, y1: 45, z1: 0, x2: Math.sin(0.3) * 2, y2: 30, z2: Math.cos(0.2) * 1, type: 'trunk'},
                        {x1: Math.sin(0.3) * 2, y1: 30, z1: Math.cos(0.2) * 1, x2: Math.sin(0.6) * 2, y2: 18, z2: Math.cos(0.4) * 1, type: 'trunk'},
                        {x1: Math.sin(0.6) * 2, y1: 18, z1: Math.cos(0.4) * 1, x2: Math.sin(0.9) * 2, y2: 6, z2: Math.cos(0.6) * 1, type: 'trunk'},
                        {x1: Math.sin(0.9) * 2, y1: 6, z1: Math.cos(0.6) * 1, x2: Math.sin(1.2) * 2, y2: -6, z2: Math.cos(0.8) * 1, type: 'trunk'},
                        {x1: Math.sin(1.2) * 2, y1: -6, z1: Math.cos(0.8) * 1, x2: Math.sin(1.5) * 2, y2: -18, z2: Math.cos(1.0) * 1, type: 'trunk'},
                        {x1: Math.sin(1.8) * 2, y1: -30, z1: Math.cos(1.2) * 1, x2: Math.sin(2.1) * 2, y2: -42, z2: Math.cos(1.4) * 1, type: 'trunk'},
                        
                        // Primary branch connections to trunk (asymmetrical)
                        {x1: Math.sin(0.6) * 2, y1: 18, z1: Math.cos(0.4) * 1, x2: -18 * Math.cos(0.8) + Math.sin(0.7) * 3, y2: -7 + 18 * Math.sin(0.8) + Math.sin(0.8) * 5, z2: Math.sin(0.5) * 4, type: 'primary'},
                        {x1: Math.sin(0.9) * 2, y1: 6, z1: Math.cos(0.6) * 1, x2: 21 * Math.cos(0.95) + Math.sin(1.4) * 3, y2: -15 + 21 * Math.sin(0.95) + Math.sin(0.95) * 5, z2: Math.sin(1.0) * 4, type: 'primary'},
                        {x1: Math.sin(1.2) * 2, y1: -6, z1: Math.cos(0.8) * 1, x2: -24 * Math.cos(1.0) + Math.sin(2.1) * 3, y2: -23 + 24 * Math.sin(1.0) + Math.sin(1.0) * 5, z2: Math.sin(1.5) * 4, type: 'primary'},
                        {x1: Math.sin(1.5) * 2, y1: -18, z1: Math.cos(1.0) * 1, x2: 27 * Math.cos(1.1) + Math.sin(2.8) * 3, y2: -31 + 27 * Math.sin(1.1) + Math.sin(1.1) * 5, z2: Math.sin(2.0) * 4, type: 'primary'},
                        {x1: Math.sin(1.8) * 2, y1: -30, z1: Math.cos(1.2) * 1, x2: -30 * Math.cos(1.2) + Math.sin(3.5) * 3, y2: -39 + 30 * Math.sin(1.2) + Math.sin(1.2) * 5, z2: Math.sin(2.5) * 4, type: 'primary'},
                        {x1: Math.sin(2.1) * 2, y1: -42, z1: Math.cos(1.4) * 1, x2: 33 * Math.cos(1.3) + Math.sin(4.2) * 3, y2: -47 + 33 * Math.sin(1.3) + Math.sin(1.3) * 5, z2: Math.sin(3.0) * 4, type: 'primary'},
                        
                        // Secondary branch connections (organic extensions from primaries)
                        {x1: -18 * Math.cos(0.8) + Math.sin(0.7) * 3, y1: -7 + 18 * Math.sin(0.8) + Math.sin(0.8) * 5, z1: Math.sin(0.5) * 4, 
                         x2: -30 + 12 * Math.cos(0.4), y2: -19 + 12 * Math.sin(0.4), z2: Math.sin(0.8) * 5 + Math.cos(8) * 2, type: 'secondary'},
                        {x1: 21 * Math.cos(0.95) + Math.sin(1.4) * 3, y1: -15 + 21 * Math.sin(0.95) + Math.sin(0.95) * 5, z1: Math.sin(1.0) * 4,
                         x2: 33 + 14 * Math.cos(-0.3), y2: -21 + 14 * Math.sin(-0.3), z2: Math.sin(1.6) * 5 + Math.cos(9) * 2, type: 'secondary'},
                        {x1: -24 * Math.cos(1.0) + Math.sin(2.1) * 3, y1: -23 + 24 * Math.sin(1.0) + Math.sin(1.0) * 5, z1: Math.sin(1.5) * 4,
                         x2: -36 + 16 * Math.cos(0.6), y2: -35 + 16 * Math.sin(0.6), z2: Math.sin(2.4) * 5 + Math.cos(10) * 2, type: 'secondary'},
                        {x1: 27 * Math.cos(1.1) + Math.sin(2.8) * 3, y1: -31 + 27 * Math.sin(1.1) + Math.sin(1.1) * 5, z1: Math.sin(2.0) * 4,
                         x2: 39 + 18 * Math.cos(-0.2), y2: -43 + 18 * Math.sin(-0.2), z2: Math.sin(2.8) * 5 + Math.cos(11) * 2, type: 'secondary'},
                        
                        // Tertiary connections (more chaotic, wind-influenced)
                        {x1: -30 + 12 * Math.cos(0.4), y1: -19 + 12 * Math.sin(0.4), z1: Math.sin(0.8) * 5,
                         x2: -40 + Math.sin(1.2) * 8, y2: -45 + Math.cos(0.4) * 4, z2: Math.sin(0.9) * 6, type: 'tertiary'},
                        {x1: 33 + 14 * Math.cos(-0.3), y1: -21 + 14 * Math.sin(-0.3), z1: Math.sin(1.6) * 5,
                         x2: 43 + Math.sin(2.4) * 8, y2: -47 + Math.cos(0.6) * 4, z2: Math.sin(1.8) * 6, type: 'tertiary'},
                        {x1: -36 + 16 * Math.cos(0.6), y1: -35 + 16 * Math.sin(0.6), z1: Math.sin(2.4) * 5,
                         x2: -48 + Math.sin(3.1) * 8, y2: -58 + Math.cos(1.2) * 4, z2: Math.sin(2.6) * 6, type: 'tertiary'},
                        {x1: 39 + 18 * Math.cos(-0.2), y1: -43 + 18 * Math.sin(-0.2), z1: Math.sin(2.8) * 5,
                         x2: 51 + Math.sin(3.8) * 8, y2: -61 + Math.cos(1.8) * 4, z2: Math.sin(3.2) * 6, type: 'tertiary'},
                        
                        // Additional organic sub-connections
                        {x1: -30 + 12 * Math.cos(0.4), y1: -19 + 12 * Math.sin(0.4), z1: Math.sin(0.8) * 5,
                         x2: -25 + 10 * Math.cos(0.7), y2: -32 + 10 * Math.sin(0.7), z2: Math.sin(1.1) * 4, type: 'branch'},
                        {x1: 33 + 14 * Math.cos(-0.3), y1: -21 + 14 * Math.sin(-0.3), z1: Math.sin(1.6) * 5,
                         x2: 28 + 12 * Math.cos(0.1), y2: -34 + 12 * Math.sin(0.1), z2: Math.sin(1.9) * 4, type: 'branch'},
                        
                        // Fine branch extensions toward canopy
                        {x1: -40 + Math.sin(1.2) * 8, y1: -45 + Math.cos(0.4) * 4, z1: Math.sin(0.9) * 6,
                         x2: -35 + Math.sin(4.1) * 6, y2: -58 + Math.cos(2.1) * 3, z2: Math.sin(4.3) * 5, type: 'canopy'},
                        {x1: 43 + Math.sin(2.4) * 8, y1: -47 + Math.cos(0.6) * 4, z1: Math.sin(1.8) * 6,
                         x2: 38 + Math.sin(5.2) * 6, y2: -60 + Math.cos(2.8) * 3, z2: Math.sin(5.4) * 5, type: 'canopy'},
                        {x1: -48 + Math.sin(3.1) * 8, y1: -58 + Math.cos(1.2) * 4, z1: Math.sin(2.6) * 6,
                         x2: -42 + Math.sin(6.3) * 6, y2: -71 + Math.cos(3.5) * 3, z2: Math.sin(6.5) * 5, type: 'canopy'},
                        {x1: 51 + Math.sin(3.8) * 8, y1: -61 + Math.cos(1.8) * 4, z1: Math.sin(3.2) * 6,
                         x2: 45 + Math.sin(7.4) * 6, y2: -74 + Math.cos(4.2) * 3, z2: Math.sin(7.6) * 5, type: 'canopy'},
                        
                        // Subtle leaf connections - very light
                        {x1: -35 + Math.sin(4.1) * 6, y1: -58 + Math.cos(2.1) * 3, z1: Math.sin(4.3) * 5,
                         x2: -30 + Math.sin(8.1) * 4, y2: -68 + Math.cos(5.1) * 2, z2: Math.sin(8.3) * 3, type: 'leaf'},
                        {x1: 38 + Math.sin(5.2) * 6, y1: -60 + Math.cos(2.8) * 3, z1: Math.sin(5.4) * 5,
                         x2: 33 + Math.sin(9.2) * 4, y2: -70 + Math.cos(5.8) * 2, z2: Math.sin(9.4) * 3, type: 'leaf'},
                        {x1: -42 + Math.sin(6.3) * 6, y1: -71 + Math.cos(3.5) * 3, z1: Math.sin(6.5) * 5,
                         x2: -37 + Math.sin(10.3) * 4, y2: -78 + Math.cos(6.5) * 2, z2: Math.sin(10.5) * 3, type: 'leaf'},
                        {x1: 45 + Math.sin(7.4) * 6, y1: -74 + Math.cos(4.2) * 3, z1: Math.sin(7.6) * 5,
                         x2: 40 + Math.sin(11.4) * 4, y2: -81 + Math.cos(7.2) * 2, z2: Math.sin(11.6) * 3, type: 'leaf'},
                        
                        // Cross-connections for organic realism  
                        {x1: -25 + 10 * Math.cos(0.7), y1: -32 + 10 * Math.sin(0.7), z1: Math.sin(1.1) * 4,
                         x2: 28 + 12 * Math.cos(0.1), y2: -34 + 12 * Math.sin(0.1), z2: Math.sin(1.9) * 4, type: 'cross'},
                        {x1: -30 + Math.sin(8.1) * 4, y1: -68 + Math.cos(5.1) * 2, z1: Math.sin(8.3) * 3,
                         x2: 33 + Math.sin(9.2) * 4, y2: -70 + Math.cos(5.8) * 2, z2: Math.sin(9.4) * 3, type: 'cross'}
                      ];
                      
                      return connections[i] || {x1: 0, y1: 0, z1: 0, x2: 0, y2: 0, z2: 0, type: 'branch'};
                    }, [i]);
                    
                    return (
                      <motion.line
                        key={`organic-connection-${i}`}
                        x1={useTransform(treeFormation, (progress) => 160 + connectionData.x1 * Math.min(1, progress * 2))}
                        y1={useTransform(treeFormation, (progress) => 180 + connectionData.y1 * Math.min(1, progress * 2))}
                        x2={useTransform(treeFormation, (progress) => 160 + connectionData.x2 * Math.min(1, progress * 2))}
                        y2={useTransform(treeFormation, (progress) => 180 + connectionData.y2 * Math.min(1, progress * 2))}
                        stroke={connectionData.type === 'trunk' ? "#FFE0D7" : 
                               connectionData.type === 'primary' ? "#FFE0D7" :
                               connectionData.type === 'secondary' ? "#FFFFFF" : 
                               connectionData.type === 'tertiary' ? "#F8F8F8" :
                               connectionData.type === 'canopy' ? "#F0F0F0" :
                               connectionData.type === 'leaf' ? "#E8E8E8" :
                               "#E0E0E0"}
                        strokeWidth={connectionData.type === 'trunk' ? "0.8" : 
                                   connectionData.type === 'primary' ? "0.6" : 
                                   connectionData.type === 'secondary' ? "0.4" :
                                   connectionData.type === 'tertiary' ? "0.3" :
                                   connectionData.type === 'canopy' ? "0.25" :
                                   connectionData.type === 'leaf' ? "0.2" :
                                   "0.15"}
                        style={{
                          opacity: useTransform(treeFormation, (progress) => {
                            // 3D depth-based connection opacity + type-based fading + magical energy
                            const avgZ = (connectionData.z1 + connectionData.z2) / 2;
                            const depthOpacity = Math.max(0.05, (avgZ + 8) / 20);
                            const typeOpacity = connectionData.type === 'trunk' ? 0.4 :
                                              connectionData.type === 'primary' ? 0.3 :
                                              connectionData.type === 'secondary' ? 0.25 :
                                              connectionData.type === 'tertiary' ? 0.2 :
                                              connectionData.type === 'canopy' ? 0.15 :
                                              connectionData.type === 'leaf' ? 0.1 :
                                              0.08;
                            const baseOpacity = Math.min(typeOpacity, progress * 0.6) * depthOpacity;
                            const magicalBoost = 1 + magicalGlow.get() * 0.8;
                            return baseOpacity * magicalBoost;
                          }),
                          filter: useTransform(magicalGlow, (glow) => {
                            if (glow === 0) return "none";
                            const intensity = glow * 4;
                            return `drop-shadow(0 0 ${intensity}px rgba(255, 224, 215, ${glow * 0.7}))`;
                          })
                        }}
                        suppressHydrationWarning
                      />
                    );
                  })}
                  
                  {/* Central Core */}
                  <motion.circle
                    cx="160"
                    cy="180"
                    r="8"
                    fill="url(#galaxyCenterMobile)"
                    style={{ 
                      opacity: useTransform(magicalGlow, (glow) => 0.8 + glow * 0.4),
                      scale: centralPulse,
                      filter: useTransform(magicalGlow, (glow) => {
                        if (glow === 0) return "url(#softGlow)";
                        return `url(#softGlow) drop-shadow(0 0 ${glow * 15}px rgba(255, 224, 215, ${glow}))`;
                      })
                    }}
                    suppressHydrationWarning
                  />
                </motion.g>
                {/* eslint-enable react-hooks/rules-of-hooks */}

                {/* Minimalist Geometric Accents - like other CTAs */}
                {[0, Math.PI/2, Math.PI, 3*Math.PI/2].map((angle, i) => {
                  const x = 160 + 130 * Math.cos(angle);
                  const y = 160 + 130 * Math.sin(angle);
                  
                  return (
                    <motion.g key={`accent-${i}`}>
                      <motion.line
                        x1={x - 2}
                        y1={y}
                        x2={x + 2}
                        y2={y}
                        stroke="#FFE0D7"
                        strokeWidth="0.6"
                        opacity={0.15}
                        animate={{
                          opacity: [0.1, 0.25, 0.1],
                          scale: [0.8, 1.1, 0.8]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5
                        }}
                        suppressHydrationWarning
                      />
                      <motion.line
                        x1={x}
                        y1={y - 2}
                        x2={x}
                        y2={y + 2}
                        stroke="#FFE0D7"
                        strokeWidth="0.6"
                        opacity={0.15}
                        animate={{
                          opacity: [0.1, 0.25, 0.1],
                          scale: [0.8, 1.1, 0.8]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5 + 0.2
                        }}
                        suppressHydrationWarning
                      />
                    </motion.g>
                  );
                })}
              </svg>
            </motion.div>

            {/* Floating Project Elements */}
            <motion.div
              className="absolute top-8 right-8 w-2 h-2 bg-accent/50 rounded-full"
              animate={{
                y: [0, -12, 0],
                opacity: [0.5, 0.7, 0.5]
              }}
              transition={{ duration: 3.5, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-16 left-8 w-1.5 h-1.5 bg-accent/40 rounded-full"
              animate={{
                y: [0, -8, 0],
                x: [0, 6, 0],
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
            />
            <motion.div
              className="absolute top-1/3 left-4 w-1 h-1 bg-accent/45 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.45, 0.65, 0.45]
              }}
              transition={{ duration: 2.8, repeat: Infinity, delay: 0.8 }}
            />
            <motion.div
              className="absolute bottom-1/3 right-6 w-2 h-2 bg-accent/35 rounded-full"
              animate={{
                rotate: [0, 360],
                scale: [0.9, 1.1, 0.9],
                opacity: [0.35, 0.55, 0.35]
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
            />
            </div>

          {/* CTA Buttons - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center space-y-4"
          >
            {/* Primary CTA */}
            <a href="https://cal.com/bensegev/30min" target="_blank" rel="noopener noreferrer" className="group relative w-full min-h-[56px] touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 rounded-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/40 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative inline-flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-accent text-obsidian rounded-full text-base font-medium transition-all duration-300 group-hover:bg-accent/90 group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:-translate-y-1 group-active:scale-95 w-full sm:w-auto">
                <span className="relative">
                  Book Appointment
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full block" />
                </span>
                
                <div className="relative overflow-hidden w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
                  <motion.svg 
                    className="absolute w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </div>
              </div>
            </a>

            {/* Secondary CTA */}
                          <Link href="/case-studies" className="group relative w-full min-h-[56px] touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-obsidian/50 focus-visible:ring-offset-2 rounded-full">
              <LiquidGlass 
                intensity="subtle" 
                animated
                borderRadius="rounded-full"
                className="group-hover:scale-[1.02] transition-transform duration-300 border-bone/30 group-hover:border-bone/50"
              >
                <div className="inline-flex items-center justify-center gap-3 sm:gap-4 px-8 py-4 sm:px-6 md:px-8 lg:px-10 sm:py-3 md:py-4 lg:py-5 text-bone/80 group-hover:text-bone text-base font-medium transition-all duration-300 group-hover:-translate-y-1 group-active:scale-95 w-full sm:w-auto">
                  <span className="relative">
                    Download Training Guide
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full block" />
                  </span>
                  
                  <div className="relative overflow-hidden w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
                    <svg 
                      className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-all duration-300 group-hover:rotate-45" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </LiquidGlass>
            </Link>
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-16 items-center min-h-[60vh]">
          
          {/* Content Side - Left */}
          <div className="col-span-7 space-y-12 text-left">

            {/* Header */}
            <div className="text-left">
              <h2 className="font-display text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-bone via-accent to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                  Ready to grow your team?
              </span>
            </h2>
              <p className="text-lg sm:text-lg text-bone/75 font-light max-w-2xl">
                Transform your team into strategic powerhouses with training that builds lasting capabilities.
            </p>
            </div>

            {/* Convergence Statement */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl"
            >
              <p className="text-lg sm:text-lg text-bone/70 font-light leading-relaxed">
                From foundational knowledge to advanced strategic thinking, we cultivate wisdom that compounds over time.
              </p>
            </motion.div>

            {/* CTA Buttons - Desktop */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-row items-start justify-start space-x-6 flex-nowrap"
            >
              {/* Primary CTA */}
              <a href="https://cal.com/bensegev/30min" target="_blank" rel="noopener noreferrer" className="group relative flex-shrink-0">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/40 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative inline-flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-accent text-obsidian rounded-full text-base sm:text-base lg:text-lg font-medium transition-all duration-300 group-hover:bg-accent/90 group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:-translate-y-1 group-active:scale-95 whitespace-nowrap">
                  <span className="relative">
                    Book Appointment
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full block" />
                  </span>
                  
                  <div className="relative overflow-hidden w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
                    <motion.svg 
                      className="absolute w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </div>
                </div>
              </a>

              {/* Secondary CTA */}
              <Link href="/case-studies" className="group relative min-h-[56px] touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-obsidian/50 focus-visible:ring-offset-2 rounded-full flex-shrink-0">
                <LiquidGlass 
                  intensity="subtle" 
                  animated
                  borderRadius="rounded-full"
                  className="group-hover:scale-[1.02] transition-transform duration-300 border-bone/30 group-hover:border-bone/50"
                >
                  <div className="inline-flex items-center justify-center gap-3 sm:gap-4 px-8 py-4 sm:px-6 md:px-8 lg:px-10 sm:py-3 md:py-4 lg:py-5 text-bone/80 group-hover:text-bone text-base sm:text-base lg:text-lg font-medium transition-all duration-300 group-hover:-translate-y-1 group-active:scale-95 w-full sm:w-auto whitespace-nowrap">
                    <span className="relative">
                      Download Training Guide
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full block" />
                    </span>
                    
                    <div className="relative overflow-hidden w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
                      <svg 
                        className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-all duration-300 group-hover:rotate-45" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </LiquidGlass>
              </Link>
            </motion.div>

            {/* Closing Statement */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="pt-8"
            >
              <p className="text-base text-bone/50 font-light italic">
                Where knowledge becomes wisdom
              </p>
            </motion.div>
          </div>

          {/* Visual Side - Right (Desktop Only) */}
          <div className="col-span-5 relative h-96 lg:h-full">
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              style={{
                scale: treeScale,
                transformOrigin: "50% 50%"
              }}
            >
              {/* Enhanced SVG with Assembly Rings - Desktop */}
              <svg className="w-full h-full max-w-md" viewBox="0 0 400 400" suppressHydrationWarning>
                <defs>
                  <radialGradient id="galaxyCenterDesktop" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0.9" />
                    <stop offset="70%" stopColor="#FFE0D7" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
                  </radialGradient>
                  
                  <filter id="softGlowDesktop" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Assembly Progress Rings - like other CTAs */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="70"
                  fill="none"
                  stroke="#FFE0D7"
                  strokeWidth="1"
                  opacity={0.3}
                  strokeDasharray="3 6"
                  style={{
                    pathLength: assemblyProgress,
                    rotate: ringRotation1
                  }}
                />
                <motion.circle
                  cx="200"
                  cy="200"
                  r="110"
                  fill="none"
                  stroke="#FFE0D7"
                  strokeWidth="1"
                  opacity={0.26}
                  strokeDasharray="3 6"
                  style={{
                    pathLength: assemblyProgress,
                    rotate: ringRotation2
                  }}
                />
                <motion.circle
                  cx="200"
                  cy="200"
                  r="150"
                  fill="none"
                  stroke="#FFE0D7"
                  strokeWidth="1"
                  opacity={0.22}
                  strokeDasharray="3 6"
                  style={{
                    pathLength: assemblyProgress,
                    rotate: ringRotation3
                  }}
                />
                <motion.circle
                  cx="200"
                  cy="200"
                  r="190"
                  fill="none"
                  stroke="#FFE0D7"
                  strokeWidth="1"
                  opacity={0.18}
                  strokeDasharray="3 6"
                  style={{
                    pathLength: assemblyProgress,
                    rotate: ringRotation4
                  }}
                />

                                {/* eslint-disable react-hooks/rules-of-hooks */}
                <motion.g>
                  {/* 3D Tree of Knowledge - Desktop (larger organic system) */}
                  {Array.from({ length: 85 }).map((_, i) => {
                    const nodeData = useMemo(() => {
                      // Enhanced Organic Tree Growth System with 3D coordinates - Desktop scale
                      let baseX, baseY, baseZ, size, energyLevel, nodeType, branchDNA;
                      
                      if (i === 0) {
                        // Root system
                        baseX = 0; baseY = 60; baseZ = 0; 
                        size = 5; energyLevel = 1; nodeType = 'root';
                        branchDNA = { growthVector: [0, -1, 0], curveTendency: 0 };
                      } else if (i <= 8) {
                        // Main trunk with natural taper and slight bend
                        const trunkSection = i;
                        const trunkBend = Math.sin(trunkSection * 0.25) * 3; // Slight natural bend
                        baseX = trunkBend; 
                        baseY = 40 - (trunkSection * 15); 
                        baseZ = Math.cos(trunkSection * 0.18) * 2; // 3D depth variation
                        size = 4.5 - trunkSection * 0.25; energyLevel = 0.9; nodeType = 'trunk';
                        branchDNA = { growthVector: [trunkBend * 0.08, -1, 0], curveTendency: 0.08 };
                      } else if (i <= 18) {
                        // Primary branches - each with unique growth DNA
                        const branchIndex = i - 9;
                        const isLeft = branchIndex % 2 === 0;
                        const side = isLeft ? -1 : 1;
                        
                        // Unique branch characteristics (asymmetrical) - larger scale
                        const branchHeight = -20 - branchIndex * 12;
                        const uniqueAngle = isLeft ? 
                          (0.5 + branchIndex * 0.18 + Math.sin(branchIndex * 1.1) * 0.35) : // Left branches more varied
                          (0.75 + branchIndex * 0.12 + Math.cos(branchIndex * 0.9) * 0.25); // Right branches different pattern
                        
                        const branchReach = 25 + branchIndex * 4;
                        const upwardLift = Math.sin(uniqueAngle) * 7; // Natural upward growth
                        const naturalTwist = Math.sin(branchIndex * 0.6) * 5; // 3D twist
                        
                        baseX = side * branchReach * Math.cos(uniqueAngle) + naturalTwist;
                        baseY = branchHeight + branchReach * Math.sin(uniqueAngle) + upwardLift;
                        baseZ = Math.sin(branchIndex * 0.4) * 6; // 3D depth
                        size = 3.2; energyLevel = 0.8; nodeType = 'primary';
                        branchDNA = { 
                          growthVector: [Math.cos(uniqueAngle) * side, Math.sin(uniqueAngle), Math.sin(branchIndex * 0.4) * 0.25],
                          curveTendency: 0.25 + Math.random() * 0.5,
                          side: side
                        };
                      } else if (i <= 38) {
                        // Secondary branches - inherit and mutate parent DNA
                        const secIndex = i - 19;
                        const parentBranch = Math.floor(secIndex / 2) + 9; // Reference to parent primary branch
                        const subBranch = secIndex % 2;
                        
                        // Inherit parent characteristics but with mutation
                        const parentSide = (parentBranch - 9) % 2 === 0 ? -1 : 1;
                        const parentHeight = -20 - (parentBranch - 9) * 12;
                        const parentReach = 25 + (parentBranch - 9) * 4;
                        
                        // Mutate from parent position
                        const mutationAngle = (subBranch === 0 ? 0.5 : -0.4) + Math.sin(secIndex * 1.1) * 0.25;
                        const extensionReach = 16 + secIndex * 2.5;
                        const heightOffset = subBranch * 8 + Math.cos(secIndex * 0.8) * 4;
                        
                        baseX = parentSide * (parentReach + extensionReach * Math.cos(mutationAngle));
                        baseY = parentHeight - heightOffset + extensionReach * Math.sin(mutationAngle);
                        baseZ = Math.sin(secIndex * 0.7) * 7 + Math.cos(parentBranch * 0.9) * 3; // Complex 3D positioning
                        size = 2.5; energyLevel = 0.65; nodeType = 'secondary';
                        branchDNA = {
                          growthVector: [Math.cos(mutationAngle) * parentSide, Math.sin(mutationAngle), Math.sin(secIndex * 0.7) * 0.35],
                          curveTendency: 0.35 + Math.random() * 0.4,
                          mutation: mutationAngle
                        };
                      } else if (i <= 62) {
                        // Tertiary branches - more chaotic, wind-influenced
                        const tertIndex = i - 39;
                        const windFactor = Math.sin(tertIndex * 0.5) * Math.cos(tertIndex * 0.35);
                        const lightSeekingAngle = Math.atan2(tertIndex % 4 - 2, 3) + windFactor * 0.3;
                        
                        const baseRadius = 35 + tertIndex * 3;
                        const chaosOffset = Math.sin(tertIndex * 1.0) * 12;
                        const verticalSpread = -60 - tertIndex * 4;
                        
                        baseX = baseRadius * Math.cos(lightSeekingAngle) + chaosOffset;
                        baseY = verticalSpread + Math.sin(lightSeekingAngle) * 12 + windFactor * 6;
                        baseZ = Math.sin(tertIndex * 0.8) * 8 + Math.cos(tertIndex * 1.2) * 4;
                        size = 2; energyLevel = 0.55; nodeType = 'tertiary';
                        branchDNA = {
                          growthVector: [Math.cos(lightSeekingAngle), Math.sin(lightSeekingAngle), windFactor * 0.4],
                          windInfluence: windFactor,
                          lightSeeking: lightSeekingAngle
                        };
                      } else {
                        // Leaf canopy - organic distribution with 3D clustering
                        const leafIndex = i - 63;
                        const clusterAngle = (leafIndex / 22) * Math.PI * 1.7; // Not full circle for asymmetry
                        const clusterRadius = 50 + (leafIndex % 5) * 12;
                        const clusterHeight = -90 + Math.sin(clusterAngle) * 18;
                        
                        // Organic leaf clustering with 3D variation
                        const leafClusterX = Math.cos(clusterAngle) * clusterRadius;
                        const leafClusterY = clusterHeight;
                        const leafClusterZ = Math.sin(clusterAngle * 1.4) * 10;
                        
                        // Add natural leaf scatter
                        const leafScatter = Math.sin(leafIndex * 1.9) * 8;
                        const leafDroop = Math.abs(Math.sin(clusterAngle)) * 6;
                        
                        baseX = leafClusterX + leafScatter;
                        baseY = leafClusterY - leafDroop;
                        baseZ = leafClusterZ + Math.cos(leafIndex * 1.5) * 6;
                        size = 1.5 + Math.random() * 0.6; energyLevel = 0.45; nodeType = 'leaf';
                        branchDNA = {
                          clusterAngle: clusterAngle,
                          scatter: leafScatter,
                          droop: leafDroop
                        };
                      }
                      
                      return {
                        baseX, baseY, baseZ, size, energyLevel, nodeType, branchDNA,
                        phase: i * 0.06,
                        appearanceDelay: i * 0.012,
                        rotationPhase: i * 0.08
                      };
                    }, [i]);
                    
                    return (
                      <motion.circle
                        key={`organic-tree-desktop-${i}`}
                        cx="200"
                        cy="220"
                        r={nodeData.size}
                        style={{
                          x: useTransform(treeFormation, (progress) => {
                            const tierProgress = Math.max(0, Math.min(1, (progress - nodeData.appearanceDelay) / 0.25));
                            return nodeData.baseX * tierProgress;
                          }),
                          y: useTransform(treeFormation, (progress) => {
                            const tierProgress = Math.max(0, Math.min(1, (progress - nodeData.appearanceDelay) / 0.25));
                            return nodeData.baseY * tierProgress;
                          }),
                          opacity: useTransform(treeFormation, (progress) => {
                            const tierProgress = Math.max(0, Math.min(1, (progress - nodeData.appearanceDelay) / 0.25));
                            // 3D depth-based opacity + magical glow burst
                            const depthOpacity = Math.max(0.25, (nodeData.baseZ + 10) / 20);
                            const baseOpacity = nodeData.energyLevel * tierProgress * depthOpacity;
                            const magicalBoost = 1 + magicalGlow.get() * 0.7;
                            return baseOpacity * magicalBoost;
                          }),
                          scale: useTransform(treeFormation, (progress) => {
                            // 3D depth-based scaling + Super Saiyan energy pulse
                            const depthScale = 0.5 + (nodeData.baseZ + 10) / 25;
                            const energyScale = energyPulse.get();
                            return progress * depthScale * energyScale;
                          }),
                          filter: useTransform(magicalGlow, (glow) => {
                            if (glow === 0) return nodeData.energyLevel > 0.8 ? "url(#softGlowDesktop)" : "none";
                            return `url(#softGlowDesktop) drop-shadow(0 0 ${glow * 8}px rgba(255, 224, 215, ${glow * 0.9}))`;
                          })
                        }}
                        fill={nodeData.energyLevel > 0.7 ? "#FFE0D7" : 
                              nodeData.baseZ > 3 ? "#FFE0D7" : "#FFFFFF"} // Foreground nodes highlighted
                        filter={nodeData.energyLevel > 0.8 ? "url(#softGlowDesktop)" : "none"}
                        animate={{
                          scale: [1, 1.15 + nodeData.energyLevel * 0.4, 1],
                        }}
                        transition={{
                          duration: 2.8 + i * 0.015,
                          repeat: Infinity,
                          delay: i * 0.008
                        }}
                        suppressHydrationWarning
                      />
                    );
                  })}
                  
                  {/* Organic Branch Connections - Desktop (enhanced with more detail) */}
                  {Array.from({ length: 45 }).map((_, i) => {
                    const connectionData = useMemo(() => {
                      // Enhanced organic tree connections for desktop - more detailed
                      const connections = [
                        // Trunk segments (larger scale)
                        {x1: 0, y1: 60, z1: 0, x2: Math.sin(0.25) * 3, y2: 40, z2: Math.cos(0.18) * 2, type: 'trunk'},
                        {x1: Math.sin(0.25) * 3, y1: 40, z1: Math.cos(0.18) * 2, x2: Math.sin(0.5) * 3, y2: 25, z2: Math.cos(0.36) * 2, type: 'trunk'},
                        {x1: Math.sin(0.5) * 3, y1: 25, z1: Math.cos(0.36) * 2, x2: Math.sin(0.75) * 3, y2: 10, z2: Math.cos(0.54) * 2, type: 'trunk'},
                        {x1: Math.sin(0.75) * 3, y1: 10, z1: Math.cos(0.54) * 2, x2: Math.sin(1.0) * 3, y2: -5, z2: Math.cos(0.72) * 2, type: 'trunk'},
                        {x1: Math.sin(1.0) * 3, y1: -5, z1: Math.cos(0.72) * 2, x2: Math.sin(1.25) * 3, y2: -20, z2: Math.cos(0.9) * 2, type: 'trunk'},
                        {x1: Math.sin(1.25) * 3, y1: -20, z1: Math.cos(0.9) * 2, x2: Math.sin(1.5) * 3, y2: -35, z2: Math.cos(1.08) * 2, type: 'trunk'},
                        {x1: Math.sin(1.5) * 3, y1: -35, z1: Math.cos(1.08) * 2, x2: Math.sin(1.75) * 3, y2: -50, z2: Math.cos(1.26) * 2, type: 'trunk'},
                        {x1: Math.sin(1.75) * 3, y1: -50, z1: Math.cos(1.26) * 2, x2: Math.sin(2.0) * 3, y2: -65, z2: Math.cos(1.44) * 2, type: 'trunk'},
                        
                        // Primary branch connections to trunk (asymmetrical, larger scale)
                        {x1: Math.sin(0.5) * 3, y1: 25, z1: Math.cos(0.36) * 2, x2: -25 * Math.cos(0.5) + Math.sin(0.6) * 5, y2: -10 + 25 * Math.sin(0.5) + Math.sin(0.5) * 7, z2: Math.sin(0.4) * 6, type: 'primary'},
                        {x1: Math.sin(0.75) * 3, y1: 10, z1: Math.cos(0.54) * 2, x2: 28 * Math.cos(0.75) + Math.sin(1.1) * 5, y2: -23 + 28 * Math.sin(0.75) + Math.sin(0.75) * 7, z2: Math.sin(0.8) * 6, type: 'primary'},
                        {x1: Math.sin(1.0) * 3, y1: -5, z1: Math.cos(0.72) * 2, x2: -31 * Math.cos(0.8) + Math.sin(1.6) * 5, y2: -35 + 31 * Math.sin(0.8) + Math.sin(0.8) * 7, z2: Math.sin(1.2) * 6, type: 'primary'},
                        {x1: Math.sin(1.25) * 3, y1: -20, z1: Math.cos(0.9) * 2, x2: 34 * Math.cos(0.9) + Math.sin(2.1) * 5, y2: -47 + 34 * Math.sin(0.9) + Math.sin(0.9) * 7, z2: Math.sin(1.6) * 6, type: 'primary'},
                        {x1: Math.sin(1.5) * 3, y1: -35, z1: Math.cos(1.08) * 2, x2: -37 * Math.cos(1.0) + Math.sin(2.6) * 5, y2: -59 + 37 * Math.sin(1.0) + Math.sin(1.0) * 7, z2: Math.sin(2.0) * 6, type: 'primary'},
                        {x1: Math.sin(1.75) * 3, y1: -50, z1: Math.cos(1.26) * 2, x2: 40 * Math.cos(1.1) + Math.sin(3.1) * 5, y2: -71 + 40 * Math.sin(1.1) + Math.sin(1.1) * 7, z2: Math.sin(2.4) * 6, type: 'primary'},
                        
                        // Secondary branch connections (organic extensions from primaries)
                        {x1: -25 * Math.cos(0.5) + Math.sin(0.6) * 5, y1: -10 + 25 * Math.sin(0.5) + Math.sin(0.5) * 7, z1: Math.sin(0.4) * 6, 
                         x2: -40 + 16 * Math.cos(0.3), y2: -28 + 16 * Math.sin(0.3), z2: Math.sin(0.7) * 7 + Math.cos(8) * 3, type: 'secondary'},
                        {x1: 28 * Math.cos(0.75) + Math.sin(1.1) * 5, y1: -23 + 28 * Math.sin(0.75) + Math.sin(0.75) * 7, z1: Math.sin(0.8) * 6,
                         x2: 44 + 18 * Math.cos(-0.2), y2: -35 + 18 * Math.sin(-0.2), z2: Math.sin(1.3) * 7 + Math.cos(9) * 3, type: 'secondary'},
                        {x1: -31 * Math.cos(0.8) + Math.sin(1.6) * 5, y1: -35 + 31 * Math.sin(0.8) + Math.sin(0.8) * 7, z1: Math.sin(1.2) * 6,
                         x2: -48 + 20 * Math.cos(0.5), y2: -52 + 20 * Math.sin(0.5), z2: Math.sin(1.9) * 7 + Math.cos(10) * 3, type: 'secondary'},
                        {x1: 34 * Math.cos(0.9) + Math.sin(2.1) * 5, y1: -47 + 34 * Math.sin(0.9) + Math.sin(0.9) * 7, z1: Math.sin(1.6) * 6,
                         x2: 52 + 22 * Math.cos(-0.1), y2: -64 + 22 * Math.sin(-0.1), z2: Math.sin(2.5) * 7 + Math.cos(11) * 3, type: 'secondary'},
                        
                        // Tertiary connections (more chaotic, wind-influenced)
                        {x1: -40 + 16 * Math.cos(0.3), y1: -28 + 16 * Math.sin(0.3), z1: Math.sin(0.7) * 7,
                         x2: -55 + Math.sin(1.4) * 12, y2: -58 + Math.cos(0.3) * 6, z2: Math.sin(0.8) * 8, type: 'tertiary'},
                        {x1: 44 + 18 * Math.cos(-0.2), y1: -35 + 18 * Math.sin(-0.2), z1: Math.sin(1.3) * 7,
                         x2: 59 + Math.sin(2.8) * 12, y2: -65 + Math.cos(0.7) * 6, z2: Math.sin(1.9) * 8, type: 'tertiary'},
                        {x1: -48 + 20 * Math.cos(0.5), y1: -52 + 20 * Math.sin(0.5), z1: Math.sin(1.9) * 7,
                         x2: -63 + Math.sin(3.5) * 12, y2: -79 + Math.cos(1.1) * 6, z2: Math.sin(2.6) * 8, type: 'tertiary'},
                        {x1: 52 + 22 * Math.cos(-0.1), y1: -64 + 22 * Math.sin(-0.1), z1: Math.sin(2.5) * 7,
                         x2: 67 + Math.sin(4.2) * 12, y2: -91 + Math.cos(1.5) * 6, z2: Math.sin(3.3) * 8, type: 'tertiary'},
                        
                        // Quaternary fine branches
                        {x1: -55 + Math.sin(1.4) * 12, y1: -58 + Math.cos(0.3) * 6, z1: Math.sin(0.8) * 8,
                         x2: -68 + Math.sin(5.1) * 10, y2: -82 + Math.cos(2.1) * 5, z2: Math.sin(5.3) * 7, type: 'quaternary'},
                        {x1: 59 + Math.sin(2.8) * 12, y1: -65 + Math.cos(0.7) * 6, z1: Math.sin(1.9) * 8,
                         x2: 72 + Math.sin(6.2) * 10, y2: -89 + Math.cos(2.8) * 5, z2: Math.sin(6.4) * 7, type: 'quaternary'},
                        {x1: -63 + Math.sin(3.5) * 12, y1: -79 + Math.cos(1.1) * 6, z1: Math.sin(2.6) * 8,
                         x2: -76 + Math.sin(7.3) * 10, y2: -103 + Math.cos(3.5) * 5, z2: Math.sin(7.5) * 7, type: 'quaternary'},
                        {x1: 67 + Math.sin(4.2) * 12, y1: -91 + Math.cos(1.5) * 6, z1: Math.sin(3.3) * 8,
                         x2: 80 + Math.sin(8.4) * 10, y2: -115 + Math.cos(4.2) * 5, z2: Math.sin(8.6) * 7, type: 'quaternary'},
                        
                        // Canopy connections - very fine
                        {x1: -68 + Math.sin(5.1) * 10, y1: -82 + Math.cos(2.1) * 5, z1: Math.sin(5.3) * 7,
                         x2: -58 + Math.sin(9.1) * 8, y2: -98 + Math.cos(5.1) * 4, z2: Math.sin(9.3) * 6, type: 'canopy'},
                        {x1: 72 + Math.sin(6.2) * 10, y1: -89 + Math.cos(2.8) * 5, z1: Math.sin(6.4) * 7,
                         x2: 62 + Math.sin(10.2) * 8, y2: -105 + Math.cos(5.8) * 4, z2: Math.sin(10.4) * 6, type: 'canopy'},
                        {x1: -76 + Math.sin(7.3) * 10, y1: -103 + Math.cos(3.5) * 5, z1: Math.sin(7.5) * 7,
                         x2: -66 + Math.sin(11.3) * 8, y2: -119 + Math.cos(6.5) * 4, z2: Math.sin(11.5) * 6, type: 'canopy'},
                        {x1: 80 + Math.sin(8.4) * 10, y1: -115 + Math.cos(4.2) * 5, z1: Math.sin(8.6) * 7,
                         x2: 70 + Math.sin(12.4) * 8, y2: -131 + Math.cos(7.2) * 4, z2: Math.sin(12.6) * 6, type: 'canopy'},
                        
                        // Leaf cluster connections - extremely subtle
                        {x1: -58 + Math.sin(9.1) * 8, y1: -98 + Math.cos(5.1) * 4, z1: Math.sin(9.3) * 6,
                         x2: -53 + Math.sin(13.1) * 6, y2: -108 + Math.cos(8.1) * 3, z2: Math.sin(13.3) * 4, type: 'leaf'},
                        {x1: 62 + Math.sin(10.2) * 8, y1: -105 + Math.cos(5.8) * 4, z1: Math.sin(10.4) * 6,
                         x2: 57 + Math.sin(14.2) * 6, y2: -115 + Math.cos(8.8) * 3, z2: Math.sin(14.4) * 4, type: 'leaf'},
                        {x1: -66 + Math.sin(11.3) * 8, y1: -119 + Math.cos(6.5) * 4, z1: Math.sin(11.5) * 6,
                         x2: -61 + Math.sin(15.3) * 6, y2: -129 + Math.cos(9.5) * 3, z2: Math.sin(15.5) * 4, type: 'leaf'},
                        {x1: 70 + Math.sin(12.4) * 8, y1: -131 + Math.cos(7.2) * 4, z1: Math.sin(12.6) * 6,
                         x2: 65 + Math.sin(16.4) * 6, y2: -141 + Math.cos(10.2) * 3, z2: Math.sin(16.6) * 4, type: 'leaf'},
                        
                        // Cross-connections for organic realism (desktop)
                        {x1: -40 + 16 * Math.cos(0.3), y1: -28 + 16 * Math.sin(0.3), z1: Math.sin(0.7) * 7,
                         x2: 44 + 18 * Math.cos(-0.2), y2: -35 + 18 * Math.sin(-0.2), z2: Math.sin(1.3) * 7, type: 'cross'},
                        {x1: -48 + 20 * Math.cos(0.5), y1: -52 + 20 * Math.sin(0.5), z1: Math.sin(1.9) * 7,
                         x2: 52 + 22 * Math.cos(-0.1), y2: -64 + 22 * Math.sin(-0.1), z2: Math.sin(2.5) * 7, type: 'cross'},
                        {x1: -53 + Math.sin(13.1) * 6, y1: -108 + Math.cos(8.1) * 3, z1: Math.sin(13.3) * 4,
                         x2: 57 + Math.sin(14.2) * 6, y2: -115 + Math.cos(8.8) * 3, z2: Math.sin(14.4) * 4, type: 'cross'},
                        
                        // Additional subtle branch network
                        {x1: -68 + Math.sin(5.1) * 10, y1: -82 + Math.cos(2.1) * 5, z1: Math.sin(5.3) * 7,
                         x2: -63 + Math.sin(3.5) * 12, y2: -79 + Math.cos(1.1) * 6, z2: Math.sin(2.6) * 8, type: 'network'},
                        {x1: 72 + Math.sin(6.2) * 10, y1: -89 + Math.cos(2.8) * 5, z1: Math.sin(6.4) * 7,
                         x2: 67 + Math.sin(4.2) * 12, y2: -91 + Math.cos(1.5) * 6, z2: Math.sin(3.3) * 8, type: 'network'},
                        
                        // Fine detail connections
                        {x1: -76 + Math.sin(7.3) * 10, y1: -103 + Math.cos(3.5) * 5, z1: Math.sin(7.5) * 7,
                         x2: -72 + Math.sin(7.8) * 8, y2: -112 + Math.cos(4.0) * 4, z2: Math.sin(8.0) * 5, type: 'detail'},
                        {x1: 80 + Math.sin(8.4) * 10, y1: -115 + Math.cos(4.2) * 5, z1: Math.sin(8.6) * 7,
                         x2: 76 + Math.sin(8.9) * 8, y2: -124 + Math.cos(4.7) * 4, z2: Math.sin(9.1) * 5, type: 'detail'}
                      ];
                      
                      return connections[i] || {x1: 0, y1: 0, z1: 0, x2: 0, y2: 0, z2: 0, type: 'branch'};
                    }, [i]);
                    
                    return (
                      <motion.line
                        key={`organic-connection-desktop-${i}`}
                        x1={useTransform(treeFormation, (progress) => 200 + connectionData.x1 * Math.min(1, progress * 1.8))}
                        y1={useTransform(treeFormation, (progress) => 220 + connectionData.y1 * Math.min(1, progress * 1.8))}
                        x2={useTransform(treeFormation, (progress) => 200 + connectionData.x2 * Math.min(1, progress * 1.8))}
                        y2={useTransform(treeFormation, (progress) => 220 + connectionData.y2 * Math.min(1, progress * 1.8))}
                        stroke={connectionData.type === 'trunk' ? "#FFE0D7" : 
                               connectionData.type === 'primary' ? "#FFE0D7" :
                               connectionData.type === 'secondary' ? "#FFFFFF" : 
                               connectionData.type === 'tertiary' ? "#F8F8F8" :
                               connectionData.type === 'quaternary' ? "#F4F4F4" :
                               connectionData.type === 'canopy' ? "#F0F0F0" :
                               connectionData.type === 'leaf' ? "#ECECEC" :
                               connectionData.type === 'cross' ? "#E8E8E8" :
                               connectionData.type === 'network' ? "#E4E4E4" :
                               "#E0E0E0"}
                        strokeWidth={connectionData.type === 'trunk' ? "1.0" : 
                                   connectionData.type === 'primary' ? "0.8" : 
                                   connectionData.type === 'secondary' ? "0.6" :
                                   connectionData.type === 'tertiary' ? "0.4" :
                                   connectionData.type === 'quaternary' ? "0.3" :
                                   connectionData.type === 'canopy' ? "0.25" :
                                   connectionData.type === 'leaf' ? "0.2" :
                                   connectionData.type === 'cross' ? "0.15" :
                                   connectionData.type === 'network' ? "0.12" :
                                   "0.1"}
                                                 style={{
                           opacity: useTransform(treeFormation, (progress) => {
                             // 3D depth-based connection opacity + type-based fading + magical energy
                             const avgZ = (connectionData.z1 + connectionData.z2) / 2;
                             const depthOpacity = Math.max(0.04, (avgZ + 10) / 25);
                             const typeOpacity = connectionData.type === 'trunk' ? 0.5 :
                                               connectionData.type === 'primary' ? 0.4 :
                                               connectionData.type === 'secondary' ? 0.3 :
                                               connectionData.type === 'tertiary' ? 0.25 :
                                               connectionData.type === 'quaternary' ? 0.2 :
                                               connectionData.type === 'canopy' ? 0.15 :
                                               connectionData.type === 'leaf' ? 0.1 :
                                               connectionData.type === 'cross' ? 0.08 :
                                               connectionData.type === 'network' ? 0.06 :
                                               0.05;
                             const baseOpacity = Math.min(typeOpacity, progress * 0.7) * depthOpacity;
                             const magicalBoost = 1 + magicalGlow.get() * 0.9;
                             return baseOpacity * magicalBoost;
                           }),
                           filter: useTransform(magicalGlow, (glow) => {
                             if (glow === 0) return "none";
                             const intensity = glow * 5;
                             return `drop-shadow(0 0 ${intensity}px rgba(255, 224, 215, ${glow * 0.8}))`;
                           })
                         }}
                        suppressHydrationWarning
                      />
                    );
                  })}
                  
                  {/* Central Core - Desktop */}
                  <motion.circle
                    cx="200"
                    cy="220"
                    r="12"
                    fill="url(#galaxyCenterDesktop)"
                    style={{ 
                      opacity: useTransform(magicalGlow, (glow) => 0.8 + glow * 0.5),
                      scale: centralPulse,
                      filter: useTransform(magicalGlow, (glow) => {
                        if (glow === 0) return "url(#softGlowDesktop)";
                        return `url(#softGlowDesktop) drop-shadow(0 0 ${glow * 20}px rgba(255, 224, 215, ${glow}))`;
                      })
                    }}
                    suppressHydrationWarning
                  />
                </motion.g>
                {/* eslint-enable react-hooks/rules-of-hooks */}

                {/* Sophisticated geometric accents - like other CTAs */}
                {[0, Math.PI/3, 2*Math.PI/3, Math.PI, 4*Math.PI/3, 5*Math.PI/3].map((angle, i) => {
                  const x = 200 + 170 * Math.cos(angle);
                  const y = 200 + 170 * Math.sin(angle);
                  
                  return (
                    <motion.g key={`accent-${i}`}>
                      <motion.line
                        x1={x - 3}
                        y1={y}
                        x2={x + 3}
                        y2={y}
                        stroke="#FFE0D7"
                        strokeWidth="0.8"
                        opacity={0.2}
                        animate={{
                          opacity: [0.1, 0.3, 0.1],
                          scale: [0.8, 1.15, 0.8]
                        }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          delay: i * 0.4
                        }}
                        suppressHydrationWarning
                      />
                      <motion.line
                        x1={x}
                        y1={y - 3}
                        x2={x}
                        y2={y + 3}
                        stroke="#FFE0D7"
                        strokeWidth="0.8"
                        opacity={0.2}
                        animate={{
                          opacity: [0.1, 0.3, 0.1],
                          scale: [0.8, 1.15, 0.8]
                        }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          delay: i * 0.4 + 0.3
                        }}
                        suppressHydrationWarning
                      />
                      {/* Small diamond accent */}
                      <motion.polygon
                        points={`${x},${y-1.5} ${x+1.5},${y} ${x},${y+1.5} ${x-1.5},${y}`}
                        fill="none"
                        stroke="#FFE0D7"
                        strokeWidth="0.5"
                        opacity={0.15}
                        animate={{
                          opacity: [0.1, 0.25, 0.1],
                          rotate: [0, 180, 360]
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          delay: i * 0.6
                        }}
                        suppressHydrationWarning
                      />
                    </motion.g>
                  );
                })}
              </svg>
            </motion.div>

            {/* Floating Project Elements */}
            <motion.div
              className="absolute top-8 right-8 w-2 h-2 bg-accent/50 rounded-full"
              animate={{
                y: [0, -12, 0],
                opacity: [0.5, 0.7, 0.5]
              }}
              transition={{ duration: 3.5, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-16 left-8 w-1.5 h-1.5 bg-accent/40 rounded-full"
              animate={{
                y: [0, -8, 0],
                x: [0, 6, 0],
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
            />
            <motion.div
              className="absolute top-1/3 left-4 w-1 h-1 bg-accent/45 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.45, 0.65, 0.45]
              }}
              transition={{ duration: 2.8, repeat: Infinity, delay: 0.8 }}
            />
            <motion.div
              className="absolute bottom-1/3 right-6 w-2 h-2 bg-accent/35 rounded-full"
              animate={{
                rotate: [0, 360],
                scale: [0.9, 1.1, 0.9],
                opacity: [0.35, 0.55, 0.35]
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
} 