# DCIT313-SmartBotanica-Expert-System

**Course:** DCIT 313 — Knowledge-Based Systems · University of Ghana



## System Description

**SmartBotanica** is a plant disease diagnosis expert system. It maps user-provided observations (perceptions) to plant disease diagnoses and treatment recommendations (actions) using symbolic AI and logical inference.

---

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Logic Engine | SWI-Prolog | Symbolic AI & Inference (Forward Chaining) |
| Backend Bridge | Python + pyswip + Flask | Connects UI to Prolog knowledge base |
| Frontend | React + Tailwind CSS | User Interface |

---

## Repository Structure

```
DCIT313-SmartBotanica/
├── knowledge_base/
│   └── smartbotanica.pl       ← All Prolog facts and rules
├── interface/
│   ├── app.py                 ← Flask API (pyswip bridge to Prolog)
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Stepper.jsx
│   │   │   └── ResultPanel.jsx
│   │   └── index.css
│   └── package.json
├── docs/                      ← Knowledge Engineering report
└── README.md
```

---

## How to Run

### Prerequisites
- SWI-Prolog installed → https://www.swi-prolog.org/Download.html
- Python 3.8+ installed
- Node.js 18+ installed

### Terminal 1 — Backend
```bash
cd interface
pip install -r requirements.txt
python app.py
```

### Terminal 2 — Frontend
```bash
cd frontend
npm install
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## Test Cases

| Input | Expected Output |
|-------|----------------|
| leaf_spots=brown, humidity=high | Fungal Blight |
| soil_moisture=dry, plant_wilting=yes | Drought Stress |
| leaf_color=yellow, soil_moisture=normal | Nitrogen Deficiency |
| leaf_color=yellow, soil_moisture=wet, root_smell=foul | Root Rot |
