import { educationTrajectory, languageCredentials } from "@/data/education";
import { experiences } from "@/data/experience";
import { projects, type Project, type ProjectCategory } from "@/data/projects";
import { siteConfig } from "@/lib/constants";

export const locales = ["en", "fr", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  ar: "AR",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDirection(locale: Locale) {
  return locale === "ar" ? "rtl" : "ltr";
}

export function stripLocalePrefix(pathname: string) {
  const segments = pathname.split("/");
  const maybeLocale = segments[1];

  if (isLocale(maybeLocale)) {
    const stripped = `/${segments.slice(2).join("/")}`.replace(/\/$/, "");
    return stripped === "" ? "/" : stripped;
  }

  return pathname || "/";
}

export function localizePath(pathname: string, locale: Locale) {
  const cleanPath = stripLocalePrefix(pathname);
  return cleanPath === "/" ? `/${locale}` : `/${locale}${cleanPath}`;
}

export function homeHref(locale: Locale, hash?: string) {
  return `/${locale}${hash ? `#${hash}` : ""}`;
}

export function projectHref(locale: Locale, slug: string) {
  return `/${locale}/projects/${slug}`;
}

const categoryLabels: Record<Locale, Record<ProjectCategory, string>> = {
  en: {
    "Language AI": "Language AI",
    "Computer Vision": "Computer Vision",
    "Applied AI": "Applied AI",
    Robotics: "Robotics",
  },
  fr: {
    "Language AI": "IA linguistique",
    "Computer Vision": "Vision par ordinateur",
    "Applied AI": "IA appliquée",
    Robotics: "Robotique",
  },
  ar: {
    "Language AI": "ذكاء لغوي",
    "Computer Vision": "رؤية حاسوبية",
    "Applied AI": "ذكاء اصطناعي تطبيقي",
    Robotics: "روبوتيك",
  },
};

const projectTranslations: Record<
  Locale,
  Record<
    string,
    Partial<
      Pick<
        Project,
        | "title"
        | "domain"
        | "description"
        | "shortDescription"
        | "problem"
        | "solution"
        | "architecture"
        | "stack"
        | "impact"
        | "signal"
        | "heroImageAlt"
      >
    >
  >
> = {
  en: {},
  fr: {
    "rag-conversational-assistant": {
      title: "Assistant conversationnel RAG",
      domain: "RAG / IA générative",
      description:
        "Une couche conversationnelle pour des collections documentaires privées, conçue pour répondre avec du contexte retrouvé plutôt qu'avec une mémoire générique du modèle.",
      problem:
        "La connaissance interne est dispersée dans plusieurs fichiers, ce qui rend les réponses lentes à trouver et difficiles à vérifier.",
      solution:
        "Le découpage des documents, la recherche sémantique par embeddings et la génération guidée par prompt relient chaque réponse au contexte source le plus pertinent.",
      architecture: [
        "Documents",
        "Découpage",
        "Embeddings",
        "Recherche vectorielle",
        "Réponse LLM",
      ],
      impact:
        "Amélioration de l'accès à la connaissance interne tout en gardant les réponses ancrées dans les contenus retrouvés.",
      signal: "Système d'intelligence documentaire",
      heroImageAlt:
        "Assistant d'intelligence documentaire avec fichiers, base de données et éléments d'IA conversationnelle.",
    },
    "intelligent-parking-system": {
      title: "Système de parking intelligent",
      domain: "Vision par ordinateur / OCR",
      description:
        "Un système d'automatisation qui transforme les entrées caméra en enregistrements structurés pour les opérations de parking.",
      problem:
        "Les workflows manuels d'entrée en parking sont lents, sujets aux erreurs et difficiles à auditer à grande échelle.",
      solution:
        "Un pipeline de vision détecte les plaques, extrait le texte par OCR et enregistre les événements véhicule pour le suivi opérationnel.",
      architecture: [
        "Flux caméra",
        "Détection de plaque",
        "OCR",
        "Validation",
        "Enregistrement parking",
      ],
      impact:
        "Automatisation de la reconnaissance de plaques et réduction de la friction dans les workflows de données véhicule.",
      signal: "Automatisation IA appliquée",
      heroImageAlt:
        "Garage de parking intelligent avec véhicule, caméra et tableau de bord analytique.",
    },
    "rti-ptm-coin-relighting": {
      title: "Relighting de monnaie RTI / PTM",
      domain: "Imagerie computationnelle",
      description:
        "Un workflow de relighting pour inspecter les détails fins de surface sur des monnaies avec RTI et polynomial texture mapping.",
      problem:
        "Les images statiques masquent les textures, l'usure de surface et les reliefs qui dépendent de la direction d'éclairage.",
      solution:
        "La capture multi-éclairage et l'ajustement PTM rendent l'objet relightable pour une analyse visuelle orientée recherche.",
      architecture: [
        "Jeu d'images",
        "Calibration lumière",
        "Ajustement PTM",
        "Indices de normales",
        "Relighting",
      ],
      impact:
        "Visualisation dynamique de la texture, du relief et des détails matériels d'un objet.",
      signal: "Vision orientée recherche",
      heroImageAlt:
        "Laboratoire de vision pour relighting de monnaie avec éclairages d'inspection et écrans d'analyse de surface.",
    },
    "ros-robotics-project": {
      title: "Projet robotique ROS",
      domain: "Systèmes autonomes",
      description:
        "Un projet d'autonomie basé sur ROS reliant perception, planification, contrôle et simulation dans un workflow robotique cohérent.",
      problem:
        "Le comportement autonome exige que plusieurs sous-systèmes robotiques communiquent de façon fiable malgré l'évolution de l'état du monde.",
      solution:
        "Des noeuds ROS coordonnent perception simulée, planification de mouvement, boucles de contrôle et visualisation pour tester le comportement robotique.",
      architecture: [
        "Noeuds ROS",
        "Capteurs",
        "Planification",
        "Contrôle",
        "Simulation",
      ],
      impact:
        "Connexion entre logique IA, simulation robotique autonome et tests système reproductibles.",
      signal: "Système de contrôle robotique",
      heroImageAlt:
        "Scène de planification robotique avec rover, carte numérique et interface de navigation autonome.",
    },
    "english-darija-translator": {
      title: "Traducteur anglais → darija",
      domain: "IA linguistique / NLP",
      description:
        "Un projet de traduction automatique neuronale pour traduire l'anglais vers la darija marocaine.",
      shortDescription:
        "Un projet de traduction neuronale dédié à la conversion de textes anglais en darija marocaine avec prétraitement NLP et modélisation séquentielle.",
      problem:
        "La darija est une langue à faibles ressources, ce qui fait du projet un cas d'usage NLP régional pertinent.",
      solution:
        "Le pipeline prétraite le texte anglais, tokenise les séquences, encode les motifs linguistiques et génère une sortie en darija.",
      architecture: [
        "Entrée anglaise",
        "Prétraitement",
        "Encodage séquentiel",
        "Inférence modèle",
        "Sortie darija",
      ],
      stack: [
        "Python",
        "TensorFlow/Keras",
        "NLP",
        "Seq2Seq",
        "LSTM",
        "Tokenisation",
      ],
      impact:
        "Démonstration académique de l'utilisation de modèles séquentiels pour la traduction anglais-darija.",
      signal: "Traduction NLP à faibles ressources",
      heroImageAlt:
        "Interface de traduction neuronale reliant une entrée anglaise à une sortie en darija marocaine.",
    },
    "butterfly-image-classification": {
      title: "Classification d'images de papillons",
      domain: "Vision par ordinateur / Classification d'images",
      description:
        "Un projet de deep learning pour reconnaître des espèces de papillons à partir de données image.",
      shortDescription:
        "Un projet de vision par ordinateur pour classifier des espèces de papillons avec apprentissage CNN et transfer learning.",
      problem:
        "Classifier les espèces de papillons à partir de motifs visuels et de caractéristiques d'image.",
      solution:
        "Le système prétraite les images, entraîne des modèles CNN et de transfer learning, puis évalue les prédictions sur des classes étiquetées.",
      architecture: [
        "Dataset d'images",
        "Prétraitement",
        "CNN / Transfer learning",
        "Prédiction",
        "Évaluation",
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
        "Projet académique de vision par ordinateur montrant la classification d'images et le transfer learning.",
      signal: "Système de reconnaissance d'espèces",
      heroImageAlt:
        "Scène de classification d'images de papillons avec espèces détectées et panneaux de confiance du modèle.",
    },
  },
  ar: {
    "rag-conversational-assistant": {
      title: "مساعد محادثة RAG",
      domain: "RAG / الذكاء الاصطناعي التوليدي",
      description:
        "طبقة محادثة للمجموعات الوثائقية الخاصة، مصممة للإجابة اعتمادا على سياق مسترجع بدل ذاكرة نموذج عامة.",
      problem:
        "المعرفة الداخلية موزعة بين ملفات متعددة، مما يجعل الوصول إلى الإجابات بطيئا وصعب التحقق.",
      solution:
        "يعتمد النظام على تقسيم الوثائق، والبحث الدلالي بالـ embeddings، والتوليد الموجه بالسياق لربط كل إجابة بالمصدر الأنسب.",
      architecture: [
        "الوثائق",
        "التقسيم",
        "Embeddings",
        "البحث المتجهي",
        "إجابة LLM",
      ],
      impact:
        "تحسين الوصول إلى المعرفة الداخلية مع إبقاء الإجابات مبنية على مواد مسترجعة يمكن تتبعها.",
      signal: "نظام ذكاء وثائقي",
      heroImageAlt:
        "مساعد ذكاء وثائقي مع ملفات وقاعدة بيانات وعناصر ذكاء اصطناعي حواري.",
    },
    "intelligent-parking-system": {
      title: "نظام مواقف ذكي",
      domain: "رؤية حاسوبية / OCR",
      description:
        "نظام أتمتة يحول مدخلات الكاميرا إلى سجلات مركبات منظمة لعمليات مواقف السيارات.",
      problem:
        "إجراءات الإدخال اليدوي في المواقف بطيئة ومعرضة للأخطاء وصعبة المراجعة على نطاق واسع.",
      solution:
        "يقوم pipeline للرؤية باكتشاف اللوحات، واستخراج النص عبر OCR، وتخزين أحداث المركبات للتتبع التشغيلي.",
      architecture: [
        "تدفق الكاميرا",
        "كشف اللوحة",
        "OCR",
        "التحقق",
        "سجل الموقف",
      ],
      impact:
        "أتمتة التعرف على اللوحات وتقليل الاحتكاك في سير عمل بيانات المركبات.",
      signal: "أتمتة بالذكاء الاصطناعي التطبيقي",
      heroImageAlt:
        "مشهد موقف سيارات ذكي مع مركبة وكاميرا ولوحة تحليلات.",
    },
    "rti-ptm-coin-relighting": {
      title: "إعادة إضاءة العملات RTI / PTM",
      domain: "تصوير حاسوبي",
      description:
        "سير عمل لإعادة الإضاءة من أجل فحص تفاصيل سطحية دقيقة على العملات باستخدام RTI وPTM.",
      problem:
        "الصور الثابتة تخفي النسيج والتآكل والتفاصيل البارزة التي تعتمد على اتجاه الإضاءة.",
      solution:
        "تجعل الصور متعددة الإضاءة وملاءمة PTM الجسم قابلا لإعادة الإضاءة تفاعليا للتحليل البصري البحثي.",
      architecture: [
        "مجموعة صور",
        "معايرة الإضاءة",
        "ملاءمة PTM",
        "دلائل السطح",
        "إعادة الإضاءة",
      ],
      impact:
        "إتاحة تصور ديناميكي للنسيج والنتوءات والتفاصيل المادية للكائن.",
      signal: "رؤية حاسوبية بحثية",
      heroImageAlt:
        "مختبر رؤية حاسوبية لإعادة إضاءة عملة مع مصابيح فحص وشاشات تحليل السطح.",
    },
    "ros-robotics-project": {
      title: "مشروع روبوتيك ROS",
      domain: "أنظمة ذاتية",
      description:
        "مشروع استقلالية مبني على ROS يربط الإدراك والتخطيط والتحكم والمحاكاة في سير عمل روبوتي واحد.",
      problem:
        "السلوك الذاتي يتطلب تواصلا موثوقا بين عدة أنظمة روبوتية فرعية مع تغير حالة العالم.",
      solution:
        "تنسق عقد ROS بين الاستشعار المحاكى، وتخطيط الحركة، وحلقات التحكم، والتصور لاختبار سلوك الروبوت.",
      architecture: [
        "عقد ROS",
        "المستشعرات",
        "التخطيط",
        "التحكم",
        "المحاكاة",
      ],
      impact:
        "ربط منطق الذكاء الاصطناعي بمحاكاة روبوتية مستقلة واختبارات نظام قابلة للتكرار.",
      signal: "نظام تحكم روبوتي",
      heroImageAlt:
        "مشهد تخطيط مسار روبوتي مع عربة وخريطة رقمية وواجهة ملاحة ذاتية.",
    },
    "english-darija-translator": {
      title: "مترجم الإنجليزية → الدارجة",
      domain: "ذكاء لغوي / NLP",
      description:
        "مشروع ترجمة آلية عصبية لترجمة الإنجليزية إلى الدارجة المغربية.",
      shortDescription:
        "مشروع ترجمة عصبية يركز على تحويل النص الإنجليزي إلى الدارجة المغربية باستخدام معالجة NLP ونمذجة تسلسلية.",
      problem:
        "الدارجة لغة قليلة الموارد، لذلك يستكشف المشروع حالة استخدام إقليمية في NLP.",
      solution:
        "يعالج النظام النص الإنجليزي، ويقسمه إلى tokens، ويرمز التسلسلات، ثم يولد مخرجا بالدارجة.",
      architecture: [
        "إدخال إنجليزي",
        "معالجة أولية",
        "ترميز تسلسلي",
        "استدلال النموذج",
        "إخراج بالدارجة",
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
        "عرض أكاديمي يوضح كيف يمكن استخدام النماذج التسلسلية للترجمة من الإنجليزية إلى الدارجة.",
      signal: "ترجمة NLP للغات قليلة الموارد",
      heroImageAlt:
        "واجهة ترجمة عصبية تربط إدخالا إنجليزيا بمخرج بالدارجة المغربية.",
    },
    "butterfly-image-classification": {
      title: "تصنيف صور الفراشات",
      domain: "رؤية حاسوبية / تصنيف الصور",
      description:
        "مشروع تعلم عميق للتعرف على أنواع الفراشات انطلاقا من بيانات الصور.",
      shortDescription:
        "مشروع رؤية حاسوبية لتصنيف أنواع الفراشات باستخدام CNN وtransfer learning.",
      problem:
        "تصنيف أنواع الفراشات بالاعتماد على الأنماط البصرية وخصائص الصور.",
      solution:
        "يعالج النظام بيانات الصور، ويدرب نماذج CNN وtransfer learning، ثم يقيم التنبؤات مقابل فئات معنونة.",
      architecture: [
        "Dataset صور",
        "معالجة أولية",
        "CNN / Transfer Learning",
        "التنبؤ",
        "التقييم",
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
        "مشروع أكاديمي في الرؤية الحاسوبية يوضح تصنيف الصور وtransfer learning.",
      signal: "نظام تعرف على الأنواع",
      heroImageAlt:
        "مشهد تصنيف صور فراشات مع الأنواع المكتشفة ولوحات ثقة النموذج.",
    },
  },
};

export const dictionaries = {
  en: {
    seoDescription: siteConfig.seoDescription,
    nav: {
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
      downloadCv: "Download CV",
      toggleMenu: "Toggle menu",
      githubProfile: "GitHub profile",
      linkedinProfile: "LinkedIn profile",
    },
    hero: {
      role: siteConfig.role,
      badge: "Available for new projects",
      description: siteConfig.description,
      specialization:
        "Specialized in machine learning, computer vision, NLP, RAG systems, generative AI, and data analytics.",
      exploreProjects: "Explore Projects",
      downloadCv: "Download CV",
      contactMe: "Contact Me",
    },
    philosophy: {
      label: "Engineering Philosophy",
      quote: "Build systems that are useful, clear, and reliable.",
      title: "Code that turns ideas into intelligent systems.",
      lines: [
        "Build systems that are useful, clear, and reliable.",
        "Good AI is not only smart — it is usable.",
        "Every project is a chance to turn complexity into something people can understand.",
      ],
      author: "Nizar Madani",
      imageAlt: "Portrait of Nizar Madani in a dark suit.",
    },
    projects: {
      label: "Selected Intelligent Systems",
      title: "AI projects presented as systems, not simple assignments.",
      description:
        "A compact gallery of AI systems. Filter by domain, preview the visual signal, then open the full case study.",
      filters: {
        All: "All",
        ...categoryLabels.en,
      },
      enterDetails: "Enter project details",
      github: "GitHub",
    },
    projectDetail: {
      backToProjects: "Back to projects",
      readiness: "Case Study Readiness",
      readinessBody:
        "Structured as a system narrative for recruiters, engineering teams, and research labs reviewing AI execution depth.",
      currentCase: "Current Case",
      overview: "Project Overview",
      category: "Category",
      domain: "Domain",
      signal: "Signal",
      stack: "Stack",
      technologies: "technologies",
      key: "Key",
      problem: "Problem",
      problemTitle: "The operating constraint",
      solution: "Solution",
      solutionTitle: "The system response",
      systemFlow: "System Flow",
      systemFlowTitle: "Architecture path from input to outcome",
      stages: "stages",
      impact: "Impact",
      impactTitle: "Why the system matters",
      previousProject: "Previous Project",
      nextProject: "Next Project",
      nextStep: "Next Step",
      ctaTitle: "Interested in this kind of AI system?",
      backToProjectsCta: "Back to Projects",
      githubRepository: "GitHub Repository",
      contactMe: "Contact Me",
      metadataSuffix: "AI Case Study",
    },
    aiStack: {
      label: "AI Stack",
      title: "From models to real AI systems.",
      description: "The tools I use across RAG, vision, ML, data, and robotics.",
      cards: [
        {
          title: "Generative AI & RAG",
          description: "RAG, embeddings, local LLMs.",
          label: "Core Strength",
          status: "Active",
        },
        {
          title: "Computer Vision",
          description: "OCR, relighting, 3D vision.",
          label: "Visual AI",
          status: "Applied",
        },
        {
          title: "Machine Learning Systems",
          description: "Training, evaluation, delivery.",
          label: "ML Layer",
          status: "Reliable",
        },
      ],
    },
    experienceSection: {
      label: "Experience",
      title: "Experience across AI, data, software, and intelligent systems.",
      description:
        "A practical trajectory across local RAG systems, applied data workflows, machine learning, software engineering, and IT foundations.",
      focus: "Focus",
      contributions: "Contributions",
      stackTools: "Stack / Tools",
      downloadReport: "Download Report",
      experiences,
    },
    educationSection: {
      label: "Academic Trajectory",
      title: "Academic foundation for AI engineering and data systems.",
      description:
        "A five-year Moroccan engineering path in Big Data and AI, strengthened by an Italian exchange semester and compact scientific foundations.",
      academicRole: "Academic Role",
      coreRole:
        "Core engineering formation in Morocco with a Big Data and AI specialization.",
      exchangeRole:
        "International exchange experience expanding the academic profile beyond the home engineering program.",
      officialPage: "Official page",
      viewProgramPage: "View Program Page",
      academicFoundation: "Academic Foundation",
      languageCredentials: "Language Credentials",
      trajectory: educationTrajectory,
      credentials: languageCredentials,
    },
    contact: {
      label: "Contact",
      title: "Let’s build what’s next.",
      description:
        "Open to AI engineering roles, research opportunities, international programs, and future-focused collaborations.",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "your.email@example.com",
      message: "Message",
      messagePlaceholder: "Tell me about the opportunity...",
      sendMessage: "Send Message",
      directSignal: "Direct Signal",
      preferEmail: "Prefer email?",
      directBody:
        "You can contact me directly for AI engineering roles, research opportunities, university programs, or collaborations.",
      emailMe: "Email Me",
      copyEmail: "Copy Email",
      emailCopied: "Email Copied",
      downloadCv: "Download CV",
    },
    footer:
      "Built for intelligent systems, research, and AI engineering opportunities.",
    categories: categoryLabels.en,
  },
  fr: {
    seoDescription:
      "Nizar Madani est ingénieur IA et diplômé en Big Data & Artificial Intelligence, spécialisé dans les systèmes IA en machine learning, RAG, NLP, computer vision, data analytics et robotique.",
    nav: {
      projects: "Projets",
      skills: "Compétences",
      experience: "Expérience",
      education: "Formation",
      contact: "Contact",
      downloadCv: "Télécharger le CV",
      toggleMenu: "Ouvrir le menu",
      githubProfile: "Profil GitHub",
      linkedinProfile: "Profil LinkedIn",
    },
    hero: {
      role: "Ingénieur IA / Ingénieur Machine Learning",
      badge: "Disponible pour de nouveaux projets",
      description:
        "Diplômé en Big Data & Artificial Intelligence, je conçois des expériences alimentées par l'IA.",
      specialization:
        "Spécialisé en machine learning, computer vision, NLP, systèmes RAG, IA générative et data analytics.",
      exploreProjects: "Explorer les projets",
      downloadCv: "Télécharger le CV",
      contactMe: "Me contacter",
    },
    philosophy: {
      label: "Philosophie d'ingénierie",
      quote: "Build systems that are useful, clear, and reliable.",
      title: "Du code qui transforme les idées en systèmes intelligents.",
      lines: [
        "Construire des systèmes utiles, clairs et fiables.",
        "Une bonne IA n'est pas seulement intelligente : elle doit être utilisable.",
        "Chaque projet est une occasion de rendre la complexité compréhensible.",
      ],
      author: "Nizar Madani",
      imageAlt: "Portrait de Nizar Madani en costume sombre.",
    },
    projects: {
      label: "Systèmes intelligents sélectionnés",
      title: "Des projets IA présentés comme des systèmes, pas comme de simples devoirs.",
      description:
        "Une galerie compacte de systèmes IA. Filtrez par domaine, observez le signal visuel, puis ouvrez l'étude de cas complète.",
      filters: {
        All: "Tous",
        ...categoryLabels.fr,
      },
      enterDetails: "Voir le projet",
      github: "GitHub",
    },
    projectDetail: {
      backToProjects: "Retour aux projets",
      readiness: "Prêt pour étude de cas",
      readinessBody:
        "Structuré comme un récit système pour recruteurs, équipes d'ingénierie et laboratoires de recherche évaluant la profondeur d'exécution IA.",
      currentCase: "Cas actuel",
      overview: "Vue d'ensemble du projet",
      category: "Catégorie",
      domain: "Domaine",
      signal: "Signal",
      stack: "Stack",
      technologies: "technologies",
      key: "Clé",
      problem: "Problème",
      problemTitle: "La contrainte opérationnelle",
      solution: "Solution",
      solutionTitle: "La réponse système",
      systemFlow: "Flux système",
      systemFlowTitle: "Chemin d'architecture de l'entrée au résultat",
      stages: "étapes",
      impact: "Impact",
      impactTitle: "Pourquoi le système compte",
      previousProject: "Projet précédent",
      nextProject: "Projet suivant",
      nextStep: "Prochaine étape",
      ctaTitle: "Intéressé par ce type de système IA ?",
      backToProjectsCta: "Retour aux projets",
      githubRepository: "Dépôt GitHub",
      contactMe: "Me contacter",
      metadataSuffix: "Étude de cas IA",
    },
    aiStack: {
      label: "Stack IA",
      title: "Des modèles aux vrais systèmes IA.",
      description:
        "Les outils que j'utilise en RAG, vision, ML, data et robotique.",
      cards: [
        {
          title: "IA générative & RAG",
          description: "RAG, embeddings, LLMs locaux.",
          label: "Force principale",
          status: "Actif",
        },
        {
          title: "Computer Vision",
          description: "OCR, relighting, vision 3D.",
          label: "IA visuelle",
          status: "Appliqué",
        },
        {
          title: "Systèmes Machine Learning",
          description: "Entraînement, évaluation, livraison.",
          label: "Couche ML",
          status: "Fiable",
        },
      ],
    },
    experienceSection: {
      label: "Expérience",
      title: "Expérience en IA, data, software et systèmes intelligents.",
      description:
        "Un parcours pratique entre systèmes RAG locaux, workflows data appliqués, machine learning, software engineering et bases IT.",
      focus: "Focus",
      contributions: "Contributions",
      stackTools: "Stack / Outils",
      downloadReport: "Télécharger le rapport",
      experiences: [
        {
          ...experiences[0],
          role: "Stagiaire ingénieur IA",
          company: "Agence Maghreb Arabe Presse",
          period: "Mar 2025 - Juil 2025",
          location: "Rabat",
          type: "Projet de fin d'études d'ingénieur / PFE",
          focus:
            "Projet de fin d'études centré sur un assistant conversationnel RAG local pour documents internes.",
          highlights: [
            "Développement d'un assistant interne de questions-réponses documentaires avec retrieval augmented generation.",
            "Travail sur le traitement de PDF/documents internes, embeddings, recherche vectorielle et modèles de langage locaux.",
            "Priorité donnée à la confidentialité, à l'accès à la connaissance et à l'efficacité opérationnelle.",
            "Projet réalisé comme PFE, combinant IA appliquée, intelligence documentaire et accès sécurisé à la connaissance interne.",
          ],
          reportLabel: "Télécharger le rapport PFE",
        },
        {
          ...experiences[1],
          role: "Stagiaire software & data",
          period: "Juil 2024 - Août 2024",
          location: "Casablanca",
          type: "Stage",
          focus: "Workflows software et modèles IA.",
          highlights: [
            "Travail sur des outils logiciels de gestion et d'analyse de données.",
            "Contribution à l'entraînement et à l'optimisation de modèles IA pour des cas d'usage ciblés.",
            "Renforcement de l'expérience pratique en software engineering et workflows data appliqués.",
          ],
        },
        {
          ...experiences[2],
          role: "Stagiaire data & machine learning",
          location: "Remote",
          type: "Stage",
          period: "Juil 2023 - Août 2023",
          focus:
            "Analyse de données et machine learning pour l'optimisation opérationnelle.",
          highlights: [
            "Analyse de données utilisateurs et opérationnelles pour l'optimisation de routes de livraison.",
            "Travail sur des modèles de machine learning pour la prévision de la demande.",
            "Application de méthodes data-driven pour améliorer les workflows de décision.",
          ],
        },
        {
          ...experiences[3],
          role: "Stagiaire assistant IT",
          period: "Juil 2023 - Août 2023",
          location: "Casablanca",
          type: "Stage",
          focus: "Support IT et bases d'infrastructure.",
          highlights: [
            "Assistance au support d'infrastructure IT et aux tests techniques.",
            "Travail sur des tâches de base en réseau et support système.",
            "Construction d'une première expérience en environnement technique professionnel.",
          ],
        },
      ],
    },
    educationSection: {
      label: "Parcours académique",
      title: "Fondation académique pour l'ingénierie IA et les systèmes data.",
      description:
        "Un parcours d'ingénierie marocain de cinq ans en Big Data et IA, renforcé par un semestre d'échange en Italie et une base scientifique solide.",
      academicRole: "Rôle académique",
      coreRole:
        "Formation d'ingénieur au Maroc avec spécialisation Big Data et IA.",
      exchangeRole:
        "Expérience internationale élargissant le profil académique au-delà du programme d'ingénierie d'origine.",
      officialPage: "Page officielle",
      viewProgramPage: "Voir la page du programme",
      academicFoundation: "Fondation académique",
      languageCredentials: "Langues",
      trajectory: [
        {
          ...educationTrajectory[0],
          institution: "Université Internationale de Rabat",
          location: "Maroc",
          credential:
            "Diplôme d'Ingénieur d'État en Informatique - Big Data & Artificial Intelligence",
          type: "Diplôme d'ingénieur",
          description:
            "Programme d'ingénierie de cinq ans combinant informatique, data engineering, machine learning, intelligence artificielle, software engineering et systèmes data appliqués.",
          highlights: [
            "Spécialisation Big Data & Artificial Intelligence",
            "Fondations d'ingénierie en informatique et IA appliquée",
            "Expérience académique et projet en machine learning, NLP, computer vision et data analytics",
            "PFE réalisé via le stage d'ingénierie IA à la MAP, détaillé dans la section Expérience",
          ],
          externalLabel: "Accéder au programme Big Data & IA",
        },
        {
          ...educationTrajectory[1],
          institution: "Université Ca' Foscari de Venise",
          location: "Italie",
          credential: "Semestre d'échange international",
          type: "Échange académique",
          period: "Automne 2024",
          description:
            "Échange académique international axé sur l'informatique avancée, la computer vision, la bioinformatique et l'analyse de données.",
          highlights: [
            "Expérience d'études internationale en Italie",
            "Exposition à la computer vision et à la vision 3D",
            "Cours de bioinformatique",
            "Cours Data Analysis for Tourism validé avec une forte performance",
            "Renforcement de l'adaptabilité académique internationale et de la communication technique",
          ],
          externalLabel: "Accéder à la page Ca' Foscari",
        },
        {
          ...educationTrajectory[2],
          institution: "Baccalauréat",
          location: "Benslimane, Maroc",
          credential: "Baccalauréat marocain en sciences physiques",
          type: "Fondation académique",
          period: "Pré-ingénierie",
          description:
            "Base scientifique en physique, mathématiques et raisonnement analytique avant les études d'ingénierie.",
          highlights: [
            "Fondation en physique et mathématiques",
            "Raisonnement analytique avant les études d'ingénierie",
          ],
          tags: ["Sciences physiques", "Mathématiques", "Raisonnement analytique"],
        },
      ],
      credentials: [
        { language: "Arabe", level: "Langue maternelle" },
        { language: "Anglais", level: "C2" },
        { language: "Français", level: "C2" },
      ],
    },
    contact: {
      label: "Contact",
      title: "Construisons la suite.",
      description:
        "Ouvert aux rôles en ingénierie IA, aux opportunités de recherche, aux programmes internationaux et aux collaborations tournées vers l'avenir.",
      name: "Nom",
      namePlaceholder: "Votre nom",
      email: "Email",
      emailPlaceholder: "votre.email@example.com",
      message: "Message",
      messagePlaceholder: "Parlez-moi de l'opportunité...",
      sendMessage: "Envoyer le message",
      directSignal: "Signal direct",
      preferEmail: "Vous préférez l'email ?",
      directBody:
        "Vous pouvez me contacter directement pour des rôles en ingénierie IA, des opportunités de recherche, des programmes universitaires ou des collaborations.",
      emailMe: "M'envoyer un email",
      copyEmail: "Copier l'email",
      emailCopied: "Email copié",
      downloadCv: "Télécharger le CV",
    },
    footer:
      "Conçu pour les systèmes intelligents, la recherche et les opportunités en ingénierie IA.",
    categories: categoryLabels.fr,
  },
  ar: {
    seoDescription:
      "نزار مدني مهندس ذكاء اصطناعي وخريج Big Data & Artificial Intelligence، يطور أنظمة ذكاء اصطناعي في machine learning وRAG وNLP والرؤية الحاسوبية وتحليل البيانات والروبوتيك.",
    nav: {
      projects: "المشاريع",
      skills: "المهارات",
      experience: "الخبرة",
      education: "التعليم",
      contact: "التواصل",
      downloadCv: "تحميل السيرة الذاتية",
      toggleMenu: "فتح القائمة",
      githubProfile: "حساب GitHub",
      linkedinProfile: "حساب LinkedIn",
    },
    hero: {
      role: "مهندس ذكاء اصطناعي / مهندس تعلم آلي",
      badge: "متاح لمشاريع جديدة",
      description:
        "خريج Big Data & Artificial Intelligence أطور تجارب وأنظمة مدعومة بالذكاء الاصطناعي.",
      specialization:
        "متخصص في machine learning، والرؤية الحاسوبية، وNLP، وأنظمة RAG، والذكاء الاصطناعي التوليدي، وتحليل البيانات.",
      exploreProjects: "استكشاف المشاريع",
      downloadCv: "تحميل السيرة الذاتية",
      contactMe: "تواصل معي",
    },
    philosophy: {
      label: "فلسفة هندسية",
      quote: "Build systems that are useful, clear, and reliable.",
      title: "كود يحول الأفكار إلى أنظمة ذكية.",
      lines: [
        "بناء أنظمة مفيدة وواضحة وموثوقة.",
        "الذكاء الاصطناعي الجيد ليس ذكيا فقط، بل يجب أن يكون قابلا للاستخدام.",
        "كل مشروع فرصة لتحويل التعقيد إلى شيء يمكن للناس فهمه.",
      ],
      author: "Nizar Madani",
      imageAlt: "صورة شخصية لنزار مدني ببدلة داكنة.",
    },
    projects: {
      label: "أنظمة ذكية مختارة",
      title: "مشاريع ذكاء اصطناعي مقدمة كأنظمة، لا كواجبات بسيطة.",
      description:
        "معرض مختصر لأنظمة ذكاء اصطناعي. اختر المجال، شاهد الإشارة البصرية، ثم افتح دراسة الحالة الكاملة.",
      filters: {
        All: "الكل",
        ...categoryLabels.ar,
      },
      enterDetails: "دخول تفاصيل المشروع",
      github: "GitHub",
    },
    projectDetail: {
      backToProjects: "العودة إلى المشاريع",
      readiness: "جاهزية دراسة الحالة",
      readinessBody:
        "منظم كسردية نظامية للمجندين وفرق الهندسة ومختبرات البحث التي تراجع عمق تنفيذ أنظمة الذكاء الاصطناعي.",
      currentCase: "الحالة الحالية",
      overview: "نظرة عامة على المشروع",
      category: "الفئة",
      domain: "المجال",
      signal: "الإشارة",
      stack: "التقنيات",
      technologies: "تقنيات",
      key: "الأهم",
      problem: "المشكلة",
      problemTitle: "القيد التشغيلي",
      solution: "الحل",
      solutionTitle: "استجابة النظام",
      systemFlow: "تدفق النظام",
      systemFlowTitle: "مسار المعمارية من الإدخال إلى النتيجة",
      stages: "مراحل",
      impact: "الأثر",
      impactTitle: "لماذا يهم هذا النظام",
      previousProject: "المشروع السابق",
      nextProject: "المشروع التالي",
      nextStep: "الخطوة التالية",
      ctaTitle: "مهتم بهذا النوع من أنظمة الذكاء الاصطناعي؟",
      backToProjectsCta: "العودة إلى المشاريع",
      githubRepository: "مستودع GitHub",
      contactMe: "تواصل معي",
      metadataSuffix: "دراسة حالة ذكاء اصطناعي",
    },
    aiStack: {
      label: "Stack الذكاء الاصطناعي",
      title: "من النماذج إلى أنظمة ذكاء اصطناعي حقيقية.",
      description:
        "الأدوات التي أستخدمها في RAG والرؤية وML والبيانات والروبوتيك.",
      cards: [
        {
          title: "IA توليدية & RAG",
          description: "RAG، embeddings، وLLMs محلية.",
          label: "نقطة قوة",
          status: "نشط",
        },
        {
          title: "Computer Vision",
          description: "OCR، relighting، ورؤية ثلاثية الأبعاد.",
          label: "رؤية ذكية",
          status: "تطبيقي",
        },
        {
          title: "أنظمة Machine Learning",
          description: "تدريب، تقييم، وتسليم.",
          label: "طبقة ML",
          status: "موثوق",
        },
      ],
    },
    experienceSection: {
      label: "الخبرة",
      title: "خبرة عبر الذكاء الاصطناعي والبيانات والبرمجيات والأنظمة الذكية.",
      description:
        "مسار عملي يشمل أنظمة RAG محلية، وسير عمل بيانات تطبيقي، وmachine learning، وهندسة برمجيات، وأساسيات IT.",
      focus: "التركيز",
      contributions: "المساهمات",
      stackTools: "التقنيات / الأدوات",
      downloadReport: "تحميل التقرير",
      experiences: [
        {
          ...experiences[0],
          role: "متدرب هندسة الذكاء الاصطناعي",
          company: "وكالة المغرب العربي للأنباء",
          period: "مارس 2025 - يوليوز 2025",
          location: "الرباط",
          type: "مشروع نهاية الدراسة الهندسية / PFE",
          focus:
            "مشروع نهاية الدراسة حول مساعد محادثة RAG محلي للوثائق الداخلية.",
          highlights: [
            "بناء مساعد داخلي للأسئلة والأجوبة على الوثائق باستخدام retrieval augmented generation.",
            "العمل على معالجة PDF والوثائق الداخلية، وembeddings، والبحث المتجهي، ونماذج اللغة المحلية.",
            "التركيز على السرية، والوصول إلى المعرفة، والكفاءة التشغيلية.",
            "إنجاز المشروع كـ PFE يجمع بين الذكاء الاصطناعي التطبيقي، والذكاء الوثائقي، والوصول الآمن إلى المعرفة الداخلية.",
          ],
          reportLabel: "تحميل تقرير PFE",
        },
        {
          ...experiences[1],
          role: "متدرب برمجيات وبيانات",
          period: "يوليوز 2024 - غشت 2024",
          location: "الدار البيضاء",
          type: "تدريب",
          focus: "سير عمل برمجي ونماذج ذكاء اصطناعي.",
          highlights: [
            "العمل على أدوات برمجية لإدارة البيانات وتحليلها.",
            "المساهمة في تدريب وتحسين نماذج ذكاء اصطناعي لحالات استخدام محددة.",
            "تعزيز الخبرة العملية في هندسة البرمجيات وسير عمل البيانات التطبيقية.",
          ],
        },
        {
          ...experiences[2],
          role: "متدرب بيانات وMachine Learning",
          location: "عن بعد",
          type: "تدريب",
          period: "يوليوز 2023 - غشت 2023",
          focus:
            "تحليل البيانات وmachine learning من أجل تحسين العمليات.",
          highlights: [
            "تحليل بيانات المستخدمين والعمليات لتحسين مسارات التوصيل.",
            "العمل على نماذج machine learning للتنبؤ بالطلب.",
            "تطبيق أساليب قائمة على البيانات لتحسين سير اتخاذ القرار.",
          ],
        },
        {
          ...experiences[3],
          role: "متدرب مساعد IT",
          period: "يوليوز 2023 - غشت 2023",
          location: "الدار البيضاء",
          type: "تدريب",
          focus: "دعم IT وأساسيات البنية التحتية.",
          highlights: [
            "المساعدة في دعم البنية التحتية IT والاختبارات التقنية.",
            "العمل على مهام أساسية في الشبكات ودعم الأنظمة.",
            "بناء خبرة أولية في بيئات تقنية مهنية.",
          ],
        },
      ],
    },
    educationSection: {
      label: "المسار الأكاديمي",
      title: "أساس أكاديمي لهندسة الذكاء الاصطناعي وأنظمة البيانات.",
      description:
        "مسار هندسي مغربي لخمس سنوات في Big Data وAI، معزز بفصل تبادل في إيطاليا وأساس علمي متين.",
      academicRole: "الدور الأكاديمي",
      coreRole:
        "تكوين هندسي في المغرب مع تخصص Big Data وArtificial Intelligence.",
      exchangeRole:
        "تجربة تبادل دولية وسعت المسار الأكاديمي خارج برنامج الهندسة الأصلي.",
      officialPage: "الصفحة الرسمية",
      viewProgramPage: "عرض صفحة البرنامج",
      academicFoundation: "الأساس الأكاديمي",
      languageCredentials: "اللغات",
      trajectory: [
        {
          ...educationTrajectory[0],
          institution: "الجامعة الدولية بالرباط",
          location: "المغرب",
          credential:
            "دبلوم مهندس دولة في الإعلاميات - Big Data & Artificial Intelligence",
          type: "دبلوم مهندس",
          description:
            "برنامج هندسي لخمس سنوات يجمع بين علوم الحاسوب، وهندسة البيانات، وmachine learning، والذكاء الاصطناعي، وهندسة البرمجيات، وأنظمة البيانات التطبيقية.",
          highlights: [
            "تخصص Big Data & Artificial Intelligence",
            "أساس هندسي في علوم الحاسوب والذكاء الاصطناعي التطبيقي",
            "خبرة أكاديمية ومشاريع في machine learning وNLP والرؤية الحاسوبية وتحليل البيانات",
            "تم إنجاز PFE عبر تدريب هندسة الذكاء الاصطناعي في MAP كما هو موضح في قسم الخبرة",
          ],
          externalLabel: "عرض برنامج Big Data & AI",
        },
        {
          ...educationTrajectory[1],
          institution: "جامعة Ca' Foscari في البندقية",
          location: "إيطاليا",
          credential: "فصل تبادل دولي",
          type: "تبادل أكاديمي",
          period: "خريف 2024",
          description:
            "تبادل أكاديمي دولي ركز على علوم الحاسوب المتقدمة، والرؤية الحاسوبية، والمعلوماتية الحيوية، وتحليل البيانات.",
          highlights: [
            "تجربة دراسة دولية في إيطاليا",
            "تعرض لمواضيع Computer Vision و3D Vision",
            "دروس في bioinformatics",
            "إتمام مقرر Data Analysis for Tourism بأداء قوي",
            "تعزيز القدرة على التكيف الأكاديمي الدولي والتواصل التقني",
          ],
          externalLabel: "عرض صفحة Ca' Foscari",
        },
        {
          ...educationTrajectory[2],
          institution: "البكالوريا",
          location: "بنسليمان، المغرب",
          credential: "البكالوريا المغربية في العلوم الفيزيائية",
          type: "أساس أكاديمي",
          period: "قبل الهندسة",
          description:
            "أساس علمي في الفيزياء والرياضيات والتفكير التحليلي قبل الولوج إلى الدراسات الهندسية.",
          highlights: [
            "أساس في الفيزياء والرياضيات",
            "تفكير تحليلي قبل الدراسات الهندسية",
          ],
          tags: ["علوم فيزيائية", "رياضيات", "تفكير تحليلي"],
        },
      ],
      credentials: [
        { language: "العربية", level: "لغة أم" },
        { language: "الإنجليزية", level: "C2" },
        { language: "الفرنسية", level: "C2" },
      ],
    },
    contact: {
      label: "التواصل",
      title: "لنبنِ ما هو قادم.",
      description:
        "متاح لأدوار هندسة الذكاء الاصطناعي، وفرص البحث، والبرامج الدولية، والتعاونات المستقبلية.",
      name: "الاسم",
      namePlaceholder: "اسمك",
      email: "البريد الإلكتروني",
      emailPlaceholder: "your.email@example.com",
      message: "الرسالة",
      messagePlaceholder: "حدثني عن الفرصة...",
      sendMessage: "إرسال الرسالة",
      directSignal: "تواصل مباشر",
      preferEmail: "تفضل البريد الإلكتروني؟",
      directBody:
        "يمكنك التواصل معي مباشرة بخصوص أدوار هندسة الذكاء الاصطناعي، أو فرص البحث، أو البرامج الجامعية، أو التعاون.",
      emailMe: "راسلني",
      copyEmail: "نسخ البريد",
      emailCopied: "تم نسخ البريد",
      downloadCv: "تحميل السيرة الذاتية",
    },
    footer:
      "مصمم للأنظمة الذكية والبحث وفرص هندسة الذكاء الاصطناعي.",
    categories: categoryLabels.ar,
  },
} as const;

export type Dictionary = (typeof dictionaries)["en"];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] as Dictionary;
}

export function getLocalizedProjects(locale: Locale): Project[] {
  const translations = projectTranslations[locale];

  return projects.map((project) => ({
    ...project,
    ...translations[project.slug],
  }));
}

export function getLocalizedProject(locale: Locale, slug: string) {
  return getLocalizedProjects(locale).find((project) => project.slug === slug);
}
