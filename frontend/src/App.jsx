import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Stepper from "./components/Stepper";
import ResultPanel from "./components/ResultPanel";
import RulesPage from "./components/RulesPage";
import TestCasesPage from "./components/TestCasesPage";
import AboutPage from "./components/AboutPage";

const STEPS = [
  { attr:"plant_type",    label:"Plant Type",    question:"What type of plant are you examining?",      hint:"Select the category that best describes your plant.",           options:[{value:"tomato",label:"Tomato",icon:"🍅"},{value:"maize",label:"Maize",icon:"🌽"},{value:"rose",label:"Rose",icon:"🌹"},{value:"houseplant",label:"Houseplant",icon:"🪴"},{value:"other",label:"Other",icon:"🌿"}]},
  { attr:"leaf_color",    label:"Leaf Colour",   question:"What colour are the leaves?",                hint:"Observe the majority of the plant's leaves.",                  options:[{value:"green",label:"Green (Normal)",icon:"💚"},{value:"yellow",label:"Yellow",icon:"💛"},{value:"brown",label:"Brown",icon:"🟤"},{value:"black",label:"Black",icon:"⚫"}]},
  { attr:"leaf_spots",    label:"Leaf Spots",    question:"Are there spots on the leaves?",             hint:"Check the surface of leaves for visible spots or lesions.",    options:[{value:"none",label:"No Spots",icon:"🚫"},{value:"brown",label:"Brown Spots",icon:"🟤"},{value:"black",label:"Black Spots",icon:"⚫"},{value:"white",label:"White Spots",icon:"⬜"}]},
  { attr:"plant_wilting", label:"Wilting",       question:"Is the plant wilting or drooping?",          hint:"Wilting means the plant has lost its upright rigidity.",       options:[{value:"yes",label:"Yes, wilting",icon:"😔"},{value:"no",label:"No, looks normal",icon:"✅"}]},
  { attr:"soil_moisture", label:"Soil Moisture", question:"What is the soil moisture level?",           hint:"Press your finger 2cm into the soil to check.",               options:[{value:"dry",label:"Dry",icon:"🏜️"},{value:"normal",label:"Normal / Moist",icon:"🌱"},{value:"wet",label:"Wet / Waterlogged",icon:"💧"}]},
  { attr:"humidity",      label:"Humidity",      question:"How humid is the environment?",              hint:"Consider the climate or growing environment.",                options:[{value:"low",label:"Low Humidity",icon:"☀️"},{value:"medium",label:"Medium Humidity",icon:"🌤️"},{value:"high",label:"High Humidity",icon:"🌧️"}]},
  { attr:"temperature",   label:"Temperature",   question:"What is the temperature like?",              hint:"Think about the current season or conditions.",               options:[{value:"low",label:"Low / Cold",icon:"🥶"},{value:"moderate",label:"Moderate",icon:"🌡️"},{value:"high",label:"High / Hot",icon:"🥵"}]},
  { attr:"stem_color",    label:"Stem Colour",   question:"What colour is the stem?",                  hint:"Check the main stem near the base of the plant.",             options:[{value:"green",label:"Green",icon:"💚"},{value:"brown",label:"Brown",icon:"🟤"},{value:"black",label:"Black",icon:"⚫"}]},
  { attr:"root_smell",    label:"Root Smell",    question:"Does the soil or root smell foul?",          hint:"Dig gently near the base. Foul smell may indicate root decay.",options:[{value:"normal",label:"Normal / Earthy",icon:"👃"},{value:"foul",label:"Foul / Rotten",icon:"🤢"}]},
  { attr:"pests_visible", label:"Pests Visible", question:"Are any pests visible on the plant?",        hint:"Look under leaves and on stems for insects or mites.",         options:[{value:"yes",label:"Yes, I see pests",icon:"🐛"},{value:"no",label:"No pests visible",icon:"✅"}]},
];

