import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, X } from "lucide-react";

interface Certificate {
  id: string;
  src: string;
  title: string;
}

const certificateCategories = [
  {
    title: "Drug Licenses",
    items: [
      { id: "dl1", src: "/certificates/DL1.jpg", title: "Drug License (Part 1)" },
      { id: "dl2", src: "/certificates/DL2.jpg", title: "Drug License (Part 2)" },
    ],
  },
  {
    title: "Registrations & Certifications",
    items: [
      { id: "reg", src: "/certificates/REGISTRATION.jpg", title: "Registration Certificate" },
      { id: "udyam", src: "/certificates/Udyam_Registration_Certificate.jpg", title: "Udyam Registration" },
      { id: "cert", src: "/certificates/certificate.jpg", title: "Company Certificate" },
    ],
  },
  {
    title: "Supporting Documents",
    items: [
      { id: "doc1", src: "/certificates/1.jpg", title: "Document Page 1" },
      { id: "doc2", src: "/certificates/2.jpg", title: "Document Page 2" },
      { id: "doc3", src: "/certificates/3.jpg", title: "Document Page 3" },
      { id: "doc4", src: "/certificates/4.jpg", title: "Document Page 4" },
    ],
  },
  {
    title: "Annexures",
    items: [
      { id: "a1", src: "/certificates/A1.jpg", title: "Annexure Page 1" },
      { id: "a2", src: "/certificates/A2.jpg", title: "Annexure Page 2" },
      { id: "a3", src: "/certificates/A3.jpg", title: "Annexure Page 3" },
    ],
  }
];

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState<Certificate | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[70vh] flex flex-col pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-display text-harmony-dark mb-4">
            Our Certifications
          </h1>
          <p className="text-slate-600 text-lg">
            Authorized and certified to ensure the highest standards of quality, safety, and compliance in pharmaceutical distribution.
          </p>
        </div>
        
        <div className="space-y-16">
          {certificateCategories.map((category, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold text-slate-800 mb-6 font-display border-b border-slate-200 pb-3 flex items-center gap-3">
                <span className="w-8 h-1 rounded-full bg-harmony-teal"></span>
                {category.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.items.map((cert) => (
                  <motion.div 
                    key={cert.id}
                    whileHover={{ y: -5 }}
                    className="group cursor-pointer bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:shadow-lg hover:border-harmony-teal/30 transition-all duration-300"
                    onClick={() => setSelectedImage(cert)}
                  >
                    <div className="relative aspect-[3/4] bg-slate-50 overflow-hidden border-b border-slate-100 p-6 flex items-center justify-center">
                      <img 
                        src={cert.src} 
                        alt={cert.title} 
                        className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-harmony-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/95 backdrop-blur-sm p-3 rounded-full text-harmony-teal shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <Search className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 flex-grow flex items-center justify-center bg-white">
                      <h3 className="font-semibold text-slate-800 text-center text-sm">{cert.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 lg:p-12"
          >
            <button 
              className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 backdrop-blur-lg transition-all duration-200 z-10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="relative max-w-5xl w-full max-h-full flex flex-col bg-slate-50 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white px-6 py-4 border-b border-slate-200 flex justify-between items-center shadow-sm z-10">
                <h3 className="font-bold text-slate-900 font-display text-lg">{selectedImage.title}</h3>
              </div>
              <div className="flex-1 overflow-auto bg-slate-100 p-4 sm:p-8 flex justify-center items-center min-h-[50vh]">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.title} 
                  className="max-w-full h-auto max-h-[75vh] object-contain rounded-lg drop-shadow-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
