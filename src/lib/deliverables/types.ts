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