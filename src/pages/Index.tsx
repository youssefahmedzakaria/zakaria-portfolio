
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import LatestPosts from "@/components/LatestPosts";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="animate-fade-up text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Software Engineering & <span className="text-primary">Backend Development</span>
            </h1>
            <p className="animate-fade-up animation-delay-100 text-xl text-muted-foreground mb-8">
              Welcome to my portfolio where I showcase my projects and technical expertise in Java Spring Boot, 
              database optimization, and software architecture.
            </p>
            <div className="animate-fade-up animation-delay-200 flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/blog">View Projects</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">About Me</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16 animate-bounce">
          <Button variant="ghost" size="icon" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </section>
      
      {/* Latest Posts Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">
              Explore my latest software engineering projects and technical accomplishments.
            </p>
          </div>
          <LatestPosts />
        </div>
      </section>
      
      {/* About Me Preview */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Hello, I'm Youssef</h2>
                <p className="text-muted-foreground mb-6">
                  I'm a software engineer specializing in backend development, database optimization,
                  and cloud solutions. Currently working at Kaf Insurance, where I develop Python-based 
                  solutions using Django and PostgreSQL.
                </p>
                <Button asChild variant="outline">
                  <Link to="/about">More About Me</Link>
                </Button>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-lg">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <span className="font-bold">01</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Backend Development</h3>
                      <p className="text-sm text-muted-foreground">Java Spring Boot, Django, APIs</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <span className="font-bold">02</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Database Optimization</h3>
                      <p className="text-sm text-muted-foreground">PostgreSQL, Redis, Query Performance</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <span className="font-bold">03</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Software Architecture</h3>
                      <p className="text-sm text-muted-foreground">Microservices, SOLID, Design Patterns</p>
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
