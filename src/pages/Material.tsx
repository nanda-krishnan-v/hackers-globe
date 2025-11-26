import React, { useState, useEffect } from "react";
import {
  Book,
  BookOpen,
  ExternalLink,
  Shield,
  Target,
  Beaker,
  Code,
  Globe,
  Users,
  Award,
  Wrench,
  Terminal,
  ChevronDown,
  ChevronUp,
  Zap,
  Brain,
  Trophy,
  MessageSquare,
  Search,
  Filter,
  Star,
  Clock,
  TrendingUp,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Heart,
  Play,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import CommandCard from "@/components/CommandCard";

const Material = () => {
  const [activeTab, setActiveTab] = useState("practice");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Commands data
  const commands = [
    {
      name: "nmap",
      category: "Networking",
      description: "Network discovery and security auditing",
      usage: "nmap -sS -O target.com",
      output: "Starting Nmap scan...",
    },
    {
      name: "wireshark",
      category: "Analysis",
      description: "Network protocol analyzer",
      usage: "wireshark -i eth0",
      output: "Capturing packets...",
    },
  ];

  const tabs = [
    {
      id: "practice",
      label: "Practice",
      icon: Target,
    },
    {
      id: "tools",
      label: "Tools",
      icon: Terminal,
    },
    {
      id: "theory",
      label: "Theory",
      icon: Book,
    },
    {
      id: "certs",
      label: "Certifications",
      icon: Award,
    },
    {
      id: "community",
      label: "Community",
      icon: Users,
    },
  ];

  const practicalLabs = [
    {
      name: "TryHackMe",
      url: "https://tryhackme.com/",
      icon: Shield,
      description:
        "Gamified cybersecurity learning with interactive challenges and guided pathways",
      difficulty: "Beginner",
      students: "2M+",
    },
    {
      name: "picoCTF",
      url: "https://picoctf.org/",
      icon: Target,
      description:
        "Educational CTF platform with progressive challenges designed for beginners",
      difficulty: "All Levels",
      students: "500K+",
    },
    {
      name: "PortSwigger Academy",
      url: "https://portswigger.net/web-security",
      icon: Beaker,
      description:
        "Free web security training with hands-on labs and detailed explanations",
      difficulty: "Intermediate",
      students: "1M+",
    },
    {
      name: "HackTheBox",
      url: "https://www.hackthebox.com/",
      icon: Code,
      description:
        "Real-world penetration testing environments and active machines",
      difficulty: "Advanced",
      students: "800K+",
    },
  ];

  const theoreticalResources = [
    {
      title: "OWASP Top 10",
      url: "https://owasp.org/www-project-top-ten/",
      description:
        "Critical web application security risks and comprehensive mitigation strategies",
      category: "Web Security",
      readTime: "15 min",
      level: "Essential",
      topics: ["Injection", "Broken Authentication", "Sensitive Data"],
    },
    {
      title: "NIST Cybersecurity Framework",
      url: "https://www.nist.gov/cyberframework",
      description:
        "Comprehensive cybersecurity guidelines and implementation guide for organizations",
      category: "Framework",
      readTime: "45 min",
      level: "Professional",
      topics: ["Identify", "Protect", "Detect", "Respond", "Recover"],
    },
    {
      title: "SANS Reading Room",
      url: "https://www.sans.org/white-papers/",
      description:
        "Latest security research papers and in-depth analysis of emerging threats",
      category: "Research",
      readTime: "30 min",
      level: "Advanced",
      topics: ["Threat Intelligence", "Incident Response", "Forensics"],
    },
  ];

  const certificationPaths = [
    {
      name: "Security+",
      provider: "CompTIA",
      level: "Entry Level",
      description:
        "Foundation certification covering core security concepts and practices",
      duration: "3-6 months",
      salary: "$55K - $75K",
      popularity: 95,
      domains: [
        "Threats",
        "Architecture",
        "Implementation",
        "Operations",
        "Governance",
      ],
    },
    {
      name: "CISSP",
      provider: "ISC²",
      level: "Advanced",
      description:
        "Advanced certification for experienced security professionals and managers",
      duration: "6-12 months",
      salary: "$110K - $150K",
      popularity: 88,
      domains: [
        "Security Management",
        "Asset Security",
        "Architecture",
        "Communications",
      ],
    },
    {
      name: "CEH",
      provider: "EC-Council",
      level: "Intermediate",
      description:
        "Ethical hacking and penetration testing certification with hands-on focus",
      duration: "4-8 months",
      salary: "$80K - $120K",
      popularity: 75,
      domains: [
        "Footprinting",
        "Scanning",
        "Enumeration",
        "System Hacking",
        "Malware",
      ],
    },
  ];

  const communities = [
    {
      name: "r/cybersecurity",
      platform: "Reddit",
      url: "https://reddit.com/r/cybersecurity",
      description:
        "Active discussions on latest threats, career advice, and industry news",
      members: "890K",
      activity: "High",
      topics: ["Career Advice", "Threat Analysis", "Tool Reviews"],
    },
    {
      name: "InfoSec Community",
      platform: "Discord",
      url: "https://discord.gg/infosec",
      description:
        "Real-time chat with security professionals worldwide and mentorship",
      members: "45K",
      activity: "Very High",
      topics: ["Live Help", "Study Groups", "Networking"],
    },
  ];

  const TabButton = ({ tab, isActive, onClick }) => {
    const Icon = tab.icon;
    return (
      <button
        onClick={onClick}
        className={`relative flex items-center gap-2 px-5 py-2.5 font-medium transition-all duration-300 ${
          isActive
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Icon className="h-4 w-4" />
        <span>{tab.label}</span>
        {isActive && (
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground rounded-full" />
        )}
      </button>
    );
  };

  const PracticeContent = () => (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {practicalLabs.map((lab, index) => {
          const IconComponent = lab.icon;
          return (
            <a
              key={index}
              href={lab.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 border border-border hover:border-foreground/20 transition-all duration-300 rounded-lg"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2.5 border border-border rounded-md group-hover:border-foreground/30 transition-colors">
                  <IconComponent className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-lg font-medium group-hover:text-foreground transition-colors">
                      {lab.name}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {lab.description}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{lab.difficulty}</span>
                    <span>•</span>
                    <span>{lab.students} students</span>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );

  const ToolsContent = () => {
    const groupedCommands = commands.reduce<Record<string, typeof commands>>(
      (acc, command) => {
        const { category } = command;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(command);
        return acc;
      },
      {}
    );

    return (
      <div className="space-y-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tools & Commands
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Essential cybersecurity tools and command references for practical
            application
          </p>
        </div>

        <div className="space-y-10">
          {Object.entries(groupedCommands).map(([category, commands]) => (
            <div key={category}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-foreground">
                <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
                {category} Tools
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {commands.map((command, index) => (
                  <CommandCard key={index} command={command} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const TheoryContent = () => (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {theoreticalResources.map((resource, index) => (
          <a
            key={index}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 border border-border hover:border-foreground/20 transition-all duration-300 rounded-lg"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-medium group-hover:text-foreground transition-colors pr-4">
                {resource.title}
              </h3>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0" />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {resource.description}
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="px-2 py-1 border border-border rounded text-xs">
                {resource.category}
              </span>
              <span className="px-2 py-1 border border-border rounded text-xs">
                {resource.readTime}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );

  const CertificationsContent = () => (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationPaths.map((cert, index) => (
          <div
            key={index}
            className="group block p-6 border border-border hover:border-foreground/20 transition-all duration-300 rounded-lg"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 border border-border rounded-md group-hover:border-foreground/30 transition-colors">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">{cert.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {cert.provider}
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {cert.description}
            </p>
            <div className="space-y-2 text-xs text-muted-foreground">
              <div className="flex items-center justify-between">
                <span>Level</span>
                <span className="text-foreground">{cert.level}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Duration</span>
                <span className="text-foreground">{cert.duration}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Salary Range</span>
                <span className="text-foreground font-medium">
                  {cert.salary}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const CommunityContent = () => (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {communities.map((community, index) => (
          <a
            key={index}
            href={community.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 border border-border hover:border-foreground/20 transition-all duration-300 rounded-lg"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2.5 border border-border rounded-md group-hover:border-foreground/30 transition-colors">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-lg font-medium group-hover:text-foreground transition-colors">
                    {community.name}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {community.description}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{community.platform}</span>
                  <span>•</span>
                  <span>{community.members} members</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "practice":
        return <PracticeContent />;
      case "tools":
        return <ToolsContent />;
      case "theory":
        return <TheoryContent />;
      case "certs":
        return <CertificationsContent />;
      case "community":
        return <CommunityContent />;
      default:
        return <PracticeContent />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Learning Resources
          </h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Curated materials and platforms to help you master cybersecurity
            concepts and techniques.
          </p>

          {/* Tab Navigation */}
          <div className="flex items-center gap-1 border-b border-border">
            {tabs.map((tab) => (
              <TabButton
                key={tab.id}
                tab={tab}
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">{renderContent()}</div>
      </div>

      {/* Call to Action Section */}
      {/* <section className="bg-muted/30 py-20 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
            Ready to Start Your Cybersecurity Journey?
          </h3>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of professionals mastering cybersecurity skills through hands-on practice and expert guidance
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2 text-lg">
              <Zap className="h-5 w-5" />
              Start Learning Today
            </button>
            <button className="border border-border text-foreground px-8 py-4 rounded-lg font-medium hover:bg-muted transition-all duration-300 flex items-center gap-2 text-lg">
              <Book className="h-5 w-5" />
              View All Resources
            </button>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
              <p>© 2025 HackersGlobe. Built by Nanda Krishnan V</p>
              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/nanda-krishnan-v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://x.com/VNandakrishnan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nanda-krishnan-v-11234b27b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Material;
