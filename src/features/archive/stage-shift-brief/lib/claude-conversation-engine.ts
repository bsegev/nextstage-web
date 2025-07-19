// Claude-based Conversation Engine
// Following Anthropic's "Building Effective Agents" patterns

import { ClaudePrompts } from './claude-prompts';

export interface ConversationMessage {
  id: string;
  conversation_id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  message_type?: 'text' | 'question' | 'answer' | 'insight' | 'summary';
  agent_name?: string;
  agent_reasoning?: string;
  tool_calls?: any;
  expert_framing?: string;
  strategic_insights?: string;
  hidden_opportunities?: string;
  word_count?: number;
  strategic_keywords?: string[];
  sentiment_score?: number;
  response_quality_score?: number;
  insight_depth?: number;
  created_at: Date;
}

export interface ConversationState {
  messages: ConversationMessage[];
  currentPhase: 'discovery' | 'refinement' | 'completion';
  userProfile: UserProfile;
  nextAction: 'ask_question' | 'generate_followup' | 'complete' | 'refine';
  conversationId: string;
}

export interface UserProfile {
  // Map to conversations table fields
  user_name?: string;
  user_email?: string;
  current_agent?: string;
  current_topic?: string;
  sophistication_level?: 'beginner' | 'intermediate' | 'advanced';
  status?: 'active' | 'paused' | 'completed' | 'abandoned';
  completion_percentage?: number;
  business_type?: string;
  industry?: string;
  target_audience?: string;
  core_problems?: string[];
  success_metrics?: any;
  timeline?: string;
  budget_range?: string;
  expert_insights?: any;
  strategic_opportunities?: any;
  risk_assessments?: any;
  market_positioning?: any;
  engagement_score?: number;
  conversation_depth?: number;
  
  // Legacy fields for backward compatibility
  name?: string;
  projectDescription?: string;
  coreProblem?: string;
  successVision?: string;
  budget?: string;
  completenessScore?: number;
}

export interface ConversationResponse {
  nextMessage?: string;
  shouldContinue: boolean;
  isComplete: boolean;
  metadata: {
    reasoning: string;
    confidence: number;
    suggestedAction: string;
  };
}

// Core conversation engine class
export class ClaudeConversationEngine {
  private apiKey: string;
  private baseUrl: string = 'https://api.anthropic.com/v1/messages';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  // Main conversation orchestrator
  async processUserInput(
    input: string, 
    conversationState: ConversationState
  ): Promise<ConversationResponse> {
    // Add current user input to conversation state for proper context
    const currentUserMessage: ConversationMessage = {
      id: crypto.randomUUID(),
      conversation_id: conversationState.conversationId,
      role: 'user',
      content: input,
      created_at: new Date(),
    };
    
    conversationState.messages.push(currentUserMessage);
    
    // Route to appropriate handler based on conversation phase
    switch (conversationState.currentPhase) {
      case 'discovery':
        return this.handleDiscoveryPhase(input, conversationState);
      case 'refinement':
        return this.handleRefinementPhase(input, conversationState);
      case 'completion':
        return this.handleCompletionPhase(input, conversationState);
      default:
        throw new Error(`Unknown conversation phase: ${conversationState.currentPhase}`);
    }
  }

  // Pattern: Routing - Direct to specialized handlers
  private async handleDiscoveryPhase(
    input: string, 
    state: ConversationState
  ): Promise<ConversationResponse> {
    // Classify the response type first
    const responseType = await this.classifyResponse(input, state);
    
    // Route to appropriate specialist (with enhanced guardrails)
    switch (responseType) {
      case 'basic_info':
        return this.handleBasicInfo(input, state);
      case 'technical_details':
        return this.handleTechnicalDetails(input, state);
      case 'business_strategy':
        return this.handleBusinessStrategy(input, state);
      case 'problem_definition':
        return this.handleProblemDefinition(input, state);
      case 'vision_goals':
        return this.handleVisionGoals(input, state);
      case 'off_topic':
        return this.handleOffTopicResponse(input, state);
      default:
        return this.handleGenericResponse(input, state);
    }
  }

  // Pattern: Prompt Chaining - Break down complex tasks
  private async classifyResponse(
    input: string, 
    state: ConversationState
  ): Promise<string> {
    const prompt = ClaudePrompts.buildClassificationPrompt(input, state);
    const response = await this.callClaude(prompt);
    return this.parseClassification(response);
  }

