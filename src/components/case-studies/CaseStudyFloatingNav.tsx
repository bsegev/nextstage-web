"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  IconFileText,
  IconTarget,
  IconSearch,
  IconMap,
  IconBulb,
  IconRocket,
  IconTrendingUp,
  IconChevronRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export default function CaseStudyFloatingNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const sections = [
    { id: 'hero', label: 'Introduction', phase: 'Overview', icon: <IconFileText className="w-4 h-4" /> },
    { id: 'challenge', label: 'Challenge', phase: 'Context', icon: <IconTarget className="w-4 h-4" /> },
    { id: 'discovery', label: 'Discovery', phase: 'Phase 01', icon: <IconSearch className="w-4 h-4" /> },
    { id: 'planning', label: 'Planning', phase: 'Phase 02', icon: <IconMap className="w-4 h-4" /> },
    { id: 'solution', label: 'Solution', phase: 'Phase 03', icon: <IconBulb className="w-4 h-4" /> },
    { id: 'implementation', label: 'Implementation', phase: 'Phase 04', icon: <IconRocket className="w-4 h-4" /> },
    { id: 'results', label: 'Results', phase: 'Outcome', icon: <IconTrendingUp className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;
      setIsVisible(window.scrollY > heroHeight);

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // More responsive tracking - check which section is most visible
      let bestSection = sections[0];
      let bestVisibility = 0;
      
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollY;
          const elementBottom = elementTop + rect.height;
          
          // Calculate how much of the section is visible in viewport
          const visibleTop = Math.max(scrollY, elementTop);
          const visibleBottom = Math.min(scrollY + windowHeight, elementBottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          const visibility = visibleHeight / Math.min(rect.height, windowHeight);
          
          // Prefer sections that are more centered in viewport
          const sectionCenter = elementTop + rect.height / 2;
          const viewportCenter = scrollY + windowHeight / 2;
          const centerDistance = Math.abs(sectionCenter - viewportCenter);
          const centerBonus = Math.max(0, 1 - centerDistance / windowHeight);
          
          const score = visibility * 0.7 + centerBonus * 0.3;
          
          if (score > bestVisibility) {
            bestVisibility = score;
            bestSection = section;
          }
        }
      });
      
      setActiveSection(bestSection.id);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsExpanded(false);
  };

  const getProgressPercentage = () => {
    const currentIndex = sections.findIndex(section => section.id === activeSection);
    return ((currentIndex + 1) / sections.length) * 100;
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
    >
      {!isExpanded ? (
        <div className="relative group">
          {/* Subtle #ffe0d7 glow */}
          <div className="absolute inset-0 bg-[#ffe0d7]/20 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
          
          {/* Clickable phase indicator positioned above */}
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => setIsExpanded(true)}
            className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl whitespace-nowrap backdrop-blur-sm cursor-pointer hover:scale-105 transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #0a0a0b 0%, #1a1a1b 50%, #0a0a0b 100%)',
              boxShadow: `
                0px -0.5px 2px 0 rgba(255, 224, 215, 0.3) inset,
                -0.5px 0px 2px 0 rgba(255, 224, 215, 0.3) inset,
                0 8px 32px rgba(0,0,0,0.4),
                0 0 0 1px rgba(255, 224, 215, 0.2),
                inset 0 1px 0 rgba(255,224,215,0.1)
              `
            }}
          >
            <div className="text-xs font-bold text-bone tracking-wider uppercase"
              style={{
                textShadow: '0 0 8px rgba(255, 224, 215, 0.4)'
              }}
            >
              {sections.find(s => s.id === activeSection)?.phase || 'Phase'}
            </div>
          </motion.button>
          
          <div className="relative w-20 h-20">
            {/* Progress ring with #ffe0d7 accent */}
            <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
              {/* Background ring */}
              <circle
                cx="40" cy="40" r="34" fill="none" strokeWidth="2"
                className="stroke-obsidian/20"
              />
              {/* Progress ring */}
              <circle
                cx="40" cy="40" r="34" fill="none" strokeWidth="3"
                strokeLinecap="round"
                stroke="#ffe0d7"
                strokeDasharray={`${2 * Math.PI * 34}`}
                strokeDashoffset={`${2 * Math.PI * 34 * (1 - getProgressPercentage() / 100)}`}
                className="transition-all duration-500"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(255, 224, 215, 0.6))'
                }}
              />
            </svg>
            
            {/* Obsidian center button */}
            <button
              onClick={() => setIsExpanded(true)}
              className="absolute inset-3 rounded-full flex items-center justify-center group/btn hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #0a0a0b 0%, #1a1a1b 50%, #0a0a0b 100%)',
                boxShadow: `
                  0px -0.5px 2px 0 rgba(255, 224, 215, 0.3) inset,
                  -0.5px 0px 2px 0 rgba(255, 224, 215, 0.3) inset,
                  0 4px 16px rgba(0,0,0,0.3),
                  0 0 0 1px rgba(255, 224, 215, 0.2),
                  inset 0 1px 0 rgba(255,224,215,0.1)
                `
              }}
            >
              <IconChevronRight 
                className="w-5 h-5 text-[#ffe0d7] group-hover/btn:scale-110 transition-all duration-300" 
                style={{
                  filter: 'drop-shadow(0 0 4px rgba(255, 224, 215, 0.4))'
                }}
              />
            </button>
          </div>
        </div>
              ) : (
         <motion.div 
           initial={{ opacity: 0, scale: 0.9, x: 20 }}
           animate={{ opacity: 1, scale: 1, x: 0 }}
           className="relative"
         >
           {/* Subtle glow */}
           <div className="absolute inset-0 bg-[#ffe0d7]/10 rounded-2xl blur-2xl opacity-40" />
           
           <div className="relative rounded-2xl p-5 min-w-[280px] backdrop-blur-xl"
             style={{
               background: 'linear-gradient(135deg, #0a0a0b 0%, #1a1a1b 30%, #0a0a0b 100%)',
               boxShadow: `
                 0px -1px 2px 0 rgba(255, 224, 215, 0.2) inset,
                 -1px 0px 2px 0 rgba(255, 224, 215, 0.2) inset,
                 0 20px 60px rgba(0,0,0,0.4),
                 0 0 0 1px rgba(255, 224, 215, 0.1),
                 inset 0 1px 0 rgba(255,224,215,0.05)
               `
             }}
           >
             {/* Sleek header */}
             <div className="flex items-center justify-between mb-5">
               <div>
                 <div className="flex items-center gap-2 mb-1">
                   <div className="w-2 h-2 rounded-full animate-pulse"
                     style={{
                       background: '#ffe0d7',
                       boxShadow: '0 0 6px rgba(255, 224, 215, 0.6)'
                     }}
                   />
                   <h3 className="font-bold text-bone text-sm tracking-wide"
                     style={{
                       textShadow: '0 0 8px rgba(255, 224, 215, 0.3)'
                     }}
                   >
                     Case Study Assistant
                   </h3>
                 </div>
                 <p className="text-xs text-bone/70 font-medium">
                   Navigate through phases
                 </p>
               </div>
               <button
                 onClick={() => setIsExpanded(false)}
                 className="p-2 rounded-xl transition-all duration-200 group cursor-pointer"
                 style={{
                   background: 'linear-gradient(135deg, rgba(255, 224, 215, 0.1), rgba(255, 224, 215, 0.05))',
                   boxShadow: `
                     0px -0.5px 1px 0 rgba(255, 224, 215, 0.2) inset,
                     -0.5px 0px 1px 0 rgba(255, 224, 215, 0.2) inset,
                     0 2px 8px rgba(0,0,0,0.2)
                   `
                 }}
               >
                 <IconX className="w-4 h-4 text-bone/60 group-hover:text-[#ffe0d7] transition-colors" />
               </button>
             </div>

          {/* Enhanced navigation items */}
          <div className="space-y-2">
            {sections.map((section, index) => {
              const isActive = activeSection === section.id;
              const isPast = sections.findIndex(s => s.id === activeSection) > index;
              
              return (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group relative overflow-hidden cursor-pointer hover:scale-[1.01]"
                  style={isActive ? {
                    background: 'linear-gradient(135deg, rgba(255, 224, 215, 0.15), rgba(255, 224, 215, 0.1))',
                    boxShadow: `
                      0px -0.5px 2px 0 rgba(255, 224, 215, 0.3) inset,
                      -0.5px 0px 2px 0 rgba(255, 224, 215, 0.3) inset,
                      0 4px 16px rgba(255, 224, 215, 0.2),
                      0 0 0 1px rgba(255, 224, 215, 0.3)
                    `,
                    transform: 'scale(1.02)'
                  } : {
                    background: 'linear-gradient(135deg, rgba(255, 224, 215, 0.03), rgba(255, 224, 215, 0.01))',
                    boxShadow: `
                      0px -0.5px 1px 0 rgba(255, 224, 215, 0.1) inset,
                      -0.5px 0px 1px 0 rgba(255, 224, 215, 0.1) inset,
                      0 2px 8px rgba(0,0,0,0.1)
                    `
                  }}
                >
                  {/* Sleek icon container */}
                  <div 
                    className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 flex-shrink-0 relative z-10 group-hover:scale-105"
                    style={isActive ? {
                      background: 'linear-gradient(135deg, rgba(255, 224, 215, 0.2), rgba(255, 224, 215, 0.15))',
                      boxShadow: `
                        0px -0.5px 1px 0 rgba(255, 224, 215, 0.4) inset,
                        -0.5px 0px 1px 0 rgba(255, 224, 215, 0.4) inset,
                        0 0 8px rgba(255, 224, 215, 0.4)
                      `,
                      color: '#ffe0d7'
                    } : isPast ? {
                      background: 'linear-gradient(135deg, rgba(255, 224, 215, 0.1), rgba(255, 224, 215, 0.05))',
                      boxShadow: `
                        0px -0.5px 1px 0 rgba(255, 224, 215, 0.2) inset,
                        -0.5px 0px 1px 0 rgba(255, 224, 215, 0.2) inset
                      `,
                      color: '#ffe0d7'
                    } : {
                      background: 'linear-gradient(135deg, rgba(245, 245, 220, 0.05), rgba(245, 245, 220, 0.02))',
                      boxShadow: `
                        0px -0.5px 1px 0 rgba(245, 245, 220, 0.1) inset,
                        -0.5px 0px 1px 0 rgba(245, 245, 220, 0.1) inset
                      `,
                      color: 'rgba(245, 245, 220, 0.6)'
                    }}
                  >
                    {section.icon}
                    {isActive && (
                      <div className="absolute inset-0 rounded-xl animate-ping"
                        style={{
                          background: 'rgba(255, 224, 215, 0.2)'
                        }}
                      />
                    )}
                  </div>
                  
                  <div className="flex-1 text-left relative z-10">
                    <div 
                      className="text-sm font-bold mb-1 transition-all duration-300"
                      style={isActive ? {
                        color: '#ffe0d7',
                        textShadow: '0 0 8px rgba(255, 224, 215, 0.4)'
                      } : {
                        color: '#f5f5dc',
                        textShadow: '0 0 4px rgba(255, 224, 215, 0.2)'
                      }}
                    >
                      {section.label}
                    </div>
                    <div 
                      className="text-xs transition-all duration-300 leading-relaxed"
                      style={isActive ? {
                        color: 'rgba(255, 224, 215, 0.8)'
                      } : {
                        color: 'rgba(245, 245, 220, 0.6)'
                      }}
                    >
                      {section.phase}
                    </div>
                  </div>
                  
                  <div 
                    className="w-3 h-3 rounded-full transition-all duration-300 flex-shrink-0 relative z-10"
                    style={isActive ? {
                      background: '#ffe0d7',
                      boxShadow: '0 0 8px rgba(255, 224, 215, 0.8), inset 0 1px 0 rgba(255,255,255,0.2)',
                      transform: 'scale(1.1)'
                    } : isPast ? {
                      background: 'rgba(255, 224, 215, 0.6)',
                      boxShadow: '0 0 4px rgba(255, 224, 215, 0.4)'
                    } : {
                      background: 'rgba(245, 245, 220, 0.3)',
                      boxShadow: 'inset 0 1px 0 rgba(255,224,215,0.1)'
                    }}
                  >
                    {isActive && (
                      <div className="absolute inset-0 rounded-full animate-ping"
                        style={{
                          background: 'rgba(255, 224, 215, 0.5)'
                        }}
                      />
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>

                       {/* Enhanced progress section with brand colors */}
             <div className="mt-5 pt-5 border-t border-obsidian/20">
               <div className="flex items-center justify-between mb-3">
                 <span className="text-xs text-obsidian/70 font-medium uppercase tracking-wider">
                   Progress
                 </span>
                 <span className="text-sm font-bold text-obsidian bg-[#ffe0d7]/40 px-2 py-1 rounded-lg">
                   {Math.round(getProgressPercentage())}%
                 </span>
               </div>
               <div className="w-full bg-obsidian/10 rounded-full h-3 overflow-hidden shadow-inner">
                 <motion.div
                   className="bg-gradient-to-r from-[#ffe0d7] to-bone h-3 rounded-full shadow-lg"
                   initial={{ width: 0 }}
                   animate={{ width: `${getProgressPercentage()}%` }}
                   transition={{ duration: 0.8, ease: "easeOut" }}
                   style={{
                     boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 0 10px rgba(255, 224, 215, 0.4)'
                   }}
                 />
               </div>
             </div>
           </div>
         </motion.div>
        )}
    </motion.div>
  );
} 