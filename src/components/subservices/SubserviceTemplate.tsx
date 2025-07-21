'use client';

import React, { useMemo } from 'react';
import { NextStageNavbar, Footer } from '@/components/layout';
import { DeliverableHero } from '../deliverables/hero';
import { DeliverableServicePagePentagram } from '../deliverables/service-layout';
import DeliverablePerformanceMetrics from '../deliverables/service-layout/DeliverablePerformanceMetrics';
import DeliverableMethodology, { defaultMethodologyItems } from '../deliverables/service-layout/DeliverableMethodology';
import { SubserviceData } from '@/lib/subservices/types';

interface SubserviceTemplateProps {
  subservice: SubserviceData;
}

// Move mappings outside component to avoid recomputation
const STAGE_MAP: Record<string, { stage: 'Foundation' | 'Discovery' | 'Strategy' | 'Launch' | 'Growth', description: string }> = {
  'Brand Audit & Refresh': { 
    stage: 'Foundation', 
    description: 'Before launching products or campaigns' 
  },
  'Visual Identity Package': { 
    stage: 'Foundation', 
    description: 'Core brand foundation' 
  },
  'Website & Landing Pages': { 
    stage: 'Launch', 
    description: 'When ready to go to market' 
  },
  'Pitch & Marketing Collateral': { 
    stage: 'Launch', 
    description: 'When ready to go to market' 
  },
  'Market Research & Competitive Analysis': { 
    stage: 'Discovery', 
    description: 'Before making strategic decisions' 
  },
  'Go-to-Market Strategy & Launch Plan': { 
    stage: 'Strategy', 
    description: 'When planning market entry' 
  },
  'Positioning & Messaging Development': { 
    stage: 'Strategy', 
    description: 'When defining market position' 
  },
  'Business Strategy & Growth Roadmap': { 
    stage: 'Strategy', 
    description: 'When planning business growth' 
  },
  'Tech Stack Assessment & Optimization Plan': { 
    stage: 'Foundation', 
    description: 'Core technology foundation' 
  },
  'MVP Development & Validation': { 
    stage: 'Launch', 
    description: 'When validating product-market fit' 
  },
  'Workflow Automation Implementation': { 
    stage: 'Growth', 
    description: 'When scaling operations' 
  },
  'Custom GPT Development': { 
    stage: 'Growth', 
    description: 'When optimizing with AI' 
  },
  'Digital Marketing Assessment': { 
    stage: 'Discovery', 
    description: 'When optimizing marketing' 
  },
  'Lead Generation Campaign': { 
    stage: 'Growth', 
    description: 'When scaling customer acquisition' 
  },
  'Content & Copywriting': { 
    stage: 'Strategy', 
    description: 'When defining messaging' 
  },
  'Sales Funnel Development': { 
    stage: 'Growth', 
    description: 'When optimizing conversions' 
  }
};

const METRICS_MAP: Record<string, { successRate: number; avgROI: string; timeToMarket: string; clientRetention: number }> = {
  'Brand Audit & Refresh': {
    successRate: 94,
    avgROI: '340%',
    timeToMarket: '3.2x faster',
    clientRetention: 89
  },
  'Visual Identity Package': {
    successRate: 96,
    avgROI: '380%',
    timeToMarket: '2.8x faster',
    clientRetention: 91
  },
  'Website & Landing Pages': {
    successRate: 97,
    avgROI: '280%',
    timeToMarket: '2.8x faster',
    clientRetention: 92
  },
  'Pitch & Marketing Collateral': {
    successRate: 93,
    avgROI: '320%',
    timeToMarket: '3.1x faster',
    clientRetention: 88
  },
  'Market Research & Competitive Analysis': {
    successRate: 91,
    avgROI: '420%',
    timeToMarket: '4.1x faster',
    clientRetention: 88
  },
  'Go-to-Market Strategy & Launch Plan': {
    successRate: 89,
    avgROI: '450%',
    timeToMarket: '3.8x faster',
    clientRetention: 87
  },
  'Positioning & Messaging Development': {
    successRate: 92,
    avgROI: '380%',
    timeToMarket: '3.5x faster',
    clientRetention: 90
  },
  'Business Strategy & Growth Roadmap': {
    successRate: 88,
    avgROI: '520%',
    timeToMarket: '4.2x faster',
    clientRetention: 86
  },
  'Tech Stack Assessment & Optimization Plan': {
    successRate: 95,
    avgROI: '310%',
    timeToMarket: '2.5x faster',
    clientRetention: 93
  },
  'MVP Development & Validation': {
    successRate: 89,
    avgROI: '520%',
    timeToMarket: '2.3x faster',
    clientRetention: 93
  },
  'Workflow Automation Implementation': {
    successRate: 87,
    avgROI: '480%',
    timeToMarket: '3.0x faster',
    clientRetention: 91
  },
  'Custom GPT Development': {
    successRate: 85,
    avgROI: '550%',
    timeToMarket: '2.8x faster',
    clientRetention: 89
  },
  'Digital Marketing Assessment': {
    successRate: 90,
    avgROI: '360%',
    timeToMarket: '3.3x faster',
    clientRetention: 87
  },
  'Lead Generation Campaign': {
    successRate: 86,
    avgROI: '440%',
    timeToMarket: '2.9x faster',
    clientRetention: 85
  },
  'Content & Copywriting': {
    successRate: 93,
    avgROI: '390%',
    timeToMarket: '3.4x faster',
    clientRetention: 89
  },
  'Sales Funnel Development': {
    successRate: 88,
    avgROI: '470%',
    timeToMarket: '2.7x faster',
    clientRetention: 86
  }
};

const DEFAULT_STAGE = { stage: 'Foundation' as const, description: 'Core business foundation' };
const DEFAULT_METRICS = {
  successRate: 94,
  avgROI: '340%',
  timeToMarket: '3.2x faster',
  clientRetention: 89
};

export default function SubserviceTemplate({ subservice }: SubserviceTemplateProps) {
  // Use useMemo to optimize data transformation
  const { stage, description } = useMemo(() => 
    STAGE_MAP[subservice.title] || DEFAULT_STAGE, 
    [subservice.title]
  );
  
  const metrics = useMemo(() => 
    METRICS_MAP[subservice.title] || DEFAULT_METRICS, 
    [subservice.title]
  );
  
  // Convert SubserviceData to the format expected by DeliverableServicePagePentagram
  const deliverableData = useMemo(() => ({
    title: subservice.title,
    tagline: subservice.tagline,
    description: subservice.description,
    ourApproach: subservice.ourApproach,
    whatItIs: subservice.whatItIs,
    process: subservice.process,
    outcomes: subservice.outcomes,
    discovery: subservice.discovery,
    performanceMetrics: subservice.performanceMetrics,
    methodology: subservice.methodology
  }), [subservice]);
  
  return (
    <div className="min-h-screen">
      <NextStageNavbar />
      
      <DeliverableServicePagePentagram
        data={deliverableData}
        stage={stage}
        metrics={metrics}
      />
      
      <Footer />
    </div>
  );
} 