'use client'

import Link from 'next/link';

export default function ChatTestPage() {
  return (
    <div className="min-h-screen bg-obsidian text-bone flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold text-accent mb-4">
            Chat System Comparison
          </h1>
          <p className="text-bone/70 text-lg">
            Test both chat systems to compare functionality and user experience
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* New System */}
          <div className="card-elegant p-8 border border-accent/30">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">NEW</span>
              </div>
              <h2 className="text-xl font-display font-semibold text-accent">
                Premium Lead Capture
              </h2>
            </div>
            
            <div className="space-y-3 mb-6 text-sm text-bone/70">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                <span>Single Claude API call per message</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                <span>Context-aware conversation</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                <span>Smart semantic extraction</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                <span>Premium concierge experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                <span>Robust error handling</span>
              </div>
            </div>

            <Link 
              href="/enhanced-chat"
              className="btn-primary w-full text-center block"
            >
              Test New System
            </Link>
          </div>

          {/* Old System */}
          <div className="card-elegant p-8 border border-bone/30">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-bone/20 rounded-full flex items-center justify-center">
                <span className="text-bone font-bold text-sm">OLD</span>
              </div>
              <h2 className="text-xl font-display font-semibold text-bone">
                Enhanced Conversation Agent
              </h2>
            </div>
            
            <div className="space-y-3 mb-6 text-sm text-bone/50">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-bone/30 rounded-full"></span>
                <span>Complex agent state management</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-bone/30 rounded-full"></span>
                <span>Multiple Claude API calls</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-bone/30 rounded-full"></span>
                <span>Dynamic question generation</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-bone/30 rounded-full"></span>
                <span>Strategic C-suite language</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                <span className="text-red-400">Known flow issues</span>
              </div>
            </div>

            <Link 
              href="/enhanced-chat-old"
              className="btn-secondary w-full text-center block"
            >
              Test Old System
            </Link>
          </div>
        </div>

        <div className="mt-12 p-6 bg-accent/10 border border-accent/20 rounded-lg">
          <h3 className="font-display font-semibold text-accent mb-3">
            Testing Notes
          </h3>
          <div className="space-y-2 text-sm text-bone/70">
            <p>• Both systems use the same brief generation with Anthropic web search</p>
            <p>• Both systems maintain your existing design system and styling</p>
            <p>• The new system should feel more conversational and natural</p>
            <p>• Test with various input patterns (name + project in one message, etc.)</p>
          </div>
        </div>
      </div>
    </div>
  );
} 