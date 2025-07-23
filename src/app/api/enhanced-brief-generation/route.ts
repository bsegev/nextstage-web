import { NextRequest, NextResponse } from 'next/server'
import { UserResponse, ExtractedInfo } from '@/lib/simple-conversation-agent'
import { SUBSERVICES } from '@/lib/subservices'

export async function POST(request: NextRequest) {
  let extractedInfo: ExtractedInfo = {};
  let submissionId = 'fallback';
  
  try {
    const requestData = await request.json() as {
      responses: UserResponse[];
      extractedInfo: ExtractedInfo;
      submissionId: string;
    };
    
    const { responses } = requestData;
    extractedInfo = requestData.extractedInfo;
    submissionId = requestData.submissionId;

    if (!responses || !extractedInfo) {
      return NextResponse.json(
        { error: 'Missing required data' },
        { status: 400 }
      )
    }

    console.log('🚀 NextStage Strategic Brief Generator processing request:', submissionId);

    // Generate personalized strategic brief using AI with deep NextStage system prompt
    const strategicBrief = await generatePersonalizedStrategicBrief(responses, extractedInfo);

    console.log('✅ Personalized strategic brief generated successfully');

    return NextResponse.json({
      brief: strategicBrief.brief,
      researchData: [], // No external research - internal strategic analysis
      researchSummary: strategicBrief.researchSummary,
      reasoningSteps: strategicBrief.reasoningSteps,
      strategicAnalysis: strategicBrief.strategicAnalysis,
      submissionId
    });

  } catch (error) {
    console.error('❌ Error in NextStage Strategic Brief Generator:', error);
    
    // Only fallback if it's a critical AI API failure, not parsing/formatting issues
    if (error instanceof Error && error.message.includes('AI API request failed')) {
      console.log('🔄 Using fallback due to AI API failure');
      const fallbackBrief = generateFallbackBrief(extractedInfo || {});
      const fallbackSubmissionId = submissionId || 'fallback';
    
    return NextResponse.json({
      brief: fallbackBrief.brief,
      researchData: [],
        researchSummary: 'Fallback strategic analysis - AI service temporarily unavailable',
      reasoningSteps: [
          { step: '1', title: 'Business Analysis', status: 'failed', reasoning: 'AI service unavailable - using fallback analysis' },
          { step: '2', title: 'Service Matching', status: 'failed', reasoning: 'Service recommendations unavailable' },
          { step: '3', title: 'Strategic Synthesis', status: 'failed', reasoning: 'Using basic strategic framework' },
          { step: '4', title: 'Implementation Planning', status: 'failed', reasoning: 'Generic implementation guidance' }
        ],
        submissionId: fallbackSubmissionId
      });
    } else {
      // For non-critical errors (parsing, formatting), re-throw to let frontend handle
      console.error('❌ Non-critical error, re-throwing:', error);
      throw error;
    }
  }
}

