'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles, CheckCircle, Brain, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface PremiumLeadCaptureProps {
  onComplete?: (responses: any[], extractedInfo: any, sessionId: string) => void;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  reasoning?: string;
  isCompletion?: boolean;
}

interface ExtractedInfo {
  name?: string;
  project?: string;
  audience?: string;
  problem?: string;
  timeline?: string;
  budget?: string;
}

interface CompletionStatus {
  fieldsComplete: string[];
  fieldsNeeded: string[];
  isReady: boolean;
}

const PremiumLeadCapture = ({ onComplete }: PremiumLeadCaptureProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Welcome to NextStage! I'm here to understand your vision and create a strategic brief that helps you achieve your goals. Let's start with your name - what should I call you?",
      timestamp: new Date()
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [extractedInfo, setExtractedInfo] = useState<ExtractedInfo>({});
  const [completionStatus, setCompletionStatus] = useState<CompletionStatus>({
    fieldsComplete: [],
    fieldsNeeded: ['name', 'project', 'audience', 'problem', 'budget', 'timeline'],
    isReady: false
  });
  const [sessionId] = useState(() => crypto.randomUUID());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  const scrollToBottom = () => {
    // Use requestAnimationFrame for smoother scrolling during layout changes
    requestAnimationFrame(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const initializeSession = useCallback(async () => {
    try {
      console.log('Initializing conversation session:', sessionId);
      // Reset any existing session to start fresh
      await fetch(`/api/enhanced-chat?sessionId=${sessionId}`, {
        method: 'DELETE'
      });
      console.log('Session reset complete');
    } catch (error) {
      console.warn('Session reset failed:', error);
    }
  }, [sessionId]);

  useEffect(() => {
    setIsMounted(true);
    // Initialize conversation session
    initializeSession();
  }, [initializeSession]);

  const sendMessage = async () => {
    if (!currentMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      role: 'user',
      content: currentMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const messageToSend = currentMessage;
    setCurrentMessage('');
    setIsTyping(true);

    console.log('Sending message to enhanced-chat:', {
      sessionId,
      userMessage: messageToSend,
      messageCount: messages.length + 1
    });

    try {
      // Call API with conversation history
      const response = await fetch('/api/enhanced-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          userMessage: messageToSend,
          // Get the last assistant message as the current question
          currentQuestion: messages.length > 0 ? 
            messages.filter(m => m.role === 'assistant').slice(-1)[0]?.content : 
            undefined
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const result = await response.json();
      console.log('Enhanced-chat response:', result);

      if (result.error) {
        throw new Error(result.error);
      }

      if (result.complete) {
        console.log('Conversation marked as complete, triggering brief generation');
        // Conversation is complete, trigger brief generation
        setTimeout(() => {
          setMessages(prev => [...prev, {
            role: 'assistant',
            content: "Perfect! I have everything I need to create your strategic brief. Let me conduct market research and generate that for you now...",
            timestamp: new Date(),
            isCompletion: true
          }]);
          
          // Call completion handler with all conversation data
          if (onComplete) {
            onComplete(result.responses, result.extractedInfo, result.submissionId);
          }
        }, 1000);
      } else if (result.nextQuestion && result.nextQuestion.question) {
        console.log('Continuing conversation with next question:', result.nextQuestion.question);
        // Continue conversation
        const assistantMessage: Message = {
          role: 'assistant',
          content: result.nextQuestion.question,
          timestamp: new Date(),
          reasoning: result.nextQuestion.reasoning
        };

        setMessages(prev => [...prev, assistantMessage]);
        
        // Update extracted info and completion status with safe access
        const newExtractedInfo = result.extractedInfo || {};
        console.log('Updating extracted info:', newExtractedInfo);
        setExtractedInfo(newExtractedInfo);
        
        const fieldsComplete = Object.keys(newExtractedInfo).filter(key => newExtractedInfo[key]);
        setCompletionStatus({
          fieldsComplete,
          fieldsNeeded: ['name', 'project', 'audience', 'problem', 'budget', 'timeline'],
          isReady: false
        });
      } else {
        console.warn('No nextQuestion in response, using fallback');
        // Fallback if no nextQuestion provided
        const assistantMessage: Message = {
          role: 'assistant',
          content: "Thank you for that information. Could you tell me more about what you're working on?",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, assistantMessage]);
      }

    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I apologize, but I'm having trouble processing that. Could you try again?",
        timestamp: new Date()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const progressPercentage = (completionStatus.fieldsComplete.length / 6) * 100;

  return (
    <div className="min-h-screen bg-obsidian text-bone flex flex-col">
      {/* Fixed Header - Simplified positioning */}
      <div className="bg-obsidian border-b border-accent/20 p-4 sm:p-6">
        <div className="max-w-4xl mx-auto">
          {/* Elegant back navigation */}
          <div className="mb-4">
            <Link 
              href="/" 
              className="inline-flex items-center space-x-2 text-bone/60 hover:text-accent transition-colors duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-sm font-medium">NextStage</span>
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-obsidian border border-accent rounded-full flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h1 className="font-display font-semibold text-lg text-bone">Strategy Concierge</h1>
                <p className="text-bone/70 text-sm">Premium Strategic Discovery</p>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <div className="text-sm text-bone/70">
                {completionStatus.fieldsComplete.length}/6 fields complete
              </div>
              <div className="text-xs text-accent">
                {progressPercentage.toFixed(0)}% complete
              </div>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="w-full bg-obsidian/60 rounded-full h-2 overflow-hidden mt-4">
            <div 
              className="animated-gradient h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Intelligence Panel */}
      {Object.keys(extractedInfo).length > 0 && (
        <div className="bg-obsidian border-b border-accent/20 p-4 sm:p-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span className="text-accent text-sm font-medium">Strategic Intelligence Captured</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                {Object.entries(extractedInfo).map(([key, value]) => (
                  value && (
                    <div key={key} className="flex flex-col">
                      <span className="text-bone/50 capitalize">{key}:</span>
                      <span className="text-bone font-medium">{value}</span>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Messages - Flex grow to fill space */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <div className="space-y-6">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-full sm:max-w-3xl px-4 sm:px-6 py-4 rounded-2xl ${
                    message.role === 'user'
                      ? 'bg-accent text-obsidian'
                      : message.isCompletion
                      ? 'card-elegant border border-accent/30 bg-accent/20 text-bone'
                      : 'card-elegant border border-accent/30 text-bone'
                  }`}
                >
                  <p className="text-base leading-relaxed break-words">{message.content}</p>
                  {message.reasoning && (
                    <div className="mt-3 pt-3 border-t border-bone/20">
                      <p className="text-xs text-bone/70 italic">
                        Strategic insight: {message.reasoning}
                      </p>
                    </div>
                  )}
                  <p className={`text-xs opacity-70 mt-2 ${message.role === 'user' ? 'text-obsidian' : ''}`}>
                    {isMounted ? message.timestamp.toLocaleTimeString() : ''}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="card-elegant border border-accent/30 px-4 sm:px-6 py-4 rounded-2xl">
                  <div className="flex items-center space-x-2">
                    <Brain className="w-4 h-4 text-accent animate-pulse" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-bone/70 text-sm">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input - Fixed at bottom */}
      <div className="bg-obsidian border-t border-accent/20 p-4 sm:p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <textarea
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Share your thoughts..."
                className="w-full bg-obsidian/50 border border-bone/20 rounded-xl px-4 py-3 text-bone placeholder-bone/50 focus:border-accent focus:outline-none resize-none"
                rows={1}
                style={{ minHeight: '52px', maxHeight: '120px' }}
              />
            </div>
            <button
              onClick={sendMessage}
              disabled={!currentMessage.trim() || isTyping}
              className="btn-primary px-6 py-3 rounded-xl font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <Send className="w-4 h-4" />
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PremiumLeadCapture }; 