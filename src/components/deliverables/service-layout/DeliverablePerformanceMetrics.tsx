'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

export interface MetricData {
  value: string;
  number: number;
  label: string;
  description: string;
  source?: string;
  icon: any;
}

export interface PerformanceMetricsData {
  title: string;
  description: string;
  metric: MetricData; // Single metric instead of array
  bottomMessage: string;
}

interface DeliverablePerformanceMetricsProps {
  data?: PerformanceMetricsData;
}

// Helper function to parse fractions
function parseFraction(value: string): { numerator: number; denominator: number } | null {
  const fractionMatch = value.match(/(\d+)\/(\d+)/);
  if (fractionMatch) {
    return {
      numerator: parseInt(fractionMatch[1]),
      denominator: parseInt(fractionMatch[2])
    };
  }
  return null;
}

// Helper function to format display value based on metric type
function formatDisplayValue(metric: MetricData, currentNumber: number): string {
  if (metric.value.includes('/')) {
    // Handle fractions like "1/3"
    const fraction = parseFraction(metric.value);
    if (fraction) {
      const animatedNumerator = Math.round(currentNumber);
      return `${animatedNumerator}/${fraction.denominator}`;
    }
  }
  
  if (metric.value.includes('x')) {
    // Handle multipliers like "2.4x"
    if (currentNumber % 1 !== 0) {
      return `${currentNumber.toFixed(1)}x`;
    } else {
      return `${Math.round(currentNumber)}x`;
    }
  }
  
  if (metric.value.includes('+')) {
    // Handle additive values like "150+"
    return `+${Math.round(currentNumber)}%`;
  }
  
  // Default to percentage
  return `${Math.round(currentNumber)}%`;
}

export default function DeliverablePerformanceMetrics({ data }: DeliverablePerformanceMetricsProps) {
  const [mounted, setMounted] = useState(false);
  const [hoveredMetric, setHoveredMetric] = useState(false);
  const [displayNumber, setDisplayNumber] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Counter animation effect
  useEffect(() => {
    if (!inView || !metric) return;
    
    const animateCounter = () => {
      let targetNumber = metric.number;
      
      // For fractions, we want to animate the numerator
      if (metric.value.includes('/')) {
        const fraction = parseFraction(metric.value);
        if (fraction) {
          targetNumber = fraction.numerator;
        }
      }
      
      const startNumber = 0;
      const duration = 1500; // Slightly longer for single metric
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        let currentValue;
        
        if (metric.value.includes('x') && targetNumber % 1 !== 0) {
          // Handle decimal multipliers like 2.4x
          currentValue = parseFloat((startNumber + (targetNumber - startNumber) * easeProgress).toFixed(1));
        } else {
          // Handle integers for %, +, fractions, and whole number multipliers
          currentValue = Math.round(startNumber + (targetNumber - startNumber) * easeProgress);
        }
        
        setDisplayNumber(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    };

    const timer = setTimeout(animateCounter, 500);
    return () => clearTimeout(timer);
  }, [inView]);

  // Default metric for backward compatibility
  const defaultMetric: MetricData = {
    value: "73%",
    number: 73,
    label: "Brand Recognition Lift",
    description: "Average increase in unaided brand awareness after implementation",
    icon: TrendingUp
  };

  // Use provided data or fallback to defaults
  const {
    title = "Brand Impact Metrics",
    description = "Measurable business value from strategic brand identity",
    metric = defaultMetric,
    bottomMessage = "Brand identity that drives business growth"
  } = data || {};

  if (!mounted) return null;

  const IconComponent = metric.icon;

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        onViewportEnter={() => setInView(true)}
        className="text-center"
      >
        <h3 className="font-display text-lg font-semibold text-obsidian mb-2">
          {title}
        </h3>
        <p className="text-sm text-obsidian/60 font-light">
          {description}
        </p>
      </motion.div>

      {/* Single Large Metric */}
      <motion.div
        className="group relative"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        onMouseEnter={() => setHoveredMetric(true)}
        onMouseLeave={() => setHoveredMetric(false)}
      >
        
        {/* Card Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-obsidian/95 to-obsidian rounded-2xl border border-accent/20 transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-xl group-hover:shadow-accent/10" />
        
        {/* Subtle Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={hoveredMetric ? {
            boxShadow: [
              '0 0 30px rgba(255, 224, 215, 0.1)',
              '0 0 50px rgba(255, 224, 215, 0.2)',
              '0 0 30px rgba(255, 224, 215, 0.1)'
            ]
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Content */}
        <div className="relative p-8 text-center">
          
          {/* Icon */}
          <motion.div
            className="flex-shrink-0 w-12 h-12 bg-bone/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-bone/20 transition-colors duration-300"
            animate={hoveredMetric ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <IconComponent className="w-6 h-6 text-bone" />
          </motion.div>
          
          {/* Metric Value - Large and Prominent */}
          <motion.div
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-none tracking-tight mb-4"
            animate={hoveredMetric ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-accent">
              {formatDisplayValue(metric, displayNumber)}
            </span>
          </motion.div>

          {/* Label */}
          <h4 className="text-xl sm:text-2xl font-display font-semibold text-bone mb-4 leading-tight">
            {metric.label}
          </h4>

          {/* Description - More Space */}
          <p className="text-base text-bone/70 leading-relaxed font-light group-hover:text-bone/90 transition-colors duration-300 max-w-md mx-auto">
            {metric.description}
          </p>

          {/* Source if provided */}
          {metric.source && (
            <p className="text-xs text-bone/50 font-light italic mt-4">
              Source: {metric.source}
            </p>
          )}

          {/* Animated bottom accent */}
          <motion.div
            className="absolute bottom-0 left-8 right-8 h-px overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredMetric ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-full h-full bg-gradient-to-r from-transparent via-accent/50 to-transparent"
              animate={hoveredMetric ? {
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              } : {}}
              transition={{ 
                duration: 2, 
                repeat: hoveredMetric ? Infinity : 0,
                ease: "easeInOut"
              }}
              style={{ backgroundSize: '200% 100%' }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center pt-2"
      >
        <p className="text-xs text-obsidian/50 font-light italic">
          {bottomMessage}
        </p>
      </motion.div>
    </div>
  );
}