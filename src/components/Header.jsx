// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
  <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
    {/* Logo / Title on the left */}
  <Link to="/" className="flex items-center gap-3 group cursor-pointer -ml-60">
      <img
        src="src/assets/logo.png"
        alt="MentalCare Logo"
        className="h-16 w-auto drop-shadow-lg transition-transform duration-200 group-hover:scale-110 group-hover:rotate-[-8deg]"
      />
      <span className="text-2xl font-bold text-gray-900 transition-colors duration-200 group-hover:text-emerald-600">MentalCare</span>
    </Link>
    {/* Navigation */}
    <nav className="flex items-center gap-6">
      <Link
        to="/"
        className="text-sm font-medium text-gray-700 hover:text-primary-500 transition-colors"
      >
        {/* Add navigation items here if needed */}
      </Link>
    </nav>
  </div>
    </header>
  );
}
