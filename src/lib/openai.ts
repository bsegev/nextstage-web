import OpenAI from 'openai'
import { UserResponse } from '@/lib/types'
import { 
  NEXTSTAGE_FRAMEWORK, 
  INDUSTRY_TEMPLATES, 
  classifyIndustry, 
  analyzeBudgetAndTimeline, 
  recommendNextStageServices 
} from './nextstage-methodology'
import { 
  selectOptimalTemplate, 
  enhancePromptWithContext 
} from './prompt-templates'
import { 
  trackBriefGeneration, 
  BriefGenerationEvent 
} from './analytics'
import { 
  detectBusinessModel, 
  analyzeContext, 
  selectFrameworks,
  BusinessModel,
  ContextualIntelligence,
  UniversalFramework
} from './business-model-intelligence'
import { 
  generateEnhancedPrompt,
  enhanceExistingTemplate
} from './enhanced-prompt-templates'

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

export interface BriefSection {
  title: string
  content: string
  reasoning: string
}

export interface GeneratedBrief {
  personalMessage: string
  sections: BriefSection[]
}

export interface ClientProfile {
  name: string
  projectDescription: string
  targetAudience: string
  coreProblem: string
  successVision: string
  timeline: string
  budget: string
  additionalContext: string
  industry: string
}

function extractClientProfile(responses: UserResponse[]): ClientProfile {
  return {
    name: responses.find(r => r.questionIndex === 0)?.answer || "Friend",
    projectDescription: responses.find(r => r.questionIndex === 1)?.answer || "your project",
    targetAudience: responses.find(r => r.questionIndex === 2)?.answer || "your target market",
    coreProblem: responses.find(r => r.questionIndex === 3)?.answer || "market challenges",
    successVision: responses.find(r => r.questionIndex === 4)?.answer || "your goals",
    timeline: responses.find(r => r.questionIndex === 5)?.answer || "your timeline",
    budget: responses.find(r => r.questionIndex === 6)?.answer || "your budget",
    additionalContext: responses.find(r => r.questionIndex === 7)?.answer || "",
    industry: classifyIndustry(
      responses.find(r => r.questionIndex === 1)?.answer || "",
      responses.find(r => r.questionIndex === 2)?.answer || "",
      responses.find(r => r.questionIndex === 3)?.answer || ""
    )
  }
}

