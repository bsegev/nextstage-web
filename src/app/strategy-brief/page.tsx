'use client';

import { useState } from 'react';
import { PremiumLeadCapture } from '@/components/PremiumLeadCapture';
import { EnhancedStrategyBrief } from '@/components/EnhancedStrategyBrief';
import { BusinessOpportunityAnalyzer } from '@/components/BusinessOpportunityAnalyzer';
import { AnalysisTypeSelector } from '@/components/AnalysisTypeSelector';

interface BriefData {
  responses: any[];
  extractedInfo: any;
  submissionId: string;
}

type AnalysisType = 'selector' | 'brief' | 'opportunity';

export default function StrategyBriefPage() {
  const [isComplete, setIsComplete] = useState(false);
  const [briefData, setBriefData] = useState<BriefData | null>(null);
  const [analysisType, setAnalysisType] = useState<AnalysisType>('selector');
  const [searchProvider, setSearchProvider] = useState<'brave' | 'anthropic'>('brave');

  const handleComplete = (responses: any[], extractedInfo: any, submissionId: string) => {
    setBriefData({ responses, extractedInfo, submissionId });
    setIsComplete(true);
    setAnalysisType('selector'); // Show selector first
  };

  const handleSelectBrief = () => {
    setAnalysisType('brief');
  };

  const handleSelectOpportunityAnalysis = (provider: 'brave' | 'anthropic') => {
    setSearchProvider(provider);
    setAnalysisType('opportunity');
  };

  const handleRefine = () => {
    setAnalysisType('selector');
  };

  const handleStartOver = () => {
    setIsComplete(false);
    setBriefData(null);
    setAnalysisType('selector');
  };

  // Show chat until completion
  if (!isComplete || !briefData) {
    return (
      <div className="bg-obsidian min-h-screen">
        <PremiumLeadCapture onComplete={handleComplete} />
      </div>
    );
  }

  // Show analysis type selector
  if (analysisType === 'selector') {
    return (
      <div className="bg-obsidian min-h-screen">
        <AnalysisTypeSelector
          responses={briefData.responses}
          submissionId={briefData.submissionId}
          onSelectBrief={handleSelectBrief}
          onSelectOpportunityAnalysis={handleSelectOpportunityAnalysis}
        />
      </div>
    );
  }

  // Show strategy brief
  if (analysisType === 'brief') {
    return (
      <div className="bg-gradient-to-br from-bone via-white to-accent/5 min-h-screen">
        <EnhancedStrategyBrief 
          responses={briefData.responses}
          extractedInfo={briefData.extractedInfo}
          submissionId={briefData.submissionId}
          onRefine={handleRefine}
          onStartOver={handleStartOver}
        />
      </div>
    );
  }

  // Show business opportunity analysis
  if (analysisType === 'opportunity') {
    return (
      <div className="bg-obsidian min-h-screen">
        <BusinessOpportunityAnalyzer
          responses={briefData.responses}
          submissionId={briefData.submissionId}
          searchProvider={searchProvider}
          onRefine={handleRefine}
          onStartOver={handleStartOver}
        />
      </div>
    );
  }

  return null;
}

 