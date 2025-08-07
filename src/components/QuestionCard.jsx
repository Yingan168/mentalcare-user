import { motion } from "framer-motion";
import { useState } from "react";

const QuestionCard = ({ question, onAnswer, currentAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(currentAnswer);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onAnswer(option);
  };

  const getOptionStyling = (option) => {
    const isSelected = selectedOption?.value === option.value;
    const baseClasses =
      "group relative w-full p-6 text-left rounded-2xl border-2 transition-all duration-300 font-medium text-lg flex items-center space-x-4 shadow-sm";

    if (isSelected) {
      return `${baseClasses} border-green-500 bg-green-50 text-green-800 shadow-lg scale-[1.02]`;
    }
    return `${baseClasses} border-gray-200 bg-white hover:border-green-400 hover:bg-green-50 hover:shadow-md hover:scale-[1.01] text-gray-700`;
  };

  const getOptionEmoji = (optionText) => {
    if (optionText.includes("Never") || optionText.includes("Excellent")) return "😊";
    if (optionText.includes("Rarely") || optionText.includes("Good")) return "🙂";
    if (optionText.includes("Sometimes") || optionText.includes("Fair")) return "😐";
    if (optionText.includes("Often") || optionText.includes("Poor")) return "😕";
    return "😟";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-3xl mx-auto"
    >
      {/* Question Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-6 shadow-md">
          <span className="text-2xl text-white">❓</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight px-4">
          {question.question}
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          Please select the option that best describes your experience
        </p>
      </motion.div>

      {/* Options */}
      <div className="space-y-4 px-4">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            onClick={() => handleOptionSelect(option)}
            className={getOptionStyling(option)}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Emoji */}
            <span className="text-3xl">{getOptionEmoji(option.text)}</span>

            {/* Text */}
            <span className="flex-1">{option.text}</span>

            {/* Selection Indicator */}
            {selectedOption?.value === option.value ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
            ) : (
              <div className="w-6 h-6 border-2 border-gray-300 rounded-full group-hover:border-green-400 transition-colors" />
            )}
          </motion.button>
        ))}
      </div>

      {/* Helper Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-8 px-4"
      >
        <p className="text-sm text-gray-500">
          {selectedOption ? (
            <span className="text-green-600 font-medium">
              ✓ Answer selected. You can change your selection anytime.
            </span>
          ) : (
            "Choose the option that best reflects your current situation"
          )}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default QuestionCard;
