import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import Header from "../components/Header";
import ResultCard from "../components/ResultCard";

export default function ResultPage() {
  const location = useLocation();
  
  // Get the result directly from the navigation state
  const result = location.state;

  // ADD THIS LINE FOR DEBUGGING
  console.log("Data received on Result Page:", result);

  // If the user lands on this page directly without results, redirect them
  if (!result) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen text-slate-900 antialiased flex flex-col items-center justify-center bg-gradient-to-b from-emerald-50 via-white to-white">
     
      <main className="max-w-full sm:max-w-2xl md:px-6 sm:px-4 py-6 md:py-24 sm:py-10 flex flex-col items-center justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-700 mb-4 text-center">Your Assessment Result</h1>
        <ResultCard result={result} />
        <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-slate-500">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-2 sm:px-3 py-1 ring-1 ring-slate-200 backdrop-blur-sm">
            <span className="inline-block h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-emerald-500/70" />
            Summary generated for educational purposes
          </span>
          <span className="mx-1 sm:mx-2 hidden align-middle text-slate-400 sm:inline">•</span>
          <span className="align-middle">Consider professional help if you have urgent concerns.</span>
        </div>
      </main>
    </div>
  );
}