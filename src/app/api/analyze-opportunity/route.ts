import { NextRequest, NextResponse } from 'next/server';
import { UserResponse } from '@/lib/simple-conversation-agent';
import { createWebSearchTool, aggregateSearchResults, WebSearchResponse } from '@/lib/web-search-tools';

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

interface ResearchData {
  query: string;
  results: string[];
  summary: string;
  cost: number;
}

interface BusinessConcept {
  coreBusiness: string;
  specialization: string;
  targetMarket: string;
  geographicScope: string;
  businessModel: string;
  keyDifferentiators: string[];
  marketPositioning: string;
}

interface EnhancedResearchData extends ResearchData {
  relevanceScore: number;
  businessConcept: BusinessConcept;
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
  researchData: ResearchData[];
  searchCost: number;
  searchProvider: string;
  businessConcept?: BusinessConcept;
}

async function extractBusinessInfo(responses: UserResponse[]): Promise<BusinessInfo> {
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
  
  // Use AI-powered intelligent classification
  const classification = await classifyBusinessIntelligently(vision, audience, problem);
  const industry = classification.industry;
  
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
// AI-powered business concept summarization for precise market research
async function summarizeBusinessConcept(businessInfo: BusinessInfo): Promise<BusinessConcept> {
  const apiKey = process.env.ANTHROPIC_API_KEY || '';
  
  const prompt = `Analyze this business and create a precise business concept summary for high-fidelity market research:

Business Details:
- Vision: ${businessInfo.vision}
- Audience: ${businessInfo.audience}
- Problem: ${businessInfo.problem}
- Success Vision: ${businessInfo.success}
- Industry: ${businessInfo.industry}

Create a structured business concept that captures the SPECIFIC nature of this business, not generic categories. Be as precise as possible to enable targeted market research.

Examples:
- Instead of "medical clinic" → "intragastric balloon weight loss clinic"
- Instead of "tech startup" → "AI-powered inventory management SaaS for restaurants"
- Instead of "consulting" → "digital transformation consulting for mid-market manufacturing"

Return ONLY valid JSON in this exact format:
{
  "coreBusiness": "specific business type (not generic)",
  "specialization": "what makes it unique and specific",
  "targetMarket": "precise customer segment with demographics",
  "geographicScope": "specific location/region mentioned",
  "businessModel": "how it generates revenue specifically",
  "keyDifferentiators": ["unique feature 1", "unique feature 2", "unique feature 3"],
  "marketPositioning": "how it positions itself in the market"
}`;

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
        max_tokens: 800,
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
    
    // Parse the JSON response
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    const jsonContent = jsonMatch ? jsonMatch[0] : content;
    const businessConcept = JSON.parse(jsonContent);
    
    console.log('Business concept summarized:', businessConcept);
    return businessConcept;
    
  } catch (error) {
    console.error('Failed to summarize business concept:', error);
    
    // Fallback to basic extraction if AI fails
    return {
      coreBusiness: extractBusinessType(businessInfo.vision),
      specialization: businessInfo.vision.slice(0, 100),
      targetMarket: businessInfo.audience,
      geographicScope: extractLocation(businessInfo.audience),
      businessModel: "business services",
      keyDifferentiators: [businessInfo.problem.slice(0, 50)],
      marketPositioning: "market solution"
    };
  }
}

