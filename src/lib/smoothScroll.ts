/**
 * Utility function for smooth scrolling to elements
 */

export const smoothScrollTo = (
  elementId: string,
  offset: number = 80,
  duration: number = 800
) => {
  // Prevent default behavior
  const element = document.getElementById(elementId);
  
  if (!element) {
    console.warn(`Element with id "${elementId}" not found.`);
    return;
  }

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};
