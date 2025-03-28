
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AssessmentQuestion, BlankOption } from "@/types/course";

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
  const [draggedOption, setDraggedOption] = useState<BlankOption | null>(null);
  const [filledBlank, setFilledBlank] = useState<string | null>(null);
  
  // Reset state when question changes
  useEffect(() => {
    setFilledBlank(null);
    setDraggedOption(null);
  }, [question.id]);
  
  // Handle drag start of an option
  const handleDragStart = (option: BlankOption) => {
    setDraggedOption(option);
  };
  
  // Handle drag over the blank area
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  
  // Handle drop into the blank area
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (draggedOption) {
      setFilledBlank(draggedOption.value);
    }
  };
  
  // Handle drag end
  const handleDragEnd = () => {
    if (!filledBlank) {
      setDraggedOption(null);
    }
  };
  
  // Clear the filled blank
  const handleClearBlank = () => {
    setFilledBlank(null);
    setDraggedOption(null);
  };
  
  const handleContinue = () => {
    if (filledBlank) {
      onAnswer(question.id, filledBlank);
    }
  };
  
  // Render the template with a blank
  const renderTemplate = () => {
    if (!question.template) return null;
    
    return (
      <div className="text-lg text-white mb-6">
        {question.template.split('___').map((part, index, array) => (
          <React.Fragment key={index}>
            {part}
            {index < array.length - 1 && (
              <div 
                className={`inline-flex items-center justify-center min-w-32 h-10 px-3 mx-1 rounded-md ${
                  filledBlank 
                    ? "bg-nebula-purple text-white" 
                    : "bg-purple-500/30 border border-purple-400/20 text-white/50"
                }`}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                {filledBlank ? (
                  <div className="flex items-center gap-2">
                    <span>{draggedOption?.text}</span>
                    <button 
                      onClick={handleClearBlank}
                      className="text-xs text-white/70 hover:text-white"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <span>___</span>
                )}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <Card className="cosmic-card w-full max-w-2xl animate-fade-in">
      <CardContent className="pt-6">
        {question.template && (
          <>
            {renderTemplate()}
            
            <div className="flex flex-wrap gap-3 mt-6">
              {question.blanks?.map((option) => (
                <div
                  key={option.id}
                  draggable={!filledBlank || (draggedOption?.id === option.id)}
                  onDragStart={() => handleDragStart(option)}
                  onDragEnd={handleDragEnd}
                  className={`p-3 rounded-lg text-left transition-all cursor-grab active:cursor-grabbing ${
                    draggedOption?.id === option.id && filledBlank 
                      ? "bg-nebula-purple/50 text-white/70" 
                      : filledBlank && draggedOption?.id !== option.id
                        ? "opacity-50 bg-space-cosmic-blue/50 text-white/50"
                        : "bg-space-cosmic-blue/50 hover:bg-space-cosmic-blue/80 text-white/90"
                  }`}
                >
                  {option.text}
                </div>
              ))}
            </div>
          </>
        )}
        
        {question.answers && (
          <div className="flex flex-col space-y-3">
            {question.answers.map((answer) => (
              <button
                key={answer.id}
                onClick={() => setFilledBlank(answer.value)}
                className={`p-4 rounded-lg text-left transition-all ${
                  filledBlank === answer.value 
                    ? "bg-nebula-purple text-white" 
                    : "bg-space-cosmic-blue/50 hover:bg-space-cosmic-blue/80 text-white/90"
                }`}
              >
                {answer.text}
              </button>
            ))}
          </div>
        )}
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
          disabled={!filledBlank}
          className="cosmic-button"
        >
          {isLast ? "Generate My Course" : "Continue"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuestionCard;
