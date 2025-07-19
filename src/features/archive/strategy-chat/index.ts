// Main component
export { StrategyChat } from './components/StrategyChat';
export { EnhancedStrategyChat } from './components/EnhancedStrategyChat';

// Types
export type { 
  ChatMessage as ChatMessageType, 
  ChatSession, 
  UserResponse, 
  ChatProps 
} from './types';

// Components (for advanced usage)
export { ChatMessage, CompletionSummary } from './components';

// Hooks (for advanced usage)
export { useChat } from './hooks/useChat';

// Utils (for advanced usage)
export { extractName, generateId, calculateProgress } from './utils/helpers';
export { STRATEGY_QUESTIONS } from './utils/questions'; 