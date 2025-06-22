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
  backgroundImage?: string;
  steps?: Array<{
    title: string;
    description: string;
    icon: string; // SVG path data
  }>;
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
      backgroundImage: '/images/strategy-hero.png',
      insights: [
        'Funding crisis reality: 85% of developers struggling with financing, making professional presentation a competitive advantage',
        'Strategic foundation: Position as experienced operators with deep market insight, not just another development play'
      ]
    },
    planning: {
      title: 'Integrated Brand and Investment Strategy',
      timeline: 'Days 2-3',
      content: 'Strategic framework informed by market research positioned against market dynamics: "Proven scale, local precision" narrative leveraging US experience for institutional-scale capability while Southern Ontario expertise ensures regulatory navigation. Investment narrative architecture opens with Southern Ontario opportunity sizing, demonstrates capability differentiation through US project examples, emphasizes local competitive advantage, and highlights market timing with capital scarcity creating opportunity.',
      backgroundImage: '/images/meeting-room-2.png',
      deliverables: [
        'Positioning narrative: "Proven scale, local precision" against market dynamics',
        'Investment narrative architecture with Southern Ontario opportunity sizing',
        'Visual identity system conveying institutional credibility',
        'Website strategy and communication systems for investor-grade materials'
      ]
    },
    solution: {
      title: 'Solution Mapping: From Pitch to Platform',
      timeline: 'Days 3-4',
      content: 'The reverse-engineering approach: Instead of traditional brand-first methodology, we used the pitch deck as the brand development vehicle. High-leverage deliverable becomes brand foundation.',
      steps: [
        {
          title: 'Reverse Engineering',
          description: 'Start with the highest-stakes deliverable (pitch deck) to establish design principles and brand foundation that work under pressure.',
          icon: 'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
        },
        {
          title: 'Scalable Integration',
          description: 'Apply proven aesthetics across all touchpoints while building scalable brand architecture for future growth and expansion.',
          icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
        }
      ],
      insights: [
        'Integration approach: Pitch deck requirements → Brand identity development → Verbal identity through copywriting',
        'Visual consistency across all platforms using proven design language'
      ]
    },
    implementation: {
      approach: 'Integrated execution - one week for critical funding materials, three weeks for custom website and market presence',
      phases: [
        {
          title: 'Week 1: Funding Sprint',
          timeline: '7 days',
          details: [
            'Strategic positioning and investor narrative development',
            'Visual identity system through pitch deck design',
            'Verbal identity and copywriting standards',
            'Brand guidelines and presentation materials'
          ]
        },
        {
          title: 'Weeks 2-4: Website Development',
          timeline: '3 weeks',
          details: [
            'Custom website architecture and development',
            'Content strategy and creation',
            'Template systems for ongoing consistency',
            'Market launch preparation'
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
        { metric: 'Market presence', impact: 'Complete brand identity and custom website supporting future projects' },
        { metric: 'Operational independence', impact: 'Template systems enabling self-sufficient communications' },
        { metric: 'Scalable foundation', impact: 'Brand identity and website systems ready for portfolio expansion' }
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
      insights: ['Users abandon platforms due to poor discovery', 'Personalization drives retention']
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
      insights: ['Machine learning improves with usage', 'Visual discovery reduces cognitive load']
    },
    implementation: {
      approach: 'AI-first development with rapid iteration and continuous user feedback integration',
      phases: [
        {
          title: 'Weeks 1-2: Foundation',
          timeline: '2 weeks',
          details: [
            'User research and behavior pattern analysis',
            'AI recommendation engine architecture',
            'Core machine learning algorithm development',
            'Content categorization system design'
          ]
        },
        {
          title: 'Weeks 3-4: Integration',
          timeline: '2 weeks',
          details: [
            'User interface design and development', 
            'AI engine integration and optimization',
            'Beta testing with initial user groups',
            'Performance monitoring and refinement'
          ]
        },
        {
          title: 'Weeks 5-6: Launch',
          timeline: '2 weeks',
          details: [
            'Full platform deployment and scaling',
            'User onboarding and engagement systems',
            'Analytics implementation and monitoring',
            'Continuous improvement based on user data'
          ]
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
    slug: 'bank-dib-transformation',
    title: 'From Pilot to Premium Banking Platform in 6 Months',
    description: 'Complete digital bank transformation: operations, brand, technology, and client growth during banking industry crisis.',
    keywords: 'digital banking, fintech, transformation, crisis positioning, premium banking, wealthy clients',
    hero: {
      title: 'From Pilot to Premium Banking Platform in 6 Months',
      subtitle: 'Digital Banking Transformation',
      client: 'Bank DIB',
      stage: 'Create → Activate → Accelerate',
      timeline: '6 months core transformation',
      keyResult: '5x client growth, 8x assets increase, $1M+ saved',
      image: '/images/showcase/bank-comparison.png',
      overlayType: 'dark'
    },
    challenge: {
      overview: 'A digital bank in pilot phase needed a complete business overhaul to launch successfully in the competitive wealthy client banking market. Scattered processes, inefficient systems, and unclear positioning against traditional big bank red tape threatened their market entry.',
      constraint: 'Limited infrastructure, small team, need to stand out against established big banks that offer better access and clearer pricing.',
      stakes: 'Successfully launch and scale a boutique digital bank serving wealthy clients or fail to compete against established banks.'
    },
    discovery: {
      title: 'Banking Operations & Market Analysis',
      timeline: 'Month 1',
      content: 'Deep dive audit revealed major problems: scattered documentation systems, confusing customer forms causing people to quit mid-application, mismatched technology systems, and unclear market positioning in a crowded banking space. Market research found wealthy clients frustrated with big bank red tape and hidden fees—creating an opportunity for a boutique bank with better access and transparent pricing.',
      backgroundImage: '/images/showcase/bank-bg.png',
      insights: [
        'Operations problem: Scattered processes preventing the bank from growing efficiently',
        'Market opportunity: Wealthy clients want to escape big bank red tape and hidden fees'
      ]
    },
    planning: {
      title: 'Business Operations & Brand Strategy',
      timeline: 'Month 1-2',
      content: 'Strategic plan positioned Bank DIB as a premium boutique digital bank serving wealthy clients with better access and transparent pricing—cutting through big bank red tape. The roadmap included standardizing processes, upgrading technology systems, and developing the brand.',
      backgroundImage: '/images/boardroom.png',
      deliverables: [
        'Premium wealthy client positioning emphasizing better access and transparent pricing',
        'Business process framework for scalable boutique service delivery',
        'Technology system upgrade plan and rollout strategy'
      ]
    },
    solution: {
      title: 'Boutique Bank Positioning',
      timeline: 'Days 3-4',
      content: 'Positioned Bank DIB as the premium boutique alternative to traditional private banking. The differentiation focused on personal service, specialized expertise, and exclusive client relationships.',
      steps: [
        {
          title: 'Market Differentiation',
          description: 'Position as boutique alternative to traditional private banking with personal service and specialized wealthy client expertise.',
          icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
        },
        {
          title: 'Digital Excellence',
          description: 'Create premium digital experience that reflects boutique positioning while enabling scalable client growth.',
          icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
        }
      ],
      insights: [
        'Boutique positioning attracts wealthy clients seeking personal alternative to big bank bureaucracy',
        'Digital excellence becomes competitive advantage in traditional banking industry'
      ]
    },
    implementation: {
      approach: 'Six-month complete transformation building full banking platform with structured handoff to independent operation',
      phases: [
        {
          title: 'Months 1-3: Foundation & Rebrand',
          timeline: '3 months',
          details: [
            'Complete business audit and process standardization',
            'Full rebrand execution and market positioning',
            'Technology system research, negotiation, and migration',
            'Professional referral network development with law firms and accounting firms'
          ]
        },
        {
          title: 'Months 4-6: Growth & Optimization',
          timeline: '3 months',
          details: [
            'Technology platform customization and system connections',
            'Client acquisition through professional referral networks',
            'Process optimization and team training for independent operation',
            'Market positioning validation and growth acceleration'
          ]
        }
      ],
      keyInsight: 'Six months delivered complete transformation with clean handoff to independent operation.'
    },
    results: {
      immediate: [
        { metric: 'Operations Efficiency', impact: 'Scalable processes from scattered startup operations' },
        { metric: 'Brand Positioning', impact: 'Complete rebrand executed in 4 weeks' },
        { metric: 'Technology Upgrade', impact: 'Core banking system migration saving $1M+ annually' }
      ],
      longTerm: [
        { metric: 'Client Growth', impact: '5x increase through professional referral networks' },
        { metric: 'Assets Under Management', impact: '8x increase through wealthy client focus' },
        { metric: 'Market Position', impact: 'Recognition as premium boutique alternative to big bank red tape' }
      ],
      testimonial: {
        quote: 'The transformation was comprehensive - from operational chaos to premium banking platform. The positioning against big bank red tape with better access and transparent pricing proved exactly what our wealthy clients needed.',
        author: 'Leadership Team',
        title: 'Executive Leadership',
        company: 'Bank DIB'
      }
    },
    advantage: {
      title: 'Complete Banking Transformation vs. Traditional Consulting',
      traditional: {
        approach: 'Operations consultant → Brand agency → Technology vendor → Marketing firm → Separate implementations',
        timeline: '12-18 months for foundation, additional time for optimization',
        outcome: 'Disconnected solutions, cost overruns, extended timelines, dependency on multiple vendors'
      },
      nextstage: {
        approach: 'Complete transformation across all business functions in 6 months with structured handoff to independence',
        timeline: '6 months core transformation, clean handoff to independent operation',
        outcome: '5x client growth, 8x assets increase, $1M+ savings, independent operation capability'
      },
      insight: 'Banking transformation requires integrated expertise to prevent gaps between critical business functions. Six-month intensive approach delivers faster results than extended consulting engagements.'
    },
    lessons: {
      factors: [
        { title: 'Concurrent Transformation', description: 'Auditing existing while building new systems enables maximum efficiency and seamless transitions.' },
        { title: 'Boutique Service Differentiation', description: 'Better access and transparent pricing create compelling alternative to big bank red tape for wealthy clients.' }
      ],
      businessLessons: [
        { title: 'Boutique Premium Positioning', description: 'Wealthy client focus with better access and transparent pricing creates sustainable advantage against big bank red tape.' },
        { title: 'Complete Transformation Advantage', description: 'Operations + Brand + Technology + Growth working together prevents gaps and accelerates results.' }
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