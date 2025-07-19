import { TrendingUp, Zap, CheckCircle, Target, BarChart, Eye } from 'lucide-react';
import { PerformanceMetricsData } from '@/components/deliverables/service-layout/DeliverablePerformanceMetrics';
import { MethodologyItem } from '@/components/deliverables/service-layout/DeliverableMethodology';

export const businessIntelligenceDeliverable = {
  // Hero (Above the fold)
  title: "Business Intelligence",
  tagline: "Strategic reporting that drives decisions, not just data dashboards",
  description: "Where your business data meets strategic insight—creating intelligence systems that inform decision-making and stakeholder communication.",
  
  // The NextStage Way
  ourApproach: {
    headline: "Data analysis, strategic reporting & decision support working together",
    description: "We don't just create reports, we design intelligence systems. Our approach combines data analysis with strategic thinking to create reporting that drives informed business decisions.",
    keyPrinciple: "Business intelligence that drives strategic decisions, not just performance monitoring"
  },
  
  // What This Actually Is
  whatItIs: {
    realDefinition: "A comprehensive business intelligence framework that transforms data into strategic insights for decision-making and stakeholder communication.",
    notJust: "A collection of charts or monthly performance reports",
    butAlso: "Strategic intelligence system that provides actionable insights for business decisions, stakeholder updates, and performance optimization"
  },
  
  // The Process
  process: [
    {
      phase: "Assess",
      whatWeDo: "Analyze current reporting and data systems for business intelligence gaps",
      whatEmerges: "Clear understanding of intelligence needs and data opportunities"
    },
    {
      phase: "Design",
      whatWeDo: "Create strategic reporting framework aligned with business objectives",
      whatEmerges: "Business intelligence system that supports decision-making and communication"
    },
    {
      phase: "Build",
      whatWeDo: "Develop reporting tools and dashboards for strategic insight generation",
      whatEmerges: "Comprehensive intelligence platform with actionable business insights"
    },
    {
      phase: "Optimize",
      whatWeDo: "Create frameworks for ongoing intelligence management and stakeholder communication",
      whatEmerges: "Business intelligence system your team can maintain and evolve"
    }
  ],
  
  // Business Value
  outcomes: {
    primary: "Strategic business intelligence that accelerates decision-making and stakeholder communication",
    secondary: "Clear performance insights that guide business optimization and strategic planning",
    longTerm: "Intelligence system that scales with business growth and evolving stakeholder needs"
  },
  
  // Discovery
  discovery: {
    price: "$250",
    duration: "60 minutes",
    whatWeExplore: [
      "Your current reporting processes and business intelligence needs",
      "Key stakeholders and their information requirements for decision-making",
      "Data sources and performance metrics that drive business decisions",
      "Strategic communication needs and intelligence priorities"
    ],
    whatYouGet: [
      "Business intelligence assessment and reporting gap analysis",
      "Strategic intelligence recommendations and framework approach",
      "Business intelligence scope and stakeholder communication planning",
      "Full discovery credit toward project"
    ]
  },

  // Performance Metrics
  performanceMetrics: {
    title: "Business Intelligence Impact",
    description: "What happens when intelligence actually drives business decisions",
    metric: {
      value: "40%",
      number: 40,
      label: "Faster Decision-Making",
      description: "Organizations with strategic business intelligence systems achieve up to 40% faster business decision-making",
      source: "Business intelligence and decision-making research consensus",
      icon: BarChart
    },
    bottomMessage: "Business intelligence that transforms data into strategic competitive advantage"
  } as PerformanceMetricsData,

  // Methodology
  methodology: {
    title: "Everything you need for strategic business intelligence",
    subtitle: "Our business intelligence process combines data analysis with strategic reporting to create intelligence systems that drive informed decision-making and stakeholder communication.",
    items: [
      {
        title: "Intelligence Strategy & Requirements Analysis",
        description: "Define business intelligence needs and strategic reporting framework",
        icon: Target,
        details: {
          overview: "We analyze your business intelligence requirements to understand what insights drive decisions and how stakeholders need information for strategic planning and communication.",
          whatYouGet: [
            "Business intelligence strategy framework aligned with decision-making needs",
            "Stakeholder analysis showing information requirements and communication preferences",
            "Data source assessment and intelligence opportunity identification",
            "Strategic reporting framework that supports business objectives and stakeholder needs"
          ],
          process: [
            "Business intelligence requirements analysis and stakeholder assessment",
            "Data source evaluation and intelligence opportunity assessment",
            "Strategic reporting framework design based on decision-making and communication needs",
            "Intelligence strategy development with implementation priority planning"
          ],
          outcome: "Clear business intelligence strategy that defines reporting requirements and provides framework for strategic intelligence system development."
        }
      },
      {
        title: "Reporting System Design & Dashboard Development",
        description: "Create strategic reporting tools and business intelligence dashboards",
        icon: BarChart,
        details: {
          overview: "Based on intelligence strategy, we design reporting systems and dashboards that provide actionable insights for business decisions and stakeholder communication.",
          whatYouGet: [
            "Strategic dashboard design with key performance indicators and business metrics",
            "Reporting system architecture that supports decision-making and stakeholder updates",
            "Business intelligence tools and templates for ongoing performance monitoring",
            "Data visualization and insight presentation frameworks for strategic communication"
          ],
          process: [
            "Dashboard design and business intelligence tool development based on requirements",
            "Reporting system architecture planning and data integration approach",
            "Performance monitoring framework creation with key metrics and indicators",
            "Visualization and presentation design for stakeholder communication and decision support"
          ],
          outcome: "A comprehensive business intelligence system with dashboards and reporting tools that provide strategic insights for decision-making and stakeholder communication."
        }
      },
      {
        title: "Intelligence Management & Stakeholder Communication",
        description: "Build frameworks for ongoing intelligence management and strategic communication",
        icon: Eye,
        details: {
          overview: "Create practical systems for managing business intelligence and communicating insights to stakeholders, enabling ongoing strategic decision-making and performance optimization.",
          whatYouGet: [
            "Business intelligence management framework with update and maintenance processes",
            "Stakeholder communication templates and reporting schedule recommendations",
            "Performance analysis guidelines and insight generation methodologies",
            "Intelligence system training and ongoing management best practices"
          ],
          process: [
            "Intelligence management process design and stakeholder communication planning",
            "Reporting schedule development and communication template creation",
            "Performance analysis methodology and insight generation framework development",
            "Executive briefing on business intelligence system management and stakeholder communication"
          ],
          outcome: "A complete intelligence management system that enables ongoing strategic reporting, stakeholder communication, and data-driven decision-making for business growth."
        }
      }
    ] as MethodologyItem[]
  }
};