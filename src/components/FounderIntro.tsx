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
    <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-br from-bone via-bone to-bone/95 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-obsidian/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className={`text-center mb-16 sm:mb-20 md:mb-24 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-6 sm:mb-8 text-xs sm:text-sm font-medium text-obsidian/60 tracking-[0.2em] uppercase">
            <span>Leadership</span>
          </div>
          
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6 md:mb-8">
            <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              Behind the Work
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-obsidian/80 font-light max-w-2xl mx-auto">
            I build the bridge between big ideas and working reality.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          
          {/* Portrait Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={mounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
            className="relative mb-20 sm:mb-24 md:mb-28"
          >
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              
              {/* Photo */}
              <div className="relative flex-shrink-0">
                <div className="relative w-80 h-96 sm:w-96 sm:h-[28rem] bg-gradient-to-br from-obsidian/8 to-accent/8 rounded-[2rem] overflow-hidden border border-obsidian/15 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)]">
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
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full border border-accent/30 backdrop-blur-sm" />
              </div>
              
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                  className="space-y-8"
                >
                  {/* Story */}
                  <div className="space-y-6 text-obsidian/75 font-light text-lg sm:text-xl leading-relaxed max-w-2xl lg:max-w-none">
                    <p>
                      I&apos;ve launched a digital bank from zero, steered product lines in consumer tech, and rebuilt brands across healthcare, real estate, and AI.
                    </p>
                    <p>
                      Different arenas—same lesson: <span className="text-obsidian font-medium">great strategy collapses the moment it&apos;s handed off.</span>
                    </p>
                    <p>
                      So I eliminated the silos. NextStage is the partnership I kept searching for but never found: strategy, design, and technology moving through one accountable team.
                    </p>
                  </div>
                  
                  {/* Signature Quote */}
                  <div className="pt-8 border-t border-obsidian/10">
                    <blockquote className="text-2xl sm:text-3xl font-light text-obsidian/90 leading-tight mb-4">
                      &ldquo;I&apos;m here to make sure your next stage isn&apos;t a slogan—it&apos;s a milestone.&rdquo;
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
            className="bg-gradient-to-br from-obsidian/3 to-accent/3 border border-obsidian/8 rounded-3xl p-8 sm:p-12 mb-16 sm:mb-20"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl sm:text-3xl font-display text-obsidian mb-8">
                The Team We&apos;ve Built
              </h3>
              <div className="space-y-6 text-obsidian/70 font-light text-lg sm:text-xl leading-relaxed">
                <p>
                  We work with a tight bench of multidisciplinary experts—designers who code, technologists who speak brand, strategists who&apos;ve run their own companies.
                </p>
                <p>
                  Nearly all are founders themselves, so they solve with an owner&apos;s urgency and a cross‑functional lens. Together, we deliver decisive direction, hands‑on build, and systems that scale cleanly—all in lockstep.
                </p>
              </div>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
} 