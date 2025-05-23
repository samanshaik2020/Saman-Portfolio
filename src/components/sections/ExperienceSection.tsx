
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Web Developer",
    company: "Creative My Space",
    period: "6 months",
    description: "Developed and maintained client websites, implemented responsive designs, and collaborated with the design team to create engaging user interfaces.",
    technologies: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS"],
  },
];

const ExperienceSection = () => {
  useScrollAnimation();
  
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey as a developer, showcasing my roles and contributions.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-border transform md:-translate-x-1/2" />
          
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className="relative mb-12 animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="md:w-1/2" />
                <div
                  className={`z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary absolute top-0 ${
                    index % 2 === 0 ? 'left-0 md:left-1/2 md:-ml-4' : 'left-0 md:left-1/2 md:-ml-4'
                  }`}
                >
                  <div className="w-3 h-3 bg-background rounded-full" />
                </div>
                <div className="md:w-1/2 pt-2 md:pt-0">
                  <div 
                    className={`p-6 bg-card rounded-lg border border-border shadow-sm ${
                      index % 2 === 0 
                        ? 'md:ml-8' 
                        : 'md:mr-8'
                    }`}
                  >
                    <Badge variant="outline" className="mb-2">
                      {exp.period}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                    <h4 className="text-muted-foreground mb-3">{exp.company}</h4>
                    <p className="mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map(tech => (
                        <span key={tech} className="tech-pill text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
