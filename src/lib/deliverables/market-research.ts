import { TrendingUp, Zap, CheckCircle, Target, Search, Users } from 'lucide-react';
import { PerformanceMetricsData } from '@/components/deliverables/service-layout/DeliverablePerformanceMetrics';
import { MethodologyItem } from '@/components/deliverables/service-layout/DeliverableMethodology';

export const marketResearchDeliverable = {
  // Hero (Above the fold)
  title: "Market Research",
  tagline: "Strategic market intelligence that drives decisions, not just industry reports",
  description: "Where market data meets strategic insight—creating research that informs business strategy, customer targeting, and competitive positioning.",
  
  // The NextStage Way
  ourApproach: {
    headline: "Market analysis, customer intelligence & strategic insight working together",
    description: "We don't just gather market data, we generate strategic intelligence. Our research combines market analysis with customer intelligence to create actionable insights that drive business decisions.",
    keyPrinciple: "Market research that drives strategic advantage, not just market awareness"
  },
  
  // What This Actually Is
  whatItIs: {
    realDefinition: "A comprehensive market research system that provides strategic insights about customers, competitors, and market opportunities for business decision-making.",
    notJust: "A collection of industry statistics or survey responses",
    butAlso: "Strategic market intelligence that informs customer targeting, competitive positioning, and business strategy development"
  },
  
  // The Process
  process: [
    {
      phase: "Define",
      whatWeDo: "Identify research objectives and strategic intelligence requirements",
      whatEmerges: "Clear research framework aligned with business decision-making needs"
    },
    {
      phase: "Research",
      whatWeDo: "Conduct comprehensive market analysis and customer research",
      whatEmerges: "Strategic market data and customer insights for business planning"
    },
    {
      phase: "Analyze",
      whatWeDo: "Transform research data into strategic insights and actionable recommendations",
      whatEmerges: "Market intelligence that guides strategic decisions and business planning"
    },
    {
      phase: "Apply",
      whatWeDo: "Create frameworks for applying research insights to business strategy",
      whatEmerges: "Market research system your team can use for ongoing strategic planning"
    }
  ],
  
  // Business Value
  outcomes: {
    primary: "Strategic market intelligence that accelerates business decision-making and customer targeting",
    secondary: "Clear market insights that guide product development, positioning, and competitive strategy",
    longTerm: "Market research framework that provides ongoing intelligence for strategic planning and growth"
  },
  
  // Discovery
  discovery: {
    price: "$250",
    duration: "60 minutes",
    whatWeExplore: [
      "Your strategic questions and market intelligence requirements",
      "Current market understanding and research gaps affecting business decisions",
      "Customer segments and competitive landscape research priorities",
      "Business objectives requiring market insights and strategic intelligence"
    ],
    whatYouGet: [
      "Market research assessment and strategic intelligence opportunity analysis",
      "Research methodology recommendations and market insight framework",
      "Market research scope and strategic intelligence priority planning",
      "Full discovery credit toward project"
    ]
  },

  // Performance Metrics
  performanceMetrics: {
    title: "Market Research Impact",
    description: "What happens when market intelligence actually drives strategy",
    metric: {
      value: "50%",
      number: 50,
      label: "Faster Insight-to-Action",
      description: "Companies using advanced market research approaches report 50% faster insight-to-action cycles",
      source: "Accenture AI-driven market research study 2025",
      icon: Search
    },
    bottomMessage: "Market research that transforms market intelligence into strategic competitive advantage"
  } as PerformanceMetricsData,

  // Methodology
  methodology: {
    title: "Everything you need for strategic market intelligence",
    subtitle: "Our market research process combines data analysis with strategic thinking to create market intelligence that drives informed business decisions and competitive advantage.",
    items: [
      {
        title: "Market Analysis & Opportunity Assessment",
        description: "Understand your market landscape and strategic opportunities",
        icon: Target,
        details: {
          overview: "We analyze your market to understand size, trends, competitive dynamics, and opportunities that inform strategic business decisions and market positioning.",
          whatYouGet: [
            "Comprehensive market analysis showing size, growth trends, and opportunity assessment",
            "Market segmentation analysis with customer group identification and prioritization",
            "Competitive landscape evaluation and market positioning opportunity analysis",
            "Market trend analysis and strategic opportunity identification for business planning"
          ],
          process: [
            "Market sizing and trend analysis using multiple data sources and research methods",
            "Market segmentation research and customer group analysis",
            "Competitive market analysis and positioning opportunity assessment",
            "Strategic opportunity identification and market priority development"
          ],
          outcome: "Complete market intelligence that provides strategic foundation for business decisions, customer targeting, and competitive positioning."
        }
      },
      {
        title: "Customer Intelligence & Insight Development",
        description: "Generate strategic insights about customer needs and decision-making",
        icon: Users,
        details: {
          overview: "Based on market analysis, we develop customer intelligence using available data sources to understand needs, preferences, and decision-making processes that inform product development and marketing strategy.",
          whatYouGet: [
            "Customer intelligence analysis showing needs, preferences, and buying behavior patterns",
            "Customer persona development with decision-making criteria and influence factors",
            "Customer journey analysis and touchpoint optimization recommendations",
            "Market insight synthesis that connects customer intelligence to business strategy"
          ],
          process: [
            "Customer intelligence development using market data, competitive analysis, and available insights",
            "Customer persona development and behavioral pattern analysis",
            "Customer journey mapping based on market research and competitive intelligence",
            "Insight synthesis and strategic recommendation development"
          ],
          outcome: "Comprehensive customer intelligence that guides product development, marketing strategy, and customer experience optimization for business growth."
        }
      },
      {
        title: "Strategic Intelligence Framework",
        description: "Build systems for ongoing market research and strategic intelligence",
        icon: CheckCircle,
        details: {
          overview: "Create practical frameworks for ongoing market intelligence that keep your business informed about market changes and customer evolution for strategic planning.",
          whatYouGet: [
            "Market intelligence framework with key indicators and monitoring methodology",
            "Research templates and tools for ongoing customer and market analysis",
            "Strategic insight generation guidelines and market trend tracking processes",
            "Executive briefing and implementation guide for ongoing market intelligence"
          ],
          process: [
            "Intelligence framework design based on strategic business requirements",
            "Research template creation and ongoing market monitoring methodology development",
            "Insight generation process design and strategic intelligence workflow creation",
            "Executive briefing on market research tools and intelligence system management"
          ],
          outcome: "A complete market intelligence system that enables ongoing strategic market research and informed business decision-making for competitive advantage."
        }
      }
    ] as MethodologyItem[]
  }
};