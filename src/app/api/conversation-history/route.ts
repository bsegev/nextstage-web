import { NextRequest, NextResponse } from 'next/server';
// import { supabaseAdmin } from '@/lib/supabase'; // Disabled to prevent build-time errors

interface DatabaseMessage {
  id: string;
  conversation_id: string;
  role: string;
  content: string;
  created_at: string;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const conversationId = searchParams.get('conversationId');
    const limit = parseInt(searchParams.get('limit') || '50');

    if (!conversationId) {
      return NextResponse.json(
        { error: 'Conversation ID is required' },
        { status: 400 }
      );
    }

    // Supabase disabled - return empty history
    console.log('Conversation history requested but Supabase is disabled');
    return NextResponse.json({ 
      messages: [], 
      message: 'Conversation history not available - Supabase disabled' 
    });

    /* Original Supabase code - commented out
    const { data: messages, error } = await supabaseAdmin
      .from('strategy_chat_messages')
      .select('*')
      .eq('conversation_id', conversationId)
      .order('created_at', { ascending: true })
      .limit(limit);

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch conversation history' },
        { status: 500 }
      );
    }

    // Transform messages to match frontend interface
    const transformedMessages = messages.map((msg: DatabaseMessage) => ({
      id: msg.id,
      role: msg.role,
      content: msg.content,
      timestamp: msg.created_at
    }));

    return NextResponse.json({ messages: transformedMessages });
    */
  } catch (error) {
    console.error('Conversation history error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch conversation history' },
      { status: 500 }
    );
  }
} 