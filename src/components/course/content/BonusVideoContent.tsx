
import React, { useState } from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, ArrowLeft, ChevronRight, ChevronLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { TitleWrapper } from "./TitleWrapper";

interface BonusVideoContentProps {
  section: CourseSection;
  onComplete: () => void;
  onPrevious: () => void;
  isFirstContent: boolean;
}

export const BonusVideoContent = ({ section, onComplete, onPrevious, isFirstContent }: BonusVideoContentProps) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [bonusSetIndex, setBonusSetIndex] = useState(0); // 0 for main bonus, 1 for bonus2
  
  // Get all bonus videos for this section
  const getBonusVideos = () => {
    // First set of bonus videos
    if (bonusSetIndex === 0 && section.bonusVideos && section.bonusVideos.length > 0) {
      // Earth's bonus content descriptions
      if (section.title === "Earth") {
        return [
          { 
            url: section.bonusVideos[0], 
            title: "Earth From Space Playlist",
            description: "Amazing views of our planet from orbit, showing Earth's beauty and fragility."
          },
          { 
            url: section.bonusVideos[1] || section.bonusVideos[0], 
            title: "Earth's Systems",
            description: "Explore how Earth's systems interact to create our unique living world."
          }
        ];
      }
      
      if (section.title === "The Moon") {
        return [
          { 
            url: section.bonusVideos[0], 
            title: "PBS Moon Documentary",
            description: "An in-depth look at Earth's closest neighbor and how it formed."
          },
          { 
            url: section.bonusVideos[1] || section.bonusVideos[0], 
            title: "NASA Moon Missions",
            description: "History and future of human and robotic exploration of the Moon."
          }
        ];
      }
      
      // Generic descriptions for other sections
      return section.bonusVideos.map((url, idx) => ({
        url,
        title: `Bonus Content ${idx + 1}`,
        description: `Additional learning material about ${section.title} to expand your knowledge.`
      }));
    }
    
    // Second set of bonus videos
    if (bonusSetIndex === 1 && section.bonusContent2 && section.bonusContent2.length > 0) {
      if (section.title === "The Moon") {
        return [
          { 
            url: section.bonusContent2[0], 
            title: "Moon Facts",
            description: "A quick video about interesting moon facts that might surprise you."
          }
        ];
      }
      
      return section.bonusContent2.map((url, idx) => ({
        url,
        title: `Additional Bonus ${idx + 1}`,
        description: `More fascinating content about ${section.title} for advanced learning.`
      }));
    }
    
    // Default fallback
    return [
      { 
        url: "https://www.youtube.com/embed/lcZTcfdZ3Ow", 
        title: "Family night bonus video",
        description: "Ready for a family movie night exploring our cosmic neighborhood? This PBS documentary is perfect!"
      }
    ];
  };
  
  const bonusVideos = getBonusVideos();
  
  const nextVideo = () => {
    if (bonusVideos.length > 1) {
      setCurrentVideoIndex((prev) => (prev + 1) % bonusVideos.length);
    }
  };

  const prevVideo = () => {
    if (bonusVideos.length > 1) {
      setCurrentVideoIndex((prev) => (prev === 0 ? bonusVideos.length - 1 : prev - 1));
    }
  };
  
  const hasAdditionalBonusContent = Boolean(section.bonusContent2 && section.bonusContent2.length > 0);

  const showNavigation = bonusVideos.length > 1;

  return (
    <div className="w-full h-full flex flex-col">
      <Card className="w-full h-full overflow-hidden flex flex-col bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
        <div className="p-4">
          <TitleWrapper 
            icon={<Star className="h-5 w-5 text-yellow-400 mr-2" />}
            title={`Bonus Content ${hasAdditionalBonusContent ? (bonusSetIndex + 1) : ''}`}
            color="bg-orange-900/30"
          />
          <p className="text-lg text-transparent bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text font-medium mb-4 px-1">
            {bonusVideos[currentVideoIndex].description}
          </p>
        </div>
        
        <div className="flex-grow relative">
          <AspectRatio ratio={16/9} className="h-full">
            <iframe 
              className="w-full h-full"
              src={bonusVideos[currentVideoIndex].url}
              title={bonusVideos[currentVideoIndex].title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </AspectRatio>
          
          {showNavigation && (
            <>
              {/* Video navigation controls */}
              <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2 pointer-events-none">
                <Button 
                  onClick={prevVideo} 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full bg-black/30 border-white/20 hover:bg-black/50 pointer-events-auto"
                  aria-label="Previous video"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </Button>
                
                <Button 
                  onClick={nextVideo} 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full bg-black/30 border-white/20 hover:bg-black/50 pointer-events-auto"
                  aria-label="Next video"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </Button>
              </div>

              {/* Indicator dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {bonusVideos.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentVideoIndex ? "bg-white scale-125" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-5">
            <h3 className="text-xl font-semibold text-white">{bonusVideos[currentVideoIndex].title}</h3>
            <p className="text-white/80 text-sm mt-1">Expand your knowledge with this curated content!</p>
          </div>
        </div>
        
        <div className="p-4 flex justify-between">
          {bonusSetIndex === 0 ? (
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
              onClick={() => {
                setBonusSetIndex(0);
                setCurrentVideoIndex(0);
              }}
              variant="outline"
              className="border-purple-500/30 text-purple-300 hover:bg-purple-900/30"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Bonus Set 1
            </Button>
          )}
          
          <div className={(!isFirstContent || bonusSetIndex > 0) ? "" : "ml-auto"}>
            <Button 
              onClick={() => {
                if (hasAdditionalBonusContent && bonusSetIndex === 0) {
                  setBonusSetIndex(1);
                  setCurrentVideoIndex(0);
                } else {
                  onComplete();
                }
              }}
              className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800"
            >
              {hasAdditionalBonusContent && bonusSetIndex === 0 
                ? 'More Bonus Content' 
                : 'Continue'} <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
