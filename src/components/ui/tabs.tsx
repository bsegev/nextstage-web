"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [hovering, setHovering] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  // Scroll active tab into view
  const scrollToActiveTab = () => {
    if (activeTabRef.current && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const activeTab = activeTabRef.current;
      
      // Find the index of the active tab
      const activeIndex = propTabs.findIndex(tab => tab.value === active.value);
      
      let scrollLeft;
      
      if (activeIndex === 0) {
        // For the first tab, scroll to the very beginning
        scrollLeft = 0;
      } else if (activeIndex === propTabs.length - 1) {
        // For the last tab, scroll to show it fully on the right
        scrollLeft = container.scrollWidth - container.offsetWidth;
      } else {
        // For middle tabs, center them
        scrollLeft = activeTab.offsetLeft - (container.offsetWidth / 2) + (activeTab.offsetWidth / 2);
      }
      
      container.scrollTo({
        left: Math.max(0, Math.min(scrollLeft, container.scrollWidth - container.offsetWidth)),
        behavior: 'smooth'
      });
    }
  };

  // Scroll to active tab on mount and when active tab changes
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(scrollToActiveTab, 100);
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <>
      <div
        ref={scrollContainerRef}
        className={cn(
          "flex flex-row items-center justify-start [perspective:1000px] relative overflow-x-auto overflow-y-visible scrollbar-hide max-w-full w-full",
          "snap-x snap-mandatory scroll-smooth",
          "pb-2 sm:pb-0", // Add padding bottom for mobile scroll indicator
          containerClassName
        )}
      >
        <div className="flex flex-row items-center gap-1 sm:gap-2 min-w-max px-2 sm:px-4">
        {propTabs.map((tab) => (
          <button
            key={tab.title}
              ref={active.value === tab.value ? activeTabRef : null}
            onClick={() => {
              setActive(tab);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
              className={cn(
                "relative rounded-full snap-center flex-shrink-0",
                "touch-manipulation select-none", // Better touch behavior
                "focus:outline-none focus:ring-2 focus:ring-accent/20 focus:ring-offset-2 focus:ring-offset-obsidian", // Better focus states
                "active:scale-95 transition-transform", // Touch feedback
                tabClassName
              )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-accent/15 rounded-full",
                  activeTabClassName
                )}
              />
            )}

            <span className={cn(
                "relative block transition-colors duration-300 px-1",
              active.value === tab.value ? "text-bone" : "text-bone/70 hover:text-bone/90"
            )}>
              {tab.title}
            </span>
          </button>
        ))}
        </div>
      </div>
      <FadeInDiv
        tabs={propTabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-8 sm:mt-16 lg:mt-32", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  active,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  // Find the active tab index
  const activeIndex = tabs.findIndex(tab => tab.value === active.value);
  
  // Calculate which tabs should be visible (active tab + 2 behind it with circular wrapping)
  const getVisibleTabs = () => {
    const visibleTabs = [];
    
    // Always include the active tab first (will be in front)
    visibleTabs.push({ tab: active, stackIndex: 0 });
    
    // Add the 2 tabs behind it with circular wrapping
    for (let i = 1; i <= 2; i++) {
      let backIndex = activeIndex - i;
      // If we go below 0, wrap around to the end of the array
      if (backIndex < 0) {
        backIndex = tabs.length + backIndex;
      }
      visibleTabs.push({ tab: tabs[backIndex], stackIndex: i });
    }
    
    return visibleTabs;
  };
  
  const visibleTabs = getVisibleTabs();
  
  return (
    <>
      {/* Mobile: Simple fade transition with swipe hint */}
      <div className="block lg:hidden relative w-full">
        <motion.div
          key={active.value}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={cn("w-full", className)}
        >
          {active.content}
        </motion.div>
        
        {/* Mobile tab indicator dots */}
        <div className="flex justify-center mt-4 sm:mt-6 gap-2">
          {tabs.map((tab) => (
            <div
              key={tab.value}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                active.value === tab.value 
                  ? "bg-accent/60 scale-125" 
                  : "bg-bone/20 hover:bg-bone/40"
              )}
            />
          ))}
        </div>
      </div>
      
      {/* Desktop: 3D stacked effect */}
      <div className="hidden lg:block relative w-full h-full">
        {visibleTabs.map(({ tab, stackIndex }) => (
          <motion.div
            key={tab.value}
            layoutId={tab.value}
            animate={{
              scale: 1 - stackIndex * 0.1,
              y: hovering ? stackIndex * -50 : 0,
              opacity: hovering ? 1 - stackIndex * 0.1 : (stackIndex === 0 ? 1 : 0),
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              opacity: { duration: 0.4 },
              y: { duration: 0.6, ease: "easeOut" },
              scale: { duration: 0.3 }
            }}
            style={{
              zIndex: -stackIndex,
            }}
            className={cn("w-full h-full absolute top-0 left-0", className)}
          >
            {tab.content}
          </motion.div>
        ))}
      </div>
    </>
  );
}; 