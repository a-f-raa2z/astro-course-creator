
import React from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Youtube, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { TitleWrapper } from "./TitleWrapper";

interface VideoContentProps {
  section: CourseSection;
  onComplete: () => void;
}

export const VideoContent = ({ section, onComplete }: VideoContentProps) => {
  return (
    <div className="w-full h-full flex flex-col">
      <Card className="w-full h-full overflow-hidden flex flex-col bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
        <div className="p-4">
          <TitleWrapper 
            icon={<Youtube className="h-5 w-5 text-red-500 mr-2" />}
            title="Main Video Lesson" 
            color="bg-red-900/30"
          />
          <p className="text-sm text-gray-300 ml-1 mb-4">
            Watch this detailed explanation to master the core concepts of this section.
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
        
        <div className="p-4 flex justify-end">
          <Button 
            onClick={onComplete}
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
          >
            Continue <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </Card>
    </div>
  );
};
