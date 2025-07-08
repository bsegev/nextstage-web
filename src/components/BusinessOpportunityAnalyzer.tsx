'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, TrendingUp, Target, Shield, Lightbulb } from 'lucide-react';
import { UserResponse } from '@/features/strategy-chat/types';

interface OpportunityScore {
  marketMechanics: number;
  competitivePositioning: number;
  businessModelViability: number;
  strategicTiming: number;
  total: number;
}

interface BusinessInfo {
  name: string;
  vision: string;
  audience: string;
  problem: string;
  success: string;
  timeline: string;
  budget: string;
  additional: string;
  industry: string;
}

interface OpportunityAnalysis {
  personalMessage: string;
  businessInfo: BusinessInfo;
  opportunityScore: OpportunityScore;
  sections: {
    title: string;
    content: string;
    reasoning: string;
  }[];
  researchData: any[];
  searchCost: number;
  searchProvider: string;
  searchQueries?: string[];
  searchMetrics?: {
    provider: string;
    cost: number;
    successRate: number;
    queriesExecuted: number;
  };
}

interface BusinessOpportunityAnalyzerProps {
  responses: UserResponse[];
  submissionId: string;
  searchProvider?: 'brave' | 'anthropic';
  onRefine: () => void;
  onStartOver: () => void;
}

