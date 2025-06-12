'use client';

import { useEffect, useState, useMemo } from 'react';
import { motion, useMotionValue, animate, useTransform } from 'motion/react';

// Dynamic Progress Bars Component
function DynamicProgressBars({ mounted }: { mounted: boolean }) {
  // Memoize phases array to prevent dependency changes
  const phases = useMemo(() => [
    { label: "Idea", baseStrength: 95 },
    { label: "Strategy", baseStrength: 85 },
    { label: "Design", baseStrength: 70 },
    { label: "Development", baseStrength: 55 },
    { label: "Launch", baseStrength: 35 }
  ], []);

  // Create fixed number of motion values at top level (not in callback)
  const motionValue0 = useMotionValue(0);
  const motionValue1 = useMotionValue(0);
  const motionValue2 = useMotionValue(0);
  const motionValue3 = useMotionValue(0);
  const motionValue4 = useMotionValue(0);
  
  // Memoize motionValues array to prevent dependency changes
  const motionValues = useMemo(() => [
    motionValue0, motionValue1, motionValue2, motionValue3, motionValue4
  ], [motionValue0, motionValue1, motionValue2, motionValue3, motionValue4]);
  const [displayValues, setDisplayValues] = useState(phases.map(p => p.baseStrength));
  
  // Transform motion values to percentage strings for width
  const widthValue0 = useTransform(motionValue0, (value) => `${value}%`);
  const widthValue1 = useTransform(motionValue1, (value) => `${value}%`);
  const widthValue2 = useTransform(motionValue2, (value) => `${value}%`);
  const widthValue3 = useTransform(motionValue3, (value) => `${value}%`);
  const widthValue4 = useTransform(motionValue4, (value) => `${value}%`);
  
  const widthValues = [widthValue0, widthValue1, widthValue2, widthValue3, widthValue4];

  useEffect(() => {
    if (!mounted) return;

    // Define 10 different scenarios to cycle through
    const scenarios = [
      // Scenario 1: Typical agency handoff degradation
      [92, 78, 65, 48, 30],
      // Scenario 2: Even worse degradation
      [95, 70, 55, 35, 20],
      // Scenario 3: Moderate degradation
      [90, 82, 75, 60, 45],
      // Scenario 4: Severe early drops
      [88, 65, 50, 42, 35],
      // Scenario 5: Gradual decline
      [94, 85, 76, 67, 58],
      // Scenario 6: Sharp strategy drop
      [96, 60, 58, 55, 38],
      // Scenario 7: Design phase crisis
      [91, 80, 45, 42, 25],
      // Scenario 8: Development disaster
      [89, 75, 72, 35, 32],
      // Scenario 9: Launch failure
      [93, 83, 70, 65, 15],
      // Scenario 10: Complete breakdown
      [87, 68, 42, 28, 18]
    ];

    let currentScenario = 0;

    // Initialize with first scenario
    scenarios[0].forEach((value, index) => {
      motionValues[index].set(value);
    });

    // Subscribe to value changes and update display
    const unsubscribes = motionValues.map((mv, index) => 
      mv.on("change", (value) => {
        setDisplayValues(prev => {
          const newValues = [...prev];
          newValues[index] = Math.round(value);
          return newValues;
        });
      })
    );

    // Cycle through scenarios every 5 seconds
    const interval = setInterval(() => {
      currentScenario = (currentScenario + 1) % scenarios.length;
      const nextScenarioValues = scenarios[currentScenario];
      
      // Animate to next scenario with quick transitions
      motionValues.forEach((mv, index) => {
        animate(mv, nextScenarioValues[index], {
          duration: 0.8, // Quick transition
          ease: "easeInOut"
        });
      });
    }, 5000); // Change every 5 seconds

    return () => {
      unsubscribes.forEach(unsub => unsub());
      clearInterval(interval);
    };
  }, [mounted, motionValues, phases]);

  return (
    <>
      {phases.map((phase, index) => (
        <motion.div
          key={phase.label}
          initial={{ opacity: 0, x: -30 }}
          animate={mounted ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ delay: 0.8 + index * 0.15, duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-3 sm:gap-4 md:gap-6"
        >
          <div className="w-16 sm:w-20 text-right">
            <span className="text-xs sm:text-sm font-medium text-obsidian/80">{phase.label}</span>
          </div>
          
          <div className="flex-1 relative">
            {/* Background bar */}
                         <div className="h-2 sm:h-2.5 bg-obsidian/15 rounded-full overflow-hidden">
               {/* Animated fill */}
               <motion.div
                 style={{ width: widthValues[index] }}
                 className="h-full bg-gradient-to-r from-obsidian/60 to-obsidian/40 rounded-full"
               />
             </div>
            
            {/* Strength indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={mounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 1.8 + index * 0.2, duration: 0.6 }}
              className="absolute -right-2 top-0 transform -translate-y-6 sm:-translate-y-7"
            >
              <span className="text-xs font-mono text-obsidian/60 bg-bone px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md shadow-sm border border-obsidian/10">
                {displayValues[index]}%
              </span>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </>
  );
}

export default function HandoffProblem() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 bg-bone">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-6 sm:mb-8 text-xs sm:text-sm font-medium text-obsidian/60 tracking-[0.2em] uppercase">
            <span>The Challenge</span>
          </div>
          
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6 md:mb-8">
            <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              The Handoff Problem
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-obsidian/80 font-light max-w-2xl mx-auto">
            Great ideas get worse every time they change hands. Let&apos;s fix that.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          
          {/* Problem Statement */}
          <div className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
              <p className="text-base sm:text-lg md:text-xl text-obsidian/70 font-light leading-relaxed">
                After years leading projects across consulting and innovation, I kept seeing the same pattern: <br className="hidden sm:block" />
                brilliant strategies dying in translation, beautiful designs compromised in development, <br className="hidden sm:block" />
                technical marvels that missed the business mark.
              </p>
              
              <div className="w-16 h-px bg-obsidian/20 mx-auto" />
              
              <p className="text-base sm:text-lg md:text-xl text-obsidian/80 font-light leading-relaxed">
                Traditional firms rely on handoffs between siloed teams. With every relay, <strong className="text-obsidian/90">context leaks, vision blurs, and momentum stalls.</strong>
              </p>
            </div>
          </div>

          {/* Visual Demonstration */}
          <motion.div 
            initial={{ opacity: 0, x: -16 }}
            animate={mounted ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="relative bg-gradient-to-r from-obsidian/[0.02] to-transparent rounded-3xl p-8 sm:p-10"
          >
            
            {/* Glow Transfer Effect */}
            <motion.div
              animate={mounted ? { 
                x: [-100, 600],
                opacity: [0, 0.3, 0]
              } : { x: -100, opacity: 0 }}
              transition={{ 
                delay: 3,
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-transparent via-accent/20 to-transparent rounded-3xl"
            />

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center relative">
              
              {/* Traditional Process */}
              <div className={`transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="text-center mb-8">
                  <h3 className="text-sm font-medium text-obsidian/60 tracking-[0.15em] uppercase mb-2">
                    How Others Work
                  </h3>
                  <div className="w-16 h-px bg-obsidian/30 mx-auto" />
                </div>
                
                {/* Signal Degradation */}
                <div className="space-y-5">
                  <DynamicProgressBars mounted={mounted} />
                </div>
              </div>

              {/* Mobile Divider */}
              <div className="lg:hidden">
                <div className="flex items-center gap-4 py-6">
                  <div className="flex-1 h-px bg-obsidian/20" />
                  <span className="text-xs font-medium text-obsidian/40 tracking-wider">VS</span>
                  <div className="flex-1 h-px bg-obsidian/20" />
                </div>
              </div>

              {/* NextStage Integrated */}
              <div className={`transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} bg-obsidian rounded-2xl p-4 sm:p-6`}>
                                  <div className="text-center mb-6 sm:mb-8">
                    <h3 className="text-xs sm:text-sm font-medium bg-gradient-to-r from-bone to-bone/90 bg-clip-text text-transparent tracking-[0.15em] uppercase mb-2">
                    NextStage Method
                  </h3>
                  <div className="w-16 h-px bg-gradient-to-r from-bone/60 to-bone/30 mx-auto" />
                </div>
                
                {/* Unified Process */}
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={mounted ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
                    transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
                    className="bg-gradient-to-br from-bone/12 via-bone/8 to-bone/6 border-2 border-bone/30 rounded-2xl p-4 sm:p-6 md:p-8 relative overflow-hidden shadow-lg shadow-bone/10"
                  >
                                         {/* Enhanced flowing animation */}
                     <motion.div
                       animate={mounted ? { 
                         x: [-120, 320],
                         opacity: [0, 0.25, 0]
                       } : { x: -120, opacity: 0 }}
                       transition={{ 
                         delay: 4,
                         duration: 6,
                         repeat: Infinity,
                         ease: "easeInOut"
                       }}
                       className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-transparent via-bone/20 to-transparent rounded-2xl"
                     />
                    
                                         {/* Background accent glow */}
                     <div className="absolute inset-0 bg-gradient-to-br from-bone/5 to-transparent rounded-2xl" />
                    
                    {/* Content */}
                                         <div className="relative space-y-6 sm:space-y-8">
                       <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                        {/* Idea */}
                        <motion.div 
                          className="text-center"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={mounted ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                          transition={{ delay: 2, duration: 0.6 }}
                        >
                                                     <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-bone/20 to-bone/10 rounded-full flex items-center justify-center mb-2 sm:mb-3 border border-bone/20 shadow-sm">
                             <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-gradient-to-br from-bone to-bone/80 rounded-full" />
                           </div>
                           <span className="text-xs font-semibold text-bone/90 tracking-wider">IDEA</span>
                        </motion.div>
                        
                                                 {/* Enhanced Arrow */}
                         <motion.div 
                           className="flex items-center justify-center gap-1 w-5 sm:w-6 md:w-8"
                           initial={{ opacity: 0, x: -10 }}
                           animate={mounted ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                           transition={{ delay: 2.2, duration: 0.6 }}
                         >
                           <div className="w-3 sm:w-4 md:w-5 h-px bg-gradient-to-r from-bone/60 to-bone/40" />
                           <div className="w-0 h-0 border-l-[3px] sm:border-l-[4px] border-l-bone/60 border-y-[1.5px] sm:border-y-[2px] border-y-transparent" />
                         </motion.div>
                        
                                                 {/* Enhanced Venn Diagram */}
                         <motion.div 
                           className="relative flex flex-col items-center"
                           initial={{ scale: 0.8, opacity: 0 }}
                           animate={mounted ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                           transition={{ delay: 2.4, duration: 0.8 }}
                         >
                                                     <svg width="80" height="60" viewBox="0 0 100 70" className="sm:w-[90px] sm:h-[65px] md:w-[100px] md:h-[70px] overflow-visible drop-shadow-sm">
                             {/* Strategy Circle */}
                             <circle 
                               cx="35" 
                               cy="25" 
                               r="18" 
                               fill="rgb(255 224 215 / 0.1)" 
                               stroke="rgb(255 224 215 / 0.7)" 
                               strokeWidth="2.5"
                               className="animate-pulse"
                             />
                             {/* Design Circle */}
                             <circle 
                               cx="65" 
                               cy="25" 
                               r="18" 
                               fill="rgb(255 224 215 / 0.1)" 
                               stroke="rgb(255 224 215 / 0.7)" 
                               strokeWidth="2.5"
                               className="animate-pulse"
                               style={{ animationDelay: '0.5s' }}
                             />
                             {/* Technology Circle */}
                             <circle 
                               cx="50" 
                               cy="40" 
                               r="18" 
                               fill="rgb(255 224 215 / 0.1)" 
                               stroke="rgb(255 224 215 / 0.7)" 
                               strokeWidth="2.5"
                               className="animate-pulse"
                               style={{ animationDelay: '1s' }}
                             />
                             {/* Center highlight */}
                             <circle 
                               cx="50" 
                               cy="30" 
                               r="4" 
                               fill="rgb(255 224 215 / 0.5)" 
                               className="animate-pulse"
                               style={{ animationDelay: '1.5s' }}
                             />
                           </svg>
                                                     <div className="mt-2">
                             <span className="text-xs font-semibold text-bone/90 tracking-wider">INTEGRATION</span>
                           </div>
                        </motion.div>
                        
                                                 {/* Enhanced Arrow */}
                         <motion.div 
                           className="flex items-center justify-center gap-1 w-5 sm:w-6 md:w-8"
                           initial={{ opacity: 0, x: -10 }}
                           animate={mounted ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                           transition={{ delay: 2.6, duration: 0.6 }}
                         >
                           <div className="w-3 sm:w-4 md:w-5 h-px bg-gradient-to-r from-bone/60 to-bone/40" />
                           <div className="w-0 h-0 border-l-[3px] sm:border-l-[4px] border-l-bone/60 border-y-[1.5px] sm:border-y-[2px] border-y-transparent" />
                         </motion.div>
                        
                        {/* Launch */}
                        <motion.div 
                          className="text-center"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={mounted ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                          transition={{ delay: 2.8, duration: 0.6 }}
                        >
                                                     <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-bone/20 to-bone/10 rounded-full flex items-center justify-center mb-2 sm:mb-3 border border-bone/20 shadow-sm">
                             <motion.div 
                               className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-gradient-to-br from-bone to-bone/80 rounded-full"
                               animate={{ scale: [1, 1.2, 1] }}
                               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                             />
                           </div>
                           <span className="text-xs font-semibold text-bone/90 tracking-wider">LAUNCH</span>
                        </motion.div>
                      </div>
                      
                                             {/* Enhanced Description */}
                       <div className="text-center pt-4 sm:pt-6 border-t border-bone/30">
                         <p className="text-xs sm:text-sm font-medium text-bone/90 tracking-wide">
                           Everything stays intact from start to finish
                         </p>
                       </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Consolidated Caption */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 3.2, duration: 0.8 }}
              className="text-center mt-8 sm:mt-10 pt-4 sm:pt-6 border-t border-obsidian/10"
            >
              <p className="text-xs sm:text-sm md:text-base text-obsidian/80 font-medium mb-2">
                Integration as competitive advantage
              </p>
              <p className="text-xs sm:text-sm md:text-base text-obsidian/60 font-light">
                When strategy, design, and technology flow from one source, everything moves in harmony. No handoffs, no dilution — just unified excellence at speed.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 