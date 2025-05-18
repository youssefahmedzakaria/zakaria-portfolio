
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 backdrop-blur-sm border-t border-border/50">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Youssef Ahmed</h3>
            <p className="text-muted-foreground mb-6">
              Software Engineer specializing in backend development, databases, and software solutions.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild className="rounded-full h-10 w-10 bg-background/50 hover:bg-primary/10 hover:text-primary">
                <a
                  href="https://github.com/youssefahmedzakaria"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full h-10 w-10 bg-background/50 hover:bg-primary/10 hover:text-primary">
                <a
                  href="https://www.linkedin.com/in/youssef-ahmed-649210221/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full h-10 w-10 bg-background/50 hover:bg-primary/10 hover:text-primary">
                <a
                  href="mailto:youssefahmed052@gmail.com"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Youssef Ahmed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
