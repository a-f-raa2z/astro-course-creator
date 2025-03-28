
import React, { useState } from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Video, ArrowRight, ArrowLeft, ChevronRight, ChevronLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { TitleWrapper } from "./TitleWrapper";

interface ShortVideoContentProps {
  section: CourseSection;
  onComplete: () => void;
  onPrevious: () => void;
  isFirstContent: boolean;
}

export const ShortVideoContent = ({ section, onComplete, onPrevious, isFirstContent }: ShortVideoContentProps) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  const videos = [
    { 
      url: "https://www.youtube.com/embed/shorts/lzsf1-vMUdY",
      title: "Amazing Solar System Facts"
    },
    { 
      url: "https://www.youtube.com/embed/shorts/HDSKuln-5qU",
      title: "More Fascinating Space Facts"
    }
  ];

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  return (
    <div className="w-full h-full flex flex-col">
      <Card className="w-full h-full overflow-hidden flex flex-col bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
        <div className="p-4">
          <TitleWrapper 
            icon={<Video className="h-5 w-5 text-blue-400 mr-2" />}
            title="Fun Facts" 
            color="bg-blue-900/30"
          />
          <p className="text-lg text-transparent bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text font-medium mb-4 px-1">
            Highlight hidden things and fascinating trivia about our solar system.
          </p>
        </div>
        
        <div className="flex-grow relative">
          <AspectRatio ratio={16/9} className="h-full">
            <iframe 
              className="w-full h-full"
              src={videos[currentVideoIndex].url}
              title={`Short video: ${videos[currentVideoIndex].title}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </AspectRatio>

          {/* Video navigation controls */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2 pointer-events-none">
            <Button 
              onClick={prevVideo} 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-black/30 border-white/20 hover:bg-black/50 pointer-events-auto"
              aria-label="Previous video"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </Button>
            
            <Button 
              onClick={nextVideo} 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-black/30 border-white/20 hover:bg-black/50 pointer-events-auto"
              aria-label="Next video"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </Button>
          </div>

          {/* Indicator dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {videos.map((_, idx) => (
              <div 
                key={idx} 
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentVideoIndex ? "bg-white scale-125" : "bg-white/50"
                }`}
              />
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
              onClick={onComplete}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            >
              Continue <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
