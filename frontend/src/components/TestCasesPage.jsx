import { useState } from "react";

const TEST_CASES = [
  {
    id: "TC1",
    name: "Fungal Blight",
    description: "Brown spots on leaves in humid environment",
    facts: { plant_type:"tomato", leaf_color:"green", leaf_spots:"brown", plant_wilting:"no", soil_moisture:"normal", humidity:"high", temperature:"moderate", stem_color:"green", root_smell:"normal", pests_visible:"no" },
    expected: "Fungal Blight",
  },
  {
    id: "TC2",
    name: "Drought Stress",
    description: "Dry soil with wilting plant",
    facts: { plant_type:"maize", leaf_color:"green", leaf_spots:"none", plant_wilting:"yes", soil_moisture:"dry", humidity:"low", temperature:"moderate", stem_color:"brown", root_smell:"normal", pests_visible:"no" },
    expected: "Drought Stress",
  },
  {
    id: "TC3",
    name: "Nitrogen Deficiency",
    description: "Yellow leaves with normal soil moisture",
    facts: { plant_type:"houseplant", leaf_color:"yellow", leaf_spots:"none", plant_wilting:"no", soil_moisture:"normal", humidity:"medium", temperature:"moderate", stem_color:"green", root_smell:"normal", pests_visible:"no" },
    expected: "Nitrogen Deficiency",
  },
  {
    id: "TC4",
    name: "Root Rot",
    description: "Yellow leaves, waterlogged soil, foul smell",
    facts: { plant_type:"rose", leaf_color:"yellow", leaf_spots:"none", plant_wilting:"no", soil_moisture:"wet", humidity:"high", temperature:"moderate", stem_color:"brown", root_smell:"foul", pests_visible:"no" },
    expected: "Root Rot",
  },
  {
    id: "TC5",
    name: "No Match (Negative Case)",
    description: "Healthy plant — should return no diagnosis",
    facts: { plant_type:"tomato", leaf_color:"green", leaf_spots:"none", plant_wilting:"no", soil_moisture:"normal", humidity:"medium", temperature:"moderate", stem_color:"green", root_smell:"normal", pests_visible:"no" },
    expected: null,
  },
];

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

  return (
    <div>
      <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-[#4a7c59] hover:text-[#2c4a2e] mb-6 transition-colors">
        ← Back to Diagnosis
      </button>

      <div className="mb-6 flex items-end justify-between flex-wrap gap-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#4a7c59] mb-1">Logic Integrity</p>
          <h2 className="font-display text-4xl text-[#2c1810]">Test Cases</h2>
          <p className="text-sm text-[#7a6652] mt-1">Verifying the system produces correct diagnoses for known inputs</p>
        </div>
        <div className="flex items-center gap-3">
          {ranCount > 0 && (
            <span className={`text-sm font-bold px-4 py-2 rounded-xl ${passCount === ranCount ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
              {passCount}/{ranCount} Passed
            </span>
          )}
          <button
            onClick={runAll}
            className="px-6 py-2.5 rounded-xl bg-[#4a7c59] text-white font-semibold hover:bg-[#2c4a2e] transition-colors shadow-md"
          >
            ▶ Run All Tests
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {TEST_CASES.map(tc => {
          const status = getStatus(tc);
          const result = results[tc.id];
          const isLoading = loading[tc.id];

          return (
            <div key={tc.id} className={`bg-white rounded-2xl border-2 overflow-hidden transition-all
              ${status === "pass" ? "border-green-300" : status === "fail" ? "border-red-300" : "border-[#d4c4a8]"}`}>
              <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-[#f5efe6] text-[#4a7c59] flex items-center justify-center font-bold text-xs">{tc.id}</span>
                  <div>
                    <h3 className="font-semibold text-[#2c1810]">{tc.name}</h3>
                    <p className="text-xs text-[#9a8470]">{tc.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {status === "pass" && <span className="text-green-600 font-bold text-sm">✓ PASS</span>}
                  {status === "fail" && <span className="text-red-600 font-bold text-sm">✗ FAIL</span>}
                  {status === "error" && <span className="text-orange-600 font-bold text-sm">⚠ ERROR</span>}
                  <button
                    onClick={() => runTest(tc)}
                    disabled={isLoading}
                    className="px-4 py-2 rounded-xl bg-[#f5efe6] text-[#4a7c59] font-semibold text-sm hover:bg-[#e8ddd0] transition-colors"
                  >
                    {isLoading ? "Running…" : "Run"}
                  </button>
                </div>
              </div>

              {result && !result.error && (
                <div className="px-6 pb-4 border-t border-[#f0e8d8] pt-3">
                  <div className="grid sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <p className="font-bold uppercase tracking-wider text-[#9a8470] mb-1">Expected</p>
                      <p className="text-[#2c1810] font-semibold">{tc.expected ?? "No diagnosis"}</p>
                    </div>
                    <div>
                      <p className="font-bold uppercase tracking-wider text-[#9a8470] mb-1">Got</p>
                      <p className="text-[#2c1810] font-semibold">
                        {result.diagnoses.length > 0
                          ? result.diagnoses.map(d => d.displayName).join(", ")
                          : "No diagnosis"}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {result?.error && (
                <div className="px-6 pb-4 text-xs text-red-600">{result.error}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}