// Simple localStorage-based conversation service (no Supabase)
export interface ConversationData {
  id: string;
  user_name?: string;
  user_email?: string;
  current_agent: string;
  current_topic: string;
  sophistication_level: 'beginner' | 'intermediate' | 'advanced';
  status: 'active' | 'paused' | 'completed' | 'abandoned';
  completion_percentage: number;
  business_type?: string;
  industry?: string;
  target_audience?: string;
  core_problems?: string[];
  success_metrics?: any;
  timeline?: string;
  budget_range?: string;
  expert_insights?: any;
  strategic_opportunities?: any;
  risk_assessments?: any;
  market_positioning?: any;
  engagement_score: number;
  conversation_depth: number;
  agent_context?: any;
  conversation_insights?: any;
  created_at: string;
  updated_at: string;
  completed_at?: string;
}

export interface ConversationMessage {
  id: string;
  conversation_id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  message_type: 'text' | 'question' | 'answer' | 'insight' | 'summary';
  agent_name?: string;
  agent_reasoning?: string;
  tool_calls?: any;
  expert_framing?: string;
  strategic_insights?: string;
  hidden_opportunities?: string;
  word_count?: number;
  strategic_keywords?: string[];
  sentiment_score?: number;
  response_quality_score?: number;
  insight_depth?: number;
  created_at: string;
}

export interface ConversationInsight {
  id: string;
  conversation_id: string;
  insight_type: 'opportunity' | 'risk' | 'strategy' | 'market' | 'competitive';
  insight_category: string;
  title: string;
  description: string;
  strategic_value?: string;
  action_items?: string[];
  confidence_score: number;
  impact_score: number;
  urgency_score: number;
  derived_from_message_id?: string;
  reasoning?: string;
  created_at: string;
}

export class ConversationService {
  private getStorageKey(key: string): string {
    return `nextstage_conversation_${key}`;
  }

  private generateId(): string {
    return crypto.randomUUID();
  }

  // Create new conversation
  async createConversation(data: Partial<ConversationData>): Promise<ConversationData> {
    const conversation: ConversationData = {
      id: this.generateId(),
      user_name: data.user_name,
      user_email: data.user_email,
      current_agent: data.current_agent || 'orchestrator',
      current_topic: data.current_topic || 'discovery',
      sophistication_level: data.sophistication_level || 'beginner',
      status: 'active',
      completion_percentage: 0,
      engagement_score: 0,
      conversation_depth: 0,
      agent_context: data.agent_context || {},
      conversation_insights: data.conversation_insights || {},
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    // Store in localStorage
    localStorage.setItem(
      this.getStorageKey(`conversation_${conversation.id}`),
      JSON.stringify(conversation)
    );

    return conversation;
  }

  // Initialize conversation topics (stub - not needed for localStorage)
  async initializeTopics(conversationId: string): Promise<void> {
    // No-op for localStorage implementation
  }

  // Get conversation by ID
  async getConversation(id: string): Promise<ConversationData | null> {
    try {
      const stored = localStorage.getItem(this.getStorageKey(`conversation_${id}`));
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error('Error fetching conversation:', error);
      return null;
    }
  }

  // Get conversation messages
  async getConversationMessages(conversationId: string): Promise<ConversationMessage[]> {
    try {
      const stored = localStorage.getItem(this.getStorageKey(`messages_${conversationId}`));
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error fetching messages:', error);
      return [];
    }
  }

  // Add message
  async addMessage(
    conversationId: string,
    role: 'user' | 'assistant' | 'system',
    content: string,
    options: {
      messageType?: 'text' | 'question' | 'answer' | 'insight' | 'summary';
      agentName?: string;
      agentReasoning?: string;
      toolCalls?: any;
      currentTopic?: string;
    } = {}
  ): Promise<ConversationMessage> {
    
    const message: ConversationMessage = {
      id: this.generateId(),
      conversation_id: conversationId,
      role,
      content,
      message_type: options.messageType || 'text',
      agent_name: options.agentName,
      agent_reasoning: options.agentReasoning,
      tool_calls: options.toolCalls,
      word_count: content.split(' ').length,
      strategic_keywords: this.extractStrategicKeywords(content),
      sentiment_score: this.analyzeSentiment(content),
      insight_depth: this.calculateInsightDepth(content),
      created_at: new Date().toISOString()
    };

    // Get existing messages
    const existingMessages = await this.getConversationMessages(conversationId);
    existingMessages.push(message);

    // Store updated messages
    localStorage.setItem(
      this.getStorageKey(`messages_${conversationId}`),
      JSON.stringify(existingMessages)
    );

    return message;
  }

  // Update conversation
  async updateConversation(id: string, updates: Partial<ConversationData>): Promise<ConversationData> {
    const existing = await this.getConversation(id);
    if (!existing) {
      throw new Error('Conversation not found');
    }

    const updated: ConversationData = {
      ...existing,
      ...updates,
      updated_at: new Date().toISOString()
    };

    localStorage.setItem(
      this.getStorageKey(`conversation_${id}`),
      JSON.stringify(updated)
    );

    return updated;
  }

  // Update topic status (stub)
  async updateTopicStatus(conversationId: string, topicName: string, status: string): Promise<void> {
    // No-op for localStorage implementation
  }

  // Get conversation insights (stub)
  async getConversationInsights(conversationId: string): Promise<ConversationInsight[]> {
    return [];
  }

  // Complete conversation
  async completeConversation(conversationId: string, strategicBrief: any): Promise<void> {
    await this.updateConversation(conversationId, {
      status: 'completed',
      completion_percentage: 100,
      strategic_opportunities: strategicBrief
    });
  }

  // Get conversation analytics (stub)
  async getConversationAnalytics(conversationId: string): Promise<any> {
    return {
      message_count: 0,
      avg_response_time: 0,
      completion_rate: 0,
      engagement_score: 0
    };
  }

  // Private utility methods
  private extractStrategicKeywords(content: string): string[] {
    const keywords = content.toLowerCase().match(/\b\w{4,}\b/g) || [];
    return keywords.slice(0, 5);
  }

  private analyzeSentiment(content: string): number {
    const positive = ['good', 'great', 'excellent', 'amazing', 'love', 'excited', 'happy'];
    const negative = ['bad', 'terrible', 'awful', 'hate', 'worried', 'concerned', 'problem'];
    
    let score = 0;
    const words = content.toLowerCase().split(/\s+/);
    
    words.forEach(word => {
      if (positive.includes(word)) score += 1;
      if (negative.includes(word)) score -= 1;
    });
    
    return Math.max(-1, Math.min(1, score / words.length));
  }

  private calculateInsightDepth(content: string): number {
    // Simple heuristic based on length and complexity
    const wordCount = content.split(' ').length;
    const hasQuestions = content.includes('?');
    const hasDetails = content.includes('because') || content.includes('specifically');
    
    let depth = Math.min(wordCount / 20, 1);
    if (hasQuestions) depth += 0.2;
    if (hasDetails) depth += 0.3;
    
    return Math.min(depth, 1);
  }
} 