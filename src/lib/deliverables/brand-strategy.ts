import { TrendingUp, Target, Compass, MessageSquare } from 'lucide-react';
import { PerformanceMetricsData } from '@/components/deliverables/service-layout/DeliverablePerformanceMetrics';
import { MethodologyItem } from '@/components/deliverables/service-layout/DeliverableMethodology';

export const brandStrategyDeliverable = {
  // Hero (Above the fold)
  title: "Brand Strategy",
  tagline: "Stop competing on price—own your market position instead",
  description: "Where your unique strengths meet what customers actually value—so you can charge premium prices and attract clients who choose you, not just anyone.",
  
  // The NextStage Way
  ourApproach: {
    headline: "Market research, positioning & messaging that work together",
    description: "We don't create strategy in isolation from reality. We research your market, find your competitive advantage, and build positioning that your team can actually execute.",
    keyPrinciple: "Strategy that drives business results, not just brand awareness"
  },
  
  // What This Actually Is
  whatItIs: {
    realDefinition: "A clear roadmap for how you position yourself uniquely in the market, what you say about it, and how you prove it to customers.",
    notJust: "A mission statement or brand values exercise that sits in a drawer",
    butAlso: "The strategic foundation that makes all your marketing more effective and justifies premium pricing"
  },
  
  // The Process
  process: [
    {
      phase: "Research",
      whatWeDo: "Deep dive into your market and competitive landscape",
      whatEmerges: "Clear understanding of where you can win and how"
    },
    {
      phase: "Position",
      whatWeDo: "Define exactly how you're different and why it matters to customers",
      whatEmerges: "Unique market position that customers actually care about"
    },
    {
      phase: "Message",
      whatWeDo: "Create clear language that explains your value consistently",
      whatEmerges: "Messaging framework that converts prospects into customers"
    },
    {
      phase: "Implement",
      whatWeDo: "Build tools so your team can execute the strategy consistently",
      whatEmerges: "Brand strategy system that actually gets used and drives results"
    }
  ],
  
  // Business Value
  outcomes: {
    primary: "Clear market differentiation that justifies premium pricing",
    secondary: "Messaging that attracts ideal customers and repels wrong ones",
    longTerm: "Strategic foundation that makes all marketing and sales more effective"
  },
  
  // Discovery
  discovery: {
    price: "$250",
    duration: "60 minutes",
    whatWeExplore: [
      "What makes you different from everyone else in your space",
      "Who your ideal customers are and what they actually value",
      "How you currently position yourself vs how competitors do it",
      "Where you want to be positioned to command premium prices"
    ],
    whatYouGet: [
      "Honest assessment of your current market position and gaps",
      "Competitive landscape analysis showing positioning opportunities",
      "Strategic recommendations for stronger differentiation",
      "Full discovery credit toward project"
    ]
  },

  // Performance Metrics
  performanceMetrics: {
    title: "Brand Strategy Business Impact",
    description: "What happens when your market position actually works",
    metric: {
      value: "68%",
      number: 68,
      label: "Report Revenue Growth",
      description: "68% of companies report that consistent branding and strategy added 10-20% to their revenue growth",
      icon: TrendingUp
    },
    bottomMessage: "Brand strategy that creates sustainable competitive advantage"
  } as PerformanceMetricsData,

  // Methodology
  methodology: {
    title: "Everything you need to own your unique market space",
    subtitle: "Our brand strategy process finds your competitive advantage and builds messaging that drives premium pricing and customer preference.",
    items: [
      {
        title: "Market Research & Competitive Analysis",
        description: "Understand exactly where you can win in your competitive landscape",
        icon: Compass,
        details: {
          overview: "We map your competitive landscape to find positioning gaps you can own. Who are your real competitors? What do customers actually decide between? Where can you be uniquely valuable?",
          whatYouGet: [
            "Complete competitive positioning map showing how everyone positions themselves",
            "Customer intelligence analysis revealing what drives their choices",
            "Market opportunity analysis highlighting gaps you can fill profitably",
            "Strategic positioning recommendations based on real competitive advantage"
          ],
          process: [
            "Competitive audit of direct and indirect competitors' positioning strategies",
            "Customer intelligence development using available market data and insights",
            "Market gap analysis to identify ownable positioning territory",
            "Strategic opportunity assessment and positioning recommendations"
          ],
          outcome: "Clear understanding of where you can position uniquely in your market and exactly how to differentiate from competitors in ways customers value."
        }
      },
      {
        title: "Strategic Positioning Development",
        description: "Define your unique market position and core value proposition",
        icon: Target,
        details: {
          overview: "Based on market research, we help you claim a unique position that customers value and competitors can't easily copy. What makes you different? Why does it matter? How do you prove it?",
          whatYouGet: [
            "Clear brand positioning statement that defines your unique market space",
            "Value proposition framework that resonates with ideal customers",
            "Competitive differentiation strategy with proof points and validation",
            "Brand personality and communication principles that reinforce positioning"
          ],
          process: [
            "Positioning analysis and strategic development to define your unique value and market space",
            "Value proposition development and strategic validation framework",
            "Differentiation strategy creation with competitive proof points",
            "Brand personality definition that supports strategic positioning"
          ],
          outcome: "A powerful market position that clearly differentiates your value, attracts ideal customers, and justifies premium pricing in your market."
        }
      },
      {
        title: "Messaging Framework & Implementation",
        description: "Create clear language that communicates your position consistently",
        icon: MessageSquare,
        details: {
          overview: "Turn your strategic position into clear, compelling messages that work across all your marketing and sales. What do you say? How do you say it? When do you lead with what?",
          whatYouGet: [
            "Core messaging framework with key value propositions and proof points",
            "Audience-specific messaging for different customer segments and contexts",
            "Brand voice and tone guidelines for consistent communication style",
            "Message hierarchy showing what to emphasize in different situations"
          ],
          process: [
            "Message development and core positioning language creation",
            "Audience segmentation and tailored messaging creation for each segment",
            "Brand voice development and communication style guidelines",
            "Message optimization and strategic validation framework"
          ],
          outcome: "Clear, compelling messaging that consistently reinforces your strategic position and drives customer preference across all touchpoints."
        }
      }
    ] as MethodologyItem[]
  }
};