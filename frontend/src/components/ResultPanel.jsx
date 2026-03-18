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
        <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--sb-primary)] mb-3">Recommended Treatment</p>
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
    <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_19rem] gap-6 items-start">
      <div className="flex-1 min-w-0">

        {/* KBS Architecture Badge */}
        <div className="flex items-center gap-3 bg-[var(--sb-primary-dark)] text-white rounded-2xl px-5 py-4 mb-6 shadow-sm">
          <span className="text-xl">🧠</span>
          <div>
            <p className="text-xs font-bold text-[var(--sb-accent)]">KBS Architecture — Correct Separation</p>
            <p className="text-[10px] text-white/60">Intelligence stored in SWI-Prolog rules · Python (pyswip) acts only as bridge · No if-else logic in Python</p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--sb-primary)] mb-1">Diagnosis Complete</p>
          <h2 className="font-display text-4xl text-[var(--sb-text)]">
            {diagnoses.length > 0 ? `${diagnoses.length} condition${diagnoses.length > 1 ? "s" : ""} found` : "No match found"}
          </h2>
          <p className="text-sm text-[var(--sb-text-soft)] mt-1">Results produced by SWI-Prolog forward chaining</p>
        </div>

        {diagnoses.length > 0
          ? diagnoses.map(d => <DiagnosisCard key={d.disease} diagnosis={d} />)
          : (
            <div className="bg-white rounded-2xl border-2 border-[var(--sb-border)] p-10 text-center mb-5">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="font-display text-2xl text-[var(--sb-text)] mb-2">No Diagnosis Found</h3>
              <p className="text-sm text-[var(--sb-text-soft)] max-w-sm mx-auto">The symptoms entered did not match any condition in the knowledge base. Try again or consult an agricultural expert.</p>
            </div>
          )
        }

        {/* Inference Trace */}
        <div className="mb-6">
          <button
            onClick={() => setShowTrace(v => !v)}
            className="text-sm font-semibold text-[var(--sb-primary)] flex items-center gap-2 hover:text-[var(--sb-primary-dark)] transition-colors"
          >
            <span>{showTrace ? "▼" : "▶"}</span>
            {showTrace ? "Hide" : "Show"} Prolog Inference Trace
          </button>
          {showTrace && (
            <div className="mt-3 bg-[#183625] text-[var(--sb-accent)] font-mono text-xs rounded-2xl p-5 leading-7 whitespace-pre-wrap">
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

        <button onClick={onReset} className="px-6 py-3 rounded-xl bg-[var(--sb-surface-soft)] border-2 border-[var(--sb-border)] text-[var(--sb-text-soft)] font-semibold hover:bg-[#eaf4ec] transition-colors">
          🔄 New Diagnosis
        </button>
      </div>

      {/* Observations sidebar */}
      <aside className="w-full xl:w-[19rem] shrink-0 bg-[var(--sb-primary-dark)] text-white rounded-[28px] p-5 md:p-6 self-start xl:sticky xl:top-28 shadow-sm">
        <div
          className="w-full h-36 rounded-2xl mb-4 relative overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1463320898484-cdee8141c787?auto=format&fit=crop&w=1000&q=80')",
          }}
        >
          <div className="absolute inset-0 leaf-photo-overlay" />
          <div className="absolute bottom-2 left-2 text-[10px] tracking-wide uppercase text-white/90 font-semibold">Field Snapshot</div>
        </div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--sb-accent)] mb-3">Your Observations</p>
        <div className="space-y-2">
          {steps.map(s => answers[s.attr] ? (
            <div key={s.attr} className="flex justify-between items-center gap-2">
              <span className="text-[10px] text-white/50 uppercase tracking-wide shrink-0">{s.label}</span>
              <span className="text-xs font-semibold text-[var(--sb-accent)] capitalize text-right">{answers[s.attr].replace(/_/g," ")}</span>
            </div>
          ) : null)}
        </div>
      </aside>
    </div>
  );
}
