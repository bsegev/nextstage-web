import { supabaseAdmin } from '@/lib/supabase';
import { ChatSession, UserResponse, ChatMessage } from '../types';

export class SupabaseService {
  
  /**
   * Create a new strategy chat session
   */
  async createSession(session: Partial<ChatSession>): Promise<ChatSession> {
    const { data, error } = await supabaseAdmin
      .from('strategy_chat_sessions')
      .insert({
        user_name: session.userName,
        status: 'active',
        current_question_index: 0,
        responses: [],
        started_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating strategy chat session:', error);
      throw error;
    }

    return {
      id: data.id,
      responses: [],
      currentQuestionIndex: 0,
      isComplete: false,
      userName: data.user_name,
      startedAt: new Date(data.started_at),
    };
  }

  /**
   * Update an existing session
   */
  async updateSession(sessionId: string, updates: Partial<ChatSession>): Promise<void> {
    const { error } = await supabaseAdmin
      .from('strategy_chat_sessions')
      .update({
        user_name: updates.userName,
        current_question_index: updates.currentQuestionIndex,
        responses: updates.responses,
        status: updates.isComplete ? 'completed' : 'active',
        completed_at: updates.completedAt?.toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq('id', sessionId);

    if (error) {
      console.error('Error updating strategy chat session:', error);
      throw error;
    }
  }

  /**
   * Get a session by ID
   */
  async getSession(sessionId: string): Promise<ChatSession | null> {
    const { data, error } = await supabaseAdmin
      .from('strategy_chat_sessions')
      .select('*')
      .eq('id', sessionId)
      .single();

    if (error) {
      console.error('Error fetching strategy chat session:', error);
      return null;
    }

    return {
      id: data.id,
      responses: data.responses || [],
      currentQuestionIndex: data.current_question_index,
      isComplete: data.status === 'completed',
      userName: data.user_name,
      startedAt: new Date(data.started_at),
      completedAt: data.completed_at ? new Date(data.completed_at) : undefined,
    };
  }

  /**
   * Store a chat message
   */
  async addMessage(sessionId: string, message: Omit<ChatMessage, 'id'>): Promise<ChatMessage> {
    const { data, error } = await supabaseAdmin
      .from('strategy_chat_messages')
      .insert({
        session_id: sessionId,
        type: message.type,
        content: message.content,
        question_index: message.questionIndex,
        timestamp: message.timestamp.toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error('Error storing chat message:', error);
      throw error;
    }

    return {
      id: data.id,
      type: data.type,
      content: data.content,
      timestamp: new Date(data.timestamp),
      questionIndex: data.question_index,
    };
  }

  /**
   * Get all messages for a session
   */
  async getMessages(sessionId: string): Promise<ChatMessage[]> {
    const { data, error } = await supabaseAdmin
      .from('strategy_chat_messages')
      .select('*')
      .eq('session_id', sessionId)
      .order('timestamp', { ascending: true });

    if (error) {
      console.error('Error fetching chat messages:', error);
      return [];
    }

    return data.map(msg => ({
      id: msg.id,
      type: msg.type,
      content: msg.content,
      timestamp: new Date(msg.timestamp),
      questionIndex: msg.question_index,
    }));
  }

  /**
   * Store strategic insights for a completed session
   */
  async storeInsights(sessionId: string, insights: string): Promise<void> {
    const { error } = await supabaseAdmin
      .from('strategy_chat_insights')
      .insert({
        session_id: sessionId,
        insights,
        generated_at: new Date().toISOString(),
      });

    if (error) {
      console.error('Error storing strategic insights:', error);
      throw error;
    }
  }

  /**
   * Get insights for a session
   */
  async getInsights(sessionId: string): Promise<string | null> {
    const { data, error } = await supabaseAdmin
      .from('strategy_chat_insights')
      .select('insights')
      .eq('session_id', sessionId)
      .single();

    if (error) {
      console.error('Error fetching strategic insights:', error);
      return null;
    }

    return data.insights;
  }

  /**
   * Get session analytics
   */
  async getSessionAnalytics(sessionId: string): Promise<{
    totalMessages: number;
    sessionDuration: number;
    averageResponseTime: number;
  }> {
    const { data: messages, error } = await supabaseAdmin
      .from('strategy_chat_messages')
      .select('timestamp, type')
      .eq('session_id', sessionId)
      .order('timestamp', { ascending: true });

    if (error || !messages) {
      return { totalMessages: 0, sessionDuration: 0, averageResponseTime: 0 };
    }

    const totalMessages = messages.length;
    const sessionDuration = messages.length > 1 
      ? new Date(messages[messages.length - 1].timestamp).getTime() - new Date(messages[0].timestamp).getTime()
      : 0;

    // Calculate average response time between user and bot messages
    let responseTimes: number[] = [];
    for (let i = 1; i < messages.length; i++) {
      if (messages[i-1].type === 'user' && messages[i].type === 'bot') {
        const responseTime = new Date(messages[i].timestamp).getTime() - new Date(messages[i-1].timestamp).getTime();
        responseTimes.push(responseTime);
      }
    }

    const averageResponseTime = responseTimes.length > 0 
      ? responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length
      : 0;

    return {
      totalMessages,
      sessionDuration,
      averageResponseTime,
    };
  }

  /**
   * Create database tables if they don't exist (for development)
   */
  async ensureTables(): Promise<void> {
    try {
      // This would normally be handled by migrations
      // For now, we'll just test if tables exist
      await supabaseAdmin.from('strategy_chat_sessions').select('id').limit(1);
    } catch (error) {
      console.warn('Strategy chat tables may not exist. Please run migrations.');
    }
  }
} 