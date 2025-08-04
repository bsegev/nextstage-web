import { TrendingUp, Target, Palette, Users } from 'lucide-react';
import { SubserviceData } from '../types';

export const digitalMarketingAssessment: SubserviceData = {
  id: 'digital-marketing-assessment',
  title: 'Digital Marketing Assessment',
  tagline: 'Optimize your marketing performance',
  description: 'Comprehensive digital marketing assessment and optimization strategy.',
  service: 'marketing-growth',
  slug: 'digital-marketing-assessment',
  
  ourApproach: {
    headline: 'Data-driven marketing optimization',
    description: 'We analyze your current digital marketing performance, identify optimization opportunities, and create a strategic roadmap for improvement.',
    keyPrinciple: 'Marketing optimization based on data and results'
  },
  
  whatItIs: {
    realDefinition: 'A comprehensive assessment of your digital marketing performance with strategic recommendations for optimization and growth.',
    notJust: 'A surface-level review of your marketing channels',
    butAlso: 'A strategic analysis that identifies specific opportunities to improve ROI and drive growth'
  },
  
  process: [
    {
      phase: 'Audit',
      whatWeDo: 'Analyze current digital marketing channels and performance metrics',
      whatEmerges: 'Clear understanding of what\'s working and what needs improvement'
    },
    {
      phase: 'Analysis',
      whatWeDo: 'Identify optimization opportunities and performance gaps',
      whatEmerges: 'Strategic recommendations for improvement and growth'
    },
    {
      phase: 'Strategy',
      whatWeDo: 'Develop optimization roadmap and implementation plan',
      whatEmerges: 'Clear action plan for improving marketing performance'
    },
    {
      phase: 'Implementation',
      whatWeDo: 'Guide implementation of optimization recommendations',
      whatEmerges: 'Improved marketing performance and measurable results'
    }
  ],
  
  outcomes: {
    primary: 'Optimized marketing channels that deliver better ROI and results',
    secondary: 'Clear roadmap for ongoing marketing improvement',
    longTerm: 'Scalable marketing system that drives sustainable growth'
  },
  
  discovery: {
    price: '$250',
    duration: '60 minutes',
    whatWeExplore: [
      'Your current digital marketing channels and performance',
      'Marketing goals and ROI expectations',
      'Target audience and customer acquisition challenges',
      'Budget and resource constraints for optimization'
    ],
    whatYouGet: [
      'Digital marketing performance audit and analysis',
      'Strategic optimization recommendations',
      'Marketing improvement roadmap with priorities',
      'Full discovery credit toward project'
    ]
  },

  performanceMetrics: {
    title: 'Marketing Assessment Business Impact',
    description: 'What happens when you optimize your marketing based on data',
    metric: {
      value: '2.9x',
      number: 2.9,
      label: 'ROI Improvement',
      description: 'Optimized digital marketing campaigns achieve 2.9x higher ROI than industry average',
      source: 'Forrester, "Marketing ROI Benchmark Report"',
      icon: TrendingUp
    },
    bottomMessage: 'Marketing optimization that drives measurable business growth'
  },

  methodology: {
    title: 'Everything you need for marketing optimization',
    subtitle: 'Our digital marketing assessment process combines data analysis with strategic optimization to improve your marketing performance.',
    items: [
      {
        title: 'Marketing Performance Audit',
        description: 'Comprehensive analysis of current marketing channels and performance',
        icon: Target,
        details: {
          overview: 'We start with a thorough analysis of your current digital marketing channels, performance metrics, and ROI to understand what\'s working and what needs improvement.',
          whatYouGet: [
            'Current marketing channel performance analysis',
            'ROI and conversion rate assessment',
            'Customer acquisition cost analysis',
            'Competitive marketing landscape analysis'
          ],
          process: [
            'Marketing channel performance data collection and analysis',
            'ROI and conversion rate calculation and assessment',
            'Customer acquisition cost analysis and benchmarking',
            'Competitive marketing landscape research and analysis'
          ],
          outcome: 'A clear understanding of your current marketing performance and the specific opportunities for improvement.'
        }
      },
      {
        title: 'Optimization Strategy Development',
        description: 'Develop strategic recommendations for marketing improvement',
        icon: Palette,
        details: {
          overview: 'Based on the audit findings, we develop strategic recommendations for optimizing your marketing channels and improving performance.',
          whatYouGet: [
            'Strategic marketing optimization recommendations',
            'Channel-specific improvement strategies',
            'Budget reallocation and optimization plan',
            'Performance improvement timeline and milestones'
          ],
          process: [
            'Optimization opportunity identification and prioritization',
            'Channel-specific improvement strategy development',
            'Budget reallocation and optimization planning',
            'Performance improvement timeline and milestone creation'
          ],
          outcome: 'A strategic marketing optimization plan that will improve your performance and drive measurable results.'
        }
      },
      {
        title: 'Implementation & Optimization',
        description: 'Guide implementation and ongoing optimization of marketing improvements',
        icon: Users,
        details: {
          overview: 'We help you implement the optimization recommendations and provide ongoing guidance for continuous improvement.',
          whatYouGet: [
            'Implementation guidance and support for optimization changes',
            'Performance monitoring and tracking setup',
            'Ongoing optimization recommendations and support',
            'Marketing performance reporting and analysis'
          ],
          process: [
            'Optimization implementation planning and execution',
            'Performance monitoring and tracking system setup',
            'Ongoing optimization recommendations and support',
            'Regular performance reporting and analysis'
          ],
          outcome: 'Successfully implemented marketing optimizations that deliver improved performance and measurable business results.'
        }
      }
    ]
  }
}; 