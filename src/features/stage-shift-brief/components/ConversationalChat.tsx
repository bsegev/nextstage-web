import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { ArrowRight, Brain, Sparkles, User, Bot, Database, WifiOff } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { UserResponse } from "./ConversationalFlow";
import { ConversationService } from "@/lib/conversation-service";

interface ConversationalChatProps {
  onComplete: (responses: UserResponse[], submissionId: string) => void;
  existingResponses?: UserResponse[];
  submissionId?: string;
}

interface ChatMessage {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
  questionIndex?: number;
  isFormatted?: boolean;
}

// Enhanced spell check and formatting utilities
const spellCheckAndFormat = (text: string): string => {
  // Basic spell corrections for common typos
  const corrections: { [key: string]: string } = {
    'anme': 'name',
    'teh': 'the',
    'nad': 'and',
    'adn': 'and',
    'thier': 'their',
    'recieve': 'receive',
    'seperate': 'separate',
    'definately': 'definitely',
    'occured': 'occurred',
    'accomodate': 'accommodate',
    'beleive': 'believe',
    'begining': 'beginning',
    'buisness': 'business',
    'calender': 'calendar',
    'collegue': 'colleague',
    'develope': 'develop',
    'enviroment': 'environment',
    'existance': 'existence',
    'goverment': 'government',
    'independant': 'independent',
    'knowlege': 'knowledge',
    'maintainance': 'maintenance',
    'neccessary': 'necessary',
    'occassion': 'occasion',
    'priveledge': 'privilege',
    'recomend': 'recommend',
    'rythm': 'rhythm',
    'sucessful': 'successful',
    'tommorow': 'tomorrow',
    'untill': 'until',
    'wellcome': 'welcome',
    'wether': 'whether',
    'withing': 'within'
  };

  // Apply corrections
  let corrected = text;
  Object.entries(corrections).forEach(([typo, correct]) => {
    const regex = new RegExp(`\\b${typo}\\b`, 'gi');
    corrected = corrected.replace(regex, correct);
  });

  // Basic formatting
  corrected = corrected
    .replace(/\s+/g, ' ') // Multiple spaces to single space
    .replace(/^\s+|\s+$/g, '') // Trim
    .replace(/([.!?])\s*([a-z])/g, '$1 $2'); // Ensure space after punctuation

  return corrected;
};

