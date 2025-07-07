import { NextRequest, NextResponse } from 'next/server'
import { StrategicReasoningChain } from '@/lib/strategic-reasoning-chain'
import { UserResponse, ExtractedInfo } from '@/lib/simple-conversation-agent'

export async function POST(request: NextRequest) {
  try {
    const { responses, extractedInfo, submissionId } = await request.json() as {
      responses: UserResponse[];
      extractedInfo: ExtractedInfo;
      submissionId: string;
    }

    if (!responses || !extractedInfo) {
      return NextResponse.json(
        { error: 'Missing required data' },
        { status: 400 }
      )
    }

    console.log('Enhanced brief generation request:', submissionId);

    // Create strategic reasoning chain
    const reasoningChain = new StrategicReasoningChain();

    // Generate enhanced brief with reasoning steps
    const briefResult = await reasoningChain.generateEnhancedBrief(
      responses,
      extractedInfo,
      // Optional: Add step update callback for real-time updates
      (steps) => {
        console.log('Reasoning steps updated:', steps.map(s => `${s.step}: ${s.status}`));
      }
    );

    return NextResponse.json({
      brief: briefResult.brief,
      researchData: briefResult.researchData,
      researchSummary: briefResult.researchSummary,
      reasoningSteps: briefResult.reasoningSteps,
      submissionId
    });

  } catch (error) {
    console.error('Error in enhanced brief generation:', error);
    
    // Generate fallback brief
    let fallbackBrief;
    let submissionId = 'fallback';
    
    try {
      const requestData = await request.json();
      fallbackBrief = generateFallbackBrief(requestData.extractedInfo || {});
      submissionId = requestData.submissionId || 'fallback';
    } catch (parseError) {
      console.error('Error parsing request for fallback:', parseError);
      fallbackBrief = generateFallbackBrief({});
    }
    
    return NextResponse.json({
      brief: fallbackBrief.brief,
      researchData: [],
      researchSummary: 'Fallback strategic analysis',
      reasoningSteps: [
        { step: '1', title: 'Business Analysis', status: 'failed' },
        { step: '2', title: 'Market Research', status: 'failed' },
        { step: '3', title: 'Strategic Synthesis', status: 'failed' },
        { step: '4', title: 'Recommendations', status: 'failed' },
        { step: '5', title: 'Resource Planning', status: 'failed' }
      ],
      submissionId
    });
  }
}

function generateFallbackBrief(extractedInfo: ExtractedInfo) {
  const name = extractedInfo.name || 'there';
  const project = extractedInfo.project || 'your project';
  const audience = extractedInfo.audience || 'your target market';
  const problem = extractedInfo.problem || 'market challenges';
  const budget = extractedInfo.budget || 'budget considerations';
  const timeline = extractedInfo.timeline || 'timeline';
  
  return {
    brief: {
      personalMessage: `Hi ${name}! I'm genuinely excited about ${project}. Your clear vision for serving ${audience} and solving ${problem} demonstrates strategic thinking that separates successful ventures from the rest. You have the foundation for a compelling competitive advantage.`,
      sections: [
        {
          title: "Executive Summary",
          content: `${name} is building ${project} to address ${problem} for ${audience}. Your focused approach to market entry with clear value proposition and well-defined customer segment creates a strong strategic foundation. Your understanding of the customer pain point, combined with ${budget} and ${timeline}, positions you to validate systematically and build competitive advantages. This strategic positioning works because problem-solution clarity and market focus are key differentiators that reduce execution risk and improve customer acquisition potential.`
        },
        {
          title: "Market Positioning",
          content: `Your strategic position with ${project} targeting ${audience} is strengthened by your deep insight into ${problem}. Your customer understanding and market empathy provide meaningful advantages over competitors who may be building solutions without direct customer insight. Focus on leveraging this customer knowledge for strategic differentiation, as customer-specific knowledge and market empathy are critical competitive advantages that can accelerate market entry, customer loyalty, and sustainable positioning.`
        },
        {
          title: "Strategic Recommendations",
          content: `1. **Customer Validation**: Validate your solution with 10-15 potential customers from ${audience} to confirm product-market fit assumptions. 2. **Focused MVP**: Build a targeted solution that specifically addresses ${problem} without unnecessary complexity or scope creep. 3. **Competitive Intelligence**: Research existing solutions, pricing models, and positioning strategies to establish clear differentiation. 4. **Metrics Foundation**: Establish key performance indicators, feedback systems, and operational processes that will support informed scaling decisions.\n\nThis customer-centric approach is strategically sound because it minimizes development risk while maximizing market validation, competitive positioning, and sustainable growth potential.`
        },
        {
          title: "Next Steps",
          content: `**Immediate (Next 30 days)**: Conduct structured customer interviews with ${audience} to validate ${problem} and solution approach. **Short-term (Next 90 days)**: Build and test your MVP with early customers, gathering usage data and iterating based on feedback. **Medium-term (Next 6 months)**: Refine product-market fit, establish pricing strategy, and prepare operational systems for sustainable growth.\n\nThis timeline is strategically optimal because it prioritizes market validation and customer feedback, ensuring you build something that creates genuine value, sustainable competitive positioning, and long-term strategic advantage.`
        }
      ]
    },
    researchData: [],
    researchSummary: `Strategic analysis based on conversation insights with ${name} about ${project} - focusing on competitive positioning and market entry strategy`
  };
} 