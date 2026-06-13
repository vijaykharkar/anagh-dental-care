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
    const video = videoRef.current;
    if (!video) return;
    const onEnd = () => dismiss();
    video.addEventListener("ended", onEnd);
    const t = setTimeout(dismiss, 5000);
    return () => { video.removeEventListener("ended", onEnd); clearTimeout(t); };
  }, [visible, phase]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white cursor-pointer"
          onClick={dismiss}
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
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center gap-5"
              >
                <video
                  ref={videoRef}
                  src={logoVideo}
                  autoPlay
                  muted
                  playsInline
                  className="w-56 h-56 sm:w-72 sm:h-72 object-contain"
                />
                <p className="text-xs text-slate-300 tracking-widest uppercase">
                  Tap anywhere to continue
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
