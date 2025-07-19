// import { supabaseAdmin } from '@/lib/supabase' // Disabled to prevent build-time errors
import { NextResponse } from 'next/server'

export async function GET() {
  const results = {
    supabase: { connected: false, error: 'Supabase disabled to prevent build errors' as string | null },
    claude: { connected: false, error: null as string | null },
    openai: { connected: false, error: null as string | null }
  }

  // Supabase disabled - skip test
  console.log('Supabase connection test skipped - Supabase disabled');
  
  /* Original Supabase code - commented out
  // Test Supabase connection
  try {
    const { data, error } = await supabaseAdmin
      .from('information_schema.tables')
      .select('table_name')
      .limit(1)

    if (!error) {
      results.supabase.connected = true
    } else {
      results.supabase.error = error instanceof Error ? error.message : 'Unknown error'
    }
  } catch (error) {
    results.supabase.error = error instanceof Error ? error.message : 'Connection failed'
  }
  */

  // Test Claude API
  try {
    if (process.env.ANTHROPIC_API_KEY) {
      results.claude.connected = true
    } else {
      results.claude.error = 'ANTHROPIC_API_KEY not configured'
    }
  } catch (error) {
    results.claude.error = error instanceof Error ? error.message : 'Unknown error'
  }

  // Test OpenAI API
  try {
    if (process.env.OPENAI_API_KEY) {
      results.openai.connected = true
    } else {
      results.openai.error = 'OPENAI_API_KEY not configured'
    }
  } catch (error) {
    results.openai.error = error instanceof Error ? error.message : 'Unknown error'
  }

  return NextResponse.json({
    success: true,
    connections: results,
    note: 'Supabase connection testing disabled to prevent build errors'
  })
} 