
import React, { useState } from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Youtube, ArrowRight, ArrowLeft, CheckCircle, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { TitleWrapper } from "./TitleWrapper";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

interface VideoContentProps {
  section: CourseSection;
  onComplete: () => void;
  onPrevious: () => void;
  isFirstContent: boolean;
}

export const VideoContent = ({ section, onComplete, onPrevious, isFirstContent }: VideoContentProps) => {
  const [videoWatched, setVideoWatched] = useState(false);
  const [videoCompleted, setVideoCompleted] = useState(false);
  const [checkedPoints, setCheckedPoints] = useState<number[]>([]);
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
  };

  const handleCheck = (idx: number) => {
    if (checkedPoints.includes(idx)) {
      setCheckedPoints(checkedPoints.filter(i => i !== idx));
    } else {
      const newCheckedPoints = [...checkedPoints, idx];
      setCheckedPoints(newCheckedPoints);
      
      if (newCheckedPoints.length === section.keyPoints.length) {
        toast({
          title: "All Points Checked!",
          description: "You've successfully remembered all the key points. Great job!"
        });
      }
    }
  };
  
  const allChecked = checkedPoints.length === section.keyPoints.length;
  
  const handleFinishReview = () => {
    setVideoCompleted(true);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <Card className="w-full h-full overflow-hidden flex flex-col bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
        {!videoWatched ? (
          <>
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
                <Button 
                  onClick={handleVideoComplete}
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                >
                  Complete Video <CheckCircle className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </>
        ) : !videoCompleted ? (
          <>
            <div className="p-4">
              <TitleWrapper 
                icon={<CheckCircle className="h-5 w-5 text-green-500 mr-2" />}
                title="Key Points to Remember" 
                color="bg-green-900/30"
              />
              
              <p className="text-lg text-transparent bg-gradient-to-r from-green-300 to-green-100 bg-clip-text font-medium mb-4 px-1">
                Check off each key point from the video to confirm you remember it before moving on.
              </p>
            </div>
            
            <div className="p-4 flex-grow overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                        id={`video-point-${idx}`} 
                        checked={checkedPoints.includes(idx)}
                        onCheckedChange={() => handleCheck(idx)}
                        className="mr-2 mt-1 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                      />
                      <label 
                        htmlFor={`video-point-${idx}`} 
                        className={`text-gray-200 ${checkedPoints.includes(idx) ? "line-through text-gray-400" : ""} group-hover:text-white transition-colors`}
                      >
                        {point}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
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
                <Button 
                  onClick={handleFinishReview}
                  className={`
                    transition-all ${allChecked 
                      ? "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800" 
                      : "bg-gray-700 text-gray-300 cursor-not-allowed"
                    }
                  `}
                  disabled={!allChecked}
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  {allChecked ? "Complete Review" : `Check all points (${checkedPoints.length}/${section.keyPoints.length})`}
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center p-8 h-full text-center">
            <div className="mb-6">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Video Completed!</h2>
              <p className="text-purple-200 mb-6">
                Great job! You've completed the main video for this section and reviewed the key points.
              </p>
            </div>
            
            <div className="flex space-x-4">
              {!isFirstContent && (
                <Button 
                  onClick={onPrevious}
                  variant="outline"
                  className="border-purple-500/30 text-purple-300 hover:bg-purple-900/30"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" /> Previous
                </Button>
              )}
              <Button 
                onClick={onComplete}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
              >
                Continue Learning <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};
