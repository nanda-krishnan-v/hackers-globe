import { useEffect } from "react";
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
} from "lucide-react";

const Home = () => {
  useEffect(() => {
    document.title = "HackersGlobe";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Welcome to the HackersGlobe. Your comprehensive guide to cybersecurity fundamentals, red team and blue team paths."
      );
    }
  }, []);

  const redTeamPath = [
    {
      step: "Linux Fundamentals",
      description: "Master command line, file systems, and basic scripting",
      duration: "2-3 weeks",
    },
    {
      step: "Networking Basics",
      description: "TCP/IP, OSI model, protocols, and network analysis",
      duration: "2 weeks",
    },
    {
      step: "Web Application Security",
      description: "OWASP Top 10, SQL injection, XSS, authentication flaws",
      duration: "3-4 weeks",
    },
    {
      step: "Penetration Testing Tools",
      description: "Nmap, Metasploit, Burp Suite, Wireshark",
      duration: "4-5 weeks",
    },
    {
      step: "Vulnerability Assessment",
      description: "Scanning, enumeration, and exploitation techniques",
      duration: "3-4 weeks",
    },
    {
      step: "Advanced Exploitation",
      description: "Buffer overflows, privilege escalation, post-exploitation",
      duration: "6-8 weeks",
    },
  ];

  const blueTeamPath = [
    {
      step: "Security Fundamentals",
      description: "CIA triad, risk management, compliance frameworks",
      duration: "2-3 weeks",
    },
    {
      step: "Network Security",
      description: "Firewalls, IDS/IPS, network monitoring and analysis",
      duration: "3-4 weeks",
    },
    {
      step: "Incident Response",
      description: "SIEM tools, log analysis, forensics basics",
      duration: "4-5 weeks",
    },
    {
      step: "Threat Detection",
      description: "IOCs, behavioral analysis, threat hunting",
      duration: "3-4 weeks",
    },
    {
      step: "Security Tools Mastery",
      description: "Splunk, ELK Stack, Wireshark, Volatility",
      duration: "5-6 weeks",
    },
    {
      step: "Advanced Defense",
      description: "Malware analysis, threat intelligence, automation",
      duration: "6-8 weeks",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Landing Section */}
      <section
        id="welcome"
        className="container mx-auto px-4 pt-24 pb-16 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4 text-sm">
            <Shield className="w-4 h-4 mr-2" />
            Welcome to HackersGlobe
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Your Cybersecurity Journey Starts Here
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Welcome to the <strong>Cyber Command Playbook</strong> - your
            comprehensive guide to mastering cybersecurity fundamentals. Whether
            you're interested in offensive security (Red Team) or defensive
            security (Blue Team), we've got you covered.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="text-left hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="w-8 h-8 text-red-500 mb-2" />
                <CardTitle className="text-red-600">Red Team Path</CardTitle>
                <CardDescription>
                  Offensive Security & Penetration Testing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Learn to think like an attacker. Master vulnerability
                  assessment, penetration testing, and ethical hacking
                  techniques.
                </p>
              </CardContent>
            </Card>

            <Card className="text-left hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-8 h-8 text-blue-500 mb-2" />
                <CardTitle className="text-blue-600">Blue Team Path</CardTitle>
                <CardDescription>
                  Defensive Security & Incident Response
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Become a cyber defender. Learn threat detection, incident
                  response, and security monitoring techniques.
                </p>
              </CardContent>
            </Card>

            <Card className="text-left hover:shadow-lg transition-shadow">
              <CardHeader>
                <Network className="w-8 h-8 text-green-500 mb-2" />
                <CardTitle className="text-green-600">Fundamentals</CardTitle>
                <CardDescription>
                  Core Networking & Security Concepts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Master the essential networking and security fundamentals that
                  every cybersecurity professional needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Roadmaps Section */}
      <section id="roadmaps" className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Choose Your Path
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every cybersecurity professional starts somewhere. Choose between
              offensive (Red Team) or defensive (Blue Team) security paths, or
              master both to become a well-rounded security expert.
            </p>
          </header>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Red Team Roadmap */}
            <Card className="border-red-200">
              <CardHeader className="bg-red-50 dark:bg-red-950/20">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="w-6 h-6 text-red-600" />
                  <CardTitle className="text-red-700 dark:text-red-400">
                    Red Team Roadmap
                  </CardTitle>
                </div>
                <CardDescription>
                  Offensive Security & Ethical Hacking Path
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {redTeamPath.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-sm">{item.step}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {item.duration}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                  <p className="text-sm text-red-700 dark:text-red-300 font-medium">
                    <Target className="w-4 h-4 inline mr-2" />
                    Total Timeline: 20-27 weeks (5-7 months)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Blue Team Roadmap */}
            <Card className="border-blue-200">
              <CardHeader className="bg-blue-50 dark:bg-blue-950/20">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <CardTitle className="text-blue-700 dark:text-blue-400">
                    Blue Team Roadmap
                  </CardTitle>
                </div>
                <CardDescription>
                  Defensive Security & Incident Response Path
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {blueTeamPath.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-sm">{item.step}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {item.duration}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <p className="text-sm text-blue-700 dark:text-blue-300 font-medium">
                    <Shield className="w-4 h-4 inline mr-2" />
                    Total Timeline: 23-30 weeks (6-8 months)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">
                  🎯 Pro Tip for Freshers
                </h3>
                <p className="text-sm text-muted-foreground">
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
      <section id="fundamentals" className="py-16">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Networking Fundamentals
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Master the essential networking concepts that form the foundation
              of all cybersecurity work. Understanding these concepts is crucial
              for both red and blue team activities.
            </p>
          </header>

          {/* Core Concepts Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
              <CardHeader>
                <Globe className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">IP Address</CardTitle>
                <CardDescription>
                  Your device's network identity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Think of IP addresses like postal addresses for the
                    internet. They tell other devices exactly where to send
                    data.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-muted p-2 rounded text-xs">
                      <strong>IPv4:</strong> 192.168.1.10 (32-bit)
                    </div>
                    <div className="bg-muted p-2 rounded text-xs">
                      <strong>IPv6:</strong> 2001:db8::1 (128-bit)
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Layer 3 - Network
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500">
              <CardHeader>
                <Network className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle className="text-lg">MAC Address</CardTitle>
                <CardDescription>Hardware-level identification</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Like a unique fingerprint burned into your network card.
                    Used for local delivery within the same network segment.
                  </p>
                  <div className="bg-muted p-2 rounded text-xs">
                    <strong>Format:</strong> 00:1A:2B:3C:4D:5E
                  </div>
                  <div className="text-xs text-muted-foreground">
                    • 48-bit hexadecimal
                    <br />
                    • First 3 bytes = Manufacturer
                    <br />• Used by switches for forwarding
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Layer 2 - Data Link
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-purple-500">
              <CardHeader>
                <ArrowRight className="w-8 h-8 text-purple-600 mb-2" />
                <CardTitle className="text-lg">TCP Protocol</CardTitle>
                <CardDescription>Reliable data delivery</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Like registered mail - guarantees your data arrives in order
                    and intact, with confirmation receipts.
                  </p>
                  <div className="space-y-1 text-xs">
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

            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
              <CardHeader>
                <Layers className="w-8 h-8 text-orange-600 mb-2" />
                <CardTitle className="text-lg">OSI Model</CardTitle>
                <CardDescription>
                  Network architecture framework
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
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
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-center mb-6">
              OSI Model vs TCP/IP Model
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Layers className="w-5 h-5" />
                    OSI Model (7 Layers)
                  </CardTitle>
                  <CardDescription>
                    Theoretical framework for understanding networks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
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
                      <div key={index} className="bg-muted p-2 rounded text-xs">
                        <strong>{item.layer}:</strong> {item.example}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    TCP/IP Model (4 Layers)
                  </CardTitle>
                  <CardDescription>
                    Practical model used in real networks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
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
                      <div key={index} className="bg-muted p-2 rounded text-xs">
                        <strong>{item.layer}:</strong> {item.example}
                        <div className="text-muted-foreground mt-1">
                          Maps to OSI {item.osi}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Practical Examples */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-center mb-6">
              Real-World Examples
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="border-green-200">
                <CardHeader className="bg-green-50 dark:bg-green-950/20">
                  <CardTitle className="text-green-700 dark:text-green-400">
                    Browsing a Website
                  </CardTitle>
                  <CardDescription>
                    What happens when you visit google.com
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-3">
                      <Badge variant="secondary">1</Badge>
                      <div>
                        <strong>DNS Resolution:</strong> Your computer asks
                        "What's google.com's IP address?"
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Badge variant="secondary">2</Badge>
                      <div>
                        <strong>TCP Handshake:</strong> Establishes reliable
                        connection to Google's server (port 443)
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Badge variant="secondary">3</Badge>
                      <div>
                        <strong>HTTP Request:</strong> Your browser sends "GET
                        /" request
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Badge variant="secondary">4</Badge>
                      <div>
                        <strong>Data Routing:</strong> Packets travel through
                        routers using IP addresses
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Badge variant="secondary">5</Badge>
                      <div>
                        <strong>Local Delivery:</strong> Your router uses MAC
                        addresses to deliver to your device
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader className="bg-red-50 dark:bg-red-950/20">
                  <CardTitle className="text-red-700 dark:text-red-400">
                    Network Attack Example
                  </CardTitle>
                  <CardDescription>
                    How attackers might exploit each layer
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-3">
                      <Badge variant="destructive">L7</Badge>
                      <div>
                        <strong>Application:</strong> SQL injection, XSS attacks
                        on web applications
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Badge variant="destructive">L4</Badge>
                      <div>
                        <strong>Transport:</strong> TCP SYN flood attacks, port
                        scanning
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Badge variant="destructive">L3</Badge>
                      <div>
                        <strong>Network:</strong> IP spoofing, routing attacks,
                        DoS
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Badge variant="destructive">L2</Badge>
                      <div>
                        <strong>Data Link:</strong> MAC flooding, ARP poisoning
                        attacks
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Badge variant="destructive">L1</Badge>
                      <div>
                        <strong>Physical:</strong> Cable tapping, wireless
                        eavesdropping
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Interactive Layer Explorer */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-center mb-6">
              Explore Each Layer
            </h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="physical">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <Badge>Layer 1</Badge>
                    <span>Physical Layer - The Foundation</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>What it does:</strong> Handles the physical
                      transmission of raw bits over communication channels.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>Examples:</strong>
                        <ul className="list-disc pl-5 mt-1 text-muted-foreground">
                          <li>Ethernet cables (Cat5e, Cat6)</li>
                          <li>Fiber optic cables</li>
                          <li>WiFi radio signals</li>
                          <li>Bluetooth</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Security Concerns:</strong>
                        <ul className="list-disc pl-5 mt-1 text-muted-foreground">
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

              <AccordionItem value="datalink">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <Badge>Layer 2</Badge>
                    <span>Data Link Layer - Local Network Communication</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>What it does:</strong> Manages communication
                      between devices on the same network segment using MAC
                      addresses.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>Key Concepts:</strong>
                        <ul className="list-disc pl-5 mt-1 text-muted-foreground">
                          <li>MAC addresses (48-bit hardware addresses)</li>
                          <li>Ethernet frames</li>
                          <li>Switching and VLANs</li>
                          <li>ARP (Address Resolution Protocol)</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Attack Examples:</strong>
                        <ul className="list-disc pl-5 mt-1 text-muted-foreground">
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

              <AccordionItem value="network">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <Badge>Layer 3</Badge>
                    <span>Network Layer - Routing Across Networks</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>What it does:</strong> Routes packets between
                      different networks using logical IP addresses.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>Key Protocols:</strong>
                        <ul className="list-disc pl-5 mt-1 text-muted-foreground">
                          <li>IP (Internet Protocol)</li>
                          <li>ICMP (Ping, traceroute)</li>
                          <li>Routing protocols (OSPF, BGP)</li>
                          <li>IPSec (VPN security)</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Security Issues:</strong>
                        <ul className="list-disc pl-5 mt-1 text-muted-foreground">
                          <li>IP spoofing</li>
                          <li>DDoS attacks</li>
                          <li>Man-in-the-middle attacks</li>
                          <li>Route hijacking</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="transport">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <Badge>Layer 4</Badge>
                    <span>Transport Layer - Reliable Data Delivery</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>What it does:</strong> Ensures reliable, ordered
                      delivery of data between applications using ports.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>Protocols:</strong>
                        <ul className="list-disc pl-5 mt-1 text-muted-foreground">
                          <li>TCP - Reliable, connection-oriented</li>
                          <li>UDP - Fast, connectionless</li>
                          <li>Port numbers (0-65535)</li>
                          <li>Well-known ports (80, 443, 22, 25)</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Attack Vectors:</strong>
                        <ul className="list-disc pl-5 mt-1 text-muted-foreground">
                          <li>Port scanning (Nmap)</li>
                          <li>TCP SYN flood attacks</li>
                          <li>Session hijacking</li>
                          <li>UDP amplification attacks</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="session">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <Badge>Layer 5</Badge>
                    <span>Session Layer - Managing Connections</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>What it does:</strong> Establishes, manages, and
                      terminates sessions between applications.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>Functions:</strong>
                        <ul className="list-disc pl-5 mt-1 text-muted-foreground">
                          <li>Session establishment</li>
                          <li>Session maintenance</li>
                          <li>Session termination</li>
                          <li>Checkpointing and recovery</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Examples:</strong>
                        <ul className="list-disc pl-5 mt-1 text-muted-foreground">
                          <li>SQL sessions</li>
                          <li>RPC (Remote Procedure Call)</li>
                          <li>NetBIOS sessions</li>
                          <li>SOCKS proxy sessions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="presentation">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <Badge>Layer 6</Badge>
                    <span>Presentation Layer - Data Format & Encryption</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>What it does:</strong> Handles data encryption,
                      compression, and format translation.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>Functions:</strong>
                        <ul className="list-disc pl-5 mt-1 text-muted-foreground">
                          <li>Data encryption/decryption</li>
                          <li>Data compression</li>
                          <li>Character encoding (ASCII, Unicode)</li>
                          <li>Data format conversion</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Technologies:</strong>
                        <ul className="list-disc pl-5 mt-1 text-muted-foreground">
                          <li>SSL/TLS encryption</li>
                          <li>JPEG, GIF image formats</li>
                          <li>MPEG video compression</li>
                          <li>Data serialization (JSON, XML)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="application">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <Badge>Layer 7</Badge>
                    <span>Application Layer - User Interface</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>What it does:</strong> Provides network services
                      directly to end-user applications.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>Common Protocols:</strong>
                        <ul className="list-disc pl-5 mt-1 text-muted-foreground">
                          <li>HTTP/HTTPS (Web browsing)</li>
                          <li>SMTP/POP3/IMAP (Email)</li>
                          <li>FTP/SFTP (File transfer)</li>
                          <li>DNS (Domain name resolution)</li>
                          <li>SSH (Secure shell)</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Attack Surface:</strong>
                        <ul className="list-disc pl-5 mt-1 text-muted-foreground">
                          <li>Web application vulnerabilities</li>
                          <li>Email phishing attacks</li>
                          <li>SQL injection</li>
                          <li>Cross-site scripting (XSS)</li>
                          <li>API security flaws</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* How It All Works Together */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-6">
              Data Flow: Complete Journey
            </h3>
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h4 className="text-lg font-semibold mb-2">
                      📧 Example: Sending an Email
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Let's trace how data travels through all layers when you
                      send an email
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h5 className="font-semibold text-green-600">
                        📤 Sending (Encapsulation)
                      </h5>
                      <div className="space-y-3">
                        {[
                          {
                            layer: "L7",
                            action: "Compose email in Gmail",
                            detail: "SMTP protocol, email headers",
                          },
                          {
                            layer: "L6",
                            action: "Encrypt with TLS",
                            detail: "Secure the email content",
                          },
                          {
                            layer: "L5",
                            action: "Establish session",
                            detail: "Connect to mail server",
                          },
                          {
                            layer: "L4",
                            action: "TCP segments",
                            detail: "Port 587 (SMTP), reliable delivery",
                          },
                          {
                            layer: "L3",
                            action: "IP packets",
                            detail: "Add source/destination IP addresses",
                          },
                          {
                            layer: "L2",
                            action: "Ethernet frames",
                            detail: "Add MAC addresses for local delivery",
                          },
                          {
                            layer: "L1",
                            action: "Electrical signals",
                            detail: "Transmit bits over network cable",
                          },
                        ].map((step, index) => (
                          <div key={index} className="flex gap-3 items-start">
                            <Badge
                              variant="outline"
                              className="text-xs shrink-0"
                            >
                              {step.layer}
                            </Badge>
                            <div className="text-sm">
                              <div className="font-medium">{step.action}</div>
                              <div className="text-muted-foreground text-xs">
                                {step.detail}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h5 className="font-semibold text-blue-600">
                        📥 Receiving (Decapsulation)
                      </h5>
                      <div className="space-y-3">
                        {[
                          {
                            layer: "L1",
                            action: "Receive signals",
                            detail: "Convert electrical signals to bits",
                          },
                          {
                            layer: "L2",
                            action: "Process frames",
                            detail: "Check MAC address, forward to IP",
                          },
                          {
                            layer: "L3",
                            action: "Route packets",
                            detail: "Check destination IP, route to host",
                          },
                          {
                            layer: "L4",
                            action: "Reassemble",
                            detail: "TCP ensures all segments arrive",
                          },
                          {
                            layer: "L5",
                            action: "Manage session",
                            detail: "Maintain connection to mail server",
                          },
                          {
                            layer: "L6",
                            action: "Decrypt data",
                            detail: "TLS decryption, format conversion",
                          },
                          {
                            layer: "L7",
                            action: "Display email",
                            detail: "Email client shows the message",
                          },
                        ].map((step, index) => (
                          <div key={index} className="flex gap-3 items-start">
                            <Badge
                              variant="outline"
                              className="text-xs shrink-0"
                            >
                              {step.layer}
                            </Badge>
                            <div className="text-sm">
                              <div className="font-medium">{step.action}</div>
                              <div className="text-muted-foreground text-xs">
                                {step.detail}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-white dark:bg-gray-900 rounded-lg border">
                    <h6 className="font-semibold mb-2 text-center">
                      🔍 Security Checkpoints
                    </h6>
                    <div className="grid md:grid-cols-3 gap-4 text-xs">
                      <div>
                        <strong>Network Level:</strong>
                        <ul className="list-disc pl-4 mt-1 text-muted-foreground">
                          <li>Firewall rules (L3-4)</li>
                          <li>IDS/IPS monitoring</li>
                          <li>VPN tunneling</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Application Level:</strong>
                        <ul className="list-disc pl-4 mt-1 text-muted-foreground">
                          <li>Email filtering</li>
                          <li>Antivirus scanning</li>
                          <li>Authentication</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Data Level:</strong>
                        <ul className="list-disc pl-4 mt-1 text-muted-foreground">
                          <li>Encryption (TLS)</li>
                          <li>Digital signatures</li>
                          <li>Data integrity checks</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="getting-started" className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose your path and begin mastering cybersecurity fundamentals with
            hands-on experiments and real-world scenarios.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Explore Experiments</h3>
                <p className="text-sm text-muted-foreground">
                  Try hands-on cybersecurity experiments and simulations
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-950 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Study Materials</h3>
                <p className="text-sm text-muted-foreground">
                  Access comprehensive guides and reference materials
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-950 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Practice Commands</h3>
                <p className="text-sm text-muted-foreground">
                  Learn essential cybersecurity tools and commands
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
