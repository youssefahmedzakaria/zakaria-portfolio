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
  GraduationCap
} from "lucide-react";

const skills = [
  { category: "Languages", items: ["Java", "Python", "C++", "SQL", "JavaScript"] },
  { category: "Frameworks", items: ["Spring Boot", "Django", "React"] },
  { category: "Databases", items: ["PostgreSQL", "Redis", "MySQL"] },
  { category: "DevOps", items: ["Docker", "Git", "Linux"] },
  { category: "Concepts", items: ["OOP", "SOLID", "Design Patterns", "Microservices", "Agile", "Big O Analysis", "Data Warehouse"] }
];

const experiences = [
  {
    company: "Kaf Insurance",
    position: "Software Engineer",
    period: "March 2025 - Present",
    description: "Developed Python-based solutions using Django to streamline data operations, integrating with PostgreSQL for efficient handling and retrieval. Enhanced database performance using PostgreSQL, achieving a 70% reduction in customer balance retrieval time by implementing strategic caching and deploying with Docker for scalable operations. Authored custom Python scripts to automate data validation and processing workflows, improving operational efficiency and reducing manual errors.",
    technologies: ["Python", "Django", "PostgreSQL", "Docker"],
    icon: <Code className="h-8 w-8 text-primary" />
  },  {
    company: "Enppi",
    position: "Software Development Trainee",
    period: "July 2024 - August 2024",
    description: "The training covered topics like Database Management Systems and Network Administration Systems. Gained practical experience with database technologies and network infrastructure, while developing skills in enterprise software environments.",
    technologies: ["Database Management", "Network Administration", "SQL"],
    icon: <Terminal className="h-8 w-8 text-primary" />
  },
  {
    company: "Banque Misr",
    position: "Backend Engineering Intern",
    period: "August 2024 - September 2024",
    description: "Created and deployed a banking system backend with comprehensive operations and APIs. Mastered Java Spring, REST APIs, Docker, and deployment techniques.",
    technologies: ["Java", "Spring Boot", "REST APIs", "Docker"],
    icon: <Terminal className="h-8 w-8 text-primary" />
  }
];

const projects = [
  {
    title: "Banking System",
    description: "Constructed a secure money transfer platform using Java Spring Boot, building a database with PostgreSQL and Redis for efficient caching. Deployed the application using Docker on Railway for scalable hosting. Enhanced security with Spring JWT token authentication for secure user access and transaction processing.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker", "JWT"],
    icon: <Terminal className="h-8 w-8" />
  },
  {
    title: "Virtual Screener - Siemens Diploma",
    description: "Built a web-based platform for streamlined candidate screening via video assessments. Deployed a secure backend using Java Spring Boot with RESTful APIs. Crafted a frontend with React.js and Next.js for an intuitive user experience, allowing hiring teams to efficiently evaluate candidates through automated assessments.",
    technologies: ["React.js", "Next.js", "Java", "Spring Boot", "REST API"],
    icon: <Code className="h-8 w-8" />
  },
  {
    title: "E-Commerce Website",
    description: "Developed a scalable e-commerce backend using Java Spring Boot. Designed and executed order management, notifications, and API functionalities. Applied SOLID principles and design patterns for scalable code that can handle high traffic and complex product relationships.",
    technologies: ["Java", "Spring Boot", "SOLID", "Design Patterns", "Microservices"],
    icon: <Database className="h-8 w-8" />
  }
];

