import OpenAI from 'openai'
import { UserResponse } from '@/features/archive/stage-shift-brief/components/ConversationalFlow'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

// Enhanced response analysis for existing questions
export interface ResponseInsight {
  originalResponse: string
  extractedEntities: {
    companyName?: string
    industry?: string
    businessModel?: string
    targetMarket?: string
    keyPainPoints?: string[]
    urgencyLevel?: 'low' | 'medium' | 'high'
    sophisticationLevel?: 'beginner' | 'intermediate' | 'advanced'
    budgetSignals?: string[]
    timelineSignals?: string[]
  }
  strategicImplications: string[]
  confidenceScore: number
}

export interface EnhancedProfile {
  name: string
  projectDescription: string
  targetAudience: string
  coreProblem: string
  successVision: string
  timeline: string
  budget: string
  additionalContext: string
  
  // Enhanced intelligence
  insights: ResponseInsight[]
  overallSophistication: 'beginner' | 'intermediate' | 'advanced'
  urgencyScore: number
  strategicClarity: number
  implementationReadiness: number
}

// Phase 2: Dynamic Conversation Intelligence
export interface ConversationContext {
  sophisticationLevel: 'beginner' | 'intermediate' | 'advanced'
  strategicClarity: number
  informationGaps: string[]
  urgencyLevel: number
  conversationHistory: UserResponse[]
  currentInsights: ResponseInsight[]
  currentQuestionIndex?: number
  upcomingQuestions?: string[]
}

export interface FollowUpQuestion {
  question: string
  reasoning: string
  priority: 'high' | 'medium' | 'low'
  category: 'strategic' | 'tactical' | 'clarification'
  expectedInsight: string
}

export interface ConversationAssessment {
  completenessScore: number
  strategicReadiness: number
  shouldContinue: boolean
  missingElements: string[]
  recommendedQuestions: FollowUpQuestion[]
}

// Phase 2: Conversation Director Class
export class ConversationDirector {
  private context: ConversationContext

  constructor(context: ConversationContext) {
    this.context = context
  }

