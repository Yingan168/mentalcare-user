import React from "react";

export default function Footer({ fixed = true }) {
  const year = new Date().getFullYear();

  if (fixed) {
    // Spacer keeps content from being hidden behind the fixed bar.
    return (
      <>
        <div aria-hidden className="h-16" />
        <footer className="fixed inset-x-0 bottom-0 z-40 h-16 border-t border-slate-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex h-full max-w-7xl items-center justify-center px-6 pb-[env(safe-area-inset-bottom)]">
            <p className="text-sm text-slate-700">
              <span className="font-semibold text-slate-900">MentalCare</span> — quick, friendly
              check-ins for stress, mood, and habits (informational, not medical advice).
              <span className="ml-2 text-slate-500">© {year}</span>
            </p>
          </div>
        </footer>
      </>
    );
  }

  // Non-fixed version (not used now, but handy if you ever want it)
  return (
    <footer className="border-t border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-6 text-center">
        <p className="text-sm text-slate-700">
          <span className="font-semibold text-slate-900">MentalCare</span> — quick, friendly
          check-ins for stress, mood, and habits (informational, not medical advice).
        </p>
        <p className="mt-1 text-xs text-slate-500">© {year}</p>
      </div>
    </footer>
  );
}
