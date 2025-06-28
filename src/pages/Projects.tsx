import React, { useState, useEffect } from 'react';
import GitHubRepos from '@/components/GitHubRepos';
import { ArrowRight, Code, Star, Terminal, Database, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import LoadingSpinner from '@/components/LoadingSpinner';
import BackgroundDecoration from '@/components/BackgroundDecoration';

const projectCards = [
  {
    title: 'Money Transfer System',
    description: 'A secure banking application with comprehensive transaction handling, account management, JWT authentication, and real-time updates for fast and secure money transfers.',
    features: [
      'Built with Java Spring Boot and PostgreSQL',
      'Implemented Redis caching for improved performance',
      'JWT token authentication for secure user access',
      'Containerized with Docker and deployed on Railway',
    ],
    icon: <Terminal className="h-8 w-8 text-primary" />,
    github: 'https://github.com/youssefahmedzakaria/MoneyTransfer',
  },
  {
    title: 'E-commerce Backend',
    description: 'Full-featured e-commerce API with product catalog, user authentication, shopping cart management, order processing, and notification systems for a complete online store solution.',
    features: [
      'Java Spring Boot with clean architecture',
      'Followed SOLID principles for maintainable code',
      'Implemented design patterns for scalable solutions',
      'RESTful API design with comprehensive documentation',
    ],
    icon: <Database className="h-8 w-8 text-primary" />,
    github: 'https://github.com/youssefahmedzakaria/Online-store',
  },
  {
    title: 'Virtual Screener Platform',
    description: 'Web-based platform for streamlined candidate screening via video assessments, developed during the Siemens EDA Software Diploma.',
    features: [
      'Next.js and React.js for intuitive frontend interface',
      'Java Spring Boot backend with secure RESTful APIs',
      'Video assessment capabilities for hiring teams',
      'Efficient candidate evaluation workflow',
    ],
    icon: <Code className="h-8 w-8 text-primary" />,
    github: '', // Private repo
  },
];

const techStack = [
  'Java', 'Spring Boot', 'TypeScript', 'React',
  'Python', 'Django', 'PostgreSQL', 'MySQL',
  'Redis', 'Docker', 'Git', 'REST APIs',
];

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="top" className="min-h-screen pt-32 pb-16 relative overflow-hidden">
      <BackgroundDecoration />
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="overflow-visible">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-8 text-gradient-multi text-center leading-none pb-4 -mb-2 align-bottom"
            >
              My Projects
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto"
          >
            Here's a collection of my latest projects, showcasing my skills in software development across various technologies. I'm passionate about building robust, scalable applications with clean architecture and modern design principles.
          </motion.p>

          {/* GitHub Repositories */}
          <div className="overflow-visible">
            <h2 className="text-2xl font-bold mb-8 text-gradient leading-none pb-4 -mb-2 align-bottom">GitHub Repositories</h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <GitHubRepos />
            <div className="mt-8 text-center">
              <Button asChild variant="outline" className="group btn-glass">
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
          </motion.div>

          {/* Project Highlights */}
          <div className="overflow-visible">
            <h2 className="text-2xl font-bold mb-8 text-gradient leading-none pb-4 -mb-2 align-bottom">Project Highlights</h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <div className="auto-grid-lg">
              {projectCards.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="card-glass p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center text-primary flex-shrink-0 shadow-lg">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gradient-multi group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <ul className="space-y-1 mb-4">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Zap className="h-4 w-4 text-primary mr-2 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {project.github ? (
                    <Button asChild variant="outline" className="btn-glass border-primary/30 hover:border-primary/50 transition-all duration-300 mt-2">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Code className="mr-2 h-4 w-4" />
                        View on GitHub
                        <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </a>
                    </Button>
                  ) : (
                    <span className="text-sm text-muted-foreground italic">Private Repository - Siemens Diploma Project</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies Section */}
          <div className="overflow-visible">
            <h2 className="text-2xl font-bold mb-8 text-gradient leading-none pb-4 -mb-2 align-bottom">Technologies I Work With</h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <div className="auto-grid">
              {techStack.map((tech) => (
                <div 
                  key={tech} 
                  className="bg-background/80 border border-primary/10 rounded-lg p-4 text-center text-primary font-semibold shadow-sm hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
