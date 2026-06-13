import { motion } from "framer-motion";
import SEO from "../components/SEO";
import clinicEntranceImg from "../assets/drsagarpicinterance.jpeg";
import clinicSeatImg from "../assets/clinicalseat.jpeg";
import {
  pageTransition,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  buttonHover,
} from "../utils/animations";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { teamMembers } from "../data/team";
import { technologyFeatures } from "../data/whyChooseUs";
import { Link } from "react-router-dom";

function LegacySection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="bg-surface-container-low py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center"
        >
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative rounded-xl overflow-hidden shadow-md"
          >
            <img
              src={clinicEntranceImg}
              alt="Anagh Dental Care Clinic Entrance"
              className="w-full h-[400px] lg:h-[500px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:pl-6"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-primary mb-6 tracking-tight">
              Our Legacy of Care
            </h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                Founded on the principle that clinical excellence should never
                come at the cost of patient comfort, Anagh Dental Care has
                evolved into a sanctuary for oral health. Our mission is to
                bridge the gap between rigorous medical expertise and the gentle
                touch of a luxury retreat.
              </p>
              <p>
                Under the vision of Dr. Anagh, we have spent over a decade
                curating an environment where technology serves humanity. Every
                corner of our clinic is designed to reduce anxiety and promote
                healing.
              </p>
              <p>
                We don&apos;t just treat teeth; we care for the person behind
                the smile, ensuring a legacy of trust that spans generations of
                families in our community.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-secondary-container flex items-center justify-center text-xl">
                ✅
              </div>
              <div>
                <p className="text-sm font-semibold text-primary tracking-wide">
                  Certified Excellence
                </p>
                <p className="text-xs font-medium text-on-surface-variant">
                  Accredited by Global Health Standards
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DoctorSection() {
  const { ref, isInView } = useScrollAnimation();
  const doctor = teamMembers[0];

  return (
    <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
      <div
        ref={ref}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
      >
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full aspect-[3/4] object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/60 to-transparent p-8">
              <span className="inline-block bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {doctor.badge}
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInRight}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          <div>
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-3 block">
              Meet Your Doctor
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-primary tracking-tight mb-2">
              {doctor.name}
            </h2>
            <p className="text-lg text-on-surface-variant font-medium">
              {doctor.role}
            </p>
          </div>

          <div className="space-y-4 text-on-surface-variant leading-relaxed">
            <p>
              With over 15 years of experience in advanced prosthodontics and
              implantology, Dr. Anagh has dedicated his career to transforming
              smiles and restoring confidence. His patient-first philosophy
              ensures every treatment is tailored to individual needs.
            </p>
            <p>
              Trained at premier dental institutions and certified in the latest
              digital dentistry techniques, Dr. Anagh combines traditional
              artistry with cutting-edge technology to deliver results that are
              both beautiful and enduring.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {doctor.specialties.map((specialty) => (
              <span
                key={specialty}
                className="bg-secondary/10 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full border border-secondary/20"
              >
                {specialty}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">15+</p>
              <p className="text-xs text-on-surface-variant">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">12k+</p>
              <p className="text-xs text-on-surface-variant">Happy Patients</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">98%</p>
              <p className="text-xs text-on-surface-variant">Satisfaction Rate</p>
            </div>
          </div>

          <Link to="/appointment">
            <motion.button
              {...buttonHover}
              className="mt-4 bg-primary-container text-white px-8 py-3.5 rounded-xl text-sm font-semibold tracking-wide hover:shadow-lg transition-all cursor-pointer"
            >
              Book a Consultation with Dr. Sagar
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function TechnologySection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-16 lg:py-20 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div
          ref={ref}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
        >
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-xl"
          >
            <span className="text-sm font-semibold text-secondary-fixed uppercase tracking-widest mb-4 block">
              Advanced Precision
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold mb-4 tracking-tight">
              State-of-the-Art Technology
            </h2>
            <p className="text-on-primary-container leading-relaxed">
              We invest in the latest dental innovations to provide faster, more
              accurate, and pain-free treatments for every patient.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {technologyFeatures.map((feature) => (
            <motion.div
              key={feature.id}
              variants={fadeInUp}
              className="flex gap-6 items-start p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="shrink-0 h-16 w-16 bg-white/10 rounded-xl flex items-center justify-center text-3xl">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-heading text-xl font-medium mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AboutCTA() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
      <motion.div
        ref={ref}
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="bg-surface-container-highest rounded-3xl p-8 sm:p-12 lg:p-24 relative overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-primary mb-6 tracking-tight">
            Experience Care Like Never Before
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
            Ready to start your journey with a team that truly cares? Book your
            initial consultation today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/appointment">
              <motion.button
                {...buttonHover}
                className="bg-primary text-white px-10 py-4 rounded-lg text-sm font-semibold tracking-wide hover:shadow-lg transition-all cursor-pointer"
              >
                Schedule a Visit
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button
                {...buttonHover}
                className="bg-white border border-outline text-primary px-10 py-4 rounded-lg text-sm font-semibold tracking-wide hover:bg-slate-50 transition-all cursor-pointer"
              >
                View Our Services
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default function About() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div {...pageTransition}>
      <SEO
        title="About Us – Dr. Sagar & Anagh Dental Care"
        description="Learn about Anagh Dental Care – a modern dental clinic in Kiwale, Pimpri-Chinchwad led by Dr. Sagar. Committed to pain-free, high-quality dental care for the whole family."
        keywords="about Anagh Dental Care, Dr Sagar dentist Pimpri-Chinchwad, dental clinic about us, Kiwale dentist, dental team Pune"
        canonical="/about"
      />
      <section className="pt-10 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4">
            Establishing Excellence
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-primary mb-6 tracking-tight leading-tight">
            Redefining the Dental Experience with Clinical Serenity
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            We combine state-of-the-art precision with a boutique wellness
            atmosphere to ensure your journey to a healthier smile is as
            restorative as it is effective.
          </p>
        </motion.div>
      </section>

      <LegacySection />
      <DoctorSection />
      <TechnologySection />
      <AboutCTA />
    </motion.div>
  );
}
