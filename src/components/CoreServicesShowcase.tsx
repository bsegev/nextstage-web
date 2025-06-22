"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Card, CardSkeletonContainer, CardTitle, CardDescription } from "@/components/services/cards-demo-1";
import { animate } from "motion/react";
import React, { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { 
  IconChartBar, 
  IconSearch, 
  IconBulb,
  IconTarget,
  IconTrendingUp,
  IconPalette,
  IconSparkles,
  IconBrush,
  IconStar,
  IconHeart,
  IconSettings,
  IconRocket,
  IconDeviceDesktop,
  IconTool,
  IconBolt,
  IconArrowUpRight,
  IconRefresh,
  IconChartPie,
  IconClick,
  IconFlame
} from "@tabler/icons-react";

// Optimized skeleton components with useMemo for sequences
const MarketIntelligenceSkeleton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const sequence = useMemo(() => {
    const scale = [1, 1.1, 1];
    const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
    return [
      [".market-circle-1", { scale, transform }, { duration: 0.8 }],
      [".market-circle-2", { scale, transform }, { duration: 0.8 }],
      [".market-circle-3", { scale, transform }, { duration: 0.8 }],
      [".market-circle-4", { scale, transform }, { duration: 0.8 }],
      [".market-circle-5", { scale, transform }, { duration: 0.8 }],
    ];
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const timer = setTimeout(() => {
      animate(sequence, {
        // @ts-expect-error framer-motion animate function doesn't have proper typing for repeat
        repeat: Infinity,
        repeatDelay: 2, // Increased delay to reduce CPU usage
      });
    }, 100);
    
    return () => clearTimeout(timer);
  }, [sequence, isVisible]);

  return (
    <motion.div 
      className="overflow-hidden h-full relative flex items-center justify-center"
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex flex-row shrink-0 justify-center items-center gap-2">
        <Container className="h-8 w-8 market-circle-1">
          <IconChartBar className="h-4 w-4 text-foreground" />
        </Container>
        <Container className="h-12 w-12 market-circle-2">
          <IconTarget className="h-6 w-6 text-foreground" />
        </Container>
        <Container className="market-circle-3">
          <IconTrendingUp className="h-8 w-8 text-foreground" />
        </Container>
        <Container className="h-12 w-12 market-circle-4">
          <IconSearch className="h-6 w-6 text-foreground" />
        </Container>
        <Container className="h-8 w-8 market-circle-5">
          <IconBulb className="h-4 w-4 text-foreground" />
        </Container>
      </div>
      {isVisible && (
        <div className="h-40 w-px absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-move shadow-lg shadow-blue-400/60">
          <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
            <Sparkles />
          </div>
        </div>
      )}
    </motion.div>
  );
};

const BrandExperienceSkeleton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const sequence = useMemo(() => {
    const scale = [1, 1.1, 1];
    const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
    return [
      [".brand-circle-1", { scale, transform }, { duration: 0.8 }],
      [".brand-circle-2", { scale, transform }, { duration: 0.8 }],
      [".brand-circle-3", { scale, transform }, { duration: 0.8 }],
      [".brand-circle-4", { scale, transform }, { duration: 0.8 }],
      [".brand-circle-5", { scale, transform }, { duration: 0.8 }],
    ];
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const timer = setTimeout(() => {
      animate(sequence, {
        // @ts-expect-error framer-motion animate function doesn't have proper typing for repeat
        repeat: Infinity,
        repeatDelay: 2,
      });
    }, 200);
    
    return () => clearTimeout(timer);
  }, [sequence, isVisible]);

  return (
    <motion.div 
      className="overflow-hidden h-full relative flex items-center justify-center"
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex flex-row shrink-0 justify-center items-center gap-2">
        <Container className="h-8 w-8 brand-circle-1">
          <IconPalette className="h-4 w-4 text-foreground" />
        </Container>
        <Container className="h-12 w-12 brand-circle-2">
          <IconSparkles className="h-6 w-6 text-foreground" />
        </Container>
        <Container className="brand-circle-3">
          <IconBrush className="h-8 w-8 text-foreground" />
        </Container>
        <Container className="h-12 w-12 brand-circle-4">
          <IconStar className="h-6 w-6 text-foreground" />
        </Container>
        <Container className="h-8 w-8 brand-circle-5">
          <IconHeart className="h-4 w-4 text-foreground" />
        </Container>
      </div>
      {isVisible && (
        <div className="h-40 w-px absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-move shadow-lg shadow-purple-400/60">
          <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
            <Sparkles color="purple" />
          </div>
        </div>
      )}
    </motion.div>
  );
};

