interface ConversationContext {
  responses: Array<{
    question: string;
    answer: string;
    questionIndex: number;
  }>;
  extractedInfo: {
    name?: string;
    project?: string;
    audience?: string;
    problem?: string;
    budget?: string;
    timeline?: string;
    industry?: string;
    stage?: string;
    founderType?: string;
  };
  strategicSummary: string; // Compounding strategic context
  keyInsights: string[]; // Accumulated strategic insights
  businessIntelligence: string; // Overall business intelligence
  missingCriticalInfo: string[];
  conversationComplete: boolean;
}

interface NextQuestion {
  question: string;
  type: 'text' | 'buttons';
  options?: string[];
  reasoning: string;
  isFollowUp: boolean;
  priority: 'high' | 'medium' | 'low';
}

export class EnhancedConversationAgent {
  private context: ConversationContext;

  constructor() {
    this.context = {
      responses: [],
      extractedInfo: {},
      strategicSummary: '',
      keyInsights: [],
      businessIntelligence: '',
      missingCriticalInfo: [],
      conversationComplete: false
    };
  }

  async processUserResponse(answer: string, currentQuestion?: string): Promise<NextQuestion | null> {
    console.log('🔄 Processing user response:', { 
      answer: answer.substring(0, 50) + '...', 
      currentQuestion: currentQuestion?.substring(0, 50) + '...',
      responseCount: this.context.responses.length 
    });

    // Always add to responses - use a default question if none provided
    const questionToUse = currentQuestion || 
      (this.context.responses.length === 0 ? "Welcome to NextStage! What's your name?" : "Please tell me more");
    
    this.context.responses.push({
      question: questionToUse,
      answer,
      questionIndex: this.context.responses.length
    });

    console.log('📝 Added response to conversation history. Total responses:', this.context.responses.length);

    // Update extracted info and strategic context with LLM
    await this.updateStrategicContext();

    // Update missing critical info
    const criticalFields = ['name', 'project', 'audience', 'problem'];
    this.context.missingCriticalInfo = criticalFields.filter(field => 
      !this.context.extractedInfo[field as keyof typeof this.context.extractedInfo]
    );

    console.log('❌ Missing critical info after extraction:', this.context.missingCriticalInfo);

    // Determine next question
    return await this.generateNextQuestion();
  }

  private async updateStrategicContext(): Promise<void> {
    try {
      const response = await this.callClaudeWithRetry({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1000, // Reduced from 1500
        messages: [
          {
            role: 'user',
            content: `You are helping extract key business information from a conversation. Focus on gathering structured data, not strategic analysis.

CONVERSATION HISTORY:
${this.context.responses.map(r => `Q: ${r.question}\nA: ${r.answer}`).join('\n\n')}

CURRENT EXTRACTED INFO:
${JSON.stringify(this.context.extractedInfo, null, 2)}

Extract and update the business information from this conversation. Focus on facts, not strategy.

Return JSON with updated information:
{
  "extractedInfo": {
    "name": "first name if mentioned",
    "project": "what they're building (brief description)", 
    "audience": "who they're targeting (brief description)",
    "problem": "what problem they're solving (brief description)",
    "budget": "budget/funding if mentioned",
    "timeline": "timeline/goals if mentioned", 
    "industry": "industry/sector (brief)",
    "stage": "business stage: pre-revenue/mvp/revenue/scaling",
    "founderType": "founder background: technical/business/creative"
  }
}

Focus on extracting facts and information, not providing strategic advice or insights.`
          }
        ]
      });

      if (response) {
        const data = await response.json();
        const analysisText = data.content[0]?.text || '{}';
        
        try {
          const analysis = JSON.parse(analysisText);
          
          // Update extracted info
          this.context.extractedInfo = { ...this.context.extractedInfo, ...analysis.extractedInfo };
          
          console.log('✅ Information extraction updated successfully');
          console.log('📊 Current extracted info:', this.context.extractedInfo);
          
        } catch (parseError) {
          console.error('❌ Failed to parse information extraction:', parseError);
          this.fallbackExtraction();
        }
      }
    } catch (error) {
      console.error('❌ Error updating information:', error);
      this.fallbackExtraction();
    }
  }

  private async callClaudeWithRetry(payload: any, maxRetries = 3): Promise<Response | null> {
    for (let i = 0; i < maxRetries; i++) {
      try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'anthropic-version': '2023-06-01',
            'x-api-key': process.env.ANTHROPIC_API_KEY || ''
          },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          return response;
        }

        if (response.status === 529) {
          console.log(`🔄 Claude API overloaded, retrying in ${(i + 1) * 2}s...`);
          await new Promise(resolve => setTimeout(resolve, (i + 1) * 2000));
          continue;
        }

