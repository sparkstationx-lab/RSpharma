import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { User, ChevronRight } from "lucide-react";
import { TEAM_MEMBERS } from "../data/team";

export default function Team() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[70vh] flex flex-col pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-display text-harmony-dark mb-4">
            Our Leadership Team
          </h1>
          <p className="text-slate-600 text-lg">
            Meet the experienced leaders guiding RS Pharma's commitment to excellence, integrity, and timely healthcare delivery.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-harmony-teal/40 transition-all duration-300 overflow-hidden flex flex-col group"
            >
              <Link
                to={`/team/${member.id}`}
                className="flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-harmony-teal/50 rounded-2xl"
              >
                {/* Photo / Avatar Placeholder Area */}
                <div className="relative aspect-[4/4] bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 flex items-center justify-center p-8 border-b border-slate-100">
                  {/* Decorative background accent */}
                  <div className="absolute inset-0 bg-radial-gradient from-harmony-teal/5 to-transparent opacity-60" />

                  {/* Placeholder Avatar Frame */}
                  <div className="relative w-36 h-36 rounded-full bg-white shadow-md border-4 border-white flex flex-col items-center justify-center text-slate-400 group-hover:text-harmony-teal group-hover:scale-105 transition-all duration-300">
                    <User className="w-16 h-16 stroke-[1.5]" />
                    <span className="text-xs font-semibold text-slate-400 tracking-wider mt-1 uppercase">
                      {member.initials}
                    </span>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="p-6 text-center flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    {member.role && (
                      <p className="text-sm font-medium text-harmony-teal">
                        {member.role}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-center gap-1 text-xs font-bold text-primary group-hover:text-primary-hover transition-colors">
                    <span>View Profile</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
