import { motion } from "framer-motion";
import { pageTransition } from "../utils/animations";
import Hero from "../sections/Hero";
import ServicesOverview from "../sections/ServicesOverview";
import WhyChooseUs from "../sections/WhyChooseUs";
import Testimonials from "../sections/Testimonials";
import CTASection from "../sections/CTASection";

export default function Home() {
  return (
    <motion.div {...pageTransition}>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </motion.div>
  );
}
