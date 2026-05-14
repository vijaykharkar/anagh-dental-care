import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageTransition, fadeInUp, fadeIn } from "../utils/animations";
import { blogPosts } from "../data/blogPosts";

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <motion.div {...pageTransition}>
        <div className="pt-32 pb-20 text-center max-w-7xl mx-auto px-4">
          <h1 className="font-heading text-4xl font-semibold text-primary mb-4">
            Post Not Found
          </h1>
          <p className="text-on-surface-variant mb-8">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center text-secondary font-semibold text-sm tracking-wide hover:-translate-x-1 transition-transform"
          >
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </motion.div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.div {...pageTransition}>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="relative h-[50vh] min-h-[360px] w-full overflow-hidden"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
      </motion.div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10 pb-20">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 lg:p-12"
        >
          <Link
            to="/blog"
            className="inline-flex items-center text-secondary text-sm font-semibold tracking-wide hover:-translate-x-1 transition-transform mb-6"
          >
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-secondary/10 text-secondary text-xs font-semibold px-3 py-1 rounded-full border border-secondary/20">
              {post.category}
            </span>
            <span className="text-xs text-on-surface-variant">{post.readTime}</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-primary mb-6 tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 pb-8 mb-8 border-b border-slate-100">
            <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-sm font-bold text-primary">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-semibold text-primary">{post.author}</p>
              <p className="text-xs text-on-surface-variant">{formattedDate}</p>
            </div>
          </div>

          <div
            className="prose prose-slate max-w-none
              [&>h2]:font-heading [&>h2]:text-xl [&>h2]:sm:text-2xl [&>h2]:font-semibold [&>h2]:text-primary [&>h2]:mt-8 [&>h2]:mb-3 [&>h2]:tracking-tight
              [&>p]:text-on-surface-variant [&>p]:leading-relaxed [&>p]:mb-4
              [&>p>strong]:text-primary [&>p>strong]:font-semibold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
