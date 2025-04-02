
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CourseSection } from "@/types/course";
import { QuizIntro } from "./quiz/QuizIntro";
import { QuizQuestion } from "./quiz/QuizQuestion";
import { QuizFeedback } from "./quiz/QuizFeedback";
import { QuizResults } from "./quiz/QuizResults";
import { ChevronLeft } from "lucide-react";
import { TitleWrapper } from "./TitleWrapper";
import { SectionTransition } from "./SectionTransition";

interface QuizContentProps {
  section: CourseSection;
  quizSubmitted: boolean;
  selectedAnswer: number | null;
  setSelectedAnswer: (answer: number | null) => void;
  handleQuizSubmit: () => void;
  onComplete: () => void;
  onPrevious: () => void;
  isFirstContent: boolean;
  showSectionTransition?: boolean;
  nextSectionTitle?: string;
  onStartNextSection?: () => void;
  nextSection?: CourseSection | null;
}

export const QuizContent: React.FC<QuizContentProps> = ({
  section,
  quizSubmitted,
  selectedAnswer,
  setSelectedAnswer,
  handleQuizSubmit,
  onComplete,
  onPrevious,
  isFirstContent,
  showSectionTransition = false,
  nextSectionTitle,
  onStartNextSection,
  nextSection
}) => {
  const hasNextSection = !!nextSection;
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  
  // Use either the quizzes array or create one with the single quiz
  const quizzes = section.quizzes || [section.quiz];
  
  // Get the current quiz
  const currentQuiz = quizzes[currentQuizIndex];

  // Get the correct answer text for feedback
  const getCorrectAnswerText = () => {
    if (currentQuiz && typeof currentQuiz.correctAnswer === 'number') {
      return currentQuiz.options[currentQuiz.correctAnswer];
    }
    return "";
  };

  // Handle moving to the next quiz
  const handleNextQuiz = () => {
    if (currentQuizIndex < quizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
      setSelectedAnswer(null);
    }
  };

  // Handle moving to the previous quiz
  const handlePrevQuiz = () => {
    if (currentQuizIndex > 0) {
      setCurrentQuizIndex(currentQuizIndex - 1);
      setSelectedAnswer(null);
    }
  };

  return (
    <div className="w-full h-full p-6 flex flex-col">
      <TitleWrapper title="Quiz" subtitle="Test your knowledge">
        <div className="flex-1">
          {!quizSubmitted ? (
            <>
              <QuizIntro 
                introText={section.quizIntro || "Let's test your knowledge on what you've learned!"} 
              />
              
              {/* Show quiz progress for multiple quizzes */}
              {quizzes.length > 1 && (
                <div className="mb-4 flex justify-between items-center">
                  <span className="text-sm text-purple-300">
                    Quiz {currentQuizIndex + 1} of {quizzes.length}
                  </span>
                  <div className="flex space-x-1">
                    {quizzes.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={`w-3 h-1 rounded-full ${currentQuizIndex === idx ? 'bg-purple-500' : 'bg-purple-500/30'}`}
                      />
                    ))}
                  </div>
                </div>
              )}
              
              <QuizQuestion
                question={currentQuiz.question}
                options={currentQuiz.options}
                selectedAnswer={selectedAnswer}
                setSelectedAnswer={setSelectedAnswer}
              />
              <div className="flex justify-between mt-8">
                {!isFirstContent && (
                  <Button 
                    variant="outline" 
                    className="bg-purple-900/30 text-purple-300 border-purple-500/50 hover:bg-purple-800/50 hover:text-purple-200"
                    onClick={onPrevious}
                  >
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                )}
                <div className="flex-grow"></div>
                <Button 
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                  onClick={handleQuizSubmit}
                  disabled={selectedAnswer === null}
                >
                  Submit Answer
                </Button>
              </div>
            </>
          ) : (
            <>
              <QuizFeedback 
                isCorrect={selectedAnswer === currentQuiz.correctAnswer}
                correctAnswerText={getCorrectAnswerText()}
                correctAnswerIndex={currentQuiz.correctAnswer}
              />
              <QuizResults 
                question={currentQuiz.question}
                options={currentQuiz.options}
                selectedAnswer={selectedAnswer || 0}
                correctAnswer={currentQuiz.correctAnswer}
              />
              
              <div className="flex justify-between mt-8">
                {!isFirstContent && (
                  <Button 
                    variant="outline" 
                    className="bg-purple-900/30 text-purple-300 border-purple-500/50 hover:bg-purple-800/50 hover:text-purple-200"
                    onClick={onPrevious}
                  >
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                )}
                <div className="flex-grow"></div>
                
                {currentQuizIndex < quizzes.length - 1 ? (
                  <Button 
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={() => {
                      handleNextQuiz();
                      setSelectedAnswer(null);
                    }}
                  >
                    Next Quiz
                  </Button>
                ) : hasNextSection ? (
                  <Button 
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={onStartNextSection}
                  >
                    Start Next Section
                  </Button>
                ) : null}
              </div>
            </>
          )}
        </div>
      </TitleWrapper>
    </div>
  );
};
