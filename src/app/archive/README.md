# Archived App Pages

This directory contains pages that were used during development or are legacy implementations no longer active in the current system.

## Structure

### `dev-pages/`
Development and testing pages that were used during feature development:
- `deliverable-test/` - Template comparison and testing page
- `chat-test/` - Chat system comparison page  
- `agent-demo/` - Agent system demonstration page

### `legacy-pages/`
Previous implementations of chat functionality:
- `chat/` - Legacy chat implementation
- `enhanced-chat/` - Legacy enhanced chat implementation
- **Replaced by:** `/strategy-brief` page with `PremiumLeadCapture` component

### `empty-demos/`
Empty demo folders that were created for UI component testing:
- `glowing-cards-demo/`
- `liquid-glass-test/`
- `liquid-glass-subtle/`

## Current Active Pages

The active website pages are:
- `/` - Homepage
- `/about` - About page
- `/approach` - Approach page
- `/services/*` - Service category pages
- `/case-studies/*` - Case study pages
- `/contact` - Contact page
- `/work` - Work showcase
- `/deliverables/*` - Individual deliverable pages
- `/strategy-brief` - **Main chat system**

## Reactivation

If any archived page needs to be reactivated:
1. Move the folder back to `src/app/`
2. Test for any broken imports or dependencies
3. Update navigation if needed 