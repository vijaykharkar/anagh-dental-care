import { useState } from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import {
  pageTransition,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  buttonHover,
} from "../utils/animations";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { serviceOptions, timeSlots } from "../data/services";
import { siteConfig } from "../data/siteConfig";

export default function Appointment() {
  const { ref, isInView } = useScrollAnimation();
  const [selectedService, setSelectedService] = useState(serviceOptions[0]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const WHATSAPP_NUMBER = siteConfig.whatsapp;

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `*New Appointment Request*`,
      ``,
      `*Service:* ${selectedService}`,
      `*Time Slot:* ${selectedSlot || "Not selected"}`,
      ``,
      `*Patient Details:*`,
      `*Name:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      `*Email:* ${formData.email}`,
      formData.message ? `*Message:* ${formData.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank");
  };

  const calendarDays = [28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <motion.div {...pageTransition}>
      <SEO
        title="Book Appointment – Anagh Dental Care"
        description="Book your dental appointment online at Anagh Dental Care, Kiwale. Choose from Dental Implants, Teeth Whitening, Root Canal, Braces & more. Quick booking via WhatsApp or online form."
        keywords="book dental appointment Kiwale, dental appointment Pimpri-Chinchwad, book dentist Pune, dental appointment online, schedule dental visit Kiwale"
        canonical="/appointment"
      />
      <main className="pt-10 pb-24 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto min-h-screen">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
        >
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-5 space-y-10"
          >
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-secondary text-xs font-semibold uppercase tracking-wider">
                ✅ Trusted Clinical Care
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-primary tracking-tight leading-tight">
                Your Journey to a Radiant Smile Starts Here
              </h1>
              <p className="text-lg text-on-surface-variant max-w-md leading-relaxed">
                Save time and secure your slot instantly. Our advanced clinical
                systems ensure a seamless booking experience tailored to your
                schedule.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-xl">
                  ⏰
                </div>
                <div>
                  <h3 className="font-heading text-lg font-medium text-primary mb-1">
                    Instant Confirmation
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Real-time availability updates for immediate peace of mind.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-xl">
                  🛡️
                </div>
                <div>
                  <h3 className="font-heading text-lg font-medium text-primary mb-1">
                    Clinical Excellence
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Access to board-certified specialists and advanced
                    technology.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg hidden lg:block">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIBb04ZQSkNR7uR-6YIhAOQohGlN5boZMuNp_BTCnZA1SegYIcBBaremH1MnY7OnMLZK74CUyt8WgLUMXp3tfxBhy8VnlEIliv8_Kv4Gv0AYIatCtbIEpNkDBCdiwtiGpvRid8G3uJ_JPElRqmzvJzrN7sSag4YmlwTwBxeJWQi1O4uyW5eFg4vLwv8Gs6d30FfWbDM1_beYSFk1kOZw6NyUVJmPOe4MljfVMhaMdNdJ38_Xj520_acQYCZmWGuc4KRSAkwJcMA1l6"
                alt="Modern Dental Office"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-xl shadow-primary/5 border border-slate-100 overflow-hidden"
            >
              <div className="flex h-1.5 bg-surface-container">
                <div className="w-1/3 bg-secondary" />
                <div className="w-1/3 bg-secondary-container" />
                <div className="w-1/3 bg-surface-container" />
              </div>

              <div className="p-6 sm:p-8 lg:p-10 space-y-10">
                <section className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                      1
                    </span>
                    <h2 className="font-heading text-xl font-medium text-primary">
                      Select Service
                    </h2>
                  </div>
                  <div className="relative">
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-surface border border-outline-variant rounded-lg py-3 px-4 text-sm focus:ring-2 focus:ring-primary-container focus:border-primary transition-all appearance-none cursor-pointer"
                    >
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <svg
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-outline pointer-events-none"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </section>

                <section className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                      2
                    </span>
                    <h2 className="font-heading text-xl font-medium text-primary">
                      Choose Date & Time
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-surface rounded-xl p-5 border border-outline-variant/30">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-primary text-sm">
                          November 2024
                        </span>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            className="w-7 h-7 rounded-full hover:bg-surface-container-high flex items-center justify-center text-outline transition-colors"
                          >
                            ‹
                          </button>
                          <button
                            type="button"
                            className="w-7 h-7 rounded-full hover:bg-surface-container-high flex items-center justify-center text-outline transition-colors"
                          >
                            ›
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-bold text-outline mb-2">
                        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                          <span key={i}>{d}</span>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 gap-1">
                        {calendarDays.map((day, i) => (
                          <button
                            key={i}
                            type="button"
                            className={`p-2 text-sm rounded-lg transition-colors ${
                              day === 1
                                ? "bg-secondary text-white"
                                : day < 28
                                ? "hover:bg-surface-container-high cursor-pointer"
                                : "text-outline-variant"
                            }`}
                          >
                            {day}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                        Available Slots
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot.time}
                            type="button"
                            disabled={!slot.available}
                            onClick={() => setSelectedSlot(slot.time)}
                            className={`py-2.5 px-4 rounded-lg text-sm font-semibold transition-colors ${
                              !slot.available
                                ? "bg-surface-container-highest text-outline cursor-not-allowed"
                                : selectedSlot === slot.time
                                ? "border-2 border-primary bg-primary/5 text-primary"
                                : "border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary cursor-pointer"
                            }`}
                          >
                            {slot.available ? slot.time : "Booked"}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                <section className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                      3
                    </span>
                    <h2 className="font-heading text-xl font-medium text-primary">
                      Patient Details
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-on-surface-variant tracking-wide">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full bg-surface border border-outline-variant rounded-lg py-3 px-4 text-sm focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-on-surface-variant tracking-wide">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        required
                        className="w-full bg-surface border border-outline-variant rounded-lg py-3 px-4 text-sm focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-1.5">
                      <label className="text-sm font-semibold text-on-surface-variant tracking-wide">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full bg-surface border border-outline-variant rounded-lg py-3 px-4 text-sm focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-1.5">
                      <label className="text-sm font-semibold text-on-surface-variant tracking-wide">
                        Brief Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about any specific concerns..."
                        rows={3}
                        className="w-full bg-surface border border-outline-variant rounded-lg py-3 px-4 text-sm focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all resize-none"
                      />
                    </div>
                  </div>
                </section>

                <div className="pt-6 border-t border-slate-100 flex flex-col gap-6">
                  <motion.button
                    {...buttonHover}
                    type="submit"
                    className="w-full bg-[#25D366] text-white font-bold py-4 rounded-xl shadow-lg shadow-green-500/20 flex items-center justify-center gap-2 cursor-pointer text-sm tracking-wide"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Confirm via WhatsApp
                  </motion.button>

                  <div className="flex items-center justify-center gap-6 py-4 px-6 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-2 text-on-secondary-container">
                      <span className="text-sm">🔒</span>
                      <span className="text-xs font-semibold">
                        SSL SECURED DATA
                      </span>
                    </div>
                    <div className="w-px h-4 bg-outline-variant" />
                    <div className="flex items-center gap-2 text-on-secondary-container">
                      <span className="text-sm">🛡️</span>
                      <span className="text-xs font-semibold">
                        HIPAA COMPLIANT
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </main>
    </motion.div>
  );
}
