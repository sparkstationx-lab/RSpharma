import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Compass, Eye, ShieldCheck, Milestone, TrendingUp, Sparkles, PhoneCall, Shield, Award, CheckCircle, FileText } from "lucide-react";

const timelineEvents = [
  {
    year: "2018",
    title: "Founding & Licensing",
    description: "RS Pharma was established with a certified wholesale license, partnering with top-tier global pharmaceutical manufacturers.",
  },
  {
    year: "2020",
    title: "Cold-Chain Expansion",
    description: "Commissioned a state-of-the-art cold-storage distribution depot, adding temperature-critical biologics and vaccines.",
  },
  {
    year: "2022",
    title: "FDA & WHO-GDP Registration",
    description: "Acquired official Good Distribution Practice (GDP) certification and passed thorough audits with perfect compliance metrics.",
  },
  {
    year: "2024",
    title: "National Network Deployment",
    description: "Opened regional logistic depots in Houston and Atlanta, reducing regional emergency transit times by 40%.",
  },
  {
    year: "2026",
    title: "Digital Sourcing Integration",
    description: "Rolled out client portal integration, enabling real-time batch checks, temperature telemetry logs, and online ordering.",
  },
];

const accreditations = [
  {
    title: "WHO-GDP Compliant",
    code: "REG #940-GDP",
    desc: "Good Distribution Practice certified for safe pharmaceutical handling and storage.",
    icon: ShieldCheck,
    color: "from-harmony-dark to-harmony-teal"
  },
  {
    title: "FDA Registered",
    code: "FED LICENSE #8139",
    desc: "Formally registered wholesaler compliant with national health safety mandates.",
    icon: Milestone,
    color: "from-harmony-teal to-harmony-mint"
  },
  {
    title: "Cold-Chain Certified",
    code: "THERMO #204-CC",
    desc: "Rigorous thermal mapping validation for sensitive biologics and insulin products.",
    icon: Compass,
    color: "from-harmony-mint to-harmony-turquoise"
  },
  {
    title: "Traceability Compliant",
    code: "DSCSA Compliant",
    desc: "Full electronic product tracking in accordance with the Drug Supply Chain Security Act.",
    icon: Award,
    color: "from-harmony-turquoise to-harmony-cream"
  }
];

