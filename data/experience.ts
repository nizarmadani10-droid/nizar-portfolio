export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  focus: string;
  highlights: string[];
  tools: string[];
  reportUrl?: string;
  reportLabel?: string;
};

export const experiences: Experience[] = [
  {
    role: "AI Engineering Intern",
    company: "Agence Maghreb Arabe Presse",
    period: "Mar 2025 - Jul 2025",
    location: "Rabat",
    type: "Final-Year Engineering Thesis Project / PFE",
    focus:
      "Final-year engineering thesis project focused on a local RAG conversational assistant for internal documents.",
    highlights: [
      "Built an internal document-question-answering assistant using retrieval augmented generation.",
      "Worked with PDF/internal document processing, embeddings, vector search, and local language models.",
      "Focused on confidentiality, knowledge access, and operational efficiency.",
      "Completed as my final-year engineering thesis project, combining applied AI, document intelligence, and secure internal knowledge access.",
    ],
    tools: [
      "Python",
      "RAG",
      "Embeddings",
      "Vector Database",
      "LLMs",
      "PDF Processing",
    ],
    reportUrl: "/documents/nizar-madani-thesis-report.pdf",
    reportLabel: "Download Thesis Report",
  },
  {
    role: "Software & Data Intern",
    company: "Digital MedTelecom",
    period: "Jul 2024 - Aug 2024",
    location: "Casablanca",
    type: "Internship",
    focus: "Software and AI model workflows.",
    highlights: [
      "Worked on software tools for data management and analysis.",
      "Contributed to training and optimization of AI models for specific use cases.",
      "Strengthened practical experience in software engineering and applied data workflows.",
    ],
    tools: ["Python", "Data Analysis", "AI Models", "Software Engineering"],
  },
  {
    role: "Data & Machine Learning Intern",
    company: "Hueman Digital",
    period: "Jul 2023 - Aug 2023",
    location: "Remote",
    type: "Internship",
    focus: "Data analysis and machine learning for operational optimization.",
    highlights: [
      "Analyzed user and operational data for delivery route optimization.",
      "Worked on machine learning models for demand forecasting.",
      "Applied data-driven methods to improve decision-making workflows.",
    ],
    tools: ["Python", "Machine Learning", "Data Analysis", "Forecasting"],
  },
  {
    role: "IT Assistant Intern",
    company: "Digital MedTelecom",
    period: "Jul 2023 - Aug 2023",
    location: "Casablanca",
    type: "Internship",
    focus: "IT support and infrastructure basics.",
    highlights: [
      "Assisted with IT infrastructure support and technical testing.",
      "Worked on basic networking and system support tasks.",
      "Built foundational experience in professional technical environments.",
    ],
    tools: ["IT Support", "Networking", "Testing"],
  },
];
