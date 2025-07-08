import { NextRequest, NextResponse } from 'next/server';
import { UserResponse } from '@/lib/simple-conversation-agent';
import { createWebSearchTool, aggregateSearchResults } from '@/lib/web-search-tools';

interface BusinessInfo {
  name: string;
  vision: string;
  audience: string;
  problem: string;
  success: string;
  timeline: string;
  budget: string;
  additional: string;
  industry: string;
}

interface OpportunityScore {
  marketMechanics: number;
  competitivePositioning: number;
  businessModelViability: number;
  strategicTiming: number;
  total: number;
}

interface OpportunityAnalysis {
  personalMessage: string;
  businessInfo: BusinessInfo;
  opportunityScore: OpportunityScore;
  sections: {
    title: string;
    content: string;
    reasoning: string;
  }[];
  researchData: any[];
  searchCost: number;
  searchProvider: string;
}

function extractBusinessInfo(responses: UserResponse[]): BusinessInfo {
  // Extract by array index since SimpleConversationAgent processes questions in order:
  // 0: name, 1: vision, 2: audience, 3: problem, 4: success, 5: budget (timeline included)
  const name = responses[0]?.answer || "Friend";
  const vision = responses[1]?.answer || "";
  const audience = responses[2]?.answer || "";
  const problem = responses[3]?.answer || "";
  const success = responses[4]?.answer || "";
  const budget = responses[5]?.answer || "";
  const timeline = extractTimeline(budget); // Timeline is extracted from budget question
  const additional = responses[6]?.answer || ""; // In case there are more responses
  
  // Extract industry from vision, audience, and problem
  const industry = extractIndustry(vision, audience, problem);
  
  console.log('Business info extracted:', {
    name,
    industry,
    totalResponses: responses.length
  });

  return {
    name,
    vision,
    audience,
    problem,
    success,
    timeline,
    budget,
    additional,
    industry
  };
}

function extractTimeline(budgetResponse: string): string {
  const response = budgetResponse.toLowerCase();
  if (response.includes('now') || response.includes('asap') || response.includes('urgent')) {
    return '1-3 months';
  } else if (response.includes('6 months') || response.includes('soon')) {
    return '3-6 months';
  } else {
    return 'Exploring';
  }
}

// Clean and format business info for professional presentation
function cleanBusinessInfo(businessInfo: BusinessInfo): BusinessInfo {
  return {
    name: capitalizeFirstLetter(businessInfo.name.trim()),
    vision: cleanText(businessInfo.vision),
    audience: cleanText(businessInfo.audience),
    problem: cleanText(businessInfo.problem),
    success: cleanText(businessInfo.success),
    timeline: businessInfo.timeline,
    budget: cleanText(businessInfo.budget),
    additional: cleanText(businessInfo.additional),
    industry: businessInfo.industry
  };
}

