import { Product } from "../data/products";

export interface TreatmentDetails {
  primaryCondition: string;
  indications: string[];
  therapeuticClass: string;
  mechanismOfAction: string;
  targetSpecialty: string;
  administrationRoute: string;
  prescriptionSchedule: string;
  dosageNote?: string;
}

/**
 * Intelligent utility to retrieve rich, accurate medical treatment information,
 * primary health conditions, and clinical indications for any product in the catalog.
 */
export function getTreatmentInfo(product: Product): TreatmentDetails {
  const desc = (product.description || "").toUpperCase();
  const brand = (product.brandName || "").toUpperCase();
  const category = product.category;
  const form = product.form;

  // 1. Specific Active Ingredient / Molecule Matchers
  if (desc.includes("ACYCLOVIR") || brand.includes("SENOVIR")) {
    return {
      primaryCondition: "Viral Encephalitis, Herpes Simplex & Mucocutaneous Zoster Infections",
      indications: [
        "Herpes Simplex Virus (HSV 1 & 2)",
        "Severe Varicella-Zoster Infection (Shingles)",
        "Herpes Encephalitis in Immunocompromised Patients",
        "Prophylaxis in Organ Transplant Recipients"
      ],
      therapeuticClass: "Antiviral Nucleoside Analog",
      mechanismOfAction: "Inhibits viral DNA polymerase, preventing viral replication in infected host cells.",
      targetSpecialty: "Infectious Diseases, Neurology & Critical Care",
      administrationRoute: "Intravenous Infusion / Oral Formulation",
      prescriptionSchedule: "Schedule H Prescription Drug"
    };
  }

  if (desc.includes("ALBUMIN") || brand.includes("SENUMIN")) {
    return {
      primaryCondition: "Hypoalbuminemia, Severe Burns, Hypovolemic Shock & Liver Cirrhosis",
      indications: [
        "Severe Acute Plasma Volume Expansion",
        "Hypoalbuminemia in Critically Ill Patients",
        "Hepatorenal Syndrome & Spontaneous Bacterial Peritonitis",
        "Post-Therapeutic Paracentesis in Cirrhosis"
      ],
      therapeuticClass: "Human Plasma Protein Fraction",
      mechanismOfAction: "Restores intravascular oncotic pressure and expands circulating blood volume in severe protein depletion.",
      targetSpecialty: "Gastroenterology, Hepatology & Intensive Care",
      administrationRoute: "Slow Intravenous Infusion",
      prescriptionSchedule: "Hospital Restricted Biological Product"
    };
  }

  if (desc.includes("AMIODARONE") || brand.includes("SENODARONE")) {
    return {
      primaryCondition: "Life-Threatening Ventricular & Supraventricular Cardiac Arrhythmias",
      indications: [
        "Ventricular Tachycardia & Ventricular Fibrillation",
        "Refractory Atrial Fibrillation with Rapid Ventricular Response",
        "Paroxysmal Supraventricular Tachycardia (PSVT)",
        "Intraoperative Cardiac Rhythm Stabilization"
      ],
      therapeuticClass: "Class III Antiarrhythmic Agent",
      mechanismOfAction: "Blocks potassium, sodium, and calcium channels while exerting non-competitive alpha/beta adrenergic inhibition.",
      targetSpecialty: "Cardiology, Cardiac Surgery & Emergency Medicine",
      administrationRoute: "Intravenous Infusion / Bolus Injection",
      prescriptionSchedule: "Schedule H Emergency Drug"
    };
  }

  if (desc.includes("ATRACURIUM") || brand.includes("ATRASEN")) {
    return {
      primaryCondition: "Skeletal Muscle Relaxation During Surgery & ICU Mechanical Ventilation",
      indications: [
        "Endotracheal Intubation Facilitation",
        "Neuromuscular Blockade During General Anesthesia",
        "Mechanical Ventilation Management in ICU Patients",
        "Prevention of Patient-Ventilator Dyssynchrony"
      ],
      therapeuticClass: "Non-Depolarizing Neuromuscular Blocking Agent",
      mechanismOfAction: "Competitively blocks acetylcholine receptors at the neuromuscular junction, producing muscle relaxation.",
      targetSpecialty: "Anesthesiology & Critical Care Medicine",
      administrationRoute: "Intravenous Injection / Continuous Infusion",
      prescriptionSchedule: "Schedule X / Hospital Restricted Anesthetic"
    };
  }

  if (desc.includes("AZITHROMYCIN") || brand.includes("SENITHRO")) {
    return {
      primaryCondition: "Severe Community-Acquired Pneumonia & Respiratory Tract Infections",
      indications: [
        "Lower Respiratory Tract Infections & Acute Bronchitis",
        "Community-Acquired Bacterial Pneumonia",
        "Complicated Sinusitis & Pharyngitis",
        "Pelvic Inflammatory Disease & Urogenital Infections"
      ],
      therapeuticClass: "Macrolide Antibacterial Agent",
      mechanismOfAction: "Binds to the 50S ribosomal subunit of susceptible microorganisms, inhibiting bacterial protein synthesis.",
      targetSpecialty: "Pulmonology, General Internal Medicine & Infectious Diseases",
      administrationRoute: "Intravenous Infusion / Oral Dosage",
      prescriptionSchedule: "Schedule H1 Prescription Antibiotic"
    };
  }

  if (desc.includes("AZTREONAM") || brand.includes("AZTREOSEN")) {
    return {
      primaryCondition: "Complicated Gram-Negative Aerobic Bacterial Septicemia & Respiratory Sepsis",
      indications: [
        "Pseudomonas Aeruginosa & Enterobacteriaceae Sepsis",
        "Complicated Urinary Tract & Renal Infections",
        "Nosocomial Intra-Abdominal Infections",
        "Lower Respiratory Sepsis in Penicillin-Allergic Patients"
      ],
      therapeuticClass: "Monobactam Beta-Lactam Antibiotic",
      mechanismOfAction: "Binds selectively to penicillin-binding protein 3 (PBP-3) of Gram-negative aerobic bacteria, causing cell lysis.",
      targetSpecialty: "Infectious Diseases & Hospital Internal Medicine",
      administrationRoute: "Intravenous / Intramuscular Injection",
      prescriptionSchedule: "Schedule H1 Prescription Antibiotic"
    };
  }

  if (desc.includes("CEFOPERAZONE") || desc.includes("SULBACTAM") || brand.includes("CEFOSENTUM")) {
    return {
      primaryCondition: "Complicated Intra-Abdominal, Gynecological & Respiratory Bacterial Sepsis",
      indications: [
        "Severe Peritonitis & Biliary Tract Infections",
        "Hospital-Acquired Pneumonia & Pleural Empyema",
        "Uncomplicated & Complicated Urinary Tract Infections",
        "Surgical Site Wound Sepsis"
      ],
      therapeuticClass: "3rd Gen Cephalosporin + Beta-Lactamase Inhibitor",
      mechanismOfAction: "Combines bactericidal PBP inhibition with sulbactam protection against bacterial beta-lactamase degradation.",
      targetSpecialty: "General Surgery, Gynecology & Critical Care",
      administrationRoute: "Intravenous / Intramuscular Infusion",
      prescriptionSchedule: "Schedule H1 Prescription Drug"
    };
  }

  if (desc.includes("CEFUROXIME") || brand.includes("CEFUSEN")) {
    return {
      primaryCondition: "Acute Bacterial Sinusitis, Otitis Media, Respiratory & Skin Structure Infections",
      indications: [
        "Acute Exacerbations of Chronic Bronchitis",
        "Bacterial Pharyngitis & Tonsillitis",
        "Uncomplicated Urinary Tract Infections",
        "Early Lyme Disease Treatment & Surgical Prophylaxis"
      ],
      therapeuticClass: "2nd Generation Cephalosporin Antibiotic",
      mechanismOfAction: "Inhibits bacterial cell wall synthesis by binding to essential penicillin-binding proteins.",
      targetSpecialty: "ENT, Primary Care & Respiratory Medicine",
      administrationRoute: "Oral Tablet / Intravenous Injection",
      prescriptionSchedule: "Schedule H Prescription Antibiotic"
    };
  }

  if (desc.includes("CITICOLIN") || brand.includes("SENOCOLINE")) {
    return {
      primaryCondition: "Acute Ischemic Stroke, Traumatic Brain Injury & Cognitive Neurological Rehabilitation",
      indications: [
        "Acute Phase Cerebrovascular Ischemic Events",
        "Post-Traumatic Brain Contusion & Head Injury Recovery",
        "Vascular Dementia & Cognitive Decline in Elderly",
        "Ischemic Neurological Deficits"
      ],
      therapeuticClass: "Neuroprotective Agent & Psychostimulant",
      mechanismOfAction: "Promotes neuronal phospholipid synthesis, restores cell membrane integrity, and increases brain acetylcholine levels.",
      targetSpecialty: "Neurology, Neurosurgery & Emergency Care",
      administrationRoute: "Intravenous / Intramuscular Injection / Oral",
      prescriptionSchedule: "Schedule H Prescription Drug"
    };
  }

  if (desc.includes("CLARITHROMYCIN") || brand.includes("SENOCLARE")) {
    return {
      primaryCondition: "Severe Atypical Mycobacterial Infections, Pneumonia & Helicobacter Pylori Sepsis",
      indications: [
        "Community-Acquired Respiratory Tract Infections",
        "Disseminated Mycobacterium Avium Complex (MAC)",
        "Eradication of H. Pylori in Duodenal Ulcer Disease",
        "Acute Maxillary Sinusitis"
      ],
      therapeuticClass: "Macrolide Antibiotic",
      mechanismOfAction: "Reversibly binds to 50S ribosomal subunit, preventing peptide translocation in susceptible bacteria.",
      targetSpecialty: "Pulmonology, Gastroenterology & Infectious Diseases",
      administrationRoute: "Intravenous Infusion / Oral Administration",
      prescriptionSchedule: "Schedule H1 Prescription Drug"
    };
  }

  if (desc.includes("COLISTIMETHATE") || desc.includes("COLISTIN") || brand.includes("SENCOLIS")) {
    return {
      primaryCondition: "Multi-Drug Resistant (MDR) Gram-Negative Infections & Critical ICU Sepsis",
      indications: [
        "MDR Pseudomonas Aeruginosa & Acinetobacter Baumannii Sepsis",
        "Carbapenem-Resistant Enterobacteriaceae (CRE) Infections",
        "Ventilator-Associated Pneumonia (VAP) in Critically Ill Patients",
        "Severe Refractory Bacteremia"
      ],
      therapeuticClass: "Polymyxin Antibacterial Agent",
      mechanismOfAction: "Acts as a cationic detergent to disrupt lipopolysaccharides and cell membrane integrity in Gram-negative bacilli.",
      targetSpecialty: "Critical Care Medicine, ICU & Infectious Diseases",
      administrationRoute: "Intravenous Infusion / Inhalation Nebulization",
      prescriptionSchedule: "Schedule H1 Restricted Hospital Antibiotic"
    };
  }

  if (desc.includes("DOXYCYCLINE") || brand.includes("SENODOXY")) {
    return {
      primaryCondition: "Atypical Bacterial Infections, Rickettsial Fever & Acute Respiratory Infections",
      indications: [
        "Rickettsial Infections (Scrub Typhus, Rocky Mountain Spotted Fever)",
        "Mycoplasma & Chlamydia Pneumonia",
        "Severe Inflammatory Acne Vulgaris & Rosacea",
        "Malaria Prophylaxis & Leptospirosis Treatment"
      ],
      therapeuticClass: "Tetracycline Antibiotic",
      mechanismOfAction: "Inhibits bacterial protein synthesis by binding to the 30S ribosomal subunit.",
      targetSpecialty: "Dermatology, Infectious Diseases & Internal Medicine",
      administrationRoute: "Intravenous Infusion / Oral Capsule",
      prescriptionSchedule: "Schedule H Prescription Antibiotic"
    };
  }

  if (desc.includes("ENOXAPARIN") || brand.includes("SENOXAPARIN")) {
    return {
      primaryCondition: "Deep Vein Thrombosis (DVT), Pulmonary Embolism & Acute Coronary Syndromes",
      indications: [
        "Prophylaxis of Venous Thromboembolism (VTE) in Surgical / Medical Patients",
        "Treatment of Established DVT with or without Pulmonary Embolism",
        "Non-ST-Segment Elevation Myocardial Infarction (NSTEMI) & Unstable Angina",
        "Thrombus Prevention During Hemodialysis"
      ],
      therapeuticClass: "Low Molecular Weight Heparin (LMWH) Anticoagulant",
      mechanismOfAction: "Potentiates Antithrombin III to selectively inhibit Factor Xa and Factor IIa, preventing blood clot formation.",
      targetSpecialty: "Cardiology, Orthopedic Surgery, Hematology & ICU",
      administrationRoute: "Subcutaneous Injection / Intravenous Bolus",
      prescriptionSchedule: "Schedule H Prescription Anticoagulant"
    };
  }

  if (desc.includes("MEROPENEM") || desc.includes("IMIPENEM") || brand.includes("MEROPENEM")) {
    return {
      primaryCondition: "Complicated Intra-Abdominal Infections, Bacterial Meningitis & Febrile Neutropenia",
      indications: [
        "Complicated Skin and Skin Structure Infections",
        "Severe Hospital-Acquired & Ventilator-Associated Pneumonia",
        "Complicated Intra-Abdominal Peritonitis",
        "Bacterial Meningitis in Pediatric & Adult Patients"
      ],
      therapeuticClass: "Carbapenem Ultra-Broad Spectrum Antibiotic",
      mechanismOfAction: "Rapidly penetrates bacterial cell walls to bind PBPs, causing cell wall degradation across aerobic and anaerobic pathogens.",
      targetSpecialty: "Infectious Diseases, ICU & Hematology/Oncology",
      administrationRoute: "Intravenous Infusion / Injection",
      prescriptionSchedule: "Schedule H1 Hospital Prescription Drug"
    };
  }

  if (desc.includes("PIPERACILLIN") || desc.includes("TAZOBACTAM") || brand.includes("PIPERACILLIN")) {
    return {
      primaryCondition: "Polymicrobial Intra-Abdominal Infections & Severe Hospital-Acquired Pneumonia",
      indications: [
        "Nosocomial Pneumonia in ICU Patients",
        "Appendicitis, Peritonitis & Biliary Sepsis",
        "Uncomplicated and Complicated Skin and Soft Tissue Infections",
        "Empiric Therapy for Febrile Neutropenic Patients"
      ],
      therapeuticClass: "Extended-Spectrum Penicillin + Beta-Lactamase Inhibitor",
      mechanismOfAction: "Inhibits cell wall synthesis while tazobactam neutralizes bacterial beta-lactamase enzymes.",
      targetSpecialty: "Critical Care, General Surgery & Onco-Medicine",
      administrationRoute: "Extended Intravenous Infusion",
      prescriptionSchedule: "Schedule H1 Restricted Prescription"
    };
  }

  if (desc.includes("VANCOMYCIN") || brand.includes("VANCOMYCIN")) {
    return {
      primaryCondition: "Methicillin-Resistant Staphylococcus Aureus (MRSA) Septicemia & Endocarditis",
      indications: [
        "Severe MRSA Bacteremia & Osteomyelitis",
        "Infective Endocarditis caused by Enterococci / Staphylococci",
        "Clostridioides Difficile Colitis (Oral Route)",
        "Surgical Prophylaxis in High MRSA Prevalence Units"
      ],
      therapeuticClass: "Glycopeptide Antibacterial Agent",
      mechanismOfAction: "Inhibits bacterial cell wall synthesis by binding to D-alanyl-D-alanine terminal residues.",
      targetSpecialty: "Infectious Diseases, Nephrology & Cardiac Surgery",
      administrationRoute: "Slow Intravenous Infusion / Oral Solution",
      prescriptionSchedule: "Schedule H1 Hospital Restricted Antibiotic"
    };
  }

  if (desc.includes("TIGECYCLINE") || brand.includes("TIGECYCLINE")) {
    return {
      primaryCondition: "Complicated Skin/Skin Structure Infections & Complicated Intra-Abdominal Infections",
      indications: [
        "Complicated Intra-Abdominal Peritonitis & Abscesses",
        "Complex Skin & Soft Tissue Infections including Diabetic Foot Ulcers",
        "Polymicrobial Infections with Resistant Organisms (VRE, MRSA)",
        "Reserved Therapy for Multi-Drug Resistant Bacteria"
      ],
      therapeuticClass: "Glycylcycline Antibiotic",
      mechanismOfAction: "Binds to the 30S ribosomal subunit with 5x higher affinity than tetracyclines to overcome efflux pumps.",
      targetSpecialty: "Infectious Diseases & Surgical Critical Care",
      administrationRoute: "Intravenous Infusion",
      prescriptionSchedule: "Schedule H1 Restricted Antibiotic"
    };
  }

  if (desc.includes("VORICONAZOLE") || desc.includes("AMPHOTERICIN") || desc.includes("POSACONAZOLE") || desc.includes("FLUCONAZOLE")) {
    return {
      primaryCondition: "Invasive Aspergillosis, Systemic Candidiasis & Severe Fungal Infections",
      indications: [
        "Invasive Aspergillosis in Immunocompromised Patients",
        "Disseminated Candidiasis & Esophageal Candidiasis",
        "Serious Fungal Sepsis caused by Scedosporium & Fusarium spp.",
        "Empiric Antifungal Therapy in Neutropenic Patients"
      ],
      therapeuticClass: "Triazole Antifungal Agent",
      mechanismOfAction: "Inhibits fungal cytochrome P450-dependent 14-alpha-demethylase, disrupting ergosterol membrane synthesis.",
      targetSpecialty: "Infectious Diseases, Hematology & Transplant Medicine",
      administrationRoute: "Intravenous Infusion / Oral Dosage",
      prescriptionSchedule: "Schedule H Prescription Antifungal"
    };
  }

  if (desc.includes("PANTOPRAZOLE") || desc.includes("RABEPRAZOLE") || desc.includes("OMEPRAZOLE")) {
    return {
      primaryCondition: "Gastroesophageal Reflux Disease (GERD), Peptic Ulcers & Acute Upper GI Hemorrhage",
      indications: [
        "Zollinger-Ellison Syndrome & Gastric Hypersecretion",
        "Acute Bleeding Peptic Ulcers & Stress Ulcer Prophylaxis in ICU",
        "Erosive Esophagitis & Acid Regurgitation",
        "Eradication of H. Pylori combined with Antibiotics"
      ],
      therapeuticClass: "Proton Pump Inhibitor (PPI)",
      mechanismOfAction: "Irreversibly inhibits the H+/K+ ATPase pump in gastric parietal cells to suppress acid secretion.",
      targetSpecialty: "Gastroenterology, Critical Care & Internal Medicine",
      administrationRoute: "Intravenous Injection / Oral Tablet",
      prescriptionSchedule: "Schedule H Prescription Drug"
    };
  }

  if (desc.includes("ONDANSETRON") || desc.includes("PALONOSETRON")) {
    return {
      primaryCondition: "Chemotherapy-Induced & Postoperative Nausea and Vomiting (CINV / PONV)",
      indications: [
        "Prevention of Emetogenic Chemotherapy-Induced Nausea",
        "Radiotherapy-Induced Nausea & Vomiting",
        "Postoperative Nausea & Vomiting Management",
        "Acute Gastroenteritis-Associated Emesis"
      ],
      therapeuticClass: "5-HT3 Receptor Antagonist",
      mechanismOfAction: "Selectively blocks 5-HT3 receptors centrally in the chemoreceptor trigger zone and peripherally on vagal nerve terminals.",
      targetSpecialty: "Oncology, Anesthesiology & Emergency Medicine",
      administrationRoute: "Intravenous / Intramuscular Injection / Oral",
      prescriptionSchedule: "Schedule H Prescription Drug"
    };
  }

  if (desc.includes("PROPOFOL") || desc.includes("MIDAZOLAM") || desc.includes("FENTANYL")) {
    return {
      primaryCondition: "Induction/Maintenance of General Anesthesia & ICU Sedation",
      indications: [
        "Induction & Maintenance of General Anesthesia in Surgical Procedures",
        "Sedation of Mechanically Ventilated Adult ICU Patients",
        "Procedural Sedation for Diagnostic Endoscopy",
        "Refractory Status Epilepticus Control"
      ],
      therapeuticClass: "Intravenous Anesthetic / Sedative Agent",
      mechanismOfAction: "Potentiates GABA-A receptor function to induce rapid hypnosis, central CNS depression, and muscle relaxation.",
      targetSpecialty: "Anesthesiology, Critical Care & Emergency Medicine",
      administrationRoute: "Intravenous Injection / Target-Controlled Infusion",
      prescriptionSchedule: "Schedule X Controlled Hospital Drug"
    };
  }

  if (desc.includes("NORADRENALINE") || desc.includes("NOREPINEPHRINE") || desc.includes("VASOPRESSIN")) {
    return {
      primaryCondition: "Septic Shock, Severe Vascular Collapse & Refractory Hypotension",
      indications: [
        "Restoration of Blood Pressure in Acute Hypotensive States & Septic Shock",
        "Adjunctive Management in Cardiogenic Shock",
        "Refractory Vasodilatory Shock in ICU",
        "Hemodynamic Support During Cardiopulmonary Resuscitation"
      ],
      therapeuticClass: "Vasoactive Inotrope & Vasopressor",
      mechanismOfAction: "Stimulates alpha-1 adrenergic receptors to induce intense peripheral vasoconstriction and elevate systemic vascular resistance.",
      targetSpecialty: "Intensive Care Unit (ICU), Critical Care & Emergency Cardiology",
      administrationRoute: "Central Line Continuous Intravenous Infusion",
      prescriptionSchedule: "Hospital Emergency ICU Drug"
    };
  }

  // 2. Category Fallback Generators if no specific drug molecule matched
  if (category === "Antibiotics & Antifungals") {
    return {
      primaryCondition: `Bacterial & Fungal Infections Targeted by ${product.brandName}`,
      indications: [
        "Broad-Spectrum Antimicrobial Coverage",
        "Nosocomial & Community-Acquired Infection Management",
        "Targeted Pathogen Eradication",
        "Clinical Infection Prophylaxis & Treatment"
      ],
      therapeuticClass: `${form} Antimicrobial Formulation`,
      mechanismOfAction: "Exerts targeted bactericidal or fungicidal inhibition against susceptible pathogenic microorganisms.",
      targetSpecialty: "Infectious Diseases, Internal Medicine & Surgery",
      administrationRoute: form === "Injection" || form === "Infusion Pen" ? "Parenteral / Intravenous Infusion" : "Oral / Topical Administration",
      prescriptionSchedule: "Schedule H / H1 Prescription Antimicrobial"
    };
  }

  if (category === "Critical Care & Plasma") {
    return {
      primaryCondition: `Critical Care Hemodynamic & Plasma Volume Support (${product.brandName})`,
      indications: [
        "ICU Patient Hemodynamic Stabilization",
        "Severe Hypovolemic & Plasma Volume Depletion Support",
        "Critical Care Resuscitation Protocol",
        "Emergency Inpatient Clinical Care"
      ],
      therapeuticClass: "Critical Care Therapeutics / Biological Standard",
      mechanismOfAction: "Supports vascular tone, colloid oncotic pressure, or vital cellular pathways during critical physiological distress.",
      targetSpecialty: "Intensive Care Unit (ICU), Trauma & Emergency Medicine",
      administrationRoute: "Intravenous Infusion / ICU Administration",
      prescriptionSchedule: "Hospital Restricted Critical Care Supply"
    };
  }

  if (category === "Gastroenterology") {
    return {
      primaryCondition: `Gastrointestinal Disorders, Acid Suppression & Hepato-Digestive Therapy`,
      indications: [
        "Peptic & Gastric Mucosal Ulceration Management",
        "Gastroesophageal Reflux & Acid-Related Conditions",
        "Gastrointestinal Bleeding & Motility Disorders",
        "Hepato-Biliary Clinical Support"
      ],
      therapeuticClass: "Gastrointestinal Therapeutic Agent",
      mechanismOfAction: "Regulates GI motility, gastric mucosal protection, or gastric acid secretion to relieve clinical digestive distress.",
      targetSpecialty: "Gastroenterology, Hepatology & Inpatient Medicine",
      administrationRoute: form === "Injection" ? "Intravenous Infusion" : "Oral / Targeted Administration",
      prescriptionSchedule: "Schedule H Prescription Drug"
    };
  }

  if (category === "Cardiovascular & Hematology") {
    return {
      primaryCondition: `Cardiovascular System Regulation & Hematological Disease Management`,
      indications: [
        "Cardiac Rhythm & Vascular Homeostasis Support",
        "Thromboembolic Prophylaxis & Hematological Control",
        "Myocardial & Coronary Arterial Stabilization",
        "Hypertensive & Ischemic Condition Support"
      ],
      therapeuticClass: "Cardiovascular / Hematological Therapeutic Agent",
      mechanismOfAction: "Acts on cardiac ion channels, vascular smooth muscle, or coagulation cascades to restore cardiovascular balance.",
      targetSpecialty: "Cardiology, Hematology & Vascular Surgery",
      administrationRoute: form === "Injection" ? "Intravenous / Subcutaneous Injection" : "Oral Tablet",
      prescriptionSchedule: "Schedule H Controlled Prescription"
    };
  }

  if (category === "Neurology & Anesthesia") {
    return {
      primaryCondition: `Central Nervous System Disorders, Anesthesia & Neuroprotection`,
      indications: [
        "Perioperative Anesthetic & Muscle Relaxation Support",
        "Ischemic & Traumatic Neurological Support",
        "Procedural Sedation & Seizure Control",
        "Central & Peripheral Nerve Function Rehabilitation"
      ],
      therapeuticClass: "Neuro-Anesthetic Therapeutic Class",
      mechanismOfAction: "Modulates central neurotransmitters, neuronal membrane stability, or peripheral neuromuscular receptors.",
      targetSpecialty: "Neurology, Anesthesiology & Neurosurgery",
      administrationRoute: form === "Injection" ? "Intravenous / Epidural Administration" : "Oral Dosage",
      prescriptionSchedule: "Schedule H / X Anesthetic & Neuro Drug"
    };
  }

  // Generic Default Fallback for Specialty Therapeutics
  return {
    primaryCondition: `Specialty Medical Indication for ${product.brandName}`,
    indications: [
      "Targeted Clinical Disease Management",
      "Specialty Hospital Inpatient Therapy",
      "Symptom Control & Pathological Modulation",
      "Licensed Physician Directed Treatment"
    ],
    therapeuticClass: `${product.category} Formulation`,
    mechanismOfAction: "Provides targeted molecular activity to manage specific physiological or pathological indications.",
    targetSpecialty: "Specialty Hospital Care & Internal Medicine",
    administrationRoute: form === "Injection" ? "Intravenous / Intramuscular Administration" : "Prescription Oral Administration",
    prescriptionSchedule: "Schedule H Prescription Pharmaceutical"
  };
}
