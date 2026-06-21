export type ProjectPaper = {
  abstract: string;
  problemContext: string;
  methodology: string;
  implementation: string;
  results: string;
  limitations: string;
  takeaways: string;
};

export const projectPapers = {
  "rag-conversational-assistant": {
    abstract:
      "This project explores the design of a local retrieval-augmented generation assistant for private and internal document collections. Built in the context of the final-year engineering thesis/PFE at Agence Maghreb Arabe Presse, the system focuses on making institutional knowledge easier to query without relying on generic model memory. The assistant combines PDF and document processing, chunking, embeddings, vector search, and local language model generation to answer user questions from retrieved source context. The core engineering objective is not only to produce natural responses, but to keep answers grounded in internal material while respecting confidentiality constraints.",
    problemContext:
      "Organizations often store useful knowledge across PDF reports, internal documents, notes, and operational files. When this information is distributed across many sources, employees must manually search, read, compare, and verify content before reaching an answer. A generic chatbot is not sufficient in this context because it may answer fluently without knowing the private document base. The project therefore addresses a document intelligence problem: how to give users a conversational interface while keeping the answer connected to the available internal knowledge. In a media and information environment, this is especially important because accuracy, traceability, and controlled access matter.",
    methodology:
      "The methodology follows the standard RAG pattern with an emphasis on local processing. Documents are first prepared for extraction, cleaned where necessary, and divided into smaller chunks that preserve semantic meaning. Each chunk is transformed into an embedding representation, allowing semantically similar passages to be retrieved when a user asks a question. At query time, the system embeds the user question, searches the vector database for relevant passages, and injects the retrieved context into the language model prompt. This approach separates knowledge retrieval from language generation, reducing dependence on the model's pretrained memory.",
    implementation:
      "The implementation is organized as a pipeline from document ingestion to answer generation. PDF and internal documents are parsed, transformed into text, segmented, and indexed into a vector store. The assistant interface receives a user question, performs semantic search, and builds a prompt that includes the most relevant retrieved material. A local LLM then generates the final response using that context. The architecture also supports a practical confidentiality goal: sensitive material can remain within a local or controlled environment instead of being sent to an external service. The project therefore combines NLP, embeddings, vector search, prompt construction, and system integration rather than treating the language model as a standalone component.",
    results:
      "The result is a working academic and engineering prototype that demonstrates how a private document collection can become searchable through conversation. Instead of manually navigating folders and long files, a user can ask a direct question and receive a response based on relevant retrieved passages. No unsupported numerical benchmark is claimed here; the outcome is evaluated qualitatively through system behavior, relevance of retrieved context, and the ability to answer from internal document material. The project shows how RAG can support knowledge access and operational efficiency when confidentiality is part of the design.",
    limitations:
      "The main limitations are linked to document quality, retrieval coverage, and evaluation depth. Poorly extracted PDFs, noisy text, scanned documents, or inconsistent document structure can reduce retrieval quality. The assistant also depends on chunking strategy, embedding quality, and prompt design. Without a formal labeled evaluation set, the project is better described as a functional prototype than a fully benchmarked production system. Future work could add source citations, access control rules, user feedback loops, and systematic answer evaluation.",
    takeaways:
      "The project demonstrates that useful language AI systems depend on the full information pipeline, not only the final model. Effective RAG requires careful document preparation, retrieval design, prompt grounding, and attention to deployment constraints. The strongest technical lesson is that confidentiality and usefulness can be designed together when retrieval, local inference, and document intelligence are treated as one system.",
  },
  "intelligent-parking-system": {
    abstract:
      "The Intelligent Parking System is an applied AI automation project that converts camera-based vehicle input into structured parking records. The system combines computer vision, plate detection, OCR, validation logic, backend services, and database storage to reduce manual entry in parking operations. The goal is to demonstrate how a visual input, such as a vehicle image or camera frame, can pass through a practical recognition pipeline and become usable operational data. The project sits between computer vision and software engineering because the AI component only becomes useful when connected to records, validation, and application workflows.",
    problemContext:
      "Parking environments often depend on manual vehicle registration, handwritten notes, or slow operator input. These workflows can introduce errors in plate numbers, inconsistent timestamps, and incomplete records. When the volume of vehicles increases, manual handling becomes harder to audit and less efficient. The project addresses this operational problem by treating each vehicle entry as a structured data event. A system that can detect a plate, extract its text, validate the result, and store it in a database can support faster parking workflows and more reliable tracking.",
    methodology:
      "The methodology follows a staged vision-to-record pipeline. A camera image is captured or supplied to the system, then passed through plate localization or detection logic. The detected region is prepared for OCR through image processing steps that may include cropping, contrast adjustment, thresholding, or cleanup. OCR is then used to extract text from the plate region. Because OCR output can be noisy, validation and formatting steps are included before the event is written to the parking record system. This makes the project an end-to-end applied AI workflow rather than an isolated recognition model.",
    implementation:
      "The implementation uses Python for the AI and processing logic, Flask for web/backend integration, OCR tooling for character extraction, and Azure SQL or Azure-related services for structured persistence. The system flow starts with camera input, moves through plate detection, OCR, validation, and finally database recording. The backend can expose routes for submitting images, reviewing extracted values, and managing parking records. This creates a clear separation between perception, business logic, and storage. The value of the project comes from linking these layers cleanly so that a visual event becomes a reliable database entry.",
    results:
      "The project demonstrates an applied automation system capable of reducing manual vehicle data entry. Its outcome is qualitative: the system shows how camera input can be transformed into plate text and stored as a structured parking event. No exact recognition rate or latency metric is claimed because those values are not part of the available project data. The important result is the integrated workflow, where computer vision and OCR are connected to operational record management rather than remaining as a standalone image-processing demo.",
    limitations:
      "Performance can be affected by image quality, plate visibility, lighting, camera angle, blur, plate format variation, and OCR noise. A production version would require broader testing across real parking conditions and stronger exception handling for uncertain OCR outputs. The system may also need operator review flows, duplicate detection, access control, and monitoring. Without a documented dataset and quantitative evaluation, the current project should be understood as an applied prototype.",
    takeaways:
      "This project shows that applied AI automation depends on system design as much as model accuracy. A useful parking workflow needs detection, OCR, validation, storage, and user-facing management. The key takeaway is that computer vision becomes operationally valuable when it is connected to backend logic and persistent data. It also reinforces the importance of treating uncertain AI outputs as part of an application workflow: the system should validate, store, and expose results in a way that operators can trust and review.",
  },
  "rti-ptm-coin-relighting": {
    abstract:
      "The RTI/PTM Coin Relighting project is a computer vision and computational imaging workflow for analyzing coin surfaces under different virtual lighting directions. Instead of relying on a single static photograph, the project uses concepts from Reflectance Transformation Imaging and Polynomial Texture Mapping to represent how surface appearance changes with illumination. This makes fine relief, wear, inscriptions, and material texture easier to inspect. The project is research-oriented because it focuses on visual analysis, calibration, reflectance behavior, and relightable surface representation rather than ordinary image classification.",
    problemContext:
      "Coins and similar textured objects contain surface details that can disappear under fixed lighting. A small change in light direction can reveal relief, scratches, engraving depth, or wear patterns that are not visible in a single image. For historical objects, material inspection, or visual research, static photography can therefore be limiting. The project addresses this limitation by building a workflow where multiple images captured under different light directions are combined into a representation that can be relit interactively. The technical challenge is to connect imaging conditions, light estimation, and surface response into a usable visualization.",
    methodology:
      "The methodology begins with a set of images of the same coin captured from a fixed viewpoint while illumination changes. Calibration or light direction estimation is used to associate each image with lighting information. Image processing techniques prepare the data by aligning, normalizing, and organizing the observations. A PTM-style representation is then fitted so each pixel or region can approximate how intensity changes under different directions of light. This enables virtual relighting, where the user can inspect the coin under simulated illumination without capturing a new image.",
    implementation:
      "The implementation uses Python, OpenCV, and image-processing logic to manage the computational imaging pipeline. The system organizes the image set, estimates or uses light positions, fits the reflectance model, and produces a relightable representation. The architecture can be understood as image set, light calibration, PTM fit, normal or reflectance cues, and relighting output. Unlike many computer vision projects that focus on recognizing an object class, this project focuses on extracting and rendering visual structure. The implementation therefore requires attention to image consistency, lighting geometry, numerical fitting, and visual output quality.",
    results:
      "The project outcome is a dynamic visualization workflow that makes coin surface details more inspectable under changing virtual light. It helps reveal texture, relief, and material cues that may be hidden in a single image. No quantitative measurement of reconstruction error is claimed because it is not available in the project data. The result is best described as a research-oriented prototype demonstrating how RTI and PTM concepts can support visual analysis of small textured objects.",
    limitations:
      "The quality of relighting depends on capture consistency, calibration accuracy, number and diversity of light positions, camera stability, and object reflectance. Highly reflective or noisy surfaces can complicate the model. A more advanced version could add a calibrated capture rig, more robust light estimation, better surface normal visualization, and formal comparison against known lighting conditions. The current system is strongest as an academic exploration of computational imaging principles. It would also benefit from a controlled evaluation protocol where relighted outputs are compared across several known light directions and different coin materials.",
    takeaways:
      "The project shows that computer vision is not limited to detection and classification. Imaging geometry, lighting, and reflectance can be used to build tools for inspection and research. The main takeaway is that visual information often depends on how an object is illuminated, and computational imaging can turn that dependency into an interactive analysis feature. It also highlights the value of experimental discipline: stable capture conditions, calibration, and consistent processing are just as important as the final relighting algorithm.",
  },
  "ros-robotics-project": {
    abstract:
      "The ROS Robotics Project explores robotics system integration through simulation, planning, motion, and visualization concepts. The goal is to understand how autonomous behavior emerges from multiple cooperating components rather than a single algorithm. Using ROS-style architecture, the project connects nodes, simulated sensors, path planning, control logic, and visualization workflows similar to RViz and Gazebo environments. It is an intelligent systems project because it links AI reasoning with robotic action and system-level coordination.",
    problemContext:
      "Robots operate through many subsystems that must exchange information continuously. A navigation task may require perception or simulated sensing, map interpretation, path generation, motion control, and feedback from the environment. If these pieces are not coordinated, the robot cannot behave reliably. The project addresses this challenge by using ROS concepts to structure communication between components. Simulation is important because it allows behavior to be tested and understood before any physical deployment.",
    methodology:
      "The methodology is based on modular robotics design. Individual components are represented as nodes or processes that publish and consume data. A simulated environment provides world state and sensor-like information. Planning logic determines a path or movement objective, while control components translate that objective into motion commands. Visualization is used to inspect robot state, planned paths, and system behavior. This approach makes the project useful for learning autonomy workflows because each subsystem can be reasoned about separately while still contributing to an integrated robot behavior.",
    implementation:
      "The implementation uses ROS concepts, Python, RViz or Gazebo-style simulation ideas, planning, motion control, and robotics visualization. The system flow can be summarized as ROS nodes, sensors, planning, control, and simulation. The project does not treat robotics as only movement; it treats movement as the result of information exchange between software components. Practical implementation work includes defining node responsibilities, managing topics or message-like communication, testing simulated navigation behavior, and observing how changes in state affect the planned response.",
    results:
      "The project demonstrates how a robotics workflow can be structured and tested in a simulated environment. The outcome is qualitative: the system connects planning and control concepts in a way that supports repeatable experimentation and visual debugging. No physical deployment or numerical navigation benchmark is claimed from the available data. Its value is in showing an understanding of how autonomous systems are decomposed, coordinated, and evaluated through simulation. The simulation-first approach also makes it possible to observe failures safely, adjust assumptions, and reason about the interaction between planner behavior and motion response.",
    limitations:
      "A simulated robotics project does not capture all physical-world constraints, such as sensor noise, wheel slip, mechanical tolerances, battery behavior, and unpredictable environments. The current scope is also limited by the level of planning and control sophistication implemented. A future version could introduce richer maps, obstacle avoidance, localization uncertainty, and stronger evaluation of path efficiency or control stability. Physical robot validation would be the next step for production realism. The project could also be extended with clearer logging, scenario-based tests, and comparison between planning strategies to better understand how design choices affect navigation behavior.",
    takeaways:
      "The main technical takeaway is that robotics is a systems problem. Planning, control, sensing, and visualization must work together through clear interfaces. ROS provides a useful mental model for building this coordination, and simulation helps turn abstract autonomy concepts into observable behavior. The project also builds practical intuition for debugging distributed robotic software: when behavior fails, the cause may come from planning assumptions, control parameters, message timing, or visualization mismatch rather than a single isolated bug. This makes the project a useful foundation for more advanced autonomous systems work where software architecture and control logic must be designed together.",
  },
  "english-darija-translator": {
    abstract:
      "The English-to-Darija Translator is an NLP and language AI project focused on neural machine translation for a low-resource regional language use case. The system translates English text into Moroccan Darija using preprocessing, tokenization, and sequence modeling concepts such as Seq2Seq and LSTM architectures. The project is academic in scope, but it addresses a meaningful language technology gap: Darija is widely used in Morocco, yet it has fewer standardized datasets and tools than high-resource languages. The work demonstrates how neural sequence models can be applied to a regional translation task.",
    problemContext:
      "Most modern translation systems perform best for languages with large parallel corpora, standardized spelling, and extensive tooling. Moroccan Darija presents a different challenge because it is often informal, variable in writing style, and underrepresented in NLP datasets. This makes direct translation from English to Darija harder than translation between high-resource languages. The project therefore explores the problem as a low-resource NLP task where preprocessing choices, tokenization, and sequence modeling have a strong effect on system behavior.",
    methodology:
      "The methodology follows a neural machine translation pipeline. English input is cleaned and prepared, then tokenized into a representation that can be consumed by a sequence model. The model learns to encode the source sentence and generate a target sequence in Darija. Seq2Seq and LSTM-style architectures are appropriate for demonstrating the core idea because they explicitly model ordered language sequences. The system flow is English input, preprocessing and tokenization, sequence encoding, model inference, and Darija output.",
    implementation:
      "The implementation uses Python, TensorFlow/Keras, NLP preprocessing, tokenization, Seq2Seq modeling, and LSTM-based sequence learning. The pipeline prepares source and target text, builds vocabularies or token indices, trains a model to map source sequences to target sequences, and performs inference for new English inputs. Important engineering details include handling sentence length, padding, unknown words, and consistent preprocessing between training and inference. The project is positioned as a translation demo rather than a production translation service. The implementation also emphasizes reproducibility: the same preprocessing logic must be applied before training and during inference so the model receives inputs in the format it learned.",
    results:
      "The outcome is an academic demo showing how sequence models can be used for English-to-Darija translation. It demonstrates the end-to-end flow from input text to generated Darija output and highlights the practical challenges of low-resource translation. No benchmark score such as BLEU is claimed because no reliable metric is included in the available project data. The result is therefore best described qualitatively: a functional exploration of neural translation for a regional language context.",
    limitations:
      "The main limitations are dataset size, language variation, spelling inconsistency, and the simplicity of a Seq2Seq/LSTM approach compared with newer transformer-based models. Darija can be written in Arabic script, Latin script, or mixed forms, which complicates normalization. A future version could use larger curated parallel data, subword tokenization, transformer architectures, and human evaluation by native speakers. More robust preprocessing would also improve consistency. Another limitation is that translation quality can be difficult to judge automatically when several valid Darija expressions may exist for the same English sentence.",
    takeaways:
      "The project shows that language AI must be adapted to linguistic context. Low-resource languages require careful data preparation and realistic evaluation. The key takeaway is that even a compact neural translation prototype can expose important NLP challenges around representation, sequence modeling, and regional language technology. It also shows why regional NLP is valuable: building for local language use cases can make AI systems more accessible to the communities that actually use those languages every day. From an engineering perspective, the project also clarifies how data representation choices can shape model behavior as strongly as the architecture itself.",
  },
  "butterfly-image-classification": {
    abstract:
      "The Butterfly Image Classification project is a computer vision classification workflow for recognizing butterfly species from images. It uses CNN-based learning and transfer learning concepts to extract visual features and assign images to species classes. The project demonstrates the typical structure of an academic image classification system: dataset preparation, preprocessing, model training, prediction, and evaluation. It also highlights why transfer learning is useful when working with visual tasks where labeled data may be limited or where pretrained features can accelerate learning.",
    problemContext:
      "Butterfly species can share similar colors, wing shapes, and visual patterns, making classification a fine-grained image recognition problem. A human observer may rely on subtle differences in markings or structure. For a computer vision model, the challenge is to learn visual features that are discriminative enough to separate species while remaining robust to image variation. Differences in background, lighting, pose, scale, and image quality can all affect performance. The project addresses this challenge as an applied deep learning classification task.",
    methodology:
      "The methodology follows a supervised computer vision pipeline. Image data is collected or organized by class, then preprocessed through resizing, normalization, and dataset splitting. A CNN or transfer-learning model is trained to map images to butterfly species labels. Transfer learning with a model such as VGG16 can provide a strong feature extraction base, while task-specific layers adapt the model to the butterfly dataset. Evaluation is based on comparing predictions with known labels, using qualitative and standard classification reasoning rather than unsupported numerical claims.",
    implementation:
      "The implementation uses Python, TensorFlow/Keras, CNN workflows, VGG16 or similar transfer learning, image preprocessing, and computer vision evaluation. The system flow is image dataset, preprocessing, CNN or transfer learning, prediction, and evaluation. Practical implementation work includes organizing class folders or labels, preparing images consistently, configuring model architecture, training the classifier, and reviewing predictions. The project is useful because it connects deep learning theory with the practical steps needed to make an image classifier run on real image data.",
    results:
      "The project outcome is an academic computer vision system demonstrating butterfly species classification through CNN-based learning and transfer learning. It shows how visual features can be learned and used to assign species categories from images. No exact accuracy, F1 score, or confusion matrix value is claimed because those metrics are not present in the available data. The result is therefore described qualitatively as a working classification workflow and learning exercise in transfer learning. The project also provides a foundation for future model comparison, because the same preprocessing and evaluation structure can be reused with different CNN backbones.",
    limitations:
      "The system depends strongly on dataset quality, class balance, image diversity, and preprocessing consistency. Fine-grained species classification can be difficult if classes are visually similar or if training examples are limited. A future version could include stronger data augmentation, clearer evaluation reports, confusion matrix analysis, model comparison, and deployment testing. More diverse images would help improve robustness across lighting, background, and camera conditions. The project would also benefit from error analysis that identifies which species pairs are most often confused and why.",
    takeaways:
      "The project reinforces the full structure of applied computer vision: data preparation, model choice, training, validation, and interpretation of predictions. The main takeaway is that transfer learning can make image classification more accessible while still requiring careful attention to dataset quality and evaluation. It also demonstrates that a polished classifier is not only a trained model; it is the result of disciplined dataset handling, evaluation habits, and clear communication of model limits. This is directly relevant to practical AI work, where model usefulness depends on both prediction quality and the reliability of the surrounding workflow.",
  },
} satisfies Record<string, ProjectPaper>;

