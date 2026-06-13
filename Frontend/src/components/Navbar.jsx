import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, ctaLink } from "../data/navigation";
import { navServices } from "../data/services";
import { siteConfig } from "../data/siteConfig";
import logoImg from "../assets/logo.jpeg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}>

      {/* ── Top info bar ── */}
      <div className="bg-primary-container h-9 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-1.5 text-white/90 text-xs font-medium hover:text-white transition-colors"
            >
              <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hidden sm:flex items-center gap-1.5 text-white/90 text-xs font-medium hover:text-white transition-colors"
            >
              <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              {siteConfig.email}
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-white/70 text-xs">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
            </svg>
            Mon–Sat: 10AM–8PM &nbsp;|&nbsp; Sun: 10AM–2PM
          </div>
        </div>
      </div>

      {/* ── Main nav ── */}
      <nav className={`bg-white/95 backdrop-blur-sm border-b border-slate-100 transition-all duration-300 ${scrolled ? "shadow-sm" : ""}`}>
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[62px]">

          {/* Floating circular logo */}
          <Link
            to="/"
            aria-label={siteConfig.brandName}
            className="relative -top-[18px] z-20 shrink-0 mr-3"
          >
            <div className="w-[76px] h-[76px] rounded-full border-[3px] border-white shadow-xl overflow-hidden bg-white ring-2 ring-primary/15">
              <img
                src={logoImg}
                alt={siteConfig.brandName}
                className="w-full h-full object-contain"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
          </Link>

          {/* Brand name */}
          <div className="hidden sm:block leading-tight flex-shrink-0 mr-auto">
            <p className="text-sm font-bold text-primary-container font-heading tracking-tight">
              {siteConfig.brandName}
            </p>
            <p className="text-[10px] text-slate-400 font-medium">
              {siteConfig.brandNameMarathi}
            </p>
          </div>

        <div className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) =>
            link.label === "Services" ? (
              <div key={link.path} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`flex items-center gap-1 text-sm font-heading tracking-wide transition-all duration-300 cursor-pointer ${
                    location.pathname === link.path
                      ? "text-primary-container border-b-2 border-primary-container pb-1"
                      : "text-slate-500 font-medium hover:text-primary-container"
                  }`}
                >
                  {link.label}
                  <motion.svg
                    animate={{ rotate: servicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[520px] bg-white rounded-2xl shadow-xl shadow-primary/10 border border-slate-100 p-6 z-50"
                    >
                      <div className="grid grid-cols-2 gap-3">
                        {navServices.map((service) => (
                          <Link
                            key={service.id}
                            to={`/services/${service.slug}`}
                            className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-surface-container-low transition-colors group"
                          >
                            <span className="w-10 h-10 rounded-lg bg-secondary-container/50 flex items-center justify-center text-lg group-hover:bg-secondary-container transition-colors">
                              {service.icon}
                            </span>
                            <div>
                              <p className="text-sm font-semibold text-primary leading-tight">
                                {service.title}
                              </p>
                              <p className="text-xs text-on-surface-variant">
                                {service.category}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-100 text-center">
                        <Link
                          to="/services"
                          className="inline-flex items-center gap-2 text-secondary text-sm font-semibold tracking-wide hover:gap-3 transition-all"
                        >
                          View All Services
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-heading tracking-wide transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-primary-container border-b-2 border-primary-container pb-1"
                    : "text-slate-500 font-medium hover:text-primary-container"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:block">
          <Link to={ctaLink.path}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="bg-primary-container text-white px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-opacity hover:opacity-90 cursor-pointer"
            >
              {ctaLink.label}
            </motion.button>
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-surface-container transition-colors"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-primary-container transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-primary-container mt-1 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-primary-container mt-1 transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) =>
                link.label === "Services" ? (
                  <div key={link.path}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                        location.pathname === link.path
                          ? "bg-primary-container/10 text-primary-container"
                          : "text-slate-600 hover:bg-surface-container"
                      }`}
                    >
                      {link.label}
                      <motion.svg
                        animate={{ rotate: servicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 py-2 grid grid-cols-1 gap-1">
                            {navServices.map((service) => (
                              <Link
                                key={service.id}
                                to={`/services/${service.slug}`}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-surface-container-low transition-colors"
                              >
                                <span className="text-base">{service.icon}</span>
                                <span className="text-sm text-slate-600">{service.title}</span>
                              </Link>
                            ))}
                            <Link
                              to="/services"
                              className="flex items-center gap-2 px-3 py-2.5 text-secondary text-sm font-semibold"
                            >
                              View All Services →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? "bg-primary-container/10 text-primary-container"
                        : "text-slate-600 hover:bg-surface-container"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link to={ctaLink.path} className="block pt-2">
                <button className="w-full bg-primary-container text-white px-6 py-3 rounded-lg text-sm font-semibold">
                  {ctaLink.label}
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
