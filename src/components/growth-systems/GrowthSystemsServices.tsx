'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";

export default function GrowthMarketingConsultingServices() {
  const [mounted, setMounted] = useState(false);
  const [loadingStates, setLoadingStates] = useState({
    'brand-identity': false,
    'user-experience': false,
    'visual-systems': false,
    'digital-experiences': false
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLoaderToggle = (serviceId: string, state: boolean) => {
    setLoadingStates(prev => ({
      ...prev,
      [serviceId]: state
    }));
  };

  // Service title to deliverable slug mapping
  const serviceLinks = {
    'Campaign Strategy': '/deliverables/customer-acquisition-system',
    'Content Systems': '/deliverables/conversion-optimization-framework',
    'Marketing Technology': '/deliverables/crm-optimization-system',
    'Performance Optimization': '/deliverables/performance-analytics-dashboard'
  };

  const services = [
    {
      title: "Campaign Strategy",
      context: "When you're not sure who to target or where to find them",
      description: "Target the right customers through the channels where they actively make decisions.",
      icon: "/images/growth-marketing/campaign-strategy.png",
      gradient: "from-accent/15 to-accent/5",
      loadingSteps: [
        { text: "Looking at who's already buying from you", duration: 1200 },
        { text: "Finding where your best customers hang out online", duration: 1400 },
        { text: "Creating messages that actually get their attention", duration: 1600 },
        { text: "Setting up ways to track what's working", duration: 1800 },
        { text: "Running campaigns that bring in real customers", duration: 2000 }
      ]
    },
    {
      title: "Content Systems",
      context: "When you're spending too much time creating content that nobody sees",
      description: "Create content that attracts qualified prospects and guides them toward purchase.",
      icon: "/images/growth-marketing/content-systems.png",
      gradient: "from-accent/15 to-accent/5",
      loadingSteps: [
        { text: "Seeing what content is actually working for you", duration: 1100 },
        { text: "Planning content that your customers want to see", duration: 1300 },
        { text: "Creating templates so content gets easier to make", duration: 1500 },
        { text: "Setting up systems to get your content seen", duration: 1700 },
        { text: "Tracking what content brings in business", duration: 1900 }
      ]
    },
    {
      title: "Marketing Technology",
      context: "When your marketing tools don't talk to each other",
      description: "Connect your marketing tools to automate workflows and track customer journeys.",
      icon: "/images/growth-marketing/marketing-technology.png",
      gradient: "from-accent/15 to-accent/5",
      loadingSteps: [
        { text: "Looking at what tools you're using and how they work", duration: 1000 },
        { text: "Finding where things are broken or missing", duration: 1200 },
        { text: "Connecting everything so data flows properly", duration: 1400 },
        { text: "Setting up automation for repetitive tasks", duration: 1600 },
        { text: "Creating dashboards so you can see what's happening", duration: 1800 }
      ]
    },
    {
      title: "Performance Optimization",
      context: "When you're spending money on marketing but not seeing results",
      description: "Improve conversion rates and customer experience through systematic testing.",
      icon: "/images/growth-marketing/performance-optimization.png",
      gradient: "from-accent/15 to-accent/5",
      loadingSteps: [
        { text: "Looking at where you're losing potential customers", duration: 1300 },
        { text: "Finding the biggest opportunities to improve", duration: 1500 },
        { text: "Testing different approaches to see what works better", duration: 1700 },
        { text: "Improving your website and ads based on what we learn", duration: 1900 },
        { text: "Focusing your budget on what actually brings in business", duration: 2100 }
      ]
    }
  ];

  return (
    <section className="bg-white py-20 sm:py-24 md:py-32 lg:py-40 relative overflow-hidden">
      
      {/* Fixed Multi-step loaders for each service */}
      {services.map((service) => (
        <MultiStepLoader
          key={`loader-${service.title}`}
          loadingStates={service.loadingSteps}
          loading={loadingStates[service.title.toLowerCase() as keyof typeof loadingStates]}
          duration={1500}
          loop={false}
        />
      ))}

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-obsidian rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative">
        
        {/* Section Header */}
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-6 sm:mb-8 text-sm font-medium text-obsidian/60 tracking-[0.2em] uppercase">
            <span>What We Deliver</span>
          </div>
          
          <h2 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6 md:mb-8">
            <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              Systems that create lasting impact
            </span>
          </h2>
          
          <p className="text-lg sm:text-lg md:text-xl lg:text-2xl text-obsidian/80 font-light leading-relaxed max-w-4xl mx-auto">
            Surface-level campaigns and vanity metrics don&apos;t build businesses. Every system we create connects you with the right customers, builds meaningful relationships, and drives sustainable growth.
          </p>
        </div>

        {/* Cards Grid */}
        <div className={`transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
            
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="w-full"
              >
                
                <CardContainer 
                  className="inter-var py-0 w-full h-[480px]"
                  containerClassName="py-0 flex items-start justify-start w-full h-full"
                >
                  <CardBody className="bg-white/95 backdrop-blur-xl relative group/card dark:hover:shadow-2xl dark:hover:shadow-obsidian/[0.1] dark:bg-obsidian/98 dark:border-white/[0.08] border-2 border-transparent bg-gradient-to-br from-white via-white/98 to-bone/90 w-full h-full min-w-[320px] max-w-none rounded-3xl p-6 lg:p-8 hover:shadow-2xl hover:shadow-obsidian/[0.06] transition-all duration-1000 ease-out overflow-hidden flex flex-col">
                    
                    {/* Premium branded border gradient */}
                    <div className={cn(
                      "absolute inset-0 rounded-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000",
                      "bg-gradient-to-br p-[2px]",
                      service.gradient
                    )}>
                      <div className="absolute inset-[2px] bg-white/95 rounded-3xl" />
                    </div>
                    
                    {/* Branded accent overlay */}
                    <div className={cn(
                      "absolute top-0 right-0 w-32 h-32 opacity-[0.008] group-hover/card:opacity-[0.015] transition-opacity duration-1000 rounded-3xl",
                      "bg-gradient-to-bl",
                      service.gradient
                    )} />
                    
                    {/* Premium background texture with service-specific patterns */}
                    <div className="absolute inset-0 opacity-[0.02] group-hover/card:opacity-[0.035] transition-opacity duration-1000 rounded-3xl overflow-hidden">
                      <div className={cn(
                        "absolute inset-0",
                        "bg-[radial-gradient(ellipse_at_center,rgba(30,41,59,0.12)_0%,transparent_65%)]",
                      )} />
                    </div>
                    
                    {/* Elegant Service Title with accent line */}
                    <CardItem translateZ="80" className="relative">
                      <div className="absolute -left-2 top-0 w-0.5 h-full bg-gradient-to-b from-accent/30 via-accent to-accent/30 rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                      <h3 className="font-display text-lg font-semibold text-obsidian dark:text-white mb-3 tracking-[-0.015em] leading-tight group-hover/card:text-obsidian/95 transition-colors duration-500">
                        {service.title}
                      </h3>
                    </CardItem>
                    
                    {/* Refined Context with branded styling */}
                    <CardItem translateZ="50" className="w-full">
                      <p 
                        className="text-obsidian/55 dark:text-white/55 text-base font-light mb-4 leading-[1.5] tracking-wide group-hover/card:text-obsidian/65 transition-colors duration-500"
                        dangerouslySetInnerHTML={{ __html: service.context }}
                      />
                    </CardItem>

                    {/* Enhanced Visual Element with branded styling */}
                    <CardItem translateZ="120" className="w-full mb-4 flex-shrink-0">
                      <div className="h-20 w-full bg-gradient-to-br from-bone/30 via-white/50 to-bone/20 dark:from-white/5 dark:to-white/2 rounded-2xl flex items-center justify-center group-hover/card:shadow-xl group-hover/card:shadow-obsidian/[0.03] border-2 border-transparent group-hover/card:border-accent/[0.08] transition-all duration-1000 backdrop-blur-sm relative overflow-hidden">
                        
                        {/* Strategy Image */}
                        <div className="transition-all duration-1000 ease-out group-hover/card:scale-110 relative z-10 w-full h-full">
                          <img 
                            src={service.icon} 
                            alt={service.title}
                            className="w-full h-full object-cover opacity-60 group-hover/card:opacity-90 transition-all duration-1000 filter drop-shadow-sm group-hover/card:drop-shadow-md"
                          />
                        </div>
                      </div>
                    </CardItem>
                    
                    {/* Clean Description */}
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-obsidian/55 dark:text-white/55 text-base mb-5 leading-[1.6] font-light tracking-wide group-hover/card:text-obsidian/65 transition-colors duration-500 flex-grow"
                    >
                      {service.description}
                    </CardItem>

                    {/* Enhanced Brand-Aligned CTA Buttons */}
                    <div className="flex flex-col gap-3 mt-auto">
                      <CardItem
                        translateZ={50}
                        as="button"
                        onClick={() => handleLoaderToggle(service.title.toLowerCase(), true)}
                        className="w-full px-5 py-3.5 rounded-2xl bg-gradient-to-r from-accent via-accent/95 to-accent text-obsidian text-base font-medium tracking-[0.05em] hover:from-accent/95 hover:via-accent/90 hover:to-accent/95 hover:shadow-xl hover:shadow-accent/[0.15] transition-all duration-500 hover:-translate-y-1 group/primary border border-accent/20 hover:border-accent/30"
                      >
                        <span className="flex items-center justify-center gap-2">
                          Quick Overview
                          <svg className="w-4 h-4 transition-transform duration-300 group-hover/primary:translate-x-0.5 group-hover/primary:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </span>
                      </CardItem>
                      
                      <CardItem
                        translateZ={30}
                        as={Link}
                        href={serviceLinks[service.title as keyof typeof serviceLinks]}
                        className="w-full px-5 py-3 rounded-2xl border-2 border-transparent bg-gradient-to-r from-obsidian/[0.02] via-obsidian/[0.05] to-obsidian/[0.02] hover:from-obsidian/[0.05] hover:via-obsidian/[0.08] hover:to-obsidian/[0.05] text-obsidian/70 dark:text-white/70 text-base font-light tracking-[0.05em] hover:text-obsidian/90 dark:hover:text-white/90 hover:border-obsidian/10 dark:hover:border-white/10 transition-all duration-300 group/secondary backdrop-blur-sm"
                      >
                        <span className="flex items-center justify-center gap-1.5">
                          Learn More
                          <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/secondary:rotate-45 group-hover/secondary:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </span>
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center mt-12 lg:mt-16">
          <p className="text-xl lg:text-2xl text-obsidian/60 font-light leading-relaxed max-w-3xl mx-auto">
            Great growth isn&apos;t about quick wins or viral moments.
            <br />
            It&apos;s about building authentic connections that create lasting value for everyone involved.
          </p>
          </div>
      </div>

      {/* Enhanced close buttons for active loaders */}
      {Object.entries(loadingStates).map(([serviceId, isLoading]) => 
        isLoading && (
          <button
            key={`close-${serviceId}`}
            className="fixed top-4 right-4 text-obsidian dark:text-white z-[120] bg-gradient-to-br from-white/95 via-white/90 to-bone/85 dark:from-obsidian/95 dark:via-obsidian/90 dark:to-obsidian/85 backdrop-blur-xl rounded-2xl p-3 hover:from-white hover:via-white hover:to-white dark:hover:from-obsidian dark:hover:via-obsidian dark:hover:to-obsidian transition-all duration-300 shadow-xl hover:shadow-2xl border border-obsidian/[0.08] dark:border-white/[0.08] hover:border-obsidian/[0.12] dark:hover:border-white/[0.12] group"
            onClick={() => handleLoaderToggle(serviceId, false)}
          >
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )
      )}
    </section>
  );
} 