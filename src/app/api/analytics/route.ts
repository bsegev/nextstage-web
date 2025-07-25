import { NextRequest, NextResponse } from 'next/server'
import { getAnalyticsDashboard, getBusinessIntelligence, exportAnalyticsData } from '@/lib/analytics'
// import { supabase } from '@/lib/supabase' // Disabled to prevent build-time errors

interface AnalyticsEvent {
  event: string;
  timestamp: string;
  userId?: string;
  sessionId?: string;
  data?: Record<string, unknown>;
}

interface AnalyticsData {
  events: AnalyticsEvent[];
  sessionId?: string;
  userId?: string;
  timestamp?: string;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type') || 'dashboard'
    const eventType = searchParams.get('event_type')
    
    // If requesting raw analytics data
    if (type === 'raw' || eventType) {
      // Supabase disabled - return mock data or error
      console.log('Analytics raw data requested but Supabase is disabled');
      return NextResponse.json({ 
        data: [], 
        message: 'Raw analytics data not available - Supabase disabled' 
      })
      
      /* Original Supabase code - commented out
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
      */
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
    const data = await request.json() as AnalyticsData;

    // Log analytics event
    console.log('Analytics event:', data);

    // In a real implementation, you would:
    // 1. Store in analytics database
    // 2. Send to analytics service (like Segment, Mixpanel, etc.)
    // 3. Update user behavior tracking
    
    return NextResponse.json({ 
      success: true, 
      message: 'Analytics event recorded' 
    });
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json(
      { error: 'Failed to record analytics event' },
      { status: 500 }
    );
  }
}



 