// NextStage Analytics Module
// Track brief generation patterns, template effectiveness, and client engagement

import { ClientProfile } from './openai'

export interface BriefGenerationEvent {
  timestamp: Date
  clientProfile: ClientProfile
  templateUsed: string
  generationTime: number
  success: boolean
  errorMessage?: string
  wordCount?: number
  sectionCount?: number
}

export interface ClientEngagementMetrics {
  clientId: string
  industry: string
  budgetRange: string
  timelineUrgency: string
  templatePreference: string
  engagementScore: number
  conversionProbability: number
  followUpActions: string[]
}

export interface TemplatePerformanceMetrics {
  templateName: string
  usageCount: number
  successRate: number
  averageGenerationTime: number
  averageWordCount: number
  clientSatisfactionScore: number
  conversionRate: number
  mostCommonIndustries: string[]
}

// In-memory analytics store (would be replaced with database in production)
let briefGenerationEvents: BriefGenerationEvent[] = []
let clientEngagementData: ClientEngagementMetrics[] = []

// Track brief generation event
export function trackBriefGeneration(event: BriefGenerationEvent): void {
  briefGenerationEvents.push(event)
  
  // Update client engagement metrics
  updateClientEngagement(event)
  
  // Log for development
  console.log('Brief generation tracked:', {
    template: event.templateUsed,
    industry: event.clientProfile.industry,
    success: event.success,
    generationTime: event.generationTime
  })
}

// Calculate client engagement score
function calculateEngagementScore(profile: ClientProfile): number {
  let score = 50 // Base score
  
  // Budget indicators
  if (profile.budget.includes('$50K+')) score += 20
  else if (profile.budget.includes('$25K-$50K')) score += 15
  else if (profile.budget.includes('$10K-$25K')) score += 10
  else if (profile.budget.includes('<$10K')) score += 5
  
  // Timeline urgency
  if (profile.timeline.includes('now') || profile.timeline.includes('immediately')) score += 15
  else if (profile.timeline.includes('1–3 months')) score += 10
  else if (profile.timeline.includes('3–6 months')) score += 5
  
  // Industry complexity
  if (['Fintech', 'Healthcare', 'AI/ML'].includes(profile.industry)) score += 10
  else if (['SaaS/Software', 'E-commerce'].includes(profile.industry)) score += 5
  
  // Detail quality
  if (profile.additionalContext.length > 100) score += 10
  if (profile.projectDescription.length > 50) score += 5
  
  return Math.min(100, score)
}

// Calculate conversion probability
function calculateConversionProbability(profile: ClientProfile, engagementScore: number): number {
  let probability = engagementScore * 0.6 // Base from engagement
  
  // Industry conversion rates (based on typical consulting patterns)
  const industryMultipliers = {
    'Fintech': 1.2,
    'Healthcare': 1.1,
    'AI/ML': 1.3,
    'SaaS/Software': 1.0,
    'E-commerce': 0.9,
    'Other': 0.8
  }
  
  probability *= industryMultipliers[profile.industry as keyof typeof industryMultipliers] || 0.8
  
  // Budget impact
  if (profile.budget.includes('$50K+')) probability *= 1.3
  else if (profile.budget.includes('<$10K')) probability *= 0.7
  
  return Math.min(95, Math.max(5, probability))
}

// Update client engagement metrics
function updateClientEngagement(event: BriefGenerationEvent): void {
  const profile = event.clientProfile
  const clientId = `${profile.name}_${profile.industry}_${Date.now()}`
  
  const engagementScore = calculateEngagementScore(profile)
  const conversionProbability = calculateConversionProbability(profile, engagementScore)
  
  const engagement: ClientEngagementMetrics = {
    clientId,
    industry: profile.industry,
    budgetRange: profile.budget,
    timelineUrgency: profile.timeline,
    templatePreference: event.templateUsed,
    engagementScore,
    conversionProbability,
    followUpActions: generateFollowUpActions(profile, conversionProbability)
  }
  
  clientEngagementData.push(engagement)
}

// Generate recommended follow-up actions
function generateFollowUpActions(profile: ClientProfile, conversionProbability: number): string[] {
  const actions: string[] = []
  
  if (conversionProbability > 70) {
    actions.push('Priority follow-up within 24 hours')
    actions.push('Schedule strategy call')
    actions.push('Prepare custom proposal')
  } else if (conversionProbability > 50) {
    actions.push('Follow-up within 48 hours')
    actions.push('Send relevant case studies')
    actions.push('Offer free consultation')
  } else if (conversionProbability > 30) {
    actions.push('Add to nurture sequence')
    actions.push('Send industry insights')
    actions.push('Follow-up in 1 week')
  } else {
    actions.push('Add to general newsletter')
    actions.push('Follow-up in 2 weeks')
  }
  
  // Industry-specific actions
  if (profile.industry === 'Fintech') {
    actions.push('Share regulatory compliance resources')
  } else if (profile.industry === 'Healthcare') {
    actions.push('Provide HIPAA compliance checklist')
  } else if (profile.industry === 'AI/ML') {
    actions.push('Share AI implementation case studies')
  }
  
  return actions
}

