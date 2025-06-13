'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function StrategyMetrics() {
  const [mounted, setMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [displayNumbers, setDisplayNumbers] = useState<number[]>([0, 0, 0]);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Counter animation effect - triggered when component comes into view
  useEffect(() => {
    if (!inView) return;
    
    const animateCounters = () => {
      metrics.forEach((metric, index) => {
        const targetNumber = metric.number;
        const startNumber = displayNumbers[index] || 0;
        const duration = 1200; // ms - slightly slower for elegance
        const startTime = Date.now();
        
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Eased transition
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          let currentValue;
          
          if (metric.value.includes('x')) {
            // For 1.6x, animate as decimal
            currentValue = parseFloat((startNumber + (targetNumber - startNumber) * easeProgress).toFixed(1));
          } else if (metric.value.includes('+')) {
            // For 15,000+, animate as integer
            currentValue = Math.round(startNumber + (targetNumber - startNumber) * easeProgress);
          } else {
            // For 30%, animate as integer
            currentValue = Math.round(startNumber + (targetNumber - startNumber) * easeProgress);
          }
          
          setDisplayNumbers(prev => {
            const newNumbers = [...prev];
            newNumbers[index] = currentValue;
            return newNumbers;
          });
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        
        // Stagger the animations slightly
        setTimeout(() => requestAnimationFrame(animate), index * 200);
      });
    };

    // Start animation when component comes into view
    const timer = setTimeout(animateCounters, 800); // Delay to let entrance animations settle
    return () => clearTimeout(timer);
  }, [inView]);

  const metrics = [
    {
      value: "30%",
      number: 30,
      label: "Faster Business\nGrowth", 
      description: "with formal strategic planning versus unstructured approaches."
    },
    {
      value: "1.6x",
      number: 1.6,
      label: "Higher Success\nRate",
      description: "for companies that implement comprehensive strategic planning."
    },
    {
      value: "15,000+",
      number: 15000,
      label: "New Businesses\nDaily",
      description: "making strategic differentiation essential for standing out."
    }
  ];

  const fixedPositions = [
    { top: '20%', left: '10%' },
    { top: '60%', left: '85%' },
    { top: '15%', left: '75%' },
    { top: '70%', left: '20%' },
    { top: '40%', left: '90%' },
    { top: '80%', left: '60%' },
    { top: '25%', left: '40%' },
    { top: '10%', left: '55%' },
    { top: '65%', left: '5%' },
    { top: '35%', left: '70%' },
    { top: '50%', left: '25%' },
    { top: '85%', left: '45%' }
  ];

  if (!mounted) return null;

  return (
    <section className="relative py-8 sm:py-12 lg:py-16 overflow-hidden bg-gradient-to-br from-obsidian via-obsidian/95 to-obsidian">
      
      {/* Complex Animated Background */}
      <div className="absolute inset-0">
        
        {/* Fast-flowing data streams */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`fast-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
            style={{
              top: `${15 + i * 10}%`,
              width: '120%',
              left: '-10%',
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 3 + (i * 0.3),
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.4
            }}
          />
        ))}

        {/* Slower background streams */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`slow-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent"
            style={{
              top: `${25 + i * 12}%`,
              width: '100%',
              left: '0%',
            }}
            animate={{
              x: ['-50%', '150%'],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 8 + (i * 0.5),
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.8
            }}
          />
        ))}

        {/* Floating particles with fixed positions */}
        {fixedPositions.map((position, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-accent/30 rounded-full"
            style={position}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4 + (i * 0.2),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Mobile Layout - Centered */}
        <div className="lg:hidden">
          <div className="max-w-6xl mx-auto">
            
            {/* Mobile Header */}
            <motion.div 
              className="text-center mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onViewportEnter={() => setInView(true)}
            >
              <h2 className="font-display text-3xl sm:text-2xl md:text-3xl tracking-[-0.02em] leading-[0.9] mb-2 sm:mb-3">
                <span className="bg-gradient-to-r from-bone via-accent to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                  Why Strategy Matters
                </span>
              </h2>
              
              <div className="max-w-2xl mx-auto">
                <p className="text-lg sm:text-base leading-[1.4] text-bone/80 font-light">
                  Research-backed results from strategic planning
                </p>
              </div>
            </motion.div>

            {/* Mobile Metrics */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 gap-4">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    className="group relative"
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    
                    {/* Dynamic Card Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-obsidian/40 via-obsidian/60 to-obsidian/80 backdrop-blur-xl rounded-xl border border-accent/20 transition-all duration-700 group-hover:border-accent/40 group-hover:from-obsidian/30 group-hover:via-obsidian/50 group-hover:to-obsidian/70" />
                    
                    {/* Pulsing Glow Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      animate={hoveredIndex === index ? {
                        boxShadow: [
                          '0 0 20px rgba(255, 224, 215, 0.1)',
                          '0 0 40px rgba(255, 224, 215, 0.2)',
                          '0 0 20px rgba(255, 224, 215, 0.1)'
                        ]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    {/* Content */}
                    <div className="relative p-4 sm:p-6 text-center">
                      
                      {/* Metric Value */}
                      <div className="mb-2 sm:mb-3">
                        <motion.div
                          className="font-display text-3xl sm:text-2xl md:text-3xl font-bold leading-none tracking-[-0.02em]"
                          animate={hoveredIndex === index ? { scale: 1.05 } : { scale: 1 }}
                          transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                        >
                          <span className="bg-gradient-to-br from-bone via-accent to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                            {metric.value.includes('x') 
                              ? `${displayNumbers[index] || 0}x`
                              : metric.value.includes('+') 
                              ? `${(displayNumbers[index] || 0).toLocaleString()}+`
                              : `${displayNumbers[index] || 0}%`
                            }
                          </span>
                        </motion.div>
                      </div>

                      {/* Metric Label */}
                      <div className="mb-2 sm:mb-3">
                        <h3 className="text-lg sm:text-base font-display font-semibold text-bone tracking-[-0.01em] leading-tight whitespace-pre-line">
                          {metric.label}
                        </h3>
                      </div>

                      {/* Description */}
                      <div className="max-w-xs mx-auto">
                        <p className="text-sm sm:text-sm text-bone/70 leading-[1.4] font-light group-hover:text-bone/90 transition-colors duration-500 line-clamp-3">
                          {metric.description}
                        </p>
                      </div>

                      {/* Animated bottom accent */}
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        animate={hoveredIndex === index ? {
                          background: [
                            'linear-gradient(to right, transparent, #FFE0D7, transparent)',
                            'linear-gradient(to right, #FFE0D7, transparent, #FFE0D7)',
                            'linear-gradient(to right, transparent, #FFE0D7, transparent)'
                          ]
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mobile Bottom Message */}
            <motion.div 
              className="text-center mt-6 sm:mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="max-w-4xl mx-auto">
                <p className="text-lg sm:text-base leading-[1.5] text-bone font-medium">
                  Don&apos;t leave your success to chance. Strategic planning isn&apos;t optional—it&apos;s{' '}
                  <span className="bg-gradient-to-r from-accent via-accent/90 to-accent bg-clip-text text-transparent font-semibold">
                    essential for sustainable growth
                  </span>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Desktop Layout - Descriptive Section Style */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Side - Header & Description */}
            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                onViewportEnter={() => setInView(true)}
              >
                <h2 className="font-display text-2xl xl:text-3xl 2xl:text-4xl tracking-[-0.02em] leading-[0.9] mb-4">
                  <span className="bg-gradient-to-r from-bone via-accent to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                    Why Strategy Matters
                  </span>
                </h2>
                
                <div className="mb-6">
                  <p className="text-lg xl:text-lg leading-[1.4] text-bone/80 font-light">
                    Research-backed results from strategic planning
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-base xl:text-base leading-[1.6] text-bone/70 font-light">
                    Don&apos;t leave your success to chance. Strategic planning isn&apos;t optional—it&apos;s{' '}
                    <span className="bg-gradient-to-r from-accent via-accent/90 to-accent bg-clip-text text-transparent font-semibold">
                      essential for sustainable growth
                    </span>.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Metrics */}
            <div className="lg:col-span-7">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                
                {/* Connecting Lines Between Metrics */}
                <div className="absolute top-1/2 left-0 right-0 h-px">
                  <div className="relative w-full h-full">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.8 }}
                    />
                    
                    {/* Data pulse along the line */}
                    <motion.div
                      className="absolute top-0 h-full w-2 bg-accent/80 rounded-full blur-sm"
                      animate={{
                        left: ['0%', '100%'],
                        opacity: [0.8, 0.3, 0.8]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-6">
                  {metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      className="group relative"
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      
                      {/* Dynamic Card Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-obsidian/40 via-obsidian/60 to-obsidian/80 backdrop-blur-xl rounded-xl border border-accent/20 transition-all duration-700 group-hover:border-accent/40 group-hover:from-obsidian/30 group-hover:via-obsidian/50 group-hover:to-obsidian/70" />
                      
                      {/* Pulsing Glow Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        animate={hoveredIndex === index ? {
                          boxShadow: [
                            '0 0 20px rgba(255, 224, 215, 0.1)',
                            '0 0 40px rgba(255, 224, 215, 0.2)',
                            '0 0 20px rgba(255, 224, 215, 0.1)'
                          ]
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      />

                      {/* Connection Node */}
                      <motion.div
                        className="absolute top-1/2 -translate-y-1/2 z-10"
                        style={{ 
                          [index === 0 ? 'right' : index === 2 ? 'left' : 'left']: '-4px',
                          ...(index === 1 && { right: '-4px' })
                        }}
                      >
                        <motion.div
                          className="w-2 h-2 bg-accent rounded-full border-2 border-obsidian"
                          animate={{
                            scale: hoveredIndex === index ? [1, 1.5, 1] : 1,
                            opacity: [0.6, 1, 0.6]
                          }}
                          transition={{
                            scale: { duration: 0.3 },
                            opacity: { duration: 2, repeat: Infinity }
                          }}
                        />
                      </motion.div>
                      
                      {/* Content */}
                      <div className="relative p-4 xl:p-6 text-center">
                        
                        {/* Metric Value */}
                        <div className="mb-3">
                          <motion.div
                            className="font-display text-2xl xl:text-3xl font-bold leading-none tracking-[-0.02em]"
                            animate={hoveredIndex === index ? { scale: 1.05 } : { scale: 1 }}
                            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                          >
                            <span className="bg-gradient-to-br from-bone via-accent to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                              {metric.value.includes('x') 
                                ? `${displayNumbers[index] || 0}x`
                                : metric.value.includes('+') 
                                ? `${(displayNumbers[index] || 0).toLocaleString()}+`
                                : `${displayNumbers[index] || 0}%`
                              }
                            </span>
                          </motion.div>
                        </div>

                        {/* Metric Label */}
                        <div className="mb-3">
                          <h3 className="text-lg xl:text-lg font-display font-semibold text-bone tracking-[-0.01em] leading-tight whitespace-pre-line">
                            {metric.label}
                          </h3>
                        </div>

                        {/* Description */}
                        <div className="max-w-xs mx-auto">
                          <p className="text-sm xl:text-sm text-bone/70 leading-[1.4] font-light group-hover:text-bone/90 transition-colors duration-500 line-clamp-3">
                            {metric.description}
                          </p>
                        </div>

                        {/* Animated bottom accent */}
                        <motion.div
                          className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                          animate={hoveredIndex === index ? {
                            background: [
                              'linear-gradient(to right, transparent, #FFE0D7, transparent)',
                              'linear-gradient(to right, #FFE0D7, transparent, #FFE0D7)',
                              'linear-gradient(to right, transparent, #FFE0D7, transparent)'
                            ]
                          } : {}}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 