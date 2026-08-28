import React from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

interface InfoCardProps {
  key?: string | number;
  icon: any;
  title: string;
  details: string[];
  actionLabel?: string;
  actionHref?: string;
  index: number;
}

export default function InfoCard({ icon: Icon, title, details, actionLabel, actionHref, index }: InfoCardProps) {
  return (
    <motion.div
      id={`info-card-${title.toLowerCase().replace(/\s+/g, "-")}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="bg-harmony-card p-6 rounded-2xl border border-harmony-teal/15 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-harmony-cream text-primary rounded-xl border border-harmony-teal/10">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="font-semibold text-lg text-harmony-dark font-display">{title}</h3>
      </div>
      
      <div className="flex-grow space-y-1.5 text-harmony-dark/80 text-sm">
        {details.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>

      {actionLabel && actionHref && (
        <div className="mt-5 pt-4 border-t border-harmony-teal/15">
          <a
            href={actionHref}
            className="text-primary hover:text-primary-hover text-sm font-semibold inline-flex items-center gap-1 group/link"
          >
            {actionLabel}
            <span className="transform translate-x-0 group-hover/link:translate-x-1 transition-transform duration-200">
              &rarr;
            </span>
          </a>
        </div>
      )}
    </motion.div>
  );
}
