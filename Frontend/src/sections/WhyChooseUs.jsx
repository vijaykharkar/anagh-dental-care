import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "../utils/animations";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { whyChooseUs } from "../data/whyChooseUs";

export default function WhyChooseUs() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div
          ref={ref}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhVNaPOIIWeFMSYKl_71iD7Cz9Z0awylxMgrMQX5ov51cwPoVTz1oJycArAUP-loghTgPXRvoQzkbAc88OA4J8K-ZmRzeaGp4usZySdCpIPsdhBOKWD2lvHKYEv56UKUI19voO6vg16uS1Ucmzn8_XsEMmYa0jo0ndvETWXCJtBBhBrxhO7ruRYcGNnPGPjGHaN4i-27r0L-s8kVy4tVc0oA3RmIJKh8PqJT7FpV13FGsDrt1xjen8e5sJIKzWLyWB6ei3XbMNznQL"
                alt="Professional dentist using advanced dental technology"
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-6 rounded-xl border border-white shadow-lg max-w-xs">
                <p className="font-heading text-primary italic text-lg leading-snug">
                  &ldquo;Our mission is to combine clinical precision with
                  absolute patient comfort.&rdquo;
                </p>
                <p className="text-xs font-medium text-on-surface-variant mt-4">
                  — Dr. Anagh, Chief Surgeon
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="space-y-4">
              <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
                Why Choose Us
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-primary leading-tight tracking-tight">
                Setting New Standards in Patient Experience
              </h2>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-8 mt-10"
            >
              {whyChooseUs.map((item) => (
                <motion.div
                  key={item.id}
                  variants={staggerItem}
                  className="flex gap-6 items-start"
                >
                  <div className="p-3 bg-surface-container-high rounded-full text-2xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-medium text-primary mb-2">
                      {item.title}
                    </h4>
                    <p className="text-on-surface-variant leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
