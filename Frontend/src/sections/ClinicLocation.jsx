import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { siteConfig } from "../data/siteConfig";

export default function ClinicLocation() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-10"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-3 block">
            Our Location
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-primary mb-4 tracking-tight">
            Visit Us at Anagh Dental Care
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto text-sm leading-relaxed">
            Conveniently located at Alpine Astonia Complex, Kiwale — easy to find,
            with parking available right outside.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-slate-100"
        >
          {/* Map Header */}
          <div className="bg-primary px-5 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="min-w-0">
              <h3 className="text-white font-heading font-semibold text-lg leading-tight">
                Find Us Here
              </h3>
              <p className="text-white/70 text-sm mt-0.5 leading-snug truncate">
                {siteConfig.address}
              </p>
            </div>
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-white text-primary text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Open in Google Maps
            </a>
          </div>

          {/* Map Iframe */}
          <iframe
            title="Anagh Dental Care Location"
            src="https://maps.google.com/maps?q=Alpine+Astonia+Complex+Kiwale+Pimpri-Chinchwad+411035&output=embed&z=15"
            width="100%"
            height="420"
            style={{ border: 0, display: "block" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />

          {/* Quick Info Strip */}
          <div className="bg-primary/5 border-t border-primary/10 px-5 sm:px-8 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-3 group"
            >
              <span className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-base shrink-0 group-hover:bg-primary/20 transition-colors">📞</span>
              <div>
                <p className="text-[10px] font-semibold text-on-surface-variant uppercase tracking-wider">Call Us</p>
                <p className="text-sm font-semibold text-primary">{siteConfig.phone}</p>
              </div>
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <span className="w-9 h-9 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-base shrink-0 group-hover:bg-[#25D366]/20 transition-colors">💬</span>
              <div>
                <p className="text-[10px] font-semibold text-on-surface-variant uppercase tracking-wider">WhatsApp</p>
                <p className="text-sm font-semibold text-primary">{siteConfig.phone}</p>
              </div>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 group"
            >
              <span className="w-9 h-9 rounded-xl bg-secondary/10 flex items-center justify-center text-base shrink-0 group-hover:bg-secondary/20 transition-colors">✉️</span>
              <div>
                <p className="text-[10px] font-semibold text-on-surface-variant uppercase tracking-wider">Email</p>
                <p className="text-sm font-semibold text-primary truncate">{siteConfig.email}</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
