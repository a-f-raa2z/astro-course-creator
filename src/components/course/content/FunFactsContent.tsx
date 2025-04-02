import React, { useState } from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, ArrowLeft, ChevronRight, ChevronLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { TitleWrapper } from "./TitleWrapper";

interface FunFactsContentProps {
  section: CourseSection;
  onComplete: () => void;
  onPrevious: () => void;
  isFirstContent: boolean;
}

interface FunFactVideo {
  url: string;
  title: string;
  description: string;
  isTikTok?: boolean;
}

export const FunFactsContent = ({ section, onComplete, onPrevious, isFirstContent }: FunFactsContentProps) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  const getFunFactsVideos = (): FunFactVideo[] => {
    if (section.title === "The Solar System") {
      return [
        {
          url: "https://www.youtube.com/embed/lzsf1-vMUdY",
          title: "Solar System Fun Fact 1",
          description: "Interesting facts about our Solar System."
        },
        {
          url: "https://www.youtube.com/embed/HDSKuln-5qU",
          title: "Solar System Fun Fact 2",
          description: "More fascinating facts about our Solar System."
        }
      ];
    }
    
    if (section.title === "Mapping the Moon") {
      return [
        { 
          url: "https://www.youtube.com/embed/rVMvzH1FxfE", 
          title: "Moon Mapping Fun Fact 1",
          description: "Learn interesting facts about the features and mapping of the lunar surface."
        },
        {
          url: "https://www.youtube.com/embed/_fCQQybyiWM",
          title: "Moon Mapping Fun Fact 2",
          description: "Discover more fascinating facts about our lunar neighbor."
        }
      ];
    }
    
    if (section.title === "The Moon" || section.title === "The Moon in Our Skies" || section.title === "The Moon's Unseen Face") {
      if (section.funFacts && section.funFacts.length > 0) {
        return section.funFacts.map((url, idx) => ({
          url,
          title: `Moon Fun Fact ${idx + 1}`,
          description: "Interesting facts about our lunar companion."
        }));
      }
      
      return [
        {
          url: "https://www.youtube.com/embed/rVMvzH1FxfE",
          title: "Moon Fun Fact 1",
          description: "Interesting facts about our lunar companion."
        },
        {
          url: "https://www.youtube.com/embed/fTok7usLXb4",
          title: "Moon Fun Fact 2",
          description: "More fascinating facts about the Moon and its influence on Earth."
        }
      ];
    }
    
    if (section.funFacts && section.funFacts.length > 0) {
      return section.funFacts.map((url, idx) => ({
        url,
        title: `Fun Fact ${idx + 1}`,
        description: `A quick interesting fact about ${section.title}`
      }));
    }

    if (section.funFacts2 && section.funFacts2.length > 0) {
      return section.funFacts2.map((url, idx) => ({
        url,
        title: `Fun Fact ${idx + 1}`,
        description: `A quick interesting fact about ${section.title}`
      }));
    }
    
    return [
      { 
        url: "https://www.youtube.com/embed/rVMvzH1FxfE", 
        title: "Fun Fact 1",
        description: "Did you know these fascinating facts about space and astronomy?"
      },
      {
        url: "https://www.youtube.com/embed/fTok7usLXb4",
        title: "Fun Fact 2",
        description: "More incredible facts about our universe and beyond."
      }
    ];
  };
  
  const getAllFunFactsVideos = (): FunFactVideo[] => {
    const videos = getFunFactsVideos();
    
    return videos.map(video => {
      let url = video.url;
      
      if (url.includes('tiktok.com')) {
        return {
          ...video,
          isTikTok: true
        };
      }
      
      return video;
    });
  };
  
  const funFactsVideos = getAllFunFactsVideos();
  
  const nextVideo = () => {
    if (funFactsVideos.length > 1) {
      setCurrentVideoIndex((prev) => (prev + 1) % funFactsVideos.length);
    }
  };

  const prevVideo = () => {
    if (funFactsVideos.length > 1) {
      setCurrentVideoIndex((prev) => (prev === 0 ? funFactsVideos.length - 1 : prev - 1));
    }
  };

  const showNavigation = funFactsVideos.length > 1;
  const currentVideo = funFactsVideos[currentVideoIndex];
  const isTikTok = currentVideo && currentVideo.isTikTok === true;

  return (
    <div className="w-full h-full flex flex-col">
      <Card className="w-full h-full overflow-hidden flex flex-col bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
        <div className="p-4">
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
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              >
                Continue <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="flex items-center mb-4">
            <TitleWrapper 
              icon={<Zap className="h-5 w-5 text-blue-400 mr-2" />}
              title="Fun Facts" 
              color="bg-blue-900/30"
            />
          </div>
          
          <p className="text-lg text-transparent bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text font-medium mb-4 px-1">
            Check out these interesting quick facts about the {section.title}!
          </p>
        </div>
        
        <div className="flex-grow relative">
          {isTikTok ? (
            <div className="flex items-center justify-center h-full flex-col p-6 text-center">
              <img 
                src="/lovable-uploads/fb49e844-5050-4fb0-9560-fd65c5e4dad5.png" 
                alt="TikTok Logo" 
                className="w-24 h-24 mb-4"
              />
              <h3 className="text-2xl font-bold text-white mb-2">{currentVideo.title}</h3>
              <p className="text-lg text-gray-300 mb-6">{currentVideo.description}</p>
              <div className="bg-black/30 p-4 rounded-lg max-w-md">
                <p className="text-white mb-4">TikTok content needs to be viewed directly on TikTok's website due to embedding restrictions.</p>
                <a
                  href={currentVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-[#fe2c55] text-white font-semibold rounded-md hover:bg-opacity-90 transition-all"
                >
                  Watch on TikTok
                </a>
              </div>
            </div>
          ) : (
            <AspectRatio ratio={16/9} className="h-full">
              <iframe 
                className="w-full h-full"
                src={currentVideo.url}
                title={currentVideo.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </AspectRatio>
          )}
          
          {showNavigation && (
            <>
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

              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {funFactsVideos.map((_, idx) => (
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
        </div>
      </Card>
    </div>
  );
};
