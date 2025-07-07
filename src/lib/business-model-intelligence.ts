// Enhanced Business Model Intelligence System
// Replaces rigid industry classification with multi-dimensional business model analysis

export interface BusinessModel {
  primary: string
  secondary: string[]
  confidence: number
  revenueModel: string
  marketPosition: string
  valueChain: string
  scalability: string
  complexity: number
}

export interface ContextualIntelligence {
  strategicPriority: string
  marketTiming: string
  competitivePressure: string
  resourceRequirements: string
  riskProfile: string
  growthStage: string
  urgencyLevel: string
  complexityScore: number
}

export interface UniversalFramework {
  name: string
  weight: number
  focusAreas: string[]
  keyQuestions: string[]
  deliverables: string[]
}

// Business Model Classifications
export const BUSINESS_MODELS = {
  'Subscription': {
    indicators: ['subscription', 'recurring', 'monthly', 'annual', 'saas', 'membership'],
    characteristics: ['predictable revenue', 'customer retention focus', 'churn management']
  },
  'Transaction': {
    indicators: ['transaction', 'commission', 'per-sale', 'marketplace', 'platform fee'],
    characteristics: ['volume-dependent', 'payment processing', 'transaction optimization']
  },
  'Service': {
    indicators: ['consulting', 'service', 'agency', 'professional', 'done-for-you'],
    characteristics: ['time-based billing', 'expertise monetization', 'client relationships']
  },
  'Product': {
    indicators: ['product', 'manufacturing', 'retail', 'inventory', 'physical goods'],
    characteristics: ['inventory management', 'supply chain', 'physical distribution']
  },
  'Marketplace': {
    indicators: ['marketplace', 'platform', 'connect', 'network', 'two-sided'],
    characteristics: ['network effects', 'platform dynamics', 'multi-stakeholder']
  },
  'Content': {
    indicators: ['content', 'media', 'publishing', 'advertising', 'audience'],
    characteristics: ['audience building', 'content monetization', 'engagement metrics']
  },
  'Data': {
    indicators: ['data', 'analytics', 'insights', 'intelligence', 'api'],
    characteristics: ['data collection', 'analysis capabilities', 'insight generation']
  },
  'Real Estate': {
    indicators: ['real estate', 'property', 'properties', 'homes', 'houses', 'apartments', 'commercial real estate', 'residential'],
    characteristics: ['property transactions', 'market-dependent', 'location-based']
  },
  'Development': {
    indicators: ['construction', 'building projects', 'development projects', 'infrastructure'],
    characteristics: ['project cycles', 'capital intensive', 'long timelines']
  }
}

