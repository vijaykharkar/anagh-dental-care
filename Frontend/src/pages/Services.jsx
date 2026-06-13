import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import {
  pageTransition,
  fadeInUp,
  staggerContainer,
  buttonHover,
} from "../utils/animations";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { navServices } from "../data/services";
import { siteConfig } from "../data/siteConfig";
import ServiceCard from "../components/ServiceCard";

function ServicesHero() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="pt-28 pb-16 bg-surface-container-low">
      <motion.div
        ref={ref}
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center"
      >
        <span className="inline-block py-1 px-3 bg-secondary-container text-on-secondary-container rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
          Clinical Excellence
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-primary mb-4 tracking-tight leading-tight">
          Our Specialized Dental Services
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Experience the harmony of advanced technology and compassionate care.
          From routine checkups to complex restorations, we ensure your smile
          reflects your inner vitality.
        </p>
      </motion.div>
    </section>
  );
}

function EmergencyBanner() {
  return (
    <div className="bg-tertiary-container text-on-tertiary-container py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center gap-3 text-center">
        <span className="text-lg">⚡</span>
        <p className="text-sm font-semibold tracking-wider">
          EMERGENCY CARE: 24/7 support for urgent dental needs. Call{" "}
          {siteConfig.phone}
        </p>
      </div>
    </div>
  );
}

function ServicesGrid() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {navServices.map((service) => (
          <ServiceCard key={service.id} service={service} variant="image" />
        ))}
      </motion.div>
    </section>
  );
}

function ServicesCTA() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-16 lg:py-20 bg-primary-container text-white text-center">
      <motion.div
        ref={ref}
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-3xl mx-auto px-4 sm:px-6"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-semibold mb-4 tracking-tight">
          Don&apos;t wait for your dream smile
        </h2>
        <p className="text-lg text-on-primary-container mb-8 leading-relaxed">
          Our expert team is ready to guide you through a personalized treatment
          plan designed for your unique needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/appointment">
            <motion.button
              {...buttonHover}
              className="bg-white text-primary px-8 py-3 rounded-lg text-sm font-semibold tracking-wide shadow-md cursor-pointer"
            >
              Schedule Consultation
            </motion.button>
          </Link>
          <Link to="/contact">
            <motion.button
              {...buttonHover}
              className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg text-sm font-semibold tracking-wide transition-colors cursor-pointer"
            >
              Contact Us
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default function Services() {
  return (
    <motion.div {...pageTransition}>
      <SEO
        title="Dental Services – Implants, Whitening, Root Canal & More"
        description="Explore all dental services at Anagh Dental Care, Kiwale. Dental Implants, Teeth Whitening, Root Canal, Braces, Veneers, Smile Makeover, Composite Bonding, Pediatric Dentistry & more. Book: +91 79727 19443."
        keywords="dental services Kiwale, dental implants Pimpri-Chinchwad, teeth whitening Pune, root canal Kiwale, braces Pune, smile makeover, veneers, composite bonding, pediatric dentistry, dental services near me"
        canonical="/services"
      />
      <ServicesHero />
      <EmergencyBanner />
      <ServicesGrid />
      <ServicesCTA />
    </motion.div>
  );
}
