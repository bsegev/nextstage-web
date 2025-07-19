import { TrendingUp, Target, Compass, Building } from 'lucide-react';
import { PerformanceMetricsData } from '@/components/deliverables/service-layout/DeliverablePerformanceMetrics';
import { MethodologyItem } from '@/components/deliverables/service-layout/DeliverableMethodology';

export const businessStrategyDeliverable = {
  // Hero (Above the fold)
  title: "Business Strategy",
  tagline: "Strategic direction that drives execution, not just planning documents",
  description: "Where your business vision meets operational reality—so you build competitive advantage through systematic execution and measurable growth.",
  
  // The NextStage Way
  ourApproach: {
    headline: "Strategic thinking, market analysis & execution planning working together",
    description: "We don't create strategy frameworks that sit on shelves. We build actionable strategic roadmaps based on your market position and competitive dynamics, then create systems your team can execute immediately.",
    keyPrinciple: "Business strategy that drives competitive advantage, not just strategic alignment"
  },
  
  // What This Actually Is
  whatItIs: {
    realDefinition: "A comprehensive strategic framework that defines how you compete, where you play, and what capabilities you build to win in your market.",
    notJust: "A mission statement or SWOT analysis that sounds good in presentations",
    butAlso: "The operational blueprint that guides resource allocation, capability building, and competitive positioning for sustainable business growth"
  },
  
  // The Process
  process: [
    {
      phase: "Analyze",
      whatWeDo: "Deep dive into your competitive landscape and market dynamics",
      whatEmerges: "Clear understanding of where you can win and how to get there"
    },
    {
      phase: "Define",
      whatWeDo: "Craft strategic direction based on your unique strengths and market opportunities",
      whatEmerges: "Strategic framework that guides decision-making and resource allocation"
    },
    {
      phase: "Plan",
      whatWeDo: "Build execution roadmap with clear priorities and success metrics",
      whatEmerges: "Actionable strategic plan with timelines and accountability systems"
    },
    {
      phase: "Execute",
      whatWeDo: "Create implementation tools and processes for consistent strategic execution",
      whatEmerges: "Strategic operating system that your team can use to drive results"
    }
  ],
  
  // Business Value
  outcomes: {
    primary: "Clear strategic direction that drives faster decision-making and competitive advantage",
    secondary: "Aligned organization with shared vision and consistent execution priorities",
    longTerm: "Strategic framework that scales with growth and adapts to market changes"
  },
  
  // Discovery
  discovery: {
    price: "$250",
    duration: "60 minutes",
    whatWeExplore: [
      "Your current competitive position and market dynamics",
      "Where you want to compete and what capabilities you need to win",
      "Your strategic challenges and execution gaps",
      "Key decisions that will determine your competitive future"
    ],
    whatYouGet: [
      "Honest assessment of your strategic position and competitive gaps",
      "Market opportunity analysis and competitive positioning recommendations",
      "Strategic priority framework with clear decision-making criteria",
      "Full discovery credit toward project"
    ]
  },

  // Performance Metrics
  performanceMetrics: {
    title: "Business Strategy Impact",
    description: "What happens when strategy actually drives execution",
    metric: {
      value: "5-10x",
      number: 10,
      label: "Faster Decision-Making",
      description: "Organizations redesigning operating models to align with business strategy achieve 5-10x increase in speed of change and decision-making",
      source: "McKinsey research on operating model transformation",
      icon: TrendingUp
    },
    bottomMessage: "Business strategy that transforms how your organization operates and competes"
  } as PerformanceMetricsData,

  // Methodology
  methodology: {
    title: "Everything you need to compete strategically",
    subtitle: "Our business strategy process combines competitive analysis with operational planning to create strategies that your team can actually execute and win with.",
    items: [
      {
        title: "Strategic Market Analysis & Competitive Positioning",
        description: "Understand your competitive landscape and identify where you can win",
        icon: Compass,
        details: {
          overview: "We map your competitive environment to find strategic opportunities you can own. Who are your real competitors? What do customers actually value? Where can you build sustainable advantage?",
          whatYouGet: [
            "Complete competitive landscape analysis showing market dynamics and player positioning",
            "Customer value analysis revealing what drives buying decisions in your market",
            "Strategic opportunity assessment highlighting where you can compete effectively",
            "Market positioning framework that differentiates your value proposition"
          ],
          process: [
            "Competitive intelligence gathering and market dynamics analysis",
            "Customer research to understand decision-making criteria and value drivers",
            "Strategic opportunity mapping and competitive advantage identification",
            "Market positioning strategy development with differentiation framework"
          ],
          outcome: "Clear understanding of your competitive landscape and exactly where you can build sustainable advantage in your market."
        }
      },
      {
        title: "Strategic Framework & Direction Setting",
        description: "Define your strategic direction and competitive approach",
        icon: Target,
        details: {
          overview: "Based on market analysis, we help you define where to compete, how to win, and what capabilities to build. What markets do you target? How do you differentiate? What do you stop doing?",
          whatYouGet: [
            "Strategic framework defining where you compete and how you win",
            "Clear value proposition and competitive differentiation strategy",
            "Capability building roadmap aligned with strategic priorities",
            "Resource allocation framework for strategic decision-making"
          ],
          process: [
            "Strategic visioning workshops to define competitive direction and priorities",
            "Value proposition development and competitive differentiation strategy",
            "Capability gap analysis and strategic investment planning",
            "Strategic framework validation and stakeholder alignment"
          ],
          outcome: "A powerful strategic framework that clearly defines how you compete and guides all major business decisions and resource allocation."
        }
      },
      {
        title: "Execution Planning & Strategic Operating System",
        description: "Build systems and processes for consistent strategic execution",
        icon: Building,
        details: {
          overview: "Turn strategic direction into operational reality. The best strategy is useless without execution. We create systems that make strategic execution systematic and measurable.",
          whatYouGet: [
            "Strategic execution roadmap with clear milestones and accountability systems",
            "Performance metrics and tracking systems aligned with strategic priorities",
            "Decision-making frameworks that reinforce strategic direction",
            "Implementation tools and processes for consistent strategic execution"
          ],
          process: [
            "Execution planning workshops to translate strategy into actionable initiatives",
            "Performance measurement system design and strategic KPI development",
            "Decision-making process optimization and strategic governance setup",
            "Implementation support and strategic execution system training"
          ],
          outcome: "A complete strategic operating system that enables consistent execution and measurable progress toward your strategic objectives."
        }
      }
    ] as MethodologyItem[]
  }
};