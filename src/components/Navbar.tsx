
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
          <span className="text-primary">Shahina</span>
          <span className="text-muted-foreground">.dev</span>
        </Link>
        
        <div className="flex items-center space-x-1">
          <nav className="hidden md:flex items-center space-x-1">
            <a href="#home" className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#about" className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              About
            </a>
            <a href="#projects" className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#skills" className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Skills
            </a>
            <a href="#contact" className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
          
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