  // Pattern: Evaluator-Optimizer - Assess and improve
  private async shouldGenerateFollowUp(
    input: string, 
    state: ConversationState
  ): Promise<boolean> {
    const evaluationPrompt = ClaudePrompts.buildEvaluationPrompt(input, state);
    const response = await this.callClaude(evaluationPrompt);
    return this.parseEvaluation(response);
  }

  // Core Claude API interface with streaming support
  private async callClaude(prompt: string, stream = false): Promise<string> {
    console.log('Calling Claude API with prompt length:', prompt.length);
    
    const requestBody = {
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      system: ClaudePrompts.buildSystemPrompt(),
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ],
      stream
    };

    console.log('Claude API request body:', JSON.stringify(requestBody, null, 2));

    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': this.apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(requestBody),
      // Add timeout and better error handling
      signal: AbortSignal.timeout(10000) // 10 second timeout
    }).catch(fetchError => {
      console.error('Network error calling Claude API:', fetchError);
      throw new Error(`Network error: ${fetchError.message}`);
    });

    console.log('Claude API response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Claude API error response:', errorText);
      throw new Error(`Claude API error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    if (stream) {
      // Handle streaming response (for future enhancement)
      return this.handleStreamingResponse(response);
    } else {
      const data = await response.json();
      
      // Enhanced error handling
      if (!data.content || !data.content[0] || !data.content[0].text) {
        throw new Error('Invalid response format from Claude API');
      }
      
      return data.content[0].text;
    }
  }

  // Streaming response handler (following Anthropic's recommendations)
  private async handleStreamingResponse(response: Response): Promise<string> {
    // For now, return non-streaming. Can be enhanced later for real-time UX
    const data = await response.json();
    return data.content[0].text;
  }

  // Core response handlers
  private async handleRefinementPhase(input: string, state: ConversationState): Promise<ConversationResponse> {
    // Update user profile with refinement context
    this.updateUserProfile(state, input, 'refinement');
    
    // Generate refined brief
    const briefPrompt = ClaudePrompts.buildBriefGenerationPrompt(state);
    const refinedBrief = await this.callClaude(briefPrompt);
    
    return {
      nextMessage: "Perfect! I've refined your strategic brief based on your additional insights. Here's the updated version:",
      shouldContinue: false,
      isComplete: true,
      metadata: {
        reasoning: "Refinement complete with updated brief",
        confidence: 0.95,
        suggestedAction: "present_refined_brief"
      }
    };
  }

  private async handleCompletionPhase(input: string, state: ConversationState): Promise<ConversationResponse> {
    // Generate final strategic brief
    const briefPrompt = ClaudePrompts.buildBriefGenerationPrompt(state);
    const finalBrief = await this.callClaude(briefPrompt);
    
    return {
      nextMessage: "Excellent! I have everything I need to create your strategic brief. Let me put together a comprehensive strategy document for you.",
      shouldContinue: false,
      isComplete: true,
      metadata: {
        reasoning: "All necessary information collected",
        confidence: 0.9,
        suggestedAction: "generate_final_brief"
      }
    };
  }

  private async handleBasicInfo(input: string, state: ConversationState): Promise<ConversationResponse> {
    // Update user profile with basic info
    this.updateUserProfile(state, input, 'basic_info');
    
    // Generate next question
    const nextQuestionPrompt = ClaudePrompts.buildQuestionGenerationPrompt(state);
    const response = await this.callClaude(nextQuestionPrompt);
    const nextQuestion = this.parseQuestionResponse(response);
    
    return {
      nextMessage: nextQuestion,
      shouldContinue: true,
      isComplete: false,
      metadata: {
        reasoning: "Basic info collected, moving to next strategic question",
        confidence: 0.8,
        suggestedAction: "continue_discovery"
      }
    };
  }

  private async handleTechnicalDetails(input: string, state: ConversationState): Promise<ConversationResponse> {
    // Update user profile with technical context
    this.updateUserProfile(state, input, 'technical_details');
    
    // Check if follow-up would be valuable
    const shouldFollowUp = await this.shouldGenerateFollowUp(input, state);
    
    if (shouldFollowUp) {
      const followUpPrompt = ClaudePrompts.buildFollowUpPrompt(input, state);
      const response = await this.callClaude(followUpPrompt);
      const followUpQuestion = this.parseQuestionResponse(response);
      
      return {
        nextMessage: followUpQuestion,
        shouldContinue: true,
        isComplete: false,
        metadata: {
          reasoning: "Technical details need deeper exploration",
          confidence: 0.85,
          suggestedAction: "ask_followup"
        }
      };
    }
    
    return this.generateNextQuestion(state);
  }

  private async handleBusinessStrategy(input: string, state: ConversationState): Promise<ConversationResponse> {
    // Update user profile with strategic insights
    this.updateUserProfile(state, input, 'business_strategy');
    
    // Always consider follow-up for strategic responses
    const shouldFollowUp = await this.shouldGenerateFollowUp(input, state);
    
    if (shouldFollowUp) {
      const followUpPrompt = ClaudePrompts.buildFollowUpPrompt(input, state);
      const response = await this.callClaude(followUpPrompt);
      const followUpQuestion = this.parseQuestionResponse(response);
      
      return {
        nextMessage: followUpQuestion,
        shouldContinue: true,
        isComplete: false,
        metadata: {
          reasoning: "Strategic insights warrant deeper exploration",
          confidence: 0.9,
          suggestedAction: "ask_strategic_followup"
        }
      };
    }
    
    return this.generateNextQuestion(state);
  }

  private async handleProblemDefinition(input: string, state: ConversationState): Promise<ConversationResponse> {
    // Update user profile with problem context
    this.updateUserProfile(state, input, 'problem_definition');
    
    // Always consider follow-up for problem definition (high strategic value)
    const shouldFollowUp = await this.shouldGenerateFollowUp(input, state);
    
    if (shouldFollowUp) {
      const followUpPrompt = ClaudePrompts.buildFollowUpPrompt(input, state);
      const response = await this.callClaude(followUpPrompt);
      const followUpQuestion = this.parseQuestionResponse(response);
      
      return {
        nextMessage: followUpQuestion,
        shouldContinue: true,
        isComplete: false,
        metadata: {
          reasoning: "Problem definition needs deeper strategic exploration",
          confidence: 0.95,
          suggestedAction: "ask_problem_followup"
        }
      };
    }
    
    return this.generateNextQuestion(state);
  }

  private async handleVisionGoals(input: string, state: ConversationState): Promise<ConversationResponse> {
    // Update user profile with vision context
    this.updateUserProfile(state, input, 'vision_goals');
    
    // Consider follow-up for vision/goals
    const shouldFollowUp = await this.shouldGenerateFollowUp(input, state);
    
    if (shouldFollowUp) {
      const followUpPrompt = ClaudePrompts.buildFollowUpPrompt(input, state);
      const response = await this.callClaude(followUpPrompt);
      const followUpQuestion = this.parseQuestionResponse(response);
      
      return {
        nextMessage: followUpQuestion,
        shouldContinue: true,
        isComplete: false,
        metadata: {
          reasoning: "Vision and goals need strategic clarification",
          confidence: 0.9,
          suggestedAction: "ask_vision_followup"
        }
      };
    }
    
    return this.generateNextQuestion(state);
  }

  private async handleOffTopicResponse(input: string, state: ConversationState): Promise<ConversationResponse> {
    // Politely redirect back to business strategy (following Anthropic's guardrail recommendations)
    const redirectMessage = await this.generateRedirectMessage(state);
    
    return {
      nextMessage: redirectMessage,
      shouldContinue: true,
      isComplete: false,
      metadata: {
        reasoning: "User went off-topic, redirecting to strategic discussion",
        confidence: 0.85,
        suggestedAction: "redirect_to_strategy"
      }
    };
  }

  private async handleGenericResponse(input: string, state: ConversationState): Promise<ConversationResponse> {
    // Update user profile with generic context
    this.updateUserProfile(state, input, 'generic');
    
    // Generate next question without follow-up
    return this.generateNextQuestion(state);
  }

  // Helper methods for conversation management
  private updateUserProfile(state: ConversationState, input: string, responseType: string): void {
    // Extract key information based on response type
    switch (responseType) {
      case 'basic_info':
        if (!state.userProfile.name && this.looksLikeName(input)) {
          state.userProfile.name = this.extractName(input);
        }
        break;
      case 'business_strategy':
        if (!state.userProfile.projectDescription && input.length > 20) {
          state.userProfile.projectDescription = input;
        }
        break;
      case 'problem_definition':
        if (!state.userProfile.coreProblem) {
          state.userProfile.coreProblem = input;
        }
        break;
      case 'vision_goals':
        if (!state.userProfile.successVision) {
          state.userProfile.successVision = input;
        }
        break;
    }
    
    // Update sophistication level based on response complexity
    const sophistication = this.assessSophistication(input);
    if (sophistication > (state.userProfile.sophistication_level === 'advanced' ? 2 : 
                          state.userProfile.sophistication_level === 'intermediate' ? 1 : 0)) {
      state.userProfile.sophistication_level = sophistication > 2 ? 'advanced' : 
                                             sophistication > 1 ? 'intermediate' : 'beginner';
    }
  }

  private parseQuestionResponse(response: string): string {
    // Extract question from formatted response
    const questionMatch = response.match(/QUESTION:\s*(.*?)(?:\n|$)/);
    return questionMatch ? questionMatch[1].trim() : response.trim();
  }

  private async generateNextQuestion(state: ConversationState): Promise<ConversationResponse> {
    // Check if we have enough information to complete
    if (this.hasEnoughInformation(state)) {
      state.currentPhase = 'completion';
      return this.handleCompletionPhase('', state);
    }
    
    // Generate next strategic question
    const nextQuestionPrompt = ClaudePrompts.buildQuestionGenerationPrompt(state);
    const response = await this.callClaude(nextQuestionPrompt);
    const nextQuestion = this.parseQuestionResponse(response);
    
    return {
      nextMessage: nextQuestion,
      shouldContinue: true,
      isComplete: false,
      metadata: {
        reasoning: "Continuing discovery with next strategic question",
        confidence: 0.8,
        suggestedAction: "continue_discovery"
      }
    };
  }

  private parseClassification(response: string): string {
    // Extract classification from response
    const classification = response.trim().toLowerCase();
    const validTypes = ['basic_info', 'technical_details', 'business_strategy', 'problem_definition', 'vision_goals', 'generic'];
    
    for (const type of validTypes) {
      if (classification.includes(type)) {
        return type;
      }
    }
    
    return 'generic';
  }

  private parseEvaluation(response: string): boolean {
    // Extract YES/NO from evaluation response
    const evaluation = response.trim().toLowerCase();
    return evaluation.startsWith('yes');
  }

  // Utility methods
  private looksLikeName(input: string): boolean {
    // Simple heuristic for name detection
    return input.length < 50 && input.split(' ').length <= 3 && 
           !input.includes('?') && !input.includes('.');
  }

  private extractName(input: string): string {
    // Extract name from input
    const cleaned = input.replace(/^(my name is|i'm|i am|call me|it's|its|name is)\s+/i, '').trim();
    return cleaned.split(' ')[0];
  }

  private assessSophistication(input: string): number {
    // Assess sophistication level (0-3)
    let score = 0;
    
    // Length and complexity
    if (input.length > 100) score++;
    if (input.length > 300) score++;
    
    // Business terminology
    const businessTerms = ['market', 'strategy', 'competitive', 'revenue', 'roi', 'kpi', 'metrics'];
    const foundTerms = businessTerms.filter(term => input.toLowerCase().includes(term));
    score += Math.min(foundTerms.length, 2);
    
    // Technical depth
    const techTerms = ['platform', 'api', 'integration', 'automation', 'ai', 'ml', 'saas'];
    const foundTechTerms = techTerms.filter(term => input.toLowerCase().includes(term));
    if (foundTechTerms.length > 0) score++;
    
    return Math.min(score, 3);
  }

  private hasEnoughInformation(state: ConversationState): boolean {
    const profile = state.userProfile;
    const requiredFields = [
      profile.name, 
      profile.projectDescription, 
      profile.coreProblem
    ];
    
    const filledFields = requiredFields.filter(field => field && field.length > 10);
    return filledFields.length >= 3 && state.messages.length >= 6;
  }

  private async generateRedirectMessage(state: ConversationState): Promise<string> {
    // Generate a polite redirect back to business strategy
    const redirectPrompt = `You are a strategic business consultant. A client has gone off-topic from business strategy discussion. 

    Generate a polite redirect message that:
    1. Acknowledges their input briefly
    2. Redirects back to strategic business planning
    3. Asks a relevant strategic question to re-engage
    4. Keeps the tone warm and professional

    Context: ${state.messages.length > 0 ? state.messages[state.messages.length - 1].content : 'Initial conversation'}

    Generate a brief, friendly redirect message.`;
    
    return await this.callClaude(redirectPrompt);
  }
} 