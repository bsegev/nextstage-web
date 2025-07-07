export interface Deliverable {
  id: string;
  title: string;
  category: string;
  description: string;
  tagline: string;
  heroImage: string;
  icon: string;
  tags: string[];
  
  // Pricing & Investment
  investment: {
    starting: number;
    typical: string;
    timeline: string;
  };
  
  // What's Included
  includes: {
    title: string;
    description: string;
    icon: string;
  }[];
  
  // Process Overview
  process: {
    phase: string;
    duration: string;
    description: string;
    deliverables: string[];
  }[];
  
  // Perfect For
  perfectFor: string[];
  
  // Results & Outcomes
  outcomes: {
    metric: string;
    description: string;
  }[];
  
  // Related Services
  relatedServices: string[];
  
  // FAQ
  faq: {
    question: string;
    answer: string;
  }[];
}

export const deliverables: Record<string, Deliverable> = {
  // BRAND & DESIGN DELIVERABLES
  'brand-identity-system': {
    id: 'brand-identity-system',
    title: 'Brand Identity System',
    category: 'Brand & Design',
    description: 'Complete visual identity with logo, guidelines, and brand assets that create instant recognition and trust.',
    tagline: 'From concept to consistent brand recognition',
    heroImage: '/images/brand-design/brand-identity.png',
    icon: 'IconBrandAbstract',
    tags: ['brand-identity', 'visual-design', 'brand-guidelines'],
    
    investment: {
      starting: 15000,
      typical: '$15,000 - $35,000',
      timeline: '4-6 weeks'
    },
    
    includes: [
      {
        title: 'Brand Strategy & Positioning',
        description: 'Market research, competitive analysis, and strategic positioning framework',
        icon: 'IconTarget'
      },
      {
        title: 'Logo Design & Variations',
        description: 'Primary logo, variations, and usage guidelines for all applications',
        icon: 'IconBrandAbstract'
      },
      {
        title: 'Visual Identity System',
        description: 'Color palette, typography, iconography, and visual language',
        icon: 'IconPalette'
      },
      {
        title: 'Brand Guidelines Document',
        description: 'Comprehensive brand book with usage rules and applications',
        icon: 'IconBook'
      },
      {
        title: 'Marketing Asset Templates',
        description: 'Business cards, letterhead, presentation templates, and social media assets',
        icon: 'IconTemplate'
      },
      {
        title: 'Digital Brand Assets',
        description: 'All files in multiple formats for web, print, and digital use',
        icon: 'IconDownload'
      }
    ],
    
    process: [
      {
        phase: 'Discovery & Strategy',
        duration: '1 week',
        description: 'Brand audit, market research, and strategic positioning',
        deliverables: ['Brand audit report', 'Competitive analysis', 'Brand strategy document']
      },
      {
        phase: 'Concept Development',
        duration: '2 weeks',
        description: 'Logo concepts, visual direction, and initial brand elements',
        deliverables: ['Logo concepts (3 directions)', 'Visual mood boards', 'Typography exploration']
      },
      {
        phase: 'Refinement & System',
        duration: '1-2 weeks',
        description: 'Final logo refinement and complete visual system development',
        deliverables: ['Final logo & variations', 'Color palette', 'Typography system']
      },
      {
        phase: 'Guidelines & Assets',
        duration: '1 week',
        description: 'Brand guidelines creation and marketing asset development',
        deliverables: ['Brand guidelines document', 'Marketing templates', 'Digital asset library']
      }
    ],
    
    perfectFor: [
      'Startups launching their first brand',
      'Companies rebranding or refreshing their identity',
      'Businesses with inconsistent brand presentation',
      'Organizations preparing for funding or growth'
    ],
    
    outcomes: [
      {
        metric: '3x Brand Recognition',
        description: 'Consistent brand application increases recognition and recall'
      },
      {
        metric: '40% Higher Trust',
        description: 'Professional brand identity builds immediate credibility'
      },
      {
        metric: '25% Faster Sales',
        description: 'Strong brand positioning accelerates decision-making'
      }
    ],
    
    relatedServices: ['branding-design', 'brand-experience'],
    
    faq: [
      {
        question: 'How long does the brand identity process take?',
        answer: 'Typically 4-6 weeks from kickoff to final delivery, depending on feedback cycles and complexity.'
      },
      {
        question: 'What if I already have a logo but need everything else?',
        answer: 'We can work with existing logos if they meet quality standards, focusing on developing the complete visual system around them.'
      },
      {
        question: 'Do you provide trademark assistance?',
        answer: 'We can recommend trademark attorneys and ensure designs are created with trademark considerations in mind.'
      },
      {
        question: 'What file formats do I receive?',
        answer: 'All logos and assets in vector (AI, EPS, SVG) and raster (PNG, JPG) formats, optimized for web, print, and digital use.'
      }
    ]
  },

  'website-design-development': {
    id: 'website-design-development',
    title: 'Website Design & Development',
    category: 'Brand & Design',
    description: 'Custom websites that convert visitors into customers with beautiful design and seamless user experience.',
    tagline: 'Your digital storefront that works 24/7',
    heroImage: '/images/brand-design/digital-experience.png',
    icon: 'IconDeviceLaptop',
    tags: ['web-design', 'development', 'user-experience'],
    
    investment: {
      starting: 25000,
      typical: '$25,000 - $75,000',
      timeline: '6-10 weeks'
    },
    
    includes: [
      {
        title: 'User Experience Strategy',
        description: 'User research, journey mapping, and conversion optimization strategy',
        icon: 'IconUsers'
      },
      {
        title: 'Custom Website Design',
        description: 'Responsive design for desktop, tablet, and mobile devices',
        icon: 'IconDeviceLaptop'
      },
      {
        title: 'Professional Development',
        description: 'Clean, fast, SEO-optimized code built on modern frameworks',
        icon: 'IconCode'
      },
      {
        title: 'Content Management System',
        description: 'Easy-to-use CMS for updating content and managing your site',
        icon: 'IconEdit'
      },
      {
        title: 'Performance Optimization',
        description: 'Speed optimization, SEO setup, and analytics integration',
        icon: 'IconGauge'
      },
      {
        title: 'Training & Support',
        description: '30 days of support and training on managing your new website',
        icon: 'IconSupport'
      }
    ],
    
    process: [
      {
        phase: 'Strategy & Planning',
        duration: '1 week',
        description: 'User research, site architecture, and technical planning',
        deliverables: ['Site map', 'User personas', 'Technical specifications']
      },
      {
        phase: 'Design & Prototyping',
        duration: '3 weeks',
        description: 'Wireframes, visual design, and interactive prototypes',
        deliverables: ['Wireframes', 'Visual designs', 'Interactive prototype']
      },
      {
        phase: 'Development & Integration',
        duration: '3-4 weeks',
        description: 'Front-end and back-end development with CMS integration',
        deliverables: ['Responsive website', 'CMS setup', 'Performance optimization']
      },
      {
        phase: 'Testing & Launch',
        duration: '1-2 weeks',
        description: 'Quality assurance, final testing, and deployment',
        deliverables: ['Testing report', 'Live website', 'Analytics setup']
      }
    ],
    
    perfectFor: [
      'Businesses needing a professional online presence',
      'Companies with outdated or poorly performing websites',
      'Startups launching their first website',
      'Organizations requiring custom functionality'
    ],
    
    outcomes: [
      {
        metric: '150% More Leads',
        description: 'Optimized user experience and conversion funnels drive more inquiries'
      },
      {
        metric: '60% Faster Load Times',
        description: 'Performance optimization improves user experience and SEO ranking'
      },
      {
        metric: '80% Mobile Engagement',
        description: 'Responsive design ensures perfect experience across all devices'
      }
    ],
    
    relatedServices: ['branding-design', 'tech-software'],
    
    faq: [
      {
        question: 'What platform do you build websites on?',
        answer: 'We use modern frameworks like Next.js, React, or WordPress depending on your needs and technical requirements.'
      },
      {
        question: 'Will I be able to update the website myself?',
        answer: 'Yes, we include a user-friendly CMS and provide training so you can easily update content, images, and pages.'
      },
      {
        question: 'Is hosting and maintenance included?',
        answer: 'We can recommend hosting solutions and offer ongoing maintenance packages, but hosting is typically separate.'
      },
      {
        question: 'How do you ensure the website will rank well in search engines?',
        answer: 'We build with SEO best practices, optimize for speed, and can integrate with your broader SEO strategy.'
      }
    ]
  },

  // STRATEGY DELIVERABLES
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
      starting: 20000,
      typical: '$20,000 - $50,000',
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

  // TECHNOLOGY DELIVERABLES
  'mvp-development': {
    id: 'mvp-development',
    title: 'MVP Development & Launch',
    category: 'Technology & Innovation',
    description: 'Fully functional minimum viable product ready for user testing, feedback, and rapid iteration.',
    tagline: 'From concept to market-ready product',
    heroImage: '/images/tech-innovation/mvp-development.png',
    icon: 'IconRocket',
    tags: ['mvp', 'product-development', 'early-stage'],
    
    investment: {
      starting: 35000,
      typical: '$35,000 - $100,000',
      timeline: '8-12 weeks'
    },
    
    includes: [
      {
        title: 'Product Strategy & Planning',
        description: 'Feature prioritization, user stories, and technical architecture',
        icon: 'IconStrategy'
      },
      {
        title: 'User Experience Design',
        description: 'Wireframes, user flows, and interface design optimized for core features',
        icon: 'IconDesign'
      },
      {
        title: 'Full-Stack Development',
        description: 'Front-end, back-end, and database development with modern technologies',
        icon: 'IconCode'
      },
      {
        title: 'Quality Assurance',
        description: 'Testing, bug fixes, and performance optimization',
        icon: 'IconBug'
      },
      {
        title: 'Deployment & Hosting',
        description: 'Cloud deployment, monitoring setup, and launch preparation',
        icon: 'IconCloud'
      },
      {
        title: 'Documentation & Training',
        description: 'Technical documentation and user training for your team',
        icon: 'IconBook'
      }
    ],
    
    process: [
      {
        phase: 'Discovery & Planning',
        duration: '1-2 weeks',
        description: 'Requirements gathering, technical planning, and project setup',
        deliverables: ['Product requirements', 'Technical architecture', 'Project timeline']
      },
      {
        phase: 'Design & Prototyping',
        duration: '2 weeks',
        description: 'User experience design and interactive prototypes',
        deliverables: ['Wireframes', 'UI designs', 'Interactive prototype']
      },
      {
        phase: 'Development Sprint 1',
        duration: '3 weeks',
        description: 'Core functionality development and basic user flows',
        deliverables: ['Core features', 'User authentication', 'Basic workflows']
      },
      {
        phase: 'Development Sprint 2',
        duration: '2-3 weeks',
        description: 'Additional features, integrations, and polish',
        deliverables: ['Advanced features', 'Third-party integrations', 'Performance optimization']
      },
      {
        phase: 'Testing & Launch',
        duration: '1-2 weeks',
        description: 'Quality assurance, final testing, and production deployment',
        deliverables: ['Testing report', 'Live MVP', 'Launch checklist']
      }
    ],
    
    perfectFor: [
      'Startups validating their product concept',
      'Entrepreneurs with limited technical resources',
      'Companies testing new product ideas',
      'Businesses needing rapid market entry'
    ],
    
    outcomes: [
      {
        metric: '10x Faster Validation',
        description: 'Get real user feedback and market validation in weeks, not months'
      },
      {
        metric: '70% Development Cost Savings',
        description: 'Focus on core features reduces initial development investment'
      },
      {
        metric: '5x Faster Iteration',
        description: 'Built for rapid changes based on user feedback and market response'
      }
    ],
    
    relatedServices: ['tech-software', 'platform-development'],
    
    faq: [
      {
        question: 'What technologies do you use for MVP development?',
        answer: 'We select technologies based on your specific needs, typically using modern frameworks like React, Node.js, or Python with cloud hosting.'
      },
      {
        question: 'How do you decide which features to include in the MVP?',
        answer: 'We work with you to identify core user needs and business objectives, focusing on features that provide maximum value with minimal complexity.'
      },
      {
        question: 'Can the MVP be scaled as the business grows?',
        answer: 'Yes, we build MVPs with scalability in mind, using architecture and technologies that can grow with your business.'
      },
      {
        question: 'What happens after the MVP is launched?',
        answer: 'We can provide ongoing development support, help analyze user feedback, and iterate on the product based on market response.'
      }
    ]
  },

  // GROWTH & MARKETING DELIVERABLES
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
      starting: 18000,
      typical: '$18,000 - $45,000',
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
  }
};

// Helper functions for filtering and organizing deliverables
export const getDeliverablesByCategory = (category: string) => {
  return Object.values(deliverables).filter(d => d.category === category);
};

export const getDeliverableById = (id: string) => {
  return deliverables[id];
};

export const getAllCategories = () => {
  return [...new Set(Object.values(deliverables).map(d => d.category))];
}; 