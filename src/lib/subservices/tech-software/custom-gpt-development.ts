import { TrendingUp, Target, Palette, Users } from 'lucide-react';
import { SubserviceData } from '../types';

export const customGptDevelopment: SubserviceData = {
  id: 'custom-gpt-development',
  title: 'Custom GPT Development',
  tagline: 'AI solutions tailored to your business',
  description: 'Custom GPT development for business-specific AI solutions.',
  service: 'tech-software',
  slug: 'custom-gpt-development',
  
  ourApproach: {
    headline: 'AI that works for your specific business needs',
    description: 'We develop custom GPT solutions tailored to your business processes, data, and specific use cases to drive efficiency and innovation.',
    keyPrinciple: 'Custom AI solutions that deliver business value'
  },
  
  whatItIs: {
    realDefinition: 'Custom GPT development that creates AI solutions specifically designed for your business processes, data, and unique requirements.',
    notJust: 'Generic AI tools or off-the-shelf solutions',
    butAlso: 'Tailored AI systems that understand your business and deliver specific value'
  },
  
  process: [
    {
      phase: 'Analysis',
      whatWeDo: 'Analyze business needs and AI opportunities',
      whatEmerges: 'Clear understanding of AI use cases and business value'
    },
    {
      phase: 'Design',
      whatWeDo: 'Design custom GPT architecture and training strategy',
      whatEmerges: 'Strategic AI solution design tailored to your business'
    },
    {
      phase: 'Development',
      whatWeDo: 'Build and train custom GPT model',
      whatEmerges: 'Functional AI solution ready for deployment'
    },
    {
      phase: 'Integration',
      whatWeDo: 'Integrate AI solution into business processes',
      whatEmerges: 'AI-powered business processes that drive value'
    }
  ],
  
  outcomes: {
    primary: 'Custom AI solution that addresses your specific business needs',
    secondary: 'Improved efficiency and innovation through AI automation',
    longTerm: 'AI foundation that scales with your business growth'
  },
  
  discovery: {
    price: '$250',
    duration: '60 minutes',
    whatWeExplore: [
      'Your business processes and AI opportunities',
      'Data availability and quality for AI training',
      'Specific use cases and business requirements',
      'Integration needs and technical constraints'
    ],
    whatYouGet: [
      'AI opportunity analysis and use case identification',
      'Custom GPT strategy and development roadmap',
      'Technical requirements and integration plan',
      'Full discovery credit toward project'
    ]
  },

  performanceMetrics: {
    title: 'Custom GPT Development Business Impact',
    description: 'What happens when AI understands your business',
    metric: {
      value: '3.1x',
      number: 3.1,
      label: 'Productivity Increase',
      description: 'Custom AI solutions deliver 3.1x productivity increase in targeted business processes',
      source: 'BCG, "AI Business Impact Report"',
      icon: TrendingUp
    },
    bottomMessage: 'Custom AI solutions that drive measurable business value'
  },

  methodology: {
    title: 'Everything you need for successful custom AI development',
    subtitle: 'Our custom GPT development process combines business analysis with AI expertise to create solutions that deliver real business value.',
    items: [
      {
        title: 'AI Strategy & Use Case Analysis',
        description: 'Analyze business needs and identify AI opportunities',
        icon: Target,
        details: {
          overview: 'We start by understanding your business processes and identifying specific opportunities where custom AI can deliver measurable value.',
          whatYouGet: [
            'Business process analysis and AI opportunity identification',
            'Use case development and business value assessment',
            'Data availability and quality analysis',
            'AI strategy and implementation roadmap'
          ],
          process: [
            'Business process mapping and analysis',
            'AI opportunity identification and use case development',
            'Data availability and quality assessment',
            'AI strategy and implementation roadmap creation'
          ],
          outcome: 'A clear understanding of your AI opportunities and a strategic plan for custom GPT development.'
        }
      },
      {
        title: 'Custom GPT Design & Development',
        description: 'Design and develop custom GPT solution',
        icon: Palette,
        details: {
          overview: 'We design and develop a custom GPT solution that understands your business context and delivers specific value.',
          whatYouGet: [
            'Custom GPT architecture and design',
            'Model training and optimization',
            'Business-specific knowledge integration',
            'Testing and quality assurance'
          ],
          process: [
            'Custom GPT architecture and design development',
            'Model training and optimization',
            'Business-specific knowledge integration',
            'Testing and quality assurance'
          ],
          outcome: 'A custom GPT solution that understands your business and delivers specific value.'
        }
      },
      {
        title: 'AI Integration & Optimization',
        description: 'Integrate AI solution into business processes',
        icon: Users,
        details: {
          overview: 'We integrate the custom GPT solution into your business processes and continuously optimize for maximum value.',
          whatYouGet: [
            'AI solution integration into business processes',
            'User training and adoption support',
            'Performance monitoring and optimization',
            'Ongoing AI improvement and enhancement'
          ],
          process: [
            'AI solution integration into business processes',
            'User training and adoption support',
            'Performance monitoring and optimization',
            'Ongoing AI improvement and enhancement'
          ],
          outcome: 'Successfully integrated AI solution that drives measurable business value and efficiency.'
        }
      }
    ]
  }
}; 