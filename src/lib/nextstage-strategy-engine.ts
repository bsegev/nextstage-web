// NextStage Strategy Engine - Intelligent Service Recommendation System
// Analyzes user inputs to recommend NextStage services with strategic reasoning

import { UserResponse, ExtractedInfo } from './simple-conversation-agent';
import { SUBSERVICES } from './subservices';
import { SubserviceData } from './subservices/types';

export interface StrategicInsight {
  category: string;
  insight: string;
  confidence: number;
  implications: string[];
}

export interface ServiceRecommendation {
  service: SubserviceData;
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
  rationale: string;
  timeline: string;
  expectedImpact: string;
  estimatedInvestment: string;
  prerequisites?: string[];
}

export interface BusinessAnalysis {
  stage: 'Ideation' | 'MVP' | 'Growth' | 'Scale';
  maturityScore: number;
  urgency: 'Immediate' | 'Near-term' | 'Planned';
  resourceConstraints: string[];
  strategicGaps: string[];
  competitivePosition: string;
  marketReadiness: number;
}

export interface NextStageRecommendationBrief {
  personalMessage: string;
  businessAnalysis: BusinessAnalysis;
  strategicInsights: StrategicInsight[];
  serviceRecommendations: ServiceRecommendation[];
  implementationRoadmap: {
    phase: string;
    duration: string;
    services: string[];
    milestones: string[];
    investment: string;
  }[];
  reasoningProcess: {
    step: string;
    analysis: string;
    conclusion: string;
  }[];
}

export class NextStageStrategyEngine {
  private static readonly STAGE_INDICATORS = {
    ideation: ['idea', 'concept', 'thinking about', 'exploring', 'researching', 'considering'],
    mvp: ['building', 'developing', 'creating', 'launching', 'prototype', 'beta', 'first version'],
    growth: ['customers', 'revenue', 'scaling', 'growing', 'expanding', 'traction'],
    scale: ['enterprise', 'millions', 'nationwide', 'international', 'IPO', 'acquisition']
  };

  private static readonly URGENCY_INDICATORS = {
    immediate: ['urgent', 'asap', 'immediately', 'crisis', 'struggling', 'failing', 'deadline'],
    nearTerm: ['soon', 'next quarter', 'in 3 months', 'this year', 'planning'],
    planned: ['eventually', 'future', 'considering', 'exploring', 'long-term']
  };

  private static readonly PROBLEM_TO_SERVICE_MAP = {
    // Brand & Identity Issues
    'brand': ['brand-identity-design', 'brand-audit-refresh', 'pitch-sales-marketing'],
    'identity': ['brand-identity-design', 'brand-audit-refresh'],
    'logo': ['brand-identity-design', 'visual-identity-systems'],
    'messaging': ['brand-strategy-development', 'pitch-sales-marketing'],
    
    // Technical Challenges
    'website': ['mvp-development', 'platform-optimization'],
    'app': ['mvp-development', 'custom-gpt-development'],
    'technical': ['mvp-development', 'platform-optimization'],
    'automation': ['custom-gpt-development', 'workflow-automation'],
    'ai': ['custom-gpt-development', 'ai-strategy-integration'],
    
    // Marketing & Growth
    'marketing': ['digital-marketing-assessment', 'content-copywriting', 'growth-optimization'],
    'customers': ['go-to-market-strategy', 'customer-acquisition'],
    'sales': ['go-to-market-strategy', 'pitch-sales-marketing'],
    'growth': ['business-strategy-growth', 'growth-optimization'],
    'content': ['content-copywriting', 'content-systems'],
    
    // Strategy & Planning
    'strategy': ['business-strategy-growth', 'go-to-market-strategy'],
    'business model': ['business-strategy-growth', 'revenue-optimization'],
    'competition': ['competitive-analysis', 'market-positioning'],
    'market': ['go-to-market-strategy', 'market-research']
  };

