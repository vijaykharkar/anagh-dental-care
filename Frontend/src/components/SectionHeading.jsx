import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function SectionHeading({ badge, title, subtitle, center = true, light = false }) {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      {badge && (
        <span
          className={`inline-block text-xs font-semibold uppercase tracking-widest mb-4 ${
            light ? "text-secondary-fixed" : "text-secondary"
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`font-heading text-3xl sm:text-4xl font-semibold leading-tight tracking-tight ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl leading-relaxed ${
            center ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-on-surface-variant"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
