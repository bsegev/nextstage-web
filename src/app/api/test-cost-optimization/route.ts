import { NextResponse } from 'next/server'
import { 
  analyzeConversationOptimized,
  ConversationDirector, 
  ConversationContext, 
  analyzeResponseIntelligence
} from '@/lib/conversation-intelligence'
import { UserResponse } from '@/features/stage-shift-brief/components/ConversationalFlow'

export async function POST(request: Request) {
  try {
    console.log('Testing cost optimization comparison...')
    
    // Test data - simulate 8 responses
    const testResponses: UserResponse[] = [
      { questionIndex: 0, question: "What's your first name?", answer: "Ben" },
      { questionIndex: 1, question: "What are you building?", answer: "An AI-powered KYC automation platform that helps financial institutions streamline their customer onboarding process by reducing manual document verification from 3 hours to 30 minutes" },
      { questionIndex: 2, question: "Who is this for?", answer: "Mid-tier financial institutions like credit unions and regional banks who are struggling with high compliance costs and slow onboarding times" },
      { questionIndex: 3, question: "What's the core problem?", answer: "Manual KYC processes are killing customer experience and costing our clients $250 per onboarding on average, plus they're losing 40% of customers who abandon the process" },
      { questionIndex: 4, question: "What would success look like?", answer: "Reduce onboarding time by 85%, cut compliance costs by 60%, and increase customer completion rates to 85%+ while maintaining 100% regulatory compliance" },
      { questionIndex: 5, question: "What's your timeline?", answer: "Need to have MVP ready in 3 months for pilot with 2 existing clients, then scale to 10 clients by end of year" },
      { questionIndex: 6, question: "What budget are you working with?", answer: "We have $250K allocated for development and initial launch, with additional runway of $500K if we hit milestones" },
      { questionIndex: 7, question: "Anything else?", answer: "We already have partnerships with 3 compliance vendors and a team of 2 developers. Our biggest challenge is the AI accuracy - we need 99.5% accuracy to meet regulatory requirements" }
    ]

    const startTime = Date.now()

    // Test 1: Original multi-call approach
    console.log('Testing original multi-call approach...')
    const originalStart = Date.now()
    
    const profile = await analyzeResponseIntelligence(testResponses)
    
    const baseQuestions = [
      "What's your first name?",
      "What are you building?", 
      "Who is this for?",
      "What's the core problem you're solving?",
      "What would success look like in 6 months?",
      "What's your ideal timeline?",
      "What budget range are you working with?",
      "Anything else you'd like to share?"
    ]

    const context: ConversationContext = {
      sophisticationLevel: profile.overallSophistication,
      strategicClarity: profile.strategicClarity,
      informationGaps: [],
      urgencyLevel: profile.urgencyScore,
      conversationHistory: testResponses,
      currentInsights: profile.insights,
      currentQuestionIndex: 7,
      upcomingQuestions: []
    }

    const director = new ConversationDirector(context)
    const assessment = await director.assessConversationCompleteness()
    const informationGaps = await director.identifyInformationGaps()
    
    let followUpQuestion = null
    if (assessment.shouldContinue && assessment.recommendedQuestions.length > 0) {
      followUpQuestion = await director.generateFollowUpQuestion(testResponses[testResponses.length - 1])
    }

    const originalTime = Date.now() - originalStart
    const originalResult = {
      assessment,
      followUpQuestion,
      informationGaps,
      conversationInsights: {
        sophisticationLevel: profile.overallSophistication,
        urgencyScore: profile.urgencyScore,
        strategicClarity: profile.strategicClarity,
        implementationReadiness: profile.implementationReadiness
      }
    }

    // Test 2: Optimized single-call approach
    console.log('Testing optimized single-call approach...')
    const optimizedStart = Date.now()
    
    const optimizedResult = await analyzeConversationOptimized(testResponses, 7)
    
    const optimizedTime = Date.now() - optimizedStart
    const totalTime = Date.now() - startTime

    // Calculate the improvement
    const timeImprovement = ((originalTime - optimizedTime) / originalTime * 100).toFixed(1)
    const apiCallReduction = "~90%" // From 11 calls to 1 call

    console.log(`Original approach: ${originalTime}ms (11 API calls)`)
    console.log(`Optimized approach: ${optimizedTime}ms (1 API call)`)
    console.log(`Time improvement: ${timeImprovement}%`)
    console.log(`API call reduction: ${apiCallReduction}`)
    console.log(`Total test time: ${totalTime}ms`)

    return NextResponse.json({
      success: true,
      testResults: {
        originalApproach: {
          timeMs: originalTime,
          apiCalls: "11 (8 individual + 3 director calls)",
          estimatedCost: "$0.04-0.11",
          result: originalResult
        },
        optimizedApproach: {
          timeMs: optimizedTime,
          apiCalls: "1 (consolidated)",
          estimatedCost: "$0.005-0.01",
          result: {
            assessment: optimizedResult.assessment,
            followUpQuestion: optimizedResult.followUpQuestion,
            informationGaps: optimizedResult.informationGaps,
            conversationInsights: optimizedResult.conversationInsights
          }
        },
        improvements: {
          timeReduction: `${timeImprovement}%`,
          apiCallReduction: "~90%",
          costReduction: "~85-90%",
          totalTestTime: `${totalTime}ms`
        }
      }
    })

  } catch (error) {
    console.error('Error testing cost optimization:', error)
    
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to test cost optimization',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
} 