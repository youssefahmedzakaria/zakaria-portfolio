import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

type RevealDirection = "up" | "down" | "left" | "right" | "none" | "scale" | "fade";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  threshold?: number;
  stagger?: number;
}

export const RevealOnScroll = ({
  children,
  width = "100%",
  direction = "up",
  delay = 0,
  duration = 0.6, 
  once = true,
  className = "",
  threshold = 0.1,
  stagger = 0
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });
  
  const getDirectionAnimation = () => {
    switch (direction) {
      case "up":
        return { y: 40, opacity: 0 };
      case "down":
        return { y: -40, opacity: 0 };
      case "left":
        return { x: 40, opacity: 0 };
      case "right":
        return { x: -40, opacity: 0 };
      case "scale":
        return { scale: 0.8, opacity: 0 };
      case "fade":
        return { opacity: 0 };
      case "none":
        return { opacity: 0 };
      default:
        return { y: 40, opacity: 0 };
    }
  };
  
  const mainControls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      mainControls.start({
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        transition: { 
          duration, 
          delay: delay + stagger,
          ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smoother animation
          type: "spring",
          stiffness: 100,
          damping: 15
        },
      });
    }
  }, [isInView, mainControls, duration, delay, stagger]);
  
  return (
    <motion.div
      ref={ref}
      initial={{ 
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
