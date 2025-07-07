import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  const results = {
    supabase: { connected: false, error: null as string | null },
    claude: { connected: false, error: null as string | null }
  }

  // Test Supabase connection
  try {
    const { data, error } = await supabaseAdmin
      .from('conversations')
      .select('count')
      .limit(1)
    
    if (error) throw error
    results.supabase.connected = true
  } catch (error) {
    results.supabase.error = error instanceof Error ? error.message : 'Unknown error'
  }

  // Test Claude connection
  try {
    const anthropicKey = process.env.ANTHROPIC_API_KEY
    if (!anthropicKey) throw new Error('ANTHROPIC_API_KEY not found')

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'anthropic-version': '2023-06-01',
        'x-api-key': anthropicKey
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 10,
        messages: [{ role: 'user', content: 'Hello' }]
      })
    })

    if (response.ok) {
      results.claude.connected = true
    } else {
      const errorText = await response.text()
      results.claude.error = `API Error: ${response.status} - ${errorText}`
    }
  } catch (error) {
    results.claude.error = error instanceof Error ? error.message : 'Unknown error'
  }

  return NextResponse.json(results)
} 