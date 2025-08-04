import { TrendingUp, Target, Palette, Users } from 'lucide-react';
import { SubserviceData } from '../types';

export const workflowAutomation: SubserviceData = {
  id: 'workflow-automation',
  title: 'Workflow Automation Implementation',
  tagline: 'Automate processes to boost efficiency',
  description: 'Strategic workflow automation to improve efficiency and productivity.',
  service: 'tech-software',
  slug: 'workflow-automation',
  
  ourApproach: {
    headline: 'Automation that actually works for your business',
    description: 'We identify repetitive processes, design strategic automation solutions, and implement workflows that improve efficiency and productivity.',
    keyPrinciple: 'Automation that drives measurable business efficiency'
  },
  
  whatItIs: {
    realDefinition: 'Strategic identification and automation of repetitive business processes to improve efficiency, reduce errors, and increase productivity.',
    notJust: 'Basic automation of simple tasks',
    butAlso: 'Strategic workflow optimization that transforms how your business operates'
  },
  
  process: [
    {
      phase: 'Analysis',
      whatWeDo: 'Identify repetitive processes and automation opportunities',
      whatEmerges: 'Clear understanding of automation potential and ROI'
    },
    {
      phase: 'Design',
      whatWeDo: 'Design automated workflows and integration strategy',
      whatEmerges: 'Strategic automation plan that improves efficiency'
    },
    {
      phase: 'Implementation',
      whatWeDo: 'Build and deploy automated workflows',
      whatEmerges: 'Functional automation that improves productivity'
    },
    {
      phase: 'Optimization',
      whatWeDo: 'Monitor performance and optimize workflows',
      whatEmerges: 'Continuously improving automation system'
    }
  ],
  
  outcomes: {
    primary: 'Automated workflows that improve efficiency and productivity',
    secondary: 'Reduced manual errors and increased operational speed',
    longTerm: 'Scalable automation system that supports business growth'
  },
  
  discovery: {
    price: '$250',
    duration: '60 minutes',
    whatWeExplore: [
      'Your current business processes and pain points',
      'Repetitive tasks and efficiency bottlenecks',
      'Technology infrastructure and integration capabilities',
      'Automation goals and ROI expectations'
    ],
    whatYouGet: [
      'Process audit and automation opportunity analysis',
      'Workflow automation strategy and recommendations',
      'Automation implementation roadmap with priorities',
      'Full discovery credit toward project'
    ]
  },

  performanceMetrics: {
    title: 'Workflow Automation Business Impact',
    description: 'What happens when you automate repetitive processes',
    metric: {
      value: '25,000+',
      number: 25000,
      label: 'Hours Saved',
      description: 'Average company saves 25,000+ hours annually through workflow automation',
      source: 'Deloitte, "Automation Impact Study 2023"',
      icon: TrendingUp
    },
    bottomMessage: 'Workflow automation that drives measurable efficiency gains'
  },

  methodology: {
    title: 'Everything you need for successful workflow automation',
    subtitle: 'Our workflow automation process combines process analysis with strategic implementation to create automation that drives real business results.',
    items: [
      {
        title: 'Process Analysis & Automation Strategy',
        description: 'Identify automation opportunities and develop strategic plan',
        icon: Target,
        details: {
          overview: 'We start by analyzing your current business processes to identify repetitive tasks and automation opportunities that will deliver the highest ROI.',
          whatYouGet: [
            'Current process audit and efficiency analysis',
            'Automation opportunity identification and prioritization',
            'ROI analysis and business case development',
            'Automation strategy and implementation roadmap'
          ],
          process: [
            'Current process mapping and efficiency analysis',
            'Automation opportunity identification and prioritization',
            'ROI analysis and business case development',
            'Automation strategy and implementation roadmap creation'
          ],
          outcome: 'A clear understanding of your automation opportunities and a strategic plan for implementation.'
        }
      },
      {
        title: 'Workflow Design & Integration',
        description: 'Design automated workflows and integration strategy',
        icon: Palette,
        details: {
          overview: 'We design strategic automated workflows that integrate with your existing systems and improve efficiency across your business.',
          whatYouGet: [
            'Automated workflow design and architecture',
            'System integration strategy and implementation',
            'User interface and experience design for automation',
            'Testing and quality assurance framework'
          ],
          process: [
            'Automated workflow design and architecture development',
            'System integration strategy and implementation',
            'User interface and experience design for automation',
            'Testing and quality assurance framework setup'
          ],
          outcome: 'Strategic automated workflows that integrate seamlessly with your business and improve efficiency.'
        }
      },
      {
        title: 'Implementation & Optimization',
        description: 'Build, deploy, and optimize automated workflows',
        icon: Users,
        details: {
          overview: 'We implement the automated workflows, monitor performance, and continuously optimize to ensure maximum efficiency gains.',
          whatYouGet: [
            'Automated workflow implementation and deployment',
            'Performance monitoring and optimization',
            'User training and adoption support',
            'Ongoing optimization and improvement recommendations'
          ],
          process: [
            'Automated workflow implementation and deployment',
            'Performance monitoring and optimization',
            'User training and adoption support',
            'Ongoing optimization and improvement'
          ],
          outcome: 'Successfully implemented automated workflows that improve efficiency, reduce errors, and increase productivity.'
        }
      }
    ]
  }
}; 