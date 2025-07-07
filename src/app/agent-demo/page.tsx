export default function AgentDemoPage() {

  return (
    <div className="min-h-screen bg-obsidian text-bone p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Agent Demo</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Strategic Discovery Agent */}
          <div className="bg-bone/5 border border-bone/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-accent">Strategic Discovery Agent</h2>
            <p className="text-bone/80 mb-4">
              Advanced AI agent that conducts strategic business analysis through intelligent conversation.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Market opportunity analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Competitive landscape assessment</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Strategic recommendations</span>
              </div>
            </div>
          </div>

          {/* Conversation Intelligence */}
          <div className="bg-bone/5 border border-bone/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-accent">Conversation Intelligence</h2>
            <p className="text-bone/80 mb-4">
              Smart conversation engine that extracts key insights from natural dialogue.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Natural language processing</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Intent recognition</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Business context understanding</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Overview */}
        <div className="mt-12 bg-accent/10 border border-accent/20 rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-center">Core Capabilities</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-obsidian">🧠</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Strategic Analysis</h3>
              <p className="text-bone/70">
                Deep business intelligence powered by advanced AI reasoning
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-obsidian">💬</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Natural Conversation</h3>
              <p className="text-bone/70">
                Intuitive dialogue that feels like talking to a strategic advisor
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-obsidian">📊</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Actionable Insights</h3>
              <p className="text-bone/70">
                Concrete recommendations backed by market research
              </p>
            </div>
          </div>
        </div>

        {/* Technical Architecture */}
        <div className="mt-12 bg-bone/5 border border-bone/10 rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-center">Technical Architecture</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-obsidian font-bold">1</span>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Conversation Engine</h3>
                <p className="text-bone/70">
                  Claude AI-powered conversation management with context awareness and strategic questioning
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-obsidian font-bold">2</span>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Intelligence Layer</h3>
                <p className="text-bone/70">
                  Multi-agent system for business analysis, market research, and strategic reasoning
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-obsidian font-bold">3</span>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Brief Generation</h3>
                <p className="text-bone/70">
                  Automated strategic brief creation with market insights and actionable recommendations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Points */}
        <div className="mt-12 bg-accent/5 border border-accent/10 rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-center text-accent">Integration Capabilities</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Data Sources</h3>
              <ul className="space-y-2 text-bone/70">
                <li>• Market research databases</li>
                <li>• Industry trend analysis</li>
                <li>• Competitive intelligence</li>
                <li>• Customer behavior data</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Output Formats</h3>
              <ul className="space-y-2 text-bone/70">
                <li>• Strategic briefs (PDF/HTML)</li>
                <li>• Executive summaries</li>
                <li>• Market analysis reports</li>
                <li>• Implementation roadmaps</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Experience the Future of Strategy?</h2>
          <p className="text-bone/70 mb-8 max-w-2xl mx-auto">
            Our AI agents are ready to transform how you approach strategic planning and business development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent text-obsidian px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors">
              Try Strategy Brief
            </button>
            <button className="border border-accent text-accent px-8 py-3 rounded-lg font-medium hover:bg-accent/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 