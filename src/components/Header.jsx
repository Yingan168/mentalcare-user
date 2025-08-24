// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-full px-32 py-4 flex items-center justify-between">
        {/* Logo / Title centered on mobile, left on desktop */}
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <img
            src="src/assets/logo.png"
            alt="MentalCare Logo"
            className="h-12 w-auto drop-shadow-lg transition-transform duration-200 group-hover:scale-110 group-hover:rotate-[-8deg]"
          />
          <span className="text-2xl font-bold text-gray-900 transition-colors duration-200 group-hover:text-emerald-600">MentalCare</span>
        </Link>
        {/* Navigation */}
        <nav className="flex items-center gap-6" aria-label="Main navigation">
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-emerald-200"
          >
            Home
          </Link>
          <Link
            to="/quiz"
            className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-emerald-200"
          >
            Quiz
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-emerald-200"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-emerald-200"
          >
            Contact
          </Link>
          <a
            href="https://www.findahelpline.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            aria-label="Get Help (external link)"
          >
            Get Help
          </a>
        </nav>
      </div>
    </header>
  );
}
