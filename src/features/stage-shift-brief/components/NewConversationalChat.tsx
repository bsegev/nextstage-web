import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { ArrowRight, Brain, Sparkles, User, Bot } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

interface ChatMessage {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
  questionIndex?: number;
}

interface UserResponse {
  question: string;
  answer: string;
  questionIndex: number;
}

interface NewConversationalChatProps {
  onComplete?: (responses: UserResponse[], submissionId: string) => void;
}

const questions = [
  {
    question: "Hi there! I'm your NextStage Strategy Concierge. What's your first name?",
    type: "text" as const,
    placeholder: "Your first name...",
    followUp: "Nice to meet you, {name}! 👋"
  },
  {
    question: "What are you building? I'd love to hear about your vision.",
    type: "textarea" as const,
    placeholder: "Tell me about your project, product, or idea...",
    followUp: ""
  },
  {
    question: "Who is this for? Paint me a picture of your ideal customer.",
    type: "textarea" as const,
    placeholder: "Describe your target audience...",
    followUp: ""
  },
  {
    question: "What's the core problem you're solving? What keeps your customers up at night?",
    type: "textarea" as const,
    placeholder: "What pain point or challenge does your solution address?",
    followUp: ""
  },
  {
    question: "Dream with me for a moment - what would success look like in 6 months?",
    type: "textarea" as const,
    placeholder: "Paint a picture of your ideal outcome...",
    followUp: ""
  },
  {
    question: "What's your ideal timeline for making this happen?",
    type: "buttons" as const,
    options: ["Let's go now! 🚀", "1–3 months", "3–6 months", "We're exploring"],
    followUp: ""
  },
  {
    question: "What budget range are you working with?",
    type: "buttons" as const,
    options: ["<$10K", "$10–50K", "$50K+", "Let's discuss"],
    followUp: ""
  },
  {
    question: "Anything else you'd like to share? Any concerns, dreams, or wild ideas?",
    type: "textarea" as const,
    placeholder: "Additional context, concerns, or goals... (optional)",
    optional: true,
    followUp: ""
  }
];

