'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { cn } from "@/lib/utils";



const processPhases = [
  {
    phase: "01",
    title: "Discovery",
    subtitle: "Identify transformation opportunities",
    description: "Deep-dive sessions to uncover friction points and align stakeholders.",
    details: ["Organizational audit", "Stakeholder synthesis"],
    timeline: "Week 1-2",
    deliverable: "Roadmap"
  },
  {
    phase: "02", 
    title: "Planning",
    subtitle: "Strategic transformation blueprint",
    description: "Strategy framework and architecture design tailored to your context.",
    details: ["Strategic framework", "System architecture"],
    timeline: "Week 3-4",
    deliverable: "Blueprint"
  },
  {
    phase: "03",
    title: "Solution Mapping", 
    subtitle: "Technology meets strategy",
    description: "Detailed solution design with technology stack and implementation plan.",
    details: ["Technology stack", "Implementation plan", "Team structure"],
    timeline: "Week 5-8",
    deliverable: "Solution Map"
  },
  {
    phase: "04",
    title: "Delivery",
    subtitle: "Full-scale implementation and handoff", 
    description: "Sprint-based delivery with knowledge transfer and capability building.",
    details: ["Agile delivery", "Knowledge transfer"],
    timeline: "Week 9-20",
    deliverable: "Live Systems"
  }
];

