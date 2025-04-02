
import React from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Gamepad2, ArrowRight, ArrowLeft } from "lucide-react";
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
  // Get playground title and description based on section
  const getPlaygroundInfo = () => {
    if (section.title === "The Moon" || section.title === "The Moon in Our Skies") {
      return {
        title: "Moon Phases Interactive",
        description: "Explore how the moon appears to change shape during the month."
      };
    }
    
    if (section.title === "Mapping the Moon") {
      return {
        title: "Daily Moon Guide",
        description: "See what the moon looks like today and explore its features."
      };
    }
    
    if (section.title === "Earth") {
      return {
        title: "World Geography Game",
        description: "Test your knowledge of Earth's geography with this interactive game."
      };
    }
    
    return {
      title: "Interactive Playground",
      description: "Explore this topic hands-on with this interactive tool."
    };
  };
  
  const { title, description } = getPlaygroundInfo();
  
  return (
    <div className="w-full h-full flex flex-col">
      <Card className="w-full h-full overflow-hidden flex flex-col bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
        <div className="p-4">
          {/* Navigation buttons row */}
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
                onClick={onComplete}
                size="sm"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
              >
                Continue <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="flex items-center mb-4">
            <TitleWrapper 
              icon={<Gamepad2 className="h-5 w-5 text-green-400 mr-2" />}
              title={title}
              color="bg-green-900/30"
            />
          </div>
          
          <p className="text-lg text-transparent bg-gradient-to-r from-green-300 to-green-100 bg-clip-text font-medium mb-4 px-1">
            {description || section.visualIntro || "Explore this topic with an interactive simulation."}
          </p>
        </div>
        
        <div className="flex-grow">
          <AspectRatio ratio={16/9} className="h-full">
            <iframe 
              className="w-full h-full"
              src={section.visualUrl || ""}
              title={`Interactive playground for ${section.title}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </AspectRatio>
        </div>
      </Card>
    </div>
  );
}