        console.error(`❌ Claude API error ${response.status}:`, await response.text());
        return null;

      } catch (error) {
        console.error(`❌ Network error (attempt ${i + 1}):`, error);
        if (i < maxRetries - 1) {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }
    }
    return null;
  }

  private fallbackExtraction(): void {
    // Process the ENTIRE conversation history to extract all information
    // But be CONSERVATIVE - only extract when there's clear intent
    
    console.log('🔄 Fallback extraction running for', this.context.responses.length, 'responses');
    
    this.context.responses.forEach((response, index) => {
      const question = response.question.toLowerCase();
      const answer = response.answer;
      
      // Extract name - only from name-specific questions or first interaction
      if ((question.includes('name') || question.includes('call') || question.includes('first') || 
           (index === 0 && question.includes('what') && question.includes('your'))) && 
           !this.context.extractedInfo.name) {
        const extractedName = this.extractNameFromResponse(answer);
        if (extractedName) {
          this.context.extractedInfo.name = extractedName;
          console.log('📝 Extracted name:', extractedName);
        }
      }
      
      // Extract project - only from project-specific questions (not index-based)
      if ((question.includes('building') || question.includes('project') || question.includes('working') || 
           question.includes('vision') || question.includes('developing') || question.includes('creating') ||
           question.includes('what are you')) && !this.context.extractedInfo.project) {
        this.context.extractedInfo.project = answer;
        console.log('📝 Extracted project:', answer.substring(0, 50) + '...');
      }
      
      // Extract audience - only from audience-specific questions
      if ((question.includes('audience') || question.includes('customer') || question.includes('who is this for') || 
           question.includes('target') || question.includes('ideal customer')) && 
           !this.context.extractedInfo.audience) {
        this.context.extractedInfo.audience = answer;
        console.log('📝 Extracted audience:', answer.substring(0, 50) + '...');
      }
      
      // Extract problem - only from problem-specific questions
      if ((question.includes('problem') || question.includes('solving') || question.includes('challenge') || 
           question.includes('pain') || question.includes('issue') || question.includes('keeps')) && 
           !this.context.extractedInfo.problem) {
        this.context.extractedInfo.problem = answer;
        console.log('📝 Extracted problem:', answer.substring(0, 50) + '...');
      }
      
      // Extract timeline - only from timeline-specific questions
      if ((question.includes('timeline') || question.includes('when do you') || question.includes('how long') ||
           question.includes('months') || question.includes('timeframe') || question.includes('launch')) && 
           !this.context.extractedInfo.timeline) {
        this.context.extractedInfo.timeline = answer;
        console.log('📝 Extracted timeline:', answer);
      }
      
      // Extract budget - only from budget-specific questions
      if ((question.includes('budget') || question.includes('invest') || question.includes('working with') ||
           question.includes('budget range') || question.includes('comfortable spending')) && 
           !this.context.extractedInfo.budget) {
        this.context.extractedInfo.budget = answer;
        console.log('📝 Extracted budget:', answer);
      }
    });
    
    // Build basic strategic summary if Claude failed
    if (!this.context.strategicSummary && this.context.extractedInfo.name) {
      const name = this.context.extractedInfo.name;
      const project = this.context.extractedInfo.project;
      const audience = this.context.extractedInfo.audience;
      
      this.context.strategicSummary = `Strategic discovery session with ${name}${project ? ` who is building ${project}` : ''}${audience ? ` targeting ${audience}` : ''}. Building comprehensive business intelligence profile.`;
      console.log('📝 Created fallback strategic summary');
    }
    
    // Also update missing critical info
    const criticalFields = ['name', 'project', 'audience', 'problem'];
    this.context.missingCriticalInfo = criticalFields.filter(field => 
      !this.context.extractedInfo[field as keyof typeof this.context.extractedInfo]
    );
    
    console.log('✅ Fallback extraction complete. Extracted info:', this.context.extractedInfo);
    console.log('❌ Missing critical info:', this.context.missingCriticalInfo);
  }

  private extractNameFromResponse(response: string): string | null {
    const text = response.toLowerCase().trim();
    
    // Common name patterns - check in order of specificity
    const patterns = [
      /(?:my\s+name\s+is\s+|i'm\s+|i\s+am\s+|it's\s+|it\s+is\s+|call\s+me\s+)([a-zA-Z]+)/i,
      /^([a-zA-Z]+)(?:\s+here|\s+speaking|$)/i,
      /^([a-zA-Z]+)\s*[,.]?\s*(?:nice|good|great|hi|hello|hey)/i,
      /^([a-zA-Z]+)\s*$/i
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        const name = match[1].trim();
        // Filter out common words that aren't names
        const excludeWords = ['im', 'the', 'and', 'but', 'with', 'for', 'what', 'how', 'why', 'when', 'where', 'who', 'this', 'that', 'these', 'those', 'my', 'your', 'his', 'her', 'its', 'our', 'their'];
        if (name.length > 1 && !excludeWords.includes(name.toLowerCase())) {
          // Capitalize first letter
          return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        }
      }
    }

    return null;
  }

  private async generateNextQuestion(): Promise<NextQuestion | null> {
    // Check if we have enough info - focus on core business info collection
    const criticalFields = ['name', 'project', 'audience', 'problem'];
    const desiredFields = ['name', 'project', 'audience', 'problem', 'budget', 'timeline'];
    const missing = criticalFields.filter(field => !this.context.extractedInfo[field as keyof typeof this.context.extractedInfo]);
    const desiredMissing = desiredFields.filter(field => !this.context.extractedInfo[field as keyof typeof this.context.extractedInfo]);

    console.log('🤔 Generating next question. Missing critical fields:', missing);
    console.log('📊 Missing desired fields:', desiredMissing);
    console.log('📊 Current extracted info:', this.context.extractedInfo);

    // Complete when we have core info + minimum interactions (reduced from 8 to 5)
    // Focus on information gathering, not strategic consulting
    if (missing.length === 0 && this.context.responses.length >= 5 && desiredMissing.length <= 1) {
      console.log('✅ Conversation complete - sufficient information gathered');
      this.context.conversationComplete = true;
      return null;
    }

    try {
      console.log('🔄 Calling Claude API for next question...');
      const response = await this.callClaudeWithRetry({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 600, // Reduced to keep responses focused
        messages: [
          {
            role: 'user',
            content: `You are conducting a brief business discovery session to gather key information for a strategic brief. Keep questions simple and focused on gathering basic business information.

CURRENT INFORMATION GATHERED:
${JSON.stringify(this.context.extractedInfo, null, 2)}

MISSING CRITICAL INFO: ${missing.join(', ')}
MISSING DESIRED INFO: ${desiredMissing.join(', ')}

CONVERSATION SO FAR:
${this.context.responses.map(r => `Q: ${r.question}\nA: ${r.answer}`).join('\n\n')}

Generate a simple, focused question to gather missing information. Avoid deep strategic consulting questions.

PRIORITY ORDER:
1. If missing name: Ask for their name
2. If missing project: Ask what they're building
3. If missing audience: Ask who it's for
4. If missing problem: Ask what problem they're solving
5. If missing budget/timeline: Ask about resources or timeline
6. If all core info gathered: Ask one clarifying question to wrap up

Keep questions conversational but focused on information gathering, not strategic advisory.

Return JSON:
{
  "question": "Simple, direct question to gather missing information",
  "type": "text",
  "reasoning": "Brief explanation of why this question helps complete their profile",
  "isFollowUp": false,
  "priority": "high"
}

Focus on information gathering, not strategic consulting or pivoting advice.`
          }
        ]
      });

      if (response) {
        console.log('✅ Claude API call successful');
        const data = await response.json();
        const questionText = data.content[0]?.text || '';
        
        try {
          const parsedQuestion = JSON.parse(questionText);
          console.log('📝 Generated question:', parsedQuestion.question);
          console.log('🎯 Reasoning:', parsedQuestion.reasoning);
          return parsedQuestion;
        } catch (parseError) {
          console.error('❌ Failed to parse question response:', parseError);
          console.log('📄 Raw response:', questionText);
          return this.getFallbackQuestion();
        }
      } else {
        console.log('❌ Claude API call failed, using fallback');
      }
    } catch (error) {
      console.error('❌ Error generating question:', error);
    }

    console.log('🔄 Using fallback question');
    return this.getFallbackQuestion();
  }

  private getFallbackQuestion(): NextQuestion {
    const { extractedInfo } = this.context;
    
    console.log('🔄 Using fallback question logic');
    console.log('📊 Current extracted info:', extractedInfo);

    if (!extractedInfo.name) {
      console.log('❌ No name found - asking for name');
      return {
        question: "Hi there! I'm your NextStage Strategy Concierge. What's your first name?",
        type: 'text',
        reasoning: "Personal connection and identification",
        isFollowUp: false,
        priority: 'high'
      };
    }

    if (!extractedInfo.project) {
      console.log('❌ No project found - asking for project');
      return {
        question: `Great to meet you, ${extractedInfo.name}! What are you building? I'd love to hear about your vision.`,
        type: 'text',
        reasoning: "Core project understanding",
        isFollowUp: false,
        priority: 'high'
      };
    }

    if (!extractedInfo.audience) {
      console.log('❌ No audience found - asking for audience');
      return {
        question: `${extractedInfo.project} sounds interesting! Who is this for? Paint me a picture of your ideal customer.`,
        type: 'text',
        reasoning: "Target market identification",
        isFollowUp: false,
        priority: 'high'
      };
    }

    if (!extractedInfo.problem) {
      console.log('❌ No problem found - asking for problem');
      return {
        question: "What's the core problem you're solving? What keeps your customers up at night?",
        type: 'text',
        reasoning: "Problem validation",
        isFollowUp: false,
        priority: 'high'
      };
    }

    console.log('✅ All critical info present - asking for success vision');
    return {
      question: "What would success look like for you in 6 months?",
      type: 'text',
      reasoning: "Vision and goals",
      isFollowUp: false,
      priority: 'medium'
    };
  }

  getExtractedInfo() {
    return this.context.extractedInfo;
  }

  getResponses() {
    return this.context.responses;
  }

  isComplete() {
    return this.context.conversationComplete;
  }

  reset() {
    this.context = {
      responses: [],
      extractedInfo: {},
      strategicSummary: '',
      keyInsights: [],
      businessIntelligence: '',
      missingCriticalInfo: [],
      conversationComplete: false
    };
  }
} 