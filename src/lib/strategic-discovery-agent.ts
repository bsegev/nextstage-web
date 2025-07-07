import { openai } from './openai'
import { ConversationService } from './conversation-service'
import { supabase } from './supabase'

interface DiscoveryContext {
  conversationId: string
  userName?: string
  businessContext?: any
  currentPhase: 'introduction' | 'discovery' | 'deep_dive' | 'validation' | 'brief_generation'
  collectedInsights: any[]
  completionReadiness: number
  conversationHistory: Array<{
    role: 'user' | 'assistant'
    content: string
    timestamp: Date
  }>
}

interface AgentResponse {
  message: string
  action: 'continue' | 'probe_deeper' | 'change_topic' | 'generate_brief' | 'collect_lead_info' | 'simplify_approach' | 'continue_discovery'
  reasoning: string
  toolsUsed: string[]
  phase: string
  completionScore: number
}

export class StrategicDiscoveryAgent {
  private conversationService: ConversationService
  private context: DiscoveryContext

  constructor(conversationId: string) {
    this.conversationService = new ConversationService()
    this.context = {
      conversationId,
      currentPhase: 'introduction',
      collectedInsights: [],
      completionReadiness: 0,
      conversationHistory: []
    }
  }

  // Main agent loop - this is the core Agent pattern
  async processUserInput(userInput: string): Promise<AgentResponse> {
    // Update conversation history
    this.context.conversationHistory.push({
      role: 'user',
      content: userInput,
      timestamp: new Date()
    })

    // Store message in database
    await this.conversationService.addMessage(
      this.context.conversationId,
      'user',
      userInput,
      { currentTopic: this.context.currentPhase }
    )

    // Use tools to analyze current state
    const analysis = await this.analyzeConversationState()
    
    // Agent decides what to do next based on analysis
    const decision = await this.makeAgentDecision(userInput, analysis)
    
    // Execute the decision
    const response = await this.executeDecision(decision, userInput)
    
    // Update context based on response
    await this.updateContext(response)
    
    return response
  }

