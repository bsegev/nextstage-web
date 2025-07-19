import OpenAI from 'openai';

// Simple types
export interface UserResponse {
  question: string;
  answer: string;
  questionIndex: number;
}

export interface AgentResponse {
  message: string;
  action: 'continue' | 'handoff' | 'complete';
  handoffTo?: string;
  data?: any;
  reasoning?: string;
  agent?: string;
  isComplete?: boolean;
  requiresInput?: boolean;
  conversationId?: string;
  databaseStatus?: 'connected' | 'fallback' | 'not_ready';
}

export interface ConversationContext {
  userId: string;
  userName: string;
  responses: UserResponse[];
  currentTopic: string;
  sophisticationLevel: 'beginner' | 'intermediate' | 'advanced';
  conversationHistory: Array<{
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
  }>;
}

export class NextStageAgentRunner {
  private openai: OpenAI;
  private currentAgent: string = 'orchestrator';
  private currentTopic: string = 'discovery';
  private agentContext: any = {};
  private insights: any[] = [];

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY!,
    });
  }

  // API COMPATIBILITY METHODS
  handoffTo(agentName: string, topic: string): void {
    this.currentAgent = agentName;
    this.currentTopic = topic;
  }

  getCurrentAgent(): string {
    return this.currentAgent;
  }

  getContext(): any {
    return this.agentContext;
  }

  getInsights(): any[] {
    return this.insights;
  }

  // MAIN METHOD: Run the agent
  async runAgent(userInput: string): Promise<AgentResponse> {
    try {
      const conversationId = this.agentContext.conversationId || 'temp-' + Date.now();
      const fullHistory = this.agentContext.conversationHistory || [];
      
      // BULLETPROOF APPROACH: Count strategic questions by looking for exact templates
      const strategicQuestionCount = this.countStrategicQuestionsByTemplate(fullHistory);
      
      console.log(`[DEBUG] Full conversation messages: ${fullHistory.length}`);
      console.log(`[DEBUG] Strategic questions completed: ${strategicQuestionCount}`);
      
      // Extract name from context
      if (!this.agentContext.userName && fullHistory.length >= 2) {
        const firstUserMsg = fullHistory[1];
        if (firstUserMsg?.role === 'user') {
          this.agentContext.userName = this.extractName(firstUserMsg.content);
          console.log(`[DEBUG] Extracted name: "${this.agentContext.userName}" from input: "${firstUserMsg.content}"`);
        }
      }

      // After 4 strategic questions, generate brief
      if (strategicQuestionCount >= 4) {
        const userResponses = this.buildUserResponsesFromHistory(fullHistory);
        return await this.generateBrief(userResponses, conversationId);
      }

      // Ask the next strategic question (DETERMINISTIC)
      const nextQuestionIndex = strategicQuestionCount;
      const response = this.getStrategicQuestionTemplate(nextQuestionIndex);
      
      return {
        message: response,
        action: 'handoff',
        agent: this.getAgentForQuestion(nextQuestionIndex),
        isComplete: false,
        requiresInput: true,
        conversationId,
        databaseStatus: 'fallback',
        reasoning: `Strategic question ${nextQuestionIndex + 1} of 4`
      };

    } catch (error) {
      console.error('Error in runAgent:', error);
      return {
        message: 'I apologize, but I encountered an issue. Could you please try again?',
        action: 'continue',
        reasoning: 'Error fallback response'
      };
    }
  }

  // Convert conversation history to UserResponse format
  private convertToUserResponseFormat(conversationHistory: Array<{
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
  }>): UserResponse[] {
    const userResponses: UserResponse[] = [];
    
    // Skip the first exchange (name question) and only count strategic questions
    let startIndex = 0;
    
    // Find where strategic questions start (after name collection)
    if (conversationHistory.length >= 2) {
      const firstAssistantMsg = conversationHistory[0];
      const firstUserMsg = conversationHistory[1];
      
      // Check if first exchange was name collection
      if (firstAssistantMsg?.role === 'assistant' && 
          firstUserMsg?.role === 'user' &&
          (firstAssistantMsg.content.includes('first name') || 
           firstAssistantMsg.content.includes('What\'s your name') ||
           firstAssistantMsg.content.includes('Strategy Concierge'))) {
        startIndex = 2; // Skip the name exchange
      }
    }
    
    // Convert strategic questions only
    for (let i = startIndex; i < conversationHistory.length; i += 2) {
      const assistantMsg = conversationHistory[i];
      const userMsg = conversationHistory[i + 1];
      
      if (assistantMsg?.role === 'assistant' && userMsg?.role === 'user') {
        const questionIndex = Math.floor((i - startIndex) / 2);
        userResponses.push({
          question: assistantMsg.content,
          answer: userMsg.content,
          questionIndex: questionIndex
        });
      }
    }
    
    return userResponses;
  }

  // Extract name from user input
  private extractName(input: string): string {
    console.log(`[DEBUG] Extracting name from: "${input}"`);
    
    const cleaned = input
      .toLowerCase()
      .replace(/^(my name is|i'm|i am|call me|it's|its|name is)\s+/i, '')
      .replace(/[^\w\s]/g, '')
      .trim();
    
    console.log(`[DEBUG] After cleaning: "${cleaned}"`);
    
    const name = cleaned.split(' ')[0];
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    
    console.log(`[DEBUG] Final extracted name: "${capitalizedName}"`);
    
    return capitalizedName;
  }

  // BULLETPROOF: Count strategic questions by looking for exact template matches
  private countStrategicQuestionsByTemplate(conversationHistory: Array<{
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
  }>): number {
    const templates = [
      'what are you working on',
      'who is your target customer',
      'what does success look like',
      'what\'s your timeline and budget'
    ];
    
    let count = 0;
    
    for (let i = 0; i < conversationHistory.length - 1; i++) {
      const assistantMsg = conversationHistory[i];
      const userMsg = conversationHistory[i + 1];
      
      if (assistantMsg.role === 'assistant' && userMsg.role === 'user') {
        const content = assistantMsg.content.toLowerCase();
        
        // Check if this assistant message matches any strategic question template
        for (const template of templates) {
          if (content.includes(template)) {
            count++;
            break; // Only count once per message
          }
        }
      }
    }
    
    return count;
  }

  // DETERMINISTIC: Return exact strategic question templates
  private getStrategicQuestionTemplate(questionIndex: number): string {
    const userName = this.agentContext.userName || 'there';
    console.log(`[DEBUG] Using userName: "${userName}" for question ${questionIndex + 1}`);
    
    const questions = [
      `${userName}, what are you working on?`,
      'Who is your target customer?',
      'What does success look like for this business?',
      'What\'s your timeline and budget for this?'
    ];

    return questions[questionIndex] || questions[0];
  }

  // Build UserResponse array from conversation history
  private buildUserResponsesFromHistory(conversationHistory: Array<{
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
  }>): UserResponse[] {
    const userResponses: UserResponse[] = [];
    
    for (let i = 0; i < conversationHistory.length - 1; i++) {
      const assistantMsg = conversationHistory[i];
      const userMsg = conversationHistory[i + 1];
      
      if (assistantMsg.role === 'assistant' && userMsg.role === 'user') {
        const content = assistantMsg.content.toLowerCase();
        
        // Only include strategic questions
        if (content.includes('what are you working on') ||
            content.includes('who is your target customer') ||
            content.includes('what does success look like') ||
            content.includes('what\'s your timeline')) {
          
          userResponses.push({
            question: assistantMsg.content,
            answer: userMsg.content,
            questionIndex: userResponses.length
          });
        }
      }
    }
    
    return userResponses;
  }

  // Strategic question asking (renamed from askNextQuestion)
  private async askStrategicQuestion(questionIndex: number, userInput: string, conversationHistory: UserResponse[]): Promise<string> {
    const questions = [
      {
        name: 'business_opportunity',
        systemPrompt: `You are a strategic business consultant. Ask ONE clear, direct question about their business.

Ask: "What are you working on?"

Be professional, direct, and strategic. ONE question only.`,
        getUserPrompt: (input: string, history: UserResponse[]) => {
          const userName = this.agentContext.userName || 'there';
          return `The user's name is ${userName}. They just said: "${input}". Ask what they're working on. Be direct and strategic. ONE question only.`;
        }
      },
      {
        name: 'target_market',
        systemPrompt: `You are a strategic business consultant. They described their business. Now ask ONE clear question about their target market.

Ask: "Who is your target customer?"

Be professional, direct, and strategic. ONE question only.`,
        getUserPrompt: (input: string, history: UserResponse[]) => `They described their business: "${input}"

Now ask WHO their target customers are. Be direct and strategic. ONE question only.`
      },
      {
        name: 'success_vision',
        systemPrompt: `You are a strategic business consultant. They described their target market. Now ask ONE clear question about success.

Ask: "What does success look like for this business?"

Be professional, direct, and strategic. ONE question only.`,
        getUserPrompt: (input: string, history: UserResponse[]) => `They described their target market: "${input}"

Now ask what SUCCESS looks like for them. Be direct and strategic. ONE question only.`
      },
      {
        name: 'execution_plan',
        systemPrompt: `You are a strategic business consultant. They described their success vision. Now ask ONE clear question about execution.

Ask: "What's your timeline and budget for this?"

Be professional, direct, and strategic. ONE question only.`,
        getUserPrompt: (input: string, history: UserResponse[]) => `They described their success vision: "${input}"

Now ask about their TIMELINE and BUDGET. Be direct and strategic. ONE question only.`
      }
    ];

    const currentQuestion = questions[questionIndex] || questions[0];

    const completion = await this.openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: currentQuestion.systemPrompt },
        { role: "user", content: currentQuestion.getUserPrompt(userInput, conversationHistory) }
      ],
      temperature: 0.2, // Very low temperature for consistent, direct responses
      max_tokens: 80, // Very short responses to force directness
    });

    return completion.choices[0]?.message?.content || "What are you working on?";
  }

  // Generate strategic brief
  private async generateBrief(conversationHistory: UserResponse[], conversationId: string): Promise<AgentResponse> {
    const systemPrompt = `You are a brilliant strategist who just had a casual conversation with a friend over coffee.

During your chat, you naturally gathered strategic insights about their business. Now you're delivering a comprehensive strategic brief - like the $50k consultant you are, but in a warm, friendly way.

Your brief should be:
- Professional and comprehensive (you're worth $50k)
- But written with warmth (they're your friend)
- Demonstrating deep strategic thinking
- Showing you really "got" their business from the conversation

Include these sections:
1. Executive Summary (warm but strategic)
2. Business Opportunity Analysis
3. Target Market & Competitive Landscape
4. Strategic Recommendations
5. Implementation Roadmap
6. Success Metrics
7. Risk Assessment
8. Next Steps

Start with something like: "Based on our conversation, I've put together some strategic thoughts for you..."

Make it comprehensive and valuable - showing your expertise while maintaining the friendly tone.`;

    const userPrompt = `You just had this casual conversation with your friend:

${conversationHistory.map(r => `You: ${r.question}\nThem: ${r.answer}`).join('\n\n')}

Now create a comprehensive strategic brief that shows you really understood their business and can provide valuable strategic insights. Be warm but professional - like the strategic expert friend you are.`;

    const completion = await this.openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      temperature: 0.7,
      max_tokens: 4000,
    });

    const briefContent = completion.choices[0]?.message?.content;
    if (!briefContent) {
      throw new Error('No brief generated');
    }

    return {
      message: briefContent,
      action: 'complete',
      agent: 'brief_agent',
      isComplete: true,
      requiresInput: false,
      conversationId,
      databaseStatus: 'connected'
    };
  }

  // Get agent name for question index
  private getAgentForQuestion(questionIndex: number): string {
    const agents = [
      'business_opportunity_agent',
      'target_market_agent',
      'success_vision_agent', 
      'execution_plan_agent'
    ];
    return agents[questionIndex] || 'business_opportunity_agent';
  }
} 