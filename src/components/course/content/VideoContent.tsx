
import React, { useState } from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Youtube, ArrowRight, ArrowLeft, CheckCircle, ListChecks, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { TitleWrapper } from "./TitleWrapper";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";

interface VideoContentProps {
  section: CourseSection;
  onComplete: () => void;
  onPrevious: () => void;
  isFirstContent: boolean;
}

export const VideoContent = ({ section, onComplete, onPrevious, isFirstContent }: VideoContentProps) => {
  const [videoWatched, setVideoWatched] = useState(false);
  const [showKeyPoints, setShowKeyPoints] = useState(false);
  const [checkedPoints, setCheckedPoints] = useState<number[]>([]);
  const [showCompletionView, setShowCompletionView] = useState(false);
  const { toast } = useToast();
  
  // Get video description based on section title
  const getVideoDescription = (sectionTitle: string) => {
    const descriptionMap: Record<string, string> = {
      "The Inner Planets": "Explore Mercury, Venus, Earth, and Mars - the four terrestrial planets closest to the Sun.",
      "Earth": "Our home planet - the blue marble of the Solar System and the only known world with abundant liquid water.",
      "The Moon": "Earth's natural satellite and our closest celestial neighbor."
    };
    
    return descriptionMap[sectionTitle] || "A comprehensive overview of our cosmic neighborhood and the celestial bodies within it.";
  };
  
  const videoDescription = getVideoDescription(section.title);

  const handleVideoComplete = () => {
    setVideoWatched(true);
    toast({
      title: "Video Completed!",
      description: "Great job! Here are the key points to remember from this lesson."
    });
    setShowKeyPoints(true);
  };

  const handleAllPointsChecked = () => {
    setShowCompletionView(true);
    toast({
      title: "All Points Checked!",
      description: "You've mastered the key concepts of this lesson."
    });
  };

  const handleContinue = () => {
    onComplete();
  };

  const handleCheck = (idx: number) => {
    if (checkedPoints.includes(idx)) {
      setCheckedPoints(checkedPoints.filter(i => i !== idx));
    } else {
      const newCheckedPoints = [...checkedPoints, idx];
      setCheckedPoints(newCheckedPoints);
      
      if (newCheckedPoints.length === section.keyPoints.length) {
        handleAllPointsChecked();
      }
    }
  };
  
  const allChecked = checkedPoints.length === section.keyPoints.length;

  return (
    <div className="w-full h-full flex flex-col">
      <Card className="w-full h-full overflow-hidden flex flex-col bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
        <div className="p-4">
          <TitleWrapper 
            icon={<Youtube className="h-5 w-5 text-red-500 mr-2" />}
            title="Main Video Lesson" 
            color="bg-red-900/30"
          />
          <p className="text-lg text-transparent bg-gradient-to-r from-red-300 to-red-100 bg-clip-text font-medium mb-4 px-1">
            {videoDescription}
          </p>
        </div>
        
        {!showKeyPoints && !showCompletionView ? (
          <div className="flex-grow relative">
            <AspectRatio ratio={16/9} className="h-full">
              <iframe 
                className="w-full h-full"
                src={section.videoUrl}
                title={`Video for ${section.title}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </AspectRatio>
          </div>
        ) : showKeyPoints && !showCompletionView ? (
          <div className="flex-grow p-4 overflow-y-auto">
            <div className="bg-purple-900/30 rounded-lg p-4 mb-4 border border-purple-500/30">
              <h3 className="text-xl font-semibold text-purple-100 flex items-center mb-4">
                <ListChecks className="h-5 w-5 mr-2 text-purple-300" />
                Key Points to Remember
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {section.keyPoints.map((point, idx) => (
                  <div 
                    key={idx} 
                    className={`flex flex-col p-4 rounded-md h-full transition-all duration-300 ${
                      checkedPoints.includes(idx) 
                        ? "border-green-500/50 bg-green-900/20" 
                        : "border-purple-500/20 bg-space-cosmic-blue/10"
                    } border cursor-pointer group relative overflow-hidden`}
                    onClick={() => handleCheck(idx)}
                  >
                    {/* Check overlay */}
                    {checkedPoints.includes(idx) && (
                      <div className="absolute inset-0 flex items-center justify-center bg-green-900/40 z-10">
                        <Check className="h-16 w-16 text-green-400 opacity-70" />
                      </div>
                    )}
                    
                    <div className="flex items-start h-full">
                      <Checkbox 
                        id={`point-${idx}`} 
                        checked={checkedPoints.includes(idx)}
                        onCheckedChange={() => handleCheck(idx)}
                        className="mr-2 mt-1 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                      />
                      <label 
                        htmlFor={`point-${idx}`} 
                        className={`text-gray-200 ${checkedPoints.includes(idx) ? "line-through text-gray-400" : ""} group-hover:text-white transition-colors`}
                      >
                        {point}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-grow flex flex-col items-center justify-center p-8 text-center">
            <div className="animate-bounce mb-6">
              <CheckCircle className="h-20 w-20 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-green-300 mb-4">
              Lesson Completed!
            </h3>
            <p className="text-purple-200 max-w-md mb-8">
              Great job! You've completed the video lesson and mastered the key concepts for {section.title}.
            </p>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <Button
                onClick={() => setShowKeyPoints(true)}
                variant="outline"
                className="border-purple-500/30 text-purple-300 hover:bg-purple-900/30 mb-2 sm:mb-0"
              >
                <ListChecks className="h-4 w-4 mr-2" /> Review Key Points
              </Button>
              <Button 
                onClick={() => {
                  setShowKeyPoints(false);
                  setShowCompletionView(false);
                }}
                variant="outline"
                className="border-red-500/30 text-red-300 hover:bg-red-900/30 mb-2 sm:mb-0"
              >
                <Youtube className="h-4 w-4 mr-2" /> Rewatch Video
              </Button>
              <Button 
                onClick={handleContinue}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
              >
                Continue <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
        
        <div className="p-4 flex justify-between">
          {!isFirstContent && (
            <Button 
              onClick={onPrevious}
              variant="outline"
              className="border-purple-500/30 text-purple-300 hover:bg-purple-900/30"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Previous
            </Button>
          )}
          <div className={!isFirstContent ? "" : "ml-auto"}>
            {!showKeyPoints && !showCompletionView ? (
              <Button 
                onClick={handleVideoComplete}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
              >
                Complete Video <CheckCircle className="h-4 w-4 ml-2" />
              </Button>
            ) : showKeyPoints && !showCompletionView ? (
              <Button 
                onClick={allChecked ? handleAllPointsChecked : undefined}
                className={`
                  transition-all ${allChecked 
                    ? "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800" 
                    : "bg-gray-700 text-gray-300 cursor-not-allowed"
                  }
                `}
                disabled={!allChecked}
              >
                {allChecked ? "Continue" : `Check all points (${checkedPoints.length}/${section.keyPoints.length})`}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button 
                onClick={handleContinue}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
              >
                Continue <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};
