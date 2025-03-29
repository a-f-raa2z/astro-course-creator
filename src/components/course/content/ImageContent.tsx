
import React, { useState } from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Image as ImageIcon, ArrowRight, ArrowLeft, Camera } from "lucide-react";
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
  const [imageCaptured, setImageCaptured] = useState(false);
  const { toast } = useToast();
  
  // Define images based on section title
  const getSectionImage = (sectionTitle: string) => {
    if (sectionTitle === "The Inner Planets") {
      return {
        url: "https://science.nasa.gov/wp-content/uploads/2023/11/pia25016.width-1320.jpg",
        description: "The four inner planets (Mercury, Venus, Earth, and Mars) are terrestrial (rocky) worlds." 
      };
    }
    
    if (sectionTitle === "Earth") {
      return {
        url: "https://science.nasa.gov/wp-content/uploads/2023/06/as17-148-22727-earth-full-disk-apollo-17-1972.width-1320.jpg", 
        description: "Earth, our home planet, is the only place we know of so far that's inhabited by living things." 
      };
    }
    
    if (sectionTitle === "The Moon") {
      return {
        url: "https://science.nasa.gov/wp-content/uploads/2023/09/moon.width-1320.jpg", 
        description: "The Moon is Earth's only natural satellite and the fifth largest moon in the solar system." 
      };
    }
    
    // Default image for any section without a specific image
    return {
      url: "https://science.nasa.gov/wp-content/uploads/2023/09/solar-system-illustration-new-horizons-trajectory.width-1320.jpg", 
      description: "Visual representation of " + sectionTitle + ". Capturing this image will help you remember the key concepts." 
    };
  };
  
  const sectionImage = getSectionImage(section.title);

  const handleCapture = () => {
    setImageCaptured(true);
    toast({
      title: "Image Captured!",
      description: "Great job! You've captured this visual example."
    });
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
            Explore visual representations of {section.title.toLowerCase()} to enhance your understanding.
          </p>
        </div>
        
        <div className="flex-grow relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full transition-opacity duration-500 opacity-100">
            <img 
              src={sectionImage.url} 
              alt={sectionImage.description} 
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Capture button positioned in the top-right corner */}
          <div className="absolute top-4 right-4 z-10">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleCapture}
              className="bg-yellow-600/80 hover:bg-yellow-700/90 border-yellow-500 text-white"
              disabled={imageCaptured}
            >
              <Camera className="h-4 w-4 mr-2" />
              {imageCaptured ? "Captured" : "Capture Image"}
            </Button>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <p className="text-sm text-white">{sectionImage.description}</p>
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
              className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 animate-fade-in text-white"
            >
              Continue <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
