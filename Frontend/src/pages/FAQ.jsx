import { useState } from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import {
  pageTransition,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  buttonHover,
} from "../utils/animations";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { faqs, faqCategories } from "../data/faqs";
import { siteConfig } from "../data/siteConfig";
import SectionHeading from "../components/SectionHeading";
import FAQAccordion from "../components/FAQAccordion";

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openId, setOpenId] = useState(null);
  const { ref, isInView } = useScrollAnimation();
  const { ref: ctaRef, isInView: ctaInView } = useScrollAnimation();

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setOpenId(null);
  };

  const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory);

  return (
    <motion.div {...pageTransition}>
      <SEO
        title="FAQs – Common Dental Questions Answered"
        description="Get answers to frequently asked dental questions at Anagh Dental Care. Learn about dental implants, root canal, braces, teeth whitening, costs & appointments in Kiwale, Pimpri-Chinchwad."
        keywords="dental FAQ, dental implant questions, root canal FAQ, braces cost Pune, teeth whitening FAQ, dental clinic FAQ Kiwale, dentist questions Pimpri-Chinchwad"
        canonical="/faq"
      />
      <section className="pt-10 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <SectionHeading
          badge="Common Questions"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our services, treatments, and clinic policies. Can't find your answer? Contact us directly."
        />
      </section>

      <section className="pb-16 lg:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
        >
          <motion.aside
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">
                Categories
              </p>
              <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 -mx-1 px-1">
                {faqCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                      activeCategory === cat.id
                        ? "bg-primary-container text-white shadow-md shadow-primary/20"
                        : "bg-white text-on-surface-variant border border-slate-100 hover:bg-surface-container-low hover:border-slate-200"
                    }`}
                  >
                    <span className="text-base">{cat.icon}</span>
                    {cat.label}
                  </button>
                ))}
              </nav>
            </div>
          </motion.aside>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-9"
          >
            <motion.div
              key={activeCategory}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {filteredFaqs.map((faq) => (
                <motion.div key={faq.id} variants={staggerItem}>
                  <FAQAccordion
                    faq={faq}
                    isOpen={openId === faq.id}
                    onToggle={() => handleToggle(faq.id)}
                  />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              ref={ctaRef}
              variants={fadeInUp}
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
              className="mt-10 bg-gradient-to-r from-primary-fixed/40 to-secondary-container/40 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-primary-fixed/30"
            >
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-primary mb-1.5 tracking-tight">
                  Still have questions?
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Can&apos;t find what you&apos;re looking for? Our team is here
                  to help.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Link to="/contact">
                  <motion.button
                    {...buttonHover}
                    className="bg-primary-container text-white px-6 py-3 rounded-xl text-sm font-semibold tracking-wide hover:shadow-lg transition-all cursor-pointer"
                  >
                    Contact Us
                  </motion.button>
                </Link>
                <a href={`tel:${siteConfig.phone}`}>
                  <motion.button
                    {...buttonHover}
                    className="bg-white border border-outline-variant text-primary px-6 py-3 rounded-xl text-sm font-semibold tracking-wide hover:bg-slate-50 transition-all cursor-pointer"
                  >
                    Call Now
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
