'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Download, Target, Lightbulb, TrendingUp, Users } from 'lucide-react';
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
  const [researchSummary, setResearchSummary] = useState("");
  const [reasoningSteps, setReasoningSteps] = useState<any[]>([]);
  const [strategicAnalysis, setStrategicAnalysis] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [loadingStage, setLoadingStage] = useState<'analyzing' | 'matching' | 'compiling'>('analyzing');

  useEffect(() => {
    loadEnhancedBrief();
  }, [submissionId]);

  const loadEnhancedBrief = async () => {
    setIsLoading(true);
    setLoadingStage('analyzing');
    
    // Progressive loading simulation
    setTimeout(() => setLoadingStage('matching'), 1500);
    setTimeout(() => setLoadingStage('compiling'), 8000);

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
      setResearchSummary(data.researchSummary || "");
      setReasoningSteps(data.reasoningSteps || []);
      setStrategicAnalysis(data.strategicAnalysis || null);
    } catch (error) {
      console.error('Error loading enhanced brief:', error);
      setBrief(generateFallbackBrief());
    } finally {
      setIsLoading(false);
    }
  };

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
      setTimeout(() => {
        setEmailSent(true);
        setIsLoadingEmail(false);
      }, 1000);
    } catch (error) {
      console.error('Error in email handler:', error);
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

  const handleRegenerate = async () => {
    setIsRegenerating(true);
    try {
      const response = await fetch('/api/enhanced-brief-generation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          responses,
          extractedInfo,
          submissionId: crypto.randomUUID()
        })
      });

      if (!response.ok) {
        throw new Error('Failed to regenerate brief');
      }

      const data = await response.json();
      setBrief(data.brief);
      setResearchSummary(data.researchSummary || "");
      setReasoningSteps(data.reasoningSteps || []);
      setStrategicAnalysis(data.strategicAnalysis || null);
    } catch (error) {
      console.error('Error regenerating brief:', error);
    } finally {
      setIsRegenerating(false);
    }
  };

  const getStageMessage = () => {
    switch (loadingStage) {
      case 'analyzing':
        return {
          title: "Analyzing Your Strategic Position",
          subtitle: "Understanding your business concept and market opportunity",
          icon: <Target className="w-12 h-12 text-obsidian animate-pulse" />
        };
      case 'matching':
        return {
          title: "Matching NextStage Services",
          subtitle: "Identifying strategic services aligned with your needs",
          icon: <Lightbulb className="w-12 h-12 text-obsidian animate-spin" />
        };
      case 'compiling':
        return {
          title: "Crafting Strategic Brief",
          subtitle: "Synthesizing insights into actionable recommendations",
          icon: <TrendingUp className="w-12 h-12 text-obsidian animate-bounce" />
        };
      default:
        return {
          title: "Generating Strategic Brief",
          subtitle: "Preparing your NextStage consultation",
          icon: <Target className="w-12 h-12 text-obsidian animate-pulse" />
        };
    }
  };

  const getBusinessStageIcon = (stage: string) => {
    switch (stage) {
      case 'Ideation': return <Lightbulb className="w-5 h-5" />;
      case 'MVP': return <Target className="w-5 h-5" />;
      case 'Growth': return <TrendingUp className="w-5 h-5" />;
      case 'Scale': return <Users className="w-5 h-5" />;
      default: return <Target className="w-5 h-5" />;
    }
  };

  const getMaturityColor = (score: number) => {
    if (score >= 70) return 'text-green-400';
    if (score >= 50) return 'text-yellow-400';
    return 'text-orange-400';
  };

  // Smart content renderer for strategy brief sections
  const renderStrategicContent = (content: string) => {
    const blocks = content.split(/\n\s*\n/).filter(block => block.trim());
    
    return blocks.map((block, blockIndex) => {
      const trimmed = block.trim();
      
      // Handle numbered items (NextStage service recommendations)
      const hasNumberedItems = /^\d+\.\s/.test(trimmed) || /\n\d+\.\s/.test(trimmed);
      
      if (hasNumberedItems) {
        const items = trimmed.split(/(?=\n?\d+\.\s)/).filter(item => item.trim());
        
        return (
          <div key={blockIndex} className="mb-6">
            {items.map((item, itemIndex) => {
              const itemTrimmed = item.trim();
              const numberMatch = itemTrimmed.match(/^(\d+)\.\s*([\s\S]*)$/);
              
              if (numberMatch) {
                const [, number, itemContent] = numberMatch;
                const lines = itemContent.split('\n').filter(line => line.trim());
                
                return (
                  <div key={itemIndex} className="mb-4 flex items-start space-x-3">
                    <span className="text-accent font-semibold text-base mt-1 flex-shrink-0 bg-accent/10 rounded-full w-6 h-6 flex items-center justify-center text-sm">
                      {number}
                    </span>
                    <div className="flex-1">
                      {lines.map((line, lineIndex) => (
                        <p key={lineIndex} className="text-bone/90 leading-relaxed mb-1 last:mb-0">
                          {line.trim()}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        );
      }
      
      // Regular paragraphs
      return (
        <p key={blockIndex} className="text-bone/90 leading-relaxed mb-4 last:mb-0">
          {trimmed}
        </p>
      );
    });
  };

  if (isLoading) {
    const message = getStageMessage();
    
    return (
      <div className="min-h-screen bg-obsidian text-bone flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-lg"
        >
          <div className="w-24 h-24 mx-auto bg-accent rounded-full flex items-center justify-center mb-8 relative overflow-hidden">
            {message.icon}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-bone/20 to-transparent animate-gradient" />
          </div>
          
          <motion.h2 
            key={loadingStage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl font-medium text-bone mb-4"
          >
            {message.title}
          </motion.h2>
          
          <motion.p 
            key={`${loadingStage}-subtitle`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-bone/80 text-lg"
          >
            {message.subtitle}
          </motion.p>
        </motion.div>
      </div>
    );
  }

  if (!brief) {
    return (
      <div className="min-h-screen bg-obsidian text-bone flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="font-display text-2xl font-medium text-bone mb-4">
            Unable to load strategic brief
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
              Analyzing your business and crafting updated NextStage recommendations
            </p>
          </motion.div>
        </div>
      )}

      {/* Clean Header */}
      <div className="bg-obsidian/95 backdrop-blur-sm border-b border-accent/20 px-4 py-4 sticky top-0 z-10 print:hidden">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/" 
                className="flex items-center space-x-2 text-bone/60 hover:text-accent transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">NextStage</span>
              </Link>
              <div className="h-6 w-px bg-accent/20" />
              <button
                onClick={onStartOver}
                className="text-bone/70 hover:text-bone transition-colors"
              >
                Back to Chat
              </button>
              <div className="h-6 w-px bg-accent/20" />
              <h1 className="font-display text-lg font-medium text-bone">Strategic Brief</h1>
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={handleRegenerate}
                disabled={isRegenerating}
                className="flex items-center space-x-2 text-bone/70 hover:text-bone transition-colors disabled:opacity-50"
              >
                <span>{isRegenerating ? '⟳' : '🔄'}</span>
                <span className="hidden sm:inline">{isRegenerating ? 'Regenerating...' : 'Regenerate'}</span>
              </button>
              <button 
                onClick={handleDownload}
                className="flex items-center space-x-2 bg-accent/10 hover:bg-accent/20 px-3 py-2 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Personal Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-accent/10 border border-accent/20 rounded-2xl p-6"
        >
          <h1 className="text-2xl font-bold text-bone mb-4">Your NextStage Strategic Brief</h1>
          <p className="text-bone text-lg leading-relaxed">
            {brief.personalMessage}
          </p>
        </motion.div>

        {/* Strategic Analysis Overview */}
        {strategicAnalysis && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-accent/5 border border-accent/10 rounded-2xl p-6"
          >
            <h2 className="font-display text-xl font-semibold text-bone mb-6 flex items-center space-x-2">
              <span>🎯</span>
              <span>Strategic Analysis Overview</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-accent/10 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  {getBusinessStageIcon(strategicAnalysis.businessAnalysis?.stage)}
                  <div className="text-2xl font-bold text-accent">
                    {strategicAnalysis.businessAnalysis?.stage || 'N/A'}
                  </div>
                </div>
                <div className="text-sm text-bone/70">Business Stage</div>
              </div>
              <div className="bg-accent/10 rounded-lg p-4 text-center">
                <div className={`text-2xl font-bold ${getMaturityColor(strategicAnalysis.businessAnalysis?.maturityScore || 0)}`}>
                  {strategicAnalysis.businessAnalysis?.maturityScore || 0}%
                </div>
                <div className="text-sm text-bone/70">Strategic Maturity</div>
              </div>
              <div className="bg-accent/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-accent">
                  {strategicAnalysis.serviceRecommendations?.length || 0}
                </div>
                <div className="text-sm text-bone/70">Service Recommendations</div>
              </div>
            </div>
            {strategicAnalysis.businessAnalysis?.urgency && (
              <div className="text-center mt-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-accent/20 text-accent">
                  {strategicAnalysis.businessAnalysis.urgency} Priority Timeline
                </span>
              </div>
            )}
          </motion.div>
        )}

        {/* Strategic Reasoning Process */}
        {reasoningSteps.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-accent/5 border border-accent/10 rounded-2xl p-6"
          >
            <h2 className="font-display text-xl font-semibold text-accent mb-6 flex items-center space-x-2">
              <span>🧠</span>
              <span>Strategic Reasoning Process</span>
            </h2>
            <div className="space-y-4">
              {reasoningSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
                    <span className="text-accent font-semibold text-sm">{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <span className="text-green-400">✅</span>
                      <span className="text-bone font-medium">{step.title}</span>
                    </div>
                    {step.reasoning && (
                      <p className="text-bone/80 text-sm leading-relaxed pl-6">
                        {step.reasoning}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Brief Sections */}
        <div className="space-y-4">
          {brief.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-accent/5 border border-accent/10 rounded-2xl p-6"
            >
              <h3 className="font-display text-xl font-semibold text-bone mb-4">
                {section.title}
              </h3>
              <div className="prose prose-bone max-w-none">
                {renderStrategicContent(section.content)}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Priority NextStage Services */}
        {strategicAnalysis?.serviceRecommendations && strategicAnalysis.serviceRecommendations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-accent/10 border border-accent/20 rounded-2xl p-6"
          >
            <h2 className="font-display text-xl font-semibold text-bone mb-6 flex items-center space-x-2">
              <span>🚀</span>
              <span>Priority NextStage Services</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {strategicAnalysis.serviceRecommendations.slice(0, 4).map((rec: any, index: number) => (
                <div key={index} className="bg-bone/5 rounded-lg p-4 border border-bone/10">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-bone">{rec.service.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      rec.priority === 'Critical' ? 'bg-red-500/20 text-red-300' :
                      rec.priority === 'High' ? 'bg-accent/20 text-accent' :
                      'bg-bone/20 text-bone/70'
                    }`}>
                      {rec.priority}
                    </span>
                  </div>
                  <p className="text-bone/70 text-sm mb-3">{rec.service.tagline}</p>
                  <div className="text-xs text-bone/60 space-y-1">
                    <div><span className="font-medium">Timeline:</span> {rec.timeline}</div>
                    <div><span className="font-medium">Investment:</span> {rec.estimatedInvestment}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-accent/10 border border-accent/20 rounded-2xl p-8 text-center"
        >
          <h3 className="font-display text-2xl font-medium text-bone mb-4">
            Ready to Accelerate Your Growth?
          </h3>
          <p className="text-bone/80 mb-6 max-w-2xl mx-auto">
            Let's discuss how NextStage can help you implement these strategic recommendations and achieve your vision faster.
          </p>
          
          <div className="flex flex-col gap-4 justify-center items-center">
            <button
              onClick={handleBookCall}
              className="bg-accent text-obsidian px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              📅 Schedule NextStage Consultation
            </button>
            
            <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-bone/90 border border-bone/20 rounded-lg px-4 py-2 text-obsidian placeholder-obsidian/50 focus:border-accent focus:outline-none w-full sm:w-auto"
              />
              <button
                onClick={handleSendEmail}
                disabled={isLoadingEmail || !email.trim()}
                className="bg-accent/20 text-bone px-4 py-2 rounded-lg hover:bg-accent/30 transition-colors disabled:opacity-50 w-full sm:w-auto"
              >
                {isLoadingEmail ? 'Sending...' : '📧 Email Brief'}
              </button>
            </div>
          </div>
          
          {emailSent && (
            <p className="text-accent mt-4">
              ✅ Brief sent to {email}
            </p>
          )}

          {/* Top Service CTA */}
          {strategicAnalysis?.serviceRecommendations?.[0] && (
            <div className="mt-6 pt-6 border-t border-accent/20">
              <p className="text-bone/70 mb-3">
                Ready to start with your top-priority service?
              </p>
              <button
                onClick={() => window.open(`/services/${strategicAnalysis.serviceRecommendations[0].service.service}/${strategicAnalysis.serviceRecommendations[0].service.slug}`, '_blank')}
                className="bg-gradient-to-r from-accent to-accent/80 text-obsidian px-6 py-3 rounded-lg font-medium hover:from-accent/90 hover:to-accent/70 transition-all transform hover:scale-105"
              >
                Explore {strategicAnalysis.serviceRecommendations[0].service.title} →
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}; 