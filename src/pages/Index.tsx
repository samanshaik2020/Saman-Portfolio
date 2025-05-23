
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import { useScrollAnimation, useSectionAnimation } from "@/hooks/useScrollAnimation";
import { BackgroundParticles } from "@/components/BackgroundParticles";
import { AppDock } from "@/components/AppDock";
import ProfileCard from "@/components/ProfileCard";

const Index = () => {
  // Apply scroll animations to elements with animate-on-scroll class
  useScrollAnimation({
    threshold: 0.1,
    rootMargin: "-50px",
    once: false
  });
  
  // Apply smooth section transitions
  useSectionAnimation();

  const profileStats = [
    { value: "+1", label: "Years Experience" },
    { value: "+7", label: "Projects Completed" },
    { value: "+3", label: "Happy Clients" },
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
              name="Saman"
              title="Full-Stack Developer"
              bio="A seasoned engineer and creative developer who turns complex problems into elegant, intuitive solutions."
              avatar="/Img.png"
              stats={profileStats}
              socialLinks={{
                github: "https://github.com/samanshaik2020",
                linkedin: "https://www.linkedin.com/in/saman-shaik-15a85222b/",
                email: "hello@example.com"
              }}
              className="w-full"
            />
          </div>
        </div>
        
        {/* Right Side - Scrollable Content (2/3) */}
        <main className="lg:w-2/3">
          <div id="home">
            <HeroSection />
          </div>
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
