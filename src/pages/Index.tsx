import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowDown, Github, Code, Database, Terminal, ArrowRight, Sparkles, Zap, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import LatestPosts from "@/components/LatestPosts";
import BackgroundDecoration from "@/components/BackgroundDecoration";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundDecoration />
      {/* Hero Section with Enhanced Glassmorphism */}
      <section className="pt-28 pb-16">
        {/* Removed duplicate background effects */}
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-up">
              {/* Enhanced status badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary text-sm font-medium mb-8 border border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 group">
                <span className="relative flex h-2 w-2 mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
                Available for new opportunities
              </div>
              
              {/* Enhanced hero title */}
              <div className="overflow-visible">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none mb-8 text-gradient-hero pb-4 -mb-2 align-bottom relative z-10 animate-fade-up">
                  Software Engineering <span className="text-gradient-multi whitespace-nowrap leading-none pb-4 -mb-2">& Backend Development</span>
                </h1>
              </div>
              <br />
              {/* Enhanced description */}
              <div className="space-y-4 mb-8 max-w-3xl">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Specialized in <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded-md">Java Spring Boot</span>,
                  <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded-md"> database optimization</span>, and
                  <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded-md"> software architecture</span> for scalable systems.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Software Engineer at <span className="text-primary font-semibold">Kaf Insurance</span> with expertise in Django, PostgreSQL, and Docker.
                  B.Sc. in Computers and Artificial Intelligence from Cairo University.
                </p>
              </div>
              
              {/* Enhanced CTA buttons */}
              <div className="flex flex-wrap gap-4 mb-12">
                <Button asChild size="lg" className="btn-gradient rounded-full group w-[160px] sm:w-auto justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                  <Link to="/about#top" className="flex items-center">
                    About Me
                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="btn-glass rounded-full group w-[160px] sm:w-auto justify-center border-primary/30 hover:border-primary/50 transition-all duration-300 hover-lift">
                  <Link to="/contact" className="flex items-center">
                    Get In Touch
                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </Link>
                </Button>
              </div>
              
              {/* Enhanced scroll indicator */}
              <div className="flex justify-center animate-bounce-gentle">
                <div className="flex flex-col items-center text-muted-foreground">
                  <span className="text-sm mb-2">Scroll to explore</span>
                  <ArrowDown className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects with Enhanced Styling */}
      <section className="py-20 relative section-gradient">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background -z-10"></div>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full border border-primary/20 mb-6">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <div className="overflow-visible">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient-multi leading-none pb-4 -mb-2 align-bottom">
                Featured Projects
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Explore my key software engineering projects and technical accomplishments that demonstrate my expertise in building scalable solutions.
              </p>
            </div>
          </div>

          <LatestPosts />
        </div>
      </section>

      {/* About Me Preview with Enhanced Design */}
      <section className="py-20 relative overflow-hidden section-glass">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/10 via-purple-500/5 to-blue-500/10 rounded-full filter blur-[100px] -z-10 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/5 via-purple-500/10 to-blue-500/5 rounded-full filter blur-[80px] -z-10 animate-float-slow"></div>
        
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-right">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary text-sm font-medium mb-6 border border-primary/20">
                  <Shield className="h-4 w-4 mr-2" />
                  About Me
                </div>
                <div className="overflow-visible">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-multi leading-none pb-4 -mb-2 align-bottom">
                    Hello, I'm Youssef
                  </h2>
                </div>
                <div className="space-y-4 mb-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I'm a software engineer specializing in backend development with a focus on Java Spring Boot
                    and database optimization. Currently working at Kaf Insurance, I develop Python-based
                    solutions with Django and PostgreSQL to solve real business problems.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I've reduced customer balance retrieval time by <span className="text-primary font-semibold">70%</span> through strategic caching and
                    optimized database queries. Previously, I was a Backend Engineering Intern at Banque Misr
                    where I created a banking system backend with Java Spring Boot.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    With a Bachelor's degree in Computers and Artificial Intelligence from Cairo University,
                    I combine strong theoretical foundations with practical experience to build scalable and maintainable systems.
                  </p>
                </div>
                <Button asChild className="btn-gradient rounded-full group shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                  <Link to="/about#top" className="flex items-center">
                    More About Me
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>

              {/* Enhanced skills card */}
              <div className="animate-fade-left">
                <div className="card-glass p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift">
                  <div className="space-y-8">
                    <div className="flex items-start gap-6">
                      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center text-primary flex-shrink-0 mt-1 shadow-lg">
                        <Terminal className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-2">Backend Development</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Building robust APIs and services with Java Spring Boot and Django, implementing RESTful architectures and microservices.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center text-primary flex-shrink-0 mt-1 shadow-lg">
                        <Database className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-2">Database Optimization</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Implementing efficient PostgreSQL and Redis solutions for high-performance applications with optimized queries and caching strategies.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center text-primary flex-shrink-0 mt-1 shadow-lg">
                        <Code className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-2">Software Architecture</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Designing scalable systems using microservices, SOLID principles, and design patterns for maintainable and extensible codebases.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlights with Enhanced Cards */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full border border-primary/20 mb-6">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="overflow-visible">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-multi leading-none pb-4 -mb-2 align-bottom">Experience Highlights</h2>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Key milestones in my software engineering journey
              </p>
            </div>

            <div className="space-y-8">
              <div className="card-glass p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover-lift animate-fade-up">
                <div className="flex items-start gap-6">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-green-500/20 flex items-center justify-center text-primary flex-shrink-0 mt-1 shadow-lg">
                    <Code className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-3 mb-3">
                      <h3 className="font-semibold text-xl">Kaf Insurance</h3>
                      <div className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">Software Engineer</div>
                      <div className="text-sm text-muted-foreground ml-auto">March 2025 - Present</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Developed Python-based solutions using Django to streamline data operations, integrating with PostgreSQL for efficient handling and retrieval. Enhanced database performance using PostgreSQL, achieving a <span className="text-primary font-semibold">70% reduction</span> in customer balance retrieval time through strategic caching and query optimization.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-glass p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover-lift animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start gap-6">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center text-primary flex-shrink-0 mt-1 shadow-lg">
                    <Terminal className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-3 mb-3">
                      <h3 className="font-semibold text-xl">Banque Misr</h3>
                      <div className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">Backend Engineering Intern</div>
                      <div className="text-sm text-muted-foreground ml-auto">August 2024 - September 2024</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Created and deployed a comprehensive banking system backend with full CRUD operations and RESTful APIs. Mastered Java Spring Boot, REST APIs, Docker containerization, and deployment techniques for production environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild variant="outline" className="btn-glass rounded-full group border-primary/30 hover:border-primary/50 transition-all duration-300 hover-lift">
                <Link to="/about#experience" className="flex items-center">
                  View Full Experience
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced GitHub CTA Section */}
      <section className="py-20 relative bg-gradient-to-br from-primary/5 via-secondary/30 to-primary/5">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center justify-center p-4 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full border border-primary/20 shadow-lg">
              <Github className="h-10 w-10 text-primary" />
            </div>
            <div className="overflow-visible">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-multi leading-none pb-4 -mb-2 align-bottom">Explore My Work</h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Check out my GitHub for more projects, contributions, and code samples that demonstrate my technical expertise and problem-solving approach.
              </p>
            </div>
            <Button asChild variant="default" size="lg" className="btn-gradient rounded-full group shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
              <a
                href="https://github.com/youssefahmedzakaria"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="mr-2 h-5 w-5" />
                View GitHub Profile
                <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