  async generateStrategicBrief(
    responses: UserResponse[],
    extractedInfo: ExtractedInfo
  ): Promise<NextStageRecommendationBrief> {
    console.log('🧠 Starting NextStage Strategy Engine analysis...');
    
    // Step 1: Analyze business fundamentals
    const businessAnalysis = this.analyzeBusinessFundamentals(responses, extractedInfo);
    console.log('📊 Business analysis complete:', businessAnalysis);
    
    // Step 2: Generate strategic insights
    const strategicInsights = this.generateStrategicInsights(responses, extractedInfo, businessAnalysis);
    console.log('💡 Strategic insights generated:', strategicInsights.length);
    
    // Step 3: Intelligent service matching
    const serviceRecommendations = this.recommendServices(responses, extractedInfo, businessAnalysis);
    console.log('🎯 Service recommendations:', serviceRecommendations.length);
    
    // Step 4: Create implementation roadmap
    const implementationRoadmap = this.createImplementationRoadmap(serviceRecommendations, businessAnalysis);
    console.log('🗺️ Implementation roadmap created');
    
    // Step 5: Generate reasoning process
    const reasoningProcess = this.generateReasoningProcess(businessAnalysis, strategicInsights, serviceRecommendations);
    console.log('🔍 Reasoning process documented');
    
    // Step 6: Craft personal message
    const personalMessage = this.craftPersonalMessage(extractedInfo, businessAnalysis, serviceRecommendations);
    
    return {
      personalMessage,
      businessAnalysis,
      strategicInsights,
      serviceRecommendations,
      implementationRoadmap,
      reasoningProcess
    };
  }

  private analyzeBusinessFundamentals(
    responses: UserResponse[],
    extractedInfo: ExtractedInfo
  ): BusinessAnalysis {
    const conversationText = responses.map(r => r.answer).join(' ').toLowerCase();
    
    // Determine business stage
    let stage: BusinessAnalysis['stage'] = 'Ideation';
    let stageScore = 0;
    
    Object.entries(NextStageStrategyEngine.STAGE_INDICATORS).forEach(([stageName, indicators]) => {
      const score = indicators.reduce((acc, indicator) => 
        acc + (conversationText.includes(indicator) ? 1 : 0), 0);
      if (score > stageScore) {
        stageScore = score;
        stage = stageName.charAt(0).toUpperCase() + stageName.slice(1) as BusinessAnalysis['stage'];
      }
    });

    // Determine urgency
    let urgency: BusinessAnalysis['urgency'] = 'Planned';
    
    // Check for immediate indicators first (highest priority)
    if (NextStageStrategyEngine.URGENCY_INDICATORS.immediate.some(indicator => conversationText.includes(indicator))) {
      urgency = 'Immediate';
    } else if (NextStageStrategyEngine.URGENCY_INDICATORS.nearTerm.some(indicator => conversationText.includes(indicator))) {
      urgency = 'Near-term';
    }

    // Calculate maturity score
    const maturityFactors = [
      conversationText.includes('customer') ? 20 : 0,
      conversationText.includes('revenue') ? 20 : 0,
      conversationText.includes('team') ? 15 : 0,
      conversationText.includes('market') ? 15 : 0,
      conversationText.includes('competition') ? 10 : 0,
      conversationText.includes('funding') || conversationText.includes('investment') ? 20 : 0
    ];
    const maturityScore = Math.min(100, maturityFactors.reduce((a, b) => a + b, 0));

    // Identify resource constraints
    const resourceConstraints = [];
    if (extractedInfo.budget?.includes('<$10K') || conversationText.includes('tight budget')) {
      resourceConstraints.push('Limited budget');
    }
    if (extractedInfo.timeline?.includes('immediate') || extractedInfo.timeline?.includes('urgent') || urgency === 'Immediate') {
      resourceConstraints.push('Time pressure');
    }
    if (!conversationText.includes('team') && !conversationText.includes('employees')) {
      resourceConstraints.push('Solo founder');
    }

    // Identify strategic gaps
    const strategicGaps = [];
    if (!conversationText.includes('brand') && !conversationText.includes('identity')) {
      strategicGaps.push('Brand identity undefined');
    }
    if (!conversationText.includes('customer') && !conversationText.includes('user')) {
      strategicGaps.push('Customer validation needed');
    }
    if (!conversationText.includes('competition') && !conversationText.includes('competitor')) {
      strategicGaps.push('Competitive analysis missing');
    }
    if (!conversationText.includes('marketing') && !conversationText.includes('promotion')) {
      strategicGaps.push('Marketing strategy undefined');
    }

    // Assess competitive position
    let competitivePosition = 'Undefined';
    if (conversationText.includes('first') || conversationText.includes('only') || conversationText.includes('unique')) {
      competitivePosition = 'First-mover advantage';
    } else if (conversationText.includes('better') || conversationText.includes('improve')) {
      competitivePosition = 'Improvement play';
    } else if (conversationText.includes('different') || conversationText.includes('alternative')) {
      competitivePosition = 'Differentiation strategy';
    }

    // Market readiness score
    const readinessFactors = [
      extractedInfo.problem ? 25 : 0,
      extractedInfo.audience ? 25 : 0,
      extractedInfo.project ? 20 : 0,
      conversationText.includes('validation') ? 15 : 0,
      conversationText.includes('research') ? 15 : 0
    ];
    const marketReadiness = readinessFactors.reduce((a, b) => a + b, 0);

    return {
      stage,
      maturityScore,
      urgency,
      resourceConstraints,
      strategicGaps,
      competitivePosition,
      marketReadiness
    };
  }

