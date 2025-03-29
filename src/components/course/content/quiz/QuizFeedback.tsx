
import React from "react";
import { Award } from "lucide-react";

interface QuizFeedbackProps {
  isCorrect: boolean;
  correctAnswerText?: string;
}

export const QuizFeedback: React.FC<QuizFeedbackProps> = ({ 
  isCorrect, 
  correctAnswerText 
}) => {
  return (
    <div className="mt-4 p-4 rounded-md bg-space-cosmic-blue/20 border border-purple-400/20">
      {isCorrect ? (
        <div className="flex items-center">
          <Award className="h-6 w-6 text-yellow-400 mr-2" />
          <div>
            <p className="text-green-400 font-semibold">✓ Correct! Well done.</p>
            <p className="text-sm text-purple-300">+20 XP bonus for correct answer!</p>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-red-400">✗ Not quite. The correct answer is:</p>
          <p className="text-white mt-2 p-2 bg-green-900/20 border border-green-500/20 rounded">
            {correctAnswerText}
          </p>
        </div>
      )}
    </div>
  );
};
