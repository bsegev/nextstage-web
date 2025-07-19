// PHASE 1 OPTIMIZATION: Rules-based industry categorizer
// Replaces LLM-based Supabase RPC to eliminate token costs

interface IndustryKeywords {
  [key: string]: string[];
}

const industryKeywords: IndustryKeywords = {
  'fintech': [
    'financial', 'banking', 'payments', 'kyc', 'compliance', 'regulatory',
    'credit', 'lending', 'investment', 'trading', 'blockchain', 'crypto',
    'fintech', 'payment processing', 'digital wallet', 'money transfer',
    'fraud detection', 'risk management', 'aml', 'anti-money laundering'
  ],
  'healthcare': [
    'healthcare', 'medical', 'health', 'patient', 'doctor', 'hospital',
    'clinic', 'pharmaceutical', 'biotech', 'telemedicine', 'telehealth',
    'medical device', 'drug', 'therapy', 'diagnosis', 'treatment'
  ],
  'saas': [
    'saas', 'software as a service', 'platform', 'subscription', 'b2b software',
    'enterprise software', 'cloud software', 'web application', 'api',
    'dashboard', 'analytics platform', 'crm', 'project management'
  ],
  'ecommerce': [
    'ecommerce', 'e-commerce', 'retail', 'marketplace', 'shopping',
    'consumer', 'b2c', 'online store', 'dropshipping', 'fulfillment',
    'inventory', 'product catalog', 'checkout', 'payment gateway'
  ],
  'edtech': [
    'education', 'learning', 'edtech', 'e-learning', 'online course',
    'lms', 'learning management', 'student', 'teacher', 'curriculum',
    'training', 'skill development', 'certification', 'academic'
  ],
  'proptech': [
    'real estate', 'property', 'proptech', 'rental', 'housing',
    'commercial real estate', 'residential', 'mortgage', 'property management',
    'real estate investment', 'construction', 'architecture'
  ],
  'hr-tech': [
    'hr', 'human resources', 'recruitment', 'hiring', 'talent',
    'employee', 'workforce', 'payroll', 'benefits', 'performance management',
    'applicant tracking', 'onboarding', 'hrms', 'hris'
  ],
  'marketing-tech': [
    'marketing', 'advertising', 'martech', 'ad tech', 'campaign',
    'email marketing', 'social media', 'content marketing', 'seo',
    'analytics', 'attribution', 'conversion', 'lead generation'
  ],
  'logistics': [
    'logistics', 'supply chain', 'shipping', 'delivery', 'transportation',
    'warehouse', 'inventory management', 'freight', 'distribution',
    'fulfillment', 'last mile', '3pl', 'supply chain management'
  ],
  'ai-ml': [
    'ai', 'artificial intelligence', 'machine learning', 'ml', 'nlp',
    'computer vision', 'deep learning', 'neural network', 'automation',
    'predictive analytics', 'data science', 'algorithm', 'model training'
  ],
  'cybersecurity': [
    'cybersecurity', 'security', 'infosec', 'data protection', 'privacy',
    'encryption', 'firewall', 'threat detection', 'vulnerability',
    'penetration testing', 'compliance', 'identity management'
  ],
  'gaming': [
    'gaming', 'game', 'mobile game', 'video game', 'esports',
    'game development', 'unity', 'unreal', 'multiplayer', 'casual game',
    'indie game', 'game engine', 'monetization'
  ],
  'media-entertainment': [
    'media', 'entertainment', 'content', 'streaming', 'video',
    'music', 'podcast', 'publishing', 'news', 'journalism',
    'creator economy', 'influencer', 'digital media'
  ],
  'agriculture': [
    'agriculture', 'farming', 'agtech', 'crop', 'livestock',
    'precision farming', 'sustainable agriculture', 'food production',
    'agricultural technology', 'farm management'
  ],
  'manufacturing': [
    'manufacturing', 'industrial', 'factory', 'production', 'assembly',
    'quality control', 'supply chain', 'iot', 'industry 4.0',
    'automation', 'robotics', 'lean manufacturing'
  ],
  'legal-tech': [
    'legal', 'law', 'legaltech', 'contract', 'compliance',
    'document review', 'legal research', 'case management',
    'intellectual property', 'litigation', 'regulatory'
  ]
};

