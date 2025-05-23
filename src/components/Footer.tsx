
import { Github, Linkedin, Mail, ExternalLink, Code, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { smoothScrollTo } from "@/lib/smoothScroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { title: "Home", href: "#home", onClick: () => smoothScrollTo('home') },
    { title: "About", href: "#about", onClick: () => smoothScrollTo('about') },
    { title: "Projects", href: "#projects", onClick: () => smoothScrollTo('projects') },
    { title: "Skills", href: "#skills", onClick: () => smoothScrollTo('skills') },
    { title: "Contact", href: "#contact", onClick: () => smoothScrollTo('contact') },
  ];
  
  const projects = [
    { title: "Dr.Helio", href: "#" },
    { title: "Blogging Website", href: "#" },
    { title: "Text Behind Image", href: "#" },
    { title: "E-commerce Platform", href: "#" },
  ];
  
  return (
    <footer className="pt-16 pb-8 border-t bg-secondary/20">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Top section with logo and links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <div className="font-display text-xl font-bold mb-4">
              <span className="text-primary">Saman</span>
              <span className="text-muted-foreground">.dev</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Full-stack developer specializing in creating modern, responsive web applications with clean code and exceptional user experiences.
            </p>
            <div className="flex space-x-3 mt-4">
              <a
                href="https://github.com/samanshaik2020"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                aria-label="Github"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/saman-shaik-15a85222b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@saman.dev"
                className="p-2 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={link.onClick}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                    {link.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Projects */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Projects</h3>
            <ul className="space-y-2">
              {projects.map((project, index) => (
                <li key={index}>
                  <a 
                    href={project.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                    {project.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact info */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-2 mt-0.5 text-primary" />
                <span className="text-sm text-muted-foreground">contact@saman.dev</span>
              </li>
              <li className="flex items-start">
                <ExternalLink className="w-4 h-4 mr-2 mt-0.5 text-primary" />
                <span className="text-sm text-muted-foreground">www.saman.dev</span>
              </li>
              <li className="mt-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full" 
                  onClick={() => smoothScrollTo('contact')}
                >
                  Get in touch
                </Button>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-border my-8"></div>
        
        {/* Bottom section with copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="mb-4 md:mb-0 flex items-center">
            <p className="text-muted-foreground">
              &copy; {currentYear} Saman. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center text-muted-foreground">
            <p className="flex items-center text-sm">
              Made with <Heart className="w-3 h-3 mx-1 text-red-500" /> and <Code className="w-3 h-3 mx-1" />
            </p>
            <div className="mx-2 w-1 h-1 rounded-full bg-muted-foreground"></div>
            <button 
              onClick={() => smoothScrollTo('home')} 
              className="flex items-center text-sm hover:text-foreground transition-colors"
            >
              Back to top <ArrowUp className="w-3 h-3 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
