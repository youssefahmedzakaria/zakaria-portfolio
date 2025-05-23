import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  threshold?: number;
}

export const RevealOnScroll = ({
  children,
  width = "100%",
  direction = "up",
  delay = 0,
  duration = 0.5, 
  once = true,
  className = "",
  threshold = 0.1
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });
  
  const getDirectionAnimation = () => {
    switch (direction) {
      case "up":
        return { y: 30 };
      case "down":
        return { y: -30 };
      case "left":
        return { x: 30 };
      case "right":
        return { x: -30 };
      case "none":
        return { opacity: 0 };
      default:
        return { y: 30 };
    }
  };
  
  const mainControls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      mainControls.start({
        opacity: 1,
        y: 0,
        x: 0,
        transition: { 
          duration, 
          delay,
          ease: "easeOut" 
        },
      });
    }
  }, [isInView, mainControls, duration, delay]);
  
  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        ...getDirectionAnimation()
      }}
      animate={mainControls}
      style={{ width }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
