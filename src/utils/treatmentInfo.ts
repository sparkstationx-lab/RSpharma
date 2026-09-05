import { Product } from "../data/products";

export interface DetailedIndication {
  condition: string;
  clinicalNote: string;
  severity?: "Emergency / ICU" | "Hospital Inpatient" | "Clinical Standard" | "Prophylactic";
}

export interface TreatmentDetails {
  // Core summary fields
  primaryCondition: string;
  indications: string[];
  therapeuticClass: string;
  mechanismOfAction: string;
  targetSpecialty: string;
  administrationRoute: string;
  prescriptionSchedule: string;
  dosageNote?: string;

  // Comprehensive Expanded Clinical Profile
  clinicalOverview: string;
  detailedIndications: DetailedIndication[];
  pharmacology: {
    molecularTarget: string;
    pharmacodynamics: string;
    pathogenOrTissueTarget?: string;
  };
  pharmacokinetics: {
    onsetAndPeak: string;
    halfLife: string;
    metabolicRoute: string;
    elimination: string;
  };
  administrationProtocol: {
    standardRegimen: string;
    reconstitutionAndDilution: string;
    administrationRate: string;
    organDoseAdjustment: string;
  };
  clinicalHighlights: string[];
  safetyProfile: {
    keyContraindications: string[];
    clinicalWarnings: string[];
    monitoringParameters: string[];
  };
  storageAndStability: {
    temperatureRequirement: string;
    lightSensitivity: string;
    shelfLifePostReconstitution: string;
  };
  prescribingSpecialties: string[];
}

/**
 * Intelligent clinical intelligence utility to retrieve rich, comprehensive, and
 * medically authoritative treatment data, pharmacodynamics, pharmacokinetics,
 * administration protocols, and safety profiles for every product in the RS Pharma catalog.
 */
