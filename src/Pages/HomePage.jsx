import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import personalgrowth from "../assets/personal growth-bro.svg";
import { getJSON, postJSON } from "../service/apiClient";

export default function HomePage() {
  const [inviteCode, setInviteCode] = useState("");
  const [inviteError, setInviteError] = useState("");
  
  // State for the modal and its selections
  const [showPreQuiz, setShowPreQuiz] = useState(false);
  const [specializations, setSpecializations] = useState([]);
  const [selectedSpecialization, setSelectedSpecialization] = useState(null);
  const [genders, setGenders] = useState([]);
  const [selectedGender, setSelectedGender] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();

  useEffect(() => {
    // Fetches gender and specialization options from the API
    const fetchOptions = async () => {
      try {
        const [specializationsData, gendersData] = await Promise.all([
          getJSON("/api/options/specializations"),
          getJSON("/api/options/genders")
        ]);
        setSpecializations(specializationsData.map(s => ({ id: s, label: s })));
        setGenders(gendersData.map(g => ({ id: g, label: g })));
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchOptions();
  }, []);

  const handleStartQuiz = async () => {
    // This function runs when the user clicks "Confirm & Start Quiz" in the modal
    if (inviteCode.trim()) {
      try {
        const response = await postJSON('/api/invites/validate', { inviteCode: inviteCode.trim() });
        localStorage.setItem("inviteCode", inviteCode.trim());
        localStorage.setItem("employerId", response.employerId);
      } catch (err) {
        setInviteError("Invalid invitation code.");
        setShowPreQuiz(false); // Close modal to show the error
        return; 
      }
    } else {
      localStorage.removeItem("inviteCode");
      localStorage.removeItem("employerId");
    }

    localStorage.setItem("userGender", selectedGender);
    localStorage.setItem("userSpecialization", selectedSpecialization);
    navigate("/assessment");
  };

  if (isLoading) return <div className="text-center p-10">Loading...</div>;
  if (error) return <div className="text-center p-10 text-red-600">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-white antialiased">
      <Header />
      <div className="bg-gradient-to-b from-emerald-50/70 via-white to-white">
        <section className="mx-auto max-w-full md:px-32 md:py-32">
          <div className="grid items-center gap-20 md:grid-cols-2">
            <div className="">
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-emerald-700 md:text-7xl">
                  MentalCare
                </h1>
              </div>
              <h2 className="mt-3 text-3xl font-semibold text-gray-700 md:text-4xl">
                We Will Help You To Improve Your Mental Health
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-7 text-slate-600 md:text-xl md:leading-8">
                MentalCare offers a quick check-in to reflect on stress, mood, and daily habits,
                then suggests simple next steps you can try today.
              </p>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-emerald-700 mb-2">How it works</h3>
                <ol className="list-decimal list-inside space-y-1 text-slate-700 text-base">
                  <li>Answer a few quick questions (5 min)</li>
                  <li>Get a personalized summary instantly</li>
                  <li>See simple tips and next steps</li>
                  <li>Retake anytime, always free</li>
                </ol>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm md:text-base">
                  23 Questions
                </span>
                <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 md:text-base">
                  ~5 Minutes
                </span>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); setShowPreQuiz(true); }} className="mt-8 max-w-2xl">
                <label htmlFor="inviteCode" className="block text-sm font-medium text-slate-800 md:text-base">
                  Optional: paste code that provide by your organization
                </label>
                <div className="mt-3 flex items-stretch gap-3">
                  <input
                    id="inviteCode"
                    type="text"
                    placeholder="e.g., bf8f5771-7af5-4a46-99a9-3c706fbdefea"
                    value={inviteCode}
                    onChange={(e) => setInviteCode(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-base text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 md:text-lg"
                  />
                  <button
                    type="submit"
                    className="inline-flex shrink-0 items-center rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:scale-105 hover:from-emerald-600 hover:to-green-600 focus:outline-none focus:ring-4 focus:ring-emerald-100"
                    aria-label="Start assessment"
                  >
                    <span className="mr-2">🚀</span> Start Assessment
                  </button>
                </div>
                {inviteError && <p className="mt-2 text-sm text-red-600">{inviteError}</p>}
                 <p className="mt-2 text-xs text-slate-500 md:text-sm">
                  This field is optional — leave it blank to proceed normally.
                </p>
              </form>

              <div className="mt-10">
                <div className="rounded-xl bg-white/80 p-4 shadow ring-1 ring-emerald-100">
                  <p className="text-base text-slate-700 italic">
                    “This quick check helped me reflect and take positive steps. Highly recommend!”
                  </p>
                  <span className="block mt-2 text-sm text-emerald-700 font-semibold">— Recent User</span>
                </div>
              </div>
            </div>
            <div className="order-first md:order-none">
              <img
                src={personalgrowth}
                alt="Illustration for mental wellness"
                className="w-full h-[26rem] md:h-[32rem] object-cover object-center"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />

      {/* Pre-quiz modal JSX */}
      {showPreQuiz && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/30 p-4">
          <div className="w-full max-w-md rounded-2xl border border-slate-100 bg-white p-7 shadow-xl">
            <h2 className="text-lg font-semibold text-slate-900 mb-4 text-center">Before you start</h2>
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-800 mb-2">Select your gender:</label>
              <div className="flex gap-3 flex-wrap">
                {genders.map(g => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setSelectedGender(g.id)}
                    className={`px-4 py-2 rounded-full border ${selectedGender === g.id ? "bg-emerald-600 text-white border-emerald-600" : "bg-white text-slate-700 border-slate-300 hover:bg-emerald-50"}`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-800 mb-2">Select your specialization:</label>
              <div className="flex gap-3 flex-wrap">
                {specializations.map(s => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedSpecialization(s.id)}
                    className={`px-4 py-2 rounded-full border ${selectedSpecialization === s.id ? "bg-emerald-600 text-white border-emerald-600" : "bg-white text-slate-700 border-slate-300 hover:bg-emerald-50"}`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={handleStartQuiz}
              disabled={!selectedGender || !selectedSpecialization}
              className={`w-full mt-2 rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow transition hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              Confirm & Start Assessment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}