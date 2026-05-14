import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  const { ref, isInView } = useScrollAnimation();
  const testimonial = testimonials[0];

  return (
    <section className="py-16 lg:py-20 bg-surface-container-low">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          <span className="text-6xl text-primary-fixed-dim opacity-40 leading-none block">
            &#x201C;
          </span>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-primary italic leading-snug font-semibold tracking-tight">
            &ldquo;{testimonial.quote}&rdquo;
          </h2>

          <div className="flex items-center justify-center gap-4 pt-6">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
              loading="lazy"
            />
            <div className="text-left">
              <p className="text-sm font-semibold text-primary tracking-wide">
                {testimonial.name}
              </p>
              <p className="text-xs font-medium text-on-surface-variant">
                {testimonial.role}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
