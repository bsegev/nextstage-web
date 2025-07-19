'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { NextStageNavbar, Footer } from '@/components/layout';
import { 
  IconTarget, 
  IconArrowRight,
  IconCheck,
  IconStar,
  IconShieldCheck,
  IconBolt,
  IconTrendingUp,
  IconUsers,
  IconClock,
  IconAward
} from '@tabler/icons-react';

// Same data structure
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

interface DeliverableTemplateVisualProps {
  deliverable: DeliverableData;
}

// Mock metrics - in real implementation these could be dynamic
const deliverableMetrics = {
  'brand-identity': {
    successRate: 94,
    avgROI: '340%',
    timeToMarket: '3.2x faster',
    clientRetention: 89
  },
  'website-design': {
    successRate: 97,
    avgROI: '280%',
    timeToMarket: '2.8x faster',
    clientRetention: 92
  },
  'market-research': {
    successRate: 91,
    avgROI: '420%',
    timeToMarket: '4.1x faster',
    clientRetention: 88
  },
  'mvp-development': {
    successRate: 89,
    avgROI: '520%',
    timeToMarket: '2.3x faster',
    clientRetention: 93
  },
  'competitive-analysis': {
    successRate: 95,
    avgROI: '210%',
    timeToMarket: '3.7x faster',
    clientRetention: 87
  }
};

// Progress Circle Component
const ProgressCircle = ({ percentage, label, color = "accent" }: { percentage: number; label: string; color?: string }) => {
  const circumference = 2 * Math.PI * 40;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24 mb-3">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-gray-200"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className={color === "accent" ? "text-accent" : "text-green-500"}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-obsidian">{percentage}%</span>
        </div>
      </div>
      <span className="text-sm text-obsidian/70 text-center font-medium">{label}</span>
    </div>
  );
};

// Skill Bar Component
const SkillBar = ({ skill, percentage, color = "accent" }: { skill: string; percentage: number; color?: string }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-obsidian">{skill}</span>
        <span className="text-sm text-obsidian/60">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          className={`h-2 rounded-full ${color === "accent" ? "bg-accent" : "bg-green-500"}`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default function DeliverableTemplateVisual({ deliverable }: DeliverableTemplateVisualProps) {
  // Get slug from title for metrics (simplified)
  const slug = deliverable.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  const metrics = deliverableMetrics[slug as keyof typeof deliverableMetrics] || deliverableMetrics['brand-identity'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-bone via-white to-gray-50">
      <NextStageNavbar />
      
      {/* Main Dashboard Layout */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Left Sidebar - Deliverable Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 border border-gray-200/50 shadow-lg">
                
                {/* Deliverable header */}
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconTarget className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-display text-xl text-obsidian mb-1">{deliverable.title}</h3>
                  <p className="text-obsidian/60 text-sm">Strategic Deliverable</p>
                </div>

                {/* Key Info */}
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-obsidian/60">Discovery:</span>
                    <span className="text-obsidian font-medium">{deliverable.discovery.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-obsidian/60">Timeline:</span>
                    <span className="text-obsidian font-medium">{deliverable.discovery.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-obsidian/60">Success Rate:</span>
                    <span className="text-green-600 font-medium">{metrics.successRate}%</span>
                  </div>
                </div>

                {/* Impact Areas */}
                <div className="mb-6">
                  <h4 className="text-obsidian font-medium mb-4 text-sm uppercase tracking-wider">Impact Areas</h4>
                  <SkillBar skill="Strategic Foundation" percentage={95} />
                  <SkillBar skill="Market Position" percentage={88} />
                  <SkillBar skill="Growth Potential" percentage={92} />
                  <SkillBar skill="Competitive Edge" percentage={89} />
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <ProgressCircle percentage={metrics.successRate} label="Success Rate" />
                  <ProgressCircle percentage={metrics.clientRetention} label="Client Retention" color="green" />
                </div>
              </div>
            </motion.div>

            {/* Main Content Area */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-9"
            >
              
              {/* Hero Banner */}
              <div className="bg-gradient-to-r from-accent/10 to-accent/5 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-accent/20 relative overflow-hidden shadow-lg">
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 right-4 text-4xl text-accent/20">
                    <IconTarget className="w-16 h-16" />
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium uppercase tracking-wider border border-accent/20">
                      Strategic Deliverable
                    </span>
                  </div>
                  
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4 text-obsidian leading-tight">
                    {deliverable.title}
                  </h1>
                  
                  <p className="text-xl text-obsidian/70 mb-8 leading-relaxed max-w-2xl">
                    {deliverable.tagline}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                      href="https://cal.com/bensegev/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-obsidian text-white rounded-xl font-semibold transition-all duration-300 hover:bg-obsidian/90 hover:shadow-lg hover:-translate-y-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Start Discovery Session</span>
                      <IconArrowRight className="w-5 h-5" />
                    </motion.a>
                    
                    <div className="flex items-center gap-2 text-obsidian/60">
                      <IconShieldCheck className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium">{deliverable.discovery.price} • {deliverable.discovery.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/50 text-center shadow-lg"
                >
                  <IconTrendingUp className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-obsidian mb-1">{metrics.avgROI}</div>
                  <div className="text-obsidian/60 text-sm">Average ROI</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/50 text-center shadow-lg"
                >
                  <IconClock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-obsidian mb-1">{metrics.timeToMarket}</div>
                  <div className="text-obsidian/60 text-sm">Faster Launch</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/50 text-center shadow-lg"
                >
                  <IconUsers className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-obsidian mb-1">{metrics.clientRetention}%</div>
                  <div className="text-obsidian/60 text-sm">Client Retention</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/50 text-center shadow-lg"
                >
                  <IconAward className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-obsidian mb-1">{metrics.successRate}%</div>
                  <div className="text-obsidian/60 text-sm">Success Rate</div>
                </motion.div>
              </div>

              {/* Value Breakdown */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <h2 className="font-display text-2xl text-obsidian mb-6">What You Get</h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  
                  {/* Strategic Foundation */}
                  <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/50 shadow-lg">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                      <IconCheck className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-obsidian font-semibold mb-3">Strategic Foundation</h3>
                    <p className="text-obsidian/70 text-sm leading-relaxed mb-4">
                      {deliverable.outcomes.primary}
                    </p>
                    <div className="space-y-2">
                      {deliverable.discovery.whatYouGet.slice(0, 3).map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-obsidian/60 text-xs">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Proven Process */}
                  <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/50 shadow-lg">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                      <IconBolt className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-obsidian font-semibold mb-3">Proven Process</h3>
                    <p className="text-obsidian/70 text-sm leading-relaxed mb-4">
                      {deliverable.outcomes.secondary}
                    </p>
                    <div className="space-y-2">
                      {deliverable.process.slice(0, 3).map((step, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-obsidian/60 text-xs">{step.phase}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Growth Impact */}
                  <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/50 shadow-lg">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                      <IconStar className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-obsidian font-semibold mb-3">Growth Impact</h3>
                    <p className="text-obsidian/70 text-sm leading-relaxed mb-4">
                      {deliverable.outcomes.longTerm}
                    </p>
                    <div className="mt-4">
                      <div className="bg-gradient-to-r from-accent/10 to-blue-600/10 rounded-lg p-3 border border-accent/20">
                        <div className="text-accent font-medium text-sm">Ready to start?</div>
                        <div className="text-obsidian/60 text-xs">Book your discovery session</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 