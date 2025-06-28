import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show progress bar after scrolling 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-blue-500 z-50 origin-left shadow-lg"
      style={{ scaleX: scrollYProgress }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-blue-500/20 blur-sm"></div>
    </motion.div>
  );
};

export default ScrollProgressBar;
