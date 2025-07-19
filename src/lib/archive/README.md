# Archived Files

This directory contains files that were used in previous versions of the system but are no longer actively used in the current implementation.

## Files Archived

### Conversation System (Legacy)
- `conversation-intelligence.ts` - Advanced conversation analysis (replaced by SimpleConversationAgent)
- `conversation-service.ts` - localStorage-based conversation service (replaced by in-memory storage)
- `enhanced-conversation-agent.ts` - Complex conversation agent (replaced by SimpleConversationAgent)
- `strategic-discovery-agent.ts` - Supabase-dependent discovery agent (database disabled)

### Supporting Systems (Legacy)
- `feature-flags.ts` - Feature flag system (only used in archived features)
- `industry-categorizer.ts` - Industry categorization logic (not actively used)
- `nextstage-agents.ts` - Agent system framework (commented out in codebase)

## Why Archived

These files were moved to archive because:
1. They are not imported by any active components
2. They depend on systems we've disabled (like Supabase)
3. They have been replaced by simpler, more focused implementations
4. They were part of experimental features that didn't make it to production

## Current Active System

The current chat system uses:
- `simple-conversation-agent.ts` - Main conversation engine
- `strategic-reasoning-chain.ts` - Brief generation
- `web-search-tools.ts` - Market research
- `openai.ts` - AI integration

## Reactivation

If any of these files need to be reactivated:
1. Move them back to `src/lib/`
2. Update any imports that reference them
3. Test thoroughly for compatibility with current system 