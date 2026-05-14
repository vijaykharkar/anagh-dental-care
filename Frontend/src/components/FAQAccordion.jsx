import { motion, AnimatePresence } from "framer-motion";

export default function FAQAccordion({ faq, isOpen, onToggle }) {
  return (
    <div
      className={`rounded-xl overflow-hidden transition-all ${
        isOpen
          ? "bg-white shadow-md border border-primary-container/20"
          : "bg-white shadow-sm border border-slate-100 hover:border-slate-200"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer group"
      >
        <span
          className={`font-heading text-base sm:text-lg font-medium pr-4 leading-snug transition-colors ${
            isOpen ? "text-primary-container" : "text-primary"
          }`}
        >
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            isOpen
              ? "bg-primary-container text-white"
              : "bg-surface-container-high text-primary group-hover:bg-surface-container-highest"
          }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
              <div className="border-t border-slate-100 pt-4">
                <p className="text-on-surface-variant leading-relaxed text-[15px]">
                  {faq.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
