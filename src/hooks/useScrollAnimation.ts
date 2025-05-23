
import { useEffect } from "react";

type AnimationOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export const useScrollAnimation = (options: AnimationOptions = {}) => {
  useEffect(() => {
    const {
      threshold = 0.1,
      rootMargin = "0px",
      once = false,
    } = options;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            
            // Add a delay for staggered animations based on data attribute
            const delay = entry.target.getAttribute("data-delay");
            if (delay) {
              // Cast to HTMLElement to access style property
              (entry.target as HTMLElement).style.transitionDelay = `${delay}ms`;
            }
            
            // If animation should only happen once, unobserve after it's triggered
            if (once || entry.target.classList.contains("animate-once")) {
              observer.unobserve(entry.target);
            }
          } else {
            // Only remove the class if we want the animation to repeat
            if (!entry.target.classList.contains("animate-once")) {
              entry.target.classList.remove("animated");
              // Cast to HTMLElement to access style property
              (entry.target as HTMLElement).style.transitionDelay = "0ms";
            }
          }
        });
      },
      { threshold, rootMargin }
    );

    // Observe all elements with the animate-on-scroll class
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [options]);
};

// Helper hook for section transitions
export const useSectionAnimation = () => {
  useEffect(() => {
    // Apply initial styles to sections for smoother transitions
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach((section) => {
      if (!section.classList.contains('section-animated')) {
        section.classList.add('section-animated');
      }
    });
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          } else {
            // Optional: remove the class when section is not visible
            // entry.target.classList.remove('section-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );
    
    sections.forEach((section) => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
};
