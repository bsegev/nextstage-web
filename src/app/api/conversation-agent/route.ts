import { NextRequest, NextResponse } from 'next/server';
import { 
  NextStageAgentRunner, 
  ConversationContext, 
  AgentResponse,
  UserResponse
} from '@/lib/nextstage-agents';
import { ConversationService } from '@/lib/conversation-service';
import { supabase } from '@/lib/supabase';

const conversationService = new ConversationService();

export async function POST(request: NextRequest) {
  try {
    const { 
      userInput, 
      conversationId, 
      userName, 
      currentTopic, 
      responses,
      conversationHistory 
    } = await request.json() as {
      userInput: string;
      conversationId: string;
      userName: string;
      currentTopic: string;
      responses: UserResponse[];
      conversationHistory: Array<{
        role: 'user' | 'assistant';
        content: string;
        timestamp: string;
      }> | UserResponse[];
    };

    if (!userInput) {
      return NextResponse.json(
        { error: 'Missing userInput' },
        { status: 400 }
      );
    }

    let conversation;
    let useDatabaseFallback = false;
    
    // Try to get or create conversation in database
    try {
      if (conversationId) {
        conversation = await conversationService.getConversation(conversationId);
      }
      
      if (!conversation) {
        // Create new conversation
        conversation = await conversationService.createConversation({
          user_name: userName || 'there',
          current_agent: 'orchestrator',
          current_topic: currentTopic || 'discovery',
          sophistication_level: 'beginner'
        });
      }
    } catch (dbError) {
      console.warn('Database not ready, using fallback mode:', dbError);
      useDatabaseFallback = true;
      
      // Create fallback conversation object
      conversation = {
        id: conversationId || `fallback-${Date.now()}`,
        user_name: userName || 'there',
        current_agent: 'orchestrator',
        current_topic: currentTopic || 'discovery',
        sophistication_level: 'beginner',
        engagement_score: 0,
        conversation_depth: 0
      };
    }

    let agentConversationHistory: Array<{
      role: 'user' | 'assistant';
      content: string;
      timestamp: Date;
    }> = [];
    
    // Try to get full conversation history from database
    if (!useDatabaseFallback) {
      try {
        const messages = await conversationService.getConversationMessages(conversation.id);
        
        // Convert to agent format (filter out system messages)
        agentConversationHistory = messages
          .filter(msg => msg.role !== 'system')
          .map(msg => ({
            role: msg.role as 'user' | 'assistant',
            content: msg.content,
            timestamp: new Date(msg.created_at)
          }));
      } catch (dbError) {
        console.warn('Could not get message history from database, using provided history');
        // Handle both formats: UserResponse[] and standard conversation history
        if (conversationHistory && conversationHistory.length > 0) {
          if ('question' in conversationHistory[0]) {
            // UserResponse format - convert to standard format
            agentConversationHistory = (conversationHistory as UserResponse[]).flatMap(resp => [
              {
                role: 'assistant' as const,
                content: resp.question,
                timestamp: new Date()
              },
              {
                role: 'user' as const,
                content: resp.answer,
                timestamp: new Date()
              }
            ]);
          } else {
            // Standard format
            agentConversationHistory = (conversationHistory as any[]).map(msg => ({
              role: msg.role,
              content: msg.content,
              timestamp: new Date(msg.timestamp || Date.now())
            }));
          }
        } else {
          agentConversationHistory = [];
        }
      }
    } else {
      // Use provided conversation history as fallback
      if (conversationHistory && conversationHistory.length > 0) {
        if ('question' in conversationHistory[0]) {
          // UserResponse format - convert to standard format
          agentConversationHistory = (conversationHistory as UserResponse[]).flatMap(resp => [
            {
              role: 'assistant' as const,
              content: resp.question,
              timestamp: new Date()
            },
            {
              role: 'user' as const,
              content: resp.answer,
              timestamp: new Date()
            }
          ]);
        } else {
          // Standard format
          agentConversationHistory = (conversationHistory as any[]).map(msg => ({
            role: msg.role,
            content: msg.content,
            timestamp: new Date(msg.timestamp || Date.now())
          }));
        }
      } else {
        agentConversationHistory = [];
      }
    }

    // Create conversation context with full history
    const context: ConversationContext = {
      userId: conversation.id,
      userName: conversation.user_name || 'there',
      responses: responses || [],
      currentTopic: conversation.current_topic,
      sophisticationLevel: conversation.sophistication_level,
      conversationHistory: agentConversationHistory
    };

    // Initialize agent runner
    const agentRunner = new NextStageAgentRunner();
    
    // Set current agent state AND context
    agentRunner.handoffTo(conversation.current_agent, conversation.current_topic);
    
    // Set context for ultra-efficient processing
    const agentContext = {
      conversationId: conversation.id,
      conversationHistory: agentConversationHistory,
      responses: responses || [],
      currentTopic: conversation.current_topic,
      sophisticationLevel: conversation.sophistication_level,
      userName: conversation.user_name || 'there'
    };
    
    // Pass context to agent (using internal method)
    (agentRunner as any).agentContext = agentContext;

    // Store user message with expert insights (if database available)
    if (!useDatabaseFallback) {
      try {
        await conversationService.addMessage(
          conversation.id,
          'user',
          userInput,
          {
            messageType: 'text',
            currentTopic: conversation.current_topic
          }
        );
      } catch (dbError) {
        console.warn('Could not store user message in database:', dbError);
      }
    }

    // Run the agent
    const agentResponse: AgentResponse = await agentRunner.runAgent(userInput);
    
    // Handle agent actions
    if (agentResponse.action === 'handoff' && agentResponse.handoffTo) {
      // Determine the topic based on the agent we're handing off to
      const topicMap = {
        'discovery_agent': 'discovery',
        'problem_agent': 'problem',
        'solution_agent': 'solution',
        'audience_agent': 'audience',
        'timeline_budget_agent': 'timeline_budget',
        'brief_agent': 'brief_generation'
      };
      
      const newTopic = topicMap[agentResponse.handoffTo as keyof typeof topicMap] || context.currentTopic;
      agentRunner.handoffTo(agentResponse.handoffTo, newTopic);
      
      // Update context with handoff
      context.currentTopic = newTopic;
      
      // Update topic statuses in database (if available)
      if (!useDatabaseFallback) {
        try {
          await conversationService.updateTopicStatus(
            conversation.id,
            conversation.current_topic,
            'completed'
          );
          
          await conversationService.updateTopicStatus(
            conversation.id,
            newTopic,
            'active'
          );
        } catch (dbError) {
          console.warn('Could not update topic status in database:', dbError);
        }
      }
    }

    // Store agent response (if database available)
    if (!useDatabaseFallback) {
      try {
        await conversationService.addMessage(
          conversation.id,
          'assistant',
          agentResponse.message,
          {
            messageType: 'text',
            agentName: agentRunner.getCurrentAgent(),
            agentReasoning: agentResponse.reasoning,
            toolCalls: agentResponse.data
          }
        );
      } catch (dbError) {
        console.warn('Could not store agent response in database:', dbError);
      }
    }

    // Update conversation state (if database available)
    if (!useDatabaseFallback) {
      try {
        await conversationService.updateConversation(conversation.id, {
          current_agent: agentRunner.getCurrentAgent(),
          current_topic: context.currentTopic,
          agent_context: agentRunner.getContext(),
          conversation_insights: agentRunner.getInsights(),
          engagement_score: Math.min(100, (conversation.engagement_score || 0) + 5),
          conversation_depth: Math.max(conversation.conversation_depth || 0, 
            Math.floor(userInput.length / 50))
        });
      } catch (dbError) {
        console.warn('Could not update conversation state in database:', dbError);
      }
    }

    // Handle completion
    if (agentResponse.action === 'complete' && agentResponse.data?.generate_strategic_brief) {
      if (!useDatabaseFallback) {
        try {
          await conversationService.completeConversation(
            conversation.id,
            agentResponse.data.generate_strategic_brief
          );
        } catch (dbError) {
          console.warn('Could not complete conversation in database:', dbError);
        }
      }
    }

    // Get conversation insights for the response (if database available)
    let expertInsights: any[] = [];
    if (!useDatabaseFallback) {
      try {
        expertInsights = await conversationService.getConversationInsights(conversation.id);
      } catch (dbError) {
        console.warn('Could not get expert insights from database:', dbError);
      }
    }

    // Add current message to conversation history for response
    const updatedConversationHistory = [
      ...agentConversationHistory,
      {
        role: 'user' as const,
        content: userInput,
        timestamp: new Date()
      },
      {
        role: 'assistant' as const,
        content: agentResponse.message,
        timestamp: new Date()
      }
    ];

    // Return response
    return NextResponse.json({
      message: agentResponse.message,
      action: agentResponse.action,
      handoffTo: agentResponse.handoffTo,
      currentAgent: agentRunner.getCurrentAgent(),
      currentTopic: context.currentTopic,
      insights: agentResponse.data,
      reasoning: agentResponse.reasoning,
      conversationHistory: updatedConversationHistory.map(msg => ({
        role: msg.role,
        content: msg.content,
        timestamp: msg.timestamp.toISOString()
      })),
      conversationId: conversation.id,
      expertInsights: expertInsights.slice(0, 3), // Send top 3 insights
      conversationDepth: conversation.conversation_depth,
      engagementScore: conversation.engagement_score,
      databaseStatus: useDatabaseFallback ? 'fallback' : 'connected',
      // Include strategic brief if conversation is complete
      ...(agentResponse.action === 'complete' && agentResponse.data?.generate_strategic_brief ? {
        strategicBrief: agentResponse.data.generate_strategic_brief
      } : {})
    });

  } catch (error) {
    console.error('Agent conversation error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error', 
        details: error instanceof Error ? error.message : 'Unknown error',
        stack: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.stack : undefined) : undefined
      },
      { status: 500 }
    );
  }
}

