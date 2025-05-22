
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  useScrollAnimation();

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="w-4/5 h-4/5 rounded-xl overflow-hidden glass p-1">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
                    alt="Developer"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </div>

          <div className="animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              About Me
            </h2>
            
            <p className="text-lg text-muted-foreground mb-4">
              I'm a passionate Full-Stack Developer with expertise in building modern web applications. 
              I specialize in creating clean, efficient, and user-friendly digital experiences.
            </p>
            
            <p className="text-lg text-muted-foreground mb-6">
              With a strong foundation in both front-end and back-end technologies, 
              I bring ideas to life through code. I'm committed to writing clean, 
              maintainable code and staying updated with the latest industry trends.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="tech-pill">React</span>
              <span className="tech-pill">Next.js</span>
              <span className="tech-pill">TypeScript</span>
              <span className="tech-pill">Tailwind CSS</span>
              <span className="tech-pill">Node.js</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
