import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, ArrowUp } from "lucide-react";

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Monitor scroll progress to show/hide the back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      id="floating-interactive-buttons-container"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3.5 pointer-events-none"
    >
      {/* 1. BACK TO TOP BUTTON */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="back-to-top-btn"
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="p-3.5 bg-slate-900/90 text-white rounded-full shadow-lg hover:bg-slate-900 shadow-slate-900/10 cursor-pointer pointer-events-auto hover:-translate-y-1 active:translate-y-0 transition-all duration-300 border border-slate-800/50 backdrop-blur-xs flex items-center justify-center group"
            title="Scroll back to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 2. FLOATING CALL BUTTON (MOBILE-ONLY) */}
      <motion.a
        id="mobile-floating-call-btn"
        href="tel:+918810660831"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="md:hidden flex items-center gap-2 px-5 py-3.5 bg-gradient-to-r from-primary to-harmony-teal text-white rounded-full shadow-xl hover:from-primary-hover hover:to-harmony-dark shadow-primary/20 cursor-pointer pointer-events-auto hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
        title="Call procurement now"
      >
        <Phone className="w-4 h-4 animate-bounce" />
        <span className="text-xs font-black tracking-wide uppercase">Call Now</span>
      </motion.a>

      {/* 3. FLOATING WHATSAPP BUTTON */}
      <div className="relative flex items-center justify-center pointer-events-auto">
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              id="whatsapp-tooltip"
              initial={{ opacity: 0, x: -15, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -15, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute right-16 px-3.5 py-2 bg-slate-950 text-white text-xs font-bold rounded-xl shadow-md whitespace-nowrap border border-slate-800 pointer-events-none"
            >
              Chat with us
              <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-slate-950 rotate-45 border-r border-t border-slate-800" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulsating glowing halo for premium feel */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-md opacity-25 animate-pulse" />

        {/* WhatsApp Button */}
        <motion.a
          id="floating-whatsapp-btn"
          href="https://wa.me/918810660831"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:bg-[#20ba59] shadow-[#25D366]/20 cursor-pointer flex items-center justify-center transition-all duration-300 relative border border-[#1ebd54]"
          aria-label="Chat with RS Pharma on WhatsApp"
        >
          {/* Authentic WhatsApp vector path */}
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.6.95 3.16 1.449 4.805 1.45 5.534 0 10.038-4.502 10.04-10.04.002-2.683-1.04-5.205-2.937-7.104C16.656 1.56 14.132.515 11.45.517 5.918.517 1.415 5.018 1.41 10.552c-.001 1.738.455 3.43 1.32 4.937L1.613 20.9l5.503-1.442-.47-.28zM17.5 14.4c-.33-.16-1.93-.95-2.23-1.06-.3-.1-.52-.16-.74.16-.22.31-.85 1.06-1.04 1.28-.19.22-.39.25-.72.09-1.34-.67-2.22-1.18-3.09-2.67-.23-.4-.23-.76-.07-.92.14-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.02-.57-.08-.16-.74-1.78-1.01-2.44-.27-.65-.54-.56-.74-.57-.19-.01-.41-.01-.63-.01-.22 0-.58.08-.88.41-.3.33-1.15 1.12-1.15 2.73s1.17 3.16 1.33 3.38c.16.22 2.3 3.52 5.58 4.94.78.34 1.39.54 1.86.69.78.25 1.49.21 2.05.13.62-.09 1.93-.78 2.2-1.5.27-.72.27-1.34.19-1.46-.08-.12-.3-.19-.63-.35z" />
          </svg>
        </motion.a>
      </div>
    </div>
  );
}
