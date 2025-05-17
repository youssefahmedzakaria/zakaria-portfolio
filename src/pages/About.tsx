
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import GitHubRepos from "@/components/GitHubRepos";
import { Link } from "react-router-dom";

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
    technologies: ["Python", "Django", "PostgreSQL", "Docker"]
  },
  {
    company: "Banque Misr",
    position: "Backend Engineering Intern",
    period: "August 2024 - September 2024",
    description: "Created and deployed a banking system backend with comprehensive operations and APIs. Mastered Java Spring, REST APIs, Docker, and deployment techniques.",
    technologies: ["Java", "Spring Boot", "REST APIs", "Docker"]
  }
];

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="container px-4 mx-auto">
        {/* About Me Section */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="text-lg mb-4">
                  Hello! I'm Youssef Ahmed, a software engineer specializing in backend development, 
                  database optimization, and building scalable systems.
                </p>
                <p className="mb-4">
                  I'm currently working at Kaf Insurance, where I develop Python-based solutions using 
                  Django and PostgreSQL. I'm passionate about creating efficient, reliable software 
                  that solves real-world problems.
                </p>
                <p className="mb-6">
                  I hold a Bachelor's degree in Computers and Artificial Intelligence from Cairo University,
                  where I studied various aspects of computer science including data structures, algorithms,
                  database systems, and software engineering.
                </p>
                <div className="flex space-x-4 mb-8">
                  <Button asChild>
                    <Link to="/contact">Contact Me</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <a 
                      href="https://www.linkedin.com/in/youssef-ahmed-649210221/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </Button>
                </div>
                <h3 className="text-xl font-semibold mb-3">Education</h3>
                <div className="mb-6">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Cairo University</span>
                    <span className="text-muted-foreground">2021 - 2025</span>
                  </div>
                  <p>Bachelor of Computers and Artificial Intelligence</p>
                </div>
              </div>
              <div>
                <div className="bg-secondary p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">Skills</h3>
                  {skills.map((skillGroup, index) => (
                    <div key={index} className="mb-4">
                      <h4 className="text-sm font-medium mb-2 text-muted-foreground">
                        {skillGroup.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, i) => (
                          <Badge key={i} variant="outline">
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
        </section>
        
        {/* Experience Section */}
        <section className="py-16 bg-secondary/50 -mx-4 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="bg-background p-6 rounded-lg shadow-sm border"
                >
                  <div className="flex flex-wrap justify-between mb-2">
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                    <span className="text-muted-foreground">{exp.period}</span>
                  </div>
                  <div className="text-primary font-medium mb-3">{exp.position}</div>
                  <p className="mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* GitHub Repositories Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-2">GitHub Repositories</h2>
            <p className="text-muted-foreground mb-8">Check out some of my recent projects on GitHub.</p>
            <GitHubRepos />
            <div className="mt-6 text-center">
              <Button asChild variant="outline">
                <a 
                  href="https://github.com/youssefahmedzakaria" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View All Repositories
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
