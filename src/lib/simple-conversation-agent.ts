// Simple, Fixed-Flow Conversation Agent
// No complex JSON parsing, just fixed questions with smart extraction

export interface UserResponse {
  question: string;
  answer: string;
  timestamp: Date;
}

export interface ExtractedInfo {
  name?: string;
  project?: string;
  audience?: string;
  problem?: string;
  success?: string;
  budget?: string;
  timeline?: string;
  industry?: string;
  stage?: string;
  founderType?: string;
}

export interface NextQuestion {
  question: string;
  type: 'text' | 'textarea' | 'buttons';
  options?: string[];
  reasoning?: string;
  placeholder?: string;
}

// Fixed questions with multiple variations for concierge experience
const FIXED_QUESTIONS: NextQuestion[] = [
  {
    question: "Welcome to NextStage! I'm here to understand your vision and create a strategic brief that helps you achieve your goals. Let's start with your name - what should I call you?",
    type: 'text',
    placeholder: "Your first name...",
    reasoning: "Personal connection and identification"
  },
  {
    question: "Perfect! Now, tell me about your business or project vision.",
    type: 'textarea',
    placeholder: "Share your business concept, product idea, or venture you're developing. I'm here to understand your vision completely...",
    reasoning: "Understanding the core project and vision"
  },
  {
    question: "Excellent. Who exactly are you creating this for?",
    type: 'textarea',
    placeholder: "Describe your ideal customers, target market, or the specific people who will benefit from what you're building...",
    reasoning: "Identifying the target market and customer segment"
  },
  {
    question: "I see the opportunity clearly. What specific problem or challenge are you solving for them?",
    type: 'textarea',
    placeholder: "What pain point, frustration, or unmet need does your solution address? Help me understand the core problem you're solving...",
    reasoning: "Understanding the core value proposition"
  },
  {
    question: "That's a compelling problem to solve. What would success look like for you in 6-12 months?",
    type: 'textarea',
    placeholder: "Paint a picture of your ideal outcome - revenue goals, customer metrics, personal milestones, or any other success measures that matter to you...",
    reasoning: "Understanding success metrics and vision"
  },
  {
    question: "Finally, to ensure I provide the most relevant strategic guidance, what's your investment capacity and timeline for this venture?",
    type: 'buttons',
    options: ['Under $10K', '$10K - $50K', '$50K or more', 'Let\'s discuss this'],
    reasoning: "Understanding investment capacity and urgency"
  }
];

// Question variations for more natural conversation flow
const QUESTION_VARIATIONS = [
  [ // Name question variations
    "Welcome to NextStage! I'm here to understand your vision and create a strategic brief that helps you achieve your goals. Let's start with your name - what should I call you?",
    "Hello! I'm your NextStage Strategy Concierge. I'm here to help you explore your business vision and create a comprehensive strategic brief. What's your first name?",
    "Welcome! I'm excited to learn about your business vision and help you develop a strategic roadmap. Let's begin - what should I call you?"
  ],
  [ // Project question variations
    "Perfect! Now, tell me about your business or project vision.",
    "Excellent. What business opportunity are you working on?",
    "Great! What's the venture you're looking to develop?",
    "Wonderful. What business concept are you bringing to life?"
  ],
  [ // Audience question variations
    "Excellent. Who exactly are you creating this for?",
    "That sounds promising! Who is your ideal customer or target market?",
    "I can see the potential. Who would benefit most from what you're building?",
    "Interesting concept! Who are the specific people you're hoping to serve?"
  ],
  [ // Problem question variations
    "I see the opportunity clearly. What specific problem or challenge are you solving for them?",
    "That's a compelling market. What pain point or frustration are you addressing?",
    "I understand your audience. What core problem does your solution solve?",
    "That market makes sense. What specific challenge are you helping them overcome?"
  ],
  [ // Success vision question variations
    "That's a compelling problem to solve. What would success look like for you in 6-12 months?",
    "Excellent problem to tackle! What does your ideal outcome look like?",
    "I can see why that's important to solve. Paint me a picture of success - what are you hoping to achieve?",
    "That's a meaningful challenge to address. What would make this venture a success in your eyes?"
  ],
  [ // Budget question variations
    "Finally, to ensure I provide the most relevant strategic guidance, what's your investment capacity and timeline for this venture?",
    "Perfect! To tailor my recommendations appropriately, what's your budget and timeline for this project?",
    "Excellent! Last question - what's your investment range and timeframe for moving forward?",
    "Great! To provide the most relevant strategic advice, what's your budget and timeline for this venture?"
  ]
];

