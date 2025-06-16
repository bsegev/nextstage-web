"use client";

import { LiquidGlassAdvanced } from "./liquid-glass-advanced";

export function LiquidGlassSubtleDemo() {
  return (
    <div className="w-full min-h-screen p-8 space-y-8 bg-gray-50">
      
      {/* Very Subtle Gradient */}
      <div className="relative w-full h-96 rounded-3xl overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 30% 20%, rgba(255, 107, 53, 0.08) 0%, transparent 60%),
              radial-gradient(circle at 70% 80%, rgba(255, 224, 215, 0.12) 0%, transparent 60%),
              linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 224, 215, 0.95) 100%)
            `
          }}
        />
        
        <div className="absolute inset-8 flex items-center justify-center">
          <LiquidGlassAdvanced 
            intensity="subtle" 
            distortion={true} 
            animated={true}
            className="p-8 max-w-md"
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Subtle & Elegant</h3>
              <p className="text-gray-600 text-sm">
                Very gentle background gradients still show beautiful glass distortion
              </p>
            </div>
          </LiquidGlassAdvanced>
        </div>
      </div>

      {/* Soft Texture Pattern */}
      <div className="relative w-full h-96 rounded-3xl overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundColor: '#fefefe',
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255, 107, 53, 0.03) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(10, 10, 10, 0.02) 0%, transparent 50%),
              repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255, 224, 215, 0.02) 60px, rgba(255, 224, 215, 0.02) 120px),
              repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(255, 107, 53, 0.015) 80px, rgba(255, 107, 53, 0.015) 160px)
            `
          }}
        />
        
        <div className="absolute inset-8 grid grid-cols-2 gap-4">
          <LiquidGlassAdvanced 
            intensity="subtle" 
            distortion={true}
            className="p-6 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="w-10 h-10 bg-gray-200/50 rounded-xl mx-auto mb-3" />
              <p className="text-gray-700 font-medium text-sm">Soft Texture</p>
            </div>
          </LiquidGlassAdvanced>
          
          <LiquidGlassAdvanced 
            intensity="medium" 
            distortion={true}
            className="p-6 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="w-10 h-10 bg-accent/20 rounded-xl mx-auto mb-3" />
              <p className="text-gray-700 font-medium text-sm">Medium Glass</p>
            </div>
          </LiquidGlassAdvanced>
        </div>
      </div>

      {/* Minimal Noise Pattern */}
      <div className="relative w-full h-96 rounded-3xl overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundColor: '#fbfbfb',
            backgroundImage: `
              radial-gradient(circle at 40% 60%, rgba(255, 107, 53, 0.04) 0%, transparent 70%),
              radial-gradient(circle at 80% 20%, rgba(255, 224, 215, 0.06) 0%, transparent 70%),
              url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff6b35' fill-opacity='0.01'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
            `
          }}
        />
        
        <div className="absolute inset-16 flex items-center justify-center">
          <LiquidGlassAdvanced 
            intensity="medium" 
            distortion={true} 
            animated={true}
            className="p-10 w-full max-w-lg"
          >
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-200/60 to-gray-100/40 rounded-2xl mx-auto flex items-center justify-center">
                <div className="w-6 h-6 bg-accent/30 rounded-lg" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Minimal Background</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Even the most subtle patterns and gentle gradients create beautiful liquid glass effects
              </p>
            </div>
          </LiquidGlassAdvanced>
        </div>
      </div>

      {/* Ultra-Soft Breathing Effect */}
      <div className="relative w-full h-96 rounded-3xl overflow-hidden">
        <div 
          className="absolute inset-0 animate-pulse"
          style={{
            background: `
              radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.06) 0%, transparent 80%),
              radial-gradient(circle at 20% 80%, rgba(255, 224, 215, 0.08) 0%, transparent 60%),
              radial-gradient(circle at 80% 20%, rgba(10, 10, 10, 0.02) 0%, transparent 70%),
              linear-gradient(45deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 250, 248, 1) 100%)
            `,
            animationDuration: '4s'
          }}
        />
        
        <div className="absolute inset-12 flex items-center justify-center">
          <LiquidGlassAdvanced 
            intensity="subtle" 
            distortion={true} 
            animated={true}
            className="p-8"
          >
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Breathing Background</h3>
              <p className="text-gray-600 text-sm">
                Gentle animation adds life to subtle backgrounds
              </p>
              <div className="flex gap-1 justify-center mt-4">
                <div className="w-2 h-2 bg-accent/40 rounded-full" />
                <div className="w-2 h-2 bg-accent/40 rounded-full" />
                <div className="w-2 h-2 bg-accent/40 rounded-full" />
              </div>
            </div>
          </LiquidGlassAdvanced>
        </div>
      </div>

    </div>
  );
} 