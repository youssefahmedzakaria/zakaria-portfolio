import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

// Page transition variants that adapt to reduced motion settings
const PageWrapper = ({ children }: { children: ReactNode }) => {
  const shouldReduceMotion = useReducedMotion();
  const pageVariants = {
    initial: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 20,
      scale: shouldReduceMotion ? 1 : 0.98
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: "easeOut"
      },
    },
    exit: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -20,
      scale: shouldReduceMotion ? 1 : 0.98,
      transition: { 
        duration: shouldReduceMotion ? 0 : 0.4,
        ease: "easeIn"
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen motion-safe:transition-all"
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
