import { TrendingUp, Target, Palette, Users } from 'lucide-react';
import { SubserviceData } from '../types';

export const salesFunnelDevelopment: SubserviceData = {
  id: 'sales-funnel-development',
  title: 'Sales Funnel Development',
  tagline: 'High-converting sales funnels that drive revenue',
  description: 'High-converting sales funnels that turn prospects into customers.',
  service: 'marketing-growth',
  slug: 'sales-funnel-development',
  
  ourApproach: {
    headline: 'Funnels that convert prospects into customers',
    description: 'We design and build high-converting sales funnels that guide prospects through the buying journey and turn them into customers.',
    keyPrinciple: 'Sales funnels that maximize conversion and revenue'
  },
  
  whatItIs: {
    realDefinition: 'High-converting sales funnels designed to guide prospects through the buying journey and maximize conversion rates at every stage.',
    notJust: 'Basic landing pages or simple funnels',
    butAlso: 'Strategic conversion systems that optimize every step of the customer journey'
  },
  
  process: [
    {
      phase: 'Analysis',
      whatWeDo: 'Analyze current sales funnel and conversion bottlenecks',
      whatEmerges: 'Clear understanding of where prospects drop off and why'
    },
    {
      phase: 'Design',
      whatWeDo: 'Design optimized sales funnel architecture',
      whatEmerges: 'Conversion-focused funnel design that guides prospects to purchase'
    },
    {
      phase: 'Build',
      whatWeDo: 'Build conversion-optimized funnel pages and systems',
      whatEmerges: 'High-performing sales funnel that converts prospects'
    },
    {
      phase: 'Optimize',
      whatWeDo: 'Test and optimize for maximum conversion rates',
      whatEmerges: 'Continuously improving funnel that drives revenue growth'
    }
  ],
  
  outcomes: {
    primary: 'High-converting sales funnel that maximizes revenue',
    secondary: 'Optimized conversion rates at every stage of the funnel',
    longTerm: 'Scalable sales funnel system that drives sustainable growth'
  },
  
  discovery: {
    price: '$250',
    duration: '60 minutes',
    whatWeExplore: [
      'Your current sales funnel and conversion challenges',
      'Target audience and buying journey stages',
      'Conversion goals and revenue objectives',
      'Funnel optimization priorities and timeline'
    ],
    whatYouGet: [
      'Sales funnel audit and conversion analysis',
      'Funnel optimization strategy and recommendations',
      'Sales funnel development roadmap with priorities',
      'Full discovery credit toward project'
    ]
  },

  performanceMetrics: {
    title: 'Sales Funnel Development Business Impact',
    description: 'What happens when your funnel optimizes every conversion opportunity',
    metric: {
      value: '2.8x',
      number: 2.8,
      label: 'Conversion Rate',
      description: 'Optimized sales funnels deliver 2.8x higher conversion rates than standard approaches',
      source: 'Salesforce, "State of Sales Report"',
      icon: TrendingUp
    },
    bottomMessage: 'Sales funnels that maximize conversion and revenue'
  },

  methodology: {
    title: 'Everything you need for high-converting sales funnels',
    subtitle: 'Our sales funnel development process combines strategic design with conversion optimization to create funnels that maximize revenue.',
    items: [
      {
        title: 'Funnel Strategy & Analysis',
        description: 'Analyze current funnel and develop optimization strategy',
        icon: Target,
        details: {
          overview: 'We start by analyzing your current sales funnel to understand where prospects drop off and develop a strategy for optimization.',
          whatYouGet: [
            'Current sales funnel analysis and conversion audit',
            'Conversion bottleneck identification and analysis',
            'Funnel optimization strategy and recommendations',
            'Conversion improvement roadmap and priorities'
          ],
          process: [
            'Current sales funnel performance analysis',
            'Conversion bottleneck identification and analysis',
            'Funnel optimization strategy development',
            'Conversion improvement roadmap creation'
          ],
          outcome: 'A clear understanding of your current funnel performance and a strategic plan for optimization.'
        }
      },
      {
        title: 'Conversion-Focused Design',
        description: 'Design optimized sales funnel architecture',
        icon: Palette,
        details: {
          overview: 'We design conversion-focused sales funnels that guide prospects through the buying journey and maximize conversion at every stage.',
          whatYouGet: [
            'Conversion-focused sales funnel architecture design',
            'Optimized landing pages and funnel pages',
            'Strategic call-to-action and conversion element design',
            'User experience optimization for maximum conversion'
          ],
          process: [
            'Conversion-focused sales funnel architecture design',
            'Optimized landing page and funnel page design',
            'Strategic call-to-action and conversion element development',
            'User experience optimization and testing'
          ],
          outcome: 'A conversion-focused sales funnel design that guides prospects toward purchase and maximizes conversion rates.'
        }
      },
      {
        title: 'Funnel Development & Optimization',
        description: 'Build and optimize high-converting sales funnels',
        icon: Users,
        details: {
          overview: 'We build high-converting sales funnels and continuously optimize them based on performance data to maximize revenue.',
          whatYouGet: [
            'High-converting sales funnel development and implementation',
            'Conversion optimization and A/B testing setup',
            'Performance monitoring and analytics implementation',
            'Ongoing optimization and improvement support'
          ],
          process: [
            'High-converting sales funnel development and implementation',
            'Conversion optimization and A/B testing setup',
            'Performance monitoring and analytics implementation',
            'Ongoing optimization and improvement'
          ],
          outcome: 'A high-converting sales funnel that consistently maximizes conversion rates and drives revenue growth.'
        }
      }
    ]
  }
}; 