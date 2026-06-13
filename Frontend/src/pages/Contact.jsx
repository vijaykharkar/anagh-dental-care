import { useState } from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
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

  const WHATSAPP_NUMBER = siteConfig.whatsapp;

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `*New Contact Inquiry*`,
      ``,
      `*Name:* ${formData.name}`,
      formData.phone ? `*Phone:* ${formData.phone}` : "",
      `*Email:* ${formData.email}`,
      formData.subject ? `*Subject:* ${formData.subject}` : "",
      ``,
      `*Message:*`,
      formData.message,
    ]
      .filter(Boolean)
      .join("\n");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div {...pageTransition}>
      <SEO
        title="Contact Us – Anagh Dental Care Kiwale"
        description="Contact Anagh Dental Care in Kiwale, Pimpri-Chinchwad. Call +91 79727 19443 or WhatsApp for appointments. Office no. 102, Alpine Astonia Complex, Kiwale 411035."
        keywords="contact Anagh Dental Care, dental clinic contact Kiwale, dentist phone number Pimpri-Chinchwad, book dental appointment, dental clinic address Pune"
        canonical="/contact"
      />
      <section className="pt-10 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
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
                className="w-full bg-[#25D366] text-white font-semibold py-4 rounded-xl shadow-lg shadow-green-500/20 text-sm tracking-wide cursor-pointer flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Send via WhatsApp
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="rounded-2xl overflow-hidden shadow-xl border border-slate-100"
        >
          <div className="bg-primary px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-white font-heading font-semibold text-lg">
                Find Us Here
              </h3>
              <p className="text-white/70 text-sm mt-0.5">
                {siteConfig.address}
              </p>
            </div>
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-white text-primary text-sm font-semibold px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Open in Google Maps
            </a>
          </div>
          <iframe
            title="Anagh Dental Care Location"
            src="https://maps.google.com/maps?q=Alpine+Astonia+Complex+Kiwale+Pimpri-Chinchwad+411035&output=embed&z=15"
            width="100%"
            height="400"
            style={{ border: 0, display: "block" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </motion.div>
      </section>
    </motion.div>
  );
}
