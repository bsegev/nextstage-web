export interface SubserviceData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  service: 'branding-design' | 'strategy-planning' | 'tech-software' | 'marketing-growth';
  slug: string;
  
  ourApproach: {
    headline: string;
    description: string;
    keyPrinciple: string;
  };
  
  whatItIs: {
    realDefinition: string;
    notJust: string;
    butAlso: string;
  };
  
  process: {
    phase: string;
    whatWeDo: string;
    whatEmerges: string;
  }[];
  
  outcomes: {
    primary: string;
    secondary: string;
    longTerm: string;
  };
  
  discovery: {
    price: string;
    duration: string;
    whatWeExplore: string[];
    whatYouGet: string[];
  };
  
  performanceMetrics?: {
    title: string;
    description: string;
    metric: {
      value: string;
      number: number;
      label: string;
      description: string;
      icon: any;
    };
    bottomMessage: string;
  };
  
  methodology?: {
    title: string;
    subtitle?: string;
    items: {
      title: string;
      description: string;
      icon: any;
      details: {
        overview: string;
        whatYouGet: string[];
        process: string[];
        outcome: string;
      };
    }[];
  };
} 