const PlatformDevelopmentSkeleton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const sequence = useMemo(() => {
    const scale = [1, 1.1, 1];
    const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
    return [
      [".platform-circle-1", { scale, transform }, { duration: 0.8 }],
      [".platform-circle-2", { scale, transform }, { duration: 0.8 }],
      [".platform-circle-3", { scale, transform }, { duration: 0.8 }],
      [".platform-circle-4", { scale, transform }, { duration: 0.8 }],
      [".platform-circle-5", { scale, transform }, { duration: 0.8 }],
    ];
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const timer = setTimeout(() => {
      animate(sequence, {
        // @ts-expect-error framer-motion animate function doesn't have proper typing for repeat
        repeat: Infinity,
        repeatDelay: 2,
      });
    }, 300);
    
    return () => clearTimeout(timer);
  }, [sequence, isVisible]);

  return (
    <motion.div 
      className="overflow-hidden h-full relative flex items-center justify-center"
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex flex-row shrink-0 justify-center items-center gap-2">
        <Container className="h-8 w-8 platform-circle-1">
          <IconSettings className="h-4 w-4 text-foreground" />
        </Container>
        <Container className="h-12 w-12 platform-circle-2">
          <IconRocket className="h-6 w-6 text-foreground" />
        </Container>
        <Container className="platform-circle-3">
          <IconDeviceDesktop className="h-8 w-8 text-foreground" />
        </Container>
        <Container className="h-12 w-12 platform-circle-4">
          <IconTool className="h-6 w-6 text-foreground" />
        </Container>
        <Container className="h-8 w-8 platform-circle-5">
          <IconBolt className="h-4 w-4 text-foreground" />
        </Container>
      </div>
      {isVisible && (
        <div className="h-40 w-px absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-gradient-to-b from-transparent via-green-400 to-transparent animate-move shadow-lg shadow-green-400/60">
          <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
            <Sparkles color="green" />
          </div>
        </div>
      )}
    </motion.div>
  );
};

const GrowthSystemsSkeleton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const sequence = useMemo(() => {
    const scale = [1, 1.1, 1];
    const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
    return [
      [".growth-circle-1", { scale, transform }, { duration: 0.8 }],
      [".growth-circle-2", { scale, transform }, { duration: 0.8 }],
      [".growth-circle-3", { scale, transform }, { duration: 0.8 }],
      [".growth-circle-4", { scale, transform }, { duration: 0.8 }],
      [".growth-circle-5", { scale, transform }, { duration: 0.8 }],
    ];
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const timer = setTimeout(() => {
      animate(sequence, {
        // @ts-expect-error framer-motion animate function doesn't have proper typing for repeat
        repeat: Infinity,
        repeatDelay: 2,
      });
    }, 400);
    
    return () => clearTimeout(timer);
  }, [sequence, isVisible]);

  return (
    <motion.div 
      className="overflow-hidden h-full relative flex items-center justify-center"
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex flex-row shrink-0 justify-center items-center gap-2">
        <Container className="h-8 w-8 growth-circle-1">
          <IconChartPie className="h-4 w-4 text-foreground" />
        </Container>
        <Container className="h-12 w-12 growth-circle-2">
          <IconRefresh className="h-6 w-6 text-foreground" />
        </Container>
        <Container className="growth-circle-3">
          <IconArrowUpRight className="h-8 w-8 text-foreground" />
        </Container>
        <Container className="h-12 w-12 growth-circle-4">
          <IconClick className="h-6 w-6 text-foreground" />
        </Container>
        <Container className="h-8 w-8 growth-circle-5">
          <IconFlame className="h-4 w-4 text-foreground" />
        </Container>
      </div>
      {isVisible && (
        <div className="h-40 w-px absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-gradient-to-b from-transparent via-orange-400 to-transparent animate-move shadow-lg shadow-orange-400/60">
          <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
            <Sparkles color="orange" />
          </div>
        </div>
      )}
    </motion.div>
  );
};

// Container component
const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "h-16 w-16 rounded-full flex items-center justify-center bg-background/80 backdrop-blur-sm border border-foreground/20 shadow-[0px_0px_20px_0px_rgba(255,224,215,0.3)_inset,0px_8px_32px_-8px_rgba(10,10,10,0.4)] hover:shadow-[0px_0px_25px_0px_rgba(255,224,215,0.4)_inset,0px_12px_40px_-8px_rgba(10,10,10,0.5)] transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
};

