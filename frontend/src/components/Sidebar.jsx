const STEP_ICONS = ["🌿","🍃","🔍","🥀","💧","🌫️","🌡️","🌱","👃","🐛"];

export default function Sidebar({ steps, currentStep, answers }) {
  const answeredCount = Object.keys(answers).length;
  const progress = Math.round((answeredCount / steps.length) * 100);

  return (
    <aside className="w-60 shrink-0 bg-[#2c4a2e] text-white rounded-2xl p-5 self-start sticky top-24">

      {/* Plant illustration */}
      <div className="w-full h-32 rounded-xl bg-[#1e3320] flex items-center justify-center mb-5 relative overflow-hidden">
        <span className="text-6xl">🌿</span>
        <span className="absolute bottom-2 left-3 text-3xl">🌱</span>
        <span className="absolute top-2 right-3 text-2xl opacity-50">🍀</span>
        <span className="absolute top-3 left-5 text-xl opacity-30">🌾</span>
      </div>

      <p className="text-[10px] font-bold uppercase tracking-widest text-[#a8d5a2] mb-3">Diagnosis Steps</p>

      <div className="space-y-1">
        {steps.map((step, i) => {
          const done   = answers[step.attr] !== undefined;
          const active = i === currentStep;
          const future = i > currentStep;

          return (
            <div key={step.attr} className={`flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all
              ${active  ? "bg-[#4a7c59] shadow-md" : ""}
              ${done && !active ? "opacity-80" : ""}
              ${future  ? "opacity-30" : ""}
            `}>
              <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm flex-shrink-0
                ${active  ? "bg-[#a8d5a2] text-[#2c4a2e] font-bold" : ""}
                ${done && !active ? "bg-[#4a7c59]" : ""}
                ${future  ? "bg-white/10" : ""}
              `}>
                {done && !active ? "✓" : STEP_ICONS[i]}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold truncate">{step.label}</p>
                {done && answers[step.attr] && (
                  <p className="text-[10px] text-[#a8d5a2] capitalize truncate">
                    {answers[step.attr].replace(/_/g, " ")}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress bar */}
      <div className="mt-5 pt-4 border-t border-white/10">
        <div className="flex justify-between text-[10px] text-white/40 mb-2">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#a8d5a2] rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </aside>
  );
}