  private generateStrategicInsights(
    responses: UserResponse[],
    extractedInfo: ExtractedInfo,
    businessAnalysis: BusinessAnalysis
  ): StrategicInsight[] {
    const insights: StrategicInsight[] = [];
    const conversationText = responses.map(r => r.answer).join(' ').toLowerCase();

    // Market Opportunity Insight
    if (extractedInfo.problem && extractedInfo.audience) {
      insights.push({
        category: 'Market Opportunity',
        insight: `Strong problem-solution fit identified for ${extractedInfo.audience}`,
        confidence: 85,
        implications: [
          'Customer validation should be prioritized',
          'Product-market fit appears promising',
          'Go-to-market strategy development recommended'
        ]
      });
    }

    // Resource Optimization Insight
    if (businessAnalysis.resourceConstraints.length > 0) {
      insights.push({
        category: 'Resource Optimization',
        insight: `${businessAnalysis.resourceConstraints.join(' and ')} require strategic prioritization`,
        confidence: 90,
        implications: [
          'MVP approach recommended over full development',
          'Focus on high-impact, low-cost initiatives',
          'Phased implementation strategy essential'
        ]
      });
    }

    // Competitive Positioning Insight
    if (businessAnalysis.competitivePosition !== 'Undefined') {
      insights.push({
        category: 'Competitive Positioning',
        insight: `${businessAnalysis.competitivePosition} creates strategic opportunity`,
        confidence: 75,
        implications: [
          'Brand differentiation strategy needed',
          'Competitive analysis should inform positioning',
          'Unique value proposition development critical'
        ]
      });
    }

    // Growth Readiness Insight
    if (businessAnalysis.maturityScore > 60) {
      insights.push({
        category: 'Growth Readiness',
        insight: `High business maturity (${businessAnalysis.maturityScore}%) indicates growth readiness`,
        confidence: 80,
        implications: [
          'Scaling strategies should be prioritized',
          'Operational efficiency optimization needed',
          'Growth marketing initiatives recommended'
        ]
      });
    }

    return insights;
  }

