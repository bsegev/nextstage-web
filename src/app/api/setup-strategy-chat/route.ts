import { NextResponse } from 'next/server'
// import { supabase } from '@/lib/supabase' // Disabled to prevent build-time errors

export async function POST() {
  try {
    // Supabase disabled - return setup not available
    console.log('Strategy chat setup requested but Supabase is disabled');
    return NextResponse.json({
      success: false,
      message: 'Database setup not available - Supabase disabled',
      fallback: 'Using local storage mode'
    });

    /* Original Supabase code - commented out
    // Check if tables exist
    const { data: tables, error: tablesError } = await supabase
      .from('information_schema.tables')
      .select('table_name')
      .eq('table_schema', 'public')

    if (tablesError) {
      console.error('Error checking tables:', tablesError)
      return NextResponse.json(
        { error: 'Database connection error' },
        { status: 500 }
      )
    }

    const tableNames = tables?.map(t => t.table_name) || []
    const hasStrategyTables = ['conversations', 'conversation_messages', 'conversation_insights'].every(
      table => tableNames.includes(table)
    )

    if (!hasStrategyTables) {
      return NextResponse.json({
        success: false,
        message: 'Database tables not found. Please run the setup script.',
        instructions: 'You can run the SQL commands from /src/features/strategy-chat/database/migration.sql manually in your Supabase SQL editor.'
      })
    }

    return NextResponse.json({
      success: true,
      message: 'Strategy chat system is ready',
      tables: tableNames.filter(name => 
        name.includes('conversation') || name.includes('strategy')
      )
    })
    */
  } catch (error) {
    console.error('Setup error:', error)
    return NextResponse.json(
      { error: 'Failed to setup strategy chat' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Supabase disabled - return mock status
    console.log('Strategy chat status requested but Supabase is disabled');
    return NextResponse.json({
      connected: false,
      message: 'Supabase disabled',
      mode: 'local_storage'
    });

    /* Original Supabase code - commented out
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

    const allTablesExist = !sessionsError && !messagesError && !insightsError;

    if (!allTablesExist) {
      return NextResponse.json({
        connected: false,
        error: 'Required tables not found',
        missing_tables: [
          ...(sessionsError ? ['strategy_chat_sessions'] : []),
          ...(messagesError ? ['strategy_chat_messages'] : []),
          ...(insightsError ? ['strategy_chat_insights'] : [])
        ]
      });
    }

    return NextResponse.json({
      connected: true,
      message: 'All strategy chat tables are available'
    });
    */
  } catch (error) {
    console.error('Connection check error:', error)
    return NextResponse.json(
      { error: 'Failed to check connection' },
      { status: 500 }
    )
  }
} 