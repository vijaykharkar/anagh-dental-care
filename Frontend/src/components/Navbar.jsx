import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, ctaLink } from "../data/navigation";
import { navServices } from "../data/services";
import { siteConfig } from "../data/siteConfig";

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
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100"
          : "bg-white/95 backdrop-blur-sm border-b border-slate-100"
      }`}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
        <Link
          to="/"
          className="text-xl font-bold text-primary-container font-heading tracking-tight"
        >
          {siteConfig.brandName}
        </Link>

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
                            to="/services"
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
                                to="/services"
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
