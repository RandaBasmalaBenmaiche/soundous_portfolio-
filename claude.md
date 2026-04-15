Build me a personal portfolio website as a single-page React app (or multi-page with React Router). 

## About me (use this content exactly)
- Name: Soundous Chemam
- Title: AI Engineer | Fourth-Year Student in Artificial Intelligence at ENSIA (Algeria's top AI school)
- Email: chemamsoundous@gmail.com | LinkedIn | Algiers, Algeria
- Bio: Fourth-year AI student combining strong theoretical foundations in ML, NLP, CV, and deep learning with hands-on research experience. Passionate about NLP, reinforcement learning, healthcare AI, and multimodal systems. Seeking research opportunities in Europe.

## Design direction
- Style: Clean, minimal, warm and personal — feels human, not corporate
- Color palette: Muted cool tones — slate, dusty blue, lavender as accents. White/off-white backgrounds. Dark slate for text.
- Typography: Elegant serif for headings (e.g. Playfair Display or Lora), clean sans-serif for body (e.g. Inter or DM Sans)
- Animations: Subtle fade-ins on scroll, no heavy effects
- Layout: Generous whitespace, centered content max-width ~900px

## Sections (in this order)

### 1. Hero / About
- Full name, title, short personal bio (warm tone, first person)
- Soft avatar placeholder or initials monogram
- Links: Email, LinkedIn, GitHub

### 2. Research Experience
Display as a vertical timeline, each entry with:
- Title, institution, dates
- 2–3 bullet points of contributions
Entries:
1. Reinforcement Learning for Video Summarisation — School Research Project, Feb 2026–Present
2. Vocalized Algerian Arabic Corpora — School Research Project, Mar 2026–Present
3. AI Research Intern (Patient-Specific Time-Series Forecasting) — CDTA, Sept 2025

### 3. Projects (detailed case-study style — each project gets its own full section/page)
Each case study includes: Project title, tech stack tags, problem statement, approach, results/impact.

Projects:
1. Conversational Agent for Smoking Cessation — LLM fine-tuning (SFT, DPO), NLP, Algerian dialect corpus. Nominated at WSIS 2024.
2. AI-Powered Career Guidance Platform — RAG, NLP, Recommendation Systems. Personalized career guidance for Algerian students.
3. ML Model for Malware Detection (Juniper Networks) — Python, Data Mining, Classification. Strong detection with low false-positive rate.
4. Hybrid Semantic Search for Job Recommendations — Embedding models, Pinecone/Qdrant, weighted scoring. Built at REVO AI internship.
5. Nroho EdTech Startup — Co-Founder & COO. Node.js, Express.js, MongoDB. Won 2nd place at IsDB Group Startups Pitch Competition.

### 4. Skills & Tools
Display as grouped soft-styled tags (not a boring list):
- ML/DL/NLP: PyTorch, TensorFlow, Hugging Face, LLM fine-tuning (SFT/DPO), RAG, LSTM/RNN, RL, OpenCV, LangChain, LangGraph
- Agentic AI: n8n, LangChain, LangGraph, Workflow Orchestration
- Data: pandas, NumPy, matplotlib, seaborn
- Vector DBs: Pinecone, Qdrant, ChromaDB
- Backend & APIs: Flask, FastAPI, Node.js, Express.js
- Databases: PostgreSQL, MySQL, MongoDB
- Languages: Python, C++, JavaScript

### 5. Awards & Distinctions
Display as a clean card grid or elegant list with year badges:
- 2nd place nationally – Baccalaureate, Mathematics Branch (2022)
- Best Performing Student Award – ENSIA (2023)
- Seeds for the Future – Huawei Program (2023)
- Tech4Good – International Finalist, Top 10 (2024)
- WSIS Prize – Nominated, Best Project in Healthcare (2024)
- IsDB Group Startups Pitch – 2nd Place & Label Prize (2025)
- ICT Competition – 2nd Place, Regional Finals, Cloud & AI Track (2026)

## Technical requirements
- React + Tailwind CSS
- React Router for project case-study pages
- Smooth scroll navigation with a sticky minimal navbar
- Fully responsive (mobile-first)
- Each project case study should be a separate route (e.g. /projects/smoking-cessation)
- Use framer-motion for subtle entrance animations