export default function ProcessJourney() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="bg-white py-20 sm:py-24 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-obsidian rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative">
        
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-6 sm:mb-8 text-xs sm:text-sm font-medium text-obsidian/60 tracking-[0.2em] uppercase">
            <span>Your Transformation Journey</span>
          </div>
          
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6 md:mb-8">
            <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              From First Contact to Lasting Impact
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-obsidian/80 font-light max-w-2xl mx-auto">
            Here&apos;s how your case study will read—the structured approach that turns ambitious visions into transformational reality.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className={`transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
            
            {/* Phase 1 - Discovery */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group/bento cursor-pointer"
            >
              <div className={cn(
                "aspect-video border border-obsidian/8 hover:border-accent/25 shadow-sm hover:shadow-2xl hover:shadow-obsidian/8 transition-all duration-700 ease-out hover:-translate-y-2 hover:scale-[1.02] rounded-2xl p-6 lg:p-8 overflow-hidden relative",
                // Background image for discovery/telescope theme
                "bg-[url(/images/showcase/process-journey/discover-telescope.png)] bg-cover bg-center",
                // Semi-transparent overlay for text readability
                "before:content-[''] before:absolute before:inset-px before:bg-gradient-to-br before:from-white/75 before:via-white/70 before:to-bone/65 before:rounded-2xl before:z-[1]",
                // Hover video overlay
                "group-hover/bento:[&>video]:opacity-100",
                "hover:before:bg-gradient-to-br hover:before:from-black/70 hover:before:to-black/50"
              )}>
                
                {/* Hover Video */}
                <video
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-0 transition-opacity duration-700 z-0"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/discovery-video.mp4" type="video/mp4" />
                </video>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                  
                  {/* Phase Content */}
                  <div className="space-y-4 relative z-10">

                {/* Phase Header */}
                    <div className="flex items-center gap-3">
                  <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/30 rounded-xl flex items-center justify-center transition-all duration-500 group-hover/bento:scale-110 group-hover/bento:rotate-2"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-lg font-mono font-bold tracking-wide text-accent">
                      {processPhases[0].phase}
                    </span>
                  </motion.div>
                  
                  <div className="space-y-1">
                        <div className="text-xs font-medium tracking-[0.1em] uppercase text-accent/80 group-hover/bento:text-white/90 transition-colors duration-300">
                      {processPhases[0].timeline}
                    </div>
                        <div className="text-xs text-obsidian/60 group-hover/bento:text-white/80 font-medium transition-colors duration-300">
                      {processPhases[0].deliverable}
                    </div>
                  </div>
                </div>

                {/* Content */}
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <h3 className="font-display text-lg lg:text-xl tracking-[-0.02em] leading-tight text-obsidian group-hover/bento:text-white transition-colors duration-300">
                      {processPhases[0].title}
                    </h3>
                        <p className="text-xs lg:text-sm font-light leading-relaxed italic text-obsidian/60 group-hover/bento:text-white/90 transition-colors duration-300">
                      {processPhases[0].subtitle}
                    </p>
                  </div>

                      <p className="text-xs lg:text-sm leading-relaxed text-obsidian/70 group-hover/bento:text-white/80 transition-colors duration-300">
                    {processPhases[0].description}
                  </p>

                      <div className="flex flex-wrap gap-1">
                    {processPhases[0].details.map((detail, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                            className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-medium text-obsidian/70 hover:bg-accent/15 transition-colors duration-300"
                      >
                        <div className="w-1 h-1 bg-accent rounded-full" />
                        {detail}
                      </motion.div>
                    ))}
                  </div>
                    </div>
                  </div>

                  {/* Empty space for background image */}
                  <div></div>
                </div>
              </div>
            </motion.div>

            {/* Phase 2 - Planning */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group/bento cursor-pointer"
            >
                <div className={cn(
                  "aspect-video border border-obsidian/8 hover:border-accent/25 shadow-sm hover:shadow-2xl hover:shadow-obsidian/8 transition-all duration-700 ease-out hover:-translate-y-2 hover:scale-[1.02] rounded-2xl p-6 lg:p-8 overflow-hidden relative",
                  // Background image for planning/blueprint theme
                  "bg-[url(/images/showcase/process-journey/planning-blueprint.png)] bg-cover bg-center",
                  // Semi-transparent overlay for text readability
                  "before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/80 before:via-white/75 before:to-bone/70 before:rounded-2xl before:z-[1]",
                  // Hover video overlay
                  "group-hover/bento:[&>video]:opacity-100",
                  "hover:before:bg-gradient-to-br hover:before:from-black/70 hover:before:to-black/50"
                )}>
                  
                  {/* Hover Video */}
                  <video
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-0 transition-opacity duration-700 z-0"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/videos/planning-video.mp4" type="video/mp4" />
                  </video>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
                    
                    {/* Phase Content */}
                    <div className="space-y-3 relative z-10">

                  {/* Phase Header */}
                      <div className="flex items-center gap-3">
                    <motion.div 
                          className="w-12 h-12 bg-gradient-to-br from-obsidian/8 to-obsidian/5 border border-obsidian/15 rounded-xl flex items-center justify-center transition-all duration-500 group-hover/bento:scale-110 group-hover/bento:rotate-2"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                          <span className="text-lg font-mono font-bold tracking-wide text-obsidian/70">
                        {processPhases[1].phase}
                      </span>
                    </motion.div>
                    
                    <div className="space-y-1">
                      <div className="text-xs font-medium tracking-[0.1em] uppercase text-obsidian/50">
                        {processPhases[1].timeline}
                      </div>
                      <div className="text-xs text-obsidian/60 font-medium">
                        {processPhases[1].deliverable}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                      <div className="space-y-2">
                    <div className="space-y-1">
                      <h3 className="font-display text-lg lg:text-xl tracking-[-0.02em] leading-tight text-obsidian group-hover/bento:text-white transition-colors duration-300">
                        {processPhases[1].title}
                      </h3>
                      <p className="text-xs lg:text-sm font-light leading-relaxed italic text-obsidian/60 group-hover/bento:text-white/90 transition-colors duration-300">
                        {processPhases[1].subtitle}
                      </p>
                    </div>

                    <p className="text-xs lg:text-sm leading-relaxed text-obsidian/70 group-hover/bento:text-white/80 transition-colors duration-300">
                      {processPhases[1].description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {processPhases[1].details.map((detail, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                          className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-obsidian/5 border border-obsidian/10 text-xs font-medium text-obsidian/70 hover:bg-obsidian/10 transition-colors duration-300"
                        >
                          <div className="w-1 h-1 bg-obsidian/40 rounded-full" />
                          {detail}
                        </motion.div>
                      ))}
                    </div>
                      </div>
                    </div>
                    
                    {/* Empty space for background image */}
                    <div></div>
                  </div>
                </div>
              </motion.div>

            {/* Phase 3 - Solution Mapping */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group/bento cursor-pointer"
            >
                <div className={cn(
                  "aspect-video border border-obsidian/8 hover:border-accent/25 shadow-sm hover:shadow-2xl hover:shadow-obsidian/8 transition-all duration-700 ease-out hover:-translate-y-2 hover:scale-[1.02] rounded-2xl p-6 lg:p-8 overflow-hidden relative",
                  // Background image for solution/lightbulb theme
                  "bg-[url(/images/showcase/process-journey/solution-lightbulb.png)] bg-cover bg-center",
                  // Semi-transparent overlay for text readability
                  "before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/80 before:via-white/75 before:to-bone/70 before:rounded-2xl before:z-[1]",
                  // Hover video overlay
                  "group-hover/bento:[&>video]:opacity-100",
                  "hover:before:bg-gradient-to-br hover:before:from-black/70 hover:before:to-black/50"
                )}>
                  
                  {/* Hover Video */}
                  <video
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-0 transition-opacity duration-700 z-0"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/videos/solution-video.mp4" type="video/mp4" />
                  </video>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
                    
                    {/* Phase Content */}
                    <div className="space-y-3 relative z-10">

                  {/* Phase Header */}
                      <div className="flex items-center gap-3">
                    <motion.div 
                          className="w-12 h-12 bg-gradient-to-br from-accent/15 to-accent/8 border border-accent/25 rounded-xl flex items-center justify-center transition-all duration-500 group-hover/bento:scale-110 group-hover/bento:rotate-2"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                          <span className="text-lg font-mono font-bold tracking-wide text-accent">
                        {processPhases[2].phase}
                      </span>
                    </motion.div>
                    
                    <div className="space-y-1">
                      <div className="text-xs font-medium tracking-[0.1em] uppercase text-accent/80">
                        {processPhases[2].timeline}
                      </div>
                      <div className="text-xs text-obsidian/60 font-medium">
                        {processPhases[2].deliverable}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                      <div className="space-y-2">
                    <div className="space-y-1">
                      <h3 className="font-display text-lg lg:text-xl tracking-[-0.02em] leading-tight text-obsidian group-hover/bento:text-white transition-colors duration-300">
                        {processPhases[2].title}
                      </h3>
                      <p className="text-xs lg:text-sm font-light leading-relaxed italic text-obsidian/60 group-hover/bento:text-white/90 transition-colors duration-300">
                        {processPhases[2].subtitle}
                      </p>
                    </div>

                    <p className="text-xs lg:text-sm leading-relaxed text-obsidian/70 group-hover/bento:text-white/80 transition-colors duration-300">
                      {processPhases[2].description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {processPhases[2].details.map((detail, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                          className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-medium text-obsidian/70 hover:bg-accent/15 transition-colors duration-300"
                        >
                          <div className="w-1 h-1 bg-accent rounded-full" />
                          {detail}
                        </motion.div>
                      ))}
                    </div>
                      </div>
                    </div>
                    
                    {/* Empty space for background image */}
                    <div></div>
                  </div>
                </div>
              </motion.div>

            {/* Phase 4 - Delivery */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group/bento cursor-pointer"
            >
              <div className={cn(
                "aspect-video border border-obsidian/8 hover:border-accent/25 shadow-sm hover:shadow-2xl hover:shadow-obsidian/8 transition-all duration-700 ease-out hover:-translate-y-2 hover:scale-[1.02] rounded-2xl p-6 lg:p-8 overflow-hidden relative",
                // Background image for delivery/key theme
                "bg-[url(/images/showcase/process-journey/delivery-key.png)] bg-cover bg-center",
                // Semi-transparent overlay for text readability
                "before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/80 before:via-white/75 before:to-bone/70 before:rounded-2xl before:z-[1]",
                // Hover effect - keep GIF for delivery since no video available
                "hover:bg-[url(https://media.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.gif)]",
                "hover:before:bg-gradient-to-br hover:before:from-black/70 hover:before:to-black/50"
              )}>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                  
                  {/* Phase Content */}
                  <div className="space-y-4 relative z-10">
                    
                    {/* Phase Header */}
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/30 rounded-xl flex items-center justify-center transition-all duration-500 group-hover/bento:scale-110 group-hover/bento:rotate-2"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <span className="text-lg font-mono font-bold tracking-wide text-accent">
                          {processPhases[3].phase}
                        </span>
                      </motion.div>
                      
                      <div className="space-y-1">
                        <div className="text-xs font-medium tracking-[0.1em] uppercase text-accent/80 group-hover/bento:text-white/90 transition-colors duration-300">
                          {processPhases[3].timeline}
                        </div>
                        <div className="text-xs text-obsidian/60 group-hover/bento:text-white/80 font-medium transition-colors duration-300">
                          {processPhases[3].deliverable}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <h3 className="font-display text-lg lg:text-xl tracking-[-0.02em] leading-tight text-obsidian group-hover/bento:text-white transition-colors duration-300">
                          {processPhases[3].title}
                        </h3>
                        <p className="text-xs lg:text-sm font-light leading-relaxed italic text-obsidian/60 group-hover/bento:text-white/90 transition-colors duration-300">
                          {processPhases[3].subtitle}
                        </p>
                      </div>

                      <p className="text-xs lg:text-sm leading-relaxed text-obsidian/70 group-hover/bento:text-white/80 transition-colors duration-300">
                        {processPhases[3].description}
                      </p>
                      
                    <div className="flex flex-wrap gap-1">
                      {processPhases[3].details.map((detail, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                          className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-medium text-obsidian/70 hover:bg-accent/15 transition-colors duration-300"
                        >
                          <div className="w-1 h-1 bg-accent rounded-full" />
                          {detail}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  </div>

                  {/* Empty space for background image */}
                  <div></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 lg:mt-24"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-lg lg:text-xl text-obsidian/60 font-light leading-relaxed mb-8">
              This is the methodology that creates the case studies you&apos;ve seen above. 
              <br className="hidden sm:block" />
              <span className="italic">Your transformation story is waiting to be written.</span>
            </p>
            
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}