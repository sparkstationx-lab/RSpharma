import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    // Simulate server submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1200);
  };

  return (
    <div id="contact-form-container" className="bg-harmony-card p-8 md:p-10 rounded-2xl shadow-xs border border-harmony-teal/15">
      <h3 className="text-2xl font-bold text-harmony-dark mb-2 font-display">Send us a Message</h3>
      <p className="text-harmony-dark/80 text-sm mb-6">
        Our professional team is here to assist with product inquiries, partnership requests, or distribution queries.
      </p>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-xl text-emerald-800 flex flex-col items-center text-center my-6"
          >
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mb-3" />
            <h4 className="font-bold text-lg font-display">Thank you!</h4>
            <p className="text-sm mt-1 text-emerald-800 max-w-sm">
              Your inquiry has been submitted successfully. A representative from RS Pharma will contact you shortly.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-4 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors duration-200"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="space-y-5"
            noValidate
          >
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-rose-500/10 border border-rose-500/20 p-4 rounded-xl text-rose-800 flex items-start gap-3 text-sm"
              >
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Submission failed</p>
                  <p className="text-rose-700 text-xs mt-0.5">{errorMessage}</p>
                </div>
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-harmony-dark/95 uppercase tracking-wider mb-2">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-harmony-teal/20 bg-harmony-bg focus:outline-none focus:ring-2 focus:ring-harmony-turquoise/30 focus:border-harmony-teal text-harmony-dark transition-all duration-200 text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-harmony-dark/95 uppercase tracking-wider mb-2">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-harmony-teal/20 bg-harmony-bg focus:outline-none focus:ring-2 focus:ring-harmony-turquoise/30 focus:border-harmony-teal text-harmony-dark transition-all duration-200 text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-harmony-dark/95 uppercase tracking-wider mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 88106 60831"
                className="w-full px-4 py-3 rounded-xl border border-harmony-teal/20 bg-harmony-bg focus:outline-none focus:ring-2 focus:ring-harmony-turquoise/30 focus:border-harmony-teal text-harmony-dark transition-all duration-200 text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-harmony-dark/95 uppercase tracking-wider mb-2">
                Your Message <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Please describe your product requirements or inquiries in detail..."
                className="w-full px-4 py-3 rounded-xl border border-harmony-teal/20 bg-harmony-bg focus:outline-none focus:ring-2 focus:ring-harmony-turquoise/30 focus:border-harmony-teal text-harmony-dark transition-all duration-200 text-sm resize-none"
                required
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === "submitting"}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 px-6 bg-primary hover:bg-primary-hover disabled:bg-primary/70 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm cursor-pointer"
            >
              {status === "submitting" ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
