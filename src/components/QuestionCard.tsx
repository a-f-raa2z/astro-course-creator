
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AssessmentAnswer, AssessmentQuestion } from "@/types/course";
import { useState } from "react";

interface QuestionCardProps {
  question: AssessmentQuestion;
  onAnswer: (questionId: string, answer: string) => void;
  onPrevious?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}

const QuestionCard = ({ 
  question, 
  onAnswer, 
  onPrevious,
  isFirst = false,
  isLast = false
}: QuestionCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswerSelect = (answer: AssessmentAnswer) => {
    setSelectedAnswer(answer.id);
  };

  const handleContinue = () => {
    if (selectedAnswer) {
      const answer = question.answers.find(a => a.id === selectedAnswer);
      if (answer) {
        onAnswer(question.id, answer.value);
      }
    }
  };

  return (
    <Card className="cosmic-card w-full max-w-2xl animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl text-purple-100">{question.question}</CardTitle>
        {question.description && (
          <CardDescription className="text-purple-200/80">{question.description}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-3">
          {question.answers.map((answer) => (
            <button
              key={answer.id}
              onClick={() => handleAnswerSelect(answer)}
              className={`p-4 rounded-lg text-left transition-all ${
                selectedAnswer === answer.id 
                  ? "bg-nebula-purple text-white" 
                  : "bg-space-cosmic-blue/50 hover:bg-space-cosmic-blue/80 text-white/90"
              }`}
            >
              {answer.text}
            </button>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {!isFirst && (
          <Button 
            variant="outline" 
            onClick={onPrevious}
            className="border-purple-400/30 text-purple-200 hover:bg-purple-900/20"
          >
            Previous
          </Button>
        )}
        {isFirst && <div></div>}
        <Button 
          onClick={handleContinue}
          disabled={!selectedAnswer}
          className="cosmic-button"
        >
          {isLast ? "Generate My Course" : "Continue"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuestionCard;
