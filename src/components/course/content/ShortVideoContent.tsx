
import React, { useState } from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Video, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { TitleWrapper } from "./TitleWrapper";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ShortVideoContentProps {
  section: CourseSection;
  onComplete: () => void;
}

export const ShortVideoContent = ({ section, onComplete }: ShortVideoContentProps) => {
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
        title: "Bonus Video Completed!",
        description: "Extra knowledge unlocked!"
      });
    }
  };
  
  return (
    <div className="w-full">
      <AspectRatio ratio={1}>
        <Card className="w-full h-full overflow-hidden flex flex-col bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
          <div className="p-4">
            <TitleWrapper 
              icon={<Video className="h-5 w-5 text-blue-400 mr-2" />}
              title="Additional Short Video" 
              color="bg-blue-900/30"
            />
          </div>
          
          <div className="flex-grow relative overflow-hidden">
            <iframe 
              className="w-full h-full"
              src={section.shortVideo}
              title={`Short video for ${section.title}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="p-4">
            <p className="text-sm text-blue-300 mb-2">
              Drag to complete the bonus video:
            </p>
            
            <div 
              className="h-4 bg-gray-800 rounded-full overflow-hidden cursor-pointer"
              onClick={handleVideoProgress}
            >
              <div 
                className="h-full bg-gradient-to-r from-blue-600 to-blue-500 rounded-full transition-all"
                style={{ width: `${videoProgress}%` }}
              ></div>
            </div>
            
            {showContinue && (
              <div className="flex justify-end mt-4">
                <Button 
                  onClick={onComplete}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 animate-fade-in"
                >
                  Continue <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            )}
          </div>
        </Card>
      </AspectRatio>
    </div>
  );
};
