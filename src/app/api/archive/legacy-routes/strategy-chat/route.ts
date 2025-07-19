import { NextRequest, NextResponse } from 'next/server';
import { SimpleConversationAgent } from '@/lib/simple-conversation-agent';

interface ConversationRequest {
  userMessage: string;
  sessionId?: string;
  conversationHistory?: Array<{
    role: 'user' | 'assistant';
    content: string;
  }>;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as ConversationRequest;
    const { userMessage, sessionId } = body;

    if (!userMessage?.trim()) {
      return NextResponse.json(
        { error: 'User message is required' },
        { status: 400 }
      );
    }

    // Initialize conversation agent
    const agent = new SimpleConversationAgent();
    
    // Process the message using the correct method
    const nextQuestion = await agent.processUserResponse(userMessage);

    return NextResponse.json({
      success: true,
      message: nextQuestion?.question || "Thank you for your response!",
      shouldContinue: !agent.isComplete(),
      sessionId: sessionId || `session-${Date.now()}`,
      extractedInfo: agent.getExtractedInfo(),
      nextAction: agent.isComplete() ? 'generate_brief' : 'continue',
      progress: agent.getProgress()
    });

  } catch (error) {
    console.error('Strategy chat error:', error);
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'Strategy Chat API is running',
    endpoints: {
      POST: 'Process conversation message'
    },
    timestamp: new Date().toISOString()
  });
} 