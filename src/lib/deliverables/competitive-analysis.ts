import { Target, Radar, Eye } from 'lucide-react';
import { PerformanceMetricsData } from '@/components/deliverables/service-layout/DeliverablePerformanceMetrics';
import { MethodologyItem } from '@/components/deliverables/service-layout/DeliverableMethodology';

export const competitiveAnalysisDeliverable = {
  // Hero (Above the fold)
  title: "Competitive Analysis",
  tagline: "Strategic competitive intelligence that reveals your market advantage",
  description: "Where market research meets strategic positioning—uncovering the insights that help you compete and win.",
  
  // The NextStage Way
  ourApproach: {
    headline: "Research, strategy & positioning working together",
    description: "We don't just analyze competitors, we uncover strategic opportunities. Our analysis combines market intelligence with strategic thinking to reveal positioning advantages.",
    keyPrinciple: "Intelligence that drives competitive advantage"
  },
  
  // What This Actually Is
  whatItIs: {
    realDefinition: "A strategic competitive analysis that reveals competitor weaknesses, market gaps, and positioning opportunities to help you compete and win.",
    notJust: "A list of competitors or feature comparison",
    butAlso: "Strategic insights that inform positioning, product development, and go-to-market strategies"
  },
  
  // The Process
  process: [
    {
      phase: "Research",
      whatWeDo: "Identify and analyze direct and indirect competitors in your market",
      whatEmerges: "Complete competitive landscape overview"
    },
    {
      phase: "Analyze",
      whatWeDo: "Evaluate competitor strategies, strengths, and weaknesses",
      whatEmerges: "Competitive intelligence and strategic insights"
    },
    {
      phase: "Identify",
      whatWeDo: "Find market gaps and opportunities where competitors are weak",
      whatEmerges: "Strategic opportunities and differentiation areas"
    },
    {
      phase: "Position",
      whatWeDo: "Develop strategic recommendations for competitive advantage",
      whatEmerges: "Competitive positioning strategy and action plan"
    }
  ],
  
  // Business Value
  outcomes: {
    primary: "Clear understanding of competitive landscape and strategic opportunities",
    secondary: "Strategic positioning that differentiates from competitors",
    longTerm: "Sustainable competitive advantage through strategic intelligence"
  },
  
  // Discovery
  discovery: {
    price: "$250",
    duration: "60 minutes",
    whatWeExplore: [
      "Your current competitive challenges and market position",
      "Known competitors and key market players",
      "Strategic goals and positioning objectives",
      "Key differentiators and competitive advantages"
    ],
    whatYouGet: [
      "Competitive landscape overview and initial insights",
      "Strategic opportunities and market gap identification",
      "Research methodology and competitive analysis scope",
      "Full discovery credit toward project"
    ]
  },

  // Performance Metrics
  performanceMetrics: {
    title: "Competitive Intelligence Impact",
    description: "What happens when market intelligence actually drives strategy",
    metric: {
      value: "48%",
      number: 48,
      label: "Adjust Strategy in Real-Time",
      description: "48% of business leaders are adjusting strategy in real time based on competitive intelligence and market data",
      source: "PwC's May 2025 Pulse Survey",
      icon: Radar
    },
    bottomMessage: "Competitive analysis that turns market intelligence into strategic advantage"
  } as PerformanceMetricsData,

  // Methodology
  methodology: {
    title: "Everything you need to compete strategically",
    subtitle: "Our competitive analysis process combines market research with strategic thinking to reveal positioning advantages and competitive opportunities.",
    items: [
      {
        title: "Competitive Landscape Research",
        description: "Understand your complete competitive environment and market dynamics",
        icon: Radar,
        details: {
          overview: "We map your entire competitive ecosystem to reveal market dynamics, competitor strategies, and positioning opportunities. Who competes how? Where are the gaps? What can you own?",
          whatYouGet: [
            "Complete competitive landscape analysis including direct and indirect competitors",
            "Competitor strategy evaluation showing positioning and market approach",
            "Market dynamics assessment revealing competitive patterns and trends",
            "Strategic opportunity identification highlighting gaps you can exploit"
          ],
          process: [
            "Competitive research and market intelligence gathering",
            "Strategy analysis to understand how competitors position and compete",
            "Market dynamics assessment to identify trends and shifts",
            "Opportunity mapping and competitive gap analysis"
          ],
          outcome: "Complete understanding of your competitive landscape and exactly where opportunities exist to position strategically and gain advantage."
        }
      },
      {
        title: "Strategic Positioning Analysis",
        description: "Define how to position uniquely and exploit competitive advantages",
        icon: Target,
        details: {
          overview: "Based on competitive intelligence, we help you identify unique positioning opportunities and develop differentiation strategies that competitors can't easily copy.",
          whatYouGet: [
            "Strategic positioning framework that differentiates from key competitors",
            "Competitive advantage analysis showing where you can win sustainably",
            "Differentiation strategy recommendations based on market gaps",
            "Market positioning plan with clear value proposition focus"
          ],
          process: [
            "Competitive positioning analysis to identify differentiation opportunities",
            "Strategic advantage assessment based on capabilities and market position",
            "Differentiation strategy development with competitive focus",
            "Positioning validation and competitive response planning"
          ],
          outcome: "A powerful competitive positioning strategy that leverages market opportunities and creates sustainable differentiation from competitors."
        }
      },
      {
        title: "Competitive Intelligence Framework",
        description: "Build framework and tools for ongoing competitive awareness",
        icon: Eye,
        details: {
          overview: "Create practical tools for tracking competitive changes and market shifts. We give you the framework and analysis methods to stay competitive.",
          whatYouGet: [
            "Competitive tracking framework with key metrics and indicators to monitor",
            "Analysis templates and tools for evaluating competitive moves",
            "Market change indicators and strategic shift warning signs",
            "Competitive briefing templates for regular team updates"
          ],
          process: [
            "Competitive tracking framework design based on strategic priorities",
            "Analysis template creation for evaluating threats and opportunities",
            "Key indicator identification and market monitoring guidelines",
            "Executive briefing on competitive analysis tools and framework usage"
          ],
          outcome: "A practical competitive tracking framework that your team can use to stay informed about market changes and competitive threats."
        }
      }
    ] as MethodologyItem[]
  }
};