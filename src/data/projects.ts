// Single source for project cards. Order matters: the home page shows the first HOME_PROJECT_COUNT.

export interface Project {
  title: string;
  desc: string;
  url: string;
  badge: string;
  img: string;
}

export const HOME_PROJECT_COUNT = 3;

export const PROJECTS: Project[] = [
  {
    title: "MNIST LSH Graph Search",
    desc: "Approximate nearest-neighbor search and clustering on MNIST using LSH, Hypercube projection, graph traversal (GNNS/MRNG), and a convolutional autoencoder.",
    url: "https://github.com/BillMentzinis/mnist-lsh-graph-search",
    badge: "C++",
    img: "/post_img.webp",
  },
  {
    title: "CV Final Project — Early & Mid Fusion with YOLOv8",
    desc: "Early and mid fusion implementation using the YOLOv8n model from Ultralytics for computer vision tasks.",
    url: "https://github.com/BillMentzinis/CV_Final_Project",
    badge: "Computer Vision",
    img: "/post_img.webp",
  },
  {
    title: "LLM RAG Local",
    desc: "Local Retrieval-Augmented Generation (RAG) pipeline using open-source LLMs.",
    url: "https://github.com/BillMentzinis/llm-rag-local",
    badge: "Python",
    img: "/post_img.webp",
  },
];
