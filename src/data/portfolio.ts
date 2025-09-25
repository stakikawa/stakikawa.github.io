export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "Ascent",
    description:
      "Ascent is a 2D roguelike action platformer game made for CPSC427, a video game development course at UBC. The entire game is written with OpenGL and C++. We were runner-up for Best Game, selected by an industry panel.",
    technologies: ["C++", "OpenGL"],
    projectUrl: "https://kevinmkchin.itch.io/ascent",
    imageUrl:
      "/images/ascent.jpg",
  },
  {
    title: "WebGL 2D Fluid Simulation",
    description:
      "Real-time 2D Fluid Simulation running on GPU using WebGL and THREE.js.",
    technologies: ["JavaScript", "WebGL", "THREE.js"],
    projectUrl: "https://stakikawa.github.io/demos/fluid-sim-2d/",
    imageUrl:
      "/images/fluid-sim.jpg",
  },
  {
    title: "Stanford Bunny Re-interpretation",
    description:
      "Submission for the HPG 2024 Student Competition. Represented the Stanford Bunny model using a hexagonal packing of spheres. The ~3300 spheres were representing in only ~5000 characters in GLSL.",
    technologies: ["Python, GLSL"],
    projectUrl: "https://www.shadertoy.com/view/Xc2czW",
    imageUrl:
      "/images/bunny.jpg",
  },
  {
    title: "Pathtracer Denoising",
    description:
      "Submission for the HPG 2022 Student Competition. Denoised a noisy path tracer using BVH optimizations, temporal accumulation, and temporal antialiasing. Achieved ~600% improvement in FPS relative to the baseline path tracer.",
    technologies: ["GLSL"],
    projectUrl: "https://www.shadertoy.com/view/7dyyDy",
    imageUrl:
      "/images/pathtracer_denoising.jpg",
  },
];


