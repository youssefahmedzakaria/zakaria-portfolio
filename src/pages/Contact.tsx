
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Contact</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Have a question or want to work together? Get in touch with me.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
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
            
            <Card>
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
            
            <Card>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send me a message</h2>
              <ContactForm />
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6">Connect with me</h2>
              <p className="text-muted-foreground mb-6">
                You can also find me on these platforms. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <a 
                  href="https://github.com/youssefahmedzakaria" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <Github className="h-6 w-6 mr-3" />
                  <div>
                    <h3 className="font-medium">GitHub</h3>
                    <p className="text-sm text-muted-foreground">Check out my code and projects</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/youssef-ahmed-649210221/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <Linkedin className="h-6 w-6 mr-3" />
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <p className="text-sm text-muted-foreground">Connect professionally</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
