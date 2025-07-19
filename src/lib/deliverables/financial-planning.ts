import { Target, Calculator, BarChart } from 'lucide-react';
import { PerformanceMetricsData } from '@/components/deliverables/service-layout/DeliverablePerformanceMetrics';
import { MethodologyItem } from '@/components/deliverables/service-layout/DeliverableMethodology';

export const financialPlanningDeliverable = {
  // Hero (Above the fold)
  title: "Financial Planning",
  tagline: "Strategic financial models that drive business decisions, not just spreadsheets",
  description: "Where your business strategy meets financial reality—creating models that guide growth, investment, and operational decisions.",
  
  // The NextStage Way
  ourApproach: {
    headline: "Business strategy, financial modeling & decision support working together",
    description: "We don't just build financial models, we create decision-making tools. Our planning combines strategic thinking with financial modeling to help you make informed business decisions.",
    keyPrinciple: "Financial planning that drives strategic decisions, not just compliance reporting"
  },
  
  // What This Actually Is
  whatItIs: {
    realDefinition: "A comprehensive financial planning system that models your business strategy and provides decision-making tools for growth and investment.",
    notJust: "A budget spreadsheet or cash flow projection",
    butAlso: "Strategic financial framework that guides business decisions, investment planning, and operational choices"
  },
  
  // The Process
  process: [
    {
      phase: "Analyze",
      whatWeDo: "Review current financial position and business model economics",
      whatEmerges: "Clear understanding of financial performance and drivers"
    },
    {
      phase: "Model",
      whatWeDo: "Build comprehensive financial models tied to business strategy",
      whatEmerges: "Strategic financial framework and scenario planning tools"
    },
    {
      phase: "Plan",
      whatWeDo: "Create forecasts and budgets aligned with strategic objectives",
      whatEmerges: "Financial roadmap with clear targets and milestones"
    },
    {
      phase: "Optimize",
      whatWeDo: "Develop frameworks for ongoing financial decision-making",
      whatEmerges: "Financial planning system your team can use and update"
    }
  ],
  
  // Business Value
  outcomes: {
    primary: "Strategic financial models that guide business decisions and growth planning",
    secondary: "Clear financial roadmap aligned with business strategy and market opportunities",
    longTerm: "Financial planning framework that scales with business growth and market changes"
  },
  
  // Discovery
  discovery: {
    price: "$250",
    duration: "60 minutes",
    whatWeExplore: [
      "Your current financial planning processes and business model",
      "Strategic goals and growth objectives requiring financial support",
      "Key financial decisions and investment planning needs",
      "Financial reporting and decision-making requirements"
    ],
    whatYouGet: [
      "Assessment of current financial planning and modeling gaps",
      "Strategic financial framework recommendations",
      "Financial planning scope and modeling requirements",
      "Full discovery credit toward project"
    ]
  },

  // Performance Metrics
  performanceMetrics: {
    title: "Financial Planning Impact",
    description: "What happens when financial planning actually drives decisions",
    metric: {
      value: "25%",
      number: 25,
      label: "Better Forecasting Accuracy",
      description: "Adopters of real-time forecasting and rolling financial planning achieve up to 25% gain in forecasting accuracy",
      source: "Deloitte Crunch Time V: Finance 2025 report",
      icon: Calculator
    },
    bottomMessage: "Financial planning that transforms business decision-making and strategic execution"
  } as PerformanceMetricsData,

  // Methodology
  methodology: {
    title: "Everything you need for strategic financial planning",
    subtitle: "Our financial planning process combines business strategy with financial modeling to create decision-making tools that guide growth and investment.",
    items: [
      {
        title: "Business Model Analysis",
        description: "Understand your financial drivers and business economics",
        icon: Calculator,
        details: {
          overview: "We analyze your business model to understand financial drivers, unit economics, and key performance indicators that impact profitability and growth.",
          whatYouGet: [
            "Business model analysis showing revenue drivers and cost structure",
            "Unit economics evaluation and profitability analysis by segment",
            "Key performance indicator identification and financial impact assessment",
            "Financial driver mapping that connects operations to financial outcomes"
          ],
          process: [
            "Financial performance review and business model analysis",
            "Unit economics calculation and profitability assessment by product/service",
            "Key metric identification and financial driver analysis",
            "Performance indicator framework development for ongoing tracking"
          ],
          outcome: "Clear understanding of your business economics and the financial drivers that impact performance and growth potential."
        }
      },
      {
        title: "Strategic Financial Modeling",
        description: "Build comprehensive models that support strategic decision-making",
        icon: BarChart,
        details: {
          overview: "Create financial models that connect business strategy to financial outcomes, enabling scenario planning and strategic decision-making for growth and investment.",
          whatYouGet: [
            "Comprehensive financial model linked to business strategy and operations",
            "Scenario planning tools for evaluating strategic options and investments",
            "Forecasting framework with multiple scenarios and sensitivity analysis",
            "Investment analysis tools for evaluating growth opportunities"
          ],
          process: [
            "Financial model architecture design based on business strategy",
            "Model building with scenario planning and sensitivity analysis capabilities",
            "Forecasting methodology development and validation testing",
            "Investment evaluation framework creation for strategic decisions"
          ],
          outcome: "A robust financial modeling system that supports strategic planning, investment decisions, and business performance evaluation."
        }
      },
      {
        title: "Financial Planning Framework",
        description: "Create systems for ongoing financial planning and decision support",
        icon: Target,
        details: {
          overview: "Build practical financial planning tools and processes that your team can use for ongoing budgeting, forecasting, and financial decision-making.",
          whatYouGet: [
            "Financial planning templates and tools for budgeting and forecasting",
            "Decision-making frameworks for evaluating financial choices",
            "Performance tracking system aligned with financial goals",
            "Financial reporting templates that support strategic decisions"
          ],
          process: [
            "Financial planning process design based on business requirements",
            "Template creation for budgeting, forecasting, and performance tracking",
            "Decision framework development for financial choices and investments",
            "Team training on financial planning tools and processes"
          ],
          outcome: "A complete financial planning framework that enables ongoing strategic financial management and informed business decisions."
        }
      }
    ] as MethodologyItem[]
  }
};