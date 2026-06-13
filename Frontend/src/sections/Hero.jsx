import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeInUp, fadeIn, buttonHover } from "../utils/animations";
import { heroSlides } from "../data/services";
import { siteConfig } from "../data/siteConfig";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-[90vh] lg:h-[870px] flex items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={heroSlides[current].image}
            alt={heroSlides[current].alt}
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-primary/20 z-[1]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10 w-full">
        <div className="max-w-2xl space-y-6 text-white">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-white"
          >
            Experience Excellence in Modern Dentistry.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-lg text-primary-fixed opacity-90 max-w-lg leading-relaxed"
          >
            Transforming smiles with gentle care and advanced technology in a
            serene environment. Discover a higher standard of dental wellness.
          </motion.p>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-start sm:items-center gap-3 pt-4"
          >
            <Link to="/appointment">
              <motion.button
                {...buttonHover}
                className="bg-primary-container text-white px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide cursor-pointer"
              >
                Book Appointment
              </motion.button>
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I'd like to book an appointment at Anagh Dental Care.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                {...buttonHover}
                className="bg-[#25D366] text-white px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide flex items-center gap-2 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                WhatsApp Us
              </motion.button>
            </a>
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                {...buttonHover}
                className="border border-white/40 backdrop-blur-md text-white px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-white/10 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Get Directions
              </motion.button>
            </a>
          </motion.div>

          <div className="flex items-center gap-2 pt-6">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  index === current
                    ? "w-8 h-2.5 bg-white"
                    : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="hidden lg:flex absolute right-16 bottom-16 bg-white/95 backdrop-blur-sm rounded-xl p-4 pr-6 shadow-lg items-center gap-3"
        >
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-bold text-primary">4.9/5 Rating</p>
            <p className="text-xs text-on-surface-variant">Top-Rated Clinic 2024</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
