
import React, { useState } from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { HelpCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { TitleWrapper } from "./TitleWrapper";
import { QuizIntro } from "./quiz/QuizIntro";
import { QuizQuestion } from "./quiz/QuizQuestion";
import { QuizFeedback } from "./quiz/QuizFeedback";
import { QuizResults } from "./quiz/QuizResults";

interface QuizContentProps {
  section: CourseSection;
  quizSubmitted: boolean;
  selectedAnswer: number | null;
  setSelectedAnswer: (answer: number) => void;
  handleQuizSubmit: () => void;
  onComplete: () => void;
  onPrevious: () => void;
  isFirstContent: boolean;
}

export const QuizContent = ({ 
  section,
  quizSubmitted,
  selectedAnswer,
  setSelectedAnswer,
  handleQuizSubmit,
  onComplete,
  onPrevious,
  isFirstContent
}: QuizContentProps) => {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizResults, setQuizResults] = useState<boolean[]>([]);
  const [showIntro, setShowIntro] = useState(true);
  
  const currentQuiz = section.quizzes ? section.quizzes[currentQuizIndex] : section.quiz;
  const totalQuizzes = section.quizzes ? section.quizzes.length : 1;
  const isLastQuiz = section.quizzes ? currentQuizIndex === totalQuizzes - 1 : true;
  
  const handleNextQuiz = () => {
    const isCorrect = selectedAnswer === currentQuiz.correctAnswer;
    setQuizResults([...quizResults, isCorrect]);
    
    if (currentQuizIndex < totalQuizzes - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
      setSelectedAnswer(null);
      handleQuizSubmit(); // Reset quiz submission state
    }
  };
  
  const getCorrectAnswersCount = () => {
    return quizResults.filter(result => result).length;
  };
  
  if (showIntro) {
    return (
      <QuizIntro
        totalQuizzes={totalQuizzes}
        onStart={() => setShowIntro(false)}
        onPrevious={onPrevious}
        isFirstContent={isFirstContent}
      />
    );
  }
  
  return (
    <div className="w-full h-full">
      <Card className="w-full h-full overflow-auto p-4 bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
        <TitleWrapper 
          icon={<HelpCircle className="h-5 w-5 text-orange-400 mr-2" />}
          title={`Challenge ${currentQuizIndex + 1} of ${totalQuizzes}`} 
          color="bg-orange-900/30"
        />
        
        <p className="text-lg text-transparent bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text font-medium mb-4 px-1">
          {!quizSubmitted ? "Select the correct answer to proceed." : "Review your answer below."}
        </p>
        
        <QuizQuestion
          quiz={currentQuiz}
          selectedAnswer={selectedAnswer}
          quizSubmitted={quizSubmitted}
          onSelectAnswer={setSelectedAnswer}
          onSubmit={handleQuizSubmit}
        />
        
        {quizSubmitted && (
          <QuizFeedback
            isCorrect={selectedAnswer === currentQuiz.correctAnswer}
            correctAnswerText={currentQuiz.options[currentQuiz.correctAnswer]}
          />
        )}
        
        {/* Results summary when all quizzes are completed */}
        {quizSubmitted && isLastQuiz && quizResults.length === totalQuizzes - 1 && (
          <QuizResults
            correctCount={getCorrectAnswersCount() + (selectedAnswer === currentQuiz.correctAnswer ? 1 : 0)}
            totalQuizzes={totalQuizzes}
          />
        )}
        
        <div className="mt-4 flex justify-between">
          {!isFirstContent && (
            <Button 
              onClick={onPrevious}
              variant="outline"
              className="border-purple-500/30 text-purple-300 hover:bg-purple-900/30"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Previous
            </Button>
          )}
          {quizSubmitted && (
            <div className={!isFirstContent ? "" : "ml-auto"}>
              {!isLastQuiz ? (
                <Button
                  onClick={handleNextQuiz}
                  className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800"
                >
                  Next Question <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={onComplete}
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                  disabled={quizResults.length < totalQuizzes - 1}
                >
                  Complete Section <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
