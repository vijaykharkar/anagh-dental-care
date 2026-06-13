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

          {/* Left: contact links */}
          <div className="flex items-center gap-3 sm:gap-5">

            {/* Phone — icon on mobile, icon+text on sm+ */}
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-1.5 text-white/90 text-xs font-medium hover:text-white transition-colors"
              aria-label="Call us"
            >
              <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span className="hidden sm:inline">{siteConfig.phone}</span>
            </a>

            {/* Email — hidden on mobile, icon+text on sm+ */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="hidden sm:flex items-center gap-1.5 text-white/90 text-xs font-medium hover:text-white transition-colors"
              aria-label="Email us"
            >
              <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span className="hidden lg:inline">{siteConfig.email}</span>
            </a>

            {/* WhatsApp — icon on mobile, icon+text on sm+ */}
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/90 text-xs font-medium hover:text-white transition-colors"
              aria-label="WhatsApp us"
            >
              <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Instagram — icon always */}
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/90 text-xs font-medium hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <span className="hidden sm:inline">Instagram</span>
            </a>

          </div>

          {/* Right: hours — hidden on mobile */}
          <div className="hidden sm:flex items-center gap-1.5 text-white/70 text-xs">
            <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
            </svg>
            Mon–Sat: 10AM–8PM &nbsp;|&nbsp; Sun: 10AM–2PM
          </div>

        </div>
      </div>

      {/* ── Main nav ── */}
      <nav className={`bg-white/95 backdrop-blur-sm border-b border-slate-100 transition-all duration-300 ${scrolled ? "shadow-sm" : ""}`}>
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[80px]">

          {/* Floating circular logo */}
          <Link
            to="/"
            aria-label={siteConfig.brandName}
            className="relative top-[15px] z-20 shrink-0 mr-3"
          >
            <div className="w-[120px] h-[120px] rounded-full border-[3px] border-white shadow-xl overflow-hidden bg-white ring-2 ring-primary/15">
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

        <div className="hidden lg:block ml-15">
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
