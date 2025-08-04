import { TrendingUp, Target, Palette, Users } from 'lucide-react';
import { SubserviceData } from '../types';

export const positioningMessaging: SubserviceData = {
  id: 'positioning-messaging',
  title: 'Positioning & Messaging Development',
  tagline: 'Strategic positioning that differentiates and resonates',
  description: 'Strategic positioning and messaging that differentiates your business and resonates with your audience.',
  service: 'strategy-planning',
  slug: 'positioning-messaging',
  
  ourApproach: {
    headline: 'Positioning that makes you impossible to ignore',
    description: 'We develop strategic positioning and messaging that differentiates your business, resonates with your audience, and drives measurable results.',
    keyPrinciple: 'Strategic positioning that drives business results'
  },
  
  whatItIs: {
    realDefinition: 'Strategic positioning and messaging development that differentiates your business from competitors and resonates with your target audience.',
    notJust: 'Generic messaging or basic positioning statements',
    butAlso: 'Strategic positioning that drives customer acquisition and business growth'
  },
  
  process: [
    {
      phase: 'Analysis',
      whatWeDo: 'Analyze market position, competitors, and audience',
      whatEmerges: 'Clear understanding of positioning opportunities'
    },
    {
      phase: 'Strategy',
      whatWeDo: 'Develop strategic positioning and messaging framework',
      whatEmerges: 'Differentiated positioning that resonates with audience'
    },
    {
      phase: 'Development',
      whatWeDo: 'Create compelling messaging and communication strategy',
      whatEmerges: 'Strategic messaging that drives customer engagement'
    },
    {
      phase: 'Implementation',
      whatWeDo: 'Implement positioning across all touchpoints',
      whatEmerges: 'Consistent positioning that drives business results'
    }
  ],
  
  outcomes: {
    primary: 'Strategic positioning that differentiates and drives growth',
    secondary: 'Compelling messaging that resonates with your audience',
    longTerm: 'Positioning foundation that scales with business growth'
  },
  
  discovery: {
    price: '$250',
    duration: '60 minutes',
    whatWeExplore: [
      'Your current positioning and messaging challenges',
      'Target audience and their needs/pain points',
      'Competitive landscape and differentiation opportunities',
      'Business goals and positioning objectives'
    ],
    whatYouGet: [
      'Positioning audit and competitive analysis',
      'Strategic positioning and messaging recommendations',
      'Messaging framework and implementation plan',
      'Full discovery credit toward project'
    ]
  },

  performanceMetrics: {
    title: 'Positioning & Messaging Business Impact',
    description: 'What happens when your positioning actually works',
    metric: {
      value: '2.8x',
      number: 2.8,
      label: 'Customer Engagement',
      description: 'Clear positioning and messaging delivers 2.8x higher customer engagement rates',
      source: 'BCG, "Brand Positioning Impact Study"',
      icon: TrendingUp
    },
    bottomMessage: 'Strategic positioning that drives customer engagement'
  },

  methodology: {
    title: 'Everything you need for strategic positioning success',
    subtitle: 'Our positioning and messaging process combines market analysis with strategic development to create positioning that drives business results.',
    items: [
      {
        title: 'Positioning Analysis & Strategy',
        description: 'Analyze market position and develop strategic positioning',
        icon: Target,
        details: {
          overview: 'We analyze your current market position, competitive landscape, and audience to develop strategic positioning that differentiates your business.',
          whatYouGet: [
            'Current positioning and competitive analysis',
            'Target audience analysis and insight development',
            'Strategic positioning framework and differentiation strategy',
            'Positioning opportunity identification and prioritization'
          ],
          process: [
            'Current positioning and competitive landscape analysis',
            'Target audience research and insight development',
            'Strategic positioning framework and differentiation strategy',
            'Positioning opportunity identification and prioritization'
          ],
          outcome: 'A clear understanding of your positioning opportunities and a strategic framework for differentiation.'
        }
      },
      {
        title: 'Messaging Development & Strategy',
        description: 'Develop compelling messaging that resonates with audience',
        icon: Palette,
        details: {
          overview: 'We develop compelling messaging that communicates your strategic positioning and resonates with your target audience.',
          whatYouGet: [
            'Strategic messaging framework and key messages',
            'Value proposition and differentiation messaging',
            'Audience-specific messaging and communication strategy',
            'Messaging guidelines and implementation framework'
          ],
          process: [
            'Strategic messaging framework and key message development',
            'Value proposition and differentiation messaging creation',
            'Audience-specific messaging and communication strategy',
            'Messaging guidelines and implementation framework'
          ],
          outcome: 'Compelling messaging that communicates your strategic positioning and resonates with your audience.'
        }
      },
      {
        title: 'Positioning Implementation & Optimization',
        description: 'Implement positioning across all touchpoints and optimize',
        icon: Users,
        details: {
          overview: 'We help you implement the strategic positioning across all customer touchpoints and continuously optimize for better results.',
          whatYouGet: [
            'Positioning implementation across all touchpoints',
            'Performance monitoring and optimization',
            'Consistency management and quality control',
            'Ongoing positioning optimization and improvement'
          ],
          process: [
            'Positioning implementation across all customer touchpoints',
            'Performance monitoring and optimization',
            'Consistency management and quality control',
            'Ongoing positioning optimization and improvement'
          ],
          outcome: 'Successfully implemented strategic positioning that drives customer engagement and business results.'
        }
      }
    ]
  }
}; 