const About = () => {
  const [activeSection, setActiveSection] = useState('top');

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
    <div className="min-h-screen flex flex-col lg:flex-row relative">      
      {/* Navigation Sidebar */}
      <div className="hidden lg:block fixed top-20 left-0 z-50 h-[calc(100vh-5rem)] w-56 pt-8 bg-background/80 backdrop-blur-sm border-r border-border/10 overflow-auto">
        <nav className="pr-2 pl-4">
          <div className="space-y-1.5">
            <h4 className="text-xs font-semibold text-muted-foreground mb-3 pl-3">NAVIGATION</h4>
            <Button 
              variant={activeSection === 'top' ? 'secondary' : 'ghost'}
              size="sm" 
              className="w-full justify-start text-sm font-medium" 
              onClick={() => scrollToSection('top')}
            >
              About Me
            </Button>
            <Button 
              variant={activeSection === 'experience' ? 'secondary' : 'ghost'}
              size="sm" 
              className="w-full justify-start text-sm font-medium" 
              onClick={() => scrollToSection('experience')}
            >
              Experience
            </Button>
            <Button 
              variant={activeSection === 'favorite-project' ? 'secondary' : 'ghost'}
              size="sm" 
              className="w-full justify-start text-sm font-medium" 
              onClick={() => scrollToSection('favorite-project')}
            >
              Favorite Project
            </Button>
            <Button 
              variant={activeSection === 'projects' ? 'secondary' : 'ghost'}
              size="sm" 
              className="w-full justify-start text-sm font-medium" 
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </Button>
            <Button 
              variant={activeSection === 'awards' ? 'secondary' : 'ghost'}
              size="sm" 
              className="w-full justify-start text-sm font-medium" 
              onClick={() => scrollToSection('awards')}
            >
              Awards
            </Button>
          </div>
          
          {/* Contact Links */}
          <div className="mt-8 pt-6 border-t border-border/20">
            <h4 className="text-xs font-semibold text-muted-foreground mb-3 pl-3">CONNECT</h4>
            <div className="space-y-1.5">
              <Button asChild variant="ghost" size="sm" className="w-full justify-start">
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
              <Button asChild variant="ghost" size="sm" className="w-full justify-start">
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
            </div>
          </div>
        </nav>
      </div>
      
      {/* Mobile Navigation - Sticky top tabs for small screens */}
      <div className="lg:hidden sticky top-16 z-30 bg-background/80 backdrop-blur-md border-b border-border/20 shadow-sm w-full">
        <div className="container px-4 mx-auto">
          <div className="flex overflow-x-auto py-2 gap-2 no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <Button 
              variant={activeSection === 'top' ? 'default' : 'ghost'}
              size="sm" 
              className="whitespace-nowrap rounded-full text-sm" 
              onClick={() => scrollToSection('top')}
            >
              About Me
            </Button>
            <Button 
              variant={activeSection === 'experience' ? 'default' : 'ghost'}
              size="sm" 
              className="whitespace-nowrap rounded-full text-sm" 
              onClick={() => scrollToSection('experience')}
            >
              Experience
            </Button>
            <Button 
              variant={activeSection === 'favorite-project' ? 'default' : 'ghost'}
              size="sm" 
              className="whitespace-nowrap rounded-full text-sm" 
              onClick={() => scrollToSection('favorite-project')}
            >
              Favorite Project
            </Button>
            <Button 
              variant={activeSection === 'projects' ? 'default' : 'ghost'}
              size="sm" 
              className="whitespace-nowrap rounded-full text-sm" 
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </Button>
            <Button 
              variant={activeSection === 'awards' ? 'default' : 'ghost'}
              size="sm" 
              className="whitespace-nowrap rounded-full text-sm" 
              onClick={() => scrollToSection('awards')}
            >
              Awards
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-grow lg:ml-56">        {/* Hero Section with Gradient Background */}
        <section id="top" className="pt-24 pb-16 relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">About Me</h1>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <p className="text-lg mb-4 leading-relaxed">
                    Hello! I'm Youssef Ahmed, a software engineer specializing in backend development, 
                    database optimization, and building scalable systems.
                  </p>
                  <p className="mb-4 leading-relaxed">
                    I'm currently working at Kaf Insurance, where I develop Python-based solutions using 
                    Django and PostgreSQL. I'm passionate about creating efficient, reliable software 
                    that solves real-world problems and scales effectively.
                  </p>
                  <p className="mb-6 leading-relaxed">
                    I hold a Bachelor's degree in Computers and Artificial Intelligence from Cairo University,
                    where I studied various aspects of computer science including data structures, algorithms,
                    database systems, and software engineering.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <Button asChild className="rounded-full group">
                      <Link to="/contact" className="flex items-center">
                        Contact Me
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="rounded-full">
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
                    <Button asChild variant="outline" className="rounded-full">
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
                  
                  {/* Education and Siemens Diploma Section */}                
                  <div className="space-y-6 mb-6">
                    <div className="p-6 border border-primary/20 rounded-xl bg-primary/5 backdrop-blur-sm">
                      <h3 className="text-xl font-semibold mb-3 flex items-center">
                        <Calendar className="mr-2 h-5 w-5 text-primary" />
                        Education
                      </h3>
                      <div className="mb-2">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">Cairo University</span>
                          <span className="text-muted-foreground">2021 - 2025</span>
                        </div>
                        <p>Bachelor of Computers and Artificial Intelligence</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Relevant Coursework: Data Structures, Algorithms, Object-Oriented Programming, Database Systems, Operating
                          Systems, Software Engineering, Data Warehouse, Big Data, Data Mining
                        </p>
                      </div>
                    </div>
                    {/* Siemens Diploma Card */}
                    <div className="p-6 border border-primary/20 rounded-xl bg-gradient-to-br from-primary/10 to-background backdrop-blur-sm">
                      <h3 className="text-xl font-semibold mb-3 flex items-center">
                        <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                        Siemens EDA Software Diploma
                      </h3>
                      <div className="mb-4">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">Siemens Digital Industries</span>
                          <span className="text-muted-foreground">Jul 2024 - Dec 2024</span>
                        </div>
                        <p className="mb-3 leading-relaxed">
                          Mastered topics including OOP, SOLID principles, Design Patterns, Data Structures, 
                          Algorithms, Linux, Version Control, Databases, Microservices, and Java Spring Boot.
                          Implemented real-life projects to apply software concepts, bridging theoretical 
                          knowledge with practical application in areas like microservices and database design.
                        </p>
                        <div className="space-y-2">
                          <div>
                            <h4 className="font-medium text-sm text-primary">Key Achievements</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground mt-1 space-y-1">
                              <li>Developed the Virtual Screener Platform for streamlined candidate assessment</li>
                              <li>Mastered advanced frontend and backend integration techniques</li>
                              <li>Collaborated in cross-functional teams to deliver enterprise-grade solutions</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-sm text-primary">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2 mt-1">
                              <Badge variant="outline" className="bg-primary/5">Java</Badge>
                              <Badge variant="outline" className="bg-primary/5">Spring Boot</Badge>
                              <Badge variant="outline" className="bg-primary/5">React.js</Badge>
                              <Badge variant="outline" className="bg-primary/5">Next.js</Badge>
                              <Badge variant="outline" className="bg-primary/5">Microservices</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-secondary/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 shadow-sm mb-6 sticky top-20">
                    <h3 className="text-xl font-semibold mb-4">Skills</h3>
                    {skills.map((skillGroup, index) => (
                      <div key={index} className="mb-4">
                        <h4 className="text-sm font-medium mb-2 text-muted-foreground">
                          {skillGroup.category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map((skill, i) => (
                            <Badge key={i} variant="outline" className="bg-primary/5">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>      
          {/* Experience Section */}
        <section id="experience" className="py-14 bg-secondary/30 scroll-mt-28">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Professional Experience</h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div 
                    key={index} 
                    className="bg-background/70 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-border/50 hover:border-primary/30 transition-colors duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap justify-between mb-2">
                          <h3 className="text-xl font-semibold">{exp.company}</h3>
                          <span className="text-muted-foreground text-sm bg-primary/5 px-3 py-1 rounded-full">{exp.period}</span>
                        </div>
                        <div className="text-primary font-medium mb-3">{exp.position}</div>
                        <p className="mb-4 leading-relaxed">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <Badge key={i} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
          {/* Virtual Screener Project Spotlight - Siemens Diploma Project */}
        <section id="favorite-project" className="py-14 relative overflow-hidden scroll-mt-32">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-background"></div>
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Siemens Diploma Project Spotlight
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl">
                A detailed look at the Virtual Screener Platform developed during the Siemens Diploma program
              </p>
              
              <div className="bg-background/70 backdrop-blur-md border border-primary/20 rounded-2xl overflow-hidden mb-8 shadow-lg">
                <div className="md:flex">
                  <div className="md:w-2/5 bg-gradient-to-br from-primary/20 to-primary/5 p-8">
                    <div className="h-full flex flex-col justify-center">                    
                      <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg inline-block mb-6">
                        <Code className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Virtual Screener Platform</h3>
                      <p className="text-muted-foreground mb-6">
                        A web-based platform for streamlined candidate screening via video assessments, 
                        built during the Siemens EDA Software Diploma program.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {["React.js", "Next.js", "Java", "Spring Boot", "REST API"].map((tech, i) => (
                          <Badge key={i} variant="outline" className="bg-primary/10 text-primary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="md:w-3/5 p-8">
                    <h4 className="text-lg font-semibold mb-4 text-primary">Project Overview</h4>
                    <p className="mb-4 leading-relaxed">
                      The Virtual Screener Platform was developed as a capstone project during the Siemens 
                      Diploma program, addressing the challenge of efficient candidate assessment in the 
                      modern remote work environment.
                    </p>
                    
                    <h4 className="text-lg font-semibold mb-4 text-primary">Key Features</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-primary">01</span>
                        </div>
                        <span>Automated video interview recording and assessment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-primary">02</span>
                        </div>
                        <span>Real-time skill evaluation with customizable rubrics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-primary">03</span>
                        </div>
                        <span>Collaborative review system for hiring teams</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-primary">04</span>
                        </div>
                        <span>Advanced analytics for candidate comparison</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-4 text-primary">Technical Achievements</h4>
                    <p className="leading-relaxed">
                      Built a microservices architecture with Java Spring Boot backend and React.js frontend. 
                      Implemented secure video streaming, real-time collaboration features, and 
                      RESTful APIs following industry best practices learned during the Siemens Diploma program.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>        
        
        {/* Key Projects Section */}
        <section id="projects" className="py-14 scroll-mt-20">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Key Projects</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <div 
                    key={index}
                    className="p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 bg-background/70 backdrop-blur-sm"
                  >
                    <div className="mb-4 bg-primary/10 p-3 rounded-lg inline-block">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>            
              <div className="mt-8 text-center">
                <Button asChild variant="outline" className="rounded-full">
                  <Link 
                    to="/projects" 
                    className="flex items-center"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View All Repositories
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>      
          {/* Awards and Certificates Section */}
        <section id="awards" className="py-14 bg-gradient-to-br from-primary/5 to-background scroll-mt-20">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Awards and Certificates</h2>
              <div className="bg-background/70 backdrop-blur-sm p-6 rounded-xl border border-border/50">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <GraduationCap className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Embedded Software Engineering Diploma</h3>
                      <p className="text-sm text-muted-foreground">August 2023</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Code className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">ECPC Competition Participation</h3>
                      <p className="text-sm text-muted-foreground">Participated twice in the Egyptian Collegiate Programming Contest</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Terminal className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Codeforces Ranking: Pupil</h3>
                      <p className="text-sm text-muted-foreground">
                        <a href="https://codeforces.com/profile/zakaria." target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          Profile: zakaria
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
