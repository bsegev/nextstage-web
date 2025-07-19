-- Strategy Chat Tables Migration
-- Tables for storing strategy chat sessions, messages, and insights

-- Strategy Chat Sessions Table
CREATE TABLE IF NOT EXISTS strategy_chat_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_name VARCHAR(255),
  user_email VARCHAR(255),
  status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'completed', 'abandoned')),
  current_question_index INTEGER DEFAULT 0,
  responses JSONB DEFAULT '[]',
  started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Strategy Chat Messages Table
CREATE TABLE IF NOT EXISTS strategy_chat_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES strategy_chat_sessions(id) ON DELETE CASCADE,
  type VARCHAR(20) NOT NULL CHECK (type IN ('user', 'bot', 'system')),
  content TEXT NOT NULL,
  question_index INTEGER,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Strategy Chat Insights Table
CREATE TABLE IF NOT EXISTS strategy_chat_insights (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES strategy_chat_sessions(id) ON DELETE CASCADE,
  insights TEXT NOT NULL,
  generated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  model_used VARCHAR(100) DEFAULT 'claude-3-5-sonnet',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_strategy_chat_sessions_user_name ON strategy_chat_sessions(user_name);
CREATE INDEX IF NOT EXISTS idx_strategy_chat_sessions_status ON strategy_chat_sessions(status);
CREATE INDEX IF NOT EXISTS idx_strategy_chat_sessions_created_at ON strategy_chat_sessions(created_at);

CREATE INDEX IF NOT EXISTS idx_strategy_chat_messages_session_id ON strategy_chat_messages(session_id);
CREATE INDEX IF NOT EXISTS idx_strategy_chat_messages_timestamp ON strategy_chat_messages(timestamp);
CREATE INDEX IF NOT EXISTS idx_strategy_chat_messages_type ON strategy_chat_messages(type);

CREATE INDEX IF NOT EXISTS idx_strategy_chat_insights_session_id ON strategy_chat_insights(session_id);
CREATE INDEX IF NOT EXISTS idx_strategy_chat_insights_created_at ON strategy_chat_insights(created_at);

-- Row Level Security (RLS) - Optional for enhanced security
ALTER TABLE strategy_chat_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE strategy_chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE strategy_chat_insights ENABLE ROW LEVEL SECURITY;

-- Policies for RLS (adjust as needed for your auth system)
CREATE POLICY "Allow public access to strategy chat sessions" ON strategy_chat_sessions
  FOR ALL USING (true);

CREATE POLICY "Allow public access to strategy chat messages" ON strategy_chat_messages
  FOR ALL USING (true);

CREATE POLICY "Allow public access to strategy chat insights" ON strategy_chat_insights
  FOR ALL USING (true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_strategy_chat_sessions_updated_at
  BEFORE UPDATE ON strategy_chat_sessions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Comments for documentation
COMMENT ON TABLE strategy_chat_sessions IS 'Stores strategy chat session information';
COMMENT ON TABLE strategy_chat_messages IS 'Stores individual messages in strategy chat sessions';
COMMENT ON TABLE strategy_chat_insights IS 'Stores AI-generated strategic insights for completed sessions';

COMMENT ON COLUMN strategy_chat_sessions.responses IS 'JSON array of user responses to strategy questions';
COMMENT ON COLUMN strategy_chat_sessions.status IS 'Current status of the chat session';
COMMENT ON COLUMN strategy_chat_messages.type IS 'Type of message: user, bot, or system';
COMMENT ON COLUMN strategy_chat_messages.metadata IS 'Additional metadata for the message (analysis, sentiment, etc.)';
COMMENT ON COLUMN strategy_chat_insights.model_used IS 'AI model used to generate the insights'; 