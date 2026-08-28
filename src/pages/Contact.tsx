import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, Clock, HelpCircle, ChevronDown, CheckCircle2, Globe, Sparkles } from "lucide-react";
import InfoCard from "../components/InfoCard";
import ContactForm from "../components/ContactForm";

const contactCards = [
  {
    icon: Phone,
    title: "Phone Inquiries",
    details: ["Wholesale Desk: +91 88106 60831", "Sourcing Support: +91 88106 60831"],
    actionLabel: "Call Sourcing Desk",
    actionHref: "tel:+918810660831",
  },
  {
    icon: Mail,
    title: "Email Channels",
    details: ["Sales: sales@rspharmaindia.com", "Support: sales@rspharmaindia.com"],
    actionLabel: "Send Email Proposal",
    actionHref: "mailto:sales@rspharmaindia.com",
  },
  {
    icon: MapPin,
    title: "Corporate Headquarters",
    details: [
      "Plot No. 389, Ground Floor,",
      "Vinay Nagar Sector 2A, Near Urwai Gate,",
      "Ahukhana Kalan, Lashkar,",
      "Gwalior, Madhya Pradesh 474012, India"
    ],
    actionLabel: "Find on Map",
    actionHref: "#distribution-map",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday – Friday: 8:00 AM – 6:00 PM IST", "Saturday – Sunday: Closed", "Emergency: 24/7 Hotlines Active"],
  },
];

