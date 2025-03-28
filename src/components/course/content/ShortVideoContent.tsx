
import React from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Video, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { TitleWrapper } from "./TitleWrapper";

interface ShortVideoContentProps {
  section: CourseSection;
  onComplete: () => void;
}

export const ShortVideoContent = ({ section, onComplete }: ShortVideoContentProps) => {
  return (
    <div className="w-full h-full flex flex-col">
      <Card className="w-full h-full overflow-hidden flex flex-col bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
        <div className="p-4">
          <TitleWrapper 
            icon={<Video className="h-5 w-5 text-blue-400 mr-2" />}
            title="Bonus Quick Lesson" 
            color="bg-blue-900/30"
          />
          <p className="text-sm text-gray-300 ml-1 mb-4">
            Get additional insights with this short supplementary video.
          </p>
        </div>
        
        <div className="flex-grow relative">
          <AspectRatio ratio={16/9} className="h-full">
            <iframe 
              className="w-full h-full"
              src={section.shortVideo}
              title={`Short video for ${section.title}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </AspectRatio>
        </div>
        
        <div className="p-4 flex justify-end">
          <Button 
            onClick={onComplete}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
          >
            Continue <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </Card>
    </div>
  );
};
