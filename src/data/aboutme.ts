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
  title: "PhD Student",
  institution: "University of British Columbia",
  // Note that links work in the description
  description:
    'I am a Computer Science PhD student at the University of British Columbia, advised by <a href="https://www.cs.ubc.ca/~sheffa/">Dr. Alla Sheffer</a>. ' +
    'I carry out research in computer graphics, primarily working with geometry. ' +
    'My research is generously supported by the MITACS Accelerate program and the UBC Four Year Doctoral Fellowship.<br><br>' +
    'I am always on the lookout for interesting research opportunities (including collaborations & internships), so please feel free to reach out!',
  email: "stakikaw@cs.ubc.ca",
  imageUrl:
    "/images/profile_pic.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?user=kp6FxB4AAAAJ",
  githubUsername: "stakikawa",
  linkedinUsername: "suzuran-takikawa",
  institutionUrl: "https://www.ubc.ca",
};
