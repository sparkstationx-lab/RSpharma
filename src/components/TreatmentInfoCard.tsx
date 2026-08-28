import React from "react";
import {
  Stethoscope,
  HeartPulse,
  Activity,
  CheckCircle2,
  ShieldAlert,
  Microscope,
  Syringe,
  FileBadge,
  Sparkles,
  Pill,
  Building2,
  HelpCircle
} from "lucide-react";
import { Product } from "../data/products";
import { getTreatmentInfo } from "../utils/treatmentInfo";

interface TreatmentInfoCardProps {
  product: Product;
  className?: string;
}

export const TreatmentInfoCard: React.FC<TreatmentInfoCardProps> = ({ product, className = "" }) => {
  const treatment = getTreatmentInfo(product);

  return (
    <div
      id="treatment-info-card"
      className={`bg-harmony-card border border-harmony-teal/20 rounded-3xl p-6 sm:p-8 shadow-xs relative overflow-hidden space-y-6 ${className}`}
    >
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* 1. CARD HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-harmony-teal/15 pb-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-primary/10 border border-primary/20 text-primary rounded-2xl shrink-0">
            <Stethoscope className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-harmony-cream text-primary border border-harmony-teal/20 rounded-full text-[10px] font-bold uppercase tracking-wider">
                Medical & Clinical Profile
              </span>
              <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200/60 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                <FileBadge className="w-3 h-3" />
                Verified Indication
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-harmony-dark font-display mt-0.5">
              Treatment & Clinical Info
            </h3>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-harmony-bg rounded-xl border border-harmony-teal/15 text-xs text-harmony-dark/70 font-semibold">
          <Activity className="w-3.5 h-3.5 text-primary" />
          <span>Therapeutic Indications</span>
        </div>
      </div>

      {/* 2. PROMINENT HERO HEALTH CONDITION BANNER */}
      <div className="bg-gradient-to-br from-harmony-dark via-slate-800 to-harmony-dark text-white rounded-2xl p-5 sm:p-6 shadow-md border border-white/10 relative overflow-hidden space-y-3">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-harmony-turquoise/20 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between gap-2 relative z-10">
          <span className="text-[11px] font-bold uppercase tracking-widest text-harmony-turquoise flex items-center gap-1.5">
            <HeartPulse className="w-4 h-4 text-harmony-mint animate-pulse" />
            <span>Target Health Condition / Intended Treatment</span>
          </span>

          <span className="px-2.5 py-0.5 bg-white/10 text-white border border-white/20 rounded-md text-[10px] font-mono font-bold uppercase">
            {treatment.prescriptionSchedule}
          </span>
        </div>

        <div className="relative z-10 space-y-1">
          <h4 className="text-xl sm:text-2xl font-black text-white font-display leading-tight">
            {treatment.primaryCondition}
          </h4>
          <p className="text-xs text-harmony-cream/80 font-medium">
            <strong className="text-harmony-mint">Therapeutic Class:</strong> {treatment.therapeuticClass}
          </p>
        </div>
      </div>

      {/* 3. SPECIFIC MEDICAL INDICATIONS GRID */}
      <div className="space-y-3 relative z-10">
        <h4 className="text-xs font-bold text-harmony-dark uppercase tracking-wider font-display flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-primary" />
          <span>Specific Health Conditions & Clinical Indications Treated</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {treatment.indications.map((indication, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 p-3 bg-harmony-bg/80 border border-harmony-teal/15 hover:border-harmony-teal/35 rounded-xl transition-all"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-xs font-bold text-harmony-dark leading-snug">
                {indication}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. CLINICAL DETAILS GRID (MECHANISM, SPECIALTY, ROUTE) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs pt-2 border-t border-harmony-teal/15 relative z-10">
        {/* Mechanism of Action */}
        <div className="bg-harmony-bg/60 p-4 rounded-2xl border border-harmony-teal/15 space-y-2">
          <div className="flex items-center gap-2 text-primary font-bold">
            <Microscope className="w-4 h-4 shrink-0" />
            <span className="uppercase text-[10px] tracking-wider font-display">Mechanism of Action</span>
          </div>
          <p className="text-harmony-dark/80 text-[11px] leading-relaxed font-normal">
            {treatment.mechanismOfAction}
          </p>
        </div>

        {/* Target Clinical Specialty */}
        <div className="bg-harmony-bg/60 p-4 rounded-2xl border border-harmony-teal/15 space-y-2">
          <div className="flex items-center gap-2 text-primary font-bold">
            <Building2 className="w-4 h-4 shrink-0" />
            <span className="uppercase text-[10px] tracking-wider font-display">Target Medical Specialty</span>
          </div>
          <p className="text-harmony-dark text-xs font-bold leading-relaxed">
            {treatment.targetSpecialty}
          </p>
          <span className="inline-block text-[10px] text-harmony-dark/60 font-medium">
            Primary prescribing departments & hospital wings
          </span>
        </div>

        {/* Administration & Route */}
        <div className="bg-harmony-bg/60 p-4 rounded-2xl border border-harmony-teal/15 space-y-2">
          <div className="flex items-center gap-2 text-primary font-bold">
            <Syringe className="w-4 h-4 shrink-0" />
            <span className="uppercase text-[10px] tracking-wider font-display">Administration Protocol</span>
          </div>
          <p className="text-harmony-dark text-xs font-bold leading-relaxed">
            {treatment.administrationRoute}
          </p>
          <span className="inline-block text-[10px] text-harmony-dark/60 font-medium">
            Formulation: {product.form} ({product.strength})
          </span>
        </div>
      </div>

      {/* 5. INSTITUTIONAL PRESCRIPTION & SAFETY FOOTER */}
      <div className="p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-amber-900 relative z-10">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
          <p className="text-[11px] font-semibold leading-tight">
            <strong>Prescription Medicine Warning:</strong> Treatment should be administered as directed by a licensed medical practitioner under clinical supervision.
          </p>
        </div>

        <div className="flex items-center gap-1 text-[11px] font-bold text-amber-900 bg-amber-100/80 px-2.5 py-1 rounded-lg shrink-0">
          <Pill className="w-3.5 h-3.5" />
          <span>Batch CoA Included</span>
        </div>
      </div>
    </div>
  );
};
