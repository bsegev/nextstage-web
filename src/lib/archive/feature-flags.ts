// Feature flags for phased rollout
export const FEATURE_FLAGS = {
  // Phase 1: Enhanced Intelligence Analysis
  ENHANCED_INTELLIGENCE: process.env.ENABLE_ENHANCED_INTELLIGENCE === 'true' || true, // Default enabled for testing
  
  // Phase 2: Dynamic Conversation Flow
  DYNAMIC_CONVERSATION: process.env.ENABLE_DYNAMIC_CONVERSATION === 'true' || true, // Default enabled for testing
  
  // Phase 2.5: Optimized Analysis (Cost Reduction)
  OPTIMIZED_ANALYSIS: process.env.ENABLE_OPTIMIZED_ANALYSIS === 'true' || true, // Default enabled for cost savings
  
  // Phase 3: Full LLM Orchestration (coming soon)
  LLM_ORCHESTRATION: process.env.ENABLE_LLM_ORCHESTRATION === 'true' || false,
  
  // Phase 4: Agent-Based Conversation System (NEW)
  AGENT_SYSTEM: process.env.ENABLE_AGENT_SYSTEM === 'true' || true, // Default enabled for testing
  
  // Phase 5: Claude-Based Conversation System (NEWEST)
  CLAUDE_SYSTEM: process.env.ENABLE_CLAUDE_SYSTEM === 'true' || false, // Default disabled until ready
  
  // Debug mode for enhanced logging
  DEBUG_MODE: process.env.NODE_ENV === 'development' || process.env.DEBUG_ENHANCED_INTELLIGENCE === 'true'
}

export function isFeatureEnabled(flag: keyof typeof FEATURE_FLAGS): boolean {
  return FEATURE_FLAGS[flag]
}

export function getFeatureFlags() {
  return FEATURE_FLAGS
} 