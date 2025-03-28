
import React, { useState } from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Youtube, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { TitleWrapper } from "./TitleWrapper";

interface VideoContentProps {
  section: CourseSection;
  onComplete: () => void;
  onPrevious: () => void;
  isFirstContent: boolean;
}

export const VideoContent = ({ section, onComplete, onPrevious, isFirstContent }: VideoContentProps) => {
  const [videoCompleted, setVideoCompleted] = useState(false);
  
  // Map section titles to specific video URLs
  const getVideoUrl = (sectionTitle: string) => {
    const videoMap: Record<string, string> = {
      "The Inner Planets": "https://www.youtube.com/embed/05E1uMh15QQ",
      "Earth": "https://www.youtube.com/embed/HCDVN7DCzYE",
      "The Moon": "https://www.youtube.com/embed/6AviDjR9mmo"
    };
    
    return videoMap[sectionTitle] || section.videoUrl;
  };
  
  // Get video description based on section title
  const getVideoDescription = (sectionTitle: string) => {
    const descriptionMap: Record<string, string> = {
      "The Inner Planets": "Explore Mercury, Venus, Earth, and Mars - the four terrestrial planets closest to the Sun.",
      "Earth": "Our home planet - the blue marble of the Solar System and the only known world with abundant liquid water.",
      "The Moon": "Earth's natural satellite and our closest celestial neighbor."
    };
    
    return descriptionMap[sectionTitle] || "A comprehensive overview of our cosmic neighborhood and the celestial bodies within it.";
  };
  
  const videoUrl = getVideoUrl(section.title);
  const videoDescription = getVideoDescription(section.title);

  const handleVideoComplete = () => {
    setVideoCompleted(true);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <Card className="w-full h-full overflow-hidden flex flex-col bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
        {!videoCompleted ? (
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
                  src={videoUrl}
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
        ) : (
          <div className="flex flex-col items-center justify-center p-8 h-full text-center">
            <div className="mb-6">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Video Completed!</h2>
              <p className="text-purple-200 mb-6">
                Great job! You've completed the main video for this section.
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
