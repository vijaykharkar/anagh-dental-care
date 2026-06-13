import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import {
  pageTransition,
  fadeInUp,
  fadeIn,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  buttonHover,
} from "../utils/animations";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { navServices } from "../data/services";
import { siteConfig } from "../data/siteConfig";

const WHATSAPP_NUMBER = siteConfig.whatsapp;

function buildWhatsAppUrl(service) {
  const msg = encodeURIComponent(
    `Hi, I'm interested in your *${service.title}* service at Anagh Dental Care. I'd like to book an appointment.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = navServices.find((s) => s.slug === slug);
  const { ref: benefitsRef, isInView: benefitsInView } = useScrollAnimation();
  const { ref: procRef, isInView: procInView } = useScrollAnimation();
  const { ref: ctaRef, isInView: ctaInView } = useScrollAnimation();

  if (!service) {
    return (
      <motion.div {...pageTransition}>
        <div className="pt-32 pb-20 text-center max-w-7xl mx-auto px-4">
          <h1 className="font-heading text-4xl font-semibold text-primary mb-4">
            Service Not Found
          </h1>
          <p className="text-on-surface-variant mb-8">
            The service you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center text-secondary font-semibold text-sm hover:-translate-x-1 transition-transform"
          >
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
        </div>
      </motion.div>
    );
  }

  const otherServices = navServices.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <motion.div {...pageTransition}>
      <SEO
        title={`${service.title} in Kiwale, Pimpri-Chinchwad`}
        description={`${service.title} at Anagh Dental Care, Kiwale – ${service.description} Book: +91 79727 19443.`}
        keywords={`${service.title} Kiwale, ${service.title} Pimpri-Chinchwad, ${service.title} Pune, ${service.category}, dental services near me, Anagh Dental Care`}
        canonical={`/services/${service.slug}`}
      />
      <section className="relative h-[45vh] min-h-[320px] overflow-hidden bg-primary">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="absolute inset-0"
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 flex flex-col justify-end pb-12">
          <Link
            to="/services"
            className="inline-flex items-center text-white/70 text-sm font-medium hover:text-white transition-colors mb-4 w-fit"
          >
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <span className="inline-block bg-secondary/80 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              {service.category}
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-white tracking-tight leading-tight">
              {service.title}
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 -mt-8 relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 border border-slate-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="text-on-surface-variant text-lg leading-relaxed">
                {service.details.overview}
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:border-l lg:pl-8 border-slate-100">
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">
                  Duration
                </p>
                <p className="text-sm text-primary font-semibold">{service.details.duration}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">
                  Recovery
                </p>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {service.details.recovery}
                </p>
              </div>
              <a href={buildWhatsAppUrl(service)} target="_blank" rel="noopener noreferrer">
                <motion.button
                  {...buttonHover}
                  className="w-full bg-[#25D366] text-white px-6 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Book via WhatsApp
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <section
        ref={benefitsRef}
        className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
          >
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-3 block">
              Why Choose This Treatment
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-primary tracking-tight mb-8">
              Key Benefits
            </h2>
            <div className="space-y-4">
              {service.details.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-on-surface-variant leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      <section
        ref={procRef}
        className="py-16 lg:py-20 bg-surface-container-low"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={procInView ? "visible" : "hidden"}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-3 block">
              Step by Step
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-primary tracking-tight">
              Treatment Procedure
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={procInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {service.details.procedure.map((step, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex gap-4 items-start"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                  {idx + 1}
                </span>
                <p className="text-on-surface-variant leading-relaxed pt-2">{step}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        ref={ctaRef}
        className="py-16 lg:py-20 bg-primary-container text-white text-center"
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto px-4 sm:px-6"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold mb-4 tracking-tight">
            Ready to get started?
          </h2>
          <p className="text-lg text-on-primary-container mb-8 leading-relaxed">
            Book your {service.title.toLowerCase()} consultation today. Our expert team is here to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/appointment">
              <motion.button
                {...buttonHover}
                className="bg-white text-primary px-8 py-3.5 rounded-xl text-sm font-semibold tracking-wide shadow-md cursor-pointer"
              >
                Book Appointment
              </motion.button>
            </Link>
            <a href={buildWhatsAppUrl(service)} target="_blank" rel="noopener noreferrer">
              <motion.button
                {...buttonHover}
                className="bg-[#25D366] text-white px-8 py-3.5 rounded-xl text-sm font-semibold tracking-wide flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </motion.button>
            </a>
          </div>
        </motion.div>
      </section>

      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <h2 className="font-heading text-2xl font-semibold text-primary tracking-tight mb-8">
          Other Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherServices.map((s) => (
            <Link
              key={s.id}
              to={`/services/${s.slug}`}
              className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-secondary/30 transition-all group"
            >
              <span className="w-10 h-10 rounded-lg bg-secondary-container/50 flex items-center justify-center text-lg group-hover:bg-secondary-container transition-colors">
                {s.icon}
              </span>
              <div>
                <p className="text-sm font-semibold text-primary leading-tight">{s.title}</p>
                <p className="text-xs text-on-surface-variant">{s.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
