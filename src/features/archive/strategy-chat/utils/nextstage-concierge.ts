import { ChatSession, UserResponse } from '../types';

export class NextStageConcierge {
  private baseUrl = 'https://api.anthropic.com/v1/messages';
  private apiKey: string;

  constructor() {
    this.apiKey = process.env.ANTHROPIC_API_KEY || '';
    if (!this.apiKey) {
      throw new Error('ANTHROPIC_API_KEY not found in environment variables');
    }
  }

  /**
   * Generate a personalized welcome message that maintains NextStage's sophisticated tone
   */
  async generatePersonalizedWelcome(userName: string): Promise<string> {
    const prompt = `You are NextStage's Strategy Concierge - sophisticated, strategic, and genuinely excited about helping ambitious leaders.

Generate a warm welcome message for ${userName} that:
1. Maintains NextStage's premium, strategic consulting tone
2. Feels like a high-end business concierge
3. Sets expectation for strategic discovery
4. Is under 2 sentences

NextStage Voice:
- Strategic and sophisticated, never casual
- Focuses on vision, transformation, and strategic opportunities
- Uses business terminology naturally
- Genuinely excited about strategic challenges

Example tone: "Welcome, ${userName}! I'm thrilled to dive into your vision and explore the strategic opportunities that will accelerate your transformation."

Generate ONE personalized welcome:`;

    return await this.callClaude(prompt, 100);
  }

  /**
   * Generate intelligent follow-up based on user's response while maintaining conversation flow
   */
  async generateStrategicFollowUp(
    userResponse: string,
    questionIndex: number,
    previousResponses: UserResponse[],
    userName: string,
    nextBaseQuestion: string
  ): Promise<{
    shouldAskFollowUp: boolean;
    followUpQuestion?: string;
    nextQuestion: string;
  }> {
    const context = this.buildBusinessContext(previousResponses, userName);
    
    const prompt = `You are NextStage's Strategy Concierge conducting a sophisticated business discovery session.

${context}

CURRENT RESPONSE: "${userResponse}"
NEXT PLANNED QUESTION: "${nextBaseQuestion}"

Analyze if a strategic follow-up would add value before moving to the next question.

NextStage's Discovery Principles:
- Only ask follow-ups that uncover strategic opportunities or clarify business-critical gaps
- Maintain sophisticated consulting tone
- Focus on transformation, growth, and strategic positioning
- Each question should feel valuable, not interrogative
- Follow-ups should dig into business implications

Return JSON:
{
  "shouldAskFollowUp": boolean,
  "followUpQuestion": "strategic follow-up question (if needed)",
  "reasoning": "brief business rationale",
  "nextQuestion": "personalized version of the next base question"
}

Only suggest follow-ups for responses that reveal significant strategic opportunities or concerning gaps.`;

    try {
      const response = await this.callClaude(prompt, 200);
      return JSON.parse(response);
    } catch {
      // Fallback - just personalize the next question
      return {
        shouldAskFollowUp: false,
        nextQuestion: await this.personalizeQuestion(nextBaseQuestion, userName, previousResponses)
      };
    }
  }

  /**
   * Personalize standard questions based on previous responses
   */
  async personalizeQuestion(
    baseQuestion: string,
    userName: string,
    previousResponses: UserResponse[]
  ): Promise<string> {
    if (previousResponses.length === 0) return baseQuestion;

    const context = this.buildBusinessContext(previousResponses, userName);
    
    const prompt = `You are NextStage's Strategy Concierge. Personalize this question based on the conversation context:

${context}

BASE QUESTION: "${baseQuestion}"

Personalize it to:
1. Reference their specific situation naturally
2. Maintain NextStage's sophisticated tone
3. Make it feel like strategic progression
4. Keep it concise (1-2 sentences max)

Generate ONE personalized question:`;

    try {
      return await this.callClaude(prompt, 100);
    } catch {
      return baseQuestion; // Fallback to base question
    }
  }

