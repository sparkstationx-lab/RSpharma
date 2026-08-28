import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle, AlertCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What pharmaceutical products do you supply?",
    answer: "We supply a comprehensive inventory of FDA-approved therapeutics, temperature-critical vaccines, biologics, oncology pharmaceuticals, insulin products, highly demanded generic drugs, and bulk medical supplies to licensed clinical groups."
  },
  {
    question: "Do you deliver across India?",
    answer: "Yes, RS Pharma operates certified, highly responsive climate-controlled logistical hubs and partners with domestic air freight lines to deliver essential medical shipments safely and swiftly to all states across India."
  },
  {
    question: "How can I request a quotation?",
    answer: "You can request a custom wholesale quotation directly through our contact portal, or by emailing our procurement officers at sales@rspharmaindia.com. Our typical pricing response time is under 12 hours."
  },
  {
    question: "Do you participate in government tenders?",
    answer: "Yes, we are a fully registered corporate wholesale drug distributor eligible for government, military, and state-sponsored healthcare tender bids, with full compliance documentation available on demand."
  },
  {
    question: "How can I contact your sales team?",
    answer: "You can reach our sales team by calling our main office line at +91 88106 60831, emailing sales@rspharmaindia.com, or initiating a real-time WhatsApp inquiry using our floating chat tool."
  },
  {
    question: "What are your business working hours?",
    answer: "Our primary administrative office and logistics depots operate Monday through Friday, from 8:00 AM to 6:00 PM CST. Emergency shipping support for critical biological products is available 24/7."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-home-section" className="floating-section-card p-6 sm:p-10 md:p-14 lg:p-16">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-harmony-cream border border-harmony-teal/20 text-primary rounded-full text-xs font-bold uppercase tracking-wider shadow-3xs">
            <HelpCircle className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span>General FAQ Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-harmony-dark tracking-tight font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-harmony-dark/85 font-normal">
            Find immediate answers regarding product procurement, nationwide distribution channels, and licensing.
          </p>
        </div>

        {/* Accordion Layout */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-harmony-bg rounded-2xl border border-harmony-teal/15 overflow-hidden hover:bg-harmony-bg/80 transition-colors duration-300"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full px-6 py-5.5 text-left flex items-center justify-between gap-4 font-bold text-harmony-dark hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-sm sm:text-base leading-snug">{faq.question}</span>
                  <div className={`p-1 bg-harmony-card rounded-full border border-harmony-teal/15 text-slate-400 shrink-0 transform transition-all duration-300 ${isOpen ? "rotate-180 bg-primary/10 border-primary/20 text-primary" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-harmony-dark/85 text-sm leading-relaxed border-t border-harmony-teal/15 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Dynamic Help Banner */}
        <div className="mt-12 p-5 bg-harmony-cream border border-harmony-teal/25 rounded-2xl flex items-start gap-4">
          <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-harmony-dark font-display">Have a custom regulatory inquiry or wholesale order?</h4>
            <p className="text-xs text-harmony-dark/80 mt-1 leading-relaxed">
              Our clinical logistics department is standing by to assist your pharmacy franchise or healthcare facility. Contact us directly or use WhatsApp for quick live assistance.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
