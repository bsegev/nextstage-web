import { ChatSession } from '../types';
import { Button } from '../ui';

interface CompletionSummaryProps {
  session: ChatSession;
  insights?: string;
  analytics?: {
    totalMessages: number;
    sessionDuration: number;
    averageResponseTime: number;
  };
}

export function CompletionSummary({ session, insights, analytics }: CompletionSummaryProps) {
  const handleDownload = () => {
    const content = session.responses
      .map(r => `${r.question}\n${r.answer}\n`)
      .join('\n');
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `strategy-session-${session.userName || 'anonymous'}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleStartOver = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-accent mb-2">
            Thank you{session.userName ? `, ${session.userName}` : ''}!
          </h2>
                      <p className="text-lg text-bone/70">
              Your strategy session is complete. We&apos;ve captured all your insights and will be in touch soon.
            </p>
        </div>

        {insights && (
          <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-accent mb-4">Strategic Insights</h3>
            <div className="text-left">
              <p className="text-bone leading-relaxed whitespace-pre-wrap">
                {insights}
              </p>
            </div>
          </div>
        )}

        <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-semibold text-accent mb-4">Session Summary</h3>
          <div className="space-y-4 text-left">
            {session.responses.map((response, index) => (
              <div key={index} className="border-b border-accent/20 pb-3 last:border-b-0">
                <p className="text-sm text-bone/70 mb-1">
                  {response.question}
                </p>
                <p className="text-bone">
                  {response.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {analytics && (
          <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-accent mb-4">Session Analytics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="border-r border-accent/20 last:border-r-0 pr-4 last:pr-0">
                <div className="text-2xl font-bold text-accent">
                  {analytics.totalMessages}
                </div>
                <div className="text-sm text-bone/70">Total Messages</div>
              </div>
              <div className="border-r border-accent/20 last:border-r-0 pr-4 last:pr-0">
                <div className="text-2xl font-bold text-accent">
                  {Math.round(analytics.sessionDuration / 60000)}m
                </div>
                <div className="text-sm text-bone/70">Session Duration</div>
              </div>
              <div className="border-r border-accent/20 last:border-r-0 pr-4 last:pr-0">
                <div className="text-2xl font-bold text-accent">
                  {Math.round(analytics.averageResponseTime / 1000)}s
                </div>
                <div className="text-sm text-bone/70">Avg. Response Time</div>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-4 justify-center">
          <Button onClick={handleDownload} variant="outline">
            Download Summary
          </Button>
          <Button onClick={handleStartOver}>
            Start New Session
          </Button>
        </div>

        <div className="mt-6 text-sm text-bone/50">
          <p>
            Session completed on{' '}
            {session.completedAt?.toLocaleDateString()} at{' '}
            {session.completedAt?.toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>
  );
} 