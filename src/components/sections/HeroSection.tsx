
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedText from "../AnimatedText";
import ProfileCard from "../ProfileCard";
import FeatureCard from "../FeatureCard";
import { ScrollArea } from "../ui/scroll-area";

const HeroSection = () => {
  const profileStats = [
    { value: "+12", label: "Years Experience" },
    { value: "+46", label: "Projects Completed" },
    { value: "+20", label: "Happy Clients" },
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative pt-20 overflow-hidden"
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-start gap-6">
            <div className="text-sm font-medium px-4 py-2 bg-primary/10 text-primary dark:bg-primary/20 rounded-full animate-on-scroll animate-fade">
              Full-Stack Developer
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              <AnimatedText text="Hi, I'm Shahina" className="block" />
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mt-2 mb-6 animate-on-scroll animate-slide-up" data-delay="100">
              I craft modern websites & web apps that help businesses grow.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-on-scroll animate-slide-up" data-delay="200">
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
          
          <div className="space-y-4">
            <ProfileCard 
              name="Shahina"
              title="Full-Stack Developer"
              bio="A seasoned engineer and creative developer who turns complex problems into elegant, intuitive solutions."
              avatar="/placeholder.svg"
              stats={profileStats}
              socialLinks={{
                github: "https://github.com/",
                linkedin: "https://linkedin.com/",
                email: "hello@example.com"
              }}
            />
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <FeatureCard 
                title="DYNAMIC ANIMATION"
                description="CUSTOM CSS/FRAMER"
                className="orange-gradient animate-on-scroll animate-fade"
                data-delay="300"
              />
              <FeatureCard 
                title="FRAMEWORKS"
                description="REACT.JS, NEXT.JS, NODE.JS"
                className="green-gradient animate-on-scroll animate-fade"
                data-delay="400"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute right-0 top-1/3 -z-10 w-1/2 aspect-square bg-gradient-to-br from-primary/10 to-secondary/5 rounded-full blur-3xl" />
      <div className="absolute left-0 bottom-1/4 -z-10 w-1/3 aspect-square bg-gradient-to-tr from-primary/10 to-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default HeroSection;