  private recommendServices(
    responses: UserResponse[],
    extractedInfo: ExtractedInfo,
    businessAnalysis: BusinessAnalysis
  ): ServiceRecommendation[] {
    const recommendations: ServiceRecommendation[] = [];
    const conversationText = responses.map(r => r.answer).join(' ').toLowerCase();
    const allServices = Object.values(SUBSERVICES);

    // Priority scoring algorithm
    const serviceScores = new Map<string, number>();
    
    // Score based on explicit mentions
    Object.entries(NextStageStrategyEngine.PROBLEM_TO_SERVICE_MAP).forEach(([problem, serviceIds]) => {
      if (conversationText.includes(problem)) {
        serviceIds.forEach(serviceId => {
          serviceScores.set(serviceId, (serviceScores.get(serviceId) || 0) + 30);
        });
      }
    });

    // Score based on business stage
    const stageServiceWeights = {
      'Ideation': {
        'business-strategy-growth': 40,
        'brand-identity-design': 35,
        'market-research': 30
      },
      'MVP': {
        'mvp-development': 45,
        'brand-identity-design': 35,
        'go-to-market-strategy': 30
      },
      'Growth': {
        'growth-optimization': 45,
        'digital-marketing-assessment': 40,
        'content-systems': 35
      },
      'Scale': {
        'platform-optimization': 45,
        'workflow-automation': 40,
        'revenue-optimization': 35
      }
    };

    Object.entries(stageServiceWeights[businessAnalysis.stage] || {}).forEach(([serviceId, weight]) => {
      serviceScores.set(serviceId, (serviceScores.get(serviceId) || 0) + weight);
    });

    // Score based on strategic gaps
    const gapServiceWeights = {
      'Brand identity undefined': ['brand-identity-design', 'brand-audit-refresh'],
      'Customer validation needed': ['market-research', 'customer-acquisition'],
      'Competitive analysis missing': ['competitive-analysis', 'market-positioning'],
      'Marketing strategy undefined': ['digital-marketing-assessment', 'go-to-market-strategy']
    };

    businessAnalysis.strategicGaps.forEach(gap => {
      gapServiceWeights[gap as keyof typeof gapServiceWeights]?.forEach(serviceId => {
        serviceScores.set(serviceId, (serviceScores.get(serviceId) || 0) + 25);
      });
    });

    // Convert scores to recommendations
    const sortedServices = Array.from(serviceScores.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6) // Top 6 recommendations
      .map(([serviceId, score]) => {
        const service = allServices.find(s => s.id === serviceId);
        if (!service) return null;

        const priority = score >= 70 ? 'Critical' : score >= 50 ? 'High' : score >= 30 ? 'Medium' : 'Low';
        const timeline = this.getServiceTimeline(service, businessAnalysis);
        const rationale = this.generateServiceRationale(service, conversationText, businessAnalysis, score);
        const expectedImpact = this.getExpectedImpact(service, businessAnalysis);
        const estimatedInvestment = this.getEstimatedInvestment(service, extractedInfo);

        return {
          service,
          priority: priority as ServiceRecommendation['priority'],
          rationale,
          timeline,
          expectedImpact,
          estimatedInvestment
        };
      })
      .filter(Boolean) as ServiceRecommendation[];

    return sortedServices;
  }

  private getServiceTimeline(service: SubserviceData, businessAnalysis: BusinessAnalysis): string {
    const urgencyMultiplier = businessAnalysis.urgency === 'Immediate' ? 0.7 : 
                             businessAnalysis.urgency === 'Near-term' ? 0.85 : 1.0;
    
    const baseDuration = service.discovery.duration;
    const timelineMap = {
      '1-2 weeks': Math.ceil(14 * urgencyMultiplier),
      '2-3 weeks': Math.ceil(21 * urgencyMultiplier),
      '3-4 weeks': Math.ceil(28 * urgencyMultiplier),
      '4-6 weeks': Math.ceil(42 * urgencyMultiplier)
    };

    const days = timelineMap[baseDuration as keyof typeof timelineMap] || 21;
    return `${Math.ceil(days / 7)} weeks`;
  }

  private generateServiceRationale(
    service: SubserviceData,
    conversationText: string,
    businessAnalysis: BusinessAnalysis,
    score: number
  ): string {
    const rationales = [];

    // Stage-based rationale
    if (businessAnalysis.stage === 'Ideation' && service.service === 'strategy-planning') {
      rationales.push('Your early-stage venture needs strategic foundation');
    } else if (businessAnalysis.stage === 'MVP' && service.service === 'tech-software') {
      rationales.push('Ready to build - technical execution is your next priority');
    } else if (businessAnalysis.stage === 'Growth' && service.service === 'marketing-growth') {
      rationales.push('Growth phase requires systematic marketing approach');
    }

    // Gap-based rationale
    if (businessAnalysis.strategicGaps.includes('Brand identity undefined') && service.service === 'branding-design') {
      rationales.push('Missing brand identity limits market credibility');
    }

    // Problem-based rationale
    if (conversationText.includes('customer') && service.title.toLowerCase().includes('market')) {
      rationales.push('Customer focus aligns with market-driven solutions');
    }

    // Urgency-based rationale
    if (businessAnalysis.urgency === 'Immediate' && score > 60) {
      rationales.push('High urgency makes this a critical priority');
    }

    return rationales.length > 0 ? rationales[0] : `Aligns with your ${businessAnalysis.stage.toLowerCase()}-stage priorities`;
  }

  private getExpectedImpact(service: SubserviceData, businessAnalysis: BusinessAnalysis): string {
    const impactMap = {
      'branding-design': 'Enhanced market credibility and customer trust',
      'strategy-planning': 'Clear direction and strategic focus',
      'tech-software': 'Accelerated time-to-market and technical capability',
      'marketing-growth': 'Improved customer acquisition and revenue growth'
    };

    return impactMap[service.service] || 'Strategic advancement toward business goals';
  }

