import React from "react";
import Header from "../components/Header";
import ResultCard from "../components/ResultCard";

export default function ResultPage({ score }) {
  return (
    <div className="min-h-screen text-slate-900 antialiased">
      {/* Subtle site background (light gradient + gentle glow) */}
      <div
        aria-hidden
        className={[
          "fixed inset-0 -z-10",
          "bg-[linear-gradient(180deg,#f8fbff_0%,#f3f6fb_45%,#eef4f8_100%)]"
        ].join(" ")}
      />
      <div
        aria-hidden
        className={[
          "fixed inset-x-0 -top-40 -z-10 h-[28rem] opacity-70",
          "bg-[radial-gradient(50%_60%_at_25%_30%,rgba(16,185,129,0.14),transparent_70%)]"
        ].join(" ")}
      />

      <Header />

      {/* Top bar (standard, not fixed) */}
      <div className="border-b border-slate-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto max-w-3xl px-8 py-4">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Assessment
              </p>
              <h1 className="mt-1 text-2xl font-semibold leading-tight md:text-3xl">
                Your Result
              </h1>
            </div>
            <div className="text-right">
              <span className="text-sm text-slate-600">Thanks for completing the check</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-8 py-10">
        <p className="mb-6 text-base leading-7 text-slate-600 md:text-lg md:leading-8">
          Review your summary below. These suggestions are informational and not a diagnosis.
        </p>

        {/* Frosted (blurred) result card */}
        <ResultCard
          score={score}
          className="rounded-3xl border border-white/60 bg-white/50 shadow-[0_10px_40px_rgba(2,6,23,0.08)] backdrop-blur-md ring-1 ring-black/5 supports-[backdrop-filter]:bg-white/60"
        />

        <hr className="my-8 border-slate-200/80" />

        {/* Info note */}
        <div className="text-sm leading-6 text-slate-600">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 ring-1 ring-slate-200 backdrop-blur-sm">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
            Summary generated for educational purposes
          </span>
          <span className="mx-2 hidden align-middle text-slate-400 sm:inline">•</span>
          <span className="align-middle">Consider professional help if you have urgent concerns.</span>
        </div>

        {/* Bottom actions (in-flow, not fixed) */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <a
            href="/"
            onClick={() => localStorage.removeItem("assessmentLink")}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
          >
            ← Back to Home
          </a>

          <div className="flex w-full items-center justify-end gap-3 sm:w-auto">
            <a
              href="/quiz"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
            >
              Retake Assessment
            </a>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-100"
            >
              Print / Save PDF
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
