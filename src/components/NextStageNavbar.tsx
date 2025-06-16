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
  const [activeService, setActiveService] = useState<"strategy" | "brand" | "technology" | "growth">("strategy");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const serviceContent = {
    strategy: {
      title: "Strategy & Consulting",
      description: "Transform your business with strategic insights and expert guidance",
      services: [
        {
          name: "Business Strategy",
          description: "Comprehensive strategic planning and execution",
          href: "/services/strategy-consulting#business-strategy"
        },
        {
          name: "Brand Strategy", 
          description: "Position your brand for market leadership",
          href: "/services/strategy-consulting#brand-strategy"
        },
        {
          name: "Go-to-Market Planning",
          description: "Launch strategies that drive adoption", 
          href: "/services/strategy-consulting#gtm-planning"
        },
        {
          name: "Digital Transformation",
          description: "Modernize operations and technology",
          href: "/services/strategy-consulting#digital-transformation"
        }
      ],
      cta: {
        title: "Ready to get started?",
        description: "Let's discuss your strategic needs"
      }
    },
    brand: {
      title: "Brand & Design",
      description: "Create compelling experiences that resonate with your audience",
      services: [
        {
          name: "Brand Identity Systems",
          description: "Complete visual identity and brand guidelines",
          href: "#brand-identity"
        },
        {
          name: "Web Design & Development",
          description: "Modern, responsive websites that convert",
          href: "#web-design"
        },
        {
          name: "Marketing Design Systems",
          description: "Consistent design across all touchpoints",
          href: "#design-systems"
        },
        {
          name: "Digital Experience Design",
          description: "User-centered digital product design",
          href: "#ux-design"
        }
      ],
      cta: {
        title: "Transform your brand?",
        description: "Let's create something extraordinary"
      }
    },
    technology: {
      title: "Technology & Innovation", 
      description: "Build scalable solutions with cutting-edge technology",
      services: [
        {
          name: "Digital Product Development",
          description: "End-to-end product development lifecycle",
          href: "#product-development"
        },
        {
          name: "AI Solutions & Automation",
          description: "Intelligent automation for business processes",
          href: "#ai-solutions"
        },
        {
          name: "Platform Architecture",
          description: "Scalable, secure technology foundations",
          href: "#platform-architecture"
        },
        {
          name: "Rapid Prototyping",
          description: "Validate ideas quickly with working prototypes",
          href: "#prototyping"
        }
      ],
      cta: {
        title: "Ready to innovate?",
        description: "Let's build the future together"
      }
    },
    growth: {
      title: "Growth & Marketing",
      description: "Scale your business with data-driven marketing strategies",
      services: [
        {
          name: "Campaign Strategy",
          description: "Multi-channel campaigns that drive results",
          href: "#campaign-strategy"
        },
        {
          name: "Content Systems",
          description: "Scalable content creation and distribution",
          href: "#content-systems"
        },
        {
          name: "Marketing Technology",
          description: "Optimize your marketing technology stack",
          href: "#martech"
        },
        {
          name: "Performance Optimization",
          description: "Maximize ROI across all marketing channels",
          href: "#performance-optimization"
        }
      ],
      cta: {
        title: "Ready to accelerate growth?",
        description: "Let's scale your success"
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
               href="/services/strategy-consulting"
               onClick={() => setActiveService("strategy")}
               onMouseEnter={() => setActiveService("strategy")}
               className={`block w-full text-left px-4 py-3 hover:text-bone hover:bg-accent/10 rounded-lg transition-all duration-200 ${
                 activeService === "strategy" 
                   ? "text-bone border-l-2 border-accent bg-accent/5" 
                   : "text-bone/60"
               }`}
             >
               Strategy & Consulting
             </a>
             <a 
               href="/services/brand-design"
               onClick={() => setActiveService("brand")}
               onMouseEnter={() => setActiveService("brand")}
               className={`block w-full text-left px-4 py-3 hover:text-bone hover:bg-accent/10 rounded-lg transition-all duration-200 ${
                 activeService === "brand" 
                   ? "text-bone border-l-2 border-accent bg-accent/5" 
                   : "text-bone/60"
               }`}
             >
               Brand & Design
             </a>
             <a 
               href="/services/tech-innovation"
               onClick={() => setActiveService("technology")}
               onMouseEnter={() => setActiveService("technology")}
               className={`block w-full text-left px-4 py-3 hover:text-bone hover:bg-accent/10 rounded-lg transition-all duration-200 ${
                 activeService === "technology" 
                   ? "text-bone border-l-2 border-accent bg-accent/5" 
                   : "text-bone/60"
               }`}
             >
               Technology & Innovation
             </a>
             <a 
               href="/services/growth-marketing"
               onClick={() => setActiveService("growth")}
               onMouseEnter={() => setActiveService("growth")}
               className={`block w-full text-left px-4 py-3 hover:text-bone hover:bg-accent/10 rounded-lg transition-all duration-200 ${
                 activeService === "growth" 
                   ? "text-bone border-l-2 border-accent bg-accent/5" 
                   : "text-bone/60"
               }`}
             >
               Growth & Marketing
             </a>
           </nav>

          <div className="mt-8 pt-6 border-t border-accent/20">
            <a href="#all-services" className="flex items-center text-accent hover:text-accent/80 font-medium text-sm transition-colors">
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
               <a href="#contact" className="px-4 py-2 bg-accent text-obsidian rounded-lg font-medium hover:bg-accent/90 transition-colors">
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
                <img 
                  src="/images/ai-flow.png" 
                  alt="AI-Powered Strategy" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h5 className="font-medium text-gray-900 dark:text-white group-hover:text-accent transition-colors">AI-Powered Strategy</h5>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Leverage AI for strategic insights and competitive advantage</p>
            </div>

            <div className="group cursor-pointer">
              <div className="w-full h-32 rounded-lg mb-3 overflow-hidden border border-accent/20">
                <img 
                  src="/images/innovation-labs.png" 
                  alt="Innovation Labs" 
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

  const navItems = [
    {
      name: "What We Do",
      dropdown: servicesDropdown,
    },
    {
      name: "Work",
      link: "/work",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Our Approach",
      link: "/approach",
    },
  ];

  return (
    <Navbar className="fixed top-5 z-50">
      {/* Desktop Navigation */}
      <NavBody>
        <NextStageLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-3">
          <NavbarButton variant="primary">Get Started</NavbarButton>
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
                    strategy: "/services/strategy-consulting",
                    brand: "/services/brand-design", 
                    technology: "/services/tech-innovation",
                    growth: "/services/growth-marketing"
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

            {/* Navigation Section */}
            <div className="space-y-8">
              <div className="space-y-1">
                <h3 className="text-lg font-display font-light text-obsidian tracking-wide">
                  Explore
                </h3>
                <div className="w-8 h-px bg-accent/40"></div>
              </div>

              <div className="space-y-6">
                {navItems.slice(1).map((item, index) => (
                  <motion.a
                    key={`mobile-nav-${item.name.replace(/\s+/g, '-').toLowerCase()}-${index}`}
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: (Object.keys(serviceContent).length + index) * 0.1,
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="group flex items-center justify-between py-3 border-b border-obsidian/10 last:border-b-0 hover:border-accent/30 transition-all duration-500"
                  >
                    <span className="text-lg font-display font-light text-obsidian group-hover:text-accent transition-colors duration-300">
                      {item.name}
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
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: (Object.keys(serviceContent).length + navItems.slice(1).length) * 0.1,
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="pt-8 border-t border-obsidian/10"
            >
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="group relative w-full py-4 px-6 bg-obsidian text-bone rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center space-x-2">
                  <span className="font-display font-light tracking-wide">Get Started</span>
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
              </button>
            </motion.div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
} 