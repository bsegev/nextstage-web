"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const caseStudies = [
  {
    quote: "After a quick audit, Ben immediately understood our market challenges and created assets that actually drive business results. One of them was an explainer video that's become the most powerful conversion tool in our outreach. It has 4,000+ YT views and is consistently turning prospects into users. A game-changer for us.",
    name: "Samuel F.",
    designation: "Founder & CEO @ Vome",
    src: "/videos/logo-anim/vome_logo_anim_loop.mp4",
    tags: ["Strategy → Execution", "Video Production", "Conversion Optimization"]
  },
  {
    quote: "Our rebrand was long overdue, so we needed to make quick moves. In just a month, Ben gave ECCAN a fresh digital presence that reflects who we are. He didn't just redesign a website, he helped us rethink how we show up. Strategy, sales, marketing, he touched on all of it.",
    name: "Jared T.",
    designation: "Sales Director @ ECCAN",
    src: "/videos/logo-anim/ECCAN_logo_anim_loop.mov",
    tags: ["Rapid Execution", "Brand Strategy", "Digital Transformation"]
  },
  {
    quote: "Ben's strategic approach and technical expertise transformed our digital presence. His ability to understand our vision and translate it into reality was exceptional.",
    name: "Edi F.",
    designation: "Founder @ Digital International Bank",
    src: "/videos/logo-anim/DIB_logo_anim_loop.mov",
    tags: ["Vision → Reality", "Technical Excellence", "Strategic Partnership"]
  },
  {
    quote: "Ben didn't just design beautifully—he brought a level of strategic thinking and industry fluency that's rare to find. His understanding of real estate and fundraising shaped not only the visuals, but the copy, narrative, and structure of everything he delivered. It felt less like working with a designer and more like having a partner who truly understood our world and what investors need to see.",
    name: "Marc E.",
    designation: "Founder @ SparrowPark Developments",
    src: "/videos/logo-anim/SparrowPark_logo_anim_loop.mov",
    tags: ["Industry Expertise", "Investor Materials", "Strategic Partnership"]
  },
  {
    quote: "Ben brought fresh ideas and technical expertise to our marketing initiatives. His ability to blend creativity with data-driven decisions helped us achieve remarkable results.",
    name: "James S.",
    designation: "Marketing Lead @ SwissHUB",
    src: "/videos/logo-anim/swissHUB_logo_anim_loop.mov",
    tags: ["Creative + Data", "Marketing Strategy", "Measurable Results"]
  }
];

export default function ApproachInAction() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: true });

  return (
    <section ref={sectionRef} className="w-full py-16 sm:py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,53,0.03)_0%,rgba(255,255,255,0)_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(60deg,rgba(255,107,53,0.02)_0%,rgba(10,10,10,0.01)_50%,rgba(255,107,53,0.02)_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-6 sm:mb-8 text-sm sm:text-sm font-medium text-obsidian/60 tracking-[0.2em] uppercase">
            <span>Proof Points</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              The Approach in Action
            </span>
          </h2>
          <p className="text-lg sm:text-base lg:text-lg text-obsidian/80 font-light max-w-2xl mx-auto">
            Real projects showing how strategic depth and rapid execution deliver measurable results across different challenges.
          </p>
        </div>

        {/* Animated Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatedTestimonials testimonials={caseStudies} autoplay={true} />
        </motion.div>

        {/* Bottom Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 sm:mt-20"
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-obsidian/70 text-base sm:text-lg leading-relaxed">
              Each project demonstrates our core methodology: 
              <span className="text-obsidian font-medium"> understand the challenge</span>, 
              <span className="text-obsidian font-medium"> design the solution</span>, and 
              <span className="text-obsidian font-medium"> execute with precision</span>. 
              The approach adapts, but the results remain consistent.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 