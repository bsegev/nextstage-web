import { TrendingUp, FileText, Palette, Users } from 'lucide-react';
import { PerformanceMetricsData } from '@/components/deliverables/service-layout/DeliverablePerformanceMetrics';
import { MethodologyItem } from '@/components/deliverables/service-layout/DeliverableMethodology';

export const marketingCollateralDeliverable = {
  // Hero (Above the fold)
  title: "Marketing Collateral",
  tagline: "Sales materials that actually help you close deals",
  description: "Where your business story meets professional design—so every brochure, proposal, and sales piece reinforces your brand and moves prospects toward buying.",
  
  // The NextStage Way
  ourApproach: {
    headline: "Business strategy, brand consistency & sales effectiveness working together",
    description: "We don't create generic brochures or templates you could get anywhere. We design custom marketing materials that reflect your specific business, support your sales process, and reinforce your brand at every touchpoint.",
    keyPrinciple: "Marketing collateral that drives sales results, not just looks professional"
  },
  
  // What This Actually Is
  whatItIs: {
    realDefinition: "Custom-designed marketing materials that support your sales process while maintaining perfect brand consistency across every piece.",
    notJust: "Generic brochure templates or stock design layouts",
    butAlso: "Complete marketing material system designed specifically for your business, your sales process, and your brand"
  },
  
  // The Process
  process: [
    {
      phase: "Strategy",
      whatWeDo: "Understand your sales process and what materials you need to support it",
      whatEmerges: "Clear plan for materials that actually help your team sell"
    },
    {
      phase: "Design",
      whatWeDo: "Create custom designs that reflect your brand and communicate your value",
      whatEmerges: "Professional materials that make your business look established and credible"
    },
    {
      phase: "System",
      whatWeDo: "Build consistent design framework across all your marketing materials",
      whatEmerges: "Cohesive brand experience that reinforces your value at every touchpoint"
    },
    {
      phase: "Optimize",
      whatWeDo: "Refine based on how materials perform in real sales situations",
      whatEmerges: "Marketing collateral that gets better at supporting sales over time"
    }
  ],
  
  // Business Value
  outcomes: {
    primary: "Professional marketing materials that support your sales process and reinforce your brand",
    secondary: "Consistent brand experience across all customer touchpoints and sales interactions",
    longTerm: "Complete marketing material system that scales with your business and maintains quality"
  },
  
  // Discovery
  discovery: {
    price: "$250",
    duration: "60 minutes",
    whatWeExplore: [
      "Your current sales process and what materials you need to support it",
      "How your team currently uses marketing materials and where they're lacking",
      "Your brand standards and how materials should reflect your business",
      "What success looks like for your marketing materials in real sales situations"
    ],
    whatYouGet: [
      "Assessment of your current materials and what's working or missing",
      "Custom strategy for materials that will actually support your sales process",
      "Plan for maintaining brand consistency across all your marketing touchpoints",
      "Full discovery credit toward your project"
    ]
  },

  // Performance Metrics
  performanceMetrics: {
    title: "Marketing Collateral Business Impact",
    description: "What happens when your materials actually work for your business",
    metric: {
      value: "+80%",
      number: 80,
      label: "Brand Recognition Increase",
      description: "Maintaining a consistent color palette and visual identity across collateral increases brand recognition by +80%, directly supporting conversion uplift and sales performance",
      icon: TrendingUp
    },
    bottomMessage: "Marketing collateral that drives brand recognition and supports sales success"
  } as PerformanceMetricsData,

  // Methodology
  methodology: {
    title: "Everything you need for marketing materials that work for your business",
    subtitle: "Our process creates custom marketing collateral designed specifically for your brand, your sales process, and your business goals.",
    items: [
      {
        title: "Sales Process & Material Strategy",
        description: "Understand exactly what materials your business needs and how they support sales",
        icon: FileText,
        details: {
          overview: "We start by understanding your sales process and what materials actually help you close deals. Not generic brochures—materials that work for your specific business and sales approach.",
          whatYouGet: [
            "Analysis of your sales process and where materials can make the biggest impact",
            "Custom strategy for materials that support each stage of your customer journey",
            "Material prioritization based on what will drive the most business value",
            "Integration plan that connects materials to your broader marketing and sales efforts"
          ],
          process: [
            "Sales process analysis to understand how materials fit into customer conversations",
            "Material audit to see what's currently working and what's missing or ineffective",
            "Strategy development for materials that will actually support your sales goals",
            "Prioritization planning based on business impact and resource allocation"
          ],
          outcome: "Clear understanding of exactly what marketing materials your business needs and how they should work to support your sales and business goals."
        }
      },
      {
        title: "Custom Design & Brand Integration",
        description: "Create materials that reflect your brand and communicate your value effectively",
        icon: Palette,
        details: {
          overview: "We design custom marketing materials that look professional and reflect your specific business. Not generic templates—custom designs that work for your brand and your audience.",
          whatYouGet: [
            "Custom-designed materials that reflect your brand and business positioning",
            "Professional design that makes your business look established and credible",
            "Materials optimized for how your team actually uses them in sales situations",
            "Design system that maintains consistency across all your marketing touchpoints"
          ],
          process: [
            "Custom design development based on your brand, audience, and business objectives",
            "Material creation that balances professional appearance with practical usability",
            "Brand integration to ensure consistency across all customer touchpoints",
            "Design optimization based on real-world usage and sales team feedback"
          ],
          outcome: "Professional marketing materials that are custom-designed for your business and support your sales process while maintaining perfect brand consistency."
        }
      },
      {
        title: "Implementation & Quality Control",
        description: "Build systems that maintain quality and consistency as your business grows",
        icon: Users,
        details: {
          overview: "We create systems that ensure your marketing materials maintain quality and brand consistency as your business scales. Guidelines and processes that work for your team.",
          whatYouGet: [
            "Implementation guidelines that ensure materials are used consistently and effectively",
            "Quality control processes that maintain brand standards across all materials",
            "Team training on how to use and maintain your marketing material system",
            "Scaling framework that grows with your business and evolving material needs"
          ],
          process: [
            "Implementation planning based on your team capabilities and business workflow",
            "Quality control system development to maintain consistency and professional standards",
            "Team training and documentation to ensure proper usage and brand compliance",
            "Scaling strategy that adapts as your business grows and material needs evolve"
          ],
          outcome: "A marketing collateral system that maintains professional quality and brand consistency while scaling effectively with your business growth."
        }
      }
    ] as MethodologyItem[]
  }
};