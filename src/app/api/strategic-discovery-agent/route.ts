import { NextRequest, NextResponse } from 'next/server'
// import { StrategicDiscoveryAgent } from '@/lib/strategic-discovery-agent' // Disabled - uses OpenAI
// import { supabase } from '@/lib/supabase' // Disabled to prevent build-time errors

export async function POST(request: NextRequest) {
  try {
    // Strategic discovery agent disabled - uses OpenAI which is no longer used
    console.log('Strategic discovery agent disabled - OpenAI dependency removed');
    
    return NextResponse.json({
      success: false,
      error: 'Strategic discovery agent functionality is currently disabled',
      message: 'This feature has been temporarily disabled during system migration'
    }, { status: 503 })
  } catch (error) {
    console.error('Strategic discovery agent error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET method for retrieving conversation status
export async function GET(request: NextRequest) {
  // Strategic discovery agent disabled - uses OpenAI which is no longer used
  console.log('Strategic discovery agent disabled - OpenAI dependency removed');
  
  return NextResponse.json({
    success: false,
    error: 'Strategic discovery agent functionality is currently disabled',
    message: 'This feature has been temporarily disabled during system migration'
  }, { status: 503 })
} 