
import React, { useState, useEffect } from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Youtube, ArrowRight, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { TitleWrapper } from "./TitleWrapper";

interface BonusContentProps {
  section: CourseSection;
  onComplete: () => void;
  onPrevious: () => void;
  isFirstContent: boolean;
}

export const BonusVideoContent = ({ section, onComplete, onPrevious, isFirstContent }: BonusContentProps) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Define the getBonusContent function before using it
  const getBonusContent = () => {
    if (section.title === "Mercury") {
      return [
        {
          url: "https://www.youtube.com/embed/rsa92VNVY7A",
          title: "Mercury's Orbit",
          description: "Learn about Mercury's unusual orbit around the Sun and its implications."
        },
        {
          url: "https://www.youtube.com/embed/9T8lLtlZ8Xs",
          title: "Mercury's Composition",
          description: "Explore the internal structure and composition of Mercury."
        },
        {
          url: "https://www.youtube.com/embed/31HAFceuvb0",
          title: "Mercury's Surface Features",
          description: "Take a close look at Mercury's cratered surface and unique geological features."
        },
        {
          url: "https://www.youtube.com/embed/B588JHKSlEE",
          title: "Mercury's Exploration History",
          description: "The history of missions to Mercury and what we've learned from them."
        }
      ];
    }
    
    // Add Roving over Mars bonus content
    if (section.title === "Roving over Mars") {
      return [
        {
          url: "https://www.youtube.com/embed/T4UKr7W-YC8",
          title: "Curiosity's Journey",
          description: "Follow the Curiosity rover's journey across the Martian landscape."
        },
        {
          url: "https://www.youtube.com/embed/WNrTttvdIMc",
          title: "Opportunity & Spirit",
          description: "The remarkable story of NASA's long-lived Mars Exploration Rovers."
        },
        {
          url: "https://www.youtube.com/embed/CIaHiGbFybQ",
          title: "Mars Rover Discoveries",
          description: "Key scientific discoveries made by rovers on the Red Planet."
        },
        {
          url: "https://www.youtube.com/embed/3wwcN__g3kM",
          title: "Endurance Crater",
          description: "Exploring Endurance Crater, one of the most significant sites visited by a Mars rover."
        },
        {
          url: "https://www.youtube.com/embed/mfi7-12z_nE",
          title: "Victoria Crater",
          description: "Victoria Crater and its importance in Mars exploration."
        }
      ];
    }
    
    // Add Close to the Sun bonus content
    if (section.title === "Close to the Sun") {
      return [
        {
          url: "https://www.youtube.com/embed/_OQzGKJkQEE",
          title: "Parker Solar Probe",
          description: "Learn about NASA's mission to 'touch' the Sun with the Parker Solar Probe."
        },
        {
          url: "https://www.youtube.com/embed/W_cLSvP9qSU",
          title: "Solar Flares",
          description: "Understand the powerful solar flares and their impact on Earth."
        },
        {
          url: "https://www.youtube.com/embed/48_qGtI08i8",
          title: "Solar Storm Dangers",
          description: "Discover the potential dangers of solar storms to our technology and planet."
        },
        {
          url: "https://www.youtube.com/embed/D56oR9-J5wE",
          title: "The Sun's Layers",
          description: "Explore the different layers of our Sun and their unique properties."
        },
        {
          url: "https://www.youtube.com/embed/SLmWY_ycFUA",
          title: "Solar Dynamics Observatory",
          description: "See how NASA's Solar Dynamics Observatory studies the Sun."
        }
      ];
    }
    
    if (section.bonusVideos && section.bonusVideos.length > 0) {
      return section.bonusVideos.map((url, index) => ({
        url: url,
        title: `Bonus Video ${index + 1}`,
        description: `Additional insights into ${section.title}`
      }));
    }
    
    if (section.bonusContent2 && section.bonusContent2.length > 0) {
      return section.bonusContent2.map((url, index) => ({
        url: url,
        title: `Bonus Content ${index + 1}`,
        description: `Additional insights into ${section.title}`
      }));
    }
    
    return [];
  };

  const bonusContent = getBonusContent();
  const hasBonusContent = bonusContent && bonusContent.length > 0;

  useEffect(() => {
    setCurrentVideoIndex(0);
  }, [section]);

  const handleNextVideo = () => {
    if (currentVideoIndex < bonusContent.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      onComplete();
    }
  };

  const handlePreviousVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    } else {
      onPrevious();
    }
  };

  if (!hasBonusContent) {
    return (
      <div className="w-full h-full flex items-center justify-center text-white">
        No bonus content available for this section.
      </div>
    );
  }

  const currentVideo = bonusContent[currentVideoIndex];

  return (
    <div className="w-full h-full flex flex-col">
      <Card className="w-full h-full overflow-hidden flex flex-col bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              {!isFirstContent && (
                <Button
                  onClick={handlePreviousVideo}
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
                onClick={handleNextVideo}
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
              >
                {currentVideoIndex === bonusContent.length - 1 ? "Complete" : "Next Bonus"} <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>

          <div className="flex items-center mb-4">
            <TitleWrapper
              icon={<Youtube className="h-5 w-5 text-red-500 mr-2" />}
              title={currentVideo.title || "Bonus Content"}
              color="bg-red-900/30"
            />
          </div>

          <p className="text-lg text-transparent bg-gradient-to-r from-red-300 to-red-100 bg-clip-text font-medium mb-4 px-1">
            {currentVideo.description || "Explore this bonus content to deepen your understanding."}
          </p>
        </div>

        <div className="flex-grow relative">
          <AspectRatio ratio={16 / 9} className="h-full">
            <iframe
              className="w-full h-full"
              src={currentVideo.url}
              title={currentVideo.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </AspectRatio>
        </div>
      </Card>
    </div>
  );
};
