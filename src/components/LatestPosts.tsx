
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Code, Database } from "lucide-react";
import { Link } from "react-router-dom";

// Projects data matching your experience
const projects = [
  {
    id: "1",
    title: "Banking System with Java Spring Boot",
    description: "A secure money transfer platform with PostgreSQL database and Redis caching, deployed using Docker on Railway for scalable hosting.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker"],
    icon: <Terminal className="h-10 w-10 text-primary" />
  },
  {
    id: "2",
    title: "Virtual Screener Platform",
    description: "A web-based platform for streamlined candidate screening via video assessments, built during the Siemens Diploma program.",
    tech: ["React.js", "Next.js", "Java", "Spring Boot", "REST API"],
    icon: <Code className="h-10 w-10 text-primary" />
  },
  {
    id: "3",
    title: "E-Commerce Backend",
    description: "A scalable e-commerce backend using Java Spring Boot with order management, notifications, and API functionalities following SOLID principles.",
    tech: ["Java", "Spring Boot", "SOLID", "Design Patterns", "E-Commerce"],
    icon: <Database className="h-10 w-10 text-primary" />
  }
];

const LatestPosts = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card 
            key={project.id} 
            className={`border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-background/50 backdrop-blur-sm overflow-hidden group ${
              isHovered === project.id ? 'ring-1 ring-primary/50' : ''
            }`}
            onMouseEnter={() => setIsHovered(project.id)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <CardContent className="p-6">
              <div className="mb-5 bg-primary/10 p-4 rounded-full inline-block group-hover:scale-110 transition-transform duration-300">
                {project.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 3).map((tech, i) => (
                  <span 
                    key={i} 
                    className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button asChild variant="outline" className="rounded-full group">
          <Link to="/about" className="flex items-center">
            View All Projects 
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default LatestPosts;
