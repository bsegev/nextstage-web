import { TrendingUp, Target, Palette, Users } from 'lucide-react';
import { SubserviceData } from '../types';

export const businessStrategyGrowth: SubserviceData = {
  id: 'business-strategy-growth',
  title: 'Business Strategy & Growth Roadmap',
  tagline: 'Strategic business planning for sustainable growth',
  description: 'Comprehensive business strategy and growth roadmap for sustainable business development.',
  service: 'strategy-planning',
  slug: 'business-strategy-growth',
  
  ourApproach: {
    headline: 'Strategic planning that drives sustainable growth',
    description: 'We develop comprehensive business strategies and growth roadmaps that align with your vision and drive sustainable business growth.',
    keyPrinciple: 'Strategic planning that supports sustainable business growth'
  },
  
  whatItIs: {
    realDefinition: 'Comprehensive business strategy and growth roadmap development that aligns with your vision and drives sustainable business growth.',
    notJust: 'Basic business planning or generic strategy documents',
    butAlso: 'Strategic business planning that creates clear direction and drives measurable growth'
  },
  
  process: [
    {
      phase: 'Assessment',
      whatWeDo: 'Analyze current business position and growth opportunities',
      whatEmerges: 'Clear understanding of business potential and growth opportunities'
    },
    {
      phase: 'Strategy',
      whatWeDo: 'Develop comprehensive business strategy and growth plan',
      whatEmerges: 'Strategic business direction and growth roadmap'
    },
    {
      phase: 'Planning',
      whatWeDo: 'Create detailed implementation plan and milestones',
      whatEmerges: 'Clear implementation roadmap with measurable milestones'
    },
    {
      phase: 'Execution',
      whatWeDo: 'Guide strategy implementation and monitor progress',
      whatEmerges: 'Successfully implemented strategy that drives growth'
    }
  ],
  
  outcomes: {
    primary: 'Clear business strategy and growth roadmap',
    secondary: 'Strategic direction that aligns team and resources',
    longTerm: 'Sustainable business foundation that supports long-term growth'
  },
  
  discovery: {
    price: '$250',
    duration: '60 minutes',
    whatWeExplore: [
      'Your business vision and growth goals',
      'Current business position and challenges',
      'Market opportunities and competitive landscape',
      'Resource constraints and implementation timeline'
    ],
    whatYouGet: [
      'Business strategy and growth roadmap',
      'Strategic direction and implementation plan',
      'Growth opportunity identification and prioritization',
      'Full discovery credit toward project'
    ]
  },

  performanceMetrics: {
    title: 'Business Strategy Business Impact',
    description: 'What happens when you have a clear strategic direction',
    metric: {
      value: '+290%',
      number: 290,
      label: 'Growth Rate',
      description: 'Strategic businesses see an average 290% higher growth rate',
      icon: TrendingUp
    },
    bottomMessage: 'Business strategy that drives sustainable growth'
  },

  methodology: {
    title: 'Everything you need for strategic business planning',
    subtitle: 'Our business strategy process combines comprehensive analysis with strategic planning to create sustainable growth roadmaps.',
    items: [
      {
        title: 'Business Assessment & Strategy Development',
        description: 'Analyze business position and develop strategic direction',
        icon: Target,
        details: {
          overview: 'We start by analyzing your current business position, market opportunities, and growth potential to develop a comprehensive business strategy.',
          whatYouGet: [
            'Current business position and performance analysis',
            'Market opportunity and growth potential assessment',
            'Strategic business direction and vision alignment',
            'Growth strategy and competitive positioning'
          ],
          process: [
            'Current business position and performance analysis',
            'Market opportunity and growth potential assessment',
            'Strategic business direction and vision alignment',
            'Growth strategy and competitive positioning development'
          ],
          outcome: 'A clear understanding of your business potential and a strategic direction for sustainable growth.'
        }
      },
      {
        title: 'Growth Roadmap & Planning',
        description: 'Create detailed growth roadmap and implementation plan',
        icon: Palette,
        details: {
          overview: 'We create a detailed growth roadmap with clear milestones, implementation plan, and success metrics for sustainable business growth.',
          whatYouGet: [
            'Detailed growth roadmap with clear milestones and timelines',
            'Implementation plan and resource requirements',
            'Success metrics and performance measurement framework',
            'Risk assessment and mitigation strategies'
          ],
          process: [
            'Growth roadmap development with milestones and timelines',
            'Implementation plan and resource requirement planning',
            'Success metrics and performance measurement framework',
            'Risk assessment and mitigation strategy development'
          ],
          outcome: 'A comprehensive growth roadmap that guides sustainable business development and success.'
        }
      },
      {
        title: 'Strategy Implementation & Optimization',
        description: 'Guide strategy implementation and optimize for growth',
        icon: Users,
        details: {
          overview: 'We help you implement the business strategy, monitor progress, and continuously optimize for sustainable growth.',
          whatYouGet: [
            'Strategy implementation guidance and support',
            'Progress monitoring and performance analysis',
            'Strategy optimization and improvement recommendations',
            'Ongoing strategic guidance and support'
          ],
          process: [
            'Strategy implementation guidance and support',
            'Progress monitoring and performance analysis',
            'Strategy optimization and improvement recommendations',
            'Ongoing strategic guidance and support'
          ],
          outcome: 'Successfully implemented business strategy that drives sustainable growth and business success.'
        }
      }
    ]
  }
}; 