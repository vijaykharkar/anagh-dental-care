import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "../assets/logo.jpeg";
import logoVideo from "../assets/logoanimation.mp4";
import { siteConfig } from "../data/siteConfig";

const SESSION_KEY = "anagh_splash_shown";

export default function LogoSplash() {
  const [visible, setVisible] = useState(() => !sessionStorage.getItem(SESSION_KEY));
  const [phase, setPhase] = useState("logo"); // "logo" → "video"
  const videoRef = useRef(null);

  const dismiss = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(false);
  };

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setPhase("video"), 1800);
    return () => clearTimeout(t);
  }, [visible]);

  useEffect(() => {
    if (!visible || phase !== "video") return;

    // Always dismiss after max duration — guaranteed exit, no dependency on video
    const t = setTimeout(dismiss, 6000);

    // Optional: end early when the video finishes
    const video = videoRef.current;
    if (video) {
      const onEnd = () => { clearTimeout(t); dismiss(); };
      video.addEventListener("ended", onEnd);
      return () => { video.removeEventListener("ended", onEnd); clearTimeout(t); };
    }

    return () => clearTimeout(t);
  }, [visible, phase]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white"
        >
          <AnimatePresence mode="wait">
            {phase === "logo" ? (
              <motion.div
                key="logo-phase"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center gap-5"
              >
                {/* Spinning ring + circular logo */}
                <div className="relative">
                  {/* Outer spinning ring */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "conic-gradient(from 0deg, #1a5f7a 0%, #a5eff4 50%, #1a5f7a 100%)",
                      padding: "3px",
                      animation: "spin-slow 1.8s linear infinite",
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-white" />
                  </div>
                  {/* Logo circle */}
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white m-1">
                    <img
                      src={logoImg}
                      alt={siteConfig.brandName}
                      className="w-full h-full object-contain"
                      style={{ mixBlendMode: "multiply" }}
                    />
                  </div>
                </div>

                {/* Clinic name */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-center"
                >
                  <p className="text-xl font-bold text-primary-container font-heading tracking-tight">
                    {siteConfig.brandName}
                  </p>
                  <p className="text-sm text-slate-400 font-medium mt-0.5">
                    {siteConfig.brandNameMarathi}
                  </p>
                  <p className="text-xs text-slate-300 tracking-widest uppercase mt-3">
                    {siteConfig.tagline}
                  </p>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="video-phase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-3"
              >
                {/* Logo animation video */}
                <video
                  ref={videoRef}
                  src={logoVideo}
                  autoPlay
                  muted
                  playsInline
                  className="w-52 h-52 sm:w-64 sm:h-64 object-contain"
                />

                {/* Welcome text — staggered entrance */}
                <div className="text-center space-y-1.5">
                  <motion.p
                    initial={{ opacity: 0, y: -14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.55, ease: "easeOut" }}
                    className="text-xs sm:text-sm font-semibold text-slate-400 tracking-[0.25em] uppercase"
                  >
                    Welcome to
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.85, duration: 0.6, ease: "easeOut" }}
                    className="text-2xl sm:text-3xl font-bold text-primary-container font-heading tracking-tight"
                  >
                    {siteConfig.brandName}
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.15, duration: 0.5, ease: "easeOut" }}
                    className="text-sm text-slate-400 font-medium"
                  >
                    {siteConfig.brandNameMarathi}
                  </motion.p>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.4, duration: 0.5, ease: "easeOut" }}
                    className="h-[2px] w-24 sm:w-32 mx-auto mt-1 rounded-full"
                    style={{ background: "linear-gradient(90deg, transparent, #00475e, transparent)" }}
                  />

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                    className="text-[10px] text-slate-300 tracking-widest uppercase pt-1"
                  >
                    {siteConfig.tagline}
                  </motion.p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
