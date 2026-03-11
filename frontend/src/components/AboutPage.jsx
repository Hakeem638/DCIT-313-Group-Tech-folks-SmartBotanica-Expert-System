const SOURCES = [
  { icon:"🏫", name:"University of Ghana",            desc:"Agriculture Department — Plant Disease Diagnostic Handbook",                        color:"bg-green-50 border-green-200" },
  { icon:"📗", name:"Plant Pathology Textbooks",       desc:"Standard references for disease identification and symptom analysis",               color:"bg-emerald-50 border-emerald-200" },
  { icon:"📋", name:"Agricultural Extension Pubs",     desc:"Field-tested guides for crop disease management in Ghana",                          color:"bg-lime-50 border-lime-200" },
  { icon:"🔬", name:"Horticulture Research Journals",  desc:"Peer-reviewed research on plant nutrient deficiencies and treatments",              color:"bg-teal-50 border-teal-200" },
  { icon:"🌍", name:"FAO Plant Disease Guides",        desc:"Food and Agriculture Organization — global plant disease management standards",     color:"bg-cyan-50 border-cyan-200" },
  { icon:"🌹", name:"Royal Horticultural Society",     desc:"RHS Plant Care Manuals — international best practices",                            color:"bg-rose-50 border-rose-200" },
  { icon:"🎓", name:"Cornell Cooperative Extension",   desc:"Cornell University plant disease diagnostic resources",                             color:"bg-amber-50 border-amber-200" },
];

const TEAM = [
  { name:"Haruna Hakeem",              id:"22046736", role:"Project Manager",          emoji:"👑", color:"from-yellow-400 to-orange-400",  tasks:"Project planning, coordination, and delivery oversight" },
  { name:"Mubarack Jibriel",           id:"22146249", role:"Knowledge Base Engineer",  emoji:"🧠", color:"from-green-500 to-emerald-600",  tasks:"Prolog rule design, Python/pyswip bridge, Flask API" },
  { name:"Emmanuel Sarfo Attah-Nimoh", id:"22041547", role:"Knowledge Base Engineer",  emoji:"💻", color:"from-blue-500 to-indigo-600",    tasks:"React UI, Tailwind design, Knowledge Engineering docs" },
  { name:"Israel Opoku-Agyemang",      id:"22055310", role:"Programmer",               emoji:"⚙️", color:"from-purple-500 to-violet-600",  tasks:"System integration, testing and debugging" },
  { name:"Obeng Jessica Afriyie",      id:"22051539", role:"Programmer",               emoji:"🎨", color:"from-pink-500 to-rose-500",      tasks:"Frontend components and user experience design" },
  { name:"Osman Umar Farouk",          id:"22245576", role:"Programmer",               emoji:"🔧", color:"from-cyan-500 to-teal-600",      tasks:"Backend development and API integration" },
  { name:"Esther Eyram Ahiable",       id:"22155267", role:"Programmer",               emoji:"📝", color:"from-amber-500 to-yellow-500",   tasks:"Documentation, test cases and knowledge acquisition" },
];

const STATS = [
  { value:"10", label:"Prolog Rules",      icon:"📋" },
  { value:"7",  label:"Team Members",      icon:"👥" },
  { value:"10", label:"Symptom Inputs",    icon:"🔍" },
  { value:"4",  label:"Disease Categories",icon:"🗂️" },
];