export class SimpleConversationAgent {
  private responses: UserResponse[] = [];
  private extractedInfo: ExtractedInfo = {};
  private currentQuestionIndex = 0;
  private conversationComplete = false;

  constructor() {
    this.responses = [];
    this.extractedInfo = {};
    this.currentQuestionIndex = 0;
    this.conversationComplete = false;
  }

  async processUserResponse(userMessage: string, currentQuestion?: string): Promise<NextQuestion | null> {
    // Store the response
    this.responses.push({
      question: currentQuestion || FIXED_QUESTIONS[this.currentQuestionIndex]?.question || 'Question',
      answer: userMessage,
      timestamp: new Date()
    });

    // Extract information from this response
    await this.extractInfoFromResponse(userMessage, this.currentQuestionIndex);

    // Add small personalization with Claude
    const personalizedResponse = await this.generatePersonalizedResponse(userMessage, this.currentQuestionIndex);

    // Move to next question
    this.currentQuestionIndex++;

    // Check if conversation is complete
    if (this.currentQuestionIndex >= FIXED_QUESTIONS.length) {
      this.conversationComplete = true;
      return null;
    }

    // Return next question with personalization
    const nextQuestion = FIXED_QUESTIONS[this.currentQuestionIndex];
    return {
      ...nextQuestion,
      question: personalizedResponse || nextQuestion.question
    };
  }

  private async extractInfoFromResponse(answer: string, questionIndex: number): Promise<void> {
    const answerLower = answer.toLowerCase();
    
    switch (questionIndex) {
      case 0: // Name
        this.extractedInfo.name = await this.extractName(answer);
        break;
      case 1: // Project
        this.extractedInfo.project = answer;
        this.extractedInfo.industry = this.extractIndustry(answer);
        this.extractedInfo.stage = this.extractStage(answer);
        break;
      case 2: // Audience
        this.extractedInfo.audience = answer;
        this.extractedInfo.founderType = this.extractFounderType(answer);
        break;
      case 3: // Problem
        this.extractedInfo.problem = answer;
        break;
      case 4: // Success Vision
        this.extractedInfo.success = answer;
        break;
      case 5: // Budget/Timeline
        this.extractedInfo.budget = answer;
        if (answerLower.includes('now') || answerLower.includes('asap') || answerLower.includes('urgent')) {
          this.extractedInfo.timeline = '1-3 months';
        } else if (answerLower.includes('6 months') || answerLower.includes('soon')) {
          this.extractedInfo.timeline = '3-6 months';
        } else {
          this.extractedInfo.timeline = 'Exploring';
        }
        break;
    }
  }

