'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function ModernBusinessApproach() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const geometryRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const geometryScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.9]);

  useEffect(() => {
    setMounted(true);
    
    // Cycle through understanding points
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const understandingPoints = [
    {
      title: "Remote teams",
      detail: "Async collaboration that actually works",
      insight: "Most remote work fails because it mimics office patterns",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "AI workflows", 
      detail: "Automation that saves time, not creates busywork",
      insight: "AI should eliminate friction, not add complexity",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Rapid scaling",
      detail: "Systems built to 10x without breaking",
      insight: "Growth breaks things that weren't designed for it",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Real-time adaptation",
      detail: "Pivoting fast when markets shift",
      insight: "Agility beats perfection in uncertain times",
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-32 bg-bone relative overflow-hidden">
      {/* Dynamic Background System */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Floating Geometric Elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 opacity-30"
          style={{ rotate: geometryRotate, scale: geometryScale }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <linearGradient id="modernGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <polygon 
              points="100,20 180,60 160,140 40,140 20,60" 
              fill="url(#modernGradient)" 
              stroke="#FFE0D7" 
              strokeWidth="1"
              opacity="0.8"
            />
            <circle cx="100" cy="100" r="30" fill="#FFE0D7" opacity="0.4" />
          </svg>
        </motion.div>

        {/* Flowing Data Streams */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFE0D7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.path
              key={i}
              d={`M${-100 + i * 200} ${100 + i * 80} Q${600 + i * 100} ${200 + i * 60} ${1300 + i * 50} ${150 + i * 70}`}
              stroke="url(#dataFlow)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* Elevated Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent/15 to-accent/8 rounded-full border border-accent/30 backdrop-blur-md mb-8">
              <motion.div className="relative">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <motion.div 
                  className="absolute inset-0 w-2 h-2 bg-accent rounded-full"
                  animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <span className="text-obsidian text-sm font-medium tracking-wide">Beyond Best Practice</span>
            </div>
          </motion.div>
          
          <motion.h2 
            className="font-display text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[-0.02em] leading-[0.85] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="block text-obsidian/40 text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4 font-light">
              Best practice is research.
            </span>
            <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              We Get It
            </span>
            <span className="block text-obsidian/60 text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-4 font-light">
              and go beyond.
            </span>
          </motion.h2>
        </div>

        {/* Interactive Understanding Matrix */}
        <div className="mb-20 sm:mb-24 md:mb-28">
          {/* Desktop: Sophisticated Layout */}
          <div className="hidden lg:block">
            <div className="relative h-[500px]">
              {/* Central Hub */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full border-2 border-accent/40 backdrop-blur-md flex items-center justify-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-obsidian font-display font-semibold text-sm text-center leading-tight">
                  Modern<br/>Business
                </span>
              </motion.div>

              {/* Orbiting Understanding Points */}
              {understandingPoints.map((point, index) => {
                const angle = (index * 90) * (Math.PI / 180);
                const radius = 180;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const isActive = activeIndex === index;
                
                return (
                  <motion.div
                    key={index}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{ x, y }}
                    animate={{ 
                      scale: isActive ? 1.1 : 1,
                      opacity: isActive ? 1 : 0.7
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={`w-48 p-6 bg-gradient-to-br ${point.color} backdrop-blur-md rounded-2xl border border-white/20 shadow-lg`}>
                      <h3 className="font-display text-lg font-semibold text-obsidian mb-2">
                        {point.title}
                      </h3>
                      <p className="text-obsidian/70 text-sm mb-3 leading-relaxed">
                        {point.detail}
                      </p>
                      <motion.p 
                        className="text-obsidian/50 text-xs italic"
                        animate={{ opacity: isActive ? 1 : 0.5 }}
                      >
                        {point.insight}
                      </motion.p>
                    </div>

                    {/* Connection Line */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 w-px bg-gradient-to-r from-accent/40 to-transparent origin-left"
                      style={{
                        height: '2px',
                        width: `${radius - 96}px`,
                        transform: `translate(-50%, -50%) rotate(${angle + 180}rad)`,
                      }}
                      animate={{ opacity: isActive ? 0.8 : 0.3 }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile: Elegant Stack */}
          <div className="lg:hidden space-y-6">
            {understandingPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 bg-gradient-to-br ${point.color} backdrop-blur-md rounded-2xl border border-white/20`}
              >
                <h3 className="font-display text-xl font-semibold text-obsidian mb-3">
                  {point.title}
                </h3>
                <p className="text-obsidian/80 mb-3 leading-relaxed">
                  {point.detail}
                </p>
                <p className="text-obsidian/60 text-sm italic">
                  {point.insight}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Elevated Philosophy Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center relative"
        >
          {/* Background Accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent rounded-3xl blur-xl" />
          
          <div className="relative p-8 sm:p-12 md:p-16">
            <blockquote className="font-display text-2xl sm:text-xl md:text-2xl lg:text-3xl text-obsidian/90 font-light max-w-4xl mx-auto leading-relaxed">
              <span className="text-accent text-6xl leading-none">"</span>
              <span className="relative">
                We study what everyone else does, then ask: 
                <em className="text-accent font-medium"> what if we didn't?</em>
              </span>
              <span className="text-accent text-6xl leading-none">"</span>
            </blockquote>
            
            <motion.div
              className="mt-8 flex items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-accent/50" />
              <span className="text-obsidian/60 text-sm font-medium tracking-wider">
                NEXTSTAGE PHILOSOPHY
              </span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-accent/50" />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
} 