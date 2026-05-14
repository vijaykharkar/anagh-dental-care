import { useState } from "react";
import { motion } from "framer-motion";
import {
  pageTransition,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  buttonHover,
} from "../utils/animations";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { serviceOptions, timeSlots } from "../data/services";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: "", phone: "", email: "", message: "" });
    setSelectedSlot(null);
  };

  const calendarDays = [28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <motion.div {...pageTransition}>
      <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto min-h-screen">
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
                    className="w-full bg-primary-container text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer text-sm tracking-wide"
                  >
                    ✓ Confirm Appointment
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
