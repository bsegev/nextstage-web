// Web Search Tools for Business Opportunity Analyzer
// Both tools implement the same interface for interchangeable use

export interface WebSearchResult {
  title: string;
  url: string;
  description: string;
  content?: string;
}

export interface WebSearchResponse {
  results: WebSearchResult[];
  summary: string;
  source: 'brave' | 'anthropic';
  cost: number;
  success: boolean;
  error?: string;
}

export interface WebSearchTool {
  search(query: string): Promise<WebSearchResponse>;
  searchMultiple(queries: string[]): Promise<WebSearchResponse[]>;
  name: string;
  description: string;
}

// Brave Search API Tool
export class BraveSearchTool implements WebSearchTool {
  name = 'Brave Search API';
  description = 'Fast, cost-effective web search with AI summarization';
  
  private apiKey: string;
  private baseUrl = 'https://api.search.brave.com/res/v1';
  
  constructor(apiKey?: string) {
    this.apiKey = apiKey || process.env.BRAVE_API_KEY || '';
  }
  
  async search(query: string): Promise<WebSearchResponse> {
    // Check if API key is available
    if (!this.apiKey) {
      console.warn('Brave API key not configured, using fallback');
      return {
        results: [],
        summary: `Search simulation for: ${query}. (Brave API key not configured)`,
        source: 'brave',
        cost: 0,
        success: false,
        error: 'API key not configured'
      };
    }

    try {
      // Ensure query is properly formatted for Brave API
      const encodedQuery = encodeURIComponent(query.trim());
      
      console.log(`Brave API: Searching for "${query}"`);
      
      // Step 1: Web search
      const searchResponse = await fetch(
        `${this.baseUrl}/web/search?q=${encodedQuery}&summary=1&count=5&country=US&safesearch=moderate`,
        {
          headers: {
            'Accept': 'application/json',
            'Accept-Encoding': 'gzip',
            'X-Subscription-Token': this.apiKey
          }
        }
      );

      if (!searchResponse.ok) {
        const errorText = await searchResponse.text();
        console.error(`Brave API error ${searchResponse.status}:`, errorText);
        
        // Handle specific error codes
        if (searchResponse.status === 422) {
          throw new Error(`Invalid request format: ${errorText}`);
        } else if (searchResponse.status === 401) {
          throw new Error(`Invalid API key: ${errorText}`);
        } else if (searchResponse.status === 429) {
          throw new Error(`Rate limit exceeded: ${errorText}`);
        } else {
          throw new Error(`Brave API error ${searchResponse.status}: ${errorText}`);
        }
      }

      const searchData = await searchResponse.json();
      console.log('Brave API response received:', {
        hasResults: !!searchData.web?.results,
        resultCount: searchData.web?.results?.length || 0,
        hasSummarizer: !!searchData.summarizer?.key
      });
      
      // Extract results
      const results: WebSearchResult[] = (searchData.web?.results || []).map((result: any) => ({
        title: result.title || '',
        url: result.url || '',
        description: result.description || '',
        content: result.extra_snippets?.join(' ') || result.description || ''
      }));

      // Step 2: Get AI summary if available
      let summary = '';
      if (searchData.summarizer?.key) {
        try {
          console.log('Attempting to get Brave AI summary...');
          const summaryResponse = await fetch(
            `${this.baseUrl}/summarizer/search?key=${encodeURIComponent(searchData.summarizer.key)}`,
            {
              headers: {
                'Accept': 'application/json',
                'X-Subscription-Token': this.apiKey
              }
            }
          );

          if (summaryResponse.ok) {
            const summaryData = await summaryResponse.json();
            summary = summaryData.summary || '';
            console.log('Brave AI summary received:', summary.length > 0);
          } else {
            console.warn('Failed to get Brave summary:', summaryResponse.status);
          }
        } catch (summaryError) {
          console.warn('Error getting Brave summary:', summaryError);
        }
      }

      // If no AI summary, create basic summary from results
      if (!summary && results.length > 0) {
        summary = results.slice(0, 3).map(r => r.description).filter(d => d).join(' ');
      }

      // Default summary if nothing else works
      if (!summary) {
        summary = `Search results for "${query}" - ${results.length} results found.`;
      }

      return {
        results,
        summary,
        source: 'brave',
        cost: 0.001, // Brave API is very cheap
        success: true
      };

    } catch (error) {
      console.error('Brave search error:', error);
      return {
        results: [],
        summary: `Search failed for "${query}": ${error instanceof Error ? error.message : 'Unknown error'}`,
        source: 'brave',
        cost: 0,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  async searchMultiple(queries: string[]): Promise<WebSearchResponse[]> {
    console.log(`Brave API: Executing ${queries.length} searches sequentially (avoiding rate limits)`);
    const results: WebSearchResponse[] = [];
    
    // Execute searches one by one to avoid rate limiting on free plans
    for (let i = 0; i < queries.length; i++) {
      console.log(`Brave API: Search ${i + 1}/${queries.length}`);
      const result = await this.search(queries[i]);
      results.push(result);
      
      // Add delay between requests to be respectful of rate limits
      if (i < queries.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1500)); // 1.5 second delay for free plan
      }
    }
    
    const successCount = results.filter(r => r.success).length;
    console.log(`Brave API: Completed ${successCount}/${queries.length} searches successfully`);
    
    return results;
  }
}

// Anthropic Web Search Tool (using Claude with web search capabilities)
export class AnthropicWebSearchTool implements WebSearchTool {
  name = 'Anthropic Web Search';
  description = 'High-quality web search with Claude analysis';
  
