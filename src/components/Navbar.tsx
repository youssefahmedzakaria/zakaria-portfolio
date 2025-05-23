import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github, Linkedin, Download, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { useReducedMotion, motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") {
      return false;
    }
    return location.pathname.startsWith(path);
  };

  const mobileVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: { duration: shouldReduceMotion ? 0 : 0.3 }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.2 }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-xl shadow-sm border-b border-border/30" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gradient">
              Youssef Ahmed
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav aria-label="Primary navigation" className="hidden md:flex space-x-1 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-primary bg-primary/10"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="ml-4 flex items-center space-x-3">
              <a 
                href="mailto:youssefahmed052@gmail.com" 
                className="text-foreground/80 hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/5"
                aria-label="Email"
                title="youssefahmed052@gmail.com"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="tel:+201120700202" 
                className="text-foreground/80 hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/5"
                aria-label="Phone"
                title="+201120700202"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/youssefahmedzakaria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/5"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/youssef-ahmed-649210221/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/5"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://drive.google.com/file/d/1bGlWwuoS2rXL7QQLnt1FEbLmHOpYVGwN/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label="Resume"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
              <ThemeToggle />
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <Button
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Menu" className="relative"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <motion.div
        id="mobile-menu"
        role="navigation"
        aria-hidden={!isMenuOpen}
        className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg overflow-hidden"
        initial="closed"
        animate={isMenuOpen ? 'open' : 'closed'}
        variants={mobileVariants}
      >
        <div className="container px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-base font-medium ${
                isActive(item.path)
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col space-y-2 mt-4 pt-4 border-t border-border/50">
            <a 
              href="mailto:youssefahmed052@gmail.com" 
              className="flex items-center px-3 py-2 rounded-lg text-base font-medium text-foreground hover:text-primary hover:bg-primary/5"
            >
              <Mail className="h-5 w-5 mr-2" />
              youssefahmed052@gmail.com
            </a>
            <a 
              href="tel:+201120700202" 
              className="flex items-center px-3 py-2 rounded-lg text-base font-medium text-foreground hover:text-primary hover:bg-primary/5"
            >
              <Phone className="h-5 w-5 mr-2" />
              +201120700202
            </a>
            <a 
              href="https://github.com/youssefahmedzakaria" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 rounded-lg text-base font-medium text-foreground hover:text-primary hover:bg-primary/5"
            >
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/youssef-ahmed-649210221/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 rounded-lg text-base font-medium text-foreground hover:text-primary hover:bg-primary/5"
            >
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn
            </a>
            <a 
              href="https://drive.google.com/file/d/1bGlWwuoS2rXL7QQLnt1FEbLmHOpYVGwN/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 rounded-lg text-base font-medium bg-primary/10 text-primary"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
