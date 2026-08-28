import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Activity } from "lucide-react";

interface LoadingScreenProps {
  onComplete?: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide after 1.8 seconds to allow premium presentation of the loading screen
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          id="custom-loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-100 bg-white flex flex-col items-center justify-center pointer-events-auto"
        >
          {/* Main Logo & Presentation Content */}
          <div className="flex flex-col items-center max-w-sm px-6 text-center">
            {/* Spinning & Pulsating Brand Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [1, 1.05, 1], opacity: 1 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="w-24 h-24 rounded-3xl bg-white flex items-center justify-center shadow-xl shadow-slate-200/50 mb-6 overflow-hidden border border-slate-100"
            >
              <img
                src="/pharmalogo.jpg"
                alt="RS Pharma Logo"
                className="w-full h-full object-contain p-2"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Brand Name */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-1.5"
            >
              <h1 className="font-display font-black text-3xl tracking-tight text-slate-900">
                RS Pharma
              </h1>
              <p className="text-[10px] text-slate-500 font-extrabold tracking-widest uppercase">
                Healthcare Distribution
              </p>
            </motion.div>

            {/* Circular spinner container */}
            <div className="mt-12 relative flex items-center justify-center">
              {/* Outer Spin Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                className="w-10 h-10 border-3 border-slate-100 border-t-primary rounded-full"
              />
            </div>

            {/* Preparation Slogan */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ delay: 0.4, duration: 1.8, repeat: Infinity }}
              className="text-xs font-semibold text-slate-400 tracking-wide mt-6"
            >
              Preparing your experience...
            </motion.p>
          </div>

          {/* Sourcing credentials footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute bottom-10 text-[9px] font-bold text-slate-400 tracking-wider uppercase font-mono"
          >
            Sourcing Integrity • Distributing Trust
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
