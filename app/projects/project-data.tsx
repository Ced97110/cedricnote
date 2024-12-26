export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Broadwalk - UI/RAG implementation",
    year: 2023,
    description:
      "Broadwalk is ",
    url: "https://broadwalk.ai/",
  },
  {
    title: "Inspirame - UI",
    year: 2024,
    description:
      "A website built with Next.js, tailwinf and framer-motion for Inspirame. I created this website with the intention of mirroring the company values",
    url: "https://inspirame.com/",
  },
  {
    title: "EdTechQuity - UI",
    year: 2024,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
    url: "https://edtechquity.net/",
  },
];
