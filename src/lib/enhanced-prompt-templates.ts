// Enhanced Prompt Engineering System
// Dynamic context injection with universal strategic frameworks

import { BusinessModel, ContextualIntelligence, UniversalFramework } from './business-model-intelligence'

export interface PromptContext {
  businessModel: BusinessModel
  contextualIntelligence: ContextualIntelligence
  universalFrameworks: UniversalFramework[]
  userInputs: Record<string, string>
}

export interface EnhancedPrompt {
  systemPrompt: string
  userPrompt: string
  temperature: number
  maxTokens: number
  context: PromptContext
}

// Context-Aware System Prompt Generator
export function generateSystemPrompt(context: PromptContext): string {
  const { businessModel, contextualIntelligence, universalFrameworks } = context
  
  return `You are an elite strategic consultant specializing in ${businessModel.primary} businesses with ${businessModel.marketPosition} market positioning. You have deep expertise in ${businessModel.valueChain} value chain strategies and ${businessModel.scalability} scaling approaches.

## BUSINESS CONTEXT ANALYSIS
- **Business Model**: ${businessModel.primary} (${businessModel.confidence}% confidence)
- **Revenue Model**: ${businessModel.revenueModel}
- **Market Position**: ${businessModel.marketPosition}
- **Value Chain**: ${businessModel.valueChain}
- **Scalability**: ${businessModel.scalability}
- **Complexity Score**: ${businessModel.complexity}/100

## STRATEGIC CONTEXT
- **Primary Priority**: ${contextualIntelligence.strategicPriority}
- **Market Timing**: ${contextualIntelligence.marketTiming}
- **Competitive Pressure**: ${contextualIntelligence.competitivePressure}
- **Resource Requirements**: ${contextualIntelligence.resourceRequirements}
- **Risk Profile**: ${contextualIntelligence.riskProfile}
- **Growth Stage**: ${contextualIntelligence.growthStage}
- **Urgency Level**: ${contextualIntelligence.urgencyLevel}

## STRATEGIC FRAMEWORKS TO APPLY
${universalFrameworks.map((framework, index) => `
**${index + 1}. ${framework.name}** (Weight: ${Math.round(framework.weight * 100)}%)
Focus Areas: ${framework.focusAreas.join(', ')}
Key Questions: ${framework.keyQuestions.join(' | ')}
`).join('')}

## YOUR EXPERTISE AREAS
Based on this business model and context, you excel at:
${getExpertiseAreas(businessModel, contextualIntelligence).join('\n')}

## STRATEGIC APPROACH
Given the ${contextualIntelligence.urgencyLevel} urgency and ${contextualIntelligence.riskProfile} risk profile, your approach should be:
${getStrategicApproach(contextualIntelligence)}

## OUTPUT REQUIREMENTS
- Provide strategic recommendations that are specific to ${businessModel.primary} businesses
- Address the ${contextualIntelligence.strategicPriority} priority directly
- Consider the ${contextualIntelligence.resourceRequirements} resource situation
- Account for ${contextualIntelligence.competitivePressure} competitive pressure
- Align with ${contextualIntelligence.growthStage} growth stage needs
- Use industry-specific terminology and best practices
- Provide actionable, measurable recommendations
- Include risk mitigation strategies appropriate for ${contextualIntelligence.riskProfile} scenarios

You are not just providing generic advice—you are a specialist consultant who understands the nuances of this specific business model and strategic context.`
}

