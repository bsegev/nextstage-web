import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { ArrowRight, Brain, Sparkles } from "lucide-react";
// import { supabase } from "@/lib/supabase"; // Disabled to prevent build-time errors
import { useToast } from "../hooks/use-toast";
import { motion } from "framer-motion";
import { 
  ConversationDirector, 
  ConversationContext, 
  FollowUpQuestion,
  analyzeResponseIntelligence,
  ResponseInsight
} from "@/lib/archive/conversation-intelligence";
import { isFeatureEnabled } from "@/lib/archive/feature-flags";

export interface UserResponse {
  question: string;
  answer: string;
  questionIndex: number;
  isFollowUp?: boolean;
  followUpReasoning?: string;
}

interface ConversationalFlowProps {
  onComplete: (responses: UserResponse[], submissionId: string) => void;
}

const baseQuestions = [
  {
    question: "What's your first name?",
    type: "text" as const,
    placeholder: "Your first name..."
  },
  {
    question: "What are you building?",
    type: "textarea" as const,
    placeholder: "Tell us about your project, product, or idea..."
  },
  {
    question: "Who is it for?",
    type: "textarea" as const,
    placeholder: "Describe your target audience or ideal customer..."
  },
  {
    question: "What's the core problem you're solving?",
    type: "textarea" as const,
    placeholder: "What pain point or challenge does your solution address?"
  },
  {
    question: "What would success look like in 6 months?",
    type: "textarea" as const,
    placeholder: "Paint a picture of your ideal outcome..."
  },
  {
    question: "Do you have a timeline in mind?",
    type: "buttons" as const,
    options: ["Immediate", "1–3 months", "3–6 months", "Later"]
  },
  {
    question: "What budget range are you working with?",
    type: "buttons" as const,
    options: ["<$10K", "$10–50K", "$50K+", "To be determined"]
  },
  {
    question: "Anything else you'd like to share?",
    type: "textarea" as const,
    placeholder: "Additional context, concerns, or goals... (optional)",
    optional: true
  }
];

