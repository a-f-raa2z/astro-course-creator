
import React from "react";

interface QuizResultsProps {
  correctCount: number;
  totalQuizzes: number;
}

export const QuizResults: React.FC<QuizResultsProps> = ({ correctCount, totalQuizzes }) => {
  const getScoreMessage = () => {
    const percentage = Math.round((correctCount / totalQuizzes) * 100);
    
    if (percentage >= 80) return "Excellent! You're a cosmic genius!";
    if (percentage >= 60) return "Good job! You're on your way to mastering this topic.";
    return "Keep learning! You'll get there with practice.";
  };

  return (
    <div className="mt-4 p-4 rounded-md bg-purple-900/30 border border-purple-500/20">
      <h4 className="text-lg font-semibold text-purple-200 mb-2">Challenge Complete!</h4>
      <p className="text-white mb-2">
        Final score: {correctCount}/{totalQuizzes}
      </p>
      <p className="text-yellow-300">{getScoreMessage()}</p>
    </div>
  );
};
