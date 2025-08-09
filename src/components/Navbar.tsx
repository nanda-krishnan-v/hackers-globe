import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="text-lg font-bold">
          HackersGlobe
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="/#basics"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Home
          </a>
          {/* <Link to="/experiments" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Experiments
          </Link> */}
          <Link
            to="/materials"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Materials
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 p-4">
                <a href="/#basics" className="text-lg font-medium">
                  Home
                </a>
                {/* <Link to="/experiments" className="text-lg font-medium">
                  Experiments
                </Link> */}
                <Link to="/Material" className="text-lg font-medium">
                  Materials
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
