
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";

const AboutSection = () => {
  useScrollAnimation();

  return (
    <motion.section 
      id="about" 
      className="py-10 md:py-16 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.div 
          className="animate-on-scroll"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            <AnimatedText text="About Me" className="block" />
          </h2>
          
          <p className="text-lg text-muted-foreground mb-4 animate-on-scroll" data-delay="100">
            I'm a passionate Full-Stack Developer with expertise in building modern web applications. 
            I specialize in creating clean, efficient, and user-friendly digital experiences.
          </p>
          
          <p className="text-lg text-muted-foreground mb-6 animate-on-scroll" data-delay="200">
            With experience at Creative My Space as a Web Developer for 6 months, 
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
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-3 animate-on-scroll" data-delay="350">Recent Projects</h3>
            <ul className="list-disc pl-5 space-y-2 animate-on-scroll" data-delay="400">
              <li className="text-muted-foreground">Dr.Helio - A healthGpt website</li>
              <li className="text-muted-foreground">Blogging website, where you can create your blog website</li>
              <li className="text-muted-foreground">Text Behind image</li>
              <li className="text-muted-foreground">A small ecommerce platform</li>
            </ul>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-3 animate-on-scroll" data-delay="450">Work Experience</h3>
            <div className="animate-on-scroll" data-delay="500">
              <h4 className="font-medium">Creative My Space</h4>
              <p className="text-sm text-muted-foreground">Web Developer | 6 months</p>
            </div>
          </div>
          
          {/* Image container removed as requested */}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
