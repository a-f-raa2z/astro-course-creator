
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Youtube, ListChecks, ArrowRight } from "lucide-react";

interface CompletionViewProps {
  sectionTitle: string;
  onReviewKeyPoints?: () => void;
  onRewatchVideo: () => void;
  onContinue: () => void;
  showKeyPointsButton?: boolean;
  nextSectionTitle?: string;
  onStartNextSection?: () => void;
}

export const CompletionView = ({ 
  sectionTitle, 
  onReviewKeyPoints, 
  onRewatchVideo, 
  onContinue,
  showKeyPointsButton = true,
  nextSectionTitle,
  onStartNextSection
}: CompletionViewProps) => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center p-8 text-center">
      <div className="animate-bounce mb-6">
        <CheckCircle className="h-20 w-20 text-green-500" />
      </div>
      <h3 className="text-2xl font-bold text-green-300 mb-4">
        Lesson Completed!
      </h3>
      <p className="text-purple-200 max-w-md mb-8">
        Great job! You've completed the video lesson {showKeyPointsButton ? "and mastered the key concepts" : ""} for {sectionTitle}.
      </p>
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {showKeyPointsButton && onReviewKeyPoints && (
          <Button
            onClick={onReviewKeyPoints}
            variant="outline"
            className="border-purple-500/30 text-purple-300 hover:bg-purple-900/30 mb-2 sm:mb-0"
          >
            <ListChecks className="h-4 w-4 mr-2" /> Review Key Points
          </Button>
        )}
        <Button 
          onClick={onRewatchVideo}
          variant="outline"
          className="border-red-500/30 text-red-300 hover:bg-red-900/30 mb-2 sm:mb-0"
        >
          <Youtube className="h-4 w-4 mr-2" /> Rewatch Video
        </Button>
        <Button 
          onClick={onContinue}
          className="bg-green-600 hover:bg-green-700 mb-2 sm:mb-0"
        >
          Continue <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
      
      {nextSectionTitle && onStartNextSection && (
        <div className="mt-8 border-t pt-6 border-purple-500/30 w-full max-w-md">
          <p className="text-purple-200 mb-4">Ready for your next adventure?</p>
          <Button 
            onClick={onStartNextSection}
            className="bg-purple-600 hover:bg-purple-700"
          >
            Start Next Section: {nextSectionTitle} <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      )}
    </div>
  );
};
