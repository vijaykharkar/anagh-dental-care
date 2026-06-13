import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { siteConfig } from "../data/siteConfig";

import drSagarImg from "../assets/drsagar.jpeg";
import drSagarClinicImg from "../assets/drsagarclinicpic.jpeg";
import drSagarEntranceImg from "../assets/drsagarpicinterance.jpeg";
import clinicMainImg from "../assets/clinic.jpeg";
import clinicPicImg from "../assets/clinicpic.jpeg";
import clinicPicOneImg from "../assets/clincipicone.jpeg";
import clinicPicTwoImg from "../assets/clinicpictwo.jpeg";
import clinicPicFourImg from "../assets/clinicpicfour.jpeg";
import clinicPicFiveImg from "../assets/clinicpicfive.jpeg";
import clinicPicSixImg from "../assets/clinicpicsix.jpeg";
import clinicPicSevenImg from "../assets/clinicpicseven.jpeg";
import clinicalChairImg from "../assets/clinicalchair.jpeg";
import clinicalSeatImg from "../assets/clinicalseat.jpeg";

const galleryItems = [
  {
    id: 1,
    src: drSagarImg,
    alt: "Dr. Sagar – Lead Dentist & Prosthodontist",
    caption: "Dr. Sagar",
    featured: true,
    span: "col-span-1 row-span-2",
  },
  {
    id: 2,
    src: clinicPicFiveImg,
    alt: "Anagh Dental Care – Main Treatment Area",
    caption: "Treatment Area",
    featured: false,
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    src: drSagarClinicImg,
    alt: "Dr. Sagar at the clinic",
    caption: "Dr. Sagar in Clinic",
    featured: false,
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    src: clinicPicSevenImg,
    alt: "Anagh Dental Care – Clinic Interior",
    caption: "Clinic Interior",
    featured: false,
    span: "col-span-1 row-span-1",
  },
  {
    id: 5,
    src: drSagarEntranceImg,
    alt: "Dr. Sagar at clinic entrance",
    caption: "Clinic Entrance",
    featured: false,
    span: "col-span-1 row-span-1",
  },
  {
    id: 6,
    src: clinicMainImg,
    alt: "Anagh Dental Care exterior",
    caption: "Clinic Exterior",
    featured: false,
    span: "col-span-1 row-span-1",
  },
  {
    id: 7,
    src: clinicalChairImg,
    alt: "Modern dental chair and equipment",
    caption: "Modern Equipment",
    featured: false,
    span: "col-span-1 row-span-1",
  },
  {
    id: 8,
    src: clinicPicImg,
    alt: "Anagh Dental Care clinic view",
    caption: "Clinic View",
    featured: false,
    span: "col-span-1 row-span-1",
  },
  {
    id: 9,
    src: clinicPicOneImg,
    alt: "Anagh Dental Care – Reception area",
    caption: "Reception Area",
    featured: false,
    span: "col-span-1 row-span-1",
  },
  {
    id: 10,
    src: clinicalSeatImg,
    alt: "Patient dental seat",
    caption: "Patient Comfort",
    featured: false,
    span: "col-span-1 row-span-1",
  },
  {
    id: 11,
    src: clinicPicTwoImg,
    alt: "Anagh Dental Care – clinic picture two",
    caption: "Clinic Space",
    featured: false,
    span: "col-span-1 row-span-1",
  },
  {
    id: 12,
    src: clinicPicFourImg,
    alt: "Anagh Dental Care – clinic picture four",
    caption: "Clinic Environment",
    featured: false,
    span: "col-span-1 row-span-1",
  },
  {
    id: 13,
    src: clinicPicSixImg,
    alt: "Anagh Dental Care – clinic picture six",
    caption: "Clinic Ambience",
    featured: false,
    span: "col-span-1 row-span-1",
  },
];

function LightboxModal({ item, onClose, onPrev, onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.alt}
          className="w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
        />
        <p className="mt-4 text-white/80 text-sm font-medium tracking-wide">
          {item.caption}
        </p>

        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-primary hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <button
          onClick={onPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-primary hover:bg-slate-100 transition-colors cursor-pointer hidden sm:flex"
          aria-label="Previous"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={onNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-primary hover:bg-slate-100 transition-colors cursor-pointer hidden sm:flex"
          aria-label="Next"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function ClinicGallery() {
  const { ref, isInView } = useScrollAnimation();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i - 1 + galleryItems.length) % galleryItems.length);
  const nextImage = () =>
    setLightboxIndex((i) => (i + 1) % galleryItems.length);

  return (
    <section className="py-16 lg:py-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-3 block">
            Our Clinic
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-primary mb-4 tracking-tight">
            Tour Anagh Dental Care
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Step inside our state-of-the-art facility designed for your comfort
            and care. Meet Dr. Sagar and explore the environment where we bring
            smiles to life.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              onClick={() => openLightbox(index)}
              className={`relative overflow-hidden rounded-xl cursor-pointer group shadow-sm hover:shadow-xl transition-shadow duration-300 ${
                item.id === 1
                  ? "col-span-2 sm:col-span-1 row-span-2"
                  : "col-span-1 row-span-1"
              }`}
            >
              <div
                className={`w-full overflow-hidden rounded-xl ${
                  item.id === 1 ? "h-64 sm:h-full sm:min-h-[420px]" : "h-40 sm:h-48 lg:h-52"
                }`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex flex-col justify-end p-3 sm:p-4">
                <p className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                  {item.caption}
                </p>
              </div>

              {item.id === 1 && (
                <div className="absolute top-3 left-3 bg-secondary text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Dr. Sagar
                </div>
              )}

              <div className="absolute inset-0 ring-0 group-hover:ring-2 group-hover:ring-primary/40 rounded-xl transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-on-surface-variant"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary inline-block"></span>
            <span>Click any image to view full size</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-outline-variant"></div>
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <span>📍</span>
            <span>{siteConfig.addressShort}</span>
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <LightboxModal
            item={galleryItems[lightboxIndex]}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
