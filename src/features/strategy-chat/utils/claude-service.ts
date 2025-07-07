import { ChatSession, UserResponse } from '../types';

export class ClaudeService {
  private baseUrl = 'https://api.anthropic.com/v1/messages';
  private apiKey: string;

  constructor() {
    this.apiKey = process.env.ANTHROPIC_API_KEY || '';
    if (!this.apiKey) {
      throw new Error('ANTHROPIC_API_KEY not found in environment variables');
    }
  }

  /**
   * Generate an intelligent follow-up question based on the user's response
   */
  async generateFollowUpQuestion(
    userResponse: string,
    questionIndex: number,
    previousResponses: UserResponse[],
    userName: string
  ): Promise<string> {
    const context = this.buildContext(previousResponses, userName);
    
    const prompt = `You are an expert business strategist conducting a discovery session. 

${context}

The user just answered: "${userResponse}"

Generate a personalized, strategic follow-up question that:
1. Builds on their specific response
2. Digs deeper into business strategy
3. Uncovers hidden opportunities
4. Feels natural and conversational
5. Uses their name (${userName}) when appropriate

Keep it under 2 sentences and make it feel like a seasoned consultant's follow-up.

Example good follow-ups:
- "That's fascinating, ${userName}. What's the biggest bottleneck preventing you from scaling that solution?"
- "I love that vision! What would need to be true for you to capture 10x more of that market?"
- "Smart approach. What's the one thing your competitors are missing that you could leverage?"

Generate ONE follow-up question:`;

    return await this.callClaude(prompt);
  }

  /**
   * Generate strategic insights based on the completed session
   */
  async generateStrategicInsights(session: ChatSession): Promise<string> {
    const responses = session.responses.map(r => `Q: ${r.question}\nA: ${r.answer}`).join('\n\n');
    
    const prompt = `You are a senior business strategist analyzing a discovery session. 

CLIENT: ${session.userName}
RESPONSES:
${responses}

Generate a strategic insight summary that:
1. Identifies 3 key opportunities
2. Highlights potential challenges
3. Suggests next steps
4. Maintains an encouraging, expert tone

Format as a compelling business insight (2-3 paragraphs):`;

    return await this.callClaude(prompt);
  }

  /**
   * Generate a personalized welcome message
   */
  async generateWelcomeMessage(userName: string): Promise<string> {
    const prompt = `You are NextStage Strategy Concierge. Generate a warm, professional welcome message for ${userName} that:
1. Welcomes them personally
2. Sets expectations for a strategic conversation
3. Feels authentic and expert-level
4. Is under 2 sentences

Example: "Welcome, ${userName}! I'm excited to dive deep into your vision and uncover the strategic opportunities that will accelerate your success."

Generate ONE welcome message:`;

    return await this.callClaude(prompt);
  }

  /**
   * Analyze user response and suggest conversation direction
   */
  async analyzeResponse(
    userResponse: string,
    questionIndex: number,
    previousResponses: UserResponse[]
  ): Promise<{
    sentiment: 'positive' | 'neutral' | 'concerned';
    confidence: 'high' | 'medium' | 'low';
    suggestedTone: 'encouraging' | 'challenging' | 'supportive';
    keyInsights: string[];
  }> {
    const context = this.buildContext(previousResponses);
    
    const prompt = `Analyze this user response in a business strategy context:

${context}

USER RESPONSE: "${userResponse}"

Return a JSON object with:
{
  "sentiment": "positive|neutral|concerned",
  "confidence": "high|medium|low", 
  "suggestedTone": "encouraging|challenging|supportive",
  "keyInsights": ["insight1", "insight2", "insight3"]
}

Focus on business strategy implications:`;

    const response = await this.callClaude(prompt);
    try {
      return JSON.parse(response);
    } catch {
      // Fallback if parsing fails
      return {
        sentiment: 'neutral',
        confidence: 'medium',
        suggestedTone: 'supportive',
        keyInsights: ['Continue exploring this opportunity']
      };
    }
  }

  /**
   * Core Claude API call
   */
  private async callClaude(prompt: string): Promise<string> {
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
          max_tokens: 300,
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
      console.error('Claude API error:', error);
      throw error;
    }
  }

  /**
   * Build context from previous responses
   */
  private buildContext(previousResponses: UserResponse[], userName?: string): string {
    if (previousResponses.length === 0) return '';
    
    const context = previousResponses
      .map(r => `Q: ${r.question}\nA: ${r.answer}`)
      .join('\n\n');
    
    return `PREVIOUS CONVERSATION${userName ? ` with ${userName}` : ''}:\n${context}\n\n`;
  }
} 