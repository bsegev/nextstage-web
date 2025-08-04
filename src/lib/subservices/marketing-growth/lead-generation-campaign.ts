import { TrendingUp, Target, Palette, Users } from 'lucide-react';
import { SubserviceData } from '../types';

export const leadGenerationCampaign: SubserviceData = {
  id: 'lead-generation-campaign',
  title: 'Lead Generation Campaign',
  tagline: 'Strategic campaigns that bring in qualified prospects',
  description: 'Strategic lead generation campaigns that bring in the right customers.',
  service: 'marketing-growth',
  slug: 'lead-generation-campaign',
  
  ourApproach: {
    headline: 'Targeted campaigns that convert prospects into customers',
    description: 'We design and execute strategic lead generation campaigns that attract qualified prospects and convert them into customers.',
    keyPrinciple: 'Lead generation that drives qualified customer acquisition'
  },
  
  whatItIs: {
    realDefinition: 'Strategic lead generation campaigns designed to attract qualified prospects and convert them into customers through targeted marketing.',
    notJust: 'Generic marketing campaigns that generate leads',
    butAlso: 'Strategic campaigns that attract the right prospects and convert them efficiently'
  },
  
  process: [
    {
      phase: 'Strategy',
      whatWeDo: 'Map ideal customer profile and develop targeting strategy',
      whatEmerges: 'Clear understanding of who to target and how to reach them'
    },
    {
      phase: 'Campaign',
      whatWeDo: 'Design and launch targeted lead generation campaigns',
      whatEmerges: 'Active campaigns that attract qualified prospects'
    },
    {
      phase: 'Optimization',
      whatWeDo: 'Monitor performance and optimize for better results',
      whatEmerges: 'Improved campaign performance and higher conversion rates'
    },
    {
      phase: 'Scale',
      whatWeDo: 'Scale successful campaigns and expand reach',
      whatEmerges: 'Scalable lead generation system that drives growth'
    }
  ],
  
  outcomes: {
    primary: 'Consistent flow of qualified leads that convert into customers',
    secondary: 'Optimized lead generation campaigns with better ROI',
    longTerm: 'Scalable lead generation system that supports business growth'
  },
  
  discovery: {
    price: '$250',
    duration: '60 minutes',
    whatWeExplore: [
      'Your ideal customer profile and target audience',
      'Current lead generation challenges and goals',
      'Marketing channels and budget for campaigns',
      'Conversion goals and sales process integration'
    ],
    whatYouGet: [
      'Lead generation strategy and campaign recommendations',
      'Target audience analysis and targeting strategy',
      'Campaign development roadmap with priorities',
      'Full discovery credit toward project'
    ]
  },

  performanceMetrics: {
    title: 'Lead Generation Campaign Business Impact',
    description: 'What happens when your campaigns attract the right prospects',
    metric: {
      value: '82%',
      number: 82,
      label: 'Lead Quality',
      description: '82% of companies report higher lead quality from strategic lead generation campaigns',
      source: 'HubSpot, "State of Marketing Report 2023"',
      icon: TrendingUp
    },
    bottomMessage: 'Lead generation campaigns that attract qualified prospects'
  },

  methodology: {
    title: 'Everything you need for successful lead generation',
    subtitle: 'Our lead generation process combines strategic targeting with campaign optimization to attract qualified prospects.',
    items: [
      {
        title: 'Strategic Targeting & Audience',
        description: 'Develop precise targeting strategy for qualified prospects',
        icon: Target,
        details: {
          overview: 'We start by understanding your ideal customer profile and developing a precise targeting strategy to reach qualified prospects.',
          whatYouGet: [
            'Ideal customer profile development and analysis',
            'Target audience identification and segmentation',
            'Channel selection and targeting strategy',
            'Competitive analysis and differentiation approach'
          ],
          process: [
            'Ideal customer profile research and development',
            'Target audience identification and segmentation analysis',
            'Channel selection and targeting strategy development',
            'Competitive analysis and differentiation strategy'
          ],
          outcome: 'A precise targeting strategy that will help you reach qualified prospects efficiently.'
        }
      },
      {
        title: 'Campaign Development & Launch',
        description: 'Design and launch targeted lead generation campaigns',
        icon: Palette,
        details: {
          overview: 'We design and launch targeted lead generation campaigns that attract qualified prospects and guide them toward conversion.',
          whatYouGet: [
            'Strategic campaign design and messaging',
            'Multi-channel campaign development and launch',
            'Landing page and conversion funnel optimization',
            'Campaign tracking and performance monitoring setup'
          ],
          process: [
            'Strategic campaign design and messaging development',
            'Multi-channel campaign development and launch',
            'Landing page and conversion funnel optimization',
            'Campaign tracking and performance monitoring setup'
          ],
          outcome: 'Active lead generation campaigns that attract qualified prospects and drive conversions.'
        }
      },
      {
        title: 'Optimization & Scale',
        description: 'Optimize campaigns and scale successful strategies',
        icon: Users,
        details: {
          overview: 'We continuously optimize campaigns based on performance data and scale successful strategies to drive growth.',
          whatYouGet: [
            'Performance monitoring and optimization recommendations',
            'Campaign scaling strategies and implementation',
            'Ongoing optimization and improvement support',
            'Scalable lead generation system development'
          ],
          process: [
            'Performance monitoring and data analysis',
            'Campaign optimization and improvement implementation',
            'Successful campaign scaling and expansion',
            'Scalable lead generation system development'
          ],
          outcome: 'Optimized and scalable lead generation campaigns that consistently deliver qualified prospects.'
        }
      }
    ]
  }
}; 