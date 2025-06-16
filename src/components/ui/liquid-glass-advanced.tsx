"use client";

import { ReactNode, useId } from "react";
import { cn } from "@/lib/utils";

interface LiquidGlassAdvancedProps {
  children: ReactNode;
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
  distortion?: boolean;
  animated?: boolean;
}

export function LiquidGlassAdvanced({ 
  children, 
  className, 
  intensity = "medium",
  distortion = true,
  animated = false 
}: LiquidGlassAdvancedProps) {
  const filterId = useId();
  const noiseId = `noise-${filterId}`;
  const displacementId = `displacement-${filterId}`;
  
  const intensityConfig = {
    subtle: {
      blur: 8,
      saturation: 150,
      brightness: 110,
      displacement: 1.5,
      turbulence: 0.015
    },
    medium: {
      blur: 12,
      saturation: 180,
      brightness: 115,
      displacement: 2.5,
      turbulence: 0.02
    },
    strong: {
      blur: 16,
      saturation: 200,
      brightness: 120,
      displacement: 3.5,
      turbulence: 0.025
    }
  };

  const config = intensityConfig[intensity];

  return (
    <div className={cn("relative overflow-hidden rounded-3xl", className)}>
      {/* SVG Filters for Advanced Effects */}
      <svg className="absolute inset-0 w-0 h-0 pointer-events-none">
        <defs>
          {/* Background Distortion Filter */}
          {distortion && (
            <filter 
              id={displacementId} 
              x="-20%" 
              y="-20%" 
              width="140%" 
              height="140%"
              filterUnits="objectBoundingBox"
            >
              <feTurbulence 
                baseFrequency={config.turbulence} 
                numOctaves="3" 
                result={noiseId}
                type="fractalNoise"
              />
              <feDisplacementMap 
                in="SourceGraphic" 
                in2={noiseId} 
                scale={config.displacement}
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          )}
          
          {/* Chromatic Aberration Filter */}
          <filter id={`chromatic-${filterId}`} x="-5%" y="-5%" width="110%" height="110%">
            <feOffset in="SourceGraphic" dx="0.5" dy="0" result="red"/>
            <feOffset in="SourceGraphic" dx="-0.5" dy="0" result="blue"/>
            <feBlend in="red" in2="SourceGraphic" mode="screen"/>
            <feBlend in="blue" in2="SourceGraphic" mode="screen"/>
          </filter>
        </defs>
      </svg>

      {/* Glass Container */}
      <div 
        className={cn(
          "relative overflow-hidden rounded-3xl border",
          "shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08)]",
          animated && "transition-all duration-700 ease-out"
        )}
        style={{
          background: `linear-gradient(135deg, 
            rgba(255, 255, 255, 0.18) 0%, 
            rgba(255, 255, 255, 0.08) 50%, 
            rgba(255, 255, 255, 0.12) 100%)`,
          backdropFilter: `blur(${config.blur}px) saturate(${config.saturation}%) brightness(${config.brightness}%)`,
          WebkitBackdropFilter: `blur(${config.blur}px) saturate(${config.saturation}%) brightness(${config.brightness}%)`,
          borderImage: "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.4) 100%) 1",
          filter: distortion ? `url(#${displacementId})` : undefined
        }}
      >
        {/* Multi-layered Glass Effects */}
        
        {/* Base Inner Glow */}
        <div 
          className="absolute inset-0 rounded-3xl"
          style={{
            background: `radial-gradient(circle at 25% 25%, 
              rgba(255, 255, 255, 0.25) 0%, 
              rgba(255, 255, 255, 0.08) 40%, 
              rgba(255, 255, 255, 0.12) 100%)`,
            boxShadow: `
              inset 0 1px 0 rgba(255, 255, 255, 0.6),
              inset 0 -1px 0 rgba(255, 255, 255, 0.3),
              inset 1px 0 0 rgba(255, 255, 255, 0.4),
              inset -1px 0 0 rgba(255, 255, 255, 0.2),
              inset 0 8px 32px rgba(255, 255, 255, 0.15)
            `
          }}
        />
        
        {/* Primary Specular Highlight */}
        <div 
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: `linear-gradient(135deg, 
              rgba(255, 255, 255, 0.4) 0%, 
              rgba(255, 255, 255, 0.1) 25%,
              transparent 50%,
              rgba(255, 255, 255, 0.05) 75%,
              rgba(255, 255, 255, 0.15) 100%)`
          }}
        />
        
        {/* Secondary Reflection */}
        <div 
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: `conic-gradient(from 45deg at 30% 30%, 
              rgba(255, 255, 255, 0.2) 0deg, 
              transparent 90deg, 
              rgba(255, 255, 255, 0.1) 180deg, 
              transparent 270deg, 
              rgba(255, 255, 255, 0.15) 360deg)`
          }}
        />
        
        {/* Edge Brightening */}
        <div 
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: `linear-gradient(135deg, 
              rgba(255, 255, 255, 0.6) 0%, 
              transparent 15%,
              transparent 85%,
              rgba(255, 255, 255, 0.4) 100%)`,
            mask: `radial-gradient(ellipse at center, transparent 60%, black 100%)`,
            WebkitMask: `radial-gradient(ellipse at center, transparent 60%, black 100%)`
          }}
        />
        
        {/* Subtle Chromatic Aberration */}
        <div 
          className="absolute inset-0 rounded-3xl pointer-events-none opacity-20"
          style={{
            background: `linear-gradient(90deg, 
              rgba(255, 100, 100, 0.15) 0%, 
              transparent 30%,
              transparent 70%, 
              rgba(100, 100, 255, 0.15) 100%)`,
            mixBlendMode: 'color-dodge'
          }}
        />
        
        {/* Dynamic Animation Layer */}
        {animated && (
          <div 
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: `conic-gradient(from 0deg at 50% 50%, 
                transparent 0deg, 
                rgba(255, 255, 255, 0.1) 45deg,
                rgba(255, 255, 255, 0.2) 90deg, 
                rgba(255, 255, 255, 0.1) 135deg,
                transparent 180deg,
                rgba(255, 255, 255, 0.05) 225deg,
                rgba(255, 255, 255, 0.1) 270deg,
                rgba(255, 255, 255, 0.05) 315deg,
                transparent 360deg)`,
              animation: 'liquid-shimmer 4s ease-in-out infinite'
            }}
          />
        )}

        {/* Content Layer */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
      
      {/* CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes liquid-shimmer {
          0%, 100% { 
            transform: rotate(0deg) scale(1);
            opacity: 0.3;
          }
          25% { 
            transform: rotate(90deg) scale(1.02);
            opacity: 0.6;
          }
          50% { 
            transform: rotate(180deg) scale(1);
            opacity: 0.4;
          }
          75% { 
            transform: rotate(270deg) scale(1.01);
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}

// Specialized variants
export function LiquidGlassCard({ children, className, ...props }: Omit<LiquidGlassAdvancedProps, 'className'> & { className?: string }) {
  return (
    <LiquidGlassAdvanced 
      intensity="medium"
      distortion={true}
      animated={true}
      className={cn("p-6", className)}
      {...props}
    >
      {children}
    </LiquidGlassAdvanced>
  );
}

export function LiquidGlassPanel({ children, className, ...props }: Omit<LiquidGlassAdvancedProps, 'className'> & { className?: string }) {
  return (
    <LiquidGlassAdvanced 
      intensity="subtle"
      distortion={false}
      animated={false}
      className={cn("p-8", className)}
      {...props}
    >
      {children}
    </LiquidGlassAdvanced>
  );
} 