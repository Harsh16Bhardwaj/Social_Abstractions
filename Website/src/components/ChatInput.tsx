import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSend, disabled }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={disabled}
        placeholder="Give your prompt..."
        className="w-full px-5 py-4 rounded-2xl glass-input text-blue-50 placeholder-teal-600 hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-400 pr-12"
      />
      <button
        type="submit"
        disabled={disabled || !input.trim()}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-xl glass-card hover:bg-teal-900 disabled:opacity-100 disabled:cursor-not-allowed transition-all duration-200 text-teal-50"
      >
        <Send size={20} />
      </button>
    </form>
  );
};