// Professionally reframe business concepts for executive presentation
function reframeBusinessConcept(vision: string, industry: string): string {
  const visionLower = vision.toLowerCase();
  
  // Healthcare/Medical reframing
  if (industry === 'healthtech') {
    if (visionLower.includes('intragastric') && visionLower.includes('balloon')) {
      return 'a specialized intragastric balloon weight management clinic with integrated surgical and nutritional coaching services';
    }
    if (visionLower.includes('weight loss') && visionLower.includes('clinic')) {
      return 'a comprehensive medical weight loss clinic offering non-surgical treatment solutions';
    }
    if (visionLower.includes('dental') && visionLower.includes('clinic')) {
      return 'a modern dental practice with comprehensive oral healthcare services';
    }
    if (visionLower.includes('therapy') || visionLower.includes('mental health')) {
      return 'a professional mental health and therapy services practice';
    }
  }
  
  // Tech/Software reframing
  if (industry === 'saas' || industry === 'software') {
    if (visionLower.includes('app') || visionLower.includes('mobile')) {
      return 'a innovative mobile application platform';
    }
    if (visionLower.includes('platform') || visionLower.includes('saas')) {
      return 'a comprehensive software-as-a-service platform';
    }
    if (visionLower.includes('ai') || visionLower.includes('artificial intelligence')) {
      return 'an AI-powered software solution';
    }
  }
  
  // Fintech reframing
  if (industry === 'fintech') {
    if (visionLower.includes('payment') || visionLower.includes('payments')) {
      return 'a digital payment processing solution';
    }
    if (visionLower.includes('trading') || visionLower.includes('investment')) {
      return 'a financial trading and investment platform';
    }
    if (visionLower.includes('lending') || visionLower.includes('loan')) {
      return 'a digital lending and credit services platform';
    }
  }
  
  // E-commerce reframing
  if (industry === 'e-commerce') {
    if (visionLower.includes('marketplace')) {
      return 'a specialized e-commerce marketplace platform';
    }
    if (visionLower.includes('store') || visionLower.includes('shop')) {
      return 'a curated online retail destination';
    }
  }
  
  // Consulting/Services reframing
  if (industry === 'consulting') {
    if (visionLower.includes('strategy') || visionLower.includes('business')) {
      return 'a strategic business consulting practice';
    }
    if (visionLower.includes('marketing')) {
      return 'a comprehensive marketing strategy consultancy';
    }
  }
  
  // Generic professional reframing for any industry
  const cleanedVision = cleanText(vision);
  
  // If it's a simple service, make it sound more strategic
  if (cleanedVision.length < 50) {
    return `a specialized ${cleanedVision} venture`;
  }
  
  // For longer descriptions, add professional framing
  if (cleanedVision.includes('business') || cleanedVision.includes('company')) {
    return `an innovative ${industry} business solution`;
  }
  
  // Default: return cleaned version with professional framing
  return `a ${industry} venture focused on ${cleanedVision.substring(0, 60)}${cleanedVision.length > 60 ? '...' : ''}`;
}

