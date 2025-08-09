import React, { useState } from 'react';
import { Book, ExternalLink, Shield, Target, Beaker, Code, Globe, Users, Award, Wrench, Terminal, ChevronDown, ChevronUp } from 'lucide-react';
import { CommandCard, type Command } from "@/components/CommandCard";
import commandsData from "@/data/commands.json";

const Material: React.FC = () => {
  const commands = commandsData as Command[];
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'practical-labs': true,
    'command-reference': true,
    'theoretical': false,
    'certifications': false,
    'communities': false
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const groupedCommands = commands.reduce((acc, command) => {
    const { category } = command;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(command);
    return acc;
  }, {} as Record<string, Command[]>);

  const practicalLabs = [
    { 
      name: "TryHackMe", 
      url: "https://tryhackme.com/", 
      icon: Shield,
      description: "Hands-on cybersecurity challenges and learning paths",
      difficulty: "Beginner to Advanced"
    },
    { 
      name: "picoCTF", 
      url: "https://picoctf.org/", 
      icon: Target,
      description: "Capture The Flag competitions for all skill levels",
      difficulty: "Beginner to Expert"
    },
    { 
      name: "PortSwigger Academy", 
      url: "https://portswigger.net/web-security", 
      icon: Beaker,
      description: "Free web security training with interactive labs",
      difficulty: "Beginner to Advanced"
    },
    { 
      name: "HackTheBox", 
      url: "https://www.hackthebox.com/", 
      icon: Code,
      description: "Real-world penetration testing labs",
      difficulty: "Intermediate to Expert"
    },
    { 
      name: "OverTheWire", 
      url: "https://overthewire.org/wargames/", 
      icon: Wrench,
      description: "Wargames to learn security concepts",
      difficulty: "Beginner to Advanced"
    }
  ];

  const theoreticalResources = [
    {
      title: "OWASP Top 10",
      url: "https://owasp.org/www-project-top-ten/",
      description: "The most critical web application security risks"
    },
    {
      title: "NIST Cybersecurity Framework",
      url: "https://www.nist.gov/cyberframework",
      description: "Comprehensive cybersecurity guidelines and best practices"
    },
    {
      title: "SANS Reading Room",
      url: "https://www.sans.org/white-papers/",
      description: "White papers and research on cybersecurity topics"
    },
    {
      title: "CISA Resources",
      url: "https://www.cisa.gov/",
      description: "Government resources and security advisories"
    }
  ];

  const certificationPaths = [
    {
      name: "Security+",
      provider: "CompTIA",
      level: "Entry Level",
      description: "Foundational cybersecurity certification"
    },
    {
      name: "CISSP",
      provider: "ISC²",
      level: "Advanced",
      description: "Information systems security professional certification"
    },
    {
      name: "CEH",
      provider: "EC-Council",
      level: "Intermediate",
      description: "Certified Ethical Hacker certification"
    },
    {
      name: "OSCP",
      provider: "Offensive Security",
      level: "Advanced",
      description: "Hands-on penetration testing certification"
    }
  ];

  const communities = [
    {
      name: "r/cybersecurity",
      platform: "Reddit",
      url: "https://reddit.com/r/cybersecurity",
      description: "Active cybersecurity community discussions"
    },
    {
      name: "InfoSec Community",
      platform: "Discord",
      url: "https://discord.gg/infosec",
      description: "Real-time chat with security professionals"
    },
    {
      name: "DEF CON Groups",
      platform: "Local Chapters",
      url: "https://defcon.org/html/links/dc-groups.html",
      description: "Local cybersecurity meetups worldwide"
    }
  ];

  const SectionHeader = ({ 
    id, 
    icon: Icon, 
    title, 
    description, 
    iconColor = "text-blue-600" 
  }: { 
    id: string; 
    icon: React.ElementType; 
    title: string; 
    description?: string;
    iconColor?: string;
  }) => (
    <div 
      className="flex items-center justify-between cursor-pointer mb-6 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
      onClick={() => toggleSection(id)}
    >
      <div className="flex items-center gap-3">
        <Icon className={`h-6 w-6 ${iconColor}`} />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          {description && (
            <p className="text-gray-600 text-sm mt-1">{description}</p>
          )}
        </div>
      </div>
      {expandedSections[id] ? (
        <ChevronUp className="h-5 w-5 text-gray-400" />
      ) : (
        <ChevronDown className="h-5 w-5 text-gray-400" />
      )}
    </div>
  );

  return (
    <div className="bg-background min-h-screen p-6">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-foreground mb-2">Cybersecurity Materials</h1>
          <p className="text-xl text-muted-foreground mb-10">Your comprehensive guide to tools, resources, and knowledge.</p>
        </div>

        {/* Hands-on Practice Labs */}
        <section className="mb-8">
          <SectionHeader
            id="practical-labs"
            icon={Target}
            title="Hands-on Practice Labs"
            description="Interactive environments to practice cybersecurity skills"
            iconColor="text-red-600"
          />
          {expandedSections['practical-labs'] && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {practicalLabs.map((lab, index) => {
                const IconComponent = lab.icon;
                return (
                  <div key={index} className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-card">
                        <IconComponent className="h-5 w-5 text-red-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{lab.name}</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">{lab.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm px-3 py-1 bg-green-100 text-green-700 rounded-full">
                        {lab.difficulty}
                      </span>
                      <a 
                        href={lab.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
                      >
                        Launch Lab
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Command Reference - Your Existing Content */}
        <section className="mb-8">
          <SectionHeader
            id="command-reference"
            icon={Terminal}
            title="Command & Tool Reference"
            description="Quick reference for common cybersecurity commands and tools"
            iconColor="text-blue-600"
          />
          {expandedSections['command-reference'] && (
            <div className="space-y-12 mb-8">
              {Object.entries(groupedCommands).map(([category, commands]) => (
                <div key={category}>
                  <h3 className="text-xl font-semibold mb-6 text-foreground bg-card p-4 rounded-lg shadow-sm">
                    {category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {commands.map((command) => (
                      <CommandCard key={command.name} command={command} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Theoretical Resources */}
        <section className="mb-8">
          <SectionHeader
            id="theoretical"
            icon={Book}
            title="Theoretical Knowledge"
            description="Essential reading and frameworks for cybersecurity understanding"
            iconColor="text-green-600"
          />
          {expandedSections['theoretical'] && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {theoreticalResources.map((resource, index) => (
                <div key={index} className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{resource.title}</h3>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                  <a 
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
                  >
                    Read More
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Certification Paths */}
        <section className="mb-8">
          <SectionHeader
            id="certifications"
            icon={Award}
            title="Certification Paths"
            description="Industry-recognized certifications to advance your career"
            iconColor="text-purple-600"
          />
          {expandedSections['certifications'] && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {certificationPaths.map((cert, index) => (
                <div key={index} className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{cert.name}</h3>
                    <p className="text-sm text-purple-600 font-medium mb-3">{cert.provider}</p>
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm mb-3">
                      {cert.level}
                    </span>
                    <p className="text-muted-foreground text-sm">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Communities */}
        <section className="mb-8">
          <SectionHeader
            id="communities"
            icon={Users}
            title="Communities & Networking"
            description="Connect with cybersecurity professionals and enthusiasts"
            iconColor="text-orange-600"
          />
          {expandedSections['communities'] && (
            <div className="bg-muted/50 p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {communities.map((community, index) => (
                <div key={index} className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{community.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">A curated list of platforms for hands-on practice.</p>
                  <p className="text-muted-foreground mb-4">{community.description}</p>
                  <a 
                    href={community.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors"
                  >
                    Join Community
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Material;