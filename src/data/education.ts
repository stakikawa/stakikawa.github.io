export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2023—Present",
    institution: "University of British Columbia",
    degree: "Ph.D in Computer Science",
    advisor: "Prof. Alla Sheffer",
  },
  {
    year: "2019—2023",
    institution: "University of British Columbia",
    degree: "B.S. in Computer Science",
  },
];
