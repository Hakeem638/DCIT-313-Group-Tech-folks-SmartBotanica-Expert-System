const SOURCES = [
  { icon:"🏫", name:"University of Ghana", desc:"Agriculture Department — Plant Disease Diagnostic Handbook" },
  { icon:"📗", name:"Plant Pathology Textbooks", desc:"Standard references for disease identification and symptom analysis" },
  { icon:"📋", name:"Agricultural Extension Publications", desc:"Field-tested guides for crop disease management in Ghana" },
  { icon:"🔬", name:"Horticulture Research Journals", desc:"Peer-reviewed research on plant nutrient deficiencies and treatments" },
  { icon:"🌍", name:"FAO Plant Disease Guides", desc:"Food and Agriculture Organization — global plant disease management standards" },
  { icon:"🌹", name:"Royal Horticultural Society", desc:"RHS Plant Care Manuals — international best practices" },
  { icon:"🎓", name:"Cornell Cooperative Extension", desc:"Cornell University plant disease diagnostic resources" },
];

const TEAM = [
  { name:"Mubarack Jibriel",            role:"Knowledge Base Engineer & Backend Developer", tasks:"Prolog rule design, Python/pyswip bridge, Flask API" },
  { name:"Emmanuel Sarfo Attah-Nimoh",  role:"Knowledge Base Engineer & Frontend Developer", tasks:"React UI, Tailwind design, Knowledge Engineering documentation" },
];

export default function AboutPage({ onBack }) {
  return (
    <div>
      <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-[#4a7c59] hover:text-[#2c4a2e] mb-6 transition-colors">
        ← Back to Diagnosis
      </button>

      {/* Hero */}
      <div className="bg-[#2c4a2e] text-white rounded-2xl p-8 mb-8 relative overflow-hidden">
        <div className="absolute right-6 top-4 text-7xl opacity-20">🌿</div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#a8d5a2] mb-2">DCIT 313 · University of Ghana</p>
        <h2 className="font-display text-3xl mb-3">About SmartBotanica</h2>
        <p className="text-sm text-white/70 leading-relaxed max-w-xl">
          SmartBotanica is a Knowledge-Based System (KBS) that functions as an Intelligent Agent for plant disease diagnosis.
          It maps user-provided observations (perceptions) to plant disease diagnoses and treatment recommendations (actions)
          using symbolic AI and forward chaining inference in SWI-Prolog.
        </p>
      </div>

      {/* Architecture */}
      <div className="bg-white rounded-2xl border border-[#d4c4a8] p-6 mb-8">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#4a7c59] mb-4">System Architecture</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { layer:"Knowledge Base", tech:"SWI-Prolog (.pl)", role:"Memory / Intelligence", icon:"🧠", desc:"10 production rules. All intelligence stored here — no if-else in Python." },
            { layer:"Inference Interface", tech:"Python + pyswip + Flask", role:"User Interaction", icon:"⚙️", desc:"Asserts user facts, queries Prolog, returns diagnoses as JSON." },
            { layer:"User Interface", tech:"React + Tailwind CSS", role:"Perception & Action", icon:"🖥️", desc:"Collects symptoms (perceptions), displays diagnoses (actions)." },
          ].map(a => (
            <div key={a.layer} className="bg-[#f5efe6] rounded-xl p-4 border border-[#e0d4c0]">
              <div className="text-2xl mb-2">{a.icon}</div>
              <p className="font-bold text-[#2c1810] text-sm">{a.layer}</p>
              <p className="text-[10px] font-semibold text-[#4a7c59] uppercase tracking-wide mb-1">{a.role}</p>
              <code className="text-[10px] bg-[#e8ddd0] px-1.5 py-0.5 rounded text-[#5a4a3a] block mb-2">{a.tech}</code>
              <p className="text-xs text-[#7a6652] leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Knowledge Sources */}
      <div className="bg-white rounded-2xl border border-[#d4c4a8] p-6 mb-8">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#4a7c59] mb-4">Knowledge Acquisition Sources</p>
        <div className="space-y-3">
          {SOURCES.map(s => (
            <div key={s.name} className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#f5efe6] transition-colors">
              <span className="text-2xl flex-shrink-0">{s.icon}</span>
              <div>
                <p className="font-semibold text-sm text-[#2c1810]">{s.name}</p>
                <p className="text-xs text-[#7a6652]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="bg-white rounded-2xl border border-[#d4c4a8] p-6">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#4a7c59] mb-4">Group Members</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {TEAM.map(m => (
            <div key={m.name} className="bg-[#f5efe6] rounded-xl p-4 border border-[#e0d4c0]">
              <div className="w-10 h-10 rounded-xl bg-[#2c4a2e] text-[#a8d5a2] flex items-center justify-center font-bold mb-3">
                {m.name[0]}
              </div>
              <p className="font-bold text-[#2c1810] text-sm">{m.name}</p>
              <p className="text-xs text-[#4a7c59] font-semibold mb-1">{m.role}</p>
              <p className="text-xs text-[#7a6652]">{m.tasks}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}