function getExpertiseAreas(businessModel: BusinessModel, context: ContextualIntelligence): string[] {
  const areas: string[] = []
  
  // Business model specific expertise
  const modelExpertise: Record<string, string[]> = {
    'Subscription': [
      '- Customer acquisition cost (CAC) optimization for recurring revenue models',
      '- Churn reduction strategies and retention optimization',
      '- Pricing strategy for subscription tiers and value-based pricing',
      '- Customer lifetime value (CLV) maximization techniques'
    ],
    'Transaction': [
      '- Transaction volume optimization and conversion rate improvement',
      '- Payment processing optimization and fraud prevention',
      '- Marketplace dynamics and network effects leveraging',
      '- Commission structure optimization and fee modeling'
    ],
    'Service': [
      '- Service delivery optimization and client satisfaction management',
      '- Expertise monetization and premium positioning strategies',
      '- Client relationship management and retention systems',
      '- Service productization and scalability frameworks'
    ],
    'Product': [
      '- Product-market fit validation and market positioning',
      '- Supply chain optimization and inventory management',
      '- Physical distribution strategies and channel optimization',
      '- Product lifecycle management and innovation pipelines'
    ],
    'Marketplace': [
      '- Two-sided market development and network effects',
      '- Platform governance and ecosystem management',
      '- Multi-stakeholder value creation and capture',
      '- Trust and safety systems for marketplace integrity'
    ],
    'Content': [
      '- Audience development and engagement optimization',
      '- Content monetization strategies and revenue diversification',
      '- Content distribution and platform optimization',
      '- Brand building and thought leadership positioning'
    ],
    'Data': [
      '- Data collection strategies and privacy compliance',
      '- Analytics and insights generation capabilities',
      '- Data product development and API monetization',
      '- Data-driven decision making and competitive intelligence'
    ],
    'Development': [
      '- Project-based business model optimization',
      '- Capital allocation and project portfolio management',
      '- Long-term project planning and milestone management',
      '- Risk management for capital-intensive projects'
    ]
  }
  
  areas.push(...(modelExpertise[businessModel.primary] || []))
  
  // Context-specific expertise
  if (context.strategicPriority === 'Fundraising') {
    areas.push('- Investor pitch development and fundraising strategy')
    areas.push('- Financial modeling and valuation optimization')
    areas.push('- Due diligence preparation and business intelligence systems')
  }
  
  if (context.urgencyLevel === 'High Urgency') {
    areas.push('- Rapid execution strategies and quick wins identification')
    areas.push('- Crisis management and urgent decision-making frameworks')
  }
  
  if (context.competitivePressure === 'High') {
    areas.push('- Competitive differentiation and blue ocean strategies')
    areas.push('- Market positioning and competitive intelligence')
  }
  
  return areas
}

function getStrategicApproach(context: ContextualIntelligence): string {
  let approach = ''
  
  if (context.urgencyLevel === 'High Urgency') {
    approach += 'RAPID EXECUTION FOCUS: Prioritize quick wins and immediate impact strategies. '
  }
  
  if (context.riskProfile === 'High Risk') {
    approach += 'RISK MITIGATION PRIORITY: Include comprehensive risk assessment and mitigation strategies. '
  }
  
  if (context.resourceRequirements === 'Under-Resourced') {
    approach += 'RESOURCE OPTIMIZATION: Focus on lean, cost-effective solutions with maximum ROI. '
  }
  
  if (context.competitivePressure === 'High') {
    approach += 'DIFFERENTIATION IMPERATIVE: Emphasize unique value propositions and competitive advantages. '
  }
  
  if (context.growthStage === 'Idea Stage') {
    approach += 'VALIDATION FOCUS: Prioritize market validation and proof-of-concept development. '
  }
  
  return approach || 'BALANCED STRATEGIC APPROACH: Provide comprehensive, balanced recommendations across all strategic dimensions.'
}

