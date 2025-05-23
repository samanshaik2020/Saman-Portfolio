
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { smoothScrollTo } from "@/lib/smoothScroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-6 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between max-w-6xl mx-auto">
        <Link to="/" className="font-display text-lg font-bold">
          <span className="text-primary">Saman</span>
          <span className="text-muted-foreground">.dev</span>
        </Link>
        
        <div className="flex items-center space-x-1">
          <nav className="hidden md:flex items-center space-x-1">
            <button 
              onClick={() => smoothScrollTo('home')} 
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors hover:bg-secondary/50 rounded-md">
              Home
            </button>
            <button 
              onClick={() => smoothScrollTo('about')} 
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors hover:bg-secondary/50 rounded-md">
              About
            </button>
            <button 
              onClick={() => smoothScrollTo('projects')} 
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors hover:bg-secondary/50 rounded-md">
              Projects
            </button>
            <button 
              onClick={() => smoothScrollTo('skills')} 
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors hover:bg-secondary/50 rounded-md">
              Skills
            </button>
            <button 
              onClick={() => smoothScrollTo('contact')} 
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors hover:bg-secondary/50 rounded-md">
              Contact
            </button>
          </nav>
          
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
