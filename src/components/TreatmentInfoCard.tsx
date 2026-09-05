import React, { useState } from "react";
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
  Clock,
  Zap,
  Thermometer,
  Layers,
  AlertTriangle,
  ClipboardList,
  FlaskConical,
  Droplet,
  ChevronRight,
  Info
} from "lucide-react";
import { Product } from "../data/products";
import { getTreatmentInfo, TreatmentDetails } from "../utils/treatmentInfo";

interface TreatmentInfoCardProps {
  product: Product;
  className?: string;
}

type TabType = "indications" | "pharmacology" | "administration" | "safety" | "storage";

export const TreatmentInfoCard: React.FC<TreatmentInfoCardProps> = ({ product, className = "" }) => {
  const treatment: TreatmentDetails = getTreatmentInfo(product);
  const [activeTab, setActiveTab] = useState<TabType>("indications");

  const getSeverityBadgeClass = (severity?: string) => {
    switch (severity) {
      case "Emergency / ICU":
        return "bg-rose-50 text-rose-800 border-rose-200";
      case "Hospital Inpatient":
        return "bg-amber-50 text-amber-800 border-amber-200";
      case "Prophylactic":
        return "bg-blue-50 text-blue-800 border-blue-200";
      default:
        return "bg-emerald-50 text-emerald-800 border-emerald-200";
    }
  };

  return (
    <div
      id="treatment-info-card"
      className={`bg-harmony-card border border-harmony-teal/20 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xs relative overflow-hidden space-y-8 ${className}`}
    >
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* 1. CARD HEADER & BADGES */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-harmony-teal/15 pb-6 relative z-10">
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="p-3 bg-primary/10 border border-primary/20 text-primary rounded-2xl shrink-0 mt-1 sm:mt-0">
            <Stethoscope className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 bg-harmony-cream text-primary border border-harmony-teal/25 rounded-full text-[10px] font-extrabold uppercase tracking-wider">
                Clinical Pharmacopoeia Dossier
              </span>
              <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                <FileBadge className="w-3 h-3" />
                Verified Clinical Profile
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-harmony-dark font-display">
              Treatment & Clinical Profile
            </h3>
            <p className="text-xs text-harmony-dark/70 font-medium mt-0.5">
              Comprehensive medical indications, molecular pharmacodynamics, dosing protocol, and safety monograph.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
          <div className="px-3.5 py-1.5 bg-harmony-bg rounded-xl border border-harmony-teal/20 text-xs font-bold text-harmony-dark flex items-center gap-2">
            <Activity className="w-4 h-4 text-primary" />
            <span>Formulation: {product.form}</span>
          </div>
        </div>
      </div>

      {/* 2. PROMINENT HERO CLINICAL STATUS BANNER */}
      <div className="bg-gradient-to-br from-harmony-dark via-slate-800 to-harmony-dark text-white rounded-2xl p-6 sm:p-7 shadow-md border border-white/10 relative overflow-hidden space-y-4">
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-harmony-turquoise/20 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-3 relative z-10 border-b border-white/10 pb-3">
          <span className="text-[11px] font-bold uppercase tracking-widest text-harmony-turquoise flex items-center gap-1.5">
            <HeartPulse className="w-4 h-4 text-harmony-mint animate-pulse" />
            <span>Primary Target Medical Indication</span>
          </span>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-white/10 text-white border border-white/20 rounded-md text-[10px] font-mono font-bold uppercase">
              {treatment.prescriptionSchedule}
            </span>
          </div>
        </div>

        <div className="relative z-10 space-y-2">
          <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-white font-display leading-tight">
            {treatment.primaryCondition}
          </h4>
          
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-harmony-cream/90 pt-1">
            <div>
              <span className="text-harmony-turquoise/90 font-semibold uppercase text-[10px] tracking-wider block">Therapeutic Class:</span>
              <span className="font-bold text-white text-sm">{treatment.therapeuticClass}</span>
            </div>
            <div>
              <span className="text-harmony-turquoise/90 font-semibold uppercase text-[10px] tracking-wider block">Target Specialty Wings:</span>
              <span className="font-bold text-harmony-mint text-xs">{treatment.targetSpecialty}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. INTERACTIVE SECTION TABS */}
      <div className="space-y-6 relative z-10">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-harmony-teal/15">
          <button
            type="button"
            onClick={() => setActiveTab("indications")}
            className={`px-4 py-2.5 rounded-xl font-extrabold text-xs whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === "indications"
                ? "bg-primary text-white shadow-sm"
                : "bg-harmony-bg text-harmony-dark/80 hover:text-harmony-dark hover:bg-harmony-cream border border-harmony-teal/15"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Clinical Indications & Scope</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("pharmacology")}
            className={`px-4 py-2.5 rounded-xl font-extrabold text-xs whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === "pharmacology"
                ? "bg-primary text-white shadow-sm"
                : "bg-harmony-bg text-harmony-dark/80 hover:text-harmony-dark hover:bg-harmony-cream border border-harmony-teal/15"
            }`}
          >
            <Microscope className="w-3.5 h-3.5" />
            <span>Pharmacology & Kinetics</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("administration")}
            className={`px-4 py-2.5 rounded-xl font-extrabold text-xs whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === "administration"
                ? "bg-primary text-white shadow-sm"
                : "bg-harmony-bg text-harmony-dark/80 hover:text-harmony-dark hover:bg-harmony-cream border border-harmony-teal/15"
            }`}
          >
            <Syringe className="w-3.5 h-3.5" />
            <span>Dosing & Administration</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("safety")}
            className={`px-4 py-2.5 rounded-xl font-extrabold text-xs whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === "safety"
                ? "bg-primary text-white shadow-sm"
                : "bg-harmony-bg text-harmony-dark/80 hover:text-harmony-dark hover:bg-harmony-cream border border-harmony-teal/15"
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Safety & Lab Monitoring</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("storage")}
            className={`px-4 py-2.5 rounded-xl font-extrabold text-xs whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === "storage"
                ? "bg-primary text-white shadow-sm"
                : "bg-harmony-bg text-harmony-dark/80 hover:text-harmony-dark hover:bg-harmony-cream border border-harmony-teal/15"
            }`}
          >
            <Thermometer className="w-3.5 h-3.5" />
            <span>Storage & Stability</span>
          </button>
        </div>

        {/* TAB 1: CLINICAL INDICATIONS & SCOPE */}
        {activeTab === "indications" && (
          <div className="space-y-6 animate-fadeIn">
            {/* Clinical Overview Narrative */}
            <div className="bg-harmony-bg/90 border border-harmony-teal/20 rounded-2xl p-5 sm:p-6 space-y-2">
              <h4 className="text-xs font-bold text-harmony-dark uppercase tracking-wider font-display flex items-center gap-2 text-primary">
                <Info className="w-4 h-4 text-primary" />
                <span>Executive Clinical Overview</span>
              </h4>
              <p className="text-sm text-harmony-dark/90 leading-relaxed font-normal">
                {treatment.clinicalOverview}
              </p>
            </div>

            {/* Detailed Clinical Indications */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-harmony-dark uppercase tracking-wider font-display flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <ClipboardList className="w-4 h-4 text-primary" />
                  <span>Approved Medical Indications & Clinical Scenarios</span>
                </span>
                <span className="text-[11px] text-harmony-dark/60 font-medium lowercase">
                  ({treatment.detailedIndications.length} clinical protocols documented)
                </span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {treatment.detailedIndications.map((ind, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white border border-harmony-teal/15 hover:border-harmony-teal/35 rounded-2xl shadow-2xs space-y-2 transition-all"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <h5 className="text-xs sm:text-sm font-bold text-harmony-dark leading-snug">
                          {ind.condition}
                        </h5>
                      </div>
                      {ind.severity && (
                        <span className={`px-2 py-0.5 border rounded-md text-[10px] font-bold uppercase tracking-wider shrink-0 ${getSeverityBadgeClass(ind.severity)}`}>
                          {ind.severity}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-harmony-dark/80 pl-6 leading-relaxed">
                      {ind.clinicalNote}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Clinical Highlights & Advantages */}
            {treatment.clinicalHighlights && treatment.clinicalHighlights.length > 0 && (
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-harmony-dark uppercase tracking-wider font-display flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>Key Clinical Highlights & Formulary Advantages</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {treatment.clinicalHighlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 bg-harmony-cream/60 border border-harmony-teal/20 rounded-xl"
                    >
                      <Zap className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-xs font-bold text-harmony-dark">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: PHARMACOLOGY & KINETICS */}
        {activeTab === "pharmacology" && (
          <div className="space-y-6 animate-fadeIn">
            {/* Molecular Mechanism */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-harmony-teal/20 rounded-2xl p-5 space-y-2.5 shadow-2xs">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Microscope className="w-4 h-4" />
                  <span className="uppercase text-[11px] tracking-wider font-display">Molecular & Cellular Target</span>
                </div>
                <h5 className="text-sm font-extrabold text-harmony-dark">
                  {treatment.pharmacology.molecularTarget}
                </h5>
                <p className="text-xs text-harmony-dark/80 leading-relaxed">
                  {treatment.mechanismOfAction}
                </p>
              </div>

              <div className="bg-white border border-harmony-teal/20 rounded-2xl p-5 space-y-2.5 shadow-2xs">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Activity className="w-4 h-4" />
                  <span className="uppercase text-[11px] tracking-wider font-display">Pharmacodynamics & Tissue Target</span>
                </div>
                {treatment.pharmacology.pathogenOrTissueTarget && (
                  <div className="text-xs font-bold text-harmony-teal">
                    Target: {treatment.pharmacology.pathogenOrTissueTarget}
                  </div>
                )}
                <p className="text-xs text-harmony-dark/80 leading-relaxed">
                  {treatment.pharmacology.pharmacodynamics}
                </p>
              </div>
            </div>

            {/* Pharmacokinetic Profile Matrix */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-harmony-dark uppercase tracking-wider font-display flex items-center gap-1.5">
                <FlaskConical className="w-4 h-4 text-primary" />
                <span>Clinical Pharmacokinetic Parameters (ADME Matrix)</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                <div className="bg-harmony-bg/90 border border-harmony-teal/15 p-4 rounded-2xl space-y-1">
                  <span className="text-[10px] uppercase font-bold text-harmony-dark/60 block">Onset & Peak (Cmax)</span>
                  <p className="text-xs font-extrabold text-harmony-dark">
                    {treatment.pharmacokinetics.onsetAndPeak}
                  </p>
                </div>

                <div className="bg-harmony-bg/90 border border-harmony-teal/15 p-4 rounded-2xl space-y-1">
                  <span className="text-[10px] uppercase font-bold text-harmony-dark/60 block">Plasma Half-Life (T½)</span>
                  <p className="text-xs font-extrabold text-harmony-dark">
                    {treatment.pharmacokinetics.halfLife}
                  </p>
                </div>

                <div className="bg-harmony-bg/90 border border-harmony-teal/15 p-4 rounded-2xl space-y-1">
                  <span className="text-[10px] uppercase font-bold text-harmony-dark/60 block">Biotransformation</span>
                  <p className="text-xs font-extrabold text-harmony-dark">
                    {treatment.pharmacokinetics.metabolicRoute}
                  </p>
                </div>

                <div className="bg-harmony-bg/90 border border-harmony-teal/15 p-4 rounded-2xl space-y-1">
                  <span className="text-[10px] uppercase font-bold text-harmony-dark/60 block">Elimination Pathway</span>
                  <p className="text-xs font-extrabold text-harmony-dark">
                    {treatment.pharmacokinetics.elimination}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: DOSING & ADMINISTRATION */}
        {activeTab === "administration" && (
          <div className="space-y-5 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Regimen & Route */}
              <div className="bg-white border border-harmony-teal/20 rounded-2xl p-5 space-y-2 shadow-2xs">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Syringe className="w-4 h-4" />
                  <span className="uppercase text-[11px] tracking-wider font-display">Standard Clinical Regimen</span>
                </div>
                <p className="text-xs font-bold text-harmony-dark leading-relaxed">
                  {treatment.administrationProtocol.standardRegimen}
                </p>
                <div className="pt-2 border-t border-harmony-teal/10 text-xs text-harmony-dark/70">
                  <span className="font-semibold text-harmony-dark">Route: </span>
                  {treatment.administrationRoute}
                </div>
              </div>

              {/* Reconstitution & Diluents */}
              <div className="bg-white border border-harmony-teal/20 rounded-2xl p-5 space-y-2 shadow-2xs">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Droplet className="w-4 h-4" />
                  <span className="uppercase text-[11px] tracking-wider font-display">Reconstitution & Diluent Guidelines</span>
                </div>
                <p className="text-xs text-harmony-dark/90 leading-relaxed">
                  {treatment.administrationProtocol.reconstitutionAndDilution}
                </p>
              </div>

              {/* Infusion Rate & Timing */}
              <div className="bg-white border border-harmony-teal/20 rounded-2xl p-5 space-y-2 shadow-2xs">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Clock className="w-4 h-4" />
                  <span className="uppercase text-[11px] tracking-wider font-display">Infusion Rate & Administration Velocity</span>
                </div>
                <p className="text-xs text-harmony-dark/90 leading-relaxed">
                  {treatment.administrationProtocol.administrationRate}
                </p>
              </div>

              {/* Organ Dose Adjustments */}
              <div className="bg-white border border-harmony-teal/20 rounded-2xl p-5 space-y-2 shadow-2xs">
                <div className="flex items-center gap-2 text-amber-700 font-bold">
                  <Layers className="w-4 h-4" />
                  <span className="uppercase text-[11px] tracking-wider font-display">Renal & Hepatic Dose Modifications</span>
                </div>
                <p className="text-xs text-harmony-dark/90 leading-relaxed">
                  {treatment.administrationProtocol.organDoseAdjustment}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: SAFETY & LAB MONITORING */}
        {activeTab === "safety" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Contraindications */}
              <div className="bg-rose-50/70 border border-rose-200/80 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-rose-900 font-bold">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  <span className="uppercase text-[11px] tracking-wider font-display">Absolute & Relative Contraindications</span>
                </div>
                <ul className="space-y-2 text-xs text-rose-950 font-medium">
                  {treatment.safetyProfile.keyContraindications.map((contra, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0" />
                      <span>{contra}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warnings & Precautions */}
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-amber-900 font-bold">
                  <ShieldAlert className="w-4 h-4 text-amber-600" />
                  <span className="uppercase text-[11px] tracking-wider font-display">Clinical Warnings & Precautions</span>
                </div>
                <ul className="space-y-2 text-xs text-amber-950 font-medium">
                  {treatment.safetyProfile.clinicalWarnings.map((warn, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                      <span>{warn}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Laboratory Monitoring Checklist */}
            <div className="bg-white border border-harmony-teal/20 rounded-2xl p-5 space-y-3 shadow-2xs">
              <h4 className="text-xs font-bold text-harmony-dark uppercase tracking-wider font-display flex items-center gap-2 text-primary">
                <ClipboardList className="w-4 h-4 text-primary" />
                <span>Mandatory Laboratory & Clinical Monitoring Checklist</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {treatment.safetyProfile.monitoringParameters.map((param, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 bg-harmony-bg/70 rounded-xl border border-harmony-teal/15 text-xs font-semibold text-harmony-dark">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{param}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: STORAGE & STABILITY */}
        {activeTab === "storage" && (
          <div className="space-y-4 animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white border border-harmony-teal/20 rounded-2xl p-5 space-y-2 shadow-2xs">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Thermometer className="w-4 h-4" />
                  <span className="uppercase text-[11px] tracking-wider font-display">Thermal Specification</span>
                </div>
                <p className="text-xs font-bold text-harmony-dark">
                  {treatment.storageAndStability.temperatureRequirement}
                </p>
              </div>

              <div className="bg-white border border-harmony-teal/20 rounded-2xl p-5 space-y-2 shadow-2xs">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Layers className="w-4 h-4" />
                  <span className="uppercase text-[11px] tracking-wider font-display">Light & Physical Protection</span>
                </div>
                <p className="text-xs text-harmony-dark font-medium">
                  {treatment.storageAndStability.lightSensitivity}
                </p>
              </div>

              <div className="bg-white border border-harmony-teal/20 rounded-2xl p-5 space-y-2 shadow-2xs">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Clock className="w-4 h-4" />
                  <span className="uppercase text-[11px] tracking-wider font-display">In-Use Shelf Stability</span>
                </div>
                <p className="text-xs text-harmony-dark font-medium">
                  {treatment.storageAndStability.shelfLifePostReconstitution}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 4. INSTITUTIONAL REGULATORY & DISPENSING FOOTER */}
      <div className="p-4 bg-harmony-bg/80 border border-harmony-teal/20 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-harmony-dark/80 relative z-10">
        <div className="flex items-center gap-2.5">
          <ShieldAlert className="w-4 h-4 text-primary shrink-0" />
          <p className="text-[11px] font-semibold leading-relaxed">
            <strong className="text-harmony-dark">Registered Institutional Supply:</strong> Formulations are intended for clinical dispensing under licensed medical supervision. Batch Certificate of Analysis (CoA) provided upon wholesale dispatch.
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] font-bold text-primary bg-harmony-cream border border-harmony-teal/25 px-3 py-1.5 rounded-xl shrink-0">
          <Pill className="w-3.5 h-3.5" />
          <span>CDSCO / WHO-GDP Compliant</span>
        </div>
      </div>
    </div>
  );
};
