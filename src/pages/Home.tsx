import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Home = () => {
  useEffect(() => {
    document.title = "Cyber Command Playbook";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Welcome to the Cyber Command Playbook. Your one-stop resource for cybersecurity commands and concepts."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 pt-24 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Welcome to the Cyber Command Playbook</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Your one-stop resource for cybersecurity commands, concepts, and experiments.
        </p>
      </section>

      <main className="container mx-auto px-4 pb-16">
        <section id="basics" className="pt-16">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Cybersecurity Basics</h2>
            <p className="mt-3 text-muted-foreground max-w-3xl mx-auto">
              A fast primer on how the network stack works: IP and MAC addresses, TCP reliability, and the OSI model that organizes it all.
            </p>
          </header>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" aria-label="Concept overview">
            <Card>
              <CardHeader>
                <CardTitle>IP Address</CardTitle>
                <CardDescription>Network-level logical address</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>Identifies a device on a network so traffic can be routed to it.</p>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>IPv4: 32-bit (e.g., 192.168.1.10)</li>
                  <li>IPv6: 128-bit (e.g., 2001:db8::1)</li>
                  <li>Assigned by DHCP or configured statically</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>MAC Address</CardTitle>
                <CardDescription>Link-layer physical address</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>Burned into the network interface; used for local delivery on a LAN.</p>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>48-bit hex (e.g., 00:1A:2B:3C:4D:5E)</li>
                  <li>Operates at Layer 2 (Data Link)</li>
                  <li>ARP maps IP to MAC on IPv4 networks</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>TCP</CardTitle>
                <CardDescription>Reliable transport protocol</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>Provides ordered, loss-checked delivery for applications.</p>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>3-way handshake (SYN → SYN/ACK → ACK)</li>
                  <li>Retransmissions, flow and congestion control</li>
                  <li>Ports identify services (e.g., 80/443)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>OSI Model</CardTitle>
                <CardDescription>Conceptual 7-layer framework</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>Helps reason about where technologies and issues belong.</p>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Layers 1–7: Physical → Application</li>
                  <li>TCP lives at Transport; IP at Network</li>
                  <li>MAC/Ethernet at Data Link</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12" aria-label="OSI layers in detail">
            <h3 className="text-2xl font-semibold tracking-tight mb-4 text-center">OSI Layers Explained</h3>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="layer1">
                <AccordionTrigger>1. Physical</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Bits on wire or fiber: cables, signaling, voltage, wavelengths.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="layer2">
                <AccordionTrigger>2. Data Link</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Frames on a local network. MAC addressing, switching, ARP (IPv4), VLANs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="layer3">
                <AccordionTrigger>3. Network</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Packets and routing across networks. IP addressing, subnets, routers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="layer4">
                <AccordionTrigger>4. Transport</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  End-to-end delivery. TCP (reliable) and UDP (best-effort), ports, flow control.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="layer5">
                <AccordionTrigger>5. Session</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Manages sessions between hosts; often merged with Transport/Application in practice.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="layer6">
                <AccordionTrigger>6. Presentation</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Data representation and encryption (e.g., TLS); serialization, encoding.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="layer7">
                <AccordionTrigger>7. Application</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  User-facing protocols: HTTP(S), DNS, SMTP, SSH, etc.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="mt-12" aria-label="How it all works together">
            <h3 className="text-2xl font-semibold tracking-tight mb-3 text-center">How They Work Together</h3>
            <Card className="max-w-3xl mx-auto">
              <CardContent className="pt-6 text-sm text-muted-foreground">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Your app (Layer 7) sends data via TCP (Layer 4) to a destination port.</li>
                  <li>TCP segments are wrapped in IP packets (Layer 3) with source/destination IPs.</li>
                  <li>On the local LAN, IP resolves to a MAC (Layer 2) and frames are switched.</li>
                  <li>Routers forward packets across networks using IP routing (Layer 3).</li>
                  <li>At the destination, TCP reassembles the stream and delivers it to the app.</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
