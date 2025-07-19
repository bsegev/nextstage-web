import { TrendingUp, Zap, CheckCircle, Target, Bot, Brain } from 'lucide-react';
import { PerformanceMetricsData } from '@/components/deliverables/service-layout/DeliverablePerformanceMetrics';
import { MethodologyItem } from '@/components/deliverables/service-layout/DeliverableMethodology';

export const aiImplementationDeliverable = {
  // Hero (Above the fold)
  title: "AI Implementation",
  tagline: "Strategic AI integration that drives productivity, not just technology adoption",
  description: "Where your business processes meet artificial intelligence—creating AI systems that accelerate workflow, enhance decision-making, and unlock operational capacity.",
  
  // The NextStage Way
  ourApproach: {
    headline: "Business strategy, AI technology & workflow optimization working together",
    description: "We don't just deploy AI tools, we design intelligent systems. Our approach combines business analysis with AI implementation to create solutions that transform how your team works and makes decisions.",
    keyPrinciple: "AI implementation that drives business results, not just technological advancement"
  },
  
  // What This Actually Is
  whatItIs: {
    realDefinition: "A comprehensive AI integration strategy that deploys specialized AI assistants and automation to enhance business workflow, customer support, and strategic decision-making.",
    notJust: "AI software installation or chatbot deployment",
    butAlso: "Strategic AI system that transforms business operations, accelerates decision-making, and creates sustainable competitive advantage"
  },
  
  // The Process
  process: [
    {
      phase: "Assess",
      whatWeDo: "Analyze current workflows and identify AI implementation opportunities",
      whatEmerges: "Clear understanding of AI potential and strategic implementation priorities"
    },
    {
      phase: "Design",
      whatWeDo: "Create AI integration strategy aligned with business objectives",
      whatEmerges: "Strategic AI framework optimized for workflow enhancement and productivity gains"
    },
    {
      phase: "Deploy",
      whatWeDo: "Implement AI systems with focus on user adoption and business integration",
      whatEmerges: "Functional AI assistants and automation systems driving operational improvement"
    },
    {
      phase: "Optimize",
      whatWeDo: "Create frameworks for ongoing AI management and performance optimization",
      whatEmerges: "AI implementation system your team can evolve and scale with business growth"
    }
  ],
  
  // Business Value
  outcomes: {
    primary: "Strategic AI integration that accelerates productivity and enhances decision-making capabilities",
    secondary: "Automated workflows that reduce operational costs and unlock team capacity for strategic work",
    longTerm: "AI-powered business system that scales with growth and adapts to evolving market demands"
  },
  
  // Discovery
  discovery: {
    price: "$250",
    duration: "60 minutes",
    whatWeExplore: [
      "Your current workflow challenges and productivity optimization opportunities",
      "Business processes that could benefit from AI assistance and automation",
      "Team capabilities and AI adoption readiness for successful implementation",
      "Strategic objectives requiring AI-powered enhancement and decision support"
    ],
    whatYouGet: [
      "AI opportunity assessment and workflow optimization potential analysis",
      "Strategic AI implementation recommendations and technology approach framework",
      "AI integration planning scope and business impact priority assessment",
      "Full discovery credit toward project"
    ]
  },

  // Performance Metrics
  performanceMetrics: {
    title: "AI Implementation Impact",
    description: "What happens when AI actually transforms business operations",
    metric: {
      value: "40%",
      number: 40,
      label: "Productivity Increase",
      description: "Companies deploying specialized AI assistants for workflow, customer support, or research achieve up to 40% increase in productivity",
      source: "Deloitte, Forbes Best Management Consulting Firms 2025",
      icon: Bot
    },
    bottomMessage: "AI implementation that transforms workflow efficiency into sustainable competitive advantage"
  } as PerformanceMetricsData,

  // Methodology
  methodology: {
    title: "Everything you need for strategic AI success",
    subtitle: "Our AI implementation process combines business strategy with technology deployment to create AI systems that drive measurable productivity gains and operational improvement.",
    items: [
      {
        title: "AI Strategy & Opportunity Assessment",
        description: "Identify optimal AI implementation opportunities aligned with business objectives",
        icon: Target,
        details: {
          overview: "We analyze your business operations to identify where AI can create maximum impact, focusing on workflow enhancement, decision support, and productivity optimization opportunities.",
          whatYouGet: [
            "Business process analysis with AI implementation opportunity identification",
            "Workflow assessment showing automation potential and productivity enhancement areas",
            "AI strategy framework aligned with business objectives and operational priorities",
            "Implementation roadmap with priority sequencing and impact assessment"
          ],
          process: [
            "Business operations analysis and workflow evaluation for AI opportunity identification",
            "Process mapping and automation potential assessment for strategic AI planning",
            "AI implementation strategy development based on business impact and feasibility",
            "Priority planning and roadmap creation for systematic AI deployment"
          ],
          outcome: "Clear AI implementation strategy that identifies high-impact opportunities and provides framework for systematic AI integration across business operations."
        }
      },
      {
        title: "AI System Design & Technology Integration",
        description: "Deploy AI assistants and automation systems optimized for business workflow",
        icon: Brain,
        details: {
          overview: "Based on AI strategy, we design and implement AI systems that enhance specific business functions, from customer support to research and decision-making processes.",
          whatYouGet: [
            "Custom AI assistant design tailored to specific business workflow requirements",
            "AI system integration with existing business tools and operational processes",
            "Automation framework that streamlines repetitive tasks and enhances productivity",
            "User training and adoption support for successful AI system implementation"
          ],
          process: [
            "AI system architecture design and technology selection for business requirements",
            "Custom AI assistant development and business system integration",
            "Automation implementation and workflow optimization for productivity enhancement",
            "User training and adoption methodology for successful AI system deployment"
          ],
          outcome: "Functional AI systems that seamlessly integrate with business operations and deliver measurable productivity improvements and operational efficiency gains."
        }
      },
      {
        title: "AI Performance Optimization & Management",
        description: "Build frameworks for ongoing AI system management and continuous improvement",
        icon: CheckCircle,
        details: {
          overview: "Create systematic approach for managing AI implementation that ensures continued performance optimization and enables scaling as business needs evolve.",
          whatYouGet: [
            "AI performance monitoring framework with key metrics and optimization guidelines",
            "System management processes for ongoing AI maintenance and improvement",
            "Scaling methodology for expanding AI implementation across additional business functions",
            "Continuous improvement framework that adapts AI systems to evolving business requirements"
          ],
          process: [
            "Performance monitoring system design and AI optimization methodology development",
            "Management process creation for ongoing AI system maintenance and enhancement",
            "Scaling framework development for expanding AI implementation scope",
            "Continuous improvement process implementation and team training for AI system evolution"
          ],
          outcome: "A complete AI management system that ensures sustained performance gains and enables continuous optimization of AI implementation for long-term business advantage."
        }
      }
    ] as MethodologyItem[]
  }
};