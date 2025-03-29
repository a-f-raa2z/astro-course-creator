
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { TitleWrapper } from "../TitleWrapper";

interface QuizIntroProps {
  totalQuizzes: number;
  onStart: () => void;
  onPrevious: () => void;
  isFirstContent: boolean;
}

export const QuizIntro: React.FC<QuizIntroProps> = ({ 
  totalQuizzes, 
  onStart, 
  onPrevious, 
  isFirstContent 
}) => {
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
            onClick={onStart}
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
};
