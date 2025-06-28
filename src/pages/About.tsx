import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Github, 
  Linkedin, 
  ArrowRight, 
  Calendar,
  Terminal,
  Code,
  Database,
  GraduationCap,
  Award,
  Star,
  Zap,
  Shield,
  Heart,
  Sparkles,
  TrendingUp,
  Users,
  Globe,
  Rocket
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import BackgroundDecoration from "@/components/BackgroundDecoration";

const skills = [
  { 
    category: "Languages", 
    items: ["Java", "Python", "C++", "SQL", "JavaScript"],
    icon: <Code className="h-4 w-4" />
  },
  { 
    category: "Frameworks", 
    items: ["Spring Boot", "Django", "React"],
    icon: <Rocket className="h-4 w-4" />
  },
  { 
    category: "Databases", 
    items: ["PostgreSQL", "Redis", "MySQL"],
    icon: <Database className="h-4 w-4" />
  },
  { 
    category: "DevOps", 
    items: ["Docker", "Git", "Linux"],
    icon: <Terminal className="h-4 w-4" />
  },
  { 
    category: "Concepts", 
    items: ["OOP", "SOLID", "Design Patterns", "Microservices", "Agile", "Big O Analysis", "Data Warehouse"],
    icon: <Shield className="h-4 w-4" />
  }
];

const experiences = [
  {
    company: "Kaf Insurance",
    position: "Software Engineer",
    period: "March 2025 - Present",
    description: "Developed Python-based solutions using Django to streamline data operations, integrating with PostgreSQL for efficient handling and retrieval. Enhanced database performance using PostgreSQL, achieving a 70% reduction in customer balance retrieval time by implementing strategic caching and deploying with Docker for scalable operations. Authored custom Python scripts to automate data validation and processing workflows, improving operational efficiency and reducing manual errors.",
    technologies: ["Python", "Django", "PostgreSQL", "Docker"],
    icon: <Code className="h-8 w-8 text-primary" />,
    achievements: ["70% reduction in customer balance retrieval time", "Automated data validation workflows", "Scalable Docker deployment"]
  },
  {
    company: "Enppi",
    position: "Software Development Trainee",
    period: "July 2024 - August 2024",
    description: "The training covered topics like Database Management Systems and Network Administration Systems. Gained practical experience with database technologies and network infrastructure, while developing skills in enterprise software environments.",
    technologies: ["Database Management", "Network Administration", "SQL"],
    icon: <Terminal className="h-8 w-8 text-primary" />,
    achievements: ["Database management systems expertise", "Network infrastructure experience", "Enterprise software skills"]
  },
  {
    company: "Banque Misr",
    position: "Backend Engineering Intern",
    period: "August 2024 - September 2024",
    description: "Created and deployed a banking system backend with comprehensive operations and APIs. Mastered Java Spring, REST APIs, Docker, and deployment techniques.",
    technologies: ["Java", "Spring Boot", "REST APIs", "Docker"],
    icon: <Terminal className="h-8 w-8 text-primary" />,
    achievements: ["Complete banking system backend", "RESTful API development", "Production deployment"]
  }
];

const projects = [
  {
    title: "Banking System",
    description: "Constructed a secure money transfer platform using Java Spring Boot, building a database with PostgreSQL and Redis for efficient caching. Deployed the application using Docker on Railway for scalable hosting. Enhanced security with Spring JWT token authentication for secure user access and transaction processing.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker", "JWT"],
    icon: <Terminal className="h-8 w-8" />,
    features: ["Secure money transfers", "JWT authentication", "Redis caching", "Docker deployment"],
    github: "https://github.com/youssefahmedzakaria/banking-system"
  },
  {
    title: "Virtual Screener - Siemens Diploma",
    description: "Built a web-based platform for streamlined candidate screening via video assessments. Deployed a secure backend using Java Spring Boot with RESTful APIs. Crafted a frontend with React.js and Next.js for an intuitive user experience, allowing hiring teams to efficiently evaluate candidates through automated assessments.",
    technologies: ["React.js", "Next.js", "Java", "Spring Boot", "REST API"],
    icon: <Code className="h-8 w-8" />,
    features: ["Video assessments", "Candidate screening", "Automated evaluation", "User-friendly interface"],
    github: "https://github.com/youssefahmedzakaria/virtual-screener"
  },
  {
    title: "E-Commerce Website",
    description: "Developed a scalable e-commerce backend using Java Spring Boot. Designed and executed order management, notifications, and API functionalities. Applied SOLID principles and design patterns for scalable code that can handle high traffic and complex product relationships.",
    technologies: ["Java", "Spring Boot", "SOLID", "Design Patterns", "Microservices"],
    icon: <Database className="h-8 w-8" />,
    features: ["Order management", "Notification system", "Scalable architecture", "High traffic handling"],
    github: "https://github.com/youssefahmedzakaria/ecommerce-system"
  }
];