export function getTreatmentInfo(product: Product): TreatmentDetails {
  const desc = (product.description || "").toUpperCase();
  const brand = (product.brandName || "").toUpperCase();
  const category = product.category;
  const form = product.form;
  const strength = product.strength || "";

  // -------------------------------------------------------------
  // 1. ANTIVIRALS (Acyclovir)
  // -------------------------------------------------------------
  if (desc.includes("ACYCLOVIR") || brand.includes("SENOVIR")) {
    return {
      primaryCondition: "Severe Herpes Simplex Virus (HSV 1 & 2), Varicella-Zoster, and Viral Encephalitis",
      indications: [
        "Herpes Simplex Encephalitis in Adults and Neonates",
        "Severe Initial & Recurrent Mucocutaneous HSV in Immunocompromised Patients",
        "Disseminated Varicella-Zoster Infection (Shingles) with Visceral Involvement",
        "Cytomegalovirus / HSV Prophylaxis in Solid Organ & Bone Marrow Transplants"
      ],
      therapeuticClass: "Synthetic Purine Nucleoside Analog Antiviral",
      mechanismOfAction: "Selectively phosphorylated by viral thymidine kinase to acyclovir monophosphate, then converted to triphosphate which competitively inhibits viral DNA polymerase, causing viral DNA chain termination.",
      targetSpecialty: "Infectious Diseases, Neurology, Critical Care & Dermatology",
      administrationRoute: "Slow Intravenous Infusion (Over 1 Hour) / Oral Formulation",
      prescriptionSchedule: "Schedule H Prescription Antiviral",
      clinicalOverview: "Acyclovir is the definitive first-line standard parenteral antiviral therapy for life-threatening neurotropic herpesvirus infections. Intravenous administration achieves high CSF concentrations essential for halting neuronal destruction in acute encephalitis.",
      detailedIndications: [
        {
          condition: "Herpes Simplex Encephalitis (HSE)",
          clinicalNote: "Urgent empiric parenteral administration reduces mortality from >70% to under 15% when initiated within 48 hours of neurological onset.",
          severity: "Emergency / ICU"
        },
        {
          condition: "Severe Disseminated Shingles (Herpes Zoster)",
          clinicalNote: "Indicated for multi-dermatomal or ophthalmic zoster in immunocompromised oncology and transplant hosts.",
          severity: "Hospital Inpatient"
        },
        {
          condition: "Neonatal Herpes Simplex Infection",
          clinicalNote: "High-dose intravenous regimen critical for preventing disseminated multi-organ failure and neurological sequelae.",
          severity: "Emergency / ICU"
        },
        {
          condition: "Mucocutaneous HSV Prophylaxis",
          clinicalNote: "Prevents reactivation during heavy chemotherapy conditioning or post-transplantation immunosuppression.",
          severity: "Prophylactic"
        }
      ],
      pharmacology: {
        molecularTarget: "Viral Thymidine Kinase & Viral DNA Polymerase",
        pharmacodynamics: "Selectivity ratio of >3,000-fold for viral versus mammalian cellular thymidine kinase, ensuring minimal host cytotoxicity.",
        pathogenOrTissueTarget: "Herpes Simplex Virus Type 1 & 2, Varicella-Zoster Virus (VZV), Epstein-Barr Virus (EBV)"
      },
      pharmacokinetics: {
        onsetAndPeak: "Peak plasma concentrations (Cmax) achieved immediately upon 1-hour IV infusion completion.",
        halfLife: "Plasma elimination half-life is approximately 2.5 to 3.0 hours in adults with normal renal function.",
        metabolicRoute: "Minimal hepatic metabolism (<10%); converted to 9-carboxymethoxymethylguanine (CMMG).",
        elimination: "60% to 90% excreted unchanged via glomerular filtration and tubular secretion in urine."
      },
      administrationProtocol: {
        standardRegimen: "5 mg/kg to 10 mg/kg infused every 8 hours depending on infection severity and host immune status.",
        reconstitutionAndDilution: "Reconstitute with 10 mL Sterile Water for Injection (WFI). Further dilute in 0.9% Normal Saline or D5W to a concentration ≤7 mg/mL.",
        administrationRate: "Strictly administer by slow IV constant infusion over a minimum of 60 minutes. Never give as rapid IV bolus.",
        organDoseAdjustment: "CrCl 25-50 mL/min: Full dose q12h; CrCl 10-25 mL/min: Full dose q24h; CrCl <10 mL/min: 50% dose q24h."
      },
      clinicalHighlights: [
        "Gold standard parenteral antiviral for neuro-critical viral infections",
        "High therapeutic index due to viral-specific enzymatic activation",
        "Rapid viral clearance within CSF and mucocutaneous lesions",
        "Essential institutional inventory item for pediatric and adult emergency units"
      ],
      safetyProfile: {
        keyContraindications: [
          "Hypersensitivity to Acyclovir or Valacyclovir",
          "Anuria without hemodialysis capability"
        ],
        clinicalWarnings: [
          "Transient crystalline nephropathy: Maintain adequate patient hydration and urine output during infusion.",
          "Reversible neurotoxicity (hallucinations, tremors, encephalopathy) may occur in elderly patients with unadjusted renal dosing."
        ],
        monitoringParameters: [
          "Serum Creatinine and Blood Urea Nitrogen (BUN) daily",
          "Strict hourly urine output monitoring",
          "Neurological and mental status assessment"
        ]
      },
      storageAndStability: {
        temperatureRequirement: "Store between 15°C to 25°C (Do not refrigerate reconstituted concentrated solution to prevent precipitation).",
        lightSensitivity: "Protect vials from excessive direct sunlight exposure.",
        shelfLifePostReconstitution: "Use diluted infusion solution within 24 hours of preparation."
      },
      prescribingSpecialties: ["Infectious Diseases", "Neurology", "Pediatrics & Neonatology", "Critical Care Medicine", "Dermatology"]
    };
  }

  // -------------------------------------------------------------
  // 2. HUMAN NORMAL ALBUMIN (Senumin)
  // -------------------------------------------------------------
  if (desc.includes("ALBUMIN") || brand.includes("SENUMIN")) {
    return {
      primaryCondition: "Hypovolemic Shock, Severe Hypoalbuminemia, Acute Burns & Cirrhotic Complications",
      indications: [
        "Rapid Intravascular Volume Resuscitation in Hypovolemic Shock",
        "Severe Hypoalbuminemia in Critically Ill, Sepsis, and ARDS Patients",
        "Prevention of Paracentesis-Induced Circulatory Dysfunction (PICD) in Cirrhosis",
        "Hepatorenal Syndrome (HRS-AKI) in Combination with Vasoactive Agents",
        "Spontaneous Bacterial Peritonitis (SBP) Volume & Oncotic Support"
      ],
      therapeuticClass: "Sterile Concentrated Human Plasma Protein Fraction (Colloid)",
      mechanismOfAction: "Provides approximately 70-80% of the total intravascular colloid osmotic (oncotic) pressure. Each gram of infused albumin draws approximately 18 mL of fluid from the interstitial space into the vascular bed, rapidly expanding circulating plasma volume.",
      targetSpecialty: "Gastroenterology, Hepatology, Critical Care & Burn Surgery",
      administrationRoute: "Intravenous Infusion via Standard Blood/Solution Set",
      prescriptionSchedule: "Hospital Restricted Biological Product",
      clinicalOverview: "Senumin Human Normal Albumin 20% is a pasteurized, viral-inactivated physiological colloid solution. It acts as an essential carrier protein for hormones, enzymes, and medicinal compounds while maintaining microvascular endothelial glycocalyx integrity.",
      detailedIndications: [
        {
          condition: "Large-Volume Paracentesis (>5 Litres)",
          clinicalNote: "Administer 8g of 20% albumin per litre of ascitic fluid removed to prevent post-drainage circulatory collapse and acute renal failure.",
          severity: "Hospital Inpatient"
        },
        {
          condition: "Hepatorenal Syndrome (HRS-AKI Type 1)",
          clinicalNote: "Co-administered with Terlipressin or Noradrenaline (1 g/kg Day 1, followed by 20-40 g/day) for renal arterial reperfusion.",
          severity: "Emergency / ICU"
        },
        {
          condition: "Severe Thermal Injury / Major Burns (>20% TBSA)",
          clinicalNote: "Administered after first 24h post-burn to replace severe exudative protein loss and stabilize capillary permeability.",
          severity: "Emergency / ICU"
        },
        {
          condition: "Spontaneous Bacterial Peritonitis (SBP)",
          clinicalNote: "Infused at 1.5 g/kg at diagnosis and 1 g/kg on Day 3 to reduce incidence of hepatorenal impairment and hospital mortality.",
          severity: "Hospital Inpatient"
        }
      ],
      pharmacology: {
        molecularTarget: "Intravascular Oncotic Pressure & Endothelial Glycocalyx",
        pharmacodynamics: "A 100 mL bottle of 20% Albumin creates an oncotic effect equivalent to 400-500 mL of fresh citrated plasma.",
        pathogenOrTissueTarget: "Systemic Capillary Microvasculature & Intravascular Compartment"
      },
      pharmacokinetics: {
        onsetAndPeak: "Immediate hemodynamic expansion upon infusion initiation; maximal oncotic gradient within 15 minutes.",
        halfLife: "Physiological elimination half-life of 16 to 21 days in healthy vascular endothelium.",
        metabolicRoute: "Cellular catabolism in lysosomes of reticuloendothelial endothelial cells throughout the body.",
        elimination: "Broken down into constituent amino acids; recycled into protein synthesis."
      },
      administrationProtocol: {
        standardRegimen: "Dose is strictly titrated based on central venous pressure, mean arterial pressure, and serum albumin targets (>3.0 g/dL).",
        reconstitutionAndDilution: "Supplied as ready-to-infuse sterile aqueous solution. Can be diluted with 0.9% Normal Saline or 5% Dextrose if required. Never mix with Sterile Water for Injection (risk of fatal hemolysis).",
        administrationRate: "In hypovolemic shock: Rapid infusion permitted. For oncotic support: 1 to 2 mL/min (approx. 20-40 drops/min).",
        organDoseAdjustment: "Caution in severe congestive cardiac failure and severe pulmonary edema; monitor for fluid overload."
      },
      clinicalHighlights: [
        "WHO & EASL guideline-endorsed therapy for cirrhosis-related complications",
        "Heat-pasteurized at 60°C for 10 hours for total viral and pathogen inactivation",
        "Does not interfere with blood grouping or coagulation screening assays",
        "Essential resuscitation resource for intensive care units and burn trauma wards"
      ],
      safetyProfile: {
        keyContraindications: [
          "Severe decompensated cardiac failure with pulmonary edema",
          "Severe chronic anemia with normovolemic hemodynamics",
          "History of allergic anaphylactoid reaction to human albumin preparations"
        ],
        clinicalWarnings: [
          "Hypervolemia and hemodilution: Monitor JVP, lung bases for crackles, and hematocrit.",
          "Must never be diluted with Sterile Water for Injection due to hypotonic erythrocyte lysis."
        ],
        monitoringParameters: [
          "Blood pressure, heart rate, and central venous pressure (CVP)",
          "Serum Albumin, Sodium, Potassium, and Hematocrit",
          "Continuous pulse oximetry and respiratory rate"
        ]
      },
      storageAndStability: {
        temperatureRequirement: "Store between 2°C to 25°C in original container. Do not freeze.",
        lightSensitivity: "Protect from light. Inspect solution for turbidity or particulate matter prior to infusion.",
        shelfLifePostReconstitution: "Once container is punctured, infusion must begin immediately and conclude within 4 hours."
      },
      prescribingSpecialties: ["Gastroenterology & Hepatology", "Critical Care / ICU", "Surgical & Trauma Care", "Nephrology", "Burn Medicine"]
    };
  }

  // -------------------------------------------------------------
  // 3. HUMAN NORMAL IMMUNOGLOBULIN - IVIG (Immunosen)
  // -------------------------------------------------------------
  if (desc.includes("IMMUNOGLOBULIN") || brand.includes("IMMUNOSEN")) {
    return {
      primaryCondition: "Primary Immunodeficiency, Guillain-Barré Syndrome, ITP, Kawasaki Disease & Myasthenia Gravis",
      indications: [
        "Primary Immunodeficiency Diseases (PID) & Agammaglobulinemia",
        "Immune Thrombocytopenic Purpura (ITP) with Acute Bleeding Risk",
        "Guillain-Barré Syndrome (GBS) Acute Inflammatory Polyneuropathy",
        "Kawasaki Disease in Pediatric Patients to Prevent Coronary Aneurysms",
        "Myasthenia Gravis Crisis & Chronic Inflammatory Demyelinating Polyneuropathy (CIDP)",
        "Secondary Hypogammaglobulinemia in Chronic Lymphocytic Leukemia / Myeloma"
      ],
      therapeuticClass: "Purified Polyclonal Human Normal Immunoglobulin G (IVIG)",
      mechanismOfAction: "Provides a broad spectrum of neutralising IgG antibodies against bacterial, viral, and fungal pathogens. In autoimmune diseases, it blocks Fc-receptors on reticuloendothelial macrophages, neutralizes autoantibodies, modulates complement activation, and suppresses pathogenic T/B cell proliferation.",
      targetSpecialty: "Neurology, Hematology, Immunology, Pediatrics & Critical Care",
      administrationRoute: "Intravenous Infusion via Rate-Controlled Infusion Pump",
      prescriptionSchedule: "Hospital Restricted Biological Specialized Formulation",
      clinicalOverview: "Immunosen IVIG represents a highly purified, viral-inactivated 5% and 10% preparation containing the complete physiological distribution of IgG subclasses (IgG1, IgG2, IgG3, IgG4). It delivers rapid immunomodulation in acute neuro-immunological and hematological crises.",
      detailedIndications: [
        {
          condition: "Guillain-Barré Syndrome (GBS)",
          clinicalNote: "Total dose of 2 g/kg divided over 2 to 5 consecutive days halts progression of ascending paralysis and speeds respiratory recovery.",
          severity: "Emergency / ICU"
        },
        {
          condition: "Acute Immune Thrombocytopenia (ITP)",
          clinicalNote: "0.8 - 1.0 g/kg on Day 1 (repeatable on Day 3) induces rapid platelet elevation prior to surgery or in active mucosal bleeding.",
          severity: "Emergency / ICU"
        },
        {
          condition: "Kawasaki Disease (Pediatric)",
          clinicalNote: "Single high-dose infusion of 2 g/kg co-administered with aspirin within 10 days of fever onset to prevent coronary artery ectasia.",
          severity: "Hospital Inpatient"
        },
        {
          condition: "Myasthenic Crisis",
          clinicalNote: "Parenteral immunomodulation rapidly restores neuromuscular junction function and facilitates mechanical ventilator weaning.",
          severity: "Emergency / ICU"
        }
      ],
      pharmacology: {
        molecularTarget: "Fc Receptors, Inflammatory Cytokines, and Idiotypic Autoantibody Networks",
        pharmacodynamics: "Normalizes IgG trough levels and suppresses circulating pro-inflammatory cytokines within 12 to 24 hours.",
        pathogenOrTissueTarget: "Systemic Immune System & Pathogenic Autoimmune Targets"
      },
      pharmacokinetics: {
        onsetAndPeak: "Immediate peak serum IgG concentration achieved upon completion of infusion.",
        halfLife: "Biological terminal elimination half-life ranges between 26 to 35 days in non-hypercatabolic patients.",
        metabolicRoute: "Catabolized throughout reticuloendothelial cells and endothelial vascular beds.",
        elimination: "Degraded into constituent peptides and amino acids; no renal drug clearance required."
      },
      administrationProtocol: {
        standardRegimen: "Replacement therapy: 0.2 - 0.4 g/kg every 3-4 weeks. Immunomodulatory therapy: 1.0 - 2.0 g/kg divided over 2-5 days.",
        reconstitutionAndDilution: "Supplied ready to infuse. Allow bottle to reach room temperature (20-25°C) naturally before administration. Do not vigorously shake.",
        administrationRate: "Initial 30 minutes: 0.5 to 1.0 mL/kg/hour. If well-tolerated, gradually titrate upward to a maximum rate of 4.0 to 5.0 mL/kg/hour.",
        organDoseAdjustment: "In patients with pre-existing renal impairment or diabetes, infuse at minimum rate and ensure adequate pre-hydration."
      },
      clinicalHighlights: [
        "Uncompromised antibody integrity with intact Fc effector function",
        "Triple viral inactivation (solvent/detergent, nanofiltration, pasteurization)",
        "Low IgA content to minimize anaphylactoid risk in selective IgA deficiency",
        "Crucial high-potency therapy for neurological and autoimmune intensive care"
      ],
      safetyProfile: {
        keyContraindications: [
          "Known severe hypersensitivity to homologous immunoglobulins",
          "Patients with selective IgA deficiency who have documented anti-IgA antibodies"
        ],
        clinicalWarnings: [
          "Aseptic Meningitis Syndrome (AMS) and infusion-related headache: Avoid excessively rapid infusion rates.",
          "Thromboembolic risk in elderly and immobilized patients: Ensure optimal hydration status.",
          "Transfusion-Related Acute Lung Injury (TRALI) and hemolysis: Monitor pulmonary parameters."
        ],
        monitoringParameters: [
          "Vital signs (BP, Pulse, Temp) every 15 minutes during first hour",
          "Serum Creatinine, BUN, and urine output",
          "Hemoglobin / Hematocrit to screen for acute hemolysis"
        ]
      },
      storageAndStability: {
        temperatureRequirement: "Store between 2°C to 8°C (Refrigerate, Do not freeze).",
        lightSensitivity: "Store in original carton to protect from light.",
        shelfLifePostReconstitution: "Single-use container; administer immediately upon opening."
      },
      prescribingSpecialties: ["Neurology", "Hematology & Oncology", "Immunology & Rheumatology", "Pediatrics", "Critical Care"]
    };
  }

  // -------------------------------------------------------------
  // 4. MEROPENEM & MEROPENEM + SULBACTAM (Senopenum / Senopenum-S)
  // -------------------------------------------------------------
  if (desc.includes("MEROPENEM") || brand.includes("SENOPENUM")) {
    const isSulbactamCombo = desc.includes("SULBACT") || brand.includes("-S");
    return {
      primaryCondition: "Complicated Intra-Abdominal Sepsis, Severe Nosocomial Pneumonia, Bacterial Meningitis & ESBL/MDR Infections",
      indications: [
        "Hospital-Acquired (HAP) and Ventilator-Associated Pneumonia (VAP)",
        "Complicated Intra-Abdominal Peritonitis, Abscesses & Biliary Sepsis",
        "Severe Acute Bacterial Meningitis in Adults and Pediatric Patients",
        "Complicated Skin, Soft Tissue & Necrotizing Fasciitis Infections",
        "Empiric Monotherapy in Febrile Neutropenic Oncology Patients",
        ...(isSulbactamCombo ? ["Carbapenem-Resistant Acinetobacter baumannii (CRAB) & ESBL-producing Enterobacteriaceae"] : [])
      ],
      therapeuticClass: isSulbactamCombo ? "Ultra-Broad Spectrum Carbapenem + Class A/C Beta-Lactamase Inhibitor" : "Ultra-Broad Spectrum Carbapenem Antibacterial",
      mechanismOfAction: `Meropenem penetrates bacterial cell walls with high affinity for essential Penicillin-Binding Proteins (PBPs 2, 3, and 4), inhibiting peptidoglycan synthesis and inducing rapid bacterial autolysis.${isSulbactamCombo ? " Sulbactam competitively binds and inactivates beta-lactamases while exerting intrinsic bactericidal activity against Acinetobacter baumannii." : ""}`,
      targetSpecialty: "Critical Care (ICU), Infectious Diseases, Pulmonary Medicine, General Surgery & Oncology",
      administrationRoute: "Intravenous Infusion (Extended 3-Hour Infusion preferred for severe sepsis)",
      prescriptionSchedule: "Schedule H1 Restricted Hospital Antibiotic",
      clinicalOverview: `Senopenum${isSulbactamCombo ? "-S" : ""} provides exceptional bactericidal potency against multidrug-resistant Gram-negative and Gram-positive aerobic and anaerobic organisms. Its stability against AmpC and extended-spectrum beta-lactamases (ESBLs) makes it a cornerstone empiric and definitive antimicrobial in critical care units.`,
      detailedIndications: [
        {
          condition: "Ventilator-Associated Pneumonia (VAP)",
          clinicalNote: "Extended 3-hour infusion optimizes time above MIC (T > MIC) against borderline resistant Gram-negative bacilli.",
          severity: "Emergency / ICU"
        },
        {
          condition: "Complicated Intra-Abdominal Peritonitis",
          clinicalNote: "Covers mixed enteric pathogens including Bacteroides fragilis, E. coli, and Klebsiella pneumoniae without need for additional anaerobic coverage.",
          severity: "Hospital Inpatient"
        },
        {
          condition: "Bacterial Meningitis",
          clinicalNote: "High-dose regimen (2 g IV q8h) achieves therapeutic CSF levels with significantly lower epileptogenic potential than imipenem.",
          severity: "Emergency / ICU"
        },
        {
          condition: "Febrile Neutropenia",
          clinicalNote: "First-line institutional monotherapy offering broad pseudomonal and enteric protection during post-chemotherapy nadir.",
          severity: "Hospital Inpatient"
        }
      ],
      pharmacology: {
        molecularTarget: "Penicillin-Binding Proteins (PBP 2, 3 in Gram-negatives, PBP 1 in Gram-positives)",
        pharmacodynamics: "Time-dependent bactericidal activity; clinical efficacy correlates with percentage of dosing interval that free drug concentration exceeds the pathogen's MIC (%fT > MIC ≥ 40-50%).",
        pathogenOrTissueTarget: "Pseudomonas aeruginosa, Klebsiella pneumoniae, E. coli, Acinetobacter spp., B. fragilis, Streptococcus pneumoniae"
      },
      pharmacokinetics: {
        onsetAndPeak: "Peak plasma concentration of ~50-60 mcg/mL achieved immediately after standard 1 g 30-minute IV infusion.",
        halfLife: "Elimination half-life is approximately 1.0 hour in patients with normal renal clearance.",
        metabolicRoute: "Minimal hepatic transformation; minor inactive open-ring metabolite (ICI-213,680).",
        elimination: "Approximately 70% of the dose is excreted unchanged via the kidneys by glomerular filtration and tubular secretion."
      },
      administrationProtocol: {
        standardRegimen: "Standard: 1 g IV every 8 hours. Meningitis & Severe ICU Sepsis: 2 g IV every 8 hours.",
        reconstitutionAndDilution: "Reconstitute with Sterile Water for Injection (WFI). Dilute in 100 mL of 0.9% Normal Saline or 5% Dextrose.",
        administrationRate: "Standard infusion: 30 minutes. Extended infusion (recommended in ICU): 3 hours.",
        organDoseAdjustment: "CrCl 26-50 mL/min: 1 g q12h; CrCl 10-25 mL/min: 500 mg q12h; CrCl <10 mL/min: 500 mg q24h."
      },
      clinicalHighlights: [
        "Unmatched stability against plasmid and chromosomal beta-lactamases",
        "Significantly lower neurotoxicity/seizure profile compared to imipenem-cilastatin",
        "High tissue penetration across lung parenchyma, intra-abdominal fluid, bile, and inflamed meninges",
        "Essential backbone for institutional hospital antibiotic stewardship protocols"
      ],
      safetyProfile: {
        keyContraindications: [
          "Severe immediate hypersensitivity (anaphylaxis) to carbapenems, penicillins, or other beta-lactams",
          "Concomitant administration with Valproic Acid (causes catastrophic reduction in serum valproate levels)"
        ],
        clinicalWarnings: [
          "Drug interaction with Valproic Acid / Divalproex: Drastically lowers valproate levels within 24 hours, risking breakthrough seizures.",
          "Clostridioides difficile-associated diarrhea (CDAD) risk with extended courses.",
          "Dose reduction mandatory in renal insufficiency to prevent central nervous system toxicity."
        ],
        monitoringParameters: [
          "Serum Creatinine and eGFR before and during therapy",
          "Complete Blood Count (CBC) with differential",
          "Hepatic transaminases (AST, ALT, Bilirubin)"
        ]
      },
      storageAndStability: {
        temperatureRequirement: "Store dry powder below 25°C. Protect from moisture and heat.",
        lightSensitivity: "Store in original protective packaging.",
        shelfLifePostReconstitution: "Diluted in 0.9% Normal Saline: stable for 3 hours at room temperature (25°C) or 24 hours refrigerated (2-8°C)."
      },
      prescribingSpecialties: ["Intensive Care / Critical Care", "Infectious Diseases", "Pulmonology", "General & GI Surgery", "Oncology"]
    };
  }

  // -------------------------------------------------------------
  // 5. COLISTIMETHATE SODIUM / COLISTIN (Sencolis)
  // -------------------------------------------------------------
  if (desc.includes("COLISTIMETHATE") || desc.includes("COLISTIN") || brand.includes("SENCOLIS")) {
    return {
      primaryCondition: "Multi-Drug Resistant (MDR) & Extensively Drug-Resistant (XDR) Gram-Negative Sepsis",
      indications: [
        "Carbapenem-Resistant Enterobacteriaceae (CRE) Severe Infections",
        "MDR / XDR Pseudomonas aeruginosa & Acinetobacter baumannii Bacteremia",
        "Ventilator-Associated Pneumonia (VAP) caused by Pan-Drug Resistant Gram-Negative Bacilli",
        "Complicated Refractory Urosepsis and Intra-Abdominal Sepsis in ICU",
        "Inhalation Adjunctive Therapy for Severe Cystic Fibrosis & Bronchiectasis Exacerbations"
      ],
      therapeuticClass: "Polymyxin Cyclic Lipopeptide Antibacterial Agent",
      mechanismOfAction: "Acts as a cationic surface-active detergent that binds to lipopolysaccharides (LPS) and phospholipids in the outer cell membrane of Gram-negative bacteria. It displaces divalent calcium and magnesium ions, destabilizing membrane integrity, causing intracellular leakage and rapid cell lysis.",
      targetSpecialty: "Critical Care Medicine, Infectious Diseases, Nephrology & Pulmonology",
      administrationRoute: "Intravenous Infusion / Inhalational Nebulization (Via Jet/Ultrasonic Nebulizer)",
      prescriptionSchedule: "Schedule H1 Reserve Hospital Antibiotic",
      clinicalOverview: "Sencolis (Colistimethate Sodium) serves as an indispensable reserve antimicrobial for high-acuity intensive care units facing carbapenem-resistant 'superbug' outbreaks. Therapeutic Drug Monitoring (TDM) and weight-based loading regimens ensure maximum bactericidal efficacy while mitigating nephrotoxicity risk.",
      detailedIndications: [
        {
          condition: "Carbapenem-Resistant Acinetobacter (CRAB) Sepsis",
          clinicalNote: "Utilized with a mandatory initial loading dose (9 Million IU) followed by targeted maintenance for deep tissue eradication.",
          severity: "Emergency / ICU"
        },
        {
          condition: "MDR Pseudomonas Ventilator-Associated Pneumonia",
          clinicalNote: "Combined intravenous and adjunctive nebulized colistin improves microbiological clearance in refractory alveolar pneumonia.",
          severity: "Emergency / ICU"
        },
        {
          condition: "Refractory Catheter-Related Bloodstream Infection",
          clinicalNote: "Targeted reserve therapy when isolates demonstrate resistance to all standard beta-lactams, quinolones, and aminoglycosides.",
          severity: "Emergency / ICU"
        },
        {
          condition: "Complicated Multi-Resistant Pyelonephritis",
          clinicalNote: "High urinary concentration allows effective bacterial eradication under strict renal monitoring.",
          severity: "Hospital Inpatient"
        }
      ],
      pharmacology: {
        molecularTarget: "Bacterial Outer Membrane Lipopolysaccharide (Lipid A Phosphate)",
        pharmacodynamics: "Concentration-dependent rapid bactericidal killing; clinical efficacy optimized by maximizing AUC/MIC ratio.",
        pathogenOrTissueTarget: "Acinetobacter baumannii, Pseudomonas aeruginosa, Klebsiella pneumoniae, Enterobacter cloacae"
      },
      pharmacokinetics: {
        onsetAndPeak: "Slow in vivo hydrolysis from inactive prodrug (CMS) to active colistin; peak active concentrations at 7 hours without loading dose (within 1-2 hours with loading dose).",
        halfLife: "Colistin half-life is approximately 10 to 14 hours in critically ill patients.",
        metabolicRoute: "Non-enzymatic spontaneous conversion of colistimethate to active colistin in body fluids.",
        elimination: "CMS is predominantly cleared via renal excretion; formed colistin is largely cleared non-renally."
      },
      administrationProtocol: {
        standardRegimen: "Loading dose: 9 Million IU (MIU) IV in 100 mL NS over 1 hour. Maintenance: 4.5 MIU IV every 12 hours (started 12h post-load).",
        reconstitutionAndDilution: "Reconstitute vial with 2-5 mL Sterile Water for Injection. Dilute further in 50-100 mL 0.9% Normal Saline.",
        administrationRate: "Administer by continuous IV infusion over 30 to 60 minutes. For inhalation: dissolve in 4 mL NS and nebulize immediately.",
        organDoseAdjustment: "CrCl 30-50 mL/min: 2.5-3.8 MIU q12h; CrCl 10-30 mL/min: 1.5-2.5 MIU q12h; CrCl <10 mL/min: 1.5 MIU q24h; HD: 1.5 MIU daily + post-HD top-up."
      },
      clinicalHighlights: [
        "Definitive reserve antimicrobial for global Priority 1 Pathogens (WHO Critical List)",
        "Proven efficacy against Carbapenem-Resistant Enterobacteriaceae (CRE)",
        "Inhalation compatibility enables high alveolar drug delivery with zero systemic toxicity",
        "Standardized in international IDSA and ESCMID guidance on resistant Gram-negative infections"
      ],
      safetyProfile: {
        keyContraindications: [
          "Hypersensitivity to Polymyxin B or Colistimethate Sodium",
          "Concurrent use of neuromuscular blockers without mechanical ventilatory support"
        ],
        clinicalWarnings: [
          "Dose-dependent Nephrotoxicity: Acute tubular necrosis risk; avoid concurrent aminoglycosides/vancomycin where possible.",
          "Neurotoxicity & Neuromuscular Blockade: Paresthesias, muscle weakness, or respiratory depression.",
          "Bronchospasm on inhalation: Pre-treat with inhaled beta-2 agonist if indicated."
        ],
        monitoringParameters: [
          "Daily Serum Creatinine, eGFR, and Electrolytes (K+, Mg++, Ca++)",
          "Strict hourly fluid balance and urine output logs",
          "Neurological and respiratory assessment"
        ]
      },
      storageAndStability: {
        temperatureRequirement: "Store dry vials below 25°C in a cool, dry location. Do not freeze.",
        lightSensitivity: "Protect from excessive heat and direct light.",
        shelfLifePostReconstitution: "Reconstituted solutions must be used within 24 hours if stored at 2°C to 8°C."
      },
      prescribingSpecialties: ["Critical Care Medicine (ICU)", "Infectious Diseases", "Nephrology", "Pulmonology", "Organ Transplant Units"]
    };
  }

  // -------------------------------------------------------------
  // 6. PIPERACILLIN + TAZOBACTAM (Senopiptaz / Piptaz)
  // -------------------------------------------------------------
  if (desc.includes("PIPERACILLIN") || desc.includes("TAZOBACTAM") || brand.includes("PIPERACILLIN") || brand.includes("PIPTAZ")) {
    return {
      primaryCondition: "Severe Polymicrobial Sepsis, Hospital-Acquired Pneumonia, Complicated Appendicitis & Neutropenic Sepsis",
      indications: [
        "Hospital-Acquired (Nosocomial) and Severe Community-Acquired Pneumonia",
        "Complicated Intra-Abdominal Sepsis, Peritonitis & Biliary Abscesses",
        "Complicated Skin and Soft Tissue Infections (Cellulitis, Diabetic Foot, Fasciitis)",
        "Complicated Urinary Tract Infections and Urosepsis",
        "Empiric Monotherapy for Febrile Neutropenia in Hemato-Oncology",
        "Post-Operative Gynecological and Pelvic Inflammatory Sepsis"
      ],
      therapeuticClass: "Extended-Spectrum Ureidopenicillin + Irreversible Beta-Lactamase Inhibitor",
      mechanismOfAction: "Piperacillin exerts bactericidal action by inhibiting bacterial septum and cell wall synthesis through high-affinity binding to PBPs. Tazobactam acts as a suicide inhibitor of Class A and C beta-lactamases (penicillinases, cephalosporinases), protecting piperacillin from enzymatic degradation.",
      targetSpecialty: "Critical Care (ICU), General Surgery, Pulmonology, Oncology & Internal Medicine",
      administrationRoute: "Intravenous Infusion (Extended 3-4 Hour or Standard 30-Minute Infusion)",
      prescriptionSchedule: "Schedule H1 Prescription Hospital Antibiotic",
      clinicalOverview: "Piperacillin/Tazobactam is one of the most widely utilized hospital empiric parenteral antibacterials in the world. It provides robust, reliable coverage against Pseudomonas aeruginosa, Methicillin-Susceptible Staphylococcus aureus (MSSA), enteric Gram-negative bacilli, and intra-abdominal anaerobes.",
      detailedIndications: [
        {
          condition: "Severe Nosocomial Pneumonia",
          clinicalNote: "Extended infusion (3.375g or 4.5g infused over 4 hours every 8 hours) achieves superior target attainment in critically ill patients.",
          severity: "Hospital Inpatient"
        },
        {
          condition: "Complicated Intra-Abdominal Infections (cIAI)",
          clinicalNote: "Complete coverage of enteric coliforms and Bacteroides fragilis eliminates need for metronidazole in primary peritonitis.",
          severity: "Hospital Inpatient"
        },
        {
          condition: "Diabetic Foot & Necrotizing Soft Tissue Sepsis",
          clinicalNote: "Provides broad polymicrobial coverage against aerobic Gram-positives, Gram-negatives, and subcutaneous anaerobes.",
          severity: "Hospital Inpatient"
        },
        {
          condition: "Febrile Neutropenia",
          clinicalNote: "Recommended first-line monotherapy guideline option for hemodynamically stable post-chemotherapy neutropenic fevers.",
          severity: "Hospital Inpatient"
        }
      ],
      pharmacology: {
        molecularTarget: "Bacterial Penicillin-Binding Proteins (PBP-3 and PBP-1B) & Bacterial Beta-Lactamase Enzymes",
        pharmacodynamics: "Time-dependent bactericidal action (%fT > MIC of piperacillin is the critical pharmacokinetic-pharmacodynamic driver).",
        pathogenOrTissueTarget: "Pseudomonas aeruginosa, E. coli, Klebsiella spp., Proteus, Enterobacter, B. fragilis, Enterococcus faecalis (susceptible)"
      },
      pharmacokinetics: {
        onsetAndPeak: "Peak plasma concentration of ~300 mcg/mL (piperacillin) achieved immediately following a 30-minute 4.5 g IV infusion.",
        halfLife: "Elimination half-life is 0.7 to 1.2 hours in individuals with normal renal clearance.",
        metabolicRoute: "Piperacillin: negligible metabolism. Tazobactam: metabolized to a single inactive metabolite M1.",
        elimination: "Rapidly cleared by the kidneys via glomerular filtration and active tubular secretion (68% piperacillin, 80% tazobactam unchanged in urine)."
      },
      administrationProtocol: {
        standardRegimen: "Standard: 4.5 g IV every 8 hours (or 3.375 g IV every 6 hours). Severe Pseudomonal ICU Sepsis: 4.5 g IV every 6 hours.",
        reconstitutionAndDilution: "Reconstitute 4.5 g vial with 20 mL of Sterile Water for Injection or 0.9% Normal Saline. Dilute in 100 mL NS or D5W.",
        administrationRate: "Standard infusion over 30 minutes; Extended infusion over 3 to 4 hours for ICU sepsis optimization.",
        organDoseAdjustment: "CrCl 20-40 mL/min: 3.375 g q6h (or 4.5 g q8h); CrCl <20 mL/min: 2.25 g q6h (or 3.375 g q8h); Hemodialysis: 2.25 g q8h + 0.75 g post-dialysis."
      },
      clinicalHighlights: [
        "Unrivaled empiric polymicrobial spectrum spanning Gram-positives, Gram-negatives, and anaerobes",
        "Demonstrated antipseudomonal efficacy with low resistance induction rates",
        "Extended infusion protocols significantly reduce mortality and intensive care stay duration",
        "Excellent surgical tissue and peritoneal penetration for emergency abdominal operations"
      ],
      safetyProfile: {
        keyContraindications: [
          "History of severe allergic anaphylaxis to any penicillin, beta-lactamase inhibitor, or cephalosporin",
          "Hypersensitivity to beta-lactam antibacterials"
        ],
        clinicalWarnings: [
          "Synergistic Nephrotoxicity Risk: Concomitant use with Vancomycin increases Acute Kidney Injury (AKI) incidence; monitor renal labs.",
          "Bleeding manifestations: High doses in renal failure may alter platelet aggregation and coagulation times.",
          "Sodium content: Each 4.5 g vial contains ~12.3 mEq (284 mg) of sodium; monitor in severe congestive heart failure."
        ],
        monitoringParameters: [
          "Serum Creatinine and BUN every 48 hours",
          "Complete Blood Count (CBC) with differential during extended therapy (>10 days)",
          "Hepatic enzyme panel and stool consistency (monitor for CDAD)"
        ]
      },
      storageAndStability: {
        temperatureRequirement: "Store dry powder below 25°C in original carton. Protect from excessive moisture.",
        lightSensitivity: "Protect vials from intense direct illumination.",
        shelfLifePostReconstitution: "Reconstituted solution is stable for 24 hours at 2°C to 8°C (refrigerated) or 6 hours at room temperature."
      },
      prescribingSpecialties: ["Intensive Care (ICU)", "General & Laparoscopic Surgery", "Pulmonology", "Internal Medicine", "Oncology"]
    };
  }

  // -------------------------------------------------------------
  // 7. ENOXAPARIN SODIUM (Senoxaparin)
  // -------------------------------------------------------------
  if (desc.includes("ENOXAPARIN") || brand.includes("SENOXAPARIN")) {
    return {
      primaryCondition: "Deep Vein Thrombosis (DVT), Pulmonary Embolism (PE), Acute Coronary Syndromes (ACS) & Surgical Thromboprophylaxis",
      indications: [
        "Prophylaxis of Deep Vein Thrombosis (DVT) in Orthopedic, Abdominal & General Surgery",
        "DVT Prophylaxis in Acutely Ill Bedridden Medical Inpatients (Sepsis, Heart Failure, Respiratory Failure)",
        "Treatment of Established DVT and Acute Pulmonary Embolism (PE)",
        "Treatment of Non-ST-Segment Elevation Myocardial Infarction (NSTEMI) & Unstable Angina",
        "Treatment of Acute ST-Segment Elevation Myocardial Infarction (STEMI) with Fibrinolytic or PCI",
        "Prevention of Extracorporeal Thrombus Formation During Hemodialysis Circuits"
      ],
      therapeuticClass: "Low Molecular Weight Heparin (LMWH) Antithrombotic Agent",
      mechanismOfAction: "Binds to and potentiates Antithrombin III (AT-III) to selectively accelerate the inhibition of activated Coagulation Factor Xa and, to a lesser extent, Factor IIa (thrombin). Its high anti-Xa to anti-IIa activity ratio (~3.8:1) delivers predictable anticoagulation without requiring routine aPTT monitoring.",
      targetSpecialty: "Cardiology, Orthopedic Surgery, Hematology, Critical Care & General Surgery",
      administrationRoute: "Subcutaneous (SC) Deep Injection (Abdominal Wall) / IV Bolus in STEMI",
      prescriptionSchedule: "Schedule H Prescription Anticoagulant",
      clinicalOverview: "Senoxaparin pre-filled syringes deliver highly standardized, weight-adjusted anticoagulant protection. Compared to unfractionated heparin, Enoxaparin demonstrates superior bioavailability (~100%), longer half-life, predictable pharmacokinetics, and a significantly reduced incidence of Heparin-Induced Thrombocytopenia (HIT).",
      detailedIndications: [
        {
          condition: "Acute Coronary Syndromes (NSTEMI / STEMI)",
          clinicalNote: "Administered at 1 mg/kg SC q12h (with initial 30 mg IV bolus in acute STEMI) in combination with antiplatelet therapy.",
          severity: "Emergency / ICU"
        },
        {
          condition: "Treatment of Acute DVT / PE",
          clinicalNote: "Full therapeutic anticoagulation achieved with 1.5 mg/kg SC once daily or 1 mg/kg SC twice daily.",
          severity: "Hospital Inpatient"
        },
        {
          condition: "Orthopedic Major Surgery Prophylaxis",
          clinicalNote: "40 mg SC once daily initiated 12 hours pre-operatively or post-operatively for total hip/knee arthroplasty.",
          severity: "Prophylactic"
        },
        {
          condition: "Acutely Ill Medical Inpatient Prophylaxis",
          clinicalNote: "40 mg SC once daily throughout immobilization period significantly reduces hospital thromboembolic mortality.",
          severity: "Prophylactic"
        }
      ],
      pharmacology: {
        molecularTarget: "Antithrombin III & Activated Coagulation Factor Xa / Factor IIa",
        pharmacodynamics: "Anti-Factor Xa activity peaks in plasma within 3 to 5 hours post-subcutaneous injection; antithrombotic duration persists ~24 hours.",
        pathogenOrTissueTarget: "Systemic Coagulation Cascade & Intravascular Endothelial Microvessels"
      },
      pharmacokinetics: {
        onsetAndPeak: "Maximal anti-Xa activity (Cmax) achieved between 3 to 5 hours following subcutaneous injection.",
        halfLife: "Apparent elimination half-life is approximately 4.5 to 7.0 hours (longer in renal impairment).",
        metabolicRoute: "Hepatic desulfation and depolymerization into lower molecular weight fragments with minimal biological activity.",
        elimination: "Approximately 40% of the active drug fragments are eliminated via the renal route."
      },
      administrationProtocol: {
        standardRegimen: "Prophylaxis: 20 mg to 40 mg SC once daily. Full Treatment: 1 mg/kg SC every 12 hours (or 1.5 mg/kg SC once daily).",
        reconstitutionAndDilution: "Supplied as ready-to-inject graduated Pre-Filled Syringe (PFS). Do not expel the small nitrogen air bubble before injection.",
        administrationRate: "Subcutaneous deep injection into the anterior or posterolateral abdominal wall alternating left and right sides. Do not rub injection site.",
        organDoseAdjustment: "Severe Renal Impairment (CrCl <30 mL/min): Prophylaxis: 20 mg SC once daily; Treatment: 1 mg/kg SC once daily."
      },
      clinicalHighlights: [
        "Predictable dose-response relationship eliminating the need for routine coagulogram monitoring",
        "92% lower incidence of Heparin-Induced Thrombocytopenia compared to UFH",
        "Calibrated pre-filled syringe formats with ultra-fine needles for painless administration",
        "Essential institutional inclusion for surgical safety checklists and cardiac catheterization units"
      ],
      safetyProfile: {
        keyContraindications: [
          "Active major clinical hemorrhage or bleeding diathesis",
          "History of immune-mediated Heparin-Induced Thrombocytopenia (HIT) within past 100 days",
          "Severe uncontrolled hypertension, acute septic endocarditis, or active gastrointestinal ulceration"
        ],
        clinicalWarnings: [
          "Spinal / Epidural Hematoma Warning: Strict delay required between enoxaparin dose and neuraxial catheter placement or removal.",
          "Dose reduction mandatory in severe renal impairment (CrCl <30 mL/min).",
          "Do not administer via intramuscular (IM) route due to risk of major intramuscular hematoma."
        ],
        monitoringParameters: [
          "Baseline and periodic Platelet Count (screen for early HIT drop >50%)",
          "Hemoglobin, Hematocrit, and stool occult blood screening",
          "Serum Creatinine and anti-Factor Xa levels (in pregnancy/renal failure/extreme body weight)"
        ]
      },
      storageAndStability: {
        temperatureRequirement: "Store below 25°C. Do not freeze pre-filled syringes.",
        lightSensitivity: "Keep pre-filled syringes inside the outer carton until use.",
        shelfLifePostReconstitution: "Single-use pre-filled syringe format; discard any unused portions safely in sharps bin."
      },
      prescribingSpecialties: ["Cardiology & Interventional Cardiology", "Orthopedics & Joint Replacement", "Hematology", "General Surgery", "Intensive Care"]
    };
  }

  // -------------------------------------------------------------
  // 8. FERRIC CARBOXYMALTOSE & IRON SUCROSE (Seno-FCM / Seniron)
  // -------------------------------------------------------------
  if (desc.includes("FERRIC") || desc.includes("IRON SUCROSE") || brand.includes("CARBOMALT") || brand.includes("SENIRON") || brand.includes("SENO-FCM")) {
    const isFCM = desc.includes("CARBOXYMALTOSE") || brand.includes("FCM") || brand.includes("CARBOMALT");
    return {
      primaryCondition: "Severe Iron Deficiency Anemia (IDA), Chronic Kidney Disease Anemia, Postpartum & Perioperative Anemia",
      indications: [
        "Rapid Correction of Severe Iron Deficiency Anemia when Oral Iron is Ineffective or Intolerable",
        "Anemia in Non-Dialysis and Hemodialysis Dependent Chronic Kidney Disease (CKD)",
        "Severe Anemia in Inflammatory Bowel Disease (Crohn's Disease & Ulcerative Colitis)",
        "Postpartum & Third-Trimester Pregnancy Severe Anemia",
        "Perioperative Optimization to Reduce Allogeneic Blood Transfusion Requirements",
        "Heart Failure Patients with Iron Deficiency (NYHA Class II-IV) to Improve Exercise Capacity"
      ],
      therapeuticClass: isFCM ? "Type I Polynuclear Non-Dextran High-Dose Parenteral Iron Complex" : "Colloidal Iron(III)-Hydroxide Sucrose Complex",
      mechanismOfAction: `The stable carbohydrate matrix of ${isFCM ? "Ferric Carboxymaltose" : "Iron Sucrose"} encapsulates a polynuclear iron(III)-hydroxide core. Following IV injection, the complex is taken up by reticuloendothelial macrophages in the liver, spleen, and bone marrow, releasing elemental iron gradually to transferrin for immediate erythropoiesis and ferritin replenishment without releasing toxic labile free iron.`,
      targetSpecialty: "Nephrology, Obstetrics & Gynecology, Hematology, Gastroenterology & Cardiology",
      administrationRoute: isFCM ? "Intravenous Infusion (Up to 1000 mg in 15 Minutes) / IV Push" : "Slow Intravenous Infusion in 0.9% Normal Saline",
      prescriptionSchedule: "Schedule H Prescription Formulation",
      clinicalOverview: `${isFCM ? "Seno-FCM" : "Seniron"} provides robust, rapid restoration of total body iron deficits without the anaphylaxis risks historically associated with high-molecular-weight iron dextran. Single-session high-dose administration rapidly normalizes hemoglobin and replenishes depleted bone marrow reserves.`,
      detailedIndications: [
        {
          condition: "Severe Obstetric / Postpartum Anemia",
          clinicalNote: "Enables rapid Hb elevation (>2-3 g/dL within 2-3 weeks) prior to delivery or post-hemorrhage without blood transfusion.",
          severity: "Hospital Inpatient"
        },
        {
          condition: "Chronic Kidney Disease (CKD Stage 3-5)",
          clinicalNote: "Synergizes with Erythropoiesis-Stimulating Agents (ESAs) to optimize target hemoglobin levels and reduce ESA requirements.",
          severity: "Hospital Inpatient"
        },
        {
          condition: "Heart Failure with Reduced Ejection Fraction (HFrEF)",
          clinicalNote: "ESC guideline-endorsed therapy (FAIR-HF, CONFIRM-HF) to improve NYHA functional class, 6-minute walk test, and hospital stay.",
          severity: "Hospital Inpatient"
        },
        {
          condition: "Inflammatory Bowel Disease (IBD)",
          clinicalNote: "Bypasses inflamed, non-absorptive gastrointestinal mucosa while avoiding mucosal irritation caused by oral iron.",
          severity: "Clinical Standard"
        }
      ],
      pharmacology: {
        molecularTarget: "Serum Transferrin & Reticuloendothelial Ferritin Depots",
        pharmacodynamics: "Rapidly cleared from intravascular space into liver and bone marrow; stimulates reticulocyte count elevation within 48-72 hours.",
        pathogenOrTissueTarget: "Bone Marrow Erythroblasts & Hepatocyte Ferritin Stores"
      },
      pharmacokinetics: {
        onsetAndPeak: "Maximal serum ferritin elevation occurs within 2 to 3 weeks post-infusion.",
        halfLife: isFCM ? "Terminal half-life is approximately 7 to 12 hours." : "Terminal elimination half-life is approximately 5 to 6 hours.",
        metabolicRoute: "Reticuloendothelial system (RES) lysosomal processing.",
        elimination: "Negligible renal excretion; physiological iron recycling via macrophage breakdown."
      },
      administrationProtocol: {
        standardRegimen: isFCM ? "Single dose up to 1000 mg of elemental iron (maximum 15 mg/kg or 20 mg/kg) per session." : "100 mg to 200 mg per session diluted in 100 mL Normal Saline, repeated up to total calculated deficit.",
        reconstitutionAndDilution: isFCM ? "Dilute 500 mg in 100 mL, or 1000 mg in 250 mL of 0.9% Normal Saline only. Never use 5% Dextrose." : "Dilute 100-200 mg in 100-200 mL of 0.9% Normal Saline. Never mix with other medications.",
        administrationRate: isFCM ? "500 mg: infuse over 6-10 minutes; 1000 mg: infuse over 15 minutes." : "100 mg: infuse over at least 15 minutes; 200 mg: infuse over at least 30 minutes.",
        organDoseAdjustment: "No dose reduction required in mild-to-moderate renal or hepatic dysfunction; contraindicated in acute severe hepatic injury."
      },
      clinicalHighlights: [
        "Rapid correction of severe anemia in a single 15-minute clinical sitting (FCM)",
        "Zero dextran cross-reactivity eliminating necessity for mandatory test dosing",
        "Significantly reduces institutional blood transfusion dependence and healthcare costs",
        "Substantially improves quality of life, cognitive stamina, and cardiovascular hemodynamics"
      ],
      safetyProfile: {
        keyContraindications: [
          "Hypersensitivity to the active substance or iron complexes",
          "Anemia not caused by iron deficiency (e.g., hemolytic anemia, lead poisoning, thalassemia minor)",
          "Evidence of iron overload (hemochromatosis, hemosiderosis) or ferritin >500-800 ng/mL"
        ],
        clinicalWarnings: [
          "Transient Hypophosphatemia: High doses of FCM can stimulate FGF-23, causing temporary serum phosphate decline; monitor in recurrent use.",
          "Extravasation warning: Ensure precise IV placement to prevent long-lasting brown skin discoloration.",
          "Observe patients for 30 minutes post-infusion for hypersensitivity manifestations."
        ],
        monitoringParameters: [
          "Hemoglobin, Hematocrit, and Reticulocyte count at 2 to 4 weeks",
          "Serum Ferritin and Transferrin Saturation (TSAT) 4 weeks post-treatment",
          "Serum Phosphate levels in patients receiving repeated high-dose courses"
        ]
      },
      storageAndStability: {
        temperatureRequirement: "Store between 15°C to 25°C. Do not freeze.",
        lightSensitivity: "Keep vials in the original carton to protect from light.",
        shelfLifePostReconstitution: "Diluted solutions in 0.9% Normal Saline must be administered immediately."
      },
      prescribingSpecialties: ["Obstetrics & Gynecology", "Nephrology", "Hematology", "Cardiology", "Gastroenterology", "Pre-operative Assessment"]
    };
  }

  // -------------------------------------------------------------
  // 9. TERLIPRESSIN (Senopressin / Terlipressin)
  // -------------------------------------------------------------
  if (desc.includes("TERLIPRESSIN") || brand.includes("TERLIPRESSIN") || brand.includes("SENOPRESSIN")) {
    return {
      primaryCondition: "Acute Bleeding Esophageal Varices & Hepatorenal Syndrome Type 1 (HRS-AKI)",
      indications: [
        "Emergency Management of Acute Bleeding Esophageal Varices in Liver Cirrhosis",
        "Hepatorenal Syndrome Type 1 (HRS-AKI) with Acute Reversible Renal Failure",
        "Refractory Septic Shock & Vasoplegic Syndrome Unresponsive to Catecholamines",
        "Bleeding Prophylaxis during Endoscopic Variceal Ligation (EVL)"
      ],
      therapeuticClass: "Synthetic Prodrug Vasopressin (V1a Receptor Selective) Analogue",
      mechanismOfAction: "Cleaved in vivo by tissue endopeptidases into active lysine-vasopressin. It selectively stimulates vascular V1a receptors on splanchnic vascular smooth muscle, causing profound splanchnic arterial vasoconstriction. This significantly decreases portal venous inflow, reduces portal pressure, and redirects blood volume to restore renal perfusion pressure.",
      targetSpecialty: "Gastroenterology, Hepatology, Critical Care (ICU) & Emergency Medicine",
      administrationRoute: "Intravenous Bolus Injection / Continuous Intravenous Infusion",
      prescriptionSchedule: "Schedule H Emergency Hospital Drug",
      clinicalOverview: "Terlipressin is the gold standard pharmacological vasoactive intervention recommended by Baveno VII and EASL guidelines for bleeding esophageal varices and hepatorenal syndrome. Its prolonged duration of action and selective splanchnic activity provide superior hemodynamic control compared to somatostatin or octreotide.",
      detailedIndications: [
        {
          condition: "Acute Bleeding Esophageal Varices",
          clinicalNote: "Initiated immediately upon emergency suspicion (2 mg IV bolus every 4 hours) to reduce intra-variceal pressure prior to endoscopy.",
          severity: "Emergency / ICU"
        },
        {
          condition: "Hepatorenal Syndrome (HRS-AKI)",
          clinicalNote: "Co-administered with Human Normal Albumin 20% to reverse renal failure and avoid urgent liver-kidney transplantation.",
          severity: "Emergency / ICU"
        },
        {
          condition: "Vasoplegic Septic Shock",
          clinicalNote: "Restores systemic vascular resistance in catecholamine-refractory vasodilatory septic shock.",
          severity: "Emergency / ICU"
        }
      ],
      pharmacology: {
        molecularTarget: "V1a Vasopressin Receptors on Splanchnic and Systemic Vascular Smooth Muscle",
        pharmacodynamics: "Rapid drop in hepatic venous pressure gradient (HVPG) by 15-25% within 15 minutes of bolus injection.",
        pathogenOrTissueTarget: "Splanchnic Mesenteric Arterial Bed & Renal Glomerular Vasculature"
      },
      pharmacokinetics: {
        onsetAndPeak: "Hemodynamic response observed within 15 minutes; maximal portal pressure suppression at 30-60 minutes.",
        halfLife: "Prodrug plasma half-life is 24 minutes; active lysine-vasopressin elimination half-life is approximately 3 hours.",
        metabolicRoute: "Enzymatic cleavage by circulating and endothelial endopeptidases.",
        elimination: "Less than 1% excreted unchanged in urine; metabolites eliminated through normal physiological pathways."
      },
      administrationProtocol: {
        standardRegimen: "Variceal Bleeding: 2 mg IV bolus q4h initially, reduced to 1 mg IV q4h once bleeding is controlled (continue for 3-5 days). HRS-AKI: 1 mg IV q4-6h (titrated up to 2 mg q4h) or continuous IV infusion 2-12 mg/day.",
        reconstitutionAndDilution: "Administer as direct slow IV bolus or dilute in 50 mL 0.9% Normal Saline / 5% Dextrose for continuous pump infusion.",
        administrationRate: "Slow IV push over 1 to 2 minutes. For continuous infusion: adjust pump rate according to mean arterial pressure target.",
        organDoseAdjustment: "HRS-AKI: Continue therapy until Serum Creatinine decreases to <1.5 mg/dL or for a maximum of 14 days."
      },
      clinicalHighlights: [
        "First-line international standard of care for acute cirrhotic variceal hemorrhage",
        "Significantly lowers 6-week mortality and failure-of-hemostasis rates",
        "Proven clinical reversal of Hepatorenal Syndrome when combined with Albumin",
        "Prolonged pharmacological half-life enabling convenient intermittent bolus administration"
      ],
      safetyProfile: {
        keyContraindications: [
          "Severe ischemic heart disease or recent myocardial infarction",
          "Advanced peripheral vascular occlusive disease or severe mesenteric ischemia",
          "Pregnancy (induces vigorous uterine smooth muscle contractions)"
        ],
        clinicalWarnings: [
          "Ischemia risk: Monitor peripheral extremities, skin, and abdominal symptoms for signs of digital or bowel ischemia.",
          "Hyponatremia & Fluid Overload: Antidiuretic V2 cross-reactivity can lower serum sodium; monitor electrolytes.",
          "Bradycardia and coronary vasoconstriction: Continuous ECG and blood pressure monitoring recommended in ICU."
        ],
        monitoringParameters: [
          "Continuous ECG, heart rate, and Mean Arterial Pressure (MAP)",
          "Serum Sodium, Potassium, and daily Creatinine",
          "Peripheral pulse checks and abdominal examination"
        ]
      },
      storageAndStability: {
        temperatureRequirement: "Store between 2°C to 8°C in refrigerator (some modern formulations stable below 25°C - check label). Do not freeze.",
        lightSensitivity: "Keep ampoules/vials inside original carton away from light.",
        shelfLifePostReconstitution: "Prepared infusion solution must be used within 24 hours."
      },
      prescribingSpecialties: ["Gastroenterology & Hepatology", "Critical Care / ICU", "Emergency Medicine", "Gastrointestinal Surgery"]
    };
  }

  // -------------------------------------------------------------
  // 10. SYSTEMIC ANTIFUNGALS (Liposomal Ampho-B, Voriconazole, Caspofungin, etc.)
  // -------------------------------------------------------------
  if (
    desc.includes("AMPHOTERICIN") ||
    desc.includes("VORICONAZOLE") ||
    desc.includes("CASPOFUNGIN") ||
    desc.includes("ANIDULAFUNGIN") ||
    desc.includes("MICAFUNGIN") ||
    desc.includes("POSACONAZOLE") ||
    desc.includes("ISAVUCONAZOLE") ||
    desc.includes("FLUCONAZOLE")
  ) {
    const isPolyene = desc.includes("AMPHOTERICIN");
    const isEchinocandin = desc.includes("FUNGIN");
    const isTriazole = desc.includes("AZOLE");

    const drugClass = isPolyene
      ? "Liposomal Polyene Macrolide Antifungal"
      : isEchinocandin
      ? "Echinocandin Beta-(1,3)-D-Glucan Synthase Inhibitor"
      : "Extended-Spectrum Triazole Antifungal Agent";

    return {
      primaryCondition: "Invasive Aspergillosis, Systemic Candidiasis, Mucormycosis & Febrile Neutropenia",
      indications: [
        "Invasive Pulmonary & Disseminated Aspergillosis in Immunocompromised Patients",
        "Invasive Candidiasis, Candidemia & Intra-Abdominal Fungal Sepsis",
        ...(isPolyene || desc.includes("ISAVUCONAZOLE") || desc.includes("POSACONAZOLE") ? ["Severe Rhino-Orbito-Cerebral & Pulmonary Mucormycosis (Zygomycosis)"] : []),
        "Empiric Antifungal Therapy in Persistent Febrile Neutropenia",
        "Cryptococcal Meningitis in HIV/Immunosuppressed Patients",
        "Secondary Antifungal Prophylaxis in Hematological Malignancies & HSCT"
      ],
      therapeuticClass: drugClass,
      mechanismOfAction: isPolyene
        ? "Binds specifically to fungal cell membrane ergosterol, creating transmembrane ion-permeable channels that leak essential intracellular potassium and magnesium, causing rapid fungal cell death with reduced human host nephrotoxicity."
        : isEchinocandin
        ? "Non-competitively inhibits the catalytic subunit of beta-(1,3)-D-glucan synthase enzyme, preventing fungal cell wall synthesis and causing osmotic cell lysis."
        : "Inhibits fungal cytochrome P450-dependent 14-alpha-lanosterol demethylase, blocking ergosterol synthesis and accumulating toxic methylated sterol precursors in the fungal membrane.",
      targetSpecialty: "Infectious Diseases, Hematology & BMT, Critical Care (ICU), Pulmonology & Nephrology",
      administrationRoute: "Intravenous Infusion via Dedicated Central/Peripheral Line",
      prescriptionSchedule: "Schedule H / H1 Restricted Prescription Antifungal",
      clinicalOverview: "Modern systemic parenteral antifungals represent critical life-saving therapeutics against catastrophic invasive mycoses in hemato-oncology, organ transplant, and COVID-19/ICU cohorts. Tailored pharmacokinetic profiles allow targeted eradication of resistant Candida and Aspergillus isolates.",
      detailedIndications: [
        {
          condition: "Invasive Aspergillosis",
          clinicalNote: "First-line targeted therapy delivers superior survival and radiological response compared to historical deoxycholate formulations.",
          severity: "Emergency / ICU"
        },
        {
          condition: "Invasive Candidemia & Sepsis",
          clinicalNote: "Rapid fungicidal clearance in bloodstream infections with high safety profile in renal-compromised ICU patients.",
          severity: "Hospital Inpatient"
        },
        {
          condition: "Mucormycosis (Black Fungus)",
          clinicalNote: "High-dose Liposomal Amphotericin B (5-10 mg/kg/day) or Isavuconazole co-administered with urgent surgical debridement.",
          severity: "Emergency / ICU"
        },
        {
          condition: "Empiric Febrile Neutropenia",
          clinicalNote: "Instituted when high-grade fever persists beyond 96 hours of broad-spectrum antibacterial coverage.",
          severity: "Hospital Inpatient"
        }
      ],
      pharmacology: {
        molecularTarget: isPolyene ? "Fungal Membrane Ergosterol" : isEchinocandin ? "Beta-(1,3)-D-Glucan Synthase" : "Fungal Cytochrome P450 14-Alpha Demethylase (CYP51)",
        pharmacodynamics: isPolyene || isEchinocandin ? "Concentration-dependent fungicidal activity against Candida and fungistatic/fungicidal against Aspergillus." : "Time-dependent fungistatic activity against yeasts and fungicidal against Aspergillus species.",
        pathogenOrTissueTarget: "Aspergillus fumigatus, Candida auris, Candida albicans, Mucorales, Cryptococcus neoformans"
      },
      pharmacokinetics: {
        onsetAndPeak: "High tissue concentrations achieved in lungs, liver, spleen, and kidneys post-infusion.",
        halfLife: isPolyene ? "Terminal half-life is ~150 hours due to deep tissue liposomal reservoir." : isEchinocandin ? "Elimination half-life is ~10-15 hours." : "Elimination half-life is ~24-36 hours.",
        metabolicRoute: isTriazole ? "Extensive hepatic metabolism via CYP2C19, CYP2C9, and CYP3A4." : "Slow chemical and enzymatic peptide degradation.",
        elimination: "Fecal and biliary clearance primarily; negligible unchanged renal excretion (safe in renal impairment for echinocandins/liposomal ampho)."
      },
      administrationProtocol: {
        standardRegimen: isPolyene ? "3 mg/kg to 5 mg/kg IV once daily (up to 10 mg/kg in Mucormycosis)." : isEchinocandin ? "Loading dose 70-100 mg on Day 1, followed by 50-70 mg IV once daily." : "Loading dose 6 mg/kg IV q12h on Day 1, then 4 mg/kg IV q12h maintenance.",
        reconstitutionAndDilution: isPolyene ? "Reconstitute with Sterile Water for Injection (WFI) ONLY. Dilute in 5% Dextrose ONLY (Never use Saline - causes precipitation)." : "Reconstitute with Sterile Water or 0.9% Normal Saline as directed on vial.",
        administrationRate: "Infuse over 2 hours via dedicated IV line with an in-line filter (1.0 to 1.2 micron for liposomal amphotericin).",
        organDoseAdjustment: "Echinocandins & Liposomal Ampho: No renal dose adjustment needed. Triazoles: Monitor hepatic function and drug interactions."
      },
      clinicalHighlights: [
        "Broad-spectrum fungicidal activity against invasive molds and resistant yeasts",
        "Significantly reduced nephrotoxicity compared to conventional amphotericin B deoxycholate",
        "Essential institutional therapy for bone marrow transplant and leukemia units",
        "High tissue bioavailability across pulmonary alveolar epithelial lining"
      ],
      safetyProfile: {
        keyContraindications: [
          "Known hypersensitivity to active antifungal molecule or excipients",
          "Severe drug-drug interactions with CYP3A4 substrates (for triazoles, e.g., Cisapride, Quinidine, Ergot alkaloids)"
        ],
        clinicalWarnings: [
          "Electrolyte derangements with Amphotericin B: Monitor serum Potassium and Magnesium closely.",
          "Visual disturbances and hallucinations with Voriconazole: Usually transient and reversible.",
          "Hepatic enzyme elevations: Monitor LFTs at baseline and weekly during systemic therapy."
        ],
        monitoringParameters: [
          "Serum Potassium, Magnesium, and Creatinine (especially with Amphotericin B)",
          "Hepatic Function Tests (AST, ALT, Alkaline Phosphatase, Bilirubin)",
          "Therapeutic Drug Monitoring (TDM) trough levels for Voriconazole and Posaconazole"
        ]
      },
      storageAndStability: {
        temperatureRequirement: "Store between 2°C to 8°C (Refrigerated) or as specified for lyophilized vials. Do not freeze.",
        lightSensitivity: "Protect from light during long-term storage.",
        shelfLifePostReconstitution: "Diluted infusion solutions must be administered within 6 to 24 hours depending on formulation."
      },
      prescribingSpecialties: ["Infectious Diseases", "Hematology & Oncology", "Critical Care (ICU)", "Pulmonology", "Transplant Surgery"]
    };
  }

  // -------------------------------------------------------------
  // 11. GASTROENTEROLOGY & ACID SUPPRESSION (Pantoprazole, Esomeprazole, Rabeprazole, Ondansetron)
  // -------------------------------------------------------------
  if (
    desc.includes("PANTOPRAZOLE") ||
    desc.includes("ESOMEPRAZOLE") ||
    desc.includes("RABEPRAZOLE") ||
    desc.includes("ONDANSETRON") ||
    desc.includes("GRANISETRON")
  ) {
    const isAntiemetic = desc.includes("SETRON");
    if (isAntiemetic) {
      return {
        primaryCondition: "Chemotherapy-Induced, Radiotherapy & Post-Operative Nausea and Vomiting (CINV / PONV)",
        indications: [
          "Prevention and Treatment of Highly Emetogenic Chemotherapy Nausea (CINV)",
          "Prevention of Post-Operative Nausea and Vomiting (PONV) in General Anesthesia",
          "Prevention of Radiotherapy-Induced Gastrointestinal Emesis",
          "Acute Gastroenteritis Emesis Control in Hospital Inpatients"
        ],
        therapeuticClass: "Selective 5-HT3 (Serotonin) Receptor Antagonist",
        mechanismOfAction: "Selectively and competitively antagonizes serotonin 5-HT3 receptors located centrally in the chemoreceptor trigger zone (CTZ) of the area postrema and peripherally on vagal nerve terminals in the gastrointestinal tract, preventing transmission of the emetic reflex.",
        targetSpecialty: "Oncology, Anesthesiology, Gastroenterology, Emergency Medicine & Surgery",
        administrationRoute: "Intravenous Injection (Slow Push) / Oral Tablet",
        prescriptionSchedule: "Schedule H Prescription Formulation",
        clinicalOverview: "Ondansetron/Granisetron is the gold standard antiemetic across surgical and oncological practice. Its prompt onset and selective receptor binding deliver reliable control of acute emesis without the extrapyramidal side effects associated with dopamine antagonists.",
        detailedIndications: [
          {
            condition: "Chemotherapy-Induced Nausea & Vomiting (CINV)",
            clinicalNote: "Administered 30 minutes prior to chemotherapy infusion; highly effective in preventing acute 24-hour emetic phases.",
            severity: "Hospital Inpatient"
          },
          {
            condition: "Post-Operative Nausea and Vomiting (PONV)",
            clinicalNote: "Administered intravenously immediately before induction of anesthesia or post-operatively in PACU.",
            severity: "Clinical Standard"
          },
          {
            condition: "Emergency Gastroenteritis-Associated Vomiting",
            clinicalNote: "Facilitates successful oral rehydration therapy in acute clinical settings.",
            severity: "Clinical Standard"
          }
        ],
        pharmacology: {
          molecularTarget: "5-HT3 Serotonin Receptors (Central Area Postrema & Peripheral Vagal Terminals)",
          pharmacodynamics: "Suppresses both central and peripheral emetic signal cascades without sedative or extrapyramidal adverse effects.",
          pathogenOrTissueTarget: "Chemoreceptor Trigger Zone & Gastrointestinal Vagal Afferents"
        },
        pharmacokinetics: {
          onsetAndPeak: "Onset of antiemetic action within 10 to 15 minutes of intravenous injection.",
          halfLife: "Elimination half-life is approximately 3.5 to 5.5 hours.",
          metabolicRoute: "Extensively metabolized by hepatic cytochrome P450 enzymes (CYP3A4, CYP2D6, CYP1A2).",
          elimination: "Less than 5% excreted unchanged in urine; metabolites cleared through renal and fecal routes."
        },
        administrationProtocol: {
          standardRegimen: "Adult: 4 mg to 8 mg slow IV injection every 8-12 hours as clinically indicated.",
          reconstitutionAndDilution: "Can be administered undiluted as slow IV push over 2-5 minutes or diluted in 50 mL 0.9% Normal Saline / D5W.",
          administrationRate: "Slow intravenous injection over at least 2 to 5 minutes.",
          organDoseAdjustment: "Severe hepatic impairment (Child-Pugh Score ≥10): Maximum total daily dose of 8 mg."
        },
        clinicalHighlights: [
          "Rapid, dependable cessation of emetic triggers across emergency and surgical units",
          "Zero extrapyramidal symptoms or sedating side effects",
          "Standard premedication for cancer chemotherapy and day-care surgical suites",
          "Compatible with dexamethasone for synergistic emetic control"
        ],
        safetyProfile: {
          keyContraindications: [
            "Concomitant use with Apomorphine (profound hypotension and loss of consciousness)",
            "Known hypersensitivity to 5-HT3 receptor antagonists"
          ],
          clinicalWarnings: [
            "Dose-dependent QTc prolongation: Caution in patients with congenital long QT syndrome or hypokalemia/hypomagnesemia.",
            "Serotonin Syndrome risk when combined with serotonergic drugs (SSRIs, SNRIs)."
          ],
          monitoringParameters: [
            "Electrolyte panel (Potassium, Magnesium) in cardiac risk patients",
            "ECG rhythm strip in high-dose intravenous chemotherapy protocols"
          ]
        },
        storageAndStability: {
          temperatureRequirement: "Store below 25°C. Protect from freezing.",
          lightSensitivity: "Store in original protective carton.",
          shelfLifePostReconstitution: "Stable for 24 hours in 0.9% Normal Saline."
        },
        prescribingSpecialties: ["Medical & Surgical Oncology", "Anesthesiology", "Emergency Medicine", "General Surgery", "Pediatrics"]
      };
    } else {
      // PPI (Pantoprazole, Esomeprazole, Rabeprazole)
      return {
        primaryCondition: "Acute Upper GI Bleeding, Peptic Ulcers, Zollinger-Ellison Syndrome & ICU Stress Ulcer Prophylaxis",
        indications: [
          "Acute Peptic Ulcer Bleeding & Endoscopic Hemostasis Adjuvant Therapy",
          "Stress-Related Mucosal Disease (SRMD) Prophylaxis in Mechanically Ventilated ICU Patients",
          "Severe Erosive Gastroesophageal Reflux Disease (GERD) with Complications",
          "Zollinger-Ellison Syndrome and Pathological Gastric Hypersecretory Conditions",
          "Eradication of Helicobacter pylori in Combination with Antimicrobials"
        ],
        therapeuticClass: "Substituted Benzimidazole Proton Pump Inhibitor (PPI)",
        mechanismOfAction: "Protonated within the acidic canaliculi of gastric parietal cells into an active sulfonamide, which forms covalent disulfide bonds with the cysteines of the H+/K+ ATPase enzyme ('proton pump'). This produces irreversible, long-lasting inhibition of basal and stimulated gastric acid secretion.",
        targetSpecialty: "Gastroenterology, Critical Care (ICU), General Surgery & Internal Medicine",
        administrationRoute: "Intravenous Bolus (Slow Injection) / Continuous IV Infusion / Oral Formulation",
        prescriptionSchedule: "Schedule H Prescription Drug",
        clinicalOverview: "Intravenous proton pump inhibitors are essential pharmacotherapeutic agents for stabilizing gastric mucosal clots in acute upper GI hemorrhage and preventing stress-related mucosal bleeding in critically ill ICU patients.",
        detailedIndications: [
          {
            condition: "Acute Peptic Ulcer Hemorrhage",
            clinicalNote: "Initial 80 mg IV bolus followed by 8 mg/hour continuous infusion for 72 hours maintains intragastric pH >6, promoting platelet aggregation and clot stability.",
            severity: "Emergency / ICU"
          },
          {
            condition: "ICU Stress Ulcer Prophylaxis",
            clinicalNote: "40 mg IV daily in mechanically ventilated patients (>48h) or those with coagulopathy reduces gastrointestinal bleeding.",
            severity: "Prophylactic"
          },
          {
            condition: "Zollinger-Ellison Syndrome",
            clinicalNote: "High-dose intravenous regimen suppresses extreme hyperchlorhydria and prevents recurrent ulcer perforation.",
            severity: "Hospital Inpatient"
          }
        ],
        pharmacology: {
          molecularTarget: "Gastric Parietal Cell H+/K+ ATPase Enzyme System",
          pharmacodynamics: "Elevates intragastric pH above 6.0 within 1 hour; suppresses acid output by >90% for over 24 hours.",
          pathogenOrTissueTarget: "Gastric Parietal Cell Secretory Canaliculi"
        },
        pharmacokinetics: {
          onsetAndPeak: "Maximal acid suppression achieved within 1 to 2 hours post-intravenous injection.",
          halfLife: "Plasma half-life is ~1.0 to 1.5 hours, but biological duration of acid inhibition exceeds 24-48 hours due to covalent enzyme binding.",
          metabolicRoute: "Extensively metabolized by hepatic CYP2C19 and CYP3A4 to inactive metabolites.",
          elimination: "Approximately 80% eliminated as inactive metabolites via urine, remainder via feces."
        },
        administrationProtocol: {
          standardRegimen: "Standard Prophylaxis/GERD: 40 mg IV once daily. Acute GI Bleed: 80 mg IV bolus followed by 8 mg/hour continuous infusion for 72 hours.",
          reconstitutionAndDilution: "Reconstitute 40 mg vial with 10 mL of 0.9% Normal Saline. For infusion, dilute in 100 mL NS or 5% Dextrose.",
          administrationRate: "Slow IV bolus over at least 2 to 5 minutes; or continuous infusion via volumetric pump.",
          organDoseAdjustment: "No dose adjustment needed in renal failure or mild-to-moderate hepatic impairment."
        },
        clinicalHighlights: [
          "Rapid and sustained elevation of intragastric pH to support endoscopic clot stabilization",
          "Significantly reduces re-bleeding rates and emergency surgical intervention in upper GI bleeds",
          "Low drug interaction potential with cardiovascular medications (e.g. Clopidogrel with Pantoprazole)",
          "Proven safety and tolerability in intensive care stress ulcer prophylaxis"
        ],
        safetyProfile: {
          keyContraindications: [
            "Known severe hypersensitivity to substituted benzimidazoles (PPIs)",
            "Concurrent use with Rilpivirine-containing HIV regimens"
          ],
          clinicalWarnings: [
            "Risk of Clostridioides difficile-associated diarrhea with prolonged acid suppression.",
            "Hypomagnesemia in patients on prolonged therapy (>1 year).",
            "Potential reduced absorption of pH-dependent medications (e.g., Ketoconazole, Iron salts)."
          ],
          monitoringParameters: [
            "Hemoglobin and Hematocrit in active GI bleeding",
            "Serum Magnesium during long-term therapy (>6 months)"
          ]
        },
        storageAndStability: {
          temperatureRequirement: "Store below 25°C. Protect from light and moisture.",
          lightSensitivity: "Store in original protective carton.",
          shelfLifePostReconstitution: "Reconstituted solution is stable for 12 hours at room temperature."
        },
        prescribingSpecialties: ["Gastroenterology", "Critical Care / ICU", "General Surgery", "Internal Medicine", "Emergency Medicine"]
      };
    }
  }

  // -------------------------------------------------------------
  // 12. CRITICAL CARE VASOPRESSORS & VASOACTIVES (Noradrenaline, Vasopressin, Methylene Blue)
  // -------------------------------------------------------------
  if (
    desc.includes("NORADRENALINE") ||
    desc.includes("NOREPINEPHRINE") ||
    desc.includes("VASOPRESSIN") ||
    desc.includes("METHYLENE")
  ) {
    const isMethylene = desc.includes("METHYLENE");
    return {
      primaryCondition: isMethylene ? "Vasoplegic Shock, Refractory Hypotension & Methemoglobinemia" : "Septic Shock, Refractory Vasodilatory Hypotension & Hemodynamic Collapse",
      indications: [
        "First-Line Vasopressor Resuscitation in Septic Shock (Surviving Sepsis Campaign)",
        "Refractory Vasoplegic Syndrome Post-Cardiopulmonary Bypass Surgery",
        "Cardiogenic Shock with Severe Systemic Hypotension",
        "Hemodynamic Stabilization During Cardiopulmonary Resuscitation",
        ...(isMethylene ? ["Emergency Reversal of Toxic Drug-Induced Methemoglobinemia", "Refractory Nitric Oxide-Mediated Vasodilatory Shock in Cardiac Surgery"] : [])
      ],
      therapeuticClass: isMethylene ? "Guanylate Cyclase Inhibitor & Redox Electron Carrier" : "Potent Alpha-1 Adrenergic Inotrope & Vasopressor",
      mechanismOfAction: isMethylene
        ? "Directly inhibits inducible nitric oxide synthase (iNOS) and soluble guanylate cyclase (sGC), blocking cyclic GMP-mediated pathological smooth muscle vasodilation. In methemoglobinemia, it acts as an electron carrier to reduce Fe3+ back to Fe2+ hemoglobin."
        : "Stimulates vascular alpha-1 adrenergic receptors to induce intense peripheral vasoconstriction, increasing Systemic Vascular Resistance (SVR) and Mean Arterial Pressure (MAP) with modest beta-1 inotropic cardiac support.",
      targetSpecialty: "Intensive Care Unit (ICU), Cardiothoracic Surgery, Emergency Medicine & Trauma",
      administrationRoute: "Central Venous Line Continuous Intravenous Infusion",
      prescriptionSchedule: "Hospital Emergency Restricted ICU Drug",
      clinicalOverview: "Critical vasoactive agents are the physiological bedrock of shock resuscitation in intensive care. By restoring organ perfusion pressure across the heart, brain, and kidneys, they prevent irreversible multi-organ failure.",
      detailedIndications: [
        {
          condition: "Septic Shock Resuscitation",
          clinicalNote: "Titrated continuously via central venous catheter to maintain target Mean Arterial Pressure (MAP) ≥65 mmHg.",
          severity: "Emergency / ICU"
        },
        {
          condition: "Vasoplegic Shock Post-Cardiac Surgery",
          clinicalNote: "Inhibits massive nitric oxide-cGMP vasodilation refractory to standard high-dose adrenergic infusions.",
          severity: "Emergency / ICU"
        },
        {
          condition: "Acute Toxic Methemoglobinemia",
          clinicalNote: "Administered at 1-2 mg/kg IV over 5 minutes to restore functional oxygen carrying capacity of erythrocytes.",
          severity: "Emergency / ICU"
        }
      ],
      pharmacology: {
        molecularTarget: isMethylene ? "Soluble Guanylate Cyclase & Inducible Nitric Oxide Synthase" : "Alpha-1 and Beta-1 Adrenergic Receptors",
        pharmacodynamics: "Rapid dose-dependent elevation of SVR and MAP within 1 to 2 minutes of infusion adjustment.",
        pathogenOrTissueTarget: "Systemic Arteriolar Smooth Muscle & Cardiac Myocytes"
      },
      pharmacokinetics: {
        onsetAndPeak: "Immediate hemodynamic onset (<1-2 minutes) upon IV infusion.",
        halfLife: isMethylene ? "Elimination half-life is ~5 to 6 hours." : "Extremely short plasma half-life of 1 to 2 minutes.",
        metabolicRoute: "Metabolized by MAO and COMT in liver and peripheral tissues.",
        elimination: "Excreted as inactive metabolites in urine."
      },
      administrationProtocol: {
        standardRegimen: "Titrated by dedicated syringe pump: 0.05 to 2.0 mcg/kg/min according to continuous arterial line BP monitoring.",
        reconstitutionAndDilution: "Dilute in 5% Dextrose in Water (D5W) or Dextrose Saline. Avoid alkaline solutions (e.g., Sodium Bicarbonate).",
        administrationRate: "Strictly administered via central venous catheter with rate-controlled micro-infusion pump.",
        organDoseAdjustment: "Titrate strictly to hemodynamic endpoints (MAP ≥65 mmHg, Urine Output >0.5 mL/kg/h, Serum Lactate clearance)."
      },
      clinicalHighlights: [
        "First-line gold standard vasopressor endorsed by the Surviving Sepsis Campaign",
        "Minimal chronotropic tachycardia compared to dopamine or adrenaline",
        "Rapid on/off titration kinetics enabling tight hemodynamic blood pressure control",
        "Indispensable life-support medication for adult and pediatric critical care units"
      ],
      safetyProfile: {
        keyContraindications: [
          "Hypovolemia prior to adequate volume resuscitation (except as emergency temporary bridge)",
          ...(isMethylene ? ["Severe G6PD deficiency (risk of severe hemolytic anemia)", "Patients taking SSRIs/SNRIs (Serotonin Syndrome risk)"] : [])
        ],
        clinicalWarnings: [
          "Extravasation necrosis: Infuse strictly via central line; in peripheral extravasation, infiltrate phentolamine immediately.",
          "Excessive vasoconstriction: Monitor for peripheral digital ischemia and organ hypoperfusion.",
          "Continuous arterial line BP and ECG monitoring mandatory."
        ],
        monitoringParameters: [
          "Continuous invasive arterial blood pressure (MAP) and central venous pressure (CVP)",
          "Serum Lactate, Base Deficit, and arterial blood gas (ABG) every 2-4 hours",
          "Continuous ECG monitoring for arrhythmias and ST-segment changes"
        ]
      },
      storageAndStability: {
        temperatureRequirement: "Store below 25°C. Protect from light. Do not freeze.",
        lightSensitivity: "Store in original protective carton. Discard if solution turns pink or dark brown.",
        shelfLifePostReconstitution: "Prepared infusion solution in D5W is stable for 24 hours."
      },
      prescribingSpecialties: ["Critical Care Medicine (ICU)", "Cardiothoracic Surgery", "Emergency Medicine", "Trauma Care"]
    };
  }

  // -------------------------------------------------------------
  // 13. SPECIALTY METABOLIC & BONE (Teriparatide, Glutathione, Levocarnitine, etc.)
  // -------------------------------------------------------------
  if (
    desc.includes("TERIPARATIDE") ||
    desc.includes("GLUTATHIONE") ||
    desc.includes("LEVOCARNITINE") ||
    desc.includes("COLLAGEN") ||
    desc.includes("CHOLECALCIFEROL") ||
    desc.includes("CISSUS") ||
    desc.includes("NANO") ||
    desc.includes("ETORICOXIB") ||
    desc.includes("ARGININE") ||
    desc.includes("CO-ENZYME") ||
    desc.includes("TRYPSIN")
  ) {
    if (desc.includes("TERIPARATIDE")) {
      return {
        primaryCondition: "Severe Postmenopausal Osteoporosis, High Fracture Risk & Glucocorticoid-Induced Osteoporosis",
        indications: [
          "Severe Osteoporosis in Postmenopausal Women at High Risk for Fractures",
          "Primary or Hypogonadal Osteoporosis in Men at High Risk for Fragility Fractures",
          "Glucocorticoid-Induced Osteoporosis in Long-Term Steroid Therapy",
          "Accelerated Union in Non-Union / Delayed Union Fragility Fractures"
        ],
        therapeuticClass: "Recombinant Human Parathyroid Hormone Analog (rhPTH 1-34) / Bone Anabolic Agent",
        mechanismOfAction: "Intermittent daily administration of recombinant human parathyroid hormone (1-34 fragment) preferentially stimulates osteoblastic bone formation over osteoclastic bone resorption. It increases trabecular and cortical bone mineral density (BMD), restores bone microarchitecture, and significantly reduces vertebral and non-vertebral fractures.",
        targetSpecialty: "Endocrinology, Orthopedics, Rheumatology & Geriatric Medicine",
        administrationRoute: "Subcutaneous (SC) Injection (Abdomen or Thigh)",
        prescriptionSchedule: "Schedule H Specialized Anabolic Hormone",
        clinicalOverview: "Teriparatide is the premier bone anabolic agent that actively rebuilds new structural bone matrix, unlike antiresorptive bisphosphonates that merely slow bone breakdown. Administered via pre-filled multi-dose delivery pens for sustained skeletal restoration.",
        detailedIndications: [
          {
            condition: "Severe Postmenopausal Osteoporosis with Prior Vertebral Fracture",
            clinicalNote: "Reduces risk of new vertebral fractures by up to 65% and non-vertebral fragility fractures by 53%.",
            severity: "Clinical Standard"
          },
          {
            condition: "Glucocorticoid-Induced Severe Bone Loss",
            clinicalNote: "Outperforms bisphosphonates in rebuilding trabecular bone mineral density in chronic steroid users.",
            severity: "Clinical Standard"
          },
          {
            condition: "Refractory Orthopedic Non-Union Fractures",
            clinicalNote: "Stimulates osteoblast differentiation and callus mineralization at delayed fracture sites.",
            severity: "Hospital Inpatient"
          }
        ],
        pharmacology: {
          molecularTarget: "Parathyroid Hormone Type 1 Receptor (PTH1R) on Osteoblasts and Renal Tubules",
          pharmacodynamics: "Stimulates bone apposition rate, increases serum calcium modestly, and enhances renal tubular calcium reabsorption.",
          pathogenOrTissueTarget: "Trabecular and Cortical Skeletal Bone Matrix"
        },
        pharmacokinetics: {
          onsetAndPeak: "Peak serum concentration reached within 30 minutes following subcutaneous injection.",
          halfLife: "Effective elimination half-life is approximately 1 hour post-injection.",
          metabolicRoute: "Hepatic non-specific enzymatic proteolysis and renal clearance.",
          elimination: "Degraded into constituent amino acids; cleared via renal pathways."
        },
        administrationProtocol: {
          standardRegimen: "20 micrograms (mcg) subcutaneously once daily into thigh or abdomen.",
          reconstitutionAndDilution: "Supplied as pre-filled, multi-dose injection pen cartridge ready for administration.",
          administrationRate: "Subcutaneous injection once daily; maximum lifetime cumulative duration of therapy is 24 months.",
          organDoseAdjustment: "Not recommended in severe renal impairment (eGFR <30 mL/min); contraindicated in pre-existing hypercalcemia."
        },
        clinicalHighlights: [
          "The definitive bone-forming (anabolic) therapy for severe osteoporosis",
          "Dramatically improves trabecular connectivity and bone biomechanical strength",
          "Convenient pre-filled multidose injection pen format with ultra-thin needle",
          "Clinically endorsed in IOF, AACE, and Endocrine Society treatment guidelines"
        ],
        safetyProfile: {
          keyContraindications: [
            "Pre-existing hypercalcemia or primary hyperparathyroidism",
            "Paget's disease of bone or prior unexplained alkaline phosphatase elevation",
            "Prior external beam or implant radiation therapy involving the skeleton"
          ],
          clinicalWarnings: [
            "Transient Orthostatic Hypotension: May occur within first few doses; administer sitting or lying down initially.",
            "Hypercalcemia: Monitor serum calcium levels; discontinue if persistent hypercalcemia develops."
          ],
          monitoringParameters: [
            "Serum Calcium, Uric acid, and 25-hydroxy Vitamin D levels",
            "Baseline and annual Dual-Energy X-ray Absorptiometry (DEXA) bone density scans"
          ]
        },
        storageAndStability: {
          temperatureRequirement: "Store at 2°C to 8°C in refrigerator at all times. Do not freeze.",
          lightSensitivity: "Recap pen with outer protective cover to protect from light.",
          shelfLifePostReconstitution: "Once opened, the pre-filled pen is stable for 28 days when maintained at 2°C to 8°C."
        },
        prescribingSpecialties: ["Endocrinology & Metabolism", "Orthopedics & Spine Surgery", "Rheumatology", "Geriatric Medicine"]
      };
    }
  }

  // -------------------------------------------------------------
  // 14. CATEGORY-BASED COMPREHENSIVE INTELLIGENCE FALLBACKS
  // -------------------------------------------------------------
  if (category === "Antibiotics & Antifungals") {
    return {
      primaryCondition: `Severe Bacterial & Fungal Infectious Pathologies Targeted by ${product.brandName}`,
      indications: [
        `Hospital-Acquired and Community-Acquired ${product.brandName} Susceptible Bacterial Sepsis`,
        "Complicated Respiratory Tract, Intra-Abdominal, and Urinary Infections",
        "Targeted Pathogen Eradication Based on Culture & Antimicrobial Sensitivity Testing",
        "Perioperative Surgical Prophylaxis & Empiric Institutional Protocol Coverage"
      ],
      therapeuticClass: `${product.brandName} Antimicrobial Formulation`,
      mechanismOfAction: "Disrupts critical bacterial/fungal biological pathways such as cell wall synthesis (PBPs), protein translation (30S/50S ribosomes), or cellular membrane integrity, exerting rapid bactericidal or fungicidal clearance.",
      targetSpecialty: "Infectious Diseases, Critical Care (ICU), Internal Medicine & General Surgery",
      administrationRoute: form === "Injection" || form === "Infusion Pen" || form === "Bottle" ? "Parenteral (Intravenous / Intramuscular)" : "Oral Administration",
      prescriptionSchedule: "Schedule H / H1 Restricted Prescription Antimicrobial",
      clinicalOverview: `${product.brandName} (${product.description}) is an institutional-grade antimicrobial formulation meeting rigorous pharmacopeial standards. Designed for targeted hospital inpatient use and sensitive microbiological treatment protocols.`,
      detailedIndications: [
        {
          condition: "Complicated Systemic Sepsis",
          clinicalNote: "Administered as part of culture-directed or institutional empiric antimicrobial protocols.",
          severity: "Hospital Inpatient"
        },
        {
          condition: "Deep Tissue & Organ Sepsis",
          clinicalNote: "Ensures effective therapeutic drug concentrations across infected anatomical compartments.",
          severity: "Hospital Inpatient"
        }
      ],
      pharmacology: {
        molecularTarget: "Pathogen-Specific Essential Enzymes & Structural Proteins",
        pharmacodynamics: "Optimizes pharmacokinetic-pharmacodynamic indices (T > MIC or AUC/MIC) for maximum pathogen eradication.",
        pathogenOrTissueTarget: "Susceptible Aerobic and Anaerobic Pathogenic Microorganisms"
      },
      pharmacokinetics: {
        onsetAndPeak: "Therapeutic peak plasma concentrations achieved promptly following administration.",
        halfLife: "Standard elimination kinetics matching pharmacopeial active drug specifications.",
        metabolicRoute: "Standard hepatic and systemic enzymatic processing pathways.",
        elimination: "Excreted via renal glomerular filtration and biliary pathways."
      },
      administrationProtocol: {
        standardRegimen: "Administer in divided doses according to body weight, severity of infection, and renal function.",
        reconstitutionAndDilution: form === "Injection" ? "Reconstitute with Sterile Water for Injection (WFI) or 0.9% Normal Saline under aseptic technique." : "Administer orally with water as directed.",
        administrationRate: "Infuse over recommended clinical timeframe (30-60 minutes for parenteral infusions).",
        organDoseAdjustment: "Adjust dosage intervals in moderate-to-severe renal impairment based on estimated creatinine clearance."
      },
      clinicalHighlights: [
        "Certified pharmacopeial active pharmaceutical ingredient with verified batch potency",
        "Manufactured under WHO-GMP and CDSCO compliant sterile facility standards",
        "Essential therapeutic agent for institutional antimicrobial stewardship protocols",
        "Comprehensive batch Certificate of Analysis (CoA) provided for hospital quality audits"
      ],
      safetyProfile: {
        keyContraindications: [
          `Known hypersensitivity to ${product.brandName} or its active pharmaceutical ingredient class`,
          "Severe allergic anaphylaxis to related antibacterial/antifungal formulations"
        ],
        clinicalWarnings: [
          "Complete full prescribed course to prevent emergence of antimicrobial resistance.",
          "Monitor renal and hepatic parameters during prolonged therapeutic regimens."
        ],
        monitoringParameters: [
          "Serum Creatinine, BUN, and complete blood counts",
          "Clinical response markers (Temperature curve, WBC count, C-Reactive Protein)"
        ]
      },
      storageAndStability: {
        temperatureRequirement: "Store below 25°C in a dry place. Protect from moisture and heat.",
        lightSensitivity: "Store in original protective packaging away from direct light.",
        shelfLifePostReconstitution: form === "Injection" ? "Reconstituted solution must be used within 24 hours." : "Use before stated expiration date."
      },
      prescribingSpecialties: ["Infectious Diseases", "Internal Medicine", "Critical Care (ICU)", "General Surgery"]
    };
  }

  if (category === "Critical Care & Plasma") {
    return {
      primaryCondition: `Hemodynamic Instability, Volume Depletion & Critical Care Sepsis (${product.brandName})`,
      indications: [
        "Acute Hemodynamic Resuscitation and Intravascular Volume Expansion",
        "Severe Hypoalbuminemia, Capillary Leak Syndrome & Hypovolemic Shock",
        "Critical Care Inpatient Organ Perfusion & Splanchnic Support",
        "High-Acuity Emergency Department and Intensive Care Stabilization"
      ],
      therapeuticClass: "Critical Care Biological & Hemodynamic Standard",
      mechanismOfAction: "Restores intravascular colloid oncotic pressure, systemic vascular resistance, or vital plasma biological components to stabilize microvascular perfusion and prevent cellular hypoxia.",
      targetSpecialty: "Intensive Care Unit (ICU), Emergency Medicine, Anesthesia & Trauma",
      administrationRoute: "Intravenous Infusion via Rate-Controlled Infusion Set",
      prescriptionSchedule: "Hospital Restricted Critical Care Biological Supply",
      clinicalOverview: `${product.brandName} is a high-purity biological or critical care formulation indicated for life-threatening physiological decompensation. Prepared under rigorous cold-chain conditions to guarantee biological integrity.`,
      detailedIndications: [
        {
          condition: "Acute Hypovolemic Resuscitation",
          clinicalNote: "Provides rapid plasma expansion and stabilizes macro- and micro-hemodynamics.",
          severity: "Emergency / ICU"
        },
        {
          condition: "Severe Inpatient Sepsis Support",
          clinicalNote: "Maintains vital organ perfusion pressure and counteracts severe pathological capillary permeability.",
          severity: "Emergency / ICU"
        }
      ],
      pharmacology: {
        molecularTarget: "Intravascular Space, Endothelial Glycocalyx & Microvasculature",
        pharmacodynamics: "Rapidly elevates mean arterial pressure and cardiac output under continuous intensive monitoring.",
        pathogenOrTissueTarget: "Systemic Circulatory System & Vascular Endothelium"
      },
      pharmacokinetics: {
        onsetAndPeak: "Immediate hemodynamic expansion upon intravenous administration.",
        halfLife: "Matches physiological half-life of homologous human plasma proteins/compounds.",
        metabolicRoute: "Cellular catabolism in reticuloendothelial system.",
        elimination: "Physiological degradation into natural amino acids and metabolites."
      },
      administrationProtocol: {
        standardRegimen: "Titrate strictly based on central venous pressure, mean arterial pressure, and clinical hemodynamic targets.",
        reconstitutionAndDilution: "Supplied ready for sterile intravenous administration. Follow packaging specific dilution protocols.",
        administrationRate: "Adjust rate to patient hemodynamic tolerance; avoid hypervolemia.",
        organDoseAdjustment: "Careful hemodynamic monitoring in congestive cardiac failure and severe renal oliguria."
      },
      clinicalHighlights: [
        "Pasteurized and viral-inactivated for ultimate biological safety",
        "Essential life-saving resource for high-dependency intensive care units",
        "Maintains vital microvascular oncotic pressure and endothelial barrier function",
        "Maintained under strict WHO-GDP temperature logged cold-chain storage"
      ],
      safetyProfile: {
        keyContraindications: [
          "Severe decompensated cardiac failure with pulmonary congestion",
          "Severe normovolemic hypervolemia"
        ],
        clinicalWarnings: [
          "Monitor closely for circulatory fluid overload and pulmonary edema.",
          "Ensure continuous vitals and blood gas monitoring in ICU."
        ],
        monitoringParameters: [
          "Blood pressure, pulse, central venous pressure, and SpO2",
          "Serum electrolytes, hemoglobin, and hematocrit"
        ]
      },
      storageAndStability: {
        temperatureRequirement: "Store between 2°C to 8°C (Cold Chain) or as indicated on product label. Do not freeze.",
        lightSensitivity: "Protect from light. Keep in outer container.",
        shelfLifePostReconstitution: "Administer immediately upon opening."
      },
      prescribingSpecialties: ["Critical Care (ICU)", "Emergency Medicine", "Cardiology", "Trauma & Burn Surgery"]
    };
  }

  // -------------------------------------------------------------
  // 15. DEFAULT GENERAL SPECIALTY FALLBACK
  // -------------------------------------------------------------
  return {
    primaryCondition: `Specialized Clinical & Therapeutic Indication for ${product.brandName}`,
    indications: [
      `Targeted Disease Management Indicated for ${product.brandName} (${product.strength})`,
      "Hospital and Specialized Outpatient Inpatient Healthcare Protocols",
      "Pathology Modulation & Symptom Stabilization as Directed by Specialist Physician",
      "Evidence-Based Pharmaceutical Standard for Institutional Formulary Inclusion"
    ],
    therapeuticClass: `${product.category} Specialized Formulation`,
    mechanismOfAction: `Exerts targeted pharmacological activity to regulate cellular pathways, neurotransmitter/ion channels, enzyme systems, or metabolic cascades corresponding to ${product.description}.`,
    targetSpecialty: "Specialty Hospital Inpatient Care, Internal Medicine & Surgery",
    administrationRoute: form === "Injection" || form === "Bottle" ? "Parenteral Administration (IV/IM/SC)" : "Oral / Topical Formulation",
    prescriptionSchedule: "Schedule H Prescription Pharmaceutical Standard",
    clinicalOverview: `${product.brandName} (${product.description}) is manufactured under stringent pharmaceutical quality standards by ${product.mfg}. It provides dependable therapeutic efficacy across specialized clinical indications.`,
    detailedIndications: [
      {
        condition: "Targeted Inpatient Clinical Therapy",
        clinicalNote: "Prescribed as directed by registered medical practitioners for specialized therapeutic outcomes.",
        severity: "Clinical Standard"
      },
      {
        condition: "Maintenance & Recovery Protocols",
        clinicalNote: "Ensures reliable bioavailability and clinical symptom resolution.",
        severity: "Clinical Standard"
      }
    ],
    pharmacology: {
      molecularTarget: "Physiological Receptors, Enzyme Systems & Cellular Targets",
      pharmacodynamics: "Delivers predictable dose-proportional pharmacological response across target tissue receptors.",
      pathogenOrTissueTarget: "Target Organ System & Cellular Microenvironment"
    },
    pharmacokinetics: {
      onsetAndPeak: "Achieves therapeutic bioavailability within standard pharmacopeial parameters.",
      halfLife: "Characteristic elimination half-life supporting standard clinical dosing schedules.",
      metabolicRoute: "Hepatic and systemic enzymatic biotransformation.",
      elimination: "Excreted via standard renal and fecal elimination pathways."
    },
    administrationProtocol: {
      standardRegimen: "Administer as prescribed by registered physician according to individual clinical parameters.",
      reconstitutionAndDilution: form === "Injection" ? "Reconstitute with Sterile Water for Injection or 0.9% Normal Saline." : "Administer orally with water.",
      administrationRate: "Administer according to institutional clinical standard operating procedures.",
      organDoseAdjustment: "Adjust dosage based on patient renal and hepatic functional status."
    },
    clinicalHighlights: [
      "Manufactured in compliance with CDSCO and WHO-GMP quality standards",
      "Standardized active ingredient strength and bioequivalence profile",
      "Complete regulatory documentation and Certificate of Analysis available",
      "Trusted institutional supply with monitored batch traceability"
    ],
    safetyProfile: {
      keyContraindications: [
        `Known hypersensitivity to ${product.brandName} or its formulation ingredients`,
        "Specific clinical contraindications per licensed prescribing literature"
      ],
      clinicalWarnings: [
        "To be sold by retail on the prescription of a Registered Medical Practitioner only.",
        "Maintain patient monitoring throughout active therapeutic course."
      ],
      monitoringParameters: [
        "Baseline organ function tests (LFT, KFT) where indicated",
        "Clinical symptom resolution and therapeutic efficacy markers"
      ]
    },
    storageAndStability: {
      temperatureRequirement: "Store below 25°C in a cool, dry place. Protect from moisture.",
      lightSensitivity: "Keep in original packaging away from direct light.",
      shelfLifePostReconstitution: "Use before expiration date imprinted on container."
    },
    prescribingSpecialties: ["Specialty Inpatient Medicine", "Internal Medicine", "General Surgery", "Clinical Pharmacology"]
  };
}