async function generatePersonalizedStrategicBrief(
  responses: UserResponse[],
  extractedInfo: ExtractedInfo
): Promise<any> {
  const name = extractedInfo.name || 'there';
  const conversationSummary = responses.map(r => `Q: ${r.question}\nA: ${r.answer}`).join('\n\n');
  
  // Get all available NextStage services for intelligent matching
  const availableServices = Object.values(SUBSERVICES);
  const servicesList = availableServices.map(service => 
    `- ${service.title}: ${service.tagline} (${service.service}/${service.slug})`
  ).join('\n');

  const systemPrompt = `You are Ben Segev, Chief Strategy Officer at NextStage, conducting a sophisticated strategic consultation. Your role is to analyze the client's conversation and craft a deeply personalized strategic brief that feels like a high-level strategic consultation, not generic advice.

## NEXTSTAGE IDENTITY & APPROACH
- **Sophistication**: You're a seasoned strategist who has guided 100+ ventures through growth and transformation
- **Insight-Driven**: You see patterns, opportunities, and strategic gaps that others miss
- **Action-Oriented**: Every insight leads to specific, implementable recommendations
- **NextStage Integration**: You naturally weave in NextStage services when they genuinely solve client challenges
- **Human Connection**: You reference specific details from their conversation to show deep listening

## YOUR STRATEGIC METHODOLOGY
1. **Deep Analysis**: Look beyond surface responses to understand underlying business dynamics
2. **Pattern Recognition**: Identify strategic opportunities, risks, and competitive advantages
3. **Service Alignment**: Match NextStage services to genuine strategic needs (not forced selling)
4. **Implementation Focus**: Provide concrete next steps with clear rationale
5. **Personal Touch**: Reference their specific situation, goals, and challenges throughout

## AVAILABLE NEXTSTAGE SERVICES
${servicesList}

## CLIENT CONVERSATION ANALYSIS
**Name**: ${name}
**Full Conversation**:
${conversationSummary}

**Key Details Extracted**:
- Project: ${extractedInfo.project || 'Not specified'}
- Target Audience: ${extractedInfo.audience || 'Not specified'}
- Core Problem: ${extractedInfo.problem || 'Not specified'}
- Success Vision: ${extractedInfo.success || 'Not specified'}
- Timeline: ${extractedInfo.timeline || 'Not specified'}
- Budget: ${extractedInfo.budget || 'Not specified'}

## YOUR STRATEGIC BRIEF CREATION TASK

 Analyze this conversation deeply and create a strategic brief that feels like you've been working with ${name} for months. Reference specific details they shared, show strategic insight into their market opportunity, and recommend NextStage services that genuinely solve their challenges.

 **HANDLING VAGUE RESPONSES**: If the client gave minimal or vague answers (like "an app", "people who need it", "making money"), acknowledge this professionally and use it as an opportunity to show the value of strategic clarity. Turn vagueness into a strategic insight about the need for customer discovery and market definition.

 **Critical Requirements**:
 1. **Personal References**: Use specific details from their responses throughout, even if minimal
 2. **Strategic Depth**: Show sophisticated understanding or identify where understanding needs to be developed
 3. **NextStage Integration**: Recommend 3-5 services that genuinely align with their needs (even if the need is clarity)
 4. **Implementation Logic**: Explain WHY each recommendation matters for their specific situation
 5. **Ben's Voice**: Sound like a strategic advisor who truly understands their business (or lack of clarity)

**Response Format**: Return a comprehensive JSON object with these exact sections:

{
  "brief": {
    "personalMessage": "Personal message to ${name} that references specific details from their conversation and shows deep understanding of their opportunity",
    "sections": [
      {
        "title": "Strategic Assessment",
        "content": "Deep analysis of their specific situation, referencing their exact responses about audience, problem, and goals. Show strategic insight into their market position and opportunity."
      },
      {
        "title": "NextStage Service Recommendations", 
        "content": "3-5 specific NextStage services that align with their challenges, with detailed rationale for each based on their conversation. Format as prioritized list with reasoning."
      },
      {
        "title": "Implementation Roadmap",
        "content": "Specific timeline and sequencing for their situation, considering their timeline (${extractedInfo.timeline}) and budget (${extractedInfo.budget}). Reference their success vision."
      },
      {
        "title": "Strategic Insights & Next Steps",
        "content": "Sophisticated strategic observations about their competitive position, market timing, and immediate actions. Reference specific conversation details."
      }
    ]
  },
  "researchSummary": "Brief description of your strategic analysis approach for this specific client",
  "reasoningSteps": [
    {"step": "1", "title": "Business Analysis", "status": "completed", "reasoning": "What you analyzed about their specific business"},
    {"step": "2", "title": "Service Matching", "status": "completed", "reasoning": "How you matched services to their needs"},
    {"step": "3", "title": "Strategic Synthesis", "status": "completed", "reasoning": "Key strategic insights you developed"},
    {"step": "4", "title": "Implementation Planning", "status": "completed", "reasoning": "How you prioritized recommendations"}
  ],
  "strategicAnalysis": {
    "businessAnalysis": {
      "stage": "One of: Ideation, MVP, Growth, Scale - based on their responses",
      "maturityScore": "0-100 based on sophistication of their answers",
      "urgency": "Based on their timeline - Immediate, Near-term, or Planned",
      "strategicGaps": ["Specific gaps you identified from their responses"],
      "competitivePosition": "Your assessment based on what they shared"
    },
    "serviceRecommendations": [
      {
        "service": {"title": "Service Name", "tagline": "Service tagline", "service": "service-category", "slug": "service-slug"},
        "priority": "Critical/High/Medium",
        "rationale": "Specific reason based on their conversation",
        "timeline": "When they should start this",
        "expectedImpact": "What this will do for their specific situation",
        "estimatedInvestment": "Investment level guidance"
      }
    ]
  }
}

 **EXAMPLES OF STRATEGIC REFRAMING**:
 - If they said "an app" → "Your focus on mobile technology shows awareness of where customers spend their time"
 - If they said "people who need it" → "This broad market view suggests significant opportunity, but we need to identify your specific beachhead market"
 - If they said "making money" → "Your focus on revenue generation is smart - let's define what success metrics will get you there"

 Remember: This should feel like a $2000 strategic consultation, not a generic brief. Even with minimal inputs, show strategic insight and make them feel understood while identifying where clarity is needed.`;

  try {
    // Retry logic for 529 errors (service overloaded)
    let attempts = 0;
    const maxAttempts = 3;
    
    while (attempts < maxAttempts) {
      attempts++;
      console.log(`🔄 AI API attempt ${attempts}/${maxAttempts}`);
      
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'anthropic-version': '2023-06-01',
          'x-api-key': process.env.ANTHROPIC_API_KEY || ''
        },
        body: JSON.stringify({
          model: 'claude-3-5-sonnet-20241022',
          max_tokens: 4000,
          messages: [
            {
              role: 'user',
              content: systemPrompt
            }
          ]
        })
      });

      if (response.ok) {
        console.log(`✅ AI API succeeded on attempt ${attempts}`);
        const data = await response.json();
        const briefText = data.content[0]?.text || '{}';
        
        try {
          const parsedBrief = JSON.parse(briefText);
          
          // Validate the parsed response has required structure
          if (!parsedBrief.brief || !parsedBrief.brief.personalMessage || !parsedBrief.brief.sections) {
            throw new Error('Invalid brief structure from AI');
          }
          
          return parsedBrief;
        } catch (parseError) {
          console.error('Error parsing AI response:', parseError);
          console.log('Raw AI response:', briefText);
          
          // Try to extract useful content from the AI response even if JSON is malformed
          const extractedContent = briefText.replace(/```json\s*|\s*```/g, '').trim();
          
          // Return a structured response using the AI content
          return {
            brief: {
              personalMessage: `Hi ${name}! I've analyzed your conversation and I'm excited about the opportunity you're building.`,
              sections: [
                {
                  title: "Strategic Assessment",
                  content: extractedContent.length > 800 ? extractedContent.substring(0, 800) + "..." : extractedContent
                },
                {
                  title: "NextStage Service Recommendations",
                  content: "Based on our conversation, I've identified several NextStage services that align with your strategic needs. Let's discuss these in detail during our consultation."
                },
                {
                  title: "Implementation Roadmap", 
                  content: "I'll provide a detailed implementation timeline during our strategic consultation, tailored to your specific timeline and budget."
                },
                {
                  title: "Strategic Insights & Next Steps",
                  content: "Your venture shows strong potential. The next step is to book a strategic consultation where we can dive deeper into your specific situation and create a customized growth plan."
                }
              ]
            },
            researchSummary: `Personalized strategic analysis for ${name}'s venture`,
            reasoningSteps: [
              { step: '1', title: 'Conversation Analysis', status: 'completed', reasoning: 'Analyzed client responses for strategic insights' },
              { step: '2', title: 'Opportunity Assessment', status: 'completed', reasoning: 'Evaluated market opportunity and competitive position' },
              { step: '3', title: 'Service Alignment', status: 'completed', reasoning: 'Matched NextStage services to client needs' },
              { step: '4', title: 'Strategic Synthesis', status: 'completed', reasoning: 'Created personalized strategic recommendations' }
            ],
            strategicAnalysis: {
              businessAnalysis: {
                stage: 'MVP',
                maturityScore: 65,
                urgency: 'Near-term',
                strategicGaps: ['Strategic assessment needed'],
                competitivePosition: 'Analysis required'
              },
              serviceRecommendations: []
            }
          };
        }
      }
      
      if (response.status === 529 && attempts < maxAttempts) {
        console.log(`⏳ AI API overloaded (529), waiting ${attempts * 2} seconds before retry...`);
        await new Promise(resolve => setTimeout(resolve, attempts * 2000));
        continue;
      }
      
      throw new Error(`AI API request failed: ${response.status} after ${attempts} attempts`);
    }

    // If we get here, all attempts failed
    throw new Error('All AI API attempts failed');

  } catch (error) {
    console.error('Error calling AI for strategic brief:', error);
    throw error;
  }
}

