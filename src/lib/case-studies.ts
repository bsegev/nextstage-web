export interface CaseStudyHero {
  title: string;
  subtitle: string;
  client: string;
  stage: string;
  timeline: string;
  keyResult: string;
  image: string;
  overlayType?: 'light' | 'dark' | 'minimal' | 'heavy';
}

export interface CaseStudyChallenge {
  overview: string;
  constraint: string;
  stakes: string;
}

export interface CaseStudyPhase {
  title: string;
  timeline: string;
  content: string;
  insights?: string[];
  deliverables?: string[];
}

export interface CaseStudyImplementation {
  approach: string;
  phases: Array<{
    title: string;
    timeline: string;
    details: string[];
  }>;
  keyInsight?: string;
}

export interface CaseStudyResults {
  immediate: Array<{
    metric: string;
    impact: string;
  }>;
  longTerm: Array<{
    metric: string;
    impact: string;
  }>;
  testimonial?: {
    quote: string;
    author: string;
    title: string;
    company: string;
  };
}

export interface CaseStudyAdvantage {
  title: string;
  traditional: {
    approach: string;
    timeline: string;
    outcome: string;
  };
  nextstage: {
    approach: string;
    timeline: string;
    outcome: string;
  };
  insight: string;
}

export interface CaseStudyLessons {
  factors: Array<{
    title: string;
    description: string;
  }>;
  businessLessons: Array<{
    title: string;
    description: string;
  }>;
}

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  hero: CaseStudyHero;
  challenge: CaseStudyChallenge;
  discovery: CaseStudyPhase;
  planning: CaseStudyPhase;
  solution: CaseStudyPhase;
  implementation: CaseStudyImplementation;
  results: CaseStudyResults;
  advantage: CaseStudyAdvantage;
  lessons: CaseStudyLessons;
}

