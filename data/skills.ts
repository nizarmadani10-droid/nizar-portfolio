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
  {
    title: "Data Engineering & Analytics",
    description:
      "Data processing and analysis skills used in AI, business, and operational optimization projects.",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "SQL",
      "Azure SQL",
      "Data Analysis",
      "Forecasting",
      "Data Visualization",
    ],
  },
  {
    title: "Software Engineering & Tools",
    description:
      "Software engineering foundation for building AI-powered applications, dashboards, and web systems.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Flask",
      "GitHub",
      "Jupyter Notebook",
      "VS Code",
      "API Design",
    ],
  },
  {
    title: "Robotics & Intelligent Systems",
    description:
      "Robotics and simulation exposure connecting AI logic with autonomous system behavior.",
    skills: [
      "ROS",
      "RViz",
      "Gazebo",
      "Planning",
      "Motion Control",
      "Simulation",
      "Intelligent Systems",
    ],
  },
];
