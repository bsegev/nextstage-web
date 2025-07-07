'use client'

import { useState } from 'react'
import AgentDiscoveryChat from '@/components/AgentDiscoveryChat'
import { Button } from '@/features/strategy-chat/ui/Button'
import { Brain, MessageCircle, Settings, Zap, Target, Users } from 'lucide-react'

export default function AgentDemoPage() {
  const [showChat, setShowChat] = useState(false)
  const [briefGenerated, setBriefGenerated] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleComplete = (briefContent: string) => {
    setBriefGenerated(true)
    console.log('Brief generated:', briefContent)
  }

  const handleProgress = (progressValue: number) => {
    setProgress(progressValue)
  }

  if (showChat) {
    return (
      <div className="h-screen">
        <AgentDiscoveryChat
          onComplete={handleComplete}
          onProgress={handleProgress}
          userName="Demo User"
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-obsidian text-bone">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-4 inline-block px-3 py-1 rounded-full bg-accent/20 text-accent border border-accent/30 text-sm font-medium">
            AI Agent Demo
          </div>
          <h1 className="text-4xl font-display font-bold mb-4">
            Strategic Discovery Agent
          </h1>
          <p className="text-xl text-bone/70 max-w-3xl mx-auto">
            Experience the power of AI agents that adapt their conversation flow based on your responses, 
            using the Agent pattern from Anthropic's building effective agents guide.
          </p>
        </div>

        {/* Agent vs Workflow Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Old Workflow */}
          <div className="bg-accent/10 border border-accent/20 rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-accent/20">
              <h3 className="text-bone flex items-center gap-2 text-lg font-medium">
                <Settings className="w-5 h-5" />
                Old Workflow Pattern
              </h3>
              <p className="text-bone/70 text-sm mt-1">
                Predefined questions in fixed sequence
              </p>
            </div>
            <div className="px-6 py-4 text-bone/80">
              <ul className="space-y-2 text-sm">
                <li>• Fixed set of questions</li>
                <li>• Same sequence for everyone</li>
                <li>• No adaptation to responses</li>
                <li>• Limited probing capability</li>
                <li>• Basic brief generation</li>
              </ul>
            </div>
          </div>

          {/* New Agent */}
          <div className="bg-accent/20 border border-accent/30 rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-accent/30">
              <h3 className="text-bone flex items-center gap-2 text-lg font-medium">
                <Brain className="w-5 h-5" />
                New Agent Pattern
              </h3>
              <p className="text-bone/70 text-sm mt-1">
                AI dynamically directs conversation flow
              </p>
            </div>
            <div className="px-6 py-4 text-bone/80">
              <ul className="space-y-2 text-sm">
                <li>• Dynamic question generation</li>
                <li>• Adapts to user responses</li>
                <li>• Probes deeper when needed</li>
                <li>• Changes topics strategically</li>
                <li>• Comprehensive brief generation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Agent Capabilities */}
        <div className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-6 text-center">
            Agent Capabilities
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-accent/10 border border-accent/20 rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-accent/20">
                <h3 className="text-bone flex items-center gap-2 text-lg font-medium">
                  <MessageCircle className="w-5 h-5" />
                  Dynamic Conversation
                </h3>
              </div>
              <div className="px-6 py-4">
                <p className="text-bone/70 text-sm">
                  The agent analyzes your responses and decides what to ask next, 
                  adapting its strategy based on your business context.
                </p>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-accent/20">
                <h3 className="text-bone flex items-center gap-2 text-lg font-medium">
                  <Target className="w-5 h-5" />
                  Strategic Probing
                </h3>
              </div>
              <div className="px-6 py-4">
                <p className="text-bone/70 text-sm">
                  When the agent detects opportunities or gaps, it probes deeper 
                  to uncover strategic insights you might not have considered.
                </p>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-accent/20">
                <h3 className="text-bone flex items-center gap-2 text-lg font-medium">
                  <Zap className="w-5 h-5" />
                  Intelligent Brief Generation
                </h3>
              </div>
              <div className="px-6 py-4">
                <p className="text-bone/70 text-sm">
                  The agent generates a comprehensive strategic brief only when 
                  it has gathered sufficient strategic intelligence about your business.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Agent Tools */}
        <div className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-6 text-center">
            Agent Tools & Decision Making
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-accent/10 border border-accent/20 rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-accent/20">
                <h3 className="text-bone text-lg font-medium">Analysis Tools</h3>
              </div>
              <div className="px-6 py-4">
                <ul className="text-bone/70 text-sm space-y-2">
                  <li>• <strong>Conversation Analyzer:</strong> Evaluates business clarity & strategic readiness</li>
                  <li>• <strong>Context Extractor:</strong> Identifies business type, industry, and competitive landscape</li>
                  <li>• <strong>Decision Maker:</strong> Determines next best action based on analysis</li>
                  <li>• <strong>Strategic Insights:</strong> Generates real-time insights about opportunities</li>
                </ul>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-accent/20">
                <h3 className="text-bone text-lg font-medium">Agent Actions</h3>
              </div>
              <div className="px-6 py-4">
                <ul className="text-bone/70 text-sm space-y-2">
                  <li>• <strong>Continue Discovery:</strong> Ask follow-up questions on current topic</li>
                  <li>• <strong>Probe Deeper:</strong> Explore specific areas with strategic questioning</li>
                  <li>• <strong>Change Topic:</strong> Shift focus to new strategic areas</li>
                  <li>• <strong>Generate Brief:</strong> Create comprehensive strategic assessment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Section */}
        <div className="text-center">
          <div className="bg-accent/20 border border-accent/30 rounded-xl max-w-2xl mx-auto overflow-hidden">
            <div className="px-6 py-4 border-b border-accent/30">
              <h3 className="text-bone text-2xl font-medium">
                Experience the Agent Pattern
              </h3>
              <p className="text-bone/70 text-sm mt-2">
                Start a conversation with our AI agent and see how it adapts to your responses
              </p>
            </div>
            <div className="px-6 py-6">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <Users className="w-8 h-8 text-accent" />
                  <div className="text-left">
                    <p className="text-bone font-medium">Interactive Discovery</p>
                    <p className="text-bone/70 text-sm">
                      Have a natural conversation about your business
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-4">
                  <Brain className="w-8 h-8 text-accent" />
                  <div className="text-left">
                    <p className="text-bone font-medium">AI Analysis</p>
                    <p className="text-bone/70 text-sm">
                      Agent analyzes responses and adapts questioning
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-4">
                  <Target className="w-8 h-8 text-accent" />
                  <div className="text-left">
                    <p className="text-bone font-medium">Strategic Brief</p>
                    <p className="text-bone/70 text-sm">
                      Comprehensive strategic assessment generated
                    </p>
                  </div>
                </div>
                
                <Button 
                  onClick={() => setShowChat(true)}
                  className="w-full bg-accent hover:bg-accent/80 text-obsidian font-medium"
                >
                  Start Agent Discovery Session
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Implementation */}
        <div className="mt-12">
          <h2 className="text-2xl font-display font-bold mb-6 text-center">
            Technical Implementation
          </h2>
          <div className="bg-accent/10 border border-accent/20 rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-accent/20">
              <h3 className="text-bone text-lg font-medium">From Anthropic's Agent Patterns</h3>
            </div>
            <div className="px-6 py-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-bone mb-2">Agent Architecture</h3>
                  <ul className="text-bone/70 text-sm space-y-1">
                    <li>• Maintains conversation context</li>
                    <li>• Uses tools for analysis</li>
                    <li>• Makes dynamic decisions</li>
                    <li>• Adapts based on feedback</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-bone mb-2">Why Agent Pattern?</h3>
                  <ul className="text-bone/70 text-sm space-y-1">
                    <li>• Open-ended conversation flow</li>
                    <li>• Dynamic decision making needed</li>
                    <li>• Clear success criteria (brief generation)</li>
                    <li>• Requires strategic adaptation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 