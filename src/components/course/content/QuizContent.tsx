
import React, { useState } from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { HelpCircle, ArrowRight, Award, ArrowLeft, Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { TitleWrapper } from "./TitleWrapper";

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
  
  const getScoreMessage = () => {
    const score = getCorrectAnswersCount();
    const total = quizResults.length;
    const percentage = Math.round((score / total) * 100);
    
    if (percentage >= 80) return "Excellent! You're a cosmic genius!";
    if (percentage >= 60) return "Good job! You're on your way to mastering this topic.";
    return "Keep learning! You'll get there with practice.";
  };
  
  if (showIntro) {
    return (
      <div className="w-full h-full">
        <Card className="w-full h-full overflow-auto p-4 bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
          <TitleWrapper 
            icon={<HelpCircle className="h-5 w-5 text-orange-400 mr-2" />}
            title="Final Challenge" 
            color="bg-orange-900/30"
          />
          
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-gradient-to-r from-orange-300 to-yellow-200 bg-clip-text">
              Ready for the Ultimate Challenge?
            </h3>
            
            <p className="text-lg mb-6 text-purple-100">
              You've learned a lot in this section. Now it's time to test your knowledge with a series of questions.
              Get ready to apply what you've learned!
            </p>
            
            <div className="p-4 bg-purple-900/30 rounded-lg border border-purple-500/30 mb-6 max-w-md">
              <p className="text-purple-200">
                <span className="font-semibold text-yellow-300">Challenge:</span> Complete {totalQuizzes} quiz questions 
                to demonstrate your understanding and earn bonus XP!
              </p>
            </div>
            
            <Button
              onClick={() => setShowIntro(false)}
              className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800"
            >
              Begin Challenge <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
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
          </div>
        </Card>
      </div>
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
        
        <div className="p-4 bg-space-cosmic-blue/20 backdrop-blur-sm rounded-lg border border-purple-500/20 mb-4">
          <p className="text-white">{currentQuiz.question}</p>
        </div>
        
        <div className="space-y-3 mb-4">
          {currentQuiz.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => !quizSubmitted && setSelectedAnswer(idx)}
              disabled={quizSubmitted}
              className={`w-full text-left p-3 rounded-md transition-all ${
                selectedAnswer === idx
                  ? quizSubmitted
                    ? idx === currentQuiz.correctAnswer
                      ? "bg-green-600/30 border border-green-500"
                      : "bg-red-600/30 border border-red-500"
                    : "bg-purple-700/50 border border-purple-500"
                  : "bg-blue-900/50 hover:bg-blue-800/70 border border-purple-400/20"
              }`}
            >
              <div className="flex justify-between items-center">
                <span>{option}</span>
                {quizSubmitted && selectedAnswer === idx && (
                  idx === currentQuiz.correctAnswer 
                    ? <Check className="h-4 w-4 text-green-400" /> 
                    : <X className="h-4 w-4 text-red-400" />
                )}
                {quizSubmitted && selectedAnswer !== idx && idx === currentQuiz.correctAnswer && (
                  <Check className="h-4 w-4 text-green-400" />
                )}
              </div>
            </button>
          ))}
        </div>
        
        {!quizSubmitted && (
          <div className="flex justify-center">
            <Button 
              onClick={handleQuizSubmit}
              disabled={selectedAnswer === null}
              className="bg-orange-600 hover:bg-orange-700"
            >
              Submit Answer
            </Button>
          </div>
        )}
        
        {quizSubmitted && (
          <div className="mt-4 p-4 rounded-md bg-space-cosmic-blue/20 border border-purple-400/20">
            {selectedAnswer === currentQuiz.correctAnswer ? (
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
                  {currentQuiz.options[currentQuiz.correctAnswer]}
                </p>
              </div>
            )}
          </div>
        )}
        
        {/* Results summary when all quizzes are completed */}
        {quizSubmitted && isLastQuiz && quizResults.length === totalQuizzes - 1 && (
          <div className="mt-4 p-4 rounded-md bg-purple-900/30 border border-purple-500/20">
            <h4 className="text-lg font-semibold text-purple-200 mb-2">Challenge Complete!</h4>
            <p className="text-white mb-2">
              Final score: {getCorrectAnswersCount() + (selectedAnswer === currentQuiz.correctAnswer ? 1 : 0)}/{totalQuizzes}
            </p>
            <p className="text-yellow-300">{getScoreMessage()}</p>
          </div>
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