// Enhanced Business Model Detection
export function detectBusinessModel(
  projectDescription: string,
  targetAudience: string,
  coreProblem: string,
  successVision: string
): BusinessModel {
  const combinedText = `${projectDescription} ${targetAudience} ${coreProblem} ${successVision}`.toLowerCase()
  
  // Detect primary business model
  const modelScores: Record<string, number> = {}
  
  Object.entries(BUSINESS_MODELS).forEach(([model, config]) => {
    let score = 0
    config.indicators.forEach(indicator => {
      const regex = new RegExp(`\\b${indicator}\\b`, 'gi')
      const matches = combinedText.match(regex)
      if (matches) {
        score += matches.length
      }
    })
    modelScores[model] = score
  })
  
  // Get primary and secondary models
  const sortedModels = Object.entries(modelScores)
    .sort(([,a], [,b]) => b - a)
    .filter(([,score]) => score > 0)
  
  const primaryModel = sortedModels[0]?.[0] || 'Service'
  const secondaryModels = sortedModels.slice(1, 3).map(([model]) => model)
  
  // Calculate confidence based on score distribution
  const totalScore = Object.values(modelScores).reduce((sum, score) => sum + score, 0)
  const primaryScore = modelScores[primaryModel] || 0
  const confidence = totalScore > 0 ? Math.round((primaryScore / totalScore) * 100) : 50
  
  // Detect market position with better logic
  let marketPosition = 'B2C' // default
  
  // B2B indicators
  const b2bIndicators = ['business', 'enterprise', 'company', 'organization', 'corporate', 'businesses', 'firms', 'agencies']
  const b2bScore = b2bIndicators.filter(indicator => combinedText.includes(indicator)).length
  
  // B2C indicators  
  const b2cIndicators = ['consumer', 'individual', 'personal', 'customer', 'user', 'homeowner', 'buyer', 'people']
  const b2cScore = b2cIndicators.filter(indicator => combinedText.includes(indicator)).length
  
  // Platform/Marketplace indicators
  const platformIndicators = ['platform', 'marketplace', 'connect', 'network', 'ecosystem']
  const platformScore = platformIndicators.filter(indicator => combinedText.includes(indicator)).length
  
  if (platformScore > 0) {
    marketPosition = 'Platform'
  } else if (b2bScore > b2cScore) {
    marketPosition = 'B2B'
  } else {
    marketPosition = 'B2C'
  }
  
  // Special case for real estate - usually B2C unless explicitly B2B
  if (primaryModel === 'Real Estate') {
    if (combinedText.includes('commercial') || combinedText.includes('business') || combinedText.includes('enterprise')) {
      marketPosition = 'B2B'
    } else {
      marketPosition = 'B2C'
    }
  }
  
  // Detect value chain position
  const valueChains = {
    'Creator': ['create', 'develop', 'build', 'manufacture', 'produce'],
    'Aggregator': ['aggregate', 'collect', 'curate', 'organize', 'consolidate'],
    'Disruptor': ['disrupt', 'revolutionize', 'transform', 'innovate', 'change'],
    'Optimizer': ['optimize', 'improve', 'enhance', 'streamline', 'efficiency']
  }
  
  let valueChain = 'Creator' // default
  Object.entries(valueChains).forEach(([position, indicators]) => {
    indicators.forEach(indicator => {
      if (combinedText.includes(indicator)) {
        valueChain = position
      }
    })
  })
  
  // Determine scalability
  const scalabilityIndicators = {
    'Local': ['local', 'neighborhood', 'community', 'nearby'],
    'Regional': ['regional', 'state', 'area', 'territory'],
    'National': ['national', 'country', 'nationwide'],
    'Global': ['global', 'international', 'worldwide', 'universal']
  }
  
  let scalability = 'Regional' // default
  Object.entries(scalabilityIndicators).forEach(([scale, indicators]) => {
    indicators.forEach(indicator => {
      if (combinedText.includes(indicator)) {
        scalability = scale
      }
    })
  })
  
  // Calculate complexity score
  const complexity = calculateComplexityScore(primaryModel, marketPosition, valueChain, combinedText)
  
  return {
    primary: primaryModel,
    secondary: secondaryModels,
    confidence,
    revenueModel: getRevenueModel(primaryModel),
    marketPosition,
    valueChain,
    scalability,
    complexity
  }
}

function getRevenueModel(businessModel: string): string {
  const revenueMapping: Record<string, string> = {
    'Subscription': 'Recurring Revenue',
    'Transaction': 'Transaction-based',
    'Service': 'Time/Project-based',
    'Product': 'Unit Sales',
    'Marketplace': 'Commission/Fees',
    'Content': 'Advertising/Subscription',
    'Data': 'Licensing/API',
    'Real Estate': 'Commission/Transaction-based',
    'Development': 'Project-based'
  }
  return revenueMapping[businessModel] || 'Mixed Revenue'
}

