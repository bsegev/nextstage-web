"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";

const CheckFilled = ({ className, isActive }: { className?: string; isActive?: boolean }) => {
  return (
    <motion.div
      className="relative"
      initial={{ scale: 0.8 }}
      animate={{ scale: isActive ? 1.1 : 1 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-full bg-accent/20 blur-sm"
          initial={{ scale: 0 }}
          animate={{ scale: 1.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={cn("w-6 h-6 relative z-10", className)}
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
          clipRule="evenodd"
        />
      </svg>
    </motion.div>
  );
};

type LoadingState = {
  text: string;
};

const LoaderCore = ({
  loadingStates,
  value = 0,
}: {
  loadingStates: LoadingState[];
  value?: number;
}) => {
  return (
    <div className="flex relative justify-center max-w-2xl mx-auto flex-col px-4 sm:px-6">
      {/* Elegant header */}
      <motion.div 
        className="text-center mb-8 sm:mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative">
          <h3 className="font-display text-xl sm:text-2xl lg:text-3xl tracking-[-0.02em] leading-tight text-obsidian mb-3">
            <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              Strategic Process
            </span>
          </h3>
          <p className="text-base sm:text-lg text-obsidian/60 font-light tracking-wide">
            Analyzing your unique situation
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-4"></div>
        </div>
      </motion.div>

      {/* Loading steps */}
      <div className="space-y-4 sm:space-y-6">
        {loadingStates.map((loadingState, index) => {
          const distance = Math.abs(index - value);
          const opacity = Math.max(1 - distance * 0.15, 0.3);
          const isActive = index === value;
          const isCompleted = index < value;

          return (
            <motion.div
              key={index}
              className={cn(
                "relative flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl transition-all duration-700 min-h-[4rem] sm:min-h-[5rem]",
                isActive && "bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 border border-accent/20 shadow-lg shadow-accent/5",
                isCompleted && "bg-gradient-to-r from-obsidian/5 via-obsidian/8 to-obsidian/5 border border-obsidian/15",
                !isActive && !isCompleted && "bg-white/50 border border-obsidian/5"
              )}
              initial={{ opacity: 0, x: -30, scale: 0.95 }}
              animate={{ 
                opacity: opacity, 
                x: 0, 
                scale: 1,
              }}
              transition={{ 
                duration: 0.6,
                type: "spring", 
                stiffness: 100,
                delay: index * 0.1 
              }}
            >
              {/* Step number or check */}
              <div className={cn(
                "flex-shrink-0 relative",
                isActive && "transform scale-110"
              )}>
                {index >= value ? (
                  <div className={cn(
                    "w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center font-mono font-bold text-xs sm:text-sm transition-all duration-500",
                    isActive ? "border-accent bg-accent/10 text-accent" : "border-obsidian/20 bg-white text-obsidian/50"
                  )}>
                    {index + 1}
                  </div>
                ) : (
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                    <CheckFilled 
                      isActive={isActive}
                      className={cn(
                        "transition-all duration-500 w-5 h-5 sm:w-6 sm:h-6",
                        isActive && "text-accent drop-shadow-sm",
                        isCompleted && "text-obsidian/70"
                      )} 
                    />
                  </div>
                )}
              </div>

              {/* Step content */}
              <div className="flex-1 min-w-0">
                <p
                  className={cn(
                    "font-light leading-relaxed tracking-wide transition-all duration-500 text-sm sm:text-base min-h-[2.5rem] sm:min-h-[3rem] flex items-center",
                    isActive && "text-obsidian font-medium",
                    isCompleted && "text-obsidian/70",
                    !isActive && !isCompleted && "text-obsidian/50"
                  )}
                >
                  {loadingState.text}
                </p>
              </div>

              {/* Active indicator */}
              {isActive && (
                <motion.div
                  className="absolute right-4 w-2 h-2 bg-accent rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
              )}

              {/* Progress line */}
              {index < loadingStates.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-6 bg-gradient-to-b from-obsidian/20 to-transparent" />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Progress indicator */}
      <motion.div 
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="flex gap-1">
            {loadingStates.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "h-1 rounded-full transition-all duration-500",
                  index <= value ? "bg-accent w-8" : "bg-obsidian/10 w-2"
                )}
              />
            ))}
          </div>
        </div>
        <p className="text-xs text-obsidian/50 font-light tracking-wider uppercase">
          Step {value + 1} of {loadingStates.length}
        </p>
      </motion.div>
    </div>
  );
};

export const MultiStepLoader = ({
  loadingStates,
  loading,
  duration = 2000,
  loop = true,
}: {
  loadingStates: LoadingState[];
  loading?: boolean;
  duration?: number;
  loop?: boolean;
}) => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    if (!loading) {
      setCurrentState(0);
      return;
    }
    const timeout = setTimeout(() => {
      setCurrentState((prevState) =>
        loop
          ? prevState === loadingStates.length - 1
            ? 0
            : prevState + 1
          : Math.min(prevState + 1, loadingStates.length - 1)
      );
    }, duration);

    return () => clearTimeout(timeout);
  }, [currentState, loading, loop, loadingStates.length, duration]);
  
  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full fixed inset-0 z-[100] flex items-center justify-center"
        >
          {/* Premium backdrop */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-bone/85 backdrop-blur-2xl" />
          
          {/* Subtle background elements */}
          <div className="absolute inset-0 opacity-[0.015]">
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-obsidian rounded-full blur-3xl" />
          </div>

          {/* Content container */}
          <motion.div 
            className="relative z-10 w-full max-w-3xl mx-auto px-6"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          >
            <LoaderCore value={currentState} loadingStates={loadingStates} />
          </motion.div>

          {/* Elegant gradient mask */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/20 pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 