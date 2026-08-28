/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Certificates from "./pages/Certificates";
import LoadingScreen from "./components/LoadingScreen";
import FloatingButtons from "./components/FloatingButtons";

// Utility component to reset scroll position on page transition
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Router-aware container component to orchestrate page-level fade/slide transitions
function AnimatedAppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="flex flex-col flex-grow"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback routing */}
          <Route path="*" element={<Home />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent body scroll during the interactive loading screen
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [loading]);

  return (
    <>
      {/* 1. PREMIUM BRAND LOADING SCREEN */}
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {/* 2. CORE SYSTEM INFRASTRUCTURE */}
      <Router>
        <ScrollToTop />
        <div id="app-root-layout" className="min-h-screen flex flex-col bg-slate-50/10">
          
          {/* Navigation bar persistent */}
          <Navbar />

          {/* Core page contents (routes nested inside AnimatePresence) */}
          <main className="flex-grow flex flex-col">
            <AnimatedAppRoutes />
          </main>

          {/* Global corporate footer */}
          <Footer />

          {/* Floating Action Buttons (WhatsApp, Mobile Call, Back-to-Top) */}
          <FloatingButtons />

        </div>
      </Router>
    </>
  );
}
