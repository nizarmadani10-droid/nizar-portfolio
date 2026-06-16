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
  problem: string;
  solution: string;
  architecture: string[];
  stack: string[];
  impact: string;
  signal: string;
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
    githubUrl: "https://github.com/nizarmadani10-droid/NLP-PROJECT",
  },
];