export const ConversationalFlow = ({ onComplete }: ConversationalFlowProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [baseQuestionIndex, setBaseQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<UserResponse[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [isGeneratingFollowUp, setIsGeneratingFollowUp] = useState(false);
  
  // Phase 2: Dynamic conversation state
  const [followUpQuestion, setFollowUpQuestion] = useState<FollowUpQuestion | null>(null);
  const [conversationDirector, setConversationDirector] = useState<ConversationDirector | null>(null);
  
  const { toast } = useToast();

  // Determine current question - either base question or follow-up
  const currentQuestion = followUpQuestion ? 
    {
      question: followUpQuestion.question,
      type: "textarea" as const,
      placeholder: "Please share your thoughts...",
      isFollowUp: true,
      reasoning: followUpQuestion.reasoning
    } : 
    baseQuestions[baseQuestionIndex];

  const isLastBaseQuestion = baseQuestionIndex === baseQuestions.length - 1;
  const totalQuestions = baseQuestions.length; // For progress calculation

  // Initialize conversation director when we have enough responses
  useEffect(() => {
    if (isFeatureEnabled('DYNAMIC_CONVERSATION') && responses.length >= 2 && !conversationDirector) {
      initializeConversationDirector();
    }
  }, [responses, conversationDirector]); // eslint-disable-line react-hooks/exhaustive-deps

  const initializeConversationDirector = async () => {
    try {
      // Analyze current responses to get initial insights
      const profile = await analyzeResponseIntelligence(responses);

      // Create conversation context
      const context: ConversationContext = {
        sophisticationLevel: profile.overallSophistication,
        strategicClarity: profile.strategicClarity,
        informationGaps: [],
        urgencyLevel: profile.urgencyScore,
        conversationHistory: responses,
        currentInsights: profile.insights
      };

      const director = new ConversationDirector(context);
      setConversationDirector(director);
    } catch (error) {
      console.error('Error initializing conversation director:', error);
    }
  };

  const handleAnswer = async (answer: string) => {
    const newResponse: UserResponse = {
      question: currentQuestion.question,
      answer,
      questionIndex: currentQuestionIndex,
      isFollowUp: 'isFollowUp' in currentQuestion ? currentQuestion.isFollowUp : false,
      followUpReasoning: 'reasoning' in currentQuestion ? currentQuestion.reasoning : undefined
    };

    const updatedResponses = [...responses, newResponse];
    setResponses(updatedResponses);
    setCurrentAnswer("");

    // If this was a follow-up question, clear it and continue with base questions
    if (followUpQuestion) {
      setFollowUpQuestion(null);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      
      // Check if we've completed all base questions
      if (isLastBaseQuestion) {
        setIsThinking(true);
        handleSubmissionComplete(updatedResponses);
        return;
      } else {
        // Move to next base question
        setBaseQuestionIndex(baseQuestionIndex + 1);
        return;
      }
    }

    // Handle base question completion
    if (isLastBaseQuestion) {
      setIsThinking(true);
      handleSubmissionComplete(updatedResponses);
      return;
    }

    // Phase 2: Check if we should ask a follow-up question
    if (isFeatureEnabled('DYNAMIC_CONVERSATION') && conversationDirector && baseQuestionIndex >= 2) {
      await considerFollowUpQuestion(newResponse, updatedResponses);
    } else {
      // Move to next base question
      setTimeout(() => {
        setBaseQuestionIndex(baseQuestionIndex + 1);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 300);
    }
  };

  const considerFollowUpQuestion = async (lastResponse: UserResponse, allResponses: UserResponse[]) => {
    try {
      setIsGeneratingFollowUp(true);
      
      // Update conversation director context
      const profile = await analyzeResponseIntelligence(allResponses);
      const context: ConversationContext = {
        sophisticationLevel: profile.overallSophistication,
        strategicClarity: profile.strategicClarity,
        informationGaps: await conversationDirector!.identifyInformationGaps(),
        urgencyLevel: profile.urgencyScore,
        conversationHistory: allResponses,
        currentInsights: profile.insights
      };

      const director = new ConversationDirector(context);
      setConversationDirector(director);

      // Check if we should ask a follow-up
      const assessment = await director.assessConversationCompleteness();
      
      if (assessment.shouldContinue && assessment.recommendedQuestions.length > 0) {
        // Generate a follow-up question
        const followUp = await director.generateFollowUpQuestion(lastResponse);
        
        if (followUp && followUp.priority === 'high') {
          setFollowUpQuestion(followUp);
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setIsGeneratingFollowUp(false);
          return;
        }
      }

      // No follow-up needed, continue to next base question
      setIsGeneratingFollowUp(false);
      setTimeout(() => {
        setBaseQuestionIndex(baseQuestionIndex + 1);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 300);
      
    } catch (error) {
      console.error('Error considering follow-up question:', error);
      setIsGeneratingFollowUp(false);
      
      // Fallback to next base question
      setTimeout(() => {
        setBaseQuestionIndex(baseQuestionIndex + 1);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 300);
    }
  };

  const handleTextSubmit = () => {
    if (currentAnswer.trim() || ('optional' in currentQuestion ? currentQuestion.optional : false)) {
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
      // Extract data from responses for the new schema
      const name = finalResponses.find(r => r.questionIndex === 0)?.answer || "Unknown";
      const projectDescription = finalResponses.find(r => r.questionIndex === 1)?.answer || "";
      const targetAudience = finalResponses.find(r => r.questionIndex === 2)?.answer || "";
      const coreProblem = finalResponses.find(r => r.questionIndex === 3)?.answer || "";
      const successVision = finalResponses.find(r => r.questionIndex === 4)?.answer || "";
      const timeline = finalResponses.find(r => r.questionIndex === 5)?.answer || "";
      const budgetRange = finalResponses.find(r => r.questionIndex === 6)?.answer || "";
      const additionalNotes = finalResponses.find(r => r.questionIndex === 7)?.answer || "";

      // Auto-categorize industry using simple logic (Supabase disabled)
      const industry = projectDescription.toLowerCase().includes('tech') || projectDescription.toLowerCase().includes('software') || projectDescription.toLowerCase().includes('app') 
        ? 'Technology'
        : projectDescription.toLowerCase().includes('health') || projectDescription.toLowerCase().includes('medical')
        ? 'Healthcare'
        : projectDescription.toLowerCase().includes('finance') || projectDescription.toLowerCase().includes('fintech')
        ? 'Finance'
        : 'Other';
      
      /* Original Supabase code - commented out
      // Auto-categorize industry using the database function
      const { data: industryResult } = await supabase
        .rpc('categorize_industry', {
          description: projectDescription,
          audience: targetAudience,
          problem: coreProblem
        });

      const industry = industryResult || 'Other';
      */

      // Supabase disabled - use local ID generation
      console.log('Client profile save requested but Supabase is disabled');
      const mockClientProfileId = `profile_${Date.now()}`;
      
      // Store locally if needed
      localStorage.setItem('nextstage-client-profile', JSON.stringify({
        id: mockClientProfileId,
        name,
        project_description: projectDescription,
        target_audience: targetAudience,
        core_problem: coreProblem,
        success_vision: successVision,
        timeline,
        budget_range: budgetRange,
        additional_notes: additionalNotes,
        industry,
        status: 'draft',
        raw_responses: finalResponses,
        created_at: new Date().toISOString()
      }));

      /* Original Supabase code - commented out
      // Save to client_profiles table
      const { data: clientProfile, error: saveError } = await supabase
        .from('client_profiles')
        .insert({
          name,
          project_description: projectDescription,
          target_audience: targetAudience,
          core_problem: coreProblem,
          success_vision: successVision,
          timeline,
          budget_range: budgetRange,
          additional_notes: additionalNotes,
          industry,
          status: 'draft',
          raw_responses: finalResponses
        })
        .select('id')
        .single();

      if (saveError) {
        console.error('Database save error:', saveError);
        throw new Error('Failed to save profile');
      }

      // Track interaction with enhanced data
      await supabase.from('client_interactions').insert({
        client_profile_id: clientProfile.id,
        interaction_type: 'flow_completed',
        interaction_data: { 
          question_count: finalResponses.length,
          follow_up_count: finalResponses.filter(r => r.isFollowUp).length,
          dynamic_conversation_enabled: isFeatureEnabled('DYNAMIC_CONVERSATION')
        }
      });
      */

      onComplete(finalResponses, mockClientProfileId);
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
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center animate-pulse-glow">
          <div className="w-16 h-16 mx-auto mb-6 bg-accent rounded-full flex items-center justify-center">
            <Brain className="w-8 h-8 text-accent-foreground" />
          </div>
          <h2 className="text-2xl font-serif font-medium text-foreground mb-2">
            Crafting your strategic brief...
          </h2>
          <p className="text-muted-foreground">
            Analyzing your responses and identifying opportunities
          </p>
        </div>
      </div>
    );
  }

  if (isGeneratingFollowUp) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center animate-pulse-glow">
          <div className="w-16 h-16 mx-auto mb-6 bg-accent rounded-full flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-accent-foreground animate-pulse" />
          </div>
          <h2 className="text-2xl font-serif font-medium text-foreground mb-2">
            Generating follow-up question...
          </h2>
          <p className="text-muted-foreground">
            Identifying strategic opportunities in your response
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl mx-auto w-full">
        {/* Progress indicator */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-accent">
              Question {currentQuestionIndex + 1} of {totalQuestions}
              {followUpQuestion && (
                <span className="ml-2 text-xs text-accent/70">
                  (Follow-up)
                </span>
              )}
            </span>
            <span className="text-xs text-accent">
              {Math.round(((baseQuestionIndex + 1) / totalQuestions) * 100)}%
            </span>
          </div>
          <div className="w-full bg-obsidian/60 rounded-full h-2 overflow-hidden">
            <div 
              className="animated-gradient h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((baseQuestionIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          key={currentQuestionIndex} // Add key for smooth transitions
        >
          <Card className="card-elegant p-8 md:p-10 max-w-xl mx-auto animate-slide-up shadow-2xl border border-accent/30 backdrop-blur-md bg-white/5">
            {/* Follow-up indicator */}
            {followUpQuestion && (
              <div className="mb-4 flex items-center text-accent/70 text-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Strategic Follow-up
              </div>
            )}
            
            <h2 className="text-2xl md:text-3xl font-extrabold font-display text-accent mb-4 leading-snug">
              {currentQuestion.question}
            </h2>

            {/* Follow-up reasoning */}
            {followUpQuestion && followUpQuestion.reasoning && (
              <p className="text-sm text-muted-foreground mb-4 bg-muted/30 rounded-lg p-3">
                <span className="font-medium">Why this matters:</span> {followUpQuestion.reasoning}
              </p>
            )}

            {/* Answer input based on question type */}
            {currentQuestion.type === "text" && (
              <div className="space-y-4">
                <Input
                  value={currentAnswer}
                  onChange={(e) => setCurrentAnswer(e.target.value)}
                  placeholder={currentQuestion.placeholder}
                  onKeyPress={handleKeyPress}
                  className="text-lg py-3"
                  autoFocus
                />
                <Button 
                  onClick={handleTextSubmit}
                  disabled={!currentAnswer.trim()}
                  className="btn-primary w-full"
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}

            {currentQuestion.type === "textarea" && (
              <div className="space-y-4">
                <Textarea
                  value={currentAnswer}
                  onChange={(e) => setCurrentAnswer(e.target.value)}
                  placeholder={currentQuestion.placeholder}
                  onKeyPress={handleKeyPress}
                  className="text-lg py-3 min-h-[120px] resize-none"
                  autoFocus
                />
                <Button 
                  onClick={handleTextSubmit}
                  disabled={!currentAnswer.trim() && !(currentQuestion as any).optional}
                  className="btn-primary w-full"
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                {(currentQuestion as any).optional && (
                  <Button 
                    onClick={() => handleAnswer("")}
                    variant="secondary"
                    className="w-full text-muted-foreground"
                  >
                    Skip this question
                  </Button>
                )}
              </div>
            )}

            {currentQuestion.type === "buttons" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQuestion.options?.map((option) => (
                  <Button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    variant="outline"
                    className="btn-secondary py-4 text-left justify-start hover:bg-accent hover:border-accent-foreground"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            )}
          </Card>
        </motion.div>

        {/* Previous responses summary */}
        {responses.length > 0 && (
          <div className="mt-8 space-y-2">
            <p className="text-sm text-muted-foreground mb-4">Previous responses:</p>
            {responses.slice(-3).map((response, index) => (
              <div key={index} className="text-sm bg-muted/30 rounded-lg p-3">
                <div className="flex items-center justify-between">
                <span className="font-medium text-foreground">
                  {response.question}
                </span>
                  {response.isFollowUp && (
                    <span className="text-xs text-accent/70 flex items-center">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Follow-up
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground mt-1">
                  {response.answer || "(skipped)"}
                </p>
              </div>
            ))}
            {responses.length > 3 && (
              <p className="text-xs text-muted-foreground text-center">
                ... and {responses.length - 3} more
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};