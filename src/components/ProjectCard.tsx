
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  demoUrl?: string;
  repoUrl?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  demoUrl,
  repoUrl,
  className,
}: ProjectCardProps) => {
  return (
    <Card className={cn(
      "overflow-hidden border rounded-lg animate-on-scroll animate-slide-up", 
      className
    )}>
      {image && (
        <div className="aspect-video overflow-hidden bg-muted">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
      )}
      
      <CardContent className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex gap-3 mt-auto">
          {demoUrl && (
            <HoverCard>
              <HoverCardTrigger asChild>
                <a 
                  href={demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium inline-flex items-center hover:underline"
                >
                  Live Demo <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </HoverCardTrigger>
              <HoverCardContent className="w-auto">
                <p className="text-sm">View live project</p>
              </HoverCardContent>
            </HoverCard>
          )}
          
          {repoUrl && (
            <HoverCard>
              <HoverCardTrigger asChild>
                <a 
                  href={repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium inline-flex items-center hover:underline"
                >
                  GitHub <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </HoverCardTrigger>
              <HoverCardContent className="w-auto">
                <p className="text-sm">View source code</p>
              </HoverCardContent>
            </HoverCard>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
