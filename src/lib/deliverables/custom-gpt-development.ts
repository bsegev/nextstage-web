import { TrendingUp, Zap, CheckCircle, Target, Bot, Cog } from 'lucide-react';
import { PerformanceMetricsData } from '@/components/deliverables/service-layout/DeliverablePerformanceMetrics';
import { MethodologyItem } from '@/components/deliverables/service-layout/DeliverableMethodology';

export const customGptDevelopmentDeliverable = {
  // Hero (Above the fold)
  title: "Custom GPT Development",
  tagline: "AI assistants built specifically for your business workflows",
  description: "Where your business workflows meet intelligent automation—creating custom AI assistants that handle specific tasks and accelerate team productivity.",
  
  // The NextStage Way
  ourApproach: {
    headline: "Business analysis, AI development & workflow integration working together",
    description: "We don't just deploy generic AI tools, we build custom solutions. Our development combines business process analysis with AI engineering to create assistants that understand your specific workflows and business context.",
    keyPrinciple: "Custom AI that drives business productivity, not just technological novelty"
  },
  
  // What This Actually Is
  whatItIs: {
    realDefinition: "A custom AI assistant built specifically for your business workflows with domain knowledge and capabilities tailored to your processes.",
    notJust: "A generic chatbot or AI wrapper",
    butAlso: "Business tool that understands your context and accelerates specific workflows"
  },
  
  // The Process
  process: [
    {
      phase: "Analyze",
      whatWeDo: "Map your workflows and identify optimal AI automation opportunities",
      whatEmerges: "Clear understanding of where AI can drive productivity and efficiency gains"
    },
    {
      phase: "Design",
      whatWeDo: "Architect custom AI solution tailored to your specific business requirements",
      whatEmerges: "AI assistant specification with defined capabilities and integration approach"
    },
    {
      phase: "Develop",
      whatWeDo: "Build and train custom GPT with your business knowledge and processes",
      whatEmerges: "Functional AI assistant ready for business workflow integration"
    },
    {
      phase: "Deploy",
      whatWeDo: "Integrate AI assistant into workflows and provide executive guidance on optimal usage",
      whatEmerges: "Fully operational custom AI system driving measurable productivity improvements"
    }
  ],
  
  // Business Value
  outcomes: {
    primary: "Custom AI assistant that accelerates specific business workflows and reduces operational overhead",
    secondary: "Intelligent automation that handles routine tasks while maintaining business context and quality",
    longTerm: "Scalable AI capability that evolves with business needs and drives competitive advantage"
  },
  
  // Discovery
  discovery: {
    price: "$250",
    duration: "60 minutes",
    whatWeExplore: [
      "Your current workflows and processes that could benefit from AI assistance",
      "Specific business tasks requiring automation or intelligent support",
      "Team productivity challenges and repetitive work that AI could handle",
      "Integration requirements and technical constraints for AI deployment"
    ],
    whatYouGet: [
      "AI opportunity assessment showing automation potential and productivity gains",
      "Custom GPT development recommendations and technical approach",
      "AI implementation scope and business integration planning",
      "Full discovery credit toward project"
    ]
  },

  // Performance Metrics
  performanceMetrics: {
    title: "Custom GPT Impact",
    description: "What happens when AI assistants actually work for your business",
    metric: {
      value: "25%",
      number: 25,
      label: "Reduction in Operational Costs",
      description: "Companies deploying specialized AI assistants for workflow, customer support, or research achieve up to 25% reduction in operational costs",
      source: "Deloitte, Forbes Best Management Consulting Firms 2025",
      icon: Bot
    },
    bottomMessage: "Custom AI assistants that transform business productivity and operational efficiency"
  } as PerformanceMetricsData,

  // Methodology
  methodology: {
    title: "Everything you need for custom AI success",
    subtitle: "Our custom GPT development process combines business analysis with AI engineering to create intelligent assistants that drive measurable productivity improvements.",
    items: [
      {
        title: "Business Process Analysis & AI Opportunity Assessment",
        description: "Identify optimal workflows and tasks for intelligent automation",
        icon: Target,
        details: {
          overview: "We analyze your business processes to identify where AI can deliver maximum impact, mapping workflows and evaluating tasks that benefit from intelligent automation and assistance.",
          whatYouGet: [
            "Comprehensive workflow analysis showing AI automation opportunities and productivity potential",
            "Task assessment identifying specific processes that benefit from intelligent assistance",
            "AI capability evaluation showing technical requirements and integration considerations",
            "ROI projection and productivity improvement estimates for custom AI implementation"
          ],
          process: [
            "Business process mapping and workflow analysis to identify automation opportunities",
            "Task evaluation and AI suitability assessment for productivity optimization",
            "Technical requirements analysis and integration planning for AI deployment",
            "Productivity impact assessment and custom AI development roadmap creation"
          ],
          outcome: "Clear understanding of AI opportunities and strategic framework for custom GPT development that drives measurable business productivity improvements."
        }
      },
      {
        title: "Custom AI Architecture & Development",
        description: "Build intelligent assistant tailored to your specific business requirements",
        icon: Cog,
        details: {
          overview: "Based on business analysis, we architect and develop custom AI solution with domain-specific knowledge, business context, and capabilities designed for your unique workflows and processes.",
          whatYouGet: [
            "Custom GPT architecture designed for your specific business requirements and workflows",
            "AI training and knowledge base development with your business domain expertise",
            "Intelligent assistant capabilities tailored to your processes and terminology",
            "Quality assurance and testing framework ensuring reliable AI performance and accuracy"
          ],
          process: [
            "AI architecture design based on business requirements and technical specifications",
            "Custom GPT development and training with domain-specific knowledge and context",
            "Capability implementation and business logic integration for workflow automation",
            "Testing and validation framework development ensuring AI quality and reliability"
          ],
          outcome: "A fully functional custom AI assistant with business-specific knowledge and capabilities that integrates seamlessly with your workflows and processes."
        }
      },
      {
        title: "AI Integration & Team Training",
        description: "Deploy AI assistant and enable team for optimal productivity gains",
        icon: CheckCircle,
        details: {
          overview: "Integrate custom AI into business workflows and provide executive guidance on optimal usage patterns to maximize productivity improvements and ensure successful adoption.",
          whatYouGet: [
            "AI assistant integration with existing business systems and workflow tools",
            "Executive briefing for optimal AI usage and productivity maximization",
            "Usage guidelines and best practices for maintaining AI effectiveness and quality",
            "Performance monitoring framework and optimization recommendations for ongoing improvement"
          ],
          process: [
            "AI system integration with business tools and workflow platforms",
            "Executive briefing and documentation for effective AI assistant usage",
            "Usage optimization and best practices development for maximum productivity impact",
            "Performance monitoring setup and ongoing improvement framework implementation"
          ],
          outcome: "Fully integrated custom AI assistant with executive guidance enabling measurable productivity improvements and operational efficiency gains."
        }
      }
    ] as MethodologyItem[]
  }
};