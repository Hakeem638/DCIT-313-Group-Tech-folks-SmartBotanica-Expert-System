import { useState } from "react";

const TEST_CASES = [
  {
    id: "TC1",
    name: "Fungal Blight",
    description: "Brown spots on leaves in humid environment",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
    accent: "from-emerald-500/80 to-green-900/70",
    facts: { plant_type:"tomato", leaf_color:"green", leaf_spots:"brown", plant_wilting:"no", soil_moisture:"normal", humidity:"high", temperature:"moderate", stem_color:"green", root_smell:"normal", pests_visible:"no" },
    expected: "Fungal Blight",
  },
  {
    id: "TC2",
    name: "Drought Stress",
    description: "Dry soil with wilting plant",
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=1200&q=80",
    accent: "from-amber-500/75 to-orange-900/70",
    facts: { plant_type:"maize", leaf_color:"green", leaf_spots:"none", plant_wilting:"yes", soil_moisture:"dry", humidity:"low", temperature:"moderate", stem_color:"brown", root_smell:"normal", pests_visible:"no" },
    expected: "Drought Stress",
  },
  {
    id: "TC3",
    name: "Nitrogen Deficiency",
    description: "Yellow leaves with normal soil moisture",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80",
    accent: "from-lime-500/75 to-emerald-900/70",
    facts: { plant_type:"houseplant", leaf_color:"yellow", leaf_spots:"none", plant_wilting:"no", soil_moisture:"normal", humidity:"medium", temperature:"moderate", stem_color:"green", root_smell:"normal", pests_visible:"no" },
    expected: "Nitrogen Deficiency",
  },
  {
    id: "TC4",
    name: "Root Rot",
    description: "Yellow leaves, waterlogged soil, foul smell",
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=1200&q=80",
    accent: "from-teal-500/75 to-slate-900/70",
    facts: { plant_type:"rose", leaf_color:"yellow", leaf_spots:"none", plant_wilting:"no", soil_moisture:"wet", humidity:"high", temperature:"moderate", stem_color:"brown", root_smell:"foul", pests_visible:"no" },
    expected: "Root Rot",
  },
  {
    id: "TC5",
    name: "No Match (Negative Case)",
    description: "Healthy plant — should return no diagnosis",
    image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=1200&q=80",
    accent: "from-green-500/70 to-emerald-900/65",
    facts: { plant_type:"tomato", leaf_color:"green", leaf_spots:"none", plant_wilting:"no", soil_moisture:"normal", humidity:"medium", temperature:"moderate", stem_color:"green", root_smell:"normal", pests_visible:"no" },
    expected: null,
  },
];

const statusStyle = {
  pass: "bg-green-100 text-green-800 border-green-200",
  fail: "bg-red-100 text-red-800 border-red-200",
  error: "bg-orange-100 text-orange-800 border-orange-200",
  idle: "bg-white/85 text-[var(--sb-text-soft)] border-white/40",
};

