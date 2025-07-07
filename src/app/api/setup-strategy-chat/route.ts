import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST() {
  try {
    console.log('Setting up strategy chat database tables...');

    // Create strategy_chat_sessions table
    const sessionsTable = `
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
    `;

    // Create strategy_chat_messages table
    const messagesTable = `
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
    `;

    // Create strategy_chat_insights table
    const insightsTable = `
      CREATE TABLE IF NOT EXISTS strategy_chat_insights (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        session_id UUID REFERENCES strategy_chat_sessions(id) ON DELETE CASCADE,
        insights TEXT NOT NULL,
        generated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        model_used VARCHAR(100) DEFAULT 'claude-3-5-sonnet',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `;

    // Create indexes
    const indexes = `
      CREATE INDEX IF NOT EXISTS idx_strategy_chat_sessions_user_name ON strategy_chat_sessions(user_name);
      CREATE INDEX IF NOT EXISTS idx_strategy_chat_sessions_status ON strategy_chat_sessions(status);
      CREATE INDEX IF NOT EXISTS idx_strategy_chat_sessions_created_at ON strategy_chat_sessions(created_at);
      
      CREATE INDEX IF NOT EXISTS idx_strategy_chat_messages_session_id ON strategy_chat_messages(session_id);
      CREATE INDEX IF NOT EXISTS idx_strategy_chat_messages_timestamp ON strategy_chat_messages(timestamp);
      CREATE INDEX IF NOT EXISTS idx_strategy_chat_messages_type ON strategy_chat_messages(type);
      
      CREATE INDEX IF NOT EXISTS idx_strategy_chat_insights_session_id ON strategy_chat_insights(session_id);
      CREATE INDEX IF NOT EXISTS idx_strategy_chat_insights_created_at ON strategy_chat_insights(created_at);
    `;

    // RLS policies
    const policies = `
      ALTER TABLE strategy_chat_sessions ENABLE ROW LEVEL SECURITY;
      ALTER TABLE strategy_chat_messages ENABLE ROW LEVEL SECURITY;
      ALTER TABLE strategy_chat_insights ENABLE ROW LEVEL SECURITY;
      
      CREATE POLICY IF NOT EXISTS "Allow public access to strategy chat sessions" ON strategy_chat_sessions
        FOR ALL USING (true);
      
      CREATE POLICY IF NOT EXISTS "Allow public access to strategy chat messages" ON strategy_chat_messages
        FOR ALL USING (true);
      
      CREATE POLICY IF NOT EXISTS "Allow public access to strategy chat insights" ON strategy_chat_insights
        FOR ALL USING (true);
    `;

    // Execute all SQL commands
    await supabaseAdmin.rpc('exec_sql', { sql: sessionsTable });
    await supabaseAdmin.rpc('exec_sql', { sql: messagesTable });
    await supabaseAdmin.rpc('exec_sql', { sql: insightsTable });
    await supabaseAdmin.rpc('exec_sql', { sql: indexes });
    await supabaseAdmin.rpc('exec_sql', { sql: policies });

    console.log('Strategy chat database setup completed successfully!');

    return NextResponse.json({
      success: true,
      message: 'Strategy chat database tables created successfully',
      tables: ['strategy_chat_sessions', 'strategy_chat_messages', 'strategy_chat_insights']
    });

  } catch (error) {
    console.error('Error setting up strategy chat database:', error);
    
    // Try alternative approach - direct SQL execution
    try {
      const { error: sessionsError } = await supabaseAdmin.rpc('exec_sql', { 
        sql: 'SELECT 1 FROM strategy_chat_sessions LIMIT 1' 
      });
      
      if (sessionsError) {
        // Tables don't exist, this is expected for first run
        return NextResponse.json({
          success: false,
          error: 'Database setup failed. Please run the migration manually.',
          details: error instanceof Error ? error.message : 'Unknown error',
          instructions: 'You can run the SQL commands from /src/features/strategy-chat/database/migration.sql manually in your Supabase SQL editor.'
        }, { status: 500 });
      }

      return NextResponse.json({
        success: true,
        message: 'Strategy chat tables already exist',
        note: 'Database is ready for use'
      });

    } catch (fallbackError) {
      return NextResponse.json({
        success: false,
        error: 'Database connection failed',
        details: fallbackError instanceof Error ? fallbackError.message : 'Unknown error'
      }, { status: 500 });
    }
  }
}

export async function GET() {
  try {
    // Check if tables exist
    const { error: sessionsError } = await supabaseAdmin
      .from('strategy_chat_sessions')
      .select('count')
      .limit(1);

    const { error: messagesError } = await supabaseAdmin
      .from('strategy_chat_messages')
      .select('count')
      .limit(1);

    const { error: insightsError } = await supabaseAdmin
      .from('strategy_chat_insights')
      .select('count')
      .limit(1);

    return NextResponse.json({
      tables: {
        strategy_chat_sessions: !sessionsError,
        strategy_chat_messages: !messagesError,
        strategy_chat_insights: !insightsError
      },
      ready: !sessionsError && !messagesError && !insightsError,
      message: !sessionsError && !messagesError && !insightsError 
        ? 'All strategy chat tables exist and are ready'
        : 'Some tables are missing. Run POST /api/setup-strategy-chat to create them.'
    });

  } catch (error) {
    return NextResponse.json({
      error: 'Failed to check database status',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 