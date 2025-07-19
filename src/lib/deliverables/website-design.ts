import { TrendingUp, Monitor, Palette, Users } from 'lucide-react';
import { PerformanceMetricsData } from '@/components/deliverables/service-layout/DeliverablePerformanceMetrics';
import { MethodologyItem } from '@/components/deliverables/service-layout/DeliverableMethodology';

export const websiteDesignDeliverable = {
  // Hero (Above the fold)
  title: "Website Design",
  tagline: "Websites that turn visitors into customers for your business",
  description: "Where your brand meets user experience—so every visitor understands your value, trusts your business, and takes action that drives your growth.",
  
  // The NextStage Way
  ourApproach: {
    headline: "Business strategy, user experience & conversion optimization working together",
    description: "We don't build generic websites or use cookie-cutter templates. We design custom websites that reflect your specific business, serve your actual customers, and drive the results you need.",
    keyPrinciple: "Website design that drives business results, not just looks professional"
  },
  
  // What This Actually Is
  whatItIs: {
    realDefinition: "A custom-designed website that represents your business professionally while converting visitors into customers and supporting your growth goals.",
    notJust: "A template-based website or generic business site",
    butAlso: "A complete digital presence designed specifically for your business, your customers, and your growth objectives"
  },
  
  // The Process
  process: [
    {
      phase: "Strategy",
      whatWeDo: "Understand your business goals and what your website needs to accomplish",
      whatEmerges: "Clear plan for a website that actually supports your business objectives"
    },
    {
      phase: "Experience",
      whatWeDo: "Design user experience that guides visitors toward taking action",
      whatEmerges: "Website flow that makes it easy for customers to understand and choose your business"
    },
    {
      phase: "Design",
      whatWeDo: "Create custom visual design that reflects your brand and builds trust",
      whatEmerges: "Professional website that makes your business look established and credible"
    },
    {
      phase: "Optimize",
      whatWeDo: "Test and refine based on how real visitors actually use your site",
      whatEmerges: "Website that gets better at converting visitors into customers over time"
    }
  ],
  
  // Business Value
  outcomes: {
    primary: "Professional website that converts visitors into customers and supports your business growth",
    secondary: "Strong digital presence that builds trust and makes your business look established",
    longTerm: "Scalable website foundation that grows with your business and continues driving results"
  },
  
  // Discovery
  discovery: {
    price: "$250",
    duration: "60 minutes",
    whatWeExplore: [
      "Your business goals and what you need your website to accomplish",
      "Who visits your site and what they're looking for when they get there",
      "Your current website challenges and what's not working for your business",
      "How your website fits into your broader business and marketing strategy"
    ],
    whatYouGet: [
      "Assessment of your current website and what's working or holding you back",
      "Strategy for a website that will actually support your business goals",
      "User experience recommendations based on your specific customers and objectives",
      "Full discovery credit toward your project"
    ]
  },

  // Performance Metrics
  performanceMetrics: {
    title: "Website Design Business Impact",
    description: "What happens when your website actually works for your business",
    metric: {
      value: "94%",
      number: 94,
      label: "More Likely to Stay and Return",
      description: "94% of users are more likely to stay on, or revisit, a website with appealing design, leading to higher conversion and sales performance",
      icon: TrendingUp
    },
    bottomMessage: "Website design that drives visitor engagement and business results"
  } as PerformanceMetricsData,

  // Methodology
  methodology: {
    title: "Everything you need for a website that works for your business",
    subtitle: "Our website design process creates custom sites designed specifically for your business goals, your customers, and your growth objectives.",
    items: [
      {
        title: "Business Strategy & User Experience Planning",
        description: "Understand your business goals and design user experience that drives results",
        icon: Monitor,
        details: {
          overview: "We start by understanding what your business needs from your website and who you're trying to reach. Then we plan user experience that guides visitors toward becoming customers.",
          whatYouGet: [
            "Clear connection between your website strategy and specific business goals",
            "User experience planning based on your actual customers and their needs",
            "Site architecture that makes it easy for visitors to find what they need and take action",
            "Conversion strategy that turns website visitors into business results"
          ],
          process: [
            "Business goal alignment to understand what your website needs to accomplish",
            "User research to understand who visits your site and what they're looking for",
            "Site planning that creates clear paths from visitor interest to customer action",
            "Conversion optimization strategy based on your specific business objectives"
          ],
          outcome: "A website strategy that connects user experience to your business goals, making it easy for visitors to become customers."
        }
      },
      {
        title: "Custom Design & Brand Integration",
        description: "Create professional website design that reflects your business and builds trust",
        icon: Palette,
        details: {
          overview: "We design custom websites that look professional and reflect your specific business. Not template-based designs—custom websites that work for your brand and your customers.",
          whatYouGet: [
            "Custom website design that reflects your brand and business positioning",
            "Professional design that makes your business look established and trustworthy",
            "Visual design optimized for your specific customers and business objectives",
            "Mobile-responsive design that works perfectly on all devices your customers use"
          ],
          process: [
            "Custom design development based on your brand, customers, and business goals",
            "Visual design that balances professional appearance with user experience effectiveness",
            "Brand integration to ensure your website reinforces your business identity",
            "Responsive design optimization for all devices and user contexts"
          ],
          outcome: "A custom-designed website that represents your business professionally while providing excellent user experience across all devices."
        }
      },
      {
        title: "Development & Optimization",
        description: "Build and optimize your website for performance and business results",
        icon: Users,
        details: {
          overview: "We develop your website with focus on performance, user experience, and business results. Then we optimize based on how real visitors actually use your site.",
          whatYouGet: [
            "Professional website development with focus on speed and user experience",
            "Content management system that makes it easy for your team to maintain the site",
            "Analytics and tracking setup so you can see how your website drives business results",
            "Optimization recommendations based on real user behavior and business performance"
          ],
          process: [
            "Website development with focus on performance, security, and user experience",
            "Content management setup that works for your team and business workflow",
            "Analytics implementation to track website performance and business impact",
            "Optimization planning based on user behavior data and business results"
          ],
          outcome: "A high-performing website that delivers excellent user experience while driving measurable business results for your company."
        }
      }
    ] as MethodologyItem[]
  }
};