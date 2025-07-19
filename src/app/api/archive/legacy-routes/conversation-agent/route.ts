import { NextRequest, NextResponse } from 'next/server';

interface ConversationRequest {
  userMessage: string;
  conversationHistory: Array<{
    role: 'user' | 'assistant';
    content: string;
  }>;
  sessionId?: string;
}

interface ConversationResponse {
  response: string;
  shouldContinue: boolean;
  extractedInfo?: Record<string, unknown>;
  nextAction?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as ConversationRequest;
    const { userMessage, conversationHistory } = body;

    if (!userMessage) {
      return NextResponse.json(
        { error: 'User message is required' },
        { status: 400 }
      );
    }

    // Simple conversation agent logic
    const conversationAgent = new SimpleConversationAgent();
    const response = await conversationAgent.processMessage(
      userMessage,
      conversationHistory
    );

    return NextResponse.json(response);
  } catch (error) {
    console.error('Conversation agent error:', error);
    return NextResponse.json(
      { error: 'Failed to process conversation' },
      { status: 500 }
    );
  }
}

// Simple conversation agent class
class SimpleConversationAgent {
  async processMessage(
    userMessage: string,
    history: Array<{ role: 'user' | 'assistant'; content: string }>
  ): Promise<ConversationResponse> {
    try {
      // Analyze the conversation so far
      const analysis = this.analyzeConversation(history);
      
      // Generate appropriate response
      const response = this.generateResponse(userMessage, analysis);
      
      // Determine if conversation should continue
      const shouldContinue = this.shouldContinueConversation(analysis);
      
      return {
        response,
        shouldContinue,
        extractedInfo: analysis.extractedInfo,
        nextAction: this.determineNextAction(analysis)
      };
    } catch (error) {
      console.error('Error processing message:', error);
      return {
        response: "I'm having trouble processing your message. Could you please try again?",
        shouldContinue: true,
        nextAction: 'retry'
      };
    }
  }

  private analyzeConversation(history: Array<{ role: 'user' | 'assistant'; content: string }>) {
    const userMessages = history.filter(msg => msg.role === 'user');
    const messageCount = userMessages.length;
    const hasBusinessInfo = this.hasBusinessInfo(userMessages);
    
    // Extract basic information
    const extractedInfo: Record<string, unknown> = {
      messageCount,
      hasBusinessInfo,
      hasContactInfo: this.hasContactInfo(userMessages),
      completionLevel: this.calculateCompletionLevel(userMessages)
    };

    return {
      messageCount,
      extractedInfo,
      readyForBrief: messageCount >= 3 && hasBusinessInfo
    };
  }

  private hasBusinessInfo(messages: Array<{ content: string }>): boolean {
    const businessKeywords = ['business', 'company', 'startup', 'product', 'service', 'market'];
    return messages.some(msg => 
      businessKeywords.some(keyword => 
        msg.content.toLowerCase().includes(keyword)
      )
    );
  }

  private hasContactInfo(messages: Array<{ content: string }>): boolean {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
    return messages.some(msg => emailRegex.test(msg.content));
  }

  private calculateCompletionLevel(messages: Array<{ content: string }>): number {
    const totalRequired = 5; // Assuming 5 key pieces of information needed
    let completed = 0;
    
    if (this.hasBusinessInfo(messages)) completed++;
    if (this.hasContactInfo(messages)) completed++;
    if (messages.length >= 3) completed++;
    if (messages.some(msg => msg.content.length > 50)) completed++;
    if (messages.length >= 5) completed++;
    
    return (completed / totalRequired) * 100;
  }

  private generateResponse(userMessage: string, analysis: { messageCount: number; readyForBrief: boolean }): string {
    const responses = [
      "That's really interesting! Tell me more about that.",
      "I see what you mean. Can you elaborate on that?",
      "That sounds like a great opportunity. What's your main challenge?",
      "Excellent point! How do you see this developing?",
      "That's a solid foundation. What's your next step?"
    ];

    if (analysis.readyForBrief) {
      return "Based on our conversation, I have enough information to generate a strategic brief for you. Would you like me to proceed?";
    }

    return responses[Math.floor(Math.random() * responses.length)];
  }

  private shouldContinueConversation(analysis: { readyForBrief: boolean; messageCount: number }): boolean {
    return !analysis.readyForBrief && analysis.messageCount < 10;
  }

  private determineNextAction(analysis: { readyForBrief: boolean; messageCount: number }): string {
    if (analysis.readyForBrief) {
      return 'generate_brief';
    }
    
    if (analysis.messageCount >= 10) {
      return 'force_completion';
    }
    
    return 'continue_conversation';
  }
}

// GET endpoint for retrieving conversation state
export async function GET() {
      return NextResponse.json({ 
    status: 'Conversation Agent API is running',
    endpoints: {
      POST: 'Process conversation message',
    },
    features: [
      'Natural conversation processing',
      'Information extraction',
      'Completion detection',
      'Response generation'
    ]
  });
} 