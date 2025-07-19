import { useState, useCallback, useRef, useEffect } from 'react';
import { ChatMessage, ChatSession, UserResponse } from '../types';
import { STRATEGY_QUESTIONS } from '../utils/questions';
import { extractName, generateId, calculateProgress, formatFollowUpMessage, isValidResponse, delay } from '../utils/helpers';

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [session, setSession] = useState<ChatSession>({
    id: generateId(),
    responses: [],
    currentQuestionIndex: 0,
    isComplete: false,
    startedAt: new Date(),
  });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize with first question
  useEffect(() => {
    if (messages.length === 0) {
      const firstQuestion = STRATEGY_QUESTIONS[0];
      setMessages([{
        id: generateId(),
        type: 'bot',
        content: firstQuestion.question,
        timestamp: new Date(),
        questionIndex: 0,
      }]);
    }
  }, [messages.length]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'end'
    });
  }, [messages]);

  const progress = calculateProgress(currentQuestionIndex, STRATEGY_QUESTIONS.length);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || isLoading) return;
    
    const currentQuestion = STRATEGY_QUESTIONS[currentQuestionIndex];
    
    // Validate response
    if (!isValidResponse(content, currentQuestion.optional)) {
      return;
    }

    setIsLoading(true);

    // Add user message
    const userMessage: ChatMessage = {
      id: generateId(),
      type: 'user',
      content,
      timestamp: new Date(),
      questionIndex: currentQuestionIndex,
    };

    setMessages(prev => [...prev, userMessage]);

    // Create user response
    const userResponse: UserResponse = {
      question: currentQuestion.question,
      answer: content,
      questionIndex: currentQuestionIndex,
      timestamp: new Date(),
    };

    // Update session
    const updatedSession = {
      ...session,
      responses: [...session.responses, userResponse],
      currentQuestionIndex: currentQuestionIndex + 1,
    };

    // Extract name if this is the first question
    if (currentQuestionIndex === 0) {
      updatedSession.userName = extractName(content);
    }

    setSession(updatedSession);

    // Add delay for better UX
    await delay(800);

    // Add follow-up message if exists
    if (currentQuestion.followUp && updatedSession.userName) {
      const followUpMessage: ChatMessage = {
        id: generateId(),
        type: 'bot',
        content: formatFollowUpMessage(currentQuestion.followUp, updatedSession.userName),
        timestamp: new Date(),
        questionIndex: currentQuestionIndex,
      };

      setMessages(prev => [...prev, followUpMessage]);
      await delay(1000);
    }

    // Check if we're done
    if (currentQuestionIndex + 1 >= STRATEGY_QUESTIONS.length) {
      updatedSession.isComplete = true;
      updatedSession.completedAt = new Date();
      setSession(updatedSession);
      setIsLoading(false);
      return;
    }

    // Ask next question
    const nextQuestion = STRATEGY_QUESTIONS[currentQuestionIndex + 1];
    const nextBotMessage: ChatMessage = {
      id: generateId(),
      type: 'bot',
      content: nextQuestion.question,
      timestamp: new Date(),
      questionIndex: currentQuestionIndex + 1,
    };

    setMessages(prev => [...prev, nextBotMessage]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setIsLoading(false);
  }, [currentQuestionIndex, isLoading, session]);

  const currentQuestion = STRATEGY_QUESTIONS[currentQuestionIndex];

  return {
    messages,
    currentQuestion,
    currentQuestionIndex,
    progress,
    isLoading,
    session,
    sendMessage,
    messagesEndRef,
  };
} 