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

      {/* FLUID MAIN CONTENT AREA WITH NATURAL VERTICAL RHYTHM */}
      <div className="py-16 md:py-24 space-y-20 md:space-y-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* 2. KEY SERVICE BENEFITS WITH STRUCTURED BULLETED LISTS */}
        <KeyBenefits />

        {/* 3. FLUID INFRASTRUCTURE & OPERATIONAL CAPABILITIES SHOWCASE */}
        <section id="infrastructure-capabilities-section" className="space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-harmony-cream border border-harmony-teal/25 text-primary rounded-full text-xs font-bold tracking-wider uppercase shadow-3xs">
              <Pill className="w-3.5 h-3.5 text-primary animate-pulse" />
              <span>Pharmaceutical Supply Hub</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-harmony-dark tracking-tight font-display leading-tight">
              A Resilient, High-Performance Infrastructure
            </h2>
            <p className="text-harmony-dark/85 text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed">
              Explore our WHO-GDP compliant distribution networks, audited clinical depots, and ethical operations designed for seamless hospital and institutional supply.
            </p>
          </div>

          {/* Fluid Layout Flow */}
          <div className="space-y-8">
            
            {/* 1. HERO FACILITY SPOTLIGHT & CORPORATE NARRATIVE */}
            <motion.div
              id="facility-spotlight-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-harmony-card p-6 sm:p-10 md:p-12 rounded-3xl border border-harmony-teal/15 shadow-sm hover:border-harmony-teal/35 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <div className="w-full lg:w-7/12 space-y-5 text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-harmony-cream border border-harmony-teal/20 text-primary rounded-full text-xs font-bold uppercase tracking-wide">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Corporate Operations</span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-harmony-dark tracking-tight font-display leading-tight">
                    Connecting Global Sourcing with Local Clinical Excellence
                  </h3>
                  
                  <p className="text-harmony-dark/85 text-sm sm:text-base leading-relaxed font-normal">
                    RS Pharma operates as an established, regulated pharmaceutical wholesale partner. We bridge the gap between global manufacturers and regional clinical trial centers, hospitals, and pharmacies, ensuring absolute authenticity and rapid delivery.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Link
                      to="/about"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-xl text-xs font-bold shadow-xs hover:shadow-md transition-all duration-200 group/link cursor-pointer"
                    >
                      <span>Learn More About Us</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform duration-200" />
                    </Link>

                    <span className="text-xs font-semibold text-harmony-dark/70 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      WHO-GDP Certified Depots
                    </span>
                  </div>
                </div>

                <div className="w-full lg:w-5/12">
                  <div className="relative rounded-2xl overflow-hidden border border-harmony-teal/15 aspect-16/10 shadow-sm group">
                    <img
                      src="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80"
                      alt="RS Pharma modern sterile laboratory equipment"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5">
                      <div className="text-white space-y-0.5">
                        <p className="text-xs font-bold tracking-wide font-sans">
                          Verified WHO-GDP Storage Facilities
                        </p>
                        <p className="text-[10px] text-white/80">
                          Climate-controlled staging & batch verification
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. FOUR CORE OPERATIONAL PILLARS (FLUID RESPONSIVE ROW) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              
              {/* PILLAR 1: QUALITY MEDICINES */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-harmony-card p-6 rounded-2xl border border-harmony-teal/15 shadow-xs hover:border-harmony-teal/35 transition-all duration-300 flex flex-col justify-between group text-left space-y-4"
              >
                <div className="space-y-3">
                  <div className="p-3 bg-harmony-bg text-primary rounded-xl inline-block border border-harmony-teal/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Award className="w-5 h-5 text-harmony-dark/80 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-harmony-dark font-display group-hover:text-primary transition-colors duration-300">
                      Quality Medicines
                    </h4>
                    <p className="text-[10px] text-harmony-mint font-bold uppercase tracking-wider mt-0.5">
                      WHO-GMP Certified
                    </p>
                  </div>
                  <p className="text-harmony-dark/80 text-xs leading-relaxed font-normal">
                    Sourced exclusively from audited manufacturers holding active WHO-GMP, FDA, or ISO accreditations.
                  </p>
                </div>
              </motion.div>

              {/* PILLAR 2: RELIABLE DISTRIBUTION */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-harmony-card p-6 rounded-2xl border border-harmony-teal/15 shadow-xs hover:border-harmony-teal/35 transition-all duration-300 flex flex-col justify-between group text-left space-y-4"
              >
                <div className="space-y-3">
                  <div className="p-3 bg-harmony-bg text-primary rounded-xl inline-block border border-harmony-teal/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Truck className="w-5 h-5 text-harmony-dark/80 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-harmony-dark font-display group-hover:text-primary transition-colors duration-300">
                      Cold Chain Logistics
                    </h4>
                    <p className="text-[10px] text-harmony-mint font-bold uppercase tracking-wider mt-0.5">
                      2°C to 8°C Monitored
                    </p>
                  </div>
                  <p className="text-harmony-dark/80 text-xs leading-relaxed font-normal">
                    Active cold-chain telemetry ensures delicate biologicals stay strictly within compliant thermal brackets.
                  </p>
                </div>
              </motion.div>

              {/* PILLAR 3: EXPERIENCED TEAM */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                whileHover={{ y: -4 }}
                className="bg-harmony-card p-6 rounded-2xl border border-harmony-teal/15 shadow-xs hover:border-harmony-teal/35 transition-all duration-300 flex flex-col justify-between group text-left space-y-4"
              >
                <div className="space-y-3">
                  <div className="p-3 bg-harmony-bg text-primary rounded-xl inline-block border border-harmony-teal/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Users className="w-5 h-5 text-harmony-dark/80 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-harmony-dark font-display group-hover:text-primary transition-colors duration-300">
                      Expert Pharmacists
                    </h4>
                    <p className="text-[10px] text-harmony-mint font-bold uppercase tracking-wider mt-0.5">
                      GDP Guidelines
                    </p>
                  </div>
                  <p className="text-harmony-dark/80 text-xs leading-relaxed font-normal">
                    Supervised by licensed clinical logisticians ensuring precise regulatory adherence and handling.
                  </p>
                </div>
              </motion.div>

              {/* PILLAR 4: DEDICATED SUPPORT */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                whileHover={{ y: -4 }}
                className="bg-harmony-card p-6 rounded-2xl border border-harmony-teal/15 shadow-xs hover:border-harmony-teal/35 transition-all duration-300 flex flex-col justify-between group text-left space-y-4"
              >
                <div className="space-y-3">
                  <div className="p-3 bg-harmony-bg text-primary rounded-xl inline-block border border-harmony-teal/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <HeartHandshake className="w-5 h-5 text-harmony-dark/80 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-harmony-dark font-display group-hover:text-primary transition-colors duration-300">
                      Dedicated Support
                    </h4>
                    <p className="text-[10px] text-harmony-mint font-bold uppercase tracking-wider mt-0.5">
                      24/7 Sourcing Help
                    </p>
                  </div>
                  <p className="text-harmony-dark/80 text-xs leading-relaxed font-normal">
                    Dedicated account specialists coordinating bulk hospital paperwork and urgent order clearance.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* 3. FLUID DUAL HIGHLIGHT CARDS: INTEGRITY & DIRECT SOURCING */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* CARD A: ABSOLUTE INTEGRITY & RESILIENCE */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-harmony-card p-6 sm:p-8 rounded-3xl border border-harmony-teal/15 shadow-xs hover:border-harmony-teal/35 transition-all duration-300 flex flex-col justify-between text-left space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-harmony-bg text-primary rounded-xl border border-harmony-teal/10">
                      <Scale className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-harmony-dark font-display">
                        Absolute Integrity & Patient Safeguards
                      </h4>
                      <p className="text-xs text-harmony-mint font-bold uppercase tracking-wider">
                        Zero-Tolerance Anti-Counterfeit Policy
                      </p>
                    </div>
                  </div>

                  <p className="text-harmony-dark/85 text-sm leading-relaxed font-normal">
                    We strictly uphold ethical wholesale standards, full DSCA batch traceability, and non-counterfeit procurement. Every vial, blister, and ampoule distributed through our channel is verified against manufacturer records to safeguard patient health.
                  </p>
                </div>

                <div className="pt-4 border-t border-harmony-teal/10 flex items-center justify-between text-xs text-harmony-dark/80">
                  <span className="font-semibold flex items-center gap-1.5 text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    100% Verified Batch Origin
                  </span>
                  <Link to="/about" className="text-primary hover:text-primary-hover font-bold inline-flex items-center gap-1">
                    <span>Read Policy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>

              {/* CARD B: DIRECT SOURCING & EXPRESS FREIGHT */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-harmony-card p-6 sm:p-8 rounded-3xl border border-harmony-teal/15 shadow-xs hover:border-harmony-teal/35 transition-all duration-300 flex flex-col justify-between text-left space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-harmony-bg text-primary rounded-xl border border-harmony-teal/10">
                      <Tag className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-harmony-dark font-display">
                        Direct Sourcing & Express Freight
                      </h4>
                      <p className="text-xs text-harmony-mint font-bold uppercase tracking-wider">
                        Zero Intermediary Inflation
                      </p>
                    </div>
                  </div>

                  <p className="text-harmony-dark/85 text-sm leading-relaxed font-normal">
                    By partnering directly with pharmaceutical manufacturers like Senores Pharmaceuticals and Concord Biotech, we eliminate middleman markups. We map express transit routes daily to prevent ICU and clinical trial stockouts.
                  </p>
                </div>

                <div className="pt-4 border-t border-harmony-teal/10 flex items-center justify-between text-xs text-harmony-dark/80">
                  <span className="font-semibold flex items-center gap-1.5 text-primary">
                    <Clock className="w-4 h-4 text-primary" />
                    Emergency Hospital Dispatch Available
                  </span>
                  <Link to="/products" className="text-primary hover:text-primary-hover font-bold inline-flex items-center gap-1">
                    <span>View Pricing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* 4. FLUID LIVE DEPOT TELEMETRY & COMPLIANCE STRIP */}
            <motion.div
              id="depot-live-telemetry-banner"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-harmony-dark via-slate-900 to-harmony-dark text-white p-6 sm:p-8 rounded-3xl border border-white/10 shadow-lg relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3.5 w-3.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest font-mono">
                      Gwalior HQ Logistics Depot Live
                    </span>
                    <span className="text-[10px] font-mono text-white/70 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
                      Wholesale-819-A
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-white font-display">
                    PAN-India Verified Distribution Network
                  </h4>
                  <p className="text-xs sm:text-sm text-harmony-cream/80 max-w-xl font-normal">
                    Active temperature-monitored distribution supporting hospitals, healthcare facilities, and accredited institutions across all Indian states.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6 self-stretch lg:self-auto justify-between lg:justify-end border-t lg:border-t-0 border-white/10 pt-4 lg:pt-0">
                  <div className="text-center px-4 py-2 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-xl font-black text-harmony-turquoise font-display">100%</p>
                    <p className="text-[10px] text-white/70 uppercase tracking-wider font-semibold">DSCA Lineage</p>
                  </div>

                  <div className="text-center px-4 py-2 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-xl font-black text-harmony-mint font-display">2-8°C</p>
                    <p className="text-[10px] text-white/70 uppercase tracking-wider font-semibold">Active Cold Chain</p>
                  </div>

                  <div className="text-center px-4 py-2 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-xl font-black text-harmony-cream font-display">All States</p>
                    <p className="text-[10px] text-white/70 uppercase tracking-wider font-semibold">PAN India</p>
                  </div>

                  <Link
                    to="/contact"
                    className="px-5 py-3 bg-primary hover:bg-primary-hover text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-2 shrink-0"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
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

