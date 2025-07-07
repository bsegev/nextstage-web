'use client';

import { useState, useRef, useEffect } from 'react';
import { ChatProps } from '../types';
import { useEnhancedChat } from '../hooks/useEnhancedChat';
import { Button, Input, Textarea } from '../ui';
import { ChatMessage } from './ChatMessage';
import { CompletionSummary } from './CompletionSummary';

export function EnhancedStrategyChat({ onComplete, onProgress }: ChatProps) {
  const [inputValue, setInputValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    messages,
    currentQuestion,
    currentQuestionIndex,
    progress,
    isLoading,
    session,
    insights,
    analytics,
    sendMessage,
    messagesEndRef,
  } = useEnhancedChat();

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [inputValue]);

  // Focus input when question changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentQuestion?.type === 'text' && inputRef.current) {
        inputRef.current.focus();
      } else if (currentQuestion?.type === 'textarea' && textareaRef.current) {
        textareaRef.current.focus();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [currentQuestion]);

  // Report progress
  useEffect(() => {
    onProgress?.(progress);
  }, [progress, onProgress]);

  // Handle completion
  useEffect(() => {
    if (session.isComplete && onComplete) {
      onComplete(session);
    }
  }, [session.isComplete, session, onComplete]);

  const handleSend = async () => {
    if (inputValue.trim() && !isLoading) {
      await sendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleButtonClick = async (option: string) => {
    if (!isLoading) {
      await sendMessage(option);
    }
  };

  const renderInput = () => {
    if (!currentQuestion || session.isComplete) return null;

    const { type, placeholder, options } = currentQuestion;

    if (type === 'buttons') {
      return (
        <div className="flex flex-wrap gap-2">
          {options?.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              onClick={() => handleButtonClick(option)}
              disabled={isLoading}
              className="text-sm"
            >
              {option}
            </Button>
          ))}
        </div>
      );
    }

    if (type === 'textarea') {
      return (
        <div className="flex flex-col gap-3">
          <Textarea
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={isLoading}
            rows={3}
          />
          <Button
            onClick={handleSend}
            disabled={!inputValue.trim() || isLoading}
            className="self-end"
          >
            {isLoading ? 'Sending...' : 'Send'}
          </Button>
        </div>
      );
    }

    return (
      <div className="flex gap-3">
        <Input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={isLoading}
          className="flex-1"
        />
        <Button
          onClick={handleSend}
          disabled={!inputValue.trim() || isLoading}
        >
          {isLoading ? 'Sending...' : 'Send'}
        </Button>
      </div>
    );
  };

  if (session.isComplete) {
    return (
      <CompletionSummary 
        session={session} 
        insights={insights}
        analytics={analytics}
      />
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Progress Bar */}
      <div className="sticky top-0 z-10 bg-obsidian/95 backdrop-blur-sm border-b border-accent/20 px-6 py-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-bone/70">
            Question {currentQuestionIndex + 1} of {8}
          </span>
          <div className="flex items-center gap-4">
            <span className="text-sm text-accent font-medium">
              {progress}% Complete
            </span>
            {session.userName && (
              <span className="text-sm text-bone/50">
                Hello, {session.userName}!
              </span>
            )}
          </div>
        </div>
        <div className="h-2 bg-accent/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-accent rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isLoading && (
          <div className="flex items-center gap-2 text-bone/50">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
            <span className="text-sm">Analyzing your response...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="sticky bottom-0 bg-obsidian/95 backdrop-blur-sm border-t border-accent/20 px-6 py-4">
        {renderInput()}
      </div>
    </div>
  );
} 