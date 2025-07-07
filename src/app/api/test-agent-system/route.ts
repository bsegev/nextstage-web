import { NextRequest, NextResponse } from 'next/server';
import { 
  NextStageAgentRunner, 
  ConversationContext 
} from '@/lib/nextstage-agents';

export async function GET(request: NextRequest) {
  try {
    // Test the agent system with a simple conversation
    const testContext: ConversationContext = {
      userId: 'test_user',
      userName: 'Test User',
      responses: [],
      currentTopic: 'discovery',
      sophisticationLevel: 'beginner',
      conversationHistory: []
    };

    const agentRunner = new NextStageAgentRunner();
    
    // Test with a simple business description
    const testInput = "I'm building a SaaS platform for small businesses to manage their inventory and track sales.";
    const agentResponse = await agentRunner.runAgent(testInput);
    
    return NextResponse.json({
      status: 'success',
      message: 'Agent system is working correctly',
      test_results: {
        agent_response: agentResponse.message,
        current_agent: agentRunner.getCurrentAgent(),
        insights: agentRunner.getInsights(),
        action: agentResponse.action,
        handoff_to: agentResponse.handoffTo
      },
      system_info: {
        openai_configured: !!process.env.OPENAI_API_KEY,
        agents_available: Object.keys(require('@/lib/nextstage-agents').agents),
        tools_available: Object.keys(require('@/lib/nextstage-agents').functionTools)
      }
    });

  } catch (error) {
    console.error('Agent system test failed:', error);
    return NextResponse.json({
      status: 'error',
      message: 'Agent system test failed',
      error: error instanceof Error ? error.message : 'Unknown error',
      system_info: {
        openai_configured: !!process.env.OPENAI_API_KEY,
        error_details: error instanceof Error ? error.stack : 'No stack trace available'
      }
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { testInput, userName } = await request.json();
    
    if (!testInput) {
      return NextResponse.json({
        status: 'error',
        message: 'Missing testInput'
      }, { status: 400 });
    }

    const testContext: ConversationContext = {
      userId: 'test_user',
      userName: userName || 'Test User',
      responses: [],
      currentTopic: 'discovery',
      sophisticationLevel: 'beginner',
      conversationHistory: []
    };

    const agentRunner = new NextStageAgentRunner();
    const agentResponse = await agentRunner.runAgent(testInput);
    
    return NextResponse.json({
      status: 'success',
      message: 'Test completed successfully',
      test_input: testInput,
      test_results: {
        agent_response: agentResponse.message,
        current_agent: agentRunner.getCurrentAgent(),
        insights: agentRunner.getInsights(),
        action: agentResponse.action,
        handoff_to: agentResponse.handoffTo,
        reasoning: agentResponse.reasoning
      }
    });

  } catch (error) {
    console.error('Agent system test failed:', error);
    return NextResponse.json({
      status: 'error',
      message: 'Agent system test failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 