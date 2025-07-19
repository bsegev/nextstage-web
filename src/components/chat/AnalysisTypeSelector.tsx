'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, FileText, Zap, Search, Target, Shield } from 'lucide-react';
import { UserResponse } from '@/lib/types';

interface AnalysisTypeSelectorProps {
  responses: UserResponse[];
  submissionId: string;
  onSelectBrief: () => void;
  onSelectOpportunityAnalysis: (provider: 'brave' | 'anthropic') => void;
}

export const AnalysisTypeSelector = ({ 
  responses, 
  submissionId, 
  onSelectBrief, 
  onSelectOpportunityAnalysis 
}: AnalysisTypeSelectorProps) => {
  const [selectedProvider, setSelectedProvider] = useState<'brave' | 'anthropic'>('brave');

  const userName = responses.find(r => r.questionIndex === 0)?.answer || 'there';

  return (
    <div className="min-h-screen bg-obsidian text-bone flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-display text-4xl font-medium text-bone mb-4">
            Choose Your Analysis, {userName}
          </h1>
          <p className="text-bone/70 text-lg">
            Select the type of strategic analysis you&apos;d like to receive
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Strategy Brief Option */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-accent/10 border border-accent/20 rounded-2xl p-6 hover:bg-accent/15 transition-colors cursor-pointer"
            onClick={onSelectBrief}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-accent" />
              </div>
            </div>
            <h3 className="font-display text-xl font-semibold text-bone mb-3">
              Strategy Brief
            </h3>
            <p className="text-bone/70 mb-4">
              Comprehensive strategic analysis with actionable recommendations based on your conversation
            </p>
            <div className="space-y-2 text-sm text-bone/60">
              <div className="flex items-center justify-center">
                <Zap className="w-4 h-4 mr-2 text-accent" />
                <span>Fast generation (~30 seconds)</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-accent">FREE</span>
              </div>
            </div>
          </motion.div>

          {/* Business Opportunity Analysis Option */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-accent/10 border border-accent/20 rounded-2xl p-6 hover:bg-accent/15 transition-colors cursor-pointer relative"
            onClick={() => onSelectOpportunityAnalysis(selectedProvider)}
          >
            <div className="absolute top-4 right-4 bg-accent text-obsidian px-2 py-1 rounded-full text-xs font-medium">
              NEW
            </div>
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
            </div>
            <h3 className="font-display text-xl font-semibold text-bone mb-3">
              Business Opportunity Analysis
            </h3>
            <p className="text-bone/70 mb-4">
              Deep market research, competitive analysis, and opportunity scoring with web search intelligence
            </p>
            <div className="space-y-2 text-sm text-bone/60 mb-4">
              <div className="flex items-center justify-center">
                <Search className="w-4 h-4 mr-2 text-accent" />
                <span>Market research included</span>
              </div>
              <div className="flex items-center justify-center">
                <Target className="w-4 h-4 mr-2 text-accent" />
                <span>Opportunity scoring (0-100)</span>
              </div>
              <div className="flex items-center justify-center">
                <Shield className="w-4 h-4 mr-2 text-accent" />
                <span>Risk assessment</span>
              </div>
            </div>
            
            {/* Provider Selection */}
            <div className="border-t border-accent/20 pt-4">
              <p className="text-xs text-bone/60 mb-2">Research powered by:</p>
              <div className="flex items-center justify-center space-x-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProvider('brave');
                  }}
                  className={`px-3 py-1 rounded text-xs transition-colors ${
                    selectedProvider === 'brave' 
                      ? 'bg-accent text-obsidian' 
                      : 'bg-accent/20 text-bone/70 hover:bg-accent/30'
                  }`}
                >
                  Brave API (Free)
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProvider('anthropic');
                  }}
                  className={`px-3 py-1 rounded text-xs transition-colors ${
                    selectedProvider === 'anthropic' 
                      ? 'bg-accent text-obsidian' 
                      : 'bg-accent/20 text-bone/70 hover:bg-accent/30'
                  }`}
                >
                  Anthropic (Premium)
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p className="text-bone/50 text-sm">
            Both analyses are designed to provide strategic value and demonstrate NextStage&apos;s expertise
          </p>
        </motion.div>
      </div>
    </div>
  );
};