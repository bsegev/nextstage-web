'use client';

import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { ArrowRight, Brain, Sparkles, User, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatProps, ChatMessage, UserResponse } from '../types';
import { extractName, generateId, delay } from '../utils/helpers';
import { STRATEGY_QUESTIONS } from '../utils/questions';

export const SimpleStrategyChat = ({ onComplete, onProgress }: ChatProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<UserResponse[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [userName, setUserName] = useState("");
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const currentQuestion = STRATEGY_QUESTIONS[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === STRATEGY_QUESTIONS.length - 1;
  const progress = Math.round(((currentQuestionIndex + 1) / STRATEGY_QUESTIONS.length) * 100);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ 
      behavior: "smooth",
      block: "end"
    });
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages.length, scrollToBottom]);

  useEffect(() => {
    onProgress?.(progress);
  }, [progress, onProgress]);

  // Start with first question
  useEffect(() => {
    setTimeout(() => {
      addBotMessage(STRATEGY_QUESTIONS[0].question);
    }, 500);
  }, []);

  const addBotMessage = (content: string) => {
    const newMessage: ChatMessage = {
      id: generateId(),
      type: 'bot',
      content,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addUserMessage = (content: string) => {
    const newMessage: ChatMessage = {
      id: generateId(),
      type: 'user',
      content,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  // Single API call for intelligent response
  const generateIntelligentResponse = async (
    userAnswer: string,
    questionIndex: number,
    previousResponses: UserResponse[],
    userName: string
  ): Promise<string> => {
    try {
      const response = await fetch('/api/nextstage-concierge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'generateIntelligentResponse',
          userAnswer,
          questionIndex,
          previousResponses,
          userName,
          nextQuestion: questionIndex < STRATEGY_QUESTIONS.length - 1 ? STRATEGY_QUESTIONS[questionIndex + 1].question : null
        })
      });

      if (!response.ok) {
        console.error('API response not ok:', response.status);
        return '';
      }

      const data = await response.json();
      return data.data || '';
    } catch (error) {
      console.error('Error generating response:', error);
      return '';
    }
  };

  const handleAnswer = async (answer: string) => {
    // Add user message
    addUserMessage(answer);
    
    // Store response
    const newResponse: UserResponse = {
      question: currentQuestion.question,
      answer,
      questionIndex: currentQuestionIndex,
      timestamp: new Date()
    };

    const updatedResponses = [...responses, newResponse];
    setResponses(updatedResponses);
    setCurrentAnswer("");

    // Extract name from first question
    if (currentQuestionIndex === 0) {
      const extractedName = extractName(answer);
      setUserName(extractedName);
    }

    // Last question - complete the session
    if (isLastQuestion) {
      setIsThinking(true);
      await handleCompletion(updatedResponses);
      return;
    }

    // Generate intelligent response (single API call) - but only if we have API key
    setIsGenerating(true);
    try {
      const intelligentResponse = await generateIntelligentResponse(
        answer,
        currentQuestionIndex,
        updatedResponses,
        userName || extractName(answer)
      );

      if (intelligentResponse.trim()) {
        await delay(1000);
        addBotMessage(intelligentResponse);
        await delay(1500);
      }
    } catch (error) {
      console.error('Failed to generate intelligent response:', error);
      // Continue without intelligent response
    }

    // Move to next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    const nextQuestion = STRATEGY_QUESTIONS[currentQuestionIndex + 1];
    addBotMessage(nextQuestion.question);
    setIsGenerating(false);
  };

  const handleTextSubmit = () => {
    if (currentAnswer.trim() || currentQuestion?.optional) {
      handleAnswer(currentAnswer.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleTextSubmit();
    }
  };

  const handleCompletion = async (finalResponses: UserResponse[]) => {
    try {
      // Create session without database dependency
      const completedSession = {
        id: generateId(),
        responses: finalResponses,
        currentQuestionIndex: STRATEGY_QUESTIONS.length,
        isComplete: true,
        userName,
        startedAt: new Date(),
        completedAt: new Date()
      };

      await delay(2000); // Simulate processing time
      onComplete?.(completedSession);
    } catch (error) {
      console.error('Error completing session:', error);
      setIsThinking(false);
    }
  };

  if (isThinking) {
    return (
      <div className="h-screen flex flex-col pt-24">
        <div className="flex-1 flex items-center justify-center px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="relative mb-8">
              <div className="w-24 h-24 mx-auto bg-accent rounded-full flex items-center justify-center relative overflow-hidden">
                <Brain className="w-12 h-12 text-obsidian animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-bone/20 to-transparent animate-gradient" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center animate-bounce">
                <Sparkles className="w-4 h-4 text-obsidian" />
              </div>
            </div>
            <h2 className="font-display text-3xl font-medium text-bone mb-4">
              Analyzing your strategic profile...
            </h2>
            <p className="text-bone/70 text-lg">
              {userName ? `Thanks ${userName}! ` : ''}Preparing your personalized strategic insights
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col pt-24">
      {/* Header */}
      <div className="flex-shrink-0 bg-obsidian/95 backdrop-blur-sm border-b border-accent/20 px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-obsidian" />
              </div>
              <div>
                <h1 className="font-display text-xl font-medium text-bone">NextStage Strategy Concierge</h1>
                <p className="text-xs text-bone/60">
                  Question {currentQuestionIndex + 1} of {STRATEGY_QUESTIONS.length}
                  {userName && ` • ${userName}`}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-24 h-2 bg-obsidian/60 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-accent transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-xs text-bone/60 font-medium">
                {progress}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Welcome */}
          <div className="text-center py-8 border-b border-accent/10">
            <p className="text-bone/70 text-lg max-w-2xl mx-auto">
              Welcome to NextStage's strategic discovery. Let's explore your vision and uncover transformation opportunities.
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
                <div className={`flex items-end space-x-3 max-w-2xl ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'user' 
                      ? 'bg-bone text-obsidian' 
                      : 'bg-accent text-obsidian'
                  }`}>
                    {message.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`px-4 py-3 rounded-2xl max-w-lg ${
                    message.type === 'user'
                      ? 'bg-bone text-obsidian rounded-br-md'
                      : 'bg-accent/20 text-bone border border-accent/30 rounded-bl-md backdrop-blur-sm'
                  }`}>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {message.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Generating indicator */}
          {isGenerating && (
            <div className="flex items-center gap-2 text-bone/50">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
              <span className="text-sm">Thinking...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <AnimatePresence>
        {(currentQuestion && !isThinking && !isGenerating) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 bg-obsidian/95 backdrop-blur-sm border-t border-accent/20 px-6 py-4"
          >
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {currentQuestion.type === 'buttons' ? (
                  <div className="grid grid-cols-2 gap-3">
                    {currentQuestion.options?.map((option, index) => (
                      <button
                        key={`${currentQuestionIndex}-${index}`}
                        onClick={() => handleAnswer(option)}
                        className="bg-accent/20 hover:bg-accent/30 border border-accent/30 hover:border-accent/50 text-bone rounded-xl px-4 py-3 text-left transition-all duration-200 backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98]"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="flex space-x-3">
                    <div className="flex-1">
                      {currentQuestion.type === 'textarea' ? (
                        <Textarea
                          value={currentAnswer}
                          onChange={(e) => setCurrentAnswer(e.target.value)}
                          onKeyPress={handleKeyPress}
                          placeholder={currentQuestion.placeholder}
                          className="min-h-[60px] max-h-[120px] bg-accent/10 border-accent/30 text-bone placeholder-bone/50 rounded-xl resize-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50"
                          rows={2}
                        />
                      ) : (
                        <Input
                          value={currentAnswer}
                          onChange={(e) => setCurrentAnswer(e.target.value)}
                          onKeyPress={handleKeyPress}
                          placeholder={currentQuestion.placeholder}
                          className="bg-accent/10 border-accent/30 text-bone placeholder-bone/50 rounded-xl focus:ring-2 focus:ring-accent/50 focus:border-accent/50"
                        />
                      )}
                    </div>
                    <Button
                      onClick={handleTextSubmit}
                      disabled={!currentAnswer.trim() && !currentQuestion.optional}
                      variant="default"
                      size="md"
                      className="px-6 py-3"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 