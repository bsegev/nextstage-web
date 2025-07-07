import { NextRequest, NextResponse } from 'next/server'
import { getAnalyticsDashboard, getBusinessIntelligence, exportAnalyticsData } from '@/lib/analytics'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type') || 'dashboard'
    const eventType = searchParams.get('event_type')
    const limit = parseInt(searchParams.get('limit') || '100')
    
    // If requesting raw analytics data
    if (type === 'raw' || eventType) {
      let query = supabase
        .from('analytics')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(limit)

      if (eventType) {
        query = query.eq('event_type', eventType)
      }

      const { data, error } = await query

      if (error) {
        return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 })
      }

      return NextResponse.json({ data })
    }
    
    // Otherwise return processed analytics
    switch (type) {
      case 'dashboard':
        const dashboard = getAnalyticsDashboard()
        return NextResponse.json(dashboard)
        
      case 'intelligence':
        const intelligence = getBusinessIntelligence()
        return NextResponse.json(intelligence)
        
      case 'export':
        const exportData = exportAnalyticsData()
        return NextResponse.json(exportData)
        
      default:
        return NextResponse.json({ error: 'Invalid type parameter' }, { status: 400 })
    }
  } catch (error) {
    console.error('Analytics API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch analytics data' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { event_type, event_data, session_id } = body

    // Get client IP and user agent
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown'
    
    const userAgent = request.headers.get('user-agent') || ''
    
    // Enhanced event data with server-side info
    const enhancedEventData = {
      ...event_data,
      server_timestamp: new Date().toISOString(),
      client_ip: clientIP,
      headers: {
        'accept-language': request.headers.get('accept-language'),
        'accept-encoding': request.headers.get('accept-encoding'),
        'connection': request.headers.get('connection'),
        'host': request.headers.get('host'),
      }
    }

    // Insert analytics record
    const { data, error } = await supabase
      .from('analytics')
      .insert({
        event_type,
        event_data: enhancedEventData,
        user_agent: userAgent,
        ip_address: clientIP,
        session_id: session_id || crypto.randomUUID(),
        created_at: new Date().toISOString()
      })
      .select()
      .single()

    if (error) {
      console.error('Analytics insertion error:', error)
      return NextResponse.json({ error: 'Failed to track analytics' }, { status: 500 })
    }

    // Also update session tracking if this is a session end event
    if (event_type === 'session_end' && session_id) {
      await updateSessionTracking(session_id, event_data)
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Analytics API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

async function updateSessionTracking(sessionId: string, eventData: any) {
  try {
    // Find the most recent client profile for this session
    const { data: interactions } = await supabase
      .from('client_interactions')
      .select('client_profile_id')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: false })
      .limit(1)

    if (interactions && interactions.length > 0) {
      const clientProfileId = interactions[0].client_profile_id
      
      // Update client profile with session info
      await supabase
        .from('client_profiles')
        .update({
          updated_at: new Date().toISOString(),
          // Add session duration to additional notes if available
          ...(eventData.session_duration && {
            additional_notes: `Session duration: ${Math.round(eventData.session_duration / 1000)}s`
          })
        })
        .eq('id', clientProfileId)
    }
  } catch (error) {
    console.error('Error updating session tracking:', error)
  }
} 