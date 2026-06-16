export type EducationNode = {
  institution: string;
  location: string;
  credential: string;
  type: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
  externalUrl?: string;
  externalLabel?: string;
  compact?: boolean;
};

export type LanguageCredential = {
  language: string;
  level: string;
};

export const educationTrajectory: EducationNode[] = [
  {
    institution: "International University of Rabat",
    location: "Morocco",
    credential:
      "Diplôme d’Ingénieur d’État en Informatique — Big Data & Artificial Intelligence",
    type: "Engineering Degree",
    period: "2020 — 2025",
    description:
      "Five-year engineering program combining computer science, data engineering, machine learning, artificial intelligence, software engineering, and applied data systems.",
    highlights: [
      "Big Data & Artificial Intelligence specialization",
      "Engineering foundations in computer science and applied AI",
      "Academic and project-based experience across machine learning, NLP, computer vision, and data analytics",
      "Final-year PFE completed through the MAP AI engineering internship, detailed in the Experience section",
    ],
    tags: [
      "Big Data",
      "Artificial Intelligence",
      "Machine Learning",
      "Software Engineering",
      "Data Systems",
    ],
    externalUrl:
      "https://www.uir.ac.ma/fr/pole/ecole-superieure-dinformatique-et-du-numerique/Option-Big-data",
    externalLabel: "View Big Data & AI Program",
  },
  {
    institution: "Ca’ Foscari University of Venice",
    location: "Italy",
    credential: "International Exchange Semester",
    type: "Academic Exchange",
    period: "Fall 2024",
    description:
      "International academic exchange focused on advanced computer science, computer vision, bioinformatics, and data analysis.",
    highlights: [
      "International study experience in Italy",
      "Computer Vision and 3D Vision exposure",
      "Bioinformatics coursework",
      "Data Analysis for Tourism course completed with strong performance",
      "Strengthened international academic adaptability and technical communication",
    ],
    tags: [
      "Computer Vision",
      "3D Vision",
      "Bioinformatics",
      "Data Analysis",
      "International Exchange",
    ],
    externalUrl: "https://www.unive.it/web/en/7056/home",
    externalLabel: "View Ca’ Foscari Program Page",
  },
  {
    institution: "Baccalaureate",
    location: "Benslimane, Morocco",
    credential: "Moroccan Baccalaureate in Physical Sciences",
    type: "Academic Foundation",
    period: "Pre-engineering",
    description:
      "Scientific foundation in physics, mathematics, and analytical reasoning before entering engineering studies.",
    highlights: [
      "Physics and mathematics foundation",
      "Analytical reasoning before engineering studies",
    ],
    tags: ["Physical Sciences", "Mathematics", "Analytical Reasoning"],
    compact: true,
  },
];

export const languageCredentials: LanguageCredential[] = [
  {
    language: "Arabic",
    level: "Native",
  },
  {
    language: "English",
    level: "C2",
  },
  {
    language: "French",
    level: "C2",
  },
];
