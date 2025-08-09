import { useEffect, useMemo, useState } from "react";
import SearchBar from "@/components/SearchBar";
import TabBar from "@/components/TabBar";
import CommandCard, { type Command } from "@/components/CommandCard";
import commandsData from "@/data/commands.json";
import ThemeToggle from "@/components/ThemeToggle";
import ExternalLinks from "@/components/ExternalLinks";
import ExperimentButtons from "@/components/ExperimentButtons";

const CATEGORIES = [
  "Networking Tools",
  "Ethical Hacking",
  "Cryptography",
  "Digital Forensics",
  "Linux Basics",
] as const;

type Category = typeof CATEGORIES[number];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("Networking Tools");

  // SEO - dynamic SPA title/description
  useEffect(() => {
    document.title = "Cybersecurity Command Center | Learn Security Commands";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Interactive cybersecurity learning app: search, browse categories, and learn real-world security commands."
      );
    }
  }, []);

  const filteredCommands = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    const all = (commandsData as Command[]);

    if (term.length > 0) {
      return all.filter((c) =>
        [c.name, c.description, c.category, c.usage]
          .filter(Boolean)
          .some((field) => field.toLowerCase().includes(term))
      );
    }

    return all.filter((c) => c.category === activeCategory);
  }, [searchTerm, activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <header className="container mx-auto px-4 pt-12 pb-8">
        <div className="max-w-5xl mx-auto flex items-center justify-end">
          <ThemeToggle />
        </div>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Cybersecurity Command Center
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Learn, search, and practice real-world security commands across networking, ethical hacking, cryptography, forensics, and Linux.
          </p>
        </div>

        <div className="mt-8 max-w-3xl mx-auto">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <div className="mt-4">
            <TabBar tabs={[...CATEGORIES]} active={activeCategory} onChange={(t) => setActiveCategory(t as Category)} />
          </div>
          <div className="mt-6 flex justify-center">
            <ExperimentButtons />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-16">
        {/* Results */}
        <section aria-label="Command results">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCommands.map((cmd) => (
              <CommandCard key={`${cmd.category}-${cmd.name}`} command={cmd} />)
            )}
          </div>

          {filteredCommands.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">No commands found. Try a different search term.</p>
            </div>
          )}
        </section>

        {/* External Resources */}
        <section id="resources" aria-label="External resources" className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">External Resources</h2>
          <ExternalLinks />
        </section>
      </main>
    </div>
  );
};

export default Index;
