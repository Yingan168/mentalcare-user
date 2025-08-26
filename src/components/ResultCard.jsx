import React from "react";
import { Link } from "react-router-dom";

export default function ResultCard({ result }) {
  // ✅ REMOVED: The hardcoded resultStyles object is gone.
  
  // Provide a default structure to prevent errors if data is missing
  const {
    color = "bg-gray-100",
    borderColor = "border-gray-200",
    emojiCircle = "bg-gray-400",
    emoji = "🤔",
    textColor = "text-gray-800",
    level = "Result Unavailable",
    desc = "Please retake the assessment to see your results.",
    tips = ["No recommendations available."]
  } = result || {};

  return (
    <div className={`w-full flex flex-col items-center justify-center p-4 md:p-8 ${color} rounded-2xl shadow-lg border ${borderColor} transition-all duration-300`}>
      <div className="text-center mb-6">
        <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full ${emojiCircle} shadow-lg mb-4`}>
          <span className="text-3xl md:text-5xl">{emoji}</span>
        </div>
        <h2 className={`text-2xl md:text-3xl font-bold ${textColor} mb-2 tracking-tight`}>{level}</h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto">{desc}</p>
      </div>

      <div className="mb-6 w-full">
        <ul className="space-y-3">
          {/* ✅ CHANGED: It now renders the 'tips' array directly from the result prop */}
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-3 p-3 rounded-xl bg-white/70 border border-white/40 shadow-sm">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-sm">
                <span className="text-white text-base font-bold">✓</span>
              </div>
              <span className="text-gray-700 text-sm md:text-base leading-relaxed pt-1">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center">
        <Link to="/quiz">
          <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-7 py-3 rounded-xl font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
            Retake Assessment
          </button>
        </Link>
      </div>

      <div className="text-center mt-4">
        <p className="text-xs md:text-sm text-gray-500">
          This assessment is for informational purposes only
        </p>
      </div>
    </div>
  );
}