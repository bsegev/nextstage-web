// NextStage Methodology Framework
// Core strategic framework and industry-specific templates for AI brief generation

export interface NextStageFramework {
  convergenceCycle: string[]
  coreServices: string[]
  differentiators: string[]
  speedAdvantage: string
}

export interface IndustryTemplate {
  industry: string
  commonChallenges: string[]
  keyMetrics: string[]
  recommendedServices: string[]
  timelineConsiderations: string
  budgetGuidance: string
}

// NextStage Core Framework
export const NEXTSTAGE_FRAMEWORK: NextStageFramework = {
  convergenceCycle: [
    "Strategy: Market positioning and business model optimization",
    "Design: Brand identity and user experience systems", 
    "Technology: Product development and AI integration"
  ],
  coreServices: [
    "Market Entry Accelerator",
    "Scale-Up Accelerator", 
    "Fundraising Strategy Suite",
    "AI-First Advantage",
    "Brand Foundation",
    "Digital Brand System",
    "Product Launch Accelerator",
    "Customer Acquisition Engine"
  ],
  differentiators: [
    "4-6 weeks delivery vs industry standard 4-6 months",
    "Embedded partnership - side-by-side collaboration",
    "Real deliverables, not just presentations",
    "Strategy + Design + Technology convergence"
  ],
  speedAdvantage: "Startup velocity with enterprise quality"
}

// Industry-Specific Templates
export const INDUSTRY_TEMPLATES: Record<string, IndustryTemplate> = {
  "Fintech": {
    industry: "Fintech",
    commonChallenges: [
      "Regulatory compliance complexity",
      "Building trust with financial data",
      "Competitive market with high user acquisition costs",
      "Technical infrastructure for financial transactions"
    ],
    keyMetrics: [
      "Customer Acquisition Cost (CAC)",
      "Monthly Recurring Revenue (MRR)",
      "Transaction volume and frequency",
      "Regulatory compliance score"
    ],
    recommendedServices: [
      "Market Entry Accelerator for regulatory landscape",
      "Brand Foundation for trust building",
      "AI Integration Suite for fraud detection",
      "Customer Acquisition Engine for user growth"
    ],
    timelineConsiderations: "Regulatory approval can add 2-4 months to timeline",
    budgetGuidance: "Allocate 20-30% budget for compliance and security infrastructure"
  },
  
  "SaaS/Software": {
    industry: "SaaS/Software",
    commonChallenges: [
      "Product-market fit validation",
      "Subscription model optimization",
      "User onboarding and retention",
      "Competitive differentiation in crowded market"
    ],
    keyMetrics: [
      "Monthly Recurring Revenue (MRR)",
      "Customer Lifetime Value (CLV)",
      "Churn rate and retention",
      "Product-market fit score"
    ],
    recommendedServices: [
      "Product Launch Accelerator for MVP development",
      "Growth & Retention System for user acquisition",
      "AI-First Advantage for product differentiation",
      "Digital Brand System for market positioning"
    ],
    timelineConsiderations: "MVP development typically 6-12 weeks, market validation ongoing",
    budgetGuidance: "Focus 40% on product development, 30% on user acquisition, 30% on infrastructure"
  },

  "E-commerce": {
    industry: "E-commerce",
    commonChallenges: [
      "Customer acquisition in competitive landscape",
      "Inventory management and fulfillment",
      "Brand differentiation and loyalty",
      "Multi-channel marketing optimization"
    ],
    keyMetrics: [
      "Customer Acquisition Cost (CAC)",
      "Average Order Value (AOV)",
      "Conversion rate optimization",
      "Customer lifetime value"
    ],
    recommendedServices: [
      "Customer Acquisition Engine for traffic generation",
      "Brand Amplification Engine for differentiation",
      "AI Integration Suite for personalization",
      "Complete Growth Ecosystem for scaling"
    ],
    timelineConsiderations: "Seasonal considerations critical for launch timing",
    budgetGuidance: "Allocate 50% to marketing and customer acquisition, 25% to inventory, 25% to platform"
  },

  "Healthcare": {
    industry: "Healthcare",
    commonChallenges: [
      "HIPAA compliance and data security",
      "Long sales cycles with institutions",
      "Clinical validation and evidence generation",
      "Complex stakeholder ecosystem"
    ],
    keyMetrics: [
      "Clinical outcomes and efficacy",
      "Regulatory compliance score",
      "Provider adoption rate",
      "Patient engagement metrics"
    ],
    recommendedServices: [
      "Market Entry Accelerator for regulatory navigation",
      "Brand Foundation for trust and credibility",
      "Custom Software Suite for HIPAA compliance",
      "Fundraising Strategy Suite for specialized investors"
    ],
    timelineConsiderations: "Clinical validation can extend timeline 6-12 months",
    budgetGuidance: "Reserve 30-40% for regulatory compliance and clinical studies"
  },

  "AI/ML": {
    industry: "AI/ML",
    commonChallenges: [
      "Technical complexity communication to market",
      "Data quality and training requirements",
      "Ethical AI and bias considerations",
      "Rapid technology evolution and competition"
    ],
    keyMetrics: [
      "Model accuracy and performance",
      "Data quality and coverage",
      "User adoption and engagement",
      "Technical infrastructure costs"
    ],
    recommendedServices: [
      "AI-First Advantage for technical positioning",
      "Digital Brand System for market education",
      "Product Launch Accelerator for MVP development",
      "Innovation Leadership for thought leadership"
    ],
    timelineConsiderations: "Model training and validation typically 4-8 weeks",
    budgetGuidance: "Invest heavily in data infrastructure (30%) and technical talent (40%)"
  },

  "Real Estate": {
    industry: "Real Estate",
    commonChallenges: [
      "Market timing and economic sensitivity",
      "High capital requirements and financing",
      "Regulatory compliance and zoning",
      "Long development and sales cycles"
    ],
    keyMetrics: [
      "Property acquisition cost per unit",
      "Development timeline to market",
      "Sales velocity and pricing",
      "Return on investment (ROI)"
    ],
    recommendedServices: [
      "Market Entry Accelerator for location analysis",
      "Brand Foundation for developer credibility",
      "Fundraising Strategy Suite for capital raising",
      "Customer Acquisition Engine for sales and marketing"
    ],
    timelineConsiderations: "Development projects typically 12-24 months, market timing critical",
    budgetGuidance: "Allocate 60% to acquisition/development, 20% to marketing, 20% to operations"
  },

  "Other": {
    industry: "General",
    commonChallenges: [
      "Market positioning and differentiation",
      "Customer acquisition and retention",
      "Operational efficiency and scaling",
      "Competitive landscape navigation"
    ],
    keyMetrics: [
      "Revenue growth rate",
      "Customer acquisition metrics",
      "Operational efficiency ratios",
      "Market share indicators"
    ],
    recommendedServices: [
      "Market Entry Accelerator for positioning",
      "Scale-Up Accelerator for growth",
      "Customer Acquisition Engine for user growth",
      "Brand Foundation for differentiation"
    ],
    timelineConsiderations: "Standard development cycles apply",
    budgetGuidance: "Balanced allocation across strategy, execution, and marketing"
  }
}