export async function generateStrategicBrief(responses: UserResponse[]): Promise<GeneratedBrief> {
  const startTime = Date.now()
  const profile = extractClientProfile(responses)
  
  // TEMPORARILY DISABLE ENHANCED SYSTEM - REVERT TO ORIGINAL
  // Enhanced Business Model Intelligence
  const businessModel = detectBusinessModel(
    profile.projectDescription,
    profile.targetAudience,
    profile.coreProblem,
    profile.successVision
  )
  
  const contextualIntelligence = analyzeContext(
    businessModel,
    profile.timeline,
    profile.budget,
    profile.additionalContext,
    profile.coreProblem
  )
  
  const universalFrameworks = selectFrameworks(businessModel, contextualIntelligence)
  
  // Build user inputs for enhanced prompt
  const userInputs = {
    projectDescription: profile.projectDescription,
    targetAudience: profile.targetAudience,
    coreProblem: profile.coreProblem,
    successVision: profile.successVision,
    timeline: profile.timeline,
    budget: profile.budget,
    additionalContext: profile.additionalContext
  }
  
  // Use original system with business model context injection
  let brief: GeneratedBrief
  let success = false
  let errorMessage: string | undefined
  let templateUsed = 'Original System (Enhanced Context)'

  try {
    console.log(`Business Model Detected: ${businessModel.primary} (${businessModel.confidence}% confidence)`)
    console.log(`Strategic Priority: ${contextualIntelligence.strategicPriority}`)
    console.log(`Complexity Score: ${businessModel.complexity}/100`)
    console.log(`Using original system with enhanced context`)
    
    // Use original template selection but with enhanced context
    const template = selectOptimalTemplate(profile)
    const basePrompt = template.userPromptBuilder(profile)
    const enhancedTemplate = enhanceExistingTemplate(basePrompt, businessModel, contextualIntelligence)
    
    templateUsed = `${template.name} (Enhanced Context)`
    
    console.log(`Template: ${template.name}`)
    console.log(`System prompt length: ${template.systemPrompt.length}`)
    console.log(`Enhanced prompt length: ${enhancedTemplate.length}`)
    
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: template.systemPrompt
        },
        {
          role: "user",
          content: enhancedTemplate
        }
      ],
      temperature: template.temperature,
      max_tokens: template.maxTokens,
    })

    const content = completion.choices[0]?.message?.content
    if (!content) {
      throw new Error('No content generated')
    }

    console.log('Raw OpenAI response length:', content.length)
    console.log('Raw OpenAI response preview:', content.substring(0, 200) + '...')

    // Try to extract JSON from the response (handle various formats)
    let jsonContent = content
    
    // Handle markdown code blocks
    const markdownMatch = content.match(/```json\s*([\s\S]*?)\s*```/) || content.match(/```\s*([\s\S]*?)\s*```/)
    if (markdownMatch) {
      jsonContent = markdownMatch[1]
      console.log('Extracted JSON from markdown wrapper')
    }
    
    // Handle "JSON:" prefix
    const jsonPrefixMatch = content.match(/JSON:\s*([\s\S]*)/i)
    if (jsonPrefixMatch) {
      jsonContent = jsonPrefixMatch[1]
      console.log('Extracted JSON from "JSON:" prefix')
    }
    
    // Clean up any extra whitespace
    jsonContent = jsonContent.trim()

    // Parse the JSON response
    brief = JSON.parse(jsonContent) as GeneratedBrief
    success = true
    
    console.log(`Successfully generated brief using original system with enhanced context`)
    console.log(`Brief sections: ${brief.sections.length}`)

  } catch (error) {
    console.error('Original system with enhanced context failed:', error)
    errorMessage = error instanceof Error ? error.message : 'Unknown error'
    
    // Final fallback to enhanced mock brief
    console.log('Falling back to enhanced mock brief')
    brief = generateEnhancedFallbackBrief(profile, businessModel, contextualIntelligence)
    success = false
    templateUsed = 'Enhanced Fallback'
  }

  // Track analytics with enhanced context
  const generationTime = Date.now() - startTime
  const analyticsEvent: BriefGenerationEvent = {
    timestamp: new Date(),
    clientProfile: profile,
    templateUsed,
    generationTime,
    success,
    errorMessage,
    wordCount: calculateWordCount(brief),
    sectionCount: brief.sections.length
  }
  
  trackBriefGeneration(analyticsEvent)
  
  console.log('Brief generation tracked:', {
    template: templateUsed,
    industry: profile.industry,
    businessModel: businessModel.primary,
    strategicPriority: contextualIntelligence.strategicPriority,
    success,
    generationTime
  })
  
  return brief
}

// Calculate word count for analytics
function calculateWordCount(brief: GeneratedBrief): number {
  const allText = brief.personalMessage + ' ' + brief.sections.map(s => s.content + ' ' + s.reasoning).join(' ')
  return allText.split(/\s+/).filter(word => word.length > 0).length
}

