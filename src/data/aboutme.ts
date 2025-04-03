export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Suzuran Takikawa",
  title: "Ph.D Student",
  institution: "University of British Columbia",
  // Note that links work in the description
  description:
    "I'm a Ph.D student at the University of British Columbia, working on computer graphics research, in particular geometry processing. I also do some game development on the side. I'm always on the lookout for interesting research opportunities (including internships), so feel free to reach out!",
  email: "stakikaw@cs.ubc.ca",
  imageUrl:
    "/images/profile_pic.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?user=kp6FxB4AAAAJ",
  githubUsername: "stakikawa",
  linkedinUsername: "suzuran-takikawa",
  institutionUrl: "https://www.ubc.ca",
};
