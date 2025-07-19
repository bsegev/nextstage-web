'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface ProcessStep {
  phase: string;
  whatWeDo: string;
  whatEmerges: string;
}

interface DeliverableProcessStepsProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  steps: ProcessStep[];
}

export default function DeliverableProcessSteps({ 
  title = "Strategic methodology",
  subtitle = "A comprehensive approach that delivers measurable results through proven strategic frameworks",
  eyebrow = "Our Process",
  steps 
}: DeliverableProcessStepsProps) {

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-bone to-white relative overflow-hidden">
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full bg-[linear-gradient(45deg,transparent_40%,rgba(139,92,246,0.1)_50%,transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Similar to DeliverableMethodology */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 sm:mb-8 text-sm sm:text-sm font-medium text-obsidian/60 tracking-wide uppercase">
            <span>{eyebrow}</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-4">
            <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              {title}
            </span>
          </h2>
          
          {subtitle && (
            <p className="text-lg text-obsidian/70 font-light max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Process Steps - Differentiated Design */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connection Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-accent/40 to-transparent z-0" />
              )}
              
              <div className="relative z-10 h-full">
                {/* Card with Linear Progress Design */}
                <div className="h-full bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-6 border border-gray-200/60 transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-lg group-hover:shadow-accent/10 group-hover:-translate-y-1">
                  
                  {/* Progressive Number Badge */}
                  <div className="relative mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-obsidian to-obsidian/80 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-md">
                      <span className="text-accent font-fraunces font-bold text-xl">{index + 1}</span>
                    </div>
                    
                    {/* Step Progress Indicator */}
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${((index + 1) / steps.length) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="font-display text-lg font-semibold text-obsidian leading-tight group-hover:text-accent transition-colors duration-300">
                      {step.phase}
                    </h3>
                    
                    <p className="text-obsidian/60 text-sm leading-relaxed font-light">
                      {step.whatEmerges}
                    </p>
                    
                    {/* Subtle Action Indicator */}
                    <div className="flex items-center gap-2 text-xs text-obsidian/40 group-hover:text-accent transition-colors duration-300">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Step {index + 1} of {steps.length}</span>
                    </div>
                  </div>
                  
                  {/* Hover Accent Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-obsidian/50 font-light italic">
            Each step builds upon the previous to ensure comprehensive results
          </p>
        </motion.div>
        
      </div>
    </section>
  );
} 