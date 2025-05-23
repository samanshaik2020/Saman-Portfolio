
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Sparkles, Github } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";
import { smoothScrollTo } from "@/lib/smoothScroll";
import InvisibleMarquee from "../InvisibleMarquee";

const HeroSection = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const techBadges = [
    { icon: <Code className="w-4 h-4" />, label: "React" },
    { icon: <Code className="w-4 h-4" />, label: "TypeScript" },
    { icon: <Code className="w-4 h-4" />, label: "Node.js" },
    { icon: <Code className="w-4 h-4" />, label: "Tailwind" },
    { icon: <Github className="w-4 h-4" />, label: "GitHub" },
  ];
  
  const projects = [
    "Dr.Helio - A healthGpt website",
    "Blogging website",
    "Text Behind Image",
    "E-commerce platform"
  ];

  return (
    <motion.section 
      className="min-h-[90vh] flex flex-col justify-center relative py-20 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 bg-primary/10 text-primary dark:bg-primary/20 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>Full-Stack Developer</span>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
          >
            <AnimatedText text="Hi, I'm Saman" className="block" />
          </motion.h1>
          
          {/* Subheading */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl"
          >
            I craft modern, responsive web applications with clean code and exceptional user experiences.
          </motion.p>
          
          {/* Tech badges */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {techBadges.map((badge, index) => (
              <span 
                key={index}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium transition-all hover:scale-105"
              >
                {badge.icon}
                {badge.label}
              </span>
            ))}
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mt-2"
          >
            <Button 
              size="lg"
              className="rounded-lg px-6 group" 
              onClick={() => smoothScrollTo('contact')}
            >
              Contact Me
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-lg px-6"
              onClick={() => smoothScrollTo('projects')}
            >
              View My Work
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background gradients */}
      <div className="absolute right-0 top-1/3 -z-10 w-1/2 aspect-square bg-gradient-to-br from-primary/10 to-secondary/5 rounded-full blur-3xl" />
      <div className="absolute left-0 bottom-1/4 -z-10 w-1/3 aspect-square bg-gradient-to-tr from-primary/10 to-secondary/5 rounded-full blur-3xl" />
      
      {/* Invisible Marquee elements */}
      <div className="absolute top-1/4 left-0 right-0 -z-5 opacity-5 hover:opacity-10 transition-opacity duration-700">
        <InvisibleMarquee 
          text="DEVELOPER • DESIGNER • CREATOR • INNOVATOR • PROBLEM SOLVER • FULL STACK • REACT • TYPESCRIPT • NODE.JS • "
          speed={30}
          direction="left"
          className="py-2 transform -rotate-2"
          textClassName="text-xl font-bold tracking-wider"
          revealOnHover={false}
        />
      </div>
      
      <div className="absolute top-2/3 left-0 right-0 -z-5 opacity-5 hover:opacity-10 transition-opacity duration-700">
        <InvisibleMarquee 
          text="WEB DEVELOPMENT • UI/UX • RESPONSIVE DESIGN • MODERN INTERFACES • CLEAN CODE • PERFORMANCE • "
          speed={25}
          direction="right"
          className="py-2 transform rotate-2"
          textClassName="text-xl font-bold tracking-wider"
          revealOnHover={false}
        />
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
        <motion.div 
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
