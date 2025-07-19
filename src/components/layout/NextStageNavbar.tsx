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
import { 
  IconTarget, 
  IconPalette, 
  IconCode, 
  IconRocket, 
  IconTrendingUp, 
  IconCurrency,
  IconChartLine
} from '@tabler/icons-react';

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
  const [activeTrack, setActiveTrack] = useState<"launch" | "growth" | "fundraising">("launch");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const serviceContent = {
    strategy: {
      title: "Strategy & Planning",
      description: "The brain • What to do",
      services: [
        {
          name: "Business Strategy",
          href: "/deliverables/business-strategy"
        },
        {
          name: "Market Research",
          href: "/deliverables/market-research"
        },
        {
          name: "Competitive Analysis",
          href: "/deliverables/competitive-analysis"
        },
        {
          name: "Financial Planning",
          href: "/deliverables/financial-planning"
        },
        {
          name: "Go-to-Market Strategy",
          href: "/deliverables/go-to-market-strategy"
        },
        {
          name: "Product Strategy",
          href: "/deliverables/product-strategy"
        },
        {
          name: "Strategic Partnerships",
          href: "/deliverables/strategic-partnerships"
        },
        {
          name: "Business Intelligence",
          href: "/deliverables/business-intelligence"
        }
      ],
      cta: {
        title: "Ready to build your strategic advantage?",
        description: "Let's create your roadmap to success"
      }
    },
    branding: {
      title: "Branding & Design",
      description: "The face • How to present it",
      services: [
        {
          name: "Brand Identity",
          href: "/deliverables/brand-identity"
        },
        {
          name: "Website Design",
          href: "/deliverables/website-design"
        },
        {
          name: "Brand Strategy",
          href: "/deliverables/brand-strategy"
        },
        {
          name: "Marketing Collateral",
          href: "/deliverables/marketing-collateral"
        },
        {
          name: "Pitch Deck Design",
          href: "/deliverables/pitch-deck-design"
        },
        {
          name: "Social Media Assets",
          href: "/deliverables/social-media-assets"
        },
        {
          name: "Content Strategy",
          href: "/deliverables/content-strategy"
        },
        {
          name: "Digital Brand Management",
          href: "/deliverables/digital-brand-management"
        }
      ],
      cta: {
        title: "Ready to elevate your brand?",
        description: "Let's create experiences that convert"
      }
    },
    tech: {
      title: "Tech & Software", 
      description: "The engine • How to build it",
      services: [
        {
          name: "Custom GPT Development",
          href: "/deliverables/custom-gpt-development"
        },
        {
          name: "Workflow Automation",
          href: "/deliverables/workflow-automation"
        },
        {
          name: "Digital Transformation",
          href: "/deliverables/digital-transformation"
        },
        {
          name: "MVP Development",
          href: "/deliverables/mvp-development"
        },
        {
          name: "Interactive Demo",
          href: "/deliverables/interactive-demo"
        },
        {
          name: "UX/UI Prototypes",
          href: "/deliverables/ux-ui-prototypes"
        },
        {
          name: "Productivity Stack Setup",
          href: "/deliverables/productivity-stack-setup"
        },
        {
          name: "Software Consulting",
          href: "/deliverables/software-consulting"
        }
      ],
      cta: {
        title: "Ready to build your platform?",
        description: "Let's create technology that scales"
      }
    },
    marketing: {
      title: "Marketing & Growth",
      description: "The fuel • How to scale it",
      services: [
        {
          name: "Performance Marketing",
          href: "/deliverables/performance-marketing"
        },
        {
          name: "Content Marketing Systems",
          href: "/deliverables/content-marketing-systems"
        },
        {
          name: "Email Marketing Automation",
          href: "/deliverables/email-marketing-automation"
        },
        {
          name: "Conversion Rate Optimization",
          href: "/deliverables/conversion-rate-optimization"
        },
        {
          name: "Customer Acquisition Strategy",
          href: "/deliverables/customer-acquisition-strategy"
        },
        {
          name: "Marketing Analytics Setup",
          href: "/deliverables/marketing-analytics-setup"
        },
        {
          name: "Sales Funnel Development",
          href: "/deliverables/sales-funnel-development"
        },
        {
          name: "Growth Strategy",
          href: "/deliverables/growth-strategy"
        }
      ],
      cta: {
        title: "Ready to accelerate your growth?",
        description: "Let's build systems that scale"
      }
    }
  };

  const trackContent = {
    launch: {
      title: "Launch Your Business",
      description: "You have a vision but need the foundation to bring it to market successfully",
      services: [
        {
          name: "Market Research",
          href: "/deliverables/market-research"
        },
        {
          name: "Competitive Positioning",
          href: "/deliverables/competitive-analysis"
        },
        {
          name: "Brand Identity & Website",
          href: "/deliverables/brand-identity"
        },
        {
          name: "Social Media Assets",
          href: "/deliverables/social-media-assets"
        },
        {
          name: "MVP Development",
          href: "/deliverables/mvp-development"
        },
        {
          name: "Go-to-Market Strategy",
          href: "/deliverables/go-to-market-strategy"
        }
      ],
      cta: {
        title: "Ready to turn your vision into reality?",
        description: "Let's build the foundation for your launch"
      }
    },
    growth: {
      title: "Scale Your Business",
      description: "You're making money but hitting walls and need systematic growth",
      services: [
        {
          name: "Brand Audit & Evolution",
          href: "/deliverables/brand-identity"
        },
        {
          name: "Marketing Collateral System",
          href: "/deliverables/marketing-collateral"
        },
        {
          name: "Sales Decks & Materials",
          href: "/deliverables/marketing-collateral"
        },
        {
          name: "Content Automation",
          href: "/deliverables/content-automation-systems"
        },
        {
          name: "Email Templates & Sequences",
          href: "/deliverables/marketing-collateral"
        },
        {
          name: "Process Optimization",
          href: "/deliverables/business-process-automation"
        }
      ],
      cta: {
        title: "Ready to break through your growth ceiling?",
        description: "Let's systematize your path to scale"
      }
    },
    fundraising: {
      title: "Prepare for Fundraising",
      description: "You need capital to grow but investors require proof and professionalism",
      services: [
        {
          name: "Pitch Deck Design",
          href: "/deliverables/pitch-deck-design"
        },
        {
          name: "Pitch Coaching & Narrative",
          href: "/deliverables/brand-messaging-framework"
        },
        {
          name: "Brand Enhancement",
          href: "/deliverables/brand-identity"
        },
        {
          name: "Investment Messaging",
          href: "/deliverables/brand-messaging-framework"
        },
        {
          name: "Demo/Prototype Enhancement",
          href: "/deliverables/mvp-development"
        },
        {
          name: "Financial Models & Projections",
          href: "/deliverables/financial-planning"
        }
      ],
      cta: {
        title: "Ready to attract serious investors?",
        description: "Let's prepare materials that get you funded"
      }
    }
  };

  const servicesDropdown = (
    <div className="w-[1200px] bg-gradient-to-br from-white via-gray-50 to-accent/5 dark:from-black dark:via-neutral-900 dark:to-accent/5"
         role="menu"
         aria-label="Services and tracks navigation">
      <div className="grid grid-cols-12 min-h-[500px]">
        {/* Left Navigation */}
        <div className="col-span-3 bg-obsidian/95 p-8 flex flex-col">
          <div className="mb-8">
            <h3 className="text-2xl font-display font-semibold text-bone mb-2">What We Do</h3>
            <p className="text-bone/60 text-sm leading-relaxed">Complete solutions for every stage of your journey</p>
          </div>
          
          {/* Core Capabilities */}
          <nav className="space-y-1 flex-1" role="menubar" aria-label="Core capabilities">
            <div className="mb-6">
              <h4 className="text-xs font-medium text-bone/40 uppercase tracking-wider mb-4">Core Capabilities</h4>
              <div className="space-y-2" role="group">
                <a 
                  href="/services/strategy-planning"
                  role="menuitem"
                  tabIndex={0}
                  onClick={() => setActiveService("strategy")}
                  onMouseEnter={() => setActiveService("strategy")}
                  onFocus={() => setActiveService("strategy")}
                  className={`flex items-center gap-3 w-full text-left px-4 py-3 hover:text-bone hover:bg-accent/10 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                    activeService === "strategy" 
                      ? "text-bone border-l-2 border-accent bg-accent/5" 
                      : "text-bone/60"
                  }`}
                  aria-describedby="strategy-desc"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-obsidian/80 rounded-lg flex items-center justify-center">
                    <IconTarget className="w-4 h-4 text-accent" />
                  </div>
                  <span>Strategy & Planning</span>
                </a>
                <a 
                  href="/services/branding-design"
                  role="menuitem"
                  tabIndex={0}
                  onClick={() => setActiveService("branding")}
                  onMouseEnter={() => setActiveService("branding")}
                  onFocus={() => setActiveService("branding")}
                  className={`flex items-center gap-3 w-full text-left px-4 py-3 hover:text-bone hover:bg-accent/10 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                    activeService === "branding" 
                      ? "text-bone border-l-2 border-accent bg-accent/5" 
                      : "text-bone/60"
                  }`}
                  aria-describedby="branding-desc"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-obsidian/80 rounded-lg flex items-center justify-center">
                    <IconPalette className="w-4 h-4 text-accent" />
                  </div>
                  <span>Branding & Design</span>
                </a>
                <a 
                  href="/services/tech-software"
                  role="menuitem"
                  tabIndex={0}
                  onClick={() => setActiveService("tech")}
                  onMouseEnter={() => setActiveService("tech")}
                  onFocus={() => setActiveService("tech")}
                  className={`flex items-center gap-3 w-full text-left px-4 py-3 hover:text-bone hover:bg-accent/10 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                    activeService === "tech" 
                      ? "text-bone border-l-2 border-accent bg-accent/5" 
                      : "text-bone/60"
                  }`}
                  aria-describedby="tech-desc"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-obsidian/80 rounded-lg flex items-center justify-center">
                    <IconCode className="w-4 h-4 text-accent" />
                  </div>
                  <span>Tech & Software</span>
                </a>
                <a 
                  href="/services/marketing-growth"
                  role="menuitem"
                  tabIndex={0}
                  onClick={() => setActiveService("marketing")}
                  onMouseEnter={() => setActiveService("marketing")}
                  onFocus={() => setActiveService("marketing")}
                  className={`flex items-center gap-3 w-full text-left px-4 py-3 hover:text-bone hover:bg-accent/10 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                    activeService === "marketing" 
                      ? "text-bone border-l-2 border-accent bg-accent/5" 
                      : "text-bone/60"
                  }`}
                  aria-describedby="marketing-desc"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-obsidian/80 rounded-lg flex items-center justify-center">
                    <IconChartLine className="w-4 h-4 text-accent" />
                  </div>
                  <span>Marketing & Growth</span>
                </a>
              </div>
            </div>


          </nav>

          <div className="mt-8 pt-6 border-t border-accent/20">
            <a href="/services" className="flex items-center text-accent hover:text-accent/80 font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 rounded">
              View All Services
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Center Content */}
        <div className="col-span-6 p-8">
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2" id={`${activeService}-desc`}>
              {serviceContent[activeService].title}
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{serviceContent[activeService].description}</p>
          </div>

              <div className="grid grid-cols-2 gap-10">
                <div className="space-y-5">
                  {serviceContent[activeService].services.slice(0, 4).map((service, idx) => (
                    <a key={idx} href={service.href} className="block group focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-xl transition-all duration-200">
                      <div className="p-5 bg-gray-50/30 dark:bg-gray-800/30 rounded-xl border border-gray-200/30 dark:border-gray-700/30 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 hover:border-accent/30 group-focus:border-accent/50 hover:shadow-sm">
                        <h5 className="font-medium text-gray-900 dark:text-white transition-colors text-sm">
                          {service.name}
                        </h5>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="space-y-5">
                  {serviceContent[activeService].services.slice(4, 8).map((service, idx) => (
                    <a key={idx} href={service.href} className="block group focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-xl transition-all duration-200">
                      <div className="p-5 bg-gray-50/30 dark:bg-gray-800/30 rounded-xl border border-gray-200/30 dark:border-gray-700/30 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 hover:border-accent/30 group-focus:border-accent/50 hover:shadow-sm">
                        <h5 className="font-medium text-gray-900 dark:text-white transition-colors text-sm">
                          {service.name}
                        </h5>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200 dark:border-gray-700 mt-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-white">{serviceContent[activeService].cta.title}</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{serviceContent[activeService].cta.description}</p>
                  </div>
                  <a href="#contact" className="px-4 py-2 bg-accent text-obsidian rounded-lg font-medium hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50">
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

  // Tracks dropdown
  const tracksDropdown = (
    <div className="w-[800px] bg-gradient-to-br from-white via-gray-50 to-accent/5 dark:from-black dark:via-neutral-900 dark:to-accent/5"
         role="menu"
         aria-label="NextStage tracks navigation">
      <div className="grid grid-cols-12 min-h-[400px]">
        {/* Left Navigation */}
        <div className="col-span-4 bg-obsidian/95 p-8 flex flex-col">
          <div className="mb-8">
            <h3 className="text-2xl font-display font-semibold text-bone mb-2">NextStage Tracks</h3>
            <p className="text-bone/60 text-sm leading-relaxed">Goal-oriented journeys for every business stage</p>
          </div>
          
          <nav className="space-y-1 flex-1" role="menubar" aria-label="NextStage tracks">
            <div className="space-y-1" role="group">
              <button 
                type="button"
                role="menuitem"
                tabIndex={0}
                onClick={(e) => { e.preventDefault(); setActiveTrack("launch"); }}
                onMouseEnter={() => setActiveTrack("launch")}
                onFocus={() => setActiveTrack("launch")}
                className={`flex items-center gap-3 w-full text-left px-4 py-3 hover:text-bone hover:bg-accent/10 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                  activeTrack === "launch" 
                    ? "text-bone border-l-2 border-accent bg-accent/5" 
                    : "text-bone/60"
                }`}
                aria-describedby="launch-desc"
              >
                <div className="flex-shrink-0 w-7 h-7 bg-obsidian/80 rounded-lg flex items-center justify-center">
                  <IconRocket className="w-3.5 h-3.5 text-accent" />
                </div>
                <span>Launch</span>
              </button>
              <button 
                type="button"
                role="menuitem"
                tabIndex={0}
                onClick={(e) => { e.preventDefault(); setActiveTrack("growth"); }}
                onMouseEnter={() => setActiveTrack("growth")}
                onFocus={() => setActiveTrack("growth")}
                className={`flex items-center gap-3 w-full text-left px-4 py-3 hover:text-bone hover:bg-accent/10 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                  activeTrack === "growth" 
                    ? "text-bone border-l-2 border-accent bg-accent/5" 
                    : "text-bone/60"
                }`}
                aria-describedby="growth-desc"
              >
                <div className="flex-shrink-0 w-7 h-7 bg-obsidian/80 rounded-lg flex items-center justify-center">
                  <IconTrendingUp className="w-3.5 h-3.5 text-accent" />
                </div>
                <span>Growth</span>
              </button>
              <button 
                type="button"
                role="menuitem"
                tabIndex={0}
                onClick={(e) => { e.preventDefault(); setActiveTrack("fundraising"); }}
                onMouseEnter={() => setActiveTrack("fundraising")}
                onFocus={() => setActiveTrack("fundraising")}
                className={`flex items-center gap-3 w-full text-left px-4 py-3 hover:text-bone hover:bg-accent/10 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                  activeTrack === "fundraising" 
                    ? "text-bone border-l-2 border-accent bg-accent/5" 
                    : "text-bone/60"
                }`}
                aria-describedby="fundraising-desc"
              >
                <div className="flex-shrink-0 w-7 h-7 bg-obsidian/80 rounded-lg flex items-center justify-center">
                  <IconCurrency className="w-3.5 h-3.5 text-accent" />
                </div>
                <span>Fundraising</span>
              </button>
            </div>
          </nav>

          <div className="mt-8 pt-6 border-t border-accent/20">
            <a href="/strategy-brief" className="flex items-center text-accent hover:text-accent/80 font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 rounded">
              Start Your Journey
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Center Content */}
        <div className="col-span-8 p-8">
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2" id={`${activeTrack}-desc`}>
              {trackContent[activeTrack].title}
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{trackContent[activeTrack].description}</p>
          </div>

          {/* Journey-style single column layout for tracks */}
          <div className="space-y-2 mb-6">
            {trackContent[activeTrack].services.map((service, idx) => (
              <a key={idx} href={service.href} className="block group focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-lg">
                <div className="flex items-center gap-4 p-2.5 bg-gray-50/50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-100/80 dark:hover:bg-gray-700/80 transition-all duration-200 border border-gray-200/50 dark:border-gray-700/50 hover:border-accent/30 group-focus:border-accent/50">
                  {/* Step number */}
                  <div className="flex-shrink-0 w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-xs font-semibold" aria-hidden="true">
                    {idx + 1}
                  </div>
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h5 className="font-medium text-gray-900 dark:text-white group-hover:text-accent group-focus:text-accent transition-colors text-sm">
                      {service.name}
                    </h5>
                  </div>
                  {/* Arrow */}
                  <div className="flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-accent group-focus:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white">{trackContent[activeTrack].cta.title}</h5>
                <p className="text-sm text-gray-500 dark:text-gray-400">{trackContent[activeTrack].cta.description}</p>
              </div>
              <a href="/strategy-brief" className="px-4 py-2 bg-accent text-obsidian rounded-lg font-medium hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50">
                Get Started
              </a>
            </div>
          </div>
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
      name: "NextStage Tracks",
      dropdown: tracksDropdown,
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
                    tech: "/services/tech-software"
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

            {/* NextStage Tracks Section */}
            <div className="space-y-8">
              <div className="space-y-1">
                <h3 className="text-lg font-display font-light text-obsidian tracking-wide">
                  NextStage Tracks
                </h3>
                <div className="w-8 h-px bg-accent/40"></div>
              </div>

              <div className="space-y-6">
                {Object.entries(trackContent).map(([key, track], index) => {
                  return (
                    <motion.button
                      key={`mobile-track-${key}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: (Object.keys(serviceContent).length + index) * 0.1,
                        duration: 0.4,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      className="group block space-y-3 py-4 border-b border-obsidian/10 last:border-b-0 hover:border-accent/30 transition-all duration-500 w-full text-left"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl font-display font-light text-obsidian group-hover:text-accent transition-colors duration-300">
                          {track.title}
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
                        {track.description}
                      </p>
                    </motion.button>
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
                    delay: (Object.keys(serviceContent).length + Object.keys(trackContent).length) * 0.1,
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
                    delay: (Object.keys(serviceContent).length + Object.keys(trackContent).length + 1) * 0.1,
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
                    delay: (Object.keys(serviceContent).length + Object.keys(trackContent).length) * 0.1,
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
                    delay: (Object.keys(serviceContent).length + Object.keys(trackContent).length + 1) * 0.1,
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
                  delay: (Object.keys(serviceContent).length + Object.keys(trackContent).length + 2) * 0.1,
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
                delay: (Object.keys(serviceContent).length + Object.keys(trackContent).length + 3) * 0.1,
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