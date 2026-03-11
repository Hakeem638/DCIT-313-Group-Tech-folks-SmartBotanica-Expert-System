const RULES = [
  { id:"R1",  name:"Root Rot",             category:"Disease",              conditions:["leaf_color = yellow","soil_moisture = wet","root_smell = foul"],          prolog:"diagnosis(root_rot) :-\n  leaf_color(yellow),\n  soil_moisture(wet),\n  root_smell(foul)." },
  { id:"R2",  name:"Fungal Blight",        category:"Disease",              conditions:["leaf_spots = brown","humidity = high"],                                   prolog:"diagnosis(fungal_blight) :-\n  leaf_spots(brown),\n  humidity(high)." },
  { id:"R3",  name:"Bacterial Leaf Spot",  category:"Disease",              conditions:["leaf_spots = black","humidity = high"],                                   prolog:"diagnosis(bacterial_leaf_spot) :-\n  leaf_spots(black),\n  humidity(high)." },
  { id:"R4",  name:"Powdery Mildew",       category:"Disease",              conditions:["leaf_spots = white","humidity = high"],                                   prolog:"diagnosis(powdery_mildew) :-\n  leaf_spots(white),\n  humidity(high)." },
  { id:"R5",  name:"Nitrogen Deficiency",  category:"Nutrient Deficiency",  conditions:["leaf_color = yellow","soil_moisture = normal"],                           prolog:"diagnosis(nitrogen_deficiency) :-\n  leaf_color(yellow),\n  soil_moisture(normal)." },
  { id:"R6",  name:"Iron Deficiency",      category:"Nutrient Deficiency",  conditions:["leaf_color = yellow","leaf_spots = none"],                                prolog:"diagnosis(iron_deficiency) :-\n  leaf_color(yellow),\n  leaf_spots(none)." },
  { id:"R7",  name:"Heat Stress",          category:"Environmental Stress", conditions:["plant_wilting = yes","temperature = high"],                               prolog:"diagnosis(heat_stress) :-\n  plant_wilting(yes),\n  temperature(high)." },
  { id:"R8",  name:"Drought Stress",       category:"Environmental Stress", conditions:["soil_moisture = dry","plant_wilting = yes"],                              prolog:"diagnosis(drought_stress) :-\n  soil_moisture(dry),\n  plant_wilting(yes)." },
  { id:"R9",  name:"Aphid Infestation",    category:"Pest Infestation",     conditions:["pests_visible = yes","leaf_color = yellow"],                              prolog:"diagnosis(aphid_infestation) :-\n  pests_visible(yes),\n  leaf_color(yellow)." },
  { id:"R10", name:"Spider Mites",         category:"Pest Infestation",     conditions:["pests_visible = yes","leaf_spots = brown"],                               prolog:"diagnosis(spider_mites) :-\n  pests_visible(yes),\n  leaf_spots(brown)." },
];

const CATEGORY_COLORS = {
  "Disease":              "bg-red-100 text-red-800 border-red-200",
  "Nutrient Deficiency":  "bg-amber-100 text-amber-800 border-amber-200",
  "Environmental Stress": "bg-blue-100 text-blue-800 border-blue-200",
  "Pest Infestation":     "bg-purple-100 text-purple-800 border-purple-200",
};

export default function RulesPage({ onBack }) {
  return (
    <div>
      <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-[#4a7c59] hover:text-[#2c4a2e] mb-6 transition-colors">
        ← Back to Diagnosis
      </button>

      <div className="mb-8">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#4a7c59] mb-1">Knowledge Base</p>
        <h2 className="font-display text-4xl text-[#2c1810]">All Prolog Rules</h2>
        <p className="text-sm text-[#7a6652] mt-1">
          10 production rules stored in <code className="bg-[#f0e8d8] px-1.5 py-0.5 rounded text-xs">/knowledge_base/smartbotanica.pl</code> — the intelligence of the system
        </p>
      </div>

      {/* Architecture note */}
      <div className="bg-[#2c4a2e] text-white rounded-2xl p-5 mb-8 flex items-start gap-4">
        <div className="text-3xl">🧠</div>
        <div>
          <p className="font-semibold text-[#a8d5a2] text-sm mb-1">KBS Separation of Concerns</p>
          <p className="text-xs text-white/70 leading-relaxed">
            All intelligence is stored as logical rules in SWI-Prolog — NOT hard-coded in Python if-else statements.
            The Python (pyswip) layer only passes facts and retrieves conclusions. This is the correct KBS architecture.
          </p>
        </div>
      </div>

      <div className="grid gap-4">
        {RULES.map(rule => (
          <div key={rule.id} className="bg-white rounded-2xl border border-[#d4c4a8] overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#f0e8d8]">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-[#2c4a2e] text-[#a8d5a2] flex items-center justify-center font-bold text-sm">{rule.id}</span>
                <div>
                  <h3 className="font-semibold text-[#2c1810]">{rule.name}</h3>
                  <span className={`text-[10px] font-bold uppercase tracking-wider border px-2 py-0.5 rounded-full ${CATEGORY_COLORS[rule.category]}`}>
                    {rule.category}
                  </span>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#f0e8d8]">
              <div className="px-6 py-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#4a7c59] mb-2">Conditions (IF)</p>
                <div className="space-y-1">
                  {rule.conditions.map((c, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4a7c59] flex-shrink-0"></span>
                      <code className="text-xs text-[#2c1810] font-mono">{c}</code>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-6 py-4 bg-[#1a2e1c]">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#a8d5a2] mb-2">Prolog Rule</p>
                <pre className="text-xs text-[#7fd8a0] font-mono leading-6 whitespace-pre-wrap">{rule.prolog}</pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}