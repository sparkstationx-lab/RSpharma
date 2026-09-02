import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ChevronRight,
  User,
  GraduationCap,
  Briefcase,
  Building2,
  AlertCircle
} from "lucide-react";
import { TEAM_MEMBERS } from "../data/team";

export default function TeamMemberDetail() {
  const { id } = useParams<{ id: string }>();

  const member = useMemo(() => {
    return TEAM_MEMBERS.find((m) => m.id === id);
  }, [id]);

  if (!member) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 max-w-2xl mx-auto text-center space-y-6">
        <div className="p-4 bg-amber-50 border border-amber-200 text-amber-800 rounded-2xl inline-flex items-center gap-2">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span className="text-xs font-bold">Team profile not found.</span>
        </div>
        <h1 className="text-3xl font-extrabold text-harmony-dark font-display">
          Profile Not Found
        </h1>
        <p className="text-sm text-slate-600 max-w-md">
          The team member profile you requested is unavailable or has been moved.
        </p>
        <Link
          to="/team"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl text-xs transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Team</span>
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="min-h-[70vh] flex flex-col pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full space-y-8"
    >
      {/* 1. BREADCRUMBS & NAVIGATION */}
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/team" className="hover:text-primary transition-colors">
            Our Team
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-bold truncate max-w-[200px]">
            {member.name}
          </span>
        </div>

        <Link
          to="/team"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl text-xs font-bold transition-all shadow-2xs"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-slate-600" />
          <span>Back to Team</span>
        </Link>
      </nav>

      {/* 2. PROFILE HERO CARD */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
          {/* Avatar Placeholder */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 flex flex-col items-center justify-center p-4 border border-slate-200 shadow-inner shrink-0">
            <User className="w-16 h-16 sm:w-20 sm:h-20 text-slate-400 stroke-[1.5]" />
            <span className="text-xs font-semibold text-slate-400 tracking-wider mt-1 uppercase">
              {member.initials}
            </span>
          </div>

          {/* Profile Identity Details */}
          <div className="flex-1 text-center sm:text-left space-y-2">
            <div className="inline-block px-3 py-1 bg-harmony-cream text-primary border border-harmony-teal/20 rounded-full text-xs font-bold uppercase tracking-wider">
              RS Pharma Leadership
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-harmony-dark font-display">
              {member.name}
            </h1>
            {member.role && (
              <p className="text-base font-semibold text-harmony-teal">
                {member.role}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* 3. STRUCTURED PROFILE SECTIONS (Education, Experience, Role in Company) */}
      <div className="grid grid-cols-1 gap-6">
        {/* Education Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-700">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900">
                Education
              </h2>
            </div>
          </div>
          {/* Blank container for user-provided education information */}
          <div className="min-h-[120px] rounded-xl border border-dashed border-slate-200 bg-slate-50/50 p-6 flex items-center justify-center" />
        </div>

        {/* Experience Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-blue-50 rounded-xl text-blue-700">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900">
                Experience
              </h2>
            </div>
          </div>
          {/* Blank container for user-provided experience information */}
          <div className="min-h-[120px] rounded-xl border border-dashed border-slate-200 bg-slate-50/50 p-6 flex items-center justify-center" />
        </div>

        {/* Role in Company Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-teal-50 rounded-xl text-teal-700">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900">
                Role in Company
              </h2>
            </div>
          </div>
          {/* Blank container for user-provided role information */}
          <div className="min-h-[120px] rounded-xl border border-dashed border-slate-200 bg-slate-50/50 p-6 flex items-center justify-center" />
        </div>
      </div>
    </motion.div>
  );
}
