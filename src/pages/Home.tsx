import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Users,
  Target,
  Eye,
  Lock,
  Network,
  Globe,
  Layers,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  BookOpen,
  Zap,
  TrendingUp,
  Heart,
  Mail,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";

const Home = () => {
  useEffect(() => {
    document.title = "HackersGlobe - Your Cybersecurity Journey Starts Here";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Welcome to HackersGlobe. Your comprehensive guide to cybersecurity fundamentals, red team and blue team paths."
      );
    }
  }, []);

  const redTeamPath = [
    {
      step: "Linux Fundamentals",
      description: "Master command line, file systems, and basic scripting",
      duration: "2-3 weeks",
      difficulty: "Beginner",
    },
    {
      step: "Networking Basics",
      description: "TCP/IP, OSI model, protocols, and network analysis",
      duration: "2 weeks",
      difficulty: "Beginner",
    },
    {
      step: "Web Application Security",
      description: "OWASP Top 10, SQL injection, XSS, authentication flaws",
      duration: "3-4 weeks",
      difficulty: "Intermediate",
    },
    {
      step: "Penetration Testing Tools",
      description: "Nmap, Metasploit, Burp Suite, Wireshark",
      duration: "4-5 weeks",
      difficulty: "Intermediate",
    },
    {
      step: "Vulnerability Assessment",
      description: "Scanning, enumeration, and exploitation techniques",
      duration: "3-4 weeks",
      difficulty: "Intermediate",
    },
    {
      step: "Advanced Exploitation",
      description: "Buffer overflows, privilege escalation, post-exploitation",
      duration: "6-8 weeks",
      difficulty: "Advanced",
    },
  ];

  const blueTeamPath = [
    {
      step: "Security Fundamentals",
      description: "CIA triad, risk management, compliance frameworks",
      duration: "2-3 weeks",
      difficulty: "Beginner",
    },
    {
      step: "Network Security",
      description: "Firewalls, IDS/IPS, network monitoring and analysis",
      duration: "3-4 weeks",
      difficulty: "Beginner",
    },
    {
      step: "Incident Response",
      description: "SIEM tools, log analysis, forensics basics",
      duration: "4-5 weeks",
      difficulty: "Intermediate",
    },
    {
      step: "Threat Detection",
      description: "IOCs, behavioral analysis, threat hunting",
      duration: "3-4 weeks",
      difficulty: "Intermediate",
    },
    {
      step: "Security Tools Mastery",
      description: "Splunk, ELK Stack, Wireshark, Volatility",
      duration: "5-6 weeks",
      difficulty: "Intermediate",
    },
    {
      step: "Advanced Defense",
      description: "Malware analysis, threat intelligence, automation",
      duration: "6-8 weeks",
      difficulty: "Advanced",
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 dark:bg-green-950/20 text-green-700 dark:text-green-400";
      case "Intermediate":
        return "bg-yellow-100 dark:bg-yellow-950/20 text-yellow-700 dark:text-yellow-400";
      case "Advanced":
        return "bg-red-100 dark:bg-red-950/20 text-red-700 dark:text-red-400";
      default:
        return "bg-gray-100 dark:bg-gray-950/20 text-gray-700 dark:text-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Landing Section */}
      <section
        id="welcome"
        className="container mx-auto px-4 pt-24 pb-16 text-center"
      >
        <div className="max-w-5xl mx-auto">
          <Badge variant="secondary" className="mb-6 text-sm font-medium">
            <Shield className="w-4 h-4 mr-2" />
            Welcome to HackersGlobe
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Your Cybersecurity Journey Starts Here
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            Welcome to the <strong>Cyber Command Playbook</strong> - your
            comprehensive guide to mastering cybersecurity fundamentals. Whether
            you're interested in offensive security (Red Team) or defensive
            security (Blue Team), we've got you covered.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Card className="text-left hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-500 group">
              <CardHeader>
                <Target className="w-10 h-10 text-red-500 mb-3" />
                <CardTitle className="text-red-600 text-xl">
                  Red Team Path
                </CardTitle>
                <CardDescription className="text-base">
                  Offensive Security & Penetration Testing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Learn to think like an attacker. Master vulnerability
                  assessment, penetration testing, and ethical hacking
                  techniques.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>Popular among security professionals</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-left hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500 group">
              <CardHeader>
                <Shield className="w-10 h-10 text-blue-500 mb-3" />
                <CardTitle className="text-blue-600 text-xl">
                  Blue Team Path
                </CardTitle>
                <CardDescription className="text-base">
                  Defensive Security & Incident Response
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Become a cyber defender. Learn threat detection, incident
                  response, and security monitoring techniques.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span>High demand in the industry</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-left hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500 group">
              <CardHeader>
                <Network className="w-10 h-10 text-green-500 mb-3" />
                <CardTitle className="text-green-600 text-xl">
                  Fundamentals
                </CardTitle>
                <CardDescription className="text-base">
                  Core Networking & Security Concepts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Master the essential networking and security fundamentals that
                  every cybersecurity professional needs.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BookOpen className="w-4 h-4 text-blue-400" />
                  <span>Essential foundation knowledge</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Roadmaps Section */}
      <section id="roadmaps" className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Choose Your Path
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Every cybersecurity professional starts somewhere. Choose between
              offensive (Red Team) or defensive (Blue Team) security paths, or
              master both to become a well-rounded security expert.
            </p>
          </header>

          <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {/* Red Team Roadmap */}
            <Card className="border-red-200 hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-red-50 dark:bg-red-950/20">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-7 h-7 text-red-600" />
                  <CardTitle className="text-red-700 dark:text-red-400 text-2xl">
                    Red Team Roadmap
                  </CardTitle>
                </div>
                <CardDescription className="text-base">
                  Offensive Security & Ethical Hacking Path
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {redTeamPath.map((item, index) => (
                    <div key={index} className="flex gap-4 group">
                      <div className="flex-shrink-0 w-10 h-10 bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-base">
                            {item.step}
                          </h4>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs">
                              {item.duration}
                            </Badge>
                            <Badge
                              className={`text-xs ${getDifficultyColor(
                                item.difficulty
                              )}`}
                            >
                              {item.difficulty}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-red-50 dark:bg-red-950/20 rounded-xl">
                  <p className="text-red-700 dark:text-red-300 font-medium flex items-center">
                    <Target className="w-5 h-5 inline mr-3" />
                    Total Timeline: 20-27 weeks (5-7 months)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Blue Team Roadmap */}
            <Card className="border-blue-200 hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-blue-50 dark:bg-blue-950/20">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-7 h-7 text-blue-600" />
                  <CardTitle className="text-blue-700 dark:text-blue-400 text-2xl">
                    Blue Team Roadmap
                  </CardTitle>
                </div>
                <CardDescription className="text-base">
                  Defensive Security & Incident Response Path
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {blueTeamPath.map((item, index) => (
                    <div key={index} className="flex gap-4 group">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-base">
                            {item.step}
                          </h4>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs">
                              {item.duration}
                            </Badge>
                            <Badge
                              className={`text-xs ${getDifficultyColor(
                                item.difficulty
                              )}`}
                            >
                              {item.difficulty}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-950/20 rounded-xl">
                  <p className="text-blue-700 dark:text-blue-300 font-medium flex items-center">
                    <Shield className="w-5 h-5 inline mr-3" />
                    Total Timeline: 23-30 weeks (6-8 months)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-3xl mx-auto bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="font-bold text-xl mb-3 flex items-center justify-center gap-2">
                  <Zap className="w-6 h-6 text-purple-600" />
                  Pro Tip for Freshers
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Start with <strong>networking fundamentals</strong> regardless
                  of your chosen path. Understanding how networks work is
                  crucial for both offensive and defensive security. Many
                  professionals follow both paths to become versatile security
                  experts!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Networking Fundamentals */}
      <section id="fundamentals" className="py-20">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Networking Fundamentals
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Master the essential networking concepts that form the foundation
              of all cybersecurity work. Understanding these concepts is crucial
              for both red and blue team activities.
            </p>
          </header>

          {/* Core Concepts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500 group">
              <CardHeader>
                <Globe className="w-10 h-10 text-blue-600 mb-3" />
                <CardTitle className="text-xl">IP Address</CardTitle>
                <CardDescription className="text-base">
                  Your device's network identity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Think of IP addresses like postal addresses for the
                    internet. They tell other devices exactly where to send
                    data.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-muted p-3 rounded-lg text-xs">
                      <strong>IPv4:</strong> 192.168.1.10 (32-bit)
                    </div>
                    <div className="bg-muted p-3 rounded-lg text-xs">
                      <strong>IPv6:</strong> 2001:db8::1 (128-bit)
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Layer 3 - Network
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500 group">
              <CardHeader>
                <Network className="w-10 h-10 text-green-600 mb-3" />
                <CardTitle className="text-xl">MAC Address</CardTitle>
                <CardDescription className="text-base">
                  Hardware-level identification
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Like a unique fingerprint burned into your network card.
                    Used for local delivery within the same network segment.
                  </p>
                  <div className="bg-muted p-3 rounded-lg text-xs">
                    <strong>Format:</strong> 00:1A:2B:3C:4D:5E
                  </div>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <div>• 48-bit hexadecimal</div>
                    <div>• First 3 bytes = Manufacturer</div>
                    <div>• Used by switches for forwarding</div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Layer 2 - Data Link
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-500 group">
              <CardHeader>
                <ArrowRight className="w-10 h-10 text-purple-600 mb-3" />
                <CardTitle className="text-xl">TCP Protocol</CardTitle>
                <CardDescription className="text-base">
                  Reliable data delivery
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Like registered mail - guarantees your data arrives in order
                    and intact, with confirmation receipts.
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span>3-way handshake (SYN → SYN-ACK → ACK)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span>Error detection & retransmission</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span>Flow & congestion control</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Layer 4 - Transport
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-orange-500 group">
              <CardHeader>
                <Layers className="w-10 h-10 text-orange-600 mb-3" />
                <CardTitle className="text-xl">OSI Model</CardTitle>
                <CardDescription className="text-base">
                  Network architecture framework
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A 7-layer blueprint that organizes how networks function -
                    like floors in a building, each with specific purposes.
                  </p>
                  <div className="text-xs space-y-1">
                    <div>7. Application (HTTP, DNS)</div>
                    <div>6. Presentation (Encryption)</div>
                    <div>5. Session (Connections)</div>
                    <div>4. Transport (TCP/UDP)</div>
                    <div>3. Network (IP Routing)</div>
                    <div>2. Data Link (MAC/Ethernet)</div>
                    <div>1. Physical (Cables, Signals)</div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Conceptual Framework
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* OSI vs TCP/IP Comparison */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8">
              OSI Model vs TCP/IP Model
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Layers className="w-6 h-6" />
                    OSI Model (7 Layers)
                  </CardTitle>
                  <CardDescription className="text-base">
                    Theoretical framework for understanding networks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      {
                        layer: "7. Application",
                        example: "HTTP, FTP, SMTP, DNS",
                      },
                      {
                        layer: "6. Presentation",
                        example: "SSL/TLS, JPEG, ASCII",
                      },
                      { layer: "5. Session", example: "NetBIOS, RPC" },
                      { layer: "4. Transport", example: "TCP, UDP" },
                      { layer: "3. Network", example: "IP, ICMP, ARP" },
                      { layer: "2. Data Link", example: "Ethernet, WiFi, PPP" },
                      { layer: "1. Physical", example: "Cables, Radio, Fiber" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-muted p-3 rounded-lg text-sm"
                      >
                        <strong>{item.layer}:</strong> {item.example}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Globe className="w-6 h-6" />
                    TCP/IP Model (4 Layers)
                  </CardTitle>
                  <CardDescription className="text-base">
                    Practical model used in real networks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      {
                        layer: "4. Application",
                        example: "HTTP, FTP, SMTP, DNS, SSL/TLS",
                        osi: "Layers 5-7",
                      },
                      {
                        layer: "3. Transport",
                        example: "TCP, UDP",
                        osi: "Layer 4",
                      },
                      {
                        layer: "2. Internet",
                        example: "IP, ICMP, ARP",
                        osi: "Layer 3",
                      },
                      {
                        layer: "1. Network Access",
                        example: "Ethernet, WiFi, Physical media",
                        osi: "Layers 1-2",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-muted p-3 rounded-lg text-sm"
                      >
                        <strong>{item.layer}:</strong> {item.example}
                        <div className="text-muted-foreground mt-1 text-xs">
                          Maps to OSI {item.osi}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Interactive Layer Explorer */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-center mb-8">
              Explore Each Layer
            </h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="physical">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <Badge className="text-sm">Layer 1</Badge>
                    <span className="text-lg">
                      Physical Layer - The Foundation
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6 pt-4">
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>What it does:</strong> Handles the physical
                      transmission of raw bits over communication channels.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <strong className="text-base">Examples:</strong>
                        <ul className="list-disc pl-5 mt-2 text-muted-foreground space-y-1">
                          <li>Ethernet cables (Cat5e, Cat6)</li>
                          <li>Fiber optic cables</li>
                          <li>WiFi radio signals</li>
                          <li>Bluetooth</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-base">
                          Security Concerns:
                        </strong>
                        <ul className="list-disc pl-5 mt-2 text-muted-foreground space-y-1">
                          <li>Cable tapping</li>
                          <li>Physical device access</li>
                          <li>Electromagnetic interference</li>
                          <li>Signal jamming</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Continue with other layers... */}
              <AccordionItem value="datalink">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <Badge className="text-sm">Layer 2</Badge>
                    <span className="text-lg">
                      Data Link Layer - Local Network Communication
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6 pt-4">
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>What it does:</strong> Manages communication
                      between devices on the same network segment using MAC
                      addresses.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <strong className="text-base">Key Concepts:</strong>
                        <ul className="list-disc pl-5 mt-2 text-muted-foreground space-y-1">
                          <li>MAC addresses (48-bit hardware addresses)</li>
                          <li>Ethernet frames</li>
                          <li>Switching and VLANs</li>
                          <li>ARP (Address Resolution Protocol)</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-base">Attack Examples:</strong>
                        <ul className="list-disc pl-5 mt-2 text-muted-foreground space-y-1">
                          <li>ARP spoofing/poisoning</li>
                          <li>MAC flooding</li>
                          <li>VLAN hopping</li>
                          <li>Switch CAM table overflow</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Add remaining layers following the same pattern... */}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="getting-started" className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Choose your path and begin mastering cybersecurity fundamentals with
            hands-on experiments and real-world scenarios.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link to="/experiment">
              <Card className="hover:shadow-xl transition-all duration-300 h-full group">
                <CardContent className="p-8 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-950 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-3 text-xl">
                    Explore Experiments
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Try hands-on cybersecurity experiments and simulations
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/material">
              <Card className="hover:shadow-xl transition-all duration-300 h-full group">
                <CardContent className="p-8 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-950 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-3 text-xl">
                    Study Materials
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Access comprehensive guides and reference materials
                  </p>
                </CardContent>
              </Card>
            </Link>

            <a href="/#basics">
              <Card className="hover:shadow-xl transition-all duration-300 h-full group">
                <CardContent className="p-8 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-950 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Lock className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-3 text-xl">
                    Practice Commands
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Learn essential cybersecurity tools and commands
                  </p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>
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
                Empowering the next generation of cybersecurity professionals
                through comprehensive learning resources, hands-on practice, and
                expert guidance.
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
              <h4 className="font-semibold text-foreground mb-6 text-lg">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Materials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Experiments
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Roadmaps
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-foreground mb-6 text-lg">
                Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Practice Labs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Certifications
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Support
                  </a>
                </li>
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
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
                <span>© 2024 HackersGlobe. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
