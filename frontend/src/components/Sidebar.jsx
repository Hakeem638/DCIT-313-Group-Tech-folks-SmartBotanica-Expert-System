const STEP_ICONS = ["🌿","🍃","🔍","🥀","💧","🌫️","🌡️","🌱","👃","🐛"];

export default function Sidebar({ steps, currentStep, answers }) {
  const answeredCount = Object.keys(answers).length;
  const progress = Math.round((answeredCount / steps.length) * 100);

  return (
    <aside className="w-full xl:w-[20rem] shrink-0 bg-[var(--sb-primary-dark)] text-white rounded-[28px] p-5 md:p-6 self-start xl:sticky xl:top-28 shadow-sm">

      {/* Plant illustration */}
      <div className="w-full h-36 rounded-2xl mb-5 relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=900&q=80')",
        }}
      >
        <div className="absolute inset-0 leaf-photo-overlay" />
        <div className="absolute bottom-2 left-3 text-xs font-semibold tracking-wide text-white/85 uppercase">Guided Diagnosis</div>
      </div>

      <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--sb-accent)] mb-3">Diagnosis Steps</p>

      <div className="space-y-2">
        {steps.map((step, i) => {
          const done   = answers[step.attr] !== undefined;
          const active = i === currentStep;
          const future = i > currentStep;

          return (
            <div key={step.attr} className={`flex items-center gap-2.5 px-3 py-2.5 rounded-2xl transition-all
              ${active  ? "bg-[var(--sb-primary)] shadow-md" : ""}
              ${done && !active ? "opacity-80" : ""}
              ${future  ? "opacity-30" : ""}
            `}>
              <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm flex-shrink-0
                ${active  ? "bg-[var(--sb-accent)] text-[var(--sb-primary-dark)] font-bold" : ""}
                ${done && !active ? "bg-[var(--sb-primary)]" : ""}
                ${future  ? "bg-white/10" : ""}
              `}>
                {done && !active ? "✓" : STEP_ICONS[i]}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold truncate">{step.label}</p>
                {done && answers[step.attr] && (
                  <p className="text-[10px] text-[var(--sb-accent)] capitalize truncate">
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
            className="h-full bg-[var(--sb-accent)] rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </aside>
  );
}
