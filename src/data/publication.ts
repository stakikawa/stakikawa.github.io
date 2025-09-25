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
    conference: "SIGGRAPH Asia",
    title: "Capturing Non-Linear Human Perspective in Line Drawings",
    authors: "Jinfan Yang, Leo Foord-Kelcey, Suzuran Takikawa, Nicholas Vining, Niloy Mitra, Alla Sheffer",
    paperUrl: "https://www.cs.ubc.ca/labs/imager/tr/2025/capturing_human_perspective/",
    imageUrl: "/images/persp.jpg"
  },
  {
    year: "2025",
    conference: "Graphics Interface",
    title: "Controllable Modular Trees",
    authors: "Suzuran Takikawa, Riccardo Tinchelli, Mike J. Davison, Curtis Andrus, James John Drown, Alla Sheffer",
    paperUrl: "https://www.cs.ubc.ca/labs/imager/tr/2025/modular_trees/",
    imageUrl: "/images/trees.jpg"
  },
  {
    year: "2025",
    conference: "Transactions on Graphics (TOG); to appear",
    title: "NESI: Shape Representation via Neural Explicit Surface Intersection",
    authors: "Congyi Zhang, Jinfan Yang, Eric Hedlin, Suzuran Takikawa, Nicholas Vining, Kwang Moo Yi, Wenping Wang, Alla Sheffer",
    paperUrl: "https://www.cs.ubc.ca/labs/imager/tr/2025/nesi/",
    imageUrl: "/images/nesi.jpg"
  },
];