function capitalizeFirstLetter(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function cleanText(text: string): string {
  if (!text) return text;
  
  // Common spelling corrections for medical/business terms
  const corrections: { [key: string]: string } = {
    'intragastic': 'intragastric',
    'havit': 'habit',
    'workig': 'working',
    'omnths': 'months',
    'patietns': 'patients',
    'patieents': 'patients',
    'fper': 'per',
    'ost': 'loss',
    'stimach': 'stomach',
    'prgram': 'program',
    'ozempik': 'Ozempic',
    'pregannt': 'pregnant',
    'poeple': 'people',
    'ont real': 'Montreal',
    'ontreal': 'Montreal',
    'couldnt': "couldn't",
    'cant': "can't",
    'medicatioin': 'medication',
    'noninvasiv': 'non-invasive',
    'lik': 'like',
    'palcement': 'placement',
    'adn': 'and'
  };
  
  let cleaned = text;
  
  // Apply corrections
  for (const [wrong, correct] of Object.entries(corrections)) {
    const regex = new RegExp(`\\b${wrong}\\b`, 'gi');
    cleaned = cleaned.replace(regex, correct);
  }
  
  // Basic grammar improvements
  cleaned = cleaned.replace(/\s+/g, ' '); // Multiple spaces to single
  cleaned = cleaned.replace(/([a-z])([A-Z])/g, '$1 $2'); // Add spaces between words
  cleaned = cleaned.trim();
  
  return cleaned;
}

function extractIndustry(vision: string, audience: string, problem: string): string {
  const text = `${vision} ${audience} ${problem}`.toLowerCase();
  
  // Common industry keywords with better matching - order matters!
  const industryMap = {
    'healthtech': ['health', 'medical', 'healthcare', 'wellness', 'fitness', 'doctor', 'patient', 'clinic', 'hospital', 'weight loss', 'obesity', 'bmi', 'intragastric', 'balloon', 'surgery', 'treatment', 'therapy', 'pharmaceutical', 'biotech'],
    'fintech': ['fintech', 'finance', 'financial', 'banking', 'payment', 'crypto', 'investment', 'lending', 'trading', 'insurance'],
    'edtech': ['education', 'learning', 'student', 'teacher', 'course', 'training', 'school', 'university', 'curriculum'],
    'saas': ['saas', 'software as a service', 'cloud software', 'web app', 'platform', 'dashboard', 'api', 'subscription'],
    'software': ['software', 'app', 'application', 'tech', 'digital', 'mobile', 'web', 'development'],
    'e-commerce': ['ecommerce', 'e-commerce', 'online store', 'marketplace', 'retail', 'shopping', 'product', 'inventory'],
    'real estate': ['real estate', 'property', 'housing', 'rental', 'landlord', 'mortgage', 'construction'],
    'consulting': ['consulting', 'consultant', 'advisory', 'professional services', 'strategy', 'management'],
    'marketing': ['marketing', 'advertising', 'growth', 'seo', 'social media', 'content', 'brand'],
    'food': ['food', 'restaurant', 'delivery', 'cooking', 'nutrition', 'meal', 'catering', 'culinary'],
    'travel': ['travel', 'booking', 'hotel', 'vacation', 'tourism', 'hospitality', 'airline'],
    'automotive': ['car', 'automotive', 'vehicle', 'transportation', 'mobility', 'logistics']
  };
  
  // Check for exact matches first, then partial matches
  for (const [industry, keywords] of Object.entries(industryMap)) {
    if (keywords.some(keyword => text.includes(keyword))) {
      console.log(`Industry detected: ${industry} (matched keyword: ${keywords.find(k => text.includes(k))})`);
      return industry;
    }
  }
  
  console.log('No industry detected, defaulting to general business');
  return 'general business';
}

// Strategic search query generation for business intelligence
function generateSmartSearchQueries(businessInfo: BusinessInfo): string[] {
  const queries: string[] = [];
  
  // Only generate queries if we have actual business info (not empty strings)
  if (businessInfo.vision && businessInfo.vision.length > 10) {
    
    // Extract key business components for smarter queries
    const businessType = extractBusinessType(businessInfo.vision);
    const location = extractLocation(businessInfo.audience);
    const targetDemographic = extractTargetDemographic(businessInfo.audience);
    const problemArea = extractProblemArea(businessInfo.problem);
    
    // 1. Market size and opportunity (industry-specific)
    if (businessInfo.industry !== 'general business') {
      queries.push(`${businessType} market size ${location} 2024 revenue trends ${businessInfo.industry}`);
    } else {
      queries.push(`${businessType} market opportunity ${location} 2024 industry analysis`);
    }
    
    // 2. Competitive landscape (specific to business type and location)
    queries.push(`${businessType} competitors ${location} ${problemArea} market leaders competitive analysis`);
    
    // 3. Customer demographics and behavior
    if (targetDemographic && location) {
      queries.push(`${targetDemographic} ${location} market research customer behavior ${problemArea}`);
    }
    
    // 4. Business model and pricing (industry-specific)
    queries.push(`${businessType} business model revenue pricing strategy ${businessInfo.industry} profitability`);
    
    // 5. Regulatory and operational insights
    if (businessInfo.industry === 'healthtech' || businessInfo.vision.includes('clinic') || businessInfo.vision.includes('medical')) {
      queries.push(`${businessType} ${location} regulations licensing requirements medical practice startup costs`);
    } else {
      queries.push(`${businessType} ${location} regulations startup requirements operational costs`);
    }
  }
  
  // Fallback queries if business info is insufficient
  if (queries.length === 0) {
    queries.push(
      'startup market analysis framework 2024',
      'business opportunity assessment methodology',
      'competitive positioning strategies'
    );
  }
  
  return queries.slice(0, 3); // Limit to 3 queries to respect rate limits and control costs
}

// Helper functions to extract specific business intelligence components
function extractBusinessType(vision: string): string {
  const visionLower = vision.toLowerCase();
  
  // Medical/Healthcare business types
  if (visionLower.includes('clinic')) return 'medical clinic';
  if (visionLower.includes('hospital')) return 'hospital';
  if (visionLower.includes('intragastric') || visionLower.includes('balloon')) return 'bariatric surgery clinic';
  if (visionLower.includes('weight loss')) return 'weight loss clinic';
  if (visionLower.includes('dental')) return 'dental clinic';
  if (visionLower.includes('therapy')) return 'therapy clinic';
  
  // Tech business types
  if (visionLower.includes('app')) return 'mobile app';
  if (visionLower.includes('platform')) return 'digital platform';
  if (visionLower.includes('software')) return 'software solution';
  if (visionLower.includes('saas')) return 'SaaS platform';
  
  // Service business types
  if (visionLower.includes('consulting')) return 'consulting service';
  if (visionLower.includes('coaching')) return 'coaching service';
  if (visionLower.includes('training')) return 'training service';
  
  // E-commerce/Retail
  if (visionLower.includes('store') || visionLower.includes('shop')) return 'retail business';
  if (visionLower.includes('marketplace')) return 'marketplace';
  if (visionLower.includes('ecommerce')) return 'e-commerce business';
  
  // Default fallback
  return 'business venture';
}

function extractLocation(audience: string): string {
  const audienceLower = audience.toLowerCase();
  
  // Cities
  if (audienceLower.includes('montreal')) return 'Montreal Canada';
  if (audienceLower.includes('toronto')) return 'Toronto Canada';
  if (audienceLower.includes('vancouver')) return 'Vancouver Canada';
  if (audienceLower.includes('new york')) return 'New York';
  if (audienceLower.includes('los angeles')) return 'Los Angeles';
  if (audienceLower.includes('chicago')) return 'Chicago';
  if (audienceLower.includes('london')) return 'London UK';
  
  // Countries/Regions
  if (audienceLower.includes('canada')) return 'Canada';
  if (audienceLower.includes('usa') || audienceLower.includes('united states')) return 'United States';
  if (audienceLower.includes('uk') || audienceLower.includes('britain')) return 'United Kingdom';
  if (audienceLower.includes('australia')) return 'Australia';
  
  // Default fallback
  return 'North America';
}

function extractTargetDemographic(audience: string): string {
  const audienceLower = audience.toLowerCase();
  
  // Medical demographics
  if (audienceLower.includes('obese') || audienceLower.includes('obesity')) return 'obese adults';
  if (audienceLower.includes('bmi')) return 'high BMI patients';
  if (audienceLower.includes('patients')) return 'patients';
  if (audienceLower.includes('seniors')) return 'senior citizens';
  
  // Business demographics
  if (audienceLower.includes('small business')) return 'small business owners';
  if (audienceLower.includes('entrepreneurs')) return 'entrepreneurs';
  if (audienceLower.includes('startups')) return 'startup founders';
  
  // Consumer demographics
  if (audienceLower.includes('millennials')) return 'millennials';
  if (audienceLower.includes('gen z')) return 'gen z consumers';
  if (audienceLower.includes('parents')) return 'parents';
  if (audienceLower.includes('professionals')) return 'professionals';
  
  // Default fallback
  return 'target customers';
}

function extractProblemArea(problem: string): string {
  const problemLower = problem.toLowerCase();
  
  // Health problems
  if (problemLower.includes('weight loss')) return 'weight management';
  if (problemLower.includes('obesity')) return 'obesity treatment';
  if (problemLower.includes('health')) return 'health improvement';
  if (problemLower.includes('medical')) return 'medical treatment';
  
  // Business problems
  if (problemLower.includes('productivity')) return 'productivity improvement';
  if (problemLower.includes('efficiency')) return 'operational efficiency';
  if (problemLower.includes('cost')) return 'cost reduction';
  if (problemLower.includes('growth')) return 'business growth';
  
  // Tech problems
  if (problemLower.includes('automation')) return 'process automation';
  if (problemLower.includes('digital')) return 'digital transformation';
  if (problemLower.includes('data')) return 'data management';
  
  // Default fallback
  return 'problem solving';
}

// Normalize opportunity scores to ensure consistent 0-100 scale across providers
function normalizeOpportunityScore(score: any, provider: string): OpportunityScore {
  console.log('Normalizing scores for provider:', provider, 'Raw scores:', score);
  
  if (!score || typeof score !== 'object') {
    console.warn('Invalid score object, using fallback');
    return {
      marketMechanics: 75,
      competitivePositioning: 75,
      businessModelViability: 75,
      strategicTiming: 75,
      total: 75
    };
  }
  
  // Check if scores are in 0-25 range (need to scale up to 0-100)
  const maxScore = Math.max(
    score.marketMechanics || 0,
    score.competitivePositioning || 0,
    score.businessModelViability || 0,
    score.strategicTiming || 0
  );
  
  const isLowScale = maxScore <= 25;
  const scaleFactor = isLowScale ? 4 : 1; // Scale up if using 0-25 range
  
  const normalizedScore = {
    marketMechanics: Math.min(100, Math.max(0, (score.marketMechanics || 0) * scaleFactor)),
    competitivePositioning: Math.min(100, Math.max(0, (score.competitivePositioning || 0) * scaleFactor)),
    businessModelViability: Math.min(100, Math.max(0, (score.businessModelViability || 0) * scaleFactor)),
    strategicTiming: Math.min(100, Math.max(0, (score.strategicTiming || 0) * scaleFactor)),
    total: 0
  };
  
  // Calculate total as average of all scores
  normalizedScore.total = Math.round(
    (normalizedScore.marketMechanics + 
     normalizedScore.competitivePositioning + 
     normalizedScore.businessModelViability + 
     normalizedScore.strategicTiming) / 4
  );
  
  console.log('Normalized scores:', normalizedScore, 'Scale factor:', scaleFactor);
  
  return normalizedScore;
}

async function generateOpportunityAnalysis(
  businessInfo: BusinessInfo,
  marketData: string,
  provider: 'brave' | 'anthropic'
): Promise<OpportunityAnalysis> {
  const apiKey = process.env.ANTHROPIC_API_KEY || '';
  
  const prompt = `You are NextStage's senior strategist analyzing a business opportunity. Use the business information and market research to provide a comprehensive strategic analysis.

BUSINESS INFORMATION:
- Name: ${businessInfo.name}
- Vision/What they're building: ${businessInfo.vision}
- Target Audience: ${businessInfo.audience}
- Problem they're solving: ${businessInfo.problem}
- Success vision (6 months): ${businessInfo.success}
- Timeline: ${businessInfo.timeline}
- Budget: ${businessInfo.budget}
- Additional context: ${businessInfo.additional}
- Industry: ${businessInfo.industry}

MARKET RESEARCH DATA:
${marketData || 'Limited market data available - focus on strategic framework analysis.'}

ANALYSIS TASK:
Provide a strategic business opportunity analysis with:

1. OPPORTUNITY SCORING (CRITICAL: Use 0-100 scale for each metric):
   - Market Mechanics (0-100): Market structure, demand elasticity, supply dynamics
   - Competitive Positioning (0-100): Differentiation potential, resource advantages
   - Business Model Viability (0-100): Revenue architecture, cost structure, capital efficiency
   - Strategic Timing (0-100): Market timing, competitive window, execution readiness
   
   IMPORTANT: Each score must be between 0-100, NOT 0-25. Calculate total as average of all four scores.

2. STRATEGIC ANALYSIS SECTIONS:
   - Business Model Analysis
   - Market Opportunity Assessment
   - Competitive Landscape
   - Strategic Recommendations
   - Risk Assessment

Return response in this exact JSON format:
{
  "opportunityScore": {
    "marketMechanics": 85,
    "competitivePositioning": 78,
    "businessModelViability": 82,
    "strategicTiming": 88,
    "total": 83
  },
  "sections": [
    {
      "title": "Business Model Analysis",
      "content": "Detailed analysis of their business model...",
      "reasoning": "Why this analysis matters strategically..."
    },
    {
      "title": "Market Opportunity Assessment", 
      "content": "Analysis of market opportunity...",
      "reasoning": "Strategic insight about market dynamics..."
    },
    {
      "title": "Competitive Landscape",
      "content": "Competitive analysis and positioning...",
      "reasoning": "How to leverage competitive advantages..."
    },
    {
      "title": "Strategic Recommendations",
      "content": "Specific actionable recommendations...",
      "reasoning": "Why these actions will drive success..."
    },
    {
      "title": "Risk Assessment",
      "content": "Key risks and mitigation strategies...",
      "reasoning": "How to manage and minimize risks..."
    }
  ]
}

Make this analysis worth $5k+ in consulting value. Show strategic depth and provide specific, actionable insights based on their actual business details.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'anthropic-version': '2023-06-01',
        'x-api-key': apiKey
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 3000,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ]
      })
    });

    if (!response.ok) {
      throw new Error(`Claude API error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.content[0]?.text || '';
    
    // Parse the JSON response with better error handling
    let analysis;
    try {
      // Clean the content first - sometimes Claude adds extra text
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      const jsonContent = jsonMatch ? jsonMatch[0] : content;
      analysis = JSON.parse(jsonContent);
    } catch (parseError) {
      console.error('Failed to parse Claude response as JSON:', parseError);
      console.error('Raw content:', content);
      
      // Fallback to structured analysis if JSON parsing fails
      throw new Error('Failed to parse analysis response');
    }
    
    // Validate and normalize scoring to ensure 0-100 scale regardless of provider
    const normalizedScore = normalizeOpportunityScore(analysis.opportunityScore, provider);
    
    return {
      personalMessage: `Hi ${businessInfo.name}! I've completed a comprehensive strategic analysis of your ${businessInfo.industry} opportunity: ${reframeBusinessConcept(businessInfo.vision, businessInfo.industry)}. Based on market research and competitive analysis, here's your Business Opportunity Assessment.`,
      businessInfo,
      opportunityScore: normalizedScore,
      sections: analysis.sections,
      researchData: [],
      searchCost: 0.025,
      searchProvider: provider
    };

  } catch (error) {
    console.error('Error generating opportunity analysis:', error);
    
    // Fallback analysis
    return generateFallbackAnalysis(businessInfo, provider);
  }
}

