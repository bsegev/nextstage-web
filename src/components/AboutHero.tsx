"use client";

import { useState, useEffect } from "react";

export default function AboutHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative h-[75vh] flex items-center justify-center sm:justify-start px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/meeting-room-2.png)',
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/70 sm:bg-background/60 dark:bg-obsidian/70 dark:sm:bg-obsidian/60" />
      
      {/* Additional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-accent/30 sm:from-background/80 sm:via-background/60 sm:to-accent/20" />
      
      {/* Dynamic floating orbs */}
      <div className="absolute top-1/4 right-1/3 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full blur-2xl sm:blur-3xl opacity-40 dark:opacity-20 animate-pulse" 
           style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tr from-accent/15 to-accent/8 rounded-full blur-2xl sm:blur-3xl opacity-30 dark:opacity-15 animate-pulse" 
           style={{ animationDuration: '6s', animationDelay: '1s' }} />
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(10,10,10,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(10,10,10,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] sm:bg-[size:6rem_6rem] dark:bg-[linear-gradient(rgba(245,244,241,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(245,244,241,0.015)_1px,transparent_1px)]" />

      {/* Main content */}
      <div className="relative z-10 w-full">
        <div className="max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto sm:mx-0 sm:ml-8 md:ml-16 lg:ml-32 xl:ml-40 2xl:ml-48 px-4 sm:px-0">
          {/* Headline with staggered animation */}
          <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <h1 className="font-display tracking-tight leading-[0.9] sm:leading-[0.95] mb-4 sm:mb-6 lg:mb-8 text-center sm:text-left">
              <span className="block text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl drop-shadow-sm mb-2 sm:mb-3">
                We help leaders turn
              </span>
              <span className="block relative">
                <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian dark:from-bone dark:via-accent dark:to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl drop-shadow-sm">
                  vision into impact.
                </span>
                <span className="absolute -inset-1 bg-gradient-to-r from-accent/15 to-accent/30 rounded-xl blur-lg opacity-20 animate-pulse block" />
              </span>
            </h1>
          </div>
          
          {/* Subheadline with delayed animation */}
           <div className={`transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
             <div className="mb-8 sm:mb-10 lg:mb-12 relative">
               <p className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-[1.5] sm:leading-[1.5] text-foreground/80 font-light text-center sm:text-left max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto sm:mx-0">
                 NextStage partners with those building what&apos;s next—bringing sharp thinking, lean systems, and decisive momentum when it counts most.
               </p>
             </div>
           </div>
         </div>
       </div>
       
       {/* Subtle scroll indicator */}
       <div className={`absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${mounted ? 'opacity-40 translate-y-0' : 'opacity-0 translate-y-4'}`}>
         <div className="w-[1px] h-12 sm:h-16 lg:h-20 bg-gradient-to-b from-transparent via-foreground/30 to-transparent animate-pulse" />
       </div>
    </section>
  );
} 