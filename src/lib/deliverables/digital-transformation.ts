import { TrendingUp, Zap, CheckCircle, Target, Smartphone, Cloud } from 'lucide-react';
import { PerformanceMetricsData } from '@/components/deliverables/service-layout/DeliverablePerformanceMetrics';
import { MethodologyItem } from '@/components/deliverables/service-layout/DeliverableMethodology';

export const digitalTransformationDeliverable = {
  // Hero (Above the fold)
  title: "Digital Transformation",
  tagline: "Strategic technology modernization that drives growth and efficiency",
  description: "Where your business strategy meets digital innovation—creating integrated technology solutions that accelerate operations and competitive advantage.",
  
  // The NextStage Way
  ourApproach: {
    headline: "Business strategy, technology integration & implementation working together",
    description: "We don't just implement new tools, we transform business operations. Our approach combines strategic planning with technology integration to create digital capabilities that drive measurable business growth.",
    keyPrinciple: "Digital transformation that drives competitive advantage, not just technological modernization"
  },
  
  // What This Actually Is
  whatItIs: {
    realDefinition: "A digital modernization strategy that integrates technology throughout your business to improve operations and competitive positioning.",
    notJust: "Software upgrades or isolated technology implementations",
    butAlso: "Business transformation that leverages digital tools to create operational efficiency and competitive advantage"
  },
  
  // The Process
  process: [
    {
      phase: "Assess",
      whatWeDo: "Evaluate current digital capabilities and identify transformation opportunities",
      whatEmerges: "Clear understanding of digital gaps and strategic modernization priorities"
    },
    {
      phase: "Strategy",
      whatWeDo: "Design digital transformation roadmap aligned with business objectives",
      whatEmerges: "Comprehensive transformation plan with technology integration and business impact focus"
    },
    {
      phase: "Implement",
      whatWeDo: "Execute digital solutions with system integration and process optimization",
      whatEmerges: "Modernized digital infrastructure and optimized business operations"
    },
    {
      phase: "Scale",
      whatWeDo: "Optimize digital capabilities and enable ongoing transformation",
      whatEmerges: "Scalable digital foundation that drives continuous business improvement and growth"
    }
  ],
  
  // Business Value
  outcomes: {
    primary: "Digital capabilities that accelerate business operations and improve competitive positioning",
    secondary: "Modernized technology infrastructure that enhances customer experience and operational efficiency",
    longTerm: "Scalable digital foundation that enables continuous innovation and business growth"
  },
  
  // Discovery
  discovery: {
    price: "$250",
    duration: "60 minutes",
    whatWeExplore: [
      "Your current technology infrastructure and digital capability gaps",
      "Business objectives requiring digital transformation and modernization support",
      "Operational inefficiencies and customer experience challenges addressable through technology",
      "Digital transformation priorities and strategic technology investment requirements"
    ],
    whatYouGet: [
      "Digital readiness assessment showing transformation opportunities and business impact potential",
      "Digital transformation recommendations and strategic technology roadmap",
      "Technology integration scope and digital modernization priority planning",
      "Full discovery credit toward project"
    ]
  },

  // Performance Metrics
  performanceMetrics: {
    title: "Digital Transformation Impact",
    description: "What happens when digital transformation actually drives business results",
    metric: {
      value: "20-30%",
      number: 30,
      label: "Higher Profitability & Growth",
      description: "Businesses that embrace strategic digital modernization are experiencing 20–30% higher profitability and growth",
      source: "Accenture, Forbes Best Management Consulting Firms 2025",
      icon: Smartphone
    },
    bottomMessage: "Digital transformation that creates sustainable competitive advantage and business growth"
  } as PerformanceMetricsData,

  // Methodology
  methodology: {
    title: "Everything you need for digital transformation success",
    subtitle: "Our digital transformation process combines strategic planning with technology implementation to create digital capabilities that drive business growth and competitive advantage.",
    items: [
      {
        title: "Digital Strategy & Capability Assessment",
        description: "Evaluate digital readiness and define transformation strategy",
        icon: Target,
        details: {
          overview: "We assess your current digital capabilities and business requirements to identify transformation opportunities that deliver maximum business impact and competitive advantage.",
          whatYouGet: [
            "Comprehensive digital assessment showing current capabilities and transformation opportunities",
            "Digital strategy framework aligned with business objectives and growth priorities",
            "Technology evaluation and digital solution recommendations for operational improvement",
            "Transformation roadmap with priority initiatives and business impact projections"
          ],
          process: [
            "Digital capability assessment and business requirement analysis for transformation planning",
            "Technology evaluation and digital solution identification for business improvement",
            "Strategic transformation planning with business impact and priority development",
            "Digital roadmap creation with implementation timeline and success metrics"
          ],
          outcome: "Clear digital transformation strategy with prioritized initiatives that align technology investments with business objectives and growth requirements."
        }
      },
      {
        title: "Technology Integration & System Modernization",
        description: "Implement digital solutions with seamless business integration",
        icon: Cloud,
        details: {
          overview: "Based on transformation strategy, we implement digital technologies with system integration and process optimization that enhances business operations and customer experience.",
          whatYouGet: [
            "Digital solution implementation with system integration and process optimization",
            "Technology platform setup and configuration for business workflow enhancement",
            "Data integration and digital process automation for operational efficiency",
            "Quality assurance and testing framework ensuring reliable digital system performance"
          ],
          process: [
            "Digital solution implementation with system integration and business process optimization",
            "Technology platform configuration and workflow integration for operational improvement",
            "Data migration and digital process setup for enhanced business capabilities",
            "Testing and validation framework ensuring digital solution reliability and performance"
          ],
          outcome: "Integrated digital infrastructure with optimized business processes that enhance operational efficiency and customer experience through strategic technology implementation."
        }
      },
      {
        title: "Implementation & Digital Optimization",
        description: "Deploy digital capabilities and optimize for maximum business value",
        icon: CheckCircle,
        details: {
          overview: "Ensure successful digital transformation through strategic implementation and continuous optimization that maximizes business value from technology investments.",
          whatYouGet: [
            "Digital implementation strategy for successful technology adoption and business transformation",
            "Executive briefing and documentation for optimal digital technology utilization",
            "Performance monitoring framework tracking digital transformation business impact",
            "Optimization guidelines and continuous improvement processes for ongoing digital enhancement"
          ],
          process: [
            "Implementation planning and digital deployment strategy for business transformation",
            "Executive briefing and support documentation for effective digital technology utilization",
            "Performance monitoring setup tracking transformation metrics and business impact",
            "Continuous improvement framework development for ongoing digital optimization"
          ],
          outcome: "Successful digital transformation with executive guidance achieving measurable business improvements through optimized digital capabilities and strategic technology adoption."
        }
      }
    ] as MethodologyItem[]
  }
};