type ProjectPaperSlug = keyof typeof projectPapers;

export const projectPaperTranslations = {
  fr: {
    "rag-conversational-assistant": {
      abstract:
        "Ce projet présente la conception d'un assistant conversationnel local basé sur le retrieval-augmented generation pour des collections de documents privés et internes. Réalisé dans le cadre de mon projet de fin d'études d'ingénieur/PFE à l'Agence Maghreb Arabe Presse, il vise à rendre la connaissance institutionnelle interrogeable sans dépendre de la mémoire générique d'un modèle. Le système combine traitement de PDF, segmentation documentaire, embeddings, recherche vectorielle et génération par modèle de langage local afin de répondre à partir d'un contexte réellement retrouvé.",
      problemContext:
        "Dans une organisation, l'information utile est souvent dispersée entre rapports PDF, documents internes et fichiers opérationnels. La recherche manuelle ralentit l'accès à la connaissance et rend la vérification difficile. Un chatbot générique ne suffit pas, car il peut produire une réponse fluide sans connaître le corpus privé. Le problème est donc celui de l'intelligence documentaire: fournir une interface conversationnelle tout en gardant chaque réponse liée aux sources internes disponibles, avec une attention particulière à la confidentialité.",
      methodology:
        "La méthodologie suit un pipeline RAG classique adapté à un contexte local. Les documents sont extraits, nettoyés si nécessaire, puis divisés en segments qui conservent le sens du contenu. Chaque segment est transformé en embedding afin de permettre une recherche sémantique. Lorsqu'un utilisateur pose une question, celle-ci est également vectorisée, comparée au corpus indexé, puis les passages les plus pertinents sont injectés dans le prompt du modèle. La génération est ainsi guidée par les documents plutôt que par la seule mémoire du LLM.",
      implementation:
        "L'implémentation est organisée de l'ingestion documentaire jusqu'à la génération de réponse. Les PDF et documents internes sont convertis en texte, découpés, indexés dans une base vectorielle, puis consultés au moment de la requête. L'interface reçoit la question, déclenche la recherche sémantique et construit un prompt enrichi avec le contexte retrouvé. Un modèle local génère ensuite la réponse. Cette organisation soutient l'objectif de confidentialité, car les données sensibles peuvent rester dans un environnement contrôlé.",
      results:
        "Le résultat est un prototype académique et ingénierie fonctionnel montrant comment un corpus documentaire privé peut devenir accessible par conversation. L'utilisateur peut poser une question directe et obtenir une réponse appuyée par des passages pertinents au lieu de parcourir manuellement plusieurs fichiers. Aucune métrique numérique non disponible n'est revendiquée; l'évaluation reste qualitative, basée sur la pertinence du contexte retrouvé, la cohérence des réponses et la capacité du système à travailler sur des documents internes.",
      limitations:
        "Les limites principales concernent la qualité des documents, l'extraction de texte, la stratégie de segmentation et la couverture de la recherche vectorielle. Des PDF scannés, du texte bruité ou une structure documentaire irrégulière peuvent réduire la qualité de récupération. Sans jeu d'évaluation annoté, le système doit être compris comme un prototype solide plutôt qu'une solution de production pleinement mesurée. Des améliorations possibles incluent citations de sources, contrôle d'accès, feedback utilisateur et évaluation systématique.",
      takeaways:
        "Ce projet montre qu'un système de langage utile ne se résume pas au modèle final. La qualité dépend aussi de la préparation documentaire, de la recherche, de la construction du prompt et des contraintes de déploiement. L'enseignement principal est que confidentialité et utilité peuvent être pensées ensemble lorsque retrieval, inférence locale et intelligence documentaire sont conçus comme un seul système.",
    },
    "intelligent-parking-system": {
      abstract:
        "L'Intelligent Parking System est un projet d'IA appliquée qui transforme une entrée caméra en enregistrements structurés pour les opérations de parking. Le système associe vision par ordinateur, détection de plaque, OCR, validation, backend Flask et stockage en base de données. L'objectif est de montrer comment une image de véhicule peut traverser un pipeline de reconnaissance et devenir une donnée opérationnelle exploitable.",
      problemContext:
        "Les parkings reposent souvent sur une saisie manuelle des véhicules, ce qui peut créer des erreurs de plaque, des horaires incomplets et des données difficiles à auditer. Lorsque le nombre de véhicules augmente, cette méthode devient moins fiable. Le projet répond à ce problème en considérant chaque entrée comme un événement structuré: image, plaque détectée, texte extrait, validation et enregistrement.",
      methodology:
        "La méthodologie suit un pipeline vision-vers-donnée. Une image ou un flux caméra est fourni au système, puis la zone de plaque est localisée. Cette région peut être recadrée, améliorée et préparée pour l'OCR. Le texte extrait est ensuite validé et normalisé avant d'être enregistré. Cette chaîne rend le projet plus complet qu'une simple démonstration OCR, car elle relie perception, logique métier et persistance.",
      implementation:
        "L'implémentation utilise Python pour le traitement, Flask pour l'intégration applicative, des outils OCR pour l'extraction de caractères et Azure SQL ou des outils Azure pour le stockage. Le flux suit les étapes caméra, détection de plaque, OCR, validation et enregistrement parking. Le backend peut gérer l'envoi d'images, la consultation des résultats et la gestion des records. La valeur du projet vient de l'intégration claire entre IA, application et base de données.",
      results:
        "Le projet démontre un système d'automatisation capable de réduire la saisie manuelle des informations véhicule. Le résultat est qualitatif: l'image est transformée en texte de plaque puis en événement structuré. Aucune précision OCR ou latence exacte n'est revendiquée, car ces métriques ne font pas partie des données disponibles. Le résultat important est l'intégration de bout en bout entre computer vision et gestion opérationnelle.",
      limitations:
        "La performance dépend fortement de la qualité d'image, de l'éclairage, de l'angle caméra, du flou, de la visibilité de la plaque et du bruit OCR. Une version de production demanderait des tests plus larges, une gestion des cas incertains, une revue opérateur, une détection de doublons et un contrôle d'accès. Sans dataset documenté et métriques formelles, le système reste un prototype appliqué.",
      takeaways:
        "Ce projet montre que l'IA appliquée dépend autant de l'architecture système que de la reconnaissance elle-même. Une solution utile doit détecter, extraire, valider, stocker et présenter les résultats. L'enseignement principal est que la computer vision devient réellement opérationnelle lorsqu'elle est reliée à une logique backend fiable et à des données persistantes.",
    },
    "rti-ptm-coin-relighting": {
      abstract:
        "Le projet RTI/PTM Coin Relighting explore l'imagerie computationnelle pour analyser la surface de monnaies sous différents éclairages virtuels. Au lieu de se limiter à une photographie statique, il s'appuie sur les principes de Reflectance Transformation Imaging et de Polynomial Texture Mapping afin de représenter la manière dont l'apparence de la surface varie selon la direction de lumière.",
      problemContext:
        "Les détails fins d'une monnaie, comme le relief, l'usure, les inscriptions et les micro-textures, peuvent disparaître sous un éclairage fixe. Une légère variation de lumière peut révéler des informations invisibles sur une image unique. Pour l'analyse visuelle ou patrimoniale, la photographie statique est donc limitée. Le projet répond à ce problème en construisant une représentation relightable à partir de plusieurs images.",
      methodology:
        "La méthodologie commence par une série d'images du même objet prises depuis un point de vue fixe avec des directions d'éclairage différentes. La calibration ou l'estimation de la lumière associe chaque image à une condition d'illumination. Les images sont ensuite préparées, alignées et normalisées. Une représentation PTM est ajustée pour approximer la variation d'intensité de chaque zone selon la lumière, ce qui permet un relighting virtuel.",
      implementation:
        "L'implémentation utilise Python, OpenCV et des techniques de traitement d'image. Le système organise les images, exploite les informations de lumière, ajuste le modèle de reflectance et produit une visualisation relightable. Le flux peut être résumé par jeu d'images, calibration lumière, ajustement PTM, indices de surface et relighting. Contrairement à un projet de classification, celui-ci se concentre sur la structure visuelle et la géométrie d'éclairage.",
      results:
        "Le résultat est un workflow de visualisation dynamique permettant d'inspecter une monnaie sous des directions de lumière variables. Il rend plus visibles la texture, le relief et certains détails matériels. Aucune erreur de reconstruction chiffrée n'est revendiquée, car elle n'est pas disponible dans les données du projet. Le résultat est donc un prototype de recherche montrant l'intérêt de RTI/PTM pour l'analyse de petits objets texturés.",
      limitations:
        "La qualité dépend de la stabilité de capture, de la précision de calibration, du nombre de positions lumineuses, de la stabilité caméra et des propriétés réfléchissantes du matériau. Les surfaces brillantes ou bruitées peuvent compliquer l'ajustement. Une version avancée pourrait utiliser un dispositif calibré, une meilleure estimation de lumière, une visualisation des normales et une comparaison contrôlée entre éclairages connus.",
      takeaways:
        "Ce projet montre que la vision par ordinateur ne se limite pas à détecter ou classifier. La lumière, la géométrie et la reflectance peuvent devenir des outils d'analyse. L'enseignement principal est que l'information visuelle dépend souvent de l'éclairage, et que l'imagerie computationnelle peut transformer cette dépendance en fonctionnalité interactive.",
    },
    "ros-robotics-project": {
      abstract:
        "Le projet ROS Robotics explore l'intégration de systèmes robotiques à travers la simulation, la planification, le mouvement et la visualisation. L'objectif est de comprendre comment un comportement autonome émerge de plusieurs composants coordonnés plutôt que d'un seul algorithme. L'architecture s'appuie sur des concepts ROS reliant noeuds, capteurs simulés, planification de trajectoire, contrôle et visualisation.",
      problemContext:
        "Un robot autonome dépend de plusieurs sous-systèmes qui doivent échanger des informations en continu. Une tâche de navigation implique perception, interprétation de l'environnement, génération de trajectoire, commande de mouvement et retour d'état. Si ces éléments ne sont pas coordonnés, le comportement devient instable. Le projet aborde donc la robotique comme un problème de communication et d'architecture système.",
      methodology:
        "La méthodologie repose sur une conception modulaire. Des noeuds publient et consomment des données, un environnement simulé fournit l'état du monde et les composants de planification déterminent un objectif de mouvement. Les modules de contrôle traduisent ensuite cet objectif en commandes, tandis que la visualisation permet d'observer l'état du robot, les trajectoires et les réactions du système.",
      implementation:
        "L'implémentation utilise des concepts ROS, Python, RViz/Gazebo-style simulation, planification, contrôle de mouvement et visualisation. Le flux est composé de noeuds ROS, capteurs, planification, contrôle et simulation. Le projet ne traite pas le mouvement comme un élément isolé, mais comme le résultat d'un échange d'informations entre composants logiciels. Les tests en simulation permettent d'ajuster les hypothèses et d'observer le comportement.",
      results:
        "Le projet démontre comment un workflow robotique peut être structuré et testé en environnement simulé. Le résultat est qualitatif: les concepts de planification et de contrôle sont reliés dans un cadre reproductible et observable. Aucun benchmark de navigation physique ou métrique chiffrée n'est revendiqué. La valeur du projet réside dans la compréhension de la décomposition et de la coordination d'un système autonome.",
      limitations:
        "La simulation ne capture pas toutes les contraintes physiques: bruit capteur, glissement, tolérances mécaniques, batterie ou imprévus environnementaux. Le niveau de sophistication de la planification et du contrôle reste limité. Une suite naturelle serait d'ajouter cartes plus riches, évitement d'obstacles, incertitude de localisation, logs plus détaillés et tests comparatifs entre stratégies de planification.",
      takeaways:
        "L'enseignement principal est que la robotique est un problème de systèmes. Planification, contrôle, perception et visualisation doivent fonctionner à travers des interfaces claires. ROS fournit un modèle utile pour cette coordination, et la simulation aide à transformer des notions abstraites d'autonomie en comportements observables et testables.",
    },
    "english-darija-translator": {
      abstract:
        "Le traducteur English-to-Darija est un projet NLP orienté vers la traduction automatique neuronale pour une langue régionale à faibles ressources. Le système traduit l'anglais vers la darija marocaine à l'aide de prétraitement, tokenisation et modélisation séquentielle de type Seq2Seq/LSTM. Le projet est académique, mais il répond à un enjeu réel: la darija est largement utilisée au Maroc tout en disposant de moins d'outils NLP standardisés.",
      problemContext:
        "Les systèmes de traduction modernes fonctionnent mieux avec des langues disposant de grands corpus parallèles, d'une orthographe standardisée et d'outils matures. La darija présente des variations d'écriture, un usage informel et une faible représentation dans les datasets. La traduction anglais-darija est donc plus difficile qu'entre langues très dotées. Le projet explore ce contexte comme une tâche NLP à faibles ressources.",
      methodology:
        "La méthodologie suit un pipeline de traduction neuronale. L'entrée anglaise est nettoyée, préparée et tokenisée pour être fournie au modèle. Le modèle apprend à encoder la phrase source puis à générer une séquence cible en darija. Une architecture Seq2Seq/LSTM convient pour démontrer le principe, car elle modélise explicitement l'ordre des mots. Le flux suit entrée anglaise, prétraitement, encodage, inférence et sortie darija.",
      implementation:
        "L'implémentation utilise Python, TensorFlow/Keras, NLP preprocessing, tokenisation, Seq2Seq et LSTM. Le pipeline prépare les textes source et cible, construit les vocabulaires, entraîne le modèle et réalise l'inférence sur de nouvelles entrées anglaises. Des points importants concernent la longueur des phrases, le padding, les mots inconnus et la cohérence entre prétraitement d'entraînement et prétraitement d'inférence.",
      results:
        "Le résultat est une démonstration académique montrant comment des modèles séquentiels peuvent être utilisés pour la traduction anglais-darija. Le système illustre le passage de l'entrée texte à une sortie en darija et met en évidence les défis pratiques d'une langue à faibles ressources. Aucun score BLEU ou métrique comparable n'est revendiqué; le résultat est décrit qualitativement comme une exploration fonctionnelle.",
      limitations:
        "Les limites principales sont la taille du dataset, la variation linguistique, l'orthographe non standardisée et la simplicité d'une approche Seq2Seq/LSTM par rapport aux architectures transformer modernes. La darija peut être écrite en alphabet arabe, latin ou hybride, ce qui complique la normalisation. Une version future pourrait utiliser plus de données parallèles, subword tokenization, transformers et évaluation humaine native.",
      takeaways:
        "Le projet montre que l'IA linguistique doit être adaptée au contexte culturel et linguistique. Les langues à faibles ressources demandent une préparation de données rigoureuse et une évaluation réaliste. L'enseignement principal est qu'un prototype compact peut déjà révéler des défis importants autour de la représentation, de la modélisation séquentielle et de la technologie NLP régionale.",
    },
    "butterfly-image-classification": {
      abstract:
        "Butterfly Image Classification est un projet de vision par ordinateur consacré à la reconnaissance d'espèces de papillons à partir d'images. Il utilise des concepts de CNN et de transfer learning pour extraire des caractéristiques visuelles et associer chaque image à une classe. Le projet illustre la structure classique d'un système de classification: préparation des données, prétraitement, entraînement, prédiction et évaluation.",
      problemContext:
        "Les espèces de papillons peuvent partager des couleurs, formes d'ailes et motifs visuels proches, ce qui rend la classification fine-grained. Un modèle doit apprendre des caractéristiques discriminantes tout en restant robuste aux variations de fond, lumière, pose, échelle et qualité d'image. Le projet traite donc la reconnaissance d'espèces comme une tâche de deep learning appliqué.",
      methodology:
        "La méthodologie suit un pipeline supervisé. Les images sont organisées par classe, puis prétraitées par redimensionnement, normalisation et séparation entraînement/validation. Un CNN ou un modèle de transfer learning apprend à associer les images aux labels d'espèces. L'utilisation d'un modèle comme VGG16 peut fournir une base d'extraction de caractéristiques, tandis que des couches spécifiques adaptent le modèle au dataset.",
      implementation:
        "L'implémentation utilise Python, TensorFlow/Keras, CNN, VGG16 ou une logique de transfer learning, prétraitement image et évaluation de classification. Le flux est dataset d'images, prétraitement, CNN/transfer learning, prédiction et évaluation. Le travail pratique comprend l'organisation des classes, la préparation cohérente des images, la configuration du modèle, l'entraînement et l'analyse des prédictions.",
      results:
        "Le résultat est un système académique de classification montrant comment des caractéristiques visuelles peuvent être apprises pour reconnaître des espèces de papillons. Aucune accuracy, F1 score ou matrice de confusion précise n'est revendiquée, car ces valeurs ne sont pas disponibles. Le résultat est donc présenté qualitativement comme un workflow fonctionnel de classification et un exercice de transfer learning.",
      limitations:
        "Le système dépend fortement de la qualité du dataset, de l'équilibre des classes, de la diversité des images et de la cohérence du prétraitement. La classification fine peut être difficile lorsque les classes se ressemblent ou que les exemples sont peu nombreux. Une version future pourrait ajouter data augmentation, rapports d'évaluation, analyse de confusion, comparaison de modèles et tests de déploiement.",
      takeaways:
        "Le projet renforce la structure complète d'une démarche computer vision appliquée: données, modèle, entraînement, validation et interprétation. Le transfer learning rend la classification plus accessible, mais il ne remplace pas l'attention portée à la qualité des données et à l'évaluation. L'utilité réelle dépend autant du workflow que du modèle entraîné.",
    },
  },
  ar: {
    "rag-conversational-assistant": {
      abstract:
        "يعرض هذا المشروع تصميم مساعد محادثة محلي يعتمد على retrieval-augmented generation للتعامل مع مجموعات وثائق خاصة وداخلية. تم إنجازه ضمن مشروع نهاية الدراسة الهندسية/PFE في وكالة المغرب العربي للأنباء، ويركز على جعل المعرفة المؤسسية قابلة للسؤال دون الاعتماد على ذاكرة عامة للنموذج. يجمع النظام بين معالجة PDF والوثائق، وتقسيم النصوص، وembeddings، والبحث المتجهي، ونموذج لغة محلي لتوليد إجابات مبنية على سياق مسترجع.",
      problemContext:
        "في المؤسسات، تكون المعرفة المهمة موزعة بين تقارير PDF ووثائق داخلية وملفات تشغيلية. البحث اليدوي يبطئ الوصول إلى المعلومة ويجعل التحقق منها صعبا. لا يكفي chatbot عام في هذا السياق، لأنه قد يقدم جوابا سليما لغويا لكنه غير مرتبط بالوثائق الخاصة. لذلك يعالج المشروع مشكلة الذكاء الوثائقي: كيف نوفر واجهة محادثة مع إبقاء الإجابات مرتبطة بالمصادر الداخلية ومع احترام السرية.",
      methodology:
        "تعتمد المنهجية على pipeline من نوع RAG مع تركيز على المعالجة المحلية. يتم استخراج الوثائق وتنظيفها عند الحاجة ثم تقسيمها إلى مقاطع تحافظ على المعنى. كل مقطع يتحول إلى embedding يسمح بالبحث الدلالي. عند طرح سؤال، يتم تحويله هو أيضا إلى تمثيل متجهي، ثم يتم البحث عن المقاطع الأكثر صلة وإدخالها في prompt النموذج. بهذه الطريقة تصبح الإجابة مبنية على الوثائق لا على ذاكرة النموذج فقط.",
      implementation:
        "ينظم التنفيذ المراحل من إدخال الوثائق إلى توليد الإجابة. يتم تحويل PDF والوثائق الداخلية إلى نص، ثم تقسيمها وفهرستها داخل قاعدة متجهية. تستقبل الواجهة سؤال المستخدم، تنفذ البحث الدلالي، وتبني prompt يحتوي على السياق المسترجع. بعد ذلك يولد نموذج لغة محلي الجواب. هذا التصميم يدعم هدف السرية لأن الوثائق الحساسة يمكن أن تبقى داخل بيئة محلية أو مضبوطة.",
      results:
        "النتيجة هي prototype أكاديمي وهندسي يوضح كيف يمكن تحويل مجموعة وثائق خاصة إلى معرفة قابلة للسؤال عبر المحادثة. يستطيع المستخدم طرح سؤال مباشر والحصول على جواب يعتمد على مقاطع وثائقية ذات صلة بدل تصفح ملفات كثيرة يدويا. لا يتم ادعاء أرقام قياس غير متوفرة؛ التقييم نوعي ويركز على صلة السياق المسترجع، واتساق الإجابة، وقدرة النظام على العمل فوق وثائق داخلية.",
      limitations:
        "ترتبط أهم القيود بجودة الوثائق، واستخراج النص، واستراتيجية التقسيم، وجودة embeddings والبحث المتجهي. PDF الممسوحة ضوئيا أو النصوص المشوشة أو البنية غير المنتظمة قد تقلل جودة الاسترجاع. بدون مجموعة تقييم موسومة، يبقى المشروع prototype وظيفيا أكثر من نظام إنتاج مقاس بالكامل. يمكن تطويره بإضافة citations للمصادر، صلاحيات وصول، feedback من المستخدمين، وتقييم منهجي للإجابات.",
      takeaways:
        "يبين المشروع أن أنظمة اللغة المفيدة لا تعتمد على النموذج النهائي فقط. الجودة تأتي من تحضير الوثائق، والتصميم الجيد للبحث، وبناء prompt مناسب، واحترام قيود النشر. الدرس التقني الأهم هو أن السرية والفائدة يمكن تصميمهما معا عندما يتم التعامل مع retrieval والنموذج المحلي والذكاء الوثائقي كنظام واحد.",
    },
    "intelligent-parking-system": {
      abstract:
        "مشروع Intelligent Parking System هو نظام IA تطبيقي يحول مدخلات الكاميرا الخاصة بالمركبات إلى سجلات Parking منظمة. يجمع بين الرؤية الحاسوبية، كشف لوحة السيارة، OCR، التحقق، backend باستعمال Flask، وقاعدة بيانات مثل Azure SQL. الهدف هو إظهار كيف يمكن لصورة مركبة أن تمر عبر pipeline تعرف ثم تتحول إلى معلومة تشغيلية قابلة للاستعمال.",
      problemContext:
        "تعتمد بعض مواقف السيارات على إدخال يدوي للمركبات، مما قد يؤدي إلى أخطاء في أرقام اللوحات، وتوقيت غير دقيق، وسجلات يصعب تتبعها. كلما زاد عدد المركبات أصبح العمل اليدوي أقل كفاءة. يعالج المشروع هذا المشكل باعتبار كل دخول مركبة حدثا منظما: صورة، لوحة مكتشفة، نص مستخرج، تحقق، ثم تخزين في قاعدة بيانات.",
      methodology:
        "تتبع المنهجية pipeline من الرؤية إلى السجل. يتم إدخال صورة أو إطار كاميرا، ثم تحديد منطقة اللوحة. بعد ذلك يتم تجهيز المنطقة للـ OCR من خلال القص وتحسين التباين أو التنظيف عند الحاجة. النص المستخرج يخضع للتحقق والتنسيق قبل الحفظ. بهذه الطريقة لا يبقى المشروع مجرد OCR، بل يصبح نظاما يربط الإدراك البصري بسير عمل تشغيلي.",
      implementation:
        "يستخدم التنفيذ Python للمعالجة، وFlask للتكامل مع التطبيق، وأدوات OCR لاستخراج النص، وAzure SQL أو أدوات Azure لتخزين السجلات. يتبع النظام مسارا واضحا: camera input، plate detection، OCR، validation، parking record. يمكن للbackend استقبال الصور، عرض النتائج، وإدارة سجلات المركبات. القيمة هنا في ربط طبقة الذكاء الاصطناعي بمنطق التطبيق وقاعدة البيانات.",
      results:
        "يوضح المشروع نظام أتمتة قادر على تقليل الإدخال اليدوي لبيانات المركبات. النتيجة نوعية: صورة المركبة تتحول إلى نص لوحة ثم إلى سجل منظم. لا يتم ادعاء دقة OCR أو زمن استجابة محدد لأن هذه القياسات غير متوفرة في البيانات الحالية. الأهم هو workflow المتكامل بين computer vision وOCR وإدارة السجلات.",
      limitations:
        "تعتمد جودة النظام على وضوح الصورة، الإضاءة، زاوية الكاميرا، الضبابية، ظهور اللوحة، وتنوع صيغ اللوحات. نسخة إنتاجية تحتاج إلى اختبارات أوسع، معالجة حالات عدم اليقين، مراجعة بشرية عند الحاجة، كشف التكرار، وصلاحيات الوصول. بدون dataset موثق ومقاييس رسمية، يجب فهم النظام كprototype تطبيقي.",
      takeaways:
        "يبين المشروع أن أتمتة الذكاء الاصطناعي التطبيقية تعتمد على تصميم النظام مثلما تعتمد على دقة التعرف. الحل المفيد يحتاج إلى كشف، OCR، تحقق، تخزين، وواجهة استعمال. الدرس الأساسي هو أن computer vision تصبح ذات قيمة تشغيلية عندما ترتبط بمنطق backend وبيانات دائمة.",
    },
    "rti-ptm-coin-relighting": {
      abstract:
        "مشروع RTI/PTM Coin Relighting يستكشف التصوير الحاسوبي لتحليل سطح العملات تحت اتجاهات إضاءة افتراضية مختلفة. بدل الاعتماد على صورة ثابتة واحدة، يستخدم مبادئ Reflectance Transformation Imaging وPolynomial Texture Mapping لتمثيل تغير مظهر السطح حسب اتجاه الضوء. هذا يسمح بإظهار تفاصيل دقيقة مثل النقوش، التآكل، والملمس.",
      problemContext:
        "قد تخفي الصورة الثابتة تفاصيل مهمة في العملات، لأن بعض النقوش أو الخدوش أو البروزات لا تظهر إلا تحت إضاءة معينة. تغيير بسيط في اتجاه الضوء قد يكشف معلومات لا تظهر في صورة واحدة. لذلك يعالج المشروع مشكلة محدودية التصوير الثابت من خلال بناء تمثيل يمكن إعادة إضاءته تفاعليا.",
      methodology:
        "تبدأ المنهجية بمجموعة صور لنفس العملة من نفس زاوية الكاميرا مع تغيير اتجاه الإضاءة. يتم ربط كل صورة بمعلومة عن اتجاه الضوء عبر المعايرة أو التقدير. بعد ذلك يتم تنظيم الصور وتحضيرها، ثم ملاءمة نموذج PTM لتمثيل تغير شدة كل منطقة حسب الضوء. النتيجة هي إمكانية relighting افتراضي دون إعادة التصوير.",
      implementation:
        "يعتمد التنفيذ على Python وOpenCV وتقنيات image processing. ينظم النظام مجموعة الصور، يستعمل معلومات الضوء، يلائم نموذج reflectance، ثم ينتج تمثيلا relightable. يمكن تلخيص المسار في image set، light calibration، PTM fit، surface cues، relighting. يختلف هذا المشروع عن التصنيف لأنه يركز على البنية البصرية والهندسة الضوئية.",
      results:
        "النتيجة هي workflow بصري ديناميكي يجعل تفاصيل سطح العملة أسهل للفحص تحت إضاءات افتراضية مختلفة. يساعد ذلك على رؤية الملمس والبروز وبعض خصائص المادة. لا يتم ادعاء قياس عددي لخطأ reconstruction لأنه غير متوفر. لذلك يقدم المشروع كprototype بحثي يوضح فائدة RTI/PTM في تحليل الأجسام الصغيرة ذات الملمس.",
      limitations:
        "تعتمد الجودة على ثبات الالتقاط، دقة المعايرة، عدد اتجاهات الضوء، ثبات الكاميرا، وخصائص انعكاس السطح. الأسطح اللامعة أو المليئة بالضجيج قد تصعب الملاءمة. نسخة متقدمة يمكن أن تضيف rig معايرة، تقدير أقوى للضوء، عرض normals، ومقارنة منظمة بين إضاءات معروفة.",
      takeaways:
        "يوضح المشروع أن الرؤية الحاسوبية لا تقتصر على الكشف أو التصنيف. الضوء والهندسة والreflectance يمكن أن تصبح أدوات تحليل. الدرس الرئيسي هو أن المعلومة البصرية تعتمد كثيرا على الإضاءة، وأن التصوير الحاسوبي يمكن أن يحول هذا الاعتماد إلى ميزة تفاعلية مفيدة.",
    },
    "ros-robotics-project": {
      abstract:
        "يستكشف مشروع ROS Robotics تكامل الأنظمة الروبوتية عبر المحاكاة، التخطيط، الحركة، والتصور. الهدف هو فهم كيف يظهر السلوك الذاتي من تعاون عدة مكونات وليس من خوارزمية واحدة فقط. يعتمد المشروع على مفاهيم ROS التي تربط nodes، مستشعرات محاكاة، path planning، control، وvisualization ضمن workflow واحد.",
      problemContext:
        "الروبوت المستقل يحتاج إلى عدة أنظمة فرعية تتبادل المعلومات باستمرار. مهمة navigation قد تحتاج إلى perception، فهم للخريطة، تخطيط مسار، أوامر حركة، وردود فعل من البيئة. إذا لم تكن هذه الأجزاء منسقة، يصبح السلوك غير موثوق. لذلك يعالج المشروع الروبوتيك كمشكلة هندسة أنظمة وتواصل بين مكونات.",
      methodology:
        "تعتمد المنهجية على تصميم modular. تمثل nodes المكونات المختلفة التي تنشر وتستهلك البيانات. توفر المحاكاة حالة العالم ومعلومات شبيهة بالمستشعرات. تحدد طبقة التخطيط الهدف أو المسار، بينما تحول طبقة التحكم ذلك إلى أوامر حركة. تساعد visualization على مراقبة حالة الروبوت والمسار والسلوك.",
      implementation:
        "يستخدم التنفيذ مفاهيم ROS وPython وRViz/Gazebo-style simulation والتخطيط والتحكم. يمكن تلخيص المسار في ROS nodes، sensors، planning، control، simulation. لا يتعامل المشروع مع الحركة كعنصر منفصل، بل كنتيجة لتبادل معلومات بين مكونات برمجية. تسمح المحاكاة باختبار السلوك وتعديل الافتراضات بأمان.",
      results:
        "يوضح المشروع كيف يمكن تنظيم workflow روبوتي واختباره في بيئة محاكاة. النتيجة نوعية: يتم ربط مفاهيم التخطيط والتحكم داخل إطار قابل للتكرار والملاحظة. لا يتم ادعاء نشر مادي أو benchmark ملاحة رقمي. قيمة المشروع تكمن في فهم تفكيك النظام الذاتي وتنسيق مكوناته.",
      limitations:
        "لا تلتقط المحاكاة كل قيود العالم الحقيقي مثل ضجيج المستشعرات، الانزلاق، الفروقات الميكانيكية، البطارية، والبيئات غير المتوقعة. كما أن مستوى التخطيط والتحكم ما زال محدودا. يمكن تطوير المشروع بإضافة خرائط أغنى، obstacle avoidance، uncertainty في localization، logs أوضح، واختبارات مقارنة بين استراتيجيات planning.",
      takeaways:
        "الدرس التقني الأساسي هو أن الروبوتيك مشكلة أنظمة. التخطيط والتحكم والاستشعار والتصور يجب أن تعمل عبر واجهات واضحة. يقدم ROS نموذجا مفيدا لهذا التنسيق، وتساعد المحاكاة على تحويل مفاهيم autonomy المجردة إلى سلوك يمكن ملاحظته واختباره.",
    },
    "english-darija-translator": {
      abstract:
        "مشروع English-to-Darija Translator هو مشروع NLP يركز على الترجمة الآلية العصبية في سياق لغة إقليمية قليلة الموارد. يترجم النظام من الإنجليزية إلى الدارجة المغربية باستعمال preprocessing، tokenization، ونمذجة تسلسلية مثل Seq2Seq وLSTM. رغم طابعه الأكاديمي، فإنه يعالج فجوة مهمة لأن الدارجة مستعملة يوميا في المغرب لكنها أقل تمثيلا في أدوات NLP.",
      problemContext:
        "تنجح أنظمة الترجمة الحديثة غالبا مع لغات تتوفر على corpora كبيرة وكتابة موحدة وأدوات ناضجة. الدارجة تختلف لأنها غير رسمية، متعددة طرق الكتابة، وقليلة الموارد في datasets. لذلك تكون الترجمة من الإنجليزية إلى الدارجة أصعب من الترجمة بين لغات عالية الموارد. يستكشف المشروع هذه المشكلة كتحد NLP منخفض الموارد.",
      methodology:
        "تتبع المنهجية pipeline ترجمة عصبية. يتم تنظيف النص الإنجليزي وتحضيره، ثم tokenization لتحويله إلى تمثيل مناسب للنموذج. يتعلم النموذج encoding للجملة المصدر ثم يولد sequence بالدارجة. تناسب معماريات Seq2Seq/LSTM هذا النوع من المشاريع التعليمية لأنها تمثل ترتيب الكلمات بشكل صريح.",
      implementation:
        "يستخدم التنفيذ Python وTensorFlow/Keras وNLP preprocessing وtokenization وSeq2Seq وLSTM. يحضر pipeline النصوص المصدر والهدف، يبني vocabularies أو token indices، يدرب النموذج، ثم ينفذ inference على مدخلات إنجليزية جديدة. من التفاصيل المهمة طول الجمل، padding، الكلمات غير المعروفة، وتوحيد preprocessing بين التدريب والاستعمال.",
      results:
        "النتيجة هي demo أكاديمي يوضح كيف يمكن استعمال نماذج تسلسلية للترجمة من الإنجليزية إلى الدارجة. يبين النظام المسار الكامل من نص الإدخال إلى output بالدارجة ويكشف تحديات الترجمة في لغة قليلة الموارد. لا يتم ادعاء score مثل BLEU لعدم توفر قياس موثق. لذلك توصف النتيجة كتجربة وظيفية نوعية.",
      limitations:
        "أهم القيود هي حجم البيانات، تنوع الدارجة، غياب إملاء موحد، وبساطة Seq2Seq/LSTM مقارنة بtransformers الحديثة. يمكن كتابة الدارجة بالعربية أو اللاتينية أو خليط بينهما، مما يصعب normalization. نسخة مستقبلية يمكن أن تستعمل بيانات متوازية أكبر، subword tokenization، transformers، وتقييما بشريا من متحدثين أصليين.",
      takeaways:
        "يوضح المشروع أن AI اللغوية يجب أن تراعي السياق اللغوي والثقافي. اللغات قليلة الموارد تحتاج إلى تحضير بيانات دقيق وتقييم واقعي. الدرس الرئيسي هو أن prototype صغيرا يمكن أن يكشف تحديات مهمة في representation، sequence modeling، وبناء تقنيات NLP للغات محلية.",
    },
    "butterfly-image-classification": {
      abstract:
        "مشروع Butterfly Image Classification هو workflow للرؤية الحاسوبية يهدف إلى التعرف على أنواع الفراشات من الصور. يستخدم CNN وtransfer learning لاستخراج features بصرية وربط الصورة بصنف معين. يوضح المشروع البنية المعتادة لنظام classification أكاديمي: إعداد البيانات، preprocessing، تدريب النموذج، prediction، والتقييم.",
      problemContext:
        "يمكن أن تتشابه أنواع الفراشات في الألوان وشكل الأجنحة والأنماط البصرية، مما يجعل التصنيف fine-grained. يحتاج النموذج إلى تعلم خصائص تميز الأنواع مع تحمل اختلاف الخلفية، الإضاءة، الوضعية، الحجم، وجودة الصورة. يعالج المشروع هذه الصعوبة كتطبيق deep learning في computer vision.",
      methodology:
        "تتبع المنهجية pipeline supervised. يتم تنظيم الصور حسب الصنف، ثم preprocessing عبر resizing وnormalization وتقسيم البيانات إلى تدريب وتحقق. يتعلم CNN أو نموذج transfer learning ربط الصور بlabels الأنواع. استخدام نموذج مثل VGG16 يوفر قاعدة لاستخراج features، ثم تضيف الطبقات الخاصة قدرة التكيف مع dataset الفراشات.",
      implementation:
        "يعتمد التنفيذ على Python وTensorFlow/Keras وCNN وVGG16 أو transfer learning وimage preprocessing. المسار هو image dataset، preprocessing، CNN/transfer learning، prediction، evaluation. يشمل العمل العملي تنظيم folders أو labels، تجهيز الصور بشكل موحد، ضبط architecture، تدريب المصنف، ومراجعة التنبؤات.",
      results:
        "النتيجة هي نظام أكاديمي يوضح تصنيف أنواع الفراشات باستعمال CNN وtransfer learning. يبين كيف يمكن للنموذج تعلم features بصرية واستعمالها لتحديد الصنف. لا يتم ادعاء accuracy أو F1 أو confusion matrix محددة لأن هذه الأرقام غير متوفرة. لذلك يتم وصف النتيجة كworkflow وظيفي للتعلم والتصنيف.",
      limitations:
        "يعتمد النظام على جودة dataset، توازن الأصناف، تنوع الصور، واتساق preprocessing. قد يكون التصنيف صعبا عندما تكون الأنواع متشابهة أو الأمثلة قليلة. يمكن تطويره بإضافة data augmentation، تقارير تقييم أوضح، تحليل confusion matrix، مقارنة نماذج، واختبارات deployment. كما يفيد تحليل الأخطاء لمعرفة الأصناف الأكثر التباسا.",
      takeaways:
        "يعزز المشروع الفهم الكامل للرؤية الحاسوبية التطبيقية: البيانات، اختيار النموذج، التدريب، التحقق، وتفسير النتائج. يوضح transfer learning أن التصنيف يصبح أسهل عند استغلال features جاهزة، لكنه لا يلغي أهمية جودة البيانات والتقييم. فائدة النموذج تعتمد على موثوقية workflow المحيط به.",
    },
  },
} satisfies Record<"fr" | "ar", Record<ProjectPaperSlug, ProjectPaper>>;