  private apiKey: string;
  private baseUrl = 'https://api.anthropic.com/v1/messages';
  
  constructor(apiKey?: string) {
    this.apiKey = apiKey || process.env.ANTHROPIC_API_KEY || '';
  }
  
  async search(query: string): Promise<WebSearchResponse> {
    if (!this.apiKey) {
      return {
        results: [],
        summary: `Analysis simulation for: ${query}. (Anthropic API key not configured)`,
        source: 'anthropic',
        cost: 0,
        success: false,
        error: 'API key not configured'
      };
    }

    try {
      console.log(`Anthropic: Analyzing "${query}"`);
      
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'anthropic-version': '2023-06-01',
          'x-api-key': this.apiKey
        },
        body: JSON.stringify({
          model: 'claude-3-5-sonnet-20241022',
          max_tokens: 1000,
          messages: [
            {
              role: 'user',
              content: `Provide strategic business intelligence analysis for: "${query}"

Focus on:
1. Market trends and opportunities
2. Key industry insights
3. Competitive landscape overview
4. Strategic implications

Provide a concise but insightful analysis that would be valuable for strategic planning.`
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`Anthropic API error: ${response.status}`);
      }

      const data = await response.json();
      const content = data.content[0]?.text || '';
      
      // Since we don't have actual web results, we create a structured response
      const results: WebSearchResult[] = [
        {
          title: `Strategic Analysis: ${query}`,
          url: 'https://claude.ai/analysis',
          description: 'Claude AI strategic business intelligence',
          content: content
        }
      ];

      return {
        results,
        summary: content,
        source: 'anthropic',
        cost: 0.015, // Estimated cost for Claude call
        success: true
      };

    } catch (error) {
      console.error('Anthropic search error:', error);
      return {
        results: [],
        summary: `Analysis failed for "${query}": ${error instanceof Error ? error.message : 'Unknown error'}`,
        source: 'anthropic',
        cost: 0,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  async searchMultiple(queries: string[]): Promise<WebSearchResponse[]> {
    console.log(`Anthropic: Executing ${queries.length} analyses`);
    const promises = queries.map(query => this.search(query));
    const results = await Promise.all(promises);
    
    const successCount = results.filter(r => r.success).length;
    console.log(`Anthropic: Completed ${successCount}/${queries.length} analyses successfully`);
    
    return results;
  }
}

// Search Tool Factory
export function createWebSearchTool(provider: 'brave' | 'anthropic'): WebSearchTool {
  switch (provider) {
    case 'brave':
      return new BraveSearchTool();
    case 'anthropic':
      return new AnthropicWebSearchTool();
    default:
      throw new Error(`Unknown web search provider: ${provider}`);
  }
}

interface BusinessSearchInfo {
  description?: string;
  targetMarket?: string;
  industry?: string;
  revenueModel?: string;
}

// Search Queries Generator for Business Opportunity Analysis
export function generateBusinessSearchQueries(businessInfo: BusinessSearchInfo): string[] {
  const { description, targetMarket, industry, revenueModel } = businessInfo;
  
  const queries = [
    `${industry} market size trends 2024`,
    `${targetMarket} customer behavior analysis`,
    `${revenueModel} business model best practices`,
    `${industry} competitive landscape analysis`,
    `${targetMarket} market research insights`
  ];

  // Add business-specific queries
  if (description) {
    queries.push(`${description} market opportunity`);
  }

  return queries.filter(q => q.length > 10); // Remove queries that are too short
}

// Cost Calculator
export function calculateSearchCost(responses: WebSearchResponse[]): number {
  return responses.reduce((total, response) => total + response.cost, 0);
}

// Search Results Aggregator
export function aggregateSearchResults(responses: WebSearchResponse[]): {
  allResults: WebSearchResult[];
  combinedSummary: string;
  totalCost: number;
  successRate: number;
} {
  const allResults = responses.flatMap(r => r.results);
  const summaries = responses.filter(r => r.summary && r.success).map(r => r.summary);
  const combinedSummary = summaries.length > 0 ? summaries.join('\n\n') : 'No search results available.';
  const totalCost = calculateSearchCost(responses);
  const successCount = responses.filter(r => r.success).length;
  const successRate = responses.length > 0 ? successCount / responses.length : 0;

  return {
    allResults,
    combinedSummary,
    totalCost,
    successRate
  };
} 