export const NewConversationalChat = ({ onComplete }: NewConversationalChatProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<UserResponse[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [userName, setUserName] = useState("");
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  // Simple name extraction
  const extractName = (response: string): string => {
    const cleaned = response
      .toLowerCase()
      .replace(/^(my name is|i'm|i am|call me|it's|its|name is)\s+/i, '')
      .replace(/[^\w\s]/g, '')
      .trim();
    
    const name = cleaned.split(' ')[0];
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ 
      behavior: "smooth",
      block: "end"
    });
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => {
        scrollToBottom();
      }, 100);
    }
  }, [messages.length, scrollToBottom]);

  // Initial setup
  useEffect(() => {
    // Start with first question
    setTimeout(() => {
      addBotMessage(questions[0].question, 0);
    }, 500);
  }, []);

  const addBotMessage = (content: string, questionIndex?: number) => {
    const newMessage: ChatMessage = {
      id: `bot-${Date.now()}`,
      type: 'bot',
      content,
      timestamp: new Date(),
      questionIndex
    };

    setMessages(prev => [...prev, newMessage]);
  };

  const addUserMessage = (content: string) => {
    const newMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      type: 'user',
      content,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, newMessage]);
  };

  const handleAnswer = async (answer: string) => {
    // Add user message
    addUserMessage(answer);
    
    // Store response
    const newResponse: UserResponse = {
      question: currentQuestion.question,
      answer,
      questionIndex: currentQuestionIndex
    };

    const updatedResponses = [...responses, newResponse];
    setResponses(updatedResponses);
    setCurrentAnswer("");

    // Store user name from first question
    if (currentQuestionIndex === 0) {
      const extractedName = extractName(answer);
      setUserName(extractedName);
    }

    // Add follow-up message if exists
    if (currentQuestion.followUp) {
      const followUpMessage = currentQuestion.followUp.replace('{name}', userName || extractName(answer));
      setTimeout(() => {
        addBotMessage(followUpMessage);
      }, 1500);
    }

    // Check if this is the last question
    if (isLastQuestion) {
      // Start final thinking process
      setTimeout(() => {
        setIsThinking(true);
        handleSubmissionComplete(updatedResponses);
      }, 2500);
    } else {
      // Move to next question
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        const nextQuestion = questions[currentQuestionIndex + 1];
        const currentName = userName || (currentQuestionIndex === 0 ? extractName(answer) : "");
        addBotMessage(nextQuestion.question.replace('{name}', currentName), currentQuestionIndex + 1);
      }, 2500);
    }
  };

  const handleTextSubmit = () => {
    if (currentAnswer.trim() || (currentQuestion && 'optional' in currentQuestion && currentQuestion.optional)) {
      handleAnswer(currentAnswer.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleTextSubmit();
    }
  };

  const handleSubmissionComplete = async (finalResponses: UserResponse[]) => {
    try {
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const submissionId = crypto.randomUUID();
      
      // Call onComplete if provided
      if (onComplete) {
        onComplete(finalResponses, submissionId);
      } else {
        // Default behavior - show completion message
        toast({
          title: "Strategy Brief Complete!",
          description: `Thanks ${userName}! Your brief has been generated successfully.`,
        });
        setIsThinking(false);
      }
    } catch (error) {
      console.error('Error completing submission:', error);
      toast({
        title: "Error",
        description: "Failed to generate your brief. Please try again.",
        variant: "destructive",
      });
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
              Crafting your strategic brief...
            </h2>
            <p className="text-bone/70 text-lg">
              {userName ? `Thanks ${userName}! ` : ''}Analyzing your vision and identifying opportunities
            </p>
            <div className="mt-8 flex justify-center space-x-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-accent rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col pt-24">
      {/* Fixed Header */}
      <div className="flex-shrink-0 bg-obsidian/95 backdrop-blur-sm border-b border-accent/20 px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-obsidian" />
              </div>
              <div>
                <h1 className="font-display text-xl font-medium text-bone">Strategy Brief Generator</h1>
                <p className="text-xs text-bone/60">
                  Online • Question {currentQuestionIndex + 1} of {questions.length}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-24 h-2 bg-obsidian/60 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-accent transition-all duration-500"
                  style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                />
              </div>
              <span className="text-xs text-bone/60 font-medium">
                {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Messages Area */}
        <div 
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto px-6 py-6"
        >
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Welcome Message */}
            <div className="text-center py-8 border-b border-accent/10">
              <p className="text-bone/70 text-lg max-w-2xl mx-auto">
                Let&apos;s create a comprehensive strategy brief for your project. I&apos;ll guide you through some questions to understand your vision perfectly.
              </p>
            </div>

            {/* Chat Messages */}
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
                    {/* Avatar */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === 'user' 
                        ? 'bg-bone text-obsidian' 
                        : 'bg-accent text-obsidian'
                    }`}>
                      {message.type === 'user' ? (
                        <User className="w-4 h-4" />
                      ) : (
                        <Bot className="w-4 h-4" />
                      )}
                    </div>

                    {/* Message Bubble */}
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

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Fixed Input Area */}
        <AnimatePresence>
          {(currentQuestion && !isThinking) && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 bg-obsidian/95 backdrop-blur-sm border-t border-accent/20 px-6 py-4"
            >
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  {currentQuestion.type === 'buttons' ? (
                    <div className="grid grid-cols-2 gap-3">
                      {currentQuestion.options?.map((option, index) => (
                        <button
                          key={`q${currentQuestionIndex}-opt${index}-${option}`}
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
                        disabled={!currentAnswer.trim() && !(currentQuestion && 'optional' in currentQuestion && currentQuestion.optional)}
                        variant="default"
                        size="default"
                        className="px-6 py-3"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}; 