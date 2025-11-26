import React, { useState } from "react";
import { Send, Loader2 } from "lucide-react";

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<
    Array<{ role: string; content: string }>
  >([
    {
      role: "assistant",
      content:
        "Hi! I'm your AI interview assistant. Ask me about cybersecurity concepts, interview tips, or practice scenarios.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    // Simulate API response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "This is a placeholder response. Configure your Gemini API key to enable AI responses.",
        },
      ]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="border border-border rounded-lg overflow-hidden flex flex-col h-[600px]">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-4 ${
                message.role === "user"
                  ? "bg-foreground text-background"
                  : "bg-muted"
              }`}
            >
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-muted rounded-lg p-4">
              <Loader2 className="h-4 w-4 animate-spin" />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="border-t border-border p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20 text-sm"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-4 py-2 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatBot;
