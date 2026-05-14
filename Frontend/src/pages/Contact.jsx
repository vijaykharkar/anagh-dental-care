import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  pageTransition,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  buttonHover,
} from "../utils/animations";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { siteConfig } from "../data/siteConfig";

const contactInfo = [
  {
    id: 1,
    icon: "📍",
    title: "Visit Us",
    details: [siteConfig.address],
  },
  {
    id: 2,
    icon: "📞",
    title: "Call Us",
    details: [siteConfig.phone],
  },
  {
    id: 3,
    icon: "✉️",
    title: "Email Us",
    details: [siteConfig.email],
  },
  {
    id: 4,
    icon: "🕐",
    title: "Clinic Hours",
    details: [
      siteConfig.hours.weekday,
      siteConfig.hours.saturday,
      siteConfig.hours.sunday,
    ],
  },
];

export default function Contact() {
  const { ref, isInView } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <motion.div {...pageTransition}>
      <section className="pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
            Get in Touch
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-primary mb-6 tracking-tight leading-tight">
            We&apos;d Love to Hear From You
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Whether you have a question about our services, need to schedule an
            appointment, or just want to say hello — our team is here for you.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12"
        >
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2 space-y-8"
          >
            {contactInfo.map((item) => (
              <div key={item.id} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-xl shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-medium text-primary mb-1">
                    {item.title}
                  </h3>
                  {item.details.map((detail, idx) => (
                    <p
                      key={idx}
                      className="text-on-surface-variant text-sm leading-relaxed"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-4">
              <Link to="/appointment">
                <motion.button
                  {...buttonHover}
                  className="bg-primary text-white px-8 py-3 rounded-lg text-sm font-semibold tracking-wide hover:shadow-lg transition-all cursor-pointer"
                >
                  Book an Appointment
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-xl shadow-primary/5 border border-slate-100 p-6 sm:p-8 lg:p-10 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    className="w-full bg-surface border border-outline-variant rounded-lg py-3 px-4 text-sm focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none transition-all"
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
                    className="w-full bg-surface border border-outline-variant rounded-lg py-3 px-4 text-sm focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
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
                  className="w-full bg-surface border border-outline-variant rounded-lg py-3 px-4 text-sm focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-on-surface-variant tracking-wide">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full bg-surface border border-outline-variant rounded-lg py-3 px-4 text-sm focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-on-surface-variant tracking-wide">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  rows={4}
                  required
                  className="w-full bg-surface border border-outline-variant rounded-lg py-3 px-4 text-sm focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none transition-all resize-none"
                />
              </div>
              <motion.button
                {...buttonHover}
                type="submit"
                className="w-full bg-primary-container text-white font-semibold py-4 rounded-xl shadow-lg shadow-primary/20 text-sm tracking-wide cursor-pointer"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
