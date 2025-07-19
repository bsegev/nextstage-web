import { TrendingUp, Zap, CheckCircle, Target, Play, MousePointer } from 'lucide-react';
import { PerformanceMetricsData } from '@/components/deliverables/service-layout/DeliverablePerformanceMetrics';
import { MethodologyItem } from '@/components/deliverables/service-layout/DeliverableMethodology';

export const interactiveDemoDeliverable = {
  // Hero (Above the fold)
  title: "Interactive Demo",
  tagline: "Interactive product experiences that convert prospects into customers",
  description: "Where your product capabilities meet buyer engagement—creating clickable demonstrations that accelerate sales cycles and drive customer confidence.",
  
  // The NextStage Way
  ourApproach: {
    headline: "Product strategy, user experience & conversion optimization working together",
    description: "We don't just record product walkthroughs, we design conversion experiences. Our demos combine strategic messaging with interactive design to create engaging experiences that drive buyer confidence.",
    keyPrinciple: "Interactive demos that drive conversion, not just product awareness"
  },
  
  // What This Actually Is
  whatItIs: {
    realDefinition: "An interactive product demonstration that allows prospects to experience your solution and understand value through guided exploration.",
    notJust: "A recorded video walkthrough or static screenshots",
    butAlso: "Conversion-focused experience that guides prospects through key value propositions"
  },
  
  // The Process
  process: [
    {
      phase: "Analyze",
      whatWeDo: "Map customer journey and identify key value demonstration points",
      whatEmerges: "Clear understanding of buyer needs and optimal demo experience flow"
    },
    {
      phase: "Design",
      whatWeDo: "Create interactive experience architecture and user interface design",
      whatEmerges: "Strategic demo design that guides prospects through value discovery"
    },
    {
      phase: "Build",
      whatWeDo: "Develop clickable demo with optimized user experience and conversion focus",
      whatEmerges: "Functional interactive demo that showcases product value effectively"
    },
    {
      phase: "Optimize",
      whatWeDo: "Analyze demo performance and refine for maximum engagement and conversion",
      whatEmerges: "High-converting demo experience that accelerates sales cycles and buyer confidence"
    }
  ],
  
  // Business Value
  outcomes: {
    primary: "Interactive product demonstration that accelerates sales cycles and increases conversion rates",
    secondary: "Enhanced buyer engagement that builds product confidence and reduces sales friction",
    longTerm: "Scalable demo experience that supports sales growth and customer acquisition"
  },
  
  // Discovery
  discovery: {
    price: "$250",
    duration: "60 minutes",
    whatWeExplore: [
      "Your product capabilities and key value propositions for demonstration",
      "Target customer journey and buying decision process requiring product validation",
      "Current sales challenges and conversion optimization opportunities",
      "Demo objectives and customer engagement priorities for sales acceleration"
    ],
    whatYouGet: [
      "Demo strategy assessment showing conversion opportunities and engagement optimization",
      "Interactive demo recommendations and user experience approach",
      "Demo development scope and sales integration planning",
      "Full discovery credit toward project"
    ]
  },

  // Performance Metrics
  performanceMetrics: {
    title: "Interactive Demo Impact",
    description: "What happens when product demonstrations actually drive conversions",
    metric: {
      value: "2x",
      number: 2,
      label: "Conversion Rate Increase",
      description: "Interactive product demonstrations boost customer engagement by over 30% and increase conversion rates by up to 2x",
      source: "Deloitte Technology Media and Telecom Predictions 2025, PwC AI Business Predictions 2025",
      icon: Play
    },
    bottomMessage: "Interactive demos that transform product showcases into sales acceleration tools"
  } as PerformanceMetricsData,

  // Methodology
  methodology: {
    title: "Everything you need for conversion-driving demos",
    subtitle: "Our interactive demo process combines sales strategy with user experience design to create product demonstrations that accelerate buyer decisions and drive conversions.",
    items: [
      {
        title: "Customer Journey & Demo Strategy",
        description: "Map buyer process and define optimal demo experience",
        icon: Target,
        details: {
          overview: "We analyze your customer journey to understand how prospects evaluate your product and design demo experience that addresses key buying criteria and decision points.",
          whatYouGet: [
            "Customer journey analysis showing demo requirements and value demonstration priorities",
            "Demo strategy framework aligned with sales process and buyer decision criteria",
            "Value proposition mapping and key feature prioritization for maximum impact",
            "Conversion optimization strategy with engagement and sales acceleration focus"
          ],
          process: [
            "Customer journey mapping and buyer decision analysis for demo strategy development",
            "Sales process evaluation and demo integration planning for conversion optimization",
            "Value proposition analysis and feature prioritization for strategic demonstration",
            "Demo strategy creation with engagement and conversion optimization focus"
          ],
          outcome: "Strategic demo framework that aligns product demonstration with buyer journey and accelerates sales through targeted value communication."
        }
      },
      {
        title: "Interactive Experience Design & Development",
        description: "Create engaging demo interface optimized for user exploration",
        icon: MousePointer,
        details: {
          overview: "Based on demo strategy, we design and build interactive experience that guides prospects through product value while enabling hands-on exploration and engagement.",
          whatYouGet: [
            "Interactive demo design with user interface optimized for engagement and exploration",
            "Guided experience flow that showcases key features and value propositions effectively",
            "Clickable product demonstration with realistic functionality and user interaction",
            "Mobile-responsive demo platform ensuring accessibility across devices and contexts"
          ],
          process: [
            "Demo interface design and user experience optimization for engagement and conversion",
            "Interactive functionality development with guided exploration and value demonstration",
            "Product showcase creation with realistic features and compelling user scenarios",
            "Platform optimization and testing for reliable performance across devices"
          ],
          outcome: "Compelling interactive demo that provides hands-on product experience and guides prospects through value discovery for accelerated buying decisions."
        }
      },
      {
        title: "Demo Deployment & Performance Optimization",
        description: "Deploy demo for sales use and optimize based on conversion best practices",
        icon: CheckCircle,
        details: {
          overview: "Integrate interactive demo into sales process and optimize performance through conversion design principles and best practices to maximize engagement and conversion potential.",
          whatYouGet: [
            "Sales integration strategy with demo deployment and executive briefing for optimal usage",
            "Performance optimization framework based on conversion design principles and best practices",
            "Demo enhancement recommendations based on sales analytics and conversion optimization",
            "Sales enablement resources and best practices for demo-driven customer engagement"
          ],
          process: [
            "Sales process integration and executive briefing for effective demo utilization",
            "Conversion optimization implementation based on design principles and industry standards",
            "Sales analytics analysis and demo optimization based on conversion best practices",
            "Sales enablement development and ongoing optimization support for maximum impact"
          ],
          outcome: "Fully integrated demo system that drives sales acceleration through optimized customer engagement and conversion-focused design implementation."
        }
      }
    ] as MethodologyItem[]
  }
};