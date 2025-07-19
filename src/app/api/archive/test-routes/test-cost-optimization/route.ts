import { NextResponse } from 'next/server'
// import { 
//   analyzeConversationOptimized,
//   ConversationDirector, 
//   ConversationContext, 
//   analyzeResponseIntelligence
// } from '@/lib/conversation-intelligence' // Disabled - may use OpenAI
// import { UserResponse } from '@/features/stage-shift-brief/components/ConversationalFlow'

export async function POST(_request: Request) {
  try {
    // Test cost optimization disabled - may use OpenAI which is no longer used
    console.log('Test cost optimization disabled - OpenAI dependency removed');
    
    return NextResponse.json({
      success: false,
      error: 'Test cost optimization functionality is currently disabled',
      message: 'This feature has been temporarily disabled during system migration'
    }, { status: 503 })
  } catch (error) {
    console.error('Error in test cost optimization:', error)
    
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to test cost optimization',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
} 