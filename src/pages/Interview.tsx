import React, { useEffect } from "react";
import { Github, Twitter, Linkedin } from "lucide-react";

const Interview: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Interview Preparation
          </h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Coming soon: Practice cybersecurity interview questions and
            preparation resources.
          </p>
        </div>
      </section>

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

export default Interview;
