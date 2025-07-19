import { NextRequest, NextResponse } from 'next/server'
import { UserResponse } from '@/lib/types'

// Simple brief generation using our NextStage Concierge
async function generateSimpleBrief(responses: UserResponse[], userName: string) {
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'anthropic-version': '2023-06-01',
        'x-api-key': process.env.ANTHROPIC_API_KEY || ''
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 2000,
        messages: [
          {
            role: 'user',
            content: `You are NextStage's senior strategist creating a strategic brief for ${userName}.

DISCOVERY SESSION:
${responses.map(r => `Q: ${r.question}\nA: ${r.answer}`).join('\n\n')}

Generate a strategic brief with this exact JSON structure:
{
  "personalMessage": "Personal message to ${userName} about their opportunity",
  "sections": [
    {
      "title": "Executive Summary", 
      "content": "Strategic overview of their venture",
      "reasoning": "Why this matters strategically"
    },
    {
      "title": "Market Opportunity",
      "content": "Analysis of their target market and positioning", 
      "reasoning": "Strategic insight about market approach"
    },
    {
      "title": "Strategic Recommendations",
      "content": "Specific actionable recommendations",
      "reasoning": "Why these recommendations will drive success"
    },
    {
      "title": "Next Steps",
      "content": "Immediate priorities and action items",
      "reasoning": "How to maintain momentum and reduce risk"
    }
  ]
}

Maintain NextStage's sophisticated consulting tone throughout. Show genuine excitement about their vision while providing strategic depth.`
          }
        ]
      })
    });

    if (!response.ok) {
      throw new Error(`Claude API error: ${response.status}`);
    }

    const data = await response.json();
    const briefText = data.content[0]?.text || '';
    
    // Parse the JSON response
    return JSON.parse(briefText);
  } catch (error) {
    console.error('Error generating brief with Claude:', error);
    
    // Fallback to a simple brief
    const name = responses.find(r => r.questionIndex === 0)?.answer || userName || "Friend";
    const building = responses.find(r => r.questionIndex === 1)?.answer || "your project";
    
    return {
      personalMessage: `Hi ${name}, I've analyzed your responses and I'm excited about what you're building. Here's my strategic assessment of your opportunity.`,
      sections: [
        {
          title: "Executive Summary",
          content: `${name} is developing ${building} with clear market focus and strategic vision. This represents a strong foundation for sustainable growth.`,
          reasoning: "Clear vision and target focus are the foundation of successful ventures."
        },
        {
          title: "Strategic Recommendations", 
          content: "Focus on rapid customer validation, build minimum viable solution, and establish clear success metrics.",
          reasoning: "Speed to market and customer feedback are critical success factors in today's environment."
        },
        {
          title: "Next Steps",
          content: "1) Validate assumptions through customer interviews, 2) Build MVP for testing, 3) Establish metrics tracking, 4) Plan funding strategy.",
          reasoning: "These steps minimize risk while maximizing learning velocity."
        }
      ]
    };
  }
}

export async function POST(request: NextRequest) {
  try {
    const { responses, submissionId } = await request.json() as {
      responses: UserResponse[]
      submissionId: string
    }

    if (!responses || !submissionId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    console.log('Generating strategic brief for:', submissionId);
    
    // Get user name from responses
    const userName = responses.find(r => r.questionIndex === 0)?.answer || '';
    
    // Generate brief using our simple approach
    const brief = await generateSimpleBrief(responses, userName);

    console.log('Generated brief successfully for:', submissionId)

    return NextResponse.json({ brief })

  } catch (error) {
    console.error('Error in generate-brief API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 