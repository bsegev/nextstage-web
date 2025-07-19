'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Brain, Sparkles } from 'lucide-react'

interface UserResponse {
  question: string;
  answer: string;
  timestamp: Date;
}

interface EnhancedConversationalFlowProps {
  onComplete: (responses: UserResponse[], submissionId: string) => void;
}

interface Question {
  question: string;
  type: 'text' | 'textarea' | 'buttons';
  options?: string[];
  reasoning?: string;
  placeholder?: string;
}

interface ExtractedInfo {
  name?: string;
  project?: string;
  audience?: string;
  problem?: string;
  budget?: string;
  timeline?: string;
  industry?: string;
  stage?: string;
  founderType?: string;
}

export const EnhancedConversationalFlow = ({ onComplete }: EnhancedConversationalFlowProps) => {
  const [sessionId] = useState(() => crypto.randomUUID());
  const [currentQuestion, setCurrentQuestion] = useState<Question>({
    question: "What's your first name?",
    type: 'text',
    placeholder: "Your first name...",
    reasoning: "Personal connection and identification"
  });
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [extractedInfo, setExtractedInfo] = useState<ExtractedInfo>({});
  const [progress, setProgress] = useState({ currentQuestion: 1, totalQuestions: 8 });

  const handleAnswer = async (answer: string) => {
    if (!answer.trim()) return;

    setIsThinking(true);
    setCurrentAnswer('');

    try {
      const response = await fetch('/api/enhanced-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId,
          userMessage: answer,
          currentQuestion: currentQuestion.question
        })
      });

      if (!response.ok) {
        throw new Error('Failed to process response');
      }

      const data = await response.json();

      if (data.complete) {
        setIsThinking(false);
        onComplete(data.responses, data.submissionId);
        return;
      }

      setCurrentQuestion(data.nextQuestion);
      setExtractedInfo(data.extractedInfo);
      setProgress(data.progress);

    } catch (error) {
      console.error('Error processing answer:', error);
      setCurrentQuestion({
        question: "Thank you for that insight. What would success look like for you in 6 months?",
        type: 'textarea',
        placeholder: "Paint a picture of your ideal outcome..."
      });
    } finally {
      setIsThinking(false);
    }
  };

  const handleTextSubmit = () => {
    handleAnswer(currentAnswer);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleTextSubmit();
    }
  };

  const handleButtonAnswer = (option: string) => {
    handleAnswer(option);
  };

  if (isThinking) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 bg-obsidian">
        <div className="text-center animate-pulse-glow">
          <div className="w-16 h-16 mx-auto mb-6 bg-accent rounded-full flex items-center justify-center">
            <Brain className="w-8 h-8 text-accent-foreground" />
          </div>
          <h2 className="text-2xl font-serif font-medium text-bone mb-2">
            Processing your response...
          </h2>
          <p className="text-bone/70">
            Analyzing your input and crafting the next question
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-obsidian">
      <div className="max-w-2xl mx-auto w-full">
        {/* Progress indicator */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-accent">
              Question {progress.currentQuestion} of {progress.totalQuestions}
            </span>
            <span className="text-xs text-accent">
              {Math.round((progress.currentQuestion / progress.totalQuestions) * 100)}%
            </span>
          </div>
          <div className="w-full bg-obsidian/60 rounded-full h-2 overflow-hidden">
            <div 
              className="animated-gradient h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(progress.currentQuestion / progress.totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          key={currentQuestion.question}
        >
          <div className="card-elegant p-8 md:p-10 max-w-xl mx-auto animate-slide-up shadow-2xl border border-accent/30 backdrop-blur-md bg-obsidian/90">
            {/* Enhanced info preview */}
            {Object.keys(extractedInfo).length > 0 && (
              <div className="mb-6 bg-accent/10 border border-accent/20 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-accent text-sm font-medium">What I understand so far:</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {extractedInfo.name && (
                    <div className="text-bone/70">
                      <span className="text-bone/50">Name:</span> {extractedInfo.name}
                    </div>
                  )}
                  {extractedInfo.project && (
                    <div className="text-bone/70">
                      <span className="text-bone/50">Building:</span> {extractedInfo.project}
                    </div>
                  )}
                  {extractedInfo.audience && (
                    <div className="text-bone/70">
                      <span className="text-bone/50">For:</span> {extractedInfo.audience}
                    </div>
                  )}
                  {extractedInfo.industry && (
                    <div className="text-bone/70">
                      <span className="text-bone/50">Industry:</span> {extractedInfo.industry}
                    </div>
                  )}
                </div>
              </div>
            )}
            
            <h2 className="text-2xl md:text-3xl font-extrabold font-display text-accent mb-4 leading-snug">
              {currentQuestion.question}
            </h2>

            {/* Question reasoning */}
            {currentQuestion.reasoning && (
              <p className="text-sm text-bone/70 mb-4 bg-obsidian/50 rounded-lg p-3 border border-bone/10">
                <span className="font-medium text-bone">Why this matters:</span> {currentQuestion.reasoning}
              </p>
            )}

            {/* Answer input based on question type */}
            {currentQuestion.type === 'text' && (
              <div className="space-y-4">
                <input
                  value={currentAnswer}
                  onChange={(e) => setCurrentAnswer(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder={currentQuestion.placeholder}
                  className="w-full text-lg py-3 px-4 bg-bone/90 border border-bone/20 rounded-lg text-obsidian placeholder-obsidian/50 focus:border-accent focus:outline-none"
                  autoFocus
                />
                <button
                  onClick={handleTextSubmit}
                  disabled={!currentAnswer.trim()}
                  className="btn-primary w-full"
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            )}

            {currentQuestion.type === 'textarea' && (
              <div className="space-y-4">
                <textarea
                  value={currentAnswer}
                  onChange={(e) => setCurrentAnswer(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder={currentQuestion.placeholder}
                  className="w-full text-lg py-3 px-4 min-h-[120px] resize-none bg-bone/90 border border-bone/20 rounded-lg text-obsidian placeholder-obsidian/50 focus:border-accent focus:outline-none"
                  autoFocus
                />
                <button
                  onClick={handleTextSubmit}
                  disabled={!currentAnswer.trim()}
                  className="btn-primary w-full"
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            )}

            {currentQuestion.type === 'buttons' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQuestion.options?.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleButtonAnswer(option)}
                    className="btn-secondary py-4 text-left justify-start hover:bg-accent hover:border-accent-foreground"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}; 