// Industry Classification Function
export function classifyIndustry(projectDescription: string, audience: string, problem: string): string {
  const text = `${projectDescription} ${audience} ${problem}`.toLowerCase()
  
  if (text.includes('fintech') || text.includes('banking') || text.includes('payment') || text.includes('financial')) {
    return 'Fintech'
  } else if (text.includes('saas') || text.includes('software') || text.includes('platform') || text.includes('subscription')) {
    return 'SaaS/Software'
  } else if (text.includes('ecommerce') || text.includes('retail') || text.includes('shopping') || text.includes('marketplace')) {
    return 'E-commerce'
  } else if (text.includes('healthcare') || text.includes('medical') || text.includes('health') || text.includes('clinical')) {
    return 'Healthcare'
  } else if (text.includes('ai') || text.includes('machine learning') || text.includes('artificial intelligence') || text.includes('ml')) {
    return 'AI/ML'
  } else if (text.includes('real estate') || text.includes('property') || text.includes('development') || text.includes('construction') || text.includes('building') || text.includes('residential') || text.includes('commercial')) {
    return 'Real Estate'
  } else {
    return 'Other'
  }
}

// Budget and Timeline Intelligence
export function analyzeBudgetAndTimeline(budget: string, timeline: string, industry: string) {
  const budgetAnalysis = {
    range: budget,
    isRealistic: true,
    recommendations: [] as string[]
  }
  
  const timelineAnalysis = {
    range: timeline,
    isRealistic: true,
    considerations: [] as string[]
  }

  // Budget reality check
  if (budget.includes('<$10K') && timeline.includes('now')) {
    budgetAnalysis.isRealistic = false
    budgetAnalysis.recommendations.push("Consider phased approach starting with strategy and MVP")
  }

  // Industry-specific timeline considerations
  const template = INDUSTRY_TEMPLATES[industry] || INDUSTRY_TEMPLATES['Other']
  timelineAnalysis.considerations.push(template.timelineConsiderations)
  
  return { budgetAnalysis, timelineAnalysis }
}

// NextStage Service Recommendations
export function recommendNextStageServices(industry: string, budget: string, timeline: string): string[] {
  const template = INDUSTRY_TEMPLATES[industry] || INDUSTRY_TEMPLATES['Other']
  let recommendations = [...template.recommendedServices]
  
  // Adjust based on budget and timeline
  if (budget.includes('<$10K')) {
    recommendations = recommendations.slice(0, 2) // Focus on core services
  } else if (budget.includes('$50K+')) {
    recommendations.push("Complete Growth Ecosystem", "Innovation Leadership")
  }
  
  if (timeline.includes('now') || timeline.includes('1–3 months')) {
    recommendations.unshift("Market Entry Accelerator") // Prioritize quick wins
  }
  
  return recommendations.slice(0, 4) // Limit to top 4 recommendations
} 