import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero-image.png";
import Header from "../components/Header";

export default function LandingPage() {
  return (
    <div className="bg-green-50 min-h-screen">
      <Header />
      <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12">
        <div>
          <h1 className="text-primary-600 text-4xl font-bold">MentalCare</h1>
          <h2 className="text-3xl font-semibold mt-2">
            We Will Help You To Improve Your Mental Health
          </h2>
          <p className="text-gray-600 mt-4 max-w-lg">
            MentalCare aims to improve your wellbeing and resilience...
          </p>
          <div className="flex gap-4 mt-6">
            <span className="bg-primary-500 text-white px-4 py-2 rounded-md">20 Questions</span>
            <span className="bg-gray-200 px-4 py-2 rounded-md">2 Minutes</span>
          </div>
          <Link to="/quiz">
            <button className="mt-8 bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600">
              Start Assessment
            </button>
          </Link>
        </div>
        <img src={heroImg} alt="Hero" className="w-full max-w-md" />
      </section>
    </div>
  );
}
