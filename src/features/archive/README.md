# Archived Features

This directory contains feature implementations that are no longer actively used in the current system.

## Features Archived

### `strategy-chat/`
- Complete chat feature implementation with UI components, hooks, and utilities
- Used Supabase for persistence and had its own component library
- **Replaced by:** Main chat system in `src/components/` using `PremiumLeadCapture`

### `stage-shift-brief/`
- Alternative brief generation system with conversational flow
- Had its own conversation intelligence and UI components
- **Replaced by:** Simplified brief generation in main components

## Why Archived

These features were archived because:
1. The main application now uses a streamlined chat system in `src/components/`
2. Database persistence (Supabase) has been disabled
3. The current system uses in-memory conversation storage
4. Simpler, more focused components proved more maintainable

## Current Active System

The current chat flow is:
1. `/strategy-brief` page → `PremiumLeadCapture` component
2. Info collection → `/api/enhanced-chat` using `SimpleConversationAgent`
3. Document selection → `AnalysisTypeSelector` component
4. Generation → `EnhancedStrategyBrief` or `BusinessOpportunityAnalyzer`

## Components Preserved

Some UI components from these features were preserved in the main codebase:
- Button, Input, Textarea → Moved to `src/components/ui/strategy-ui/`
- UserResponse type → Moved to `src/lib/types.ts`
- NextStageConcierge → Moved to `src/lib/nextstage-concierge.ts`

## Reactivation

If these features need to be reactivated:
1. Move them back to `src/features/`
2. Update imports and dependencies
3. Re-enable Supabase if database persistence is needed
4. Test thoroughly for compatibility with current system 