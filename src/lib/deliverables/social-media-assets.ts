import { TrendingUp, Image, Palette, Users } from 'lucide-react';
import { PerformanceMetricsData } from '@/components/deliverables/service-layout/DeliverablePerformanceMetrics';
import { MethodologyItem } from '@/components/deliverables/service-layout/DeliverableMethodology';

export const socialMediaAssetsDeliverable = {
  // Hero (Above the fold)
  title: "Social Media Assets",
  tagline: "Custom social presence that works for your business and your audience",
  description: "Where your unique brand meets platform expertise—so you look professional and consistent whether customers find you on LinkedIn, Instagram, or anywhere else.",
  
  // The NextStage Way
  ourApproach: {
    headline: "Custom design, platform expertise & your business goals working together",
    description: "We don't use generic templates or one-size-fits-all solutions. We create custom social media systems built specifically for your brand, your audience, and your business objectives.",
    keyPrinciple: "Custom social presence that performs on every platform"
  },
  
  // What This Actually Is
  whatItIs: {
    realDefinition: "A custom social media design system built specifically for your brand that works across all platforms while driving real engagement.",
    notJust: "Generic templates you could find anywhere or cookie-cutter social graphics",
    butAlso: "Custom assets and frameworks designed for your specific business, audience, and goals"
  },
  
  // The Process
  process: [
    {
      phase: "Audit",
      whatWeDo: "Review your current social presence and platform-specific requirements",
      whatEmerges: "Clear understanding of brand consistency gaps and engagement opportunities"
    },
    {
      phase: "System",
      whatWeDo: "Create design templates and guidelines optimized for each platform",
      whatEmerges: "Consistent visual language that maximizes engagement on each channel"
    },
    {
      phase: "Create",
      whatWeDo: "Design initial asset library with platform-specific optimizations",
      whatEmerges: "Ready-to-use social media assets that maintain brand consistency and drive results"
    },
    {
      phase: "Scale",
      whatWeDo: "Build tools and processes so your team can create consistent assets efficiently",
      whatEmerges: "Self-sustaining social media design system that scales with your business"
    }
  ],
  
  // Business Value
  outcomes: {
    primary: "Professional social presence that builds brand recognition and drives engagement",
    secondary: "Consistent visual identity that makes you instantly recognizable across platforms",
    longTerm: "Scalable social media system that maintains quality while reducing content creation overhead"
  },
  
  // Discovery
  discovery: {
    price: "$250",
    duration: "60 minutes",
    whatWeExplore: [
      "Your current social presence and what's working (or not working) for your business",
      "Which platforms actually matter for reaching your customers",
      "How your team currently creates content and where the bottlenecks are",
      "What success looks like for your business on social media"
    ],
    whatYouGet: [
      "Honest assessment of where your social presence stands today",
      "Clear recommendations for which platforms deserve your attention",
      "Custom strategy for streamlining your content creation process",
      "Full discovery credit toward your project"
    ]
  },

  // Performance Metrics
  performanceMetrics: {
    title: "Social Media Performance Results",
    description: "What happens when your social presence actually works consistently",
    metric: {
      value: "77%",
      number: 77,
      label: "Customer Acquisition Impact",
      description: "Consumers prefer shopping with brands they follow on social media, indicating substantial impact on customer acquisition and repeat sales",
      icon: TrendingUp
    },
    bottomMessage: "Social media assets that build brand recognition and drive measurable business results"
  } as PerformanceMetricsData,

  // Methodology
  methodology: {
    title: "Everything you need for professional social media that works for your business",
    subtitle: "Our process creates custom social media assets designed specifically for your brand, your audience, and your business goals.",
    items: [
      {
        title: "Platform Research & Custom Strategy",
        description: "Understand how your audience behaves on each platform and design your approach accordingly",
        icon: Image,
        details: {
          overview: "We research how your specific audience uses each platform and create a custom strategy just for your business. Not generic best practices—what actually works for your customers.",
          whatYouGet: [
            "Custom analysis of how your audience engages on LinkedIn, Instagram, TikTok, and other relevant platforms",
            "Platform strategy designed specifically for your business goals and customer behavior",
            "Audience research showing what your customers actually respond to on social media",
            "Custom brand integration plan that works across all your important platforms"
          ],
          process: [
            "Research your specific audience behavior and preferences on each platform",
            "Analyze what's currently working (and not working) for your business on social",
            "Design custom platform strategy based on your business goals and customer needs",
            "Create platform-specific brand guidelines that maintain consistency while optimizing performance"
          ],
          outcome: "Clear understanding of exactly how your brand should show up on each platform to reach your customers and drive your business goals."
        }
      },
      {
        title: "Custom Asset Creation & Brand Systems",
        description: "Build assets and frameworks designed specifically for your brand and business",
        icon: Palette,
        details: {
          overview: "We create custom social media assets built specifically for your brand. Not generic templates—custom designs that reflect your business and resonate with your audience.",
          whatYouGet: [
            "Custom asset library designed specifically for your brand and business needs",
            "Platform-optimized designs that work for your specific content and audience",
            "Custom frameworks for different content types that match your business goals",
            "Brand-specific design systems that your team can use and build on"
          ],
          process: [
            "Design custom assets based on your brand, audience, and business objectives",
            "Create platform-specific variations that maintain your brand while optimizing for each channel",
            "Build custom frameworks and systems that work for your specific content needs",
            "Test and refine everything to ensure it works for your business and team"
          ],
          outcome: "Custom social media assets that are uniquely yours and designed to work specifically for your business and audience."
        }
      },
      {
        title: "Team Setup & Custom Implementation",
        description: "Build systems that work for your team and your business workflow",
        icon: Users,
        details: {
          overview: "We set up systems that work specifically for your team and your business. How you work, who's involved, what you need—everything customized for your situation.",
          whatYouGet: [
            "Custom workflow designed for how your team actually works",
            "Executive briefing and setup specific to your business needs and team capabilities",
            "Quality guidelines that maintain your brand standards across all content",
            "Scaling plan that grows with your business and evolving needs"
          ],
          process: [
            "Design workflow that fits your team, timeline, and business requirements",
            "Provide executive briefing on the custom systems and assets we've created for you",
            "Set up quality control processes that work for your business standards",
            "Create scaling strategy that adapts as your business and social presence grow"
          ],
          outcome: "A social media system that works specifically for your business, your team, and your goals—not a generic solution."
        }
      }
    ] as MethodologyItem[]
  }
};