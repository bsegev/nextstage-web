"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LiquidGlassProps {
  children: ReactNode;
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
  animated?: boolean;
  borderRadius?: string;
}

export function LiquidGlass({ 
  children, 
  className, 
  intensity = "medium",
  animated = false,
  borderRadius = "rounded-3xl"
}: LiquidGlassProps) {
  const intensityStyles = {
    subtle: {
      blur: "blur(8px)",
      opacity: "0.1",
      saturation: "150%",
      brightness: "110%"
    },
    medium: {
      blur: "blur(12px)",
      opacity: "0.15",
      saturation: "180%",
      brightness: "115%"
    },
    strong: {
      blur: "blur(16px)",
      opacity: "0.25",
      saturation: "200%",
      brightness: "120%"
    }
  };

  const currentIntensity = intensityStyles[intensity];

  return (
    <div 
      className={cn(
        "relative overflow-hidden backdrop-blur-sm",
        borderRadius,
        "shadow-[0_8px_32px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.1)]",
        animated && "transition-all duration-500 ease-out",
        className
      )}
      style={{
        background: `linear-gradient(135deg, 
          rgba(255, 255, 255, 0.04) 0%, 
          rgba(255, 255, 255, 0.01) 50%, 
          rgba(255, 255, 255, 0.03) 100%)`,
        backdropFilter: `${currentIntensity.blur} saturate(${currentIntensity.saturation}) brightness(${currentIntensity.brightness})`,
        WebkitBackdropFilter: `${currentIntensity.blur} saturate(${currentIntensity.saturation}) brightness(${currentIntensity.brightness})`
      }}
    >
      {/* SVG Filter for Background Distortion */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: 'url(#liquid-distortion)' }}>
        <defs>
          <filter id="liquid-distortion" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence baseFrequency="0.02" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
          </filter>
        </defs>
      </svg>
      
      {/* Custom Border Layer */}
      <div 
        className={cn("absolute inset-0", borderRadius)}
        style={{
          background: `linear-gradient(135deg, 
            rgba(255, 255, 255, 0.12) 0%, 
            rgba(255, 255, 255, 0.03) 50%, 
            rgba(255, 255, 255, 0.08) 100%)`,
          padding: '1px'
        }}
      >
        <div 
          className={cn("w-full h-full", borderRadius)}
          style={{
            background: `linear-gradient(135deg, 
              rgba(255, 255, 255, 0.04) 0%, 
              rgba(255, 255, 255, 0.01) 50%, 
              rgba(255, 255, 255, 0.03) 100%)`
          }}
        />
      </div>

      {/* Multi-layer Glass Effect */}
      <div className={cn("absolute inset-0", borderRadius)}>
        {/* Base glass layer with enhanced inner glow */}
        <div 
          className={cn("absolute inset-0", borderRadius)}
          style={{
            background: `radial-gradient(circle at 30% 20%, 
              rgba(255, 255, 255, 0.06) 0%, 
              rgba(255, 255, 255, 0.01) 50%, 
              rgba(255, 255, 255, 0.03) 100%)`,
            boxShadow: `
              inset 0 1px 0 rgba(255, 255, 255, 0.12),
              inset 0 -1px 0 rgba(255, 255, 255, 0.06),
              inset 1px 0 0 rgba(255, 255, 255, 0.08),
              inset -1px 0 0 rgba(255, 255, 255, 0.03),
              inset 0 4px 20px rgba(255, 255, 255, ${currentIntensity.opacity})
            `
          }}
        />
        
        {/* Specular highlight layer */}
        <div 
          className={cn("absolute inset-0 pointer-events-none", borderRadius)}
          style={{
            background: `linear-gradient(135deg, 
              rgba(255, 255, 255, 0.08) 0%, 
              transparent 30%,
              transparent 70%,
              rgba(255, 255, 255, 0.03) 100%)`
          }}
        />
        
        {/* Edge enhancement */}
        <div 
          className={cn("absolute inset-0 pointer-events-none", borderRadius)}
          style={{
            background: `linear-gradient(135deg, 
              rgba(255, 255, 255, 0.12) 0%, 
              transparent 20%,
              transparent 80%,
              rgba(255, 255, 255, 0.06) 100%)`,
            mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            maskComposite: 'xor',
            WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            WebkitMaskComposite: 'xor',
            padding: '1px'
          }}
        />
        
        {/* Chromatic aberration simulation */}
        <div 
          className={cn("absolute inset-0 pointer-events-none opacity-30", borderRadius)}
          style={{
            background: `linear-gradient(90deg, 
              rgba(255, 0, 0, 0.1) 0%, 
              transparent 50%, 
              rgba(0, 0, 255, 0.1) 100%)`,
            mixBlendMode: 'multiply'
          }}
        />
      </div>

      {/* Dynamic light reflection */}
      {animated && (
        <div 
          className={cn("absolute inset-0 pointer-events-none animate-pulse", borderRadius)}
          style={{
            background: `conic-gradient(from 45deg at 50% 50%, 
              transparent 0deg, 
              rgba(255, 255, 255, 0.05) 90deg, 
              transparent 180deg, 
              rgba(255, 255, 255, 0.02) 270deg, 
              transparent 360deg)`,
            animationDuration: '3s'
          }}
        />
      )}

      {/* Content layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// Specialized variants for common use cases
export function LiquidGlassCard({ children, className, ...props }: Omit<LiquidGlassProps, never>) {
  return (
    <LiquidGlass 
      intensity="medium"
      animated
      className={cn("p-6", className)}
      {...props}
    >
      {children}
    </LiquidGlass>
  );
}

export function LiquidGlassPanel({ children, className, ...props }: Omit<LiquidGlassProps, never>) {
  return (
    <LiquidGlass 
      intensity="subtle"
      className={cn("p-8", className)}
      {...props}
    >
      {children}
    </LiquidGlass>
  );
}

// Obsidian Glass variant - uses obsidian colors instead of white
export function ObsidianGlass({ 
  children, 
  className, 
  intensity = "medium",
  animated = false,
  borderRadius = "rounded-3xl"
}: LiquidGlassProps) {
  const intensityStyles = {
    subtle: {
      blur: "blur(8px)",
      opacity: "0.1",
      saturation: "150%",
      brightness: "90%"
    },
    medium: {
      blur: "blur(12px)",
      opacity: "0.15",
      saturation: "180%",
      brightness: "85%"
    },
    strong: {
      blur: "blur(16px)",
      opacity: "0.25",
      saturation: "200%",
      brightness: "80%"
    }
  };

  const currentIntensity = intensityStyles[intensity];
  
  // Obsidian color values (dark gray/black tones)
  const obsidianRGB = "13, 13, 14"; // #0d0d0e converted to RGB

  return (
    <div 
      className={cn(
        "relative overflow-hidden backdrop-blur-sm",
        borderRadius,
        "shadow-[0_8px_32px_rgba(0,0,0,0.3),0_1px_2px_rgba(0,0,0,0.2)]",
        animated && "transition-all duration-500 ease-out",
        className
      )}
      style={{
        background: `linear-gradient(135deg, 
          rgba(${obsidianRGB}, 0.15) 0%, 
          rgba(${obsidianRGB}, 0.05) 50%, 
          rgba(${obsidianRGB}, 0.12) 100%)`,
        backdropFilter: `${currentIntensity.blur} saturate(${currentIntensity.saturation}) brightness(${currentIntensity.brightness})`,
        WebkitBackdropFilter: `${currentIntensity.blur} saturate(${currentIntensity.saturation}) brightness(${currentIntensity.brightness})`
      }}
    >
      {/* Custom Border Layer */}
      <div 
        className={cn("absolute inset-0", borderRadius)}
        style={{
          background: `linear-gradient(135deg, 
            rgba(${obsidianRGB}, 0.25) 0%, 
            rgba(${obsidianRGB}, 0.08) 50%, 
            rgba(${obsidianRGB}, 0.18) 100%)`,
          padding: '1px'
        }}
      >
        <div 
          className={cn("w-full h-full", borderRadius)}
          style={{
            background: `linear-gradient(135deg, 
              rgba(${obsidianRGB}, 0.15) 0%, 
              rgba(${obsidianRGB}, 0.05) 50%, 
              rgba(${obsidianRGB}, 0.12) 100%)`
          }}
        />
      </div>

      {/* Multi-layer Glass Effect */}
      <div className={cn("absolute inset-0", borderRadius)}>
        {/* Base glass layer with enhanced inner glow */}
        <div 
          className={cn("absolute inset-0", borderRadius)}
          style={{
            background: `radial-gradient(circle at 30% 20%, 
              rgba(${obsidianRGB}, 0.18) 0%, 
              rgba(${obsidianRGB}, 0.05) 50%, 
              rgba(${obsidianRGB}, 0.12) 100%)`,
            boxShadow: `
              inset 0 1px 0 rgba(${obsidianRGB}, 0.25),
              inset 0 -1px 0 rgba(${obsidianRGB}, 0.15),
              inset 1px 0 0 rgba(${obsidianRGB}, 0.20),
              inset -1px 0 0 rgba(${obsidianRGB}, 0.08),
              inset 0 4px 20px rgba(${obsidianRGB}, ${currentIntensity.opacity})
            `
          }}
        />
        
        {/* Specular highlight layer */}
        <div 
          className={cn("absolute inset-0 pointer-events-none", borderRadius)}
          style={{
            background: `linear-gradient(135deg, 
              rgba(${obsidianRGB}, 0.20) 0%, 
              transparent 30%,
              transparent 70%,
              rgba(${obsidianRGB}, 0.08) 100%)`
          }}
        />
      </div>

      {/* Dynamic light reflection */}
      {animated && (
        <div 
          className={cn("absolute inset-0 pointer-events-none animate-pulse", borderRadius)}
          style={{
            background: `conic-gradient(from 45deg at 50% 50%, 
              transparent 0deg, 
              rgba(${obsidianRGB}, 0.12) 90deg, 
              transparent 180deg, 
              rgba(${obsidianRGB}, 0.06) 270deg, 
              transparent 360deg)`,
            animationDuration: '3s'
          }}
        />
      )}

      {/* Content layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export function ObsidianGlassCard({ children, className, ...props }: Omit<LiquidGlassProps, never>) {
  return (
    <ObsidianGlass 
      intensity="strong"
      animated
      className={cn("p-6", className)}
      borderRadius="rounded-2xl"
      {...props}
    >
      {children}
    </ObsidianGlass>
  );
} 