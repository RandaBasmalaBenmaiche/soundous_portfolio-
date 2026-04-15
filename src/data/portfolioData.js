export const personalInfo = {
  name: "Soundous Chemam",
  title: "AI Engineer | Fourth-Year Student in Artificial Intelligence at ENSIA (Algeria's top AI school)",
  email: "chemamsoundous@gmail.com",
  location: "Algiers, Algeria",
  bio: "Fourth-year AI student combining strong theoretical foundations in ML, NLP, CV, and deep learning with hands-on research experience. Passionate about NLP, reinforcement learning, healthcare AI, and multimodal systems. Seeking research opportunities in Europe."
}

export const researchExperience = [
  {
    title: "Reinforcement Learning for Video Summarisation",
    institution: "School Research Project",
    dates: "Feb 2026–Present",
    contributions: [
      "Developing RL-based algorithms for automatic video summarization",
      "Implementing policy gradient methods to optimize key frame selection"
    ]
  },
  {
    title: "Vocalized Algerian Arabic Corpora",
    institution: "School Research Project",
    dates: "Mar 2026–Present",
    contributions: [
      "Building comprehensive corpora for Algerian Arabic dialect",
      "Creating resources for NLP applications in low-resource languages"
    ]
  },
  {
    title: "AI Research Intern (Patient-Specific Time-Series Forecasting)",
    institution: "CDTA",
    dates: "Sept 2025",
    contributions: [
      "Developed machine learning models for personalized healthcare forecasting",
      "Implemented time-series analysis for patient-specific predictions"
    ]
  }
]

export const projects = [
  {
    slug: "smoking-cessation",
    title: "Conversational Agent for Smoking Cessation",
    techStack: ["LLM", "NLP", "SFT", "DPO", "Algerian Dialect"],
    problem: "Supporting smokers in their quit journey with personalized, dialect-aware conversational support",
    approach: "Fine-tuned LLM using Supervised Fine-Tuning (SFT) and Direct Preference Optimization (DPO) on Algerian Arabic corpus to provide culturally relevant cessation support",
    impact: "AI-powered chatbot providing accessible smoking cessation support in Algerian dialect"
  },
  {
    slug: "career-guidance",
    title: "AI-Powered Career Guidance Platform",
    techStack: ["RAG", "NLP", "Recommendation Systems", "Python"],
    problem: "Algerian students lack personalized career guidance aligned with their skills and local job market",
    approach: "Built RAG-based system combining student profiles with labor market data to generate personalized career recommendations",
    impact: "Platform providing accessible career guidance for Algerian students"
  },
  {
    slug: "malware-detection",
    title: "ML Model for Malware Detection",
    techStack: ["Python", "Data Mining", "Classification", "Juniper Networks"],
    problem: "Traditional signature-based detection struggles with evolving malware threats",
    approach: "Developed machine learning classification models using behavioral and static features for malware detection",
    impact: "Achieved strong detection rates with low false-positive rate for Juniper Networks"
  },
  {
    slug: "semantic-search",
    title: "Hybrid Semantic Search for Job Recommendations",
    techStack: ["Embeddings", "Pinecone", "Qdrant", "Vector Search"],
    problem: "Keyword-based job search fails to capture semantic meaning and user intent",
    approach: "Implemented embedding-based semantic search with Pinecone/Qdrant vector databases and weighted scoring system",
    impact: "Built at REVO AI internship to improve job matching accuracy"
  },
  {
    slug: "nroho",
    title: "Nroho - Covoiturage Transportation App",
    techStack: ["Node.js", "Express.js", "MongoDB", "Co-Founder"],
    problem: "People traveling alone could share rides and reduce costs while helping others reach their destinations",
    approach: "Co-founded and built a covoiturage (ride-sharing) application as COO. Users input their destination and available seats - like Uber but for carpooling since you're going anyway",
    impact: "Won 2nd place at IsDB Group Startups Pitch Competition"
  }
]

export const skills = {
  "ML/DL/NLP": ["PyTorch", "TensorFlow", "Hugging Face", "LLM fine-tuning (SFT/DPO)", "RAG", "LSTM/RNN", "RL", "OpenCV", "LangChain", "LangGraph"],
  "Agentic AI": ["n8n", "LangChain", "LangGraph", "Workflow Orchestration"],
  "Data": ["pandas", "NumPy", "matplotlib", "seaborn"],
  "Vector DBs": ["Pinecone", "Qdrant", "ChromaDB"],
  "Backend & APIs": ["Flask", "FastAPI", "Node.js", "Express.js"],
  "Databases": ["PostgreSQL", "MySQL", "MongoDB"],
  "Languages": ["Python", "C++", "JavaScript"]
}

export const awards = [
  { title: "2nd place nationally – Baccalaureate, Mathematics Branch", year: "2022" },
  { title: "Best Performing Student Award – ENSIA", year: "2023" },
  { title: "Seeds for the Future – Huawei Program", year: "2023" },
  { title: "Tech4Good – International Finalist, Top 10", year: "2024" },
  { title: "IsDB Group Startups Pitch – 2nd Place & Label Prize", year: "2025" },
  { title: "ICT Competition – 2nd Place, Regional Finals, Cloud & AI Track", year: "2026" }
]
