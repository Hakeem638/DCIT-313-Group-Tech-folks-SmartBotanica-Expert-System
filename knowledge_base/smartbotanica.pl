
% ── DISEASE DIAGNOSIS RULES 

diagnosis(root_rot) :-
    leaf_color(yellow),
    soil_moisture(wet),
    root_smell(foul).

diagnosis(fungal_blight) :-
    leaf_spots(brown),
    humidity(high).

diagnosis(bacterial_leaf_spot) :-
    leaf_spots(black),
    humidity(high).

diagnosis(powdery_mildew) :-
    leaf_spots(white),
    humidity(high).

% ── NUTRIENT DEFICIENCY RULES

diagnosis(nitrogen_deficiency) :-
    leaf_color(yellow),
    soil_moisture(normal).

diagnosis(iron_deficiency) :-
    leaf_color(yellow),
    leaf_spots(none).

% ── ENVIRONMENTAL STRESS RULES 

diagnosis(heat_stress) :-
    plant_wilting(yes),
    temperature(high).

diagnosis(drought_stress) :-
    soil_moisture(dry),
    plant_wilting(yes).

% ── PEST INFESTATION RULES 

diagnosis(aphid_infestation) :-
    pests_visible(yes),
    leaf_color(yellow).

diagnosis(spider_mites) :-
    pests_visible(yes),
    leaf_spots(brown).

% ── TREATMENT RECOMMENDATIONS 

treatment(root_rot, "Reduce watering immediately and allow soil to dry. Remove the plant, trim any black or mushy roots, and repot in fresh well-draining soil. Apply a fungicide drench if infection is severe.").
treatment(fungal_blight, "Apply a broad-spectrum fungicide. Improve air circulation by pruning dense foliage. Avoid overhead watering and reduce humidity where possible.").
treatment(bacterial_leaf_spot, "Remove and destroy all infected leaves. Apply a copper-based bactericide. Avoid wetting leaves when watering and ensure good air circulation.").
treatment(powdery_mildew, "Apply a sulfur-based fungicide or baking soda solution (1 tsp per litre of water). Remove heavily infected leaves and ensure good air circulation.").
treatment(nitrogen_deficiency, "Apply a nitrogen-rich fertilizer such as urea or NPK 20-10-10. For organic options use compost or blood meal. Ensure soil pH is 6.0-7.0 for optimal absorption.").
treatment(iron_deficiency, "Apply chelated iron fertilizer to the soil or as a foliar spray. Check and adjust soil pH — iron becomes unavailable above pH 7.0.").
treatment(heat_stress, "Move the plant to shade. Increase watering frequency while ensuring good drainage. Mist leaves in the early morning. Avoid fertilizing until recovered.").
treatment(drought_stress, "Water the plant thoroughly and immediately. Apply mulch around the base to retain moisture. Establish a regular watering schedule.").
treatment(aphid_infestation, "Spray with a strong jet of water to dislodge aphids. Apply insecticidal soap or neem oil. Introduce natural predators like ladybirds if possible. Repeat every 5-7 days.").
treatment(spider_mites, "Increase humidity — spider mites thrive in dry conditions. Spray with water then apply miticide or neem oil. Remove and dispose of heavily infested leaves.").

% ── CATEGORY LABELS 

category(root_rot,            "Disease").
category(fungal_blight,       "Disease").
category(bacterial_leaf_spot, "Disease").
category(powdery_mildew,      "Disease").
category(nitrogen_deficiency, "Nutrient Deficiency").
category(iron_deficiency,     "Nutrient Deficiency").
category(heat_stress,         "Environmental Stress").
category(drought_stress,      "Environmental Stress").
category(aphid_infestation,   "Pest Infestation").
category(spider_mites,        "Pest Infestation").
