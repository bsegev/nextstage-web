"use client";

import { LiquidGlassAdvanced } from "./liquid-glass-advanced";

export function LiquidGlassDemo() {
  return (
    <div className="w-full min-h-screen p-8 space-y-8">
      
      {/* Gradient Background Demo */}
      <div className="relative w-full h-96 rounded-3xl overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500" />
        
        {/* Liquid Glass Card on top */}
        <div className="absolute inset-8 flex items-center justify-center">
          <LiquidGlassAdvanced 
            intensity="medium" 
            distortion={true} 
            animated={true}
            className="p-8 max-w-md"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Liquid Glass Effect</h3>
              <p className="text-white/90">Notice how the background is distorted and refracted through the glass surface.</p>
            </div>
          </LiquidGlassAdvanced>
        </div>
      </div>

      {/* Image Background Demo */}
      <div className="relative w-full h-96 rounded-3xl overflow-hidden">
        {/* Background with pattern/image */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #ff6b35 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, #4f46e5 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, #06b6d4 0%, transparent 50%),
              linear-gradient(45deg, #f59e0b, #ef4444, #8b5cf6)
            `,
            backgroundSize: '300px 300px, 200px 200px, 400px 400px, 100% 100%'
          }}
        />
        
        {/* Multiple Glass Elements */}
        <div className="absolute inset-8 grid grid-cols-2 gap-4">
          <LiquidGlassAdvanced 
            intensity="subtle" 
            distortion={true}
            className="p-6 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full mx-auto mb-3" />
              <p className="text-white font-medium">Subtle Glass</p>
            </div>
          </LiquidGlassAdvanced>
          
          <LiquidGlassAdvanced 
            intensity="strong" 
            distortion={true} 
            animated={true}
            className="p-6 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full mx-auto mb-3" />
              <p className="text-white font-medium">Strong Glass</p>
            </div>
          </LiquidGlassAdvanced>
        </div>
      </div>

      {/* Complex Pattern Background */}
      <div className="relative w-full h-96 rounded-3xl overflow-hidden">
        {/* Complex background pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundColor: '#1a1a2e',
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,.1) 2px, rgba(255,255,255,.1) 4px),
              repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(255,107,53,.1) 2px, rgba(255,107,53,.1) 4px),
              radial-gradient(circle at 30% 70%, rgba(79, 70, 229, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 70% 30%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)
            `
          }}
        />
        
        {/* Large centered glass panel */}
        <div className="absolute inset-16 flex items-center justify-center">
          <LiquidGlassAdvanced 
            intensity="medium" 
            distortion={true} 
            animated={true}
            className="p-12 w-full max-w-lg"
          >
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-white/30 to-white/10 rounded-2xl mx-auto flex items-center justify-center">
                <div className="w-8 h-8 bg-white/40 rounded-lg" />
              </div>
              <h3 className="text-2xl font-bold text-white">Complex Background</h3>
              <p className="text-white/80 leading-relaxed">
                The liquid glass effect works best with rich, detailed backgrounds that can be distorted and refracted.
              </p>
              <div className="flex gap-2 justify-center pt-4">
                <div className="w-3 h-3 bg-white/40 rounded-full" />
                <div className="w-3 h-3 bg-white/40 rounded-full" />
                <div className="w-3 h-3 bg-white/40 rounded-full" />
              </div>
            </div>
          </LiquidGlassAdvanced>
        </div>
      </div>

      {/* Video/Dynamic Background Demo */}
      <div className="relative w-full h-96 rounded-3xl overflow-hidden">
        {/* Animated gradient background */}
        <div 
          className="absolute inset-0 animate-pulse"
          style={{
            background: `
              conic-gradient(from 0deg at 50% 50%, 
                #ff6b35 0deg, 
                #4f46e5 72deg, 
                #06b6d4 144deg, 
                #f59e0b 216deg, 
                #ef4444 288deg, 
                #ff6b35 360deg)
            `,
            animation: 'rotate 10s linear infinite'
          }}
        />
        
        {/* Glass overlay */}
        <div className="absolute inset-12 flex items-center justify-center">
          <LiquidGlassAdvanced 
            intensity="medium" 
            distortion={true} 
            animated={true}
            className="p-8"
          >
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-3">Dynamic Background</h3>
              <p className="text-white/90 text-sm">
                Animated backgrounds create the most dramatic liquid glass effects
              </p>
            </div>
          </LiquidGlassAdvanced>
        </div>
      </div>

      <style jsx>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
} 