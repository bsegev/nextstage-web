import { TrendingUp, Zap, CheckCircle, Target, Rocket, Code } from 'lucide-react';
import { PerformanceMetricsData } from '@/components/deliverables/service-layout/DeliverablePerformanceMetrics';
import { MethodologyItem } from '@/components/deliverables/service-layout/DeliverableMethodology';

export const mvpDevelopmentDeliverable = {
  // Hero (Above the fold)
  title: "MVP Development",
  tagline: "Strategic product validation that accelerates market entry",
  description: "Where your product vision meets market reality—creating minimum viable products that validate assumptions and drive customer-informed development.",
  
  // The NextStage Way
  ourApproach: {
    headline: "Product strategy, validation framework & technical development working together",
    description: "We don't just build prototypes, we design validation systems. Our MVP approach combines strategic thinking with technical development to create products that test market assumptions and inform strategic decisions.",
    keyPrinciple: "MVP development that drives market validation, not just feature demonstration"
  },
  
  // What This Actually Is
  whatItIs: {
    realDefinition: "A minimum viable product that validates market assumptions and informs strategic product development decisions.",
    notJust: "A basic prototype or feature-limited version",
    butAlso: "Validation system that tests market assumptions and provides feedback collection tools"
  },
  
  // The Process
  process: [
    {
      phase: "Define",
      whatWeDo: "Identify core product assumptions and validation requirements",
      whatEmerges: "Clear MVP scope and validation framework for market testing"
    },
    {
      phase: "Design",
      whatWeDo: "Create user experience and technical architecture for rapid development",
      whatEmerges: "Strategic product design optimized for validation and customer feedback"
    },
    {
      phase: "Build",
      whatWeDo: "Develop minimum viable product with focus on core value proposition",
      whatEmerges: "Functional MVP ready for market validation and customer testing"
    },
    {
      phase: "Launch",
      whatWeDo: "Deploy MVP and create frameworks for feedback integration and strategic analysis",
      whatEmerges: "Complete validation system that enables market feedback collection and data-driven decisions"
    }
  ],
  
  // Business Value
  outcomes: {
    primary: "Strategic product validation that accelerates market entry and reduces development risk",
    secondary: "Customer-validated product foundation that guides strategic development decisions",
    longTerm: "Iterative product development framework that scales with market feedback and business growth"
  },
  
  // Discovery
  discovery: {
    price: "$250",
    duration: "60 minutes",
    whatWeExplore: [
      "Your product vision and core value proposition for market validation",
      "Target customer assumptions and validation requirements",
      "Technical requirements and development constraints for MVP creation",
      "Market entry strategy and customer feedback integration priorities"
    ],
    whatYouGet: [
      "MVP scope assessment and validation framework recommendations",
      "Product development strategy and technical architecture approach",
      "Market validation planning and customer feedback integration roadmap",
      "Full discovery credit toward project"
    ]
  },

  // Performance Metrics
  performanceMetrics: {
    title: "MVP Development Impact",
    description: "What happens when product validation actually accelerates market entry",
    metric: {
      value: "50%",
      number: 50,
      label: "Faster Product Launch",
      description: "Teams using strategic MVP development processes bring new products to market 50% faster than traditional approaches",
      source: "McKinsey management consulting firm 2025 project data",
      icon: Rocket
    },
    bottomMessage: "MVP development that transforms product validation into competitive market advantage"
  } as PerformanceMetricsData,

  // Methodology
  methodology: {
    title: "Everything you need for strategic product validation",
    subtitle: "Our MVP development process combines product strategy with technical development to create validation systems that accelerate market entry and inform strategic decisions.",
    items: [
      {
        title: "Product Strategy & Validation Planning",
        description: "Define MVP scope and market validation framework",
        icon: Target,
        details: {
          overview: "We work with your product vision to identify core assumptions that need validation and design MVP scope that tests market viability with minimal development investment.",
          whatYouGet: [
            "Product strategy analysis with core assumption identification and validation planning",
            "MVP scope definition focused on market validation and customer feedback generation",
            "Validation framework and customer feedback methodology design",
            "Market entry strategy aligned with MVP launch and feedback integration"
          ],
          process: [
            "Product vision analysis and core assumption identification for validation planning",
            "MVP scope planning and validation requirement definition",
            "Validation methodology design and customer feedback framework creation",
            "Market validation strategy development and launch planning"
          ],
          outcome: "Clear MVP strategy that focuses development effort on market validation and provides framework for customer-informed product decisions."
        }
      },
      {
        title: "Technical Development & User Experience Design",
        description: "Build functional MVP optimized for validation and customer feedback",
        icon: Code,
        details: {
          overview: "Based on validation strategy, we design and develop minimum viable product that delivers core value proposition while enabling effective customer feedback and market testing.",
          whatYouGet: [
            "User experience design optimized for validation and customer feedback collection",
            "Technical architecture and development approach for rapid MVP creation",
            "Functional MVP with core features that test key market assumptions",
            "Integration systems for customer feedback and usage analytics collection"
          ],
          process: [
            "User experience design and customer interaction planning for validation optimization",
            "Technical architecture development and rapid prototyping methodology",
            "MVP development with focus on core value proposition and validation features",
            "Analytics and feedback integration for customer insight generation"
          ],
          outcome: "A functional MVP that effectively tests market assumptions and provides clear customer feedback for strategic product development decisions."
        }
      },
      {
        title: "MVP Launch & Feedback Framework",
        description: "Deploy MVP and build systems that enable strategic feedback integration",
        icon: CheckCircle,
        details: {
          overview: "Create systematic framework for market validation by building feedback collection systems and analysis tools that enable your team to gather market insights and make data-driven decisions.",
          whatYouGet: [
            "MVP deployment strategy with integrated feedback collection systems and tracking setup",
            "Validation framework and feedback analysis tools for your team to generate strategic insights",
            "Product iteration planning templates based on validation data and market response patterns",
            "Strategic development roadmap framework informed by validation metrics and business objectives"
          ],
          process: [
            "MVP deployment and feedback system integration with tracking and collection tools",
            "Validation framework development and feedback analysis template creation for your team",
            "Market response tracking setup and product iteration planning framework development",
            "Strategic roadmap framework creation based on validation methodology and business metrics"
          ],
          outcome: "A complete validation system that enables your team to transform market feedback into strategic product decisions and accelerated market entry."
        }
      }
    ] as MethodologyItem[]
  }
};