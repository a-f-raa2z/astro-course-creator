
import React from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Gamepad2, ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { TitleWrapper } from "./TitleWrapper";

interface PlaygroundContentProps {
  section: CourseSection;
  onComplete: () => void;
  onPrevious: () => void;
  isFirstContent: boolean;
}

export const PlaygroundContent = ({ section, onComplete, onPrevious, isFirstContent }: PlaygroundContentProps) => {
  // Get the appropriate interactive content based on section title
  const getInteractiveContent = (sectionTitle: string) => {
    if (sectionTitle === "Earth") {
      return {
        title: "Interactive Earth Map",
        description: "Test your knowledge of Earth's geography with this interactive world map game.",
        url: "https://world-geography-games.com/en/world_earth.html"
      };
    }
    
    if (sectionTitle === "The Moon") {
      return {
        title: "NASA's Moon Viewer",
        description: "Explore the Moon in 3D with NASA's interactive viewer.",
        url: "https://eyes.nasa.gov/apps/solar-system/#/earth/moons/moon"
      };
    }
    
    // Default content (shouldn't reach here)
    return {
      title: "Interactive Content",
      description: "Explore through interactive content",
      url: "https://science.nasa.gov/solar-system/"
    };
  };
  
  const content = getInteractiveContent(section.title);

  return (
    <div className="w-full h-full flex flex-col">
      <Card className="w-full h-full overflow-hidden flex flex-col bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
        <div className="p-4">
          <TitleWrapper 
            icon={<Gamepad2 className="h-5 w-5 text-green-400 mr-2" />}
            title="Interactive Playground" 
            color="bg-green-900/30"
          />
          <p className="text-lg text-transparent bg-gradient-to-r from-green-300 to-green-100 bg-clip-text font-medium mb-4 px-1">
            {content.description}
          </p>
        </div>
        
        <div className="flex-grow relative">
          <iframe 
            src={content.url}
            title={content.title}
            className="w-full h-full border-0"
            allowFullScreen
          />
          
          <div className="absolute top-3 right-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-black/30 border border-white/30 text-white"
              onClick={() => window.open(content.url, '_blank')}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Open in New Tab
            </Button>
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
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
            >
              Continue <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