const faqList = [
  {
    id: "faq-1",
    question: "What are your minimum order values (MOV) for wholesale distribution?",
    answer: "For standard clinical deliveries, we maintain a minimum order value of $2,500. This threshold ensures we can offer temperature-monitored, fully insured freight shipping options without sacrificing supply quality.",
  },
  {
    id: "faq-2",
    question: "How do you guarantee cold-chain compliance during summer transit?",
    answer: "We utilize passive insulated polyurethane containers along with active temperature-logger tags inside every consignment. These tags transmit real-time telemetry back to our logisticians, guaranteeing that sensitive biologics stay within the 2°C to 8°C range.",
  },
  {
    id: "faq-3",
    question: "Is RS Pharma registered to export medicines internationally?",
    answer: "Yes. We hold valid wholesale export licenses from state and federal regulators. We routinely prepare documentation for global clinical trials, international NGO relief, and licensed overseas healthcare clients under WHO-GDP requirements.",
  },
  {
    id: "faq-4",
    question: "How can we request batch specific COAs (Certificate of Analysis)?",
    answer: "All shipments are accompanied by paper copies of CoA, FDA pedigree records, and regulatory checklists. Furthermore, digital PDFs of these certificates are securely saved to your client portal immediately upon dispatch validation.",
  },
  {
    id: "faq-5",
    question: "How do you handle product recalls?",
    answer: "We maintain a rigorous electronic tracing system. In the extremely rare event of a manufacturer recall, our system instantly flags the affected batch numbers, identifies all recipient hospitals or pharmacies, and triggers immediate automated notifications and retrieval protocols.",
  },
];

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    if (activeFaq === id) {
      setActiveFaq(null);
    } else {
      setActiveFaq(id);
    }
  };

  return (
    <motion.div
      id="contact-page-container"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-0"
    >
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-tr from-slate-950 via-harmony-dark to-harmony-teal text-white">
        <motion.div 
          animate={{ scale: [1, 1.12, 1], opacity: [0.1, 0.22, 0.1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute inset-0 bg-radial-gradient from-harmony-turquoise/25 via-transparent to-transparent pointer-events-none" 
        />
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-harmony-cream/15 backdrop-blur-xs text-harmony-cream rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-harmony-cream/10"
          >
            <Globe className="w-3.5 h-3.5 text-harmony-turquoise" />
            <span>Connect Worldwide</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 font-display text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-harmony-cream"
          >
            Get in Touch
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed"
          >
            Contact our dedicated clinical logisticians and account executives for procurement inquiries, partnership proposals, and supply-chain logistics.
          </motion.p>
        </div>
      </section>

      {/* PAGE WRAPPER WITH GRID PATTERN FOR ALL SUBSEQUENT SECTIONS */}
      <div className="bg-grid-pattern py-12 md:py-20 space-y-12 md:space-y-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* 2. CONTACT INFORMATION CARDS - FLOATING CARD */}
        <section id="contact-info-cards" className="floating-section-card p-6 sm:p-10 md:p-12 lg:p-14">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactCards.map((card, idx) => (
                <InfoCard
                  key={card.title}
                  icon={card.icon}
                  title={card.title}
                  details={card.details}
                  actionLabel={card.actionLabel}
                  actionHref={card.actionHref}
                  index={idx}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 3. CONTACT FORM & DISTRIBUTION MAP SPLIT - FLOATING CARD */}
        <section id="contact-main-section" className="floating-section-card p-6 sm:p-10 md:p-14 lg:p-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Side: Contact Form Component */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>

              {/* Right Side: Google Maps Placeholder / Custom Map Graphic */}
              <div className="lg:col-span-5 space-y-6 text-left" id="distribution-map">
                <div className="bg-harmony-card p-8 rounded-3xl border border-harmony-teal/15 relative overflow-hidden group shadow-xs">
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-harmony-dark to-harmony-teal" />
                  <h3 className="text-2xl font-extrabold text-harmony-dark mb-3 font-display">Distribution Coverage Map</h3>
                  <p className="text-harmony-dark/80 text-sm mb-6 leading-relaxed font-normal">
                    Our main logistics warehouse coordinates shipments across India, utilizing express logistics networks and climate-controlled transport lanes.
                  </p>

                  {/* Styled Map Graphic Placeholders */}
                  <div className="relative bg-slate-950 rounded-2xl overflow-hidden aspect-square flex flex-col justify-between p-6 shadow-inner border border-slate-800">
                    {/* Digital global distribution grid representation */}
                    <div className="absolute inset-0 opacity-15 pointer-events-none">
                      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                      </svg>
                    </div>

                    {/* Distribution Center Node Dots */}
                    <div className="absolute top-[40%] left-[30%] text-center">
                      <span className="absolute inline-flex h-4 w-4 rounded-full bg-harmony-turquoise animate-ping opacity-75" />
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-harmony-turquoise border-2 border-harmony-bg" />
                      <span className="block text-[9px] font-bold text-white mt-1 uppercase tracking-wider bg-slate-900/95 px-2 py-0.5 rounded shadow-sm">HQ Depot (GW)</span>
                    </div>

                    <div className="absolute top-[65%] left-[45%] text-center">
                      <span className="absolute inline-flex h-3 w-3 rounded-full bg-harmony-mint animate-ping opacity-75" style={{ animationDelay: "1s" }} />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-harmony-mint border border-harmony-bg" />
                      <span className="block text-[8px] font-bold text-slate-300 mt-0.5 uppercase tracking-wider">West Hub (MH)</span>
                    </div>

                    <div className="absolute top-[55%] left-[75%] text-center">
                      <span className="absolute inline-flex h-3 w-3 rounded-full bg-harmony-mint animate-ping opacity-75" style={{ animationDelay: "2s" }} />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-harmony-mint border border-harmony-bg" />
                      <span className="block text-[8px] font-bold text-slate-300 mt-0.5 uppercase tracking-wider">South Hub (KA)</span>
                    </div>

                    {/* Flight/Shipment routes paths drawing */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                      {/* Gwalior to Maharashtra path */}
                      <path d="M 120,160 Q 150,210 180,260" stroke="#00A896" strokeWidth="1.5" strokeDasharray="3 3" fill="none" strokeLinecap="round" />
                      {/* Gwalior to Karnataka path */}
                      <path d="M 120,160 Q 210,180 300,220" stroke="#00A896" strokeWidth="1.5" strokeDasharray="3 3" fill="none" strokeLinecap="round" />
                    </svg>

                    {/* Header/Footer labels in map */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1.5 border border-emerald-500/20 backdrop-blur-xs">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                        All Hubs Operational
                      </span>
                    </div>

                    <div className="relative z-10 bg-slate-900/90 border border-slate-800 p-4 rounded-xl backdrop-blur-xs text-xs text-slate-400 space-y-1.5">
                      <p className="font-bold text-white text-xs font-display">Logistics Information</p>
                      <p className="text-[11px]">Primary Dispatch: Central Gwalior Depot Hub</p>
                      <p className="text-[11px] text-harmony-turquoise font-semibold">GPS Monitored Fleet: Active Temperature Tracking</p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-3 text-xs text-harmony-dark/85 bg-harmony-bg p-4 rounded-2xl border border-harmony-teal/15 shadow-3xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-normal">Licensed to dispatch to healthcare facilities across all Indian states and UTs.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. FAQ SECTION - FLOATING CARD */}
        <section id="faq-section" className="floating-section-card p-6 sm:p-10 md:p-14 lg:p-16">
          <div className="max-w-4xl mx-auto text-left relative z-10">
            
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-harmony-cream border border-harmony-teal/20 text-primary rounded-full text-xs font-bold uppercase tracking-wider shadow-3xs">
                <HelpCircle className="w-3.5 h-3.5 text-primary animate-pulse" />
                <span>Sourcing & Ordering FAQs</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-harmony-dark tracking-tight font-display">
                Frequently Asked Inquiries
              </h2>
              <p className="text-harmony-dark/80 font-normal">
                Review answers to our most common questions regarding cold-chain operations, licensing validation, and shipping standards.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-4">
              {faqList.map((faq) => {
                const isSelected = activeFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    id={`faq-item-${faq.id}`}
                    className="bg-harmony-card rounded-3xl border border-harmony-teal/15 overflow-hidden shadow-xs hover:shadow-sm transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-7 py-5.5 text-left flex items-center justify-between gap-4 font-bold text-harmony-dark hover:text-primary transition-colors focus:outline-none"
                    >
                      <span className="font-display text-sm md:text-base leading-snug">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 shrink-0 transform transition-transform duration-300 ${
                          isSelected ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isSelected && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-7 pb-6 pt-1 text-harmony-dark/85 text-sm leading-relaxed border-t border-harmony-teal/15 font-normal">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

      </div>

    </motion.div>
  );
}
