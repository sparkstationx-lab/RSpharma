export interface TeamMember {
  id: string;
  name: string;
  role?: string;
  initials: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "aman-jadon",
    name: "Aman Jadon",
    role: "Leadership & Operations",
    initials: "AJ",
  },
  {
    id: "achal-jadon",
    name: "Achal Jadon",
    role: "Strategic Distribution & Growth",
    initials: "AJ",
  },
  {
    id: "radhe-shyam-jadon",
    name: "Radhe Shyam Jadon",
    role: "Founder & Managing Director",
    initials: "RJ",
  },
];
