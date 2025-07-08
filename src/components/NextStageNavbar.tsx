"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const NextStageLogo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <span className="font-display text-xl font-semibold text-foreground">NextStage</span>
    </Link>
  );
};

export default function NextStageNavbar() {
  const [activeService, setActiveService] = useState<"strategy" | "branding" | "tech" | "marketing">("strategy");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const serviceContent = {
    strategy: {
      title: "Strategy & Planning",
      description: "Transform uncertainty into strategic advantage with deep market insights",
      services: [
        {
          name: "Market Research & Analysis",
          description: "Comprehensive market analysis and competitive intelligence",
          href: "/services/strategy#market-research"
        },
        {
          name: "Strategic Business Planning", 
          description: "Data-driven business strategy and execution roadmaps",
          href: "/services/strategy#business-planning"
        },
        {
          name: "Go-to-Market Strategy",
          description: "Launch strategies that capture market opportunity", 
          href: "/deliverables/go-to-market-playbook"
        },
        {
          name: "Competitive Positioning",
          description: "Position for market leadership and differentiation",
          href: "/services/strategy#competitive-positioning"
        }
      ],
      cta: {
        title: "Ready to understand your market?",
        description: "Let&apos;s uncover your strategic advantage"
      }
    },
    branding: {
      title: "Branding & Design",
      description: "Create cohesive brand experiences that drive recognition and conversion",
      services: [
        {
          name: "Brand Identity & Guidelines",
          description: "Complete visual identity and brand system development",
          href: "/deliverables/brand-identity-system"
        },
        {
          name: "Digital Experience Design",
          description: "User-centered websites and digital product interfaces",
          href: "/deliverables/website-design-development"
        },
        {
          name: "Brand Copywriting & Messaging",
          description: "Strategic messaging and content that converts",
          href: "/services/branding#copywriting"
        },
        {
          name: "Design System Architecture",
          description: "Scalable design systems for consistent brand expression",
          href: "/services/branding#design-systems"
        }
      ],
      cta: {
        title: "Ready to elevate your brand?",
        description: "Let&apos;s create experiences that convert"
      }
    },
    tech: {
      title: "Tech & Software", 
      description: "Build scalable digital platforms that grow with your business",
      services: [
        {
          name: "Custom Platform Development",
          description: "End-to-end development of digital business platforms",
          href: "/deliverables/mvp-development"
        },
        {
          name: "System Integration & APIs",
          description: "Connect and optimize your technology ecosystem",
          href: "/services/tech#system-integration"
        },
        {
          name: "Digital Product Development",
          description: "User-focused digital products from concept to launch",
          href: "/services/tech#digital-products"
        },
        {
          name: "Platform Architecture & Scaling",
          description: "Scalable, secure foundations for growth",
          href: "/services/tech#platform-architecture"
        }
      ],
      cta: {
        title: "Ready to build your platform?",
        description: "Let&apos;s create technology that scales"
      }
    },
    marketing: {
      title: "Marketing & Growth",
      description: "Scale efficiently with integrated marketing and automation systems",
      services: [
        {
          name: "Marketing Automation Systems",
          description: "Automated workflows that nurture and convert",
          href: "/deliverables/customer-acquisition-system"
        },
        {
          name: "CRM Setup & Optimization",
          description: "Sales systems that scale with your growth",
          href: "/services/marketing#crm-systems"
        },
        {
          name: "Conversion Optimization",
          description: "Systematic optimization across all touchpoints",
          href: "/services/marketing#conversion-optimization"
        },
        {
          name: "Performance Analytics",
          description: "Data systems that drive marketing decisions",
          href: "/services/marketing#performance-analytics"
        }
      ],
      cta: {
        title: "Ready to systematize growth?",
        description: "Let&apos;s build systems that scale"
      }
    }
  };

  const servicesDropdown = (
    <div className="w-[1200px] bg-gradient-to-br from-white via-gray-50 to-accent/5 dark:from-black dark:via-neutral-900 dark:to-accent/5">
      <div className="grid grid-cols-12 min-h-[500px]">
        {/* Left Navigation */}
        <div className="col-span-3 bg-obsidian/95 p-8 flex flex-col">
          <div className="mb-8">
            <h3 className="text-2xl font-display font-semibold text-bone mb-2">What We Do</h3>
            <p className="text-bone/60 text-sm leading-relaxed">Complete solutions for every stage of your journey</p>
          </div>
          
          <nav className="space-y-1 flex-1">
            <a 
              href="/services/strategy-planning"
              onClick={() => setActiveService("strategy")}
              onMouseEnter={() => setActiveService("strategy")}
              className={`block w-full text-left px-4 py-3 hover:text-bone hover:bg-accent/10 rounded-lg transition-all duration-200 ${
                activeService === "strategy" 
                  ? "text-bone border-l-2 border-accent bg-accent/5" 
                  : "text-bone/60"
              }`}
            >
              Strategy & Planning
            </a>
            <a 
              href="/services/branding-design"
              onClick={() => setActiveService("branding")}
              onMouseEnter={() => setActiveService("branding")}
              className={`block w-full text-left px-4 py-3 hover:text-bone hover:bg-accent/10 rounded-lg transition-all duration-200 ${
                activeService === "branding" 
                  ? "text-bone border-l-2 border-accent bg-accent/5" 
                  : "text-bone/60"
              }`}
            >
              Branding & Design
            </a>
            <a 
              href="/services/tech-software"
              onClick={() => setActiveService("tech")}
              onMouseEnter={() => setActiveService("tech")}
              className={`block w-full text-left px-4 py-3 hover:text-bone hover:bg-accent/10 rounded-lg transition-all duration-200 ${
                activeService === "tech" 
                  ? "text-bone border-l-2 border-accent bg-accent/5" 
                  : "text-bone/60"
              }`}
            >
              Tech & Software
            </a>
            <a 
              href="/services/marketing-growth"
              onClick={() => setActiveService("marketing")}
              onMouseEnter={() => setActiveService("marketing")}
              className={`block w-full text-left px-4 py-3 hover:text-bone hover:bg-accent/10 rounded-lg transition-all duration-200 ${
                activeService === "marketing" 
                  ? "text-bone border-l-2 border-accent bg-accent/5" 
                  : "text-bone/60"
              }`}
            >
              Marketing & Growth
            </a>
          </nav>

          <div className="mt-8 pt-6 border-t border-accent/20">
            <a href="/services" className="flex items-center text-accent hover:text-accent/80 font-medium text-sm transition-colors">
              View All Services
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Center Content */}
        <div className="col-span-6 p-8">
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{serviceContent[activeService].title}</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{serviceContent[activeService].description}</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              {serviceContent[activeService].services.slice(0, 2).map((service, idx) => (
                <a key={idx} href={service.href} className="block group">
                  <h5 className="font-medium text-gray-900 dark:text-white group-hover:text-accent transition-colors">{service.name}</h5>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{service.description}</p>
                </a>
              ))}
            </div>
            <div className="space-y-4">
              {serviceContent[activeService].services.slice(2, 4).map((service, idx) => (
                <a key={idx} href={service.href} className="block group">
                  <h5 className="font-medium text-gray-900 dark:text-white group-hover:text-accent transition-colors">{service.name}</h5>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{service.description}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white">{serviceContent[activeService].cta.title}</h5>
                <p className="text-sm text-gray-500 dark:text-gray-400">{serviceContent[activeService].cta.description}</p>
              </div>
              <a href="/contact" className="px-4 py-2 bg-accent text-obsidian rounded-lg font-medium hover:bg-accent/90 transition-colors">
                Get Started
              </a>
            </div>
          </div>
        </div>

        {/* Right Featured */}
        <div className="col-span-3 bg-gradient-to-b from-accent/5 to-accent/10 p-8">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Featured</h4>
          
          <div className="space-y-6">
            <div className="group cursor-pointer">
              <div className="w-full h-32 rounded-lg mb-3 overflow-hidden border border-accent/20">
                <Image 
                  src="/images/ai-flow.png" 
                  alt="AI-Powered Strategy" 
                  width={300}
                  height={128}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h5 className="font-medium text-gray-900 dark:text-white group-hover:text-accent transition-colors">AI-Powered Strategy</h5>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Leverage AI for strategic insights and competitive advantage</p>
            </div>

            <div className="group cursor-pointer">
              <div className="w-full h-32 rounded-lg mb-3 overflow-hidden border border-accent/20">
                <Image 
                  src="/images/innovation-labs.png" 
                  alt="Innovation Labs" 
                  width={300}
                  height={128}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h5 className="font-medium text-gray-900 dark:text-white group-hover:text-accent transition-colors">Innovation Labs</h5>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Rapid prototyping and concept validation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Work dropdown
  const workDropdown = (
    <div className="w-[600px] bg-gradient-to-br from-white via-gray-50 to-accent/5 dark:from-black dark:via-neutral-900 dark:to-accent/5 p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-display font-semibold text-gray-900 dark:text-white mb-2">Our Work</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">Explore our projects and client success stories</p>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        <a href="/work" className="group block space-y-3 p-4 rounded-lg hover:bg-accent/5 transition-colors">
          <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-accent transition-colors">Portfolio</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">Browse our complete portfolio of client projects and successful implementations</p>
        </a>
        
        <Link href="/case-studies" className="group block space-y-3 p-4 rounded-lg hover:bg-accent/5 transition-colors">
          <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-accent transition-colors">Case Studies</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">Deep-dive analysis of our most impactful client transformations</p>
        </Link>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h5 className="font-medium text-gray-900 dark:text-white">Ready to see what&apos;s possible?</h5>
            <p className="text-sm text-gray-500 dark:text-gray-400">Let&apos;s discuss your project</p>
          </div>
          <a href="/strategy-brief" className="px-4 py-2 bg-accent text-obsidian rounded-lg font-medium hover:bg-accent/90 transition-colors">
            Start Your Brief
          </a>
        </div>
      </div>
    </div>
  );

  // About dropdown
  const aboutDropdown = (
    <div className="w-[600px] bg-gradient-to-br from-white via-gray-50 to-accent/5 dark:from-black dark:via-neutral-900 dark:to-accent/5 p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-display font-semibold text-gray-900 dark:text-white mb-2">About NextStage</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">Learn about our methodology and team</p>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        <a href="/about" className="group block space-y-3 p-4 rounded-lg hover:bg-accent/5 transition-colors">
          <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-accent transition-colors">Our Story</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">Meet the team and learn about our mission to transform businesses</p>
        </a>
        
        <a href="/approach" className="group block space-y-3 p-4 rounded-lg hover:bg-accent/5 transition-colors">
          <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-accent transition-colors">Our Approach</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">Discover our proven methodology for strategic business transformation</p>
        </a>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h5 className="font-medium text-gray-900 dark:text-white">Ready to work together?</h5>
            <p className="text-sm text-gray-500 dark:text-gray-400">Let&apos;s start with your strategic brief</p>
          </div>
          <a href="/strategy-brief" className="px-4 py-2 bg-accent text-obsidian rounded-lg font-medium hover:bg-accent/90 transition-colors">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );

  const navItems = [
    {
      name: "What We Do",
      dropdown: servicesDropdown,
    },
    {
      name: "Work",
      dropdown: workDropdown,
    },
    {
      name: "About",
      dropdown: aboutDropdown,
    },
    {
      name: "Strategy Brief",
      link: "/strategy-brief",
    },
  ];

  return (
    <Navbar className="fixed top-5 z-50">
      {/* Desktop Navigation */}
      <NavBody>
        <NextStageLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-3">
          <NavbarButton variant="primary" href="https://cal.com/bensegev/30min" target="_blank" rel="noopener noreferrer">Book appointment</NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NextStageLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {/* Sophisticated Mobile Navigation */}
          <div className="space-y-12">
            {/* Services Section */}
            <div className="space-y-8">
              <div className="space-y-1">
                <h3 className="text-lg font-display font-light text-obsidian tracking-wide">
                  Services
                </h3>
                <div className="w-8 h-px bg-accent/40"></div>
              </div>

              <div className="space-y-6">
                {Object.entries(serviceContent).map(([key, service], index) => {
                  const serviceUrls = {
                    strategy: "/services/strategy-planning",
                    branding: "/services/branding-design", 
                    tech: "/services/tech-software",
                    marketing: "/services/marketing-growth"
                  };
                  
                  return (
                    <motion.a
                      key={`mobile-service-${key}`}
                      href={serviceUrls[key as keyof typeof serviceUrls]}
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: index * 0.1,
                        duration: 0.4,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      className="group block space-y-3 py-4 border-b border-obsidian/10 last:border-b-0 hover:border-accent/30 transition-all duration-500"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl font-display font-light text-obsidian group-hover:text-accent transition-colors duration-300">
                          {service.title}
                        </h4>
                        <motion.div
                          initial={{ x: 0 }}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <svg className="w-5 h-5 text-obsidian/40 group-hover:text-accent transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </motion.div>
                      </div>
                      <p className="text-sm text-obsidian/60 font-light leading-relaxed group-hover:text-obsidian/80 transition-colors duration-300">
                        {service.description}
                      </p>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Work Section */}
            <div className="space-y-8">
              <div className="space-y-1">
                <h3 className="text-lg font-display font-light text-obsidian tracking-wide">
                  Work
                </h3>
                <div className="w-8 h-px bg-accent/40"></div>
              </div>

              <div className="space-y-6">
                <motion.a
                  href="/work"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: Object.keys(serviceContent).length * 0.1,
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="group flex items-center justify-between py-3 border-b border-obsidian/10 hover:border-accent/30 transition-all duration-500"
                >
                  <span className="text-lg font-display font-light text-obsidian group-hover:text-accent transition-colors duration-300">
                    Portfolio
                  </span>
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-5 h-5 text-obsidian/40 group-hover:text-accent transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </motion.a>

                <motion.a
                  href="/case-studies"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: (Object.keys(serviceContent).length + 1) * 0.1,
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="group flex items-center justify-between py-3 border-b border-obsidian/10 hover:border-accent/30 transition-all duration-500"
                >
                  <span className="text-lg font-display font-light text-obsidian group-hover:text-accent transition-colors duration-300">
                    Case Studies
                  </span>
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-5 h-5 text-obsidian/40 group-hover:text-accent transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </motion.a>
              </div>
            </div>

            {/* About Section */}
            <div className="space-y-8">
              <div className="space-y-1">
                <h3 className="text-lg font-display font-light text-obsidian tracking-wide">
                  About
                </h3>
                <div className="w-8 h-px bg-accent/40"></div>
              </div>

              <div className="space-y-6">
                <motion.a
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: (Object.keys(serviceContent).length + 2) * 0.1,
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="group flex items-center justify-between py-3 border-b border-obsidian/10 hover:border-accent/30 transition-all duration-500"
                >
                  <span className="text-lg font-display font-light text-obsidian group-hover:text-accent transition-colors duration-300">
                    Our Story
                  </span>
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-5 h-5 text-obsidian/40 group-hover:text-accent transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </motion.a>

                <motion.a
                  href="/approach"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: (Object.keys(serviceContent).length + 3) * 0.1,
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="group flex items-center justify-between py-3 border-b border-obsidian/10 hover:border-accent/30 transition-all duration-500"
                >
                  <span className="text-lg font-display font-light text-obsidian group-hover:text-accent transition-colors duration-300">
                    Our Approach
                  </span>
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-5 h-5 text-obsidian/40 group-hover:text-accent transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </motion.a>
              </div>
            </div>

            {/* Strategy Brief Section */}
            <div className="space-y-8">
              <motion.a
                href="/strategy-brief"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: (Object.keys(serviceContent).length + 4) * 0.1,
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="group flex items-center justify-between py-4 border border-accent/20 rounded-lg px-4 hover:border-accent/40 hover:bg-accent/5 transition-all duration-500"
              >
                <div>
                  <span className="text-lg font-display font-medium text-obsidian group-hover:text-accent transition-colors duration-300">
                    Strategy Brief
                  </span>
                  <p className="text-sm text-obsidian/60 mt-1">Get your AI-powered strategic analysis</p>
                </div>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-5 h-5 text-obsidian/40 group-hover:text-accent transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </motion.a>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: (Object.keys(serviceContent).length + 5) * 0.1,
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="pt-8 border-t border-obsidian/10"
            >
              <a 
                href="https://cal.com/bensegev/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="group relative w-full py-4 px-6 bg-obsidian text-bone rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center space-x-2">
                  <span className="font-display font-light tracking-wide">Book appointment</span>
                  <motion.svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    initial={{ x: 0 }}
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </div>
              </a>
            </motion.div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
} 