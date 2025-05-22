
import { useEffect } from "react";

export const useScrollAnimation = () => {
  useEffect(() => {
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
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
};
