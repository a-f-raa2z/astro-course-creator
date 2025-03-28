
import React from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { HelpCircle, ArrowRight, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { TitleWrapper } from "./TitleWrapper";

interface QuizContentProps {
  section: CourseSection;
  quizSubmitted: boolean;
  selectedAnswer: number | null;
  setSelectedAnswer: (answer: number) => void;
  handleQuizSubmit: () => void;
  onComplete: () => void;
}

export const QuizContent = ({ 
  section,
  quizSubmitted,
  selectedAnswer,
  setSelectedAnswer,
  handleQuizSubmit,
  onComplete
}: QuizContentProps) => (
  <div className="h-[400px] w-full">
    <Card className="w-full h-full overflow-auto p-4 bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
      <TitleWrapper 
        icon={<HelpCircle className="h-5 w-5 text-orange-400 mr-2" />}
        title="Challenge Yourself" 
        color="bg-orange-900/30"
      />
      
      <div className="p-4 bg-space-cosmic-blue/20 backdrop-blur-sm rounded-lg border border-purple-500/20 mb-4">
        <p className="text-white">{section.quiz.question}</p>
      </div>
      
      <div className="space-y-3 mb-4">
        {section.quiz.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => !quizSubmitted && setSelectedAnswer(idx)}
            disabled={quizSubmitted}
            className={`w-full text-left p-3 rounded-md transition-all ${
              selectedAnswer === idx
                ? quizSubmitted
                  ? idx === section.quiz.correctAnswer
                    ? "bg-green-600/30 border border-green-500"
                    : "bg-red-600/30 border border-red-500"
                  : "bg-purple-700/50 border border-purple-500"
                : "bg-blue-900/50 hover:bg-blue-800/70 border border-purple-400/20"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      
      {!quizSubmitted && (
        <div className="flex justify-center">
          <Button 
            onClick={handleQuizSubmit}
            disabled={selectedAnswer === null}
            className="bg-purple-600 hover:bg-purple-700"
          >
            Submit Answer
          </Button>
        </div>
      )}
      
      {quizSubmitted && (
        <div className="mt-4 p-4 rounded-md bg-space-cosmic-blue/20 border border-purple-400/20">
          {selectedAnswer === section.quiz.correctAnswer ? (
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
                {section.quiz.options[section.quiz.correctAnswer]}
              </p>
            </div>
          )}
          
          <div className="flex justify-end mt-4">
            <Button
              onClick={onComplete}
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
              disabled={selectedAnswer !== section.quiz.correctAnswer}
            >
              {selectedAnswer === section.quiz.correctAnswer ? (
                <>Continue <ArrowRight className="ml-2 h-4 w-4" /></>
              ) : (
                "Try Again"
              )}
            </Button>
          </div>
        </div>
      )}
    </Card>
  </div>
);
