import { ChatQuestion } from '../types';

export const STRATEGY_QUESTIONS: ChatQuestion[] = [
  {
    id: 'name',
    question: "Hi there! I'm your NextStage Strategy Concierge. What's your first name?",
    type: 'text',
    placeholder: 'Your first name...',
    followUp: 'Nice to meet you, {name}! 👋'
  },
  {
    id: 'vision',
    question: "What are you building? I'd love to hear about your vision.",
    type: 'textarea',
    placeholder: 'Tell me about your project, product, or idea...',
  },
  {
    id: 'audience',
    question: "Who is this for? Paint me a picture of your ideal customer.",
    type: 'textarea',
    placeholder: 'Describe your target audience...',
  },
  {
    id: 'problem',
    question: "What's the core problem you're solving? What keeps your customers up at night?",
    type: 'textarea',
    placeholder: 'What pain point or challenge does your solution address?',
  },
  {
    id: 'success',
    question: "Dream with me for a moment - what would success look like in 6 months?",
    type: 'textarea',
    placeholder: 'Paint a picture of your ideal outcome...',
  },
  {
    id: 'timeline',
    question: "What's your ideal timeline for making this happen?",
    type: 'buttons',
    options: ["Let's go now! 🚀", "1–3 months", "3–6 months", "We're exploring"],
  },
  {
    id: 'budget',
    question: "What budget range are you working with?",
    type: 'buttons',
    options: ["<$10K", "$10–50K", "$50K+", "Let's discuss"],
  },
  {
    id: 'additional',
    question: "Anything else you'd like to share? Any concerns, dreams, or wild ideas?",
    type: 'textarea',
    placeholder: 'Additional context, concerns, or goals... (optional)',
    optional: true,
  }
]; 