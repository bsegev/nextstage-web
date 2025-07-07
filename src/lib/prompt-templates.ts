// NextStage Prompt Templates - Enhanced intelligent brief generation
// Structured template system with contextual intelligence

import { ClientProfile } from './types'
import { INDUSTRY_TEMPLATES } from './nextstage-methodology'

export interface PromptTemplate {
  name: string
  description: string
  systemPrompt: string
  userPromptBuilder: (profile: ClientProfile) => string
  temperature: number
  maxTokens: number
}

// Base NextStage Brand Voice and Methodology
const NEXTSTAGE_BRAND_VOICE = `
NEXTSTAGE BRAND VOICE & METHODOLOGY:
- Harvey Specter confidence: Sophisticated solutions delivered with certainty
- Jason Bourne efficiency: Precise, rapid execution with no wasted motion  
- Rick Rubin insight: Strip to essence, reveal what's already there
- Henry V partnership: Embedded collaboration, shared ownership
- Hemingway clarity: Simple language that cuts through complexity

CORE METHODOLOGY - THE CONVERGENCE CYCLE:
Strategy + Design + Technology working as one integrated system, delivered in 4-6 weeks vs industry standard 4-6 months.

DIFFERENTIATORS:
• Embedded partnership - side-by-side collaboration
• Real deliverables, not just presentations  
• Startup velocity with enterprise quality
• Industry-specific intelligence and execution
`

