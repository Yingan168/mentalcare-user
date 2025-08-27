import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AssessmentPage from './Pages/AssessmentPage';
import ResultPage from "./Pages/ResultPage";
import { AuthProvider } from './context/AuthContext.jsx';
import AboutPage from "./Pages/AboutPage";
import HelpPage from "./Pages/HelpPage";
import MainLayout from "./layouts/MainLayout";

export default function App() {
  return (
    <Router>
      {/* CORRECT: AuthProvider is OUTSIDE of Routes */}
      <AuthProvider> 
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/assessment" element={<AssessmentPage />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/get-help' element={<HelpPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}