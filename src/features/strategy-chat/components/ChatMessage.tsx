import { ChatMessage as ChatMessageType } from '../types';

interface ChatMessageProps {
  message: ChatMessageType;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.type === 'bot';
  const isUser = message.type === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] px-4 py-3 rounded-2xl ${
          isBot
            ? 'bg-accent/20 text-bone border border-accent/30'
            : 'bg-accent text-obsidian'
        }`}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap text-obsidian">
          {message.content}
        </p>
        <div className="text-xs opacity-70 mt-1 text-obsidian">
          {message.timestamp.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
      </div>
    </div>
  );
} 