import React from "react";
import { useLocation } from "react-router-dom"; // ✅ CHANGED: Import useLocation
import Header from "../components/Header";
import ResultCard from "../components/ResultCard";

export default function ResultPage() {
  const location = useLocation(); // ✅ CHANGED: Call the hook to get location data

  // ✅ CHANGED: Get both score and riskLevel from location.state, with fallbacks
  const score = location.state?.score || 0;
  const riskLevel = location.state?.riskLevel || "Unavailable";

  return (
    <div className="min-h-screen text-slate-900 antialiased flex flex-col items-center justify-center bg-gradient-to-b from-emerald-50 via-white to-white">
      <Header />
      <main className="w-full max-w-2xl px-4 py-10 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-6 text-center">Your Assessment Result</h1>
        
        {/* ✅ CHANGED: Pass both score and riskLevel to the ResultCard */}
        <ResultCard score={score} riskLevel={riskLevel} />

        <div className="mt-8 text-center text-sm text-slate-500">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 ring-1 ring-slate-200 backdrop-blur-sm">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
            Summary generated for educational purposes
          </span>
          <span className="mx-2 hidden align-middle text-slate-400 sm:inline">•</span>
          <span className="align-middle">Consider professional help if you have urgent concerns.</span>
        </div>
      </main>
    </div>
  );
}