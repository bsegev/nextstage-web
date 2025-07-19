import { TrendingUp, Zap, CheckCircle, Target, Code2, Cpu } from 'lucide-react';
import { PerformanceMetricsData } from '@/components/deliverables/service-layout/DeliverablePerformanceMetrics';
import { MethodologyItem } from '@/components/deliverables/service-layout/DeliverableMethodology';

export const softwareConsultingDeliverable = {
  // Hero (Above the fold)
  title: "Software Consulting",
  tagline: "Strategic technology guidance that drives project success",
  description: "Where your business requirements meet technology expertise—providing strategic guidance that optimizes technology decisions and accelerates project success.",
  
  // The NextStage Way
  ourApproach: {
    headline: "Business analysis, technology strategy & implementation guidance working together",
    description: "We don't just recommend technologies, we design technology strategies. Our consulting combines business analysis with technical expertise to guide technology decisions that drive measurable business success.",
    keyPrinciple: "Software consulting that drives project success, not just technology recommendations"
  },
  
  // What This Actually Is
  whatItIs: {
    realDefinition: "Strategic technology advisory that provides expert guidance on software selection, system integration, and architecture design.",
    notJust: "Generic technology recommendations or basic technical support",
    butAlso: "Strategic technology partnership that guides critical decisions and ensures scalable solutions"
  },
  
  // The Process
  process: [
    {
      phase: "Analyze",
      whatWeDo: "Assess business requirements and current technology landscape for strategic guidance",
      whatEmerges: "Clear understanding of technology needs and optimization opportunities"
    },
    {
      phase: "Strategize",
      whatWeDo: "Develop technology strategy and architecture recommendations aligned with business objectives",
      whatEmerges: "Strategic technology roadmap with optimal solution architecture and implementation approach"
    },
    {
      phase: "Guide",
      whatWeDo: "Provide expert guidance on technology selection, integration planning, and implementation strategy",
      whatEmerges: "Comprehensive technology guidance that optimizes decisions and reduces implementation risk"
    },
    {
      phase: "Support",
      whatWeDo: "Deliver ongoing advisory support and optimization recommendations for sustained success",
      whatEmerges: "Continuous technology guidance that ensures project success and scalable growth"
    }
  ],
  
  // Business Value
  outcomes: {
    primary: "Strategic technology guidance that optimizes software decisions and accelerates project success",
    secondary: "Expert advisory that reduces technology risk and improves implementation outcomes",
    longTerm: "Technology strategy foundation that scales with business growth and market evolution"
  },
  
  // Discovery
  discovery: {
    price: "$250",
    duration: "60 minutes",
    whatWeExplore: [
      "Your technology challenges and strategic software decision requirements",
      "Current technology landscape and integration optimization opportunities",
      "Business objectives requiring technology strategy and architecture guidance",
      "Technology priorities and implementation success criteria for strategic advisory"
    ],
    whatYouGet: [
      "Technology assessment showing strategic guidance opportunities and optimization potential",
      "Software consulting recommendations and technology strategy approach",
      "Technology advisory scope and strategic guidance planning for project success",
      "Full discovery credit toward project"
    ]
  },

  // Performance Metrics
  performanceMetrics: {
    title: "Software Consulting Impact",
    description: "What happens when technology guidance actually drives project success",
    metric: {
      value: "28%",
      number: 28,
      label: "Higher Project Success Rates",
      description: "Expert software consulting delivers measurable business impact: clients achieve up to 28% higher project success rates",
      source: "PwC AI and Tech Strategy Reports 2025, McKinsey Superagency in the Workplace (AI Readiness) 2025",
      icon: Code2
    },
    bottomMessage: "Software consulting that transforms technology decisions into measurable business success"
  } as PerformanceMetricsData,

  // Methodology
  methodology: {
    title: "Everything you need for strategic technology success",
    subtitle: "Our software consulting process combines business analysis with technology expertise to provide strategic guidance that optimizes technology decisions and drives project success.",
    items: [
      {
        title: "Technology Strategy & Requirements Analysis",
        description: "Assess technology needs and develop strategic guidance framework",
        icon: Target,
        details: {
          overview: "We analyze your business requirements and technology landscape to understand strategic needs and provide expert guidance that aligns technology decisions with business objectives.",
          whatYouGet: [
            "Comprehensive technology assessment showing strategic requirements and optimization opportunities",
            "Business-technology alignment analysis with strategic guidance and decision framework",
            "Technology strategy recommendations based on business objectives and scalability requirements",
            "Strategic advisory roadmap with technology decision criteria and success metrics"
          ],
          process: [
            "Business requirement analysis and technology landscape assessment for strategic guidance",
            "Technology strategy development and architecture planning aligned with business objectives",
            "Strategic guidance framework creation with decision criteria and optimization focus",
            "Advisory roadmap development with implementation strategy and success measurement"
          ],
          outcome: "Strategic technology foundation with expert guidance framework that optimizes technology decisions and aligns investments with business success."
        }
      },
      {
        title: "Solution Architecture & Technology Selection",
        description: "Design optimal technology solutions and guide strategic software selection",
        icon: Cpu,
        details: {
          overview: "Based on strategic analysis, we provide expert guidance on technology selection and solution architecture that optimizes performance, scalability, and business value.",
          whatYouGet: [
            "Solution architecture guidance with technology selection recommendations and integration strategy",
            "Software evaluation framework with selection criteria and performance optimization focus",
            "Integration planning and scalability assessment for sustainable technology growth",
            "Technology decision support with risk assessment and implementation guidance"
          ],
          process: [
            "Solution architecture design and technology selection guidance based on business requirements",
            "Software evaluation and selection criteria development for optimal business outcomes",
            "Integration strategy planning and scalability assessment for long-term technology success",
            "Decision support and risk assessment for technology implementation optimization"
          ],
          outcome: "Optimal technology solution architecture with expert selection guidance that maximizes business value and ensures scalable, sustainable technology implementation."
        }
      },
      {
        title: "Implementation Guidance & Success Optimization",
        description: "Provide ongoing advisory support for technology implementation and optimization",
        icon: CheckCircle,
        details: {
          overview: "Deliver continuous strategic guidance throughout technology implementation to ensure project success and optimize business outcomes through expert advisory support.",
          whatYouGet: [
            "Implementation guidance with strategic advisory support and optimization recommendations",
            "Project success monitoring with technology performance assessment and improvement planning",
            "Ongoing consultation and strategic guidance for technology optimization and scaling",
            "Success measurement framework with business impact tracking and continuous improvement"
          ],
          process: [
            "Implementation advisory and strategic guidance throughout technology deployment process",
            "Project monitoring and success optimization with performance assessment and guidance",
            "Ongoing consultation and strategic support for technology optimization and business alignment",
            "Success measurement and continuous improvement framework for sustained technology value"
          ],
          outcome: "Successful technology implementation with ongoing strategic guidance that ensures optimal business outcomes and sustainable technology success."
        }
      }
    ] as MethodologyItem[]
  }
};