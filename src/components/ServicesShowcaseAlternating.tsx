"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { LiquidGlass } from "@/components/ui/liquid-glass";

const services = [
  {
    title: "Strategy Consulting",
    description: "Navigate complex business challenges with strategic guidance that unlocks sustainable growth opportunities. Our proven frameworks help you make informed decisions that drive measurable results.",
    href: "/services/strategy-consulting",
    icon: "🎯",
    features: ["Market Analysis", "Growth Strategy", "Business Planning", "Risk Assessment"],
    gradient: "from-accent/20 to-accent/10"
  },
  {
    title: "Brand Design",
    description: "Create comprehensive brand identity systems that resonate deeply with your audience. From visual identity to brand guidelines, we craft brands that stand out and drive recognition.",
    href: "/services/brand-design", 
    icon: "✨",
    features: ["Visual Identity", "Brand Guidelines", "Logo Design", "Brand Strategy"],
    gradient: "from-olive/20 to-olive/10"
  },
  {
    title: "Growth Marketing",
    description: "Drive sustainable customer acquisition through data-driven marketing strategies. We optimize every touchpoint to maximize conversion and retention while minimizing acquisition costs.",
    href: "/services/growth-marketing",
    icon: "📈",
    features: ["Conversion Optimization", "Customer Acquisition", "Marketing Automation", "Performance Analytics"],
    gradient: "from-accent/15 to-obsidian/10"
  },
  {
    title: "Tech Innovation",
    description: "Future-proof your business with custom technology solutions and digital transformation strategies. We build scalable systems that grow with your business needs.",
    href: "/services/tech-innovation",
    icon: "⚡",
    features: ["Digital Transformation", "Custom Development", "System Integration", "Technical Strategy"],
    gradient: "from-olive/15 to-accent/10"
  }
];

export default function ServicesShowcaseAlternating() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 xl:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
          <h2 className="font-display text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian dark:from-bone dark:via-accent dark:to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              Our Services
            </span>
          </h2>
          <p className="text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-[1.5] text-foreground/80 font-light max-w-3xl mx-auto">
            Integrated solutions designed to{" "}
            <span className="relative inline-block">
              <span className="text-foreground font-medium">transform your business</span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-accent/50 to-accent/25 block" />
            </span>
            {" "}from strategy to execution.
          </p>
        </motion.div>

        {/* Services Sections */}
        <div className="space-y-20 sm:space-y-24 lg:space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="text-4xl lg:text-5xl mb-6">{service.icon}</div>
                
                <h3 className="font-display text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-tight text-foreground mb-6">
                  {service.title}
                </h3>
                
                <p className="text-foreground/70 leading-relaxed mb-8 text-lg lg:text-xl">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={service.href}
                  className="group inline-flex items-center gap-3 text-foreground hover:text-foreground/80 transition-colors duration-300"
                >
                  <span className="font-medium text-lg">Learn more</span>
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      repeatDelay: 3
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </Link>
              </div>

              {/* Visual */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <LiquidGlass
                  intensity="subtle"
                  animated
                  borderRadius="rounded-3xl"
                  className="border-foreground/10"
                >
                  <div className="relative overflow-hidden rounded-3xl aspect-square lg:aspect-[4/3]">
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`} />
                    
                    {/* Pattern overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(10,10,10,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(10,10,10,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] dark:bg-[linear-gradient(rgba(245,244,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(245,244,241,0.02)_1px,transparent_1px)]" />
                    
                    {/* Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-8xl lg:text-9xl opacity-20">
                        {service.icon}
                      </div>
                    </div>

                    {/* Floating elements */}
                    <motion.div
                      className="absolute top-6 right-6 w-4 h-4 bg-accent/30 rounded-full"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="absolute bottom-8 left-8 w-3 h-3 bg-olive/40 rounded-full"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                    <motion.div
                      className="absolute top-1/3 left-1/4 w-2 h-2 bg-foreground/20 rounded-full"
                      animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.5, 0.2] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    />
                  </div>
                </LiquidGlass>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20 sm:mt-24 lg:mt-32"
        >
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="font-display text-2xl sm:text-xl md:text-2xl lg:text-3xl tracking-[-0.02em] leading-[0.9] mb-4 text-foreground">
              Ready to get started?
            </h3>
            <p className="text-foreground/70 text-lg">
              Let&apos;s discuss how our integrated approach can{" "}
              <span className="relative inline-block">
                <span className="text-foreground font-medium">transform your business</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-accent/50 to-accent/25 block" />
              </span>
              .
            </p>
          </div>
          
          <Link href="/contact" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-obsidian text-bone rounded-full text-lg font-medium transition-all duration-300 hover:bg-obsidian/90 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/40 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
            <span className="relative">
              Book consultation
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full block" />
            </span>
            
            <motion.svg 
              className="relative w-5 h-5"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}