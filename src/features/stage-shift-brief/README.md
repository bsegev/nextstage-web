# Stage Shift Brief - Chat Concierge Feature

A conversational AI-powered strategy brief generator built for NextStage.

## Features
- Interactive conversational flow for gathering project requirements
- Strategy brief generation with structured output
- Mobile-responsive design
- Supabase integration for data persistence

## Structure
```
stage-shift-brief/
├── components/
│   ├── ConversationalFlow.tsx    # Main chat interface
│   ├── StrategyBrief.tsx         # Brief display component
│   ├── WelcomeScreen.tsx         # Initial welcome screen
│   └── ui/                       # Shadcn/UI components
├── hooks/
│   ├── use-mobile.tsx           # Mobile detection hook
│   └── use-toast.ts             # Toast notification hook
└── lib/
    └── utils.ts                 # Utility functions
```

## Integration Notes
- Uses Shadcn/UI components (already available in main project)
- Requires Supabase configuration
- Mobile-responsive with custom hooks
- Can be exported as standalone feature for client projects

## Usage
Import components from `@/features/stage-shift-brief/components/`

## Dependencies
- @supabase/supabase-js
- @tanstack/react-query
- react-hook-form
- zod (validation)
- lucide-react (icons)
- tailwindcss-animate 