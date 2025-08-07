import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import QuizPage from "./Pages/QuizPage";
import ResultPage from "./Pages/ResultPage";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Quiz Page */}
        <Route path="/quiz" element={<QuizPage />} />

        {/* Result Page */}
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}
