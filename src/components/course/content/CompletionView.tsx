
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Youtube, ArrowRight, ListChecks } from "lucide-react";

interface CompletionViewProps {
  sectionTitle: string;
  onReviewKeyPoints?: () => void;
  onRewatchVideo: () => void;
  onContinue: () => void;
  showKeyPointsButton?: boolean;
}

export const CompletionView = ({ 
  sectionTitle, 
  onReviewKeyPoints, 
  onRewatchVideo, 
  onContinue,
  showKeyPointsButton = true
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
        {/* Removed the Continue button here */}
      </div>
    </div>
  );
};
