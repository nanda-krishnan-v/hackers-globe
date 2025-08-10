import React, { useState } from 'react';
import { Book, BookOpen, ExternalLink, Shield, Target, Beaker, Code, Globe, Users, Award, Wrench, Terminal, ChevronDown, ChevronUp, Zap, Brain, Trophy, MessageSquare, Search, Filter, Star, Clock, TrendingUp, Github, Twitter, Linkedin, Mail, Heart, Play, ArrowRight } from 'lucide-react';

// Mock CommandCard component for demonstration
const CommandCard = ({ command }) => (
  <div className="bg-card rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-3 bg-blue-100 dark:bg-blue-950 rounded-xl group-hover:scale-110 transition-transform duration-300">
        <Terminal className="h-5 w-5 text-blue-600" />
      </div>
      <h3 className="font-semibold text-foreground text-lg">{command.name}</h3>
    </div>
    <p className="text-muted-foreground mb-4 leading-relaxed">{command.description}</p>
    <div className="bg-gray-900 rounded-lg p-4 mb-4">
      <code className="text-green-400 font-mono">{command.usage}</code>
    </div>
    {command.output && (
      <div className="text-xs text-muted-foreground bg-muted p-3 rounded-lg">
        Output: {command.output.substring(0, 50)}...
      </div>
    )}
  </div>
);

