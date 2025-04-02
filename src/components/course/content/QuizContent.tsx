
import React from "react";
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

  return (
    <div className="w-full h-full p-6 flex flex-col">
      <TitleWrapper title="Quiz" subtitle="Test your knowledge">
        <div className="flex-1">
          {!quizSubmitted ? (
            <>
              <QuizIntro 
                introText={section.quizIntro || "Let's test your knowledge on what you've learned!"} 
              />
              <QuizQuestion
                question={section.quiz.question}
                options={section.quiz.options}
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
                isCorrect={selectedAnswer === section.quiz.correctAnswer}
                correctAnswerIndex={section.quiz.correctAnswer}
              />
              <QuizResults 
                question={section.quiz.question}
                options={section.quiz.options}
                selectedAnswer={selectedAnswer || 0}
                correctAnswer={section.quiz.correctAnswer}
              />
              
              {/* Removed the "Continue" button here - will now only show Next Section button if there's a next section */}
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
                
                {/* Only show the Next Section button if we have a next section */}
                {hasNextSection && (
                  <Button 
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={onStartNextSection}
                  >
                    Start Next Section
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      </TitleWrapper>
    </div>
  );
};
