import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

export default function AnimatedSection({
  as = "div",
  className = "",
  delay = 0,
  variants = fadeUp,
  children,
}) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={
        shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay }
      }
    >
      {children}
    </MotionTag>
  );
}
