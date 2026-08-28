import React from "react";
import { Link } from "react-router-dom";
import { motion, Variants } from "motion/react";
import {
  ArrowRight,
  ShieldCheck,
  Heart,
  Sparkles,
  Scale,
  Award,
  Truck,
  Users,
  HeartHandshake,
  Tag,
  Clock,
  Pill,
  Activity,
  Globe,
  CheckCircle2,
  MessageSquare,
  Package
} from "lucide-react";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import KeyBenefits from "../components/KeyBenefits";
import FAQSection from "../components/FAQSection";
import CTA from "../components/CTA";
import { FEATURED_PRODUCTS, PRODUCTS } from "../data/products";

export default function Home() {
  // Container variants for stagger animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  // Individual card animation variant
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <motion.div
      id="home-page-container"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-0"
    >
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 1B. PROMINENT TRUST INDICATORS & PARTNERSHIP BAR */}
      <TrustBar />

      {/* PAGE WRAPPER WITH GRID PATTERN */}
      <div className="bg-grid-pattern py-16 md:py-24 space-y-16 md:space-y-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* 2. KEY SERVICE BENEFITS WITH STRUCTURED BULLETED LISTS */}
        <KeyBenefits />

        {/* 3. MASTER COHESIVE BENTO GRID SECTION */}
        <section id="master-bento-section" className="space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-harmony-cream border border-harmony-teal/25 text-primary rounded-full text-xs font-bold tracking-wider uppercase shadow-3xs">
              <Pill className="w-3.5 h-3.5 text-primary animate-pulse" />
              <span>Pharmaceutical Supply Hub</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-harmony-dark tracking-tight font-display leading-tight">
              A Resilient, High-Performance Infrastructure
            </h2>
            <p className="text-harmony-dark/85 text-sm sm:text-base font-normal max-w-2xl mx-auto">
              Explore our WHO-GDP compliant distribution networks, audited clinical depots, and ethical operations structured within a unified, multi-dimensional grid.
            </p>
          </div>

          {/* Master Bento Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 auto-rows-auto"
          >
            
            {/* CARD 1: ABOUT RS PHARMA (MEGA CARD - Span 2 Cols, 2 Rows on lg) */}
            <motion.div
              id="bento-card-about"
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: "0 25px 45px -15px rgba(2, 195, 154, 0.15), 0 10px 20px -10px rgba(2, 195, 154, 0.05)",
              }}
              className="lg:col-span-2 lg:row-span-2 md:col-span-2 col-span-1 bg-harmony-card p-6 sm:p-8 rounded-3xl border border-harmony-teal/15 shadow-sm hover:border-harmony-teal/35 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-harmony-dark via-harmony-teal to-harmony-turquoise transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-harmony-cream border border-harmony-teal/20 text-primary rounded-full text-xs font-bold uppercase tracking-wide">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Corporate Operations</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-harmony-dark tracking-tight font-display leading-tight">
                  Connecting Global Sourcing with Local Clinical Excellence
                </h3>
                
                <p className="text-harmony-dark/85 text-sm sm:text-base leading-relaxed font-normal">
                  RS Pharma operates as an established, regulated pharmaceutical wholesale partner. We bridge the gap between global manufacturers and regional clinical trial centers, hospitals, and pharmacies, ensuring absolute authenticity and rapid delivery.
                </p>

                <div className="relative rounded-2xl overflow-hidden border border-harmony-teal/10 aspect-video w-full mt-4 group-hover:border-primary/20 transition-all duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80"
                    alt="RS Pharma modern sterile laboratory equipment"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-4">
                    <p className="text-white text-xs font-bold tracking-wide font-sans">
                      Verified WHO-GDP Storage Facilities
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-xl text-xs font-bold shadow-xs hover:shadow-md transition-all duration-200 group/link cursor-pointer"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </motion.div>

            {/* CARD 2: QUALITY MEDICINES */}
            <motion.div
              id="bento-card-quality-medicines"
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: "0 25px 45px -15px rgba(2, 195, 154, 0.15)",
              }}
              className="lg:col-span-1 md:col-span-1 col-span-1 bg-harmony-card p-6 sm:p-8 rounded-3xl border border-harmony-teal/15 shadow-sm hover:border-harmony-teal/35 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-harmony-dark to-harmony-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="space-y-4">
                <div className="p-3 bg-harmony-bg text-primary rounded-xl inline-block border border-harmony-teal/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Award className="w-6 h-6 text-harmony-dark/80 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-harmony-dark font-display group-hover:text-primary transition-colors duration-300">
                    Quality Medicines
                  </h4>
                  <p className="text-[10px] text-harmony-mint font-bold uppercase tracking-wider mt-0.5">
                    WHO-GMP Certified
                  </p>
                </div>
                
                <p className="text-harmony-dark/80 text-sm leading-relaxed font-normal">
                  Sourced exclusively from heavily audited manufacturers holding active WHO-GMP, FDA, or ISO accreditations.
                </p>
              </div>
            </motion.div>

            {/* CARD 3: RELIABLE DISTRIBUTION */}
            <motion.div
              id="bento-card-reliable-distribution"
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: "0 25px 45px -15px rgba(2, 195, 154, 0.15)",
              }}
              className="lg:col-span-1 md:col-span-1 col-span-1 bg-harmony-card p-6 sm:p-8 rounded-3xl border border-harmony-teal/15 shadow-sm hover:border-harmony-teal/35 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-harmony-teal to-harmony-mint transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="space-y-4">
                <div className="p-3 bg-harmony-bg text-primary rounded-xl inline-block border border-harmony-teal/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Truck className="w-6 h-6 text-harmony-dark/80 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-harmony-dark font-display group-hover:text-primary transition-colors duration-300">
                    Reliable Distribution
                  </h4>
                  <p className="text-[10px] text-harmony-mint font-bold uppercase tracking-wider mt-0.5">
                    Continuous Temperature Logs
                  </p>
                </div>
                
                <p className="text-harmony-dark/80 text-sm leading-relaxed font-normal">
                  Advanced cold-chain monitoring ensures delicate pharmaceutical cargo stays within absolute compliant brackets.
                </p>
              </div>
            </motion.div>

            {/* CARD 4: EXPERIENCED TEAM */}
            <motion.div
              id="bento-card-experienced-team"
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: "0 25px 45px -15px rgba(2, 195, 154, 0.15)",
              }}
              className="lg:col-span-1 md:col-span-1 col-span-1 bg-harmony-card p-6 sm:p-8 rounded-3xl border border-harmony-teal/15 shadow-sm hover:border-harmony-teal/35 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-harmony-mint to-harmony-turquoise transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="space-y-4">
                <div className="p-3 bg-harmony-bg text-primary rounded-xl inline-block border border-harmony-teal/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Users className="w-6 h-6 text-harmony-dark/80 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-harmony-dark font-display group-hover:text-primary transition-colors duration-300">
                    Experienced Board
                  </h4>
                  <p className="text-[10px] text-harmony-mint font-bold uppercase tracking-wider mt-0.5">
                    GDP Guidelines
                  </p>
                </div>
                
                <p className="text-harmony-dark/80 text-sm leading-relaxed font-normal">
                  Led by expert pharmacists and clinical logistical operators specialized in safe Good Distribution Practices.
                </p>
              </div>
            </motion.div>

            {/* CARD 5: DEDICATED CUSTOMER CARE */}
            <motion.div
              id="bento-card-customer-care"
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: "0 25px 45px -15px rgba(2, 195, 154, 0.15)",
              }}
              className="lg:col-span-1 md:col-span-1 col-span-1 bg-harmony-card p-6 sm:p-8 rounded-3xl border border-harmony-teal/15 shadow-sm hover:border-harmony-teal/35 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-harmony-turquoise to-harmony-cream transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="space-y-4">
                <div className="p-3 bg-harmony-bg text-primary rounded-xl inline-block border border-harmony-teal/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <HeartHandshake className="w-6 h-6 text-harmony-dark/80 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-harmony-dark font-display group-hover:text-primary transition-colors duration-300">
                    Dedicated Support
                  </h4>
                  <p className="text-[10px] text-harmony-mint font-bold uppercase tracking-wider mt-0.5">
                    24/7 Sourcing Help
                  </p>
                </div>
                
                <p className="text-harmony-dark/80 text-sm leading-relaxed font-normal">
                  Sourcing agents standing by to coordinate high-volume procurement paperwork and urgent custom order clearance.
                </p>
              </div>
            </motion.div>

            {/* CARD 6: CORE VALUE - INTEGRITY */}
            <motion.div
              id="bento-card-integrity"
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: "0 25px 45px -15px rgba(2, 195, 154, 0.15)",
              }}
              className="lg:col-span-1 md:col-span-1 col-span-1 bg-harmony-card p-6 sm:p-8 rounded-3xl border border-harmony-teal/15 shadow-sm hover:border-harmony-teal/35 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-harmony-dark to-harmony-cream transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="space-y-4">
                <div className="p-3 bg-harmony-bg text-primary rounded-xl inline-block border border-harmony-teal/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Scale className="w-6 h-6 text-harmony-dark/80 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-harmony-dark font-display group-hover:text-primary transition-colors duration-300">
                    Absolute Integrity
                  </h4>
                  <p className="text-[10px] text-harmony-mint font-bold uppercase tracking-wider mt-0.5">
                    Core Philosophy
                  </p>
                </div>
                
                <p className="text-harmony-dark/80 text-sm leading-relaxed font-normal">
                  Strictly adhering to ethical contracts, non-counterfeit sourcing, and legal drug-distribution compliance.
                </p>
              </div>
            </motion.div>

            {/* CARD 7: CORE VALUE - RESILIENCE & TRUST */}
            <motion.div
              id="bento-card-trust"
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: "0 25px 45px -15px rgba(2, 195, 154, 0.15)",
              }}
              className="lg:col-span-1 md:col-span-1 col-span-1 bg-harmony-card p-6 sm:p-8 rounded-3xl border border-harmony-teal/15 shadow-sm hover:border-harmony-teal/35 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-harmony-teal via-harmony-mint to-harmony-turquoise transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="space-y-4">
                <div className="p-3 bg-harmony-bg text-primary rounded-xl inline-block border border-harmony-teal/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Heart className="w-6 h-6 text-harmony-dark/80 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-harmony-dark font-display group-hover:text-primary transition-colors duration-300">
                    Supply Resilience
                  </h4>
                  <p className="text-[10px] text-harmony-mint font-bold uppercase tracking-wider mt-0.5">
                    Patient Safeguards
                  </p>
                </div>
                
                <p className="text-harmony-dark/80 text-sm leading-relaxed font-normal">
                  We verify tracking lineages from point of manufacture to ensure 100% genuine bio-pharma distribution.
                </p>
              </div>
            </motion.div>

            {/* CARD 8: COMPETITIVE SOURCING (Span 2 Cols on lg) */}
            <motion.div
              id="bento-card-pricing"
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: "0 25px 45px -15px rgba(2, 195, 154, 0.15)",
              }}
              className="lg:col-span-2 md:col-span-2 col-span-1 bg-harmony-card p-6 sm:p-8 rounded-3xl border border-harmony-teal/15 shadow-sm hover:border-harmony-teal/35 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-harmony-dark to-harmony-turquoise transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-harmony-bg text-primary rounded-xl inline-block border border-harmony-teal/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Tag className="w-6 h-6 text-harmony-dark/80 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-harmony-dark font-display group-hover:text-primary transition-colors duration-300">
                      Competitive Pricing & direct sourcing
                    </h4>
                    <p className="text-xs text-harmony-mint font-bold uppercase tracking-wider">
                      Zero Intermediary Inflation
                    </p>
                  </div>
                </div>
                
                <p className="text-harmony-dark/85 text-sm leading-relaxed font-normal pt-2">
                  By executing multi-year direct procurement agreements with major manufacturers internationally, we cut out speculative middlemen. This solidifies stable, transparent, and fair pricing which we pass directly on to hospital cooperatives and procurement groups.
                </p>
              </div>
            </motion.div>

            {/* CARD 9: TIMELY DELIVERY (Span 2 Cols on lg) */}
            <motion.div
              id="bento-card-delivery"
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: "0 25px 45px -15px rgba(2, 195, 154, 0.15)",
              }}
              className="lg:col-span-2 md:col-span-2 col-span-1 bg-harmony-card p-6 sm:p-8 rounded-3xl border border-harmony-teal/15 shadow-sm hover:border-harmony-teal/35 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-harmony-teal via-harmony-mint to-harmony-turquoise transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-harmony-bg text-primary rounded-xl inline-block border border-harmony-teal/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Clock className="w-6 h-6 text-harmony-dark/80 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-harmony-dark font-display group-hover:text-primary transition-colors duration-300">
                      Express Freight & Outage Prevention
                    </h4>
                    <p className="text-xs text-harmony-mint font-bold uppercase tracking-wider">
                      Zero-Loss Cold Transport
                    </p>
                  </div>
                </div>
                
                <p className="text-harmony-dark/85 text-sm leading-relaxed font-normal pt-2">
                  We map express transit corridors daily to safeguard delicate therapeutic inventory. Our delivery dispatch team ensures critical therapeutics bypass standard logistical congestion, arriving on schedule with 100% active, verified temperature-log validation tags.
                </p>
              </div>
            </motion.div>

            {/* CARD 10: REAL-TIME OPERATIONAL HUB (Span 2 Cols on lg) */}
            <motion.div
              id="bento-card-realtime-tracker"
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: "0 25px 45px -15px rgba(2, 195, 154, 0.15)",
              }}
              className="lg:col-span-2 md:col-span-2 col-span-1 bg-harmony-card p-6 sm:p-8 rounded-3xl border border-harmony-teal/15 shadow-sm hover:border-harmony-teal/35 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden text-left"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-harmony-dark to-harmony-mint transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3.5 w-3.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-bold text-harmony-dark font-sans uppercase tracking-wider">
                      Gwalior HQ Depot Live
                    </span>
                  </div>
                  <div className="text-[10px] font-bold text-primary font-mono tracking-wider bg-harmony-cream px-2 py-0.5 rounded border border-harmony-teal/20">
                    License No: Wholesale-819-A
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-harmony-dark font-display">
                    National Distribution Compliance
                  </h4>
                  <p className="text-xs text-harmony-dark/75">
                    Climate controlled corridors tracking and batch security protocols
                  </p>
                </div>

                {/* Sub-Bento Info Grid inside Card 10 */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="bg-harmony-bg/60 p-3.5 rounded-2xl border border-harmony-teal/10 text-center">
                    <p className="text-lg font-extrabold text-primary">100%</p>
                    <p className="text-[10px] text-harmony-dark/75 mt-0.5 font-medium uppercase tracking-wider">
                      DSCA Lineage
                    </p>
                  </div>
                  <div className="bg-harmony-bg/60 p-3.5 rounded-2xl border border-harmony-teal/10 text-center">
                    <p className="text-lg font-extrabold text-primary">2-8°C</p>
                    <p className="text-[10px] text-harmony-dark/75 mt-0.5 font-medium uppercase tracking-wider">
                      Active Cold Chain
                    </p>
                  </div>
                  <div className="bg-harmony-bg/60 p-3.5 rounded-2xl border border-harmony-teal/10 text-center">
                    <p className="text-lg font-extrabold text-primary">All States</p>
                    <p className="text-[10px] text-harmony-dark/75 mt-0.5 font-medium uppercase tracking-wider">
                      PAN India Delivery
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-harmony-teal/10 flex items-center justify-between text-xs text-harmony-dark/80">
                <span className="font-semibold flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-harmony-mint" />
                  India Wholesale Grid Active
                </span>
                <Link to="/contact" className="text-primary hover:text-primary-hover font-bold inline-flex items-center gap-1 group/btn">
                  <span>Contact Now</span>
                  <ArrowRight className="w-3 h-3 transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

          </motion.div>
        </section>

        {/* 3. FEATURED PRODUCTS HIGHLIGHT SECTION */}
        <section id="featured-products-section" className="space-y-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-harmony-teal/15 pb-6">
            <div className="space-y-3 max-w-2xl text-left">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-harmony-cream border border-harmony-teal/20 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                <Package className="w-3.5 h-3.5" />
                <span>Essential Formulary Highlights</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-harmony-dark tracking-tight font-display leading-tight">
                Featured Critical Care Therapeutics
              </h2>
              <p className="text-harmony-dark/80 text-sm sm:text-base font-normal">
                Direct wholesale pricing on high-volume ICU, plasma, and specialty formulations supplied by R S Pharma and Senores Pharmaceuticals Limited.
              </p>
            </div>

            <Link
              id="view-all-products-top-btn"
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-xl text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all group shrink-0"
            >
              <span>View All {PRODUCTS.length}+ Products</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 3 Featured Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {FEATURED_PRODUCTS.slice(0, 3).map((product) => {
              const savingsPct = Math.round(((product.mrp - product.wholesalePrice) / product.mrp) * 100);

              return (
                <motion.div
                  key={product.id}
                  whileHover={{ y: -6, boxShadow: "0 20px 35px -10px rgba(2, 195, 154, 0.15)" }}
                  className="bg-harmony-card border border-harmony-teal/20 rounded-3xl p-6 shadow-xs hover:border-harmony-teal/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden text-left"
                >
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-harmony-dark via-primary to-harmony-turquoise" />

                  <div className="space-y-4">
                    {/* Badge & Category */}
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-harmony-cream text-primary border border-harmony-teal/20 rounded-full text-[11px] font-bold uppercase tracking-wider">
                        {product.category}
                      </span>
                      {product.badge && (
                        <span className="px-2.5 py-0.5 bg-amber-100 text-amber-800 rounded-md text-[10px] font-bold uppercase tracking-wider">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <div>
                      <Link
                        to={`/product/${product.id}`}
                        className="text-lg font-extrabold text-harmony-dark font-display group-hover:text-primary transition-colors leading-tight block"
                      >
                        {product.brandName}
                      </Link>
                      <p className="text-xs text-harmony-dark/80 mt-1 line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                      <div className="bg-harmony-bg/80 p-2.5 rounded-xl border border-harmony-teal/10">
                        <span className="text-[10px] text-harmony-dark/60 block font-semibold uppercase">Strength</span>
                        <span className="font-bold text-harmony-dark">{product.strength}</span>
                      </div>
                      <div className="bg-harmony-bg/80 p-2.5 rounded-xl border border-harmony-teal/10">
                        <span className="text-[10px] text-harmony-dark/60 block font-semibold uppercase">Packaging</span>
                        <span className="font-bold text-harmony-dark truncate block">{product.packaging}</span>
                      </div>
                    </div>

                    {/* Pricing Box */}
                    <div className="bg-harmony-cream/70 border border-harmony-teal/20 rounded-2xl p-3.5 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-harmony-dark/60 block font-bold uppercase">Wholesale Price</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl font-black text-primary">₹{product.wholesalePrice}</span>
                          <span className="text-[10px] text-harmony-dark/60">+{product.gstPct}% GST</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[11px] text-harmony-dark/50 block line-through">MRP: ₹{product.mrp}</span>
                        <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                          Save {savingsPct}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-5 mt-4 border-t border-harmony-teal/10 flex items-center gap-2">
                    <Link
                      to={`/product/${product.id}`}
                      className="flex-1 py-2.5 px-3 bg-harmony-bg hover:bg-harmony-teal/15 text-harmony-dark border border-harmony-teal/20 rounded-xl text-xs font-bold transition-all text-center"
                    >
                      View Details
                    </Link>
                    <a
                      href={`https://wa.me/918810660831?text=${encodeURIComponent(`Hello RS Pharma, I would like to inquire about wholesale order for ${product.brandName} (${product.description}).`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-3 bg-primary hover:bg-primary-hover text-white rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 shadow-2xs"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Inquire</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Callout Banner for Full Catalog */}
          <div className="bg-harmony-card border border-harmony-teal/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
            <div className="flex items-center gap-3 text-left">
              <div className="p-3 bg-harmony-cream text-primary rounded-2xl border border-harmony-teal/20 shrink-0">
                <Pill className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-harmony-dark font-display">
                  Looking for additional formulations?
                </h4>
                <p className="text-xs text-harmony-dark/75">
                  Browse our full list of {PRODUCTS.length}+ WHO-GMP certified antibiotics, antivirals, gastroenterology, and ICU infusions with instant search & filter controls.
                </p>
              </div>
            </div>

            <Link
              id="view-all-products-bottom-btn"
              to="/products"
              className="px-5 py-2.5 bg-harmony-dark hover:bg-slate-900 text-white rounded-xl text-xs font-bold shrink-0 transition-all flex items-center gap-2"
            >
              <span>Explore Complete Catalog</span>
              <ArrowRight className="w-3.5 h-3.5 text-harmony-turquoise" />
            </Link>
          </div>
        </section>

        {/* 4. FAQ SECTION */}
        <FAQSection />

        {/* 4. CTA SECTION */}
        <CTA />

      </div>
    </motion.div>
  );
}

