import { Presentation, Eye, BarChart } from 'lucide-react';
import { PerformanceMetricsData } from '@/components/deliverables/service-layout/DeliverablePerformanceMetrics';
import { MethodologyItem } from '@/components/deliverables/service-layout/DeliverableMethodology';

export const pitchDeckDesignDeliverable = {
  // Hero (Above the fold)
  title: "Pitch Deck Design",
  tagline: "Investor-ready presentations that get meetings, not rejections",
  description: "Where your business story meets compelling visual design—so investors understand your opportunity and want to be part of your success.",
  
  // The NextStage Way
  ourApproach: {
    headline: "Business strategy, storytelling & design working together",
    description: "We don't just make slides look professional. We work with your business model to create narrative flow that builds investor confidence through strategic storytelling and cinematic visuals.",
    keyPrinciple: "Pitch decks that open doors and close deals, not just look pretty"
  },
  
  // What This Actually Is
  whatItIs: {
    realDefinition: "A strategically crafted presentation that tells your business story in a way that builds investor confidence and drives funding conversations.",
    notJust: "A slide template with your content dropped in",
    butAlso: "A complete investor communication tool that positions your business for funding success and scales with your growth"
  },
  
  // The Process
  process: [
    {
      phase: "Story",
      whatWeDo: "Map your business narrative and key investor decision points",
      whatEmerges: "Clear story arc that builds to your funding opportunity"
    },
    {
      phase: "Structure",
      whatWeDo: "Organize content flow to address investor concerns systematically",
      whatEmerges: "Logical presentation that anticipates and answers investor questions"
    },
    {
      phase: "Design",
      whatWeDo: "Create cinematic visuals that enhance story without distraction",
      whatEmerges: "Professional presentation that builds credibility and investor confidence"
    },
    {
      phase: "Optimize",
      whatWeDo: "Refine based on investor feedback patterns and funding best practices",
      whatEmerges: "Pitch deck ready for serious investor conversations and due diligence"
    }
  ],
  
  // Business Value
  outcomes: {
    primary: "Professional presentation that gets investor meetings and follow-up conversations",
    secondary: "Clear business story that builds confidence in your opportunity and team",
    longTerm: "Scalable investor communication tool that works across funding stages and investor types"
  },
  
  // Discovery
  discovery: {
    price: "$250",
    duration: "60 minutes",
    whatWeExplore: [
      "Your business model and competitive advantage",
      "Your funding goals and target investor profile",
      "Your current pitch challenges and investor feedback",
      "Key story elements that drive investor interest and confidence"
    ],
    whatYouGet: [
      "Honest assessment of your business story and presentation gaps",
      "Investor psychology analysis and concern mapping strategy",
      "Content structure recommendations and narrative flow optimization",
      "Full discovery credit toward project"
    ]
  },

  // Performance Metrics
  performanceMetrics: {
    title: "Pitch Performance Results",
    description: "What happens when your presentation actually works with investors",
    metric: {
      value: "3x",
      number: 3,
      label: "More Successful Investor Meetings",
      description: "Well-designed investor materials result in up to 3x more successful investor meetings",
      source: "VC/Startup industry consensus",
      icon: Presentation
    },
    bottomMessage: "Pitch decks that turn investor conversations into funding opportunities"
  } as PerformanceMetricsData,

  // Methodology
  methodology: {
    title: "Everything you need to win investor confidence",
    subtitle: "Our pitch deck process combines Y Combinator-style strategic storytelling with cinematic design to create presentations that drive funding success.",
    items: [
      {
        title: "Business Story & Narrative Development",
        description: "Craft compelling business narrative that systematically builds investor confidence",
        icon: Presentation,
        details: {
          overview: "We help structure your business story to address investor psychology and decision-making. What do they need to believe? When do they need to believe it? How do we prove it?",
          whatYouGet: [
            "Complete business narrative structure following proven investor frameworks",
            "Key message development that addresses investor concerns systematically",
            "Compelling value proposition and market opportunity framing",
            "Risk mitigation strategy and competitive differentiation story"
          ],
          process: [
            "Business model analysis and investor concern identification",
            "Story structure development using Y Combinator and proven funding frameworks",
            "Message hierarchy creation and proof point development",
            "Narrative optimization and strategic framework integration"
          ],
          outcome: "A powerful business story that systematically builds investor confidence and addresses their key concerns about market, model, and execution."
        }
      },
      {
        title: "Cinematic Visual Design & Data Presentation",
        description: "Create professional presentation that enhances credibility and engagement",
        icon: Eye,
        details: {
          overview: "Design presentation that looks like it came from a top-tier consulting firm. Professional visuals that build confidence in your business and team capabilities.",
          whatYouGet: [
            "Complete slide design with cinematic visual language and consistent branding",
            "Data visualization and financial modeling presentation optimization",
            "Professional presentation template integrated with your brand identity",
            "Visual hierarchy that guides investor attention to key decision points"
          ],
          process: [
            "Visual strategy development based on investor psychology and engagement",
            "Slide-by-slide design with focus on story flow and credibility building",
            "Data visualization optimization for financial projections and market data",
            "Design refinement and presentation optimization for different contexts"
          ],
          outcome: "A polished, professional presentation that enhances your credibility and makes complex business information easy for investors to understand and remember."
        }
      },
      {
        title: "Investor Optimization & Performance Tracking",
        description: "Refine presentation based on investor feedback and funding best practices",
        icon: BarChart,
        details: {
          overview: "Optimize your presentation for maximum investor impact using proven frameworks and funding best practices based on successful funding patterns.",
          whatYouGet: [
            "Content optimization based on funding best practices and investor psychology patterns",
            "Presentation flow refinement for maximum impact and engagement",
            "Multiple format versions for different investor contexts and meeting types",
            "Performance tracking recommendations and iteration guidelines"
          ],
          process: [
            "Content review and optimization based on funding best practices and investor psychology",
            "Flow testing and refinement for logical progression and investor psychology",
            "Format adaptation for pitch competitions, investor meetings, and due diligence",
            "Performance tracking setup and continuous improvement recommendations"
          ],
          outcome: "An optimized presentation that consistently performs well in investor meetings and adapts effectively to different funding contexts and investor types."
        }
      }
    ] as MethodologyItem[]
  }
};