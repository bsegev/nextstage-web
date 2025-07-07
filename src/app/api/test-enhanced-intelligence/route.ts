import { NextRequest, NextResponse } from 'next/server'
import { analyzeResponseIntelligence, generateIntelligentBrief, ConversationDirector, ConversationContext } from '@/lib/conversation-intelligence'
import { UserResponse } from '@/features/stage-shift-brief/components/ConversationalFlow'
import { isFeatureEnabled, getFeatureFlags } from '@/lib/feature-flags'

const mockResponses = [
      {
    question: "What's your first name?",
    answer: "Sarah",
        questionIndex: 0
      },
      {
        question: "What are you building?",
    answer: "We're developing a B2B SaaS platform for automated customer onboarding in fintech companies. The platform uses AI to streamline KYC processes and reduce manual work by 80%.",
        questionIndex: 1
      },
      {
    question: "Who is it for?",
    answer: "Mid-market fintech companies with 50-500 employees who are struggling with manual KYC processes and compliance overhead. Our target customers process 100-1000 new customers per month.",
        questionIndex: 2
      },
      {
    question: "What's the core problem you're solving?",
    answer: "Manual KYC processes are killing fintech companies. They're spending 40% of their operational resources on compliance, have 72-hour average customer onboarding times, and are losing 30% of potential customers due to friction. We've validated this with 50+ interviews.",
        questionIndex: 3
      },
      {
    question: "What would success look like in 6 months?",
    answer: "We want to have 10 paying customers at $5K MRR each, reduce their onboarding time to under 2 hours, and establish ourselves as the go-to solution for mid-market fintech KYC automation.",
        questionIndex: 4
      },
      {
    question: "Do you have a timeline in mind?",
    answer: "Immediate",
        questionIndex: 5
      },
      {
    question: "What budget range are you working with?",
    answer: "$50K+",
        questionIndex: 6
  },
  {
    question: "Anything else you'd like to share?",
    answer: "We already have a working MVP with 2 pilot customers. The founder has 8 years of fintech experience and we're backed by a $2M seed round. We need to scale our go-to-market strategy quickly.",
    questionIndex: 7
  }
]

export async function GET() {
  return NextResponse.json({ 
    message: 'Enhanced Intelligence Test API',
    phase1: isFeatureEnabled('ENHANCED_INTELLIGENCE'),
    phase2: isFeatureEnabled('DYNAMIC_CONVERSATION'),
    availableTests: [
      'POST /api/test-enhanced-intelligence - Run Phase 1 & 2 tests'
    ]
  })
}

export async function POST() {
      try {
        console.log('Testing enhanced intelligence analysis...')
        
    // Phase 1: Enhanced Intelligence Analysis
    const enhancedProfile = await analyzeResponseIntelligence(mockResponses)
        
        console.log('Enhanced profile analysis complete')
    console.log('Sophistication Level:', enhancedProfile.overallSophistication)
    console.log('Urgency Score:', enhancedProfile.urgencyScore)
    console.log('Strategic Clarity:', enhancedProfile.strategicClarity)
    console.log('Implementation Readiness:', enhancedProfile.implementationReadiness)
    
    // Phase 2: Dynamic Conversation Intelligence Testing
    let phase2Results = null
    if (isFeatureEnabled('DYNAMIC_CONVERSATION')) {
      console.log('Testing Phase 2 dynamic conversation intelligence...')
      
      // Create conversation context
      const context: ConversationContext = {
        sophisticationLevel: enhancedProfile.overallSophistication,
            strategicClarity: enhancedProfile.strategicClarity,
        informationGaps: [],
        urgencyLevel: enhancedProfile.urgencyScore,
        conversationHistory: mockResponses,
        currentInsights: enhancedProfile.insights
      }
      
      const director = new ConversationDirector(context)
      
      // Test conversation assessment
      const assessment = await director.assessConversationCompleteness()
      console.log('Conversation Assessment:', assessment)
      
      // Test follow-up question generation
      const followUp = await director.generateFollowUpQuestion(mockResponses[3]) // Core problem response
      console.log('Generated Follow-up:', followUp)
      
      // Test information gap identification
      const gaps = await director.identifyInformationGaps()
      console.log('Identified Gaps:', gaps)
      
      phase2Results = {
        assessment,
        followUpQuestion: followUp,
        informationGaps: gaps
      }
    }
    
    // Generate intelligent brief
    const intelligentBrief = await generateIntelligentBrief(enhancedProfile)
        
        console.log('Enhanced intelligence test completed successfully')
        
    return NextResponse.json({
      success: true,
      phase1: {
        enabled: isFeatureEnabled('ENHANCED_INTELLIGENCE'),
        profile: enhancedProfile,
        brief: intelligentBrief
      },
      phase2: {
        enabled: isFeatureEnabled('DYNAMIC_CONVERSATION'),
        results: phase2Results
      },
      summary: {
        sophisticationLevel: enhancedProfile.overallSophistication,
        urgencyScore: enhancedProfile.urgencyScore,
        strategicClarity: enhancedProfile.strategicClarity,
        implementationReadiness: enhancedProfile.implementationReadiness,
        totalInsights: enhancedProfile.insights.length,
        phase2Active: isFeatureEnabled('DYNAMIC_CONVERSATION')
      }
    })

  } catch (error) {
    console.error('Enhanced intelligence test failed:', error)
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    }, { status: 500 })
  }
} 