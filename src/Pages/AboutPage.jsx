import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// You can replace these with actual team member images
const teamMembers = [
  {
    name: 'Kumari Laxmi Sharma',
    title: 'Backend Developer',
    image: 'src/assets/laxmi.png',
  },
  {
    name: 'Eav Chansotheary',
    title: 'Frontend Developer',
    image: 'src/assets/theary.png',
  },
  {
    name: 'Thai Sodalin',
    title: 'DevOps Engineer',
    image: 'src/assets/dalin.png',
  },
  {
    name: 'Nop Puthlinna',
    title: 'AI Model Developer',
    image: 'src/assets/linna.png',
  },
  {
    name: 'Sarouen Reachny Ying An',
    title: 'Frontend Developer',
    image: 'src/assets/yingan.png',
  },
];

// Reusable SVG Icon component for the "Our Values" section
const ValueIcon = ({ children }) => (
  <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center">
    {children}
  </div>
);

export default function AboutPage() {
  return (
    <div className="bg-white antialiased">
      
      {/* Hero Section */}
      <header className="relative bg-gradient-to-b from-emerald-50 to-white pt-24 pb-12 sm:pt-32 sm:pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-emerald-700 tracking-tight">
            About MentalCare
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            We are a passionate team dedicated to making mental wellness accessible to everyone, everywhere. Our mission is to break down barriers and provide the support you need to thrive.
          </p>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Mission and Vision Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Mission</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              To empower individuals to take control of their mental health through accessible technology and compassionate support. We strive to create a world where seeking help is a sign of strength, not weakness.
            </p>
          </div>
          <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Vision</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              A future where mental healthcare is destigmatized, universally accessible, and integrated into daily life, fostering a global community of resilience and well-being.
            </p>
          </div>
        </section>
        
        <hr className="my-20 border-t border-slate-200" />
        
        {/* Our Values Section */}
        <section className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center">
              <ValueIcon>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-3.866-3.134-7-7-7S-2 7.134-2 11s3.134 7 7 7 7-3.134 7-7zM12 11h10M12 4V2M12 20v-2M4 11H2M20 11h2" transform="translate(3 3)"/></svg>
              </ValueIcon>
              <h3 className="mt-4 text-xl font-semibold text-slate-800">Accessibility</h3>
              <p className="mt-2 text-slate-600">Creating solutions that are available to everyone, regardless of their circumstances.</p>
            </div>
            <div className="flex flex-col items-center">
              <ValueIcon>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </ValueIcon>
              <h3 className="mt-4 text-xl font-semibold text-slate-800">Compassion</h3>
              <p className="mt-2 text-slate-600">Leading with empathy and understanding in every interaction.</p>
            </div>
            <div className="flex flex-col items-center">
              <ValueIcon>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </ValueIcon>
              <h3 className="mt-4 text-xl font-semibold text-slate-800">Integrity</h3>
              <p className="mt-2 text-slate-600">Upholding the highest standards of privacy and ethical conduct.</p>
            </div>
          </div>
        </section>

        <hr className="my-20 border-t border-slate-200" />

        {/* Meet The Team Section */}
        <section className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="group relative">
                <div className="overflow-hidden rounded-2xl">
                  <img src={member.image} alt={member.name} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold text-slate-800">{member.name}</h3>
                  <p className="text-emerald-600">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Call to Action Section */}
      <section className="bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join Us On Our Mission</h2>
          <p className="text-lg sm:text-xl text-emerald-100 mb-8">
            Whether you are seeking support or want to contribute, you are a vital part of our community.
          </p>
          <button className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-emerald-50 transition-colors">
            Get Started
          </button>
        </div>
      </section>

      

    </div>
  );
}