function generateNextStageFallbackBrief(profile: ClientProfile): GeneratedBrief {
  const industryTemplate = INDUSTRY_TEMPLATES[profile.industry] || INDUSTRY_TEMPLATES['Other']
  const serviceRecommendations = recommendNextStageServices(profile.industry, profile.budget, profile.timeline)
  const budgetTimelineAnalysis = analyzeBudgetAndTimeline(profile.budget, profile.timeline, profile.industry)
  
  // Customize fallback based on selected template type
  const template = selectOptimalTemplate(profile)
  
  if (template.name === "Fundraising Strategic Brief") {
    return generateFundraisingFallbackBrief(profile, industryTemplate, serviceRecommendations)
  } else if (template.name === "Technical Feasibility Brief") {
    return generateTechnicalFallbackBrief(profile, industryTemplate, serviceRecommendations)
  } else if (template.name === "Rapid Strategic Assessment") {
    return generateRapidFallbackBrief(profile, industryTemplate, serviceRecommendations)
  }
  
  // Default comprehensive fallback with high personalization
  return {
    personalMessage: `Hi ${profile.name}, I've analyzed your ${profile.industry} project "${profile.projectDescription}" and see significant potential. The challenge you've identified - ${profile.coreProblem} - is exactly the type of market friction NextStage's convergence methodology was designed to solve. Your ${profile.timeline} timeline and ${profile.budget} budget position you perfectly for our rapid execution approach.`,
    
    sections: [
      {
        title: "Strategic Opportunity Assessment",
        content: `Your ${profile.industry} project "${profile.projectDescription}" targets a critical market gap where ${profile.coreProblem} creates significant friction for ${profile.targetAudience}. This positions you to capture market share while competitors struggle with traditional 4-6 month development cycles. With NextStage's convergence methodology, you can achieve ${profile.successVision} within your ${profile.timeline} timeline, creating sustainable competitive advantage. The ${profile.industry} sector's challenge with ${industryTemplate.commonChallenges[0]} becomes your differentiation opportunity.`,
        reasoning: `I've analyzed your specific market position within ${profile.industry}, showing how your timeline advantage and NextStage's rapid execution create a strategic moat. The convergence of strategy, design, and technology from day one eliminates the typical delays that plague ${profile.industry} projects.`
      },
      {
        title: "Target Market Intelligence",
        content: `Your target audience "${profile.targetAudience}" in the ${profile.industry} sector faces the specific challenge of ${profile.coreProblem}, creating urgent demand for your solution. Based on ${profile.industry} market analysis, ${industryTemplate.keyMetrics[0]} will be your primary success indicator, with early validation achievable through NextStage's embedded partnership approach. Customer acquisition strategy should emphasize rapid value demonstration - your ${profile.timeline} delivery timeline becomes a key differentiator against slower competitors. Market opportunity is amplified by the current gap between customer needs and available solutions.`,
        reasoning: `I've analyzed ${profile.targetAudience} behavior patterns specific to ${profile.industry}, identifying how ${profile.coreProblem} creates buying urgency. NextStage's speed advantage directly addresses the market's need for rapid solutions, making your timeline a competitive weapon.`
      },
      {
        title: "Problem-Solution Fit Analysis",
        content: `Core challenge analysis: ${profile.coreProblem} represents a fundamental friction point in ${profile.industry}. Your solution (${profile.projectDescription}) directly addresses this through ${industryTemplate.commonChallenges[1]}. Technical feasibility is strong given your ${profile.budget} budget allocation. Market validation can be achieved rapidly using NextStage's embedded partnership approach – we'll validate assumptions in weeks, not months.`,
        reasoning: "I've analyzed the problem through NextStage's convergence lens, ensuring technical feasibility aligns with market opportunity. This framework accelerates validation and reduces execution risk."
      },
      {
        title: "Success Roadmap & Metrics",
        content: `Your 6-month vision (${profile.successVision}) is achievable with focused execution on ${industryTemplate.keyMetrics.slice(0, 3).join(', ')}. Timeline assessment: ${industryTemplate.timelineConsiderations} Success probability: High, given NextStage's methodology and your market timing. Key milestones: Month 1-2: Strategy + Design convergence, Month 3-4: Technology integration, Month 5-6: Market validation and scaling preparation.`,
        reasoning: "I've mapped your success vision to industry-specific metrics and NextStage's proven delivery framework. This timeline leverages our 4-6 week cycles for continuous momentum and measurable progress."
      },
      {
        title: "NextStage Convergence Strategy",
        content: `Recommended NextStage services for optimal results: ${serviceRecommendations.join(', ')}. Our convergence methodology ensures these work as an integrated system, not separate projects. Strategy component will define market positioning, Design will create compelling user experience, Technology will enable rapid deployment. Delivery timeline: 4-6 weeks per convergence cycle, with continuous iteration based on market feedback. Expected outcome: Market-ready solution with validated product-market fit.`,
        reasoning: `I've selected NextStage services that specifically address ${profile.industry} challenges while leveraging our convergence methodology. This integrated approach accelerates time-to-market and reduces execution risk.`
      },
      {
        title: "Immediate Next Steps",
        content: `30-day priorities: 1) Initiate NextStage Market Entry Accelerator for rapid positioning, 2) Begin customer validation interviews (target: 15+ conversations), 3) Technical architecture planning with NextStage team. 60-day targets: MVP development completion, initial market feedback integration. 90-day goals: Market launch preparation, scaling infrastructure setup. Budget allocation: ${industryTemplate.budgetGuidance} Critical path: Customer validation must inform all technical decisions.`,
        reasoning: "These next steps are sequenced for maximum velocity using NextStage's embedded partnership model. Each milestone builds toward your 6-month vision while maintaining the flexibility to adapt based on market learning."
      }
    ]
  }
}

