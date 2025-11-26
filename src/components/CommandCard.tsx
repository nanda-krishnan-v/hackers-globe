import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
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
      toast("Copied to clipboard");
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      toast("Copy failed");
    }
  };

  return (
    <div className="group p-5 border border-border hover:border-foreground/20 transition-all duration-300 rounded-lg">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-base font-medium mb-1">{command.name}</h3>
          <p className="text-sm text-muted-foreground">{command.description}</p>
        </div>
        <span className="text-xs px-2 py-1 border border-border rounded flex-shrink-0 ml-3">
          {command.category}
        </span>
      </div>
      <div className="relative">
        <pre className="rounded-md bg-muted p-3 text-xs overflow-x-auto pr-12">
          <code className="font-mono">{command.usage}</code>
        </pre>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={onCopy}
          aria-label="Copy command"
          className="absolute top-1.5 right-1.5 h-7 w-7 p-0"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </Button>
      </div>
      {command.output && (
        <div className="mt-3">
          <p className="text-xs text-muted-foreground mb-1.5">Output</p>
          <pre className="rounded-md border border-border bg-background p-2.5 text-xs overflow-x-auto">
            <code className="font-mono text-muted-foreground">
              {command.output}
            </code>
          </pre>
        </div>
      )}
    </div>
  );
};

export default CommandCard;
