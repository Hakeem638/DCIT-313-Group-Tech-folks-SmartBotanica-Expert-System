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
<<<<<<< Updated upstream
  { name:"Haruna Hakeem",              id:"22046736", role:"Project Manager",          emoji:"👑", color:"from-yellow-400 to-orange-400",  tasks:"Project planning, coordination, and delivery oversight", image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80", focus:"Leadership & Planning" },
  { name:"Mubarack Jibriel",           id:"22146249", role:"Knowledge Base Engineer",  emoji:"🧠", color:"from-green-500 to-emerald-600",  tasks:"Prolog rule design, Python/pyswip bridge, Flask API", image:"https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=900&q=80", focus:"AI Rules & Inference" },
  { name:"Emmanuel Sarfo Attah-Nimoh", id:"22041547", role:"Knowledge Base Engineer",  emoji:"💻", color:"from-blue-500 to-indigo-600",    tasks:"React UI, Tailwind design, Knowledge Engineering docs", image:"https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80", focus:"Frontend & Knowledge Design" },
  { name:"Israel Opoku-Agyemang",      id:"22055310", role:"Programmer",               emoji:"⚙️", color:"from-purple-500 to-violet-600",  tasks:"System integration, testing and debugging", image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80", focus:"Integration & QA" },
  { name:"Obeng Jessica Afriyie",      id:"22051539", role:"Programmer",               emoji:"🎨", color:"from-pink-500 to-rose-500",      tasks:"Frontend components and user experience design", image:"https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80", focus:"UI/UX Development" },
  { name:"Osman Umar Farouk",          id:"22245576", role:"Programmer",               emoji:"🔧", color:"from-cyan-500 to-teal-600",      tasks:"Backend development and API integration", image:"https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=900&q=80", focus:"Backend APIs" },
  { name:"Esther Eyram Ahiable",       id:"22155267", role:"Programmer",               emoji:"📝", color:"from-amber-500 to-yellow-500",   tasks:"Documentation, test cases and knowledge acquisition", image:"https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80", focus:"Testing & Documentation" },
];

const MEDIA = [
  {
    title: "Smart Plant Watering Guide",
    kind: "Watering Plants",
    desc: "Practical watering methods to avoid overwatering and root stress.",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Watering_plants.webm",
    type: "video/webm",
    poster: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Plant Care Basics for Healthy Leaves",
    kind: "Plant Health",
    desc: "Essential care routine for sunlight, watering rhythm and growth monitoring.",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Pleopeltis_polypodioides_water_absorption_timelapse.webm",
    type: "video/webm",
    poster: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "How to Identify Common Plant Problems",
    kind: "Diagnosis Tips",
    desc: "Visual cues for spotting disease symptoms and nutrient deficiency signs.",
    src: "https://videos.pexels.com/video-files/3255275/3255275-hd_1920_1080_25fps.mp4",
    type: "video/mp4",
    poster: "https://images.unsplash.com/photo-1487798452839-c748a707a6b2?auto=format&fit=crop&w=900&q=80",
  },
=======
  { name:"Haruna Hakeem",              id:"22046736", role:"Project Manager",          emoji:"👑", color:"from-yellow-400 to-orange-400",  tasks:"Project planning, coordination, and delivery oversight" },
  { name:"Mubarack Jibriel",           id:"22146249", role:"Knowledge Base Engineer",  emoji:"🧠", color:"from-green-500 to-emerald-600",  tasks:"Prolog rule design, Python/pyswip bridge, Flask API" },
  { name:"Emmanuel Sarfo Attah-Nimoh", id:"22041547", role:"Knowledge Base Engineer",  emoji:"💻", color:"from-blue-500 to-indigo-600",    tasks:"React UI, Tailwind design, Knowledge Engineering docs" },
  { name:"Israel Opoku-Agyemang",      id:"22055310", role:"Programmer",               emoji:"⚙️", color:"from-purple-500 to-violet-600",  tasks:"System integration, testing and debugging" },
  { name:"Obeng Jessica Afriyie",      id:"22051539", role:"Programmer",               emoji:"🎨", color:"from-pink-500 to-rose-500",      tasks:"Frontend components and user experience design" },
  { name:"Osman Umar Farouk",          id:"22245576", role:"Programmer",               emoji:"🔧", color:"from-cyan-500 to-teal-600",      tasks:"Backend development and API integration" },
  { name:"Esther Eyram Ahiable",       id:"22155267", role:"Programmer",               emoji:"📝", color:"from-amber-500 to-yellow-500",   tasks:"Documentation, test cases and knowledge acquisition" },
>>>>>>> Stashed changes
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
      <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-[var(--sb-primary)] hover:text-[var(--sb-primary-dark)] mb-6 transition-colors">
        ← Back to Diagnosis
      </button>

      {/* Hero Banner */}
<<<<<<< Updated upstream
      <div className="text-white rounded-3xl p-8 mb-6 relative overflow-hidden bg-[var(--sb-primary-dark)]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1400&q=80')",
          }}
        />
        <div className="absolute inset-0 leaf-photo-overlay" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-3xl">🌱</span>
            <span className="text-[10px] font-bold uppercase tracking-widest bg-[var(--sb-accent)]/20 border border-[var(--sb-accent)]/30 text-[var(--sb-accent)] px-3 py-1 rounded-full">DCIT 313 · University of Ghana</span>
          </div>
          <h2 className="font-display text-4xl mb-3 leading-tight">
            About <span className="text-[var(--sb-accent)]">SmartBotanica</span>
          </h2>
          <p className="text-sm text-white/70 leading-relaxed max-w-2xl mb-4">
            SmartBotanica is a <span className="text-[var(--sb-accent)] font-semibold">Knowledge-Based System (KBS)</span> that functions as an Intelligent Agent for plant disease diagnosis.
            It maps user-provided <span className="text-[var(--sb-accent)] font-semibold">perceptions</span> (symptoms) to <span className="text-[var(--sb-accent)] font-semibold">actions</span> (diagnoses & treatments)
            using symbolic AI and forward chaining inference in SWI-Prolog.
          </p>
          <p className="text-xs text-[var(--sb-accent)]/70 italic">"Turning leaves into knowledge, roots into solutions."</p>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {STATS.map(s => (
          <div key={s.label} className="bg-white rounded-2xl border border-[var(--sb-border)] p-4 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl mb-1">{s.icon}</div>
            <p className="font-display text-3xl text-[var(--sb-primary-dark)] font-bold">{s.value}</p>
            <p className="text-[10px] text-[var(--sb-text-soft)] uppercase tracking-wide font-semibold">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Architecture */}
      <div className="rounded-3xl border border-[var(--sb-border)] overflow-hidden mb-6">
        <div className="bg-white p-6 border-b border-[var(--sb-border)]">
          <div className="flex items-center gap-2">
            <span className="text-xl">🏗️</span>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--sb-primary)]">System Architecture</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-0">
          {[
            { layer:"Knowledge Base",      tech:"SWI-Prolog (.pl)",        role:"Memory / Intelligence", icon:"🧠", desc:"10 production rules. All intelligence lives here — zero if-else in Python.", color:"from-emerald-400 to-green-600", image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80" },
            { layer:"Inference Interface", tech:"Python + pyswip + Flask", role:"User Interaction",       icon:"⚙️", desc:"Asserts user facts, queries Prolog engine, returns diagnoses as JSON.",    color:"from-blue-400 to-indigo-600", image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80" },
            { layer:"User Interface",      tech:"React + Tailwind CSS",    role:"Perception & Action",    icon:"🖥️", desc:"Collects symptoms (perceptions) and displays diagnoses (actions).",       color:"from-amber-400 to-orange-600", image:"https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80" },
          ].map((a, i) => (
            <div key={a.layer} className="group relative h-96 overflow-hidden border-r border-[var(--sb-border)] last:border-r-0 hover:shadow-xl transition-all duration-300">
              {/* Background Image */}
              <img src={a.image} alt={a.layer} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70`} />
              <div className={`absolute inset-0 bg-gradient-to-br ${a.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center text-2xl group-hover:bg-white/25 transition-all duration-300">
                    {a.icon}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm`}>{a.role}</span>
                </div>
                
                <div className="space-y-2 transform group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-bold text-white text-sm">{a.layer}</p>
                  <code className="text-[10px] bg-black/40 px-2 py-1 rounded text-white/90 block w-fit border border-white/20 backdrop-blur-sm">{a.tech}</code>
                  <p className="text-xs text-white/85 leading-relaxed">{a.desc}</p>
                </div>
=======
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
>>>>>>> Stashed changes
              </div>
            </div>
          ))}
        </div>
      </div>

<<<<<<< Updated upstream
      {/* Team */}
      <div className="bg-white rounded-3xl border border-[var(--sb-border)] p-6 mb-6">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xl">👥</span>
          <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--sb-primary)]">Meet the Team · 7 Members</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {TEAM.map((m) => (
            <div key={m.id} className="rounded-2xl overflow-hidden border border-[#dbeadd] bg-[var(--sb-surface-soft)] hover:border-[var(--sb-primary)] hover:shadow-lg transition-all group">
              <div className="relative h-40">
                <img src={m.image} alt={`${m.role} role visual`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
                <div className={`absolute left-3 top-3 px-2 py-1 rounded-full text-[10px] font-bold text-white bg-gradient-to-r ${m.color}`}>
                  {m.role}
                </div>
                <div className="absolute right-3 top-3 w-10 h-10 rounded-xl bg-white/90 flex items-center justify-center text-lg shadow-sm">
                  {m.emoji}
                </div>
                <div className="absolute left-3 bottom-3 right-3">
                  <p className="font-semibold text-white text-sm leading-tight">{m.name}</p>
                  <p className="text-[10px] font-mono text-white/80">ID: {m.id}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-[10px] uppercase tracking-widest font-bold text-[var(--sb-primary)] mb-1">{m.focus}</p>
                <p className="text-xs text-[var(--sb-text-soft)] leading-relaxed">{m.tasks}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-[var(--sb-text-soft)]">SmartBotanica Team</span>
                  <span className="text-[10px] px-2 py-1 rounded-full bg-[#eaf4ec] text-[var(--sb-primary-dark)] font-semibold">Active</span>
                </div>
=======
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
>>>>>>> Stashed changes
              </div>
            </div>
          ))}
        </div>
      </div>

<<<<<<< Updated upstream
      {/* Plant Media */}
      <div className="bg-white rounded-3xl border border-[var(--sb-border)] p-6 mb-6">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xl">🎥</span>
          <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--sb-primary)]">Plant Learning Media</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 mb-4">
          {MEDIA.map((video) => (
            <div key={video.title} className="rounded-2xl overflow-hidden border border-[#d9e9dc] bg-[var(--sb-surface-soft)] hover:shadow-md transition-shadow">
              <div className="aspect-video bg-black">
                <video
                  className="w-full h-full object-cover"
                  controls
                  muted
                  playsInline
                  loop
                  autoPlay
                  preload="metadata"
                  poster={video.poster}
                >
                  <source src={video.src} type={video.type || "video/mp4"} />
                </video>
              </div>
              <div className="p-4">
                <p className="text-[10px] uppercase tracking-widest font-bold text-[var(--sb-primary)] mb-1">{video.kind}</p>
                <p className="font-semibold text-sm text-[var(--sb-text)] mb-1">{video.title}</p>
                <p className="text-xs text-[var(--sb-text-soft)] leading-relaxed">{video.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-[#d9e9dc] bg-gradient-to-r from-[#eef8ef] to-[#e8f3eb] p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-[var(--sb-text)]">Real-world plant care, embedded into your learning flow</p>
            <p className="text-xs text-[var(--sb-text-soft)]">Use these videos alongside SmartBotanica test cases to compare symptoms and treatment steps.</p>
          </div>
          <span className="text-[10px] uppercase tracking-widest font-bold text-[var(--sb-primary)] bg-white px-3 py-2 rounded-full border border-[#d4e5d8]">Media + Diagnosis</span>
        </div>
      </div>

      {/* Knowledge Sources */}
      <div className="bg-white rounded-3xl border border-[var(--sb-border)] p-6">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xl">📚</span>
          <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--sb-primary)]">Knowledge Acquisition Sources</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {SOURCES.map(s => (
            <div key={s.name} className={`flex items-start gap-3 p-4 rounded-xl border ${s.color} hover:shadow-sm transition-all`}>
              <span className="text-2xl flex-shrink-0">{s.icon}</span>
              <div>
                <p className="font-semibold text-sm text-[var(--sb-text)]">{s.name}</p>
                <p className="text-xs text-[var(--sb-text-soft)] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

=======
>>>>>>> Stashed changes
    </div>
  );
}