function generateFundraisingFallbackBrief(profile: ClientProfile, industryTemplate: any, serviceRecommendations: string[]): GeneratedBrief {
  return {
    personalMessage: `Hi ${profile.name}, I've analyzed your ${profile.industry} opportunity from an investor perspective. Your vision for ${profile.projectDescription} has strong market potential – let's position this for maximum investor appeal.`,
    
    sections: [
      {
        title: "Investment Thesis",
        content: `${profile.name} represents a compelling investment opportunity in the ${profile.industry} space. Why this: ${profile.coreProblem} creates significant market friction with limited existing solutions. Why now: Market timing is optimal given ${industryTemplate.timelineConsiderations}. Why this team: NextStage partnership provides execution credibility and accelerated time-to-market through our convergence methodology.`,
        reasoning: "I've structured your opportunity using the classic investor framework. The NextStage partnership significantly strengthens your execution story and risk mitigation."
      },
      {
        title: "Market Opportunity",
        content: `Target market (${profile.targetAudience}) in ${profile.industry} represents significant addressable market. Key growth drivers: ${industryTemplate.commonChallenges.slice(0, 2).join(', ')}. Market size indicators suggest strong scalability potential. Your solution (${profile.projectDescription}) addresses core market needs with clear differentiation.`,
        reasoning: "Investors need to see large, growing markets with clear customer pain points. I've positioned your opportunity within the broader market context."
      },
      {
        title: "Competitive Moat",
        content: `Competitive advantage stems from ${profile.coreProblem} solution approach and NextStage's rapid execution methodology. Defensibility through: 1) First-mover advantage via 4-6 week delivery cycles, 2) Technical implementation barriers, 3) Customer acquisition efficiency. Differentiation: ${industryTemplate.commonChallenges[0]} represents your unique positioning.`,
        reasoning: "Sustainable competitive advantages are crucial for investor confidence. I've identified both technical and execution-based moats."
      },
      {
        title: "Funding Strategy",
        content: `Funding requirement: ${profile.budget} to achieve ${profile.successVision} within ${profile.timeline}. Use of funds: 40% product development, 30% customer acquisition, 20% team building, 10% working capital. NextStage services (${serviceRecommendations.slice(0, 2).join(', ')}) will accelerate milestone achievement and reduce execution risk.`,
        reasoning: "Clear funding strategy with milestone-based approach demonstrates financial discipline and execution focus."
      }
    ]
  }
}