const About = () => {
  const [activeSection, setActiveSection] = useState('top');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Add CSS for smooth scrolling behavior and track active section
  useEffect(() => {
    // Add smooth scrolling behavior to the document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Function to determine which section is currently in view
    const handleScroll = () => {
      const sections = ['top', 'experience', 'favorite-project', 'projects', 'awards'];
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // If the section is in the viewport (with some buffer for better UX)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      // Clean up when component unmounts
      document.documentElement.style.scrollBehavior = '';
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative overflow-hidden">      
      <BackgroundDecoration />
      {/* Enhanced Navigation Sidebar */}
      <div className="hidden lg:block fixed top-20 left-0 z-50 h-[calc(100vh-5rem)] w-64 pt-8 bg-background/90 backdrop-blur-xl border-r border-border/20 overflow-auto">
        <nav className="pr-4 pl-6">
          <div className="space-y-2">
            <div className="flex items-center mb-6">
              <Sparkles className="h-5 w-5 text-primary mr-2" />
              <h4 className="text-sm font-bold text-gradient-multi">NAVIGATION</h4>
            </div>
            <Button 
              variant={activeSection === 'top' ? 'default' : 'ghost'}
              size="sm" 
              className={`w-full justify-start text-sm font-medium transition-all duration-300 ${
                activeSection === 'top' 
                  ? 'bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 shadow-sm' 
                  : 'hover:bg-primary/5'
              }`}
              onClick={() => scrollToSection('top')}
            >
              <Heart className="mr-3 h-4 w-4" />
              About Me
            </Button>
            <Button 
              variant={activeSection === 'experience' ? 'default' : 'ghost'}
              size="sm" 
              className={`w-full justify-start text-sm font-medium transition-all duration-300 ${
                activeSection === 'experience' 
                  ? 'bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 shadow-sm' 
                  : 'hover:bg-primary/5'
              }`}
              onClick={() => scrollToSection('experience')}
            >
              <TrendingUp className="mr-3 h-4 w-4" />
              Experience
            </Button>
            <Button 
              variant={activeSection === 'favorite-project' ? 'default' : 'ghost'}
              size="sm" 
              className={`w-full justify-start text-sm font-medium transition-all duration-300 ${
                activeSection === 'favorite-project' 
                  ? 'bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 shadow-sm' 
                  : 'hover:bg-primary/5'
              }`}
              onClick={() => scrollToSection('favorite-project')}
            >
              <Star className="mr-3 h-4 w-4" />
              Favorite Project
            </Button>
            <Button 
              variant={activeSection === 'projects' ? 'default' : 'ghost'}
              size="sm" 
              className={`w-full justify-start text-sm font-medium transition-all duration-300 ${
                activeSection === 'projects' 
                  ? 'bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 shadow-sm' 
                  : 'hover:bg-primary/5'
              }`}
              onClick={() => scrollToSection('projects')}
            >
              <Code className="mr-3 h-4 w-4" />
              Projects
            </Button>
            <Button 
              variant={activeSection === 'awards' ? 'default' : 'ghost'}
              size="sm" 
              className={`w-full justify-start text-sm font-medium transition-all duration-300 ${
                activeSection === 'awards' 
                  ? 'bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 shadow-sm' 
                  : 'hover:bg-primary/5'
              }`}
              onClick={() => scrollToSection('awards')}
            >
              <Award className="mr-3 h-4 w-4" />
              Awards
            </Button>
          </div>
          
          {/* Enhanced Contact Links */}
          <div className="mt-8 pt-6 border-t border-border/20">
            <div className="flex items-center mb-4">
              <Globe className="h-5 w-5 text-primary mr-2" />
              <h4 className="text-sm font-bold text-gradient-multi">CONNECT</h4>
            </div>
            <div className="space-y-2">
              <Button asChild variant="ghost" size="sm" className="w-full justify-start hover:bg-primary/5 transition-all duration-300">
                <a 
                  href="https://github.com/youssefahmedzakaria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="mr-3 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm" className="w-full justify-start hover:bg-primary/5 transition-all duration-300">
                <a 
                  href="https://www.linkedin.com/in/youssef-ahmed-649210221/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Linkedin className="mr-3 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </nav>
      </div>
      
      {/* Enhanced Mobile Navigation */}
      <div className="lg:hidden sticky top-16 z-30 bg-background/90 backdrop-blur-xl border-b border-border/20 shadow-lg w-full">
        <div className="container px-4 mx-auto">
          <div className="flex overflow-x-auto py-3 gap-2 no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <Button 
              variant={activeSection === 'top' ? 'default' : 'ghost'}
              size="sm" 
              className="whitespace-nowrap rounded-full text-sm transition-all duration-300" 
              onClick={() => scrollToSection('top')}
            >
              <Heart className="mr-2 h-4 w-4" />
              About
            </Button>
            <Button 
              variant={activeSection === 'experience' ? 'default' : 'ghost'}
              size="sm" 
              className="whitespace-nowrap rounded-full text-sm transition-all duration-300" 
              onClick={() => scrollToSection('experience')}
            >
              <TrendingUp className="mr-2 h-4 w-4" />
              Experience
            </Button>
            <Button 
              variant={activeSection === 'favorite-project' ? 'default' : 'ghost'}
              size="sm" 
              className="whitespace-nowrap rounded-full text-sm transition-all duration-300" 
              onClick={() => scrollToSection('favorite-project')}
            >
              <Star className="mr-2 h-4 w-4" />
              Projects
            </Button>
            <Button 
              variant={activeSection === 'awards' ? 'default' : 'ghost'}
              size="sm" 
              className="whitespace-nowrap rounded-full text-sm transition-all duration-300" 
              onClick={() => scrollToSection('awards')}
            >
              <Award className="mr-2 h-4 w-4" />
              Awards
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-grow lg:ml-64">
        {/* Enhanced Hero Section */}
        <section id="top" className="pt-24 pb-16 relative overflow-hidden">
          {/* Enhanced background effects */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-purple-500/5"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/20 via-purple-500/10 to-blue-500/10 rounded-full filter blur-[120px] -z-10 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/10 via-purple-500/15 to-blue-500/10 rounded-full filter blur-[80px] -z-10 animate-float-slow"></div>
          
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary text-sm font-medium mb-6 border border-primary/20 shadow-sm">
                    <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
                    Software Engineer & Backend Developer
                  </div>
                  <div className="overflow-visible">
                    <h1 className="text-5xl md:text-6xl font-bold text-gradient-hero leading-none pb-4 -mb-2 align-bottom">
                      About Me
                    </h1>
                  </div>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Passionate about building scalable systems and solving complex problems through elegant code
                  </p>
                </div>
              </motion.div>

              <div className="grid lg:grid-cols-3 gap-8">
                <motion.div 
                  className="lg:col-span-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="space-y-6">
                    <div className="card-glass p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift">
                      <h3 className="text-2xl font-bold mb-4 text-gradient-multi flex items-center leading-tight pb-1">
                        <Heart className="h-6 w-6 mr-3 text-primary" />
                        Who I Am
                      </h3>
                      <div className="space-y-4 text-lg leading-relaxed">
                        <p>
                          Hello! I'm <span className="text-primary font-semibold">Youssef Ahmed</span>, a software engineer specializing in backend development, 
                          database optimization, and building scalable systems that make a real impact.
                        </p>
                        <p>
                          I'm currently working at <span className="text-primary font-semibold">Kaf Insurance</span>, where I develop Python-based solutions using 
                          Django and PostgreSQL. I'm passionate about creating efficient, reliable software 
                          that solves real-world problems and scales effectively.
                        </p>
                        <p>
                          I hold a Bachelor's degree in <span className="text-primary font-semibold">Computers and Artificial Intelligence</span> from Cairo University,
                          where I studied various aspects of computer science including data structures, algorithms,
                          database systems, and software engineering.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Button asChild className="btn-gradient rounded-full group shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                        <Link to="/contact" className="flex items-center">
                          Contact Me
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="btn-glass rounded-full border-primary/30 hover:border-primary/50 transition-all duration-300 hover-lift">
                        <a 
                          href="https://www.linkedin.com/in/youssef-ahmed-649210221/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <Linkedin className="mr-2 h-4 w-4" />
                          LinkedIn
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="btn-glass rounded-full border-primary/30 hover:border-primary/50 transition-all duration-300 hover-lift">
                        <a 
                          href="https://github.com/youssefahmedzakaria"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  {/* Enhanced Education Section */}                
                  <div className="space-y-6 mt-8">
                    <motion.div 
                      className="card-glass p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <h3 className="text-2xl font-bold mb-6 text-gradient-multi flex items-center leading-tight pb-1">
                        <Calendar className="mr-3 h-6 w-6 text-primary" />
                        Education
                      </h3>
                      <div className="space-y-6">
                        <div className="p-6 border border-primary/20 rounded-xl bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="text-xl font-semibold text-primary">Cairo University</h4>
                              <p className="text-lg font-medium">Bachelor of Computers and Artificial Intelligence</p>
                            </div>
                            <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">2021 - 2025</span>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            Relevant Coursework: Data Structures, Algorithms, Object-Oriented Programming, Database Systems, Operating
                            Systems, Software Engineering, Data Warehouse, Big Data, Data Mining
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Enhanced Siemens Diploma Card */}
                    <motion.div 
                      className="card-glass p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <h3 className="text-2xl font-bold mb-6 text-gradient-multi flex items-center leading-tight pb-1">
                        <GraduationCap className="mr-3 h-6 w-6 text-primary" />
                        Siemens EDA Software Diploma
                      </h3>
                      <div className="space-y-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-xl font-semibold text-primary">Siemens Digital Industries</h4>
                            <p className="text-lg font-medium">Advanced Software Engineering Program</p>
                          </div>
                          <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">Jul 2024 - Dec 2024</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          Mastered topics including OOP, SOLID principles, Design Patterns, Data Structures, 
                          Algorithms, Linux, Version Control, Databases, Microservices, and Java Spring Boot.
                          Implemented real-life projects to apply software concepts, bridging theoretical 
                          knowledge with practical application in areas like microservices and database design.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-primary mb-3 flex items-center">
                              <Star className="h-4 w-4 mr-2" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm text-muted-foreground">Developed the Virtual Screener Platform for streamlined candidate assessment</span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm text-muted-foreground">Mastered advanced frontend and backend integration techniques</span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm text-muted-foreground">Collaborated in cross-functional teams to deliver enterprise-grade solutions</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary mb-3 flex items-center">
                              <Zap className="h-4 w-4 mr-2" />
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {["Java", "Spring Boot", "React.js", "Next.js", "Microservices"].map((tech, index) => (
                                <Badge 
                                  key={index} 
                                  variant="outline" 
                                  className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all duration-300"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Enhanced Skills Sidebar */}
                <motion.div 
                  className="lg:sticky lg:top-20"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="card-glass p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift">
                    <h3 className="text-2xl font-bold mb-6 text-gradient-multi flex items-center leading-tight pb-1">
                      <Zap className="h-6 w-6 mr-3 text-primary" />
                      Skills
                    </h3>
                    <div className="space-y-6">
                      {skills.map((skillGroup, index) => (
                        <motion.div 
                          key={index} 
                          className="group"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 * index }}
                          onHoverStart={() => setHoveredSkill(skillGroup.category)}
                          onHoverEnd={() => setHoveredSkill(null)}
                        >
                          <h4 className="text-sm font-semibold mb-3 text-muted-foreground flex items-center group-hover:text-primary transition-colors duration-300 leading-tight pb-1">
                            {skillGroup.icon}
                            <span className="ml-2">{skillGroup.category}</span>
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((skill, i) => (
                              <Badge 
                                key={i} 
                                variant="outline" 
                                className={`bg-primary/5 text-primary border-primary/20 hover:bg-primary/20 transition-all duration-300 ${
                                  hoveredSkill === skillGroup.category ? 'scale-105' : ''
                                }`}
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Experience Section */}
        <section id="experience" className="py-20 bg-gradient-to-br from-secondary/20 via-background to-secondary/20 relative overflow-hidden scroll-mt-28">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/10 via-purple-500/5 to-blue-500/10 rounded-full filter blur-[100px] -z-10 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-primary/5 via-purple-500/10 to-blue-500/5 rounded-full filter blur-[80px] -z-10 animate-float-slow"></div>
          
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary text-sm font-medium mb-6 border border-primary/20 shadow-sm">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Professional Journey
                </div>
                <div className="overflow-visible">
                  <h2 className="text-4xl md:text-5xl font-bold text-gradient-multi leading-none pb-4 -mb-2 align-bottom">
                    Professional Experience
                  </h2>
                </div>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  My journey in software engineering, from internships to professional roles
                </p>
              </motion.div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="card-glass p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift"
                  >
                    <div className="flex items-start gap-6">
                      <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center text-primary flex-shrink-0 mt-1 shadow-lg">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap justify-between items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gradient-multi">{exp.company}</h3>
                            <div className="text-primary font-semibold text-lg mt-1">{exp.position}</div>
                          </div>
                          <span className="text-sm text-muted-foreground bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6 text-lg">{exp.description}</p>
                        
                        {/* Key Achievements */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-primary mb-3 flex items-center">
                            <Star className="h-4 w-4 mr-2" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start">
                                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm text-muted-foreground">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-primary mb-3 flex items-center">
                            <Zap className="h-4 w-4 mr-2" />
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <Badge 
                                key={i} 
                                variant="outline" 
                                className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all duration-300"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Virtual Screener Project Spotlight */}
        <section id="favorite-project" className="py-20 relative overflow-hidden scroll-mt-32">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-purple-500/5"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/15 via-purple-500/10 to-blue-500/10 rounded-full filter blur-[120px] -z-10 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/10 via-purple-500/15 to-blue-500/10 rounded-full filter blur-[80px] -z-10 animate-float-slow"></div>
          
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary text-sm font-medium mb-6 border border-primary/20 shadow-sm">
                  <Star className="h-4 w-4 mr-2" />
                  Featured Project
                </div>
                <div className="overflow-visible">
                  <h2 className="text-4xl md:text-5xl font-bold text-gradient-multi leading-none pb-4 -mb-2 align-bottom">
                    Virtual Screener Platform
                  </h2>
                </div>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  A comprehensive candidate screening solution developed during the Siemens Diploma program
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="card-glass p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover-lift"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gradient-multi flex items-center leading-tight pb-1">
                      <Code className="h-6 w-6 mr-3 text-primary" />
                      Project Overview
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                      Built a web-based platform for streamlined candidate screening via video assessments. 
                      Deployed a secure backend using Java Spring Boot with RESTful APIs. Crafted a frontend 
                      with React.js and Next.js for an intuitive user experience, allowing hiring teams to 
                      efficiently evaluate candidates through automated assessments.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2 flex items-center">
                          <Zap className="h-4 w-4 mr-2" />
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {["Video assessments", "Candidate screening", "Automated evaluation", "User-friendly interface"].map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-primary mb-2 flex items-center">
                          <Shield className="h-4 w-4 mr-2" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {["React.js", "Next.js", "Java", "Spring Boot", "REST API"].map((tech, i) => (
                            <Badge 
                              key={i} 
                              variant="outline" 
                              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="p-6 border border-primary/20 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm">
                      <h4 className="font-semibold text-primary mb-3 flex items-center">
                        <Users className="h-5 w-5 mr-2" />
                        Target Users
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        HR teams and hiring managers looking to streamline their candidate evaluation process 
                        through automated video assessments and comprehensive screening tools.
                      </p>
                    </div>
                    
                    <div className="p-6 border border-primary/20 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm">
                      <h4 className="font-semibold text-primary mb-3 flex items-center">
                        <TrendingUp className="h-5 w-5 mr-2" />
                        Impact
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Significantly reduced time-to-hire by automating candidate screening processes and 
                        providing comprehensive evaluation tools for hiring teams.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced Projects Section */}
        <section id="projects" className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden scroll-mt-28">
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/10 via-purple-500/5 to-blue-500/10 rounded-full filter blur-[100px] -z-10 animate-float-slow"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-primary/5 via-purple-500/10 to-blue-500/5 rounded-full filter blur-[80px] -z-10 animate-float"></div>
          
          <div className="container px-4 mx-auto">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary text-sm font-medium mb-6 border border-primary/20 shadow-sm">
                  <Code className="h-4 w-4 mr-2" />
                  Portfolio Projects
                </div>
                <div className="overflow-visible">
                  <h2 className="text-4xl md:text-5xl font-bold text-gradient-multi leading-none pb-4 -mb-2 align-bottom">
                    Featured Projects
                  </h2>
                </div>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  A showcase of my technical skills and problem-solving approach through real-world projects
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="card-glass p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift group"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center text-primary flex-shrink-0 shadow-lg">
                        {project.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gradient-multi group-hover:text-primary transition-colors duration-300 leading-tight pb-1">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2 flex items-center">
                          <Zap className="h-4 w-4 mr-2" />
                          Key Features
                        </h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-primary mb-2 flex items-center">
                          <Shield className="h-4 w-4 mr-2" />
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <Badge 
                              key={i} 
                              variant="outline" 
                              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {project.github && (
                        <div className="pt-4">
                          <Button asChild variant="outline" className="btn-glass border-primary/30 hover:border-primary/50 transition-all duration-300">
                            <a 
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              View on GitHub
                              <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                            </a>
                          </Button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Awards Section */}
        <section id="awards" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/20 to-primary/5 relative overflow-hidden scroll-mt-28">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/15 via-purple-500/10 to-blue-500/10 rounded-full filter blur-[120px] -z-10 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/10 via-purple-500/15 to-blue-500/10 rounded-full filter blur-[80px] -z-10 animate-float-slow"></div>
          
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary text-sm font-medium mb-6 border border-primary/20 shadow-sm">
                  <Award className="h-4 w-4 mr-2" />
                  Recognition
                </div>
                <div className="overflow-visible">
                  <h2 className="text-4xl md:text-5xl font-bold text-gradient-multi leading-none pb-4 -mb-2 align-bottom">
                    Awards & Recognition
                  </h2>
                </div>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Recognition for my contributions and achievements in software engineering
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="card-glass p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="p-6 border border-primary/20 rounded-xl bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm">
                      <h3 className="text-xl font-bold mb-3 text-gradient-multi flex items-center leading-tight pb-1">
                        <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                        Siemens EDA Software Diploma
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Successfully completed the advanced software engineering program, demonstrating 
                        mastery of modern development practices and technologies.
                      </p>
                    </div>
                    
                    <div className="p-6 border border-primary/20 rounded-xl bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm">
                      <h3 className="text-xl font-bold mb-3 text-gradient-multi flex items-center leading-tight pb-1">
                        <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                        Performance Excellence
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Achieved 70% performance improvement in database operations at Kaf Insurance, 
                        demonstrating exceptional problem-solving and optimization skills.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="p-6 border border-primary/20 rounded-xl bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm">
                      <h3 className="text-xl font-bold mb-3 text-gradient-multi flex items-center leading-tight pb-1">
                        <Code className="h-5 w-5 mr-2 text-primary" />
                        Technical Excellence
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Recognized for developing enterprise-grade solutions and implementing best 
                        practices in software architecture and development.
                      </p>
                    </div>
                    
                    <div className="p-6 border border-primary/20 rounded-xl bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm">
                      <h3 className="text-xl font-bold mb-3 text-gradient-multi flex items-center leading-tight pb-1">
                        <Users className="h-5 w-5 mr-2 text-primary" />
                        Team Collaboration
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Valued team member known for effective communication, knowledge sharing, and 
                        collaborative problem-solving in cross-functional environments.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced Extracurriculars Section */}
        <section id="extracurriculars" className="py-20 bg-gradient-to-br from-secondary/10 via-background to-secondary/10 relative overflow-hidden scroll-mt-28">
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/10 via-purple-500/5 to-blue-500/10 rounded-full filter blur-[100px] -z-10 animate-float"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-primary/5 via-purple-500/10 to-blue-500/5 rounded-full filter blur-[80px] -z-10 animate-float-slow"></div>
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary text-sm font-medium mb-6 border border-primary/20 shadow-sm">
                  <Users className="h-4 w-4 mr-2" />
                  Extracurriculars
                </div>
                <div className="overflow-visible">
                  <h2 className="text-4xl md:text-5xl font-bold text-gradient-multi leading-none pb-4 -mb-2 align-bottom">
                    Other Achievements
                  </h2>
                </div>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Activities and recognitions beyond academics and work
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="card-glass p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift"
              >
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <GraduationCap className="h-7 w-7 text-primary mt-1" />
                    <div>
                      <span className="text-lg font-semibold text-gradient-multi leading-tight pb-1">Embedded Software Engineering Diploma</span>
                      <span className="text-muted-foreground text-sm">Aug 2023</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Star className="h-7 w-7 text-primary mt-1" />
                    <div>
                      <span className="text-lg font-semibold text-gradient-multi leading-tight pb-1">Participated in ECPC Competition</span>
                      <span className="text-muted-foreground text-sm">Twice</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Code className="h-7 w-7 text-primary mt-1" />
                    <div>
                      <span className="text-lg font-semibold text-gradient-multi leading-tight pb-1">Ranked Pupil on Codeforces</span>
                      <a href="https://codeforces.com/profile/zakaria." target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm block">Profile: zakaria</a>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
