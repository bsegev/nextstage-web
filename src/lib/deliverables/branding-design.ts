import { Deliverable } from './types';

export const brandingDesignDeliverables: Record<string, Deliverable> = {
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
      starting: 6000,
      typical: '$6,000 - $12,000',
      timeline: '2-3 weeks'
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
      starting: 8000,
      typical: '$8,000 - $18,000',
      timeline: '3-4 weeks'
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

  'brand-messaging-framework': {
    id: 'brand-messaging-framework',
    title: 'Brand Messaging & Voice Framework',
    category: 'Brand & Design',
    description: 'Strategic messaging architecture and brand voice that resonates with your audience and drives action.',
    tagline: 'From unclear communication to compelling brand voice',
    heroImage: '/images/brand-design/visual-system.png',
    icon: 'IconSpeakerphone',
    tags: ['brand-messaging', 'copywriting', 'brand-voice'],
    
    investment: {
      starting: 2500,
      typical: '$2,500 - $5,000',
      timeline: '3-5 days'
    },
    
    includes: [
      {
        title: 'Brand Voice & Personality',
        description: 'Distinctive brand voice, tone, and personality framework for all communications',
        icon: 'IconVoice'
      },
      {
        title: 'Messaging Architecture',
        description: 'Core value proposition, key messages, and supporting proof points',
        icon: 'IconHierarchy'
      },
      {
        title: 'Audience-Specific Messaging',
        description: 'Tailored messaging for different customer segments and buying stages',
        icon: 'IconUsers'
      },
      {
        title: 'Content Guidelines',
        description: 'Writing style guide with do\'s, don\'ts, and practical examples',
        icon: 'IconBook'
      },
      {
        title: 'Messaging Templates',
        description: 'Ready-to-use templates for emails, proposals, social media, and website copy',
        icon: 'IconTemplate'
      },
      {
        title: 'Competitive Messaging Analysis',
        description: 'How your messaging differentiates from competitors in the market',
        icon: 'IconTarget'
      }
    ],
    
    process: [
      {
        phase: 'Discovery & Research',
        duration: '1 week',
        description: 'Audience research, brand audit, and competitive messaging analysis',
        deliverables: ['Audience insights', 'Current messaging audit', 'Competitive analysis']
      },
      {
        phase: 'Voice & Positioning',
        duration: '1-2 weeks',
        description: 'Brand voice development and core messaging framework creation',
        deliverables: ['Brand voice guide', 'Core messaging', 'Value proposition']
      },
      {
        phase: 'Content Development',
        duration: '1-2 weeks',
        description: 'Audience-specific messaging and content template creation',
        deliverables: ['Messaging matrix', 'Content templates', 'Style guide']
      },
      {
        phase: 'Guidelines & Training',
        duration: '3-5 days',
        description: 'Final guidelines documentation and team training',
        deliverables: ['Messaging guidelines', 'Team training', 'Implementation plan']
      }
    ],
    
    perfectFor: [
      'Companies with inconsistent messaging',
      'Startups defining their brand voice',
      'Businesses struggling to differentiate',
      'Organizations with multiple communication channels',
      'Teams needing content creation guidance'
    ],
    
    outcomes: [
      {
        metric: '45% Better Message Clarity',
        description: 'Consistent messaging framework improves communication effectiveness'
      },
      {
        metric: '60% Faster Content Creation',
        description: 'Templates and guidelines accelerate content development'
      },
      {
        metric: '35% Higher Engagement',
        description: 'Authentic brand voice increases audience connection and response'
      }
    ],
    
    relatedServices: ['branding-design', 'marketing-growth'],
    
    faq: [
      {
        question: 'How do you develop our unique brand voice?',
        answer: 'We analyze your brand, audience, and competitive landscape to create an authentic voice that resonates with your customers.'
      },
      {
        question: 'Can existing content be adapted to the new messaging?',
        answer: 'Yes, we provide guidelines for updating existing content and can help prioritize which pieces to update first.'
      },
      {
        question: 'How do you ensure consistency across different team members?',
        answer: 'We create detailed guidelines, templates, and provide training to ensure all team members can apply the messaging consistently.'
      },
      {
        question: 'What if our messaging needs to change as we grow?',
        answer: 'We build flexibility into the framework and can provide updates as your business evolves and grows.'
      }
    ]
  },

  'design-system-architecture': {
    id: 'design-system-architecture',
    title: 'Design System Architecture',
    category: 'Brand & Design',
    description: 'Scalable design system with components, patterns, and guidelines for consistent brand expression.',
    tagline: 'From design chaos to systematic consistency',
    heroImage: '/images/brand-design/ux-design.png',
    icon: 'IconComponents',
    tags: ['design-system', 'ui-components', 'design-consistency'],
    
    investment: {
      starting: 15000,
      typical: '$15,000 - $30,000',
      timeline: '2-3 weeks'
    },
    
    includes: [
      {
        title: 'Design Token System',
        description: 'Color, typography, spacing, and animation tokens for consistent design',
        icon: 'IconColorSwatch'
      },
      {
        title: 'Component Library',
        description: 'Reusable UI components with variants, states, and usage guidelines',
        icon: 'IconComponents'
      },
      {
        title: 'Pattern Documentation',
        description: 'Design patterns, layouts, and interaction guidelines',
        icon: 'IconBook'
      },
      {
        title: 'Figma/Sketch Libraries',
        description: 'Designer-ready component libraries with auto-layout and variants',
        icon: 'IconDesign'
      },
      {
        title: 'Developer Handoff',
        description: 'Code-ready specifications and developer documentation',
        icon: 'IconCode'
      },
      {
        title: 'Governance Framework',
        description: 'Processes for maintaining and evolving the design system',
        icon: 'IconSettings'
      }
    ],
    
    process: [
      {
        phase: 'Audit & Strategy',
        duration: '1 week',
        description: 'Current design audit, component inventory, and system strategy',
        deliverables: ['Design audit', 'Component inventory', 'System strategy']
      },
      {
        phase: 'Foundation & Tokens',
        duration: '1-2 weeks',
        description: 'Design tokens, color systems, typography, and spacing scales',
        deliverables: ['Design tokens', 'Color system', 'Typography scale']
      },
      {
        phase: 'Component Development',
        duration: '3-4 weeks',
        description: 'Core components, variants, and interaction patterns',
        deliverables: ['Component library', 'Interaction patterns', 'Usage guidelines']
      },
      {
        phase: 'Documentation & Training',
        duration: '1-2 weeks',
        description: 'System documentation, team training, and implementation support',
        deliverables: ['System documentation', 'Team training', 'Implementation guide']
      }
    ],
    
    perfectFor: [
      'Growing product teams needing consistency',
      'Companies with multiple digital products',
      'Organizations with scattered design practices',
      'Teams spending too much time on design decisions',
      'Businesses preparing for rapid scaling'
    ],
    
    outcomes: [
      {
        metric: '70% Faster Design Process',
        description: 'Reusable components accelerate design and development workflows'
      },
      {
        metric: '85% More Consistent Experience',
        description: 'Systematic approach ensures consistent user experience across products'
      },
      {
        metric: '50% Reduced Development Time',
        description: 'Pre-built components speed up development and reduce bugs'
      }
    ],
    
    relatedServices: ['branding-design', 'tech-software'],
    
    faq: [
      {
        question: 'What tools do you use for the design system?',
        answer: 'We typically use Figma for design and can integrate with React, Vue, or other development frameworks.'
      },
      {
        question: 'How do you ensure the system stays up to date?',
        answer: 'We establish governance processes and can provide ongoing maintenance to keep the system current.'
      },
      {
        question: 'Can the system work with our existing products?',
        answer: 'Yes, we can design the system to integrate with existing products and provide migration strategies.'
      },
      {
        question: 'How do you train teams to use the design system?',
        answer: 'We provide comprehensive documentation, workshops, and ongoing support to ensure successful adoption.'
      }
    ]
  }
}; 