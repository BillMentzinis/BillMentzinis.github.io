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
    title: "AI-Generated Image Detection (CIFAKE)",
    desc: "Real vs. AI-generated image detection on 120k images, from classical ML to ViT-B/16, SimCLR and LoRA. LoRA reaches 97.6% accuracy with 99.7% fewer trainable parameters.",
    url: "https://github.com/BillMentzinis/ML_PROJECT_SPRING_2026",
    badge: "Deep Learning",
    img: "/post_img.webp",
  },
  {
    title: "LLM RAG Local",
    desc: "Fully local RAG chat app (Streamlit, ChromaDB, Ollama or 4-bit Hugging Face models) with page-cited answers, a retrieval-evaluation tool, Docker Compose and CI on three operating systems.",
    url: "https://github.com/BillMentzinis/llm-rag-local",
    badge: "LLM / RAG",
    img: "/post_img.webp",
  },
  {
    title: "RGB–Thermal Fusion for Aerial Object Detection",
    desc: "RGB+thermal fusion for tiny aerial object detection with YOLOv8n: early vs. mid fusion, plus a day/night evaluation showing where IR beats RGB.",
    url: "https://github.com/BillMentzinis/CV_Final_Project",
    badge: "Computer Vision",
    img: "/post_img.webp",
  },
  {
    title: "MNIST LSH Graph Search",
    desc: "Approximate nearest-neighbor search and clustering on MNIST using LSH, Hypercube projection, graph traversal (GNNS/MRNG), and a convolutional autoencoder.",
    url: "https://github.com/BillMentzinis/mnist-lsh-graph-search",
    badge: "C++",
    img: "/post_img.webp",
  },
];
