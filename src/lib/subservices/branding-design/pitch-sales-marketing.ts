import { TrendingUp, Target, Palette, Users } from 'lucide-react';
import { SubserviceData } from '../types';

export const pitchSalesMarketing: SubserviceData = {
  id: 'pitch-sales-marketing',
  title: 'Pitch & Marketing Collateral',
  tagline: 'Professional sales materials that convert',
  description: 'Professional pitch decks, sales materials, and marketing collateral that drive results.',
  service: 'branding-design',
  slug: 'pitch-sales-marketing',
  
  ourApproach: {
    headline: 'Sales materials that actually close deals',
    description: 'We create professional pitch decks, sales materials, and marketing collateral that don\'t just look good—they help you close deals and drive business growth.',
    keyPrinciple: 'Sales materials that convert prospects into customers'
  },
  
  whatItIs: {
    realDefinition: 'Professional pitch decks, sales materials, and marketing collateral designed to convert prospects into customers and drive business growth.',
    notJust: 'Pretty presentations and marketing materials',
    butAlso: 'Strategic sales tools that help you close deals and grow your business'
  },
  
  process: [
    {
      phase: 'Strategy',
      whatWeDo: 'Audit current sales materials and messaging effectiveness',
      whatEmerges: 'Clear understanding of what works and what needs improvement'
    },
    {
      phase: 'Development',
      whatWeDo: 'Develop strategic messaging and create compelling materials',
      whatEmerges: 'Professional sales materials that communicate value effectively'
    },
    {
      phase: 'System',
      whatWeDo: 'Build sales collateral system and templates',
      whatEmerges: 'Complete sales toolkit that your team can use consistently'
    },
    {
      phase: 'Implementation',
      whatWeDo: 'Train team on usage and implement across sales process',
      whatEmerges: 'Sales materials working effectively across all touchpoints'
    }
  ],
  
  outcomes: {
    primary: 'Sales materials that help you close more deals and increase revenue',
    secondary: 'Professional presentation that builds credibility and trust',
    longTerm: 'Scalable sales collateral system that grows with your business'
  },
  
  discovery: {
    price: '$250',
    duration: '60 minutes',
    whatWeExplore: [
      'Your current sales materials and their effectiveness',
      'Target audience and what drives their buying decisions',
      'Sales process and where materials are used',
      'Business goals and sales objectives'
    ],
    whatYouGet: [
      'Sales materials audit and effectiveness analysis',
      'Strategic recommendations for improvement',
      'Sales collateral development roadmap',
      'Full discovery credit toward project'
    ]
  },

  performanceMetrics: {
    title: 'Sales Materials Business Impact',
    description: 'What happens when your sales materials actually convert',
    metric: {
      value: '2.3x',
      number: 2.3,
      label: 'Close Rate',
      description: 'Professional sales collateral increases close rates by 2.3x compared to basic materials',
      source: 'Gartner, "Sales Enablement Technology Report"',
      icon: TrendingUp
    },
    bottomMessage: 'Sales materials that convert prospects into customers'
  },

  methodology: {
    title: 'Everything you need for sales materials that convert',
    subtitle: 'Our sales materials process combines strategic messaging with professional design to create materials that help you close deals.',
    items: [
      {
        title: 'Sales Strategy & Messaging',
        description: 'Develop strategic messaging that resonates with your audience',
        icon: Target,
        details: {
          overview: 'We start by understanding your audience, their pain points, and what drives their buying decisions to create messaging that resonates.',
          whatYouGet: [
            'Target audience analysis and pain point identification',
            'Strategic messaging framework and value propositions',
            'Competitive analysis and differentiation strategy',
            'Sales messaging strategy and implementation plan'
          ],
          process: [
            'Target audience research and pain point analysis',
            'Value proposition development and messaging framework',
            'Competitive analysis and differentiation strategy',
            'Sales messaging strategy development and documentation'
          ],
          outcome: 'A clear understanding of what resonates with your audience and how to communicate your value effectively.'
        }
      },
      {
        title: 'Professional Design & Development',
        description: 'Create compelling sales materials that build trust and credibility',
        icon: Palette,
        details: {
          overview: 'We design professional sales materials that build trust, communicate value clearly, and help you close deals.',
          whatYouGet: [
            'Professional pitch decks and presentation materials',
            'Sales collateral and marketing materials',
            'Brand-consistent design across all materials',
            'High-quality assets and templates for ongoing use'
          ],
          process: [
            'Professional design development with brand consistency',
            'Sales materials creation and content development',
            'Quality assurance and professional refinement',
            'Asset preparation and template development'
          ],
          outcome: 'Professional sales materials that build trust, communicate value effectively, and help you close more deals.'
        }
      },
      {
        title: 'Sales System Implementation',
        description: 'Build sales collateral system and train team on usage',
        icon: Users,
        details: {
          overview: 'We help you implement the sales materials across your sales process and train your team on effective usage.',
          whatYouGet: [
            'Sales collateral system and implementation plan',
            'Team training on effective sales materials usage',
            'Sales process integration and optimization',
            'Ongoing support and optimization guidance'
          ],
          process: [
            'Sales collateral system development and organization',
            'Team training on effective materials usage',
            'Sales process integration and optimization',
            'Ongoing support and performance optimization'
          ],
          outcome: 'A sales collateral system that your team can use effectively to close more deals and drive business growth.'
        }
      }
    ]
  }
}; 