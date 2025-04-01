
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
  setSelectedAnswer: (answer: number | null) => void;
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
  const [localQuizSubmitted, setLocalQuizSubmitted] = useState(false);
  const [localSelectedAnswer, setLocalSelectedAnswer] = useState<number | null>(null);
  
  // Use the appropriate quiz based on whether we have multiple quizzes or just one
  const quizzes = section.quizzes || [section.quiz];
  const currentQuiz = quizzes[currentQuizIndex];
  const totalQuizzes = quizzes.length;
  const isLastQuiz = currentQuizIndex === totalQuizzes - 1;
  
  const handleSelectAnswer = (index: number) => {
    setLocalSelectedAnswer(index);
  };
  
  const handleSubmitQuiz = () => {
    if (localSelectedAnswer !== null) {
      setLocalQuizSubmitted(true);
    }
  };
  
  const handleNextQuiz = () => {
    const isCorrect = localSelectedAnswer === currentQuiz.correctAnswer;
    setQuizResults([...quizResults, isCorrect]);
    
    if (currentQuizIndex < totalQuizzes - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
      setLocalSelectedAnswer(null);
      setLocalQuizSubmitted(false);
    }
  };
  
  const getCorrectAnswersCount = () => {
    const completedResults = [...quizResults];
    if (localQuizSubmitted) {
      const isCurrentCorrect = localSelectedAnswer === currentQuiz.correctAnswer;
      completedResults.push(isCurrentCorrect);
    }
    return completedResults.filter(result => result).length;
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
        <div className="flex items-center justify-between mb-4">
          <TitleWrapper 
            icon={<HelpCircle className="h-5 w-5 text-orange-400 mr-2" />}
            title={`Challenge ${currentQuizIndex + 1} of ${totalQuizzes}`} 
            color="bg-orange-900/30"
          />
          
          <div className="flex space-x-2">
            {!isFirstContent && currentQuizIndex === 0 && !localQuizSubmitted && (
              <Button 
                onClick={onPrevious}
                variant="outline"
                size="sm"
                className="border-purple-500/30 text-purple-300 hover:bg-purple-900/30"
              >
                <ArrowLeft className="h-4 w-4 mr-2" /> Previous
              </Button>
            )}
            
            {currentQuizIndex > 0 && !localQuizSubmitted && (
              <Button 
                onClick={() => {
                  setCurrentQuizIndex(currentQuizIndex - 1);
                  setLocalSelectedAnswer(null);
                  // Remove the last result since we're going back
                  setQuizResults(prevResults => prevResults.slice(0, -1));
                }}
                variant="outline"
                size="sm"
                className="border-purple-500/30 text-purple-300 hover:bg-purple-900/30"
              >
                <ArrowLeft className="h-4 w-4 mr-2" /> Previous Question
              </Button>
            )}
            
            {localQuizSubmitted && (
              !isLastQuiz ? (
                <Button
                  onClick={handleNextQuiz}
                  size="sm"
                  className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800"
                >
                  Next Question <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={onComplete}
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                >
                  Complete Section <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )
            )}
          </div>
        </div>
        
        <p className="text-lg text-transparent bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text font-medium mb-4 px-1">
          {!localQuizSubmitted ? "Select the correct answer to proceed." : "Review your answer below."}
        </p>
        
        <QuizQuestion
          quiz={currentQuiz}
          selectedAnswer={localSelectedAnswer}
          quizSubmitted={localQuizSubmitted}
          onSelectAnswer={handleSelectAnswer}
          onSubmit={handleSubmitQuiz}
        />
        
        {localQuizSubmitted && (
          <QuizFeedback
            isCorrect={localSelectedAnswer === currentQuiz.correctAnswer}
            correctAnswerText={currentQuiz.options[currentQuiz.correctAnswer]}
          />
        )}
        
        {/* Results summary when all quizzes are completed */}
        {localQuizSubmitted && isLastQuiz && quizResults.length === totalQuizzes - 1 && (
          <QuizResults
            correctCount={getCorrectAnswersCount()}
            totalQuizzes={totalQuizzes}
          />
        )}
      </Card>
    </div>
  );
};