function generateTechnicalFallbackBrief(profile: ClientProfile, industryTemplate: any, serviceRecommendations: string[]): GeneratedBrief {
  return {
    personalMessage: `Hi ${profile.name}, I've analyzed the technical feasibility of ${profile.projectDescription}. The architecture is sound and NextStage's technology expertise can accelerate your development timeline significantly.`,
    
    sections: [
      {
        title: "Technical Feasibility Assessment",
        content: `${profile.projectDescription} is technically feasible with moderate complexity. Architecture considerations: scalability for ${profile.targetAudience}, integration requirements for ${profile.industry} compliance, and performance optimization. Development timeline: ${profile.timeline} is achievable with NextStage's rapid development methodology. Technical risks: ${industryTemplate.commonChallenges[0]} requires careful planning.`,
        reasoning: "Technical feasibility assessment balances ambition with realistic development constraints and industry-specific requirements."
      },
      {
        title: "Development Strategy",
        content: `Recommended approach: Agile development with 2-week sprints, MVP-first methodology, continuous integration/deployment. Team structure: 1 tech lead, 2-3 developers, 1 DevOps engineer. Technology stack: Modern, scalable architecture optimized for ${profile.industry} requirements. NextStage services: ${serviceRecommendations.filter(s => s.includes('Tech') || s.includes('AI')).join(', ')}.`,
        reasoning: "Development strategy prioritizes speed and quality while maintaining technical excellence and industry compliance."
      },
      {
        title: "Implementation Roadmap",
        content: `Phase 1 (Weeks 1-4): Core architecture and MVP development. Phase 2 (Weeks 5-8): Feature implementation and testing. Phase 3 (Weeks 9-12): Integration, optimization, and deployment. Budget allocation: ${industryTemplate.budgetGuidance} Critical path: User feedback integration throughout development cycle.`,
        reasoning: "Phased approach ensures continuous progress and early validation while managing technical complexity."
      }
    ]
  }
}

function generateRapidFallbackBrief(profile: ClientProfile, industryTemplate: any, serviceRecommendations: string[]): GeneratedBrief {
  return {
    personalMessage: `Hi ${profile.name}, given your urgent ${profile.timeline} timeline, I've prioritized immediate actions for ${profile.projectDescription}. NextStage's rapid execution methodology is perfectly suited for your needs.`,
    
    sections: [
      {
        title: "Immediate Opportunity",
        content: `Market window: ${profile.coreProblem} creates immediate opportunity in ${profile.industry}. Competitive advantage: Speed of execution through NextStage's 4-6 week methodology. Risk/reward: High potential given ${profile.successVision} and manageable risks with proper execution focus.`,
        reasoning: "Urgent timelines require immediate opportunity identification and risk assessment for rapid decision-making."
      },
      {
        title: "Critical Success Factors",
        content: `Must-have elements: 1) ${industryTemplate.keyMetrics[0]} validation within 30 days, 2) Technical MVP completion, 3) Initial customer feedback integration. Success probability: High with NextStage partnership and focused execution on ${serviceRecommendations.slice(0, 2).join(', ')}.`,
        reasoning: "Critical path analysis ensures focus on highest-impact activities given time constraints."
      },
      {
        title: "30-Day Action Plan",
        content: `Week 1: Market validation and customer interviews. Week 2: Technical architecture and MVP development start. Week 3: Initial prototype and user testing. Week 4: Iteration based on feedback and scaling preparation. Budget focus: ${profile.budget} allocated to highest-impact activities first.`,
        reasoning: "Detailed 30-day plan provides immediate actionable steps while maintaining strategic focus."
      }
    ]
  }
}

