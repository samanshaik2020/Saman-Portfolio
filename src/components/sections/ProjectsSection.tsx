
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AnimatedText from "@/components/AnimatedText";

// Define project types
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Dr.Helio - HealthGpt Website",
    description: "A healthcare AI platform that provides medical information and assistance through a conversational interface.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    technologies: ["React", "Node.js", "OpenAI API", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Blogging Website",
    description: "A platform where users can create and manage their own blog websites with customizable themes and content management.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Markdown"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Text Behind Image",
    description: "An innovative tool that allows users to hide text messages within images using steganography techniques.",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    technologies: ["JavaScript", "HTML Canvas", "CSS", "Steganography"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description: "A small but feature-rich e-commerce platform with product listings, shopping cart functionality, and checkout process.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

const ProjectsSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  useScrollAnimation();
  
  return (
    <section id="projects" className="py-10 md:py-16 relative">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <AnimatedText text="Featured Projects" className="block" />
          </h2>
          <p className="text-lg text-muted-foreground">
            Here are some of my recent projects that showcase my skills and experience.
            Each project reflects my passion for creating efficient and user-friendly applications.
          </p>
        </div>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="animate-on-scroll" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card 
                className={cn(
                  "project-card overflow-hidden",
                  hoveredId === project.id ? "scale-[1.02]" : ""
                )}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{
                      transform: hoveredId === project.id ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-pill text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-3">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="default" size="sm" className="gap-1">
                      <ExternalLink className="h-4 w-4 mr-1" /> Demo
                    </Button>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Github className="h-4 w-4 mr-1" /> Code
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
