import { motion } from "framer-motion";
import { pageTransition, fadeInUp, staggerContainer } from "../utils/animations";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { blogPosts } from "../data/blogPosts";
import SectionHeading from "../components/SectionHeading";
import BlogCard from "../components/BlogCard";

export default function Blog() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div {...pageTransition}>
      <section className="pt-28 pb-16 lg:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <SectionHeading
          badge="Our Blog"
          title="Clinical Insights & Dental Health Tips"
          subtitle="Stay informed with the latest dental health advice, treatment guides, and wellness tips from our expert team."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
}