// AI-powered intelligent search query generation
async function generateIntelligentSearchQueries(businessConcept: BusinessConcept): Promise<string[]> {
  const apiKey = process.env.ANTHROPIC_API_KEY || '';
  
  const prompt = `Generate 5 highly targeted market research queries for this business:

BUSINESS CONCEPT:
- Core Business: ${businessConcept.coreBusiness}
- Specialization: ${businessConcept.specialization}
- Target Market: ${businessConcept.targetMarket}
- Geographic Scope: ${businessConcept.geographicScope}
- Business Model: ${businessConcept.businessModel}
- Market Positioning: ${businessConcept.marketPositioning}

Generate 5 search queries that will yield the most valuable market intelligence:
1. Market Size & Growth - specific to this exact business type and geography
2. Target Demographics - precise customer segment data and spending patterns
3. Direct Competitive Intelligence - companies offering identical/similar services
4. Industry Dynamics - regulations, trends, barriers specific to this sector
5. Pricing & Customer Demand - market pricing analysis and demand indicators

Make queries specific enough to find actionable data, not generic industry reports.

Return ONLY a JSON array of 5 search query strings:
["query1", "query2", "query3", "query4", "query5"]`;

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
        max_tokens: 800,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();
    const content = data.content[0]?.text || '';
    const jsonMatch = content.match(/\[[\s\S]*\]/);
    const queries = JSON.parse(jsonMatch ? jsonMatch[0] : content);
    
    console.log('AI-generated intelligent queries:', queries);
    return queries;
    
  } catch (error) {
    console.error('AI query generation failed, using fallback:', error);
    return generateFoundationalQueries(businessConcept);
  }
}

// Fallback foundational search strategy
function generateFoundationalQueries(businessConcept: BusinessConcept): string[] {
  const location = businessConcept.geographicScope || 'North America';
  const industry = extractIndustryFromBusiness(businessConcept.coreBusiness);
  const demographic = extractDemographicFromTarget(businessConcept.targetMarket);
  const businessType = businessConcept.coreBusiness;
  
  // 5 FOUNDATIONAL searches for comprehensive picture
  const queries = [
    // 1. SPECIFIC MARKET SIZE & DEMOGRAPHICS 
    `"${businessType}" market size revenue statistics "${location}" 2024 growth trends industry analysis`,
    
    // 2. TARGET AUDIENCE DATA - specific demographics and spending
    `"${demographic}" population statistics income spending behavior "${location}" market research data`,
    
    // 3. DIRECT COMPETITORS - specific companies offering the same core service
    `"${businessType}" companies competitors "${location}" pricing services market share`,
    
    // 4. INDUSTRY TRENDS & REGULATIONS
    `"${industry}" industry trends regulations "${location}" market growth opportunities 2024`,
    
    // 5. CUSTOMER DEMAND & PRICING
    `"${businessType}" customer demand pricing analysis "${location}" market penetration statistics`
  ];
  
  console.log('Foundational queries generated:', queries);
  return queries;
}

// Helper to extract broad industry from specific business
function extractIndustryFromBusiness(coreBusiness: string): string {
  const business = coreBusiness.toLowerCase();
  
  if (business.includes('clinic') || business.includes('medical') || business.includes('health') || business.includes('wellness')) {
    return 'healthcare';
  }
  if (business.includes('tech') || business.includes('software') || business.includes('app') || business.includes('platform')) {
    return 'technology';
  }
  if (business.includes('restaurant') || business.includes('food') || business.includes('catering')) {
    return 'food service';
  }
  if (business.includes('retail') || business.includes('store') || business.includes('shop') || business.includes('e-commerce')) {
    return 'retail';
  }
  if (business.includes('consulting') || business.includes('advisory') || business.includes('service')) {
    return 'professional services';
  }
  if (business.includes('education') || business.includes('training') || business.includes('course')) {
    return 'education';
  }
  
  // Default to extracting the key noun
  const words = business.split(' ');
  return words[words.length - 1] || 'business';
}

// Helper to extract broad demographic from specific target market
function extractDemographicFromTarget(targetMarket: string): string {
  const target = targetMarket.toLowerCase();
  
  if (target.includes('business') || target.includes('b2b') || target.includes('enterprise') || target.includes('company')) {
    return 'business owners entrepreneurs';
  }
  if (target.includes('young') || target.includes('millennial') || target.includes('gen z') || target.includes('student')) {
    return 'young adults millennials';
  }
  if (target.includes('parent') || target.includes('family') || target.includes('mom') || target.includes('dad')) {
    return 'parents families';
  }
  if (target.includes('senior') || target.includes('older') || target.includes('retirement') || target.includes('baby boomer')) {
    return 'seniors older adults';
  }
  if (target.includes('professional') || target.includes('executive') || target.includes('manager')) {
    return 'professionals executives';
  }
  if (target.includes('fitness') || target.includes('health') || target.includes('weight') || target.includes('wellness')) {
    return 'health conscious consumers';
  }
  
  // Default to general consumer
  return 'consumers adults';
}

