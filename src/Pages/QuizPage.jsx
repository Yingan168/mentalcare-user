import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import QuestionCard from "../components/QuestionCard";
import questions from "../question";

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const total = questions.length;
  const progressPct = useMemo(() => {
    if (!total) return 0;
    return Math.round(((currentQuestion + 1) / total) * 100);
  }, [currentQuestion, total]);

  const handleAnswer = (option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = option;
    setAnswers(updatedAnswers);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowConfirm(true);
      }
    }, 300);
  };

  const handlePrev = () => setCurrentQuestion((q) => Math.max(0, q - 1));
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) setCurrentQuestion((q) => q + 1);
    else setShowConfirm(true);
  };

  const handleSubmit = () => {
    const score = answers.reduce((sum, ans) => sum + (ans?.weight || 0), 0);
    setShowConfirm(false);
    navigate("/result", { state: { score } });
  };

  if (!questions.length) {
    return <p className="mt-20 text-center text-slate-600">No questions available</p>;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      {/* Fixed site header (keeps Home/Exit always visible) */}
      <div className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <Header />
      </div>
      {/* Spacer so content doesn't sit under the fixed header */}
      <div aria-hidden className="h-20" />

      {/* Main content — extra bottom padding so floating buttons + fixed footer never overlap */}
      <div className="mx-auto max-w-3xl px-8 pt-2 pb-40">
        {/* Question card with meta strip built in */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm md:p-2">
          {/* Compact meta strip */}
          <div className="rounded-t-2xl p-4 md:p-5">
            <div className="flex items-end justify-between">
              <div className="flex items-baseline gap-2">
                <h2 className="text-lg font-semibold leading-tight md:text-xl">
                  Question {currentQuestion + 1}
                </h2>
                <span className="text-slate-400">/ {total}</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-white px-2.5 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
                  {progressPct}%
                </span>
                <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">
                  {answers.filter(Boolean).length} answered
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 transition-[width] duration-300"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>

          {/* Divider line for a tidy separation */}
          <div className="border-t border-slate-100" />

          {/* Question body (your existing component) */}
          <div className="p-6 md:p-8">
            <QuestionCard
              question={questions[currentQuestion]}
              onAnswer={handleAnswer}
              currentAnswer={answers[currentQuestion]}
            />
          </div>
        </div>
      </div>

      {/* FLOATING bottom controls (sits above the fixed footer) */}
      <div className="fixed inset-x-0 bottom-24 z-40 px-4 sm:px-6">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between">
          {/* Previous (outline pill) — fixed size, no wrapping */}
          <button
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            className="inline-flex h-12 w-44 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-base font-medium text-slate-800 shadow-sm whitespace-nowrap transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Go to previous question"
          >
            ← Previous
          </button>

          {/* Next/Submit (solid pill) — same fixed size */}
          {currentQuestion < total - 1 ? (
            <button
              onClick={handleNext}
              className="inline-flex h-12 w-44 items-center justify-center rounded-full bg-emerald-600 px-6 text-base font-semibold text-white shadow-[0_8px_20px_rgba(16,185,129,0.35)] whitespace-nowrap transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-100"
              aria-label="Go to next question"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={() => setShowConfirm(true)}
              className="inline-flex h-12 w-44 items-center justify-center rounded-full bg-emerald-600 px-6 text-base font-semibold text-white shadow-[0_8px_20px_rgba(16,185,129,0.35)] whitespace-nowrap transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-100"
              aria-label="Open submit confirmation"
            >
              Submit Quiz
            </button>
          )}
        </div>
        {/* Safe-area support for iOS */}
        <div className="pb-[env(safe-area-inset-bottom)]" />
      </div>

      {/* Confirm modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
          <div className="w-full max-w-lg rounded-2xl border border-slate-100 bg-white p-7 shadow-xl">
            <h2 className="text-lg font-semibold text-slate-900">Submit your quiz?</h2>
            <p className="mt-2 text-base leading-6 text-slate-600">
              You can still review answers using Previous/Next. Once submitted, we’ll show your
              result.
            </p>

            <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-base text-slate-700">
              Answered: <strong>{answers.filter(Boolean).length}</strong> / {total}
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="inline-flex h-12 w-44 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-base font-medium text-slate-800 shadow-sm whitespace-nowrap transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
              >
                Review Again
              </button>
              <button
                onClick={handleSubmit}
                className="inline-flex h-12 w-44 items-center justify-center rounded-full bg-emerald-600 px-6 text-base font-semibold text-white shadow-[0_8px_20px_rgba(16,185,129,0.35)] whitespace-nowrap transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-100"
              >
                Confirm & Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fixed footer (always visible) */}
      <Footer />
    </div>
  );
};

export default QuizPage;