export default function About() {
  return (
    <motion.div
      id="about-page-container"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-0"
    >
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-tr from-slate-950 via-harmony-dark to-harmony-teal text-white">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0 bg-radial-gradient from-harmony-turquoise/30 via-transparent to-transparent pointer-events-none" 
        />
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-xs text-harmony-cream rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/5"
          >
            <Sparkles className="w-3.5 h-3.5 text-harmony-turquoise" />
            <span>Discover Our Story</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 font-display text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-harmony-cream"
          >
            About RS Pharma
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto"
          >
            A premier pharmaceutical wholesaler committed to providing flawless, safe, and efficient global therapeutic supply networks.
          </motion.p>
        </div>
      </section>

      {/* PAGE WRAPPER WITH GRID PATTERN FOR ALL SUBSEQUENT SECTIONS */}
      <div className="bg-grid-pattern py-12 md:py-20 space-y-12 md:space-y-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* 2. COMPANY INTRODUCTION - FLOATING CARD */}
        <section id="company-introduction-section" className="floating-section-card p-6 sm:p-10 md:p-14 lg:p-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Detailed Intro Text */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-harmony-dark tracking-tight font-display leading-tight">
                  Dedicated to Safeguarding Patient Health through Logistic Excellence
                </h2>
                <p className="text-harmony-dark/85 leading-relaxed text-sm sm:text-base font-normal">
                  At RS Pharma, we operate with a singular, high-responsibility purpose: to distribute lifesaving pharmaceuticals safely, transparently, and swiftly. We coordinate with healthcare clinics, nursing centers, global clinical trial organizers, and retail pharmacy franchises, providing standard and complex supply chain support.
                </p>
                <p className="text-harmony-dark/85 leading-relaxed text-sm sm:text-base font-normal">
                  We understand that every shipment contains critical, patient-essential therapeutics. That is why we mandate strict environmental monitoring inside our cargo vans, utilize state-of-the-art batch separation in our climate-controlled warehouses, and execute comprehensive product origin screening to ensure 100% genuine medical supplies.
                </p>
                
                {/* Trust Indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start gap-4 bg-harmony-bg p-5 rounded-2xl border border-harmony-teal/15 shadow-xs">
                    <div className="p-2.5 bg-harmony-cream text-primary rounded-xl shrink-0 border border-harmony-teal/10">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-harmony-dark text-sm font-display">WHO-GDP Complaint</h4>
                      <p className="text-xs text-harmony-dark/75 mt-1 font-normal">Strict quality standards in distribution.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-harmony-bg p-5 rounded-2xl border border-harmony-teal/15 shadow-xs">
                    <div className="p-2.5 bg-harmony-cream text-primary rounded-xl shrink-0 border border-harmony-teal/10">
                      <Milestone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-harmony-dark text-sm font-display">FDA Registered Depots</h4>
                      <p className="text-xs text-harmony-dark/75 mt-1 font-normal font-sans">Licensed and certified clinical depots.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Illustration / Image Placeholders */}
              <div className="lg:col-span-5 relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl pointer-events-none" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-harmony-teal/15 bg-harmony-card p-2">
                  <img
                    src="https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=800&q=80"
                    alt="RS Pharma research analyst working in safe medical environment"
                    referrerPolicy="no-referrer"
                    className="rounded-2xl w-full object-cover aspect-square hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. MISSION & VISION SECTION - FLOATING CARD */}
        <section id="mission-vision-section" className="floating-section-card p-6 sm:p-10 md:p-14 lg:p-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="bg-harmony-card p-8 md:p-12 rounded-3xl border border-harmony-teal/15 relative group overflow-hidden shadow-sm"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                <div className="p-3 bg-harmony-cream text-primary rounded-2xl inline-block mb-6 border border-harmony-teal/10">
                  <Compass className="w-6 h-6 animate-spin-slow" />
                </div>
                <h3 className="text-2xl font-bold text-harmony-dark mb-4 font-display">Our Mission</h3>
                <p className="text-harmony-dark/85 leading-relaxed text-sm font-normal">
                  To improve community wellness across our regional networks by maintaining a highly responsive, secure, and technologically advanced pharmaceutical wholesale infrastructure. We aim to protect patients and assist healthcare organizations by guaranteeing constant access to critical, genuine, and cost-effective medicines.
                </p>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="bg-harmony-card p-8 md:p-12 rounded-3xl border border-harmony-teal/15 relative group overflow-hidden shadow-sm"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-harmony-turquoise" />
                <div className="p-3 bg-harmony-cream text-primary rounded-2xl inline-block mb-6 border border-harmony-teal/10">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-harmony-dark mb-4 font-display">Our Vision</h3>
                <p className="text-harmony-dark/85 leading-relaxed text-sm font-normal">
                  To be recognized as the premier and most trustworthy healthcare distribution partner, driving modern supply-chain integrity, climate-responsible cold storage protocols, and zero-error therapeutic fulfillment across global medical corridors. We build supply networks that doctors and hospitals trust implicitly.
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 4. INDUSTRY ACCREDITATIONS & LICENSE SHOWCASE - FLOATING CARD */}
        <section id="accreditations-section" className="floating-section-card p-6 sm:p-10 md:p-14 lg:p-16">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-bold uppercase bg-harmony-cream border border-harmony-teal/20 text-primary px-3.5 py-1.5 rounded-full tracking-wider shadow-3xs">
                Rigorous Standards
              </span>
              <h2 className="text-3xl font-extrabold text-harmony-dark font-display">
                Our Industry Accreditations
              </h2>
              <p className="text-harmony-dark/80 font-normal">
                We operate under continuous surveillance and adhere strictly to international public health compliance standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {accreditations.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-harmony-card p-6 rounded-3xl border border-harmony-teal/15 shadow-xs flex flex-col justify-between group relative overflow-hidden"
                  >
                    <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2.5 bg-harmony-bg text-harmony-dark rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300 border border-harmony-teal/10">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold text-primary font-mono tracking-wider bg-harmony-cream px-2 py-0.5 rounded border border-harmony-teal/20">
                          {item.code}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-harmony-dark font-display mb-2">{item.title}</h4>
                      <p className="text-harmony-dark/80 text-xs leading-relaxed font-normal">{item.desc}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-harmony-teal/15 flex items-center gap-1 text-[10px] text-harmony-dark/60 font-semibold uppercase tracking-wider">
                      <CheckCircle className="w-3 h-3 text-emerald-500" />
                      <span>Verified Active Status</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 5. CHRONOLOGICAL TIMELINE SECTION - FLOATING CARD */}
        <section id="timeline-section" className="floating-section-card p-6 sm:p-10 md:p-14 lg:p-16">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
              <span className="text-xs font-bold uppercase bg-harmony-cream border border-harmony-teal/20 text-primary px-3.5 py-1.5 rounded-full tracking-wider shadow-3xs">
                Corporate History
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-harmony-dark font-display">
                Timeline of Sustainable Growth
              </h2>
              <p className="text-harmony-dark/80 font-normal">
                From our modest founding to operating advanced regional cold depots, we have consistently scaled operations with a commitment to patient safety.
              </p>
            </div>

            {/* Timeline Layout */}
            <div className="relative max-w-4xl mx-auto text-left">
              {/* Timeline center line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-harmony-teal/25 transform md:-translate-x-1/2" />

              <div className="space-y-16">
                {timelineEvents.map((ev, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <motion.div
                      key={ev.year}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`relative flex flex-col md:flex-row items-start ${
                        isEven ? "md:justify-start" : "md:justify-end"
                      }`}
                    >
                      {/* Circle Pinpoint with pulsate ring */}
                      <div className="absolute left-6 md:left-1/2 w-5 h-5 rounded-full bg-primary border-4 border-harmony-bg transform -translate-x-1/2 mt-1 z-10 shadow-md">
                        <div className="absolute -inset-1.5 bg-primary/20 rounded-full animate-ping pointer-events-none" />
                      </div>

                      {/* Content Block */}
                      <div className={`pl-14 md:pl-0 w-full md:w-[45%] ${isEven ? "md:text-right md:pr-10" : "md:pl-10"}`}>
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-harmony-dark to-harmony-teal text-white text-xs font-extrabold rounded-lg mb-3 shadow-xs">
                          {ev.year}
                        </span>
                        <h4 className="text-xl font-bold text-harmony-dark mb-2 font-display">{ev.title}</h4>
                        <p className="text-harmony-dark/80 text-sm leading-relaxed font-normal">{ev.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* 6. FUTURE GROWTH & TRUST SECTION - FLOATING CARD */}
        <section id="future-growth-section" className="floating-section-card p-6 sm:p-10 md:p-14 lg:p-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column Image */}
              <div className="lg:col-span-5 relative order-last lg:order-first">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl pointer-events-none" />
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-harmony-teal/15 bg-harmony-card p-2">
                  <img
                    src="https://images.unsplash.com/photo-1607619056574-7b8d304f3c6f?auto=format&fit=crop&w=800&q=80"
                    alt="RS Pharma medicine inventory and capsules"
                    referrerPolicy="no-referrer"
                    className="rounded-2xl w-full object-cover aspect-video sm:aspect-4/3 hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Column Text */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-harmony-cream border border-harmony-teal/20 text-primary rounded-full text-xs font-bold uppercase tracking-wider shadow-3xs">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Our Strategic Future</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-extrabold text-harmony-dark tracking-tight font-display">
                  Expanding Logistics & Therapeutic Access
                </h2>
                
                <p className="text-harmony-dark/85 leading-relaxed font-normal">
                  As part of our commitment to sustainable distribution growth, RS Pharma is actively expanding its wholesale infrastructure to meet the demands of advanced personalized medicine, gene-therapy cargo, and complex oncology pharmaceuticals.
                </p>
                
                <p className="text-harmony-dark/85 leading-relaxed font-normal">
                  Our strategic plan for the next five years includes acquiring electric-powered cold transport vehicles, integrating zero-loss clean energy at all warehouse hubs, and establishing verified bulk purchasing lanes across European and Asian regulatory centers to combat medication shortage spikes.
                </p>

                {/* Progress Bullet Points */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3 text-sm text-harmony-dark/85 bg-harmony-bg p-4.5 rounded-2xl border border-harmony-teal/15 shadow-3xs">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0 animate-pulse" />
                    <p className="font-normal"><strong className="text-harmony-dark font-bold">Zero-Loss Temperature Depots:</strong> Smart multi-grid continuous power configurations at all storage centers.</p>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-harmony-dark/85 bg-harmony-bg p-4.5 rounded-2xl border border-harmony-teal/15 shadow-3xs">
                    <div className="w-2 h-2 bg-harmony-turquoise rounded-full mt-2 shrink-0 animate-pulse" />
                    <p className="font-normal"><strong className="text-harmony-dark font-bold">Expanding Bio-Similar Pipelines:</strong> Securing state-approved exclusive distribution of next-generation biologics.</p>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-harmony-dark/85 bg-harmony-bg p-4.5 rounded-2xl border border-harmony-teal/15 shadow-3xs">
                    <div className="w-2 h-2 bg-harmony-mint rounded-full mt-2 shrink-0 animate-pulse" />
                    <p className="font-normal"><strong className="text-harmony-dark font-bold">Traceability Hub:</strong> Empowering purchasing managers with end-to-end electronic DSCA documentation.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 7. CTA - FLOATING CARD */}
        <section className="floating-section-card p-8 sm:p-12 md:p-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-harmony-dark font-display">
              Ready to Partner with RS Pharma?
            </h3>
            <p className="text-harmony-dark/80 max-w-lg mx-auto text-base font-normal">
              Contact our wholesale procurement office to find out how our customized shipping solutions can benefit your clinic.
            </p>
            <div className="pt-2">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4.5 bg-gradient-to-r from-primary to-blue-600 hover:from-primary-hover hover:to-blue-700 text-white rounded-2xl font-bold shadow-md shadow-primary/20 transition-all duration-300 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Contact Us Today</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

      </div>

    </motion.div>
  );
}
