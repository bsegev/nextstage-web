import { TrendingUp, Target, Palette, Users } from 'lucide-react';
import { PerformanceMetricsData } from '@/components/deliverables/service-layout/DeliverablePerformanceMetrics';
import { MethodologyItem } from '@/components/deliverables/service-layout/DeliverableMethodology';

export const brandIdentityDeliverable = {
  // Hero (Above the fold)
  title: "Brand Identity",
  tagline: "Professional brand systems that work for business, not just Instagram",
  description: "Where your real business value meets visual identity that actually drives results—so customers understand what you do and choose you over competitors.",
  
  // The NextStage Way
  ourApproach: {
    headline: "Business strategy, design & implementation working together",
    description: "We don't create pretty logos in isolation. We build brand systems based on your business strategy and market position, then implement them across everything your customers see.",
    keyPrinciple: "Brand identity that drives business results, not just brand recognition"
  },
  
  // What This Actually Is
  whatItIs: {
    realDefinition: "A complete visual identity system that communicates your business value clearly and consistently across every customer touchpoint.",
    notJust: "A logo and color palette that looks good",
    butAlso: "A strategic brand system that helps customers understand your value and drives measurable business growth"
  },
  
  // The Process
  process: [
    {
      phase: "Strategy",
      whatWeDo: "Research your market position and competitive landscape",
      whatEmerges: "Clear brand positioning that differentiates you from competitors"
    },
    {
      phase: "Identity",
      whatWeDo: "Design visual system that communicates your strategic position",
      whatEmerges: "Professional brand identity that builds trust and recognition"
    },
    {
      phase: "System",
      whatWeDo: "Create guidelines and assets for consistent implementation",
      whatEmerges: "Complete brand toolkit that your team can use immediately"
    },
    {
      phase: "Launch",
      whatWeDo: "Help implement across key touchpoints and provide executive guidance",
      whatEmerges: "Brand system working across all customer interactions"
    }
  ],
  
  // Business Value
  outcomes: {
    primary: "Professional brand that justifies premium pricing and builds customer trust",
    secondary: "Consistent visual identity that makes you look bigger than you are",
    longTerm: "Brand foundation that scales with your business and attracts ideal customers"
  },
  
  // Discovery
  discovery: {
    price: "$250",
    duration: "60 minutes",
    whatWeExplore: [
      "Your business model and what makes you different",
      "Who your ideal customers are and what they value",
      "Your current brand challenges and market position",
      "Where you want to be positioned in 12-18 months"
    ],
    whatYouGet: [
      "Honest assessment of your current brand and competitive position",
      "Clear recommendations for stronger market positioning",
      "Brand strategy roadmap with realistic timelines and priorities",
      "Full discovery credit toward project"
    ]
  },

  // Performance Metrics
  performanceMetrics: {
    title: "Brand Identity Business Impact",
    description: "What happens when your brand actually works for your business",
    metric: {
      value: "+23%",
      number: 23,
      label: "Revenue Increase",
      description: "Consistent logo use across platforms is linked to a 23% increase in revenue",
      icon: TrendingUp
    },
    bottomMessage: "Brand identity that drives measurable business growth"
  } as PerformanceMetricsData,

  // Methodology
  methodology: {
    title: "Everything you need for professional brand success",
    subtitle: "Our brand identity process combines business strategy with visual design to create systems that work for your customers and your business.",
    items: [
      {
        title: "Strategic Brand Foundation",
        description: "Research your market and define your unique position before any design starts",
        icon: Target,
        details: {
          overview: "We start with business strategy, not design trends. Who are your competitors? What do customers actually care about based on available data? How can you position differently?",
          whatYouGet: [
            "Competitive analysis showing how others position themselves",
            "Customer intelligence revealing what drives their buying decisions",
            "Clear brand positioning that differentiates you in the market",
            "Strategic foundation that guides all design decisions"
          ],
          process: [
            "Market research and competitive landscape analysis",
            "Customer intelligence development using available market data and insights",
            "Brand positioning analysis and differentiation strategy development",
            "Strategic foundation documentation and positioning framework creation"
          ],
          outcome: "A clear understanding of how your brand should position in the market and what visual identity needs to communicate to customers."
        }
      },
      {
        title: "Visual Identity Development",
        description: "Create professional visual system that communicates your strategic position",
        icon: Palette,
        details: {
          overview: "Design that serves your business strategy. Every color, font, and visual choice reinforces your market position and builds customer trust.",
          whatYouGet: [
            "Complete visual identity system including logo, colors, and typography",
            "Brand guidelines showing how to use everything consistently",
            "Asset library with all the pieces your team needs immediately",
            "Visual system that works across digital and print applications"
          ],
          process: [
            "Design exploration based on strategic positioning requirements",
            "Visual system development with business application focus",
            "Brand guideline creation with practical usage examples",
            "Asset preparation and implementation guide development"
          ],
          outcome: "A professional visual identity that makes you look established, builds customer trust, and consistently communicates your value."
        }
      },
      {
        title: "Brand Implementation System",
        description: "Build tools and processes so your team can use the brand consistently",
        icon: Users,
        details: {
          overview: "The best brand identity is useless if your team can't implement it consistently. We create systems that make consistency easy and automatic.",
          whatYouGet: [
            "Brand application templates for common business needs",
            "Implementation guidelines for different team members and contexts",
            "Quality control checklists to maintain brand consistency",
            "Executive briefing materials so leadership understands how to manage brand usage"
          ],
          process: [
            "Implementation planning based on your specific business needs",
            "Template and guideline development for key applications",
            "Executive briefing and implementation process documentation",
            "Quality control system setup and ongoing management framework"
          ],
          outcome: "A brand system that your team can use confidently and consistently, maintaining professional appearance across all customer touchpoints."
        }
      }
    ] as MethodologyItem[]
  }
};