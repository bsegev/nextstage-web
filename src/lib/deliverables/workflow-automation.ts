import { TrendingUp, Zap, CheckCircle, Target, Settings, ArrowRight } from 'lucide-react';
import { PerformanceMetricsData } from '@/components/deliverables/service-layout/DeliverablePerformanceMetrics';
import { MethodologyItem } from '@/components/deliverables/service-layout/DeliverableMethodology';

export const workflowAutomationDeliverable = {
  // Hero (Above the fold)
  title: "Workflow Automation",
  tagline: "Intelligent process automation that streamlines operations and saves time",
  description: "Where your repetitive tasks meet systematic automation—creating streamlined workflows that eliminate manual work and accelerate business operations.",
  
  // The NextStage Way
  ourApproach: {
    headline: "Process analysis, automation design & system integration working together",
    description: "We don't just automate existing processes, we optimize then automate. Our approach combines business process analysis with automation engineering to create intelligent workflows that drive operational efficiency.",
    keyPrinciple: "Workflow automation that drives operational excellence, not just task elimination"
  },
  
  // What This Actually Is
  whatItIs: {
    realDefinition: "An automation system that streamlines repetitive business processes through intelligent workflow design and tool integration.",
    notJust: "Simple task automation or basic templates",
    butAlso: "Process optimization that eliminates bottlenecks and accelerates operations"
  },
  
  // The Process
  process: [
    {
      phase: "Map",
      whatWeDo: "Analyze current workflows and identify automation opportunities for maximum impact",
      whatEmerges: "Clear understanding of process inefficiencies and automation potential"
    },
    {
      phase: "Design",
      whatWeDo: "Create optimized workflow architecture with intelligent automation logic",
      whatEmerges: "Streamlined process design with automated decision points and error handling"
    },
    {
      phase: "Build",
      whatWeDo: "Implement automation system with tool integration and process optimization",
      whatEmerges: "Functional workflow automation reducing manual work and processing time"
    },
    {
      phase: "Optimize",
      whatWeDo: "Monitor performance and refine automation for continuous improvement",
      whatEmerges: "Fully optimized workflow system delivering measurable efficiency and cost savings"
    }
  ],
  
  // Business Value
  outcomes: {
    primary: "Automated workflows that eliminate repetitive tasks and accelerate business operations",
    secondary: "Reduced operational costs and improved accuracy through systematic process optimization",
    longTerm: "Scalable automation framework that adapts to business growth and process evolution"
  },
  
  // Discovery
  discovery: {
    price: "$250",
    duration: "60 minutes",
    whatWeExplore: [
      "Your current manual processes and workflow inefficiencies costing time and resources",
      "Repetitive tasks and bottlenecks that impact team productivity and business operations",
      "Existing tools and systems that could be integrated for workflow optimization",
      "Automation priorities and operational efficiency goals requiring systematic improvement"
    ],
    whatYouGet: [
      "Workflow analysis showing automation opportunities and efficiency improvement potential",
      "Process optimization recommendations and automation approach framework",
      "Workflow automation scope and implementation priority planning",
      "Full discovery credit toward project"
    ]
  },

  // Performance Metrics
  performanceMetrics: {
    title: "Workflow Automation Impact",
    description: "What happens when automation actually streamlines business operations",
    metric: {
      value: "20-40%",
      number: 40,
      label: "Cost & Time Savings",
      description: "Streamlining business with automated workflows delivers 20–40% savings in both cost and time across operations",
      source: "McKinsey, Forbes Best Management Consulting Firms 2025",
      icon: Settings
    },
    bottomMessage: "Workflow automation that transforms operational efficiency and business productivity"
  } as PerformanceMetricsData,

  // Methodology
  methodology: {
    title: "Everything you need for workflow automation success",
    subtitle: "Our workflow automation process combines business analysis with automation engineering to create streamlined operations that drive measurable efficiency and cost savings.",
    items: [
      {
        title: "Process Analysis & Automation Opportunity Assessment",
        description: "Identify workflows and bottlenecks that benefit from intelligent automation",
        icon: Target,
        details: {
          overview: "We analyze your business processes to identify automation opportunities that deliver maximum efficiency gains, mapping workflows and evaluating tasks for systematic optimization.",
          whatYouGet: [
            "Comprehensive process analysis showing workflow inefficiencies and automation opportunities",
            "Task evaluation identifying repetitive work and bottlenecks suitable for automation",
            "Efficiency assessment showing time and cost savings potential from workflow optimization",
            "Automation priority framework based on business impact and implementation complexity"
          ],
          process: [
            "Business process mapping and workflow analysis to identify automation opportunities",
            "Bottleneck identification and efficiency assessment for systematic process improvement",
            "Task evaluation and automation suitability analysis for workflow optimization",
            "Priority development and automation roadmap creation based on business impact"
          ],
          outcome: "Clear understanding of automation opportunities and strategic framework for workflow optimization that drives measurable operational efficiency improvements."
        }
      },
      {
        title: "Automation Design & System Architecture",
        description: "Create intelligent workflow automation with seamless tool integration",
        icon: ArrowRight,
        details: {
          overview: "Based on process analysis, we design automated workflows with intelligent decision logic, error handling, and system integration that optimizes business operations.",
          whatYouGet: [
            "Workflow automation architecture designed for your specific business processes and requirements",
            "Intelligent automation logic with decision points and error handling for reliable operation",
            "System integration planning connecting existing tools and platforms for seamless workflow",
            "Automation testing framework ensuring reliable performance and business process optimization"
          ],
          process: [
            "Workflow automation design based on process analysis and business requirements",
            "Automation logic development with intelligent decision points and error handling",
            "System integration architecture for connecting tools and platforms seamlessly",
            "Testing framework development ensuring automation reliability and process optimization"
          ],
          outcome: "A comprehensive workflow automation system with intelligent logic and seamless integration that optimizes business processes and operational efficiency."
        }
      },
      {
        title: "Implementation & Performance Optimization",
        description: "Deploy automation system and optimize for maximum efficiency gains",
        icon: CheckCircle,
        details: {
          overview: "Implement workflow automation with executive guidance and performance monitoring to ensure maximum efficiency gains and continuous process improvement.",
          whatYouGet: [
            "Workflow automation implementation with system integration and process optimization",
            "Executive briefing for automated workflow usage and process management",
            "Performance monitoring framework tracking efficiency gains and cost savings",
            "Optimization guidelines and continuous improvement processes for ongoing automation enhancement"
          ],
          process: [
            "Automation system implementation with workflow integration and process optimization",
            "Executive briefing and documentation for automated workflow adoption",
            "Performance monitoring setup tracking efficiency metrics and automation effectiveness",
            "Continuous improvement framework development for ongoing workflow optimization"
          ],
          outcome: "Fully implemented workflow automation system delivering measurable efficiency gains, cost savings, and operational excellence through optimized business processes."
        }
      }
    ] as MethodologyItem[]
  }
};