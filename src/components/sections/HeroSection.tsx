
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedText from "../AnimatedText";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative pt-20 overflow-hidden"
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-start gap-6 md:w-3/4">
          <div className="text-sm font-medium px-4 py-2 bg-primary/10 text-primary dark:bg-primary/20 rounded-full">
            Full-Stack Developer
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
            <AnimatedText text="Hi, I'm Shahina" className="block" />
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mt-2 mb-6">
            I craft modern websites & web apps that help businesses grow.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#contact">
              <Button className="rounded-lg px-6 group">
                Contact Me
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#projects">
              <Button variant="outline" className="rounded-lg px-6">
                View My Work
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute right-0 top-1/3 -z-10 w-1/2 aspect-square bg-gradient-to-br from-primary/10 to-secondary/5 rounded-full blur-3xl" />
      <div className="absolute left-0 bottom-1/4 -z-10 w-1/3 aspect-square bg-gradient-to-tr from-primary/10 to-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default HeroSection;
