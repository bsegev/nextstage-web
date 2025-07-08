import { Deliverable } from './types';

export const techSoftwareDeliverables: Record<string, Deliverable> = {
  'custom-platform-development': {
    id: 'custom-platform-development',
    title: 'Custom Platform Development',
    category: 'Technology & Innovation',
    description: 'End-to-end development of scalable digital business platforms tailored to your specific needs.',
    tagline: 'From concept to enterprise-grade platform',
    heroImage: '/images/tech-innovation/internal-software.png',
    icon: 'IconServer',
    tags: ['platform-development', 'custom-software', 'enterprise-solutions'],
    
    investment: {
      starting: 35000,
      typical: '$35,000 - $85,000',
      timeline: '12-20 weeks'
    },
    
    includes: [
      {
        title: 'Platform Architecture Design',
        description: 'Scalable system architecture with microservices, APIs, and database design',
        icon: 'IconSitemap'
      },
      {
        title: 'Full-Stack Development',
        description: 'Frontend, backend, and database development with modern technologies',
        icon: 'IconCode'
      },
      {
        title: 'User Management System',
        description: 'Authentication, authorization, role-based access, and user administration',
        icon: 'IconUsers'
      },
      {
        title: 'Admin Dashboard',
        description: 'Comprehensive admin interface for platform management and analytics',
        icon: 'IconDashboard'
      },
      {
        title: 'API Development',
        description: 'RESTful APIs with documentation for third-party integrations',
        icon: 'IconApi'
      },
      {
        title: 'Cloud Infrastructure',
        description: 'Scalable cloud deployment with monitoring, security, and backup systems',
        icon: 'IconCloud'
      }
    ],
    
    process: [
      {
        phase: 'Requirements & Architecture',
        duration: '2-3 weeks',
        description: 'Detailed requirements gathering, system architecture, and technical planning',
        deliverables: ['Requirements document', 'System architecture', 'Technical specifications']
      },
      {
        phase: 'MVP Development',
        duration: '4-6 weeks',
        description: 'Core platform development with essential features and basic UI',
        deliverables: ['Core platform', 'Basic UI', 'User authentication']
      },
      {
        phase: 'Feature Development',
        duration: '4-8 weeks',
        description: 'Advanced features, integrations, and admin functionality',
        deliverables: ['Advanced features', 'Admin dashboard', 'API endpoints']
      },
      {
        phase: 'Testing & Deployment',
        duration: '2-3 weeks',
        description: 'Comprehensive testing, performance optimization, and production deployment',
        deliverables: ['Testing report', 'Performance optimization', 'Production deployment']
      }
    ],
    
    perfectFor: [
      'Businesses needing custom business solutions',
      'Companies with unique workflow requirements',
      'Organizations replacing legacy systems',
      'Enterprises requiring scalable platforms',
      'Startups with complex product visions'
    ],
    
    outcomes: [
      {
        metric: '300% Process Efficiency',
        description: 'Custom platforms dramatically improve operational efficiency'
      },
      {
        metric: '85% Reduced Manual Work',
        description: 'Automation features eliminate repetitive tasks and human error'
      },
      {
        metric: '10x Scalability',
        description: 'Cloud-native architecture supports rapid business growth'
      }
    ],
    
    relatedServices: ['tech-software', 'platform-development'],
    
    faq: [
      {
        question: 'What technologies do you use for platform development?',
        answer: 'We select the best technology stack based on your needs, typically using React/Next.js, Node.js/Python, and cloud services like AWS or Google Cloud.'
      },
      {
        question: 'How do you ensure the platform can scale as we grow?',
        answer: 'We design with scalability in mind, using microservices architecture, cloud infrastructure, and performance optimization techniques.'
      },
      {
        question: 'Can you integrate with our existing systems?',
        answer: 'Yes, we specialize in system integration and can connect your new platform with existing databases, APIs, and third-party services.'
      },
      {
        question: 'What ongoing support do you provide after launch?',
        answer: 'We offer maintenance packages including bug fixes, security updates, feature enhancements, and technical support.'
      }
    ]
  },

  'system-integration-apis': {
    id: 'system-integration-apis',
    title: 'System Integration & APIs',
    category: 'Technology & Innovation',
    description: 'Connect and optimize your technology ecosystem with seamless integrations and robust APIs.',
    tagline: 'From siloed systems to unified operations',
    heroImage: '/images/tech-innovation/automated-workflows.png',
    icon: 'IconApi',
    tags: ['system-integration', 'api-development', 'workflow-automation'],
    
    investment: {
      starting: 15000,
      typical: '$15,000 - $35,000',
      timeline: '6-10 weeks'
    },
    
    includes: [
      {
        title: 'System Architecture Analysis',
        description: 'Current system audit and integration architecture planning',
        icon: 'IconSitemap'
      },
      {
        title: 'Custom API Development',
        description: 'RESTful APIs with authentication, rate limiting, and comprehensive documentation',
        icon: 'IconApi'
      },
      {
        title: 'Third-Party Integrations',
        description: 'Connect with CRM, payment systems, marketing tools, and other business applications',
        icon: 'IconPlug'
      },
      {
        title: 'Data Synchronization',
        description: 'Real-time or batch data sync between systems with error handling',
        icon: 'IconRefresh'
      },
      {
        title: 'Webhook Implementation',
        description: 'Event-driven integrations for real-time updates and notifications',
        icon: 'IconBolt'
      },
      {
        title: 'Monitoring & Maintenance',
        description: 'Integration monitoring, error tracking, and ongoing maintenance support',
        icon: 'IconMonitor'
      }
    ],
    
    process: [
      {
        phase: 'Discovery & Planning',
        duration: '1 week',
        description: 'System analysis, integration mapping, and technical planning',
        deliverables: ['System audit', 'Integration map', 'Technical specifications']
      },
      {
        phase: 'API Development',
        duration: '2-3 weeks',
        description: 'Custom API development with authentication and documentation',
        deliverables: ['API endpoints', 'Authentication system', 'API documentation']
      },
      {
        phase: 'Integration Development',
        duration: '2-4 weeks',
        description: 'Third-party integrations and data synchronization implementation',
        deliverables: ['System integrations', 'Data sync workflows', 'Error handling']
      },
      {
        phase: 'Testing & Deployment',
        duration: '1-2 weeks',
        description: 'Integration testing, monitoring setup, and production deployment',
        deliverables: ['Integration testing', 'Monitoring dashboard', 'Production deployment']
      }
    ],
    
    perfectFor: [
      'Businesses with disconnected systems',
      'Companies managing multiple software tools',
      'Organizations needing automated workflows',
      'Teams struggling with manual data entry',
      'Businesses requiring real-time data sync'
    ],
    
    outcomes: [
      {
        metric: '80% Reduction in Manual Tasks',
        description: 'Automated integrations eliminate repetitive manual work'
      },
      {
        metric: '95% Data Accuracy',
        description: 'Automated sync reduces human error and ensures data consistency'
      },
      {
        metric: '60% Faster Operations',
        description: 'Streamlined workflows and real-time updates accelerate business processes'
      }
    ],
    
    relatedServices: ['tech-software', 'platform-development'],
    
    faq: [
      {
        question: 'Which systems can you integrate with?',
        answer: 'We can integrate with most business systems including CRMs, ERPs, payment processors, marketing tools, and custom applications.'
      },
      {
        question: 'How do you handle data security during integration?',
        answer: 'We implement enterprise-grade security including encryption, secure authentication, and compliance with data protection regulations.'
      },
      {
        question: 'What happens if one of the integrated systems changes?',
        answer: 'We build robust integrations with error handling and provide ongoing monitoring and maintenance to adapt to system changes.'
      },
      {
        question: 'Can you create APIs for our existing systems?',
        answer: 'Yes, we can develop custom APIs for existing systems to enable integrations and external access.'
      }
    ]
  },

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
      starting: 20000,
      typical: '$20,000 - $45,000',
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

  'platform-architecture-scaling': {
    id: 'platform-architecture-scaling',
    title: 'Platform Architecture & Scaling',
    category: 'Technology & Innovation',
    description: 'Enterprise-grade platform architecture designed for performance, security, and unlimited scale.',
    tagline: 'From prototype to enterprise platform',
    heroImage: '/images/tech-innovation/ai-enhanced.png',
    icon: 'IconServer',
    tags: ['platform-architecture', 'scalability', 'enterprise-systems'],
    
    investment: {
      starting: 25000,
      typical: '$25,000 - $65,000',
      timeline: '8-14 weeks'
    },
    
    includes: [
      {
        title: 'Architecture Assessment',
        description: 'Current system evaluation and scalability bottleneck identification',
        icon: 'IconAnalytics'
      },
      {
        title: 'Scalable Architecture Design',
        description: 'Microservices, containerization, and cloud-native architecture planning',
        icon: 'IconSitemap'
      },
      {
        title: 'Performance Optimization',
        description: 'Database optimization, caching strategies, and load balancing implementation',
        icon: 'IconGauge'
      },
      {
        title: 'Security Implementation',
        description: 'Enterprise security measures, compliance frameworks, and data protection',
        icon: 'IconShield'
      },
      {
        title: 'DevOps & CI/CD',
        description: 'Automated deployment pipelines, monitoring, and infrastructure as code',
        icon: 'IconGitBranch'
      },
      {
        title: 'Documentation & Training',
        description: 'Architecture documentation and team training for ongoing maintenance',
        icon: 'IconBook'
      }
    ],
    
    process: [
      {
        phase: 'Assessment & Planning',
        duration: '1-2 weeks',
        description: 'Current architecture analysis and scalability strategy development',
        deliverables: ['Architecture assessment', 'Scalability strategy', 'Migration plan']
      },
      {
        phase: 'Architecture Design',
        duration: '2-3 weeks',
        description: 'Detailed architecture design and technology stack selection',
        deliverables: ['System architecture', 'Technology specifications', 'Security framework']
      },
      {
        phase: 'Implementation',
        duration: '4-8 weeks',
        description: 'Infrastructure setup, performance optimization, and security implementation',
        deliverables: ['Scalable infrastructure', 'Performance optimization', 'Security implementation']
      },
      {
        phase: 'Testing & Documentation',
        duration: '1-2 weeks',
        description: 'Load testing, performance validation, and comprehensive documentation',
        deliverables: ['Performance testing', 'System documentation', 'Team training']
      }
    ],
    
    perfectFor: [
      'Growing platforms experiencing performance issues',
      'Companies preparing for rapid user growth',
      'Organizations requiring enterprise-grade security',
      'Businesses planning international expansion',
      'Teams transitioning from prototype to production'
    ],
    
    outcomes: [
      {
        metric: '1000x Traffic Capacity',
        description: 'Scalable architecture handles massive traffic spikes without degradation'
      },
      {
        metric: '99.9% Uptime',
        description: 'Enterprise-grade infrastructure ensures reliable service availability'
      },
      {
        metric: '75% Faster Performance',
        description: 'Optimized architecture dramatically improves system response times'
      }
    ],
    
    relatedServices: ['tech-software', 'platform-development'],
    
    faq: [
      {
        question: 'How do you determine the right architecture for our needs?',
        answer: 'We analyze your current usage, growth projections, and business requirements to design an architecture that scales with your needs.'
      },
      {
        question: 'Can you migrate our existing system without downtime?',
        answer: 'Yes, we design migration strategies that minimize downtime, often using blue-green deployments and gradual transitions.'
      },
      {
        question: 'What cloud platforms do you work with?',
        answer: 'We work with all major cloud providers (AWS, Google Cloud, Azure) and can help you choose the best option for your needs.'
      },
      {
        question: 'How do you ensure security at scale?',
        answer: 'We implement security at every layer including network security, data encryption, identity management, and compliance frameworks.'
      }
    ]
  }
}; 