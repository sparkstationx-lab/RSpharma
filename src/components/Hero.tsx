import React from "react";
import { Link } from "react-router-dom";
import { motion, Variants } from "motion/react";
import { ArrowRight, ShoppingBag } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white py-24 md:py-36"
    >
      {/* Background Image with subtle, slow zoom-in animation effect */}
      <motion.div 
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 18,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ filter: "brightness(0.35)" }}
      />
      
      {/* Absolute overlay for additional color cast and vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-harmony-dark/40 via-transparent to-harmony-dark/85 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 flex flex-col items-center"
        >
          {/* Tagline */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-harmony-dark/60 border border-harmony-turquoise/30 text-harmony-cream rounded-full text-xs font-bold tracking-widest uppercase shadow-xs backdrop-blur-md"
          >
            <span>FDA Registered & Licensed Wholesaler</span>
          </motion.div>

          {/* Centered Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.15] font-display max-w-4xl"
          >
            Trusted Pharmaceutical <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-harmony-turquoise via-harmony-mint to-harmony-cream">
              Distribution Partner
            </span>
          </motion.h1>

          {/* Subheading / Brief descriptive text to support the headline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed text-center"
          >
            Delivering critical medicines and quality medical therapeutics with certified GDP standards and absolute temperature-controlled reliability globally.
          </motion.p>

          {/* Two Buttons in the Center */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link
                id="hero-contact-us-btn"
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/35 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-primary/30"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link
                id="hero-view-products-btn"
                to="/products"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/30 rounded-xl text-sm font-bold backdrop-blur-md shadow-xs hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-harmony-turquoise" />
                <span>View All Products</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
