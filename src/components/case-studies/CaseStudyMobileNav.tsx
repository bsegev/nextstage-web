"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  IconFileText, 
  IconTarget, 
  IconSearch, 
  IconMap, 
  IconBulb, 
  IconRocket, 
  IconTrendingUp 
} from "@tabler/icons-react";

const sections = [
  { id: 'hero', label: 'Intro', phase: 'Introduction', icon: IconFileText },
  { id: 'challenge', label: 'Context', phase: 'Context', icon: IconTarget },
  { id: 'discovery', label: '01', phase: 'Discovery', icon: IconSearch },
  { id: 'planning', label: '02', phase: 'Planning', icon: IconMap },
  { id: 'solution', label: '03', phase: 'Solution', icon: IconBulb },
  { id: 'implementation', label: '04', phase: 'Implementation', icon: IconRocket },
  { id: 'results', label: 'Outcome', phase: 'Results', icon: IconTrendingUp },
];

export default function CaseStudyMobileNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past hero
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsVisible(window.scrollY > heroBottom - 200);
      }

      // Update active section
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      })).filter(item => item.element);

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element && scrollPosition >= section.element.offsetTop) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for any fixed headers
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const getProgressPercentage = () => {
    const currentIndex = sections.findIndex(s => s.id === activeSection);
    return currentIndex >= 0 ? ((currentIndex + 1) / sections.length) * 100 : 0;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
        >
          {/* Progress bar */}
          <div className="h-1 bg-obsidian/20">
            <motion.div
              className="h-full bg-gradient-to-r from-[#ffe0d7] to-[#ffe0d7]/80"
              style={{
                width: `${getProgressPercentage()}%`,
                boxShadow: '0 0 8px rgba(255, 224, 215, 0.6)'
              }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Tab navigation */}
          <div 
            className="bg-obsidian/95 backdrop-blur-xl border-t border-[#ffe0d7]/20"
            style={{
              boxShadow: `
                0 -4px 20px rgba(0,0,0,0.3),
                inset 0 1px 0 rgba(255, 224, 215, 0.1)
              `
            }}
          >
            <div className="flex items-center justify-between px-2 py-2">
              {sections.map((section) => {
                const isActive = activeSection === section.id;
                const Icon = section.icon;
                const currentIndex = sections.findIndex(s => s.id === activeSection);
                const sectionIndex = sections.findIndex(s => s.id === section.id);
                const isPast = currentIndex > sectionIndex;
                
                return (
                  <motion.button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 relative overflow-hidden min-w-0 flex-1"
                    whileTap={{ scale: 0.95 }}
                    style={isActive ? {
                      background: 'linear-gradient(135deg, rgba(255, 224, 215, 0.15), rgba(255, 224, 215, 0.1))',
                      boxShadow: `
                        0px -0.5px 1px 0 rgba(255, 224, 215, 0.3) inset,
                        -0.5px 0px 1px 0 rgba(255, 224, 215, 0.3) inset,
                        0 2px 8px rgba(255, 224, 215, 0.2)
                      `
                    } : undefined}
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-xl"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255, 224, 215, 0.08), rgba(255, 224, 215, 0.04))',
                        }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    
                    {/* Icon */}
                    <div className="relative z-10">
                      <Icon 
                        className={`w-5 h-5 mb-1 transition-all duration-300 ${
                          isActive 
                            ? 'text-[#ffe0d7]' 
                            : isPast 
                              ? 'text-[#ffe0d7]/70' 
                              : 'text-bone/50'
                        }`}
                        style={isActive ? {
                          filter: 'drop-shadow(0 0 4px rgba(255, 224, 215, 0.4))'
                        } : undefined}
                      />
                    </div>
                    
                    {/* Label */}
                    <span 
                      className={`text-xs font-medium transition-all duration-300 relative z-10 truncate max-w-full ${
                        isActive 
                          ? 'text-[#ffe0d7] font-semibold' 
                          : isPast 
                            ? 'text-[#ffe0d7]/70' 
                            : 'text-bone/60'
                      }`}
                      style={isActive ? {
                        textShadow: '0 0 6px rgba(255, 224, 215, 0.4)'
                      } : undefined}
                    >
                      {section.label}
                    </span>

                    {/* Completion indicator for past sections */}
                    {isPast && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#ffe0d7] z-10"
                        style={{
                          boxShadow: '0 0 4px rgba(255, 224, 215, 0.6)'
                        }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 