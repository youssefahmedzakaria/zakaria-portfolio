import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowDown, Github, Code, Database, Terminal, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import LatestPosts from "@/components/LatestPosts";

const Index = () => {
  return (    <div className="min-h-screen">
      {/* Hero Section with Glassmorphism */}
      <section className="pt-28 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 rounded-full filter blur-[120px] -z-10 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full filter blur-[80px] -z-10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="animate-fade-up">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for new opportunities
              </div>              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-gradient">
                Software Engineering <br />& Backend Development
              </h1>
              <p className="text-xl text-muted-foreground mb-4 max-w-2xl">
                Specialized in <span className="text-primary font-medium">Java Spring Boot</span>,
                <span className="text-primary font-medium"> database optimization</span>, and
                <span className="text-primary font-medium"> software architecture</span> for scalable systems.
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Software Engineer at <span className="text-primary font-medium">Kaf Insurance</span> with expertise in Django, PostgreSQL, and Docker.
                B.Sc. in Computers and Artificial Intelligence from Cairo University.
              </p>              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full group w-[140px] sm:w-auto justify-center">
                  <Link to="/about#top" className="flex items-center">
                    About Me
                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full group w-[140px] sm:w-auto justify-center">
                  <Link to="/contact" className="flex items-center">
                    Get In Touch
                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Featured Projects */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/50 to-background -z-10"></div>
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gradient">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore my key software engineering projects and technical accomplishments that demonstrate my skills.
            </p>
          </div>

          <LatestPosts />
        </div>
      </section>      {/* About Me Preview */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full filter blur-[100px] -z-10"></div>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gradient">
                  Hello, I'm Youssef
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  I'm a software engineer specializing in backend development with a focus on Java Spring Boot
                  and database optimization. Currently working at Kaf Insurance, I develop Python-based
                  solutions with Django and PostgreSQL to solve real business problems.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  I've reduced customer balance retrieval time by 70% through strategic caching and
                  optimized database queries. Previously, I was a Backend Engineering Intern at Banque Misr
                  where I created a banking system backend with Java Spring Boot.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  With a Bachelor's degree in Computers and Artificial Intelligence from Cairo University,
                  I combine strong theoretical foundations with practical experience to build scalable and maintainable systems.
                </p>                <Button asChild className="rounded-full group">
                  <Link to="/about#top" className="flex items-center">
                    More About Me
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>

              <div className="bg-gradient-to-br from-background to-secondary/40 p-8 rounded-2xl shadow-lg border border-border/50 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <Terminal className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Backend Development</h3>
                      <p className="text-muted-foreground mt-1">
                        Building robust APIs and services with Java Spring Boot and Django
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <Database className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Database Optimization</h3>
                      <p className="text-muted-foreground mt-1">
                        Implementing efficient PostgreSQL and Redis solutions for high-performance applications
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <Code className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Software Architecture</h3>
                      <p className="text-muted-foreground mt-1">
                        Designing scalable systems using microservices, SOLID principles, and design patterns
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Experience Highlights */}
      <section className="py-16 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gradient text-center">Experience Highlights</h2>

            <div className="space-y-8">
              <div className="bg-background/80 p-6 rounded-xl border border-border/50 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                    <Code className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2 mb-2">
                      <h3 className="font-medium text-lg">Kaf Insurance</h3>
                      <div className="text-sm text-muted-foreground">Software Engineer</div>
                      <div className="text-xs text-muted-foreground ml-auto">March 2025 - Present</div>
                    </div>
                    <p className="text-muted-foreground">
                      Developed Python-based solutions using Django to streamline data operations, integrating with PostgreSQL for efficient handling and retrieval. Enhanced database performance using PostgreSQL, achieving a 70% reduction in customer balance retrieval time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background/80 p-6 rounded-xl border border-border/50 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                    <Terminal className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2 mb-2">
                      <h3 className="font-medium text-lg">Banque Misr</h3>
                      <div className="text-sm text-muted-foreground">Backend Engineering Intern</div>
                      <div className="text-xs text-muted-foreground ml-auto">August 2024 - September 2024</div>
                    </div>
                    <p className="text-muted-foreground">
                      Created and deployed a banking system backend with comprehensive operations and APIs. Mastered Java Spring, REST APIs, Docker, and deployment techniques.
                    </p>
                  </div>
                </div>
              </div>
            </div>            <div className="text-center mt-10">              <Button asChild variant="outline" className="rounded-full group">
                <Link to="/about#experience" className="flex items-center">
                  View Full Experience
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub CTA Section */}
      <section className="py-16 relative bg-gradient-to-br from-primary/5 via-secondary/30 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 inline-flex items-center justify-center p-3 bg-white/20 backdrop-blur-sm rounded-full border border-primary/20">
              <Github className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Explore My Work</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Check out my GitHub for more projects, contributions, and code samples that demonstrate my technical expertise.
            </p>            <Button asChild variant="default" size="lg" className="rounded-full group">
              <a
                href="https://github.com/youssefahmedzakaria"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Visit GitHub Profile
              </a>
            </Button>
            <div className="mt-4">
              <Button asChild variant="outline" size="lg" className="rounded-full group">
                <Link to="/about#projects" className="flex items-center">
                  View Project Details
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
