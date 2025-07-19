# Archived API Routes

This directory contains API routes that are no longer actively used in the current system.

## Structure

### `test-routes/`
Development and testing API endpoints:
- `test-agent-system/` - Agent system testing (disabled)
- `test-enhanced-intelligence/` - Intelligence testing (disabled)  
- `test-cost-optimization/` - Cost optimization testing (disabled)
- `test-connections/` - Connection testing (Supabase disabled)
- `test-database/` - Database testing (Supabase disabled)

### `legacy-routes/`
Previous API implementations that have been replaced:
- `strategic-discovery-agent/` - Uses archived agent system
- `setup-strategy-chat/` - Supabase-dependent setup
- `strategy-chat/` - Legacy chat API
- `conversation-history/` - Legacy conversation storage
- `conversation-agent/` - Legacy conversation logic
- `generate-brief/` - Simple brief generation
- `send-brief-email/` - Email functionality
- `assess-conversation/` - Conversation assessment
- `claude-conversation/` - Claude conversation handling
- `enhanced-strategic-discovery/` - Enhanced discovery logic

## Current Active API Routes

The active API endpoints are:
- `/api/enhanced-chat` - **Main chat engine**
- `/api/enhanced-brief-generation` - **Brief generation**
- `/api/analyze-opportunity` - **Opportunity analysis with web search**
- `/api/nextstage-concierge` - **Concierge service**
- `/api/analytics` - **Analytics tracking**

## Why Archived

These routes were archived because:
1. They depend on systems we've disabled (Supabase, complex agents)
2. They have been replaced by simpler, more focused implementations
3. They were test/development endpoints not used in production
4. They use legacy conversation systems

## Reactivation

If any route needs to be reactivated:
1. Move the folder back to `src/app/api/`
2. Check dependencies (especially Supabase and archived lib files)
3. Update any imports that reference archived systems
4. Test thoroughly for compatibility with current system 