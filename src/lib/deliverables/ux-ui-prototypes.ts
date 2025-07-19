import { TrendingUp, Zap, CheckCircle, Target, Figma, Users } from 'lucide-react';
import { PerformanceMetricsData } from '@/components/deliverables/service-layout/DeliverablePerformanceMetrics';
import { MethodologyItem } from '@/components/deliverables/service-layout/DeliverableMethodology';

export const uxUiPrototypesDeliverable = {
  // Hero (Above the fold)
  title: "UX/UI Prototypes",
  tagline: "Strategic design validation that prevents costly development mistakes",
  description: "Where your product vision meets user reality—creating interactive prototypes that validate concepts and optimize user experience before development.",
  
  // The NextStage Way
  ourApproach: {
    headline: "User intelligence, design thinking & expert validation working together",
    description: "We don't just create pretty interfaces, we design validation systems. Our prototyping combines user intelligence with strategic design to validate concepts and prevent costly development mistakes.",
    keyPrinciple: "UX/UI prototypes that drive product validation, not just design visualization"
  },
  
  // What This Actually Is
  whatItIs: {
    realDefinition: "Interactive prototypes for design validation and user experience optimization before full development.",
    notJust: "Static wireframes or visual design concepts",
    butAlso: "Validation tool that tests design concepts and optimizes experience through expert analysis"
  },
  
  // The Process
  process: [
    {
      phase: "Research",
      whatWeDo: "Analyze user needs and define design validation requirements",
      whatEmerges: "Clear understanding of user expectations and prototype testing objectives"
    },
    {
      phase: "Design",
      whatWeDo: "Create user interface concepts and interactive design architecture",
      whatEmerges: "Strategic design framework optimized for user experience and validation testing"
    },
    {
      phase: "Prototype",
      whatWeDo: "Build interactive prototypes with realistic functionality and user flows",
      whatEmerges: "Functional prototype enabling comprehensive design analysis and concept validation"
    },
    {
      phase: "Optimize",
      whatWeDo: "Conduct expert analysis of prototypes and optimize design based on UX principles",
      whatEmerges: "Validated design direction that reduces development risk and improves user adoption potential"
    }
  ],
  
  // Business Value
  outcomes: {
    primary: "Validated user experience design that reduces development risk and prevents costly redesigns",
    secondary: "Expert-analyzed interface that optimizes adoption potential and engagement before full development",
    longTerm: "Design validation framework that scales with product development and UX best practice integration"
  },
  
  // Discovery
  discovery: {
    price: "$250",
    duration: "60 minutes",
    whatWeExplore: [
      "Your product concept and user experience requirements for design validation",
      "Target users and usability challenges requiring prototype analysis and optimization",
      "Design assumptions and interface concepts needing expert validation before development",
      "Development timeline and design validation priorities for risk reduction"
    ],
    whatYouGet: [
      "UX/UI strategy assessment showing design validation opportunities and optimization priorities",
      "Prototype development recommendations and expert validation approach",
      "Design validation scope and UX analysis planning for development risk reduction",
      "Full discovery credit toward project"
    ]
  },

  // Performance Metrics
  performanceMetrics: {
    title: "UX/UI Prototype Impact",
    description: "What happens when design validation actually prevents development mistakes",
    metric: {
      value: "25-40%",
      number: 40,
      label: "Reduction in Costly Redesigns",
      description: "Early UX/UI prototyping to validate product concepts delivers a reduction in costly redesigns by 25–40%",
      source: "EY Insights on Tech Sector and Product Innovation 2025, McKinsey Digital Transformation Research 2025",
      icon: Figma
    },
    bottomMessage: "UX/UI prototypes that transform design validation into development cost savings and user adoption"
  } as PerformanceMetricsData,

  // Methodology
  methodology: {
    title: "Everything you need for strategic design validation",
    subtitle: "Our UX/UI prototype process combines user research with design thinking to create validated interfaces that optimize user experience and reduce development risk.",
    items: [
      {
        title: "User Intelligence & Design Strategy",
        description: "Understand user needs and define optimal interface validation approach",
        icon: Users,
        details: {
          overview: "We analyze user intelligence and behavior patterns to understand needs and preferences that inform strategic design decisions and prototype validation requirements.",
          whatYouGet: [
            "User intelligence analysis showing behavior patterns and design requirements for optimal experience",
            "Design strategy framework aligned with user needs and business objectives",
            "Interface concept development based on user intelligence and usability best practices",
            "Validation methodology with expert analysis approach and success criteria definition"
          ],
          process: [
            "User intelligence development and behavior analysis to inform design strategy and validation planning",
            "Design requirement identification and interface concept development based on user insights",
            "Validation strategy creation with expert analysis methodology and success metrics",
            "Design framework development that balances user needs with business objectives"
          ],
          outcome: "Strategic design foundation with user intelligence insights that guide prototype development and validation for optimal user experience and adoption."
        }
      },
      {
        title: "Interactive Prototype Development",
        description: "Create functional prototypes optimized for expert analysis and validation",
        icon: Figma,
        details: {
          overview: "Based on design strategy, we create interactive prototypes with realistic functionality that enable comprehensive expert analysis and concept validation before development.",
          whatYouGet: [
            "Interactive prototype with realistic user interface and functional user flows",
            "Design system and component library ensuring consistency and scalability",
            "Expert analysis framework with scenarios and evaluation criteria for comprehensive validation",
            "Prototype documentation and design specifications for development handoff"
          ],
          process: [
            "Interactive prototype development with realistic functionality and user interface design",
            "Design system creation and component development for consistency and scalability",
            "Expert analysis scenario development and validation criteria creation for comprehensive evaluation",
            "Design specification documentation and development handoff preparation"
          ],
          outcome: "Comprehensive interactive prototype that enables effective expert analysis and provides validated design foundation for development cost reduction."
        }
      },
      {
        title: "Design Analysis & UX Optimization",
        description: "Validate prototypes through expert analysis and optimize design for maximum adoption",
        icon: CheckCircle,
        details: {
          overview: "Conduct systematic design analysis with prototype to validate design concepts and optimize user experience based on UX best practices and industry standards.",
          whatYouGet: [
            "Expert design analysis with comprehensive UX evaluation and optimization recommendations",
            "Design optimization recommendations based on usability principles and industry best practices",
            "Validated design specifications ready for development with reduced redesign risk",
            "User experience guidelines and design system documentation for ongoing consistency"
          ],
          process: [
            "Comprehensive design analysis with prototype evaluation against UX best practices",
            "Usability assessment and design optimization based on interface principles and standards",
            "Design refinement and validation confirmation for development readiness",
            "Design system documentation and UX guideline development for consistency"
          ],
          outcome: "Validated user experience design that minimizes development risk and maximizes adoption potential through systematic analysis and optimization."
        }
      }
    ] as MethodologyItem[]
  }
};