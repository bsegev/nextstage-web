import { TrendingUp, Target, Compass, FileText } from 'lucide-react';
import { PerformanceMetricsData } from '@/components/deliverables/service-layout/DeliverablePerformanceMetrics';
import { MethodologyItem } from '@/components/deliverables/service-layout/DeliverableMethodology';

export const contentStrategyDeliverable = {
  // Hero (Above the fold)
  title: "Content Strategy",
  tagline: "Custom content that actually drives your business forward",
  description: "Where your business goals meet content that works—so every piece you publish connects with your audience and moves them toward becoming customers.",
  
  // The NextStage Way
  ourApproach: {
    headline: "Business strategy, audience research & content creation working together",
    description: "We don't create generic content calendars or one-size-fits-all approaches. We build custom content strategies designed specifically for your business goals, your audience, and how you actually work.",
    keyPrinciple: "Content strategy that drives business results, not just engagement"
  },
  
  // What This Actually Is
  whatItIs: {
    realDefinition: "A custom content plan that connects your business goals to specific content that drives real results for your company.",
    notJust: "Generic blog topics or social media calendars you could get anywhere",
    butAlso: "A complete content system designed specifically for your business that turns readers into customers"
  },
  
  // The Process
  process: [
    {
      phase: "Research",
      whatWeDo: "Understand your business goals, audience, and what actually drives results",
      whatEmerges: "Clear picture of what content will work for your specific business"
    },
    {
      phase: "Strategy",
      whatWeDo: "Create custom content plan that connects to your business objectives",
      whatEmerges: "Content strategy designed specifically for your goals and how you measure success"
    },
    {
      phase: "Framework",
      whatWeDo: "Build systems and processes that work for your team and timeline",
      whatEmerges: "Custom content creation system that your team can execute consistently"
    },
    {
      phase: "Optimize",
      whatWeDo: "Track what's working and adjust based on real business results",
      whatEmerges: "Content strategy that gets better over time and drives measurable business growth"
    }
  ],
  
  // Business Value
  outcomes: {
    primary: "Content that actually drives business results and connects to your revenue goals",
    secondary: "Clear system for creating content that works consistently for your business",
    longTerm: "Sustainable content approach that scales with your business and continues driving results"
  },
  
  // Discovery
  discovery: {
    price: "$250",
    duration: "60 minutes",
    whatWeExplore: [
      "Your business goals and how you measure success",
      "Who your customers are and what motivates them to buy",
      "What content challenges you're facing and why current approaches aren't working",
      "How content fits into your broader business strategy and sales process"
    ],
    whatYouGet: [
      "Clear assessment of your current content and what's missing",
      "Custom recommendations for content that will drive your specific business goals",
      "Strategy for connecting content to measurable business results",
      "Full discovery credit toward your project"
    ]
  },

  // Performance Metrics
  performanceMetrics: {
    title: "Content Strategy Business Results",
    description: "What happens when your content actually works for your business",
    metric: {
      value: "67%",
      number: 67,
      label: "More Leads Generated",
      description: "Businesses with documented content strategies generate 67% more leads than those without",
      source: "Industry-wide research consensus",
      icon: TrendingUp
    },
    bottomMessage: "Content strategy that drives measurable business growth, not just traffic"
  } as PerformanceMetricsData,

  // Methodology
  methodology: {
    title: "Everything you need for content that drives real business results",
    subtitle: "Our content strategy process creates custom approaches designed specifically for your business goals, your audience, and your team.",
    items: [
      {
        title: "Business Goals & Audience Research",
        description: "Understand exactly what your business needs from content and who you're trying to reach",
        icon: Target,
        details: {
          overview: "We start by understanding your specific business goals and researching your actual customers. Not generic personas—real research into who buys from you and why.",
          whatYouGet: [
            "Clear connection between your content strategy and specific business objectives",
            "Research into your actual customers and what motivates their buying decisions",
            "Analysis of your current content and what's working (or not working) for your business",
            "Custom strategy for how content fits into your sales process and customer journey"
          ],
          process: [
            "Business goals alignment sessions to understand what success looks like for you",
            "Customer research to understand who actually buys from you and why",
            "Content audit to see what's currently working and what isn't driving results",
            "Competitive analysis to understand what opportunities exist in your market"
          ],
          outcome: "Clear understanding of exactly what your content needs to accomplish for your business and who it needs to reach to drive real results."
        }
      },
      {
        title: "Custom Content Planning & Strategy",
        description: "Create content plan designed specifically for your business goals and audience",
        icon: Compass,
        details: {
          overview: "We create custom content strategies based on your specific business needs. Not generic templates—custom plans that work for your goals, audience, and how you measure success.",
          whatYouGet: [
            "Custom content strategy designed specifically for your business objectives",
            "Content plan that connects directly to your sales process and customer journey",
            "Specific content types and topics that will drive results for your business",
            "Clear measurement framework so you can track how content impacts your business goals"
          ],
          process: [
            "Custom strategy development based on your specific business goals and audience research",
            "Content planning that maps directly to your customer journey and sales process",
            "Topic and format selection based on what will work best for your audience and goals",
            "Measurement framework creation so you can track real business impact"
          ],
          outcome: "A content strategy designed specifically for your business that connects every piece of content to measurable business results."
        }
      },
      {
        title: "Implementation & Optimization System",
        description: "Build systems that work for your team and optimize based on real business results",
        icon: FileText,
        details: {
          overview: "We create implementation systems that work for your team and help you optimize based on what's actually driving business results, not just engagement metrics.",
          whatYouGet: [
            "Custom content creation workflow designed for your team and timeline",
            "Implementation systems that make it easy to execute your content strategy consistently",
            "Optimization framework based on business results, not just traffic or engagement",
            "Ongoing strategy refinement based on what's actually working for your business"
          ],
          process: [
            "Workflow design based on your team capabilities and business timeline",
            "Implementation system setup that makes consistent execution possible",
            "Performance tracking setup focused on business results rather than vanity metrics",
            "Optimization planning so your strategy gets better over time based on real results"
          ],
          outcome: "A content system that your team can execute consistently and that gets better over time based on real business impact."
        }
      }
    ] as MethodologyItem[]
  }
};