export default function App() {
  const [page,        setPage]        = useState("home"); // home | result | rules | tests | about
  const [currentStep, setCurrentStep] = useState(0);
  const [answers,     setAnswers]     = useState({});
  const [result,      setResult]      = useState(null);
  const [loading,     setLoading]     = useState(false);
  const [error,       setError]       = useState(null);

  const handleSelect = (attr, value) => setAnswers(p => ({ ...p, [attr]: value }));
  const handleNext   = () => { if (currentStep < STEPS.length - 1) setCurrentStep(s => s + 1); };
  const handleBack   = () => { if (currentStep > 0) setCurrentStep(s => s - 1); };
  const isLastStep   = currentStep === STEPS.length - 1;
  const allAnswered  = STEPS.every(s => answers[s.attr]);

  const handleDiagnose = async () => {
    setLoading(true); setError(null);
    try {
      const res  = await fetch("http://localhost:5000/api/diagnose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ facts: answers }),
      });
      const data = await res.json();
      setResult(data);
      setPage("result");
    } catch {
      setError("Could not connect to backend. Make sure app.py is running on port 5000.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setCurrentStep(0); setAnswers({}); setResult(null); setError(null); setPage("home");
  };

  return (
    <div className="min-h-screen bg-[var(--sb-bg)] text-[var(--sb-text)]">
      <Header onNav={setPage} currentPage={page} />
      <main className="w-full max-w-[1600px] mx-auto px-4 md:px-6 xl:px-8 py-8">

        {page === "home" && (
          <div className="space-y-6">
            <section className="rounded-[28px] overflow-hidden border border-[var(--sb-border)] bg-[var(--sb-surface)] shadow-sm">
              <div
                className="relative min-h-[340px] md:min-h-[400px] xl:min-h-[440px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1800&q=80')",
                }}
              >
                <div className="absolute inset-0 leaf-photo-overlay" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/10" />
                <div className="relative z-10 grid lg:grid-cols-[minmax(0,1.4fr)_360px] gap-6 h-full p-6 md:p-8 xl:p-10 items-end">
                  <div className="max-w-3xl space-y-4 self-end">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
                      🌿 Smart Diagnosis Experience
                    </span>
                    <div className="space-y-3">
                      <h2 className="font-display text-white text-4xl md:text-5xl xl:text-6xl leading-[1.05]">
                        A modern plant diagnosis website powered by Prolog inference
                      </h2>
                      <p className="max-w-2xl text-sm md:text-base text-white/80 leading-relaxed">
                        Capture symptoms step by step, evaluate knowledge-base rules instantly, and get focused treatment recommendations in a cleaner, more professional interface.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 md:gap-4 lg:self-end">
                    {[
                      { label: "Rules", value: "10" },
                      { label: "Inputs", value: "10" },
                      { label: "Categories", value: "4" },
                      { label: "Inference", value: "Live" },
                    ].map((stat) => (
                      <div key={stat.label} className="glass-panel border border-white/15 rounded-2xl p-4 text-white shadow-lg">
                        <p className="text-2xl md:text-3xl font-display">{stat.value}</p>
                        <p className="text-[11px] uppercase tracking-[0.18em] text-white/70 mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <div className="grid grid-cols-1 xl:grid-cols-[20rem_minmax(0,1fr)] gap-6 items-start">
              <Sidebar steps={STEPS} currentStep={currentStep} answers={answers} />
              <div className="flex-1 bg-[var(--sb-surface)] rounded-[28px] shadow-sm border border-[var(--sb-border)] p-6 md:p-8 xl:p-10">
                <Stepper
                  steps={STEPS} currentStep={currentStep} answers={answers}
                  onSelect={handleSelect} onNext={handleNext} onBack={handleBack}
                  onDiagnose={handleDiagnose} loading={loading} error={error}
                  isLastStep={isLastStep} allAnswered={allAnswered}
                />
              </div>
            </div>
          </div>
        )}

        {page === "result" && result && (
          <ResultPanel result={result} answers={answers} steps={STEPS} onReset={handleReset} />
        )}

        {page === "rules" && <RulesPage onBack={() => setPage("home")} />}
        {page === "tests" && <TestCasesPage onBack={() => setPage("home")} />}
        {page === "about" && <AboutPage onBack={() => setPage("home")} />}

      </main>
    </div>
  );
}
