import { TrendingUp, Target, Palette, Users } from 'lucide-react';
import { SubserviceData } from '../types';

export const contentCopywriting: SubserviceData = {
  id: 'content-copywriting',
  title: 'Content & Copywriting',
  tagline: 'Strategic content that resonates and converts',
  description: 'Strategic content and copywriting across all customer touchpoints.',
  service: 'marketing-growth',
  slug: 'content-copywriting',
  
  ourApproach: {
    headline: 'Content that connects and converts',
    description: 'We create strategic content and compelling copy that resonates with your audience and drives them to take action.',
    keyPrinciple: 'Content that builds relationships and drives conversions'
  },
  
  whatItIs: {
    realDefinition: 'Strategic content and copywriting designed to engage your audience, build relationships, and drive conversions across all customer touchpoints.',
    notJust: 'Generic content and marketing copy',
    butAlso: 'Strategic content that builds relationships and drives measurable business results'
  },
  
  process: [
    {
      phase: 'Strategy',
      whatWeDo: 'Develop content strategy and messaging framework',
      whatEmerges: 'Clear content direction that aligns with business goals'
    },
    {
      phase: 'Creation',
      whatWeDo: 'Create compelling content and copy for all touchpoints',
      whatEmerges: 'Engaging content that resonates with your audience'
    },
    {
      phase: 'System',
      whatWeDo: 'Build content systems and production workflows',
      whatEmerges: 'Scalable content system that supports growth'
    },
    {
      phase: 'Optimization',
      whatWeDo: 'Optimize content performance and drive results',
      whatEmerges: 'Content that consistently drives engagement and conversions'
    }
  ],
  
  outcomes: {
    primary: 'Engaging content that builds relationships and drives conversions',
    secondary: 'Scalable content system that supports business growth',
    longTerm: 'Content foundation that attracts and retains customers'
  },
  
  discovery: {
    price: '$250',
    duration: '60 minutes',
    whatWeExplore: [
      'Your target audience and their content preferences',
      'Current content challenges and business goals',
      'Content touchpoints and distribution channels',
      'Content performance and engagement metrics'
    ],
    whatYouGet: [
      'Content strategy and messaging framework',
      'Content audit and improvement recommendations',
      'Content development roadmap with priorities',
      'Full discovery credit toward project'
    ]
  },

  performanceMetrics: {
    title: 'Content & Copywriting Business Impact',
    description: 'What happens when your content resonates with your audience',
    metric: {
      value: '+390%',
      number: 390,
      label: 'Engagement Increase',
      description: 'Strategic content sees an average 390% increase in engagement',
      icon: TrendingUp
    },
    bottomMessage: 'Content that builds relationships and drives conversions'
  },

  methodology: {
    title: 'Everything you need for strategic content success',
    subtitle: 'Our content and copywriting process combines strategic messaging with engaging content creation to build relationships and drive conversions.',
    items: [
      {
        title: 'Content Strategy & Messaging',
        description: 'Develop strategic content framework and messaging',
        icon: Target,
        details: {
          overview: 'We start by understanding your audience and developing a strategic content framework that aligns with your business goals.',
          whatYouGet: [
            'Content strategy and messaging framework development',
            'Target audience analysis and content preferences',
            'Content calendar and publishing strategy',
            'Brand voice and tone guidelines'
          ],
          process: [
            'Target audience research and content preference analysis',
            'Content strategy and messaging framework development',
            'Content calendar and publishing strategy creation',
            'Brand voice and tone guidelines development'
          ],
          outcome: 'A strategic content framework that will guide all your content creation and help you achieve your business goals.'
        }
      },
      {
        title: 'Content Creation & Copywriting',
        description: 'Create compelling content and copy for all touchpoints',
        icon: Palette,
        details: {
          overview: 'We create engaging content and compelling copy that resonates with your audience and drives them to take action.',
          whatYouGet: [
            'Strategic content creation for all touchpoints',
            'Compelling copywriting for marketing materials',
            'SEO-optimized content for search visibility',
            'Engaging social media content and copy'
          ],
          process: [
            'Strategic content creation for website and marketing materials',
            'Compelling copywriting for sales and marketing collateral',
            'SEO-optimized content creation and optimization',
            'Social media content and copy development'
          ],
          outcome: 'Engaging content and compelling copy that resonates with your audience and drives engagement and conversions.'
        }
      },
      {
        title: 'Content System & Optimization',
        description: 'Build scalable content systems and optimize performance',
        icon: Users,
        details: {
          overview: 'We help you build scalable content systems and continuously optimize content performance to drive better results.',
          whatYouGet: [
            'Content production workflow and system development',
            'Content performance monitoring and optimization',
            'Content distribution and promotion strategies',
            'Ongoing content optimization and improvement support'
          ],
          process: [
            'Content production workflow and system development',
            'Content performance monitoring and analysis',
            'Content distribution and promotion strategy implementation',
            'Ongoing content optimization and improvement'
          ],
          outcome: 'A scalable content system that consistently delivers engaging content and drives measurable business results.'
        }
      }
    ]
  }
}; 