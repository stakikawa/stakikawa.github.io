export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  {
    year: "2025",
    conference: "Graphics Interface",
    title: "Controllable Modular Trees",
    authors: "Suzuran Takikawa, Riccardo Tinchelli, Mike Davison, Curtis Andrus, James Drown, Alla Sheffer",
    paperUrl: "https://www.cs.ubc.ca/labs/imager/tr/2025/modular_trees/",
    imageUrl: "/images/trees.png"
  },
  {
    year: "2025",
    conference: "Transactions on Graphics (TOG); to appear",
    title: "NESI: Shape Representation via Neural Explicit Surface Intersection",
    authors: "Congyi Zhang, Jinfan Yang, Eric Hedlin, Suzuran Takikawa, Nicholas Vining, Kwang Moo Yi, Wenping Wang, Alla Sheffer",
    paperUrl: "https://www.cs.ubc.ca/labs/imager/tr/2025/nesi/",
    imageUrl: "/images/nesi.png",
  },
];
