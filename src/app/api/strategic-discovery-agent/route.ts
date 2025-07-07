import { NextRequest, NextResponse } from 'next/server'
import { StrategicDiscoveryAgent } from '@/lib/strategic-discovery-agent'
import { ConversationService } from '@/lib/conversation-service'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { action, conversationId, userInput, userName } = await request.json()

    if (!action) {
      return NextResponse.json({ error: 'Action is required' }, { status: 400 })
    }

    switch (action) {
      case 'start_conversation':
        return await startConversation(userName)
      
      case 'send_message':
        return await sendMessage(conversationId, userInput)
      
      case 'get_conversation':
        return await getConversation(conversationId)
      
      default:
        return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
    }
  } catch (error) {
    console.error('Error in strategic discovery agent API:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

async function startConversation(userName?: string) {
  try {
    const conversationService = new ConversationService()
    
    // Create new conversation in database
    const conversation = await conversationService.createConversation({
      user_name: userName,
      current_agent: 'strategic_discovery_agent',
      current_topic: 'introduction',
      sophistication_level: 'intermediate'
    })

    // Initialize agent with conversation ID
    const agent = new StrategicDiscoveryAgent(conversation.id)
    
    // Start the conversation
    const response = await agent.startConversation(userName)
    
    return NextResponse.json({
      success: true,
      conversationId: conversation.id,
      response: response
    })
  } catch (error) {
    console.error('Error starting conversation:', error)
    return NextResponse.json({ error: 'Failed to start conversation' }, { status: 500 })
  }
}

async function sendMessage(conversationId: string, userInput: string) {
  if (!conversationId || !userInput) {
    return NextResponse.json({ error: 'Missing conversationId or userInput' }, { status: 400 })
  }

  try {
    // Initialize agent with existing conversation
    const agent = new StrategicDiscoveryAgent(conversationId)
    
    // Process the user input
    const response = await agent.processUserInput(userInput)
    
    // If agent decided to generate brief, mark conversation as completed
    if (response.action === 'generate_brief') {
      await supabase
        .from('conversations')
        .update({
          status: 'completed',
          completion_percentage: 100,
          completed_at: new Date().toISOString()
        })
        .eq('id', conversationId)
    }
    
    return NextResponse.json({
      success: true,
      response: response
    })
  } catch (error) {
    console.error('Error sending message:', error)
    return NextResponse.json({ error: 'Failed to process message' }, { status: 500 })
  }
}

async function getConversation(conversationId: string) {
  if (!conversationId) {
    return NextResponse.json({ error: 'Missing conversationId' }, { status: 400 })
  }

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
}

// GET method for retrieving conversation status
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const conversationId = searchParams.get('conversationId')
  
  if (!conversationId) {
    return NextResponse.json({ error: 'Missing conversationId' }, { status: 400 })
  }

  return await getConversation(conversationId)
} 