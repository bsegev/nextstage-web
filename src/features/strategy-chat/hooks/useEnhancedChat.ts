import { useState, useCallback, useRef, useEffect } from 'react';
import { ChatMessage, ChatSession, UserResponse } from '../types';
import { STRATEGY_QUESTIONS } from '../utils/questions';
import { extractName, generateId, calculateProgress, isValidResponse, delay } from '../utils/helpers';

interface EnhancedChatState {
  messages: ChatMessage[];
  currentQuestionIndex: number;
  isLoading: boolean;
  session: ChatSession;
  insights?: string;
  analytics?: {
    totalMessages: number;
    sessionDuration: number;
    averageResponseTime: number;
  };
}

export function useEnhancedChat() {
  const [state, setState] = useState<EnhancedChatState>({
    messages: [],
    currentQuestionIndex: 0,
    isLoading: false,
    session: {
      id: generateId(),
      responses: [],
      currentQuestionIndex: 0,
      isComplete: false,
      startedAt: new Date(),
    },
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'end'
    });
  }, [state.messages]);

  // Initialize with first question
  useEffect(() => {
    if (!isInitialized && state.messages.length === 0) {
      const firstQuestion = STRATEGY_QUESTIONS[0];
      setState(prev => ({
        ...prev,
        messages: [{
          id: generateId(),
          type: 'bot',
          content: firstQuestion.question,
          timestamp: new Date(),
          questionIndex: 0,
        }]
      }));
      setIsInitialized(true);
    }
  }, [isInitialized, state.messages.length]);

  const progress = calculateProgress(state.currentQuestionIndex, STRATEGY_QUESTIONS.length);

  const createSession = useCallback(async (userName: string) => {
    try {
      const response = await fetch('/api/strategy-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'create_session',
          userName
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setState(prev => ({
          ...prev,
          session: { ...prev.session, ...data.session },
          messages: [
            ...prev.messages,
            {
              id: generateId(),
              type: 'bot',
              content: data.welcomeMessage,
              timestamp: new Date(),
              questionIndex: 0,
            }
          ]
        }));
      }
    } catch (error) {
      console.error('Error creating session:', error);
      // Continue with local fallback
    }
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || state.isLoading) return;
    
    const currentQuestion = STRATEGY_QUESTIONS[state.currentQuestionIndex];
    
    // Validate response
    if (!isValidResponse(content, currentQuestion.optional)) {
      return;
    }

    setState(prev => ({ ...prev, isLoading: true }));

    // Add user message immediately
    const userMessage: ChatMessage = {
      id: generateId(),
      type: 'user',
      content,
      timestamp: new Date(),
      questionIndex: state.currentQuestionIndex,
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage]
    }));

    // Create user response
    const userResponse: UserResponse = {
      question: currentQuestion.question,
      answer: content,
      questionIndex: state.currentQuestionIndex,
      timestamp: new Date(),
    };

    // Update session with new response
    const updatedSession = {
      ...state.session,
      responses: [...state.session.responses, userResponse],
      currentQuestionIndex: state.currentQuestionIndex + 1,
    };

    // Extract name if this is the first question
    if (state.currentQuestionIndex === 0) {
      updatedSession.userName = extractName(content);
      // Create session in backend
      await createSession(updatedSession.userName);
    }

    setState(prev => ({
      ...prev,
      session: updatedSession
    }));

    // Add delay for better UX
    await delay(800);

    try {
      // Send message to enhanced API
      const response = await fetch('/api/strategy-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'send_message',
          sessionId: state.session.id,
          userResponse: content,
          questionIndex: state.currentQuestionIndex
        })
      });

      const data = await response.json();
      
      if (data.success) {
        // Add AI-generated follow-up message
        const aiMessage: ChatMessage = {
          id: generateId(),
          type: 'bot',
          content: data.followUp,
          timestamp: new Date(),
          questionIndex: state.currentQuestionIndex,
        };

        setState(prev => ({
          ...prev,
          messages: [...prev.messages, aiMessage]
        }));

        await delay(1000);
      }
    } catch (error) {
      console.error('Error sending message to API:', error);
      
      // Fallback to next question
      if (state.currentQuestionIndex + 1 < STRATEGY_QUESTIONS.length) {
        const nextQuestion = STRATEGY_QUESTIONS[state.currentQuestionIndex + 1];
        const nextMessage: ChatMessage = {
          id: generateId(),
          type: 'bot',
          content: nextQuestion.question,
          timestamp: new Date(),
          questionIndex: state.currentQuestionIndex + 1,
        };

        setState(prev => ({
          ...prev,
          messages: [...prev.messages, nextMessage]
        }));
      }
    }

    // Check if we're done
    if (state.currentQuestionIndex + 1 >= STRATEGY_QUESTIONS.length) {
      updatedSession.isComplete = true;
      updatedSession.completedAt = new Date();
      
      // Complete session in backend
      await completeSession(updatedSession);
      
      setState(prev => ({
        ...prev,
        session: updatedSession,
        isLoading: false
      }));
      return;
    }

    // Move to next question
    setState(prev => ({
      ...prev,
      currentQuestionIndex: prev.currentQuestionIndex + 1,
      isLoading: false
    }));
  }, [state.currentQuestionIndex, state.isLoading, state.session, createSession]);

  const completeSession = useCallback(async (completedSession: ChatSession) => {
    try {
      const response = await fetch('/api/strategy-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'complete_session',
          sessionId: completedSession.id,
          session: completedSession
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setState(prev => ({
          ...prev,
          insights: data.insights,
          analytics: data.analytics
        }));
      }
    } catch (error) {
      console.error('Error completing session:', error);
      // Continue with local fallback
    }
  }, []);

  const currentQuestion = STRATEGY_QUESTIONS[state.currentQuestionIndex];

  return {
    messages: state.messages,
    currentQuestion,
    currentQuestionIndex: state.currentQuestionIndex,
    progress,
    isLoading: state.isLoading,
    session: state.session,
    insights: state.insights,
    analytics: state.analytics,
    sendMessage,
    messagesEndRef,
  };
} 