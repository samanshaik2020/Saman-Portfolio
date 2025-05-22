
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AnimatedText from "@/components/AnimatedText";

const AboutSection = () => {
  useScrollAnimation();

  return (
    <section id="about" className="py-10 md:py-16 relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            <AnimatedText text="About Me" className="block" />
          </h2>
          
          <p className="text-lg text-muted-foreground mb-4 animate-on-scroll" data-delay="100">
            I'm a passionate Full-Stack Developer with expertise in building modern web applications. 
            I specialize in creating clean, efficient, and user-friendly digital experiences.
          </p>
          
          <p className="text-lg text-muted-foreground mb-6 animate-on-scroll" data-delay="200">
            With a strong foundation in both front-end and back-end technologies, 
            I bring ideas to life through code. I'm committed to writing clean, 
            maintainable code and staying updated with the latest industry trends.
          </p>
          
          <div className="flex flex-wrap gap-2 animate-on-scroll" data-delay="300">
            <span className="tech-pill">React</span>
            <span className="tech-pill">Next.js</span>
            <span className="tech-pill">TypeScript</span>
            <span className="tech-pill">Tailwind CSS</span>
            <span className="tech-pill">Node.js</span>
          </div>
          
          <div className="relative mt-10 animate-on-scroll" data-delay="400">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl overflow-hidden flex items-center justify-center">
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
      </div>
    </section>
  );
};

export default AboutSection;