// Enhanced User Prompt Generator
export function generateUserPrompt(context: PromptContext): string {
  const { businessModel, contextualIntelligence, universalFrameworks, userInputs } = context
  
  const primaryFramework = universalFrameworks[0]
  const secondaryFramework = universalFrameworks[1]
  
  return `Create a comprehensive strategic brief for this ${businessModel.primary} business opportunity:

## PROJECT OVERVIEW
**Description**: ${userInputs.projectDescription}
**Target Audience**: ${userInputs.targetAudience}
**Core Problem**: ${userInputs.coreProblem}
**Success Vision**: ${userInputs.successVision}
**Timeline**: ${userInputs.timeline}
**Budget**: ${userInputs.budget}
**Additional Context**: ${userInputs.additionalContext}

## STRATEGIC ANALYSIS REQUIREMENTS

### PRIMARY FRAMEWORK: ${primaryFramework.name}
Address these key areas with specific, actionable recommendations:
${primaryFramework.focusAreas.map(area => `- ${area}`).join('\n')}

Key questions to answer:
${primaryFramework.keyQuestions.map(q => `- ${q}`).join('\n')}

### SECONDARY FRAMEWORK: ${secondaryFramework.name}
Provide supporting analysis for:
${secondaryFramework.focusAreas.slice(0, 2).map(area => `- ${area}`).join('\n')}

## BUSINESS MODEL SPECIFIC REQUIREMENTS
Given this is a ${businessModel.primary} business with ${businessModel.revenueModel} revenue model:
${getBusinessModelRequirements(businessModel)}

## CONTEXTUAL PRIORITIES
Based on ${contextualIntelligence.strategicPriority} priority and ${contextualIntelligence.urgencyLevel} urgency:
${getContextualRequirements(contextualIntelligence)}

## OUTPUT FORMAT REQUIREMENT
You MUST respond with valid JSON in this exact format:

{
  "personalMessage": "A personalized message addressing the client by name and their specific situation",
  "sections": [
    {
      "title": "Executive Summary",
      "content": "2-3 sentences capturing the core strategic recommendation",
      "reasoning": "Brief explanation of why this recommendation fits their situation"
    },
    {
      "title": "Business Model Analysis", 
      "content": "Specific insights for ${businessModel.primary} model",
      "reasoning": "Analysis of why this business model approach works for their context"
    },
    {
      "title": "${primaryFramework.name}",
      "content": "Detailed analysis using primary framework",
      "reasoning": "Why this framework is prioritized for their situation"
    },
    {
      "title": "${secondaryFramework.name}",
      "content": "Supporting analysis using secondary framework", 
      "reasoning": "How this framework supports the primary analysis"
    },
    {
      "title": "Implementation Roadmap",
      "content": "Specific roadmap for ${contextualIntelligence.urgencyLevel} timeline",
      "reasoning": "Timeline rationale based on their urgency and complexity"
    },
    {
      "title": "Risk Assessment",
      "content": "Risks tailored to ${contextualIntelligence.riskProfile} profile",
      "reasoning": "Risk analysis specific to their business model and context"
    }
  ]
}

Make every recommendation specific to this ${businessModel.primary} business model and avoid generic advice. Use the client's actual project details throughout.`
}

function getBusinessModelRequirements(businessModel: BusinessModel): string {
  const requirements: Record<string, string> = {
    'Subscription': `- Analyze customer acquisition costs and lifetime value for sustainable growth
- Recommend pricing tiers and retention strategies
- Address churn reduction and expansion revenue opportunities
- Evaluate subscription metrics and unit economics`,
    
    'Transaction': `- Analyze transaction volume potential and conversion optimization
- Recommend payment processing and fraud prevention strategies
- Evaluate marketplace dynamics and network effects
- Address commission structures and fee optimization`,
    
    'Service': `- Analyze service delivery scalability and client satisfaction
- Recommend expertise monetization and premium positioning
- Evaluate client relationship management and retention
- Address service productization opportunities`,
    
    'Product': `- Analyze product-market fit and positioning strategies
- Recommend supply chain and inventory optimization
- Evaluate distribution channels and market penetration
- Address product lifecycle and innovation planning`,
    
    'Marketplace': `- Analyze two-sided market development and network effects
- Recommend platform governance and ecosystem strategies
- Evaluate multi-stakeholder value creation
- Address trust and safety system requirements`,
    
    'Content': `- Analyze audience development and engagement strategies
- Recommend content monetization and revenue diversification
- Evaluate content distribution and platform optimization
- Address brand building and thought leadership`,
    
    'Data': `- Analyze data collection and privacy compliance strategies
- Recommend analytics and insights generation capabilities
- Evaluate data product development and API monetization
- Address competitive intelligence and decision-making systems`,
    
    'Development': `- Analyze project-based business optimization
- Recommend capital allocation and portfolio management
- Evaluate long-term planning and milestone management
- Address risk management for capital-intensive projects`
  }
  
  return requirements[businessModel.primary] || requirements['Service']
}

