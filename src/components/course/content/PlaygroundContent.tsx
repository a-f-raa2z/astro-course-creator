
import React, { useState, useEffect } from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Gamepad2, ArrowRight, ArrowLeft, ChevronRight, ChevronLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { TitleWrapper } from "./TitleWrapper";

interface PlaygroundContentProps {
  section: CourseSection;
  onComplete: () => void;
  onPrevious: () => void;
  isFirstContent: boolean;
}

export const PlaygroundContent = ({ section, onComplete, onPrevious, isFirstContent }: PlaygroundContentProps) => {
  const [interactiveIndex, setInteractiveIndex] = useState(0);
  
  const getInteractives = () => {
    // Moon section special case
    if (section.title === "The Moon" || section.title === "The Moon in Our Skies") {
      return [
        {
          url: "https://spaceplace.nasa.gov/eclipses/en/",
          title: "Eclipse Interactive",
          description: "Explore how eclipses happen and learn about the different types of solar and lunar eclipses."
        },
        {
          url: "https://eyes.nasa.gov/apps/eclipse2017/",
          title: "NASA Eclipse Explorer",
          description: "Use this NASA interactive tool to explore the 2017 solar eclipse and understand how eclipses work."
        }
      ];
    }
    
    const interactives = [];
    
    if (section.visualUrl) {
      interactives.push({
        url: section.visualUrl,
        title: "Interactive Playground",
        description: getInteractiveDescription(section.title, 0)
      });
    }
    
    if (section.interactiveUrl2) {
      interactives.push({
        url: section.interactiveUrl2,
        title: "Interactive Playground 2",
        description: getInteractiveDescription(section.title, 1)
      });
    }
    
    return interactives;
  };
  
  const interactives = getInteractives();
  const currentInteractiveUrl = interactives[interactiveIndex]?.url || "";
  
  const getInteractiveDescription = (sectionTitle: string, index: number) => {
    if (sectionTitle === "The Moon") {
      if (index === 0) {
        return "Explore how eclipses happen and learn about the different types of solar and lunar eclipses.";
      } else {
        return "Use this NASA interactive tool to explore the 2017 solar eclipse and understand how eclipses work.";
      }
    }

    return index === 0
      ? `Interact with this ${sectionTitle} simulation to deepen your understanding.`
      : `Explore additional ${sectionTitle} concepts with this interactive resource.`;
  };

  const handleContinue = () => {
    if (interactiveIndex < interactives.length - 1) {
      setInteractiveIndex(interactiveIndex + 1);
    } else {
      onComplete();
    }
  };
  
  const handlePreviousInteractive = () => {
    if (interactiveIndex > 0) {
      setInteractiveIndex(interactiveIndex - 1);
    }
  };

  const hasMultipleInteractives = interactives.length > 1;
  
  return (
    <div className="w-full h-full">
      <Card className="w-full h-full overflow-hidden flex flex-col bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
        <div className="p-4">
          {/* Navigation buttons row - placed between tabs and title */}
          <div className="flex justify-between items-center mb-4">
            <div>
              {!isFirstContent && (
                <Button 
                  onClick={onPrevious}
                  variant="outline"
                  size="sm"
                  className="border-purple-500/30 text-purple-300 hover:bg-purple-900/30"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" /> Previous
                </Button>
              )}
            </div>
            
            <div>
              <Button 
                onClick={handleContinue}
                size="sm"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
              >
                {interactiveIndex < interactives.length - 1 ? 'Next Interactive' : 'Continue'} <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="flex items-center mb-4">
            <TitleWrapper 
              icon={<Gamepad2 className="h-5 w-5 text-green-400 mr-2" />}
              title={interactives[interactiveIndex]?.title || "Interactive Playground"}
              color="bg-green-900/30"
            />
          </div>
          
          <p className="text-lg text-transparent bg-gradient-to-r from-green-300 to-green-100 bg-clip-text font-medium mb-4 px-1">
            {interactives[interactiveIndex]?.description || "Interact with this simulation to deepen your understanding."}
          </p>
        </div>
        
        <div className="flex-grow relative">
          <AspectRatio ratio={16/9} className="h-full">
            <iframe 
              className="w-full h-full"
              src={currentInteractiveUrl}
              title={`Interactive for ${section.title}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </AspectRatio>
          
          {hasMultipleInteractives && (
            <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2 pointer-events-none">
              {interactiveIndex > 0 && (
                <Button 
                  onClick={handlePreviousInteractive} 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full bg-black/30 border-white/20 hover:bg-black/50 pointer-events-auto"
                  aria-label="Previous interactive"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </Button>
              )}
              
              {interactiveIndex < interactives.length - 1 && (
                <div className="ml-auto">
                  <Button 
                    onClick={() => setInteractiveIndex(interactiveIndex + 1)} 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full bg-black/30 border-white/20 hover:bg-black/50 pointer-events-auto"
                    aria-label="Next interactive"
                  >
                    <ChevronRight className="h-6 w-6 text-white" />
                  </Button>
                </div>
              )}
            </div>
          )}
          
          {hasMultipleInteractives && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {interactives.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === interactiveIndex ? "bg-white scale-125" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
