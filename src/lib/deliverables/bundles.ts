export interface Bundle {
  id: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  
  // Pricing
  pricing: {
    individual: string;
    bundlePrice: string;
    savings: string;
    timeline: string;
    diyReality: string;
  };
  
  // What's Included
  includes: {
    deliverableId: string;
    title: string;
    individualPrice: string;
  }[];
  
  // Bundle Benefits
  benefits: string[];
  
  // Perfect For
  perfectFor: string[];
  
  // Process Overview
  process: {
    week: string;
    focus: string;
    deliverables: string[];
  }[];
  
  // Related Deliverables (for tagging)
  relatedDeliverables: string[];
  
  // FAQ
  faq: {
    question: string;
    answer: string;
  }[];
}

export const bundles: Record<string, Bundle> = {
  'brand-foundation-bundle': {
    id: 'brand-foundation-bundle',
    title: 'Brand Foundation Bundle',
    tagline: 'Complete brand identity + messaging + website',
    description: 'Everything you need for a cohesive brand presence that converts visitors into customers.',
    heroImage: '/images/bundles/brand-foundation.png',
    
    pricing: {
      individual: '$17,000 - $35,000',
      bundlePrice: '$15,000 - $28,000',
      savings: 'Better together pricing',
      timeline: '4-6 weeks',
      diyReality: 'DIY with AI tools = 3-5 months of trial and error'
    },
    
    includes: [
      {
        deliverableId: 'brand-messaging-framework',
        title: 'Brand Messaging Framework',
        individualPrice: '$2,500 - $5,000'
      },
      {
        deliverableId: 'brand-identity-system',
        title: 'Brand Identity System',
        individualPrice: '$6,000 - $12,000'
      },
      {
        deliverableId: 'website-design-development',
        title: 'Website Design & Development',
        individualPrice: '$8,000 - $18,000'
      }
    ],
    
    benefits: [
      'Cohesive brand experience across all touchpoints',
      'Professional website that reflects your brand',
      'Clear messaging that resonates with your audience',
      'Complete brand guidelines for consistency',
      'Save months of back-and-forth coordination'
    ],
    
    perfectFor: [
      'Startups launching their brand',
      'Businesses rebranding completely',
      'Companies with inconsistent brand presence',
      'Organizations preparing for growth or funding'
    ],
    
    process: [
      {
        week: 'Week 1-2',
        focus: 'Brand Strategy & Messaging',
        deliverables: ['Brand positioning', 'Messaging framework', 'Voice guidelines']
      },
      {
        week: 'Week 3-4',
        focus: 'Visual Identity Design',
        deliverables: ['Logo design', 'Color palette', 'Typography', 'Brand guidelines']
      },
      {
        week: 'Week 5-6',
        focus: 'Website Design & Development',
        deliverables: ['Website design', 'Development', 'Content integration', 'Launch']
      }
    ],
    
    relatedDeliverables: ['brand-messaging-framework', 'brand-identity-system', 'website-design-development'],
    
    faq: [
      {
        question: 'Can I get just the brand identity without the website?',
        answer: 'Absolutely! Each deliverable is available individually. This bundle offers savings when you need all three components.'
      },
      {
        question: 'How much input will I have in the design process?',
        answer: 'You\'ll be involved at every key decision point. We present concepts, gather feedback, and refine based on your input.'
      },
      {
        question: 'What if I already have a logo I want to keep?',
        answer: 'We can work with your existing logo and focus on messaging and website, or create a custom bundle that fits your needs.'
      }
    ]
  },

  'market-entry-bundle': {
    id: 'market-entry-bundle',
    title: 'Market Entry Bundle',
    tagline: 'Research + positioning + go-to-market strategy',
    description: 'Strategic intelligence and launch planning to enter markets with confidence and competitive advantage.',
    heroImage: '/images/bundles/market-entry.png',
    
    pricing: {
      individual: '$22,500 - $45,000',
      bundlePrice: '$18,000 - $35,000',
      savings: 'Comprehensive package pricing',
      timeline: '3-4 weeks',
      diyReality: 'DIY research = 2-3 months + questionable data quality'
    },
    
    includes: [
      {
        deliverableId: 'market-research-analysis',
        title: 'Market Research & Analysis',
        individualPrice: '$4,500 - $9,000'
      },
      {
        deliverableId: 'competitive-positioning',
        title: 'Competitive Positioning',
        individualPrice: '$8,000 - $16,000'
      },
      {
        deliverableId: 'go-to-market-playbook',
        title: 'Go-to-Market Playbook',
        individualPrice: '$10,000 - $20,000'
      }
    ],
    
    benefits: [
      'Deep market insights to guide decisions',
      'Clear competitive differentiation',
      'Proven go-to-market strategy',
      'Reduced risk of market entry failure',
      'Accelerated time to market'
    ],
    
    perfectFor: [
      'Companies entering new markets',
      'Startups validating their market opportunity',
      'Businesses facing new competition',
      'Organizations planning major product launches'
    ],
    
    process: [
      {
        week: 'Week 1-2',
        focus: 'Market Research & Analysis',
        deliverables: ['Market sizing', 'Customer insights', 'Trend analysis', 'Opportunity assessment']
      },
      {
        week: 'Week 2-3',
        focus: 'Competitive Intelligence',
        deliverables: ['Competitor analysis', 'Positioning map', 'Differentiation strategy']
      },
      {
        week: 'Week 3-4',
        focus: 'Go-to-Market Strategy',
        deliverables: ['Launch strategy', 'Channel plan', 'Sales enablement', 'Success metrics']
      }
    ],
    
    relatedDeliverables: ['market-research-analysis', 'competitive-positioning', 'go-to-market-playbook'],
    
    faq: [
      {
        question: 'How do you gather market research data?',
        answer: 'We use a combination of primary research (interviews, surveys) and secondary research (industry reports, databases, competitive intelligence).'
      },
      {
        question: 'What if our market is very niche?',
        answer: 'Niche markets often have the richest opportunities. We specialize in finding insights even in smaller, specialized markets.'
      },
      {
        question: 'Can you help with international market entry?',
        answer: 'Yes, we have experience with international market analysis and can adapt our research methods for global markets.'
      }
    ]
  },

  'growth-systems-bundle': {
    id: 'growth-systems-bundle',
    title: 'Growth Systems Bundle',
    tagline: 'CRM + customer acquisition + performance analytics',
    description: 'Complete growth infrastructure to systematically acquire, convert, and retain customers.',
    heroImage: '/images/bundles/growth-systems.png',
    
    pricing: {
      individual: '$30,000 - $62,000',
      bundlePrice: '$25,000 - $50,000',
      savings: 'Integrated systems pricing',
      timeline: '4-5 weeks',
      diyReality: 'DIY setup = 6+ months of tool juggling and broken integrations'
    },
    
    includes: [
      {
        deliverableId: 'crm-optimization-system',
        title: 'CRM Optimization System',
        individualPrice: '$8,000 - $18,000'
      },
      {
        deliverableId: 'customer-acquisition-system',
        title: 'Customer Acquisition System',
        individualPrice: '$10,000 - $22,000'
      },
      {
        deliverableId: 'performance-analytics-dashboard',
        title: 'Performance Analytics Dashboard',
        individualPrice: '$12,000 - $26,000'
      }
    ],
    
    benefits: [
      'Systematic customer acquisition process',
      'Automated lead nurturing and follow-up',
      'Real-time performance visibility',
      'Integrated growth stack that works together',
      'Data-driven decision making'
    ],
    
    perfectFor: [
      'Growing businesses needing systematic processes',
      'Companies with manual sales processes',
      'Organizations wanting data-driven growth',
      'Teams struggling with lead management'
    ],
    
    process: [
      {
        week: 'Week 1-2',
        focus: 'CRM Setup & Optimization',
        deliverables: ['CRM configuration', 'Data migration', 'Workflow automation', 'Team training']
      },
      {
        week: 'Week 2-4',
        focus: 'Customer Acquisition System',
        deliverables: ['Funnel design', 'Landing pages', 'Email sequences', 'Lead scoring']
      },
      {
        week: 'Week 4-5',
        focus: 'Analytics & Integration',
        deliverables: ['Dashboard setup', 'Data connections', 'Performance tracking', 'Optimization plan']
      }
    ],
    
    relatedDeliverables: ['crm-optimization-system', 'customer-acquisition-system', 'performance-analytics-dashboard'],
    
    faq: [
      {
        question: 'Which CRM platforms do you work with?',
        answer: 'We work with all major CRM platforms (HubSpot, Salesforce, Pipedrive, etc.) and can recommend the best fit for your needs.'
      },
      {
        question: 'How quickly will we see results?',
        answer: 'You\'ll see immediate improvements in organization and process. Lead generation improvements typically show within 30-60 days.'
      },
      {
        question: 'Do you provide ongoing support?',
        answer: 'Yes, we provide training and 30 days of optimization support. Ongoing maintenance packages are available separately.'
      }
    ]
  },

  'mvp-launch-bundle': {
    id: 'mvp-launch-bundle',
    title: 'MVP Launch Bundle',
    tagline: 'MVP development + brand messaging + go-to-market',
    description: 'Complete product launch package from MVP development to market-ready messaging and strategy.',
    heroImage: '/images/bundles/mvp-launch.png',
    
    pricing: {
      individual: '$32,500 - $65,000',
      bundlePrice: '$25,000 - $50,000',
      savings: 'Complete launch package',
      timeline: '6-8 weeks',
      diyReality: 'DIY development + marketing = 6+ months of learning curves'
    },
    
    includes: [
      {
        deliverableId: 'mvp-development',
        title: 'MVP Development',
        individualPrice: '$20,000 - $45,000'
      },
      {
        deliverableId: 'brand-messaging-framework',
        title: 'Brand Messaging Framework',
        individualPrice: '$2,500 - $5,000'
      },
      {
        deliverableId: 'go-to-market-playbook',
        title: 'Go-to-Market Playbook',
        individualPrice: '$10,000 - $20,000'
      }
    ],
    
    benefits: [
      'Product ready for market validation',
      'Clear messaging that resonates',
      'Strategic launch plan',
      'Coordinated product-market fit approach',
      'Faster time to user feedback'
    ],
    
    perfectFor: [
      'Startups launching their first product',
      'Entrepreneurs validating product concepts',
      'Companies testing new product ideas',
      'Businesses needing rapid market entry'
    ],
    
    process: [
      {
        week: 'Week 1-2',
        focus: 'Product & Message Strategy',
        deliverables: ['MVP requirements', 'Brand positioning', 'Target audience definition']
      },
      {
        week: 'Week 3-6',
        focus: 'MVP Development',
        deliverables: ['Core features', 'User testing', 'Performance optimization', 'Launch preparation']
      },
      {
        week: 'Week 6-8',
        focus: 'Launch Strategy & Messaging',
        deliverables: ['Messaging framework', 'Go-to-market plan', 'Launch materials', 'Success metrics']
      }
    ],
    
    relatedDeliverables: ['mvp-development', 'brand-messaging-framework', 'go-to-market-playbook'],
    
    faq: [
      {
        question: 'How do you decide what features to include in the MVP?',
        answer: 'We focus on core features that validate your key hypotheses and provide value to early users. Everything else can be added later.'
      },
      {
        question: 'What technology stack do you use?',
        answer: 'We choose the best stack for your specific needs, prioritizing speed to market and future scalability.'
      },
      {
        question: 'How do you handle user feedback during development?',
        answer: 'We build in feedback loops throughout development and can quickly adapt based on user insights.'
      }
    ]
  },

  'digital-optimization-bundle': {
    id: 'digital-optimization-bundle',
    title: 'Digital Optimization Bundle',
    tagline: 'Website + conversion optimization + analytics',
    description: 'High-converting website with systematic optimization and performance tracking.',
    heroImage: '/images/bundles/digital-optimization.png',
    
    pricing: {
      individual: '$32,000 - $68,000',
      bundlePrice: '$25,000 - $55,000',
      savings: 'Optimized web presence',
      timeline: '5-7 weeks',
      diyReality: 'DIY optimization = months of A/B testing with unclear results'
    },
    
    includes: [
      {
        deliverableId: 'website-design-development',
        title: 'Website Design & Development',
        individualPrice: '$8,000 - $18,000'
      },
      {
        deliverableId: 'conversion-optimization-framework',
        title: 'Conversion Optimization Framework',
        individualPrice: '$12,000 - $24,000'
      },
      {
        deliverableId: 'performance-analytics-dashboard',
        title: 'Performance Analytics Dashboard',
        individualPrice: '$12,000 - $26,000'
      }
    ],
    
    benefits: [
      'High-converting website from day one',
      'Systematic optimization process',
      'Real-time performance insights',
      'Data-driven improvement roadmap',
      'Measurable ROI on digital investments'
    ],
    
    perfectFor: [
      'Businesses with high traffic, low conversions',
      'E-commerce companies optimizing sales',
      'SaaS companies improving trial conversion',
      'Lead generation businesses maximizing forms'
    ],
    
    process: [
      {
        week: 'Week 1-4',
        focus: 'Website Design & Development',
        deliverables: ['Website design', 'Development', 'Content integration', 'Initial testing']
      },
      {
        week: 'Week 4-6',
        focus: 'Conversion Optimization',
        deliverables: ['Funnel analysis', 'A/B testing setup', 'Optimization implementation']
      },
      {
        week: 'Week 6-7',
        focus: 'Analytics & Tracking',
        deliverables: ['Dashboard setup', 'Performance tracking', 'Optimization playbook']
      }
    ],
    
    relatedDeliverables: ['website-design-development', 'conversion-optimization-framework', 'performance-analytics-dashboard'],
    
    faq: [
      {
        question: 'How much traffic do we need for optimization testing?',
        answer: 'We can start optimization with any traffic level. Higher traffic allows for faster testing, but we adapt our approach accordingly.'
      },
      {
        question: 'What kind of conversion improvements can we expect?',
        answer: 'Typical improvements range from 20-50% conversion rate increases, though results vary based on starting point and industry.'
      },
      {
        question: 'Do you optimize for mobile conversions?',
        answer: 'Absolutely. Mobile optimization is built into every website we create, with specific mobile conversion strategies.'
      }
    ]
  },

  'business-intelligence-bundle': {
    id: 'business-intelligence-bundle',
    title: 'Business Intelligence Bundle',
    tagline: 'Market research + competitive analysis + strategic planning',
    description: 'Comprehensive business intelligence for strategic decision-making and competitive advantage.',
    heroImage: '/images/bundles/business-intelligence.png',
    
    pricing: {
      individual: '$24,500 - $49,000',
      bundlePrice: '$20,000 - $40,000',
      savings: 'Strategic intelligence package',
      timeline: '4-6 weeks',
      diyReality: 'DIY research + planning = 3+ months of scattered insights'
    },
    
    includes: [
      {
        deliverableId: 'market-research-analysis',
        title: 'Market Research & Analysis',
        individualPrice: '$4,500 - $9,000'
      },
      {
        deliverableId: 'competitive-positioning',
        title: 'Competitive Positioning',
        individualPrice: '$8,000 - $16,000'
      },
      {
        deliverableId: 'strategic-business-planning',
        title: 'Strategic Business Planning',
        individualPrice: '$12,000 - $24,000'
      }
    ],
    
    benefits: [
      'Comprehensive market intelligence',
      'Strategic competitive advantage',
      'Data-driven business planning',
      'Risk-informed decision making',
      'Clear strategic roadmap'
    ],
    
    perfectFor: [
      'Leadership teams planning major initiatives',
      'Companies in competitive markets',
      'Businesses seeking strategic clarity',
      'Organizations preparing for growth or pivots'
    ],
    
    process: [
      {
        week: 'Week 1-2',
        focus: 'Market Intelligence',
        deliverables: ['Market analysis', 'Customer insights', 'Trend assessment', 'Opportunity mapping']
      },
      {
        week: 'Week 2-4',
        focus: 'Competitive Analysis',
        deliverables: ['Competitor profiling', 'Positioning analysis', 'Differentiation strategy']
      },
      {
        week: 'Week 4-6',
        focus: 'Strategic Planning',
        deliverables: ['Strategic framework', 'Business model', 'Implementation roadmap', 'Success metrics']
      }
    ],
    
    relatedDeliverables: ['market-research-analysis', 'competitive-positioning', 'strategic-business-planning'],
    
    faq: [
      {
        question: 'How do you ensure the strategic plan is actionable?',
        answer: 'We focus on creating concrete, measurable action items with clear ownership and timelines, not just high-level strategy.'
      },
      {
        question: 'What if our market is rapidly changing?',
        answer: 'We build adaptability into our strategic recommendations and provide frameworks for ongoing market monitoring.'
      },
      {
        question: 'Do you help with plan implementation?',
        answer: 'The deliverable includes an implementation roadmap. Ongoing implementation support is available as a separate service.'
      }
    ]
  }
};

// Helper function to get bundles that include a specific deliverable
export const getBundlesForDeliverable = (deliverableId: string): Bundle[] => {
  return Object.values(bundles).filter(bundle => 
    bundle.relatedDeliverables.includes(deliverableId)
  );
};

// Helper function to get all bundle IDs
export const getAllBundleIds = (): string[] => {
  return Object.keys(bundles);
};

// Helper function to get all bundles
export const getAllBundles = (): Bundle[] => {
  return Object.values(bundles);
};

// Helper function to get a specific bundle by ID
export const getBundleById = (id: string): Bundle | undefined => {
  return bundles[id];
}; 