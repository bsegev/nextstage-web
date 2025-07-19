'use client';

import { motion } from 'framer-motion';
import { 
  ElegantModal, 
  ModalTrigger, 
  ModalBody, 
  ModalContent 
} from './ElegantModal';
import { 
  Target, 
  TrendingUp, 
  CheckCircle2,
  ArrowRight,
  Layers,
  Network,
  Zap
} from 'lucide-react';

export interface MethodologyItem {
  title: string;
  description: string;
  icon: any;
  details: {
    overview: string;
    whatYouGet: string[];
    process: string[];
    outcome: string;
  };
}

interface DeliverableMethodologyProps {
  title: string;
  subtitle?: string;
  items: MethodologyItem[];
}

export default function DeliverableMethodology({ 
  title, 
  subtitle,
  items 
}: DeliverableMethodologyProps) {

  return (
    <section className="py-16 bg-gradient-to-br from-bone via-gray-50/50 to-bone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 sm:mb-8 text-sm sm:text-sm font-medium text-obsidian/60 tracking-wide uppercase">
            <span>Systematic Approach</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-4">
            <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              {title}
            </span>
          </h2>
          
          {subtitle && (
            <p className="text-lg text-obsidian/70 font-light max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Methodology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const IconComponent = item.icon;
            
            return (
              <ElegantModal key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <ModalTrigger className="w-full h-full text-left">
                    <div className="relative p-6 bg-white border border-gray-200 rounded-2xl transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-lg group-hover:shadow-accent/10 group-hover:-translate-y-1">
                      
                      {/* Background Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-accent/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                      
                      {/* Content */}
                      <div className="relative">
                        
                        {/* Icon */}
                        <div className="mb-4">
                          <div className="w-12 h-12 bg-obsidian rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                            <IconComponent className="w-6 h-6 text-accent" />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-xl font-semibold text-obsidian mb-3 group-hover:text-accent transition-colors duration-300">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-obsidian/60 leading-relaxed mb-4 font-light">
                          {item.description}
                        </p>

                        {/* Learn More Indicator */}
                        <div className="flex items-center text-sm text-obsidian font-medium group-hover:gap-2 transition-all duration-300">
                          <span>Explore approach</span>
                          <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform duration-300" />
                        </div>

                        {/* Hover Accent Line */}
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent/50 group-hover:w-full transition-all duration-500" />
                      </div>
                    </div>
                  </ModalTrigger>
                </motion.div>

                <ModalBody>
                  <ModalContent>
                    <div className="space-y-6">
                      
                      {/* Modal Header */}
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-obsidian rounded-xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-display text-2xl font-semibold text-obsidian mb-2">
                            {item.title}
                          </h3>
                          <p className="text-obsidian/70 leading-relaxed">
                            {item.details.overview}
                          </p>
                        </div>
                      </div>

                      {/* What You Get */}
                      <div>
                        <h4 className="font-semibold text-obsidian mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent" />
                          Core Deliverables
                        </h4>
                        <div className="space-y-2">
                          {item.details.whatYouGet.map((benefit, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-start gap-3 text-obsidian/70"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm leading-relaxed">{benefit}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Process */}
                      <div>
                        <h4 className="font-semibold text-obsidian mb-3 flex items-center gap-2">
                          <Target className="w-5 h-5 text-accent" />
                          Our Process
                        </h4>
                        <div className="space-y-3">
                          {item.details.process.map((step, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-start gap-3"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 + idx * 0.1 }}
                            >
                              <div className="w-6 h-6 bg-obsidian rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-semibold text-accent">{idx + 1}</span>
                              </div>
                              <span className="text-sm text-obsidian/70 leading-relaxed">{step}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Outcome */}
                      <div className="p-4 bg-accent/5 rounded-xl border border-accent/20">
                        <h4 className="font-semibold text-obsidian mb-2 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-accent" />
                          Expected Outcome
                        </h4>
                        <p className="text-sm text-obsidian/70 leading-relaxed">
                          {item.details.outcome}
                        </p>
                      </div>

                    </div>
                  </ModalContent>
                </ModalBody>
              </ElegantModal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

// Example data structure for easy reuse
export const defaultMethodologyItems: MethodologyItem[] = [
  {
    title: "Strategic Foundation",
    description: "This deliverable provides focused strategic direction. For comprehensive planning, it integrates seamlessly with our market research and competitive analysis services.",
    icon: Layers,
    details: {
      overview: "We start by understanding your business goals, market position, and competitive landscape to create a strategic foundation that guides all decisions.",
      whatYouGet: [
        "Comprehensive market analysis and competitive positioning",
        "Clear business objectives and success metrics",
        "Strategic roadmap with prioritized initiatives",
        "Stakeholder alignment and buy-in framework"
      ],
      process: [
        "Discovery interviews with key stakeholders",
        "Market research and competitive analysis",
        "Strategic framework development",
        "Stakeholder workshop and alignment session"
      ],
      outcome: "A clear strategic direction that everyone understands and commits to, providing the foundation for all subsequent design and technology decisions."
    }
  },
  {
    title: "Experience Design",
    description: "This deliverable creates compelling user experiences. For deeper impact, it can be enhanced with our market intelligence and user research services.",
    icon: Network,
    details: {
      overview: "Transform strategic insights into compelling user experiences that drive engagement and conversion through thoughtful design and user-centered thinking.",
      whatYouGet: [
        "User journey mapping and experience optimization",
        "Visual design system and brand guidelines", 
        "Interactive prototypes and design specifications",
        "Usability testing and validation framework"
      ],
      process: [
        "User research and persona development",
        "Information architecture and wireframing",
        "Visual design and interaction design",
        "Prototype testing and iteration"
      ],
      outcome: "A cohesive, user-centered design that not only looks exceptional but drives measurable business results through improved user engagement."
    }
  },
  {
    title: "Technical Implementation",
    description: "This deliverable builds robust technical solutions. For strategic alignment, it can be integrated with our business strategy and platform development services.",
    icon: Zap,
    details: {
      overview: "Bring designs to life with clean, efficient code that's built for performance, scalability, and maintainability from day one.",
      whatYouGet: [
        "Modern, scalable technology architecture",
        "High-performance, SEO-optimized implementation",
        "Quality assurance and testing protocols",
        "Documentation and knowledge transfer"
      ],
      process: [
        "Technical planning and architecture design",
        "Agile development with regular check-ins",
        "Quality assurance and performance testing",
        "Deployment and post-launch optimization"
      ],
      outcome: "A robust, scalable solution that performs excellently today and can evolve with your business needs over time."
    }
  }
]; 