import { Button } from "@/components/ui/button";
import { Beaker, Shield, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface LabLink {
  label: string;
  href: string;
  Icon: LucideIcon;
}

const LAB_LINKS: LabLink[] = [
  { label: "TryHackMe Labs", href: "https://tryhackme.com/", Icon: Shield },
  { label: "picoCTF Challenges", href: "https://picoctf.org/", Icon: Target },
  { label: "PortSwigger Academy", href: "https://portswigger.net/web-security", Icon: Beaker },
];

const ExperimentButtons = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {LAB_LINKS.map(({ label, href, Icon }) => (
        <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} (opens in new tab)`}>
          <Button variant="experiment">
            <Icon className="h-4 w-4" />
            <span>{label}</span>
          </Button>
        </a>
      ))}
    </div>
  );
};

export default ExperimentButtons;
