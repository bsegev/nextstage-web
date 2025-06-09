"use client";

import { useState } from "react";
import { motion } from "motion/react";
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

  const handleTabClick = (idx: number) => {
    setActive(propTabs[idx]);
  };

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              handleTabClick(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-4 py-2 rounded-full", tabClassName)}
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
              "relative block transition-colors duration-300",
              active.value === tab.value ? "text-bone" : "text-bone/70 hover:text-bone/90"
            )}>
              {tab.title}
            </span>
          </button>
        ))}
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
      {/* Mobile: Simple fade transition */}
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