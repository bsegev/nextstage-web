import { CheckCircle, Target, Package, Lightbulb } from 'lucide-react';
import { PerformanceMetricsData } from '@/components/deliverables/service-layout/DeliverablePerformanceMetrics';
import { MethodologyItem } from '@/components/deliverables/service-layout/DeliverableMethodology';

export const productStrategyDeliverable = {
  // Hero (Above the fold)
  title: "Product Strategy",
  tagline: "Strategic product direction that drives market success, not just feature roadmaps",
  description: "Where your market opportunity meets product development—creating strategic frameworks that guide product decisions and market positioning.",
  
  // The NextStage Way
  ourApproach: {
    headline: "Market research, product planning & strategic positioning working together",
    description: "We don't just plan product features, we design product strategy. Our approach combines market analysis with product planning to create strategic direction that drives market success.",
    keyPrinciple: "Product strategy that drives competitive advantage, not just product development"
  },
  
  // What This Actually Is
  whatItIs: {
    realDefinition: "A comprehensive product strategy framework that defines market positioning, product direction, and development priorities for competitive advantage.",
    notJust: "A feature roadmap or product development timeline",
    butAlso: "Strategic product framework that guides market positioning, development priorities, and competitive differentiation decisions"
  },
  
  // The Process
  process: [
    {
      phase: "Research",
      whatWeDo: "Analyze market opportunity, customer needs, and competitive landscape",
      whatEmerges: "Clear understanding of market requirements and product opportunities"
    },
    {
      phase: "Strategy",
      whatWeDo: "Define product positioning, target market, and strategic direction",
      whatEmerges: "Strategic product framework and market positioning approach"
    },
    {
      phase: "Plan",
      whatWeDo: "Create product roadmap aligned with strategic objectives",
      whatEmerges: "Strategic product plan with clear priorities and development focus"
    },
    {
      phase: "Execute",
      whatWeDo: "Build implementation framework for product strategy execution",
      whatEmerges: "Product strategy system your team can use to guide decisions"
    }
  ],
  
  // Business Value
  outcomes: {
    primary: "Strategic product direction that drives market differentiation and customer value",
    secondary: "Clear product roadmap aligned with market opportunity and business strategy",
    longTerm: "Product strategy framework that guides development decisions and competitive positioning"
  },
  
  // Discovery
  discovery: {
    price: "$250",
    duration: "60 minutes",
    whatWeExplore: [
      "Your current product portfolio and market position",
      "Customer needs and market opportunity for product development",
      "Competitive landscape and product differentiation challenges",
      "Strategic objectives and product development priorities"
    ],
    whatYouGet: [
      "Product portfolio assessment and market opportunity analysis",
      "Strategic product recommendations and positioning framework",
      "Product strategy scope and development priority planning",
      "Full discovery credit toward project"
    ]
  },

  // Performance Metrics
  performanceMetrics: {
    title: "Product Strategy Impact",
    description: "What happens when product strategy actually drives market success",
    metric: {
      value: "19%",
      number: 19,
      label: "Efficiency Gains",
      description: "Industrial companies leading in digital product development report up to 19% average efficiency gains",
      source: "PwC Digital Product Development 2025 research",
      icon: Package
    },
    bottomMessage: "Product strategy that transforms development efficiency and market performance"
  } as PerformanceMetricsData,

  // Methodology
  methodology: {
    title: "Everything you need for strategic product success",
    subtitle: "Our product strategy process combines market research with strategic planning to create product direction that drives competitive advantage and market success.",
    items: [
      {
        title: "Market Opportunity Analysis",
        description: "Understand your market opportunity and customer requirements",
        icon: Target,
        details: {
          overview: "We research your market to understand customer needs, competitive landscape, and product opportunities that inform strategic product direction and positioning.",
          whatYouGet: [
            "Market analysis showing customer needs and product opportunity assessment",
            "Customer intelligence revealing requirements and decision-making criteria",
            "Competitive product analysis showing differentiation opportunities",
            "Market sizing and opportunity prioritization for product development"
          ],
          process: [
            "Market research and customer needs analysis for product requirements",
            "Competitive product analysis and differentiation opportunity identification",
            "Customer intelligence development using market data and competitive research",
            "Market opportunity assessment and product priority development"
          ],
          outcome: "Clear understanding of market opportunity and customer requirements that inform strategic product decisions and development priorities."
        }
      },
      {
        title: "Strategic Product Planning",
        description: "Define product strategy and competitive positioning approach",
        icon: Lightbulb,
        details: {
          overview: "Based on market research, we help you define product strategy that positions competitively and addresses market opportunity through strategic product direction.",
          whatYouGet: [
            "Product strategy framework defining market positioning and competitive approach",
            "Strategic product roadmap aligned with market opportunity and business objectives",
            "Product positioning strategy that differentiates from competitive alternatives",
            "Development priority framework based on strategic value and market impact"
          ],
          process: [
            "Product strategy development based on market analysis and competitive research",
            "Strategic roadmap creation with priority and timeline development",
            "Product positioning strategy and competitive differentiation planning",
            "Development framework creation for strategic product decisions"
          ],
          outcome: "A comprehensive product strategy that guides market positioning, development priorities, and competitive differentiation for sustainable advantage."
        }
      },
      {
        title: "Product Strategy Implementation",
        description: "Build framework for ongoing product strategy execution",
        icon: CheckCircle,
        details: {
          overview: "Create practical tools and processes for implementing product strategy, enabling your team to make strategic product decisions aligned with market objectives.",
          whatYouGet: [
            "Product strategy implementation framework with decision-making tools",
            "Strategic product planning templates and evaluation criteria",
            "Performance measurement system aligned with product strategy objectives",
            "Product development guidelines that reinforce strategic direction"
          ],
          process: [
            "Implementation framework design based on product strategy and business requirements",
            "Template creation for strategic product planning and decision-making",
            "Performance measurement system development for product strategy tracking",
            "Executive briefing on product strategy tools and implementation processes"
          ],
          outcome: "A complete product strategy implementation system that enables consistent strategic product decisions and measurable progress toward market objectives."
        }
      }
    ] as MethodologyItem[]
  }
};