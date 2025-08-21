export interface Teaching {
  date: string;
  title: string;
  institution: string;
  institutionUrl?: string;
  advisor?: string;
  description?: string;
}

export const teachingData: Teaching[] = [
  {
    date: "Fall 2025",
    title: "Teaching Assistant",
    institution: "University of British Columbia",
    description:
      "CPSC 524: Computer Graphics: Modeling",
  },
  {
    date: "Spring 2025",
    title: "Teaching Assistant",
    institution: "University of British Columbia",
    description:
      "CPSC 424: Geometric Modeling",
  },
  {
    date: "Spring 2024",
    title: "Teaching Assistant",
    institution: "University of British Columbia",
    description:
      "CPSC 427: Video Game Programming",
  },
  {
    date: "Fall 2023",
    title: "Teaching Assistant",
    institution: "University of British Columbia",
    description:
      "CPSC 427: Video Game Programming",
  },
  {
    date: "Spring 2022",
    title: "Teaching Assistant",
    institution: "University of British Columbia",
    description:
      "CPSC 314: Computer Graphics",
  },
];
