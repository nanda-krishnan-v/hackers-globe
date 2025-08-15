import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield } from "lucide-react";

const Interview: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="container mx-auto px-4 pt-24 pb-16 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-muted text-muted-foreground rounded-full font-medium">
              <Shield className="w-4 h-4" />
              Interview Prep
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Cybersecurity Interview Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Curated resources, practice questions, and guides to help you ace
            your next interview.
          </p>
        </div>
      </section>

      {/* Placeholder Section */}
      <section className="container mx-auto px-4 pb-24">
        <div className="max-w-5xl mx-auto">
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Coming soon</CardTitle>
              <CardDescription>
                This page is under construction. Check back soon for question
                banks, scenario drills, and cheat-sheets.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <div className="h-32 rounded-lg border border-dashed border-border flex items-center justify-center">
                Placeholder area
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Interview;
