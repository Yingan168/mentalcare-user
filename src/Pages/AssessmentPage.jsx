import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/ProgressBar";
import { getJSON, postJSON } from "../service/apiClient";
// import resultPage from "./ResultPage.jsx";

const AssessmentPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // ✅ CHANGED: This effect now ONLY fetches questions.
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const questionsData = await getJSON("/api/questions");

        // ✅ UPDATED: This now perfectly matches your JSON format
        const formattedQuestions = questionsData.map(q => ({
          id: q.id,
          question: q.text, // Map 'text' to 'question'
          options: q.choices.map(choice => ({
            text: choice.label,  // Map 'label' to 'text'
            weight: choice.value // Map 'value' to 'weight'
          }))
        }));

        setQuestions(formattedQuestions); // Save the correctly formatted data
      } catch (err) {
        setError("Failed to load questions. Please try again later.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    loadQuestions();
  }, []); // Empty array ensures this runs only once

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

  const handleSubmit = async () => {
    setShowConfirm(false);

    const gender = localStorage.getItem("userGender");
    const specialization = localStorage.getItem("userSpecialization");
     // ✅ FIX: Use the correct item from localStorage
    const inviteCode = localStorage.getItem("inviteCode"); // Or whatever you named it
    const answersData = answers.map((a) => a?.weight ?? 0);

    try {
      // The endpoint now returns the calculated result
      const result = await postJSON("/api/assessments/submit", {
        answers: answersData,
        specialization,
        gender,
        // ✅ FIX: Use the correct key name "inviteCode"
        inviteCode: inviteCode,
      });

      // ✅ FIX: Pass the data you actually have to the result page
      navigate("/result", { 
        state: { 
          riskLevel: result.riskLevel, 
          recommendation: result.recommendation // Pass the new recommendation field
        } 
      });
      
    } catch (err) {
      console.error("Submission failed:", err);
      // You might want to show an error to the user here
    }
  };

  if (isLoading) {
    return <p className="mt-20 text-center text-slate-600">Loading questions...</p>;
  }
  if (error) {
    return <p className="mt-20 text-center text-red-600">{error}</p>;
  }
  if (!questions.length) {
    return <p className="mt-20 text-center text-slate-600">No questions available</p>;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <Header />
      </div>
      <div aria-hidden className="h-20" />
      <div className="mx-auto max-w-3xl px-8 pt-2">
        <ProgressBar current={currentQuestion + 1} total={total} />
      </div>
      <div className="mx-auto max-w-3xl px-8 pt-2 pb-40">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm md:p-2">
          <div className="p-6 md:p-8">
            {/* ✅ REMOVED: The pre-quiz modal is no longer here. */}
            {questions[currentQuestion] && (
              <QuestionCard
                question={questions[currentQuestion]}
                onAnswer={handleAnswer}
                currentAnswer={answers[currentQuestion]}
                questionIndex={currentQuestion}
                totalQuestions={total}
                onNext={handleNext}
                onPrev={handlePrev}
              />
            )}
          </div>
        </div>
      </div>
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

export default AssessmentPage;