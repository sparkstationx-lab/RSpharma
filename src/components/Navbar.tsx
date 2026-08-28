import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Activity, ChevronRight } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Certificates", path: "/certificates" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  // Handle sticky styling and scroll progress
  useEffect(() => {
    const handleScroll = () => {
      // Sticky check
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Progress bar calculation
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav
        id="main-navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-harmony-dark shadow-lg border-b border-harmony-teal/20 py-3"
            : "bg-harmony-dark border-b border-harmony-teal/10 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              id="logo-brand-link"
              to="/"
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-harmony-cream transition-colors duration-300">
                  RS Pharma
                </span>
                <span className="text-[10px] text-harmony-cream/90 font-bold tracking-wider uppercase -mt-0.5">
                  Healthcare Distribution
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1.5 bg-white/5 p-1.5 rounded-full border border-white/10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  id={`nav-link-${item.name.toLowerCase()}`}
                  to={item.path}
                  className={`relative px-5 py-2 text-sm font-semibold tracking-wide rounded-full transition-all duration-300 ${
                    isActive(item.path)
                      ? "text-white font-bold shadow-xs"
                      : "text-slate-200 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-harmony-turquoise/20 rounded-full border border-harmony-turquoise/30 shadow-inner"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Call Now Action Button */}
            <div className="hidden md:flex items-center">
              <motion.a
                id="navbar-call-now-button"
                href="tel:+918810660831"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 py-2.5 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-full text-xs font-bold shadow-md transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 transition-all duration-200 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu-drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-harmony-dark border-t border-harmony-teal/25 overflow-hidden shadow-xl"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center justify-between px-5 py-3.5 rounded-2xl text-base font-bold transition-all duration-300 ${
                      isActive(item.path)
                        ? "bg-harmony-turquoise/20 text-white border border-harmony-turquoise/30 shadow-xs"
                        : "text-slate-200 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isActive(item.path) ? "translate-x-1" : "opacity-0"}`} />
                  </Link>
                ))}
                <div className="pt-4 px-4 border-t border-harmony-teal/20">
                  <a
                    href="tel:+918810660831"
                    className="w-full py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all duration-300 hover:from-pink-600 hover:to-rose-600"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now: +91 88106 60831</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Active Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/15 pointer-events-none">
          <div
            className="h-full bg-primary transition-all duration-100 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </nav>
    </>
  );
}
