
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowDown, Github, Code, Database, Terminal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Banking System",
    description: "A secure money transfer platform with PostgreSQL database and Redis caching, deployed using Docker.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker"],
    icon: <Terminal className="h-10 w-10 text-primary" />
  },
  {
    title: "Virtual Screener",
    description: "A web-based platform for streamlined candidate screening via video assessments built during Siemens Diploma.",
    tech: ["React.js", "Next.js", "Java", "Spring Boot"],
    icon: <Code className="h-10 w-10 text-primary" />
  },
  {
    title: "E-Commerce Backend",
    description: "A scalable e-commerce backend using Java Spring Boot with order management and notifications following SOLID principles.",
    tech: ["Java", "Spring Boot", "Design Patterns"],
    icon: <Database className="h-10 w-10 text-primary" />
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Glassmorphism */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="animate-fade-up">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Software Engineering & <br />Backend Development
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Welcome to my portfolio, showcasing my expertise in <span className="text-primary font-medium">Java Spring Boot</span>, 
                <span className="text-primary font-medium"> database optimization</span>, and 
                <span className="text-primary font-medium"> software architecture</span>.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/about">About Me</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16 animate-bounce">
          <Button variant="ghost" size="icon" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-24 bg-secondary/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore my key software engineering projects and technical accomplishments that demonstrate my skills.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-background/50 backdrop-blur-sm group overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-5 bg-primary/10 p-4 rounded-full inline-block group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="rounded-full group">
              <a 
                href="https://github.com/youssefahmedzakaria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* About Me Preview */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Hello, I'm Youssef
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm a software engineer specializing in backend development with a focus on Java Spring Boot 
                  and database optimization. Currently working at Kaf Insurance, I develop Python-based 
                  solutions with Django and PostgreSQL to solve real business problems.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  With a Bachelor's degree in Computers and Artificial Intelligence from Cairo University,
                  I combine strong theoretical foundations with practical experience to build scalable and maintainable systems.
                </p>
                <Button asChild className="rounded-full">
                  <Link to="/about">More About Me</Link>
                </Button>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <span className="font-bold">01</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-lg">Backend Development</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Building robust APIs and services with Java Spring Boot and Django
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <span className="font-bold">02</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-lg">Database Optimization</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Implementing efficient PostgreSQL and Redis solutions for high-performance applications
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <span className="font-bold">03</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-lg">Software Architecture</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Designing scalable systems using microservices, SOLID principles, and design patterns
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
