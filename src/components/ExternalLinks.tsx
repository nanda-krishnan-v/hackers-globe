import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, ShieldCheck, Network, BookOpen, Globe } from "lucide-react";

export type ExternalResource = {
  title: string;
  description: string;
  url: string;
  icon: "globe" | "network" | "shield" | "book";
};

const ICONS = {
  globe: Globe,
  network: Network,
  shield: ShieldCheck,
  book: BookOpen,
};

const DEFAULT_RESOURCES: ExternalResource[] = [
  {
    title: "OWASP Top 10",
    description: "Most critical web application security risks.",
    url: "https://owasp.org/www-project-top-ten/",
    icon: "shield",
  },
  {
    title: "NIST Cybersecurity",
    description: "Standards and best practices for cybersecurity.",
    url: "https://www.nist.gov/cyberframework",
    icon: "book",
  },
  {
    title: "Kali Linux Docs",
    description: "Documentation for the Kali Linux distribution.",
    url: "https://www.kali.org/docs/",
    icon: "globe",
  },
  {
    title: "Wireshark",
    description: "Network protocol analyzer downloads and docs.",
    url: "https://www.wireshark.org/",
    icon: "network",
  },
  {
    title: "Hack The Box Academy",
    description: "Hands-on cybersecurity training platform.",
    url: "https://academy.hackthebox.com/",
    icon: "shield",
  },
];

interface ExternalLinksProps {
  resources?: ExternalResource[];
}

const ExternalLinks = ({ resources = DEFAULT_RESOURCES }: ExternalLinksProps) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {resources.map((r) => {
        const Icon = ICONS[r.icon];
        return (
          <a
            key={r.url}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${r.title} (opens in new tab)`}
          >
            <Card className="h-full transition-transform hover:-translate-y-0.5">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5" />
                  <CardTitle className="text-base">{r.title}</CardTitle>
                </div>
                <ExternalLink className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{r.description}</p>
              </CardContent>
            </Card>
          </a>
        );
      })}
    </div>
  );
};

export default ExternalLinks;
