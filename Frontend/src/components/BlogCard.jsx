import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { staggerItem, scaleOnHover } from "../utils/animations";

export default function BlogCard({ post }) {
  return (
    <motion.article
      variants={staggerItem}
      {...scaleOnHover}
      className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 group flex flex-col"
    >
      <div className="h-52 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-secondary/10 text-secondary text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-secondary/20">
            {post.category}
          </span>
          <span className="text-xs text-on-surface-variant">{post.readTime}</span>
        </div>
        <h3 className="font-heading text-xl font-medium text-primary mb-2 leading-snug line-clamp-2">
          {post.title}
        </h3>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {post.description}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center text-xs font-bold text-primary">
              {post.author.charAt(0)}
            </div>
            <span className="text-xs text-on-surface-variant">{post.author}</span>
          </div>
          <Link
            to={`/blog/${post.slug}`}
            className="flex items-center text-secondary text-sm font-semibold tracking-wide hover:translate-x-1 transition-transform"
          >
            Read More
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
