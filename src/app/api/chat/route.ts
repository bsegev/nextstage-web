import { NextRequest, NextResponse } from 'next/server';

const PREMIUM_CONCIERGE_PROMPT = `You are Ben Segev's AI Strategy Concierge at NextStage - providing a premium, intelligent discovery experience for potential clients.

MISSION: Conduct a sophisticated strategic discovery conversation while extracting key business intelligence.

REQUIRED INTELLIGENCE TO EXTRACT:
- name (first name for personal connection)
- project (what they're building - be specific)
- audience (target market - demographics/psychographics)  
- problem (core challenge they're solving)
- timeline (urgency/timeline for their project)
- budget (investment range they're considering)

PREMIUM CONVERSATION PRINCIPLES:
1. **Context Mastery**: If they mention audience while describing project, don't ask about audience separately
2. **Strategic Depth**: Sound like a seasoned C-suite strategist, not a form-filling chatbot
3. **Intelligent Building**: Reference and build on everything they've shared previously
4. **Natural Discovery**: Questions should feel like genuine strategic curiosity
5. **Premium Experience**: Warm, professional, excited about their opportunity

SEMANTIC EXTRACTION EXAMPLES:
- "I'm building a project management tool for freelancers" → project: "project management tool", audience: "freelancers"
- "Need to launch before Q2" → timeline: "Q2 launch target"  
- "Working with a tight budget" → budget: "constrained/limited"
- "Small business owners keep asking me about X" → audience: "small business owners", problem: "X"

STRATEGIC QUESTION EXAMPLES:
❌ "What's your target audience?" (boring, robotic)
✅ "That sounds promising! Who specifically would benefit most from this solution?" (strategic, conversational)

❌ "What's your budget?" (transactional)  
✅ "What investment range feels right for building this properly?" (consultative)

❌ "What problem does this solve?" (generic)
✅ "What keeps your ideal customers up at night that this would solve?" (strategic depth)

RESPONSE REQUIREMENTS:
Always return valid JSON with this exact structure:

{
  "reply": "Your premium conversational response (warm, strategic, builds on previous context)",
  "extracted": {
    "name": "extracted value or null",
    "project": "extracted value or null",
    "audience": "extracted value or null", 
    "problem": "extracted value or null",
    "timeline": "extracted value or null",
    "budget": "extracted value or null"
  },
  "nextQuestion": "Strategic follow-up question or null if complete",
  "reasoning": "Brief strategic rationale for this question",
  "completionStatus": {
    "fieldsComplete": ["name", "project"], // Array of completed field names
    "fieldsNeeded": ["audience", "problem", "timeline", "budget"], // Array of still-needed fields
    "isReady": false // true when you have name + project + audience + problem (minimum viable)
  }
}

COMPLETION LOGIC:
- Mark isReady: true when you have at least: name, project, audience, problem (these 4 are minimum viable)
- Timeline and budget are nice-to-have but not required for completion
- If someone gives you all 6 fields in their first message, mark complete immediately

CONTEXT AWARENESS EXAMPLES:
User: "Hi, I'm Sarah. I'm building a scheduling app for therapists because they struggle with no-shows"
Response should extract: name: "Sarah", project: "scheduling app", audience: "therapists", problem: "no-shows"
Next question should build on this context, maybe about timeline or specific features

Remember: You're representing NextStage's premium strategic consulting. Every interaction should feel valuable and insightful.`;

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory, sessionId } = await request.json();

    if (!message?.trim()) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Build conversation context for Claude
    const messages = [
      ...conversationHistory,
      { role: 'user', content: message }
    ];

    console.log(`🔄 Processing message for session ${sessionId}: "${message.substring(0, 50)}..."`);

    // Single Claude API call with intelligent context awareness
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'anthropic-version': '2023-06-01',
        'x-api-key': process.env.ANTHROPIC_API_KEY || ''
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1000,
        system: PREMIUM_CONCIERGE_PROMPT,
        messages: messages
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Claude API error:', response.status, errorText);
      
      return NextResponse.json({
        reply: "I apologize, but I'm having a brief technical issue. Could you please repeat that?",
        extracted: {},
        nextQuestion: null,
        reasoning: "Technical fallback",
        completionStatus: {
          fieldsComplete: [],
          fieldsNeeded: ['name', 'project', 'audience', 'problem', 'timeline', 'budget'],
          isReady: false
        }
      });
    }

    const data = await response.json();
    const claudeResponse = data.content[0]?.text || '';

    try {
      // Parse Claude's structured response
      const result = JSON.parse(claudeResponse);
      
      // Validate response structure
      if (!result.reply || !result.extracted || !result.completionStatus) {
        throw new Error('Invalid response structure from Claude');
      }

      console.log(`✅ Extracted fields:`, Object.keys(result.extracted).filter(k => result.extracted[k]));
      console.log(`📊 Completion status:`, result.completionStatus.fieldsComplete.length, 'of 6 fields complete');

      return NextResponse.json(result);

    } catch (parseError) {
      console.error('❌ Failed to parse Claude response:', parseError);
      console.log('📄 Raw Claude response:', claudeResponse);
      
      // Fallback: extract what we can and continue conversation
      return NextResponse.json({
        reply: claudeResponse.substring(0, 500) + (claudeResponse.length > 500 ? '...' : ''),
        extracted: extractBasicInfo(message), // Simple fallback extraction
        nextQuestion: "Could you tell me more about your project?",
        reasoning: "Continuing conversation after parsing issue",
        completionStatus: {
          fieldsComplete: [],
          fieldsNeeded: ['name', 'project', 'audience', 'problem', 'timeline', 'budget'],
          isReady: false
        }
      });
    }

  } catch (error) {
    console.error('❌ Chat API error:', error);
    
    return NextResponse.json({
      reply: "I apologize for the technical issue. Let's continue - what would you like to share about your project?",
      extracted: {},
      nextQuestion: null,
      reasoning: "Error recovery",
      completionStatus: {
        fieldsComplete: [],
        fieldsNeeded: ['name', 'project', 'audience', 'problem', 'timeline', 'budget'],
        isReady: false
      }
    });
  }
}

// Simple fallback extraction for error cases
function extractBasicInfo(message: string) {
  const extracted: Record<string, string> = {};
  const lowerMessage = message.toLowerCase();
  
  // Basic name extraction
  const namePatterns = [
    /(?:i'm|i am|my name is|call me|this is)\s+([a-zA-Z]+)/i,
    /^([a-zA-Z]+)[\s,]/
  ];
  
  for (const pattern of namePatterns) {
    const match = message.match(pattern);
    if (match && match[1] && match[1].length > 1) {
      extracted.name = match[1].charAt(0).toUpperCase() + match[1].slice(1).toLowerCase();
      break;
    }
  }
  
  // Basic project detection
  if (lowerMessage.includes('building') || lowerMessage.includes('creating') || lowerMessage.includes('developing')) {
    const projectMatch = message.match(/(?:building|creating|developing)\s+(.+?)(?:\.|$|for|to)/i);
    if (projectMatch) {
      extracted.project = projectMatch[1].trim();
    }
  }
  
  return extracted;
}

export async function GET() {
  // Health check endpoint
  return NextResponse.json({ 
    status: 'ready',
    timestamp: new Date().toISOString()
  });
} 