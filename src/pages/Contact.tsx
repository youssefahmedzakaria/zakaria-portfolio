
import React from 'react';
import { Mail, MapPin, Linkedin, Github, ExternalLink, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Get In Touch
          </h1>
          
          <div className="mb-16">
            <p className="text-lg mb-8 leading-relaxed">
              I'm currently open to new opportunities and collaborations. Whether you have a question, 
              a project idea, or just want to connect, feel free to reach out!
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a 
                      href="mailto:youssefahmed052@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      youssefahmed052@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">Cairo, Egypt</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/youssef-ahmed-649210221/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                    >
                      Youssef Ahmed
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">GitHub</h3>
                    <a 
                      href="https://github.com/youssefahmedzakaria" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                    >
                      @youssefahmedzakaria
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Download className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Resume</h3>
                    <a 
                      href="https://www.overleaf.com/read/gfvymnxwjnbc#4a6fc1" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                    >
                      Download Resume
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
                
                {/* You can add more contact methods or information here */}
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Looking forward to connecting with you!
              </p>
              <Button asChild variant="outline" className="rounded-full">
                <a href="mailto:youssefahmed052@gmail.com">
                  Send me an email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
