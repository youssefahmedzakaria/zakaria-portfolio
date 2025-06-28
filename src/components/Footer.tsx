import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-secondary/30 via-background to-secondary/20 backdrop-blur-sm border-t border-border/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/5 to-transparent rounded-full filter blur-[80px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-primary/5 to-transparent rounded-full filter blur-[60px] -z-10"></div>
      
      <div className="container mx-auto py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="animate-fade-right">
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center text-primary mr-3 shadow-lg">
                <Heart className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Youssef Ahmed
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              Software Engineer specializing in backend development, databases, and software solutions. 
              Passionate about building scalable and efficient systems that solve real-world problems.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild className="rounded-full h-12 w-12 bg-background/50 hover:bg-primary/10 hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                <a
                  href="https://github.com/youssefahmedzakaria"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full h-12 w-12 bg-background/50 hover:bg-primary/10 hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                <a
                  href="https://www.linkedin.com/in/youssef-ahmed-649210221/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full h-12 w-12 bg-background/50 hover:bg-primary/10 hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                <a
                  href="mailto:youssefahmed052@gmail.com"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="animate-fade-left">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-all duration-300 hover-lift inline-flex items-center group">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-all duration-300 hover-lift inline-flex items-center group">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-primary transition-all duration-300 hover-lift inline-flex items-center group">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-all duration-300 hover-lift inline-flex items-center group">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Youssef Ahmed. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Built with React, TypeScript, and Tailwind CSS
              </p>
            </div>
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="icon"
              className="rounded-full h-10 w-10 bg-background/50 hover:bg-primary/10 hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
