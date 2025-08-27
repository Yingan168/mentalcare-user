import React from "react";
import { Link } from "react-router-dom";

// This object defines the unique styles for each possible risk level.
const resultStyles = {
  "Low Concern": {
    color: "bg-emerald-50",
    borderColor: "border-emerald-200",
    emojiCircle: "bg-emerald-500",
    emoji: "😊",
    textColor: "text-emerald-800",
  },
  "Moderate Concern": {
    color: "bg-amber-50",
    borderColor: "border-amber-200",
    emojiCircle: "bg-amber-500",
    emoji: "😐",
    textColor: "text-amber-800",
  },
  "High Concern": {
    color: "bg-red-50",
    borderColor: "border-red-200",
    emojiCircle: "bg-red-500",
    emoji: "😟",
    textColor: "text-red-800",
  },
  // A default style for unavailable results
  "Default": {
    color: "bg-gray-100",
    borderColor: "border-gray-200",
    emojiCircle: "bg-gray-400",
    emoji: "🤔",
    textColor: "text-gray-800",
  }
};

export default function ResultCard({ result }) {
  // If data is missing, show the default "Unavailable" card.
  if (!result || !result.riskLevel || !result.recommendation || !result.recommendation.summary) {
    const theme = resultStyles.Default;
    return (
      <div className={`w-full flex flex-col items-center justify-center p-4 md:p-8 ${theme.color} rounded-2xl shadow-lg border ${theme.borderColor} max-w-md sm:max-w-lg mx-auto`}>
        <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full ${theme.emojiCircle} shadow-lg mb-4`}>
          <span className="text-4xl sm:text-5xl">{theme.emoji}</span>
        </div>
        <h2 className={`text-2xl sm:text-3xl font-bold ${theme.textColor} mb-2`}>Result Unavailable</h2>
        <p className="text-gray-600 text-base sm:text-lg text-center">Please retake the assessment to see your results.</p>
        <div className="mt-6 w-full flex justify-center">
          <Link to="/">
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-2 sm:px-7 sm:py-3 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // If data IS available, map it to the correct styles and text
  const theme = resultStyles[result.riskLevel] || resultStyles.Default;
  const level = result.riskLevel;
  const summary = result.recommendation.summary;
  const tips = result.recommendation.tips;

  return (
    <div className={`w-full flex flex-col items-center justify-center p-4 md:p-8 ${theme.color} rounded-2xl shadow-lg border ${theme.borderColor} max-w-md sm:max-w-lg mx-auto transition-all duration-300`}>
      <div className="text-center mb-6">
        <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full ${theme.emojiCircle} shadow-lg mb-4`}>
          <span className="text-4xl sm:text-5xl">{theme.emoji}</span>
        </div>
        <h2 className={`text-2xl sm:text-3xl font-bold ${theme.textColor} mb-2 tracking-tight`}>{level}</h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xs sm:max-w-xl mx-auto text-center">{summary}</p>
      </div>
      <div className="mb-6 w-full">
        <ul className="space-y-2 sm:space-y-3">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl bg-white/70 border border-white/40 shadow-sm">
              <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-sm">
                <span className="text-white text-base font-bold">✓</span>
              </div>
              <span className="text-gray-700 text-xs sm:text-base leading-relaxed pt-1">{tip}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center w-full flex justify-center">
        <Link to="/">
          <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-2 sm:px-7 sm:py-3 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
            Retake Assessment
          </button>
        </Link>
      </div>
    </div>
  );
}