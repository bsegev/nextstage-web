export interface ChatMessage {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
  questionIndex?: number;
}

export interface UserResponse {
  question: string;
  answer: string;
  questionIndex: number;
  timestamp: Date;
}

export interface ChatQuestion {
  id: string;
  question: string;
  type: 'text' | 'textarea' | 'buttons';
  placeholder?: string;
  options?: string[];
  optional?: boolean;
  followUp?: string;
}

export interface ChatSession {
  id: string;
  responses: UserResponse[];
  currentQuestionIndex: number;
  isComplete: boolean;
  userName?: string;
  startedAt: Date;
  completedAt?: Date;
}

export interface ChatProps {
  onComplete?: (session: ChatSession) => void;
  onProgress?: (progress: number) => void;
  initialSession?: Partial<ChatSession>;
} 