function calculateComplexityScore(
  primaryModel: string,
  marketPosition: string,
  valueChain: string,
  text: string
): number {
  let score = 30 // base score
  
  // Model complexity
  const modelComplexity: Record<string, number> = {
    'Service': 20,
    'Product': 30,
    'Subscription': 35,
    'Transaction': 40,
    'Content': 45,
    'Data': 50,
    'Marketplace': 70,
    'Real Estate': 60,
    'Development': 75
  }
  score += modelComplexity[primaryModel] || 30
  
  // Market position complexity
  const positionComplexity: Record<string, number> = {
    'B2C': 0,
    'B2B': 10,
    'Platform': 20
  }
  score += positionComplexity[marketPosition] || 0
  
  // Regulatory indicators
  const regulatoryKeywords = ['compliance', 'regulation', 'legal', 'permit', 'license', 'approval']
  regulatoryKeywords.forEach(keyword => {
    if (text.includes(keyword)) score += 5
  })
  
  // Technical complexity indicators
  const techKeywords = ['ai', 'machine learning', 'blockchain', 'api', 'integration', 'platform']
  techKeywords.forEach(keyword => {
    if (text.includes(keyword)) score += 3
  })
  
  return Math.min(100, score)
}

// Enhanced Contextual Intelligence
export function analyzeContext(
  businessModel: BusinessModel,
  timeline: string,
  budget: string,
  additionalContext: string,
  coreProblem: string
): ContextualIntelligence {
  const combinedText = `${timeline} ${budget} ${additionalContext} ${coreProblem}`.toLowerCase()
  
  return {
    strategicPriority: detectStrategicPriority(combinedText),
    marketTiming: analyzeMarketTiming(timeline, combinedText),
    competitivePressure: assessCompetitivePressure(combinedText),
    resourceRequirements: assessResourceRequirements(businessModel, budget),
    riskProfile: assessRiskProfile(businessModel, timeline, budget),
    growthStage: detectGrowthStage(combinedText),
    urgencyLevel: detectUrgencyLevel(timeline, combinedText),
    complexityScore: businessModel.complexity
  }
}

function detectStrategicPriority(text: string): string {
  const priorities = {
    'Market Entry': ['launch', 'enter', 'start', 'begin', 'new market'],
    'Growth & Scaling': ['grow', 'scale', 'expand', 'increase', 'more customers'],
    'Product Development': ['develop', 'build', 'create', 'feature', 'product'],
    'Fundraising': ['funding', 'investment', 'capital', 'investor', 'raise'],
    'Optimization': ['optimize', 'improve', 'better', 'efficiency', 'performance'],
    'Market Validation': ['validate', 'test', 'proof', 'market fit', 'demand']
  }
  
  let maxScore = 0
  let topPriority = 'Market Entry'
  
  Object.entries(priorities).forEach(([priority, keywords]) => {
    let score = 0
    keywords.forEach(keyword => {
      if (text.includes(keyword)) score++
    })
    if (score > maxScore) {
      maxScore = score
      topPriority = priority
    }
  })
  
  return topPriority
}

function analyzeMarketTiming(timeline: string, text: string): string {
  const urgentIndicators = ['now', 'immediately', 'urgent', 'asap', 'quickly']
  const isUrgent = urgentIndicators.some(indicator => text.includes(indicator))
  
  if (isUrgent) return 'Immediate Window'
  if (timeline.includes('1–3 months')) return 'Short-term Opportunity'
  if (timeline.includes('3–6 months')) return 'Medium-term Planning'
  return 'Long-term Strategy'
}

function assessCompetitivePressure(text: string): string {
  const competitiveIndicators = {
    'High': ['saturated', 'crowded', 'competitive', 'many competitors', 'established players'],
    'Moderate': ['some competition', 'competitive', 'market players'],
    'Low': ['new market', 'innovative', 'first', 'unique', 'no competition']
  }
  
  for (const [level, indicators] of Object.entries(competitiveIndicators)) {
    if (indicators.some(indicator => text.includes(indicator))) {
      return level
    }
  }
  
  return 'Moderate'
}

