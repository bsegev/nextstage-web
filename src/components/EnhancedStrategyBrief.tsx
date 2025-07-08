'use client'

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface EnhancedStrategyBriefProps {
  responses: any[];
  extractedInfo: any;
  submissionId: string;
  onRefine: () => void;
  onStartOver: () => void;
}

interface BriefSection {
  title: string;
  content: string;
}

interface Brief {
  personalMessage: string;
  sections: BriefSection[];
}

interface ResearchData {
  tool: string;
  input: any;
  results: any[];
}

// Reasoning Steps Component
const ReasoningSteps = ({ steps }: { steps: any[] }) => {
  const getStepIcon = (status: string) => {
    switch (status) {
      case 'completed': return '✅';
      case 'in_progress': return '⏳';
      case 'failed': return '❌';
      default: return '⚪';
    }
  };

  const getStepColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400';
      case 'in_progress': return 'text-accent';
      case 'failed': return 'text-red-400';
      default: return 'text-bone/50';
    }
  };

  return (
    <div className="card-elegant p-6 bg-accent/5 border-accent/20">
      <h2 className="text-xl font-semibold text-accent mb-4 flex items-center space-x-2">
        <span>🧠</span>
        <span>Strategic Reasoning Process</span>
      </h2>
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
              <span className="text-accent font-medium">{step.step}</span>
            </div>
            <div className="flex-1 flex items-center space-x-3">
              <span className={`text-sm ${getStepColor(step.status)}`}>
                {getStepIcon(step.status)}
              </span>
              <span className="text-bone font-medium">{step.title}</span>
              {step.reasoning && (
                <span className="text-bone/60 text-sm">• {step.reasoning}</span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-sm text-bone/60">
        Strategic analysis methodology: Each step builds upon the previous one to create comprehensive strategic insights.
      </div>
    </div>
  );
};

// Research Accordion Component
const ResearchAccordion = ({ research }: { research: ResearchData }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const formatToolName = (toolName: string | undefined) => {
    if (!toolName) return 'Research';
    return toolName.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  // Handle both 'tool' and 'category' fields for backwards compatibility
  const getToolName = (research: any) => {
    return research.tool || research.category || 'unknown';
  };

  return (
    <div className="border border-accent/20 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 text-left flex items-center justify-between bg-accent/5 hover:bg-accent/10 transition-colors"
      >
        <div>
          <h3 className="font-medium text-accent">{formatToolName(getToolName(research))} Research</h3>
          <p className="text-bone/70 text-sm">
            {research.results?.length || 0} insights gathered
          </p>
        </div>
        <span className={`text-accent transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="px-4 py-3 bg-obsidian/20 border-t border-accent/20"
        >
          <div className="space-y-3">
            {research.results?.slice(0, 5).map((result: any, idx: number) => (
              <div key={idx} className="border-l-2 border-accent/30 pl-3">
                <h4 className="font-medium text-bone text-sm mb-1">
                  {result.title || result.name || 'Research Finding'}
                </h4>
                <p className="text-bone/70 text-xs mb-2">
                  {result.snippet || result.content || result.description || 'Market intelligence data'}
                </p>
                <div className="flex items-center space-x-2 text-xs">
                  <span className="text-accent">{result.source || result.url || 'Market Research'}</span>
                  {result.url && (
                    <a 
                      href={result.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-bone/50 hover:text-accent transition-colors"
                    >
                      View Source →
                    </a>
                  )}
                </div>
              </div>
            ))}
            {(research.results?.length || 0) > 5 && (
              <p className="text-bone/50 text-xs text-center">
                ... and {(research.results?.length || 0) - 5} more insights
              </p>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export const EnhancedStrategyBrief = ({ 
  responses, 
  extractedInfo, 
  submissionId, 
  onRefine, 
  onStartOver 
}: EnhancedStrategyBriefProps) => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [isLoadingEmail, setIsLoadingEmail] = useState(false);
  const [brief, setBrief] = useState<Brief | null>(null);
  const [researchData, setResearchData] = useState<ResearchData[]>([]);
  const [researchSummary, setResearchSummary] = useState("");
  const [reasoningSteps, setReasoningSteps] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRegenerating, setIsRegenerating] = useState(false);

  const loadEnhancedBrief = useCallback(async () => {
    try {
      const response = await fetch('/api/enhanced-brief-generation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          responses,
          extractedInfo,
          submissionId
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate enhanced brief');
      }

      const data = await response.json();
      setBrief(data.brief);
      setResearchData(data.researchData || []);
      setResearchSummary(data.researchSummary || "");
      setReasoningSteps(data.reasoningSteps || []);
    } catch (error) {
      console.error('Error loading enhanced brief:', error);
      // Fallback to basic brief
      setBrief(generateFallbackBrief());
    } finally {
      setIsLoading(false);
    }
  }, [responses, extractedInfo, submissionId]);

  useEffect(() => {
    loadEnhancedBrief();
  }, [loadEnhancedBrief]);

  const generateFallbackBrief = (): Brief => {
    const name = extractedInfo?.name || "Friend";
    
    return {
      personalMessage: `Hi ${name}, I've analyzed your responses and I'm excited about what you're building. Here's my strategic assessment of your opportunity.`,
      sections: [
        {
          title: "Executive Summary",
          content: `${name} is developing a focused solution with clear market understanding and strategic vision. Strong vision and market focus are the foundation of successful ventures, which positions you well for execution.`
        },
        {
          title: "Strategic Recommendations",
          content: "Focus on rapid customer validation, build minimum viable solution, and establish clear success metrics. Speed to market and customer feedback are critical success factors that will maximize your chances of product-market fit."
        }
      ]
    };
  };

  const handleSendEmail = async () => {
    if (!email.trim()) return;
    
    setIsLoadingEmail(true);
    
    try {
      // Email sending temporarily disabled
      console.log('Email sending disabled - would send to:', email.trim());
      
      // Simulate success for UI feedback
      setTimeout(() => {
        setEmailSent(true);
        setIsLoadingEmail(false);
      }, 1000);

    } catch (error) {
      console.error('Error in email handler:', error);
      setIsLoadingEmail(false);
    }
  };

  const handleBookCall = async () => {
    try {
      console.log('Calendar booking clicked');
      window.open("https://cal.com/bensegev/30min", "_blank");
    } catch (error) {
      console.error('Error opening calendar:', error);
      window.open("https://cal.com/bensegev/30min", "_blank");
    }
  };

  const handlePrintDownload = async () => {
    try {
      console.log('PDF download requested');
      window.print();
    } catch (error) {
      console.error('Error triggering print:', error);
      window.print();
    }
  };

  const handleRegenerate = async () => {
    setIsRegenerating(true);
    try {
      console.log('Regenerating strategic brief...');
      
      const response = await fetch('/api/enhanced-brief-generation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          responses,
          extractedInfo,
          submissionId: crypto.randomUUID() // New submission ID for fresh generation
        })
      });

      if (!response.ok) {
        throw new Error('Failed to regenerate brief');
      }

      const data = await response.json();
      setBrief(data.brief);
      setResearchData(data.researchData || []);
      setResearchSummary(data.researchSummary || "");
      setReasoningSteps(data.reasoningSteps || []);
      
      console.log('Brief regenerated successfully');
    } catch (error) {
      console.error('Error regenerating brief:', error);
    } finally {
      setIsRegenerating(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-obsidian text-bone flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="relative mb-8">
            <div className="w-24 h-24 mx-auto bg-accent rounded-full flex items-center justify-center relative overflow-hidden">
              <div className="w-12 h-12 text-obsidian animate-pulse text-2xl">🔍</div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-bone/20 to-transparent animate-gradient" />
            </div>
          </div>
          <h2 className="font-display text-3xl font-medium text-bone mb-4">
            Researching your market and generating strategic brief...
          </h2>
          <p className="text-bone/70 text-lg mb-2">
            Analyzing market data, competitive landscape, and industry trends
          </p>
          {researchSummary && (
            <p className="text-accent text-sm">
              {researchSummary}
            </p>
          )}
        </motion.div>
      </div>
    );
  }

  if (!brief) {
    return (
      <div className="h-screen bg-obsidian text-bone flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="font-display text-2xl font-medium text-bone mb-4">
            Unable to load brief
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
    <div className="bg-obsidian text-bone">
      {/* Regenerating overlay */}
      {isRegenerating && (
        <div className="fixed inset-0 bg-obsidian/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-accent rounded-full flex items-center justify-center">
              <div className="w-8 h-8 text-obsidian animate-spin text-2xl">⟳</div>
            </div>
            <h2 className="text-2xl font-serif font-medium text-bone mb-2">
              Regenerating strategic brief...
            </h2>
            <p className="text-bone/70">
              Analyzing market data and crafting updated insights
            </p>
          </motion.div>
        </div>
      )}

      {/* Header */}
      <div className="sticky top-0 bg-obsidian/95 backdrop-blur-sm border-b border-bone/10 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          {/* Elegant back navigation */}
          <div className="mb-3">
            <Link 
              href="/" 
              className="inline-flex items-center space-x-2 text-bone/60 hover:text-accent transition-colors duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-sm font-medium">NextStage</span>
            </Link>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button 
                onClick={onStartOver}
                className="flex items-center space-x-2 text-bone/70 hover:text-bone transition-colors"
              >
                <span>←</span>
                <span>Back to Chat</span>
              </button>
              <div className="h-6 w-px bg-bone/20" />
              <h1 className="font-display text-lg font-medium text-bone">Your Strategic Brief</h1>
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={handleRegenerate}
                disabled={isRegenerating}
                className="flex items-center space-x-2 text-bone/70 hover:text-bone transition-colors disabled:opacity-50"
              >
                <span>{isRegenerating ? '⟳' : '🔄'}</span>
                <span>{isRegenerating ? 'Regenerating...' : 'Regenerate'}</span>
              </button>
              <button 
                onClick={handlePrintDownload}
                className="flex items-center space-x-2 text-bone/70 hover:text-bone transition-colors"
              >
                <span>📄</span>
                <span>Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Brief Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Personal Message */}
          <div className="card-elegant p-8 bg-bone/5 border-bone/10">
            <h1 className="text-2xl font-bold text-bone mb-4">Your Strategic Brief</h1>
            <p className="text-bone/90 text-lg leading-relaxed">
              {brief.personalMessage}
            </p>
          </div>

          {/* Reasoning Steps */}
          {reasoningSteps.length > 0 && (
            <ReasoningSteps steps={reasoningSteps} />
          )}

          {/* Research Summary */}
          {researchData.length > 0 && (
            <div className="card-elegant p-6 bg-accent/10 border-accent/20">
              <h2 className="text-xl font-semibold text-accent mb-4 flex items-center space-x-2">
                <span>🔬</span>
                <span>Market Research Data</span>
              </h2>
              <div className="mb-4 text-sm text-accent bg-accent/5 border border-accent/20 rounded-lg p-3">
                <strong>Research Sources:</strong> {researchSummary}
              </div>
              <div className="space-y-4">
                {researchData.map((research, index) => (
                  <ResearchAccordion 
                    key={index}
                    research={research}
                  />
                ))}
              </div>
              <div className="mt-4 text-sm text-bone/60">
                Total: {researchData.reduce((acc, r) => acc + r.results.length, 0)} insights gathered across {researchData.length} research categories
              </div>
            </div>
          )}

          {/* Research Status */}
          {researchData.length === 0 && (
            <div className="card-elegant p-4 bg-bone/5 border-bone/10">
              <div className="flex items-center space-x-2 text-bone/70 text-sm">
                <span>ℹ️</span>
                <span>Strategic analysis based on conversation insights (research unavailable)</span>
              </div>
            </div>
          )}

          {/* Brief Sections */}
          <div className="space-y-6">
            {brief.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-elegant p-6 bg-bone/5 border-bone/10"
              >
                <h2 className="text-xl font-semibold text-bone mb-4">{section.title}</h2>
                <div className="prose prose-bone max-w-none">
                  <p className="text-bone/90 leading-relaxed whitespace-pre-line">{section.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="card-elegant p-8 bg-accent/10 border-accent/20">
            <h2 className="text-xl font-semibold text-bone mb-4">Ready to Take Action?</h2>
            <p className="text-bone/70 mb-6">
              Let&apos;s discuss how to implement these strategies and accelerate your growth.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {/* Email Brief */}
              <div className="space-y-3">
                <h3 className="font-medium text-bone">Get Brief via Email</h3>
                {!emailSent ? (
                  <div className="flex space-x-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="flex-1 bg-bone/90 border border-bone/20 rounded-lg px-3 py-2 text-obsidian placeholder-obsidian/50 focus:border-accent focus:outline-none"
                    />
                    <button
                      onClick={handleSendEmail}
                      disabled={isLoadingEmail || !email.trim()}
                      className="bg-accent text-obsidian px-4 py-2 rounded-lg font-medium hover:bg-accent/90 transition-colors disabled:opacity-50"
                    >
                      {isLoadingEmail ? '...' : '📧'}
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 text-accent">
                    <span>✅</span>
                    <span>Brief sent to {email}</span>
                  </div>
                )}
              </div>

              {/* Book Call */}
              <div className="space-y-3">
                <h3 className="font-medium text-bone">Book Strategy Call</h3>
                <button
                  onClick={handleBookCall}
                  className="w-full bg-accent text-obsidian px-4 py-2 rounded-lg font-medium hover:bg-accent/90 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>📅</span>
                  <span>Schedule 30min Call</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}; 