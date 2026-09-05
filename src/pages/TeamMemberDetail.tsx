import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ChevronRight,
  User,
  Quote,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Sparkles,
  MessageSquare,
  AlertCircle,
  FileText
} from "lucide-react";
import { TEAM_MEMBERS } from "../data/team";

export default function TeamMemberDetail() {
  const { id } = useParams<{ id: string }>();

  const member = useMemo(() => {
    return TEAM_MEMBERS.find((m) => m.id === id);
  }, [id]);

  const otherMembers = useMemo(() => {
    return TEAM_MEMBERS.filter((m) => m.id !== id);
  }, [id]);

  if (!member) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center pt-36 pb-20 px-4 max-w-2xl mx-auto text-center space-y-6">
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
          <span>Back to Leadership Team</span>
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
      className="min-h-[70vh] flex flex-col pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-10"
    >
      {/* 1. BREADCRUMBS & NAVIGATION */}
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/team" className="hover:text-primary transition-colors">
            Leadership Team
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
          <span>All Team Members</span>
        </Link>
      </nav>

      {/* 2. PROFILE HERO HEADER CARD */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-harmony-teal/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 relative z-10">
          {/* Avatar Frame */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 flex flex-col items-center justify-center p-4 border-2 border-slate-200 shadow-inner shrink-0 group">
            <User className="w-20 h-20 sm:w-24 sm:h-24 text-slate-400 stroke-[1.5]" />
            <span className="text-xs font-bold text-slate-400 tracking-widest mt-1 uppercase">
              {member.initials}
            </span>
          </div>

          {/* Profile Identity Details */}
          <div className="flex-1 text-center sm:text-left space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-harmony-cream text-primary border border-harmony-teal/20 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>RS Pharma Executive Leadership</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-harmony-dark font-display leading-tight">
              {member.name}
            </h1>

            <p className="text-base sm:text-lg font-semibold text-harmony-teal">
              {member.title}
            </p>

            {/* Credentials / Key Tags */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-2">
              {member.credentials.map((cred, cIdx) => (
                <span
                  key={cIdx}
                  className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-50 text-slate-700 border border-slate-200 rounded-lg text-[11px] font-semibold"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-harmony-teal shrink-0" />
                  <span>{cred}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Executive Quote Card */}
        {member.quote && (
          <div className="mt-8 pt-6 border-t border-slate-100 relative">
            <div className="bg-harmony-bg/60 border border-harmony-teal/15 rounded-2xl p-5 sm:p-6 flex items-start gap-4">
              <div className="p-2.5 bg-primary/10 text-primary rounded-xl shrink-0">
                <Quote className="w-5 h-5" />
              </div>
              <p className="text-slate-700 text-sm sm:text-base italic leading-relaxed font-normal">
                "{member.quote}"
              </p>
            </div>
          </div>
        )}
      </section>

      {/* 3. COHESIVE NARRATIVE BIOGRAPHY */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6 text-left">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
              Executive Biography
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Leadership overview, background, and operational impact at RS Pharma
            </p>
          </div>
        </div>

        {/* Narrative Paragraphs */}
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base font-normal">
          {member.bio.map((paragraph, pIdx) => (
            <p key={pIdx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* 4. STRATEGIC FOCUS & OPERATIONAL PILLARS */}
      <section className="space-y-6">
        <div className="text-left space-y-1">
          <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
            Key Strategic Focus Areas
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Core domains under {member.name.split(" ")[0]}'s direct leadership and strategic oversight
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {member.focusAreas.map((focus, fIdx) => (
            <motion.div
              key={fIdx}
              whileHover={{ y: -3 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:border-harmony-teal/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left space-y-3"
            >
              <div className="space-y-2.5">
                <div className="w-8 h-8 rounded-xl bg-harmony-bg flex items-center justify-center text-primary font-bold text-xs border border-harmony-teal/15 font-display">
                  0{fIdx + 1}
                </div>
                <h4 className="text-base font-bold text-slate-900 font-display">
                  {focus.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {focus.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Active Oversight</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. CORPORATE ENGAGEMENT & CONNECT CARD */}
      <section className="bg-gradient-to-r from-harmony-dark via-slate-900 to-harmony-dark text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg border border-white/10 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10 text-left">
          <div className="space-y-2">
            <span className="text-[11px] font-bold tracking-widest text-emerald-400 uppercase font-mono">
              Direct Institutional Coordination
            </span>
            <h4 className="text-xl sm:text-2xl font-bold font-display text-white">
              Connect with RS Pharma Leadership
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-normal leading-relaxed">
              Have a bulk procurement inquiry, institutional tender, or manufacturer partnership proposal? Our executive team is available to assist your organization.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-2"
            >
              <Building2 className="w-4 h-4" />
              <span>Contact Sourcing Team</span>
            </Link>
            <a
              href={`https://wa.me/918810660831?text=${encodeURIComponent(`Hello RS Pharma, I would like to connect regarding an institutional partnership inquiry with ${member.name}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-white/10 hover:bg-white/15 text-white border border-white/20 rounded-xl text-xs font-bold transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </section>

      {/* 6. OTHER LEADERSHIP PROFILES STRIP */}
      {otherMembers.length > 0 && (
        <section className="space-y-4 pt-4 text-left">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 font-display">
            Explore Other Leadership Profiles
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherMembers.map((other) => (
              <Link
                key={other.id}
                to={`/team/${other.id}`}
                className="bg-white hover:bg-slate-50 border border-slate-200 hover:border-harmony-teal/40 rounded-2xl p-4 transition-all duration-300 flex items-center justify-between group shadow-2xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs border border-slate-200 group-hover:text-primary group-hover:border-primary/30 transition-colors">
                    {other.initials}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">
                      {other.name}
                    </h5>
                    <p className="text-xs text-slate-500">
                      {other.role}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </section>
      )}
    </motion.div>
  );
}