  // Tool: Analyze conversation state
  private async analyzeConversationState(): Promise<any> {
    const prompt = `
As a LEAD QUALIFICATION agent, analyze the current conversation state:

CONVERSATION HISTORY:
${this.context.conversationHistory.map(msg => `${msg.role}: ${msg.content}`).join('\n')}

CURRENT PHASE: ${this.context.currentPhase}

LEAD QUALIFICATION CHECKLIST:
- Name: collected? 
- Company: collected?
- Project summary: clear?
- Budget range: known?
- Timeline: known?
- Decision maker: identified?

USER READINESS SIGNALS:
- Are they giving short responses?
- Do they say "not sure", "don't know", "haven't thought about it"?
- Are they overwhelmed by complex questions?

Analyze and return JSON with:
{
  "leadInfoCompleteness": 0-100,
  "userOverwhelm": 0-100,
  "missingLeadInfo": ["name", "company", "budget", "timeline"],
  "recommendedAction": "collect_lead_info" | "simplify_approach" | "continue_discovery" | "generate_brief",
  "reasoning": "why this action",
  "focusArea": "lead_info|project_basics|qualification",
  "readinessForBrief": 0-100
}
    `

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a strategic analysis tool. Return valid JSON only." },
          { role: "user", content: prompt }
        ],
        temperature: 0.3,
        max_tokens: 500,
        response_format: { type: "json_object" }
      })

      return JSON.parse(completion.choices[0]?.message?.content || '{}')
    } catch (error) {
      console.error('Error analyzing conversation state:', error)
      return {
        leadInfoCompleteness: 20,
        userOverwhelm: 30,
        missingLeadInfo: ["name", "company", "project"],
        recommendedAction: "collect_lead_info",
        reasoning: "Need basic lead information",
        focusArea: "lead_info",
        readinessForBrief: 10
      }
    }
  }

  // Tool: Extract business context
  private async extractBusinessContext(userInput: string): Promise<any> {
    const prompt = `
Extract business context from this user input:

USER INPUT: "${userInput}"

Return JSON with:
{
  "businessType": "saas|ecommerce|consulting|etc",
  "industry": "tech|healthcare|finance|etc", 
  "targetMarket": "description",
  "problemStatement": "what problem they're solving",
  "currentStage": "idea|mvp|growth|scale",
  "keyMetrics": ["metric1", "metric2"],
  "competitiveContext": "description",
  "urgency": 1-10,
  "strategicImplications": ["implication1", "implication2"]
}
    `

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a business context extraction tool. Return valid JSON only." },
          { role: "user", content: prompt }
        ],
        temperature: 0.3,
        max_tokens: 400,
        response_format: { type: "json_object" }
      })

      return JSON.parse(completion.choices[0]?.message?.content || '{}')
    } catch (error) {
      console.error('Error extracting business context:', error)
      return {}
    }
  }

  // Agent decision making - SEMANTIC EXTRACTION with LLMs
  private async makeAgentDecision(userInput: string, analysis: any): Promise<any> {
    // Extract lead info semantically from entire conversation
    const leadInfo = await this.extractLeadInfoSemantically()
    
    // SEMANTIC-BASED DECISION LOGIC
    if (!leadInfo.name) {
      return {
        decision: "collect_lead_info",
        reasoning: "Need to collect name first",
        nextQuestion: "What's your name?",
        focusArea: "lead_info",
        probeDepth: "surface"
      }
    }
    
    if (!leadInfo.company) {
      return {
        decision: "collect_lead_info", 
        reasoning: "Got name, now need company",
        nextQuestion: "What company are you with?",
        focusArea: "lead_info",
        probeDepth: "surface"
      }
    }
    
    if (!leadInfo.project) {
      return {
        decision: "collect_lead_info",
        reasoning: "Got company, now need project info",
        nextQuestion: "In one sentence, what's the main challenge you're trying to solve?",
        focusArea: "project_basics",
        probeDepth: "surface"
      }
    }
    
    // Have all info - generate brief
    return {
      decision: "generate_brief",
      reasoning: "Have enough info to generate brief",
      nextQuestion: "Generating strategic brief...",
      focusArea: "brief_generation",
      probeDepth: "surface"
    }
  }
  
  // Semantic extraction using LLM
  private async extractLeadInfoSemantically(): Promise<{name: string | null, company: string | null, project: string | null}> {
    const conversationText = this.context.conversationHistory
      .filter(msg => msg.role === 'user')
      .map(msg => msg.content)
      .join('\n')
    
    if (!conversationText.trim()) {
      return { name: null, company: null, project: null }
    }
    
    const prompt = `
Extract lead qualification information from this conversation:

USER MESSAGES:
${conversationText}

Extract and return JSON with:
{
  "name": "person's name if mentioned (first name is fine)",
  "company": "company name if mentioned", 
  "project": "brief description of their project/challenge if mentioned"
}

Rules:
- If information is not clearly provided, return null for that field
- For name: extract from "I'm John", "my name is Sarah", "it's Mike", "John here", etc.
- For company: extract from "I work at Google", "my company ABC", "called StartupX", etc.
- For project: extract challenge, problem, or what they're building

Return valid JSON only.
    `
    
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a precise information extraction tool. Return valid JSON only." },
          { role: "user", content: prompt }
        ],
        temperature: 0.1,
        max_tokens: 200,
        response_format: { type: "json_object" }
      })

      const extracted = JSON.parse(completion.choices[0]?.message?.content || '{}')
      
      // Store extracted name in context
      if (extracted.name && !this.context.userName) {
        this.context.userName = extracted.name
      }
      
      return {
        name: extracted.name || null,
        company: extracted.company || null,
        project: extracted.project || null
      }
    } catch (error) {
      console.error('Error extracting lead info:', error)
      return { name: null, company: null, project: null }
    }
  }
  
  // Removed complex extraction methods - using semantic extraction instead

  // Execute the agent's decision
  private async executeDecision(decision: any, userInput: string): Promise<AgentResponse> {
    let message = ""
    let action = decision.decision as AgentResponse['action']
    let toolsUsed = ['conversation_analyzer', 'decision_maker']

    switch (decision.decision) {
      case 'collect_lead_info':
        // Use the nextQuestion directly from decision - no complex generation needed
        message = decision.nextQuestion
        toolsUsed.push('lead_qualifier')
        action = 'collect_lead_info'
        break
        
      case 'simplify_approach':
        message = await this.generateSimpleQuestion(userInput)
        toolsUsed.push('simplifier')
        action = 'simplify_approach'
        break
        
      case 'continue_discovery':
        message = await this.generateDiscoveryQuestion(decision.nextQuestion)
        toolsUsed.push('discovery_generator')
        action = 'continue_discovery'
        break
        
      case 'generate_brief':
        message = await this.generateStrategicBrief()
        toolsUsed.push('brief_generator')
        action = 'generate_brief'
        break
        
      default:
        message = "Thanks for sharing that. What's your name and what company are you with?"
        action = 'collect_lead_info'
    }

    // Store agent response
    this.context.conversationHistory.push({
      role: 'assistant',
      content: message,
      timestamp: new Date()
    })

    await this.conversationService.addMessage(
      this.context.conversationId,
      'assistant',
      message,
      { 
        agentName: 'strategic_discovery_agent',
        agentReasoning: decision.reasoning,
        currentTopic: this.context.currentPhase
      }
    )

    return {
      message,
      action,
      reasoning: decision.reasoning,
      toolsUsed,
      phase: this.context.currentPhase,
      completionScore: this.context.completionReadiness
    }
  }

  // Tool: Generate lead qualification question
  private async generateLeadInfoQuestion(focusArea: string): Promise<string> {
    const leadQuestions = {
      'lead_info': [
        "Before we dive deeper, what's your name and what company are you with?",
        "To help me better assist you, could you share your name and company?",
        "What's your name, and what's the name of your company?"
      ],
      'project_basics': [
        "In one sentence, what's the main challenge you're trying to solve?",
        "What's the core problem your app would solve?",
        "What's driving this project for your business?"
      ],
      'qualification': [
        "What's your timeline for this project?",
        "Do you have a budget range in mind?",
        "Are you the person who would make the final decision on this project?"
      ]
    }

    const questions = leadQuestions[focusArea as keyof typeof leadQuestions] || leadQuestions.lead_info
    return questions[Math.floor(Math.random() * questions.length)]
  }

  // Tool: Generate simple question when user is overwhelmed
  private async generateSimpleQuestion(userInput: string): Promise<string> {
    const prompt = `
The user seems overwhelmed or not ready for complex questions. They said: "${userInput}"

Generate a simple, friendly question that:
- Backs off from complexity
- Asks for basic information
- Is encouraging and supportive
- Focuses on lead qualification (name, company, basic project info)

Return just the question, no explanation.
    `

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a friendly lead qualifier. Keep it simple when users seem overwhelmed." },
          { role: "user", content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 60
      })

      return completion.choices[0]?.message?.content || "No worries! Let's start simple - what's your name?"
    } catch (error) {
      console.error('Error generating simple question:', error)
      return "No problem! Let's keep it simple. What's your name and company?"
    }
  }

  // Tool: Generate probe question (kept for backwards compatibility)
  private async generateProbeQuestion(userInput: string, focusArea: string): Promise<string> {
    const prompt = `
Generate a strategic follow-up question to probe deeper into "${focusArea}".

USER SAID: "${userInput}"
FOCUS AREA: ${focusArea}

Create a question that:
- Probes deeper into the strategic implications
- Uncovers hidden opportunities or risks
- Gets specific, actionable insights
- Maintains conversational flow

Return just the question, no explanation.
    `

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a strategic questioning expert. Generate one focused question." },
          { role: "user", content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 100
      })

      return completion.choices[0]?.message?.content || "Tell me more about that."
    } catch (error) {
      console.error('Error generating probe question:', error)
      return "That's interesting. Can you elaborate on the strategic implications?"
    }
  }

  // Tool: Generate topic transition
  private async generateTopicTransition(newTopic: string): Promise<string> {
    const prompt = `
Generate a smooth transition to shift the conversation to "${newTopic}".

CURRENT CONTEXT: Strategic discovery conversation
NEW TOPIC: ${newTopic}

Create a transition that:
- Acknowledges their previous response
- Smoothly introduces the new topic
- Maintains engagement
- Shows strategic thinking

Return just the transition statement.
    `

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a conversation flow expert. Generate smooth transitions." },
          { role: "user", content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 100
      })

      return completion.choices[0]?.message?.content || `That gives me good insight. Let's explore ${newTopic}.`
    } catch (error) {
      console.error('Error generating topic transition:', error)
      return `That's helpful. Let's shift to discussing ${newTopic}.`
    }
  }

  // Tool: Generate discovery question
  private async generateDiscoveryQuestion(suggestion: string): Promise<string> {
    const prompt = `
Generate a strategic discovery question based on: "${suggestion}"

CONVERSATION CONTEXT: ${this.context.conversationHistory.slice(-4).map(msg => `${msg.role}: ${msg.content}`).join('\n')}

Create a question that:
- Builds on the conversation naturally
- Uncovers strategic insights
- Is specific and actionable
- Maintains engagement

Return just the question.
    `

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a strategic discovery expert. Generate insightful questions." },
          { role: "user", content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 100
      })

      return completion.choices[0]?.message?.content || suggestion
    } catch (error) {
      console.error('Error generating discovery question:', error)
      return suggestion
    }
  }

  // Tool: Generate strategic brief
  private async generateStrategicBrief(): Promise<string> {
    // Extract lead info semantically
    const leadInfo = await this.extractLeadInfoSemantically()
    
    const name = leadInfo.name || 'Client'
    const company = leadInfo.company || 'their company'
    const project = leadInfo.project || 'their project'

    const prompt = `
Generate a strategic brief for this lead qualification session:

CLIENT INFO:
- Name: ${name}
- Company: ${company}
- Project Challenge: ${project}

Create a professional strategic brief with:
1. Executive Summary - personalized for ${name}
2. Business Opportunity Analysis - focused on their challenge
3. Strategic Recommendations - 3-4 specific, actionable recommendations
4. Next Steps - immediate actions they can take

Keep it concise, professional, and focused on their specific challenge. Show genuine understanding of their situation.
    `

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a senior strategic consultant generating a comprehensive brief." },
          { role: "user", content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 1500
      })

      const briefContent = completion.choices[0]?.message?.content || 'Strategic brief could not be generated.'
      
      // Store brief in database
      await this.storeBrief(briefContent)
      
      return briefContent
    } catch (error) {
      console.error('Error generating strategic brief:', error)
      return `Thanks ${name}! I've collected your information:
      
**Name:** ${name}
**Company:** ${company}  
**Challenge:** ${project}

I apologize, but I encountered an issue generating your full strategic brief. Our team will review this information and get back to you with personalized recommendations for your project.`
    }
  }

  // Store brief in database
  private async storeBrief(briefContent: string): Promise<void> {
    try {
      await supabase
        .from('strategic_briefs')
        .insert({
          conversation_id: this.context.conversationId,
          brief_data: {
            content: briefContent,
            generatedAt: new Date().toISOString(),
            generationType: 'agent_generated'
          },
          generation_model: 'gpt-4-agent'
        })
    } catch (error) {
      console.error('Error storing brief:', error)
    }
  }

  // Update context after each interaction
  private async updateContext(response: AgentResponse): Promise<void> {
    // Update completion readiness
    this.context.completionReadiness = response.completionScore
    
    // Update phase if needed
    if (response.action === 'generate_brief') {
      this.context.currentPhase = 'brief_generation'
    }
    
    // Store insights
    if (response.toolsUsed.includes('conversation_analyzer')) {
      this.context.collectedInsights.push({
        timestamp: new Date(),
        insight: response.reasoning,
        phase: this.context.currentPhase
      })
    }
  }

  // Initialize conversation
  async startConversation(userName?: string): Promise<AgentResponse> {
    this.context.userName = userName
    
    const welcomeMessage = userName 
      ? `Hi ${userName}! I'm your NextStage Strategy Concierge. Tell me about your business challenge.`
      : `Hi! I'm your NextStage Strategy Concierge. What's your name and what business challenge can I help you with?`

    // Store initial message
    this.context.conversationHistory.push({
      role: 'assistant',
      content: welcomeMessage,
      timestamp: new Date()
    })

    await this.conversationService.addMessage(
      this.context.conversationId,
      'assistant',
      welcomeMessage,
      { 
        agentName: 'strategic_discovery_agent',
        agentReasoning: 'Initial conversation starter',
        currentTopic: 'introduction'
      }
    )

    return {
      message: welcomeMessage,
      action: 'collect_lead_info',
      reasoning: 'Starting lead qualification',
      toolsUsed: ['conversation_initializer'],
      phase: 'introduction',
      completionScore: 0
    }
  }
} 