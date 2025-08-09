import React from 'react';
import { CommandCard, type Command } from "@/components/CommandCard";
import commandsData from "@/data/commands.json";

const Material: React.FC = () => {
  const commands = commandsData as Command[];

  const groupedCommands = commands.reduce((acc, command) => {
    const { category } = command;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(command);
    return acc;
  }, {} as Record<string, Command[]>);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Command & Tool Reference</h1>
      <p className="text-muted-foreground mb-8">
        A quick reference for common cybersecurity commands and tools.
      </p>
      <div className="space-y-12">
        {Object.entries(groupedCommands).map(([category, commands]) => (
          <section key={category}>
            <h2 className="text-2xl font-semibold mb-6">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commands.map((command) => (
                <CommandCard key={command.name} command={command} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Material;
