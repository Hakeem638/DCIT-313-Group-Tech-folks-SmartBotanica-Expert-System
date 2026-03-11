# 🌿 SmartBotanica Expert System

> An AI-powered expert system to detect plant diseases and suggest their cure.

**Course:** DCIT 313 — Artificial Intelligence  
**Group:** Tech Folks  
**Institution:** University of Ghana

---

## 📖 About

SmartBotanica is a Prolog-based expert system that diagnoses plant diseases from user-provided symptoms and recommends appropriate treatments. It features a conversational step-by-step interface built with React and a Flask API backend that bridges the frontend to the Prolog knowledge base via PySwip.

---

## Project Structure

```
SmartBotanica/
├── frontend/          # React + Tailwind CSS user interface
│   ├── src/
│   │   ├── components/   # UI components (Stepper, Sidebar, ResultPanel, etc.)
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── interface/         # Flask API backend
│   ├── app.py
│   └── requirements.txt
├── knowledge_base/    # Prolog knowledge base
│   └── smartbotanica.pl
└── docs/              # Project documentation
```

---

##  Getting Started

### Prerequisites
- Node.js (v18+)
- Python (v3.8+)
- SWI-Prolog

### 1. Clone the Repository
```bash
git clone https://github.com/Hakeem638/DCIT-313-Group-Tech-folks-SmartBotanica-Expert-System.git
cd DCIT-313-Group-Tech-folks-SmartBotanica-Expert-System
```

### 2. Run the Backend
```bash
cd interface
pip install -r requirements.txt
python app.py
```

### 3. Run the Frontend
```bash
cd frontend
npm install
npm run dev
```

Then open your browser at `http://localhost:5173`

---

## 👥 Team Members

| Name | Student ID | Role | Responsibilities |
|------|-----------|------|-----------------|
|  **Haruna Hakeem** | 22046736 | Project Manager | Project planning, coordination, and delivery oversight |
|  **Mubarack Jibriel** | 22146249 | Knowledge Base Engineer | Prolog rule design, Python/PySwip bridge, Flask API |
|  **Emmanuel Sarfo Attah-Nimoh** | 22041547 | Knowledge Base Engineer | React UI, Tailwind design, Knowledge Engineering docs |
|  **Israel Opoku-Agyemang** | 22055310 | Programmer | System integration, testing and debugging |
|  **Obeng Jessica Afriyie** | 22051539 | Programmer | Frontend components and user experience design |
|  **Osman Umar Farouk** | 22245576 | Programmer | Backend development and API integration |
|  **Esther Eyram Ahiable** | 22155267 | Programmer | Documentation, test cases and knowledge acquisition |

---

##   Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React, Vite, Tailwind CSS |
| Backend | Python, Flask |
| Knowledge Base | SWI-Prolog, PySwip |

---

##   License

This project was developed for academic purposes at the University of Ghana.
