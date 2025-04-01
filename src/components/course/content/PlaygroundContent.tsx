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
  const [currentInteractiveUrl, setCurrentInteractiveUrl] = useState("");

  useEffect(() => {
    if (interactiveIndex === 0) {
      setCurrentInteractiveUrl(section.visualUrl || "");
    } else if (interactiveIndex === 1 && section.interactiveUrl2) {
      setCurrentInteractiveUrl(section.interactiveUrl2);
    }
  }, [interactiveIndex, section.visualUrl, section.interactiveUrl2]);

  const hasMultipleInteractives = Boolean(section.interactiveUrl2);

  const getInteractiveTitle = (index: number) => {
    if (index === 0) {
      return "Interactive Playground";
    } else {
      return "Interactive Playground 2";
    }
  };

  const getInteractiveDescription = (sectionTitle: string, index: number) => {
    if (sectionTitle === "The Moon") {
      if (index === 0) {
        return "Explore how eclipses happen and learn about the different types of solar and lunar eclipses.";
      } else {
        return "Use this NASA interactive tool to explore the 2017 solar eclipse and understand how eclipses work.";
      }
    }

    if (index === 0) {
      return `Interact with this ${sectionTitle} simulation to deepen your understanding.`;
    } else {
      return `Explore additional ${sectionTitle} concepts with this interactive resource.`;
    }
  };

  const handleContinue = () => {
    if (hasMultipleInteractives && interactiveIndex === 0) {
      setInteractiveIndex(1);
    } else {
      onComplete();
    }
  };

  const title = getInteractiveTitle(interactiveIndex);
  const description = getInteractiveDescription(section.title, interactiveIndex);

  return (
    <div className="w-full h-full">
      <Card className="w-full h-full overflow-hidden flex flex-col bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
        <div className="p-4">
          <TitleWrapper 
            icon={<Gamepad2 className="h-5 w-5 text-green-400 mr-2" />}
            title={title}
            color="bg-green-900/30"
          />
          <p className="text-lg text-transparent bg-gradient-to-r from-green-300 to-green-100 bg-clip-text font-medium mb-4 px-1">
            {description}
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
        </div>
        
        <div className="p-4 flex justify-between">
          {interactiveIndex === 0 ? (
            !isFirstContent && (
              <Button 
                onClick={onPrevious}
                variant="outline"
                className="border-purple-500/30 text-purple-300 hover:bg-purple-900/30"
              >
                <ArrowLeft className="h-4 w-4 mr-2" /> Previous
              </Button>
            )
          ) : (
            <Button 
              onClick={() => setInteractiveIndex(0)}
              variant="outline"
              className="border-purple-500/30 text-purple-300 hover:bg-purple-900/30"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Interactive 1
            </Button>
          )}
          
          <div className={(!isFirstContent || interactiveIndex > 0) ? "ml-auto" : "ml-auto"}>
            <Button 
              onClick={handleContinue}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
            >
              {hasMultipleInteractives && interactiveIndex === 0 ? 'Next Interactive' : 'Continue'} <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
