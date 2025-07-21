import { TrendingUp, Target, Palette, Users } from 'lucide-react';
import { SubserviceData } from '../types';

export const techStackAssessment: SubserviceData = {
  id: 'tech-stack-assessment',
  title: 'Tech Stack Assessment & Optimization Plan',
  tagline: 'Optimize your technology foundation',
  description: 'Comprehensive tech stack assessment and optimization strategy.',
  service: 'tech-software',
  slug: 'tech-stack-assessment',
  
  ourApproach: {
    headline: 'Technology that supports your business growth',
    description: 'We analyze your current tech stack, identify optimization opportunities, and create a strategic roadmap for technology improvement.',
    keyPrinciple: 'Technology optimization that drives business efficiency'
  },
  
  whatItIs: {
    realDefinition: 'A comprehensive assessment of your current technology stack with strategic recommendations for optimization and improvement.',
    notJust: 'A basic review of your current tools and software',
    butAlso: 'A strategic analysis that identifies specific opportunities to improve efficiency, reduce costs, and support business growth'
  },
  
  process: [
    {
      phase: 'Audit',
      whatWeDo: 'Analyze current tech stack and identify inefficiencies',
      whatEmerges: 'Clear understanding of technology gaps and optimization opportunities'
    },
    {
      phase: 'Analysis',
      whatWeDo: 'Evaluate performance, costs, and business alignment',
      whatEmerges: 'Strategic recommendations for technology improvement'
    },
    {
      phase: 'Strategy',
      whatWeDo: 'Develop optimization roadmap and implementation plan',
      whatEmerges: 'Clear action plan for technology optimization'
    },
    {
      phase: 'Implementation',
      whatWeDo: 'Guide implementation of optimization recommendations',
      whatEmerges: 'Optimized tech stack that supports business growth'
    }
  ],
  
  outcomes: {
    primary: 'Optimized tech stack that improves efficiency and reduces costs',
    secondary: 'Clear roadmap for ongoing technology improvement',
    longTerm: 'Scalable technology foundation that supports business growth'
  },
  
  discovery: {
    price: '$250',
    duration: '60 minutes',
    whatWeExplore: [
      'Your current tech stack and technology challenges',
      'Business goals and technology requirements',
      'Performance issues and efficiency bottlenecks',
      'Budget and resource constraints for optimization'
    ],
    whatYouGet: [
      'Tech stack audit and performance analysis',
      'Strategic optimization recommendations',
      'Technology improvement roadmap with priorities',
      'Full discovery credit toward project'
    ]
  },

  performanceMetrics: {
    title: 'Tech Stack Assessment Business Impact',
    description: 'What happens when your technology actually supports your business',
    metric: {
      value: '+280%',
      number: 280,
      label: 'Efficiency Increase',
      description: 'Optimized tech stacks see an average 280% increase in efficiency',
      icon: TrendingUp
    },
    bottomMessage: 'Technology optimization that drives business efficiency'
  },

  methodology: {
    title: 'Everything you need for technology optimization',
    subtitle: 'Our tech stack assessment process combines technical analysis with business strategy to optimize your technology foundation.',
    items: [
      {
        title: 'Technology Audit & Analysis',
        description: 'Comprehensive analysis of current tech stack and performance',
        icon: Target,
        details: {
          overview: 'We start with a thorough analysis of your current technology stack, performance metrics, and business alignment to understand optimization opportunities.',
          whatYouGet: [
            'Current tech stack inventory and performance analysis',
            'Technology efficiency and cost analysis',
            'Business alignment and integration assessment',
            'Performance bottleneck and optimization opportunity identification'
          ],
          process: [
            'Tech stack inventory and performance data collection',
            'Technology efficiency and cost analysis',
            'Business alignment and integration assessment',
            'Performance bottleneck and optimization opportunity identification'
          ],
          outcome: 'A clear understanding of your current technology performance and specific opportunities for optimization.'
        }
      },
      {
        title: 'Optimization Strategy Development',
        description: 'Develop strategic recommendations for technology improvement',
        icon: Palette,
        details: {
          overview: 'Based on the audit findings, we develop strategic recommendations for optimizing your technology stack to improve efficiency and support business growth.',
          whatYouGet: [
            'Strategic technology optimization recommendations',
            'Cost reduction and efficiency improvement strategies',
            'Technology roadmap and implementation plan',
            'Performance improvement timeline and milestones'
          ],
          process: [
            'Optimization opportunity identification and prioritization',
            'Cost reduction and efficiency improvement strategy development',
            'Technology roadmap and implementation planning',
            'Performance improvement timeline and milestone creation'
          ],
          outcome: 'A strategic technology optimization plan that will improve efficiency, reduce costs, and support business growth.'
        }
      },
      {
        title: 'Implementation & Optimization',
        description: 'Guide implementation and ongoing optimization of technology improvements',
        icon: Users,
        details: {
          overview: 'We help you implement the optimization recommendations and provide ongoing guidance for continuous technology improvement.',
          whatYouGet: [
            'Implementation guidance and support for technology changes',
            'Performance monitoring and optimization tracking',
            'Ongoing technology optimization recommendations',
            'Technology performance reporting and analysis'
          ],
          process: [
            'Technology optimization implementation planning and execution',
            'Performance monitoring and optimization tracking setup',
            'Ongoing technology optimization recommendations and support',
            'Regular technology performance reporting and analysis'
          ],
          outcome: 'Successfully implemented technology optimizations that improve efficiency, reduce costs, and support business growth.'
        }
      }
    ]
  }
}; 