export default function AboutPage({ onBack }) {
  return (
    <div>
      <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-[#4a7c59] hover:text-[#2c4a2e] mb-6 transition-colors">
        ← Back to Diagnosis
      </button>

      {/* Hero Banner */}
      <div className="bg-[#2c4a2e] text-white rounded-3xl p-8 mb-6 relative overflow-hidden">
        <div className="absolute -right-4 -top-4 text-9xl opacity-10 select-none">🌿</div>
        <div className="absolute right-16 bottom-2 text-5xl opacity-10 select-none">🌱</div>
        <div className="absolute right-4 top-16 text-4xl opacity-10 select-none">🍀</div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-3xl">🌱</span>
            <span className="text-[10px] font-bold uppercase tracking-widest bg-[#a8d5a2]/20 border border-[#a8d5a2]/30 text-[#a8d5a2] px-3 py-1 rounded-full">DCIT 313 · University of Ghana</span>
          </div>
          <h2 className="font-display text-4xl mb-3 leading-tight">
            About <span className="text-[#a8d5a2]">SmartBotanica</span>
          </h2>
          <p className="text-sm text-white/70 leading-relaxed max-w-2xl mb-4">
            SmartBotanica is a <span className="text-[#a8d5a2] font-semibold">Knowledge-Based System (KBS)</span> that functions as an Intelligent Agent for plant disease diagnosis.
            It maps user-provided <span className="text-[#a8d5a2] font-semibold">perceptions</span> (symptoms) to <span className="text-[#a8d5a2] font-semibold">actions</span> (diagnoses & treatments)
            using symbolic AI and forward chaining inference in SWI-Prolog.
          </p>
          <p className="text-xs text-[#a8d5a2]/60 italic">"Turning leaves into knowledge, roots into solutions."</p>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        {STATS.map(s => (
          <div key={s.label} className="bg-white rounded-2xl border border-[#d4c4a8] p-4 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl mb-1">{s.icon}</div>
            <p className="font-display text-3xl text-[#2c4a2e] font-bold">{s.value}</p>
            <p className="text-[10px] text-[#7a6652] uppercase tracking-wide font-semibold">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Architecture */}
      <div className="bg-white rounded-2xl border border-[#d4c4a8] p-6 mb-6">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xl">🏗️</span>
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#4a7c59]">System Architecture</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { layer:"Knowledge Base",      tech:"SWI-Prolog (.pl)",        role:"Memory / Intelligence", icon:"🧠", desc:"10 production rules. All intelligence lives here — zero if-else in Python.", bg:"bg-green-50", border:"border-green-200", badge:"bg-green-100 text-green-800" },
            { layer:"Inference Interface", tech:"Python + pyswip + Flask", role:"User Interaction",       icon:"⚙️", desc:"Asserts user facts, queries Prolog engine, returns diagnoses as JSON.",    bg:"bg-blue-50",  border:"border-blue-200",  badge:"bg-blue-100 text-blue-800" },
            { layer:"User Interface",      tech:"React + Tailwind CSS",    role:"Perception & Action",    icon:"🖥️", desc:"Collects symptoms (perceptions) and displays diagnoses (actions).",       bg:"bg-amber-50", border:"border-amber-200", badge:"bg-amber-100 text-amber-800" },
          ].map((a, i) => (
            <div key={a.layer} className={`${a.bg} rounded-xl p-5 border ${a.border} relative overflow-hidden`}>
              {i < 2 && (
                <div className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-[#4a7c59] text-white rounded-full items-center justify-center text-xs font-bold">→</div>
              )}
              <div className="text-3xl mb-3">{a.icon}</div>
              <p className="font-bold text-[#2c1810] text-sm mb-1">{a.layer}</p>
              <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${a.badge}`}>{a.role}</span>
              <code className="text-[10px] bg-white/70 px-2 py-0.5 rounded text-[#5a4a3a] block my-2 border border-white">{a.tech}</code>
              <p className="text-xs text-[#7a6652] leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="bg-white rounded-2xl border border-[#d4c4a8] p-6 mb-6">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xl">👥</span>
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#4a7c59]">Meet the Team · 7 Members</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {TEAM.map((m) => (
            <div key={m.id} className="flex items-start gap-4 p-4 rounded-xl border border-[#e8ddd0] hover:border-[#4a7c59] hover:shadow-md transition-all group bg-[#fdfaf7]">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center text-xl flex-shrink-0 shadow-md`}>
                {m.emoji}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <p className="font-bold text-[#2c1810] text-sm group-hover:text-[#4a7c59] transition-colors">{m.name}</p>
                  <span className="text-[10px] font-mono bg-[#f0e8d8] text-[#7a6652] px-2 py-0.5 rounded-full shrink-0">{m.id}</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-[#4a7c59] mb-1">{m.role}</p>
                <p className="text-xs text-[#7a6652] leading-relaxed">{m.tasks}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Knowledge Sources */}
      <div className="bg-white rounded-2xl border border-[#d4c4a8] p-6">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xl">📚</span>
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#4a7c59]">Knowledge Acquisition Sources</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {SOURCES.map(s => (
            <div key={s.name} className={`flex items-start gap-3 p-4 rounded-xl border ${s.color} hover:shadow-sm transition-all`}>
              <span className="text-2xl flex-shrink-0">{s.icon}</span>
              <div>
                <p className="font-semibold text-sm text-[#2c1810]">{s.name}</p>
                <p className="text-xs text-[#7a6652] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}