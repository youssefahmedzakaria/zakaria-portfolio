import React from 'react';
import GitHubRepos from '@/components/GitHubRepos';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  return (
    <div id="top" className="min-h-screen pt-32 pb-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            My Projects
          </h1>
          
          <div className="mb-12">
            <p className="text-lg leading-relaxed mb-8">
              Here's a collection of my latest projects. These showcase my skills in 
              software development across various technologies including Java, TypeScript, 
              Python, and more. I'm passionate about building robust, scalable applications 
              with clean architecture and good design principles.
            </p>
          </div>
          
          {/* Featured Projects */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">GitHub Repositories</h2>
            <GitHubRepos />
            
            <div className="mt-8 text-center">
              <Button asChild variant="outline" className="group">
                <a 
                  href="https://github.com/youssefahmedzakaria" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Visit GitHub Profile
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Project Showcase */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Project Highlights</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border rounded-lg p-6 hover:border-primary/50 transition-colors">                <h3 className="text-xl font-bold mb-2">Money Transfer System</h3>
                <p className="text-muted-foreground mb-4">
                  A secure banking application with comprehensive transaction handling, account management, JWT authentication, and real-time updates for fast and secure money transfers.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mb-4 space-y-1">
                  <li>Built with Java Spring Boot and PostgreSQL</li>
                  <li>Implemented Redis caching for improved performance</li>
                  <li>JWT token authentication for secure user access</li>
                  <li>Containerized with Docker and deployed on Railway</li>
                </ul>
                <Button asChild variant="link" className="px-0">
                  <a 
                    href="https://github.com/youssefahmedzakaria/MoneyTransfer" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    View Project <ArrowRight className="ml-1 h-3 w-3" />
                  </a>
                </Button>
              </div>
              
              <div className="border rounded-lg p-6 hover:border-primary/50 transition-colors">                <h3 className="text-xl font-bold mb-2">E-commerce Backend</h3>
                <p className="text-muted-foreground mb-4">
                  Full-featured e-commerce API with product catalog, user authentication, shopping cart management, order processing, and notification systems for a complete online store solution.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mb-4 space-y-1">
                  <li>Java Spring Boot with clean architecture</li>
                  <li>Followed SOLID principles for maintainable code</li>
                  <li>Implemented design patterns for scalable solutions</li>
                  <li>RESTful API design with comprehensive documentation</li>
                </ul>
                <Button asChild variant="link" className="px-0">
                  <a 
                    href="https://github.com/youssefahmedzakaria/Online-store" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    View Project <ArrowRight className="ml-1 h-3 w-3" />
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Adding Virtual Screener Project as a third project */}
            <div className="mt-8 border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold mb-2">Virtual Screener Platform</h3>
              <p className="text-muted-foreground mb-4">
                Web-based platform for streamlined candidate screening via video assessments, developed during the Siemens EDA Software Diploma.
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground mb-4 space-y-1">
                <li>Next.js and React.js for intuitive frontend interface</li>
                <li>Java Spring Boot backend with secure RESTful APIs</li>
                <li>Video assessment capabilities for hiring teams</li>
                <li>Efficient candidate evaluation workflow</li>
              </ul>
              <span className="text-sm text-muted-foreground italic">Private Repository - Siemens Diploma Project</span>
            </div>
          </div>
          
          {/* Skills Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Technologies I Work With</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Java", "Spring Boot", "TypeScript", "React",
                "Python", "Django", "PostgreSQL", "MySQL",
                "Redis", "Docker", "Git", "REST APIs"
              ].map((tech) => (
                <div 
                  key={tech} 
                  className="bg-background border rounded-lg p-3 text-center hover:border-primary/50 transition-colors"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
