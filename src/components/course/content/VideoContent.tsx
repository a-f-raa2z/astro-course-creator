
import React, { useState } from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Youtube, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
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
      description: "Great job! You've completed the main video for this section."
    });
    // Instead of showing the key points review, we'll just complete the video content
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
      </Card>
    </div>
  );
};
