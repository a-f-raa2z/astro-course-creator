
import React, { useState } from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Youtube, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { TitleWrapper } from "./TitleWrapper";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface VideoContentProps {
  section: CourseSection;
  onComplete: () => void;
}

export const VideoContent = ({ section, onComplete }: VideoContentProps) => {
  const [videoProgress, setVideoProgress] = useState(0);
  const [showContinue, setShowContinue] = useState(false);
  const { toast } = useToast();
  
  const handleVideoProgress = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newProgress = Math.min(100, Math.max(0, (offsetX / rect.width) * 100));
    
    setVideoProgress(newProgress);
    
    if (newProgress >= 95 && !showContinue) {
      setShowContinue(true);
      toast({
        title: "Video Completed!",
        description: "Great job! You can now continue to the next section."
      });
    }
  };
  
  return (
    <div className="w-full h-full flex flex-col">
      <Card className="w-full h-full overflow-hidden flex flex-col bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
        <div className="p-4">
          <TitleWrapper 
            icon={<Youtube className="h-5 w-5 text-red-500 mr-2" />}
            title="Main Lesson" 
            color="bg-red-900/30"
          />
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
        
        <div className="p-4">
          <p className="text-sm text-purple-300 mb-2">
            Drag to complete the video:
          </p>
          
          <div 
            className="h-4 bg-gray-800 rounded-full overflow-hidden cursor-pointer"
            onClick={handleVideoProgress}
          >
            <div 
              className="h-full bg-gradient-to-r from-purple-600 to-purple-500 rounded-full transition-all"
              style={{ width: `${videoProgress}%` }}
            ></div>
          </div>
          
          {showContinue && (
            <div className="flex justify-end mt-4">
              <Button 
                onClick={onComplete}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 animate-fade-in"
              >
                Continue <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
