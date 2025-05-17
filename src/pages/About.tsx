
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import GitHubRepos from "@/components/GitHubRepos";
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
import { AspectRatio } from "@/components/ui/aspect-ratio";

const skills = [
  { category: "Languages", items: ["Java", "Python", "C++", "SQL", "JavaScript"] },
  { category: "Frameworks", items: ["Spring Boot", "Django", "React"] },
  { category: "Databases", items: ["PostgreSQL", "Redis", "MySQL"] },
  { category: "DevOps", items: ["Docker", "Git", "Linux"] },
  { category: "Concepts", items: ["OOP", "SOLID", "Design Patterns", "Microservices"] }
];

const experiences = [
  {
    company: "Kaf Insurance",
    position: "Software Engineer",
    period: "March 2025 - Present",
    description: "Developed Python-based solutions using Django to streamline data operations, integrating with PostgreSQL for efficient handling and retrieval. Enhanced database performance using PostgreSQL, achieving a 70% reduction in customer balance retrieval time by implementing strategic caching and deploying with Docker for scalable operations.",
    technologies: ["Python", "Django", "PostgreSQL", "Docker"],
    icon: <Code className="h-8 w-8 text-primary" />
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
    description: "A secure money transfer platform built with Java Spring Boot, utilizing PostgreSQL for transaction data and Redis for efficient caching. Implemented robust authentication and transaction logging mechanisms.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker"],
    icon: <Terminal className="h-8 w-8" />
  },
  {
    title: "Virtual Screener Platform",
    description: "Developed a comprehensive screening solution during the Siemens Diploma program, enabling efficient candidate assessment through video interviews and skill evaluations.",
    technologies: ["React.js", "Next.js", "Java", "Spring Boot", "REST API"],
    icon: <Code className="h-8 w-8" />
  },
  {
    title: "E-Commerce Backend",
    description: "Built a scalable backend architecture following SOLID principles to handle product management, user accounts, and order processing with a focus on maintainable code.",
    technologies: ["Java", "Spring Boot", "SOLID", "Design Patterns"],
    icon: <Database className="h-8 w-8" />
  }
];

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient Background */}
      <section className="pt-32 pb-16 relative">
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
                    </div>
                  </div>
                  
                  {/* Siemens Diploma Card */}
                  <div className="p-6 border border-primary/20 rounded-xl bg-gradient-to-br from-primary/10 to-background backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                      Siemens Diploma
                    </h3>
                    <div className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Siemens Digital Industries</span>
                        <span className="text-muted-foreground">2023 - 2024</span>
                      </div>
                      <p className="mb-3 leading-relaxed">
                        Completed an intensive professional development program focusing on industrial software 
                        engineering and digital transformation technologies. The program covered advanced 
                        topics in software development, automation, and industry 4.0 principles.
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
                            <Badge variant="outline" className="bg-primary/5">React.js</Badge>
                            <Badge variant="outline" className="bg-primary/5">Next.js</Badge>
                            <Badge variant="outline" className="bg-primary/5">Java</Badge>
                            <Badge variant="outline" className="bg-primary/5">Spring Boot</Badge>
                            <Badge variant="outline" className="bg-primary/5">REST APIs</Badge>
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
      <section className="py-20 bg-secondary/30">
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
      <section className="py-20 relative overflow-hidden">
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
                      built during the Siemens Diploma program.
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
      <section className="py-20">
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
          </div>
        </div>
      </section>
      
      {/* GitHub Repositories Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              GitHub Repositories
            </h2>
            <p className="text-muted-foreground mb-8">
              Check out some of my recent projects on GitHub.
            </p>
            <GitHubRepos />
            <div className="mt-8 text-center">
              <Button asChild variant="outline" className="rounded-full">
                <a 
                  href="https://github.com/youssefahmedzakaria" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View All Repositories
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
