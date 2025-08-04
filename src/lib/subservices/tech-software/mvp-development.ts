import { TrendingUp, Target, Palette, Users } from 'lucide-react';
import { SubserviceData } from '../types';

export const mvpDevelopment: SubserviceData = {
  id: 'mvp-development',
  title: 'MVP Development & Validation',
  tagline: 'Build, test, and validate your product idea',
  description: 'Minimum viable product development and market validation.',
  service: 'tech-software',
  slug: 'mvp-development',
  
  ourApproach: {
    headline: 'Build fast, validate faster',
    description: 'We help you build a minimum viable product quickly and validate it with real users to ensure market fit before major investment.',
    keyPrinciple: 'Rapid development and validation to reduce risk'
  },
  
  whatItIs: {
    realDefinition: 'Rapid development of a minimum viable product followed by market validation to test product-market fit and reduce development risk.',
    notJust: 'Building a basic version of your product',
    butAlso: 'Strategic product development that validates market demand and reduces investment risk'
  },
  
  process: [
    {
      phase: 'Strategy',
      whatWeDo: 'Define MVP scope and validation strategy',
      whatEmerges: 'Clear product vision and validation approach'
    },
    {
      phase: 'Development',
      whatWeDo: 'Build MVP with core features and functionality',
      whatEmerges: 'Functional product ready for market testing'
    },
    {
      phase: 'Validation',
      whatWeDo: 'Test with real users and gather feedback',
      whatEmerges: 'Market validation and user insights'
    },
    {
      phase: 'Iteration',
      whatWeDo: 'Refine product based on validation results',
      whatEmerges: 'Validated product ready for scaling'
    }
  ],
  
  outcomes: {
    primary: 'Validated product that meets market demand',
    secondary: 'Reduced development risk and faster time to market',
    longTerm: 'Product foundation that supports business growth'
  },
  
  discovery: {
    price: '$250',
    duration: '60 minutes',
    whatWeExplore: [
      'Your product idea and target market',
      'Core features and value proposition',
      'Development timeline and budget constraints',
      'Validation goals and success metrics'
    ],
    whatYouGet: [
      'MVP strategy and development roadmap',
      'Market validation approach and methodology',
      'Development timeline and resource requirements',
      'Full discovery credit toward project'
    ]
  },

  performanceMetrics: {
    title: 'MVP Development Business Impact',
    description: 'What happens when you validate before you scale',
    metric: {
      value: '2.5x',
      number: 2.5,
      label: 'Success Rate',
      description: 'MVP validation increases product success rates by 2.5x compared to full development',
      source: 'CB Insights, "Startup Failure Analysis"',
      icon: TrendingUp
    },
    bottomMessage: 'MVP development that validates market demand'
  },

  methodology: {
    title: 'Everything you need for successful MVP development',
    subtitle: 'Our MVP development process combines rapid development with strategic validation to reduce risk and ensure market fit.',
    items: [
      {
        title: 'MVP Strategy & Planning',
        description: 'Define MVP scope and validation strategy',
        icon: Target,
        details: {
          overview: 'We start by defining the core features and functionality needed for your MVP and developing a strategic validation approach.',
          whatYouGet: [
            'MVP scope definition and core feature identification',
            'Market validation strategy and methodology',
            'Development timeline and resource planning',
            'Success metrics and validation criteria'
          ],
          process: [
            'Product vision and core value proposition analysis',
            'MVP scope definition and feature prioritization',
            'Market validation strategy and methodology development',
            'Development timeline and resource planning'
          ],
          outcome: 'A clear MVP strategy and validation approach that will guide development and reduce risk.'
        }
      },
      {
        title: 'Rapid MVP Development',
        description: 'Build functional MVP with core features',
        icon: Palette,
        details: {
          overview: 'We rapidly develop your MVP with the core features needed to test your value proposition and gather user feedback.',
          whatYouGet: [
            'Functional MVP with core features and functionality',
            'User interface and experience design',
            'Technical implementation and deployment',
            'MVP testing and quality assurance'
          ],
          process: [
            'Core feature development and implementation',
            'User interface and experience design',
            'Technical implementation and deployment',
            'MVP testing and quality assurance'
          ],
          outcome: 'A functional MVP that can be tested with real users to validate market demand.'
        }
      },
      {
        title: 'Market Validation & Iteration',
        description: 'Test with real users and refine based on feedback',
        icon: Users,
        details: {
          overview: 'We help you test your MVP with real users, gather feedback, and iterate based on validation results.',
          whatYouGet: [
            'User testing and feedback collection methodology',
            'Market validation and user insights analysis',
            'Product iteration and improvement recommendations',
            'Scaling strategy based on validation results'
          ],
          process: [
            'User testing and feedback collection',
            'Market validation and user insights analysis',
            'Product iteration and improvement implementation',
            'Scaling strategy development based on validation results'
          ],
          outcome: 'A validated product that meets market demand and is ready for scaling.'
        }
      }
    ]
  }
}; 