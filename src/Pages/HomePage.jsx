import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import personalgrowth from "../assets/personal growth-bro.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomePage() {
  const [sourceLink, setSourceLink] = useState("");
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const navigate = useNavigate();

  const roles = [
    {
      id: "dev",
      label: "Software Development",
      desc: "Apps, websites, systems",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6L2 12l6 6" />
        </svg>
      ),
    },
    {
      id: "it",
      label: "IT Infrastructure & Networking",
      desc: "Servers, networks, hardware",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="6" rx="2" />
          <rect x="3" y="14" width="18" height="6" rx="2" />
          <path d="M7 7h.01M11 7h.01M7 17h.01M11 17h.01" />
        </svg>
      ),
    },
    {
      id: "sec",
      label: "Cybersecurity",
      desc: "Protecting systems & data",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3l7 4v5a9 9 0 11-14 0V7l7-4z" />
          <path d="M9 14l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: "data",
      label: "Data & AI",
      desc: "ML, analytics, automation",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3v18M3 12h18" />
          <circle cx="8" cy="8" r="2" />
          <circle cx="16" cy="16" r="2" />
        </svg>
      ),
    },
  ];

        if (selectedGender) {
          localStorage.setItem("userGender", selectedGender);
        } else {
          localStorage.removeItem("userGender");
        }
  const onStart = (e) => {
    e.preventDefault();
    if (sourceLink.trim()) {
      localStorage.setItem("assessmentLink", sourceLink.trim());
    } else {
      localStorage.removeItem("assessmentLink");
    }
    if (selectedRole) {
      localStorage.setItem("userRole", selectedRole);
    } else {
      localStorage.removeItem("userRole");
    }
    navigate("/quiz");
  };

  const handleSelectRole = (id) => {
    setSelectedRole((prev) => (prev === id ? null : id)); // toggle to allow deselect
  };

  const handleRoleKey = (e, id) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleSelectRole(id);
    }
  };

  return (
    <div className="min-h-screen bg-white antialiased">
      <Header />

      {/* Subtle brand gradient */}
      <div className="bg-gradient-to-b from-emerald-50/70 via-white to-white">
        <section className="mx-auto max-w-full md:px-32 md:py-32">
          <div className="grid items-center gap-20 md:grid-cols-2">
            {/* Text */}
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

              {/* How it works section */}
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

              {/* Role selector (Optional) */}
              <div className="mt-10">
                <label className="block text-sm font-medium text-slate-800 md:text-base">
                  Optional: select your role to tailor recommendations
                </label>

                <div
                  role="radiogroup"
                  aria-label="Select your role"
                  className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2"
                >
                  {roles.map((r) => {
                    const active = selectedRole === r.id;
                    return (
                      <button
                        key={r.id}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        onClick={() => handleSelectRole(r.id)}
                        onKeyDown={(e) => handleRoleKey(e, r.id)}
                        className={[
                          "flex w-full items-center justify-between rounded-2xl border p-4 text-left transition shadow-sm",
                          "hover:shadow-md focus:outline-none focus:ring-4",
                          active
                            ? "border-emerald-600 bg-emerald-50 focus:ring-emerald-100"
                            : "border-slate-200 bg-white hover:border-emerald-400/60 focus:ring-slate-200",
                        ].join(" ")}
                      >
                        <span className="flex items-start gap-3">
                          <span
                            className={[
                              "grid h-9 w-9 place-items-center rounded-full",
                              active ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-700",
                            ].join(" ")}
                            aria-hidden="true"
                          >
                            {r.icon}
                          </span>
                          <span>
                            <span className="block text-base font-semibold text-slate-900">
                              {r.label}
                            </span>
                            <span className="mt-0.5 block text-sm text-slate-600">{r.desc}</span>
                          </span>
                        </span>
                        <span
                          className={[
                            "grid h-5 w-5 place-items-center rounded-full border",
                            active
                              ? "border-emerald-600 bg-emerald-600 text-white"
                              : "border-slate-300 text-transparent",
                          ].join(" ")}
                          aria-hidden="true"
                        >
                          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      </button>
                    );
                  })}
                </div>
                <p className="mt-2 text-xs text-slate-500 md:text-sm">
                  You can skip this and choose later — it won’t affect your ability to start.
                </p>
              </div>

              {/* Optional link + Start */}
              <form onSubmit={onStart} className="mt-8 max-w-2xl">
                <label htmlFor="assessmentLink" className="block text-sm font-medium text-slate-800 md:text-base">
                  Optional: paste a link to personalize your assessment
                </label>
                <div className="mt-3 flex items-stretch gap-3">
                  <input
                    id="assessmentLink"
                    type="url"
                    placeholder="https://your-link-here.com"
                    value={sourceLink}
                    onChange={(e) => setSourceLink(e.target.value)}
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
                <p className="mt-2 text-xs text-slate-500 md:text-sm">
                  This field is optional — leave it blank to proceed normally.
                </p>
              </form>

              {/* Testimonials */}
              <div className="mt-10">
                <div className="rounded-xl bg-white/80 p-4 shadow ring-1 ring-emerald-100">
                  <p className="text-base text-slate-700 italic">
                    “This quick check helped me reflect and take positive steps. Highly recommend!”
                  </p>
                  <span className="block mt-2 text-sm text-emerald-700 font-semibold">— Recent User</span>
                </div>
              </div>
            </div>

            {/* Illustration */}
            <div className="order-first md:order-none">
              <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-3xl">
                <img
                  src={personalgrowth}
                  alt="Illustration for mental wellness"
                  className="w-full h-[26rem] md:h-[32rem] object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
      
    </div>
  );
}