const Material = () => {
  const [activeTab, setActiveTab] = useState('practice');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock commands data
  const commands = [
    {
      name: "nmap",
      category: "Networking",
      description: "Network discovery and security auditing",
      usage: "nmap -sS -O target.com",
      output: "Starting Nmap scan..."
    },
    {
      name: "wireshark",
      category: "Analysis",
      description: "Network protocol analyzer",
      usage: "wireshark -i eth0",
      output: "Capturing packets..."
    }
  ];

  const tabs = [
    { id: 'practice', label: 'Hands-on Labs', icon: Target, color: 'text-red-600', bgColor: 'bg-red-50 dark:bg-red-950/20', borderColor: 'border-red-200' },
    { id: 'tools', label: 'Tools & Commands', icon: Terminal, color: 'text-blue-600', bgColor: 'bg-blue-50 dark:bg-blue-950/20', borderColor: 'border-blue-200' },
    { id: 'theory', label: 'Knowledge Base', icon: Book, color: 'text-green-600', bgColor: 'bg-green-50 dark:bg-green-950/20', borderColor: 'border-green-200' },
    { id: 'certs', label: 'Certifications', icon: Award, color: 'text-purple-600', bgColor: 'bg-purple-50 dark:bg-purple-950/20', borderColor: 'border-purple-200' },
    { id: 'community', label: 'Community', icon: Users, color: 'text-orange-600', bgColor: 'bg-orange-50 dark:bg-orange-950/20', borderColor: 'border-orange-200' }
  ];

  const practicalLabs = [
    { 
      name: "TryHackMe", 
      url: "https://tryhackme.com/", 
      icon: Shield,
      description: "Gamified cybersecurity learning with interactive challenges and guided pathways",
      difficulty: "Beginner",
      rating: 4.8,
      students: "2M+",
      badge: "Popular",
      features: ["Guided Learning", "Practical Labs", "Certification Prep"]
    },
    { 
      name: "picoCTF", 
      url: "https://picoctf.org/", 
      icon: Target,
      description: "Educational CTF platform with progressive challenges designed for beginners",
      difficulty: "All Levels",
      rating: 4.7,
      students: "500K+",
      badge: "Free",
      features: ["CTF Challenges", "Educational Focus", "Progressive Difficulty"]
    },
    { 
      name: "PortSwigger Academy", 
      url: "https://portswigger.net/web-security", 
      icon: Beaker,
      description: "Free web security training with hands-on labs and detailed explanations",
      difficulty: "Intermediate",
      rating: 4.9,
      students: "1M+",
      badge: "Recommended",
      features: ["Web Security", "Hands-on Labs", "Industry Standard"]
    },
    { 
      name: "HackTheBox", 
      url: "https://www.hackthebox.com/", 
      icon: Code,
      description: "Real-world penetration testing environments and active machines",
      difficulty: "Advanced",
      rating: 4.6,
      students: "800K+",
      badge: "Pro",
      features: ["Real Machines", "Active Directory", "Advanced Techniques"]
    }
  ];

  const theoreticalResources = [
    {
      title: "OWASP Top 10",
      url: "https://owasp.org/www-project-top-ten/",
      description: "Critical web application security risks and comprehensive mitigation strategies",
      category: "Web Security",
      readTime: "15 min",
      level: "Essential",
      topics: ["Injection", "Broken Authentication", "Sensitive Data"]
    },
    {
      title: "NIST Cybersecurity Framework",
      url: "https://www.nist.gov/cyberframework",
      description: "Comprehensive cybersecurity guidelines and implementation guide for organizations",
      category: "Framework",
      readTime: "45 min",
      level: "Professional",
      topics: ["Identify", "Protect", "Detect", "Respond", "Recover"]
    },
    {
      title: "SANS Reading Room",
      url: "https://www.sans.org/white-papers/",
      description: "Latest security research papers and in-depth analysis of emerging threats",
      category: "Research",
      readTime: "30 min",
      level: "Advanced",
      topics: ["Threat Intelligence", "Incident Response", "Forensics"]
    }
  ];

  const certificationPaths = [
    {
      name: "Security+",
      provider: "CompTIA",
      level: "Entry Level",
      description: "Foundation certification covering core security concepts and practices",
      duration: "3-6 months",
      salary: "$55K - $75K",
      popularity: 95,
      domains: ["Threats", "Architecture", "Implementation", "Operations", "Governance"]
    },
    {
      name: "CISSP",
      provider: "ISC²",
      level: "Advanced",
      description: "Advanced certification for experienced security professionals and managers",
      duration: "6-12 months", 
      salary: "$110K - $150K",
      popularity: 88,
      domains: ["Security Management", "Asset Security", "Architecture", "Communications"]
    },
    {
      name: "CEH",
      provider: "EC-Council",
      level: "Intermediate",
      description: "Ethical hacking and penetration testing certification with hands-on focus",
      duration: "4-8 months",
      salary: "$80K - $120K",
      popularity: 75,
      domains: ["Footprinting", "Scanning", "Enumeration", "System Hacking", "Malware"]
    }
  ];

  const communities = [
    {
      name: "r/cybersecurity",
      platform: "Reddit",
      url: "https://reddit.com/r/cybersecurity",
      description: "Active discussions on latest threats, career advice, and industry news",
      members: "890K",
      activity: "High",
      topics: ["Career Advice", "Threat Analysis", "Tool Reviews"]
    },
    {
      name: "InfoSec Community",
      platform: "Discord",
      url: "https://discord.gg/infosec",
      description: "Real-time chat with security professionals worldwide and mentorship",
      members: "45K",
      activity: "Very High",
      topics: ["Live Help", "Study Groups", "Networking"]
    }
  ];

  const TabButton = ({ tab, isActive, onClick }) => {
    const Icon = tab.icon;
    return (
      <button
        onClick={onClick}
        className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
          isActive 
            ? `${tab.bgColor} ${tab.color} shadow-md border ${tab.borderColor}` 
            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-transparent'
        }`}
      >
        <Icon className="h-5 w-5" />
        <span className="hidden sm:inline">{tab.label}</span>
      </button>
    );
  };

  const PracticeContent = () => (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Hands-on Practice Labs</h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Master cybersecurity through interactive challenges and real-world scenarios
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {practicalLabs.map((lab, index) => {
          const IconComponent = lab.icon;
          return (
            <div key={index} className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-border group">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{lab.name}</h3>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-muted-foreground font-medium">{lab.rating}</span>
                      </div>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground font-medium">{lab.students} students</span>
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-2 rounded-full text-sm font-medium ${
                  lab.badge === 'Popular' ? 'bg-red-100 dark:bg-red-950/20 text-red-700 dark:text-red-400' :
                  lab.badge === 'Free' ? 'bg-green-100 dark:bg-green-950/20 text-green-700 dark:text-green-400' :
                  lab.badge === 'Recommended' ? 'bg-blue-100 dark:bg-blue-950/20 text-blue-700 dark:text-blue-400' :
                  'bg-purple-100 dark:bg-purple-950/20 text-purple-700 dark:text-purple-400'
                }`}>
                  {lab.badge}
                </span>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">{lab.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {lab.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-muted rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className={`px-4 py-2 rounded-full font-medium ${
                    lab.difficulty === 'Beginner' ? 'bg-green-100 dark:bg-green-950/20 text-green-700 dark:text-green-400' :
                    lab.difficulty === 'Intermediate' ? 'bg-yellow-100 dark:bg-yellow-950/20 text-yellow-700 dark:text-yellow-400' :
                    lab.difficulty === 'Advanced' ? 'bg-red-100 dark:bg-red-950/20 text-red-700 dark:text-red-400' :
                    'bg-blue-100 dark:bg-blue-950/20 text-blue-700 dark:text-blue-400'
                  }`}>
                    {lab.difficulty}
                  </span>
                </div>
                <a 
                  href={lab.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                >
                  <Play className="h-4 w-4" />
                  Start Learning
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const ToolsContent = () => {
    const groupedCommands = commands.reduce<Record<string, typeof commands>>( (acc, command) => {
      const { category } = command;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(command);
      return acc;
    }, {});

    return (
      <div className="space-y-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tools & Commands</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Essential cybersecurity tools and command references for practical application
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search tools and commands..."
              className="w-full pl-12 pr-4 py-4 border border-border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background text-foreground text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-4 border border-border rounded-xl hover:bg-muted transition-colors font-medium">
            <Filter className="h-5 w-5" />
            <span>Filter by Category</span>
          </button>
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
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Knowledge Base</h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Essential reading and frameworks for cybersecurity mastery and professional development
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {theoreticalResources.map((resource, index) => (
          <div key={index} className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-border group">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-3">{resource.title}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-950/20 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                    {resource.category}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-950/20 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium">
                    {resource.level}
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">{resource.description}</p>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Key Topics:</h4>
              <div className="flex flex-wrap gap-2">
                {resource.topics.map((topic, idx) => (
                  <span key={idx} className="px-3 py-1 bg-muted rounded-full text-sm">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span className="font-medium">{resource.readTime}</span>
              </div>
              <a 
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                <BookOpen className="h-4 w-4" />
                Read Now
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const CertificationsContent = () => (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Certification Paths</h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Advance your career with industry-recognized credentials and professional certifications
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {certificationPaths.map((cert, index) => (
          <div key={index} className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-border group">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-50 dark:bg-purple-950/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{cert.name}</h3>
              <p className="text-purple-600 font-medium text-lg">{cert.provider}</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground font-medium">Level:</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  cert.level === 'Entry Level' ? 'bg-green-100 dark:bg-green-950/20 text-green-700 dark:text-green-400' :
                  cert.level === 'Intermediate' ? 'bg-yellow-100 dark:bg-yellow-950/20 text-yellow-700 dark:text-yellow-400' :
                  'bg-red-100 dark:bg-red-950/20 text-red-700 dark:text-red-400'
                }`}>
                  {cert.level}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground font-medium">Duration:</span>
                <span className="font-medium text-foreground">{cert.duration}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground font-medium">Avg. Salary:</span>
                <span className="font-bold text-green-600">{cert.salary}</span>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">{cert.description}</p>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Key Domains:</h4>
              <div className="flex flex-wrap gap-2">
                {cert.domains.map((domain, idx) => (
                  <span key={idx} className="px-3 py-1 bg-muted rounded-full text-sm">
                    {domain}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center justify-between text-muted-foreground mb-2">
                <span className="font-medium">Industry Demand</span>
                <span className="font-bold">{cert.popularity}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${cert.popularity}%` }}
                ></div>
              </div>
            </div>
            
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 group-hover:scale-105 flex items-center justify-center gap-2">
              <Trophy className="h-4 w-4" />
              Learn More
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const CommunityContent = () => (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Community & Networking</h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Connect with cybersecurity professionals and enthusiasts worldwide for learning and growth
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {communities.map((community, index) => (
          <div key={index} className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-border group">
            <div className="flex items-start gap-6 mb-6">
              <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="h-8 w-8 text-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">{community.name}</h3>
                <p className="text-orange-600 font-medium text-lg">{community.platform}</p>
              </div>
              <div className={`px-3 py-2 rounded-full text-sm font-medium ${
                community.activity === 'Very High' ? 'bg-green-100 dark:bg-green-950/20 text-green-700 dark:text-green-400' :
                'bg-blue-100 dark:bg-blue-950/20 text-blue-700 dark:text-blue-400'
              }`}>
                {community.activity} Activity
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">{community.description}</p>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Popular Topics:</h4>
              <div className="flex flex-wrap gap-2">
                {community.topics.map((topic, idx) => (
                  <span key={idx} className="px-3 py-1 bg-muted rounded-full text-sm">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-5 w-5" />
                <span className="font-bold text-lg">{community.members}</span>
                <span>members</span>
              </div>
              <a 
                href={community.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                <Users className="h-4 w-4" />
                Join Community
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'practice': return <PracticeContent />;
      case 'tools': return <ToolsContent />;
      case 'theory': return <TheoryContent />;
      case 'certs': return <CertificationsContent />;
      case 'community': return <CommunityContent />;
      default: return <PracticeContent />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="container mx-auto px-4 pt-24 pb-16 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-muted text-muted-foreground rounded-full font-medium">
              <Shield className="w-4 h-4" />
              Cybersecurity Materials
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Your Cybersecurity Playbook
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            Your comprehensive guide to mastering cybersecurity through hands-on practice, 
            essential tools, and expert knowledge. Start your journey today.
          </p>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 bg-muted/50 p-3 rounded-2xl max-w-5xl mx-auto">
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
      <div className="container mx-auto px-4 py-16">
        {renderContent()}
      </div>

      {/* Call to Action Section */}
      <section className="bg-muted/30 py-20 mt-20">
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
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-10 w-10 text-blue-600" />
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  HackersGlobe
                </span>
              </div>
              <p className="text-muted-foreground mb-8 max-w-md leading-relaxed text-lg">
                Empowering the next generation of cybersecurity professionals through comprehensive learning resources, 
                hands-on practice, and expert guidance.
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-muted hover:bg-muted/80 transition-all duration-300 hover:scale-110"
                >
                  <Github className="h-6 w-6 text-muted-foreground hover:text-foreground" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-muted hover:bg-muted/80 transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="h-6 w-6 text-muted-foreground hover:text-foreground" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-muted hover:bg-muted/80 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-6 w-6 text-muted-foreground hover:text-foreground" />
                </a>
                <a 
                  href="mailto:contact@hackersglobe.com"
                  className="p-3 rounded-xl bg-muted hover:bg-muted/80 transition-all duration-300 hover:scale-110"
                >
                  <Mail className="h-6 w-6 text-muted-foreground hover:text-foreground" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Home</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Materials</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Experiments</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Roadmaps</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-foreground mb-6 text-lg">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Practice Labs</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Certifications</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Community</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Support</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border mt-16 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500 fill-current" />
                <span>by the HackersGlobe Team</span>
              </div>
              <div className="flex items-center gap-8 text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
                <span>© 2024 HackersGlobe. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Material;