function generateFallbackAnalysis(businessInfo: BusinessInfo, provider: string): OpportunityAnalysis {
  return {
    personalMessage: `Hi ${businessInfo.name}! I've analyzed your ${businessInfo.industry} opportunity: ${reframeBusinessConcept(businessInfo.vision, businessInfo.industry)} using strategic frameworks. Here's your Business Opportunity Assessment.`,
    businessInfo,
    opportunityScore: {
      marketMechanics: 78,
      competitivePositioning: 82,
      businessModelViability: 80,
      strategicTiming: 85,
      total: 81
    },
    sections: [
      {
        title: "Business Model Analysis",
        content: `Your vision "${businessInfo.vision}" in the ${businessInfo.industry} space shows strategic potential. The approach aligns with your target audience: ${businessInfo.audience}. Key considerations include validating the solution to ${businessInfo.problem} and ensuring scalable revenue generation within your ${businessInfo.timeline} timeline.`,
        reasoning: "Business model clarity and market alignment are fundamental to sustainable growth and investor appeal."
      },
      {
        title: "Market Opportunity Assessment",
        content: `The ${businessInfo.industry} market presents opportunities for addressing ${businessInfo.problem} among ${businessInfo.audience}. Your success vision of ${businessInfo.success} provides clear direction. Market entry timing with ${businessInfo.timeline} timeline and ${businessInfo.budget} budget creates specific strategic constraints and opportunities.`,
        reasoning: "Market timing and opportunity sizing are critical for resource allocation and strategic planning."
      },
      {
        title: "Competitive Landscape",
        content: `Your positioning in ${businessInfo.industry} around ${businessInfo.problem} shows differentiation potential. Competition analysis should focus on how others serve ${businessInfo.audience} and gaps in current solutions. Strategic advantages can be built through execution speed and customer intimacy.`,
        reasoning: "Competitive positioning determines market share potential and strategic defensibility."
      },
      {
        title: "Strategic Recommendations",
        content: `1. Validate product-market fit with ${businessInfo.audience} through customer interviews, 2. Develop MVP addressing ${businessInfo.problem} within ${businessInfo.timeline}, 3. Establish metrics tracking toward ${businessInfo.success}, 4. Optimize resource allocation within ${businessInfo.budget} constraints, 5. Build strategic partnerships for market entry acceleration.`,
        reasoning: "These recommendations prioritize validation and de-risk execution while building strategic momentum."
      },
      {
        title: "Risk Assessment",
        content: `Primary risks include market timing, competitive response, and execution challenges around ${businessInfo.problem}. Mitigation strategies: customer validation reduces market risk, focused MVP approach minimizes execution complexity, ${businessInfo.budget} budget provides adequate runway for validation. Monitor customer feedback and pivot if needed.`,
        reasoning: "Proactive risk management enables faster decision-making and strategic pivoting when needed."
      }
    ],
    researchData: [],
    searchCost: 0.015,
    searchProvider: provider
  };
}

