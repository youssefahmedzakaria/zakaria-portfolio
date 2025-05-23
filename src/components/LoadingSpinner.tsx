import React from "react";
import { motion } from "framer-motion";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className="h-12 w-12 rounded-full border-4 border-primary/30 border-t-primary"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <p className="mt-4 text-muted-foreground animate-pulse">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;