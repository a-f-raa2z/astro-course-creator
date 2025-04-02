
import React from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuizQuestionProps {
  quiz?: {
    question: string;
    options: string[];
    correctAnswer: number;
  };
  question?: string;
  options?: string[];
  selectedAnswer: number | null;
  quizSubmitted?: boolean;
  onSelectAnswer?: (index: number) => void;
  onSubmit?: () => void;
  setSelectedAnswer?: (index: number | null) => void;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  quiz,
  question,
  options,
  selectedAnswer,
  quizSubmitted = false,
  onSelectAnswer,
  onSubmit,
  setSelectedAnswer
}) => {
  const questionText = question || (quiz ? quiz.question : "");
  const questionOptions = options || (quiz ? quiz.options : []);
  
  const handleSelect = (idx: number) => {
    if (onSelectAnswer) onSelectAnswer(idx);
    if (setSelectedAnswer) setSelectedAnswer(idx);
  };

  return (
    <div className="space-y-4">
      <div className="p-4 bg-space-cosmic-blue/20 backdrop-blur-sm rounded-lg border border-purple-500/20 mb-4">
        <p className="text-white">{questionText}</p>
      </div>
      
      <div className="space-y-3 mb-4">
        {questionOptions.map((option, idx) => (
          <button
            key={idx}
            onClick={() => !quizSubmitted && handleSelect(idx)}
            disabled={quizSubmitted}
            className={`w-full text-left p-3 rounded-md transition-all ${
              selectedAnswer === idx
                ? quizSubmitted && quiz
                  ? idx === quiz.correctAnswer
                    ? "bg-green-600/30 border border-green-500"
                    : "bg-red-600/30 border border-red-500"
                  : "bg-purple-700/50 border border-purple-500"
                : "bg-blue-900/50 hover:bg-blue-800/70 border border-purple-400/20"
            }`}
          >
            <div className="flex justify-between items-center">
              <span>{option}</span>
              {quizSubmitted && quiz && selectedAnswer === idx && (
                idx === quiz.correctAnswer 
                  ? <Check className="h-4 w-4 text-green-400" /> 
                  : <X className="h-4 w-4 text-red-400" />
              )}
              {quizSubmitted && quiz && selectedAnswer !== idx && idx === quiz.correctAnswer && (
                <Check className="h-4 w-4 text-green-400" />
              )}
            </div>
          </button>
        ))}
      </div>
      
      {!quizSubmitted && onSubmit && (
        <div className="flex justify-center">
          <Button 
            onClick={onSubmit}
            disabled={selectedAnswer === null}
            className="bg-orange-600 hover:bg-orange-700"
          >
            Submit Answer
          </Button>
        </div>
      )}
    </div>
  );
};
