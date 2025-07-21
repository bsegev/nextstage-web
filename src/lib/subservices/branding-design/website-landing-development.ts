import { TrendingUp, Target, Palette, Users } from 'lucide-react';
import { SubserviceData } from '../types';

export const websiteLandingDevelopment: SubserviceData = {
  id: 'website-landing-development',
  title: 'Website & Landing Pages',
  tagline: 'High-converting online presence',
  description: 'High-converting websites and landing pages that turn visitors into customers.',
  service: 'branding-design',
  slug: 'website-landing-development',
  
  ourApproach: {
    headline: 'Websites that work as hard as you do',
    description: 'We design and build websites that don\'t just look good—they convert visitors into customers and drive real business results.',
    keyPrinciple: 'Websites that convert visitors into customers'
  },
  
  whatItIs: {
    realDefinition: 'High-converting websites and landing pages designed to turn visitors into customers through strategic design and user experience.',
    notJust: 'A pretty website that looks good',
    butAlso: 'A strategic business tool that converts visitors and drives measurable growth'
  },
  
  process: [
    {
      phase: 'Strategy',
      whatWeDo: 'Analyze user behavior and conversion goals',
      whatEmerges: 'Clear understanding of what drives conversions for your business'
    },
    {
      phase: 'Design',
      whatWeDo: 'Design user-centered website architecture and visual system',
      whatEmerges: 'Conversion-focused design that guides users to take action'
    },
    {
      phase: 'Build',
      whatWeDo: 'Build responsive, high-performance website with conversion optimization',
      whatEmerges: 'Fast, functional website that converts visitors into customers'
    },
    {
      phase: 'Launch',
      whatWeDo: 'Test and optimize for conversions and user experience',
      whatEmerges: 'Website that consistently converts and drives business growth'
    }
  ],
  
  outcomes: {
    primary: 'Website that converts visitors into customers and drives sales',
    secondary: 'Professional online presence that builds trust and credibility',
    longTerm: 'Scalable web platform that grows with your business'
  },
  
  discovery: {
    price: '$250',
    duration: '60 minutes',
    whatWeExplore: [
      'Your current website performance and conversion challenges',
      'Target audience and their online behavior patterns',
      'Business goals and conversion objectives',
      'Competitive landscape and differentiation opportunities'
    ],
    whatYouGet: [
      'Website performance audit and conversion analysis',
      'Strategic recommendations for improvement',
      'Website development roadmap with priorities',
      'Full discovery credit toward project'
    ]
  },

  performanceMetrics: {
    title: 'Website Development Business Impact',
    description: 'What happens when your website actually converts visitors',
    metric: {
      value: '+280%',
      number: 280,
      label: 'Conversion Increase',
      description: 'Optimized websites see an average 280% increase in conversions',
      icon: TrendingUp
    },
    bottomMessage: 'Websites that convert visitors into customers'
  },

  methodology: {
    title: 'Everything you need for conversion-focused websites',
    subtitle: 'Our website development process combines strategic design with conversion optimization to create websites that drive real business results.',
    items: [
      {
        title: 'Conversion Strategy',
        description: 'Analyze user behavior and develop conversion-focused strategy',
        icon: Target,
        details: {
          overview: 'We start by understanding your users, their behavior patterns, and what drives conversions for your specific business.',
          whatYouGet: [
            'User behavior analysis and conversion funnel mapping',
            'Conversion goal identification and prioritization',
            'Competitive analysis and differentiation strategy',
            'Conversion optimization roadmap and strategy'
          ],
          process: [
            'User research and behavior pattern analysis',
            'Conversion funnel mapping and optimization opportunities',
            'Competitive analysis and differentiation strategy',
            'Conversion optimization strategy development'
          ],
          outcome: 'A clear understanding of what drives conversions for your business and how to optimize your website for maximum results.'
        }
      },
      {
        title: 'Conversion-Focused Design',
        description: 'Design user-centered website architecture that converts',
        icon: Palette,
        details: {
          overview: 'Every design decision is made with conversion in mind. We create user experiences that guide visitors toward taking action.',
          whatYouGet: [
            'Conversion-focused website architecture and user experience design',
            'Strategic visual design that builds trust and credibility',
            'Mobile-responsive design that works across all devices',
            'Conversion optimization elements and call-to-action design'
          ],
          process: [
            'Conversion-focused website architecture design',
            'User experience design with conversion optimization',
            'Visual design that builds trust and credibility',
            'Mobile-responsive design and testing'
          ],
          outcome: 'A conversion-focused website design that guides users toward taking action and drives measurable business results.'
        }
      },
      {
        title: 'High-Performance Development',
        description: 'Build fast, functional websites that convert and scale',
        icon: Users,
        details: {
          overview: 'We build websites that are fast, functional, and optimized for conversions. Performance and user experience are our priorities.',
          whatYouGet: [
            'High-performance website built with modern technologies',
            'Conversion optimization implementation and testing',
            'Mobile-responsive functionality across all devices',
            'Performance optimization and speed improvements'
          ],
          process: [
            'High-performance website development with modern technologies',
            'Conversion optimization implementation and testing',
            'Mobile-responsive functionality development and testing',
            'Performance optimization and speed improvements'
          ],
          outcome: 'A fast, functional website that converts visitors into customers and drives measurable business growth.'
        }
      }
    ]
  }
}; 