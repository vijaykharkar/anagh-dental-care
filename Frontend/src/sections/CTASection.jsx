import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeInUp, buttonHover } from "../utils/animations";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function CTASection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-primary rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-fixed rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 space-y-8">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
              Ready to transform your smile?
            </h2>
            <p className="text-lg max-w-xl mx-auto opacity-80 leading-relaxed">
              Join thousands of patients who trust Anagh Dental Care for their
              clinical excellence and serene care.
            </p>
            <Link to="/appointment">
              <motion.button
                {...buttonHover}
                className="bg-white text-primary px-10 py-5 rounded-xl text-sm font-semibold tracking-wide shadow-lg hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Schedule Your Consultation
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
