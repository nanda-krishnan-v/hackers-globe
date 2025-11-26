import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link
          to="/"
          className="flex items-center space-x-2 text-sm font-semibold"
        >
          <img src="/logo.png" alt="HackersGlobe Logo" className="h-6 w-6" />
          <span>HackersGlobe</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="/#basics"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </a>
          <Link
            to="/material"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Materials
          </Link>
          <Link
            to="/interview"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Interview
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden h-8 w-8"
              >
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 p-4">
                <a href="/#basics" className="text-sm">
                  Home
                </a>
                <Link to="/material" className="text-sm">
                  Materials
                </Link>
                <Link to="/interview" className="text-sm">
                  Interview
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