  async assessConversationCompleteness(): Promise<ConversationAssessment> {
    try {
      const prompt = `
Analyze this conversation for strategic completeness and determine if additional questions are needed.

CONVERSATION CONTEXT:
- Sophistication Level: ${this.context.sophisticationLevel}
- Strategic Clarity: ${this.context.strategicClarity}/100
- Urgency Level: ${this.context.urgencyLevel}/100
- Information Gaps: ${this.context.informationGaps.join(', ')}

CONVERSATION HISTORY:
${this.context.conversationHistory.map((r, i) => `Q${i+1}: ${r.question}\nA${i+1}: ${r.answer}`).join('\n\n')}

CURRENT INSIGHTS:
${this.context.currentInsights.map(insight => 
  `- Strategic Implications: ${insight.strategicImplications.join(', ')}\n- Confidence: ${insight.confidenceScore}/100`
).join('\n')}

Assess the conversation and return analysis in JSON format:
{
  "completenessScore": 85,
  "strategicReadiness": 75,
  "shouldContinue": true,
  "missingElements": ["market validation", "competitive analysis"],
  "recommendedQuestions": [
    {
      "question": "What specific market validation have you done?",
      "reasoning": "Need to understand market proof points",
      "priority": "high",
      "category": "strategic",
      "expectedInsight": "Market validation data for strategic positioning"
    }
  ]
}

Focus on:
- Strategic information gaps that would impact brief quality
- Whether enough context exists for sophisticated recommendations
- Questions that would unlock the highest strategic value
- Stopping when diminishing returns on additional questions
`

          const completion = await openai.chat.completions.create({
      // PHASE 1 OPTIMIZATION: Use GPT-3.5-Turbo for assessment (60% cheaper)
      model: "gpt-3.5-turbo-0125",
      messages: [
        {
          role: "system",
          content: "You are a strategic conversation analyst. Assess conversation completeness and recommend follow-up questions. Return only valid JSON."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.3,
      // PHASE 1 OPTIMIZATION: Cap tokens at 400 for assessment
      max_tokens: 400,
      response_format: { type: "json_object" }
    })

      const content = completion.choices[0]?.message?.content
      if (!content) {
        throw new Error('No assessment generated')
      }

      return JSON.parse(content)
    } catch (error) {
      console.error('Error assessing conversation:', error)
      
      // Fallback assessment
      return {
        completenessScore: 70,
        strategicReadiness: 60,
        shouldContinue: false,
        missingElements: [],
        recommendedQuestions: []
      }
    }
  }

  async generateFollowUpQuestion(lastResponse: UserResponse): Promise<FollowUpQuestion | null> {
    try {
      const prompt = `
Generate an intelligent follow-up question based on the user's response and conversation context.

USER'S LAST RESPONSE:
Question: ${lastResponse.question}
Answer: ${lastResponse.answer}

CONVERSATION CONTEXT:
- Sophistication Level: ${this.context.sophisticationLevel}
- Strategic Clarity: ${this.context.strategicClarity}/100
- Urgency Level: ${this.context.urgencyLevel}/100
- Previous Responses: ${this.context.conversationHistory.length}

CURRENT INSIGHTS:
${this.context.currentInsights.map(insight => 
  `- ${insight.strategicImplications.join(', ')}`
).join('\n')}

Generate a follow-up question that:
1. Addresses the biggest strategic gap in their response
2. Matches their sophistication level
3. Unlocks maximum strategic value
4. Feels natural in the conversation flow

Return analysis in JSON format:
{
  "question": "Based on your market challenges, what specific competitive advantages do you have that others don't?",
  "reasoning": "Need to identify unique value proposition for strategic positioning",
  "priority": "high",
  "category": "strategic",
  "expectedInsight": "Competitive differentiation insights"
}

If no meaningful follow-up is needed, return null.
`

      const completion = await openai.chat.completions.create({
        // PHASE 1 OPTIMIZATION: Use GPT-3.5-Turbo for follow-up generation (60% cheaper)
        model: "gpt-3.5-turbo-0125",
        messages: [
          {
            role: "system",
            content: "You are a strategic conversation director. Generate intelligent follow-up questions that unlock maximum strategic value. Return only valid JSON or null."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.4,
        // PHASE 1 OPTIMIZATION: Cap tokens at 200 for follow-up generation
        max_tokens: 200,
        response_format: { type: "json_object" }
      })

      const content = completion.choices[0]?.message?.content
      if (!content) {
        return null
      }

      const result = JSON.parse(content)
      return result.question ? result : null
    } catch (error) {
      console.error('Error generating follow-up:', error)
      return null
    }
  }

  async identifyInformationGaps(): Promise<string[]> {
    try {
      const prompt = `
Identify strategic information gaps in this conversation that would impact brief quality.

CONVERSATION HISTORY:
${this.context.conversationHistory.map((r, i) => `Q${i+1}: ${r.question}\nA${i+1}: ${r.answer}`).join('\n\n')}

CURRENT INSIGHTS:
${this.context.currentInsights.map(insight => 
  `- Strategic Implications: ${insight.strategicImplications.join(', ')}`
).join('\n')}

Identify gaps in these strategic areas:
- Market validation and size
- Competitive landscape and differentiation
- Business model clarity
- Financial constraints and goals
- Implementation readiness and resources
- Risk factors and mitigation
- Success metrics and measurement

Return analysis in JSON format:
{
  "gaps": ["market validation", "competitive differentiation", "success metrics"]
}
`

      const completion = await openai.chat.completions.create({
        // PHASE 1 OPTIMIZATION: Use GPT-3.5-Turbo for gap identification (60% cheaper)
        model: "gpt-3.5-turbo-0125",
        messages: [
          {
            role: "system",
            content: "You are a strategic analyst. Identify critical information gaps that would impact brief quality. Return only valid JSON."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.3,
        // PHASE 1 OPTIMIZATION: Cap tokens at 300 for gap identification
        max_tokens: 300,
        response_format: { type: "json_object" }
      })

      const content = completion.choices[0]?.message?.content
      if (!content) {
        return []
      }

      const result = JSON.parse(content)
      return result.gaps || []
    } catch (error) {
      console.error('Error identifying gaps:', error)
      return []
    }
  }
}

// Enhanced analysis functions with fixed JSON parsing
export async function analyzeResponseIntelligence(
  responses: UserResponse[]
): Promise<EnhancedProfile> {
  const insights: ResponseInsight[] = []
  
  // Analyze each response for deeper insights
  for (const response of responses) {
    const insight = await analyzeIndividualResponse(response)
    insights.push(insight)
  }
  
  // Calculate overall intelligence metrics
  const overallSophistication = calculateSophistication(insights)
  const urgencyScore = calculateUrgency(insights)
  const strategicClarity = calculateStrategicClarity(insights)
  const implementationReadiness = calculateImplementationReadiness(insights)
  
  return {
    name: responses.find(r => r.questionIndex === 0)?.answer || "Friend",
    projectDescription: responses.find(r => r.questionIndex === 1)?.answer || "your project",
    targetAudience: responses.find(r => r.questionIndex === 2)?.answer || "your target market",
    coreProblem: responses.find(r => r.questionIndex === 3)?.answer || "market challenges",
    successVision: responses.find(r => r.questionIndex === 4)?.answer || "your goals",
    timeline: responses.find(r => r.questionIndex === 5)?.answer || "your timeline",
    budget: responses.find(r => r.questionIndex === 6)?.answer || "your budget",
    additionalContext: responses.find(r => r.questionIndex === 7)?.answer || "",
    
    insights,
    overallSophistication,
    urgencyScore,
    strategicClarity,
    implementationReadiness
  }
}

async function analyzeIndividualResponse(response: UserResponse): Promise<ResponseInsight> {
  try {
    const analysisPrompt = `
Analyze this user response for strategic intelligence. Extract key insights and entities:

Question: ${response.question}
Response: ${response.answer}

Return analysis in this JSON format:
{
  "extractedEntities": {
    "companyName": "extracted company name if mentioned",
    "industry": "detected industry",
    "businessModel": "detected business model type",
    "targetMarket": "refined target market description",
    "keyPainPoints": ["pain point 1", "pain point 2"],
    "urgencyLevel": "low|medium|high",
    "sophisticationLevel": "beginner|intermediate|advanced",
    "budgetSignals": ["budget indicator 1", "budget indicator 2"],
    "timelineSignals": ["timeline indicator 1", "timeline indicator 2"]
  },
  "strategicImplications": ["implication 1", "implication 2", "implication 3"],
  "confidenceScore": 85
}

Focus on:
- Business sophistication level (beginner/intermediate/advanced)
- Urgency indicators (words like "urgent", "ASAP", "struggling", "losing")
- Budget signals (specific numbers, ranges, constraints)
- Timeline signals (specific dates, urgency words)
- Strategic clarity (how well-defined their vision is)
- Implementation readiness (how prepared they are to execute)
`

    const completion = await openai.chat.completions.create({
      // PHASE 1 OPTIMIZATION: Use GPT-3.5-Turbo for individual response analysis (60% cheaper)
      model: "gpt-3.5-turbo-0125",
      messages: [
        {
          role: "system",
          content: "You are a strategic business analyst. Analyze user responses to extract deep business intelligence and strategic insights. Return only valid JSON in the exact format specified."
        },
        {
          role: "user",
          content: analysisPrompt
        }
      ],
      temperature: 0.3,
      // PHASE 1 OPTIMIZATION: Cap tokens at 600 for individual response analysis
      max_tokens: 600,
      response_format: { type: "json_object" }
    })

    const content = completion.choices[0]?.message?.content
    if (!content) {
      throw new Error('No analysis generated')
    }

    const analysis = JSON.parse(content)
    
    return {
      originalResponse: response.answer,
      extractedEntities: analysis.extractedEntities || {},
      strategicImplications: analysis.strategicImplications || [],
      confidenceScore: analysis.confidenceScore || 70
    }
    
  } catch (error) {
    console.error('Error analyzing response:', error)
    
    // Fallback to basic analysis
    return {
      originalResponse: response.answer,
      extractedEntities: {},
      strategicImplications: [],
      confidenceScore: 50
    }
  }
}

function calculateSophistication(insights: ResponseInsight[]): 'beginner' | 'intermediate' | 'advanced' {
  const sophisticationScores = insights
    .map(insight => insight.extractedEntities.sophisticationLevel)
    .filter(level => level !== undefined)
  
  if (sophisticationScores.length === 0) return 'intermediate'
  
  const advancedCount = sophisticationScores.filter(s => s === 'advanced').length
  const intermediateCount = sophisticationScores.filter(s => s === 'intermediate').length
  
  if (advancedCount > sophisticationScores.length / 2) return 'advanced'
  if (intermediateCount > sophisticationScores.length / 2) return 'intermediate'
  return 'beginner'
}

function calculateUrgency(insights: ResponseInsight[]): number {
  const urgencyLevels = insights
    .map(insight => insight.extractedEntities.urgencyLevel)
    .filter(level => level !== undefined)
  
  if (urgencyLevels.length === 0) return 50
  
  const urgencyMap = { low: 25, medium: 50, high: 85 }
  const avgUrgency = urgencyLevels.reduce((sum, level) => sum + urgencyMap[level!], 0) / urgencyLevels.length
  
  return Math.round(avgUrgency)
}

function calculateStrategicClarity(insights: ResponseInsight[]): number {
  // Calculate based on response quality and strategic implications
  const totalImplications = insights.reduce((sum, insight) => sum + insight.strategicImplications.length, 0)
  const avgConfidence = insights.reduce((sum, insight) => sum + insight.confidenceScore, 0) / insights.length
  
  // Higher strategic clarity = more implications + higher confidence
  const clarityScore = Math.min(100, (totalImplications * 10) + (avgConfidence * 0.5))
  
  return Math.round(clarityScore)
}

function calculateImplementationReadiness(insights: ResponseInsight[]): number {
  // Calculate based on timeline signals, budget signals, and sophistication
  let readinessScore = 50 // Base score
  
  insights.forEach(insight => {
    const entities = insight.extractedEntities
    
    // Timeline signals increase readiness
    if (entities.timelineSignals && entities.timelineSignals.length > 0) {
      readinessScore += 15
    }
    
    // Budget signals increase readiness
    if (entities.budgetSignals && entities.budgetSignals.length > 0) {
      readinessScore += 15
    }
    
    // High sophistication increases readiness
    if (entities.sophisticationLevel === 'advanced') {
      readinessScore += 10
    } else if (entities.sophisticationLevel === 'intermediate') {
      readinessScore += 5
    }
    
    // High urgency increases readiness
    if (entities.urgencyLevel === 'high') {
      readinessScore += 10
    } else if (entities.urgencyLevel === 'medium') {
      readinessScore += 5
    }
  })
  
  return Math.min(100, Math.round(readinessScore))
}

// Enhanced brief generation using intelligence
export async function generateIntelligentBrief(enhancedProfile: EnhancedProfile): Promise<any> {
  const intelligenceContext = `
ENHANCED CLIENT INTELLIGENCE:
- Overall Sophistication: ${enhancedProfile.overallSophistication}
- Urgency Score: ${enhancedProfile.urgencyScore}/100
- Strategic Clarity: ${enhancedProfile.strategicClarity}/100
- Implementation Readiness: ${enhancedProfile.implementationReadiness}/100

KEY EXTRACTED INSIGHTS:
${enhancedProfile.insights.map(insight => 
  `- ${insight.strategicImplications.join(', ')}`
).join('\n')}

EXTRACTED ENTITIES:
${enhancedProfile.insights.map(insight => 
  Object.entries(insight.extractedEntities)
    .filter(([key, value]) => value !== undefined && value !== '')
    .map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(', ') : value}`)
    .join(', ')
).filter(str => str.length > 0).join('\n')}
`

  const prompt = `
You are NextStage's senior strategic consultant. Create a comprehensive strategic brief using both the client's responses AND the enhanced intelligence analysis.

CLIENT PROFILE:
Name: ${enhancedProfile.name}
Project: ${enhancedProfile.projectDescription}
Target Audience: ${enhancedProfile.targetAudience}
Core Problem: ${enhancedProfile.coreProblem}
Success Vision: ${enhancedProfile.successVision}
Timeline: ${enhancedProfile.timeline}
Budget: ${enhancedProfile.budget}
Additional Context: ${enhancedProfile.additionalContext}

${intelligenceContext}

INSTRUCTIONS:
1. Use the enhanced intelligence to provide deeper, more sophisticated insights
2. Tailor the complexity to their sophistication level (${enhancedProfile.overallSophistication})
3. Address urgency appropriately (urgency score: ${enhancedProfile.urgencyScore}/100)
4. Provide more specific recommendations based on extracted entities
5. Include strategic implications from the intelligence analysis

Return a JSON response with this structure:
{
  "personalMessage": "Personalized opening message acknowledging their sophistication and urgency",
  "sections": [
    {
      "title": "Strategic Analysis",
      "content": "Enhanced analysis using extracted insights",
      "reasoning": "Why this analysis is specifically relevant to their situation"
    },
    {
      "title": "Market Positioning",
      "content": "Positioning strategy based on extracted entities",
      "reasoning": "Strategic rationale for this positioning"
    },
    {
      "title": "Implementation Roadmap",
      "content": "Roadmap tailored to their readiness level",
      "reasoning": "Why this approach fits their implementation readiness"
    },
    {
      "title": "Next Steps",
      "content": "Specific next steps based on urgency and sophistication",
      "reasoning": "Strategic rationale for these priorities"
    }
  ]
}
`

  const completion = await openai.chat.completions.create({
    // PHASE 1 OPTIMIZATION: Use GPT-4o for final brief generation (preserve quality)
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: "You are NextStage's senior strategic consultant. Create sophisticated strategic briefs using enhanced client intelligence. Always return valid JSON."
      },
      {
        role: "user",
        content: prompt
      }
    ],
    temperature: 0.7,
    // PHASE 1 OPTIMIZATION: Cap tokens at 1500 for final brief generation
    max_tokens: 1500,
  })

  const content = completion.choices[0]?.message?.content
  if (!content) {
    throw new Error('No brief generated')
  }

  return JSON.parse(content)
}

// Add this new optimized function at the end of the file
export async function analyzeConversationOptimized(
  responses: UserResponse[],
  currentQuestionIndex?: number
): Promise<{
  profile: EnhancedProfile
  assessment: ConversationAssessment
  followUpQuestion: FollowUpQuestion | null
  informationGaps: string[]
  conversationInsights: {
    sophisticationLevel: 'beginner' | 'intermediate' | 'advanced'
    urgencyScore: number
    strategicClarity: number
    implementationReadiness: number
  }
}> {
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

  try {

    const upcomingQuestions = baseQuestions.slice((currentQuestionIndex || responses.length - 1) + 1)

    const prompt = `
Analyze this conversation comprehensively. Return ALL analysis in a single JSON response.

CONVERSATION:
${responses.map((r, i) => `Q${i+1}: ${r.question}\nA${i+1}: ${r.answer}`).join('\n\n')}

UPCOMING QUESTIONS: ${upcomingQuestions.join(', ')}

Provide complete analysis in this JSON format:
{
  "responseAnalysis": [
    {
      "responseIndex": 0,
      "extractedEntities": {
        "companyName": "string or null",
        "industry": "string or null",
        "businessModel": "string or null",
        "targetMarket": "string or null",
        "keyPainPoints": ["string"],
        "urgencyLevel": "low|medium|high",
        "sophisticationLevel": "beginner|intermediate|advanced",
        "budgetSignals": ["string"],
        "timelineSignals": ["string"]
      },
      "strategicImplications": ["string"],
      "confidenceScore": 85
    }
  ],
  "overallMetrics": {
    "sophisticationLevel": "beginner|intermediate|advanced",
    "urgencyScore": 75,
    "strategicClarity": 80,
    "implementationReadiness": 70
  },
  "conversationAssessment": {
    "completenessScore": 85,
    "strategicReadiness": 75,
    "shouldContinue": true,
    "missingElements": ["string"],
    "recommendedQuestions": [
      {
        "question": "string",
        "reasoning": "string",
        "priority": "high|medium|low",
        "category": "strategic|tactical|clarification",
        "expectedInsight": "string"
      }
    ]
  },
  "informationGaps": ["string"],
  "followUpQuestion": {
    "question": "string",
    "reasoning": "string",
    "priority": "high|medium|low",
    "category": "strategic|tactical|clarification",
    "expectedInsight": "string"
  }
}

ANALYSIS REQUIREMENTS:
1. Analyze each response for business intelligence
2. Calculate sophistication from vocabulary, detail, strategic thinking
3. Score urgency from words like "urgent", "ASAP", "struggling", "losing"  
4. Assess strategic clarity from goal definition and vision
5. Evaluate implementation readiness from resource mentions
6. Identify information gaps for strategic brief quality
7. Generate follow-up ONLY if it covers topics not in upcoming questions
8. Return null for followUpQuestion if no strategic value or would duplicate upcoming questions
`

    const completion = await openai.chat.completions.create({
      // PHASE 1 OPTIMIZATION: Use GPT-4o for consolidated analysis (preserve quality)
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are a strategic business analyst. Provide comprehensive conversation analysis in a single response. Return only valid JSON."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.3,
      // PHASE 1 OPTIMIZATION: Cap tokens at 1200 for consolidated analysis
      max_tokens: 1200,
      response_format: { type: "json_object" }
    })

    const content = completion.choices[0]?.message?.content
    if (!content) {
      throw new Error('No analysis generated')
    }

    const analysis = JSON.parse(content)
    
    // Transform the analysis into the expected format
    const insights: ResponseInsight[] = analysis.responseAnalysis.map((item: any, index: number) => ({
      originalResponse: responses[index]?.answer || '',
      extractedEntities: item.extractedEntities || {},
      strategicImplications: item.strategicImplications || [],
      confidenceScore: item.confidenceScore || 70
    }))

    const profile: EnhancedProfile = {
      name: responses.find(r => r.questionIndex === 0)?.answer || "Friend",
      projectDescription: responses.find(r => r.questionIndex === 1)?.answer || "your project",
      targetAudience: responses.find(r => r.questionIndex === 2)?.answer || "your target market",
      coreProblem: responses.find(r => r.questionIndex === 3)?.answer || "market challenges",
      successVision: responses.find(r => r.questionIndex === 4)?.answer || "your goals",
      timeline: responses.find(r => r.questionIndex === 5)?.answer || "your timeline",
      budget: responses.find(r => r.questionIndex === 6)?.answer || "your budget",
      additionalContext: responses.find(r => r.questionIndex === 7)?.answer || "",
      
      insights,
      overallSophistication: analysis.overallMetrics.sophisticationLevel,
      urgencyScore: analysis.overallMetrics.urgencyScore,
      strategicClarity: analysis.overallMetrics.strategicClarity,
      implementationReadiness: analysis.overallMetrics.implementationReadiness
    }

    return {
      profile,
      assessment: analysis.conversationAssessment,
      followUpQuestion: analysis.followUpQuestion,
      informationGaps: analysis.informationGaps || [],
      conversationInsights: {
        sophisticationLevel: analysis.overallMetrics.sophisticationLevel,
        urgencyScore: analysis.overallMetrics.urgencyScore,
        strategicClarity: analysis.overallMetrics.strategicClarity,
        implementationReadiness: analysis.overallMetrics.implementationReadiness
      }
    }

  } catch (error) {
    console.error('Error in optimized analysis:', error)
    
    // Fallback to individual analysis
    const profile = await analyzeResponseIntelligence(responses)
    const context: ConversationContext = {
      sophisticationLevel: profile.overallSophistication,
      strategicClarity: profile.strategicClarity,
      informationGaps: [],
      urgencyLevel: profile.urgencyScore,
      conversationHistory: responses,
      currentInsights: profile.insights,
      currentQuestionIndex,
      upcomingQuestions: baseQuestions.slice((currentQuestionIndex || responses.length - 1) + 1)
    }

    const director = new ConversationDirector(context)
    const assessment = await director.assessConversationCompleteness()
    const informationGaps = await director.identifyInformationGaps()
    const followUpQuestion = assessment.shouldContinue && assessment.recommendedQuestions.length > 0 
      ? await director.generateFollowUpQuestion(responses[responses.length - 1])
      : null

    return {
      profile,
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
  }
} 