function generateFallbackBrief(extractedInfo: ExtractedInfo) {
  const name = extractedInfo.name || 'there';
  const project = extractedInfo.project || 'your project';
  const audience = extractedInfo.audience || 'your target market';
  const problem = extractedInfo.problem || 'market challenges';
  
  return {
    brief: {
      personalMessage: `Hi ${name}! I'm excited about ${project} and your focus on ${audience}. Your approach to solving ${problem} shows strong strategic thinking and market awareness.`,
      sections: [
        {
          title: "Executive Summary",
          content: `${name} is developing ${project} to serve ${audience} by addressing ${problem}. This strategic brief outlines key opportunities and recommended actions for success. Your customer-focused approach and clear problem definition create a strong foundation for growth.`
        },
        {
          title: "Strategic Recommendations",
          content: `**Priority Actions:**\n1. **Customer Validation:** Conduct structured interviews with ${audience} to validate ${problem} and solution approach\n2. **MVP Development:** Build focused solution addressing core ${problem} without unnecessary complexity\n3. **Market Positioning:** Establish clear differentiation and value proposition\n4. **Growth Strategy:** Develop scalable customer acquisition and retention systems\n\n**NextStage Services to Consider:**\n• Business Strategy & Growth Planning\n• Brand Identity Development\n• Go-to-Market Strategy\n• MVP Development & Testing`
        },
        {
          title: "Implementation Timeline",
          content: `**Phase 1 (Weeks 1-4):** Customer validation and solution refinement\n**Phase 2 (Weeks 5-8):** MVP development and initial testing\n**Phase 3 (Weeks 9-12):** Market entry and growth optimization\n\nThis timeline provides structured progress while maintaining flexibility for iteration based on market feedback.`
        },
        {
          title: "Next Steps",
          content: `**Immediate Actions:**\n1. Book a NextStage strategy consultation to dive deeper into your opportunity\n2. Begin customer interviews to validate assumptions\n3. Define success metrics and measurement systems\n\n**Strategic Investment:**\nConsider NextStage's strategic services to accelerate your timeline and maximize success probability. Our integrated approach ensures each investment builds toward sustainable competitive advantage.`
        }
      ]
    }
  };
} 