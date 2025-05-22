
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BackgroundParticles } from "@/components/BackgroundParticles";
import { AppDock } from "@/components/AppDock";
import ProfileCard from "@/components/ProfileCard";

const Index = () => {
  useScrollAnimation();
  
  // Smooth scrolling for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  const profileStats = [
    { value: "+12", label: "Years Experience" },
    { value: "+46", label: "Projects Completed" },
    { value: "+20", label: "Happy Clients" },
  ];
  
  return (
    <div className="min-h-screen relative">
      <BackgroundParticles />
      <Navbar />
      
      <div className="container max-w-7xl mx-auto px-4 pt-24 lg:flex lg:gap-8">
        {/* Left Side - Sticky Profile Card (1/3) */}
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <div className="lg:sticky lg:top-24">
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
              className="w-full"
            />
          </div>
        </div>
        
        {/* Right Side - Scrollable Content (2/3) */}
        <main className="lg:w-2/3">
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
      </div>
      
      <Footer />
      <AppDock />
    </div>
  );
};

export default Index;