  private getEstimatedInvestment(service: SubserviceData, extractedInfo: ExtractedInfo): string {
    const budgetRange = extractedInfo.budget || 'Let\'s discuss this';
    
    if (budgetRange.includes('<$10K')) {
      return 'Designed for lean budgets';
    } else if (budgetRange.includes('$10K - $50K')) {
      return 'Fits within growth budget';
    } else if (budgetRange.includes('$50K')) {
      return 'Premium investment for maximum impact';
    }
    
    return 'Investment discussion recommended';
  }

  private createImplementationRoadmap(
    recommendations: ServiceRecommendation[],
    businessAnalysis: BusinessAnalysis
  ): NextStageRecommendationBrief['implementationRoadmap'] {
    const criticalServices = recommendations.filter(r => r.priority === 'Critical');
    const highServices = recommendations.filter(r => r.priority === 'High');
    const mediumServices = recommendations.filter(r => r.priority === 'Medium');

    const roadmap = [];

    // Phase 1: Critical Foundation
    if (criticalServices.length > 0) {
      roadmap.push({
        phase: 'Foundation (Phase 1)',
        duration: '4-6 weeks',
        services: criticalServices.map(r => r.service.title),
        milestones: [
          'Strategic foundation established',
          'Critical gaps addressed',
          'Core systems operational'
        ],
        investment: 'Priority investment'
      });
    }

    // Phase 2: Growth Enablement
    if (highServices.length > 0) {
      roadmap.push({
        phase: 'Growth Enablement (Phase 2)',
        duration: '6-8 weeks',
        services: highServices.map(r => r.service.title),
        milestones: [
          'Market positioning defined',
          'Growth systems implemented',
          'Customer acquisition optimized'
        ],
        investment: 'Growth investment'
      });
    }

    // Phase 3: Optimization
    if (mediumServices.length > 0) {
      roadmap.push({
        phase: 'Optimization (Phase 3)',
        duration: '4-6 weeks',
        services: mediumServices.map(r => r.service.title),
        milestones: [
          'Operations optimized',
          'Performance enhanced',
          'Scaling prepared'
        ],
        investment: 'Optimization investment'
      });
    }

    return roadmap;
  }

  private generateReasoningProcess(
    businessAnalysis: BusinessAnalysis,
    strategicInsights: StrategicInsight[],
    serviceRecommendations: ServiceRecommendation[]
  ): NextStageRecommendationBrief['reasoningProcess'] {
    return [
      {
        step: 'Business Stage Analysis',
        analysis: `Identified ${businessAnalysis.stage} stage with ${businessAnalysis.maturityScore}% maturity score`,
        conclusion: `${businessAnalysis.stage}-focused strategy required with ${businessAnalysis.urgency.toLowerCase()} timeline`
      },
      {
        step: 'Strategic Gap Assessment',
        analysis: `Found ${businessAnalysis.strategicGaps.length} strategic gaps: ${businessAnalysis.strategicGaps.join(', ')}`,
        conclusion: 'Gap-filling services prioritized for foundation building'
      },
      {
        step: 'Service Matching Algorithm',
        analysis: `Analyzed conversation for 50+ service indicators and business signals`,
        conclusion: `${serviceRecommendations.length} services recommended based on strategic fit and priority scoring`
      },
      {
        step: 'Implementation Sequencing',
        analysis: `Prioritized by urgency (${businessAnalysis.urgency}), resource constraints, and strategic impact`,
        conclusion: 'Phased approach ensures maximum ROI and sustainable growth'
      }
    ];
  }

  private craftPersonalMessage(
    extractedInfo: ExtractedInfo,
    businessAnalysis: BusinessAnalysis,
    serviceRecommendations: ServiceRecommendation[]
  ): string {
    const name = extractedInfo.name || 'there';
    const project = extractedInfo.project || 'your venture';
    const topService = serviceRecommendations[0];
    
    return `Hi ${name}! I'm genuinely excited about ${project}. Your ${businessAnalysis.stage.toLowerCase()}-stage venture shows ${businessAnalysis.maturityScore}% strategic maturity, which positions you well for growth. Based on our conversation, I've identified ${serviceRecommendations.length} strategic opportunities, with ${topService?.service.title} as your highest-impact next step. Your ${businessAnalysis.urgency.toLowerCase()} timeline and clear vision create a compelling foundation for success.`;
  }
} 