import { NextRequest, NextResponse } from 'next/server';
import { ClaudeService } from '@/features/strategy-chat/utils/claude-service';
import { SupabaseService } from '@/features/strategy-chat/utils/supabase-service';
import { ChatSession, UserResponse } from '@/features/strategy-chat/types';

const claudeService = new ClaudeService();
const supabaseService = new SupabaseService();

export async function POST(request: NextRequest) {
  try {
    const { 
      action, 
      sessionId, 
      userResponse, 
      questionIndex,
      userName,
      session 
    } = await request.json();

    console.log('Strategy chat API called with action:', action);

    switch (action) {
      case 'create_session':
        return await handleCreateSession(userName);
      
      case 'send_message':
        return await handleSendMessage(sessionId, userResponse, questionIndex);
      
      case 'complete_session':
        return await handleCompleteSession(sessionId, session);
      
      case 'get_session':
        return await handleGetSession(sessionId);
      
      case 'generate_insights':
        return await handleGenerateInsights(sessionId);
      
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
  } catch (error) {
    console.error('Strategy chat API error:', error);
    return NextResponse.json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

async function handleCreateSession(userName: string): Promise<NextResponse> {
  try {
    // Generate personalized welcome message
    const welcomeMessage = await claudeService.generateWelcomeMessage(userName);
    
    // Create session in database
    const session = await supabaseService.createSession({ userName });
    
    // Store welcome message
    await supabaseService.addMessage(session.id, {
      type: 'bot',
      content: welcomeMessage,
      timestamp: new Date(),
      questionIndex: 0
    });

    return NextResponse.json({
      session,
      welcomeMessage,
      success: true
    });
  } catch (error) {
    console.error('Error creating session:', error);
    
    // Fallback without database
    return NextResponse.json({
      session: {
        id: `temp-${Date.now()}`,
        responses: [],
        currentQuestionIndex: 0,
        isComplete: false,
        userName,
        startedAt: new Date()
      },
      welcomeMessage: `Welcome, ${userName}! I'm excited to dive deep into your vision and uncover the strategic opportunities that will accelerate your success.`,
      success: true,
      fallback: true
    });
  }
}

async function handleSendMessage(
  sessionId: string, 
  userResponse: string, 
  questionIndex: number
): Promise<NextResponse> {
  try {
    // Get session to access previous responses
    const session = await supabaseService.getSession(sessionId);
    if (!session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }

    // Store user message
    await supabaseService.addMessage(sessionId, {
      type: 'user',
      content: userResponse,
      timestamp: new Date(),
      questionIndex
    });

    // Analyze response and generate follow-up
    const [analysis, followUp] = await Promise.all([
      claudeService.analyzeResponse(userResponse, questionIndex, session.responses),
      claudeService.generateFollowUpQuestion(
        userResponse, 
        questionIndex, 
        session.responses, 
        session.userName || 'there'
      )
    ]);

    // Store follow-up message
    await supabaseService.addMessage(sessionId, {
      type: 'bot',
      content: followUp,
      timestamp: new Date(),
      questionIndex
    });

    return NextResponse.json({
      followUp,
      analysis,
      success: true
    });
  } catch (error) {
    console.error('Error sending message:', error);
    
    // Fallback response
    return NextResponse.json({
      followUp: "That's really interesting! Could you tell me more about the specific challenges you're facing in that area?",
      analysis: {
        sentiment: 'positive',
        confidence: 'medium',
        suggestedTone: 'supportive',
        keyInsights: ['Continue exploring this opportunity']
      },
      success: true,
      fallback: true
    });
  }
}

async function handleCompleteSession(
  sessionId: string, 
  session: ChatSession
): Promise<NextResponse> {
  try {
    // Generate strategic insights
    const insights = await claudeService.generateStrategicInsights(session);
    
    // Update session as completed
    await supabaseService.updateSession(sessionId, {
      ...session,
      isComplete: true,
      completedAt: new Date()
    });

    // Store insights
    await supabaseService.storeInsights(sessionId, insights);

    // Get session analytics
    const analytics = await supabaseService.getSessionAnalytics(sessionId);

    return NextResponse.json({
      insights,
      analytics,
      success: true
    });
  } catch (error) {
    console.error('Error completing session:', error);
    
    // Fallback insights
    const fallbackInsights = `Thank you for sharing your vision, ${session.userName}! Based on our conversation, I can see exciting opportunities ahead. Your responses show strong strategic thinking and a clear understanding of your market. The next steps would be to dive deeper into execution planning and resource allocation to bring your vision to life.`;
    
    return NextResponse.json({
      insights: fallbackInsights,
      analytics: {
        totalMessages: session.responses.length * 2,
        sessionDuration: 0,
        averageResponseTime: 0
      },
      success: true,
      fallback: true
    });
  }
}

async function handleGetSession(sessionId: string): Promise<NextResponse> {
  try {
    const session = await supabaseService.getSession(sessionId);
    const messages = await supabaseService.getMessages(sessionId);
    
    if (!session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }

    return NextResponse.json({
      session,
      messages,
      success: true
    });
  } catch (error) {
    console.error('Error getting session:', error);
    return NextResponse.json({ 
      error: 'Failed to get session',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

async function handleGenerateInsights(sessionId: string): Promise<NextResponse> {
  try {
    const insights = await supabaseService.getInsights(sessionId);
    
    if (!insights) {
      return NextResponse.json({ error: 'No insights found' }, { status: 404 });
    }

    return NextResponse.json({
      insights,
      success: true
    });
  } catch (error) {
    console.error('Error getting insights:', error);
    return NextResponse.json({ 
      error: 'Failed to get insights',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// Health check endpoint
export async function GET(request: NextRequest) {
  return NextResponse.json({
    status: 'Strategy Chat API is running',
    timestamp: new Date().toISOString(),
    services: {
      claude: !!process.env.ANTHROPIC_API_KEY,
      supabase: !!process.env.NEXT_PUBLIC_SUPABASE_URL
    }
  });
} 