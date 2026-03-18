export default function Stepper({
  steps, currentStep, answers,
  onSelect, onNext, onBack, onDiagnose,
  loading, error, isLastStep, allAnswered,
}) {
  const step      = steps[currentStep];
  const hasAnswer = !!answers[step.attr];

  return (
    <div>
      {/* Step label */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-9 h-9 rounded-xl bg-[var(--sb-primary)] text-white flex items-center justify-center font-bold text-sm">
          {currentStep + 1}
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--sb-primary)]">{step.label}</p>
          <p className="text-xs text-[var(--sb-text-soft)]">{step.hint}</p>
        </div>
      </div>

      {/* Question */}
      <h2 className="font-display text-3xl text-[var(--sb-text)] mb-8 leading-tight">{step.question}</h2>

      {/* Option cards — big and clear */}
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 mb-8">
        {step.options.map((opt) => {
          const selected = answers[step.attr] === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => onSelect(step.attr, opt.value)}
              className={`flex items-center gap-4 p-5 rounded-2xl border-2 text-left w-full transition-all duration-200
                ${selected
                  ? "border-[var(--sb-primary)] bg-[var(--sb-primary)] text-white shadow-lg scale-[1.02]"
                  : "border-[var(--sb-border)] bg-[var(--sb-surface)] text-[var(--sb-text)] hover:border-[var(--sb-primary)] hover:shadow-md hover:-translate-y-0.5"
                }`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl flex-shrink-0
                ${selected ? "bg-white/20" : "bg-[var(--sb-surface-soft)]"}`}>
                {opt.icon}
              </div>
              <div>
                <p className={`font-semibold text-base leading-tight ${selected ? "text-white" : "text-[var(--sb-text)]"}`}>
                  {opt.label}
                </p>
                {selected && <p className="text-xs text-white/70 mt-1">✓ Selected</p>}
              </div>
            </button>
          );
        })}
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 mb-5 text-sm">
          ⚠️ {error}
        </div>
      )}

      {/* Navigation */}
      <div className="flex gap-3">
        {currentStep > 0 && (
          <button onClick={onBack} className="px-6 py-3.5 rounded-xl border-2 border-[var(--sb-border)] text-[var(--sb-text-soft)] font-semibold hover:bg-[var(--sb-surface-soft)] transition-colors">
            ← Back
          </button>
        )}

        {!isLastStep ? (
          <button
            onClick={onNext}
            disabled={!hasAnswer}
            className={`px-8 py-3.5 rounded-xl font-semibold text-white transition-all
              ${hasAnswer ? "bg-[var(--sb-primary)] hover:bg-[var(--sb-primary-dark)] shadow-md hover:-translate-y-0.5" : "bg-[#b9c7be] cursor-not-allowed"}`}
          >
            Continue →
          </button>
        ) : (
          <button
            onClick={onDiagnose}
            disabled={!allAnswered || loading}
            className={`px-10 py-3.5 rounded-xl font-semibold text-white text-base transition-all
              ${allAnswered && !loading
                ? "bg-gradient-to-r from-[var(--sb-primary-dark)] to-[var(--sb-primary)] shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                : "bg-[#b9c7be] cursor-not-allowed"
              }`}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                </svg>
                Running Prolog Inference…
              </span>
            ) : "🔍 Run Diagnosis"}
          </button>
        )}
      </div>
    </div>
  );
}
