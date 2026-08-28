import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { MessageSquare, ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta-banner" className="py-20 md:py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-900 rounded-3xl p-8 md:p-14 lg:p-20 text-white overflow-hidden shadow-2xl shadow-slate-950/30 border border-white/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-15px_rgba(15,108,189,0.4)]"
        >
          {/* Subtle animated background circles */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -right-12 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-20 -left-20 w-80 h-80 bg-sky-400/25 rounded-full blur-3xl pointer-events-none" 
          />

          <div className="relative z-10 max-w-3xl space-y-6 text-left">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-xs text-blue-100 rounded-full text-xs font-bold tracking-wider uppercase border border-white/5">
              Join Our Global Network
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight font-display bg-clip-text bg-gradient-to-r from-white via-slate-100 to-blue-100">
              Need a Trusted Pharmaceutical Partner?
            </h2>
            <p className="text-slate-200 text-lg max-w-2xl font-normal leading-relaxed">
              We coordinate robust supply chains for global clinics, hospitals, and pharmacies. Get in touch with our team today to establish a wholesale account or request bulk product quotations.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-6">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact"
                  className="px-8 py-4.5 bg-gradient-to-r from-primary to-blue-600 hover:from-primary-hover hover:to-blue-700 text-white font-bold rounded-2xl text-sm transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md shadow-primary/20 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Contact Our Sourcing Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="tel:+918810660831"
                  className="px-8 py-4.5 bg-white/10 hover:bg-white/15 text-white font-bold rounded-2xl text-sm border border-white/15 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer backdrop-blur-xs"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Directly: +91 88106 60831</span>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
