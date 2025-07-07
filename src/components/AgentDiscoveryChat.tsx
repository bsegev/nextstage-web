'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/features/strategy-chat/ui/Button'
import { Input } from '@/features/strategy-chat/ui/Input'
import { Textarea } from '@/features/strategy-chat/ui/Textarea'
import { Bot, User, Brain, Sparkles, CheckCircle, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface AgentMessage {
  id: string
  type: 'user' | 'assistant' | 'system'
  content: string
  timestamp: Date
  agentAction?: 'continue' | 'probe_deeper' | 'change_topic' | 'generate_brief' | 'collect_lead_info' | 'simplify_approach' | 'continue_discovery'
  reasoning?: string
  toolsUsed?: string[]
  phase?: string
  completionScore?: number
}

interface AgentChatProps {
  onComplete?: (briefContent: string) => void
  onProgress?: (progress: number) => void
  userName?: string
}

export default function AgentDiscoveryChat({ onComplete, onProgress, userName }: AgentChatProps) {
  const [messages, setMessages] = useState<AgentMessage[]>([])
  const [currentInput, setCurrentInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [conversationId, setConversationId] = useState<string | null>(null)
  const [conversationPhase, setConversationPhase] = useState<string>('introduction')
  const [completionScore, setCompletionScore] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [briefContent, setBriefContent] = useState<string | null>(null)
  
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Start conversation when component mounts
  useEffect(() => {
    startConversation()
  }, [])

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Focus input when not loading
  useEffect(() => {
    if (!isLoading && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isLoading])

  // Report progress to parent
  useEffect(() => {
    onProgress?.(completionScore)
  }, [completionScore, onProgress])

  // Start conversation with agent
  const startConversation = async () => {
    try {
      setIsLoading(true)
      
      const response = await fetch('/api/strategic-discovery-agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'start_conversation',
          userName: userName
        })
      })

      const data = await response.json()
      
      if (data.success) {
        setConversationId(data.conversationId)
        
        // Add agent's opening message
        const agentMessage: AgentMessage = {
          id: `agent-${Date.now()}`,
          type: 'assistant',
          content: data.response.message,
          timestamp: new Date(),
          agentAction: data.response.action,
          reasoning: data.response.reasoning,
          toolsUsed: data.response.toolsUsed,
          phase: data.response.phase,
          completionScore: data.response.completionScore
        }
        
        setMessages([agentMessage])
        setConversationPhase(data.response.phase)
        setCompletionScore(data.response.completionScore)
      }
    } catch (error) {
      console.error('Error starting conversation:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Send message to agent
  const sendMessage = async () => {
    if (!currentInput.trim() || !conversationId || isLoading) return

    const userMessage: AgentMessage = {
      id: `user-${Date.now()}`,
      type: 'user',
      content: currentInput,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setCurrentInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/strategic-discovery-agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'send_message',
          conversationId: conversationId,
          userInput: currentInput
        })
      })

      const data = await response.json()
      
      if (data.success) {
        const agentResponse = data.response
        
        // Add agent's response
        const agentMessage: AgentMessage = {
          id: `agent-${Date.now()}`,
          type: 'assistant',
          content: agentResponse.message,
          timestamp: new Date(),
          agentAction: agentResponse.action,
          reasoning: agentResponse.reasoning,
          toolsUsed: agentResponse.toolsUsed,
          phase: agentResponse.phase,
          completionScore: agentResponse.completionScore
        }
        
        setMessages(prev => [...prev, agentMessage])
        setConversationPhase(agentResponse.phase)
        setCompletionScore(agentResponse.completionScore)
        
        // Check if agent generated brief
        if (agentResponse.action === 'generate_brief') {
          setIsComplete(true)
          setBriefContent(agentResponse.message)
          onComplete?.(agentResponse.message)
        }
      }
    } catch (error) {
      console.error('Error sending message:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Handle key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  // Get phase display info
  const getPhaseInfo = (phase: string) => {
    const phaseMap = {
      'introduction': { label: 'Introduction', color: 'bg-blue-500', icon: '👋' },
      'discovery': { label: 'Discovery', color: 'bg-green-500', icon: '🔍' },
      'deep_dive': { label: 'Deep Dive', color: 'bg-purple-500', icon: '🎯' },
      'validation': { label: 'Validation', color: 'bg-orange-500', icon: '✅' },
      'brief_generation': { label: 'Brief Generation', color: 'bg-red-500', icon: '📊' }
    }
    return phaseMap[phase as keyof typeof phaseMap] || { label: 'Unknown', color: 'bg-gray-500', icon: '❓' }
  }

  // Get action display info
  const getActionInfo = (action: string) => {
    const actionMap = {
      'continue': { label: 'Continuing', color: 'text-blue-500', icon: <ArrowRight className="w-3 h-3" /> },
      'probe_deeper': { label: 'Probing Deeper', color: 'text-purple-500', icon: <Brain className="w-3 h-3" /> },
      'change_topic': { label: 'Changing Topic', color: 'text-green-500', icon: <Sparkles className="w-3 h-3" /> },
      'generate_brief': { label: 'Generating Brief', color: 'text-red-500', icon: <CheckCircle className="w-3 h-3" /> },
      'collect_lead_info': { label: 'Collecting Info', color: 'text-orange-500', icon: <User className="w-3 h-3" /> },
      'simplify_approach': { label: 'Simplifying', color: 'text-yellow-500', icon: <ArrowRight className="w-3 h-3" /> },
      'continue_discovery': { label: 'Discovering', color: 'text-teal-500', icon: <Brain className="w-3 h-3" /> }
    }
    return actionMap[action as keyof typeof actionMap] || { label: 'Processing', color: 'text-gray-500', icon: <ArrowRight className="w-3 h-3" /> }
  }

  return (
    <div className="h-screen flex flex-col bg-obsidian">
      {/* Header */}
      <div className="flex-shrink-0 bg-obsidian/95 backdrop-blur-sm border-b border-accent/20 px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-obsidian" />
              </div>
              <div>
                <h1 className="font-display text-xl font-medium text-bone">NextStage AI Discovery Agent</h1>
                <div className="flex items-center space-x-3 text-xs text-bone/60">
                  <span>Phase: {getPhaseInfo(conversationPhase).label}</span>
                  <span>•</span>
                  <span>Readiness: {completionScore}%</span>
                  {userName && (
                    <>
                      <span>•</span>
                      <span>{userName}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-32 h-2 bg-obsidian/60 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-accent transition-all duration-500"
                  style={{ width: `${completionScore}%` }}
                />
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${getPhaseInfo(conversationPhase).color} text-white`}>
                {getPhaseInfo(conversationPhase).icon} {getPhaseInfo(conversationPhase).label}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Welcome */}
          <div className="text-center py-8 border-b border-accent/10">
            <h2 className="text-2xl font-display font-medium text-bone mb-2">
              AI-Powered Strategic Discovery
            </h2>
            <p className="text-bone/70 text-lg max-w-2xl mx-auto">
              Our AI agent adapts the conversation based on your responses, probing deeper where needed and identifying strategic opportunities.
            </p>
          </div>

          {/* Messages */}
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-3 max-w-3xl ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'user' 
                      ? 'bg-bone text-obsidian' 
                      : 'bg-accent text-obsidian'
                  }`}>
                    {message.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>

                  {/* Message Content */}
                  <div className={`flex flex-col ${message.type === 'user' ? 'items-end' : 'items-start'}`}>
                    {/* Agent metadata */}
                    {message.type === 'assistant' && message.agentAction && (
                      <div className="flex items-center space-x-2 mb-1">
                        <div className={`flex items-center space-x-1 text-xs ${getActionInfo(message.agentAction).color}`}>
                          {getActionInfo(message.agentAction).icon}
                          <span>{getActionInfo(message.agentAction).label}</span>
                        </div>
                        {message.toolsUsed && message.toolsUsed.length > 0 && (
                          <div className="text-xs text-bone/50">
                            Tools: {message.toolsUsed.join(', ')}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Message bubble */}
                    <div className={`px-4 py-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-bone text-obsidian rounded-br-md'
                        : 'bg-accent/20 text-bone border border-accent/30 rounded-bl-md backdrop-blur-sm'
                    }`}>
                      <div className="text-sm leading-relaxed whitespace-pre-wrap">
                        {message.content}
                      </div>
                    </div>

                    {/* Agent reasoning */}
                    {message.type === 'assistant' && message.reasoning && (
                      <div className="mt-1 text-xs text-bone/50 italic max-w-md">
                        Reasoning: {message.reasoning}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Loading indicator */}
          {isLoading && (
            <div className="flex items-center justify-center gap-2 text-bone/50">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
              <span className="text-sm">Agent is thinking...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      {!isComplete && (
        <div className="flex-shrink-0 bg-obsidian/95 backdrop-blur-sm border-t border-accent/20 px-6 py-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-3">
              <Input
                ref={inputRef}
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Share your thoughts..."
                disabled={isLoading}
                className="flex-1 bg-accent/10 border-accent/20 text-bone placeholder-bone/50 focus:border-accent"
              />
              <Button
                onClick={sendMessage}
                disabled={!currentInput.trim() || isLoading}
                className="bg-accent hover:bg-accent/80 text-obsidian"
              >
                {isLoading ? 'Sending...' : 'Send'}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Completion State */}
      {isComplete && briefContent && (
        <div className="flex-shrink-0 bg-accent/10 border-t border-accent/20 px-6 py-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 text-accent">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Strategic Brief Generated!</span>
            </div>
            <p className="text-sm text-bone/70 mt-1">
              Your AI-generated strategic brief is ready. The agent has analyzed your responses and created a comprehensive strategic assessment.
            </p>
          </div>
        </div>
      )}
    </div>
  )
} 