export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "2023 - Present",
    title: "Research Assistant",
    company: "University of British Columbia",
    description: "Research in computer graphics.",
    companyUrl: "https://www.ubc.ca",
    advisor: "Alla Sheffer"
  },
  {
    date: "Summer 2024",
    title: "Research Intern",
    company: "Netflix Animation Studios",
    description:
      "R&D Procedural Geometry and Simulation",
    companyUrl: "https://www.netflixanimation.com",
  },
  {
    date: "Summer 2023",
    title: "Game Programmer Intern",
    company: "Behaviour Interactive",
    description:
      "Worked primarily on customization systems and editor tools in Unreal Engine 5 for art & design.",
    companyUrl: "https://www.bhvr.com",
  },
  {
    date: "Summer 2022",
    title: "Software Engineer Intern",
    company: "Intel Corporation",
    description:
      "3D graphics performance triage/debug and driver development.",
    companyUrl: "https://www.intel.com",
  },
  {
    date: "Summer 2019",
    title: "Software Engineer Intern",
    company: "Emerada Co., Ltd.",
    description:
      "Web App Development using Ruby on Rails, Heroku, AWS S3.",
    companyUrl: "https://www.emerada.co.jp",
  }
];
