import { TrendingUp, Zap, CheckCircle, Target, Handshake, Network } from 'lucide-react';
import { PerformanceMetricsData } from '@/components/deliverables/service-layout/DeliverablePerformanceMetrics';
import { MethodologyItem } from '@/components/deliverables/service-layout/DeliverableMethodology';

export const strategicPartnershipsDeliverable = {
  // Hero (Above the fold)
  title: "Strategic Partnerships",
  tagline: "Partnership strategy that drives growth, not just business relationships",
  description: "Where your business capabilities meet strategic alliances—creating partnership frameworks that accelerate growth and competitive advantage.",
  
  // The NextStage Way
  ourApproach: {
    headline: "Strategic planning, partner evaluation & alliance structuring working together",
    description: "We don't just identify potential partners, we design partnership strategy. Our approach combines strategic analysis with partnership planning to create alliances that drive measurable business growth.",
    keyPrinciple: "Strategic partnerships that drive competitive advantage, not just collaborative relationships"
  },
  
  // What This Actually Is
  whatItIs: {
    realDefinition: "A comprehensive partnership strategy framework that identifies strategic alliance opportunities and structures partnerships for business growth and competitive advantage.",
    notJust: "A list of potential business partners or networking contacts",
    butAlso: "Strategic alliance framework that guides partner selection, relationship structuring, and partnership execution for measurable business growth"
  },
  
  // The Process
  process: [
    {
      phase: "Analyze",
      whatWeDo: "Assess strategic objectives and partnership opportunity landscape",
      whatEmerges: "Clear understanding of partnership needs and strategic opportunities"
    },
    {
      phase: "Identify",
      whatWeDo: "Research and evaluate potential strategic partners and alliance opportunities",
      whatEmerges: "Qualified partner prospects aligned with strategic objectives"
    },
    {
      phase: "Structure",
      whatWeDo: "Design partnership frameworks and alliance structures",
      whatEmerges: "Strategic partnership plan with clear value creation and execution approach"
    },
    {
      phase: "Execute",
      whatWeDo: "Create implementation tools and frameworks for partnership success",
      whatEmerges: "Partnership execution system your team can use to manage alliances"
    }
  ],
  
  // Business Value
  outcomes: {
    primary: "Strategic partnership framework that accelerates growth and competitive positioning",
    secondary: "Clear alliance strategy with qualified partner prospects and structuring approach",
    longTerm: "Partnership system that scales with business growth and market opportunities"
  },
  
  // Discovery
  discovery: {
    price: "$250",
    duration: "60 minutes",
    whatWeExplore: [
      "Your strategic objectives and growth challenges requiring partnership support",
      "Current partnership experience and alliance management capabilities",
      "Market opportunities and competitive landscape for strategic alliances",
      "Partnership priorities and alliance structuring requirements"
    ],
    whatYouGet: [
      "Partnership opportunity assessment and strategic alliance potential analysis",
      "Strategic partnership recommendations and alliance approach framework",
      "Partnership strategy scope and implementation planning priorities",
      "Full discovery credit toward project"
    ]
  },

  // Performance Metrics
  performanceMetrics: {
    title: "Strategic Partnership Impact",
    description: "What happens when partnerships actually drive strategic growth",
    metric: {
      value: "25%",
      number: 25,
      label: "Faster Revenue Growth",
      description: "Companies engaging in strategic partnerships experience 25% faster revenue growth than those that do not",
      source: "McKinsey cross-sector partnership research",
      icon: Handshake
    },
    bottomMessage: "Strategic partnerships that accelerate business growth and competitive advantage"
  } as PerformanceMetricsData,

  // Methodology
  methodology: {
    title: "Everything you need for strategic partnership success",
    subtitle: "Our strategic partnership process combines business analysis with alliance planning to create partnership strategies that drive growth and competitive advantage.",
    items: [
      {
        title: "Partnership Strategy Development",
        description: "Define strategic partnership approach and alliance objectives",
        icon: Target,
        details: {
          overview: "We analyze your business strategy to identify partnership opportunities that accelerate growth, enhance capabilities, or strengthen competitive position through strategic alliances.",
          whatYouGet: [
            "Strategic partnership assessment showing alliance opportunities and business impact",
            "Partnership strategy framework defining objectives and success criteria",
            "Alliance opportunity analysis with market and competitive considerations",
            "Partnership priority framework for evaluating and selecting strategic alliances"
          ],
          process: [
            "Business strategy analysis to identify partnership opportunities and requirements",
            "Strategic alliance planning and objective setting for partnership success",
            "Market opportunity assessment for partnership and alliance development",
            "Partnership strategy framework creation with evaluation and selection criteria"
          ],
          outcome: "Clear partnership strategy that identifies alliance opportunities and provides framework for strategic partnership decisions and planning."
        }
      },
      {
        title: "Partner Identification & Evaluation",
        description: "Research and evaluate potential strategic partners and alliance opportunities",
        icon: Network,
        details: {
          overview: "Based on partnership strategy, we research and evaluate potential partners that align with strategic objectives and offer mutual value creation opportunities.",
          whatYouGet: [
            "Strategic partner research and identification based on alliance objectives",
            "Partner evaluation framework with assessment criteria and scoring methodology",
            "Qualified partner prospects with strategic fit and partnership potential analysis",
            "Alliance opportunity assessment showing value creation and strategic benefits"
          ],
          process: [
            "Partner research and identification based on strategic partnership criteria",
            "Partner evaluation and assessment using strategic fit and value creation analysis",
            "Partnership opportunity analysis and mutual benefit assessment",
            "Partner prioritization and strategic alliance recommendation development"
          ],
          outcome: "A qualified list of strategic partner prospects with clear evaluation framework and partnership opportunity analysis for alliance decisions."
        }
      },
      {
        title: "Partnership Structuring & Implementation",
        description: "Design partnership frameworks and alliance execution approach",
        icon: CheckCircle,
        details: {
          overview: "Create practical partnership structures and implementation frameworks that enable successful strategic alliances and measurable partnership outcomes.",
          whatYouGet: [
            "Partnership structure recommendations with alliance framework and governance approach",
            "Strategic alliance planning templates and partnership management tools",
            "Partnership agreement framework with key terms and success metrics",
            "Alliance implementation guidelines and partnership execution processes"
          ],
          process: [
            "Partnership structure design based on strategic objectives and alliance requirements",
            "Alliance framework development with governance and management processes",
            "Partnership agreement planning and key terms development",
            "Implementation framework creation and executive briefing on partnership execution"
          ],
          outcome: "A complete partnership implementation system that enables successful strategic alliances and measurable partnership outcomes for business growth."
        }
      }
    ] as MethodologyItem[]
  }
};