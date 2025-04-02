
import React from "react";

interface QuizResultsProps {
  correctCount?: number;
  totalQuizzes?: number;
  question?: string;
  options?: string[];
  selectedAnswer?: number;
  correctAnswer?: number;
}

export const QuizResults: React.FC<QuizResultsProps> = ({ 
  correctCount,
  totalQuizzes,
  question,
  options,
  selectedAnswer,
  correctAnswer
}) => {
  // If we have individual question results
  if (question && options && typeof selectedAnswer !== 'undefined' && typeof correctAnswer !== 'undefined') {
    return (
      <div className="mt-4 p-4 rounded-md bg-purple-900/30 border border-purple-500/20">
        <h4 className="text-lg font-semibold text-purple-200 mb-2">Quiz Results</h4>
        <p className="text-white mb-2">{question}</p>
        <div className="space-y-2">
          {options.map((option, idx) => (
            <div 
              key={idx} 
              className={`p-2 rounded-md ${
                idx === correctAnswer
                  ? "bg-green-600/20 border border-green-500/40"
                  : idx === selectedAnswer
                    ? "bg-red-600/20 border border-red-500/40"
                    : "bg-gray-800/40 border border-gray-700/40"
              }`}
            >
              <p className="text-sm text-white">
                {idx === selectedAnswer && idx !== correctAnswer && "✗ "}
                {idx === correctAnswer && "✓ "}
                {option}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // For overall quiz results
  const score = correctCount && totalQuizzes ? Math.round((correctCount / totalQuizzes) * 100) : 0;
  
  const getScoreMessage = () => {
    if (score >= 80) return "Excellent! You're a cosmic genius!";
    if (score >= 60) return "Good job! You're on your way to mastering this topic.";
    return "Keep learning! You'll get there with practice.";
  };

  return (
    <div className="mt-4 p-4 rounded-md bg-purple-900/30 border border-purple-500/20">
      <h4 className="text-lg font-semibold text-purple-200 mb-2">Challenge Complete!</h4>
      {correctCount !== undefined && totalQuizzes !== undefined && (
        <>
          <p className="text-white mb-2">
            Final score: {correctCount}/{totalQuizzes}
          </p>
          <p className="text-yellow-300">{getScoreMessage()}</p>
        </>
      )}
    </div>
  );
};
