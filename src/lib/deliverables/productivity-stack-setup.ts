import { TrendingUp, Zap, CheckCircle, Target, Layers, Settings } from 'lucide-react';
import { PerformanceMetricsData } from '@/components/deliverables/service-layout/DeliverablePerformanceMetrics';
import { MethodologyItem } from '@/components/deliverables/service-layout/DeliverableMethodology';

export const productivityStackSetupDeliverable = {
  // Hero (Above the fold)
  title: "Productivity Stack Setup",
  tagline: "Integrated tool ecosystems that accelerate team productivity",
  description: "Where your workflow needs meet systematic tool integration—creating productivity stacks that streamline operations and eliminate workflow friction.",
  
  // The NextStage Way
  ourApproach: {
    headline: "Workflow analysis, tool selection & system integration working together",
    description: "We don't just recommend software, we design productivity systems. Our approach combines workflow analysis with strategic tool selection to create integrated stacks that drive measurable productivity gains.",
    keyPrinciple: "Productivity stacks that drive operational efficiency, not just tool deployment"
  },
  
  // What This Actually Is
  whatItIs: {
    realDefinition: "A strategically designed suite of integrated tools that optimizes team collaboration and workflow efficiency.",
    notJust: "A collection of random productivity apps",
    butAlso: "Integrated system that eliminates workflow friction and accelerates team collaboration"
  },
  
  // The Process
  process: [
    {
      phase: "Assess",
      whatWeDo: "Analyze current workflows and identify productivity optimization opportunities",
      whatEmerges: "Clear understanding of workflow inefficiencies and tool integration requirements"
    },
    {
      phase: "Select",
      whatWeDo: "Choose optimal tool combination based on workflow needs and integration capabilities",
      whatEmerges: "Strategic productivity stack designed for maximum workflow efficiency and collaboration"
    },
    {
      phase: "Integrate",
      whatWeDo: "Implement and configure tools with seamless workflow integration and automation",
      whatEmerges: "Functional productivity ecosystem that streamlines operations and eliminates friction"
    },
    {
      phase: "Optimize",
      whatWeDo: "Provide executive guidance and refine stack configuration for maximum productivity impact",
      whatEmerges: "Fully optimized productivity system driving measurable efficiency and collaboration improvements"
    }
  ],
  
  // Business Value
  outcomes: {
    primary: "Integrated productivity stack that accelerates team collaboration and eliminates workflow friction",
    secondary: "Streamlined operations with reduced tool switching and improved communication efficiency",
    longTerm: "Scalable productivity foundation that adapts to team growth and evolving workflow requirements"
  },
  
  // Discovery
  discovery: {
    price: "$250",
    duration: "60 minutes",
    whatWeExplore: [
      "Your current workflow challenges and productivity bottlenecks affecting team efficiency",
      "Communication and collaboration requirements for optimal team performance",
      "Existing tool landscape and integration opportunities for workflow optimization",
      "Team productivity goals and operational efficiency priorities requiring systematic improvement"
    ],
    whatYouGet: [
      "Productivity assessment showing workflow optimization opportunities and tool integration potential",
      "Productivity stack recommendations and integration approach for maximum efficiency gains",
      "Tool selection scope and workflow optimization planning for team performance improvement",
      "Full discovery credit toward project"
    ]
  },

  // Performance Metrics
  performanceMetrics: {
    title: "Productivity Stack Impact",
    description: "What happens when tool integration actually accelerates team performance",
    metric: {
      value: "20-30%",
      number: 30,
      label: "Boost in Workforce Productivity",
      description: "Organizations implementing integrated SaaS productivity and collaboration stacks experience an average 20–30% boost in workforce productivity",
      source: "KPMG Navigating Transformation and Risk 2025 Report, Deloitte Digital Transformation Insights 2025",
      icon: Layers
    },
    bottomMessage: "Productivity stacks that transform team efficiency through strategic tool integration and workflow optimization"
  } as PerformanceMetricsData,

  // Methodology
  methodology: {
    title: "Everything you need for productivity optimization",
    subtitle: "Our productivity stack process combines workflow analysis with strategic tool selection to create integrated systems that drive team efficiency and collaboration.",
    items: [
      {
        title: "Workflow Analysis & Requirements Assessment",
        description: "Understand team workflows and identify optimal productivity tool requirements",
        icon: Target,
        details: {
          overview: "We analyze your team workflows to understand collaboration patterns, communication needs, and productivity bottlenecks that inform strategic tool selection and integration planning.",
          whatYouGet: [
            "Comprehensive workflow analysis showing team collaboration patterns and productivity opportunities",
            "Tool requirement assessment based on communication needs and operational efficiency goals",
            "Integration opportunity identification for workflow optimization and friction reduction",
            "Productivity optimization strategy with tool selection criteria and success metrics"
          ],
          process: [
            "Team workflow mapping and collaboration pattern analysis for productivity optimization",
            "Communication requirement assessment and tool functionality evaluation",
            "Productivity bottleneck identification and workflow optimization opportunity analysis",
            "Tool selection strategy development with integration and efficiency focus"
          ],
          outcome: "Strategic foundation for productivity stack selection that aligns tool capabilities with workflow requirements for maximum team efficiency gains."
        }
      },
      {
        title: "Strategic Tool Selection & Integration Planning",
        description: "Choose optimal productivity tools and design seamless integration architecture",
        icon: Layers,
        details: {
          overview: "Based on workflow analysis, we select productivity tools that integrate seamlessly and create unified workflow experience that eliminates friction and accelerates collaboration.",
          whatYouGet: [
            "Strategic tool selection with integration capabilities and workflow optimization focus",
            "Productivity stack architecture designed for seamless collaboration and communication",
            "Integration planning with automation opportunities and workflow streamlining approach",
            "Tool configuration strategy optimized for team adoption and productivity maximization"
          ],
          process: [
            "Tool evaluation and selection based on workflow requirements and integration capabilities",
            "Productivity stack architecture design with seamless integration and collaboration focus",
            "Integration planning and automation opportunity identification for workflow optimization",
            "Configuration strategy development for optimal team adoption and productivity impact"
          ],
          outcome: "Comprehensive productivity stack with strategic tool selection and integration design that maximizes workflow efficiency and team collaboration."
        }
      },
      {
        title: "Implementation & Team Optimization",
        description: "Deploy productivity stack and optimize team usage for maximum efficiency gains",
        icon: Settings,
        details: {
          overview: "Implement productivity stack with executive guidance and usage optimization to ensure maximum adoption and measurable productivity improvements through systematic workflow enhancement.",
          whatYouGet: [
            "Productivity stack implementation with tool configuration and workflow integration",
            "Executive briefing for optimal tool usage and collaboration efficiency",
            "Usage optimization guidelines and best practices for maximum productivity impact",
            "Performance monitoring framework tracking efficiency gains and team collaboration improvements"
          ],
          process: [
            "Tool implementation and configuration with workflow integration and automation setup",
            "Executive briefing and adoption documentation for effective productivity stack utilization",
            "Usage optimization and best practices development for maximum efficiency gains",
            "Performance monitoring and continuous improvement framework for ongoing productivity enhancement"
          ],
          outcome: "Fully implemented productivity stack with executive guidance enabling measurable efficiency improvements through optimized tool usage and streamlined workflows."
        }
      }
    ] as MethodologyItem[]
  }
};