function generateEnhancedFallbackBrief(
  profile: ClientProfile, 
  businessModel: BusinessModel, 
  contextualIntelligence: ContextualIntelligence
): GeneratedBrief {
  const industryTemplate = INDUSTRY_TEMPLATES[profile.industry] || INDUSTRY_TEMPLATES['Other']
  const serviceRecommendations = recommendNextStageServices(profile.industry, profile.budget, profile.timeline)
  
  return {
    personalMessage: `Hi ${profile.name}, I've analyzed your ${businessModel.primary} business model with ${businessModel.marketPosition} positioning and identified your ${contextualIntelligence.strategicPriority} as the key strategic priority. With ${contextualIntelligence.urgencyLevel} urgency and ${businessModel.complexity}/100 complexity score, I've developed a targeted approach for your ${profile.timeline} timeline and ${profile.budget} budget.`,
    
    sections: [
      {
        title: "Business Model Analysis",
        content: `Your ${businessModel.primary} model with ${businessModel.revenueModel} revenue approach positions you in the ${businessModel.valueChain} value chain with ${businessModel.scalability} scalability potential. The ${businessModel.confidence}% confidence in this classification, combined with ${contextualIntelligence.competitivePressure} competitive pressure, creates specific strategic opportunities. Your ${businessModel.marketPosition} market position requires focused execution on ${contextualIntelligence.strategicPriority} to achieve ${profile.successVision}.`,
        reasoning: `Multi-dimensional business model analysis reveals ${businessModel.primary} businesses succeed through ${businessModel.valueChain} strategies, particularly in ${contextualIntelligence.growthStage} growth stage.`
      },
      {
        title: "Strategic Priority Framework",
        content: `Your ${contextualIntelligence.strategicPriority} priority, combined with ${contextualIntelligence.marketTiming} market timing, requires immediate focus on core value proposition validation. The ${contextualIntelligence.resourceRequirements} resource situation supports a ${contextualIntelligence.riskProfile} approach. Key success factors include: 1) ${serviceRecommendations[0]} for market positioning, 2) ${serviceRecommendations[1]} for execution excellence, 3) Rapid feedback loops to validate ${businessModel.primary} model assumptions.`,
        reasoning: `Framework selection based on ${contextualIntelligence.strategicPriority} priority and ${businessModel.complexity}/100 complexity score, optimized for ${contextualIntelligence.urgencyLevel} execution.`
      },
      {
        title: "Market Opportunity Assessment",
        content: `Your target audience "${profile.targetAudience}" in the ${profile.industry} sector faces the specific challenge of ${profile.coreProblem}, creating market demand for ${businessModel.primary} solutions. The ${contextualIntelligence.competitivePressure} competitive environment and ${contextualIntelligence.marketTiming} timing create a strategic window. Your ${businessModel.scalability} scalability potential, combined with ${businessModel.marketPosition} positioning, enables rapid market capture within your ${profile.timeline} timeline.`,
        reasoning: `Market analysis reveals ${businessModel.primary} businesses achieve success through ${businessModel.valueChain} value creation, particularly when addressing ${profile.coreProblem} type challenges.`
      },
      {
        title: "Execution Roadmap",
        content: `Given ${contextualIntelligence.urgencyLevel} urgency and ${contextualIntelligence.riskProfile} risk profile, your roadmap prioritizes: Phase 1 (Weeks 1-4): Core ${businessModel.primary} model validation and ${profile.coreProblem} solution development. Phase 2 (Weeks 5-8): ${profile.targetAudience} engagement and feedback integration. Phase 3 (Weeks 9-12): Scaling preparation and ${businessModel.scalability} optimization. Your ${profile.budget} budget allocation should emphasize ${contextualIntelligence.resourceRequirements} efficiency.`,
        reasoning: `Roadmap designed for ${businessModel.primary} businesses in ${contextualIntelligence.growthStage} stage, accounting for ${businessModel.complexity}/100 complexity and ${contextualIntelligence.urgencyLevel} timeline constraints.`
      },
      {
        title: "Risk Assessment & Mitigation",
        content: `Primary risks for your ${businessModel.primary} model include: 1) ${businessModel.revenueModel} revenue model validation, 2) ${businessModel.marketPosition} market positioning challenges, 3) ${contextualIntelligence.competitivePressure} competitive response. Mitigation strategies: Early customer validation, iterative development approach, and ${businessModel.valueChain} value chain optimization. The ${contextualIntelligence.riskProfile} risk profile requires balanced execution between speed and validation.`,
        reasoning: `Risk assessment tailored to ${businessModel.primary} model characteristics and ${contextualIntelligence.strategicPriority} priority, with mitigation strategies for ${businessModel.complexity}/100 complexity level.`
      },
      {
        title: "Success Metrics & KPIs",
        content: `Key performance indicators for your ${businessModel.primary} business: 1) ${businessModel.revenueModel} revenue metrics and unit economics, 2) ${profile.targetAudience} engagement and retention rates, 3) ${businessModel.scalability} scaling efficiency indicators. Success milestone: Achieve ${profile.successVision} within ${profile.timeline} through ${contextualIntelligence.strategicPriority} execution. Track ${industryTemplate.keyMetrics[0]} as primary industry-specific metric.`,
        reasoning: `Metrics framework designed for ${businessModel.primary} models in ${contextualIntelligence.growthStage} stage, with emphasis on ${contextualIntelligence.strategicPriority} priority tracking.`
      }
    ]
  }
}