function getContextualRequirements(context: ContextualIntelligence): string {
  let requirements = ''
  
  if (context.strategicPriority === 'Fundraising') {
    requirements += '- Include investor-ready financial projections and valuation framework\n'
    requirements += '- Address due diligence preparation and business intelligence strategy\n'
  }
  
  if (context.strategicPriority === 'Market Entry') {
    requirements += '- Focus on market validation and entry strategy\n'
    requirements += '- Include competitive positioning and differentiation strategy\n'
  }
  
  if (context.urgencyLevel === 'High Urgency') {
    requirements += '- Prioritize quick wins and immediate impact opportunities\n'
    requirements += '- Include rapid execution timeline and resource allocation\n'
  }
  
  if (context.competitivePressure === 'High') {
    requirements += '- Emphasize differentiation and competitive advantages\n'
    requirements += '- Include competitive intelligence and positioning strategy\n'
  }
  
  if (context.resourceRequirements === 'Under-Resourced') {
    requirements += '- Focus on lean, cost-effective solutions with maximum ROI\n'
    requirements += '- Include resource optimization and efficiency strategies\n'
  }
  
  return requirements || '- Provide balanced strategic recommendations across all dimensions'
}

// Enhanced Prompt Generation
export function generateEnhancedPrompt(
  businessModel: BusinessModel,
  contextualIntelligence: ContextualIntelligence,
  universalFrameworks: UniversalFramework[],
  userInputs: Record<string, string>
): EnhancedPrompt {
  const context: PromptContext = {
    businessModel,
    contextualIntelligence,
    universalFrameworks,
    userInputs
  }
  
  const systemPrompt = generateSystemPrompt(context)
  const userPrompt = generateUserPrompt(context)
  
  // Dynamic temperature based on context
  let temperature = 0.7 // default
  
  if (contextualIntelligence.urgencyLevel === 'High Urgency') {
    temperature = 0.5 // More focused for urgent decisions
  }
  
  if (contextualIntelligence.riskProfile === 'High Risk') {
    temperature = 0.6 // More conservative for high-risk scenarios
  }
  
  if (contextualIntelligence.strategicPriority === 'Fundraising') {
    temperature = 0.4 // More precise for investor-facing content
  }
  
  // Dynamic max tokens based on complexity
  const maxTokens = Math.min(4000, 2500 + (businessModel.complexity * 15))
  
  return {
    systemPrompt,
    userPrompt,
    temperature,
    maxTokens,
    context
  }
}

// Fallback Enhancement for Existing Templates
export function enhanceExistingTemplate(
  originalTemplate: string,
  businessModel: BusinessModel,
  contextualIntelligence: ContextualIntelligence
): string {
  // Inject business model context into existing templates
  const modelContext = `\n\n## BUSINESS MODEL CONTEXT
This is a ${businessModel.primary} business (${businessModel.confidence}% confidence) with ${businessModel.revenueModel} revenue model.
Market Position: ${businessModel.marketPosition} | Value Chain: ${businessModel.valueChain} | Scalability: ${businessModel.scalability}
Complexity Score: ${businessModel.complexity}/100

## STRATEGIC CONTEXT
Priority: ${contextualIntelligence.strategicPriority} | Urgency: ${contextualIntelligence.urgencyLevel}
Risk Profile: ${contextualIntelligence.riskProfile} | Growth Stage: ${contextualIntelligence.growthStage}
Resource Requirements: ${contextualIntelligence.resourceRequirements}

Tailor all recommendations to this specific business model and strategic context.`
  
  return originalTemplate + modelContext
}