// Enhanced name extraction
const extractName = (response: string): string => {
  // Clean the response
  const cleaned = response.trim();
  
  // Handle common name patterns
  const namePatterns = [
    /^(?:my name is|i'm|i am|call me|it's|its|name is)\s+(\w+)/i,
    /^(\w+)(?:\s+is\s+my\s+name)?$/i,
    /^(?:hi|hello|hey),?\s*(?:i'm|i am|my name is)?\s*(\w+)/i,
    /^(\w+)(?:\s+here)?$/i
  ];

  for (const pattern of namePatterns) {
    const match = cleaned.match(pattern);
    if (match && match[1] && match[1].length > 1) {
      // Avoid capturing common filler words
      const name = match[1].toLowerCase();
      if (!['the', 'and', 'but', 'for', 'you', 'are', 'can', 'will', 'was', 'were', 'been', 'have', 'has', 'had', 'do', 'did', 'does', 'say', 'said', 'get', 'got', 'go', 'went', 'come', 'came', 'see', 'saw', 'know', 'knew', 'think', 'thought', 'take', 'took', 'give', 'gave', 'make', 'made', 'work', 'worked', 'want', 'wanted', 'use', 'used', 'find', 'found', 'tell', 'told', 'ask', 'asked', 'seem', 'seemed', 'feel', 'felt', 'try', 'tried', 'leave', 'left', 'move', 'moved'].includes(name)) {
        return name.charAt(0).toUpperCase() + name.slice(1);
      }
    }
  }

  // Fallback: first word that's not a common word
  const words = cleaned.toLowerCase().split(/\s+/);
  for (const word of words) {
    if (word.length > 1 && 
        !['my', 'is', 'am', 'the', 'and', 'but', 'for', 'you', 'are', 'can', 'will', 'was', 'were', 'been', 'have', 'has', 'had', 'do', 'did', 'does', 'say', 'said', 'get', 'got', 'go', 'went', 'come', 'came', 'see', 'saw', 'know', 'knew', 'think', 'thought', 'take', 'took', 'give', 'gave', 'make', 'made', 'work', 'worked', 'want', 'wanted', 'use', 'used', 'find', 'found', 'tell', 'told', 'ask', 'asked', 'seem', 'seemed', 'feel', 'felt', 'try', 'tried', 'leave', 'left', 'move', 'moved'].includes(word)) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  }

  // Last resort: just capitalize first letter of first word
  return cleaned.split(' ')[0].charAt(0).toUpperCase() + cleaned.split(' ')[0].slice(1);
};

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

export const ConversationalChat = ({ 
  onComplete, 
  existingResponses = [], 
  submissionId: initialSubmissionId = ''
}: ConversationalChatProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<UserResponse[]>(existingResponses);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [userName, setUserName] = useState("");
  const [submissionId, setSubmissionId] = useState(initialSubmissionId);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [dbStatus, setDbStatus] = useState<'connected' | 'fallback' | 'not_ready'>('not_ready');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const conversationService = new ConversationService();

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  // Initialize conversation and restore history
  useEffect(() => {
    initializeConversation();
  }, []);

  const initializeConversation = async () => {
    try {
      // Generate submission ID if not provided
      const newSubmissionId = submissionId || crypto.randomUUID();
      setSubmissionId(newSubmissionId);

      // Create or get conversation
      const conversation = await conversationService.createConversation({
        user_name: userName,
        current_agent: 'conversational_chat',
        current_topic: 'discovery',
        sophistication_level: 'beginner'
      });

      setConversationId(conversation.id);
      setDbStatus('connected');

      // Try to restore conversation history
      await restoreConversationHistory(conversation.id);

    } catch (error) {
      console.error('Error initializing conversation:', error);
      setDbStatus('fallback');
      // Fall back to local storage
      await initializeLocalFallback();
    }
    
    setIsLoading(false);
  };

  const initializeLocalFallback = async () => {
    // Try to restore from localStorage
    const savedState = localStorage.getItem('nextstage-conversation');
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        setMessages(parsed.messages || []);
        setResponses(parsed.responses || []);
        setCurrentQuestionIndex(parsed.currentQuestionIndex || 0);
        setUserName(parsed.userName || '');
        
        if (parsed.messages.length === 0) {
          // Start with first question
          setTimeout(() => {
            addBotMessage(questions[0].question, 0);
          }, 500);
        }
        return;
      } catch (error) {
        console.error('Error parsing saved state:', error);
      }
    }

    // Start fresh
    setTimeout(() => {
      addBotMessage(questions[0].question, 0);
    }, 500);
  };

  const restoreConversationHistory = async (convId: string) => {
    try {
      const savedMessages = await conversationService.getConversationMessages(convId);
      
      if (savedMessages.length > 0) {
        // Convert database messages to chat messages
        const chatMessages: ChatMessage[] = savedMessages.map((msg, index) => ({
          id: msg.id,
          type: msg.role === 'user' ? 'user' : 'bot',
          content: msg.content,
          timestamp: new Date(msg.created_at),
          questionIndex: msg.role === 'assistant' ? Math.floor(index / 2) : undefined
        }));

        setMessages(chatMessages);

        // Rebuild responses from conversation history
        const rebuiltResponses: UserResponse[] = [];
        let questionIndex = 0;
        
        for (let i = 0; i < savedMessages.length; i += 2) {
          const botMsg = savedMessages[i];
          const userMsg = savedMessages[i + 1];
          
          if (botMsg?.role === 'assistant' && userMsg?.role === 'user') {
            rebuiltResponses.push({
              question: botMsg.content,
              answer: userMsg.content,
              questionIndex: questionIndex++
            });
          }
        }

        setResponses(rebuiltResponses);
        setCurrentQuestionIndex(Math.min(rebuiltResponses.length, questions.length - 1));
        
        // Extract name from first response
        if (rebuiltResponses.length > 0) {
          const extractedName = extractName(rebuiltResponses[0].answer);
          setUserName(extractedName);
        }
      } else {
        // No history, start fresh
        setTimeout(() => {
          addBotMessage(questions[0].question, 0);
        }, 500);
      }
    } catch (error) {
      console.error('Error restoring conversation history:', error);
      // Start fresh on error
      setTimeout(() => {
        addBotMessage(questions[0].question, 0);
      }, 500);
    }
  };

  // Save conversation state
  const saveConversationState = useCallback(() => {
    if (dbStatus === 'fallback') {
      // Save to localStorage as backup
      const state = {
        messages,
        responses,
        currentQuestionIndex,
        userName,
        submissionId,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('nextstage-conversation', JSON.stringify(state));
    }
  }, [messages, responses, currentQuestionIndex, userName, submissionId, dbStatus]);

  // Auto-save state changes
  useEffect(() => {
    if (!isLoading) {
      saveConversationState();
    }
  }, [messages, responses, currentQuestionIndex, userName, saveConversationState, isLoading]);

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

  const addBotMessage = async (content: string, questionIndex?: number) => {
    const newMessage: ChatMessage = {
      id: `bot-${Date.now()}`,
      type: 'bot',
      content,
      timestamp: new Date(),
      questionIndex
    };

    setMessages(prev => [...prev, newMessage]);

    // Save to database if connected
    if (dbStatus === 'connected' && conversationId) {
      try {
        await conversationService.addMessage(
          conversationId,
          'assistant',
          content,
          {
            messageType: 'question',
            agentName: 'conversational_chat',
            currentTopic: 'discovery'
          }
        );
      } catch (error) {
        console.error('Error saving bot message:', error);
      }
    }
  };

  const addUserMessage = async (content: string) => {
    // Apply spell check and formatting
    const formattedContent = spellCheckAndFormat(content);
    
    const newMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      type: 'user',
      content: formattedContent,
      timestamp: new Date(),
      isFormatted: formattedContent !== content
    };
    
    setMessages(prev => [...prev, newMessage]);

    // Save to database if connected
    if (dbStatus === 'connected' && conversationId) {
      try {
        await conversationService.addMessage(
          conversationId,
          'user',
          formattedContent,
          {
            messageType: 'answer',
            currentTopic: 'discovery'
          }
        );
      } catch (error) {
        console.error('Error saving user message:', error);
      }
    }

    return formattedContent;
  };

  const handleAnswer = async (answer: string) => {
    // Add user message with formatting
    const formattedAnswer = await addUserMessage(answer);
    
    // Store response
    const newResponse: UserResponse = {
      question: currentQuestion.question,
      answer: formattedAnswer,
      questionIndex: currentQuestionIndex
    };

    const updatedResponses = [...responses, newResponse];
    setResponses(updatedResponses);
    setCurrentAnswer("");

    // Store user name from first question
    if (currentQuestionIndex === 0) {
      const extractedName = extractName(formattedAnswer);
      setUserName(extractedName);
      
      // Update conversation with user name
      if (dbStatus === 'connected' && conversationId) {
        try {
          await conversationService.updateConversation(conversationId, {
            user_name: extractedName
          });
        } catch (error) {
          console.error('Error updating conversation with user name:', error);
        }
      }
    }

    // Add follow-up message if exists
    if (currentQuestion.followUp) {
      const followUpMessage = currentQuestion.followUp.replace('{name}', userName || extractName(formattedAnswer));
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
        const currentName = userName || (currentQuestionIndex === 0 ? extractName(formattedAnswer) : "");
        addBotMessage(nextQuestion.question.replace('{name}', currentName), currentQuestionIndex + 1);
      }, 2500);
    }
  };

  const handleTextSubmit = () => {
    if (currentAnswer.trim()) {
      handleAnswer(currentAnswer.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleTextSubmit();
    }
  };

  const handleSubmissionComplete = async (finalResponses: UserResponse[]) => {
    try {
      // Complete conversation in database
      if (dbStatus === 'connected' && conversationId) {
        await conversationService.updateConversation(conversationId, {
          status: 'completed',
          completion_percentage: 100
        });
      }

      // Clear localStorage backup
      localStorage.removeItem('nextstage-conversation');

      // Call completion callback
      onComplete(finalResponses, submissionId);
    } catch (error) {
      console.error('Error completing conversation:', error);
      // Still call completion callback even if database update fails
      onComplete(finalResponses, submissionId);
    }
  };

  const handleButtonChoice = (choice: string) => {
    handleAnswer(choice);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-obsidian flex items-center justify-center">
        <div className="text-center">
          <Brain className="h-12 w-12 text-accent animate-pulse mx-auto mb-4" />
          <p className="text-bone">Loading conversation...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-obsidian text-bone font-geist">
      {/* Header with DB Status */}
      <div className="sticky top-0 bg-obsidian/95 backdrop-blur-sm border-b border-bone/10 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-lg font-medium">NextStage Strategy Session</h1>
            <div className="flex items-center space-x-1">
              {dbStatus === 'connected' ? (
                <Database className="h-4 w-4 text-green-500" />
              ) : (
                <WifiOff className="h-4 w-4 text-yellow-500" />
              )}
              <span className="text-xs text-bone/60">
                {dbStatus === 'connected' ? 'Connected' : 'Local Mode'}
              </span>
            </div>
          </div>
          <div className="text-sm text-bone/60">
            {currentQuestionIndex + 1} of {questions.length}
          </div>
        </div>
      </div>

      {/* Chat Container */}
        <div 
          ref={chatContainerRef}
        className="max-w-4xl mx-auto px-4 py-6 min-h-[calc(100vh-200px)]"
      >
        {/* Messages */}
        <div className="space-y-6 mb-8">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                <div className={`max-w-3xl flex ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start space-x-3`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === 'user' 
                      ? 'bg-accent text-obsidian ml-3' 
                      : 'bg-bone/10 text-bone mr-3'
                  }`}>
                    {message.type === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>
                  <div className={`card-elegant p-4 ${
                      message.type === 'user' 
                      ? 'bg-accent/10 border-accent/20' 
                      : 'bg-bone/5 border-bone/10'
                  }`}>
                    <p className="text-bone/90 leading-relaxed">
                      {message.content}
                      {message.isFormatted && (
                        <span className="text-xs text-bone/50 ml-2">(formatted)</span>
                      )}
                    </p>
                    <div className="text-xs text-bone/50 mt-2">
                      {message.timestamp.toLocaleTimeString()}
                    </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

          {/* Thinking Animation */}
          {isThinking && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="max-w-3xl flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-bone/10 text-bone flex items-center justify-center mr-3">
                  <Brain className="h-4 w-4 animate-pulse" />
                </div>
                <div className="card-elegant p-4 bg-bone/5 border-bone/10">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="h-4 w-4 text-accent animate-pulse" />
                    <p className="text-bone/90">Generating your strategic brief...</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
                    </div>

        {/* Input Area */}
        {!isThinking && currentQuestionIndex < questions.length && (
          <div className="sticky bottom-0 bg-obsidian/95 backdrop-blur-sm border-t border-bone/10 pt-6">
            <div className="card-elegant p-6 bg-bone/5 border-bone/10">
              {currentQuestion.type === 'text' && (
                <div className="space-y-4">
                  <Input
                            value={currentAnswer}
                            onChange={(e) => setCurrentAnswer(e.target.value)}
                    onKeyDown={handleKeyPress}
                            placeholder={currentQuestion.placeholder}
                    className="bg-obsidian/50 border-bone/20 text-bone placeholder-bone/50 focus:border-accent focus:ring-accent"
                  />
                  <Button
                    onClick={handleTextSubmit}
                    disabled={!currentAnswer.trim()}
                    className="w-full bg-accent hover:bg-accent/90 text-obsidian font-medium"
                  >
                    Continue <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              )}

              {currentQuestion.type === 'textarea' && (
                <div className="space-y-4">
                  <Textarea
                            value={currentAnswer}
                            onChange={(e) => setCurrentAnswer(e.target.value)}
                    onKeyDown={handleKeyPress}
                            placeholder={currentQuestion.placeholder}
                    className="bg-obsidian/50 border-bone/20 text-bone placeholder-bone/50 focus:border-accent focus:ring-accent min-h-[120px] resize-none"
                    rows={4}
                  />
                  <Button
                    onClick={handleTextSubmit}
                    disabled={!currentAnswer.trim()}
                    className="w-full bg-accent hover:bg-accent/90 text-obsidian font-medium"
                  >
                    Continue <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              )}

              {currentQuestion.type === 'buttons' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {currentQuestion.options?.map((option, index) => (
                      <Button
                        key={index}
                        onClick={() => handleButtonChoice(option)}
                        variant="outline"
                        className="bg-obsidian/50 border-bone/20 text-bone hover:bg-accent/10 hover:border-accent/50 hover:text-accent transition-all duration-200"
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                    </div>
                  )}
            </div>
              </div>
          )}

        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}; 