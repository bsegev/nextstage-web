import { TrendingUp, Target, Palette, Users } from 'lucide-react';
import { SubserviceData } from '../types';

export const brandAuditRefresh: SubserviceData = {
  id: 'brand-audit-refresh',
  title: 'Brand Audit & Refresh',
  tagline: 'Strategic brand assessment and evolution',
  description: 'Comprehensive brand audit and strategic refresh that aligns with your business goals.',
  service: 'branding-design',
  slug: 'brand-audit-refresh',
  
  ourApproach: {
    headline: 'Strategic brand evolution, not just visual updates',
    description: 'We analyze your current brand position, market perception, and business goals to create a strategic brand refresh that drives real business results.',
    keyPrinciple: 'Brand evolution that supports business growth'
  },
  
  whatItIs: {
    realDefinition: 'A comprehensive brand assessment and strategic refresh that aligns your brand with your business goals and market position.',
    notJust: 'A logo redesign or visual update',
    butAlso: 'A strategic brand evolution that supports your business objectives and market positioning'
  },
  
  process: [
    {
      phase: 'Audit',
      whatWeDo: 'Analyze current brand positioning, market perception, and competitive landscape',
      whatEmerges: 'Clear understanding of brand strengths, weaknesses, and opportunities'
    },
    {
      phase: 'Strategy',
      whatWeDo: 'Develop strategic brand refresh recommendations and evolution roadmap',
      whatEmerges: 'Strategic brand direction aligned with business goals'
    },
    {
      phase: 'Implementation',
      whatWeDo: 'Execute brand refresh across key touchpoints and provide guidance',
      whatEmerges: 'Refreshed brand that better supports business objectives'
    },
    {
      phase: 'Optimization',
      whatWeDo: 'Monitor brand performance and optimize based on results',
      whatEmerges: 'Continuously improving brand impact and market position'
    }
  ],
  
  outcomes: {
    primary: 'Brand that better aligns with your business goals and market position',
    secondary: 'Clear brand evolution roadmap for future growth',
    longTerm: 'Brand foundation that scales with your business and attracts ideal customers'
  },
  
  discovery: {
    price: '$250',
    duration: '60 minutes',
    whatWeExplore: [
      'Your current brand positioning and market perception',
      'Business goals and how brand should support them',
      'Competitive landscape and differentiation opportunities',
      'Brand evolution priorities and timeline'
    ],
    whatYouGet: [
      'Comprehensive brand audit and assessment',
      'Strategic brand refresh recommendations',
      'Brand evolution roadmap and timeline',
      'Full discovery credit toward project'
    ]
  },

  performanceMetrics: {
    title: 'Brand Audit & Refresh Business Impact',
    description: 'What happens when your brand evolution supports business growth',
    metric: {
      value: '+23%',
      number: 23,
      label: 'Revenue Increase',
      description: 'Strategic brand refreshes are linked to a 23% increase in revenue',
      icon: TrendingUp
    },
    bottomMessage: 'Brand evolution that drives measurable business growth'
  },

  methodology: {
    title: 'Everything you need for strategic brand evolution',
    subtitle: 'Our brand audit and refresh process combines strategic analysis with practical implementation to create brands that support business growth.',
    items: [
      {
        title: 'Strategic Brand Assessment',
        description: 'Comprehensive analysis of current brand position and market perception',
        icon: Target,
        details: {
          overview: 'We start with a thorough analysis of your current brand position, market perception, and competitive landscape to understand where your brand stands and where it needs to go.',
          whatYouGet: [
            'Current brand positioning analysis and market perception assessment',
            'Competitive landscape analysis and differentiation opportunities',
            'Brand strengths, weaknesses, and growth opportunities identification',
            'Strategic foundation for brand evolution planning'
          ],
          process: [
            'Brand positioning and market perception research',
            'Competitive landscape and differentiation analysis',
            'Brand strengths and weaknesses assessment',
            'Strategic opportunities identification and documentation'
          ],
          outcome: 'A clear understanding of your current brand position and the strategic opportunities for evolution.'
        }
      },
      {
        title: 'Strategic Brand Evolution',
        description: 'Develop strategic brand refresh recommendations and roadmap',
        icon: Palette,
        details: {
          overview: 'Based on the audit findings, we develop strategic brand refresh recommendations that align with your business goals and market positioning.',
          whatYouGet: [
            'Strategic brand refresh recommendations and priorities',
            'Brand evolution roadmap with clear milestones and timeline',
            'Implementation strategy and resource requirements',
            'Success metrics and measurement framework'
          ],
          process: [
            'Strategic brand direction development based on audit findings',
            'Brand evolution roadmap creation with clear phases',
            'Implementation strategy and resource planning',
            'Success metrics and measurement framework development'
          ],
          outcome: 'A strategic brand evolution plan that supports your business objectives and market positioning.'
        }
      },
      {
        title: 'Brand Refresh Implementation',
        description: 'Execute brand refresh across key touchpoints with guidance',
        icon: Users,
        details: {
          overview: 'We help you implement the brand refresh across key touchpoints, providing guidance and support to ensure successful execution.',
          whatYouGet: [
            'Brand refresh implementation guidance and support',
            'Key touchpoint prioritization and execution plan',
            'Team training and implementation support',
            'Ongoing brand management guidance and best practices'
          ],
          process: [
            'Key touchpoint identification and prioritization',
            'Brand refresh implementation planning and execution',
            'Team training and implementation support',
            'Ongoing brand management guidance and best practices'
          ],
          outcome: 'A successfully implemented brand refresh that better supports your business objectives and market positioning.'
        }
      }
    ]
  }
}; 