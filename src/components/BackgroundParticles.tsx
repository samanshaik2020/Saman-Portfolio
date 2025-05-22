
import { useEffect, useState } from "react";
import { Particles } from "@/components/ui/particles";

export function BackgroundParticles() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    // Check if document is defined (for SSR)
    if (typeof document !== "undefined") {
      const isDarkMode = document.documentElement.classList.contains("dark");
      setTheme(isDarkMode ? "dark" : "light");
    }

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.attributeName === "class" &&
          mutation.target === document.documentElement
        ) {
          const isDarkMode = document.documentElement.classList.contains("dark");
          setTheme(isDarkMode ? "dark" : "light");
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <Particles
      className="absolute inset-0 -z-10"
      quantity={100}
      ease={80}
      staticity={30}
      color={color}
    />
  );
}
