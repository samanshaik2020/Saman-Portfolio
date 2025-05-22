
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "tools";
}

const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "frontend" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "frontend" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "frontend" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "frontend" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", category: "frontend" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "frontend" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "frontend" },
  
  // Backend
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "backend" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", category: "backend" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "backend" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "backend" },
  
  // Tools
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "tools" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "tools" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", category: "tools" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", category: "tools" },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | "frontend" | "backend" | "tools">("all");
  useScrollAnimation();
  
  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/50 dark:bg-secondary/10">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            My Tech Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These are the technologies I work with to build modern web applications.
          </p>
        </div>
        
        <div className="flex justify-center mb-8 animate-on-scroll">
          <div className="inline-flex bg-background/50 backdrop-blur-sm rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setActiveCategory("all")}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-all",
                activeCategory === "all" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
              )}
            >
              All
            </button>
            <button
              onClick={() => setActiveCategory("frontend")}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-all",
                activeCategory === "frontend" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
              )}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveCategory("backend")}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-all",
                activeCategory === "backend" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
              )}
            >
              Backend
            </button>
            <button
              onClick={() => setActiveCategory("tools")}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-all",
                activeCategory === "tools" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
              )}
            >
              Tools
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 animate-on-scroll">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="flex flex-col items-center p-4 bg-background rounded-lg border border-border hover:border-primary/30 transition-all hover:shadow-md"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-12 h-12 mb-3"
              />
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