// Strategic Brief Templates
export const PROMPT_TEMPLATES: Record<string, PromptTemplate> = {
  
  // Standard comprehensive strategic brief
  COMPREHENSIVE_STRATEGIC_BRIEF: {
    name: "Comprehensive Strategic Brief",
    description: "Full strategic analysis with industry intelligence and NextStage methodology",
    systemPrompt: `You are a senior strategy consultant at NextStage, delivering breakthrough results through the convergence of strategy, design, and technology.

${NEXTSTAGE_BRAND_VOICE}

Your expertise includes:
- Industry-specific market intelligence and competitive analysis
- NextStage's Convergence Cycle methodology and rapid execution
- Technical feasibility assessment and risk analysis
- Strategic positioning and differentiation frameworks
- Customer acquisition and retention strategies
- Funding and investment strategy guidance

You write with confidence, clarity, and actionable specificity. Every recommendation is grounded in NextStage's proven methodology and industry best practices.`,
    
    userPromptBuilder: (profile: ClientProfile) => {
      const industryTemplate = INDUSTRY_TEMPLATES[profile.industry] || INDUSTRY_TEMPLATES['Other']
      
      return `
CLIENT STRATEGIC BRIEF REQUEST:

PROFILE:
• Name: ${profile.name}
• Industry: ${profile.industry}
• Project: ${profile.projectDescription}
• Target Audience: ${profile.targetAudience}
• Core Problem: ${profile.coreProblem}
• Success Vision: ${profile.successVision}
• Timeline: ${profile.timeline}
• Budget: ${profile.budget}
• Context: ${profile.additionalContext}

INDUSTRY INTELLIGENCE (${profile.industry}):
Key Challenges: ${industryTemplate.commonChallenges.join(', ')}
Success Metrics: ${industryTemplate.keyMetrics.join(', ')}
Timeline Factors: ${industryTemplate.timelineConsiderations}
Budget Guidance: ${industryTemplate.budgetGuidance}

BRIEF STRUCTURE:
1. Personal Message (2-3 sentences showing industry expertise)
2. Strategic Opportunity Assessment (market positioning, competitive advantage)
3. Target Market Intelligence (audience insights, acquisition strategies)
4. Problem-Solution Fit Analysis (feasibility, differentiation, validation)
5. Success Roadmap & Metrics (milestones, KPIs, risk mitigation)
6. NextStage Convergence Strategy (services, timeline, deliverables)
7. Immediate Next Steps (30/60/90-day priorities)

REQUIREMENTS:
- Demonstrate deep ${profile.industry} knowledge
- Reference NextStage's speed advantage and methodology
- Provide specific, actionable recommendations
- Include realistic timeline and budget assessments
- Show technical and market feasibility understanding

Return as JSON: {"personalMessage": "string", "sections": [{"title": "string", "content": "string", "reasoning": "string"}]}
`
    },
    temperature: 0.7,
    maxTokens: 4000
  },

  // Rapid assessment for urgent timelines
  RAPID_ASSESSMENT: {
    name: "Rapid Strategic Assessment",
    description: "Focused brief for urgent timelines and immediate decision-making",
    systemPrompt: `You are a senior strategy consultant at NextStage, specializing in rapid strategic assessments for urgent business decisions.

${NEXTSTAGE_BRAND_VOICE}

Your focus is on:
- Immediate opportunity identification and risk assessment
- Critical path analysis for rapid execution
- Resource allocation for maximum impact
- Quick wins and early validation strategies
- Urgent decision-making frameworks

You deliver concise, high-impact insights that enable immediate action while maintaining strategic depth.`,
    
    userPromptBuilder: (profile: ClientProfile) => {
      return `
URGENT STRATEGIC ASSESSMENT REQUEST:

CLIENT: ${profile.name}
INDUSTRY: ${profile.industry}
PROJECT: ${profile.projectDescription}
PROBLEM: ${profile.coreProblem}
TIMELINE: ${profile.timeline} (URGENT)
BUDGET: ${profile.budget}

RAPID ASSESSMENT FOCUS:
1. Immediate Opportunity (market window, competitive advantage)
2. Critical Success Factors (what must go right)
3. Risk Assessment (what could go wrong)
4. Resource Allocation (budget/time optimization)
5. Quick Wins (30-day immediate actions)
6. Validation Strategy (rapid market testing)

CONSTRAINTS:
- Timeline is critical - focus on speed and efficiency
- Budget optimization essential
- Need immediate actionable insights
- Risk mitigation for rapid execution

Return concise JSON: {"personalMessage": "string", "sections": [{"title": "string", "content": "string", "reasoning": "string"}]}
`
    },
    temperature: 0.6,
    maxTokens: 2500
  },

  // Fundraising-focused brief
  FUNDRAISING_STRATEGIC_BRIEF: {
    name: "Fundraising Strategic Brief",
    description: "Investment-focused analysis with investor appeal and funding strategy",
    systemPrompt: `You are a senior strategy consultant at NextStage, specializing in fundraising strategy and investor positioning.

${NEXTSTAGE_BRAND_VOICE}

Your expertise includes:
- Investor psychology and decision-making frameworks
- Fundraising timing and market conditions
- Valuation methodology and negotiation strategy
- Pitch deck strategy and storytelling
- Due diligence preparation and risk mitigation
- Post-funding execution and scaling strategies

You understand what investors want to see and how to position opportunities for maximum appeal while maintaining strategic integrity.`,
    
    userPromptBuilder: (profile: ClientProfile) => {
      return `
FUNDRAISING STRATEGIC BRIEF REQUEST:

COMPANY: ${profile.name}
INDUSTRY: ${profile.industry}
OPPORTUNITY: ${profile.projectDescription}
TARGET MARKET: ${profile.targetAudience}
PROBLEM: ${profile.coreProblem}
VISION: ${profile.successVision}
TIMELINE: ${profile.timeline}
FUNDING NEEDS: ${profile.budget}

INVESTOR FOCUS AREAS:
1. Investment Thesis (why this, why now, why this team)
2. Market Opportunity (size, growth, timing)
3. Competitive Moat (defensibility, differentiation)
4. Business Model (revenue, scalability, unit economics)
5. Funding Strategy (amount, use of funds, milestones)
6. Risk Mitigation (what could go wrong, how to prevent)
7. NextStage Partnership (how we accelerate success)

INVESTOR APPEAL REQUIREMENTS:
- Clear value proposition and market opportunity
- Realistic financial projections and milestones
- Strong competitive positioning
- Execution capability demonstration
- Risk awareness and mitigation strategies

Return JSON: {"personalMessage": "string", "sections": [{"title": "string", "content": "string", "reasoning": "string"}]}
`
    },
    temperature: 0.7,
    maxTokens: 3500
  },

  // Technical feasibility focused
  TECHNICAL_FEASIBILITY_BRIEF: {
    name: "Technical Feasibility Brief",
    description: "Technology-focused analysis with development strategy and technical roadmap",
    systemPrompt: `You are a senior strategy consultant at NextStage, specializing in technical feasibility and technology strategy.

${NEXTSTAGE_BRAND_VOICE}

Your expertise includes:
- Technical architecture and scalability assessment
- Development methodology and team structure
- Technology stack selection and integration
- AI/ML implementation and optimization
- Security, compliance, and risk management
- Technical debt and maintenance considerations

You bridge the gap between business strategy and technical execution, ensuring feasibility while maintaining ambitious goals.`,
    
    userPromptBuilder: (profile: ClientProfile) => {
      return `
TECHNICAL FEASIBILITY BRIEF REQUEST:

PROJECT: ${profile.projectDescription}
INDUSTRY: ${profile.industry} (technical requirements)
AUDIENCE: ${profile.targetAudience}
CORE PROBLEM: ${profile.coreProblem}
TIMELINE: ${profile.timeline}
BUDGET: ${profile.budget}
CONTEXT: ${profile.additionalContext}

TECHNICAL ANALYSIS FOCUS:
1. Technical Feasibility (architecture, scalability, complexity)
2. Development Strategy (methodology, team, timeline)
3. Technology Stack (recommendations, integration, costs)
4. Risk Assessment (technical debt, security, compliance)
5. Implementation Roadmap (phases, milestones, dependencies)
6. Resource Requirements (team, tools, infrastructure)
7. NextStage Technical Services (how we accelerate development)

TECHNICAL CONSIDERATIONS:
- Scalability and performance requirements
- Security and compliance needs
- Integration complexity and dependencies
- Maintenance and technical debt
- Team capabilities and skill gaps

Return JSON: {"personalMessage": "string", "sections": [{"title": "string", "content": "string", "reasoning": "string"}]}
`
    },
    temperature: 0.6,
    maxTokens: 3500
  }
}

