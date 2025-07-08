import { NextRequest, NextResponse } from 'next/server';
// import { ChatOpenAI } from '@langchain/openai';
// import {
//   conversationAgent,
//   briefGenerationAgent,
//   agents,
//   functionTools
// } from '@/lib/nextstage-agents'; // Disabled - uses OpenAI

export async function POST(_request: NextRequest) {
  try {
    // Test agent system disabled - uses OpenAI which is no longer used
    console.log('Test agent system disabled - OpenAI dependency removed');
    
    return NextResponse.json({
      success: false,
      error: 'Test agent system functionality is currently disabled',
      message: 'This feature has been temporarily disabled during system migration'
    }, { status: 503 });
  } catch (error) {
    console.error('Error in test agent system:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET method for system status
export async function GET() {
  // Test agent system disabled - uses OpenAI which is no longer used
  console.log('Test agent system disabled - OpenAI dependency removed');
  
  return NextResponse.json({
    success: false,
    error: 'Test agent system functionality is currently disabled',
    message: 'This feature has been temporarily disabled during system migration'
  }, { status: 503 })
} 