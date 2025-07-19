import { NextRequest, NextResponse } from 'next/server';
import { NextStageConcierge } from '@/lib/nextstage-concierge';

export async function POST(request: NextRequest) {
  console.log('NextStage Concierge API called');
  
  try {
    const body = await request.json();
    const { action, ...params } = body;
    
    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'Anthropic API key not configured' },
        { status: 500 }
      );
    }

    const concierge = new NextStageConcierge();
    let result;

    switch (action) {
      case 'generateIntelligentResponse':
        // Single API call following Anthropic's prompt chaining pattern
        result = await concierge.generateSimpleResponse(
          params.userAnswer,
          params.questionIndex,
          params.previousResponses,
          params.userName,
          params.nextQuestion
        );
        break;
        
      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        );
    }

    return NextResponse.json({
      success: true,
      data: result
    });

  } catch (error) {
    console.error('NextStage Concierge API error:', error);
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'NextStage Concierge API is running',
    timestamp: new Date().toISOString()
  });
} 