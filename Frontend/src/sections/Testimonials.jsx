import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { testimonials } from "../data/testimonials";

function StarRating({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }) {
  return (
    <div className="shrink-0 w-[300px] sm:w-[360px] lg:w-[400px] bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 mx-3">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-primary bg-primary/8 px-3 py-1 rounded-full tracking-wide">
          {t.treatment}
        </span>
        <StarRating count={t.stars} />
      </div>

      <p className="font-heading text-sm leading-relaxed text-on-surface-variant italic mb-6 line-clamp-4">
        &ldquo;{t.quote}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-2 border-t border-slate-50">
        <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center shrink-0 shadow-sm`}>
          <span className="text-white font-bold text-xs">{t.initials}</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-on-surface">{t.name}</p>
          <p className="text-xs text-on-surface-variant mt-0.5">{t.role}</p>
        </div>
        <div className="ml-auto text-4xl font-serif text-primary/10 leading-none select-none">
          &#x201D;
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [paused, setPaused] = useState(false);
  const { ref, isInView } = useScrollAnimation();

  const track = [...testimonials, ...testimonials];

  return (
    <section className="py-16 lg:py-24 overflow-hidden">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 mb-12">
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-3 block">
            Patient Stories
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-primary tracking-tight">
            What Our Patients Say
          </h2>
          <p className="text-on-surface-variant mt-3 text-sm max-w-md mx-auto">
            Real experiences from real patients at Anagh Dental Care, Kiwale.
          </p>
        </motion.div>
      </div>

      {/* Marquee track */}
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10 bg-gradient-to-r from-surface to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10 bg-gradient-to-l from-surface to-transparent" />

        <div
          className="flex"
          style={{
            width: "max-content",
            animation: "marquee 40s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {track.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