// Optimized Sparkles component with reduced complexity
const Sparkles = ({ color = "blue" }: { color?: string }) => {
  // Reduced sparkle count from 12 to 6 for better performance
  const sparkleData = useMemo(() => [
    { top: 15, duration: 3.2, delay: 0, color: color },
    { top: 35, duration: 2.8, delay: 0.5, color: 'white' },
    { top: 55, duration: 3.5, delay: 1.0, color: color },
    { top: 75, duration: 2.9, delay: 1.5, color: 'cyan' },
    { top: 45, duration: 3.1, delay: 2.0, color: 'white' },
    { top: 25, duration: 3.3, delay: 2.5, color: color },
  ], [color]);

  const getSparkleColors = (color: string) => {
    switch (color) {
      case 'blue': return { primary: 'bg-blue-400 shadow-blue-400/80', secondary: 'bg-cyan-300 shadow-cyan-300/80', tertiary: 'bg-white shadow-white/90' };
      case 'purple': return { primary: 'bg-purple-400 shadow-purple-400/80', secondary: 'bg-pink-300 shadow-pink-300/80', tertiary: 'bg-white shadow-white/90' };
      case 'green': return { primary: 'bg-green-400 shadow-green-400/80', secondary: 'bg-emerald-300 shadow-emerald-300/80', tertiary: 'bg-white shadow-white/90' };
      case 'orange': return { primary: 'bg-orange-400 shadow-orange-400/80', secondary: 'bg-yellow-300 shadow-yellow-300/80', tertiary: 'bg-white shadow-white/90' };
      default: return { primary: 'bg-blue-400 shadow-blue-400/80', secondary: 'bg-cyan-300 shadow-cyan-300/80', tertiary: 'bg-white shadow-white/90' };
    }
  };

  const colors = getSparkleColors(color);

  return (
    <div className="absolute inset-0">
      {sparkleData.map((sparkle, i) => (
        <motion.div
          key={`star-${i}`}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            ease: "easeOut",
            delay: sparkle.delay,
          }}
          style={{
            position: "absolute",
            top: `${sparkle.top}%`,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1,
          }}
          className={cn(
            "w-1 h-1 rotate-45 shadow-lg",
            i % 3 === 0 ? colors.primary : i % 3 === 1 ? colors.secondary : colors.tertiary
          )}
        />
      ))}
      
      {/* Reduced star shapes from 6 to 3 */}
      {sparkleData.slice(0, 3).map((sparkle, i) => (
        <motion.div
          key={`starshape-${i}`}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: sparkle.duration + 1,
            repeat: Infinity,
            ease: "easeOut",
            delay: sparkle.delay + 0.5,
          }}
          style={{
            position: "absolute",
            top: `${sparkle.top + 5}%`,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1,
          }}
          className="w-2 h-2 text-white/80"
        >
          ✨
        </motion.div>
      ))}
    </div>
  );
};

// Memoized services data
const services = [
  {
    title: "Strategy & Planning",
    description: "Transform uncertainty into strategic advantage with market insights and data-driven planning.",
    href: "/services/strategy-planning",
    skeleton: MarketIntelligenceSkeleton,
    backgroundImage: "/images/strategy-hero.png",
    delay: 0,
  },
  {
    title: "Branding & Design",
    description: "Create cohesive brand experiences that drive recognition and conversion across touchpoints.",
    href: "/services/branding-design", 
    skeleton: BrandExperienceSkeleton,
    backgroundImage: "/images/brand-design.png",
    delay: 0.1,
  },
  {
    title: "Tech & Software",
    description: "Build scalable digital platforms and custom solutions that grow with your business needs.",
    href: "/services/tech-software",
    skeleton: PlatformDevelopmentSkeleton,
    backgroundImage: "/images/tech-innovation-hero-bg.png",
    delay: 0.2,
  },
  {
    title: "Marketing & Growth",
    description: "Scale efficiently with marketing automation and systematic growth acceleration.",
    href: "/services/marketing-growth",
    skeleton: GrowthSystemsSkeleton,
    backgroundImage: "/images/growth-marketing-hero-bg-2.png",
    delay: 0.3,
  }
];

export default function CoreServicesShowcase() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 xl:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="font-display text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian dark:from-bone dark:via-accent dark:to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              Core Services
            </span>
          </h2>
          <p className="text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-[1.5] text-foreground/80 font-light max-w-3xl mx-auto">
            Comprehensive solutions powered by{" "}
            <span className="relative inline-block">
              <span className="text-foreground font-medium">AI-driven innovation</span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-accent/50 to-accent/25 block" />
            </span>
            {" "}to accelerate your growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-12">
          {services.map((service) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: service.delay }}
            >
              <Card className="group-hover:scale-[1.02] transition-all duration-500 h-full">
                <CardSkeletonContainer backgroundImage={service.backgroundImage}>
                  <service.skeleton />
                </CardSkeletonContainer>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>
                  {service.description}
                </CardDescription>
                <div className="mt-4 pt-2">
                  <Link 
                    href={service.href} 
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 group-hover:text-foreground"
                  >
                    Learn more
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 sm:mt-16 lg:mt-20"
        >
          <p className="text-foreground/70 mb-6 text-lg">
            Need a custom solution?{" "}
            <span className="relative inline-block">
              <span className="text-foreground font-medium">We design bespoke approaches</span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-accent/50 to-accent/25 block" />
            </span>
            {" "}for unique challenges.
          </p>
          
          <Link href="/contact" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-obsidian text-bone rounded-full text-lg font-medium transition-all duration-300 hover:bg-obsidian/90 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/40 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
            <span className="relative">
                                  Book appointment
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full block" />
            </span>
            
            <motion.svg 
              className="relative w-5 h-5"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 