export const BusinessOpportunityAnalyzer = ({ 
  responses, 
  submissionId, 
  searchProvider = 'brave',
  onRefine, 
  onStartOver 
}: BusinessOpportunityAnalyzerProps) => {
  const [analysis, setAnalysis] = useState<OpportunityAnalysis | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [isLoadingEmail, setIsLoadingEmail] = useState(false);
  const [currentProvider, setCurrentProvider] = useState<'brave' | 'anthropic'>(searchProvider);
  const [showResearch, setShowResearch] = useState(false);
  const [loadingStage, setLoadingStage] = useState<'analyzing' | 'researching' | 'compiling'>('analyzing');
  const [loadingProgress, setLoadingProgress] = useState(0);

  const loadAnalysis = useCallback(async () => {
    setIsLoading(true);
    setLoadingStage('analyzing');
    setLoadingProgress(0);

    // Simulate progressive loading stages
    const progressTimer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev < 25) return prev + 2;
        if (prev < 85) return prev + 1;
        return prev;
      });
    }, 300);

    // Stage transitions
    setTimeout(() => setLoadingStage('researching'), 2000);
    setTimeout(() => {
      setLoadingStage('compiling');
      setLoadingProgress(85);
    }, 12000);

    try {
      const response = await fetch('/api/analyze-opportunity', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          responses,
          submissionId,
          searchProvider: currentProvider
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate analysis');
      }

      const data = await response.json();
      
      // Complete the progress
      clearInterval(progressTimer);
      setLoadingProgress(100);
      
      // Small delay before showing results
      setTimeout(() => {
        setAnalysis(data.analysis);
        console.log('Analysis loaded:', data);
        setIsLoading(false);
      }, 800);
      
    } catch (error) {
      console.error('Error loading analysis:', error);
      clearInterval(progressTimer);
      setIsLoading(false);
    }
  }, [responses, submissionId, currentProvider]);

  useEffect(() => {
    loadAnalysis();
  }, [loadAnalysis]);

  const handleSendEmail = async () => {
    if (!email.trim()) return;
    
    setIsLoadingEmail(true);
    try {
      // Mock email sending - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      setEmailSent(true);
      console.log(`Mock: Email would be sent to ${email}`);
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsLoadingEmail(false);
    }
  };

  const handleBookCall = () => {
    console.log('Calendar booking clicked');
    window.open("https://cal.com/bensegev/30min", "_blank");
  };

  const handleDownload = () => {
    console.log('PDF download requested');
    window.print();
  };

  const switchProvider = (provider: 'brave' | 'anthropic') => {
    if (provider !== currentProvider) {
      setCurrentProvider(provider);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (title: string) => {
    switch (title) {
      case 'Market Mechanics': return <TrendingUp className="w-5 h-5" />;
      case 'Competitive Positioning': return <Target className="w-5 h-5" />;
      case 'Business Model Viability': return <Lightbulb className="w-5 h-5" />;
      case 'Strategic Timing': return <Shield className="w-5 h-5" />;
      default: return <TrendingUp className="w-5 h-5" />;
    }
  };

  if (isLoading) {
    const getLoadingMessage = () => {
      switch (loadingStage) {
        case 'analyzing':
          return {
            title: "Understanding Your Vision",
            subtitle: "Analyzing your business concept and extracting key insights",
            detail: "Processing your inputs and identifying strategic opportunities"
          };
        case 'researching':
          return {
            title: "Conducting Market Intelligence",
            subtitle: "Researching industry trends, competition, and market dynamics",
            detail: `Gathering real-time data using ${currentProvider === 'brave' ? 'Brave Search API' : 'Anthropic Web Search'}`
          };
        case 'compiling':
          return {
            title: "Crafting Strategic Assessment",
            subtitle: "Synthesizing research into actionable business intelligence",
            detail: "Generating opportunity scores and strategic recommendations"
          };
        default:
          return {
            title: "Analyzing Your Opportunity",
            subtitle: "Building comprehensive strategic analysis",
            detail: "Processing business intelligence"
          };
      }
    };

    const message = getLoadingMessage();

    return (
      <div className="min-h-screen bg-obsidian text-bone flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-lg"
        >
          {/* Animated Icon */}
          <div className="relative mb-8">
            <div className="w-24 h-24 mx-auto bg-accent rounded-full flex items-center justify-center relative overflow-hidden">
              {loadingStage === 'analyzing' && <TrendingUp className="w-12 h-12 text-obsidian animate-pulse" />}
              {loadingStage === 'researching' && <Target className="w-12 h-12 text-obsidian animate-spin" />}
              {loadingStage === 'compiling' && <Lightbulb className="w-12 h-12 text-obsidian animate-bounce" />}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-bone/20 to-transparent animate-gradient" />
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-obsidian/60 rounded-full h-3 overflow-hidden mb-6">
            <motion.div 
              className="bg-accent h-3 rounded-full transition-all duration-500 ease-out"
              initial={{ width: 0 }}
              animate={{ width: `${loadingProgress}%` }}
            />
          </div>

          {/* Main Title */}
          <motion.h2 
            key={loadingStage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl font-medium text-bone mb-4"
          >
            {message.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            key={`${loadingStage}-subtitle`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-bone/80 text-lg mb-3"
          >
            {message.subtitle}
          </motion.p>

          {/* Detail */}
          <motion.p 
            key={`${loadingStage}-detail`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-accent text-sm"
          >
            {message.detail}
          </motion.p>

          {/* Progress Text */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-bone/60 text-sm"
          >
            {loadingProgress}% complete
          </motion.div>
        </motion.div>
      </div>
    );
  }

  if (!analysis) {
    return (
      <div className="min-h-screen bg-obsidian text-bone flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="font-display text-2xl font-medium text-bone mb-4">
            Unable to load analysis
          </h2>
          <button 
            onClick={onRefine}
            className="bg-accent text-obsidian px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-obsidian text-bone">
      {/* Header */}
      <div className="bg-obsidian/95 backdrop-blur-sm border-b border-accent/20 px-4 sm:px-6 py-4 sticky top-0 z-10 print:hidden">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4 min-w-0 flex-1">
              <button
                onClick={onRefine}
                className="flex items-center space-x-2 text-bone/70 hover:text-bone transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back to Chat</span>
                <span className="sm:hidden">Back</span>
              </button>
              <button
                onClick={onStartOver}
                className="text-bone/60 hover:text-bone transition-colors whitespace-nowrap"
              >
                Start Over
              </button>
              <div className="h-6 w-px bg-accent/20 hidden sm:block" />
              <h1 className="font-display text-lg sm:text-xl font-medium text-bone truncate">
                Business Opportunity Analysis
              </h1>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto">
              {/* Provider Toggle */}
              <div className="flex items-center space-x-1 bg-accent/10 rounded-lg p-1 flex-1 sm:flex-none">
                <button
                  onClick={() => switchProvider('brave')}
                  className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm transition-colors whitespace-nowrap ${
                    currentProvider === 'brave' 
                      ? 'bg-accent text-obsidian' 
                      : 'text-bone/60 hover:text-bone'
                  }`}
                >
                  Brave
                </button>
                <button
                  onClick={() => switchProvider('anthropic')}
                  className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm transition-colors whitespace-nowrap ${
                    currentProvider === 'anthropic' 
                      ? 'bg-accent text-obsidian' 
                      : 'text-bone/60 hover:text-bone'
                  }`}
                >
                  Anthropic
                </button>
              </div>
              <button
                onClick={handleDownload}
                className="flex items-center space-x-2 bg-accent/10 hover:bg-accent/20 px-3 sm:px-4 py-2 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">
        {/* Personal Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-accent/10 border border-accent/20 rounded-2xl p-6"
        >
          <p className="text-bone text-lg leading-relaxed">
            {analysis.personalMessage}
          </p>
        </motion.div>

        {/* Research Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="bg-accent/5 border border-accent/10 rounded-2xl p-6"
        >
          <button
            onClick={() => setShowResearch(!showResearch)}
            className="flex items-center justify-between w-full text-left"
          >
            <h3 className="font-display text-lg font-medium text-bone">
              Market Research Conducted
            </h3>
            <div className="flex items-center space-x-2">
              <span className="text-bone/60 text-sm">
                {analysis.searchMetrics?.successRate ? 
                  `${(analysis.searchMetrics.successRate * 100).toFixed(0)}% success rate` : 
                  'Research completed'
                }
              </span>
              <div className={`transform transition-transform ${showResearch ? 'rotate-180' : ''}`}>
                <svg className="w-4 h-4 text-bone/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </button>
          
          {showResearch && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 pt-4 border-t border-accent/10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                <div className="bg-accent/5 rounded-lg p-3 sm:p-4">
                  <h4 className="text-bone font-medium mb-2 text-sm sm:text-base">Search Provider</h4>
                  <p className="text-bone/70 text-xs sm:text-sm">
                    {analysis.searchProvider === 'brave' ? 'Brave Search API' : 'Anthropic Web Search'}
                  </p>
                </div>
                <div className="bg-accent/5 rounded-lg p-3 sm:p-4">
                  <h4 className="text-bone font-medium mb-2 text-sm sm:text-base">Research Cost</h4>
                  <p className="text-bone/70 text-xs sm:text-sm">
                    ${analysis.searchCost.toFixed(3)}
                  </p>
                </div>
              </div>
              
              {analysis.searchQueries && analysis.searchQueries.length > 0 && (
                <div>
                  <h4 className="text-bone font-medium mb-3">Strategic Search Queries</h4>
                  <div className="space-y-2">
                    {analysis.searchQueries.map((query, index) => (
                      <div key={index} className="bg-accent/5 rounded-lg p-3">
                        <p className="text-bone/80 text-sm">
                          <span className="text-accent font-medium">#{index + 1}:</span> {query}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {analysis.searchMetrics && (
                <div className="mt-4 pt-4 border-t border-accent/10">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center">
                    <div>
                      <p className="text-bone/50 text-xs">Queries</p>
                      <p className="text-bone font-medium text-sm">{analysis.searchMetrics.queriesExecuted}</p>
                    </div>
                    <div>
                      <p className="text-bone/50 text-xs">Success Rate</p>
                      <p className="text-bone font-medium text-sm">{(analysis.searchMetrics.successRate * 100).toFixed(0)}%</p>
                    </div>
                    <div>
                      <p className="text-bone/50 text-xs">Provider</p>
                      <p className="text-bone font-medium text-sm">{analysis.searchMetrics.provider}</p>
                    </div>
                    <div>
                      <p className="text-bone/50 text-xs">Cost</p>
                      <p className="text-bone font-medium text-sm">${analysis.searchMetrics.cost.toFixed(3)}</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* Opportunity Score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-accent/5 border border-accent/10 rounded-2xl p-4 sm:p-6"
        >
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-bone mb-4 sm:mb-6">
            Opportunity Score: {analysis.opportunityScore.total}/100
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            {[
              { label: 'Market Mechanics', score: analysis.opportunityScore.marketMechanics },
              { label: 'Competitive Positioning', score: analysis.opportunityScore.competitivePositioning },
              { label: 'Business Model Viability', score: analysis.opportunityScore.businessModelViability },
              { label: 'Strategic Timing', score: analysis.opportunityScore.strategicTiming }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 sm:p-4 bg-accent/5 rounded-lg">
                <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                  <div className="text-accent flex-shrink-0">
                    {getScoreIcon(item.label)}
                  </div>
                  <span className="text-bone text-sm sm:text-base truncate">{item.label}</span>
                </div>
                <div className={`text-lg sm:text-xl font-bold ${getScoreColor(item.score)} flex-shrink-0`}>
                  {item.score}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Analysis Sections */}
        <div className="space-y-4 sm:space-y-6">
          {analysis.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-accent/5 border border-accent/10 rounded-2xl p-4 sm:p-6"
            >
              <h3 className="font-display text-lg sm:text-xl font-semibold text-bone mb-3 sm:mb-4">
                {section.title}
              </h3>
              <p className="text-bone/90 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                {section.content}
              </p>
              <div className="border-t border-accent/10 pt-3 sm:pt-4">
                <p className="text-bone/60 text-xs sm:text-sm italic">
                  <strong>Strategic Insight:</strong> {section.reasoning}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-accent/10 border border-accent/20 rounded-2xl p-8 text-center"
        >
          <h3 className="font-display text-2xl font-medium text-bone mb-4">
            Ready to Execute This Strategy?
          </h3>
          <p className="text-bone/80 mb-6 max-w-2xl mx-auto">
            This analysis gives you the strategic foundation. Now let's discuss how NextStage can help you execute these recommendations and accelerate your path to market success.
          </p>
          
          <div className="flex flex-col gap-4 justify-center items-center">
            <button
              onClick={handleBookCall}
              className="bg-accent text-obsidian px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors w-full sm:w-auto"
            >
              Book Strategy Call
            </button>
            
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-accent/10 border border-accent/20 rounded-lg px-4 py-2 text-bone placeholder-bone/50 focus:outline-none focus:border-accent/40 w-full sm:w-auto"
              />
              <button
                onClick={handleSendEmail}
                disabled={isLoadingEmail || !email.trim()}
                className="bg-accent/20 text-bone px-4 py-2 rounded-lg hover:bg-accent/30 transition-colors disabled:opacity-50 w-full sm:w-auto whitespace-nowrap"
              >
                {isLoadingEmail ? 'Sending...' : 'Email Analysis'}
              </button>
            </div>
          </div>
          
          {emailSent && (
            <p className="text-accent mt-4">
              Analysis sent! Check your inbox for the full report.
            </p>
          )}
        </motion.div>

        {/* Research Attribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-center text-bone/40 text-sm"
        >
          <p>
            Analysis powered by {analysis.searchProvider === 'brave' ? 'Brave Search API' : 'Anthropic Web Search'} • 
            Research cost: ${analysis.searchCost.toFixed(3)} • 
            Generated by NextStage AI
          </p>
        </motion.div>
      </div>
    </div>
  );
}; 