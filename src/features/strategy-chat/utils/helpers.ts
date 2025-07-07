/**
 * Extract name from user input with various common formats
 */
export function extractName(response: string): string {
  const cleaned = response
    .toLowerCase()
    .replace(/^(my name is|i'm|i am|call me|it's|its|name is)\s+/i, '')
    .replace(/[^\w\s]/g, '')
    .trim();
  
  const name = cleaned.split(' ')[0];
  return name.charAt(0).toUpperCase() + name.slice(1);
}

/**
 * Generate a unique ID for messages and sessions
 */
export function generateId(): string {
  return crypto.randomUUID();
}

/**
 * Calculate progress percentage based on current question index
 */
export function calculateProgress(currentIndex: number, totalQuestions: number): number {
  return Math.round(((currentIndex + 1) / totalQuestions) * 100);
}

/**
 * Format a follow-up message by replacing placeholders
 */
export function formatFollowUpMessage(template: string, userName: string): string {
  return template.replace('{name}', userName);
}

/**
 * Validate if a response is acceptable (not empty unless optional)
 */
export function isValidResponse(response: string, isOptional: boolean = false): boolean {
  return isOptional || response.trim().length > 0;
}

/**
 * Create a delay for better UX timing
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
} 