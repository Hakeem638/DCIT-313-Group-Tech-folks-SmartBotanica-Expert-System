"""
SmartBotanica Expert System — Flask Backend
Authors: Mubarack Jibriel & Emmanuel Sarfo Attah-Nimoh
Course:  DCIT 313
"""

import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from pyswip import Prolog

app = Flask(__name__)
CORS(app)

prolog = Prolog()
KB_PATH = os.path.join(os.path.dirname(__file__), "..", "knowledge_base", "smartbotanica.pl")
prolog.consult(KB_PATH)


def to_str(value):
    """Convert pyswip bytes or Atom to plain Python string."""
    if isinstance(value, bytes):
        return value.decode("utf-8")
    return str(value)


def assert_facts(facts):
    for attr, val in facts.items():
        prolog.assertz(f"{attr}({val})")


def retract_facts(facts):
    for attr, val in facts.items():
        try:
            prolog.retract(f"{attr}({val})")
        except Exception:
            pass


@app.route("/api/diagnose", methods=["POST"])
def diagnose():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No data received"}), 400

    facts = data.get("facts", {})
    assert_facts(facts)

    results = []
    try:
        # Collect ALL diagnoses first so the query is fully closed
        diseases = [to_str(s["Disease"]) for s in prolog.query("diagnosis(Disease)")]

        for disease in diseases:
            # Each sub-query fully consumed before the next one opens
            treatment_list = list(prolog.query(f"treatment({disease}, Treatment)"))
            treatment = to_str(treatment_list[0]["Treatment"]) if treatment_list else "Consult an agricultural expert."

            category_list = list(prolog.query(f"category({disease}, Category)"))
            category = to_str(category_list[0]["Category"]) if category_list else "General"

            results.append({
                "disease":     disease,
                "displayName": disease.replace("_", " ").title(),
                "treatment":   treatment,
                "category":    category,
            })
    finally:
        retract_facts(facts)

    return jsonify({"success": True, "diagnoses": results, "factsUsed": facts})


@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"status": "ok", "system": "SmartBotanica"})


if __name__ == "__main__":
    print("SmartBotanica backend running at http://localhost:5000")
    app.run(debug=True, port=5000)