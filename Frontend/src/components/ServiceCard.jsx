import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { staggerItem, scaleOnHover } from "../utils/animations";

export default function ServiceCard({ service, variant = "simple" }) {
  if (variant === "image") {
    return (
      <motion.div
        variants={staggerItem}
        {...scaleOnHover}
        className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 group"
      >
        <div className="h-56 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <h3 className="font-heading text-xl font-medium text-primary mb-2">
            {service.title}
          </h3>
          <p className="text-on-surface-variant leading-relaxed mb-4">
            {service.description}
          </p>
          <Link
            to="/services"
            className="flex items-center text-secondary text-sm font-semibold tracking-wide hover:translate-x-1 transition-transform"
          >
            Learn More
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={staggerItem}
      {...scaleOnHover}
      className="bg-white p-8 rounded-xl shadow-sm border border-outline-variant/30 flex flex-col items-start gap-2 hover:shadow-md transition-shadow"
    >
      <div
        className={`w-12 h-12 rounded-lg ${service.iconBg} flex items-center justify-center mb-2 text-2xl`}
      >
        {service.icon}
      </div>
      <h3 className="font-heading text-xl font-medium text-primary">
        {service.title}
      </h3>
      <p className="text-on-surface-variant leading-relaxed">
        {service.description}
      </p>
      <Link
        to="/services"
        className="mt-4 flex items-center text-secondary text-sm font-semibold tracking-wide gap-2 hover:gap-3 transition-all"
      >
        Learn More
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </motion.div>
  );
}
