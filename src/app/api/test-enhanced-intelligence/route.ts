import { NextRequest, NextResponse } from 'next/server'
// import { analyzeResponseIntelligence, generateIntelligentBrief, ConversationDirector, ConversationContext } from '@/lib/conversation-intelligence' // Disabled - may use OpenAI
// import { UserResponse } from '@/features/stage-shift-brief/components/ConversationalFlow'
// import { isFeatureEnabled, getFeatureFlags } from '@/lib/feature-flags'

export async function GET() {
  return NextResponse.json({ 
    message: 'Enhanced Intelligence Test API - Currently Disabled',
    status: 'disabled',
    reason: 'OpenAI dependencies removed during system migration'
  })
}

export async function POST() {
  try {
    // Enhanced intelligence test disabled - may use OpenAI which is no longer used
    console.log('Enhanced intelligence test disabled - OpenAI dependency removed');
    
    return NextResponse.json({
      success: false,
      error: 'Enhanced intelligence test functionality is currently disabled',
      message: 'This feature has been temporarily disabled during system migration'
    }, { status: 503 })
  } catch (error) {
    console.error('Enhanced intelligence test failed:', error)
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    }, { status: 500 })
  }
} 