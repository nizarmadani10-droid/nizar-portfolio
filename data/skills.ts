export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI / Machine Learning",
    description:
      "Core machine learning and deep learning foundations applied across academic and practical AI projects.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Supervised Learning",
      "Classification",
      "Clustering",
      "Model Evaluation",
      "Scikit-learn",
      "PyTorch",
      "TensorFlow / Keras",
    ],
  },
  {
    title: "Generative AI & RAG",
    description:
      "Experience building document-based AI systems with retrieval, embeddings, and language models.",
    skills: [
      "Retrieval-Augmented Generation",
      "Embeddings",
      "Vector Search",
      "Local LLMs",
      "Document Intelligence",
      "Prompt Engineering",
      "PDF Processing",
      "NLP",
    ],
  },
  {
    title: "Computer Vision",
    description:
      "Computer vision experience across OCR, relighting, image analysis, and 3D vision coursework.",
    skills: [
      "OpenCV",
      "Image Processing",
      "OCR",
      "Feature Extraction",
      "RTI / PTM",
      "3D Computer Vision",
      "Object Analysis",
    ],
  },
];
