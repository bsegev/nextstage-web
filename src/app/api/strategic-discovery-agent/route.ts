import { NextRequest, NextResponse } from 'next/server'
import { StrategicDiscoveryAgent } from '@/lib/strategic-discovery-agent'
// import { supabase } from '@/lib/supabase' // Disabled to prevent build-time errors

export async function POST(request: NextRequest) {
  try {
    const { action, conversationId, userInput } = await request.json()

    if (!action) {
      return NextResponse.json({ error: 'Action is required' }, { status: 400 })
    }

    switch (action) {
      case 'start_conversation':
        const newConversationId = `conv_${Date.now()}`
        
        // Supabase disabled - create conversation in memory only
        console.log('Strategic discovery conversation started but Supabase is disabled');
        
        /* Original Supabase code - commented out
        await supabase.from('conversations').insert({
          id: newConversationId,
          status: 'active',
          phase: 'discovery',
          user_name: userInput || 'Anonymous',
          created_at: new Date().toISOString()
        })
        */

        const agent = new StrategicDiscoveryAgent(newConversationId)
        const welcomeResponse = await agent.startConversation(userInput || 'user')
        
        return NextResponse.json({
          success: true,
          conversationId: newConversationId,
          message: welcomeResponse.message,
          phase: welcomeResponse.phase
        })

      case 'send_message':
        if (!conversationId || !userInput) {
          return NextResponse.json({ error: 'Conversation ID and user input are required' }, { status: 400 })
        }

        // Process message with agent
        const messageAgent = new StrategicDiscoveryAgent(conversationId)
        const response = await messageAgent.processUserInput(userInput)
        
        // Supabase disabled - skip database operations
        console.log('Strategic discovery message processed but Supabase is disabled');
        
        /* Original Supabase code - commented out
        // Save conversation state
        await supabase.from('conversations').update({
          phase: response.phase,
          completion_score: response.completionScore,
          updated_at: new Date().toISOString()
        }).eq('id', conversationId)
        */

        return NextResponse.json({
          success: true,
          response: response
        })

      case 'get_conversation':
        if (!conversationId) {
          return NextResponse.json({ error: 'Conversation ID is required' }, { status: 400 })
        }

        // Supabase disabled - return mock conversation
        console.log('Strategic discovery conversation requested but Supabase is disabled');
        return NextResponse.json({
          success: true,
          conversation: {
            id: conversationId,
            status: 'active',
            phase: 'discovery',
            messages: [],
            message: 'Conversation history not available - Supabase disabled'
          }
        });

        /* Original Supabase code - commented out
        const { data: conversation, error } = await supabase
          .from('conversations')
          .select('*')
          .eq('id', conversationId)
          .single()

        if (error) {
          return NextResponse.json({ error: 'Conversation not found' }, { status: 404 })
        }

        return NextResponse.json({
          success: true,
          conversation: conversation
        })
        */

      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    }
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
  const { searchParams } = new URL(request.url)
  const conversationId = searchParams.get('conversationId')
  
  if (!conversationId) {
    return NextResponse.json({ error: 'Missing conversationId' }, { status: 400 })
  }

  // Supabase disabled - return mock conversation
  console.log('Strategic discovery conversation status requested but Supabase is disabled');
  return NextResponse.json({
    success: true,
    conversation: {
      id: conversationId,
      status: 'active',
      phase: 'discovery',
      messages: [],
      message: 'Conversation history not available - Supabase disabled'
    }
  });

  /* Original Supabase code - commented out
  try {
    const conversationService = new ConversationService()
    
    // Get conversation data
    const conversation = await conversationService.getConversation(conversationId)
    
    // Get message history
    const messages = await conversationService.getConversationMessages(conversationId)
    
    // Get insights
    const insights = await conversationService.getConversationInsights(conversationId)
    
    return NextResponse.json({
      success: true,
      conversation,
      messages,
      insights
    })
  } catch (error) {
    console.error('Error getting conversation:', error)
    return NextResponse.json({ error: 'Failed to get conversation' }, { status: 500 })
  }
  */
} 