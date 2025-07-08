import { Deliverable } from './types';

export const strategyPlanningDeliverables: Record<string, Deliverable> = {
  'market-research-analysis': {
    id: 'market-research-analysis',
    title: 'Market Research & Analysis',
    category: 'Strategy & Planning',
    description: 'Comprehensive market intelligence with competitive analysis and opportunity assessment to guide strategic decisions.',
    tagline: 'From market uncertainty to strategic clarity',
    heroImage: '/images/strategy-consulting/compass.png',
    icon: 'IconChartBar',
    tags: ['market-research', 'competitive-analysis', 'market-intelligence'],
    
    investment: {
      starting: 4500,
      typical: '$4,500 - $9,000',
      timeline: '1-2 weeks'
    },
    
    includes: [
      {
        title: 'Market Size & Opportunity Assessment',
        description: 'Total addressable market (TAM), serviceable addressable market (SAM), and growth projections',
        icon: 'IconChartBar'
      },
      {
        title: 'Competitive Landscape Analysis',
        description: 'Direct and indirect competitor analysis with positioning, pricing, and market share insights',
        icon: 'IconTrendingUp'
      },
      {
        title: 'Customer Behavior Research',
        description: 'Target audience analysis, buying patterns, and decision-making criteria',
        icon: 'IconUsers'
      },
      {
        title: 'Industry Trend Analysis',
        description: 'Market trends, emerging technologies, and regulatory landscape assessment',
        icon: 'IconBolt'
      },
      {
        title: 'Opportunity Gap Analysis',
        description: 'Unmet needs, market gaps, and strategic opportunities for competitive advantage',
        icon: 'IconTarget'
      },
      {
        title: 'Strategic Recommendations',
        description: 'Actionable insights and strategic recommendations based on research findings',
        icon: 'IconLightbulb'
      }
    ],
    
    process: [
      {
        phase: 'Research Planning',
        duration: '3-5 days',
        description: 'Define research objectives, methodology, and data collection strategy',
        deliverables: ['Research plan', 'Data collection framework', 'Competitor list']
      },
      {
        phase: 'Primary Research',
        duration: '1-2 weeks',
        description: 'Customer interviews, surveys, and industry expert consultations',
        deliverables: ['Interview transcripts', 'Survey results', 'Expert insights']
      },
      {
        phase: 'Secondary Research',
        duration: '1 week',
        description: 'Industry reports, financial analysis, and competitive intelligence gathering',
        deliverables: ['Industry analysis', 'Competitive profiles', 'Market sizing data']
      },
      {
        phase: 'Analysis & Insights',
        duration: '3-5 days',
        description: 'Data synthesis, trend identification, and strategic insight development',
        deliverables: ['Research report', 'Strategic recommendations', 'Opportunity map']
      }
    ],
    
    perfectFor: [
      'Companies entering new markets',
      'Startups validating market opportunity',
      'Businesses planning strategic pivots',
      'Organizations seeking competitive advantage',
      'Investment teams conducting due diligence'
    ],
    
    outcomes: [
      {
        metric: '85% Decision Confidence',
        description: 'Clear market intelligence increases confidence in strategic decisions'
      },
      {
        metric: '60% Faster Market Entry',
        description: 'Understanding market dynamics accelerates go-to-market execution'
      },
      {
        metric: '40% Higher Success Rate',
        description: 'Data-driven strategy significantly improves market entry success'
      }
    ],
    
    relatedServices: ['strategy-planning', 'market-intelligence'],
    
    faq: [
      {
        question: 'How do you ensure research accuracy and reliability?',
        answer: 'We use multiple data sources, triangulate findings, and validate insights through primary research with target customers and industry experts.'
      },
      {
        question: 'What if our market is very niche or emerging?',
        answer: 'We specialize in researching emerging markets using proxy analysis, expert networks, and innovative research methodologies.'
      },
      {
        question: 'Do you provide ongoing market monitoring?',
        answer: 'We can set up market monitoring systems and provide quarterly updates to track market evolution and competitive changes.'
      },
      {
        question: 'How detailed is the competitive analysis?',
        answer: 'We analyze competitors across multiple dimensions: positioning, pricing, features, marketing, funding, and strategic direction.'
      }
    ]
  },

  'strategic-business-planning': {
    id: 'strategic-business-planning',
    title: 'Strategic Business Planning',
    category: 'Strategy & Planning',
    description: 'Data-driven business strategy and execution roadmaps that align teams and drive sustainable growth.',
    tagline: 'From vision to executable strategy',
    heroImage: '/images/strategy-consulting/bridge.png',
    icon: 'IconRoute',
    tags: ['business-planning', 'strategy-development', 'execution-roadmap'],
    
    investment: {
      starting: 12000,
      typical: '$12,000 - $24,000',
      timeline: '3-4 weeks'
    },
    
    includes: [
      {
        title: 'Strategic Framework Development',
        description: 'Mission, vision, values, and strategic objectives aligned with market opportunity',
        icon: 'IconCompass'
      },
      {
        title: 'Business Model Design',
        description: 'Revenue streams, cost structure, and value proposition optimization',
        icon: 'IconCurrency'
      },
      {
        title: 'Financial Planning & Projections',
        description: '3-year financial models with scenario planning and sensitivity analysis',
        icon: 'IconChartLine'
      },
      {
        title: 'Operational Strategy',
        description: 'Resource allocation, capability building, and organizational structure',
        icon: 'IconSettings'
      },
      {
        title: 'Risk Assessment & Mitigation',
        description: 'Strategic risks identification and contingency planning',
        icon: 'IconShield'
      },
      {
        title: 'Implementation Roadmap',
        description: '18-month execution plan with milestones, KPIs, and accountability framework',
        icon: 'IconCalendar'
      }
    ],
    
    process: [
      {
        phase: 'Strategic Assessment',
        duration: '1 week',
        description: 'Current state analysis, stakeholder alignment, and strategic context development',
        deliverables: ['SWOT analysis', 'Stakeholder map', 'Strategic context report']
      },
      {
        phase: 'Strategy Development',
        duration: '2-3 weeks',
        description: 'Strategic framework, business model design, and financial modeling',
        deliverables: ['Strategic framework', 'Business model canvas', 'Financial projections']
      },
      {
        phase: 'Operational Planning',
        duration: '2 weeks',
        description: 'Resource planning, organizational design, and capability assessment',
        deliverables: ['Org structure', 'Resource plan', 'Capability framework']
      },
      {
        phase: 'Implementation Design',
        duration: '1-2 weeks',
        description: 'Roadmap creation, KPI definition, and change management planning',
        deliverables: ['Implementation roadmap', 'KPI dashboard', 'Change plan']
      }
    ],
    
    perfectFor: [
      'Growing companies needing strategic direction',
      'Startups preparing for scale',
      'Organizations undergoing transformation',
      'Businesses seeking investor funding',
      'Leadership teams lacking strategic alignment'
    ],
    
    outcomes: [
      {
        metric: '3x Faster Decision Making',
        description: 'Clear strategic framework accelerates leadership decisions'
      },
      {
        metric: '50% Better Resource Allocation',
        description: 'Strategic priorities guide optimal resource investment'
      },
      {
        metric: '40% Higher Team Alignment',
        description: 'Shared strategic vision improves execution effectiveness'
      }
    ],
    
    relatedServices: ['strategy-planning', 'market-intelligence'],
    
    faq: [
      {
        question: 'How do you ensure the strategy is realistic and achievable?',
        answer: 'We base strategies on thorough market research, financial modeling, and capability assessment to ensure feasibility.'
      },
      {
        question: 'What if market conditions change during implementation?',
        answer: 'We build flexibility into the strategy and provide frameworks for adapting to changing conditions.'
      },
      {
        question: 'Do you help with strategy execution or just planning?',
        answer: 'We create detailed implementation roadmaps and can provide ongoing support during execution phases.'
      },
      {
        question: 'How do you measure strategic success?',
        answer: 'We define clear KPIs and success metrics upfront, with regular review cycles to track progress.'
      }
    ]
  },

  'go-to-market-playbook': {
    id: 'go-to-market-playbook',
    title: 'Go-to-Market Playbook',
    category: 'Strategy & Planning',
    description: 'Complete launch strategy with messaging, channels, and execution roadmap to capture market opportunity.',
    tagline: 'From product to profitable market entry',
    heroImage: '/images/strategy-consulting/compass.png',
    icon: 'IconRocket',
    tags: ['go-to-market', 'strategy', 'launch-planning'],
    
    investment: {
      starting: 10000,
      typical: '$10,000 - $20,000',
      timeline: '4-6 weeks'
    },
    
    includes: [
      {
        title: 'Market Analysis & Sizing',
        description: 'Total addressable market, competitive landscape, and opportunity assessment',
        icon: 'IconChartBar'
      },
      {
        title: 'Customer Segmentation',
        description: 'Detailed buyer personas with pain points, motivations, and decision criteria',
        icon: 'IconUsers'
      },
      {
        title: 'Positioning & Messaging',
        description: 'Value proposition, key messages, and competitive differentiation',
        icon: 'IconBullseye'
      },
      {
        title: 'Channel Strategy',
        description: 'Optimal sales and marketing channels with resource allocation',
        icon: 'IconRoute'
      },
      {
        title: 'Launch Timeline',
        description: '90-day execution roadmap with milestones and success metrics',
        icon: 'IconCalendar'
      },
      {
        title: 'Sales Enablement',
        description: 'Sales materials, objection handling, and pricing strategy',
        icon: 'IconPresentation'
      }
    ],
    
    process: [
      {
        phase: 'Market Research',
        duration: '1 week',
        description: 'Market analysis, competitor research, and opportunity assessment',
        deliverables: ['Market analysis report', 'Competitive landscape', 'Opportunity sizing']
      },
      {
        phase: 'Customer Development',
        duration: '1-2 weeks',
        description: 'Customer interviews, persona development, and journey mapping',
        deliverables: ['Customer personas', 'Journey maps', 'Pain point analysis']
      },
      {
        phase: 'Strategy Development',
        duration: '1-2 weeks',
        description: 'Positioning, messaging, and channel strategy development',
        deliverables: ['Positioning framework', 'Messaging architecture', 'Channel strategy']
      },
      {
        phase: 'Playbook Creation',
        duration: '1 week',
        description: 'Launch timeline, sales materials, and implementation guide',
        deliverables: ['Go-to-market playbook', 'Launch timeline', 'Sales enablement kit']
      }
    ],
    
    perfectFor: [
      'Startups preparing to launch their first product',
      'Companies entering new markets or segments',
      'Businesses with great products but unclear go-to-market',
      'Organizations planning major product launches'
    ],
    
    outcomes: [
      {
        metric: '3x Faster Market Entry',
        description: 'Clear strategy and planning accelerates time to market'
      },
      {
        metric: '50% Higher Conversion',
        description: 'Targeted messaging and positioning improves customer response'
      },
      {
        metric: '40% Lower CAC',
        description: 'Optimized channel strategy reduces customer acquisition costs'
      }
    ],
    
    relatedServices: ['strategy-planning', 'marketing-growth'],
    
    faq: [
      {
        question: 'How do you validate the go-to-market strategy?',
        answer: 'We conduct customer interviews, analyze market data, and test messaging with target audiences before finalizing the strategy.'
      },
      {
        question: 'What if our target market changes during development?',
        answer: 'We build flexibility into the strategy and can adjust based on new insights or market changes.'
      },
      {
        question: 'Do you help with implementation or just strategy?',
        answer: 'We provide the complete playbook and can offer ongoing support or implementation services as needed.'
      },
      {
        question: 'How do you measure success of the go-to-market strategy?',
        answer: 'We define clear KPIs and success metrics upfront, then track progress against launch goals and market response.'
      }
    ]
  },

  'competitive-positioning': {
    id: 'competitive-positioning',
    title: 'Competitive Positioning',
    category: 'Strategy & Planning',
    description: 'Strategic positioning framework that differentiates your business and commands market leadership.',
    tagline: 'From commodity to category leader',
    heroImage: '/images/strategy-consulting/prism.png',
    icon: 'IconTarget',
    tags: ['competitive-positioning', 'differentiation', 'market-leadership'],
    
    investment: {
      starting: 8000,
      typical: '$8,000 - $16,000',
      timeline: '4-5 weeks'
    },
    
    includes: [
      {
        title: 'Competitive Landscape Mapping',
        description: 'Comprehensive competitor analysis across positioning, messaging, and market approach',
        icon: 'IconMap'
      },
      {
        title: 'Differentiation Strategy',
        description: 'Unique value proposition and competitive advantages that set you apart',
        icon: 'IconStar'
      },
      {
        title: 'Positioning Framework',
        description: 'Clear positioning statement and messaging hierarchy for all communications',
        icon: 'IconBullseye'
      },
      {
        title: 'Category Creation/Leadership',
        description: 'Strategy for owning a market category or creating new market segments',
        icon: 'IconCrown'
      },
      {
        title: 'Competitive Response Strategy',
        description: 'Frameworks for responding to competitive threats and market changes',
        icon: 'IconShield'
      },
      {
        title: 'Implementation Guidelines',
        description: 'Tactical guidance for implementing positioning across all touchpoints',
        icon: 'IconChecklist'
      }
    ],
    
    process: [
      {
        phase: 'Competitive Intelligence',
        duration: '1 week',
        description: 'Deep competitor research and market positioning analysis',
        deliverables: ['Competitor profiles', 'Positioning map', 'Competitive gaps analysis']
      },
      {
        phase: 'Differentiation Development',
        duration: '1-2 weeks',
        description: 'Unique value identification and competitive advantage development',
        deliverables: ['Value proposition', 'Differentiation matrix', 'Competitive advantages']
      },
      {
        phase: 'Positioning Strategy',
        duration: '1-2 weeks',
        description: 'Positioning framework creation and messaging development',
        deliverables: ['Positioning statement', 'Messaging framework', 'Category strategy']
      },
      {
        phase: 'Implementation Planning',
        duration: '3-5 days',
        description: 'Rollout strategy and implementation guidelines',
        deliverables: ['Implementation plan', 'Communication guidelines', 'Success metrics']
      }
    ],
    
    perfectFor: [
      'Businesses in crowded markets',
      'Companies struggling with differentiation',
      'Organizations facing new competition',
      'Startups defining market position',
      'Mature companies seeking repositioning'
    ],
    
    outcomes: [
      {
        metric: '60% Better Brand Recall',
        description: 'Clear positioning improves customer recognition and recall'
      },
      {
        metric: '35% Higher Pricing Power',
        description: 'Strong differentiation enables premium pricing strategies'
      },
      {
        metric: '50% Faster Sales Cycles',
        description: 'Clear positioning accelerates customer decision-making'
      }
    ],
    
    relatedServices: ['strategy-planning', 'branding-design'],
    
    faq: [
      {
        question: 'How do you identify our unique competitive advantages?',
        answer: 'We analyze your capabilities, customer feedback, and market gaps to identify genuine differentiators that matter to customers.'
      },
      {
        question: 'What if our industry is highly commoditized?',
        answer: 'We help create new differentiation dimensions and find unexploited positioning opportunities even in mature markets.'
      },
      {
        question: 'How do you ensure the positioning resonates with customers?',
        answer: 'We validate positioning through customer interviews and testing before finalizing the strategy.'
      },
      {
        question: 'Can positioning change how we price our products?',
        answer: 'Yes, strong positioning often enables premium pricing by clearly communicating unique value to customers.'
      }
    ]
  }
}; 