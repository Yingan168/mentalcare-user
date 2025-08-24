import React from "react";
import { FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer({ fixed = false }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 pt-10 pb-4 text-slate-700">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-6 gap-10">
        {/* Brand & Social */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-3 mb-2">
            <img src="src/assets/logo.png" alt="MentalCare Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold text-gray-900">MentalCare</span>
          </div>
          <p className="text-sm text-slate-600 mb-2">Quick, friendly check-ins for stress, mood, and habits. Informational, not medical advice.</p>
          <div className="flex gap-3 mt-2">
            {/* Minimal react-icons social icons */}
            <a href="#" aria-label="Twitter" className="hover:text-emerald-600">
              <FaTwitter size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-emerald-600">
              <FaLinkedinIn size={18} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-emerald-600">
              <FaInstagram size={18} />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-emerald-600">
              <FaYoutube size={18} />
            </a>
          </div>
          <div className="mt-4">
            <span className="inline-flex items-center gap-2 rounded bg-slate-100 px-3 py-1 text-xs font-medium text-emerald-700">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" /> All systems operational
            </span>
          </div>
        </div>
        {/* Product */}
        <div>
          <h4 className="font-semibold mb-2">Product</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-emerald-600">Features</a></li>
            <li><a href="#" className="hover:text-emerald-600">Pricing</a></li>
            <li><a href="#" className="hover:text-emerald-600">API</a></li>
            <li><a href="#" className="hover:text-emerald-600">Starter Kit</a></li>
          </ul>
        </div>
        {/* Explore */}
        <div>
          <h4 className="font-semibold mb-2">Explore</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-emerald-600">My feed</a></li>
            <li><a href="#" className="hover:text-emerald-600">Case studies</a></li>
            <li><a href="#" className="hover:text-emerald-600">MentalCare AI</a></li>
            <li><a href="#" className="hover:text-emerald-600">Referral Program</a></li>
          </ul>
        </div>
        {/* Company */}
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-emerald-600">About</a></li>
            <li><a href="#" className="hover:text-emerald-600">Careers</a></li>
            <li><a href="#" className="hover:text-emerald-600">Media</a></li>
            <li><a href="#" className="hover:text-emerald-600">Changelog</a></li>
            <li><a href="#" className="hover:text-emerald-600">Feature Requests</a></li>
          </ul>
        </div>
        {/* Support */}
        <div>
          <h4 className="font-semibold mb-2">Support</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-emerald-600">Docs</a></li>
            <li><a href="#" className="hover:text-emerald-600">Contact</a></li>
            <li><a href="#" className="hover:text-emerald-600">Join Discord</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 mt-8 flex flex-col md:flex-row items-center justify-between border-t border-slate-100 pt-4">
        <p className="text-xs text-slate-500 mb-2 md:mb-0">
          © {year} MentalCare — F5 Inc.
        </p>
        <div className="flex gap-4 text-xs text-slate-500">
          <a href="/privacy" className="hover:text-emerald-700">Privacy Policy</a>
          <a href="#" className="hover:text-emerald-700">Terms</a>
          <a href="#" className="hover:text-emerald-700">Code of conduct</a>
        </div>
      </div>
    </footer>
  );
}
