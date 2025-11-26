import React, { useEffect } from "react";
import ChatBot from "@/components/ChatBot";
import { MessageSquare } from "lucide-react";

const Interview: React.FC = () => {
  useEffect(() => {
    // Test API key on component mount
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    console.log("🔑 API Key loaded:", !!apiKey);
    console.log(
      "🔑 API Key preview:",
      apiKey ? `${apiKey.substring(0, 10)}...` : "NOT FOUND"
    );
  }, []);
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Interview Preparation
          </h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Practice cybersecurity interview questions with our AI assistant
            powered by Gemini.
          </p>
        </div>
      </section>

      {/* Chatbot Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="h-5 w-5" />
              <h2 className="text-xl font-semibold">AI Interview Assistant</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Ask questions about cybersecurity concepts, get interview tips, or
              practice common interview scenarios.
            </p>
          </div>
          <ChatBot />
        </div>
      </section>
    </div>
  );
};

export default Interview;
