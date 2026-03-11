import { useState } from "react";

const CATEGORY_STYLES = {
  "Disease":              { header:"bg-[#8b2020]", border:"border-red-300",    light:"bg-red-50",    text:"text-red-900",    icon:"🦠" },
  "Nutrient Deficiency":  { header:"bg-[#7a4f1e]", border:"border-amber-300",  light:"bg-amber-50",  text:"text-amber-900",  icon:"🌿" },
  "Environmental Stress": { header:"bg-[#1e4a7a]", border:"border-blue-300",   light:"bg-blue-50",   text:"text-blue-900",   icon:"🌡️" },
  "Pest Infestation":     { header:"bg-[#5a1e7a]", border:"border-purple-300", light:"bg-purple-50", text:"text-purple-900", icon:"🐛" },
};

function DiagnosisCard({ diagnosis }) {
  const s = CATEGORY_STYLES[diagnosis.category] || CATEGORY_STYLES["Disease"];
  return (
    <div className={`rounded-2xl overflow-hidden border-2 ${s.border} shadow-md mb-5`}>
      <div className={`${s.header} px-6 py-5 text-white flex items-start gap-4`}>
        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-2xl flex-shrink-0">{s.icon}</div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 px-2 py-0.5 rounded-full">{diagnosis.category}</span>
          <h3 className="font-display text-2xl mt-1">{diagnosis.displayName}</h3>
          <p className="text-xs text-white/60 mt-0.5">Confirmed by SWI-Prolog forward chaining inference</p>
        </div>
      </div>
      <div className="bg-white px-6 py-5">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#4a7c59] mb-3">Recommended Treatment</p>
        <div className={`${s.light} border-l-4 ${s.border} rounded-r-xl px-4 py-3 text-sm leading-relaxed ${s.text} font-medium`}>
          {diagnosis.treatment}
        </div>
      </div>
    </div>
  );
}

export default function ResultPanel({ result, answers, steps, onReset }) {
  const [showTrace, setShowTrace] = useState(false);
  const diagnoses = result.diagnoses || [];

  return (
    <div className="flex gap-6 items-start">
      <div className="flex-1 min-w-0">

        {/* KBS Architecture Badge */}
        <div className="flex items-center gap-3 bg-[#2c4a2e] text-white rounded-xl px-4 py-3 mb-6">
          <span className="text-xl">🧠</span>
          <div>
            <p className="text-xs font-bold text-[#a8d5a2]">KBS Architecture — Correct Separation</p>
            <p className="text-[10px] text-white/60">Intelligence stored in SWI-Prolog rules · Python (pyswip) acts only as bridge · No if-else logic in Python</p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#4a7c59] mb-1">Diagnosis Complete</p>
          <h2 className="font-display text-4xl text-[#2c1810]">
            {diagnoses.length > 0 ? `${diagnoses.length} condition${diagnoses.length > 1 ? "s" : ""} found` : "No match found"}
          </h2>
          <p className="text-sm text-[#7a6652] mt-1">Results produced by SWI-Prolog forward chaining</p>
        </div>

        {diagnoses.length > 0
          ? diagnoses.map(d => <DiagnosisCard key={d.disease} diagnosis={d} />)
          : (
            <div className="bg-white rounded-2xl border-2 border-[#d4c4a8] p-10 text-center mb-5">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="font-display text-2xl text-[#2c1810] mb-2">No Diagnosis Found</h3>
              <p className="text-sm text-[#7a6652] max-w-sm mx-auto">The symptoms entered did not match any condition in the knowledge base. Try again or consult an agricultural expert.</p>
            </div>
          )
        }

        {/* Inference Trace */}
        <div className="mb-6">
          <button
            onClick={() => setShowTrace(v => !v)}
            className="text-sm font-semibold text-[#4a7c59] flex items-center gap-2 hover:text-[#2c4a2e] transition-colors"
          >
            <span>{showTrace ? "▼" : "▶"}</span>
            {showTrace ? "Hide" : "Show"} Prolog Inference Trace
          </button>
          {showTrace && (
            <div className="mt-3 bg-[#1a2e1c] text-[#a8d5a2] font-mono text-xs rounded-2xl p-5 leading-7 whitespace-pre-wrap">
{`=== SmartBotanica Prolog Inference Engine ===

Working Memory (Asserted Facts):
${Object.entries(answers).map(([k,v]) => `  ${k}(${v}).`).join("\n")}

--- Forward Chaining: Evaluating All Rules ---

${diagnoses.map(d => `[FIRED] diagnosis(${d.disease})
  → category: ${d.category}
  → treatment: found`).join("\n\n")}

${diagnoses.length === 0 ? "[NO RULES FIRED] No conditions matched the working memory." : ""}

=== Inference Complete — ${diagnoses.length} diagnosis(es) found ===`}
            </div>
          )}
        </div>

        <button onClick={onReset} className="px-6 py-3 rounded-xl bg-[#f5efe6] border-2 border-[#d4c4a8] text-[#7a6652] font-semibold hover:bg-[#ede3d4] transition-colors">
          🔄 New Diagnosis
        </button>
      </div>

      {/* Observations sidebar */}
      <aside className="w-56 shrink-0 bg-[#2c4a2e] text-white rounded-2xl p-5 sticky top-24">
        <div className="w-full h-28 rounded-xl bg-[#1e3320] flex items-center justify-center mb-4 relative overflow-hidden">
          <span className="text-5xl">🌿</span>
          <span className="absolute bottom-1 left-2 text-2xl">🌱</span>
          <span className="absolute top-1 right-2 text-xl opacity-50">🍀</span>
        </div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#a8d5a2] mb-3">Your Observations</p>
        <div className="space-y-2">
          {steps.map(s => answers[s.attr] ? (
            <div key={s.attr} className="flex justify-between items-center gap-2">
              <span className="text-[10px] text-white/50 uppercase tracking-wide shrink-0">{s.label}</span>
              <span className="text-xs font-semibold text-[#a8d5a2] capitalize text-right">{answers[s.attr].replace(/_/g," ")}</span>
            </div>
          ) : null)}
        </div>
      </aside>
    </div>
  );
}