export function categorizeIndustry(
  description: string,
  audience: string = '',
  problem: string = ''
): string {
  // Combine all inputs for analysis
  const combinedText = `${description} ${audience} ${problem}`.toLowerCase();
  
  // Score each industry based on keyword matches
  const industryScores: { [key: string]: number } = {};
  
  for (const [industry, keywords] of Object.entries(industryKeywords)) {
    let score = 0;
    
    for (const keyword of keywords) {
      // Give higher scores for exact matches and longer keywords
      if (combinedText.includes(keyword)) {
        const keywordWeight = keyword.split(' ').length; // Multi-word keywords get higher weight
        score += keywordWeight;
      }
    }
    
    industryScores[industry] = score;
  }
  
  // Find the industry with the highest score
  const sortedIndustries = Object.entries(industryScores)
    .sort(([, a], [, b]) => b - a)
    .filter(([, score]) => score > 0); // Only consider industries with matches
  
  if (sortedIndustries.length === 0) {
    return 'Other';
  }
  
  // Return the top-scoring industry, formatted nicely
  const topIndustry = sortedIndustries[0][0];
  return formatIndustryName(topIndustry);
}

function formatIndustryName(industry: string): string {
  const industryMap: { [key: string]: string } = {
    'fintech': 'Fintech',
    'healthcare': 'Healthcare',
    'saas': 'SaaS',
    'ecommerce': 'E-commerce',
    'edtech': 'EdTech',
    'proptech': 'PropTech',
    'hr-tech': 'HR Tech',
    'marketing-tech': 'Marketing Tech',
    'logistics': 'Logistics',
    'ai-ml': 'AI/ML',
    'cybersecurity': 'Cybersecurity',
    'gaming': 'Gaming',
    'media-entertainment': 'Media & Entertainment',
    'agriculture': 'Agriculture',
    'manufacturing': 'Manufacturing',
    'legal-tech': 'Legal Tech'
  };
  
  return industryMap[industry] || 'Other';
}

// Helper function to get industry confidence score (for debugging/monitoring)
export function getIndustryConfidence(
  description: string,
  audience: string = '',
  problem: string = ''
): { industry: string; confidence: number; alternatives: Array<{ industry: string; score: number }> } {
  const combinedText = `${description} ${audience} ${problem}`.toLowerCase();
  const industryScores: { [key: string]: number } = {};
  
  for (const [industry, keywords] of Object.entries(industryKeywords)) {
    let score = 0;
    for (const keyword of keywords) {
      if (combinedText.includes(keyword)) {
        const keywordWeight = keyword.split(' ').length;
        score += keywordWeight;
      }
    }
    industryScores[industry] = score;
  }
  
  const sortedIndustries = Object.entries(industryScores)
    .sort(([, a], [, b]) => b - a)
    .filter(([, score]) => score > 0);
  
  if (sortedIndustries.length === 0) {
    return { industry: 'Other', confidence: 0, alternatives: [] };
  }
  
  const totalScore = Object.values(industryScores).reduce((a, b) => a + b, 0);
  const topScore = sortedIndustries[0][1];
  const confidence = totalScore > 0 ? Math.round((topScore / totalScore) * 100) : 0;
  
  return {
    industry: formatIndustryName(sortedIndustries[0][0]),
    confidence,
    alternatives: sortedIndustries.slice(1, 4).map(([industry, score]) => ({
      industry: formatIndustryName(industry),
      score: Math.round((score / totalScore) * 100)
    }))
  };
} 