
import React, { useState } from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Youtube, ArrowRight, ArrowLeft, CheckCircle, ListChecks } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { TitleWrapper } from "./TitleWrapper";
import { useToast } from "@/hooks/use-toast";

interface VideoContentProps {
  section: CourseSection;
  onComplete: () => void;
  onPrevious: () => void;
  isFirstContent: boolean;
}

export const VideoContent = ({ section, onComplete, onPrevious, isFirstContent }: VideoContentProps) => {
  const [videoWatched, setVideoWatched] = useState(false);
  const [showKeyPoints, setShowKeyPoints] = useState(false);
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

  const handleContinue = () => {
    onComplete();
  };

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
        
        {!showKeyPoints ? (
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
        ) : (
          <div className="flex-grow p-4 overflow-y-auto">
            <div className="bg-purple-900/30 rounded-lg p-4 mb-4 border border-purple-500/30">
              <h3 className="text-xl font-semibold text-purple-100 flex items-center mb-3">
                <ListChecks className="h-5 w-5 mr-2 text-purple-300" />
                Key Points to Remember
              </h3>
              <ul className="space-y-3">
                {section.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{point}</span>
                  </li>
                ))}
              </ul>
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
            {!showKeyPoints ? (
              <Button 
                onClick={handleVideoComplete}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
              >
                Complete Video <CheckCircle className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button 
                onClick={handleContinue}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
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
