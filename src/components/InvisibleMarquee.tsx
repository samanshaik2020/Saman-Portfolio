import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  text: string;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
  revealOnHover?: boolean;
  textClassName?: string;
}

const InvisibleMarquee = ({
  text,
  speed = 40,
  direction = 'left',
  className = '',
  revealOnHover = true,
  textClassName = ''
}: MarqueeProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Calculate the animation duration based on content width and speed
  const calculateDuration = () => {
    if (contentWidth === 0) return 0;
    // Speed is in pixels per second
    return contentWidth / speed;
  };

  useEffect(() => {
    if (containerRef.current && contentRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      setContentWidth(contentRef.current.offsetWidth);
    }
    
    const handleResize = () => {
      if (containerRef.current && contentRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setContentWidth(contentRef.current.offsetWidth);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [text]);

  // Animation properties
  const distance = contentWidth;
  const duration = calculateDuration();
  
  // Direction-based animation
  const marqueeVariants = {
    animate: {
      x: direction === 'left' ? -distance : distance,
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: duration,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div 
      ref={containerRef}
      className={`overflow-hidden relative ${className}`}
      onMouseEnter={() => revealOnHover && setIsVisible(true)}
      onMouseLeave={() => revealOnHover && setIsVisible(false)}
    >
      <motion.div
        ref={contentRef}
        className={`inline-block whitespace-nowrap ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ${textClassName}`}
        initial={{ x: direction === 'left' ? 0 : -distance }}
        animate="animate"
        variants={marqueeVariants}
      >
        <span className="inline-block">{text}</span>
        <span className="inline-block pl-10">{text}</span>
      </motion.div>
    </div>
  );
};

export default InvisibleMarquee;
