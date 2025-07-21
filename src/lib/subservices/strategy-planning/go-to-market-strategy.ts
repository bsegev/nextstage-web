import { TrendingUp, Target, Palette, Users } from 'lucide-react';
import { SubserviceData } from '../types';

export const goToMarketStrategy: SubserviceData = {
  id: 'go-to-market-strategy',
  title: 'Go-to-Market Strategy & Launch Plan',
  tagline: 'Strategic market entry and launch execution',
  description: 'Comprehensive go-to-market strategy and launch plan for successful market entry.',
  service: 'strategy-planning',
  slug: 'go-to-market-strategy',
  
  ourApproach: {
    headline: 'Strategic market entry that drives success',
    description: 'We develop comprehensive go-to-market strategies and launch plans that ensure successful market entry and customer acquisition.',
    keyPrinciple: 'Strategic market entry that maximizes success probability'
  },
  
  whatItIs: {
    realDefinition: 'A comprehensive go-to-market strategy and launch plan designed to ensure successful market entry and customer acquisition.',
    notJust: 'A basic marketing plan or launch checklist',
    butAlso: 'A strategic market entry approach that maximizes success probability and customer acquisition'
  },
  
  process: [
    {
      phase: 'Strategy',
      whatWeDo: 'Develop comprehensive go-to-market strategy',
      whatEmerges: 'Clear market entry strategy and positioning'
    },
    {
      phase: 'Planning',
      whatWeDo: 'Create detailed launch plan and execution roadmap',
      whatEmerges: 'Comprehensive launch plan with clear milestones'
    },
    {
      phase: 'Execution',
      whatWeDo: 'Execute launch plan and monitor performance',
      whatEmerges: 'Successful market entry and customer acquisition'
    },
    {
      phase: 'Optimization',
      whatWeDo: 'Optimize strategy based on launch results',
      whatEmerges: 'Continuously improving go-to-market approach'
    }
  ],
  
  outcomes: {
    primary: 'Successful market entry and customer acquisition',
    secondary: 'Clear go-to-market strategy and execution plan',
    longTerm: 'Scalable market entry approach for future growth'
  },
  
  discovery: {
    price: '$250',
    duration: '60 minutes',
    whatWeExplore: [
      'Your product/service and target market',
      'Current market position and competitive landscape',
      'Launch timeline and resource constraints',
      'Success metrics and customer acquisition goals'
    ],
    whatYouGet: [
      'Go-to-market strategy and positioning',
      'Launch plan and execution roadmap',
      'Customer acquisition strategy and tactics',
      'Full discovery credit toward project'
    ]
  },

  performanceMetrics: {
    title: 'Go-to-Market Strategy Business Impact',
    description: 'What happens when you enter the market strategically',
    metric: {
      value: '+420%',
      number: 420,
      label: 'Success Rate',
      description: 'Strategic go-to-market approaches see 420% higher success rates',
      icon: TrendingUp
    },
    bottomMessage: 'Go-to-market strategy that maximizes success probability'
  },

  methodology: {
    title: 'Everything you need for successful market entry',
    subtitle: 'Our go-to-market strategy process combines strategic planning with tactical execution to ensure successful market entry.',
    items: [
      {
        title: 'Go-to-Market Strategy Development',
        description: 'Develop comprehensive market entry strategy',
        icon: Target,
        details: {
          overview: 'We develop a comprehensive go-to-market strategy that positions your product/service for successful market entry.',
          whatYouGet: [
            'Market entry strategy and positioning framework',
            'Target customer identification and segmentation',
            'Competitive positioning and differentiation strategy',
            'Market entry timing and approach recommendations'
          ],
          process: [
            'Market analysis and opportunity assessment',
            'Target customer identification and segmentation',
            'Competitive positioning and differentiation strategy',
            'Market entry timing and approach planning'
          ],
          outcome: 'A comprehensive go-to-market strategy that positions you for successful market entry.'
        }
      },
      {
        title: 'Launch Plan & Execution',
        description: 'Create detailed launch plan and execution roadmap',
        icon: Palette,
        details: {
          overview: 'We create a detailed launch plan with clear milestones, tactics, and execution roadmap for successful market entry.',
          whatYouGet: [
            'Detailed launch plan with clear milestones and timelines',
            'Customer acquisition tactics and channel strategy',
            'Launch execution roadmap and resource requirements',
            'Performance monitoring and measurement framework'
          ],
          process: [
            'Launch plan development with milestones and timelines',
            'Customer acquisition tactics and channel strategy',
            'Launch execution roadmap and resource planning',
            'Performance monitoring and measurement setup'
          ],
          outcome: 'A comprehensive launch plan that guides successful market entry and customer acquisition.'
        }
      },
      {
        title: 'Launch Execution & Optimization',
        description: 'Execute launch plan and optimize based on results',
        icon: Users,
        details: {
          overview: 'We help you execute the launch plan, monitor performance, and optimize the strategy based on real results.',
          whatYouGet: [
            'Launch execution support and guidance',
            'Performance monitoring and analysis',
            'Strategy optimization and improvement recommendations',
            'Ongoing go-to-market support and guidance'
          ],
          process: [
            'Launch execution and performance monitoring',
            'Performance analysis and optimization recommendations',
            'Strategy optimization and improvement implementation',
            'Ongoing go-to-market support and guidance'
          ],
          outcome: 'Successfully executed market entry with optimized strategy that drives customer acquisition and growth.'
        }
      }
    ]
  }
}; 