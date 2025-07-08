import { Deliverable } from './types';

export const marketingGrowthDeliverables: Record<string, Deliverable> = {
  'customer-acquisition-system': {
    id: 'customer-acquisition-system',
    title: 'Customer Acquisition System',
    category: 'Growth & Marketing',
    description: 'Multi-channel acquisition funnel with automated tracking and optimization workflows.',
    tagline: 'Systematic customer growth that scales',
    heroImage: '/images/growth-marketing/campaign-strategy.png',
    icon: 'IconFunnel',
    tags: ['customer-acquisition', 'funnel-optimization', 'automation'],
    
    investment: {
      starting: 10000,
      typical: '$10,000 - $22,000',
      timeline: '4-6 weeks'
    },
    
    includes: [
      {
        title: 'Acquisition Strategy',
        description: 'Multi-channel strategy with budget allocation and channel optimization',
        icon: 'IconStrategy'
      },
      {
        title: 'Funnel Design & Optimization',
        description: 'Complete customer journey from awareness to conversion',
        icon: 'IconFunnel'
      },
      {
        title: 'Landing Page Development',
        description: 'High-converting landing pages for each acquisition channel',
        icon: 'IconPage'
      },
      {
        title: 'Marketing Automation',
        description: 'Automated workflows for lead nurturing and customer onboarding',
        icon: 'IconRobot'
      },
      {
        title: 'Analytics & Tracking',
        description: 'Comprehensive tracking setup with performance dashboards',
        icon: 'IconChartBar'
      },
      {
        title: 'Optimization Framework',
        description: 'A/B testing setup and continuous improvement processes',
        icon: 'IconTarget'
      }
    ],
    
    process: [
      {
        phase: 'Strategy & Planning',
        duration: '1 week',
        description: 'Customer research, channel analysis, and acquisition strategy',
        deliverables: ['Customer personas', 'Channel strategy', 'Budget allocation']
      },
      {
        phase: 'Funnel Design',
        duration: '1-2 weeks',
        description: 'Customer journey mapping and conversion funnel design',
        deliverables: ['Customer journey map', 'Funnel architecture', 'Conversion points']
      },
      {
        phase: 'Implementation',
        duration: '2-3 weeks',
        description: 'Landing page creation, automation setup, and tracking implementation',
        deliverables: ['Landing pages', 'Automation workflows', 'Tracking setup']
      },
      {
        phase: 'Testing & Optimization',
        duration: '1 week',
        description: 'A/B testing setup and initial optimization',
        deliverables: ['Testing framework', 'Performance dashboard', 'Optimization plan']
      }
    ],
    
    perfectFor: [
      'Businesses struggling with inconsistent lead generation',
      'Companies ready to scale their customer acquisition',
      'Startups needing systematic growth processes',
      'Organizations with multiple acquisition channels to manage'
    ],
    
    outcomes: [
      {
        metric: '200% More Qualified Leads',
        description: 'Optimized funnels and targeting improve lead quality and quantity'
      },
      {
        metric: '45% Lower CAC',
        description: 'Multi-channel optimization reduces customer acquisition costs'
      },
      {
        metric: '3x Faster Scaling',
        description: 'Systematic approach enables rapid scaling of successful channels'
      }
    ],
    
    relatedServices: ['marketing-growth', 'growth-systems'],
    
    faq: [
      {
        question: 'Which acquisition channels do you focus on?',
        answer: 'We analyze your business and audience to determine the best mix, typically including paid ads, content marketing, social media, and referrals.'
      },
      {
        question: 'How do you measure the success of the acquisition system?',
        answer: 'We track key metrics like cost per acquisition, conversion rates, lifetime value, and return on ad spend across all channels.'
      },
      {
        question: 'Can this work for B2B and B2C businesses?',
        answer: 'Yes, we customize the approach based on your business model, with different strategies for B2B (longer sales cycles) and B2C (shorter cycles).'
      },
      {
        question: 'Do you manage the ongoing campaigns or just set them up?',
        answer: 'We set up the complete system and can provide ongoing management and optimization services as needed.'
      }
    ]
  },

  'crm-optimization-system': {
    id: 'crm-optimization-system',
    title: 'CRM Setup & Optimization',
    category: 'Growth & Marketing',
    description: 'Sales system optimization with automated workflows that scale with your growth and maximize conversions.',
    tagline: 'From lead chaos to sales machine',
    heroImage: '/images/growth-marketing/content-systems.png',
    icon: 'IconDatabase',
    tags: ['crm-optimization', 'sales-automation', 'lead-management'],
    
    investment: {
      starting: 8000,
      typical: '$8,000 - $18,000',
      timeline: '4-6 weeks'
    },
    
    includes: [
      {
        title: 'CRM Platform Selection & Setup',
        description: 'Choose and configure the optimal CRM platform for your business needs',
        icon: 'IconSettings'
      },
      {
        title: 'Lead Scoring & Qualification',
        description: 'Automated lead scoring system to prioritize high-value prospects',
        icon: 'IconStar'
      },
      {
        title: 'Sales Pipeline Design',
        description: 'Optimized sales stages with clear progression criteria and automation',
        icon: 'IconFunnel'
      },
      {
        title: 'Email Automation Workflows',
        description: 'Automated follow-up sequences and nurturing campaigns',
        icon: 'IconMail'
      },
      {
        title: 'Sales Analytics Dashboard',
        description: 'Performance tracking and forecasting with actionable insights',
        icon: 'IconChartBar'
      },
      {
        title: 'Team Training & Adoption',
        description: 'Comprehensive team training and change management support',
        icon: 'IconUsers'
      }
    ],
    
    process: [
      {
        phase: 'Assessment & Planning',
        duration: '1 week',
        description: 'Current process audit, CRM selection, and implementation planning',
        deliverables: ['Process audit', 'CRM recommendation', 'Implementation plan']
      },
      {
        phase: 'Setup & Configuration',
        duration: '1-2 weeks',
        description: 'CRM setup, data migration, and initial configuration',
        deliverables: ['CRM setup', 'Data migration', 'Basic workflows']
      },
      {
        phase: 'Automation Development',
        duration: '2 weeks',
        description: 'Advanced workflows, lead scoring, and email automation',
        deliverables: ['Lead scoring system', 'Email workflows', 'Sales automation']
      },
      {
        phase: 'Training & Optimization',
        duration: '1 week',
        description: 'Team training, testing, and initial optimization',
        deliverables: ['Team training', 'Performance dashboard', 'Optimization plan']
      }
    ],
    
    perfectFor: [
      'Sales teams losing track of leads',
      'Businesses with manual sales processes',
      'Companies experiencing rapid growth',
      'Organizations needing better sales visibility',
      'Teams struggling with follow-up consistency'
    ],
    
    outcomes: [
      {
        metric: '40% More Qualified Meetings',
        description: 'Automated lead scoring and nurturing increases meeting quality'
      },
      {
        metric: '60% Faster Sales Cycles',
        description: 'Streamlined processes and automation accelerate deal closure'
      },
      {
        metric: '25% Higher Close Rates',
        description: 'Better lead management and follow-up improves conversion rates'
      }
    ],
    
    relatedServices: ['marketing-growth', 'growth-systems'],
    
    faq: [
      {
        question: 'Which CRM platforms do you work with?',
        answer: 'We work with all major CRMs including Salesforce, HubSpot, Pipedrive, and Monday.com, selecting the best fit for your needs and budget.'
      },
      {
        question: 'Can you migrate data from our existing system?',
        answer: 'Yes, we handle data migration carefully with validation and backup procedures to ensure no data is lost.'
      },
      {
        question: 'How do you ensure team adoption of the new system?',
        answer: 'We focus on change management with comprehensive training, clear benefits communication, and ongoing support.'
      },
      {
        question: 'What if we need customizations beyond standard features?',
        answer: 'We can implement custom fields, workflows, and integrations to match your specific business processes.'
      }
    ]
  },

  'conversion-optimization-framework': {
    id: 'conversion-optimization-framework',
    title: 'Conversion Optimization',
    category: 'Growth & Marketing',
    description: 'Systematic optimization framework to improve conversion rates across all customer touchpoints.',
    tagline: 'From visitors to customers at scale',
    heroImage: '/images/growth-marketing/performance-optimization.png',
    icon: 'IconTrendingUp',
    tags: ['conversion-optimization', 'cro', 'user-experience'],
    
    investment: {
      starting: 12000,
      typical: '$12,000 - $24,000',
      timeline: '6-8 weeks'
    },
    
    includes: [
      {
        title: 'Conversion Audit & Analysis',
        description: 'Comprehensive analysis of current conversion funnels and drop-off points',
        icon: 'IconSearch'
      },
      {
        title: 'User Experience Optimization',
        description: 'Landing page, form, and checkout process optimization for maximum conversion',
        icon: 'IconCursor'
      },
      {
        title: 'A/B Testing Framework',
        description: 'Systematic testing methodology with statistical significance validation',
        icon: 'IconTestPipe'
      },
      {
        title: 'Messaging & Copy Optimization',
        description: 'Headline, CTA, and messaging testing to improve persuasion and clarity',
        icon: 'IconEdit'
      },
      {
        title: 'Analytics & Tracking Setup',
        description: 'Advanced conversion tracking with heatmaps and user behavior analysis',
        icon: 'IconAnalytics'
      },
      {
        title: 'Optimization Playbook',
        description: 'Documented framework for ongoing optimization and testing',
        icon: 'IconBook'
      }
    ],
    
    process: [
      {
        phase: 'Audit & Analysis',
        duration: '1-2 weeks',
        description: 'Conversion funnel analysis and optimization opportunity identification',
        deliverables: ['Conversion audit', 'Opportunity analysis', 'Testing roadmap']
      },
      {
        phase: 'Testing Strategy',
        duration: '1 week',
        description: 'Test prioritization and experimental design development',
        deliverables: ['Testing strategy', 'Experiment designs', 'Success metrics']
      },
      {
        phase: 'Implementation & Testing',
        duration: '3-4 weeks',
        description: 'Test implementation, data collection, and iterative optimization',
        deliverables: ['Test implementations', 'Performance data', 'Optimization insights']
      },
      {
        phase: 'Framework & Training',
        duration: '1 week',
        description: 'Optimization framework documentation and team training',
        deliverables: ['Optimization playbook', 'Team training', 'Ongoing roadmap']
      }
    ],
    
    perfectFor: [
      'Websites with high traffic but low conversions',
      'E-commerce businesses optimizing checkout',
      'SaaS companies improving trial-to-paid conversion',
      'Lead generation businesses increasing form completions',
      'Companies launching new products or pages'
    ],
    
    outcomes: [
      {
        metric: '35% Higher Conversion Rates',
        description: 'Systematic optimization typically improves conversion rates significantly'
      },
      {
        metric: '50% Lower Cost Per Acquisition',
        description: 'Higher conversion rates reduce customer acquisition costs'
      },
      {
        metric: '200% ROI on Testing',
        description: 'Systematic testing delivers measurable return on optimization investment'
      }
    ],
    
    relatedServices: ['marketing-growth', 'branding-design'],
    
    faq: [
      {
        question: 'How long does it take to see results from optimization?',
        answer: 'Initial results can be seen within 2-4 weeks, but meaningful optimization is an ongoing process with compounding benefits.'
      },
      {
        question: 'What if our traffic is too low for statistically significant testing?',
        answer: 'We can work with lower traffic using qualitative methods, user research, and best practice implementations.'
      },
      {
        question: 'Do you optimize mobile and desktop experiences separately?',
        answer: 'Yes, we test and optimize for different devices and user behaviors to maximize conversion across all platforms.'
      },
      {
        question: 'How do you ensure tests don\'t negatively impact SEO?',
        answer: 'We follow testing best practices that maintain SEO integrity and can coordinate with your SEO strategy.'
      }
    ]
  },

  'performance-analytics-dashboard': {
    id: 'performance-analytics-dashboard',
    title: 'Performance Analytics Dashboard',
    category: 'Growth & Marketing',
    description: 'Comprehensive analytics system that tracks performance and provides actionable insights for data-driven decisions.',
    tagline: 'From data chaos to strategic clarity',
    heroImage: '/images/growth-marketing/marketing-technology.png',
    icon: 'IconDashboard',
    tags: ['performance-analytics', 'data-visualization', 'business-intelligence'],
    
    investment: {
      starting: 12000,
      typical: '$12,000 - $26,000',
      timeline: '5-7 weeks'
    },
    
    includes: [
      {
        title: 'Analytics Strategy & Planning',
        description: 'KPI definition, measurement framework, and data collection strategy',
        icon: 'IconStrategy'
      },
      {
        title: 'Multi-Platform Data Integration',
        description: 'Connect Google Analytics, social media, CRM, and other data sources',
        icon: 'IconPlug'
      },
      {
        title: 'Custom Dashboard Development',
        description: 'Executive and operational dashboards with real-time performance tracking',
        icon: 'IconDashboard'
      },
      {
        title: 'Automated Reporting',
        description: 'Scheduled reports with insights, trends, and recommendations',
        icon: 'IconReport'
      },
      {
        title: 'Performance Alerts',
        description: 'Automated notifications for significant changes or threshold breaches',
        icon: 'IconBell'
      },
      {
        title: 'Training & Support',
        description: 'Team training on dashboard usage and data interpretation',
        icon: 'IconGraduationCap'
      }
    ],
    
    process: [
      {
        phase: 'Analytics Audit & Strategy',
        duration: '1 week',
        description: 'Current analytics assessment and measurement strategy development',
        deliverables: ['Analytics audit', 'KPI framework', 'Data collection plan']
      },
      {
        phase: 'Data Integration Setup',
        duration: '2 weeks',
        description: 'Connect data sources and establish automated data collection',
        deliverables: ['Data integrations', 'Tracking setup', 'Data validation']
      },
      {
        phase: 'Dashboard Development',
        duration: '2-3 weeks',
        description: 'Custom dashboard creation with visualizations and insights',
        deliverables: ['Executive dashboard', 'Operational dashboards', 'Mobile views']
      },
      {
        phase: 'Training & Optimization',
        duration: '1 week',
        description: 'Team training and initial dashboard optimization',
        deliverables: ['Team training', 'User documentation', 'Optimization plan']
      }
    ],
    
    perfectFor: [
      'Businesses drowning in disconnected data',
      'Teams making decisions without clear metrics',
      'Companies needing executive-level visibility',
      'Organizations with multiple marketing channels',
      'Growing businesses requiring scalable analytics'
    ],
    
    outcomes: [
      {
        metric: '75% Faster Decision Making',
        description: 'Real-time dashboards enable rapid, data-driven decisions'
      },
      {
        metric: '60% Better Resource Allocation',
        description: 'Clear performance visibility optimizes budget and effort allocation'
      },
      {
        metric: '40% Improved Campaign Performance',
        description: 'Data-driven optimization significantly improves marketing results'
      }
    ],
    
    relatedServices: ['marketing-growth', 'growth-systems'],
    
    faq: [
      {
        question: 'What data sources can you integrate into the dashboard?',
        answer: 'We can integrate most business tools including Google Analytics, social media platforms, CRM systems, email marketing, and advertising platforms.'
      },
      {
        question: 'Can the dashboard be accessed on mobile devices?',
        answer: 'Yes, we create responsive dashboards that work perfectly on desktop, tablet, and mobile devices.'
      },
      {
        question: 'How do you ensure data accuracy and reliability?',
        answer: 'We implement data validation, automated error checking, and regular data quality audits to ensure accuracy.'
      },
      {
        question: 'Can you customize the dashboard as our business evolves?',
        answer: 'Absolutely, we design flexible dashboards that can be easily modified and expanded as your needs change.'
      }
    ]
  }
}; 