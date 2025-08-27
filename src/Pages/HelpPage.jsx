import React from 'react';

// --- Data for Clinics/Hospitals ---
// This data can be fetched from an API in a real application.
const clinicData = [
  {
    name: "Royal Phnom Penh Hospital",
    address: "No. 888, Russian Confederation Blvd, Sangkat Toeuk Thla, Khan Sen Sok, Phnom Penh",
    services: ["Psychiatry", "General Practice", "Emergency Care", "Counseling"],
    googleMapsUrl: "https://goo.gl/maps/88a25yq2wA7wE8wY6",
    websiteUrl: "https://www.royalphnompenhhospital.com/",
  },
  {
    name: "Khema International Polyclinic",
    address: "No. 28, Street 294, Sangkat Boeng Keng Kang I, Khan Chamkar Mon, Phnom Penh",
    services: ["Psychology Services", "Neurology", "Family Medicine", "Health Check-ups"],
    googleMapsUrl: "https://goo.gl/maps/b9yW4eK2qL4vRzYk9",
    websiteUrl: "https://www.khemahospital.com/",
  },
  {
    name: "The-Counsellors",
    address: "Various locations, specializes in mental wellness",
    services: ["Individual Counseling", "Couples Therapy", "Adolescent Support", "Online Sessions"],
    googleMapsUrl: "https://goo.gl/maps/example", // Placeholder, as they may not have one central public office
    websiteUrl: "https://www.the-counsellors.com/",
  },
  {
    name: "Sunrise Japan Hospital Phnom Penh",
    address: "Chroy Changvar Bridge, National Road No. 6A, Phnom Penh",
    services: ["Neuro-Psychiatry", "Internal Medicine", "Pediatrics", "Surgical Services"],
    googleMapsUrl: "https://goo.gl/maps/a3k5p4L8s7t9x6Fj7",
    websiteUrl: "https://www.sunrise-hs.com/eng/",
  },
];

// --- Data for Mini Blogs ---
const blogData = [
  {
    title: "Understanding and Managing Anxiety",
    excerpt: "Anxiety is a normal human emotion, but it can sometimes become overwhelming. Learn to recognize the signs and discover simple, effective techniques to manage it in your daily life.",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "The Simple Power of a Self-Care Routine",
    excerpt: "Self-care isn't selfish; it's essential for your mental and physical health. Explore how creating a small, consistent routine can lead to significant improvements in your mood and resilience.",
    imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "Breaking the Stigma: When to Seek Help",
    excerpt: "Knowing when to reach out for professional help is a sign of strength. This article helps you understand the key indicators and demystifies the process of finding the right support for you.",
    imageUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=870&q=80",
  },
];


// Reusable Clinic Card Component
const ClinicCard = ({ clinic }) => (
  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden transition hover:shadow-emerald-200 hover:border-emerald-200 duration-300">
    <div className="p-6 flex flex-col gap-2">
      <h3 className="text-xl font-bold text-emerald-700 mb-1 flex items-center gap-2">
        <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.5 11 9 11s9-5.75 9-11c0-4.97-4.03-9-9-9z" /></svg>
        {clinic.name}
      </h3>
      <p className="mt-1 text-slate-600 flex items-start gap-2 text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        <span>{clinic.address}</span>
      </p>
      <div className="mt-2">
        <h4 className="font-semibold text-slate-700 text-sm">Services:</h4>
        <div className="flex flex-wrap gap-2 mt-1">
          {clinic.services.map(service => (
            <span key={service} className="bg-emerald-50 text-emerald-700 text-xs font-medium px-2.5 py-1 rounded-full border border-emerald-200 shadow-sm">
              {service}
            </span>
          ))}
        </div>
      </div>
    </div>
    <div className="bg-slate-50/70 p-4 flex flex-col sm:flex-row gap-3 border-t border-slate-100">
      <a href={clinic.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-white border border-slate-300 text-emerald-700 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-emerald-50 hover:border-emerald-400 transition-colors shadow-sm">
        <svg className="inline-block mr-2 h-4 w-4 text-emerald-400 align-middle" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        Google Maps
      </a>
      {clinic.websiteUrl && (
        <a href={clinic.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-emerald-700 transition-colors shadow-sm">
          <svg className="inline-block mr-2 h-4 w-4 text-white align-middle" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          Website
        </a>
      )}
    </div>
  </div>
);

// Reusable Blog Card Component
const BlogCard = ({ post }) => (
  <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden group">
    <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-slate-800">{post.title}</h3>
      <p className="mt-2 text-slate-600 text-base leading-relaxed">{post.excerpt}</p>
      <a href="#" className="mt-4 inline-block text-emerald-600 font-semibold hover:text-emerald-700 group-hover:underline">
        Read More &rarr;
      </a>
    </div>
  </div>
);


export default function HelpPage() {
  return (
    <div className="bg-gradient-to-b from-emerald-50 via-white to-white antialiased">
      {/* Hero Section */}
      <header className="pt-24 pb-8 sm:pt-32 sm:pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-emerald-700 tracking-tight">
            Find Support and Information
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Your well-being is a priority. Here are some trusted resources in Cambodia and articles to help guide you on your journey.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Clinics Section */}
        <section>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-8 text-center">
            Professional Help in Cambodia
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {clinicData.map(clinic => (
              <ClinicCard key={clinic.name} clinic={clinic} />
            ))}
          </div>
        </section>

        <hr className="my-20 border-t border-slate-200" />
        
        {/* Blog Section */}
        <section>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-8 text-center">Informative Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogData.map(post => (
              <BlogCard key={post.title} post={post} />
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}