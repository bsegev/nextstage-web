"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LiquidGlassProps {
  children: ReactNode;
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
  animated?: boolean;
}

export function LiquidGlass({ 
  children, 
  className, 
  intensity = "medium",
  animated = false 
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
        "relative overflow-hidden rounded-3xl",
        "border backdrop-blur-sm",
        "shadow-[0_8px_32px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.1)]",
        animated && "transition-all duration-500 ease-out",
        className
      )}
      style={{
        background: `linear-gradient(135deg, 
          rgba(255, 255, 255, 0.15) 0%, 
          rgba(255, 255, 255, 0.05) 50%, 
          rgba(255, 255, 255, 0.1) 100%)`,
        backdropFilter: `${currentIntensity.blur} saturate(${currentIntensity.saturation}) brightness(${currentIntensity.brightness})`,
        WebkitBackdropFilter: `${currentIntensity.blur} saturate(${currentIntensity.saturation}) brightness(${currentIntensity.brightness})`,
        borderImage: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%) 1"
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
      
      {/* Multi-layer Glass Effect */}
      <div className="absolute inset-0 rounded-3xl">
        {/* Base glass layer with enhanced inner glow */}
        <div 
          className="absolute inset-0 rounded-3xl"
          style={{
            background: `radial-gradient(circle at 30% 20%, 
              rgba(255, 255, 255, 0.2) 0%, 
              rgba(255, 255, 255, 0.05) 50%, 
              rgba(255, 255, 255, 0.1) 100%)`,
            boxShadow: `
              inset 0 1px 0 rgba(255, 255, 255, 0.4),
              inset 0 -1px 0 rgba(255, 255, 255, 0.2),
              inset 1px 0 0 rgba(255, 255, 255, 0.3),
              inset -1px 0 0 rgba(255, 255, 255, 0.1),
              inset 0 4px 20px rgba(255, 255, 255, ${currentIntensity.opacity})
            `
          }}
        />
        
        {/* Specular highlight layer */}
        <div 
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: `linear-gradient(135deg, 
              rgba(255, 255, 255, 0.3) 0%, 
              transparent 30%,
              transparent 70%,
              rgba(255, 255, 255, 0.1) 100%)`
          }}
        />
        
        {/* Edge enhancement */}
        <div 
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: `linear-gradient(135deg, 
              rgba(255, 255, 255, 0.4) 0%, 
              transparent 20%,
              transparent 80%,
              rgba(255, 255, 255, 0.2) 100%)`,
            mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            maskComposite: 'xor',
            WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            WebkitMaskComposite: 'xor',
            padding: '1px'
          }}
        />
        
        {/* Chromatic aberration simulation */}
        <div 
          className="absolute inset-0 rounded-3xl pointer-events-none opacity-30"
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
          className="absolute inset-0 rounded-3xl pointer-events-none animate-pulse"
          style={{
            background: `conic-gradient(from 45deg at 50% 50%, 
              transparent 0deg, 
              rgba(255, 255, 255, 0.1) 90deg, 
              transparent 180deg, 
              rgba(255, 255, 255, 0.05) 270deg, 
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