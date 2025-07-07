import { NextRequest, NextResponse } from 'next/server'
import { SimpleConversationAgent } from '@/lib/simple-conversation-agent'

// Store conversation agents by session ID (in production, use Redis or database)
const conversationAgents = new Map<string, SimpleConversationAgent>();

export async function POST(request: NextRequest) {
  try {
    const { sessionId, userMessage, currentQuestion } = await request.json() as {
      sessionId: string
      userMessage: string
      currentQuestion?: string
    }

    if (!sessionId || !userMessage) {
      return NextResponse.json(
        { error: 'Missing sessionId or userMessage' },
        { status: 400 }
      )
    }

    // Get or create conversation agent for this session
    let agent = conversationAgents.get(sessionId);
    if (!agent) {
      agent = new SimpleConversationAgent();
      conversationAgents.set(sessionId, agent);
    }

    // Process the user's response
    const nextQuestion = await agent.processUserResponse(userMessage, currentQuestion);

    // Check if conversation is complete
    if (agent.isComplete() || !nextQuestion) {
      return NextResponse.json({
        complete: true,
        extractedInfo: agent.getExtractedInfo(),
        responses: agent.getResponses(),
        submissionId: sessionId
      });
    }

    return NextResponse.json({
      complete: false,
      nextQuestion: {
        question: nextQuestion.question,
        type: nextQuestion.type,
        options: nextQuestion.options,
        reasoning: nextQuestion.reasoning,
        placeholder: nextQuestion.placeholder
      },
      extractedInfo: agent.getExtractedInfo(),
      progress: agent.getProgress()
    });

  } catch (error) {
    console.error('Error in enhanced chat:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('sessionId');

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Missing sessionId' },
        { status: 400 }
      )
    }

    // Get conversation status
    const agent = conversationAgents.get(sessionId);
    if (!agent) {
      return NextResponse.json({
        exists: false,
        firstQuestion: {
          question: "Hi there! I'm your NextStage Strategy Concierge. What's your first name?",
          type: 'text',
          reasoning: "Personal connection and identification"
        }
      });
    }

    return NextResponse.json({
      exists: true,
      extractedInfo: agent.getExtractedInfo(),
      responses: agent.getResponses(),
      complete: agent.isComplete()
    });

  } catch (error) {
    console.error('Error getting chat status:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('sessionId');

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Missing sessionId' },
        { status: 400 }
      )
    }

    // Reset conversation
    const agent = conversationAgents.get(sessionId);
    if (agent) {
      agent.reset();
    } else {
      conversationAgents.delete(sessionId);
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Error resetting chat:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 