export default function TestCasesPage({ onBack }) {
  const [results, setResults]   = useState({});
  const [loading, setLoading]   = useState({});

  const runTest = async (tc) => {
    setLoading(p => ({ ...p, [tc.id]: true }));
    try {
      const res  = await fetch("http://localhost:5000/api/diagnose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ facts: tc.facts }),
      });
      const data = await res.json();
      setResults(p => ({ ...p, [tc.id]: data }));
    } catch {
      setResults(p => ({ ...p, [tc.id]: { error: "Backend not connected" } }));
    } finally {
      setLoading(p => ({ ...p, [tc.id]: false }));
    }
  };

  const runAll = async () => {
    for (const tc of TEST_CASES) await runTest(tc);
  };

  const getStatus = (tc) => {
    const r = results[tc.id];
    if (!r) return null;
    if (r.error) return "error";
    const names = r.diagnoses.map(d => d.displayName);
    if (tc.expected === null) return r.diagnoses.length === 0 ? "pass" : "fail";
    return names.some(n => n.toLowerCase().includes(tc.expected.toLowerCase())) ? "pass" : "fail";
  };

  const passCount = TEST_CASES.filter(tc => getStatus(tc) === "pass").length;
  const ranCount  = TEST_CASES.filter(tc => results[tc.id]).length;
  const failCount = TEST_CASES.filter(tc => getStatus(tc) === "fail").length;

  return (
    <div>
      <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-[var(--sb-primary)] hover:text-[var(--sb-primary-dark)] mb-6 transition-colors">
        ← Back to Diagnosis
      </button>

      <section className="rounded-[28px] overflow-hidden border border-[var(--sb-border)] bg-[var(--sb-surface)] shadow-sm mb-6">
        <div
          className="relative min-h-[280px] md:min-h-[320px] bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=1800&q=80')",
          }}
        >
          <div className="absolute inset-0 leaf-photo-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/10" />
          <div className="relative z-10 grid lg:grid-cols-[minmax(0,1.5fr)_420px] gap-6 p-6 md:p-8 xl:p-10 h-full items-end">
            <div className="space-y-4 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90">
                ✅ Testing Dashboard
              </span>
              <div className="space-y-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/75">Logic Integrity</p>
                <h2 className="font-display text-4xl md:text-5xl text-white leading-[1.05]">Run realistic plant diagnosis test cases in a cleaner lab-style view</h2>
                <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-2xl">
                  Validate expected diagnoses, compare outputs quickly, and present the testing workflow like a polished modern expert-system website.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[
                { label: "Total Cases", value: TEST_CASES.length },
                { label: "Ran", value: ranCount },
                { label: "Passed", value: passCount },
                { label: "Failed", value: failCount },
              ].map((stat) => (
                <div key={stat.label} className="glass-panel border border-white/15 rounded-2xl p-4 text-white shadow-lg">
                  <p className="font-display text-3xl">{stat.value}</p>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/70 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mb-6 flex items-center justify-between flex-wrap gap-4 rounded-2xl border border-[var(--sb-border)] bg-white px-5 py-4 shadow-sm">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-sm font-semibold text-[var(--sb-text-soft)]">Quick actions</span>
          {ranCount > 0 && (
            <span className={`text-sm font-bold px-4 py-2 rounded-xl border ${passCount === ranCount ? "bg-green-100 text-green-800 border-green-200" : "bg-red-100 text-red-800 border-red-200"}`}>
              {passCount}/{ranCount} Passed
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={runAll}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-[var(--sb-primary-dark)] to-[var(--sb-primary)] text-white font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <span>▶</span>
            <span>Run All Tests</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-5">
        {TEST_CASES.map(tc => {
          const status = getStatus(tc);
          const result = results[tc.id];
          const isLoading = loading[tc.id];
          const currentStyle = statusStyle[status || "idle"];

          return (
            <article key={tc.id} className={`bg-white rounded-[28px] border-2 overflow-hidden transition-all shadow-sm hover:shadow-lg ${
              status === "pass" ? "border-green-300" : status === "fail" ? "border-red-300" : "border-[var(--sb-border)]"
            }`}>
              <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: `url('${tc.image}')` }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${tc.accent}`} />
                <div className="absolute inset-x-0 top-0 p-5 flex items-start justify-between gap-3">
                  <span className="inline-flex items-center rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-2 text-xs font-bold text-white tracking-[0.18em] uppercase">
                    {tc.id}
                  </span>
                  <span className={`inline-flex items-center rounded-xl border px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] ${currentStyle}`}>
                    {status === "pass" ? "Pass" : status === "fail" ? "Fail" : status === "error" ? "Error" : "Ready"}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="font-display text-3xl leading-tight">{tc.name}</h3>
                  <p className="text-sm text-white/85 mt-2 max-w-xl">{tc.description}</p>
                </div>
              </div>

              <div className="p-5 md:p-6 space-y-5">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: "Plant", value: tc.facts.plant_type },
                    { label: "Leaf", value: tc.facts.leaf_color },
                    { label: "Moisture", value: tc.facts.soil_moisture },
                    { label: "Expected", value: tc.expected ?? "No diagnosis" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-[var(--sb-border)] bg-[var(--sb-surface-soft)] px-4 py-3">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--sb-text-soft)] font-bold">{item.label}</p>
                      <p className="text-sm font-semibold text-[var(--sb-text)] capitalize mt-1">{String(item.value).replace(/_/g, " ")}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    {status === "pass" && <span className="text-green-600 font-bold text-sm">✓ PASS</span>}
                    {status === "fail" && <span className="text-red-600 font-bold text-sm">✗ FAIL</span>}
                    {status === "error" && <span className="text-orange-600 font-bold text-sm">⚠ ERROR</span>}
                    {!status && <span className="text-[var(--sb-text-soft)] font-semibold text-sm">Ready to test</span>}
                  </div>
                  <button
                    onClick={() => runTest(tc)}
                    disabled={isLoading}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[var(--sb-surface-soft)] border border-[var(--sb-border)] text-[var(--sb-primary)] font-semibold text-sm hover:bg-[#eaf4ec] hover:-translate-y-0.5 transition-all"
                  >
                    <span>{isLoading ? "⏳" : "🧪"}</span>
                    <span>{isLoading ? "Running…" : "Run Test"}</span>
                  </button>
                </div>

                {result && !result.error && (
                  <div className="rounded-2xl border border-[#edf3ee] bg-[#fbfdfb] px-4 py-4">
                    <div className="grid sm:grid-cols-2 gap-4 text-xs">
                      <div className="rounded-2xl bg-white border border-[var(--sb-border)] p-4">
                        <p className="font-bold uppercase tracking-wider text-[var(--sb-text-soft)] mb-1">Expected</p>
                        <p className="text-[var(--sb-text)] font-semibold">{tc.expected ?? "No diagnosis"}</p>
                      </div>
                      <div className="rounded-2xl bg-white border border-[var(--sb-border)] p-4">
                        <p className="font-bold uppercase tracking-wider text-[var(--sb-text-soft)] mb-1">Got</p>
                        <p className="text-[var(--sb-text)] font-semibold leading-relaxed">
                          {result.diagnoses.length > 0
                            ? result.diagnoses.map(d => d.displayName).join(", ")
                            : "No diagnosis"}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {result?.error && (
                  <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 font-medium">
                    {result.error}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}