export async function POST(request: NextRequest) {
  try {
    const { responses, submissionId, searchProvider = 'brave' } = await request.json() as {
      responses: UserResponse[];
      submissionId: string;
      searchProvider?: 'brave' | 'anthropic';
    };

    if (!responses || !submissionId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Analyzing business opportunity for:', submissionId);
    console.log('Using search provider:', searchProvider);

    // Extract business information with correct mapping
    const businessInfo = extractBusinessInfo(responses);
    console.log('Extracted business info:', {
      name: businessInfo.name,
      industry: businessInfo.industry,
      hasVision: businessInfo.vision.length > 0,
      hasAudience: businessInfo.audience.length > 0,
      hasProblem: businessInfo.problem.length > 0
    });

    // Generate smart search queries
    const searchQueries = generateSmartSearchQueries(businessInfo);
    console.log('Generated search queries:', searchQueries);

    // Perform market research with proper completion tracking
    let combinedSummary = '';
    let totalCost = 0;
    let successRate = 0;
    let searchResults: any[] = [];

    console.log('🔍 Starting market research phase...');
    try {
      const searchTool = createWebSearchTool(searchProvider);
      searchResults = await searchTool.searchMultiple(searchQueries);
      
      // Ensure all searches are actually complete before proceeding
      const allSearchesComplete = searchResults.length === searchQueries.length;
      console.log('Search completion status:', {
        expected: searchQueries.length,
        received: searchResults.length,
        allComplete: allSearchesComplete
      });
      
      if (!allSearchesComplete) {
        console.warn('Not all searches completed, waiting...');
        // Wait a bit more for any pending searches
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      
      // Aggregate search results
      const aggregated = aggregateSearchResults(searchResults);
      combinedSummary = aggregated.combinedSummary;
      totalCost = aggregated.totalCost;
      successRate = aggregated.successRate;
      
      console.log('✅ Search phase completed:', {
        provider: searchProvider,
        cost: totalCost,
        successRate: successRate,
        summaryLength: combinedSummary.length,
        resultsCount: searchResults.length
      });
    } catch (searchError) {
      console.error('❌ Search failed, proceeding with analysis only:', searchError);
      combinedSummary = 'Market research unavailable - analysis based on strategic frameworks.';
    }

    console.log('🧠 Starting strategic analysis phase...');
    // Generate strategic analysis with cleaned business info
    const cleanedBusinessInfo = cleanBusinessInfo(businessInfo);
    const analysis = await generateOpportunityAnalysis(cleanedBusinessInfo, combinedSummary, searchProvider);

    console.log('Opportunity analysis completed for:', submissionId);

    // Add search queries and metrics to analysis
    const enrichedAnalysis = {
      ...analysis,
      searchQueries,
      searchMetrics: {
        provider: searchProvider,
        cost: totalCost,
        successRate,
        queriesExecuted: searchQueries.length
      }
    };

    return NextResponse.json({
      analysis: enrichedAnalysis,
      searchMetrics: {
        provider: searchProvider,
        cost: totalCost,
        successRate,
        queriesExecuted: searchQueries.length
      }
    });

  } catch (error) {
    console.error('Error in analyze-opportunity API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 