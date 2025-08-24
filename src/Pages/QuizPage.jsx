import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import QuestionCard from "../components/QuestionCard";
import questions from "../question";
import ProgressBar from "../components/ProgressBar";

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
      {/* Fixed site header */}
      <div className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <Header />
      </div>
      <div aria-hidden className="h-20" />

      {/* Progress bar at the top */}
      <div className="mx-auto max-w-3xl px-8 pt-2">
        <ProgressBar current={currentQuestion + 1} total={total} />
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-3xl px-8 pt-2 pb-40">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm md:p-2">
          {/* QuestionCard handles its own progress, navigation, and next button */}
          <div className="p-6 md:p-8">
            <QuestionCard
              question={questions[currentQuestion]}
              onAnswer={handleAnswer}
              currentAnswer={answers[currentQuestion]}
              questionIndex={currentQuestion}
              totalQuestions={total}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          </div>
        </div>
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

      <Footer />
    </div>
  );
};

export default QuizPage;
