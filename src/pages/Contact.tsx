
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";
import GitHubRepos from "@/components/GitHubRepos";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Get In Touch</h1>
            <p className="text-lg text-muted-foreground mb-8">
              I'm open to opportunities and collaborations in software engineering.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="overflow-hidden bg-background/80 backdrop-blur-sm border border-border/40 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-muted-foreground mb-4">For job inquiries and collaborations</p>
                <Button variant="link" asChild className="p-0">
                  <a href="mailto:youssefahmed052@gmail.com">youssefahmed052@gmail.com</a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden bg-background/80 backdrop-blur-sm border border-border/40 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-medium mb-1">Phone</h3>
                <p className="text-muted-foreground mb-4">Available during business hours</p>
                <Button variant="link" asChild className="p-0">
                  <a href="tel:+201120700202">+201120700202</a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden bg-background/80 backdrop-blur-sm border border-border/40 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-medium mb-1">Location</h3>
                <p className="text-muted-foreground mb-4">Based in</p>
                <span>Cairo, Egypt</span>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="sticky top-24">
                <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Professional Profiles</h2>
                <p className="text-muted-foreground mb-8">
                  Connect with me on these platforms to see my work and experience.
                </p>
                
                <div className="space-y-5">
                  <a 
                    href="https://github.com/youssefahmedzakaria" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-5 border rounded-lg bg-background/80 backdrop-blur-sm hover:bg-primary/5 hover:border-primary/30 transition-colors duration-300 group"
                  >
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 group-hover:scale-110 transition-transform">
                      <Github className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-lg mb-1 flex items-center">
                        GitHub 
                        <ExternalLink className="ml-2 h-4 w-4 opacity-70" />
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        @youssefahmedzakaria
                      </p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/youssef-ahmed-649210221/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-5 border rounded-lg bg-background/80 backdrop-blur-sm hover:bg-primary/5 hover:border-primary/30 transition-colors duration-300 group"
                  >
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 group-hover:scale-110 transition-transform">
                      <Linkedin className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-lg mb-1 flex items-center">
                        LinkedIn
                        <ExternalLink className="ml-2 h-4 w-4 opacity-70" />
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Software Engineer at Kaf Insurance
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Featured Projects</h2>
              <p className="text-muted-foreground mb-6">
                Here are some of my recent projects on GitHub. Visit my profile for more.
              </p>
              
              <GitHubRepos />
              
              <div className="mt-8 text-center">
                <Button asChild variant="default" className="rounded-full group">
                  <a 
                    href="https://github.com/youssefahmedzakaria" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    View All Repositories
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