function assessResourceRequirements(businessModel: BusinessModel, budget: string): string {
  const budgetLevel = budget.includes('$50K+') ? 'High' :
                    budget.includes('$25K') ? 'Medium' :
                    budget.includes('$10K') ? 'Low' : 'Very Low'
  
  const modelRequirements: Record<string, string> = {
    'Development': 'Very High',
    'Marketplace': 'High', 
    'Product': 'High',
    'Data': 'Medium',
    'Subscription': 'Medium',
    'Service': 'Low',
    'Content': 'Low',
    'Transaction': 'Medium'
  }
  
  const modelRequirement = modelRequirements[businessModel.primary] || 'Medium'
  
  if (budgetLevel === 'High' && modelRequirement === 'Very High') return 'Well-Resourced'
  if (budgetLevel === 'Very Low' && modelRequirement === 'Very High') return 'Under-Resourced'
  return 'Adequately Resourced'
}

function assessRiskProfile(businessModel: BusinessModel, timeline: string, budget: string): string {
  let riskScore = businessModel.complexity * 0.3
  
  if (timeline.includes('now') || timeline.includes('immediately')) riskScore += 20
  if (budget.includes('<$10K')) riskScore += 15
  
  const modelRisk: Record<string, number> = {
    'Development': 25, 'Marketplace': 20, 'Data': 15, 'Product': 15,
    'Subscription': 10, 'Service': 5, 'Content': 10, 'Transaction': 12
  }
  
  riskScore += modelRisk[businessModel.primary] || 10
  
  if (riskScore > 70) return 'High Risk'
  if (riskScore > 40) return 'Moderate Risk'
  return 'Low Risk'
}

function detectGrowthStage(text: string): string {
  const stageIndicators = {
    'Idea Stage': ['idea', 'concept', 'thinking about', 'considering'],
    'Pre-Launch': ['planning', 'preparing', 'developing', 'building'],
    'Early Stage': ['launched', 'started', 'beginning', 'early customers'],
    'Growth Stage': ['growing', 'scaling', 'expanding', 'more customers'],
    'Mature Stage': ['established', 'mature', 'optimizing', 'improving']
  }
  
  for (const [stage, indicators] of Object.entries(stageIndicators)) {
    if (indicators.some(indicator => text.includes(indicator))) {
      return stage
    }
  }
  
  return 'Pre-Launch'
}

function detectUrgencyLevel(timeline: string, text: string): string {
  const urgentKeywords = ['urgent', 'immediately', 'asap', 'quickly', 'fast']
  const hasUrgentKeywords = urgentKeywords.some(keyword => text.includes(keyword))
  
  if (timeline.includes('now') || hasUrgentKeywords) return 'High Urgency'
  if (timeline.includes('1–3 months')) return 'Moderate Urgency'
  return 'Low Urgency'
}

