import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const conversationId = searchParams.get('conversationId');

    if (!conversationId) {
      return NextResponse.json({ error: 'conversationId is required' }, { status: 400 });
    }

    console.log('Loading conversation history for:', conversationId);

    // Load conversation messages
    const { data: messages, error } = await supabaseAdmin
      .from('conversation_messages')
      .select('*')
      .eq('conversation_id', conversationId)
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Error loading conversation messages:', error);
      return NextResponse.json({ error: 'Failed to load conversation history' }, { status: 500 });
    }

    // Transform messages to match frontend interface
    const transformedMessages = messages.map((msg: any) => ({
      id: msg.id,
      conversation_id: msg.conversation_id,
      role: msg.role,
      content: msg.content,
      created_at: new Date(msg.created_at)
    }));

    console.log('Returning', transformedMessages.length, 'messages');

    return NextResponse.json({
      messages: transformedMessages,
      conversationId: conversationId
    });

  } catch (error) {
    console.error('Error in conversation history API:', error);
    return NextResponse.json({ 
      error: 'Failed to load conversation history' 
    }, { status: 500 });
  }
} 