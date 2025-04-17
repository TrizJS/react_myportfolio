import { ReactNode, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  once?: boolean;
}

const ScrollAnimation = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 50,
  once = true,
}: ScrollAnimationProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px 0px" });

  // Set initial animation values based on direction
  const getInitialProps = () => {
    switch (direction) {
      case "up":
        return { y: distance, opacity: 0 };
      case "down":
        return { y: -distance, opacity: 0 };
      case "left":
        return { x: distance, opacity: 0 };
      case "right":
        return { x: -distance, opacity: 0 };
      default:
        return { y: distance, opacity: 0 };
    }
  };

  // Reset animation values
  const getFinalProps = () => {
    switch (direction) {
      case "up":
      case "down":
        return { y: 0, opacity: 1 };
      case "left":
      case "right":
        return { x: 0, opacity: 1 };
      default:
        return { y: 0, opacity: 1 };
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start(getFinalProps());
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial={getInitialProps()}
      animate={controls}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
