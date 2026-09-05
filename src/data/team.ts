export interface TeamMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  title: string;
  quote: string;
  bio: string[];
  focusAreas: {
    title: string;
    description: string;
  }[];
  credentials: string[];
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "aman-jadon",
    name: "Aman Jadon",
    role: "Leadership & Operations",
    title: "Director of Operations & Supply Chain",
    initials: "AJ",
    quote: "Operational precision in pharmaceutical distribution isn't just about timely shipping—it is the direct guardian of therapeutic potency and patient health.",
    bio: [
      "Aman Jadon leads operational architecture, depot management, and end-to-end supply chain execution at RS Pharma. With an uncompromising focus on logistical integrity, Aman has been instrumental in engineering the company's real-time cold chain infrastructure, ensuring sensitive therapeutics, biologics, and critical care antibiotics maintain strictly monitored temperature brackets from manufacturing facilities to patient delivery points.",
      "Under his operational direction, RS Pharma expanded its rapid-response dispatch protocols for ICU emergencies, instituting comprehensive batch tracking, electronic documentation (DSCSA standards), and modern inventory management systems. His continuous drive toward operational modernization bridges technical precision with empathetic healthcare logistics, ensuring hospital partners receive verified medicines with zero transit compromise.",
      "Aman actively collaborates with regional regulatory bodies, transport carriers, and clinical pharmacists to ensure all wholesale procedures strictly adhere to Good Distribution Practices (GDP) and CDSCO licensing mandates."
    ],
    focusAreas: [
      {
        title: "Cold Chain Logistics (2°C – 8°C)",
        description: "Oversees calibrated refrigerated freight, active thermal mapping, and digital telemetry sensors for temperature-sensitive biologics and critical care injections."
      },
      {
        title: "Warehouse & Depot Management",
        description: "Manages central storage protocols, clean-room batch separation, and WHO-GDP compliant staging at RS Pharma distribution hubs."
      },
      {
        title: "Emergency Clinical Dispatch",
        description: "Directs prioritized express transit channels to resolve emergency ICU drug stockouts and institutional healthcare demands nationwide."
      }
    ],
    credentials: [
      "WHO-GDP Supply Chain Compliance",
      "Cold Chain Thermal Surveillance",
      "Pharmaceutical Inventory Systems"
    ]
  },
  {
    id: "achal-jadon",
    name: "Achal Jadon",
    role: "Strategic Distribution & Growth",
    title: "Director of Strategic Distribution & Market Growth",
    initials: "AJ",
    quote: "Building sustainable healthcare distribution requires cultivating deep trust with manufacturers while delivering transparent, uninflated access to providers.",
    bio: [
      "Achal Jadon drives strategic business development, institutional client partnerships, and market expansion initiatives at RS Pharma. Dedicated to creating seamless synergy between global pharmaceutical manufacturers and frontline healthcare facilities, Achal spearheads key account relations across leading hospital networks, research centers, and wholesale pharmacy cooperatives.",
      "His strategic vision centers on eliminating unnecessary intermediary markups through direct-from-manufacturer procurement agreements. By securing vital partnerships with major manufacturing leaders such as Senores Pharmaceuticals and Concord Biotech, Achal has strengthened RS Pharma's specialized portfolio in oncology, critical care, and advanced anti-infectives.",
      "Achal also oversees the digitization of customer procurement channels, providing hospital purchase committees and independent pharmacists with transparent wholesale pricing, rapid inquiry responses, and dedicated account support."
    ],
    focusAreas: [
      {
        title: "Manufacturer Partnerships",
        description: "Negotiates direct allocation contracts with premier pharmaceutical manufacturers to secure transparent wholesale pricing and guaranteed batch allocation."
      },
      {
        title: "Hospital & Institutional Relations",
        description: "Leads custom procurement programs and tender supply contracts for multispecialty hospital chains, government institutions, and clinical networks."
      },
      {
        title: "Market Expansion & Digital Channels",
        description: "Broadens RS Pharma's geographical distribution footprint across PAN-India corridors while introducing streamlined digital inquiry and order processing tools."
      }
    ],
    credentials: [
      "Strategic Healthcare Procurement",
      "Manufacturer Relationship Governance",
      "Institutional Account Management"
    ]
  },
  {
    id: "radhe-shyam-jadon",
    name: "Radhe Shyam Jadon",
    role: "Founder & Managing Director",
    title: "Founder & Managing Director",
    initials: "RJ",
    quote: "Our fundamental responsibility is absolute integrity. In the pharmaceutical sector, trust is built vial by vial, batch by batch, and delivery by delivery.",
    bio: [
      "Radhe Shyam Jadon is the founder and visionary leader of RS Pharma, guiding the organization from its inception into one of the region's most reputable and trusted wholesale pharmaceutical distributors. With decades of foundational industry experience, Radhe Shyam established the company on the bedrock principles of zero-counterfeit tolerance, uncompromising regulatory compliance, and steadfast client dedication.",
      "His leadership has guided RS Pharma through key regulatory evolutions, securing comprehensive CDSCO wholesale drug licensing (Wholesale-819-A) and embedding rigorous WHO Good Distribution Practices across all tiers of corporate activity. Radhe Shyam's deep-rooted relationships across India's pharmaceutical ecosystem have enabled RS Pharma to maintain continuous supply stability even during critical market shortages.",
      "As Managing Director, Radhe Shyam mentors the executive leadership team, upholds corporate ethics, and ensures that every commercial endeavor aligns with the company's core mission: delivering authentic, life-sustaining therapeutics safely and equitably."
    ],
    focusAreas: [
      {
        title: "Corporate Governance & Ethics",
        description: "Champions ethical wholesale standards, anti-counterfeit protocols, and rigorous quality governance across all commercial agreements."
      },
      {
        title: "Regulatory Licensing & CDSCO Compliance",
        description: "Guarantees statutory compliance with state and central drug control authorities, ensuring full legal integrity and audit readiness."
      },
      {
        title: "Long-Term Strategic Vision",
        description: "Steers organizational growth, institutional values, and enduring supplier relationships to protect healthcare supply chain continuity."
      }
    ],
    credentials: [
      "Decades of Pharmaceutical Industry Leadership",
      "CDSCO Licensing & Statutory Compliance",
      "Ethical Drug Distribution Oversight"
    ]
  },
];