// GET endpoint for retrieving conversation state
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const conversationId = searchParams.get('conversationId');

    if (!conversationId) {
      return NextResponse.json({ 
        message: 'Conversation Agent API is running',
        timestamp: new Date().toISOString(),
        databaseStatus: 'unknown'
      });
    }

    // Try to retrieve conversation from database
    let conversation, messages, insights, analytics;
    let useDatabaseFallback = false;
    
    try {
      conversation = await conversationService.getConversation(conversationId);
      
      if (!conversation) {
        return NextResponse.json(
          { error: 'Conversation not found' },
          { status: 404 }
        );
      }

      // Get conversation messages
      messages = await conversationService.getConversationMessages(conversationId);
      
      // Get conversation insights
      insights = await conversationService.getConversationInsights(conversationId);
      
      // Get conversation analytics
      analytics = await conversationService.getConversationAnalytics(conversationId);
      
    } catch (dbError) {
      console.warn('Database not ready for GET request:', dbError);
      return NextResponse.json(
        { 
          error: 'Database not ready', 
          details: 'Please set up the database tables first',
          databaseStatus: 'not_ready'
        },
        { status: 503 }
      );
    }

    return NextResponse.json({ 
      conversation,
      messages,
      insights,
      analytics,
      conversationHistory: messages.map(msg => ({
        role: msg.role,
        content: msg.content,
        timestamp: msg.created_at,
        expertFraming: msg.expert_framing,
        strategicInsights: msg.strategic_insights,
        hiddenOpportunities: msg.hidden_opportunities
      })),
      currentAgent: conversation.current_agent,
      currentTopic: conversation.current_topic,
      completionPercentage: conversation.completion_percentage,
      engagementScore: conversation.engagement_score,
      conversationDepth: conversation.conversation_depth,
      databaseStatus: 'connected'
    });

  } catch (error) {
    console.error('Get conversation error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
        databaseStatus: 'error'
      },
      { status: 500 }
    );
  }
} 