// Generate high-fidelity search queries based on business concept
async function generateHighFidelityQueries(businessConcept: BusinessConcept): Promise<string[]> {
  console.log('Using AI-powered intelligent search strategy');
  return await generateIntelligentSearchQueries(businessConcept);
}

// Simplified fallback using the same foundational approach
function generateSmartSearchQueries(businessConcept: BusinessConcept): string[] {
  // Use the same foundational approach as the main function
  return generateFoundationalQueries(businessConcept);
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
function normalizeOpportunityScore(score: Partial<OpportunityScore> | unknown, provider: string): OpportunityScore {
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
  
  // Type guard to ensure score has the expected properties
  const scoreObj = score as Partial<OpportunityScore>;
  
  // Check if scores are in 0-25 range (need to scale up to 0-100)
  const maxScore = Math.max(
    scoreObj.marketMechanics || 0,
    scoreObj.competitivePositioning || 0,
    scoreObj.businessModelViability || 0,
    scoreObj.strategicTiming || 0
  );
  
  const isLowScale = maxScore <= 25;
  const scaleFactor = isLowScale ? 4 : 1; // Scale up if using 0-25 range
  
  const normalizedScore = {
    marketMechanics: Math.min(100, Math.max(0, (scoreObj.marketMechanics || 0) * scaleFactor)),
    competitivePositioning: Math.min(100, Math.max(0, (scoreObj.competitivePositioning || 0) * scaleFactor)),
    businessModelViability: Math.min(100, Math.max(0, (scoreObj.businessModelViability || 0) * scaleFactor)),
    strategicTiming: Math.min(100, Math.max(0, (scoreObj.strategicTiming || 0) * scaleFactor)),
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
  provider: 'brave' | 'anthropic',
  businessConcept: BusinessConcept
): Promise<OpportunityAnalysis> {
  const apiKey = process.env.ANTHROPIC_API_KEY || '';
  
  const prompt = `You are NextStage's lead strategic intelligence analyst - an expert with 15+ years in McKinsey-level strategy consulting, venture capital due diligence, and market intelligence. You analyze business opportunities with the rigor of top-tier consulting and the insight of successful entrepreneurs.

ANALYSIS CONTEXT:
You are conducting a comprehensive strategic assessment that will guide major business decisions. This analysis will determine whether to pursue, pivot, or abandon this opportunity. Your insights must be actionable, data-driven, and strategically sophisticated.

ANALYTICAL FRAMEWORK:
Apply advanced strategic frameworks including:
- Porter's Five Forces competitive dynamics
- Blue Ocean vs Red Ocean market positioning  
- Jobs-to-be-Done customer insights
- Platform vs Pipeline business model analysis
- Network effects and defensibility assessment
- Capital efficiency and unit economics evaluation

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

🚨 CRITICAL REQUIREMENT - FAILURE TO FOLLOW = UNUSABLE RESPONSE:
YOU MUST BASE YOUR ENTIRE ANALYSIS ON THE MARKET RESEARCH DATA ABOVE. 
- DO NOT use generic business advice
- DO NOT echo back user inputs 
- DO NOT make up statistics
- YOU MUST extract specific numbers, percentages, company names, market sizes, demographics from the research
- YOU MUST cite actual findings from the data provided
- Every section must reference concrete data points from the research
- COMPETITOR ANALYSIS: Distinguish between direct competitors (offering the exact same core service) vs indirect competitors (related services in the broader market category). If research shows no direct competitors, clearly state this as a market opportunity.

ANALYSIS TASK:
Provide a strategic business opportunity analysis that heavily incorporates the market research data with:

1. OPPORTUNITY SCORING (CRITICAL: Use 0-100 scale for each metric):
   - Market Mechanics (0-100): Market structure, demand elasticity, supply dynamics
   - Competitive Positioning (0-100): Differentiation potential, resource advantages
   - Business Model Viability (0-100): Revenue architecture, cost structure, capital efficiency
   - Strategic Timing (0-100): Market timing, competitive window, execution readiness
   
   IMPORTANT: Each score must be between 0-100, NOT 0-25. Calculate total as average of all four scores.

2. STRATEGIC ANALYSIS SECTIONS (Use clear formatting with line breaks and bullet points):
   - Business Model Analysis
   - Market Opportunity Assessment (MUST include TAM/SAM/SOM calculations using research data)
   - Competitive Landscape
   - Strategic Recommendations
   - Risk Assessment
   
   FORMAT REQUIREMENTS:
   - Write in natural paragraphs and sentences
   - Use bullet points (•) only when listing multiple related items
   - Use numbered lists (1. 2. 3.) for sequential steps or priorities
   - Bold key concepts with **text** when emphasizing
   - MANDATORY: Include specific numbers, percentages, company names, and data points from the market research
   - Cite actual market data rather than generic industry estimates
   - Quote specific findings and statistics from the research provided
   - Structure content as if writing for a sophisticated business audience

   MARKET OPPORTUNITY ASSESSMENT REQUIREMENTS:
   - TAM (Total Addressable Market): Use population data from research to calculate total market universe
   - SAM (Serviceable Addressable Market): Apply demographic filters (age, income, health conditions) from research
   - SOM (Serviceable Obtainable Market): Realistic market share based on competitive landscape research
   - Include actual population numbers, demographic percentages, and growth rates from the market research
   - Show clear mathematical calculations using the research data

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
      "content": "MUST include actual revenue data, competitor pricing, industry benchmarks, and financial metrics from the market research. Use specific dollar amounts, percentages, and company examples from the data.",
      "reasoning": "Why this analysis matters strategically..."
    },
    {
      "title": "Market Opportunity Assessment", 
      "content": "MANDATORY: Calculate TAM/SAM/SOM using specific population numbers, demographic percentages, and market size data from the research. Include: total population, target demographic percentage, average spending, competitive market share, and growth rates - all from the actual research data.",
      "reasoning": "Strategic insight about market dynamics..."
    },
    {
      "title": "Competitive Landscape",
      "content": "MUST distinguish between direct competitors (offering the exact same core service) and indirect competitors (related services in the broader market category). Identify specific company names, pricing, and services from research data. If no direct competitors exist, clearly state this and explain the competitive gap as a market opportunity.",
      "reasoning": "How to leverage competitive advantages..."
    },
    {
      "title": "Strategic Recommendations",
      "content": "Specific actionable recommendations based on market research findings and competitive intelligence...",
      "reasoning": "Why these actions will drive success..."
    },
    {
      "title": "Risk Assessment",
      "content": "Key risks identified from market research and mitigation strategies based on actual market conditions...",
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
    
    // Parse the JSON response with enhanced error handling and cleaning
    let analysis;
    try {
      // Clean the content first - sometimes Claude adds extra text
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      let jsonContent = jsonMatch ? jsonMatch[0] : content;
      
      // Clean problematic control characters that break JSON parsing while preserving structure
      jsonContent = jsonContent
        .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '') // Remove control chars except \t, \n, \r
        .trim();
      
      console.log('Attempting to parse cleaned JSON...');
      analysis = JSON.parse(jsonContent);
      console.log('✅ Successfully parsed JSON response');
    } catch (parseError) {
      console.error('❌ Failed to parse Claude response as JSON:', parseError);
      console.error('Raw content preview:', content.substring(0, 200) + '...');
      
      // Try to extract the data manually using regex patterns
      try {
        console.log('🔧 Attempting manual data extraction...');
        
        // Extract scores
        const scoresMatch = content.match(/"opportunityScore":\s*\{[^}]+\}/);
        const sectionsMatch = content.match(/"sections":\s*\[[\s\S]*\]/);
        
        if (scoresMatch && sectionsMatch) {
          const scoresStr = scoresMatch[0].replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '');
          const sectionsStr = sectionsMatch[0].replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '');
          
          const reconstructedJson = `{${scoresStr},${sectionsStr}}`;
          analysis = JSON.parse(reconstructedJson);
          console.log('✅ Successfully extracted data manually');
        } else {
          throw new Error('Could not extract required data patterns');
        }
      } catch (extractionError) {
        console.error('❌ Manual extraction failed:', extractionError);
        
        // Final fallback to structured analysis
        throw new Error('Failed to parse analysis response - falling back to generic analysis');
      }
    }
    
    // Validate and normalize scoring to ensure 0-100 scale regardless of provider
    const normalizedScore = normalizeOpportunityScore(analysis.opportunityScore, provider);
    
    return {
      personalMessage: `Hi ${businessInfo.name}! I've completed a comprehensive strategic analysis of your ${businessConcept.coreBusiness} opportunity: ${businessConcept.specialization}. Based on targeted market research and competitive analysis, here's your Business Opportunity Assessment.`,
      businessInfo,
      opportunityScore: normalizedScore,
      sections: analysis.sections,
      researchData: [],
      searchCost: 0.025,
      searchProvider: provider,
      businessConcept: businessConcept
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

// AI-powered industry classification - replaces hardcoded mapping
async function classifyBusinessIntelligently(vision: string, audience: string, problem: string): Promise<{
  industry: string;
  subIndustry: string;
  businessModel: string;
  targetSegment: string;
}> {
  const apiKey = process.env.ANTHROPIC_API_KEY || '';
  
  const prompt = `Analyze this business and provide intelligent classification:

BUSINESS DATA:
- Vision: ${vision}
- Audience: ${audience}  
- Problem: ${problem}

Classify this business intelligently, not just by keywords. Consider:
- Core value proposition
- Business model characteristics
- Target market dynamics
- Revenue generation method
- Industry ecosystem

Return ONLY valid JSON:
{
  "industry": "specific industry (e.g., 'medical technology', 'enterprise software', 'consumer fintech')",
  "subIndustry": "niche specialization (e.g., 'non-surgical weight loss', 'inventory management SaaS', 'micro-lending')",
  "businessModel": "how it makes money (e.g., 'procedure-based with recurring coaching', 'subscription software', 'transaction fees')",
  "targetSegment": "specific customer segment (e.g., 'urban professionals 25-60 with disposable income', 'SME restaurants', 'gig economy workers')"
}`;

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
        max_tokens: 500,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();
    const content = data.content[0]?.text || '';
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    const classification = JSON.parse(jsonMatch ? jsonMatch[0] : content);
    
    console.log('AI business classification:', classification);
    return classification;
    
  } catch (error) {
    console.error('AI classification failed:', error);
    
    // Intelligent fallback using semantic analysis
    return {
      industry: extractIndustrySemanically(vision, audience, problem),
      subIndustry: extractBusinessFocus(vision),
      businessModel: extractBusinessModel(vision, problem),
      targetSegment: extractTargetSegment(audience)
    };
  }
}

// Semantic industry extraction - smarter than keyword matching
function extractIndustrySemanically(vision: string, audience: string, problem: string): string {
  const text = `${vision} ${audience} ${problem}`.toLowerCase();
  
  // Semantic patterns - look for intent and value proposition, not just keywords
  if (text.match(/(treat|cure|heal|medical|patient|clinic|doctor|health outcomes|wellness|therapy)/)) {
    return 'healthcare technology';
  }
  if (text.match(/(software|platform|app|digital solution|automation|data|analytics|ai|ml)/)) {
    return 'technology solutions';
  }
  if (text.match(/(payment|financial|money|invest|lending|banking|fintech|transaction)/)) {
    return 'financial technology';
  }
  if (text.match(/(learn|education|training|skill|course|teach|knowledge)/)) {
    return 'education technology';
  }
  if (text.match(/(sell|buy|marketplace|retail|product|inventory|commerce)/)) {
    return 'commerce technology';
  }
  if (text.match(/(consult|advise|strategy|professional service|expertise|guidance)/)) {
    return 'professional services';
  }
  
  return 'business services';
}

function extractBusinessFocus(vision: string): string {
  const visionLower = vision.toLowerCase();
  
  // Extract the core focus using semantic analysis
  if (visionLower.match(/(weight.*loss|obesity|bmi|bariatric|gastric)/)) {
    return 'weight management solutions';
  }
  if (visionLower.match(/(inventory|stock|supply.*chain|logistics)/)) {
    return 'supply chain optimization';
  }
  if (visionLower.match(/(customer.*relationship|crm|sales.*management)/)) {
    return 'customer relationship management';
  }
  if (visionLower.match(/(payment.*processing|transaction|billing)/)) {
    return 'payment processing';
  }
  
  // Extract key nouns and concepts
  const words = visionLower.split(/\s+/);
  const businessNouns = words.filter(word => 
    word.length > 4 && 
    !['with', 'that', 'will', 'help', 'provide', 'offer', 'create'].includes(word)
  );
  
  return businessNouns.slice(0, 2).join(' ') || 'business solutions';
}

function extractBusinessModel(vision: string, problem: string): string {
  const text = `${vision} ${problem}`.toLowerCase();
  
  if (text.match(/(subscription|monthly|recurring|saas)/)) {
    return 'subscription-based';
  }
  if (text.match(/(procedure|service.*fee|consultation|treatment)/)) {
    return 'fee-for-service';
  }
  if (text.match(/(marketplace|commission|transaction.*fee|percentage)/)) {
    return 'transaction-based';
  }
  if (text.match(/(advertising|ads|marketing|sponsored)/)) {
    return 'advertising-based';
  }
  if (text.match(/(license|enterprise|b2b|corporate)/)) {
    return 'licensing-based';
  }
  
  return 'value-based pricing';
}

function extractTargetSegment(audience: string): string {
  const audienceLower = audience.toLowerCase();
  
  // Intelligent segment extraction
  const segments = [];
  
  // Demographics
  if (audienceLower.match(/(young|millennial|gen.*z|student)/)) segments.push('young adults');
  if (audienceLower.match(/(professional|executive|manager|corporate)/)) segments.push('professionals');
  if (audienceLower.match(/(senior|older|retirement|baby.*boomer)/)) segments.push('seniors');
  if (audienceLower.match(/(parent|family|mom|dad)/)) segments.push('families');
  
  // Psychographics
  if (audienceLower.match(/(health.*conscious|fitness|wellness|weight)/)) segments.push('health-focused');
  if (audienceLower.match(/(tech.*savvy|early.*adopter|digital)/)) segments.push('tech-forward');
  if (audienceLower.match(/(busy|time.*constrained|efficient)/)) segments.push('time-conscious');
  
  // Business type
  if (audienceLower.match(/(small.*business|startup|entrepreneur)/)) segments.push('SME owners');
  if (audienceLower.match(/(enterprise|large.*company|corporation)/)) segments.push('enterprise clients');
  
  // Geographic
  if (audienceLower.match(/(urban|city|metropolitan)/)) segments.push('urban');
  if (audienceLower.match(/(montreal|toronto|vancouver)/)) segments.push('Canadian');
  
  return segments.length > 0 ? segments.join(' ') : 'general consumers';
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
    const businessInfo = await extractBusinessInfo(responses);
    console.log('Extracted business info:', {
      name: businessInfo.name,
      industry: businessInfo.industry,
      hasVision: businessInfo.vision.length > 0,
      hasAudience: businessInfo.audience.length > 0,
      hasProblem: businessInfo.problem.length > 0
    });

    // Step 1: Summarize business concept for high-fidelity research
    console.log('🧠 Analyzing business concept for targeted research...');
    const businessConcept = await summarizeBusinessConcept(businessInfo);
    console.log('Business concept analyzed:', businessConcept);

    // Step 2: Generate high-fidelity search queries
    console.log('🎯 Generating high-fidelity search queries...');
    const searchQueries = await generateHighFidelityQueries(businessConcept);
    console.log('High-fidelity queries generated:', searchQueries);

    // Perform market research with proper completion tracking
    let combinedSummary = '';
    let totalCost = 0;
    let successRate = 0;
    let searchResults: WebSearchResponse[] = [];

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
    const analysis = await generateOpportunityAnalysis(cleanedBusinessInfo, combinedSummary, searchProvider, businessConcept);

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