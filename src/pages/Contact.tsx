import React from 'react';
import { Mail, MapPin, Linkedin, Github, ExternalLink, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import BackgroundDecoration from '@/components/BackgroundDecoration';

const Contact = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 relative overflow-hidden">
      <BackgroundDecoration />
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-8 text-gradient-multi text-center"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto"
          >
            I'm currently open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to connect, feel free to reach out!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6 card-glass p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
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
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">Cairo, Egypt</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
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
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
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
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Download className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Resume</h3>
                    <a 
                      href="https://drive.google.com/file/d/1bGlWwuoS2rXL7QQLnt1FEbLmHOpYVGwN/view?usp=sharing" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                    >
                      Download Resume
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6 card-glass p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift"
              >
                <ContactForm />
              </motion.div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Looking forward to connecting with you!
              </p>
              <Button asChild variant="outline" className="rounded-full btn-glass">
                <a href="mailto:youssefahmed052@gmail.com">
                  Send me an email
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