  /**
   * Generate a simple, intelligent response following Anthropic's prompt chaining pattern
   * One call per question step - no complex orchestration
   */
  async generateSimpleResponse(
    userAnswer: string,
    questionIndex: number,
    previousResponses: UserResponse[],
    userName: string,
    nextQuestion: string | null
  ): Promise<string> {
    const context = this.buildBusinessContext(previousResponses, userName);
    const questionTypes = ['name', 'vision', 'audience', 'problem', 'success', 'timeline', 'budget', 'additional'];
    const currentType = questionTypes[questionIndex] || 'general';
    
    const prompt = `You are NextStage's Strategy Concierge. You just received a response to question ${questionIndex + 1} of 8 in a strategic discovery session.

${context}

CURRENT RESPONSE: "${userAnswer}"
QUESTION TYPE: ${currentType}
NEXT QUESTION: ${nextQuestion || 'This was the final question'}

Generate ONE brief, strategic response that:
1. Acknowledges their answer with strategic insight
2. Shows you understand the business implications  
3. Maintains NextStage's sophisticated consulting tone
4. Builds momentum toward the next question
5. Uses ${userName}'s name naturally (if provided)
6. Keeps it to 1-2 sentences maximum

Examples of good responses:
- "Excellent vision, ${userName}. I can see significant transformation potential in that market positioning."
- "Smart approach, ${userName}. That customer insight reveals compelling strategic opportunities."
- "Perfect, ${userName}. That timeline gives us ideal momentum for strategic acceleration."

Generate ONE strategic acknowledgment:`;

    return await this.callClaude(prompt, 100);
  }

  /**
   * Generate strategic summary insights for completion
   */
  async generateStrategicSummary(session: ChatSession): Promise<string> {
    const responses = session.responses.map(r => `${r.question}\n→ ${r.answer}`).join('\n\n');
    
    const prompt = `You are NextStage's senior strategist analyzing a discovery session.

CLIENT: ${session.userName}
DISCOVERY SESSION:
${responses}

Generate a sophisticated strategic summary that:
1. Identifies 2-3 key strategic opportunities
2. Highlights transformation potential
3. Suggests natural next steps
4. Maintains NextStage's premium consulting tone
5. Shows genuine excitement about their vision

Format as a compelling strategic insight (2-3 short paragraphs):`;

    return await this.callClaude(prompt, 400);
  }

  /**
   * Generate contextual responses to specific answer types
   */
  async generateContextualResponse(
    userResponse: string,
    questionType: 'vision' | 'audience' | 'problem' | 'success' | 'timeline' | 'budget' | 'additional',
    userName: string,
    previousResponses: UserResponse[]
  ): Promise<string> {
    const context = this.buildBusinessContext(previousResponses, userName);

    const responseMap = {
      vision: "Analyze their business vision and show strategic excitement",
      audience: "Recognize their market understanding and identify opportunities", 
      problem: "Validate the problem importance and strategic implications",
      success: "Connect to transformation potential and strategic outcomes",
      timeline: "Acknowledge urgency and connect to business momentum",
      budget: "Show understanding of investment mindset",
      additional: "Appreciate additional context and wrap up strategically"
    };

    const prompt = `You are NextStage's Strategy Concierge responding to a client's answer.

${context}

THEIR RESPONSE: "${userResponse}"
CONTEXT: ${responseMap[questionType]}

Generate a brief strategic acknowledgment (1 sentence) that:
1. Shows you understand the business implications
2. Demonstrates strategic thinking
3. Maintains sophisticated tone
4. Builds momentum toward next question
5. Uses ${userName}'s name naturally

Examples:
- "Fascinating vision, ${userName} - I can see the transformation potential in that market positioning."
- "Smart approach, ${userName}. That customer insight reveals some compelling strategic opportunities."
- "Excellent, ${userName}. That timeline gives us the perfect momentum for strategic acceleration."

Generate ONE contextual response:`;

    return await this.callClaude(prompt, 80);
  }

  /**
   * Core Claude API call
   */
  private async callClaude(prompt: string, maxTokens: number = 150): Promise<string> {
    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'anthropic-version': '2023-06-01',
          'x-api-key': this.apiKey
        },
        body: JSON.stringify({
          model: 'claude-3-5-sonnet-20241022',
          max_tokens: maxTokens,
          messages: [
            {
              role: 'user',
              content: prompt
            }
          ]
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Claude API error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      return data.content[0]?.text || '';
    } catch (error) {
      console.error('NextStage Concierge API error:', error);
      throw error;
    }
  }

  /**
   * Build business context from conversation history
   */
  private buildBusinessContext(previousResponses: UserResponse[], userName?: string): string {
    if (previousResponses.length === 0) return '';
    
    const context = previousResponses
      .map(r => `Q: ${r.question}\nA: ${r.answer}`)
      .join('\n\n');
    
    return `DISCOVERY SESSION${userName ? ` with ${userName}` : ''}:\n${context}\n`;
  }
} 