// Get analytics dashboard data
export function getAnalyticsDashboard(): {
  totalBriefs: number
  successRate: number
  averageGenerationTime: number
  industryBreakdown: Record<string, number>
  templatePerformance: TemplatePerformanceMetrics[]
  highValueClients: ClientEngagementMetrics[]
  conversionFunnel: {
    totalSubmissions: number
    highEngagement: number
    qualifiedLeads: number
    estimatedConversions: number
  }
} {
  const totalBriefs = briefGenerationEvents.length
  const successfulBriefs = briefGenerationEvents.filter(e => e.success).length
  const successRate = totalBriefs > 0 ? (successfulBriefs / totalBriefs) * 100 : 0
  
  const averageGenerationTime = briefGenerationEvents.reduce((sum, e) => sum + e.generationTime, 0) / totalBriefs || 0
  
  // Industry breakdown
  const industryBreakdown: Record<string, number> = {}
  briefGenerationEvents.forEach(event => {
    const industry = event.clientProfile.industry
    industryBreakdown[industry] = (industryBreakdown[industry] || 0) + 1
  })
  
  // Template performance
  const templateStats: Record<string, { count: number, successCount: number, totalTime: number }> = {}
  briefGenerationEvents.forEach(event => {
    const template = event.templateUsed
    if (!templateStats[template]) {
      templateStats[template] = { count: 0, successCount: 0, totalTime: 0 }
    }
    templateStats[template].count++
    if (event.success) templateStats[template].successCount++
    templateStats[template].totalTime += event.generationTime
  })
  
  const templatePerformance: TemplatePerformanceMetrics[] = Object.entries(templateStats).map(([name, stats]) => ({
    templateName: name,
    usageCount: stats.count,
    successRate: (stats.successCount / stats.count) * 100,
    averageGenerationTime: stats.totalTime / stats.count,
    averageWordCount: 0, // Would be calculated from actual briefs
    clientSatisfactionScore: 0, // Would be from feedback
    conversionRate: 0, // Would be from follow-up tracking
    mostCommonIndustries: [] // Would be calculated from industry data
  }))
  
  // High-value clients
  const highValueClients = clientEngagementData
    .filter(client => client.conversionProbability > 60)
    .sort((a, b) => b.conversionProbability - a.conversionProbability)
    .slice(0, 10)
  
  // Conversion funnel
  const totalSubmissions = clientEngagementData.length
  const highEngagement = clientEngagementData.filter(c => c.engagementScore > 70).length
  const qualifiedLeads = clientEngagementData.filter(c => c.conversionProbability > 50).length
  const estimatedConversions = clientEngagementData.filter(c => c.conversionProbability > 70).length
  
  return {
    totalBriefs,
    successRate,
    averageGenerationTime,
    industryBreakdown,
    templatePerformance,
    highValueClients,
    conversionFunnel: {
      totalSubmissions,
      highEngagement,
      qualifiedLeads,
      estimatedConversions
    }
  }
}

// Get insights for business intelligence
export function getBusinessIntelligence(): {
  topPerformingIndustries: string[]
  optimalTemplateStrategy: string
  budgetTrendAnalysis: string
  timelinePressureInsights: string
  recommendedImprovements: string[]
} {
  const dashboard = getAnalyticsDashboard()
  
  // Top performing industries by conversion probability
  const industryConversions: Record<string, number[]> = {}
  clientEngagementData.forEach(client => {
    if (!industryConversions[client.industry]) {
      industryConversions[client.industry] = []
    }
    industryConversions[client.industry].push(client.conversionProbability)
  })
  
  const topPerformingIndustries = Object.entries(industryConversions)
    .map(([industry, probabilities]) => ({
      industry,
      avgConversion: probabilities.reduce((sum, p) => sum + p, 0) / probabilities.length
    }))
    .sort((a, b) => b.avgConversion - a.avgConversion)
    .slice(0, 3)
    .map(item => item.industry)
  
  // Optimal template strategy
  const bestTemplate = dashboard.templatePerformance
    .sort((a, b) => b.successRate - a.successRate)[0]
  const optimalTemplateStrategy = bestTemplate 
    ? `${bestTemplate.templateName} shows highest success rate (${bestTemplate.successRate.toFixed(1)}%)`
    : 'Insufficient data for template optimization'
  
  // Budget trend analysis
  const budgetRanges = clientEngagementData.map(c => c.budgetRange)
  const mostCommonBudget = budgetRanges.reduce((a, b, i, arr) => 
    arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b
  )
  const budgetTrendAnalysis = `Most common budget range: ${mostCommonBudget}`
  
  // Timeline pressure insights
  const urgentTimelines = clientEngagementData.filter(c => 
    c.timelineUrgency.includes('now') || c.timelineUrgency.includes('immediately')
  ).length
  const timelinePressureInsights = `${urgentTimelines} clients (${((urgentTimelines / clientEngagementData.length) * 100).toFixed(1)}%) have urgent timelines`
  
  // Recommended improvements
  const recommendedImprovements: string[] = []
  
  if (dashboard.successRate < 90) {
    recommendedImprovements.push('Improve prompt engineering for higher success rates')
  }
  
  if (dashboard.averageGenerationTime > 30000) {
    recommendedImprovements.push('Optimize API calls for faster generation times')
  }
  
  if (dashboard.conversionFunnel.estimatedConversions / dashboard.conversionFunnel.totalSubmissions < 0.3) {
    recommendedImprovements.push('Enhance follow-up strategies for better conversion')
  }
  
  if (Object.keys(dashboard.industryBreakdown).length < 3) {
    recommendedImprovements.push('Expand marketing to attract more diverse industries')
  }
  
  return {
    topPerformingIndustries,
    optimalTemplateStrategy,
    budgetTrendAnalysis,
    timelinePressureInsights,
    recommendedImprovements
  }
}

// Export analytics data for external systems
export function exportAnalyticsData(): {
  briefGenerationEvents: BriefGenerationEvent[]
  clientEngagementData: ClientEngagementMetrics[]
  dashboard: ReturnType<typeof getAnalyticsDashboard>
  businessIntelligence: ReturnType<typeof getBusinessIntelligence>
} {
  return {
    briefGenerationEvents,
    clientEngagementData,
    dashboard: getAnalyticsDashboard(),
    businessIntelligence: getBusinessIntelligence()
  }
} 