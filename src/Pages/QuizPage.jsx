import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import questions from "../question";

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const handleAnswer = (option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = option;
    setAnswers(updatedAnswers);

    // Move to next question after selection
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Calculate score
        const score = updatedAnswers.reduce((sum, ans) => sum + (ans?.weight || 0), 0);
        navigate("/result", { state: { score } });
      }
    }, 300);
  };

  if (!questions.length) return <p className="text-center mt-20">No questions available</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">
      <QuestionCard
        question={questions[currentQuestion]}
        onAnswer={handleAnswer}
        currentAnswer={answers[currentQuestion]}
      />
    </div>
  );
};

export default QuizPage;
