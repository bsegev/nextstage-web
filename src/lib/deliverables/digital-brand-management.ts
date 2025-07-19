import { TrendingUp, Shield, Monitor, Users } from 'lucide-react';
import { PerformanceMetricsData } from '@/components/deliverables/service-layout/DeliverablePerformanceMetrics';
import { MethodologyItem } from '@/components/deliverables/service-layout/DeliverableMethodology';

export const digitalBrandManagementDeliverable = {
  // Hero (Above the fold)
  title: "Digital Brand Management",
  tagline: "Keep your brand consistent everywhere your customers find you online",
  description: "Where your brand standards meet digital reality—so every website, social profile, and online presence reinforces your professional image and business value.",
  
  // The NextStage Way
  ourApproach: {
    headline: "Brand strategy, digital systems & ongoing management working together",
    description: "We don't just create brand guidelines that sit in a folder. We build digital brand management systems that ensure your brand stays consistent across every online touchpoint where customers encounter your business.",
    keyPrinciple: "Digital brand presence that builds trust and drives business results"
  },
  
  // What This Actually Is
  whatItIs: {
    realDefinition: "A complete system for maintaining consistent brand standards across all your digital presence, from websites to social media to online partnerships.",
    notJust: "Brand guidelines document or one-time brand audit",
    butAlso: "Ongoing brand management system that ensures consistency as your digital presence grows and evolves"
  },
  
  // The Process
  process: [
    {
      phase: "Audit",
      whatWeDo: "Review every place your brand appears online and assess consistency",
      whatEmerges: "Clear picture of where your brand is strong and where it needs improvement"
    },
    {
      phase: "Standards",
      whatWeDo: "Create clear brand guidelines that work for digital applications",
      whatEmerges: "Practical standards your team can actually follow and implement"
    },
    {
      phase: "Implement",
      whatWeDo: "Apply consistent branding across all your digital touchpoints",
      whatEmerges: "Professional, consistent brand presence everywhere customers find you"
    },
    {
      phase: "Monitor",
      whatWeDo: "Set up systems to maintain consistency as your digital presence evolves",
      whatEmerges: "Ongoing brand management that keeps quality high as you grow"
    }
  ],
  
  // Business Value
  outcomes: {
    primary: "Consistent professional brand presence across every digital touchpoint where customers find you",
    secondary: "Clear systems and guidelines that maintain brand quality as your business grows",
    longTerm: "Strong digital brand reputation that builds customer trust and supports business growth"
  },
  
  // Discovery
  discovery: {
    price: "$250",
    duration: "60 minutes",
    whatWeExplore: [
      "Every place your brand appears online and how consistent it currently is",
      "Your brand standards and how well they translate to digital applications",
      "Your team's current process for maintaining brand consistency online",
      "What digital brand management success looks like for your business"
    ],
    whatYouGet: [
      "Complete audit of your current digital brand presence and consistency gaps",
      "Assessment of what's working well and what needs immediate attention",
      "Strategy for maintaining professional brand standards across all digital touchpoints",
      "Full discovery credit toward your project"
    ]
  },

  // Performance Metrics
  performanceMetrics: {
    title: "Digital Brand Management Results",
    description: "What happens when your digital brand actually works consistently",
    metric: {
      value: "35%",
      number: 35,
      label: "See Revenue Growth",
      description: "35% of organizations saw 10-20% revenue growth due to consistent digital branding and enforcement of brand guidelines",
      icon: TrendingUp
    },
    bottomMessage: "Digital brand management that builds trust and drives measurable business results"
  } as PerformanceMetricsData,

  // Methodology
  methodology: {
    title: "Everything you need for consistent digital brand presence",
    subtitle: "Our digital brand management process ensures your brand looks professional and consistent everywhere customers encounter your business online.",
    items: [
      {
        title: "Digital Brand Audit & Assessment",
        description: "Review every digital touchpoint to understand your current brand consistency",
        icon: Monitor,
        details: {
          overview: "We examine every place your brand appears online to understand where you're strong and where inconsistencies are hurting your professional image and customer trust.",
          whatYouGet: [
            "Complete audit of all your digital brand touchpoints and current consistency levels",
            "Assessment of brand strength and weakness areas across your online presence",
            "Gap analysis showing where improvements will have the biggest business impact",
            "Priority recommendations for digital brand improvements that drive results"
          ],
          process: [
            "Comprehensive review of websites, social profiles, digital marketing, and online partnerships",
            "Brand consistency analysis across all customer-facing digital touchpoints",
            "Assessment of current brand guidelines and how well they work for digital applications",
            "Impact analysis to prioritize improvements based on customer touchpoint importance"
          ],
          outcome: "Clear understanding of your current digital brand strength and a prioritized plan for improvements that will build customer trust and business results."
        }
      },
      {
        title: "Digital Brand Standards & Guidelines",
        description: "Create practical brand standards that work for your digital applications",
        icon: Shield,
        details: {
          overview: "We develop brand guidelines that are specifically designed for digital use—practical standards your team can actually follow to maintain consistency across all online touchpoints.",
          whatYouGet: [
            "Digital-specific brand guidelines that cover websites, social media, and online marketing",
            "Practical standards that your team can easily understand and implement consistently",
            "Template and asset libraries that make it easy to maintain brand consistency",
            "Clear approval processes that ensure quality while keeping work moving efficiently"
          ],
          process: [
            "Digital brand standards development based on your business needs and team capabilities",
            "Guideline creation that balances brand consistency with practical team implementation",
            "Asset and template library development for common digital brand applications",
            "Process design for maintaining standards while enabling efficient team workflow"
          ],
          outcome: "Practical digital brand standards that your team can actually follow, with the tools and processes needed to maintain consistency across all touchpoints."
        }
      },
      {
        title: "Implementation & Ongoing Management",
        description: "Build systems that maintain brand consistency as your digital presence grows",
        icon: Users,
        details: {
          overview: "We implement your brand standards across all digital touchpoints and create systems to maintain consistency as your business grows and your online presence evolves.",
          whatYouGet: [
            "Implementation of consistent branding across all your current digital touchpoints",
            "Systems and processes for maintaining brand consistency as you add new digital presence",
            "Team training on digital brand standards and how to maintain them effectively",
            "Ongoing monitoring and optimization to ensure brand quality stays high over time"
          ],
          process: [
            "Brand implementation across existing digital touchpoints and platforms",
            "System development for maintaining consistency as digital presence expands",
            "Team training and process documentation for sustainable brand management",
            "Monitoring and optimization framework for ongoing brand quality improvement"
          ],
          outcome: "A digital brand management system that maintains professional consistency across all touchpoints while scaling effectively with your business growth."
        }
      }
    ] as MethodologyItem[]
  }
};