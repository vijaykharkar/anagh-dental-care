import { motion } from "framer-motion";
import { staggerItem, scaleOnHover } from "../utils/animations";

export default function TeamCard({ member }) {
  return (
    <motion.div
      variants={staggerItem}
      {...scaleOnHover}
      className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
    >
      <div className="relative mb-6 overflow-hidden rounded-lg">
        <img
          src={member.image}
          alt={member.name}
          className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {member.badge && (
          <div className="absolute top-4 left-4">
            <span className="bg-secondary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">
              {member.badge}
            </span>
          </div>
        )}
      </div>
      <h3 className="font-heading text-lg font-medium text-primary mb-1">
        {member.name}
      </h3>
      <p className="text-xs font-medium text-on-surface-variant mb-3">
        {member.role}
      </p>
      <div className="flex flex-wrap gap-2">
        {member.specialties.map((specialty) => (
          <span
            key={specialty}
            className="bg-secondary/10 text-secondary text-[11px] font-semibold px-2 py-0.5 rounded border border-secondary/20"
          >
            {specialty}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
