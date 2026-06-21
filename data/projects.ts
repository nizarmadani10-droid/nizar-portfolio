import { projectPapers, type ProjectPaper } from "@/data/projectPapers";

export type ProjectCategory =
  | "Language AI"
  | "Computer Vision"
  | "Applied AI"
  | "Robotics";

export type Project = {
  title: string;
  slug: string;
  domain: string;
  category: ProjectCategory;
  description: string;
  shortDescription?: string;
  problem: string;
  solution: string;
  architecture: string[];
  stack: string[];
  impact: string;
  signal: string;
  thumbnailImage?: string;
  heroImageAlt?: string;
  heroImage?: string;
  paper?: ProjectPaper;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    title: "RAG Conversational Assistant",
    slug: "rag-conversational-assistant",
    domain: "RAG / Generative AI",
    category: "Language AI",
    description:
      "A conversational layer for private document collections, built to answer questions with retrieved context instead of generic model memory.",
    problem:
      "Internal knowledge is scattered across files, making answers slow to find and difficult to verify.",
    solution:
      "Chunked documents, embedded semantic search, and prompt-grounded generation connect each response to the most relevant source context.",
    architecture: [
      "Documents",
      "Chunking",
      "Embeddings",
      "Vector Search",
      "LLM Answer",
    ],
    stack: ["Python", "RAG", "Embeddings", "Vector Database", "LLM"],
    impact:
      "Improved access to internal knowledge while keeping responses grounded in retrieved material.",
    signal: "Document Intelligence System",
    thumbnailImage: "/project-thumbnails/rag-conversational-assistant.png",
    heroImage: "/project-backgrounds/rag-background.png",
    heroImageAlt:
      "A document intelligence assistant with files, database, and conversational AI elements.",
    paper: projectPapers["rag-conversational-assistant"],
    githubUrl: "https://github.com/nizarmadani10-droid/NLP-PROJECT",
  },
  {
    title: "Intelligent Parking System",
    slug: "intelligent-parking-system",
    domain: "Computer Vision / OCR",
    category: "Applied AI",
    description:
      "An automation system that turns camera input into structured vehicle records for parking operations.",
    problem:
      "Manual parking entry workflows are slow, error-prone, and hard to audit at scale.",
    solution:
      "A vision pipeline detects plates, extracts text with OCR, and persists vehicle events for operational tracking.",
    architecture: [
      "Camera Feed",
      "Plate Detection",
      "OCR",
      "Validation",
      "Parking Record",
    ],
    stack: ["Python", "Flask", "Azure SQL", "OCR", "Azure"],
    impact:
      "Automated plate recognition and reduced friction in vehicle data workflows.",
    signal: "Applied AI Automation",
    thumbnailImage: "/project-thumbnails/intelligent-parking-system.png",
    heroImage: "/project-backgrounds/intelligent-parking-background.png",
    heroImageAlt:
      "An intelligent parking garage scene with a vehicle, camera, and analytics dashboard.",
    paper: projectPapers["intelligent-parking-system"],
    githubUrl: "https://github.com/nizarmadani10-droid/NLP-PROJECT",
  },
  {
    title: "RTI / PTM Coin Relighting",
    slug: "rti-ptm-coin-relighting",
    domain: "Computational Imaging",
    category: "Computer Vision",
    description:
      "A relighting workflow for inspecting fine surface details on coins through RTI and polynomial texture mapping.",
    problem:
      "Static images hide material texture, surface wear, and relief details that depend on illumination direction.",
    solution:
      "Multi-light image capture and PTM fitting make the object interactively relightable for research-oriented visual analysis.",
    architecture: [
      "Image Set",
      "Light Calibration",
      "PTM Fit",
      "Normal Cues",
      "Relighting",
    ],
    stack: ["Python", "OpenCV", "Image Processing", "PTM"],
    impact:
      "Enabled dynamic visualization of object texture, relief, and material details.",
    signal: "Research-Oriented Vision",
    thumbnailImage: "/project-thumbnails/rti-ptm-coin-relighting.png",
    heroImage: "/project-backgrounds/rti-ptm-background.png",
    heroImageAlt:
      "A coin relighting and computer vision lab with inspection lights and surface analysis screens.",
    paper: projectPapers["rti-ptm-coin-relighting"],
    githubUrl: "https://github.com/nizarmadani10-droid/NLP-PROJECT",
  },
  {
    title: "ROS Robotics Project",
    slug: "ros-robotics-project",
    domain: "Autonomous Systems",
    category: "Robotics",
    description:
      "A ROS-based autonomy project connecting perception, planning, control, and simulation into one robotics workflow.",
    problem:
      "Autonomous behavior requires multiple robotics subsystems to communicate reliably under changing world state.",
    solution:
      "ROS nodes coordinate simulated sensing, motion planning, control loops, and visualization for testable robot behavior.",
    architecture: ["ROS Nodes", "Sensors", "Planning", "Control", "Simulation"],
    stack: ["ROS", "Python", "RViz", "Gazebo", "Robotics"],
    impact:
      "Connected AI logic with autonomous robotics simulation and repeatable system testing.",
    signal: "Robotics Control System",
    thumbnailImage: "/project-thumbnails/ros-robotics-project.png",
    heroImage: "/project-backgrounds/ros-robotics-background.png",
    heroImageAlt:
      "A robotics path-planning scene with a rover, digital map, and autonomous navigation interface.",
    paper: projectPapers["ros-robotics-project"],
    githubUrl: "https://github.com/nizarmadani10-droid/NLP-PROJECT",
  },
  {
    title: "English \u2192 Darija Translator",
    slug: "english-darija-translator",
    domain: "Language AI / NLP",
    category: "Language AI",
    description:
      "A neural machine translation project for translating English into Moroccan Darija.",
    shortDescription:
      "A neural translation project focused on converting English text into Moroccan Darija using NLP preprocessing and sequence modeling.",
    problem:
      "Darija is a low-resource language, so the project explores a regional NLP use case.",
    solution:
      "The pipeline preprocesses English text, tokenizes sequences, encodes language patterns, and generates Darija output through sequence modeling.",
    architecture: [
      "English Input",
      "Preprocessing",
      "Sequence Encoding",
      "Model Inference",
      "Darija Output",
    ],
    stack: [
      "Python",
      "TensorFlow/Keras",
      "NLP",
      "Seq2Seq",
      "LSTM",
      "Tokenization",
    ],
    impact:
      "Academic demo showing how sequence models can be used for English-to-Darija translation.",
    signal: "Low-Resource NLP Translation",
    thumbnailImage: "/project-thumbnails/english-darija-translator.png",
    heroImage: "/project-backgrounds/english-darija-translator-background.png",
    heroImageAlt:
      "A neural translation interface connecting English input to Moroccan Darija output.",
    paper: projectPapers["english-darija-translator"],
    githubUrl: "https://github.com/nizarmadani10-droid/NLP-PROJECT",
  },
  {
    title: "Butterfly Image Classification",
    slug: "butterfly-image-classification",
    domain: "Computer Vision / Image Classification",
    category: "Computer Vision",
    description:
      "A deep learning project for butterfly species recognition from image data.",
    shortDescription:
      "A computer vision project for classifying butterfly species from images using CNN-based learning and transfer learning.",
    problem:
      "Classify butterfly species using visual patterns and image features.",
    solution:
      "The system preprocesses image data, trains CNN and transfer-learning models, and evaluates species predictions against labeled butterfly classes.",
    architecture: [
      "Image Dataset",
      "Preprocessing",
      "CNN / Transfer Learning",
      "Prediction",
      "Evaluation",
    ],
    stack: [
      "Python",
      "TensorFlow/Keras",
      "CNN",
      "VGG16",
      "Transfer Learning",
      "Computer Vision",
    ],
    impact:
      "Academic computer vision project showing image classification and transfer learning.",
    signal: "Species Recognition System",
    thumbnailImage: "/project-thumbnails/butterfly-image-classification.png",
    heroImage: "/project-backgrounds/butterfly-image-classification-background.png",
    heroImageAlt:
      "A butterfly image classification scene with detected species and model confidence panels.",
    paper: projectPapers["butterfly-image-classification"],
    githubUrl: "https://github.com/nizarmadani10-droid/NLP-PROJECT",
  },
];