  private async extractName(response: string): Promise<string> {
    try {
      const apiResponse = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'anthropic-version': '2023-06-01',
          'x-api-key': process.env.ANTHROPIC_API_KEY || ''
        },
        body: JSON.stringify({
          model: 'claude-3-5-haiku-20241022', // Using faster, cheaper model for simple extraction
          max_tokens: 50,
          messages: [
            {
              role: 'user',
              content: `Extract the person's first name from this response: "${response}"

Examples:
- "its jon" → Jon
- "My name is Sarah" → Sarah  
- "I'm Mike" → Mike
- "Call me Alex" → Alex
- "Ben here" → Ben

Just return the first name, properly capitalized. If no clear name is found, return "Friend".`
            }
          ]
        })
      });

      if (apiResponse.ok) {
        const data = await apiResponse.json();
        const extractedName = data.content[0]?.text?.trim() || 'Friend';
        
        // Clean up the response (remove quotes, extra text, etc.)
        const cleanName = extractedName.replace(/['"]/g, '').split(' ')[0];
        
        // Validate it's a reasonable name (only letters, 2-20 chars)
        if (/^[A-Za-z]{2,20}$/.test(cleanName)) {
          return cleanName.charAt(0).toUpperCase() + cleanName.slice(1).toLowerCase();
        }
      }
    } catch (error) {
      console.error('Error extracting name with LLM:', error);
    }
    
    // Fallback to simple extraction if LLM fails
    const fallbackName = response.split(' ').find(word => 
      /^[A-Za-z]{2,20}$/.test(word) && 
      !['its', 'my', 'name', 'is', 'im', 'the', 'and', 'but'].includes(word.toLowerCase())
    );
    
    return fallbackName ? 
      fallbackName.charAt(0).toUpperCase() + fallbackName.slice(1).toLowerCase() : 
      'Friend';
  }

  private extractIndustry(project: string): string {
    const projectLower = project.toLowerCase();
    
    if (projectLower.includes('saas') || projectLower.includes('software') || projectLower.includes('app')) {
      return 'Technology/Software';
    } else if (projectLower.includes('ecommerce') || projectLower.includes('e-commerce') || projectLower.includes('retail')) {
      return 'E-commerce/Retail';
    } else if (projectLower.includes('health') || projectLower.includes('medical') || projectLower.includes('wellness')) {
      return 'Healthcare/Wellness';
    } else if (projectLower.includes('fintech') || projectLower.includes('finance') || projectLower.includes('payment')) {
      return 'Fintech/Finance';
    } else if (projectLower.includes('education') || projectLower.includes('learning') || projectLower.includes('training')) {
      return 'Education/Training';
    } else if (projectLower.includes('marketing') || projectLower.includes('advertising') || projectLower.includes('social')) {
      return 'Marketing/Advertising';
    }
    
    return 'Technology/Software';
  }

  private extractStage(project: string): string {
    const projectLower = project.toLowerCase();
    
    if (projectLower.includes('idea') || projectLower.includes('concept') || projectLower.includes('planning')) {
      return 'pre-revenue';
    } else if (projectLower.includes('mvp') || projectLower.includes('prototype') || projectLower.includes('beta')) {
      return 'mvp';
    } else if (projectLower.includes('revenue') || projectLower.includes('customers') || projectLower.includes('sales')) {
      return 'revenue';
    } else if (projectLower.includes('scaling') || projectLower.includes('growth') || projectLower.includes('expand')) {
      return 'scaling';
    }
    
    return 'pre-revenue';
  }

  private extractFounderType(audience: string): string {
    const audienceLower = audience.toLowerCase();
    
    if (audienceLower.includes('developer') || audienceLower.includes('engineer') || audienceLower.includes('technical')) {
      return 'technical';
    } else if (audienceLower.includes('business') || audienceLower.includes('executive') || audienceLower.includes('manager')) {
      return 'business';
    } else if (audienceLower.includes('creative') || audienceLower.includes('design') || audienceLower.includes('artist')) {
      return 'creative';
    }
    
    return 'business';
  }

  private async generatePersonalizedResponse(userMessage: string, questionIndex: number): Promise<string | null> {
    try {
      const nextQuestionIndex = questionIndex + 1;
      if (nextQuestionIndex >= FIXED_QUESTIONS.length) return null;

      // Add natural delay for all transitions to feel like thoughtful processing
      const baseDelay = 1000 + Math.random() * 1000; // 1-2 seconds
      await new Promise(resolve => setTimeout(resolve, baseDelay));

      // Use question variations for natural conversation flow
      const variations = QUESTION_VARIATIONS[nextQuestionIndex];
      if (variations && variations.length > 0) {
        return variations[Math.floor(Math.random() * variations.length)];
      }

      // Fallback to default question
      return FIXED_QUESTIONS[nextQuestionIndex].question;
    } catch (error) {
      console.error('Error generating personalized response:', error);
      // Return default question as fallback
      const nextQuestionIndex = questionIndex + 1;
      if (nextQuestionIndex < FIXED_QUESTIONS.length) {
        return FIXED_QUESTIONS[nextQuestionIndex].question;
      }
    }
    
    return null;
  }

  getExtractedInfo(): ExtractedInfo {
    return this.extractedInfo;
  }

  getResponses(): UserResponse[] {
    return this.responses;
  }

  isComplete(): boolean {
    return this.conversationComplete;
  }

  getProgress(): { currentQuestion: number; totalQuestions: number } {
    return {
      currentQuestion: this.currentQuestionIndex + 1,
      totalQuestions: FIXED_QUESTIONS.length
    };
  }

  reset(): void {
    this.responses = [];
    this.extractedInfo = {};
    this.currentQuestionIndex = 0;
    this.conversationComplete = false;
  }
} 