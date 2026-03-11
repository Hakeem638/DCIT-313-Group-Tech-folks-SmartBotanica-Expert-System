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
    <div className="min-h-screen bg-[#f5efe6]">
      <Header onNav={setPage} currentPage={page} />
      <main className="max-w-5xl mx-auto px-4 py-8">

        {page === "home" && (
          <div className="flex gap-6 items-start">
            <Sidebar steps={STEPS} currentStep={currentStep} answers={answers} />
            <div className="flex-1 bg-white rounded-2xl shadow-sm border border-[#d4c4a8] p-8">
              <Stepper
                steps={STEPS} currentStep={currentStep} answers={answers}
                onSelect={handleSelect} onNext={handleNext} onBack={handleBack}
                onDiagnose={handleDiagnose} loading={loading} error={error}
                isLastStep={isLastStep} allAnswered={allAnswered}
              />
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