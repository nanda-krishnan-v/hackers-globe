import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export type Command = {
  name: string;
  category: string;
  description: string;
  usage: string;
  output?: string;
};

interface CommandCardProps {
  command: Command;
}

export const CommandCard = ({ command }: CommandCardProps) => {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(command.usage);
      setCopied(true);
      toast("Command copied", {
        description: command.usage,
      });
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      toast("Copy failed", { description: "Your browser blocked clipboard access." });
    }
  };

  return (
    <Card className="h-full transition-transform duration-200 hover:-translate-y-0.5 focus-within:ring-1 focus-within:ring-ring">
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div>
          <CardTitle className="text-lg">{command.name}</CardTitle>
          <CardDescription>{command.description}</CardDescription>
        </div>
        <Badge variant="secondary" className="shrink-0 self-start">
          {command.category}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative group">
          <pre className="rounded-md bg-secondary p-3 text-sm overflow-x-auto">
            <code className="font-mono leading-relaxed text-accent">{command.usage}</code>
          </pre>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={onCopy}
            aria-label="Copy command"
            className="absolute top-2 right-2"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
        {command.output && (
          <div>
            <p className="text-sm mb-2 text-muted-foreground">Sample output</p>
            <pre className="rounded-md border border-border bg-card p-3 text-xs overflow-x-auto">
              <code className="font-mono leading-relaxed text-foreground/80">{command.output}</code>
            </pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CommandCard;
