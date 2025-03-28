
import React, { useState } from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Image as ImageIcon, ArrowRight, ArrowLeft, SlidersHorizontal } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { TitleWrapper } from "./TitleWrapper";

interface ImageContentProps {
  section: CourseSection;
  onComplete: () => void;
  onPrevious: () => void;
  isFirstContent: boolean;
}

export const ImageContent = ({ section, onComplete, onPrevious, isFirstContent }: ImageContentProps) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [showContinue, setShowContinue] = useState(false);
  const { toast } = useToast();
  
  const images = [
    { 
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Solar_System_true_color_%28captions%29.jpg/800px-Solar_System_true_color_%28captions%29.jpg", 
      description: "True color view of our solar system planets, showing their actual sizes and colors relative to each other." 
    },
    { 
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Solar_System_true_color_%28captions%29.jpg/800px-Solar_System_true_color_%28captions%29.jpg", 
      description: "Jupiter is the largest planet, more than 11 times Earth's diameter. Mercury is the smallest, just over 1/3 of Earth's size." 
    },
    { 
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Solar_System_true_color_%28captions%29.jpg/800px-Solar_System_true_color_%28captions%29.jpg", 
      description: "The gas giants (Jupiter, Saturn, Uranus, Neptune) are primarily composed of hydrogen and helium, unlike the rocky terrestrial planets." 
    }
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
    <div className="w-full h-full">
      <Card className="w-full h-full overflow-hidden flex flex-col bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
        <div className="p-4">
          <TitleWrapper 
            icon={<ImageIcon className="h-5 w-5 text-yellow-400 mr-2" />}
            title="Visual Guide" 
            color="bg-yellow-900/30"
          />
          <p className="text-lg text-transparent bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text font-medium mb-4 px-1">
            Explore the true colors and relative sizes of planets in our solar system.
          </p>
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
          
          {showContinue && (
            <div className={!isFirstContent ? "" : "ml-auto"}>
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
    </div>
  );
};
