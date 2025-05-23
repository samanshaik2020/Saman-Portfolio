import { useState, useEffect, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorTrailRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Use spring physics for smoother cursor movement
  const cursorX = useSpring(0, { stiffness: 1000, damping: 50 });
  const cursorY = useSpring(0, { stiffness: 1000, damping: 50 });
  
  // Slightly delayed trail for the outer ring
  const trailX = useSpring(0, { stiffness: 500, damping: 80 });
  const trailY = useSpring(0, { stiffness: 500, damping: 80 });

  useEffect(() => {
    // Check if device is mobile/tablet
    const checkDevice = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);

    // Only apply custom cursor on non-mobile devices
    if (!isMobile) {
      // Hide the default cursor
      document.body.style.cursor = 'none';

      const handleMouseMove = (e: MouseEvent) => {
        // Update spring physics values
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        
        // Slightly delayed trail
        setTimeout(() => {
          trailX.set(e.clientX);
          trailY.set(e.clientY);
        }, 20);
      };

      const handleMouseOver = (e: MouseEvent) => {
        // Check if the element or its parent has a clickable attribute
        const target = e.target as HTMLElement;
        const isClickable = 
          target.tagName === 'BUTTON' || 
          target.tagName === 'A' || 
          target.closest('button') || 
          target.closest('a') ||
          target.classList.contains('clickable') ||
          target.closest('.clickable');
        
        setIsHovering(!!isClickable);
      };

      window.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseover', handleMouseOver);

      return () => {
        // Restore the default cursor when component unmounts
        document.body.style.cursor = 'auto';
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseover', handleMouseOver);
        window.removeEventListener('resize', checkDevice);
      };
    } else {
      // Ensure default cursor is visible on mobile
      document.body.style.cursor = 'auto';
      return () => window.removeEventListener('resize', checkDevice);
    }
  }, [isMobile]);

  // Subscribe to spring changes and update DOM
  useEffect(() => {
    const unsubscribeX = cursorX.onChange(x => {
      if (cursorRef.current) cursorRef.current.style.left = `${x}px`;
    });
    
    const unsubscribeY = cursorY.onChange(y => {
      if (cursorRef.current) cursorRef.current.style.top = `${y}px`;
    });
    
    const unsubscribeTrailX = trailX.onChange(x => {
      if (cursorTrailRef.current) cursorTrailRef.current.style.left = `${x}px`;
    });
    
    const unsubscribeTrailY = trailY.onChange(y => {
      if (cursorTrailRef.current) cursorTrailRef.current.style.top = `${y}px`;
    });

    return () => {
      unsubscribeX();
      unsubscribeY();
      unsubscribeTrailX();
      unsubscribeTrailY();
    };
  }, []);

  // Don't render on mobile devices
  if (isMobile) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        ref={cursorRef}
        className="custom-cursor"
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.5 : 0.7,
        }}
        transition={{ duration: 0.15 }}
      />
      
      {/* Cursor trail */}
      <motion.div
        ref={cursorTrailRef}
        className="cursor-trail"
        animate={{
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
};

export default CustomCursor;