// Template Selection Logic
export function selectOptimalTemplate(profile: ClientProfile): PromptTemplate {
  // Fundraising indicators
  if (profile.additionalContext.toLowerCase().includes('funding') || 
      profile.additionalContext.toLowerCase().includes('investor') ||
      profile.budget.includes('$50K+') ||
      profile.successVision.toLowerCase().includes('raise')) {
    return PROMPT_TEMPLATES.FUNDRAISING_STRATEGIC_BRIEF
  }
  
  // Technical complexity indicators
  if (profile.projectDescription.toLowerCase().includes('ai') ||
      profile.projectDescription.toLowerCase().includes('platform') ||
      profile.projectDescription.toLowerCase().includes('software') ||
      profile.industry === 'AI/ML' ||
      profile.industry === 'SaaS/Software') {
    return PROMPT_TEMPLATES.TECHNICAL_FEASIBILITY_BRIEF
  }
  
  // Urgent timeline indicators
  if (profile.timeline.includes('now') || 
      profile.timeline.includes('immediately') ||
      profile.timeline.includes('ASAP')) {
    return PROMPT_TEMPLATES.RAPID_ASSESSMENT
  }
  
  // Default to comprehensive
  return PROMPT_TEMPLATES.COMPREHENSIVE_STRATEGIC_BRIEF
}

// Advanced Prompt Enhancement
export function enhancePromptWithContext(basePrompt: string, profile: ClientProfile): string {
  let enhancedPrompt = basePrompt
  
  // Add competitive intelligence if available
  if (profile.additionalContext.toLowerCase().includes('competitor')) {
    enhancedPrompt += `\n\nCOMPETITIVE CONTEXT: ${profile.additionalContext}`
  }
  
  // Add urgency context
  if (profile.timeline.includes('now') || profile.timeline.includes('urgent')) {
    enhancedPrompt += `\n\nURGENCY NOTE: This is a time-sensitive opportunity requiring immediate strategic focus.`
  }
  
  // Add budget reality check
  if (profile.budget.includes('<$10K') && profile.timeline.includes('now')) {
    enhancedPrompt += `\n\nBUDGET CONSTRAINT: Limited budget requires creative, phased approach focusing on highest-impact activities.`
  }
  
  return enhancedPrompt
} 