'use client';

import React from 'react';
import { NextStageNavbar, Footer } from '@/components/layout';
import { DeliverableHero } from './hero';
import { DeliverableServicePagePentagram } from './service-layout';
import DeliverablePerformanceMetrics from './service-layout/DeliverablePerformanceMetrics';
import DeliverableMethodology, { defaultMethodologyItems } from './service-layout/DeliverableMethodology';

// Same data structure as before
interface DeliverableData {
  title: string;
  tagline: string;
  description: string;
  
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
}

interface DeliverableTemplateNewProps {
  deliverable: DeliverableData;
}

// Stage mapping for different deliverables
const getDeliverableStage = (title: string): { stage: 'Foundation' | 'Discovery' | 'Strategy' | 'Launch' | 'Growth', description: string } => {
  const stageMap: Record<string, { stage: 'Foundation' | 'Discovery' | 'Strategy' | 'Launch' | 'Growth', description: string }> = {
    'Brand Identity': { 
      stage: 'Foundation', 
      description: 'Before launching products or campaigns' 
    },
    'Website Design': { 
      stage: 'Launch', 
      description: 'When ready to go to market' 
    },
    'Market Research': { 
      stage: 'Discovery', 
      description: 'Before making strategic decisions' 
    },
    'MVP Development': { 
      stage: 'Launch', 
      description: 'When validating product-market fit' 
    },
    'Competitive Analysis': { 
      stage: 'Discovery', 
      description: 'Before positioning in market' 
    }
  };
  
  return stageMap[title] || { stage: 'Foundation', description: 'Core business foundation' };
};

// Metrics mapping for different deliverables
const getDeliverableMetrics = (title: string) => {
  const metricsMap: Record<string, { successRate: number; avgROI: string; timeToMarket: string; clientRetention: number }> = {
    'Brand Identity': {
      successRate: 94,
      avgROI: '340%',
      timeToMarket: '3.2x faster',
      clientRetention: 89
    },
    'Website Design': {
      successRate: 97,
      avgROI: '280%',
      timeToMarket: '2.8x faster',
      clientRetention: 92
    },
    'Market Research': {
      successRate: 91,
      avgROI: '420%',
      timeToMarket: '4.1x faster',
      clientRetention: 88
    },
    'MVP Development': {
      successRate: 89,
      avgROI: '520%',
      timeToMarket: '2.3x faster',
      clientRetention: 93
    },
    'Competitive Analysis': {
      successRate: 95,
      avgROI: '210%',
      timeToMarket: '3.7x faster',
      clientRetention: 87
    }
  };
  
  return metricsMap[title] || metricsMap['Brand Identity'];
};

export default function DeliverableTemplateNew({ deliverable }: DeliverableTemplateNewProps) {
  const { stage, description } = getDeliverableStage(deliverable.title);
  const metrics = getDeliverableMetrics(deliverable.title);
  
  // For now, use the service page layout - we can add toggle later
  return (
    <div className="min-h-screen">
      <NextStageNavbar />
      
      <DeliverableServicePagePentagram
        data={deliverable}
        stage={stage}
        metrics={metrics}
      />
      
      <Footer />
    </div>
  );
} 