// Universal Strategic Frameworks
export const UNIVERSAL_FRAMEWORKS: Record<string, UniversalFramework> = {
  'Market Opportunity': {
    name: 'Market Opportunity Framework',
    weight: 0,
    focusAreas: [
      'Total Addressable Market (TAM) analysis',
      'Market timing and trend assessment',
      'Competitive landscape mapping',
      'Customer demand validation'
    ],
    keyQuestions: [
      'What is the size and growth rate of the target market?',
      'What market trends support this opportunity?',
      'Who are the key competitors and what gaps exist?',
      'How strong is customer demand and willingness to pay?'
    ],
    deliverables: [
      'Market size and opportunity assessment',
      'Competitive positioning analysis',
      'Market timing evaluation',
      'Customer demand validation strategy'
    ]
  },
  'Value Proposition': {
    name: 'Value Proposition Framework',
    weight: 0,
    focusAreas: [
      'Jobs-to-be-done analysis',
      'Differentiation strategy',
      'Pricing optimization',
      'Value hypothesis testing'
    ],
    keyQuestions: [
      'What job is the customer hiring your solution to do?',
      'How does your solution differ from alternatives?',
      'What is the optimal pricing strategy?',
      'How will you test and validate your value proposition?'
    ],
    deliverables: [
      'Value proposition canvas',
      'Differentiation strategy',
      'Pricing model recommendations',
      'Value validation testing plan'
    ]
  },
  'Go-to-Market': {
    name: 'Go-to-Market Framework',
    weight: 0,
    focusAreas: [
      'Customer acquisition strategy',
      'Channel optimization',
      'Product-market fit validation',
      'Growth engine design'
    ],
    keyQuestions: [
      'How will you acquire and retain customers?',
      'What channels will be most effective?',
      'How will you achieve product-market fit?',
      'What is your sustainable growth engine?'
    ],
    deliverables: [
      'Customer acquisition strategy',
      'Channel strategy and optimization',
      'Product-market fit metrics',
      'Growth engine blueprint'
    ]
  },
  'Execution': {
    name: 'Execution Framework',
    weight: 0,
    focusAreas: [
      'Resource allocation optimization',
      'Risk assessment and mitigation',
      'Milestone planning',
      'Success metrics definition'
    ],
    keyQuestions: [
      'How should resources be allocated for maximum impact?',
      'What are the key risks and how can they be mitigated?',
      'What are the critical milestones and timeline?',
      'How will success be measured and tracked?'
    ],
    deliverables: [
      'Resource allocation plan',
      'Risk mitigation strategy',
      'Milestone roadmap',
      'Success metrics dashboard'
    ]
  }
}

// Framework Selection Logic
export function selectFrameworks(
  businessModel: BusinessModel,
  context: ContextualIntelligence
): UniversalFramework[] {
  const frameworks = { ...UNIVERSAL_FRAMEWORKS }
  
  // Weight frameworks based on business context
  if (context.strategicPriority === 'Market Entry') {
    frameworks['Market Opportunity'].weight = 0.4
    frameworks['Value Proposition'].weight = 0.3
    frameworks['Go-to-Market'].weight = 0.2
    frameworks['Execution'].weight = 0.1
  } else if (context.strategicPriority === 'Fundraising') {
    frameworks['Market Opportunity'].weight = 0.3
    frameworks['Value Proposition'].weight = 0.2
    frameworks['Execution'].weight = 0.3
    frameworks['Go-to-Market'].weight = 0.2
  } else if (context.strategicPriority === 'Product Development') {
    frameworks['Value Proposition'].weight = 0.4
    frameworks['Execution'].weight = 0.3
    frameworks['Market Opportunity'].weight = 0.2
    frameworks['Go-to-Market'].weight = 0.1
  } else if (context.strategicPriority === 'Growth & Scaling') {
    frameworks['Go-to-Market'].weight = 0.4
    frameworks['Execution'].weight = 0.3
    frameworks['Market Opportunity'].weight = 0.2
    frameworks['Value Proposition'].weight = 0.1
  } else {
    // Default balanced weighting
    frameworks['Market Opportunity'].weight = 0.25
    frameworks['Value Proposition'].weight = 0.25
    frameworks['Go-to-Market'].weight = 0.25
    frameworks['Execution'].weight = 0.25
  }
  
  // Adjust for business model complexity
  if (businessModel.complexity > 70) {
    frameworks['Execution'].weight += 0.1
    frameworks['Market Opportunity'].weight -= 0.05
    frameworks['Go-to-Market'].weight -= 0.05
  }
  
  // Adjust for urgency
  if (context.urgencyLevel === 'High Urgency') {
    frameworks['Execution'].weight += 0.15
    frameworks['Go-to-Market'].weight += 0.1
    frameworks['Market Opportunity'].weight -= 0.15
    frameworks['Value Proposition'].weight -= 0.1
  }
  
  return Object.values(frameworks).sort((a, b) => b.weight - a.weight)
}
 