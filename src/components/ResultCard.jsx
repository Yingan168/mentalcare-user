import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function ResultPage() {
  const { state } = useLocation();
  const score = state?.score || 0;
  
  let result = {};
  if (score <= 8) {
    result = {
      level: "Low Level Concerns",
      desc: "Great news! Your responses indicate minimal signs of mental health concerns. You appear to be managing well with healthy coping mechanisms and maintaining positive mental well-being overall.",
      color: "bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50",
      cardBg: "bg-white/90 backdrop-blur-sm",
      textColor: "text-emerald-700",
      borderColor: "border-emerald-200",
      emoji: "😊",
      emojiCircle: "bg-gradient-to-br from-emerald-400 to-green-500",
      tips: [
        "Maintain your current healthy lifestyle",
        "Keep engaging in activities you enjoy",
        "Continue nurturing relationships",
        "Practice self-care and mindfulness"
      ]
    };
  } else if (score <= 14) {
    result = {
      level: "Moderate Level Concerns",
      desc: "You may have some mental health concerns that could benefit from attention. While manageable, it's worth considering some additional support or lifestyle adjustments.",
      color: "bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50",
      cardBg: "bg-white/90 backdrop-blur-sm",
      textColor: "text-amber-700",
      borderColor: "border-amber-200",
      emoji: "😐",
      emojiCircle: "bg-gradient-to-br from-amber-400 to-orange-500",
      tips: [
        "Consider speaking with a counselor",
        "Try stress management techniques",
        "Maintain a consistent sleep routine",
        "Reach out to trusted friends or groups"
      ]
    };
  } else {
    result = {
      level: "High Level Concerns",
      desc: "Your responses indicate significant concerns that warrant immediate professional attention. It's important to prioritize your well-being and seek qualified support.",
      color: "bg-gradient-to-br from-red-50 via-rose-50 to-pink-50",
      cardBg: "bg-white/90 backdrop-blur-sm",
      textColor: "text-red-700",
      borderColor: "border-red-200",
      emoji: "😟",
      emojiCircle: "bg-gradient-to-br from-red-400 to-rose-500",
      tips: [
        "Schedule a professional appointment",
        "Contact healthcare services",
        "Connect with trusted family/friends",
        "Consider therapy or treatment options"
      ]
    };
  }

  return (
    <div className={`min-h-screen flex items-center justify-center p-6 ${result.color}`}>
      <div className={`${result.cardBg} p-10 rounded-3xl shadow-2xl border ${result.borderColor} max-w-2xl w-full transform transition-all duration-300`}>
        
        {/* Emoji and Header */}
        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${result.emojiCircle} shadow-lg mb-6 transform transition-transform hover:scale-105`}>
            <span className="text-5xl">{result.emoji}</span>
          </div>
          <h2 className={`text-4xl font-bold ${result.textColor} mb-4 tracking-tight`}>
            {result.level}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto">
            {result.desc}
          </p>
        </div>

        {/* Tips Section */}
        <div className="mb-8">
          <ul className="space-y-4">
            {result.tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 border border-white/40 shadow-sm hover:shadow-md transition-all duration-200">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-sm">
                  <span className="text-white text-lg font-bold">✓</span>
                </div>
                <span className="text-gray-700 text-base leading-relaxed pt-1">
                  {tip}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <div className="text-center">
          <Link to="/">
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 hover:from-green-600 hover:to-emerald-700">
              Retake Assessment
            </button>
          </Link>
        </div>
        
        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            This assessment is for informational purposes only
          </p>
        </div>
      </div>
    </div>
  );
}
