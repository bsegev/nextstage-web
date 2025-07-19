// Shared types for NextStage application
// This file contains interfaces and types used across multiple modules

export interface ClientProfile {
  name: string
  projectDescription: string
  targetAudience: string
  coreProblem: string
  successVision: string
  timeline: string
  budget: string
  additionalContext: string
  industry: string
}

export interface BriefSection {
  title: string
  content: string
  reasoning: string
}

export interface GeneratedBrief {
  personalMessage: string
  sections: BriefSection[]
}

export interface UserResponse {
  question: string;
  answer: string;
  questionIndex: number;
  timestamp: Date;
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