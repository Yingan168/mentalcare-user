import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const QuestionCard = ({ question, onAnswer, currentAnswer, questionIndex, totalQuestions, onNext, onPrev }) => {
  const [selectedOption, setSelectedOption] = useState(currentAnswer);
  const optionsRef = useRef([]);

  useEffect(() => {
    setSelectedOption(currentAnswer);
  }, [currentAnswer, question]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onAnswer(option);
  };

  const handleKeyDown = (e, idx) => {
    const options = question.options || [];
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      const nextIdx = (idx + 1) % options.length;
      optionsRef.current[nextIdx]?.focus();
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIdx = (idx - 1 + options.length) % options.length;
      optionsRef.current[prevIdx]?.focus();
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleOptionSelect(options[idx]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-lg mx-auto p-0 min-h-[520px] flex flex-col justify-between"
    >
      <div className="mb-4 flex items-center justify-between text-xs text-slate-500">
        <span>Question {questionIndex + 1} of {totalQuestions}</span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-4"
      >
        <div className="inline-flex items-center justify-center w-10 h-10 bg-emerald-500 rounded-full mb-2 shadow-md">
          <span className="text-base text-white">❓</span>
        </div>
        <h2 className="text-base md:text-lg font-bold text-gray-900 leading-tight px-1">
          {question.question}
        </h2>
        <p className="text-gray-600 mt-1 text-xs">
          Please select the option that best describes your experience
        </p>
      </motion.div>
      <div className="space-y-2 px-1">
        {(question.options || []).map((option, index) => {
          // This boolean correctly checks if the current option's weight matches the selected one
          const isSelected = selectedOption?.weight === option.weight;

          return (
            <motion.button
              key={index}
              ref={el => optionsRef.current[index] = el}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              onClick={() => handleOptionSelect(option)}
              onKeyDown={e => handleKeyDown(e, index)}
              className={`group relative w-full p-3 text-left rounded-xl border text-sm flex items-center space-x-3 shadow-sm focus:outline-none transition-all duration-300 font-medium ${
                isSelected
                  ? "border-emerald-500 bg-emerald-50 text-emerald-800 shadow-lg scale-[1.01]"
                  : "border-gray-200 bg-white hover:border-emerald-400 hover:bg-emerald-50 hover:shadow-md hover:scale-[1.01] text-gray-700"
              }`}
              tabIndex={0}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              aria-checked={isSelected}
              role="radio"
            >
              <span className="flex-1">{option.text}</span>
              {isSelected ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center"
                >
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
              ) : (
                <div className="w-5 h-5 border-2 border-gray-300 rounded-full group-hover:border-emerald-400 transition-colors" />
              )}
            </motion.button>
          );
        })}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col items-center mt-4 px-1 gap-2"
      >
        <p className="text-xs text-gray-500 text-center">
          {selectedOption ? (
            <span className="text-emerald-600 font-medium">
              ✓ Answer selected. You can change your selection anytime.
            </span>
          ) : (
            "Choose the option that best reflects your current situation"
          )}
        </p>
        <div className="flex gap-2 w-full justify-center">
          <button
            type="button"
            onClick={onPrev}
            disabled={questionIndex === 0}
            className={`inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-1 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200 disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            ← Previous
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={!selectedOption}
            className={`inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-1 text-sm font-semibold text-white shadow transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-100 disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            Next
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default QuestionCard;