// Sample case studies data
const caseStudies: CaseStudy[] = [
  {
    slug: 'sparrowpark-development',
    title: 'From Name and Logo to Multi-Million Dollar Funding in 30 Days',
    description: 'Real estate development company secured multi-million dollar funding and built complete market presence in 4 weeks.',
    keywords: 'real estate, development, funding, brand strategy, investment, timeline',
    hero: {
      title: 'From Name and Logo to Multi-Million Dollar Funding in 30 Days',
      subtitle: 'Real Estate Development Company',
      client: 'SparrowPark Development',
      stage: 'Create → Activate',
      timeline: '4 weeks total',
      keyResult: 'Multi-million dollar funding round',
      image: '/images/showcase/sp_deck.jpg',
      overlayType: 'light'
    },
    challenge: {
      overview: 'A real estate development company had identified a time-sensitive opportunity but lacked the brand presence and investor materials needed to secure funding. With construction timelines dependent on immediate capital, they had one week to present to investors—starting with just a company name and basic logo.',
      constraint: 'Seven days to go from startup basics to investment-ready presentation. One month to build complete market presence.',
      stakes: 'Miss the funding window, miss the development opportunity.'
    },
    discovery: {
      title: 'Understanding Real Estate Fundamentals & Market Context',
      timeline: 'Days 1-2',
      content: 'Market intelligence uncovered critical insights: 85% of developers reported financing difficulties in 2024, creating urgent need for professional presentation. Southern Ontario growth trajectory shows population projected to grow 36% by 2046, with GTA adding 3.1 million residents. Development cost pressures hit $141,139 per home in Toronto (176% increase since 2011). Canadian institutional investors pulling billions from US markets back to domestic projects, intensifying local competition.',
      insights: [
        'Funding crisis reality: 85% of developers struggling with financing, making professional presentation a competitive advantage',
        'Southern Ontario opportunity: 36% population growth projected by 2046, validating long-term market opportunity',
        'Client\'s unique positioning: Rare combination of US development experience + deep Southern Ontario market knowledge',
        'Strategic foundation: Position as experienced operators with deep market insight, not just another development play'
      ]
    },
    planning: {
      title: 'Integrated Brand and Investment Strategy',
      timeline: 'Days 2-3',
      content: 'Strategic framework informed by market research positioned against market dynamics: "Proven scale, local precision" narrative leveraging US experience for institutional-scale capability while Southern Ontario expertise ensures regulatory navigation. Investment narrative architecture opens with Southern Ontario opportunity sizing, demonstrates capability differentiation through US project examples, emphasizes local competitive advantage, and highlights market timing with capital scarcity creating opportunity.',
      deliverables: [
        'Positioning narrative: "Proven scale, local precision" against market dynamics',
        'Investment narrative architecture with Southern Ontario opportunity sizing',
        'Visual identity system conveying institutional credibility',
        'Technology and communication strategy for investor-grade materials'
      ]
    },
    solution: {
      title: 'Solution Mapping: From Pitch to Platform',
      timeline: 'Days 3-4',
      content: 'The reverse-engineering approach: Instead of traditional brand-first methodology, we used the pitch deck as the brand development vehicle. High-leverage deliverable becomes brand foundation. Immediate deliverables included investment-grade pitch deck that simultaneously established visual identity system, copywriting and verbal identity developed through investor narrative, brand guidelines extracted from deck design decisions, and messaging framework proven through investor presentation requirements.',
      insights: [
        'Integration approach: Pitch deck requirements → Brand identity development → Verbal identity through copywriting',
        'Visual consistency across all platforms using proven design language',
        'Operational templates maintaining standards established in funding materials',
        'No traditional handoffs - one expert maintaining vision across all deliverables'
      ]
    },
    implementation: {
      approach: 'Speed Without Compromise - Week 1 for funding materials, Weeks 2-4 for complete platform',
      phases: [
        {
          title: 'Week 1: Funding Sprint',
          timeline: 'Days 1-7',
          details: [
            'Days 1-2: Strategic positioning through investor narrative development',
            'Days 3-4: Visual identity established through pitch deck design',
            'Days 4-5: Verbal identity developed through copywriting',
            'Days 6-7: Brand guidelines documentation'
          ]
        },
        {
          title: 'Weeks 2-4: Brand Platform Extension',
          timeline: 'Weeks 2-4',
          details: [
            'Week 2: Website architecture using established identity',
            'Week 3: Content creation following proven voice',
            'Week 4: Template systems maintaining consistency'
          ]
        }
      ],
      keyInsight: 'One voice, multiple applications. No reinvention, just intelligent extension.'
    },
    results: {
      immediate: [
        { metric: 'Funding secured', impact: 'Multi-million dollar investment round closed' },
        { metric: 'Timeline preserved', impact: 'Development schedule maintained through rapid funding' },
        { metric: 'Investor confidence', impact: 'Professional presentation demonstrated execution capability' }
      ],
      longTerm: [
        { metric: 'Market presence', impact: 'Complete brand platform supporting future projects' },
        { metric: 'Operational independence', impact: 'Template systems enabling self-sufficient communications' },
        { metric: 'Scalable foundation', impact: 'Brand and technology systems ready for portfolio expansion' }
      ],
      testimonial: {
        quote: 'We started with just a name and a logo. Within a week, we had a polished investor deck for a live deal, and shortly after, a full website with custom components, clear messaging, and visuals that actually looked and felt like us. What really made the difference was working with someone who understands real estate. It wasn\'t just design, it was strategy, storytelling, and execution all rolled into one.',
        author: 'Client',
        title: 'Founder',
        company: 'SparrowPark Development'
      }
    },
    advantage: {
      title: 'Strategy + Design + Technology Working as One',
      traditional: {
        approach: 'Brand strategy and guidelines: 2-3 weeks, Pitch deck design: 1-2 weeks, Website design: 3-4 weeks, Development and copywriting: 4-6 weeks',
        timeline: '10-15 weeks',
        outcome: 'Opportunity lost'
      },
      nextstage: {
        approach: 'Pitch deck developed as brand foundation vehicle, Visual and verbal identity emerged through high-leverage deliverable, Website used established design language',
        timeline: '4 weeks',
        outcome: 'Opportunity captured'
      },
      insight: 'Branding isn\'t about following traditional process—it\'s about making consistent, informed decisions across all touchpoints. Market pressure validates decisions immediately.'
    },
    lessons: {
      factors: [
        {
          title: 'Branding Through High-Impact Deliverables',
          description: 'The pitch deck wasn\'t just a presentation—it was brand development disguised as critical business tool.'
        },
        {
          title: 'Experience Enables Speed',
          description: 'Market knowledge, industry understanding, and design experience enable immediate, accurate choices.'
        },
        {
          title: 'Market Validation Beats Internal Approval',
          description: 'Investor presentation requirements forced brand-level decisions that were immediately market-tested.'
        }
      ],
      businessLessons: [
        {
          title: 'When Time is Critical',
          description: 'Integration beats coordination when timelines are compressed.'
        },
        {
          title: 'Industry Knowledge Multiplies Impact',
          description: 'Deep sector understanding enables relevant, credible, effective execution.'
        },
        {
          title: 'Independence Enables Scale',
          description: 'Building client capability alongside deliverables creates lasting value.'
        }
      ]
    }
  },
  {
    slug: 'ai-podcast-platform',
    title: 'AI Podcast Platform Transformation',
    description: 'Redefining podcast discovery through artificial intelligence and immersive user experiences.',
    keywords: 'AI, podcast, platform, machine learning, audio, user experience',
    hero: {
      title: 'AI Podcast Platform Transformation',
      subtitle: 'Redefining podcast discovery through artificial intelligence',
      client: 'AI Odyssey',
      stage: 'Ideate → Create',
      timeline: '6 weeks total',
      keyResult: '300% increase in user engagement',
      image: '/images/showcase/ai-podcast-mockup.jpg',
      overlayType: 'light'
    },
    challenge: {
      overview: 'Traditional podcast platforms struggled with content discovery, leading to poor user engagement and high churn rates. Users spent too much time searching for relevant content.',
      constraint: 'Launch before competitive AI platforms entered the market.',
      stakes: 'First-mover advantage in AI-powered audio discovery.'
    },
    discovery: {
      title: 'Understanding Audio Consumption Patterns',
      timeline: 'Week 1',
      content: 'User behavior analysis, content categorization challenges, and AI recommendation engine requirements.',
      insights: ['Users abandon platforms due to poor discovery', 'Personalization drives retention', 'Social features enhance engagement']
    },
    planning: {
      title: 'AI-Powered Experience Strategy',
      timeline: 'Week 2',
      content: 'Machine learning architecture planning, user experience design, and platform scalability framework.',
      deliverables: ['AI recommendation engine design', 'User experience wireframes', 'Technical architecture', 'Content strategy framework']
    },
    solution: {
      title: 'Intelligent Discovery Platform',
      timeline: 'Weeks 3-4',
      content: 'AI-powered recommendation engine with immersive UI/UX that learns from user behavior and preferences.',
      insights: ['Machine learning improves with usage', 'Visual discovery reduces cognitive load', 'Social features create engagement loops']
    },
    implementation: {
      approach: 'Rapid prototyping with AI integration and user testing cycles',
      phases: [
        {
          title: 'AI Engine Development',
          timeline: 'Weeks 3-4',
          details: ['Machine learning algorithm implementation', 'Content analysis and categorization', 'Recommendation system optimization']
        },
        {
          title: 'Platform Launch',
          timeline: 'Weeks 5-6',
          details: ['User interface development', 'Beta testing and refinement', 'Full platform deployment']
        }
      ],
      keyInsight: 'AI recommendations become more accurate with user interaction data.'
    },
    results: {
      immediate: [
        { metric: 'User Engagement', impact: '+300% increase in session duration' },
        { metric: 'Content Discovery', impact: '+450% new podcast discoveries per user' },
        { metric: 'Platform Adoption', impact: '10,000+ users in first month' }
      ],
      longTerm: [
        { metric: 'Churn Reduction', impact: '60% decrease in monthly churn' },
        { metric: 'Revenue Growth', impact: '200% increase in subscription conversions' },
        { metric: 'Market Position', impact: 'Leading AI podcast platform in target market' }
      ]
    },
    advantage: {
      title: 'AI-First Design Philosophy',
      traditional: {
        approach: 'Basic search and category browsing with manual curation',
        timeline: '3-6 months for basic platform',
        outcome: 'Generic discovery experience'
      },
      nextstage: {
        approach: 'AI-powered personalization from day one with intelligent recommendations',
        timeline: '6 weeks for full AI platform',
        outcome: 'Industry-leading discovery experience'
      },
      insight: 'AI integration from the start creates exponentially better user experiences than retrofitting intelligence later.'
    },
    lessons: {
      factors: [
        { title: 'AI-First Architecture', description: 'Building intelligence into the foundation enables superior user experiences.' },
        { title: 'Data-Driven Design', description: 'User behavior patterns inform both AI algorithms and interface design.' }
      ],
      businessLessons: [
        { title: 'Personalization Drives Retention', description: 'AI-powered personalization dramatically improves user engagement and reduces churn.' },
        { title: 'Social Features Amplify AI', description: 'Combining AI recommendations with social discovery creates powerful engagement loops.' }
      ]
    }
  },
  {
    slug: 'digital-banking-platform',
    title: 'Digital Banking Infrastructure',
    description: 'Building next-generation banking infrastructure that serves millions of customers across emerging markets.',
    keywords: 'fintech, banking, digital transformation, financial services, platform',
    hero: {
      title: 'Digital Banking Infrastructure',
      subtitle: 'Banking infrastructure that launches countries',
      client: 'Bank DIB',
      stage: 'Activate → Scale',
      timeline: '8 weeks total',
      keyResult: 'Platform serving 1M+ customers',
      image: '/images/showcase/bank-comparison.png',
      overlayType: 'dark'
    },
    challenge: {
      overview: 'Traditional banking infrastructure couldn\'t scale to meet growing demand in emerging markets. Legacy systems created bottlenecks.',
      constraint: 'Regulatory compliance across multiple jurisdictions.',
      stakes: 'Market leadership in fastest-growing financial regions.'
    },
    discovery: {
      title: 'Financial Infrastructure Analysis',
      timeline: 'Week 1',
      content: 'Regulatory requirements, scalability challenges, and user experience expectations in emerging markets.',
      insights: ['Mobile-first approach critical', 'Regulatory compliance complex but manageable', 'User trust through transparency']
    },
    planning: {
      title: 'Scalable Platform Strategy',
      timeline: 'Week 2',
      content: 'Platform architecture for millions of users, regulatory compliance framework, and user experience design.',
      deliverables: ['Technical architecture', 'Compliance framework', 'User experience design', 'Security protocols']
    },
    solution: {
      title: 'Modern Banking Platform',
      timeline: 'Weeks 3-5',
      content: 'Cloud-native banking infrastructure with advanced security, regulatory compliance, and intuitive user experiences.',
      insights: ['Cloud-native enables rapid scaling', 'API-first architecture future-proofs platform', 'User experience drives adoption']
    },
    implementation: {
      approach: 'Phased rollout with continuous compliance monitoring',
      phases: [
        {
          title: 'Core Platform Development',
          timeline: 'Weeks 3-5',
          details: ['Banking core system implementation', 'Security and compliance integration', 'API development and testing']
        },
        {
          title: 'Market Launch',
          timeline: 'Weeks 6-8',
          details: ['User interface deployment', 'Regulatory approval process', 'Phased customer onboarding']
        }
      ],
      keyInsight: 'Regulatory compliance integrated from the start prevents costly retrofitting.'
    },
    results: {
      immediate: [
        { metric: 'Platform Launch', impact: 'Successfully deployed across 3 countries' },
        { metric: 'Regulatory Approval', impact: '100% compliance achieved in all markets' },
        { metric: 'User Onboarding', impact: '50,000+ customers in first month' }
      ],
      longTerm: [
        { metric: 'Scale Achievement', impact: '1M+ active customers within 6 months' },
        { metric: 'Market Position', impact: 'Leading digital bank in target regions' },
        { metric: 'Revenue Growth', impact: '500% increase in digital banking revenue' }
      ]
    },
    advantage: {
      title: 'Cloud-Native Banking Architecture',
      traditional: {
        approach: 'Legacy system modernization with gradual digital transformation',
        timeline: '12-18 months for partial modernization',
        outcome: 'Limited scalability and ongoing technical debt'
      },
      nextstage: {
        approach: 'Cloud-native platform built for scale with integrated compliance',
        timeline: '8 weeks for full platform deployment',
        outcome: 'Unlimited scalability and future-ready architecture'
      },
      insight: 'Building cloud-native from the start eliminates technical debt and enables rapid scaling.'
    },
    lessons: {
      factors: [
        { title: 'Compliance-First Design', description: 'Integrating regulatory requirements from the start prevents costly retrofitting.' },
        { title: 'Cloud-Native Architecture', description: 'Modern infrastructure enables rapid scaling and reduced operational costs.' }
      ],
      businessLessons: [
        { title: 'Mobile-First is Essential', description: 'Emerging markets require mobile-optimized experiences for mass adoption.' },
        { title: 'Trust Through Transparency', description: 'Clear communication about security and compliance builds user confidence.' }
      ]
    }
  }
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find(study => study.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map(study => study.slug);
}

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
} 