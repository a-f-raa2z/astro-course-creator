
import React, { useState } from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Image, ArrowRight, SlidersHorizontal } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { TitleWrapper } from "./TitleWrapper";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ImageContentProps {
  section: CourseSection;
  onComplete: () => void;
}

export const ImageContent = ({ section, onComplete }: ImageContentProps) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [showContinue, setShowContinue] = useState(false);
  const { toast } = useToast();
  
  const images = [
    { url: section.image.url, description: section.image.description },
    { url: section.image.url, description: "Additional perspective on the concept" },
    { url: section.image.url, description: "Final example to reinforce learning" }
  ];
  
  const handleSlide = () => {
    const nextIndex = (slideIndex + 1) % images.length;
    setSlideIndex(nextIndex);
    
    if (nextIndex === images.length - 1) {
      setShowContinue(true);
      toast({
        title: "All Images Viewed!",
        description: "You've seen all the visual examples."
      });
    }
  };
  
  return (
    <div className="w-full">
      <AspectRatio ratio={1}>
        <Card className="w-full h-full overflow-hidden flex flex-col bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
          <div className="p-4">
            <TitleWrapper 
              icon={<Image className="h-5 w-5 text-yellow-400 mr-2" />}
              title="Visual Example" 
              color="bg-yellow-900/30"
            />
          </div>
          
          <div className="flex-grow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full transition-opacity duration-500 opacity-100">
              <img 
                src={images[slideIndex].url} 
                alt={images[slideIndex].description} 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-sm text-white">{images[slideIndex].description}</p>
              
              <div className="flex justify-between items-center mt-2">
                <div className="flex space-x-1">
                  {images.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`w-2 h-2 rounded-full ${
                        idx === slideIndex ? "bg-yellow-400" : "bg-gray-600"
                      }`}
                    ></div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-white border-white/30"
                  onClick={handleSlide}
                >
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  {slideIndex < images.length - 1 ? "Next Image" : "Start Over"}
                </Button>
              </div>
            </div>
          </div>
          
          <div className="p-4">
            {showContinue && (
              <div className="flex justify-end">
                <Button 
                  onClick={onComplete}
                  className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 animate-fade-in text-white"
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
