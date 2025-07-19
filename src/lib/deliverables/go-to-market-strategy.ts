import { Zap, Target, Rocket, Users } from 'lucide-react';
import { PerformanceMetricsData } from '@/components/deliverables/service-layout/DeliverablePerformanceMetrics';
import { MethodologyItem } from '@/components/deliverables/service-layout/DeliverableMethodology';

export const goToMarketStrategyDeliverable = {
  // Hero (Above the fold)
  title: "Go-to-Market Strategy",
  tagline: "Strategic market entry that drives revenue, not just launch plans",
  description: "Where your product meets market opportunity—creating systematic approaches that drive customer acquisition and revenue growth.",
  
  // The NextStage Way
  ourApproach: {
    headline: "Market research, customer strategy & execution planning working together",
    description: "We don't just plan product launches, we design market entry systems. Our strategy combines customer research with competitive analysis to create systematic approaches for market success.",
    keyPrinciple: "Go-to-market strategy that drives customer acquisition, not just product awareness"
  },
  
  // What This Actually Is
  whatItIs: {
    realDefinition: "A comprehensive market entry strategy that defines target customers, positioning approach, and systematic customer acquisition methods.",
    notJust: "A launch checklist or marketing campaign plan",
    butAlso: "Strategic framework that guides customer targeting, messaging, channel selection, and systematic market penetration"
  },
  
  // The Process
  process: [
    {
      phase: "Research",
      whatWeDo: "Analyze target market, customer segments, and competitive landscape",
      whatEmerges: "Clear understanding of market opportunity and customer needs"
    },
    {
      phase: "Strategy",
      whatWeDo: "Define positioning, target segments, and value proposition approach",
      whatEmerges: "Strategic framework for market entry and customer targeting"
    },
    {
      phase: "Plan",
      whatWeDo: "Design customer acquisition system with channels and messaging",
      whatEmerges: "Systematic go-to-market plan with clear execution roadmap"
    },
    {
      phase: "Execute",
      whatWeDo: "Create implementation tools and frameworks for market entry",
      whatEmerges: "Go-to-market system your team can execute and measure"
    }
  ],
  
  // Business Value
  outcomes: {
    primary: "Strategic market entry plan that drives systematic customer acquisition",
    secondary: "Clear positioning and messaging that resonates with target customers",
    longTerm: "Scalable go-to-market framework that adapts to market changes and growth"
  },
  
  // Discovery
  discovery: {
    price: "$250",
    duration: "60 minutes",
    whatWeExplore: [
      "Your product or service and target market opportunity",
      "Current customer acquisition challenges and market position",
      "Competitive landscape and customer decision-making process",
      "Growth objectives and go-to-market priorities"
    ],
    whatYouGet: [
      "Market opportunity assessment and customer segment analysis",
      "Go-to-market strategy recommendations and approach framework",
      "Customer acquisition planning scope and strategic priorities",
      "Full discovery credit toward project"
    ]
  },

  // Performance Metrics
  performanceMetrics: {
    title: "Go-to-Market Strategy Impact",
    description: "What happens when market entry strategy actually drives results",
    metric: {
      value: "2x",
      number: 2,
      label: "Revenue Growth",
      description: "Companies with advanced GTM strategies achieve 2x the average revenue growth of their sectors",
      source: "Bain 2025 B2B Growth Winners research",
      icon: Rocket
    },
    bottomMessage: "Go-to-market strategy that transforms customer acquisition and revenue performance"
  } as PerformanceMetricsData,

  // Methodology
  methodology: {
    title: "Everything you need for successful market entry",
    subtitle: "Our go-to-market process combines customer research with strategic planning to create systematic approaches for customer acquisition and revenue growth.",
    items: [
      {
        title: "Market Research & Customer Analysis",
        description: "Understand your target market and customer decision-making process",
        icon: Target,
        details: {
          overview: "We research your target market to understand customer needs, buying behavior, and decision-making process, creating foundation for effective market entry strategy.",
          whatYouGet: [
            "Target market analysis with customer segment identification and prioritization",
            "Customer research revealing needs, pain points, and buying behavior",
            "Competitive analysis showing market positioning and differentiation opportunities",
            "Market sizing and opportunity assessment for strategic planning"
          ],
          process: [
            "Market research and customer segment identification",
            "Customer interview process to understand needs and buying behavior",
            "Competitive landscape analysis and positioning opportunity identification",
            "Market opportunity assessment and segment prioritization"
          ],
          outcome: "Clear understanding of your target market, customer needs, and the competitive landscape that informs strategic market entry decisions."
        }
      },
      {
        title: "Strategic Positioning & Value Proposition",
        description: "Define how you position in market and communicate value to customers",
        icon: Zap,
        details: {
          overview: "Based on market research, we help you define market positioning and value proposition that resonates with target customers and differentiates from competitors.",
          whatYouGet: [
            "Market positioning strategy that differentiates from competitive alternatives",
            "Value proposition framework that addresses customer needs and decision criteria",
            "Messaging strategy that communicates value clearly to target segments",
            "Positioning validation and competitive response planning"
          ],
          process: [
            "Positioning strategy development based on market research and competitive analysis",
            "Value proposition creation and customer validation testing",
            "Messaging framework development for different customer segments",
            "Positioning refinement and competitive differentiation optimization"
          ],
          outcome: "A powerful market positioning strategy with clear value proposition that resonates with customers and drives market differentiation."
        }
      },
      {
        title: "Customer Acquisition System",
        description: "Build systematic approach for reaching and converting target customers",
        icon: Users,
        details: {
          overview: "Create practical customer acquisition system with channel strategy, conversion process, and measurement framework that your team can execute systematically.",
          whatYouGet: [
            "Customer acquisition strategy with channel selection and prioritization",
            "Sales and marketing process design for systematic customer conversion",
            "Go-to-market timeline with clear milestones and success metrics",
            "Implementation tools and frameworks for customer acquisition execution"
          ],
          process: [
            "Customer acquisition channel analysis and strategy development",
            "Sales and marketing process design for target customer conversion",
            "Go-to-market planning with timeline and milestone development",
            "Implementation framework creation and team training"
          ],
          outcome: "A complete customer acquisition system that enables systematic market entry and measurable progress toward revenue growth objectives."
        }
      }
    ] as MethodologyItem[]
  }
};