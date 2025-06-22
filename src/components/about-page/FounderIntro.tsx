'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function FounderIntro() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-bone via-bone to-bone/95 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-obsidian/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-6 sm:mb-8 text-sm sm:text-sm font-medium text-obsidian/60 tracking-[0.2em] uppercase">
            <span>The Founder</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              Why I Built NextStage
            </span>
          </h2>
          <p className="text-lg sm:text-base lg:text-lg text-obsidian/80 font-light max-w-2xl mx-auto">
            After watching brilliant strategies get diluted through traditional consulting handoffs, I created the embedded partnership that actually delivers.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          
          {/* Portrait Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={mounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
            className="relative mb-12 sm:mb-16"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-16">
              
              {/* Photo */}
              <div className="relative flex-shrink-0">
                <div className="relative w-72 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[28rem] bg-gradient-to-br from-obsidian/8 to-accent/8 rounded-[2rem] overflow-hidden border border-obsidian/15 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)]">
                  <Image
                    src="/images/headshot_web.png"
                    alt="Ben Segev, Founder of NextStage"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/3 via-transparent to-transparent" />
                </div>
                
                {/* Minimal accent element */}
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full border border-accent/30 backdrop-blur-sm" />
              </div>
              
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                  className="space-y-6 sm:space-y-8"
                >
                  {/* Story */}
                  <div className="space-y-4 sm:space-y-6 text-obsidian/75 font-light text-lg sm:text-base lg:text-lg leading-relaxed max-w-2xl lg:max-w-none">
                    <p>
                      I&apos;ve launched a digital bank from zero, steered product lines in consumer tech, and rebuilt brands across healthcare, real estate, and AI. Each project taught me the same lesson: <span className="text-obsidian font-medium">great strategy collapses the moment it&apos;s handed off to different teams with different priorities.</span>
                    </p>
                    <p>
                      So I eliminated the handoffs. NextStage is the integrated partnership I kept searching for but never found: strategy, design, and technology moving through one accountable team at startup speed.
                    </p>
                  </div>
                  
                  {/* Signature Quote */}
                  <div className="pt-6 sm:pt-8 border-t border-obsidian/10">
                    <blockquote className="text-lg xl:text-xl font-light text-obsidian/90 leading-tight mb-3 sm:mb-4">
                      &ldquo;I&apos;m not here to present your strategy. I&apos;m here to build it with you.&rdquo;
                    </blockquote>
                    <div className="flex items-center justify-center lg:justify-start gap-4">
                      <div className="w-12 h-px bg-accent" />
                      <span className="text-obsidian/60 text-sm font-medium tracking-wider uppercase">Ben Segev</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Team Building */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-br from-obsidian/3 to-accent/3 border border-obsidian/8 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-lg xl:text-xl font-display text-obsidian mb-6 sm:mb-8">
                The Integrated Team
              </h3>
              <div className="space-y-4 sm:space-y-6 text-obsidian/70 font-light text-lg sm:text-base lg:text-lg leading-relaxed">
                <p>
                  We&apos;ve assembled multidisciplinary founder-operators who move at startup velocity—designers who code, technologists who understand brand strategy, strategists who&apos;ve scaled their own companies.
                </p>
                <p>
                  No handoffs, no dilution—just unified execution delivered in weeks, not months.
                </p>
              </div>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
} 