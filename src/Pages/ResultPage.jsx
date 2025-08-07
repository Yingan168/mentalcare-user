import React from 'react';
import Header from '../components/Header';
import ResultCard from '../components/ResultCard';

export default function ResultPage({ score }) {
  return (
    <div className="max-w-xl mx-auto p-4">
      <Header />
      <ResultCard score={score} />
    </div>
  );
}
