import { TrendingUp, Target, Palette, Users } from 'lucide-react';
import { SubserviceData } from '../types';

export const marketResearchCompetitive: SubserviceData = {
  id: 'market-research-competitive',
  title: 'Market Research & Competitive Analysis',
  tagline: 'Data-driven market insights for strategic decisions',
  description: 'Comprehensive market research and competitive analysis to inform strategic decisions.',
  service: 'strategy-planning',
  slug: 'market-research-competitive',
  
  ourApproach: {
    headline: 'Strategic research that drives business decisions',
    description: 'We conduct comprehensive market research and competitive analysis to provide actionable insights that inform your strategic decisions.',
    keyPrinciple: 'Research that supports strategic business decisions'
  },
  
  whatItIs: {
    realDefinition: 'Comprehensive market research and competitive analysis that provides actionable insights for strategic business decisions.',
    notJust: 'Generic market reports or surface-level analysis',
    butAlso: 'Strategic research that directly supports your business decisions and market positioning'
  },
  
  process: [
    {
      phase: 'Research',
      whatWeDo: 'Analyze market size, trends, competitive landscape, and customer segments',
      whatEmerges: 'Comprehensive market understanding and competitive intelligence'
    },
    {
      phase: 'Analysis',
      whatWeDo: 'Identify opportunities, threats, and strategic implications',
      whatEmerges: 'Actionable insights and strategic recommendations'
    },
    {
      phase: 'Strategy',
      whatWeDo: 'Develop strategic recommendations and implementation guidance',
      whatEmerges: 'Clear strategic direction based on market insights'
    },
    {
      phase: 'Implementation',
      whatWeDo: 'Guide implementation of strategic recommendations',
      whatEmerges: 'Strategic decisions that drive business growth'
    }
  ],
  
  outcomes: {
    primary: 'Clear market understanding and competitive intelligence',
    secondary: 'Strategic recommendations based on market insights',
    longTerm: 'Data-driven strategic foundation for business growth'
  },
  
  discovery: {
    price: '$250',
    duration: '60 minutes',
    whatWeExplore: [
      'Your business goals and strategic questions',
      'Target market and competitive landscape',
      'Specific research needs and objectives',
      'Timeline and decision-making requirements'
    ],
    whatYouGet: [
      'Market research scope and methodology',
      'Competitive analysis framework',
      'Strategic recommendations approach',
      'Full discovery credit toward project'
    ]
  },

  performanceMetrics: {
    title: 'Market Research Business Impact',
    description: 'What happens when your decisions are based on data',
    metric: {
      value: '+380%',
      number: 380,
      label: 'Success Rate',
      description: 'Data-driven decisions see an average 380% higher success rate',
      icon: TrendingUp
    },
    bottomMessage: 'Market research that drives strategic business decisions'
  },

  methodology: {
    title: 'Everything you need for strategic market research',
    subtitle: 'Our market research process combines comprehensive analysis with strategic insights to support your business decisions.',
    items: [
      {
        title: 'Market Research & Analysis',
        description: 'Comprehensive market research and competitive analysis',
        icon: Target,
        details: {
          overview: 'We conduct thorough market research to understand market size, trends, competitive landscape, and customer segments.',
          whatYouGet: [
            'Market size and growth analysis',
            'Competitive landscape and positioning analysis',
            'Customer segment and behavior research',
            'Market trends and opportunity identification'
          ],
          process: [
            'Market size and growth data collection and analysis',
            'Competitive landscape research and positioning analysis',
            'Customer segment identification and behavior research',
            'Market trends and opportunity analysis'
          ],
          outcome: 'A comprehensive understanding of your market, competitors, and opportunities.'
        }
      },
      {
        title: 'Strategic Analysis & Insights',
        description: 'Develop actionable insights and strategic recommendations',
        icon: Palette,
        details: {
          overview: 'We analyze the research findings to identify strategic opportunities, threats, and actionable insights for your business.',
          whatYouGet: [
            'Strategic opportunity and threat identification',
            'Competitive advantage and positioning analysis',
            'Market entry and growth strategy recommendations',
            'Risk assessment and mitigation strategies'
          ],
          process: [
            'Strategic opportunity and threat analysis',
            'Competitive advantage and positioning assessment',
            'Market entry and growth strategy development',
            'Risk assessment and mitigation planning'
          ],
          outcome: 'Actionable strategic insights and recommendations based on comprehensive market research.'
        }
      },
      {
        title: 'Strategic Implementation',
        description: 'Guide implementation of strategic recommendations',
        icon: Users,
        details: {
          overview: 'We help you implement the strategic recommendations and provide ongoing guidance for strategic decision-making.',
          whatYouGet: [
            'Strategic implementation roadmap and guidance',
            'Decision-making framework and process',
            'Performance monitoring and measurement setup',
            'Ongoing strategic guidance and support'
          ],
          process: [
            'Strategic implementation roadmap development',
            'Decision-making framework and process setup',
            'Performance monitoring and measurement implementation',
            'Ongoing strategic guidance and support'
          ],
          outcome: 'Successfully implemented strategic decisions that drive business growth based on market insights.'
        }
      }
    ]
  }
}; 