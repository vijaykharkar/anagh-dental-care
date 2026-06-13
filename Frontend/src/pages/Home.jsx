import { motion } from "framer-motion";
import { pageTransition } from "../utils/animations";
import SEO from "../components/SEO";
import Hero from "../sections/Hero";
import ServicesOverview from "../sections/ServicesOverview";
import WhyChooseUs from "../sections/WhyChooseUs";
import Testimonials from "../sections/Testimonials";
import CTASection from "../sections/CTASection";
import ClinicGallery from "../sections/ClinicGallery";
import ClinicLocation from "../sections/ClinicLocation";

export default function Home() {
  return (
    <motion.div {...pageTransition}>
      <SEO
        title="Best Dental Clinic in Kiwale, Pimpri-Chinchwad Pune"
        description="Anagh Dental Care – Top-rated dental clinic in Kiwale, Pimpri-Chinchwad. Expert dentist Dr. Sagar offers Dental Implants, Teeth Whitening, Root Canal, Braces, Smile Makeover & more. Call: +91 79727 19443."
        keywords="Anagh Dental Care, dental clinic Kiwale, best dentist Pimpri-Chinchwad, dental implants Pune, teeth whitening, root canal treatment Pune, braces Kiwale, smile makeover, dentist near me"
        canonical="/"
      />
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <ClinicGallery />
      <ClinicLocation />
      <CTASection />
    </motion.div>
  );
}
