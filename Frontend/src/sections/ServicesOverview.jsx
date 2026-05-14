import { motion } from "framer-motion";
import { staggerContainer } from "../utils/animations";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { featuredServices } from "../data/services";
import ServiceCard from "../components/ServiceCard";

export default function ServicesOverview() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-16 lg:py-20 bg-surface -mt-16 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
