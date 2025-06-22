"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-sans"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-16 md:pt-32 md:gap-12"
          >
            {/* Left Column - Timeline Marker & Title */}
            <div className="sticky flex flex-col md:flex-row z-40 items-start top-32 self-start max-w-xs lg:max-w-md md:w-full">
              {/* Timeline Dot with Enhanced Design */}
              <div className="relative flex items-center justify-center mb-4 md:mb-0">
                <div className="h-16 w-16 absolute left-0 md:left-0 rounded-full bg-background/80 backdrop-blur-sm border-2 border-accent/20 flex items-center justify-center shadow-2xl">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-accent to-accent/80 shadow-lg relative">
                    <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                  </div>
                </div>
                {/* Connecting line preview */}
                {index < data.length - 1 && (
                  <div className="absolute top-16 left-7 w-[2px] h-16 bg-gradient-to-b from-accent/30 to-transparent md:hidden" />
                )}
              </div>

              {/* Title Section - Desktop Only */}
              <div className="hidden md:block md:pl-20 flex-1">
                <div className="space-y-2">
                  {/* Main title - desktop only */}
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-obsidian tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  
                  {/* Decorative accent line */}
                  <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent/30 rounded-full" />
                </div>
              </div>
            </div>

            {/* Right Column - Content with Enhanced Layout */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {/* Mobile title */}
              <div className="md:hidden mb-6">
                <h3 className="font-display text-lg font-bold text-obsidian tracking-tight leading-tight">
                  {item.title}
                </h3>
                <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent/30 rounded-full mt-2" />
              </div>

              {/* Enhanced content wrapper */}
              <div className="relative">
                {/* Background decoration - subtle */}
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/1 via-transparent to-accent/0.5 rounded-3xl opacity-30" />
                <div className="relative">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Enhanced Timeline Line with Scroll Tracking */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-8 top-0 overflow-hidden w-[4px] bg-gradient-to-b from-transparent from-[0%] via-obsidian/15 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] rounded-full"
        >
          {/* Animated progress line that follows scroll */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[4px] bg-gradient-to-t from-accent via-accent/90 to-accent/60 rounded-full shadow-lg"
          />
          
          {/* Additional glow effect */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[8px] -left-[2px] bg-gradient-to-t from-accent/20 via-accent/10 to-accent/5 rounded-full blur-sm"
          />
        </div>
      </div>
    </div>
  );
}; 